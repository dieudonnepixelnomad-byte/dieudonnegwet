import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dieudonnegwet.com',
  output: 'server',
  adapter: cloudflare(),
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  security: {
    checkOrigin: true,
  },
});
