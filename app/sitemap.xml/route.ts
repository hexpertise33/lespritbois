import { SITE } from '@/lib/data/navigation';
import { articles } from '@/lib/data/blog';
import { ZONES } from '@/lib/data/zones';

/**
 * Sitemap servi sur /sitemap.xml via un route handler (et non la convention
 * `app/sitemap.ts`, incompatible avec l'apostrophe du chemin du projet).
 * Toute page listée ici et tout article ajouté à `lib/data/blog.ts` y apparaît
 * automatiquement, avec sa date.
 */
export const dynamic = 'force-static';

/** lastmod = date du dernier changement de contenu notable de la page. */
const PAGES_STATIQUES: { chemin: string; lastmod: string }[] = [
  { chemin: '', lastmod: '2026-08-25' },
  { chemin: '/pergolas', lastmod: '2026-08-25' },
  { chemin: '/carports', lastmod: '2026-08-25' },
  { chemin: '/constructions-bois', lastmod: '2026-08-25' },
  { chemin: '/amenagement-exterieur', lastmod: '2026-08-25' },
  { chemin: '/terrasses-bois', lastmod: '2026-08-25' },
  { chemin: '/realisations', lastmod: '2026-08-25' },
  { chemin: '/blog', lastmod: '2026-08-24' },
  { chemin: '/contact', lastmod: '2026-08-24' },
  { chemin: '/qui-sommes-nous', lastmod: '2026-08-24' },
  { chemin: '/auteur/david-bertrand', lastmod: '2026-08-24' },
  { chemin: '/mentions-legales', lastmod: '2026-08-22' },
  { chemin: '/politique-de-confidentialite', lastmod: '2026-08-22' },
  { chemin: '/plan-du-site', lastmod: '2026-08-24' },
];

/**
 * lastmod des pages de zone. Une entrée par zone, et non une date partagée :
 * une zone retouchée seule ne doit pas rajeunir les cinq autres. Le gabarit
 * commun `components/PageZone.tsx` compte aussi, une refonte du gabarit change
 * bien les six pages.
 */
const LASTMOD_ZONES: Record<string, string> = {
  'pergola-carport-entre-deux-mers': '2026-08-25',
  'constructeur-ossature-bois-gironde': '2026-08-25',
  'amenagement-exterieur-bordeaux-metropole': '2026-08-25',
  'pergola-bassin-arcachon': '2026-08-25',
  'terrasse-bois-bassin-arcachon': '2026-08-25',
  'bassin-arcachon': '2026-08-25',
};

/** Zone absente du tableau : pas de lastmod plutôt qu'une date fausse. */
const lastmodZone = (slug: string): string | null => LASTMOD_ZONES[slug] ?? null;

export function GET() {
  const base = SITE.url.replace(/\/+$/, '');

  const entrees = [
    // Racine sans slash final : Next normalise ainsi la canonical, le sitemap doit dire la même chose.
    ...PAGES_STATIQUES.map((p) => ({ loc: `${base}${p.chemin}`, lastmod: p.lastmod as string | null })),
    ...ZONES.map((z) => ({ loc: `${base}/${z.slug}`, lastmod: lastmodZone(z.slug) })),
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
