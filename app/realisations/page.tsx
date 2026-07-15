import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = buildMetadata({
  title: 'Réalisations : carports, pergolas, bois | L\'Esprit Bois',
  description:
    'Nos chantiers en Gironde : carports bois et aluminium, pergolas bioclimatiques, extensions ossature bois, pool houses, maisons en A et bardages. Libourne (33).',
  keywords:
    "réalisations L'Esprit Bois, chantiers Libourne, carport Gironde, pergola Libourne, extension bois Gironde, pool house",
  path: '/realisations',
  ogImage: '/images/source-adefrance/construction-pool-house-bois-libourne.webp',
  ogTitle: 'Nos réalisations à Libourne et en Gironde',
  ville: 'Libourne',
});

const jsonld = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://lesprit-bois.fr/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Réalisations',
        item: 'https://lesprit-bois.fr/realisations',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: "Réalisations de L'Esprit Bois",
    description:
      'Carports, pergolas, extensions, constructions bois et bardages réalisés à Libourne et en Gironde.',
    about: {
      '@type': 'GeneralContractor',
      name: "L'Esprit Bois",
      telephone: '+33557406580',
      email: 'lespritbois33@gmail.com',
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'Qualibat',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1 Aux Pradasses',
        postalCode: '33500',
        addressLocality: 'Les Billaux',
        addressRegion: 'Gironde',
        addressCountry: 'FR',
      },
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Carport aluminium contemporain, Gironde',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Carport bois adossé, Libourne',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Pergola bioclimatique, Libourne',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Pergola bois massif, Gironde',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Extension bardée bois sur maison en pierre, Gironde',
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: 'Surélévation à ossature bois, Gironde',
        },
        {
          '@type': 'ListItem',
          position: 7,
          name: 'Extension vitrée sur jardin, Libournais',
        },
        {
          '@type': 'ListItem',
          position: 8,
          name: 'Pool house et terrasse bois, Libourne',
        },
        {
          '@type': 'ListItem',
          position: 9,
          name: 'Pool house aluminium, Libourne',
        },
        {
          '@type': 'ListItem',
          position: 10,
          name: 'Maison en A sur mesure, Les Billaux',
        },
        {
          '@type': 'ListItem',
          position: 11,
          name: 'Extension bardée bois et baie vitrée, Gironde',
        },
        {
          '@type': 'ListItem',
          position: 12,
          name: 'Bardage red cedar en claire-voie, Gironde',
        },
      ],
    },
  },
];

