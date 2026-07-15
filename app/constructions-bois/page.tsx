import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = buildMetadata({
  title: "Construction bois & extension à Libourne | L'Esprit Bois",
  description:
    "Maisons ossature bois, maisons en A, extensions, surélévations, pool houses et abris. Livrés hors d'eau hors d'air à Libourne et en Gironde.",
  keywords:
    'construction bois Libourne, extension ossature bois Gironde, surélévation bois, maison en A, pool house, hors d\'eau hors d\'air',
  path: '/constructions-bois',
  ogImage: '/images/source-adefrance/mais-en-a-accueil.webp',
  ogTitle: 'Construction bois & extension à Libourne (33)',
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
        name: 'Constructions bois',
        item: 'https://lesprit-bois.fr/constructions-bois',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: "Construction, extension et surélévation à ossature bois livrées hors d'eau hors d'air",
    name: 'Construction bois et extension à Libourne et en Gironde',
    areaServed: [
      { '@type': 'City', name: 'Libourne' },
      { '@type': 'AdministrativeArea', name: 'Gironde' },
      { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
    ],
    provider: {
      '@type': 'GeneralContractor',
      name: "L'Esprit Bois",
      description:
        "Constructeur bois : maisons à ossature bois, maisons en A, pool houses, abris et dépendances, livrés hors d'eau hors d'air. Entreprise certifiée Qualibat, ouvrages couverts par une garantie décennale.",
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
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Nos constructions bois',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Maison à ossature bois',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Maison en A',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pool house bois ou aluminium',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Extension à ossature bois',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Surélévation à ossature bois',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Abri de jardin et dépendance',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: "Livraison hors d'eau hors d'air",
          },
        },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Qu'est-ce qu'une maison à ossature bois ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Une construction dont la structure porteuse est faite de montants en bois, contreventés par des panneaux, et remplis d\'isolant. Les murs sont préfabriqués en atelier puis levés sur site. Le chantier est sec, rapide, et les murs sont fins à performance égale, ce qui laisse davantage de surface habitable pour une même emprise au sol.',
        },
      },
      {
        '@type': 'Question',
        name: "Qu'est-ce qu'une maison en A ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Une construction dont les murs et la toiture ne font qu'un : la charpente descend jusqu'au sol et dessine un A. Cette géométrie évacue naturellement l'eau, réduit les surfaces de façade exposées, et crée un volume intérieur à double hauteur. C'est une construction bois par excellence, et l'une de nos spécialités.",
        },
      },
      {
        '@type': 'Question',
        name: "Jusqu'où va votre intervention ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Nous livrons votre construction hors d'eau, hors d'air : fondations, ossature, charpente, couverture, bardage, menuiseries extérieures, isolation et étanchéité à l'air. Notre intervention s'arrête là. Nous ne réalisons pas le second œuvre (cloisons, électricité, plomberie, chauffage, revêtements et peinture) que vous confiez aux artisans de votre choix.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faut-il un permis de construire pour un pool house ou un abri ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le plus souvent une autorisation est nécessaire, car ces constructions créent de l'emprise au sol. Selon la surface, il s'agit d'une déclaration préalable de travaux ou d'un permis de construire, et un secteur protégé change la donne. Les seuils dépendent du PLU de votre commune et évoluent : nous les vérifions sur pièces, puis nous montons le dossier et suivons l'instruction.",
        },
      },
      {
        '@type': 'Question',
        name: 'Une construction en bois dure-t-elle vraiment ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, à condition d'être bien conçue. Le bois ne craint pas l'humidité de l'air, il craint l'eau qui stagne. Tout se joue donc dans la conception : pieds de structure décollés du sol, pare-pluie, lame d'air ventilée derrière le bardage, débords de toiture, évacuation des eaux maîtrisée. Des ouvrages bois centenaires tiennent debout partout en France.",
        },
      },
      {
        '@type': 'Question',
        name: "Comment garantissez-vous l'intégration à la maison existante ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Par un relevé précis de l'existant avant tout dessin : niveaux, alignements d'égout de toit et de faîtage, hauteurs d'allèges. Puis par le traitement des points sensibles : raccord de couverture, désolidarisation structurelle pour absorber les tassements différentiels, continuité de l'isolation et de la membrane d'étanchéité à l'air à la jonction, reprise des eaux pluviales et choix de la peau extérieure.",
        },
      },
      {
        '@type': 'Question',
        name: "Peut-on surélever n'importe quelle maison ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non. Une surélévation ajoute des charges : elle suppose une étude de structure vérifiant la capacité des murs porteurs et des fondations existantes. La légèreté de l'ossature bois est précisément ce qui rend l'opération possible là où le béton serait exclu. Le PLU peut par ailleurs limiter la hauteur constructible.",
        },
      },
      {
        '@type': 'Question',
        name: 'Mon extension est-elle soumise à la RE2020 ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Cela dépend de la surface créée : plus l'extension est grande, plus les exigences se renforcent, jusqu'à l'application complète de la RE2020. Deux principes sont constants : la réglementation ne vise que la partie nouvelle, et les extensions successives d'une même maison se cumulent. Les seuils exacts évoluent. Nous vérifions ceux en vigueur pour votre projet et vous les expliquons au rendez-vous.",
        },
      },
      {
        '@type': 'Question',
        name: 'Êtes-vous certifiés et assurés ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui. L'Esprit Bois est une entreprise certifiée Qualibat, la qualification de référence du bâtiment, et chacun de nos ouvrages est couvert par notre garantie décennale : la structure que nous posons est garantie dix ans à compter de la réception du chantier.",
        },
      },
    ],
  },
];

