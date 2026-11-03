# estebansannin.github.io

Personal blog, built with [Astro](https://astro.build) and deployed to GitHub Pages.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
```

## Writing

Add a Markdown or MDX file to `src/content/blog/`:

```md
---
title: My post
description: One-line summary used in lists, RSS and meta tags.
pubDate: 2026-11-03
tags: [embedded-linux, management]
draft: true   # visible only in `npm run dev`
---
```

`src/content/blog/kitchen-sink.mdx` shows every supported formatting feature.

## Layout

- `src/consts.ts`: site title, navigation, social links
- `src/styles/global.css`: design tokens (colors, fonts) and prose styles
- `src/layouts/`: page shell and post layout
- `src/pages/`: routes (`/`, `/blog`, `/tags`, `/about`, `/now`, `/rss.xml`)
