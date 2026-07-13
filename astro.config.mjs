// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Domaine placeholder — à remplacer par le domaine définitif avant mise en ligne
  site: 'https://dieudonnegwet.com',
  integrations: [sitemap()],
});
