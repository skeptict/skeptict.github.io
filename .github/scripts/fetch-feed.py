#!/usr/bin/env python3
import feedparser
import json
import re
from datetime import datetime

FEED_URL = 'https://nitter.net/drawthingsapp/rss'
OUTPUT_FILE = 'data/drawthings-feed.json'
MAX_POSTS = 3

def strip_html(text):
    """Remove HTML tags from text"""
    clean = re.compile('<.*?>')
    return re.sub(clean, '', text)

def parse_feed():
    """Fetch and parse the RSS feed"""
    print(f"Fetching feed from {FEED_URL}")

    try:
        feed = feedparser.parse(FEED_URL)

        if feed.bozo:
            print(f"Warning: Feed parsing had issues")

        posts = []
        for entry in feed.entries[:MAX_POSTS]:
            # Extract and clean the description/content
            description = entry.get('description', '') or entry.get('summary', '')
            clean_text = strip_html(description).strip()

            # Get the publication date
            pub_date = entry.get('published', entry.get('updated', ''))

            # Create post object
            post = {
                'title': entry.get('title', 'Untitled'),
                'link': entry.get('link', ''),
                'description': clean_text,
                'pubDate': pub_date,
                'date': datetime.now().isoformat() if not pub_date else pub_date
            }

            posts.append(post)

        # Create output data
        output = {
            'status': 'ok',
            'feed': {
                'title': feed.feed.get('title', 'DrawThings App'),
                'link': feed.feed.get('link', FEED_URL),
                'description': feed.feed.get('description', '')
            },
            'items': posts,
            'lastUpdated': datetime.now().isoformat()
        }

        # Write to JSON file
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            json.dump(output, f, ensure_ascii=False, indent=2)

        print(f"Successfully wrote {len(posts)} posts to {OUTPUT_FILE}")
        return True

    except Exception as e:
        print(f"Error fetching feed: {e}")

        # Write error state
        error_output = {
            'status': 'error',
            'message': str(e),
            'items': [],
            'lastUpdated': datetime.now().isoformat()
        }

        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            json.dump(error_output, f, ensure_ascii=False, indent=2)

        return False

if __name__ == '__main__':
    parse_feed()
