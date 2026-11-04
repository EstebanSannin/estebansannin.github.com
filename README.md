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

`src/content/blog/kitchen-sink.mdx` shows every text formatting feature, and
`src/content/blog/board-bring-up-notes.mdx` shows every media type. Both are drafts.

## Media

In `.mdx` posts, import components from `src/components/mdx/`:

| Component   | Use for                                                                  |
| ----------- | ------------------------------------------------------------------------ |
| `<Figure>`  | Optimized images with caption, `wide` layout and click-to-zoom           |
| `<Diagram>` | Inline SVGs (`import D from './d.svg'`) that follow the light/dark theme |
| `<Video>`   | MP4/WebM with controls, or `gif` for an autoplaying muted loop           |
| `<YouTube>` | Click-to-load embed via youtube-nocookie                                 |
| `<Callout>` | `note`, `tip` and `warning` boxes                                        |

Mermaid diagrams are plain ` ```mermaid ` code blocks, in `.md` or `.mdx`.

Images go in `src/assets/` (optimized at build time). Videos and GIFs go in `public/`.
To turn a screen recording into a small looping clip:

```sh
ffmpeg -i in.mov -vf "fps=30,scale=960:-2" -an -c:v libx264 -crf 26 -movflags +faststart out.mp4
```

## Layout

- `src/consts.ts`: site title, navigation, social links
- `src/styles/global.css`: design tokens (colors, fonts) and prose styles
- `src/layouts/`: page shell and post layout
- `src/about/`: About page text (`about.md`, plain Markdown) and experience timeline (`experience.ts`)
- `src/pages/`: routes (`/`, `/blog`, `/tags`, `/about`, `/now`, `/rss.xml`)
