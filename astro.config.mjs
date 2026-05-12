import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://most-hrvatska.hr',
  output: 'static',
  trailingSlash: 'never',
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'viewport',
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'hr', locales: { hr: 'hr-HR' } },
      changefreq: 'weekly',
      priority: 0.7,
      filter: (page) => !page.includes('/admin'),
    }),
    tailwind({ applyBaseStyles: false }),
  ],
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets',
  },
  experimental: {
    clientPrerender: true,
  },
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
