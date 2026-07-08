// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build
export default defineConfig({
  // Domaine de production. Sert aux canonical, à og:url et au sitemap.
  site: 'https://lespritbois.fr',

  // URL propres, sans slash final : /carports (et non /carports/).
  // Doit rester cohérent avec le canonical calculé dans src/layouts/Site.astro.
  trailingSlash: 'never',

  // `trailingSlash: 'never'` suffit : le sitemap hérite des URL sans slash final,
  // identiques aux canonical. Seule la racine s'écrit `https://lespritbois.fr`
  // côté sitemap et `https://lespritbois.fr/` côté canonical — RFC 3986 §6.2.3 :
  // un chemin vide équivaut à « / ». Google les traite comme une seule URL.
  integrations: [sitemap()],

  // Tailwind v4 : le plugin Vite intercepte `@import 'tailwindcss'`
  // avant la résolution des @import CSS de Vite (qui ne sait pas charger un paquet).
  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