export default function RealisationsPage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="realisations" />
      <main id="contenu">
        {/* Hero */}
        <header className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="768"
              height="512"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src="/images/source-adefrance/construction-pool-house-bois-libourne.webp"
              alt="Pool house et terrasse bois réalisés par L'Esprit Bois à Libourne"
            />
            <div className="absolute inset-0 hero-interne"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-16">
            <p className="font-label-md text-label-md text-white/60 mb-6">
              <a href="/" className="hover:text-secondary-fixed transition-colors">
                Accueil
              </a>
              <span className="mx-2 text-secondary">/</span>
              <span className="text-secondary-fixed">Réalisations</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Nos chantiers
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6">
              Nos réalisations à Libourne et en Gironde
            </h1>
            <p className="font-body-lg text-body-lg text-white/85 max-w-2xl">
              Carports, pergolas, extensions, pool houses, maisons en A et bardages. Chaque chantier a commencé par
              une conversation.
            </p>
          </div>
        </header>

        {/* Bandeau de confiance */}
        <section className="bg-surface border-b border-surface-variant" aria-label="Nos garanties">
          <div className="max-w-container-max mx-auto px-6 md:px-16 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-dark text-3xl shrink-0">verified</span>
              <div>
                <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Certifiés Qualibat
                </p>
                <p className="text-on-surface-variant text-body-md">La qualification reconnue du bâtiment</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-dark text-3xl shrink-0">shield</span>
              <div>
                <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Garantie décennale
                </p>
                <p className="text-on-surface-variant text-body-md">Vos ouvrages couverts pendant 10 ans</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-dark text-3xl shrink-0">handshake</span>
              <div>
                <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Un seul interlocuteur
                </p>
                <p className="text-on-surface-variant text-body-md">De l'étude à la pose, sans sous-traitance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Chapô */}
        <section className="pt-section-padding pb-14 bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Ce que nous avons bâti
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                Quatorze chantiers, une même exigence
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Un carport à <strong className="text-primary font-semibold">Libourne</strong>, un pool house adossé
                à un bassin, une maison en A aux Billaux, une extension bardée bois sur une maison en pierre : aucun
                de ces projets ne ressemble au précédent. Ce qui se répète, c'est la méthode : le relevé avant le
                dessin, la fabrication en atelier, la pose par nos équipes.
              </p>
            </div>
          </div>
        </section>

        {/* Filtres + galerie */}
        <section className="pb-section-padding bg-surface" id="galerie">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="flex flex-wrap gap-3 mb-12" role="group" aria-label="Filtrer par métier">
              <button
                type="button"
                data-filtre="tous"
                aria-pressed="true"
                className="filtre px-5 py-2.5 rounded-full font-label-md text-label-md border border-primary bg-primary text-on-primary transition-all"
              >
                Tous
              </button>
              <button
                type="button"
                data-filtre="carports"
                aria-pressed="false"
                className="filtre px-5 py-2.5 rounded-full font-label-md text-label-md border border-surface-variant text-on-surface-variant hover:border-secondary hover:text-secondary-dark transition-all"
              >
                Carports
              </button>
              <button
                type="button"
                data-filtre="pergolas"
                aria-pressed="false"
                className="filtre px-5 py-2.5 rounded-full font-label-md text-label-md border border-surface-variant text-on-surface-variant hover:border-secondary hover:text-secondary-dark transition-all"
              >
                Pergolas
              </button>
              <button
                type="button"
                data-filtre="terrasses"
                aria-pressed="false"
                className="filtre px-5 py-2.5 rounded-full font-label-md text-label-md border border-surface-variant text-on-surface-variant hover:border-secondary hover:text-secondary-dark transition-all"
              >
                Terrasses
              </button>
              <button
                type="button"
                data-filtre="extensions"
                aria-pressed="false"
                className="filtre px-5 py-2.5 rounded-full font-label-md text-label-md border border-surface-variant text-on-surface-variant hover:border-secondary hover:text-secondary-dark transition-all"
              >
                Extensions
              </button>
              <button
                type="button"
                data-filtre="constructions"
                aria-pressed="false"
                className="filtre px-5 py-2.5 rounded-full font-label-md text-label-md border border-surface-variant text-on-surface-variant hover:border-secondary hover:text-secondary-dark transition-all"
              >
                Constructions bois
              </button>
              <button
                type="button"
                data-filtre="bardages"
                aria-pressed="false"
                className="filtre px-5 py-2.5 rounded-full font-label-md text-label-md border border-surface-variant text-on-surface-variant hover:border-secondary hover:text-secondary-dark transition-all"
              >
                Bardages
              </button>
            </div>

            <p className="sr-only" aria-live="polite" id="compteur">
              14 réalisations affichées
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" id="grille">
              <figure className="projet group relative overflow-hidden rounded-2xl aspect-[4/3]" data-cat="carports">
                <img
                  width="768"
                  height="512"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/carport-accueil.webp"
                  alt="Carport aluminium contemporain réalisé en Gironde"
                />
                <figcaption className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-fixed">
                      Carports
                    </span>
                    <p className="text-white font-headline-sm text-headline-sm text-[18px] mt-2">
                      Carport aluminium contemporain
                    </p>
                    <p className="text-white/70 text-sm">Gironde</p>
                  </div>
                </figcaption>
              </figure>

              <figure className="projet group relative overflow-hidden rounded-2xl aspect-[4/3]" data-cat="carports">
                <img
                  width="1200"
                  height="646"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/Carport-bois-Libourne-1.webp"
                  alt="Carport bois adossé réalisé à Libourne"
                />
                <figcaption className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-fixed">
                      Carports
                    </span>
                    <p className="text-white font-headline-sm text-headline-sm text-[18px] mt-2">
                      Carport bois adossé
                    </p>
                    <p className="text-white/70 text-sm">Libourne</p>
                  </div>
                </figcaption>
              </figure>

              <figure className="projet group relative overflow-hidden rounded-2xl aspect-[4/3]" data-cat="pergolas">
                <img
                  width="768"
                  height="512"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/Pergolas-aluminium-Libourne-1.webp"
                  alt="Pergola bioclimatique à lames orientables installée à Libourne"
                />
                <figcaption className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-fixed">
                      Pergolas
                    </span>
                    <p className="text-white font-headline-sm text-headline-sm text-[18px] mt-2">
                      Pergola bioclimatique
                    </p>
                    <p className="text-white/70 text-sm">Libourne</p>
                  </div>
                </figcaption>
              </figure>

              <figure className="projet group relative overflow-hidden rounded-2xl aspect-[4/3]" data-cat="pergolas">
                <img
                  width="900"
                  height="990"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/Pergolas-bois-Libourne.webp"
                  alt="Pergola en bois massif adossée à une maison girondine"
                />
                <figcaption className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-fixed">
                      Pergolas
                    </span>
                    <p className="text-white font-headline-sm text-headline-sm text-[18px] mt-2">
                      Pergola bois massif
                    </p>
                    <p className="text-white/70 text-sm">Gironde</p>
                  </div>
                </figcaption>
              </figure>

              <figure className="projet group relative overflow-hidden rounded-2xl aspect-[4/3]" data-cat="pergolas">
                <img
                  width="1200"
                  height="900"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/pergola-terrasse-bois-libourne-1.webp"
                  alt="Pergola aluminium adossée et terrasse bois posées le long d'une maison girondine"
                />
                <figcaption className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-fixed">
                      Pergolas
                    </span>
                    <p className="text-white font-headline-sm text-headline-sm text-[18px] mt-2">
                      Pergola aluminium et terrasse bois
                    </p>
                    <p className="text-white/70 text-sm">Libournais</p>
                  </div>
                </figcaption>
              </figure>

              <figure className="projet group relative overflow-hidden rounded-2xl aspect-[4/3]" data-cat="terrasses">
                <img
                  width="1200"
                  height="900"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/terrasse-bois-plots-gironde-2.webp"
                  alt="Terrasse bois sur plots au pied d'une maison bois, en Gironde"
                />
                <figcaption className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-fixed">
                      Terrasses
                    </span>
                    <p className="text-white font-headline-sm text-headline-sm text-[18px] mt-2">
                      Terrasse bois sur plots
                    </p>
                    <p className="text-white/70 text-sm">Gironde</p>
                  </div>
                </figcaption>
              </figure>

              <figure className="projet group relative overflow-hidden rounded-2xl aspect-[4/3]" data-cat="extensions">
                <img
                  width="1536"
                  height="2048"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/WhatsApp-Image-2025-05-02-a-13.59.24_f4a63f6d-opt.webp"
                  alt="Extension bardée bois raccordée à une maison en pierre, Gironde"
                />
                <figcaption className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-fixed">
                      Extensions
                    </span>
                    <p className="text-white font-headline-sm text-headline-sm text-[18px] mt-2">
                      Extension bardée bois sur maison en pierre
                    </p>
                    <p className="text-white/70 text-sm">Gironde</p>
                  </div>
                </figcaption>
              </figure>

              <figure className="projet group relative overflow-hidden rounded-2xl aspect-[4/3]" data-cat="extensions">
                <img
                  width="950"
                  height="672"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/visuel-ext-sur-1.webp"
                  alt="Surélévation à ossature bois sur maison existante en Gironde"
                />
                <figcaption className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-fixed">
                      Extensions
                    </span>
                    <p className="text-white font-headline-sm text-headline-sm text-[18px] mt-2">
                      Surélévation à ossature bois
                    </p>
                    <p className="text-white/70 text-sm">Gironde</p>
                  </div>
                </figcaption>
              </figure>

              <figure className="projet group relative overflow-hidden rounded-2xl aspect-[4/3]" data-cat="extensions">
                <img
                  width="950"
                  height="672"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/visuel-ext-sur-3.webp"
                  alt="Extension vitrée ouverte sur le jardin, ossature bois"
                />
                <figcaption className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-fixed">
                      Extensions
                    </span>
                    <p className="text-white font-headline-sm text-headline-sm text-[18px] mt-2">
                      Extension vitrée sur jardin
                    </p>
                    <p className="text-white/70 text-sm">Libournais</p>
                  </div>
                </figcaption>
              </figure>

              <figure
                className="projet group relative overflow-hidden rounded-2xl aspect-[4/3]"
                data-cat="constructions"
              >
                <img
                  width="768"
                  height="512"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/construction-pool-house-bois-libourne.webp"
                  alt="Pool house en bois et terrasse réalisés à Libourne"
                />
                <figcaption className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-fixed">
                      Constructions bois
                    </span>
                    <p className="text-white font-headline-sm text-headline-sm text-[18px] mt-2">
                      Pool house &amp; terrasse bois
                    </p>
                    <p className="text-white/70 text-sm">Libourne</p>
                  </div>
                </figcaption>
              </figure>

              <figure
                className="projet group relative overflow-hidden rounded-2xl aspect-[4/3]"
                data-cat="constructions"
              >
                <img
                  width="768"
                  height="512"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/construction-pool-house-aluminium-libourne.webp"
                  alt="Pool house aluminium adossé à un bassin, Libourne"
                />
                <figcaption className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-fixed">
                      Constructions bois
                    </span>
                    <p className="text-white font-headline-sm text-headline-sm text-[18px] mt-2">
                      Pool house aluminium
                    </p>
                    <p className="text-white/70 text-sm">Libourne</p>
                  </div>
                </figcaption>
              </figure>

              <figure
                className="projet group relative overflow-hidden rounded-2xl aspect-[4/3]"
                data-cat="constructions"
              >
                <img
                  width="768"
                  height="512"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/mais-en-a-accueil.webp"
                  alt="Maison en A à ossature bois construite aux Billaux"
                />
                <figcaption className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-fixed">
                      Constructions bois
                    </span>
                    <p className="text-white font-headline-sm text-headline-sm text-[18px] mt-2">
                      Maison en A sur mesure
                    </p>
                    <p className="text-white/70 text-sm">Les Billaux</p>
                  </div>
                </figcaption>
              </figure>

              <figure className="projet group relative overflow-hidden rounded-2xl aspect-[4/3]" data-cat="extensions">
                <img
                  width="1200"
                  height="1600"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/IMG-20240712-WA0039-opt.webp"
                  alt="Extension bardée bois avec baie vitrée, chantier en Gironde"
                />
                <figcaption className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-fixed">
                      Extensions
                    </span>
                    <p className="text-white font-headline-sm text-headline-sm text-[18px] mt-2">
                      Extension bardée bois et baie vitrée
                    </p>
                    <p className="text-white/70 text-sm">Gironde</p>
                  </div>
                </figcaption>
              </figure>

              <figure className="projet group relative overflow-hidden rounded-2xl aspect-[4/3]" data-cat="bardages">
                <img
                  width="1536"
                  height="2048"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/IMG-20250129-WA0077-opt.webp"
                  alt="Bardage red cedar posé en claire-voie sur une façade, Gironde"
                />
                <figcaption className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-fixed">
                      Bardages
                    </span>
                    <p className="text-white font-headline-sm text-headline-sm text-[18px] mt-2">
                      Bardage red cedar claire-voie
                    </p>
                    <p className="text-white/70 text-sm">Gironde</p>
                  </div>
                </figcaption>
              </figure>
            </div>

            <p className="mt-12 text-on-surface-variant text-body-md">
              Un projet similaire en tête ? Découvrez nos{' '}
              <a
                href="/carports"
                className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
              >
                carports
              </a>
              , nos{' '}
              <a
                href="/pergolas"
                className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
              >
                pergolas
              </a>
              , nos{' '}
              <a
                href="/amenagement-exterieur"
                className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
              >
                aménagements extérieurs
              </a>{' '}
              et nos{' '}
              <a
                href="/constructions-bois"
                className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
              >
                constructions bois
              </a>
              .
            </p>
          </div>
        </section>

        {/* Zone d'intervention */}
        <section className="py-section-padding bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Zone d'intervention
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                Nos chantiers à Libourne et dans tout le Libournais
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Notre atelier est basé au{' '}
                <strong className="text-primary font-semibold">1 Aux Pradasses, 33500 Les Billaux</strong>, à cinq
                minutes de Libourne. Sur un chantier, la proximité se voit : nous passons, nous corrigeons, nous
                restons joignables après la réception.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nous intervenons dans tout le Libournais et plus largement en Gironde, jusqu'à la métropole
                bordelaise.
              </p>
            </div>
            <div>
              <h3 className="font-label-md text-label-md uppercase tracking-widest text-primary mb-6">
                Communes desservies
              </h3>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-on-surface-variant text-body-md">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-dark text-[18px]">location_on</span>
                  Libourne
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-dark text-[18px]">location_on</span>
                  Les Billaux
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-dark text-[18px]">location_on</span>
                  Saint-Émilion
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-dark text-[18px]">location_on</span>
                  Coutras
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-dark text-[18px]">location_on</span>
                  Fronsac
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-dark text-[18px]">location_on</span>
                  Vayres
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-dark text-[18px]">location_on</span>
                  Izon
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-dark text-[18px]">location_on</span>
                  Saint-Denis-de-Pile
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-dark text-[18px]">location_on</span>
                  Castillon-la-Bataille
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-dark text-[18px]">location_on</span>
                  Guîtres
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-dark text-[18px]">location_on</span>
                  Branne
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-dark text-[18px]">location_on</span>
                  Bordeaux
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-section-padding bg-primary text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              À votre tour
            </span>
            <h2 className="font-headline-md text-headline-md mt-4 mb-6">Votre projet, notre prochain chantier</h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Racontez-nous ce que vous imaginez. Nous revenons vers vous sous 48h avec une première estimation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#quote"
                className="bg-secondary text-primary px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-secondary-fixed transition-all active:scale-95 shimmer-effect"
              >
                Demander mon étude gratuite
              </a>
              <a
                href="tel:+33557406580"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-white/20 transition-all"
              >
                05 57 40 65 80
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
