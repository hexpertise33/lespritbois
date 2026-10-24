import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import DevisStickyBar from '@/components/DevisStickyBar';
import ContactForm from '@/components/ContactForm';
import { AGENCE_LA_TESTE, AUTEUR, AUTEUR_ID, ENTREPRISE_ID, GOOGLE, SAME_AS } from '@/lib/data/navigation';
import { AVIS } from '@/lib/data/avis';
import Etoiles from '@/components/Etoiles';
import { getZone } from '@/lib/data/zones';
import { CHANTIERS } from '@/lib/data/chantiers';

export const metadata: Metadata = buildMetadata({
  title: "L'Esprit Bois | Créateur d'espaces extérieurs à Libourne",
  description:
    'Terrasses, pergolas, carports, bardages et constructions bois sur mesure à Libourne et en Gironde. Entreprise qualifiée Qualibat, garantie décennale.',
  keywords:
    "L'Esprit Bois, carport Libourne, pergola Gironde, extension bois Libourne, construction bois Gironde, charpentier Libourne",
  path: '/',
  ogImage: '/images/pool-house-bois-terrasse-piscine-libourne.webp',
  ogTitle: "L'Esprit Bois | Créateur d'espaces extérieurs à Libourne",
  ville: 'Les Billaux',
});

/* Avis Google réels, repris dans le JSON-LD (aggregateRating) et dans le
   bandeau défilant plus bas. Doit rester déclaré avant `jsonld`. */

const jsonld = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: "L'Esprit Bois",
    url: 'https://lesprit-bois.fr/',
    inLanguage: 'fr-FR',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    /* Description canonique de l'entreprise. Les autres pages n'en gardent
       qu'une référence à cet `@id` (ENTREPRISE_REF), pour que Google consolide
       un seul établissement au lieu de neuf descriptions divergentes. */
    '@id': ENTREPRISE_ID,
    name: "L'Esprit Bois",
    legalName: 'AD FRANCE',
    vatID: 'FR47980264584',
    taxID: '980264584',
    description:
      "Créateur d'espaces extérieurs à Libourne : terrasses, pergolas, carports, bardages, extensions et constructions bois. Entreprise qualifiée Qualibat, ouvrages couverts par une garantie décennale.",
    url: 'https://lesprit-bois.fr/',
    telephone: '+33557406580',
    email: 'lespritbois33@gmail.com',
    image: 'https://lesprit-bois.fr/images/pool-house-bois-terrasse-piscine-libourne.webp',
    priceRange: '€€',
    sameAs: SAME_AS,
    /* Note globale des avis Google réellement affichés plus bas dans la page
       (constante AVIS). Déclarée sur l'accueil uniquement : la répéter sur
       chaque page reviendrait à multiplier artificiellement le signal. */
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
      reviewCount: AVIS.length,
    },
    /* Chaque avis affiché, balisé individuellement. Tous à 5/5 : ce sont les
       seuls avis publiés sur la fiche Google à ce jour. Pas de datePublished,
       la fiche ne l'expose pas. */
    review: AVIS.map((avis) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: avis.nom },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: avis.texte,
    })),
    /** Qualibat délivre des qualifications ET des certifications : L'Esprit Bois
     *  détient une QUALIFICATION professionnelle, pas une certification.
     *  Confirmé par David le 22/08/2026, ne pas repasser à 'certification'. */
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'qualification professionnelle',
      name: 'Qualibat',
      recognizedBy: { '@type': 'Organization', name: 'Qualibat' },
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1 Aux Pradasses',
      postalCode: '33500',
      addressLocality: 'Les Billaux',
      addressRegion: 'Gironde',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.952534,
      longitude: -0.239327,
    },
    /** Pointeur vers la fiche de l'établissement sur une carte. Complète `geo`,
     *  qui donne les coordonnées mais ne relie pas l'entité à sa fiche. */
    hasMap: GOOGLE.carte,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    /** Communes réellement desservies, et non la seule mention « Libourne et la
     *  Gironde ». La liste reprend celle de `llms.txt`, le Libournais autour de
     *  l'atelier, puis les communes où des chantiers ont effectivement été
     *  livrés (voir /realisations), jusqu'à la métropole bordelaise. */
    areaServed: [
      { '@type': 'City', name: 'Libourne' },
      { '@type': 'City', name: 'Les Billaux' },
      { '@type': 'City', name: 'Saint-Émilion' },
      { '@type': 'City', name: 'Coutras' },
      { '@type': 'City', name: 'Castillon-la-Bataille' },
      { '@type': 'City', name: 'Fronsac' },
      { '@type': 'City', name: 'Vayres' },
      { '@type': 'City', name: 'Izon' },
      { '@type': 'City', name: 'Branne' },
      { '@type': 'City', name: 'Guîtres' },
      { '@type': 'City', name: 'Rauzan' },
      { '@type': 'City', name: 'Capian' },
      { '@type': 'City', name: 'Bordeaux' },
      { '@type': 'City', name: 'La Teste-de-Buch' },
      { '@type': 'City', name: 'Arcachon' },
      { '@type': 'City', name: 'Gujan-Mestras' },
      { '@type': 'City', name: 'Le Teich' },
      { '@type': 'City', name: 'Biganos' },
      { '@type': 'City', name: 'Andernos-les-Bains' },
      { '@type': 'City', name: 'Lège-Cap-Ferret' },
      { '@type': 'City', name: 'Saint-Pey-de-Castets' },
      { '@type': 'City', name: 'Montussan' },
      { '@type': 'City', name: 'Moulon' },
      { '@type': 'City', name: 'Génissac' },
      { '@type': 'City', name: 'Arveyres' },
      { '@type': 'City', name: 'Saint-Denis-de-Pile' },
      { '@type': 'City', name: 'Lacanau' },
      { '@type': 'AdministrativeArea', name: 'Gironde' },
      { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33557406580',
      email: 'lespritbois33@gmail.com',
      contactType: 'customer service',
      areaServed: 'FR',
      availableLanguage: 'French',
    },
    knowsAbout: [
      'Charpente traditionnelle',
      'Construction à ossature bois',
      'Couverture',
      'Aménagement extérieur',
      'Pergolas',
      'Carports',
      'Terrasses bois',
      'Bardage bois',
    ],
    /** Même `@id` que le nœud décrit sur /auteur/david-bertrand : l'employé de
     *  l'entreprise et l'auteur des guides sont une seule et même personne, et
     *  Google doit pouvoir le constater plutôt que le supposer. */
    employee: {
      '@type': 'Person',
      '@id': AUTEUR_ID,
      name: AUTEUR.nom,
      url: AUTEUR.url,
      jobTitle: AUTEUR.fonction,
      worksFor: { '@id': ENTREPRISE_ID },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Nos savoir-faire',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pergolas sur mesure',
            description:
              'Pergola bioclimatique à lames orientables, pergola aluminium à toiture fixe, pergola bois massif.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Carports sur mesure',
            description:
              'Carport bois (toiture plate, bac acier ou tuile), carport aluminium thermolaqué, carport solaire photovoltaïque.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Aménagement extérieur',
            description:
              "Terrasses bois, pool houses, abris de jardin, cuisines d'été, claustras et bardages.",
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Constructions bois',
            description:
              "Maison ossature bois, maison en A, extension, surélévation, garage et abri de jardin sur mesure, sur tout support. Tous types de toit : toit plat et étanchéité, bac acier, plaque sous tuile, tuile. Livrés hors d'eau hors d'air.",
          },
        },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Terrasses bois' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bardages bois' } },
      ],
    },
  },
];

