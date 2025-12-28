# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-powered GitHub Pages personal website. The site features a three-column layout with Daily Reading links, a Weblog section, and a Links section.

## Project Structure

- **_config.yml**: Jekyll configuration file
- **_layouts/**: Jekyll layout templates
  - **default.html**: Base layout with site-wide styles and structure
  - **post.html**: Layout for individual blog posts
- **_posts/**: Blog posts in Markdown format (YYYY-MM-DD-title.md)
- **index.html**: Home page using Jekyll templating to display recent posts
- **css/ghost.min.css**: Legacy Ghost blogging platform CSS (not actively used)
- **lib/**: Legacy JavaScript modules from Ghost - not actively used
- **img/**: Static images including Ghost-related assets, touch icons, and placeholder images
- **fonts/**: Icon font files

## Development Commands

### Local Development with Jekyll
```bash
# Install Jekyll (first time only)
gem install bundler jekyll

# Serve the site locally
jekyll serve
# Then visit http://localhost:4000

# Or serve with live reload
jekyll serve --livereload
```

### Creating a New Blog Post
```bash
# Create a new post file in _posts/ with the naming convention: YYYY-MM-DD-title.md
# Example:
cat > _posts/2025-12-28-my-new-post.md << 'EOF'
---
layout: post
title: My New Post
date: 2025-12-28
---

Write your post content here in **Markdown**.

- You can use lists
- Links: [example](https://example.com)
- Code blocks, etc.
EOF
```

### Deployment
```bash
# Deploy changes to GitHub Pages
git add .
git commit -m "Your commit message"
git push origin master
```

The site will be automatically built by GitHub Pages Jekyll and published to https://skeptict.github.io/ within a few minutes.

## Architecture Notes

### Jekyll Implementation
- **Static site generator**: Jekyll processes Markdown posts into HTML
- **GitHub Pages native**: GitHub automatically builds Jekyll sites on push
- **Liquid templating**: Used in layouts and index.html for dynamic content
- **Markdown posts**: All blog posts are written in Markdown in `_posts/`
- **Automatic post listing**: Home page automatically shows latest 5 posts
- **Permalink structure**: Posts appear at `/posts/YYYY/MM/DD/title/`

### Layout System
- **default.html**: Contains all site-wide CSS and HTML structure
- **post.html**: Extends default layout, adds post-specific styling
- **index.html**: Uses default layout, loops through posts with Liquid tags

### Current Design
- Three-column layout: "Daily Reading" (news links), "Weblog" (blog posts), "Links" (misc links)
- Responsive design: stacks vertically at 768px and below
- Gradient background (purple to blue) with glassmorphic container
- Posts on home page show title (linked), date, and excerpt (30 words)

### Legacy Code
The `lib/` directory, `css/ghost.min.css`, and some `img/` assets are remnants from the Ghost blogging platform and are not used by the current Jekyll site. These can be safely removed if desired.

### Design System
- Font: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI')
- Primary gradient: #667eea to #764ba2
- Container: White with 95% opacity, backdrop blur, rounded corners
- Highlight gradient: #a8edea to #fed6e3

## Making Changes

### Adding Blog Posts
1. Create a new file in `_posts/` following the naming convention: `YYYY-MM-DD-title.md`
2. Add front matter (the YAML between `---` marks) with layout, title, and date
3. Write your content in Markdown below the front matter
4. Commit and push - GitHub Pages will automatically rebuild

### Modifying Layouts
- Edit `_layouts/default.html` for site-wide changes (header, footer, global styles)
- Edit `_layouts/post.html` for blog post page styling
- Edit `index.html` to change home page structure or post display

### Styling Changes
- All CSS is embedded in `_layouts/default.html` and `_layouts/post.html`
- Consistent styling is maintained through the layout inheritance system

### Testing Before Deployment
- Run `jekyll serve` locally to preview changes before pushing
- Jekyll will show build errors if there are syntax issues in front matter or Liquid tags