export default function ConstructionsBoisPage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="constructions-bois" />
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
              src="/images/source-adefrance/mais-en-a-accueil.webp"
              alt="Maison en A à ossature bois construite par L'Esprit Bois en Gironde"
            />
            <div className="absolute inset-0 hero-interne"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-16">
            <p className="font-label-md text-label-md text-white/60 mb-6">
              <a href="/" className="hover:text-secondary-fixed transition-colors">
                Accueil
              </a>
              <span className="mx-2 text-secondary">/</span>
              <span className="text-secondary-fixed">Constructions bois</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Ossature &amp; Habitat
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6">
              Construction bois et extension à Libourne et en Gironde
            </h1>
            <p className="font-body-lg text-body-lg text-white/85 max-w-2xl">
              Maison à ossature bois, maison en A, extension, surélévation, pool house ou dépendance, bâtis sur
              mesure et livrés <strong className="text-white font-semibold">hors d'eau, hors d'air</strong>.
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
                <p className="text-on-surface-variant text-body-md">De l'étude à la mise hors d'air</p>
              </div>
            </div>
          </div>
        </section>

        {/* Chapô */}
        <section className="py-section-padding bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Notre approche
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                Construire en bois, du croquis au hors d'air
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                <strong className="text-primary font-semibold">
                  Pour agrandir ou construire en bois (extension, surélévation, maison en A ou pool house), une
                  ossature bois livrée hors d'eau hors d'air permet un chantier sec et rapide, avec le second œuvre
                  confié aux artisans de votre choix.
                </strong>{' '}
                Le bois est le seul matériau de structure qui pousse. Il construit vite et sec, il stocke du carbone
                pendant toute la vie du bâtiment, et il pardonne mal l'improvisation, ce qui convient parfaitement
                à des charpentiers.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Installés aux Billaux, à quelques minutes de <strong className="text-primary font-semibold">Libourne</strong>,
                nous bâtissons dans toute la <strong className="text-primary font-semibold">Gironde</strong> :{' '}
                <strong className="text-primary font-semibold">maisons à ossature bois</strong>,{' '}
                <strong className="text-primary font-semibold">maisons en A</strong>,{' '}
                <strong className="text-primary font-semibold">pool houses</strong> en bois ou en aluminium, abris et
                dépendances. Nous concevons, nous fabriquons, nous posons nous-mêmes la structure, sans
                sous-traitance.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Entreprise <strong className="text-primary font-semibold">certifiée Qualibat</strong>, nous couvrons
                chaque ouvrage par notre <strong className="text-primary font-semibold">garantie décennale</strong>,
                et nous montons pour vous le dossier d'urbanisme,{' '}
                <a
                  href="/#methode"
                  className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
                >
                  un seul interlocuteur
                </a>
                , de l'étude à la mise hors d'air.
              </p>
            </div>
          </div>
        </section>

        {/* Ce que nous construisons */}
        <section className="py-section-padding bg-surface-container-low" id="nos-constructions">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-14">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Nos ouvrages
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">Ce que nous construisons</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                De la dépendance de jardin à la maison d'habitation, en neuf comme en greffe sur l'existant : la
                même ossature et la même exigence, seule l'échelle change.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              <article className="bg-white rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4 block">home_work</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Maison ossature bois</h3>
                <p className="text-on-surface-variant text-body-md">
                  Des murs préfabriqués en atelier, levés en quelques jours. Chantier sec, murs fins à performance
                  égale, plus de surface habitable pour une même emprise.
                </p>
              </article>
              <article className="relative bg-white rounded-xl p-8 border border-secondary/40 shadow-sm hover:shadow-xl transition-shadow duration-500">
                <div className="absolute top-6 right-6 px-2 py-0.5 bg-primary-fixed text-secondary-dark text-[10px] uppercase font-bold tracking-widest rounded">
                  Notre signature
                </div>
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4 block">cabin</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Maison en A</h3>
                <p className="text-on-surface-variant text-body-md">
                  Murs et toiture ne font qu'un. L'eau s'évacue d'elle-même, le volume intérieur monte en double
                  hauteur. Une silhouette qu'on n'oublie pas.
                </p>
              </article>
              <article className="bg-white rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4 block">pool</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Pool house</h3>
                <p className="text-on-surface-variant text-body-md">
                  Bois ou aluminium, adossé ou indépendant. L'annexe qui transforme un bassin en véritable espace de
                  vie, été comme arrière-saison.
                </p>
              </article>
              <article className="bg-white rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4 block">cottage</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Abri &amp; dépendance</h3>
                <p className="text-on-surface-variant text-body-md">
                  Atelier, bureau de jardin, remise, garage. Une petite construction se rate aussi facilement qu'une
                  grande : même méthode, même soin.
                </p>
              </article>
              <article className="bg-white rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4 block">add_home</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Extension</h3>
                <p className="text-on-surface-variant text-body-md">
                  Agrandir sans déménager. L'ossature bois se greffe sur l'existant, en chantier sec et rapide.
                  Encore faut-il réussir la jonction.
                </p>
              </article>
              <article className="bg-white rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4 block">
                  vertical_align_top
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Surélévation</h3>
                <p className="text-on-surface-variant text-body-md">
                  Gagner un étage sans emprise au sol. La légèreté du bois rend l'opération possible là où le béton
                  serait exclu, après étude de structure.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Périmètre : hors d'eau hors d'air */}
        <section className="py-section-padding bg-primary text-white" id="hors-eau-hors-air">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-14">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
                Notre spécialité
              </span>
              <h2 className="font-headline-md text-headline-md mt-4 mb-6">
                Hors d'eau, hors d'air : ce que nous livrons
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary-container">
                Nous vous remettons une construction close, couverte et étanche à l'air. Le dire avant le devis
                évite les malentendus à la réception.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="border-t-2 border-secondary pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-secondary text-4xl">umbrella</span>
                  <h3 className="font-headline-sm text-headline-sm text-secondary-fixed">Hors d'eau</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check</span>
                    <span className="text-on-primary-container text-body-md">Fondations adaptées au terrain</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check</span>
                    <span className="text-on-primary-container text-body-md">
                      Ossature, contreventement, charpente
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check</span>
                    <span className="text-on-primary-container text-body-md">
                      Couverture et évacuation des eaux pluviales
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check</span>
                    <span className="text-on-primary-container text-body-md">
                      Pare-pluie, lame d'air ventilée, bardage
                    </span>
                  </li>
                </ul>
              </div>
              <div className="border-t-2 border-secondary pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-secondary text-4xl">air</span>
                  <h3 className="font-headline-sm text-headline-sm text-secondary-fixed">Hors d'air</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check</span>
                    <span className="text-on-primary-container text-body-md">
                      Menuiseries extérieures posées et vitrées
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check</span>
                    <span className="text-on-primary-container text-body-md">Isolation en fibre de bois</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check</span>
                    <span className="text-on-primary-container text-body-md">
                      Frein-vapeur continu, adhésifs et manchons
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check</span>
                    <span className="text-on-primary-container text-body-md">Portes extérieures et seuils</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/5 border-l-2 border-secondary rounded-r-xl p-8">
              <h3 className="font-headline-sm text-headline-sm text-white mb-3">Notre intervention s'arrête là</h3>
              <p className="text-on-primary-container text-body-md mb-4">
                <strong className="text-white font-semibold">Nous ne réalisons pas le second œuvre</strong> :
                cloisons et doublages, électricité, plomberie, chauffage et ventilation, revêtements de sol et de
                mur, peinture. Ces lots sont confiés aux artisans de votre choix.
              </p>
              <p className="text-on-primary-container text-body-md">
                C'est un choix, pas une lacune. Nous préférons exceller sur la coquille : celle qui tient cinquante
                ans et qu'on ne reprend pas.
              </p>
            </div>
          </div>
        </section>

        {/* Greffe sur l'existant (repris de l'ancienne page /extensions) */}
        <section className="py-section-padding bg-surface" id="integration">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-14">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Le point critique
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                L'intégration à l'existant, millimètre par millimètre
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Une extension, ce n'est pas une petite maison posée à côté d'une grande. C'est une{' '}
                <strong className="text-primary font-semibold">jonction</strong>, et une jonction, ça se rate en
                six endroits. Voici comment nous les traitons.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              <article className="bg-white rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">straighten</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Le relevé avant le dessin</h3>
                <p className="text-on-surface-variant text-body-md">
                  Niveaux réels, alignement de l'égout de toit et du faîtage, hauteurs d'allèges, aplomb des murs.
                  Une maison ancienne n'est jamais d'équerre : on part de ce qui est, pas de ce qui devrait être.
                </p>
              </article>
              <article className="bg-white rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">roofing</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Le raccord de couverture</h3>
                <p className="text-on-surface-variant text-body-md">
                  Noue, solin, bande de rive : c'est là que l'eau cherche à entrer. Continuité de la couverture,
                  pente respectée, et reprise des eaux pluviales sur le réseau existant.
                </p>
              </article>
              <article className="bg-white rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">linear_scale</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">La désolidarisation</h3>
                <p className="text-on-surface-variant text-body-md">
                  Neuf et ancien ne tassent pas au même rythme. La jonction est conçue pour absorber ces mouvements
                  différentiels, plutôt que de les subir en fissures.
                </p>
              </article>
              <article className="bg-white rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">layers</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">La continuité de l'isolant</h3>
                <p className="text-on-surface-variant text-body-md">
                  Une isolation interrompue à la jonction crée un pont thermique, et de la condensation. L'isolant
                  et le frein-vapeur sont raccordés en continu jusqu'au mur existant.
                </p>
              </article>
              <article className="bg-white rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">air</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">L'étanchéité à l'air</h3>
                <p className="text-on-surface-variant text-body-md">
                  Le hors d'air ne s'arrête pas aux menuiseries : membrane continue, adhésifs, manchons aux
                  traversées. C'est ce qui sépare une extension performante d'une extension qui siffle.
                </p>
              </article>
              <article className="bg-white rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">palette</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">La peau extérieure</h3>
                <p className="text-on-surface-variant text-body-md">
                  Bardage bois, enduit, ou franche rupture assumée. Faire famille avec la maison sans tomber dans le
                  pastiche : c'est un choix de projet, pas un catalogue.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Pourquoi l'ossature bois */}
        <section className="py-section-padding bg-surface-container-low" id="pourquoi-le-bois">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
                <img
                  width="768"
                  height="512"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  src="/images/source-adefrance/construction-pool-house-bois-libourne.webp"
                  alt="Pool house à ossature bois construit à Libourne"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                  Pourquoi le bois
                </span>
                <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                  Un matériau de structure qui pousse
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                  On choisit souvent le bois pour de mauvaises raisons (parce que c'est joli) et on le garde pour
                  de bonnes. Il est léger, donc il autorise des fondations plus légères. Il se travaille sec, donc le
                  chantier ne sèche pas pendant des mois. Il se préfabrique, donc la précision se joue en atelier, à
                  l'abri.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">
                      Structure préfabriquée en atelier, levée en chantier{' '}
                      <strong className="text-primary font-semibold">sec</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">
                      Isolation en <strong className="text-primary font-semibold">fibre de bois</strong>, appréciée
                      pour le confort d'été
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">Murs fins à performance égale : plus de surface habitable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">
                      Matériau renouvelable, qui stocke du carbone durant toute la vie du bâtiment
                    </span>
                  </li>
                </ul>
                <p className="text-on-surface-variant text-body-md italic">
                  Essences, sections, épaisseurs d'isolant et performances visées sont arrêtées lors du rendez-vous,
                  au vu de votre terrain, et détaillées dans le devis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Notre méthode */}
        <section className="py-section-padding bg-surface" id="methode">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-14">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Notre méthode
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                Du terrain à la mise hors d'air
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Quatre étapes, un seul interlocuteur. Vous savez à chaque instant qui appeler.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
              <div className="border-t-2 border-secondary pt-6">
                <p className="wordmark text-[12px] text-secondary-dark mb-3">Étape 01</p>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Terrain &amp; faisabilité</h3>
                <p className="text-on-surface-variant text-body-md">
                  Orientation, accès, nature du sol, règlement d'urbanisme. Ce que le terrain permet décide de ce
                  qu'on dessine, jamais l'inverse.
                </p>
              </div>
              <div className="border-t-2 border-surface-variant pt-6">
                <p className="wordmark text-[12px] text-secondary-dark mb-3">Étape 02</p>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Conception &amp; permis</h3>
                <p className="text-on-surface-variant text-body-md">
                  Plans, choix des essences, devis détaillé. Nous montons le dossier d'urbanisme et suivons
                  l'instruction jusqu'à l'autorisation.
                </p>
              </div>
              <div className="border-t-2 border-surface-variant pt-6">
                <p className="wordmark text-[12px] text-secondary-dark mb-3">Étape 03</p>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Fabrication en atelier</h3>
                <p className="text-on-surface-variant text-body-md">
                  L'ossature est débitée et assemblée à l'abri, aux tolérances de l'atelier. C'est là que se gagne
                  la précision du chantier.
                </p>
              </div>
              <div className="border-t-2 border-surface-variant pt-6">
                <p className="wordmark text-[12px] text-secondary-dark mb-3">Étape 04</p>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Levage &amp; mise hors d'air</h3>
                <p className="text-on-surface-variant text-body-md">
                  Levage, couverture, bardage, menuiseries, étanchéité à l'air. Nous vous remettons la coquille,
                  close et couverte.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Urbanisme & RE2020 (repris de l'ancienne page /extensions) */}
        <section className="py-section-padding bg-surface-container-low" id="reglementation">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-14">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Le cadre légal
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                Urbanisme et RE2020 : nous vérifions avant de dessiner
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Selon la surface créée, votre extension relève d'une{' '}
                <strong className="text-primary font-semibold">déclaration préalable de travaux</strong> ou d'un{' '}
                <strong className="text-primary font-semibold">permis de construire</strong>. Au-delà d'une certaine
                surface de plancher totale, le recours à un architecte devient obligatoire. Et selon l'ampleur du
                projet, la partie nouvelle peut relever de la <strong className="text-primary font-semibold">RE2020</strong>.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ces seuils dépendent du PLU de votre commune, de la zone où se trouve votre maison, de l'existant,
                et ils évoluent. Nous les vérifions au cas par cas, avant tout dessin, et nous vous les expliquons
                de vive voix lors du rendez-vous. Un tableau générique n'aurait aucune valeur pour votre situation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="bg-white rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">map</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Nous lisons votre PLU</h3>
                <p className="text-on-surface-variant text-body-md">
                  Zone, emprise au sol, hauteur constructible, aspect des façades, secteur protégé : le règlement de
                  votre commune décide de ce qui est possible avant même le premier croquis.
                </p>
              </article>
              <article className="bg-white rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">description</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Nous montons le dossier</h3>
                <p className="text-on-surface-variant text-body-md">
                  Déclaration préalable ou permis de construire : plans, notice, insertion paysagère. Nous
                  constituons le dossier et suivons l'instruction jusqu'à l'autorisation.
                </p>
              </article>
              <article className="bg-white rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">forum</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Nous en parlons au rendez-vous</h3>
                <p className="text-on-surface-variant text-body-md">
                  Seuils applicables, obligation éventuelle d'architecte, exigences thermiques : nous vous disons ce
                  qui s'applique à <em>votre</em> projet, sur pièces, plutôt qu'une règle générale.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Galerie */}
        <section className="py-section-padding bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
              Nos chantiers
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-12">
              Constructions réalisées à Libourne et en Gironde
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  width="768"
                  height="512"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/mais-en-a-accueil.webp"
                  alt="Maison en A à ossature bois construite aux Billaux"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  width="768"
                  height="512"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/construction-pool-house-aluminium-libourne.webp"
                  alt="Pool house en aluminium réalisé à Libourne"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  width="1200"
                  height="800"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/construction-pool-house-aluminium-libourne-2.webp"
                  alt="Pool house aluminium avec bar extérieur, Libournais"
                />
              </div>
            </div>
            <p className="mt-8 text-on-surface-variant text-body-md italic">
              Uniquement des chantiers réels : les images de synthèse de nos modèles ne figurent pas dans cette
              galerie.
            </p>
            <p className="mt-10 text-on-surface-variant text-body-md">
              Découvrez aussi{' '}
              <a
                href="/realisations"
                className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
              >
                l'ensemble de nos réalisations
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
                href="/carports"
                className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
              >
                carports
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
                Votre construction bois à Libourne et dans tout le Libournais
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Notre atelier est basé au{' '}
                <strong className="text-primary font-semibold">1 Aux Pradasses, 33500 Les Billaux</strong>, à cinq
                minutes de Libourne. C'est là que votre ossature est fabriquée, avant d'être levée chez vous.
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

        {/* FAQ */}
        <section className="py-section-padding bg-surface">
          <div className="max-w-4xl mx-auto px-6 md:px-16">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
              Questions fréquentes
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-12">
              Ce qu'on nous demande avant de construire
            </h2>

            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow" open>
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Qu'est-ce qu'une maison à ossature bois ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Une construction dont la structure porteuse est faite de{' '}
                  <strong className="text-primary font-semibold">montants en bois</strong>, contreventés par des
                  panneaux, et remplis d'isolant. Les murs sont préfabriqués en atelier puis levés sur site. Le
                  chantier est sec, rapide, et les murs sont fins à performance égale, ce qui laisse davantage de
                  surface habitable pour une même emprise au sol.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Qu'est-ce qu'une maison en A ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Une construction dont les murs et la toiture ne font qu'un : la charpente descend jusqu'au sol et
                  dessine un <strong className="text-primary font-semibold">A</strong>. Cette géométrie évacue
                  naturellement l'eau, réduit les surfaces de façade exposées, et crée un volume intérieur à double
                  hauteur. C'est une construction bois par excellence, et l'une de nos spécialités.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Jusqu'où va votre intervention ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Nous livrons votre construction{' '}
                  <strong className="text-primary font-semibold">hors d'eau, hors d'air</strong> : fondations,
                  ossature, charpente, couverture, bardage, menuiseries extérieures, isolation et étanchéité à
                  l'air. <strong className="text-primary font-semibold">Notre intervention s'arrête là.</strong>{' '}
                  Nous ne réalisons pas le second œuvre (cloisons, électricité, plomberie, chauffage, revêtements
                  et peinture) que vous confiez aux artisans de votre choix.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Faut-il un permis de construire pour un pool house ou un abri ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Le plus souvent une autorisation est nécessaire, car ces constructions créent de l'emprise au sol.
                  Selon la surface, il s'agit d'une{' '}
                  <strong className="text-primary font-semibold">déclaration préalable de travaux</strong> ou d'un{' '}
                  <strong className="text-primary font-semibold">permis de construire</strong>, et un secteur
                  protégé change la donne. Les seuils dépendent du PLU de votre commune et évoluent : nous les
                  vérifions sur pièces, puis nous montons le dossier et suivons l'instruction.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Une construction en bois dure-t-elle vraiment ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Oui, à condition d'être bien conçue. Le bois ne craint pas l'humidité de l'air, il craint{' '}
                  <strong className="text-primary font-semibold">l'eau qui stagne</strong>. Tout se joue donc dans
                  la conception : pieds de structure décollés du sol, pare-pluie, lame d'air ventilée derrière le
                  bardage, débords de toiture, évacuation des eaux maîtrisée. Des ouvrages bois centenaires
                  tiennent debout partout en France.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Comment garantissez-vous l'intégration à la maison existante ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Par un <strong className="text-primary font-semibold">relevé précis de l'existant</strong> avant
                  tout dessin : niveaux, alignements d'égout de toit et de faîtage, hauteurs d'allèges. Puis par le
                  traitement des points sensibles : raccord de couverture, désolidarisation structurelle pour
                  absorber les tassements différentiels, continuité de l'isolation et de la membrane d'étanchéité à
                  l'air à la jonction, reprise des eaux pluviales et choix de la peau extérieure.
                </p>
              </details>
              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Peut-on surélever n'importe quelle maison ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Non. Une surélévation ajoute des charges : elle suppose une{' '}
                  <strong className="text-primary font-semibold">étude de structure</strong> vérifiant la capacité
                  des murs porteurs et des fondations existantes. La légèreté de l'ossature bois est précisément ce
                  qui rend l'opération possible là où le béton serait exclu. Le PLU peut par ailleurs limiter la
                  hauteur constructible.
                </p>
              </details>
              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Mon extension est-elle soumise à la RE2020 ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Cela dépend de la surface créée : plus l'extension est grande, plus les exigences se renforcent,
                  jusqu'à l'application complète de la <strong className="text-primary font-semibold">RE2020</strong>.
                  Deux principes sont constants : la réglementation ne vise que la{' '}
                  <strong className="text-primary font-semibold">partie nouvelle</strong>, et les extensions
                  successives d'une même maison se cumulent. Les seuils exacts évoluent. Nous vérifions ceux en
                  vigueur pour votre projet et vous les expliquons au rendez-vous.
                </p>
              </details>
              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Êtes-vous certifiés et assurés ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Oui. L'Esprit Bois est une entreprise{' '}
                  <strong className="text-primary font-semibold">certifiée Qualibat</strong>, la qualification de
                  référence du bâtiment, et chacun de nos ouvrages est couvert par notre{' '}
                  <strong className="text-primary font-semibold">garantie décennale</strong> : la structure que
                  nous posons est garantie dix ans à compter de la réception du chantier.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-section-padding bg-primary text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Parlons-en
            </span>
            <h2 className="font-headline-md text-headline-md mt-4 mb-6">
              Un projet de construction bois à Libourne ou en Gironde ?
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Terrain, surface, usage : nous étudions la faisabilité, vérifions le PLU et vous répondons sous 48h.
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