/* ---------------------------------------------------------------------------
   Le catalogue, groupé par famille : le nom de la famille tient la colonne
   de gauche, ses produits défilent en face. Quatre blocs de trois plutôt
   que douze vignettes à plat, qui se lisaient comme un mur d'images.
--------------------------------------------------------------------------- */
const GAMMES = [
  {
    famille: 'Pergolas',
    href: '/pergolas',
    accroche: "L'ombre choisie, la lumière maîtrisée.",
    produits: [
      {
        nom: 'Bioclimatique',
        href: '/pergolas#pergola-bioclimatique',
        src: '/images/source-adefrance/Pergolas-aluminium-Libourne-9.webp',
        alt: 'Pergola bioclimatique à lames orientables au-dessus d’un salon de jardin',
        w: 768,
        h: 512,
      },
      {
        nom: 'Aluminium',
        href: '/pergolas#pergola-aluminium',
        src: '/images/pergola-terrasse-bois-libourne-1.webp',
        alt: 'Pergola aluminium anthracite adossée à une maison, sur terrasse bois',
        w: 1200,
        h: 900,
      },
      {
        nom: 'Bois massif',
        href: '/pergolas#pergola-bois',
        src: '/images/pergola-bois-chevrons-enfilade.webp',
        alt: 'Pergola en bois massif à chevrons apparents vue en enfilade au-dessus d’une allée',
        w: 800,
        h: 1200,
      },
    ],
  },
  {
    famille: 'Carports',
    href: '/carports',
    accroche: "L'abri du véhicule, sans les fondations d'un garage.",
    produits: [
      {
        nom: 'Bois',
        href: '/carports#carport-bois',
        src: '/images/source-adefrance/Carport-bois-Libourne-6.webp',
        alt: 'Carport bois autoporté à toiture plate abritant deux voitures',
        w: 1200,
        h: 646,
      },
      {
        nom: 'Aluminium',
        href: '/carports#carport-aluminium',
        src: '/images/source-adefrance/Carport-aluminium-Libourne-4.webp',
        alt: 'Carport aluminium anthracite abritant deux voitures',
        w: 1200,
        h: 646,
      },
      {
        nom: 'Solaire',
        href: '/carports#carport-solaire',
        src: '/images/carport-solaire-lisudestemps.webp',
        alt: 'Structure aluminium à toiture photovoltaïque, panneaux solaires visibles',
        w: 1400,
        h: 1050,
      },
    ],
  },
  {
    famille: 'Aménagement extérieur',
    href: '/amenagement-exterieur',
    accroche: 'Tout ce qui prolonge la maison vers le jardin.',
    produits: [
      {
        nom: 'Terrasse bois',
        href: '/terrasses-bois',
        src: '/images/terrasse-bois-plots-gironde-1.webp',
        alt: 'Terrasse en bois sur plots posée le long d’une maison en Gironde',
        w: 950,
        h: 1267,
      },
      {
        nom: 'Pool house',
        href: '/amenagement-exterieur',
        src: '/images/terrasse-bois-pool-house-libourne.webp',
        alt: 'Pool house bois et terrasse au bord d’une piscine, Libournais',
        w: 736,
        h: 981,
      },
      {
        nom: 'Bardage bois',
        href: '/amenagement-exterieur',
        src: '/images/bardage-bois-douglas-gironde.webp',
        alt: 'Bardage bois douglas à claire-voie verticale posé sur une dépendance en pierre, Gironde',
        w: 1000,
        h: 1333,
      },
    ],
  },
  {
    famille: 'Constructions bois',
    href: '/constructions-bois',
    accroche: "Notre métier d'origine, livré hors d'eau hors d'air.",
    produits: [
      {
        nom: 'Ossature bois',
        href: '/constructions-bois',
        src: '/images/source-adefrance/IMG-20250129-WA0077-opt.webp',
        alt: 'Construction à ossature bois bardée, menuiseries posées, mise hors d’air',
        w: 900,
        h: 1200,
      },
      {
        nom: 'Maison en A',
        href: '/constructions-bois',
        src: '/images/source-adefrance/mais-en-a-accueil.webp',
        alt: 'Maison en A à ossature bois construite aux Billaux',
        w: 768,
        h: 512,
      },
      {
        nom: 'Extension & surélévation',
        href: '/devis-extension',
        src: '/images/source-adefrance/aggrandissement-accueil.webp',
        alt: 'Extension bois bardée accolée à un bâtiment en pierre, Gironde',
        w: 768,
        h: 512,
      },
    ],
  },
  {
    famille: 'Garages & abris de jardin',
    href: '/garages-abris-jardin',
    accroche: 'Créés sur mesure, sur tout support, sous le toit de votre choix.',
    produits: [
      {
        nom: 'Garage bois',
        href: '/garages-abris-jardin#garages',
        src: '/images/garages-abris/garage-bois-toit-plat-bardage-gris-2.webp',
        alt: 'Garage bois à toit plat, bardage gris et porte-fenêtre aluminium, à Libourne',
        w: 900,
        h: 1200,
      },
      {
        nom: 'Abri de jardin',
        href: '/garages-abris-jardin#abris',
        src: '/images/garages-abris/abri-jardin-sur-mesure-porte-fenetre-1.webp',
        alt: 'Abri de jardin sur mesure, bardage beige et porte-fenêtre double, à Arveyres',
        w: 900,
        h: 1200,
      },
      {
        nom: 'Toit plat, bac acier ou tuile',
        href: '/garages-abris-jardin#toitures',
        src: '/images/garages-abris/toit-plat-etancheite-membrane-1.webp',
        alt: 'Toit plat couvert d’une membrane d’étanchéité, accolé à une maison en tuiles, à Saint-André-de-Cubzac',
        w: 1600,
        h: 739,
      },
    ],
  },
];

