import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import ContactForm from '@/components/ContactForm';
import { SAME_AS } from '@/lib/data/navigation';

export const metadata: Metadata = buildMetadata({
  title: "L'Esprit Bois | Créateur d'espaces extérieurs à Libourne",
  description:
    'Terrasses, pergolas, carports, bardages et constructions bois sur mesure à Libourne et en Gironde. Entreprise certifiée Qualibat, garantie décennale.',
  keywords:
    "L'Esprit Bois, carport Libourne, pergola Gironde, extension bois Libourne, construction bois Gironde, charpentier Libourne",
  path: '/',
  ogImage: '/images/pool-house-bois-terrasse-piscine-libourne.webp',
  ogTitle: "L'Esprit Bois | Créateur d'espaces extérieurs à Libourne",
  ville: 'Les Billaux',
});

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
    name: "L'Esprit Bois",
    description:
      "Créateur d'espaces extérieurs à Libourne : terrasses, pergolas, carports, bardages, extensions et constructions bois. Entreprise certifiée Qualibat, ouvrages couverts par une garantie décennale.",
    url: 'https://lesprit-bois.fr/',
    telephone: '+33557406580',
    email: 'lespritbois33@gmail.com',
    image: 'https://lesprit-bois.fr/images/pool-house-bois-terrasse-piscine-libourne.webp',
    priceRange: '€€',
    sameAs: SAME_AS,
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
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.9517,
      longitude: -0.2372,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    areaServed: [
      { '@type': 'City', name: 'Libourne' },
      { '@type': 'AdministrativeArea', name: 'Gironde' },
      { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Nos savoir-faire',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Terrasses bois' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pergolas bois et bioclimatiques' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Carports bois, aluminium et solaires' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bardages bois' } },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: "Extensions et constructions bois, hors d'eau hors d'air" },
        },
      ],
    },
  },
];

const AVIS = [
  {
    nom: 'clément Baudon',
    texte:
      "Commande faite 2 jours avant les congés. On a pu avoir la totalité de la fourniture pour notre terrasse. Super conseil pour le plan de pose. Énorme avantage : l'expérience du vendeur, pour le rendu esthétique comme la mise en place.",
  },
  {
    nom: 'Damien',
    texte:
      "Merci à David et toute son équipe pour leurs conseils. Ils m'ont aidé sur la conception d'une pergola et le résultat est parfait.",
  },
  {
    nom: 'Guillaume Marie-Catherine',
    texte: 'Malgré un timing ultra serré, le permis de construire a été déposé dans les temps !',
  },
  {
    nom: 'thuy tran',
    texte:
      "Merci pour la modélisation 3D des chalets et pour les précieux conseils sur l'architecture, l'optimisation de l'espace et des coûts.",
  },
  {
    nom: 'Georgia Flores',
    texte:
      "Merci infiniment à Manon et ses collègues pour le travail sur mes plans d'agrandissement. Projet mené jusqu'à l'obtention du permis. De bons conseils.",
  },
  { nom: 'Bérengère Coste', texte: "Entreprise sérieuse et à l'écoute." },
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
      <div className="flex items-center gap-1 text-secondary-dark mb-4" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            star
          </span>
        ))}
      </div>
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

