// Fetch and display DrawThings app posts from cached feed
(function() {
    const CACHED_FEED_URL = '/data/drawthings-feed.json';

    function stripHTML(html) {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Yesterday';
        if (diffDays < 7) return `${diffDays}d ago`;

        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }

    function truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength).trim() + '...';
    }

    function displayPosts(data) {
        const container = document.getElementById('drawthings-posts');

        if (!data || !data.items || data.items.length === 0) {
            container.innerHTML = '<p style="font-size: 0.85rem; color: #999;">No recent posts</p>';
            return;
        }

        let html = '';
        data.items.forEach(item => {
            const cleanText = stripHTML(item.description || item.content || '');
            const shortText = truncateText(cleanText, 120);
            const date = formatDate(item.pubDate);

            html += `
                <div class="feed-item" style="margin-bottom: 1.25rem; padding-bottom: 1.25rem; border-bottom: 1px solid #eee;">
                    <div style="font-size: 0.75rem; color: #999; margin-bottom: 0.3rem;">${date}</div>
                    <div style="font-size: 0.9rem; line-height: 1.5; margin-bottom: 0.5rem;">${shortText}</div>
                    <a href="${item.link}" target="_blank" style="font-size: 0.8rem; color: #000; border-bottom: 1px solid #000; text-decoration: none;">View post →</a>
                </div>
            `;
        });

        // Remove border from last item
        html = html.replace(/border-bottom: 1px solid #eee;(?![\s\S]*border-bottom)/, '');

        container.innerHTML = html;
    }

    function loadFeed() {
        fetch(CACHED_FEED_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Feed not found');
                }
                return response.json();
            })
            .then(data => {
                if (data.status === 'ok') {
                    displayPosts(data);
                } else {
                    throw new Error('Feed load failed');
                }
            })
            .catch(error => {
                console.error('Error loading DrawThings feed:', error);
                const container = document.getElementById('drawthings-posts');
                container.innerHTML = '<a href="https://nitter.net/drawthingsapp" target="_blank" style="font-size: 0.85rem; color: #000; border-bottom: 1px solid #000; text-decoration: none;">View on Nitter →</a>';
            });
    }

    // Load feed when page loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadFeed);
    } else {
        loadFeed();
    }
})();
