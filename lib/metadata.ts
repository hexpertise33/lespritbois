import type { Metadata } from 'next';
import { SITE } from './data/navigation';

/**
 * Reproduit exactement la logique de `src/layouts/Site.astro` :
 * - canonical sans slash final, sauf la racine qui garde `/`
 *   (Astro.url.pathname.replace(/\/+$/, '') || '/')
 * - og:image / twitter:image en URL absolue
 * - geo.region / geo.placename, theme-color
 */
export function buildMetadata(opts: {
  title: string;
  description: string;
  keywords?: string;
  path: string; // ex: '/', '/pergolas'
  ogImage?: string;
  ogTitle?: string;
  ville?: string;
}): Metadata {
  const {
    title,
    description,
    keywords,
    path,
    ogImage = '/images/source-adefrance/mais-en-a-accueil.webp',
    ogTitle,
    ville = 'Libourne',
  } = opts;

  const base = SITE.url;
  const chemin = path.replace(/\/+$/, '') || '/';
  const canonical = chemin === '/' ? `${base}/` : `${base}${chemin}`;
  const imageAbsolue = new URL(ogImage, base).href;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    icons: {
      icon: '/favicon.svg',
    },
    other: {
      'geo.region': 'FR-33',
      'geo.placename': ville,
      'theme-color': '#141414',
    },
    openGraph: {
      type: 'website',
      locale: 'fr_FR',
      siteName: SITE.nom,
      title: ogTitle ?? title,
      description,
      images: [{ url: imageAbsolue }],
      url: canonical,
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle ?? title,
      description,
      images: [imageAbsolue],
    },
  };
}