export default function HomePage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="accueil" />
      <main id="contenu">
        {/* Hero */}
        <header className="relative min-h-screen flex items-center pt-24 overflow-hidden">
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
                Artisans charpentiers · Libourne, Gironde
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-8 leading-tight">
                Créateur d'<span className="italic text-secondary-fixed font-semibold">espaces extérieurs</span> qui
                traversent le temps.
              </h1>
              <p className="font-body-lg text-body-lg mb-10 text-white/85 leading-relaxed">
                Terrasses, pergolas, carports, bardages et constructions bois. Nous concevons, nous fabriquons et
                nous posons nous-mêmes, à Libourne et dans toute la Gironde.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  className="bg-secondary text-primary px-8 py-5 rounded-xl font-label-md text-label-md text-center hover:bg-secondary-fixed hover:-translate-y-1 transition-all active:scale-95 shimmer-effect"
                  href="#quote"
                >
                  Demander mon étude gratuite
                </a>
                <a
                  className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-5 rounded-xl font-label-md text-label-md text-center hover:bg-white/20 transition-all"
                  href="#solutions"
                >
                  Découvrir nos savoir-faire
                </a>
              </div>
              <div className="mt-16 flex items-center gap-12">
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-white">10 ans</span>
                  <span className="font-label-md text-label-md uppercase tracking-wider text-white/70">
                    D'expérience du bois
                  </span>
                </div>
                <div className="h-10 w-[1px] bg-secondary/60"></div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-white">100 %</span>
                  <span className="font-label-md text-label-md uppercase tracking-wider text-white/70">
                    Sur mesure
                  </span>
                </div>
              </div>
            </div>
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

        {/* Nos savoir-faire */}
        <section className="py-section-padding bg-surface-container-low" id="solutions">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Du sol au toit
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">Nos savoir-faire</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Tout ce que nous faisons, c'est notre métier : le relevé avant le dessin, la fabrication en atelier,
                la pose par nos équipes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              <article className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-surface-variant flex flex-col focus-within:ring-2 focus-within:ring-secondary focus-within:ring-offset-2">
                <div className="h-64 overflow-hidden relative">
                  <img
                    width="768"
                    height="512"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="/images/source-adefrance/carport-accueil.webp"
                    alt="Carport aluminium contemporain abritant deux véhicules, Gironde"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-label-md font-label-md text-primary">
                    Bois &amp; aluminium
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Carports</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-1">
                    L'élégance durable pour votre véhicule. Toiture plate, bac acier ou tuile, et jusqu'au carport
                    solaire.
                  </p>
                  <a
                    className="inline-flex items-center gap-2 text-secondary-dark font-label-md hover:gap-4 transition-all after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
                    href="/carports"
                    aria-label="Découvrir nos carports"
                  >
                    Découvrir <span className="material-symbols-outlined">arrow_forward</span>
                  </a>
                </div>
              </article>

              <article className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-secondary/40 xl:scale-105 z-10 flex flex-col focus-within:ring-2 focus-within:ring-secondary focus-within:ring-offset-2">
                <div className="h-64 overflow-hidden relative">
                  <img
                    width="768"
                    height="512"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="/images/source-adefrance/Pergolas-aluminium-Libourne-4.webp"
                    alt="Pergola bioclimatique en aluminium au bord d'une piscine, Libourne"
                  />
                  <div className="absolute bottom-4 left-4 bg-secondary text-primary px-3 py-1 rounded text-label-md font-label-md shadow-lg">
                    Bioclimatique
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="inline-block self-start px-2 py-0.5 bg-primary-fixed text-secondary-dark text-[10px] uppercase font-bold tracking-widest rounded mb-2">
                    Le plus demandé
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Pergolas</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-1">
                    Bois massif ou aluminium à lames orientables. L'ombre choisie, la lumière maîtrisée.
                  </p>
                  <a
                    className="inline-flex items-center gap-2 text-secondary-dark font-label-md hover:gap-4 transition-all after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
                    href="/pergolas"
                    aria-label="Découvrir nos pergolas"
                  >
                    En savoir plus <span className="material-symbols-outlined">arrow_forward</span>
                  </a>
                </div>
              </article>

              <article className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-surface-variant flex flex-col focus-within:ring-2 focus-within:ring-secondary focus-within:ring-offset-2">
                <div className="h-64 overflow-hidden relative">
                  <img
                    width="736"
                    height="981"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="/images/terrasse-bois-pool-house-noir.webp"
                    alt="Terrasse en bois menant à une piscine, pool house et maison à bardage noir"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-label-md font-label-md text-primary">
                    Terrasses &amp; pool houses
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Aménagement extérieur</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-1">
                    Terrasses, pool houses, abris de jardin et abords de bassin. Tout ce qui fait qu'on vit dehors.
                  </p>
                  <a
                    className="inline-flex items-center gap-2 text-secondary-dark font-label-md hover:gap-4 transition-all after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
                    href="/amenagement-exterieur"
                    aria-label="Découvrir nos aménagements extérieurs"
                  >
                    Découvrir <span className="material-symbols-outlined">arrow_forward</span>
                  </a>
                </div>
              </article>

              <article className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-surface-variant flex flex-col focus-within:ring-2 focus-within:ring-secondary focus-within:ring-offset-2">
                <div className="h-64 overflow-hidden relative">
                  <img
                    width="768"
                    height="512"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="/images/source-adefrance/mais-en-a-accueil.webp"
                    alt="Maison en A à ossature bois construite aux Billaux"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-label-md font-label-md text-primary">
                    Sur mesure
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Constructions bois</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-1">
                    Maisons ossature bois, maisons en A, extensions et surélévations, livrées hors d'eau hors d'air.
                  </p>
                  <a
                    className="inline-flex items-center gap-2 text-secondary-dark font-label-md hover:gap-4 transition-all after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
                    href="/constructions-bois"
                    aria-label="Découvrir nos constructions bois"
                  >
                    Découvrir nos constructions <span className="material-symbols-outlined">arrow_forward</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Notre méthode */}
        <section id="methode" className="py-section-padding bg-primary text-white overflow-hidden">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
                  Notre méthode
                </span>
                <h2 className="font-headline-md text-headline-md mt-4 mb-8">
                  Un savoir-faire intégré, du premier croquis à la dernière lame
                </h2>
                <p className="font-body-lg text-body-lg text-on-primary-container mb-12">
                  Nous ne sommes pas de simples revendeurs. Nous concevons, fabriquons et posons nous-mêmes nos
                  ouvrages : c'est la seule façon de répondre de ce qu'on pose.
                </p>
                <div className="space-y-8">
                  <div className="flex gap-6 group">
                    <div className="w-16 h-16 flex-shrink-0 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                      <span className="material-symbols-outlined text-secondary group-hover:text-primary text-3xl transition-colors">
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
                      <span className="material-symbols-outlined text-secondary group-hover:text-primary text-3xl transition-colors">
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
                      <span className="material-symbols-outlined text-secondary group-hover:text-primary text-3xl transition-colors">
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
                    width="1536"
                    height="2048"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    src="/images/source-adefrance/IMG-20250129-WA0077-opt.webp"
                    alt="Construction bois bardée, menuiseries posées, mise hors d'air"
                  />
                  <div className="absolute inset-0 bg-primary/15"></div>
                </div>
                <div className="absolute -bottom-10 -left-10 bg-surface text-primary p-8 rounded-2xl shadow-2xl hidden md:block max-w-xs border-t-2 border-secondary">
                  <span className="material-symbols-outlined text-secondary-dark text-5xl mb-4">shield</span>
                  <p className="font-headline-sm text-headline-sm text-[20px] mb-2 leading-tight">
                    Garantie décennale
                  </p>
                  <p className="text-on-surface-variant text-body-md italic">
                    Chaque ouvrage que nous posons est couvert pendant dix ans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qui sommes-nous */}
        <section className="py-section-padding bg-surface" id="matiere">
          <div className="max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Qui sommes-nous
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                Charpentiers et constructeurs bois à Libourne
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Installés au <strong className="text-primary font-semibold">1 Aux Pradasses, aux Billaux</strong>, à
                cinq minutes de <strong className="text-primary font-semibold">Libourne</strong>, nous ne sommes pas
                des revendeurs. Nous concevons, nous fabriquons, nous posons, et nous répondons de ce que nous
                posons. Chaque essence (douglas, mélèze, red cedar, chêne) est choisie pour sa durabilité naturelle
                et sa beauté.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Entreprise <strong className="text-primary font-semibold">certifiée Qualibat</strong>, nous couvrons
                chaque ouvrage par notre <strong className="text-primary font-semibold">garantie décennale</strong>.
                Un seul interlocuteur, de l'étude à la pose, sans sous-traitance : c'est la seule façon de répondre
                de ce qu'on pose.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Tout ce que nous faisons, c'est notre métier, du sol au toit :{' '}
                <a
                  href="#solutions"
                  className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
                >
                  terrasses
                </a>
                ,{' '}
                <a
                  href="/pergolas"
                  className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
                >
                  pergolas
                </a>
                ,{' '}
                <a
                  href="/carports"
                  className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
                >
                  carports
                </a>
                , bardages et{' '}
                <a
                  href="/constructions-bois"
                  className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
                >
                  constructions bois
                </a>
                .
              </p>
            </div>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                width="1600"
                height="1200"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
                src="/images/source-adefrance/WhatsApp-Image-2024-08-13-a-15.28.15_3b74f9f0.webp"
                alt="Charpentier de L'Esprit Bois posant une ossature bois sur un chantier en Gironde"
              />
            </div>
          </div>
        </section>

        {/* Chiffres */}
        <section className="py-section-padding bg-primary text-white">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              <div>
                <p className="font-display-lg text-[56px] leading-none text-secondary">10</p>
                <p className="font-label-md text-label-md uppercase tracking-widest text-on-primary-container mt-4">
                  ans d'expérience du bois
                </p>
              </div>
              <div>
                <p className="font-display-lg text-[56px] leading-none text-secondary">100 %</p>
                <p className="font-label-md text-label-md uppercase tracking-widest text-on-primary-container mt-4">
                  sur mesure
                </p>
              </div>
              <div>
                <p className="font-display-lg text-[56px] leading-none text-secondary">33</p>
                <p className="font-label-md text-label-md uppercase tracking-widest text-on-primary-container mt-4">
                  Gironde &amp; alentours
                </p>
              </div>
              <div>
                <p className="font-display-lg text-[56px] leading-none text-secondary">0</p>
                <p className="font-label-md text-label-md uppercase tracking-widest text-on-primary-container mt-4">
                  sous-traitance
                </p>
              </div>
            </div>
          </div>
        </section>

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
                  <span className="flex items-center gap-0.5 text-secondary-dark" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[22px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm mt-1.5">
                  Basé sur <strong className="text-on-surface">6 avis</strong> ·{' '}
                  <a
                    href="https://www.google.com/search?q=L%27Esprit+Bois+Les+Billaux"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-dark hover:underline"
                  >
                    Voir les avis
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
                      <span className="material-symbols-outlined text-secondary">phone_in_talk</span>
                      <span className="font-label-md">05 57 40 65 80</span>
                    </a>
                    <a
                      className="flex items-center gap-4 hover:text-secondary transition-colors"
                      href="mailto:lespritbois33@gmail.com"
                    >
                      <span className="material-symbols-outlined text-secondary">mail</span>
                      <span className="font-label-md">lespritbois33@gmail.com</span>
                    </a>
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-secondary">location_on</span>
                      <span className="font-label-md">1 Aux Pradasses, 33500 Les Billaux</span>
                    </div>
                  </div>
                </div>
                <div className="mt-12 p-6 bg-white/5 rounded-xl border-l-2 border-secondary italic text-on-primary-container text-sm">
                  « Une équipe qui ne se contente pas de construire : elle conçoit un lieu de vie. Un seul
                  interlocuteur, du premier croquis à la dernière lame. »
                  <span className="block mt-3 not-italic text-xs tracking-wide text-secondary-fixed">
                    Client, Libourne
                  </span>
                </div>
              </div>
              <div className="lg:w-3/5 p-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