/* Catalogue de l'accueil : une carte par métier, photographiée sur un vrai
   chantier, avec une preuve (commune et durée) reprise de lib/data/chantiers.ts. */
const FAMILLES = [
  {
    famille: 'Pergolas',
    href: '/pergolas',
    promesse: 'Profitez de la terrasse du printemps à l’automne, à l’ombre que vous choisissez.',
    preuve: 'Saint-Pey-de-Castets : pergola aluminium posée en 3 jours',
    cta: 'Voir les pergolas',
    src: '/images/realisations/pergola-aluminium-terrasse-bois-libourne-1.webp',
    w: 1600,
    h: 900,
    alt: 'Pergola aluminium adossée posée par L’Esprit Bois à Saint-Pey-de-Castets, sur une terrasse bois',
    produits: GAMMES[0].produits,
  },
  {
    famille: 'Carports',
    href: '/carports',
    promesse: 'Votre voiture à l’abri, sans construire un garage, même sur un terrain biscornu.',
    preuve: 'Libourne : carport bois en trapèze, 6 jours',
    cta: 'Voir les carports',
    src: '/images/realisations/carport-bois-trapeze-libourne-1.webp',
    w: 1448,
    h: 1086,
    alt: 'Carport bois raboté adossé au pignon en pierre d’une maison, ferme apparente, à Libourne',
    produits: GAMMES[1].produits,
  },
  {
    famille: 'Terrasses et extérieurs',
    href: '/amenagement-exterieur',
    promesse: 'Une terrasse qui reste droite et saine, et tout ce qui prolonge la maison vers le jardin.',
    preuve: 'Moulon : terrasse et tour de piscine, 10 jours',
    cta: 'Voir les aménagements',
    src: '/images/terrasse-bois-pool-house-noir.webp',
    w: 736,
    h: 981,
    alt: 'Terrasse bois et tour de piscine réalisés à Moulon',
    produits: GAMMES[2].produits,
  },
  {
    famille: 'Constructions bois',
    href: '/constructions-bois',
    promesse: 'Gagnez une pièce, un étage ou bâtissez la maison entière, en ossature bois.',
    preuve: 'Rauzan : maison et garage de 150 m², 1 mois et demi',
    cta: 'Voir les constructions',
    src: '/images/source-adefrance/IMG-20250129-WA0077-opt.webp',
    w: 900,
    h: 1200,
    alt: 'Maison à ossature bois bardée à Rauzan, menuiseries posées',
    produits: GAMMES[3].produits,
  },
  {
    famille: 'Garages & abris de jardin',
    href: '/garages-abris-jardin',
    promesse: 'Un garage ou un abri dessiné pour votre terrain, sur tout support, avec le toit de votre choix : toit plat, bac acier, plaque sous tuile ou tuile.',
    preuve: 'Libourne : garage bois à toit plat, livré clos et couvert',
    cta: 'Voir garages et abris',
    src: '/images/garages-abris/garage-bois-toit-plat-bardage-gris-1.webp',
    w: 1600,
    h: 739,
    alt: 'Garage bois sur mesure à toit plat, bardage gris, à Libourne',
    produits: GAMMES[4].produits,
  },
];

