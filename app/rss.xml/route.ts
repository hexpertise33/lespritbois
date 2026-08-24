import { SITE } from '@/lib/data/navigation';
import { articles } from '@/lib/data/blog';

/**
 * Flux RSS 2.0 du blog, servi via un route handler comme le sitemap et le
 * llms.txt : alimenté par `lib/data/blog.ts`, il se met à jour à chaque
 * déploiement. Déclaré dans le layout via <link rel="alternate">.
 */
export const dynamic = 'force-static';

function xmlEscape(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function GET() {
  const base = SITE.url.replace(/\/+$/, '');

  const items = [...articles]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map((a) => {
      const url = `${base}/blog/${a.slug}`;
      // Midi UTC : évite qu'un fuseau fasse basculer la date affichée à la veille.
      const pubDate = new Date(`${a.date}T12:00:00Z`).toUTCString();
      return `    <item>
      <title>${xmlEscape(a.titre)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${xmlEscape(a.categorie)}</category>
      <description>${xmlEscape(a.extrait)}</description>
    </item>`;
    })
    .join('\n');

  const corps = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xmlEscape(SITE.nom)}, le blog</title>
    <link>${base}/blog</link>
    <atom:link href="${base}/rss.xml" rel="self" type="application/rss+xml"/>
    <description>Guides techniques bois et aluminium (terrasses, pergolas, carports, extensions) par un charpentier de Libourne (Gironde).</description>
    <language>fr</language>
${items}
  </channel>
</rss>
`;

  return new Response(corps, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
