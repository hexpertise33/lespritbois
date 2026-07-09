import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = buildMetadata({
  title: "Aménagement extérieur à Libourne (33) | L'Esprit Bois",
  description:
    "Terrasses bois, pool houses, abris de jardin, abords de bassin et cuisines d'été. Conception et pose sur mesure à Libourne et dans toute la Gironde.",
  keywords:
    'aménagement extérieur Libourne, terrasse bois Gironde, pool house Libourne, abri de jardin, abords de piscine bois',
  path: '/amenagement-exterieur',
  ogImage: '/images/source-adefrance/construction-pool-house-aluminium-libourne-2.webp',
  ogTitle: 'Aménagement extérieur à Libourne (33)',
  ville: 'Libourne',
});

const jsonld = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://lespritbois.fr/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Aménagement extérieur',
        item: 'https://lespritbois.fr/amenagement-exterieur',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Aménagement extérieur en bois : terrasses, pool houses, abris de jardin',
    name: 'Aménagement extérieur à Libourne et en Gironde',
    areaServed: [
      { '@type': 'City', name: 'Libourne' },
      { '@type': 'AdministrativeArea', name: 'Gironde' },
      { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
    ],
    provider: {
      '@type': 'GeneralContractor',
      name: "L'Esprit Bois",
      description:
        "Créateur d'espaces extérieurs : terrasses, pool houses, abris de jardin, abords de bassin, pergolas et carports. Entreprise certifiée Qualibat, ouvrages couverts par une garantie décennale.",
      telephone: '+33557406580',
      email: 'contact@lespritbois.fr',
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
      name: "Prestations d'aménagement extérieur",
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Terrasse bois sur structure ventilée' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pool house bois ou aluminium' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Abri de jardin et dépendance' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Abords de bassin et plage de piscine' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Cuisine d'été et espace repas extérieur" } },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Que comprend un aménagement extérieur ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Tout ce qui structure la vie dehors : la terrasse qui prolonge le séjour, le pool house qui abrite l'été, l'abri de jardin qui range, les abords du bassin qui relient la piscine à la maison, la cuisine d'été qui fait sortir les repas. Nous dessinons l'ensemble comme un projet, pas comme une addition d'ouvrages.",
        },
      },
      {
        '@type': 'Question',
        name: 'Construisez-vous la piscine ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non. Le bassin relève du métier de pisciniste. Nous en habillons les abords : plage de piscine, terrasse bois autour du bassin, caillebotis, habillage de margelles, pool house. Nous travaillons volontiers en coordination avec votre pisciniste, avant ou après ses travaux.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quelle essence de bois pour une terrasse en Gironde ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Nous travaillons le douglas, le mélèze, le red cedar et le chêne. Le climat océanique du Libournais, l'exposition de votre terrasse, sa proximité avec un bassin et l'entretien que vous êtes prêt à consentir orientent le choix bien plus que le catalogue. Nous en discutons sur place, devant votre terrain.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faut-il une autorisation pour un pool house ou un abri de jardin ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le plus souvent oui, dès lors que la construction crée de l'emprise au sol. Selon la surface, une déclaration préalable de travaux suffit, ou un permis de construire devient nécessaire. En secteur protégé, une autorisation est requise même pour de petites surfaces. Les seuils dépendent du PLU de votre commune et évoluent : nous les vérifions sur pièces et montons le dossier pour vous.",
        },
      },
      {
        '@type': 'Question',
        name: "Jusqu'où va votre intervention sur un pool house ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Nous livrons le pool house hors d'eau, hors d'air : fondations, ossature, couverture, bardage, menuiseries extérieures posées et étanchéité à l'air traitée. Le second œuvre — cloisons, électricité, plomberie, revêtements — n'est pas compris, et nous le disons avant de signer plutôt qu'à la réception.",
        },
      },
      {
        '@type': 'Question',
        name: 'Êtes-vous certifiés et assurés ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui. L'Esprit Bois est une entreprise certifiée Qualibat, la qualification de référence du bâtiment, et chacun de nos ouvrages est couvert par notre garantie décennale.",
        },
      },
    ],
  },
];

