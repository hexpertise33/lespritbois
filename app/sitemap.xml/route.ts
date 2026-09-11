import { SITE } from '@/lib/data/navigation';
import { articles } from '@/lib/data/blog';
import carte from '@/lib/data/lastmod.json';

/**
 * Sitemap servi sur /sitemap.xml via un route handler (et non la convention
 * `app/sitemap.ts`, incompatible avec l'apostrophe du chemin du projet).
 *
 * Plus aucune liste ni aucune date ne se saisit ici : `lib/data/lastmod.json`
 * est régénéré depuis git avant chaque build par `scripts/gen-lastmod.mjs`.
 *
 * Deux portes distinctes, et c'est voulu :
 *  - les pages entrent d'office, sauf celles qui se déclarent noindex. Une page
 *    publiée ne peut donc plus rester absente du sitemap par simple oubli, ce
 *    qui est arrivé à /devis-extension le 04/09/2026 ;
 *  - les articles, eux, restent commandés par `lib/data/blog.ts`. Un brouillon
 *    déposé dans `app/blog/` sans y être déclaré n'entre pas : le 25/08/2026,
 *    un article en cours de rédaction était en ligne sans être publié.
 */
export const dynamic = 'force-static';

const pages: Record<string, string | null> = carte.pages;
const datesArticles: Record<string, string | null> = carte.articles;

export function GET() {
  const base = SITE.url.replace(/\/+$/, '');

  const entrees: { chemin: string; lastmod: string | null }[] = [
    // Racine sans slash final : Next normalise ainsi la canonical, le sitemap doit dire la même chose.
    ...Object.keys(pages).map((chemin) => ({ chemin, lastmod: pages[chemin] })),
    ...articles.map((article) => ({
      chemin: `/blog/${article.slug}`,
      lastmod: datesArticles[`/blog/${article.slug}`] ?? null,
    })),
  ];

  const corps =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    entrees
      .map(
        ({ chemin, lastmod }) =>
          `  <url><loc>${base}${chemin}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`,
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