/* Aperçu de réalisations : un échantillon des quatre métiers. */
const APERCU = [
  {
    src: '/images/realisations/pergola-aluminium-terrasse-bois-libourne-1.webp',
    alt: 'Pergola aluminium adossée posée à Saint-Pey-de-Castets, sur une terrasse construite par le client',
    legende: 'Pergola aluminium & terrasse bois',
    w: 1600,
    h: 900,
  },
  {
    src: '/images/source-adefrance/Carport-bois-Libourne-6.webp',
    alt: 'Carport bois autoporté à toiture plate abritant deux voitures, Gironde',
    legende: 'Carport bois autoporté',
    w: 1200,
    h: 646,
  },
  {
    src: '/images/terrasse-bois-pool-house-libourne.webp',
    alt: 'Terrasse bois et pool house au bord d’une piscine, Libournais',
    legende: 'Terrasse bois & pool house',
    w: 736,
    h: 981,
  },
  {
    src: '/images/source-adefrance/mais-en-a-accueil.webp',
    alt: 'Maison en A à ossature bois construite aux Billaux',
    legende: 'Maison en A, ossature bois',
    w: 768,
    h: 512,
  },
  {
    src: '/images/pergola-bois-massif-terrasse.webp',
    alt: 'Pergola en bois massif couvrant un salon de jardin sur une terrasse, réalisation à Arveyres',
    legende: 'Pergola bois massif, Arveyres',
    w: 1100,
    h: 1100,
  },
  {
    src: '/images/source-adefrance/WhatsApp-Image-2025-05-02-a-13.59.24_f4a63f6d-opt.webp',
    alt: 'Bardage bois vertical posé sur une dépendance en pierre, à Clérac',
    legende: 'Bardage bois sur bâti ancien',
    w: 900,
    h: 1200,
  },
];

function LogoGoogle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

function CarteAvis({ nom, texte }: { nom: string; texte: string }) {
  return (
    <figure className="shrink-0 w-[320px] md:w-[380px] mx-3 bg-surface rounded-2xl border border-surface-variant p-8 flex flex-col">
      <Etoiles className="text-secondary-dark mb-4" />
      <blockquote className="font-body-md text-body-md text-on-surface-variant leading-relaxed flex-1">
        « {texte} »
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-label-md">
          {nom.charAt(0).toUpperCase()}
        </span>
        <span>
          <span className="block font-label-md text-primary">{nom}</span>
          <span className="block text-label-md text-on-surface-variant text-sm">Avis Google · 5/5</span>
        </span>
      </figcaption>
    </figure>
  );
}

/* Les quatre secteurs de l'accueil. Une carte par secteur, et non une par
   page de zone : la version en ligne empile les sept pages et répète quatre
   fois le même texte pour le Bassin. */
