import { SITE } from '@/lib/data/navigation';
import { articles } from '@/lib/data/blog';
import { ZONES } from '@/lib/data/zones';
import lastmods from '@/lib/data/lastmod.json';

/**
 * Sitemap servi sur /sitemap.xml via un route handler (et non la convention
 * `app/sitemap.ts`, incompatible avec l'apostrophe du chemin du projet).
 * Toute page listée ici et tout article ajouté à `lib/data/blog.ts` y apparaît
 * automatiquement, avec sa date.
 */
export const dynamic = 'force-static';

/**
 * Quelles pages figurent au sitemap, hors zones et hors articles.
 * `/devis-pergola` en est volontairement absente : elle est en noindex.
 */
const PAGES_STATIQUES = [
  '',
  '/pergolas',
  '/carports',
  '/constructions-bois',
  '/amenagement-exterieur',
  '/terrasses-bois',
  '/devis-extension',
  '/realisations',
  '/blog',
  '/contact',
  '/qui-sommes-nous',
  '/auteur/david-bertrand',
  '/mentions-legales',
  '/politique-de-confidentialite',
  '/plan-du-site',
];

/**
 * Les dates ne se saisissent plus à la main : `lib/data/lastmod.json` est
 * régénéré depuis l'historique git avant chaque build par
 * `scripts/gen-lastmod.mjs`. Le 10/09/2026, la table manuelle qui vivait ici
 * faisait mentir 41 des 62 pages ; elle ne pouvait pas suivre le rythme.
 * Route absente de la carte : pas de lastmod, plutôt qu'une date fausse.
 */
const lastmod = (chemin: string): string | null =>
  (lastmods as Record<string, string>)[chemin] ?? null;

export function GET() {
  const base = SITE.url.replace(/\/+$/, '');

  const chemins = [
    // Racine sans slash final : Next normalise ainsi la canonical, le sitemap doit dire la même chose.
    ...PAGES_STATIQUES,
    ...ZONES.map((z) => `/${z.slug}`),
    ...articles.map((article) => `/blog/${article.slug}`),
  ];

  const corps =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    chemins
      .map((chemin) => {
        const d = lastmod(chemin);
        return `  <url><loc>${base}${chemin}</loc>${d ? `<lastmod>${d}</lastmod>` : ''}</url>`;
      })
      .join('\n') +
    '\n</urlset>\n';

  return new Response(corps, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
