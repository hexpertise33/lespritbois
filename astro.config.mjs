// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  // Remplacé par le vrai domaine au moment du déploiement (ex: https://lespritbois.fr)
  site: 'https://lespritbois.fr',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
