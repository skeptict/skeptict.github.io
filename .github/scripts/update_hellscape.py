#!/usr/bin/env python3
"""
Update _data/hellscape.yml with fresh article links from GDELT.

For each metric with a `search_query` field, fetches 3 recent English-language
articles and replaces the `articles` list. Numerical values and source URLs
are left untouched — those are updated manually.

Usage: python .github/scripts/update_hellscape.py
"""

import sys
import time
from datetime import date

import requests
import yaml

YAML_PATH = "_data/hellscape.yml"
GDELT_URL = "https://api.gdeltproject.org/api/v2/doc/doc"
ARTICLES_PER_METRIC = 3
REQUEST_DELAY = 2  # seconds between GDELT calls

DOMAIN_NAMES = {
    "nytimes.com": "New York Times",
    "theguardian.com": "The Guardian",
    "bbc.com": "BBC",
    "bbc.co.uk": "BBC",
    "reuters.com": "Reuters",
    "apnews.com": "AP News",
    "economist.com": "The Economist",
    "washingtonpost.com": "Washington Post",
    "foreignpolicy.com": "Foreign Policy",
    "theatlantic.com": "The Atlantic",
    "wired.com": "Wired",
    "ft.com": "Financial Times",
    "aljazeera.com": "Al Jazeera",
    "politico.com": "Politico",
    "axios.com": "Axios",
    "npr.org": "NPR",
    "vox.com": "Vox",
    "nature.com": "Nature",
    "science.org": "Science",
    "unhcr.org": "UNHCR",
    "wfp.org": "WFP",
    "who.int": "WHO",
    "sipri.org": "SIPRI",
    "acleddata.com": "ACLED",
    "thebulletin.org": "Bulletin of Atomic Scientists",
}


def domain_to_name(domain):
    domain = domain.removeprefix("www.")
    return DOMAIN_NAMES.get(domain, domain)


def fetch_articles(query, n=ARTICLES_PER_METRIC):
    """Fetch recent English-language articles from GDELT for a query string."""
    params = {
        "query": query,
        "mode": "artlist",
        "maxrecords": n * 3,  # fetch extra to allow deduplication by domain
        "format": "json",
        "sourcelang": "english",
        "sort": "DateDesc",
    }
    try:
        resp = requests.get(GDELT_URL, params=params, timeout=20)
        resp.raise_for_status()
        raw = resp.json()
    except Exception as e:
        print(f"  GDELT request failed: {e}")
        return None

    results = []
    seen_domains = set()
    for article in raw.get("articles", []):
        domain = article.get("domain", "")
        domain_clean = domain.removeprefix("www.")
        if domain_clean in seen_domains:
            continue
        title = article.get("title", "").strip()
        url = article.get("url", "")
        if not title or not url:
            continue
        seen_domains.add(domain_clean)
        results.append({
            "title": title,
            "url": url,
            "publication": domain_to_name(domain),
        })
        if len(results) >= n:
            break

    return results if results else None


def main():
    with open(YAML_PATH, "r") as f:
        data = yaml.safe_load(f)

    updated = 0
    skipped = 0

    for pillar in data.get("pillars", []):
        for metric in pillar.get("metrics", []):
            query = metric.get("search_query")
            if not query:
                skipped += 1
                continue

            print(f"Fetching: {metric['label']}")
            articles = fetch_articles(query)

            if articles:
                metric["articles"] = articles
                updated += 1
                print(f"  Got {len(articles)} articles")
            else:
                print(f"  No results — keeping existing articles")

            time.sleep(REQUEST_DELAY)

    data["last_updated"] = date.today().isoformat()

    with open(YAML_PATH, "w") as f:
        yaml.dump(data, f, allow_unicode=True, default_flow_style=False, sort_keys=False)

    print(f"\nDone. Updated {updated} metrics, skipped {skipped}. last_updated → {data['last_updated']}")


if __name__ == "__main__":
    main()