export default function AmenagementExterieurPage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="amenagement-exterieur" />
      <main id="contenu">
        {/* Hero */}
        <header className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="736"
              height="981"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src="/images/terrasse-bois-pool-house-libourne.webp"
              alt="Pool house bois et terrasse en bois au bord d'une piscine, réalisation L'Esprit Bois en Gironde"
            />
            <div className="absolute inset-0 hero-interne"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-16">
            <p className="font-label-md text-label-md text-white/60 mb-6">
              <a href="/" className="hover:text-secondary-fixed transition-colors">
                Accueil
              </a>
              <span className="mx-2 text-secondary">/</span>
              <span className="text-secondary-fixed">Aménagement extérieur</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Vivre dehors
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6">
              Aménagement extérieur à Libourne et en Gironde
            </h1>
            <p className="font-body-lg text-body-lg text-white/85 max-w-2xl">
              Terrasses, pool houses, abris de jardin, abords de bassin, cuisines d'été : tout ce qui fait qu'on
              sort de chez soi sans quitter la maison.
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
        <section className="py-section-padding bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Notre approche
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                Un jardin n'est pas une addition d'ouvrages
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                <strong className="text-primary font-semibold">
                  Un aménagement extérieur réussi se pense comme un projet unique — terrasse, pool house, abords de
                  bassin, abri de jardin et cuisine d'été — plutôt que comme une addition d'ouvrages posés au fil des
                  années.
                </strong>{' '}
                Une terrasse posée un été, un abri l'année suivante, un pool house trois ans plus tard : chacun est
                peut-être bien fait, et pourtant l'ensemble ne tient pas. Les niveaux ne se répondent pas, les
                essences jurent, les circulations se contrarient.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Installés aux Billaux, à quelques minutes de <strong className="text-primary font-semibold">Libourne</strong>,
                nous dessinons l'<strong className="text-primary font-semibold">aménagement extérieur</strong> comme
                un projet unique : <strong className="text-primary font-semibold">terrasse</strong>,{' '}
                <strong className="text-primary font-semibold">pool house</strong>,{' '}
                <strong className="text-primary font-semibold">abri de jardin</strong>, abords de bassin et cuisine
                d'été — puis nous fabriquons et nous posons, dans toute la{' '}
                <strong className="text-primary font-semibold">Gironde</strong>.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Entreprise <strong className="text-primary font-semibold">certifiée Qualibat</strong>, nous couvrons
                chaque ouvrage par notre <strong className="text-primary font-semibold">garantie décennale</strong>{' '}
                —{' '}
                <a
                  href="/#methode"
                  className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
                >
                  un seul interlocuteur
                </a>
                , de l'étude à la pose.
              </p>
            </div>
          </div>
        </section>

        {/* Terrasses */}
        <section className="py-section-padding bg-surface-container-low" id="terrasses">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                  Le sol de la vie dehors
                </span>
                <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">Terrasses bois</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                  Une terrasse réussie efface la marche entre le séjour et le jardin. Elle se pense avant tout par
                  dessous : structure ventilée, écoulement de l'eau, sens des lames, fixations qui ne remontent pas
                  avec le temps.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">Platelage sur structure ventilée, plots ou lambourdes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">Douglas, mélèze, red cedar ou chêne, selon l'exposition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">Pente et évacuation des eaux étudiées avant la pose</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">Emmarchements, jardinières et banquettes intégrés</span>
                  </li>
                </ul>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-6">
                  Une terrasse appelle souvent une{' '}
                  <a
                    href="/pergolas"
                    className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
                  >
                    pergola
                  </a>{' '}
                  : même structure, même chantier, un seul interlocuteur.
                </p>
              </div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  width="950"
                  height="1267"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  src="/images/terrasse-bois-plots-gironde-1.webp"
                  alt="Terrasse bois sur plots posée au pied d'une maison, en Gironde"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pool house */}
        <section className="py-section-padding bg-surface" id="pool-house">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
                <img
                  width="768"
                  height="512"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  src="/images/source-adefrance/construction-pool-house-aluminium-libourne-2.webp"
                  alt="Pool house avec bar extérieur sous couverture aluminium, réalisé en Gironde"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                  L'été qui s'installe
                </span>
                <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">Pool houses</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                  Un pool house n'est pas un abri de plus : c'est la pièce qui rend la piscine habitable. On s'y
                  change, on y range, on y déjeune quand le soleil tape trop fort. Bois ou aluminium, adossé à la
                  maison ou posé au bord du bassin.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                  Nous le livrons <strong className="text-primary font-semibold">hors d'eau, hors d'air</strong> :
                  fondations, ossature, couverture, bardage et menuiseries extérieures posées. Le second œuvre —
                  cloisons, électricité, plomberie, revêtements — n'est pas compris, et nous vous le disons avant
                  de signer.
                </p>
                <a
                  href="/#quote"
                  className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-secondary hover:text-primary transition-all active:scale-95"
                >
                  Étudier mon pool house <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Abords de bassin : la limite explicite */}
        <section className="py-section-padding bg-primary text-white" id="abords-bassin">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-14">
              <div>
                <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
                  Autour du bassin
                </span>
                <h2 className="font-headline-md text-headline-md mt-4 mb-6">
                  Nous ne construisons pas la piscine. Nous construisons tout autour.
                </h2>
                <p className="font-body-lg text-body-lg text-on-primary-container">
                  Le bassin relève du métier de pisciniste, et nous n'allons pas prétendre le contraire. En revanche,
                  ce qui fait qu'une piscine devient un lieu de vie — la plage qui l'entoure, la terrasse qui y
                  mène, l'ombre qui la surplombe, le local qui la sert — c'est notre métier.
                </p>
              </div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  width="2000"
                  height="2949"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  src="/images/terrasse-bois-piscine-exemple-opt.jpg"
                  alt="Terrasse en bois naturel bordant une piscine, exemple d'aménagement des abords de bassin"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="border-t-2 border-secondary pt-6">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4">deck</span>
                <h3 className="font-headline-sm text-headline-sm text-secondary-fixed mb-3">Plage de piscine</h3>
                <p className="text-on-primary-container text-body-md">
                  Terrasse bois au ras de l'eau, caillebotis, habillage de margelles. Une lame antidérapante et une
                  structure qui accepte l'humidité permanente.
                </p>
              </div>
              <div className="border-t-2 border-secondary pt-6">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4">visibility_off</span>
                <h3 className="font-headline-sm text-headline-sm text-secondary-fixed mb-3">
                  Intimité &amp; local technique
                </h3>
                <p className="text-on-primary-container text-body-md">
                  Claustras, cloisons ajourées, coffrage du local technique et des pompes : ce qu'on ne veut ni voir
                  ni entendre disparaît sans être enfermé.
                </p>
              </div>
              <div className="border-t-2 border-secondary pt-6">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4">groups</span>
                <h3 className="font-headline-sm text-headline-sm text-secondary-fixed mb-3">Coordination</h3>
                <p className="text-on-primary-container text-body-md">
                  Nous intervenons avant ou après votre pisciniste, et nous nous calons sur son calendrier. Les
                  niveaux se décident à deux, pas après coup.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Abris de jardin & cuisine d'été */}
        <section className="py-section-padding bg-surface-container-low" id="abris">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-14">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Le reste du jardin
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                Abris, dépendances et cuisines d'été
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ce sont souvent les derniers ouvrages qu'on imagine, et les premiers qu'on utilise tous les jours.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="bg-white rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">cabin</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Abris de jardin</h3>
                <p className="text-on-surface-variant text-body-md">
                  Rangement des outils, du mobilier d'hiver, des vélos. Ossature bois, bardage accordé à la
                  maison, structure ventilée pour que rien ne moisisse.
                </p>
              </article>
              <article className="bg-white rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">outdoor_grill</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Cuisines d'été</h3>
                <p className="text-on-surface-variant text-body-md">
                  Un plan de travail abrité, un point d'eau, une plancha : les repas sortent, et la maison respire.
                  Souvent adossée à une pergola ou à un pool house.
                </p>
              </article>
              <article className="bg-white rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">fence</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Claustras &amp; bardages</h3>
                <p className="text-on-surface-variant text-body-md">
                  Se cacher du vis-à-vis sans se murer. Claire-voie, tasseaux verticaux, brise-vue bois : l'ombre et
                  le regard se règlent au millimètre.
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
              Aménagements extérieurs réalisés en Gironde
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  width="768"
                  height="512"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/construction-pool-house-aluminium-libourne.webp"
                  alt="Cuisine d'été et bar abrités sous une pergola aluminium, Libourne"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  width="1200"
                  height="800"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/construction-pool-house-aluminium-libourne-3.webp"
                  alt="Cuisine d'été abritée sous une pergola bioclimatique, plan de travail et plancha"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  width="1200"
                  height="800"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/construction-pool-house-aluminium-libourne-4.webp"
                  alt="Terrasse bois avec spa encastré, sous une pergola à lames orientables"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  width="1200"
                  height="800"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/Pergolas-aluminium-Libourne-5.webp"
                  alt="Pergola bioclimatique à lames orientables au-dessus d'une terrasse, Gironde"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  width="900"
                  height="990"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/Pergolas-bois-Libourne.webp"
                  alt="Terrasse bois massif et pergola adossée à la maison, Libournais"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  width="1536"
                  height="2048"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/IMG-20250129-WA0077-opt.jpg"
                  alt="Bardage bois en claire-voie servant de brise-vue en Gironde"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  width="1200"
                  height="900"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/terrasse-bois-plots-gironde-2.webp"
                  alt="Terrasse bois sur plots au pied d'une maison bois, en Gironde"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  width="850"
                  height="1133"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/terrasse-bois-plots-gironde-4.webp"
                  alt="Terrasse bois abritée par un store banne, sous les pins"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                {/* Source portrait dans un cadre 4/3 : le crop centré rognerait la marche,
                    qui est en bas de l'image. On décale le cadrage vers le bas. */}
                <img
                  width="1000"
                  height="1333"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-[center_72%] group-hover:scale-105 transition-transform duration-700"
                  src="/images/terrasse-bois-plots-gironde-3.webp"
                  alt="Emmarchement d'une terrasse bois le long d'une baie vitrée"
                />
              </div>
            </div>
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
                href="/pergolas"
                className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
              >
                pergolas
              </a>
              , nos{' '}
              <a
                href="/carports"
                className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
              >
                carports
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
                Votre extérieur à Libourne et dans tout le Libournais
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Notre atelier est basé au{' '}
                <strong className="text-primary font-semibold">1 Aux Pradasses, 33500 Les Billaux</strong>, à cinq
                minutes de Libourne. Sur un aménagement extérieur, cette proximité compte : nous venons relever les
                niveaux du terrain, nous suivons le chantier au quotidien, et nous restons joignables après la
                pose.
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
              Ce qu'on nous demande avant d'aménager un extérieur
            </h2>

            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow" open>
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Que comprend un aménagement extérieur ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Tout ce qui structure la vie dehors : la terrasse qui prolonge le séjour, le pool house qui
                  abrite l'été, l'abri de jardin qui range, les abords du bassin qui relient la piscine à la
                  maison, la cuisine d'été qui fait sortir les repas. Nous dessinons l'ensemble comme un projet,
                  pas comme une addition d'ouvrages.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">Construisez-vous la piscine ?</h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  <strong className="text-primary font-semibold">Non.</strong> Le bassin relève du métier de
                  pisciniste. Nous en habillons les abords : plage de piscine, terrasse bois autour du bassin,
                  caillebotis, habillage de margelles, pool house. Nous travaillons volontiers en coordination
                  avec votre pisciniste, avant ou après ses travaux.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Quelle essence de bois pour une terrasse en Gironde ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Nous travaillons le douglas, le mélèze, le red cedar et le chêne. Le climat océanique du
                  Libournais, l'exposition de votre terrasse, sa proximité avec un bassin et l'entretien que vous
                  êtes prêt à consentir orientent le choix bien plus que le catalogue. Nous en discutons sur
                  place, devant votre terrain.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Faut-il une autorisation pour un pool house ou un abri de jardin ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Le plus souvent oui, dès lors que la construction crée de l'emprise au sol. Selon la surface,
                  une <strong className="text-primary font-semibold">déclaration préalable</strong> de travaux
                  suffit, ou un <strong className="text-primary font-semibold">permis de construire</strong>{' '}
                  devient nécessaire. En secteur protégé, une autorisation est requise même pour de petites
                  surfaces. Les seuils dépendent du PLU de votre commune et évoluent : nous les vérifions sur
                  pièces et montons le dossier pour vous.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Jusqu'où va votre intervention sur un pool house ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Nous livrons le pool house{' '}
                  <strong className="text-primary font-semibold">hors d'eau, hors d'air</strong> : fondations,
                  ossature, couverture, bardage, menuiseries extérieures posées et étanchéité à l'air traitée. Le
                  second œuvre — cloisons, électricité, plomberie, revêtements — n'est pas compris, et nous le
                  disons avant de signer plutôt qu'à la réception.
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
                  <strong className="text-primary font-semibold">garantie décennale</strong>.
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
            <h2 className="font-headline-md text-headline-md mt-4 mb-6">Un projet d'aménagement extérieur ?</h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Dites-nous ce que vous imaginez : terrasse, pool house, abri, abords de bassin. Nous venons relever
              votre terrain et revenons vers vous sous 48h.
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
