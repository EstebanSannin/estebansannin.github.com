---
title: Hello again, world
description: Fifteen years after the last update, this site gets a reboot.
pubDate: 2026-11-03
tags: [meta, management]
---

The previous version of this site was a three-column template from 2009, a handful of Firefox
extensions and a promise to host it on a home router. It's time for a reboot.

## What to expect

I'll write about the things I spend my days on:

- **Hardware**: board bring-up, debugging, and the moments where software meets physics.
- **Software**: embedded Linux, bootloaders, build systems, tooling.
- **Engineering**: architecture decisions and the trade-offs behind them.
- **Management**: hiring, growing engineers, and running teams that ship.

## How it's built

The site is built with [Astro](https://astro.build): Markdown in, static HTML out, no JavaScript
unless a page really needs it. It's deployed to GitHub Pages on every push.

```sh title="terminal"
npm run dev     # write
git push        # publish
```

More soon.
