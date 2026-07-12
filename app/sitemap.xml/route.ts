import { SITE } from '@/lib/data/navigation';
import { articles } from '@/lib/data/blog';

/**
 * Sitemap servi sur /sitemap.xml via un route handler (et non la convention
 * `app/sitemap.ts`, incompatible avec l'apostrophe du chemin du projet).
 * Toute page listée ici et tout article ajouté à `lib/data/blog.ts` y apparaît
 * automatiquement, avec sa date.
 */
export const dynamic = 'force-static';

const PAGES_STATIQUES = [
  '',
  '/pergolas',
  '/carports',
  '/constructions-bois',
  '/amenagement-exterieur',
  '/realisations',
  '/blog',
  '/mentions-legales',
  '/politique-de-confidentialite',
  '/plan-du-site',
];

export function GET() {
  const base = SITE.url.replace(/\/+$/, '');

  const entrees = [
    ...PAGES_STATIQUES.map((chemin) => ({ loc: `${base}${chemin || '/'}`, lastmod: null as string | null })),
    ...articles.map((article) => ({
      loc: `${base}/blog/${article.slug}`,
      lastmod: article.date || null,
    })),
  ];

  const corps =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    entrees
      .map(
        (u) =>
          `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`,
      )
      .join('\n') +
    '\n</urlset>\n';

  return new Response(corps, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
