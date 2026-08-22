import type { Metadata } from 'next';
import { SITE } from './data/navigation';

/** Bornes d'affichage en SERP, en caractères.
 *
 *  Au-delà de la borne haute Google tronque : la fin de la phrase — souvent
 *  celle qui porte l'appel à l'action et la mention géographique — n'est jamais
 *  affichée. En deçà de la borne basse on laisse de la surface de résultat
 *  inutilisée.
 *
 *  Constaté le 22/08/2026 : sans contrôle, la routine éditoriale quotidienne a
 *  produit 15 descriptions hors bornes en trois semaines, jusqu'à 259
 *  caractères, et un title de 90. Aucune n'a été vue avant l'audit. */
const BORNES = {
  title: { min: 30, max: 65 },
  description: { min: 110, max: 160 },
} as const;

/** `next build` pose NEXT_PHASE ; `next dev` laisse NODE_ENV à 'development'.
 *  Dans ces deux cas on échoue franchement, pour qu'une balise hors bornes ne
 *  puisse pas être déployée. À l'exécution en production on se contente d'un
 *  avertissement : une page déjà en ligne ne doit jamais tomber en 500 pour un
 *  motif d'affichage. */
function verifieLongueurs(champs: { title: string; description: string; path: string }) {
  const ecarts = (['title', 'description'] as const)
    .map((champ) => {
      const n = [...champs[champ]].length;
      const { min, max } = BORNES[champ];
      if (n >= min && n <= max) return null;
      return `${champ} : ${n} caractères (attendu ${min}–${max}) — « ${champs[champ]} »`;
    })
    .filter((x): x is string => x !== null);

  if (ecarts.length === 0) return;

  const message = `[SEO] ${champs.path}\n  ` + ecarts.join('\n  ');
  const bloquant =
    process.env.NEXT_PHASE === 'phase-production-build' ||
    process.env.NODE_ENV === 'development';

  if (bloquant) throw new Error(message);
  console.warn(message);
}

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
  /** Pages hors indexation (ex : landing page publicitaire) — pose
   *  `robots: 'noindex, follow'` au lieu de la valeur indexable par défaut.
   *
   *  `follow` et non `nofollow` : la page doit rester hors de l'index, mais ses
   *  liens internes continuent de transmettre leur signal aux pages de gamme et
   *  à /contact. Un `nofollow` ne protège de rien ici et coupe ce transfert. */
  noindex?: boolean;
}): Metadata {
  const {
    title,
    description,
    keywords,
    path,
    ogImage = '/images/source-adefrance/mais-en-a-accueil.webp',
    ogTitle,
    ville = 'Libourne',
    noindex = false,
  } = opts;

  verifieLongueurs({ title, description, path });

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
    robots: noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1',
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
