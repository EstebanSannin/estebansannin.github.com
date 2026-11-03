// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';

export default defineConfig({
  site: 'https://estebansannin.github.io',
  integrations: [
    expressiveCode({
      themes: ['github-dark-default', 'github-light-default'],
      useDarkModeMediaQuery: false,
      themeCssSelector: (theme) => `[data-theme='${theme.type}']`,
      styleOverrides: {
        borderRadius: '6px',
        codeFontFamily: "'Geist Mono Variable', ui-monospace, monospace",
        uiFontFamily: "'Geist Variable', system-ui, sans-serif",
      },
    }),
    mdx(),
    sitemap(),
  ],
});