const _e2m = getZone('pergola-carport-entre-deux-mers')!;
const _ossature = getZone('constructeur-ossature-bois-gironde')!;
const _bdx = getZone('amenagement-exterieur-bordeaux-metropole')!;
const _bassin = getZone('bassin-arcachon')!;
const SECTEURS = [
  {
    href: '/' + _e2m.slug,
    titre: 'Libournais et Entre-deux-Mers',
    texte: "Coteaux, terrains en pente et chais : notre secteur d'origine.",
    src: _e2m.cover, w: _e2m.coverW, h: _e2m.coverH, alt: _e2m.coverAlt,
    badge: null as string | null,
  },
  {
    href: '/' + _ossature.slug,
    titre: 'Ossature bois en Gironde',
    texte: 'Extensions et maisons, conçues et assemblées à l’atelier.',
    src: _ossature.cover, w: _ossature.coverW, h: _ossature.coverH, alt: _ossature.coverAlt,
    badge: null as string | null,
  },
  {
    href: '/' + _bdx.slug,
    titre: 'Bordeaux Métropole',
    texte: 'Cours fermées et accès étroits : du sur-mesure en ville.',
    src: _bdx.cover, w: _bdx.coverW, h: _bdx.coverH, alt: _bdx.coverAlt,
    badge: null as string | null,
  },
  {
    href: '/' + _bassin.slug,
    titre: "Bassin d'Arcachon",
    texte: 'Sable, vent et sel : déjà des chantiers, bientôt une agence.',
    src: '/images/realisations/surelevation-ossature-bois-pyla-la-teste-1.webp', w: 1600, h: 1200,
    alt: "Surélévation en ossature bois au Pyla-sur-Mer, sous les pins, à La Teste-de-Buch",
    badge: `Agence à La Teste · ${AGENCE_LA_TESTE.ouverture}` as string | null,
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="accueil" />
      <main id="contenu">
        {/* 1. Accroche concrète : ce que nous faisons, où, et pourquoi nous croire */}
        <header data-devis-hero className="relative min-h-screen flex items-center pt-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="1200"
              height="800"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src="/images/pool-house-bois-terrasse-piscine-libourne.webp"
              alt="Pool house en bois à toiture tuiles et terrasse bois au bord d'une piscine, réalisé par L'Esprit Bois en Gironde"
            />
            <div className="absolute inset-0 hero-gradient"></div>
            <div className="absolute inset-0 hero-vignette"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-16 w-full">
            <div className="max-w-2xl text-white">
              <span className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full text-label-md font-label-md mb-6 border border-secondary/50 text-secondary-fixed">
                Charpentier et constructeur bois · Les Billaux, près de Libourne
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-8 leading-tight">
                Votre projet bois, <span className="italic text-secondary-fixed font-semibold">dessiné et taillé</span> dans notre atelier.
              </h1>
              <p className="font-body-lg text-body-lg mb-10 text-white/85 leading-relaxed">
                Pergolas, carports, terrasses, extensions et maisons à ossature bois, en Gironde et sur le Bassin
                d&apos;Arcachon. Une seule équipe, du relevé à la pose.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  className="bg-secondary text-primary px-8 py-5 rounded-xl font-label-md text-label-md text-center hover:bg-secondary-fixed hover:-translate-y-1 transition-all active:scale-95 shimmer-effect"
                  href="#quote"
                >
                  Demander mon étude gratuite
                </a>
                <a
                  className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-5 rounded-xl font-label-md text-label-md text-center hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
                  href="tel:+33557406580"
                >
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]" aria-hidden="true">phone_in_talk</span>
                  05 57 40 65 80
                </a>
              </div>
              <ul className="mt-12 flex flex-wrap gap-3">
                <li className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-label-md text-label-md">
                  <span className="material-symbols-outlined text-secondary-fixed text-[18px]" aria-hidden="true">verified</span>
                  Qualifié Qualibat
                </li>
                <li className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-label-md text-label-md">
                  <span className="material-symbols-outlined text-secondary-fixed text-[18px]" aria-hidden="true">shield</span>
                  Garantie décennale
                </li>
                <li>
                  <a
                    href={GOOGLE.fiche}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-label-md text-label-md hover:bg-white/20 transition-all"
                  >
                    <LogoGoogle className="w-4 h-4" />
                    5,0 sur Google
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>

        {/* 2. Catalogue, repris tel quel */}
        {/* Agence du Bassin, annoncée avant son ouverture (voir AGENCE_LA_TESTE et
            docs/bascule-agence-la-teste.md). Placée haut : c'est le lien le plus
            fort que la page agence reçoive du site. */}
        <section className="bg-surface" aria-label="Nouvelle agence">
          <div className="max-w-container-max mx-auto px-6 md:px-16 pt-10">
            <a
              href={AGENCE_LA_TESTE.slug}
              className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 bg-primary text-white rounded-2xl p-8 hover:bg-primary/90 transition-all group"
            >
              <span className="material-symbols-outlined text-secondary text-4xl" aria-hidden="true">location_on</span>
              <span className="flex-1">
                <span className="block font-label-md text-label-md uppercase tracking-widest text-secondary mb-2">
                  Nouvelle agence · ouverture {AGENCE_LA_TESTE.ouverture}
                </span>
                <span className="block font-headline-sm text-headline-sm text-white mb-1">
                  L&apos;Esprit Bois s&apos;installe à {AGENCE_LA_TESTE.ville}
                </span>
                <span className="block text-on-primary-container text-body-md">
                  Nous travaillons déjà sur tout le Bassin d&apos;Arcachon. L&apos;agence nous
                  rapproche de vous.
                </span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-secondary font-label-md text-label-md group-hover:gap-2.5 transition-all">
                Découvrir l&apos;agence
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
              </span>
            </a>
          </div>
        </section>

        {/* Nos produits : catalogue groupé par famille */}
        <section className="py-20 md:py-24 bg-surface-container-low" id="solutions">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                  Du sol au toit
                </span>
                <h2 className="font-headline-md text-headline-md text-primary mt-3 mb-3">Ce que nous fabriquons</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Cinq familles, quinze ouvrages, tous sur mesure et posés par nos équipes.
                </p>
              </div>
              <a
                href="#quote"
                className="shrink-0 inline-flex items-center gap-2 bg-primary text-white px-7 py-4 rounded-xl font-label-md text-label-md hover:bg-primary/90 transition-all active:scale-95"
              >
                Demander mon étude gratuite
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
              </a>
            </div>

            {/* Une famille par ligne : son nom tient la colonne de gauche,
                ses trois produits défilent en face. */}
            <div className="divide-y divide-surface-variant border-t border-surface-variant">
              {GAMMES.map((g, i) => (
                <div key={g.href} className="group/famille grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-10">
                  <div className="lg:col-span-3 flex flex-col justify-center">
                    {/* Index cuivre : donne le rythme et pose la famille avant les produits */}
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-display-lg text-[32px] leading-none text-secondary">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span aria-hidden="true" className="h-px flex-1 bg-secondary/35"></span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-[30px] leading-tight text-primary mb-3">
                      {g.famille}
                    </h3>
                    <p className="text-on-surface-variant text-body-md mb-3">{FAMILLES[i].promesse}</p>
                    <p className="inline-flex items-start gap-1.5 text-secondary-dark font-label-md text-label-md mb-6">
                      <span className="material-symbols-outlined text-[18px] mt-px" aria-hidden="true">location_on</span>
                      {FAMILLES[i].preuve}
                    </p>
                    <a
                      href={g.href}
                      className="inline-flex items-center gap-2 w-fit whitespace-nowrap bg-secondary text-primary px-5 py-3 rounded-xl font-label-md text-label-md hover:bg-secondary-fixed transition-colors"
                    >
                      {FAMILLES[i].cta}
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
                    </a>
                  </div>

                  <ul className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-4 list-none p-0 m-0">
                    {g.produits.map((p) => (
                      <li key={p.nom}>
                        <a href={p.href} className="group block">
                          <span className="block aspect-[4/3] rounded-2xl overflow-hidden bg-surface-variant">
                            <img
                              width={p.w}
                              height={p.h}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                              src={p.src}
                              alt={p.alt}
                            />
                          </span>
                          <span className="mt-3 flex items-center justify-between gap-2">
                            <span className="font-headline-sm text-headline-sm text-[19px] leading-tight text-primary group-hover:text-secondary-dark transition-colors">
                              {p.nom}
                            </span>
                            <span className="material-symbols-outlined text-secondary-dark text-[20px] shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden="true">
                              arrow_forward
                            </span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* 3. Derniers chantiers, en grand : la preuve par la photo */}
        <section className="py-section-padding bg-surface" id="realisations">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                  Nos derniers chantiers
                </span>
                <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-4">
                  Sortis de notre atelier, posés chez nos clients
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Chaque chantier avec sa commune et sa contrainte. Pas une image de catalogue.
                </p>
              </div>
              <a
                href="/realisations"
                className="shrink-0 inline-flex items-center gap-2 border border-primary/25 text-primary px-7 py-4 rounded-xl font-label-md text-label-md hover:bg-primary/5 transition-all"
              >
                Les {CHANTIERS.length + 4} chantiers racontés
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              {CHANTIERS.slice(0, 5).map((c, i) => (
                <a
                  key={c.id}
                  href="/realisations"
                  className={`group relative overflow-hidden rounded-2xl ${
                    i < 2 ? 'md:col-span-3 aspect-[4/3]' : 'md:col-span-2 aspect-[4/3]'
                  }`}
                >
                  <img
                    width={c.w}
                    height={c.h}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={c.src}
                    alt={c.alt}
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent p-6 pt-16 text-white">
                    <span className="block font-label-md text-label-md uppercase tracking-widest text-secondary-fixed mb-1 text-xs">
                      {c.commune}
                    </span>
                    <span className={`block leading-snug ${i < 2 ? 'font-headline-sm text-headline-sm' : 'font-title-lg text-title-lg'}`}>{c.titre}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Zones : quatre secteurs en image, au lieu de sept pavés de texte */}
        <section className="py-section-padding bg-surface-container-low" id="zones">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-2xl mb-12">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Où nous intervenons
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-4">
                De Libourne au Bassin d&apos;Arcachon
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Autour de l&apos;atelier, nous posons aussi bien une{' '}
                <a href="/pergolas" className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors">
                  pergola bioclimatique à Libourne
                </a>{' '}
                qu&apos;une{' '}
                <a href="/terrasses-bois" className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors">
                  terrasse bois à Libourne
                </a>
                . Plus loin, chaque secteur a sa page, avec ses contraintes et ses chantiers.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {SECTEURS.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  className="group relative overflow-hidden rounded-2xl min-h-[440px] block"
                >
                  <img
                    width={s.w}
                    height={s.h}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={s.src}
                    alt={s.alt}
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-primary via-primary/75 to-primary/10"></span>
                  {s.badge ? (
                    <span className="absolute top-4 left-4 bg-secondary text-primary px-3 py-1.5 rounded-full font-label-md text-label-md">
                      {s.badge}
                    </span>
                  ) : null}
                  <span className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <span className="block font-title-lg text-title-lg mb-2">{s.titre}</span>
                    <span className="block text-body-md text-white/80 mb-4">{s.texte}</span>
                    <span className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary-fixed group-hover:gap-2.5 transition-all">
                      Voir le secteur
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
                    </span>
                  </span>
                </a>
              ))}
            </div>
            <p className="mt-8 font-body-md text-body-md text-on-surface-variant">
              Sur le Bassin d&apos;Arcachon :{' '}
              <a href="/pergola-bassin-arcachon" className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors">
                pergola à La Teste-de-Buch
              </a>
              ,{' '}
              <a href="/terrasse-bois-bassin-arcachon" className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors">
                terrasse bois sur le Bassin
              </a>{' '}
              et{' '}
              <a href="/extension-ossature-bois-bassin-arcachon" className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors">
                extension ou surélévation en ossature bois
              </a>
              .
            </p>
          </div>
        </section>

        {/* 5. Méthode et garanties, réunies (remplace « Qui sommes-nous » et les chiffres) */}
        {/* Notre méthode */}
        <section id="methode" className="py-section-padding bg-primary text-white overflow-hidden">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
                  Un savoir-faire intégré, du premier croquis à la dernière lame
                </span>
                <h2 className="font-headline-md text-headline-md mt-4 mb-8">
                  Charpentiers et constructeurs bois à Libourne
                </h2>
                <p className="font-body-lg text-body-lg text-on-primary-container mb-12">
                  Installés au 1 Aux Pradasses, aux Billaux, à cinq minutes de Libourne, nous ne sommes pas de
                  simples revendeurs. Nous concevons, fabriquons et posons nous-mêmes nos
                  ouvrages : c'est la seule façon de répondre de ce qu'on pose.
                </p>
                <div className="space-y-8">
                  <div className="flex gap-6 group">
                    <div className="w-16 h-16 flex-shrink-0 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                      <span className="material-symbols-outlined text-secondary group-hover:text-primary text-3xl transition-colors" aria-hidden="true">
                        design_services
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm mb-2 text-secondary-fixed">
                        Tout sur mesure
                      </h3>
                      <p className="text-on-primary-container text-body-md">
                        Aucun projet standard. On dessine à partir de votre lieu, de vos usages et de votre budget.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="w-16 h-16 flex-shrink-0 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                      <span className="material-symbols-outlined text-secondary group-hover:text-primary text-3xl transition-colors" aria-hidden="true">
                        handshake
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm mb-2 text-secondary-fixed">
                        Un seul interlocuteur
                      </h3>
                      <p className="text-on-primary-container text-body-md">
                        De l'étude à la pose, sans intermédiaire ni sous-traitance. Vous savez toujours qui appeler.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="w-16 h-16 flex-shrink-0 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                      <span className="material-symbols-outlined text-secondary group-hover:text-primary text-3xl transition-colors" aria-hidden="true">
                        umbrella
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm mb-2 text-secondary-fixed">
                        Hors d'eau, hors d'air
                      </h3>
                      <p className="text-on-primary-container text-body-md">
                        Sur les extensions et les constructions, nous livrons la coquille close et couverte. Le
                        second œuvre revient aux artisans de votre choix.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
                  <img
                    width="900"
                    height="1200"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    src="/images/source-adefrance/IMG-20250129-WA0077-opt.webp"
                    alt="Construction bois bardée, menuiseries posées, mise hors d'air"
                  />
                  <div className="absolute inset-0 bg-primary/15"></div>
                </div>
                <div className="absolute -bottom-10 -left-10 bg-surface text-primary p-8 rounded-2xl shadow-2xl hidden md:block max-w-xs border-t-2 border-secondary">
                  <span className="material-symbols-outlined text-secondary-dark text-5xl mb-4" aria-hidden="true">shield</span>
                  <p className="font-headline-sm text-headline-sm text-[20px] mb-2 leading-tight">
                    Garantie décennale
                  </p>
                  <p className="text-on-surface-variant text-body-md italic">
                    Chaque ouvrage que nous posons est couvert pendant dix ans.
                  </p>
                  <div className="mt-5 pt-4 border-t border-surface-variant">
                    <span className="block text-[11px] uppercase tracking-widest text-on-surface-variant mb-2">
                      Assuré par
                    </span>
                    <span className="inline-block bg-white rounded-lg px-3 py-2 border border-surface-variant">
                      <img
                        src="/logos/sma-btp.webp"
                        alt="SMA BTP, assureur de L'Esprit Bois"
                        width="400"
                        height="233"
                        loading="lazy"
                        decoding="async"
                        className="h-9 w-auto"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Avis, repris tel quel */}
        {/* Avis clients */}
        <section className="py-section-padding bg-surface-container-low overflow-hidden" aria-labelledby="avis-titre">
          <div className="max-w-container-max mx-auto px-6 md:px-16 flex flex-col items-center mb-12">
            <h2 id="avis-titre" className="sr-only">
              Avis clients : 5,0 sur 5 d'après 6 avis Google
            </h2>
            <p className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark mb-5">
              Ils nous ont fait confiance
            </p>
            <div className="inline-flex items-center gap-5 bg-white rounded-2xl border border-surface-variant shadow-sm px-7 py-5">
              <LogoGoogle className="w-9 h-9 shrink-0" />
              <div className="text-left">
                <div className="flex items-center gap-3">
                  <span className="font-display-lg text-[34px] leading-none text-primary">5,0</span>
                  <Etoiles taille={22} className="text-secondary-dark" />
                </div>
                <p className="text-on-surface-variant text-sm mt-1.5">
                  Basé sur <strong className="text-on-surface">6 avis</strong> ·{' '}
                  <a
                    href={GOOGLE.fiche}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-dark hover:underline"
                  >
                    Voir les avis
                  </a>{' '}
                  ·{' '}
                  <a
                    href={GOOGLE.avis}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-dark hover:underline"
                  >
                    Laisser un avis
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="avis-marquee">
            <ul className="avis-piste list-none p-0 m-0">
              {[...AVIS, ...AVIS].map((avis, i) => (
                <li key={i} aria-hidden={i >= AVIS.length}>
                  <CarteAvis nom={avis.nom} texte={avis.texte} />
                </li>
              ))}
            </ul>
          </div>
        </section>


        {/* 7. Formulaire, repris tel quel */}
        {/* Contact */}
        <section className="py-section-padding bg-surface-container-low" id="quote">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-surface-variant">
              <div className="lg:w-2/5 bg-primary p-12 text-white flex flex-col justify-between">
                <div>
                  <h2 className="font-headline-md text-headline-md mb-6 leading-tight">
                    Démarrons votre projet ensemble
                  </h2>
                  <p className="font-body-md text-body-md text-on-primary-container mb-8">
                    Remplissez ce formulaire : nous revenons vers vous sous 48h avec une première estimation et les
                    prochaines étapes.
                  </p>
                  <div className="space-y-6">
                    <a className="flex items-center gap-4 hover:text-secondary transition-colors" href="tel:+33557406580">
                      <span className="material-symbols-outlined text-secondary" aria-hidden="true">phone_in_talk</span>
                      <span className="font-label-md">05 57 40 65 80</span>
                    </a>
                    <a
                      className="flex items-center gap-4 hover:text-secondary transition-colors"
                      href="mailto:lespritbois33@gmail.com"
                    >
                      <span className="material-symbols-outlined text-secondary" aria-hidden="true">mail</span>
                      <span className="font-label-md">lespritbois33@gmail.com</span>
                    </a>
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-secondary" aria-hidden="true">location_on</span>
                      <span className="font-label-md">1 Aux Pradasses, 33500 Les Billaux</span>
                    </div>
                  </div>
                </div>
                <div className="mt-12 p-6 bg-white/5 rounded-xl border-l-2 border-secondary text-on-primary-container text-sm">
                  Nous ne nous contentons pas de construire : nous concevons un lieu de vie. Un seul
                  interlocuteur, du premier croquis à la dernière lame.
                  <span className="block mt-3 text-xs tracking-wide text-secondary-fixed">
                    Notre engagement,{' '}
                    <a href={GOOGLE.avis} className="underline underline-offset-4 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                      lire les avis de nos clients
                    </a>
                  </span>
                </div>
              </div>
              <div className="lg:w-3/5 p-12">
                <ContactForm pageLabel="/" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <DevisStickyBar ancre="#quote" />
    </>
  );
}
