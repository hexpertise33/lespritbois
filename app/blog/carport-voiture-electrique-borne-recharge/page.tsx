import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/source-adefrance/carport-bois-libourne.webp';

export const metadata: Metadata = buildMetadata({
  title: "Carport et borne de recharge : ce qu'il faut prévoir | Gironde",
  description:
    "Borne de recharge sous carport : les fourreaux à poser avant le chantier, où placer la borne, la toiture photovoltaïque et la fiscalité 2026, en Gironde.",
  keywords:
    "borne de recharge sous carport, carport voiture électrique, carport photovoltaïque, carport solaire Gironde, borne de recharge maison Libourne, recharge véhicule électrique domicile, carport borne de recharge, fourreau carport, carport Libourne, carport Gironde",
  path: '/blog/carport-voiture-electrique-borne-recharge',
  ogImage: COVER,
  ogTitle:
    'Carport et voiture électrique : borne de recharge, cheminement électrique et toiture photovoltaïque',
  ville: 'Libourne',
});

const lienInterne =
  'text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors';

function Figure({
  src,
  alt,
  caption,
  w,
  h,
}: {
  src: string;
  alt: string;
  caption: string;
  /** Dimensions réelles du fichier — à vérifier, sinon la réservation d'espace est fausse. */
  w: number;
  h: number;
}) {
  return (
    <figure className="-mx-6 md:-mx-16">
      <img
        loading="lazy"
        decoding="async"
        width={w}
        height={h}
        className="w-full h-auto rounded-2xl object-cover shadow-sm"
        src={src}
        alt={alt}
      />
      <figcaption className="mt-3 text-center font-label-md text-label-md text-on-surface-variant">
        {caption}
      </figcaption>
    </figure>
  );
}

const jsonld = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://lesprit-bois.fr/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://lesprit-bois.fr/blog' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Carport et voiture électrique',
        item: 'https://lesprit-bois.fr/blog/carport-voiture-electrique-borne-recharge',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      'Carport et voiture électrique : borne de recharge, cheminement électrique et toiture photovoltaïque',
    description:
      "Le carport est le meilleur endroit pour recharger une voiture électrique, à condition d'y penser avant de couler les plots. Fourreaux et réservations à poser pendant le chantier, emplacement de la borne, ce qu'une toiture photovoltaïque impose à la structure, fiscalité 2026 et limite entre le métier du constructeur et celui de l'électricien, par un artisan à Libourne (Gironde).",
    image: 'https://lesprit-bois.fr' + COVER,
    author: {
      '@type': 'Person',
      name: 'David Bertrand',
      jobTitle: "Expert bâtiment et créateur d'espaces extérieurs",
      worksFor: { '@type': 'Organization', name: "L'Esprit Bois" },
    },
    publisher: {
      '@type': 'Organization',
      name: "L'Esprit Bois",
      logo: {
        '@type': 'ImageObject',
        url: 'https://lesprit-bois.fr/images/source-adefrance/logo2026.png',
        width: 350,
        height: 150,
      },
    },
    datePublished: '2026-08-20',
    dateModified: '2026-08-20',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/carport-voiture-electrique-borne-recharge',
    },
    about: [
      'borne de recharge sous carport',
      'carport voiture électrique',
      'carport photovoltaïque',
      'aménagement extérieur',
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Peut-on installer une borne de recharge sous un carport ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, et c'est même l'un des meilleurs endroits : la voiture stationne toujours au même endroit, elle est abritée de la pluie pendant le branchement, et l'ouvrage est ventilé en permanence. La vraie question n'est pas de savoir si c'est possible, mais quand on le décide. Une borne installée sur un carport dont le cheminement électrique a été prévu pendant le chantier ne pose aucune difficulté ; la même borne posée sur un carport déjà monté impose souvent de rouvrir le sol, de traverser une allée finie ou de faire courir une goulotte apparente. La pose et le raccordement de la borne relèvent d'un électricien.",
        },
      },
      {
        '@type': 'Question',
        name: "Faut-il prévoir le passage électrique avant de construire le carport ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, c'est le seul conseil vraiment décisif de ce sujet. Le chantier du carport est le moment où le sol est ouvert : terrassement, plots, ancrages, parfois dalle et allée. Poser un fourreau en attente et une réservation à ce moment-là ne représente qu'une ligne modeste sur le devis. Les reprendre plus tard, c'est rouvrir une tranchée, déposer un revêtement fini et intervenir sous un ouvrage déjà monté. Nous posons ces attentes même quand la voiture électrique n'est pas encore là : un fourreau vide est l'assurance la moins chère d'un chantier.",
        },
      },
      {
        '@type': 'Question',
        name: "Le crédit d'impôt pour une borne de recharge existe-t-il encore en 2026 ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non. La page officielle du service public est explicite : le crédit d'impôt est supprimé pour les dépenses payées à partir du 1er janvier 2026. Il ne portait que sur des dépenses facturées et payées avant le 31 décembre 2025 inclus, au taux de 75 % et dans la limite de 500 € par système de charge pilotable. Beaucoup de pages commerciales continuent d'afficher ces 75 % et ces 500 € comme s'ils étaient d'actualité : ils décrivent un dispositif éteint. Faites confirmer votre situation fiscale par votre installateur et par le service des impôts, pas par une page de vente.",
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on fixer une borne de recharge sur un poteau de carport ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Souvent oui, mais cela se prépare : un poteau est un élément porteur, pas un support de fixation neutre. Sur un carport en bois, nous prévoyons un poteau de section suffisante ou un support rapporté plutôt que de percer la structure au hasard. Sur un carport en aluminium, la prudence est encore plus grande : sur beaucoup de modèles, l'évacuation des eaux de la couverture descend à l'intérieur des poteaux, et percer un profilé revient à percer une descente d'eau. Le plus simple reste de décider l'emplacement à la conception, avant la fabrication.",
        },
      },
      {
        '@type': 'Question',
        name: 'Un carport peut-il recevoir des panneaux photovoltaïques ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, à condition que la structure ait été calculée pour. Une couverture photovoltaïque ajoute une charge permanente supplémentaire, elle impose une orientation et une pente qui deviennent des paramètres du projet, elle demande une étanchéité et une évacuation des eaux étudiées, et un accès pour la maintenance. Tout cela se décide à la conception : on ne renforce pas la charpente d'un carport après coup sans le démonter en grande partie. Le dimensionnement de l'installation relève d'un bureau d'études et d'un installateur photovoltaïque, pas de nous. Une couverture photovoltaïque peut aussi modifier la formalité d'urbanisme applicable : renseignez-vous en mairie.",
        },
      },
      {
        '@type': 'Question',
        name: "Qui installe la borne : le constructeur du carport ou l'électricien ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Les deux, chacun sur son métier. Nous implantons l'ouvrage, nous ouvrons le sol, nous posons les fourreaux et les réservations, nous prévoyons le support de fixation et nous refermons proprement. Le dimensionnement, la protection, le raccordement au tableau, la pose de la borne et sa mise en service relèvent d'un électricien qualifié. Nous ne décrivons pas la mise en œuvre électrique et nous ne la réalisons pas. Le bon ordre est de faire intervenir l'électricien avant le terrassement, pour qu'il nous dise ce qu'il veut trouver dans le sol.",
        },
      },
    ],
  },
];

const repartition = [
  ['Implantation du carport et de la place de stationnement', 'Nous', 'Au relevé, avant le devis'],
  ['Terrassement, plots, ancrages et reprise des abords', 'Nous', "À l'ouverture du chantier"],
  ['Fourreaux en attente et chambre de tirage', "Nous, sur indication de l'électricien", 'Avant de refermer le sol'],
  ['Réservation et support de fixation de la borne', 'Nous', 'À la conception de la structure'],
  ['Dimensionnement, protection et raccordement au tableau', 'Électricien', 'Décidé avant le chantier'],
  ['Fourniture, pose et mise en service de la borne', 'Électricien', "Une fois l'ouvrage monté"],
  ['Dimensionnement d’une couverture photovoltaïque', "Bureau d'études et installateur", 'À la conception, jamais après'],
];

const faq = [
  {
    q: 'Peut-on installer une borne de recharge sous un carport ?',
    r: (
      <>
        Oui, et c&apos;est même l&apos;un des meilleurs endroits : la voiture stationne toujours au même endroit, elle
        est abritée de la pluie pendant le branchement, et l&apos;ouvrage est ventilé en permanence. La vraie question
        n&apos;est pas de savoir si c&apos;est possible, mais <em>quand</em> on le décide. Une borne installée sur un
        carport dont le cheminement électrique a été prévu pendant le chantier ne pose aucune difficulté ; la même borne
        posée sur un carport déjà monté impose souvent de rouvrir le sol, de traverser une allée finie ou de faire courir
        une goulotte apparente. La pose et le raccordement relèvent d&apos;un électricien.
      </>
    ),
  },
  {
    q: 'Faut-il prévoir le passage électrique avant de construire le carport ?',
    r: (
      <>
        Oui, c&apos;est le seul conseil vraiment décisif de ce sujet. Le chantier du carport est le moment où le sol est
        ouvert : terrassement, plots, ancrages, parfois dalle et allée. Poser un fourreau en attente et une réservation à
        ce moment-là ne représente qu&apos;une ligne modeste sur le devis. Les reprendre plus tard, c&apos;est rouvrir
        une tranchée, déposer un revêtement fini et intervenir sous un ouvrage déjà monté. Nous posons ces attentes même
        quand la voiture électrique n&apos;est pas encore là : un fourreau vide est l&apos;assurance la moins chère
        d&apos;un chantier.
      </>
    ),
  },
  {
    q: "Le crédit d'impôt pour une borne de recharge existe-t-il encore en 2026 ?",
    r: (
      <>
        Non. La page officielle du service public est explicite :{' '}
        <strong className="text-primary font-semibold">
          le crédit d&apos;impôt est supprimé pour les dépenses payées à partir du 1ᵉʳ janvier 2026
        </strong>
        . Il ne portait que sur des dépenses facturées et payées avant le 31 décembre 2025 inclus, au taux de 75 % et
        dans la limite de 500 € par système de charge pilotable. Beaucoup de pages commerciales continuent d&apos;afficher
        ces 75 % et ces 500 € comme s&apos;ils étaient d&apos;actualité : elles décrivent un dispositif éteint. Faites
        confirmer votre situation par votre installateur et par le service des impôts, pas par une page de vente.
      </>
    ),
  },
  {
    q: 'Peut-on fixer une borne de recharge sur un poteau de carport ?',
    r: (
      <>
        Souvent oui, mais cela se prépare : un poteau est un élément porteur, pas un support de fixation neutre. Sur un
        carport en bois, nous prévoyons un poteau de section suffisante ou un support rapporté plutôt que de percer la
        structure au hasard. Sur un carport en aluminium, la prudence est encore plus grande : sur beaucoup de modèles,
        l&apos;évacuation des eaux de la couverture descend à l&apos;intérieur des poteaux, et percer un profilé revient à
        percer une descente d&apos;eau. Le plus simple reste de décider l&apos;emplacement à la conception, avant la
        fabrication.
      </>
    ),
  },
  {
    q: 'Un carport peut-il recevoir des panneaux photovoltaïques ?',
    r: (
      <>
        Oui, à condition que la structure ait été calculée pour. Une couverture photovoltaïque ajoute une charge
        permanente supplémentaire, elle impose une orientation et une pente qui deviennent des paramètres du projet, elle
        demande une étanchéité et une évacuation des eaux étudiées, et un accès pour la maintenance. Tout cela se décide à
        la conception : on ne renforce pas la charpente d&apos;un carport après coup sans le démonter en grande partie. Le
        dimensionnement de l&apos;installation relève d&apos;un bureau d&apos;études et d&apos;un installateur
        photovoltaïque. Une couverture photovoltaïque peut aussi modifier la formalité d&apos;urbanisme applicable :
        renseignez-vous en mairie.
      </>
    ),
  },
  {
    q: "Qui installe la borne : le constructeur du carport ou l'électricien ?",
    r: (
      <>
        Les deux, chacun sur son métier. Nous implantons l&apos;ouvrage, nous ouvrons le sol, nous posons les fourreaux et
        les réservations, nous prévoyons le support de fixation et nous refermons proprement. Le dimensionnement, la
        protection, le raccordement au tableau, la pose de la borne et sa mise en service relèvent d&apos;un électricien
        qualifié. Nous ne décrivons pas la mise en œuvre électrique et nous ne la réalisons pas. Le bon ordre est de faire
        intervenir l&apos;électricien <em>avant</em> le terrassement, pour qu&apos;il nous dise ce qu&apos;il veut trouver
        dans le sol.
      </>
    ),
  },
];

export default function ArticleCarportVoitureElectriquePage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="blog" />
      <main id="contenu">
        {/* Hero */}
        <header className="relative pt-40 pb-24 md:pt-48 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="1200"
              height="646"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Carport bois abritant une voiture, réalisation à Saint-Denis-de-Pile en Gironde"
            />
            <div className="absolute inset-0 hero-interne"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-16">
            <p className="font-label-md text-label-md text-white/60 mb-6">
              <a href="/" className="hover:text-secondary-fixed transition-colors">
                Accueil
              </a>
              <span className="mx-2 text-secondary">/</span>
              <a href="/blog" className="hover:text-secondary-fixed transition-colors">
                Blog
              </a>
              <span className="mx-2 text-secondary">/</span>
              <span className="text-secondary-fixed">Carport et voiture électrique</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Carport et voiture électrique
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Carport et voiture électrique : borne de recharge, cheminement électrique et toiture photovoltaïque
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/70 font-label-md text-label-md">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]" aria-hidden="true">person</span>
                <a
                  href="/qui-sommes-nous#david-bertrand"
                  className="underline underline-offset-4 decoration-white/30 hover:decoration-secondary hover:text-white transition-colors"
                >
                  David Bertrand
                </a>
                , L&apos;Esprit Bois
              </span>
              <span className="text-secondary">·</span>
              <span>20 août 2026</span>
              <span className="text-secondary">·</span>
              <span>9 min de lecture</span>
            </div>
          </div>
        </header>

        {/* Chapô answer-first */}
        <section className="py-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16">
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              <strong className="text-primary font-semibold">
                Le carport est le meilleur endroit pour recharger une voiture électrique — à condition d&apos;y penser
                avant de couler les plots. Ce qui coûte cher après coup, ce n&apos;est jamais la borne : c&apos;est le
                cheminement électrique qu&apos;il faut reprendre, la tranchée à rouvrir et le passage à faire sous un
                ouvrage déjà monté.
              </strong>{' '}
              Nous écrivons cet article avec la casquette qui est la nôtre : celle du constructeur, pas celle de
              l&apos;électricien. Sur nos chantiers de Libourne et de sa région, nous implantons l&apos;ouvrage, nous
              posons les fourreaux et les réservations pendant que le sol est encore ouvert, puis nous passons la main.
              Voici ce qui se décide avant, ce qui se décide pendant, et ce qui ne se rattrape plus après.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Pourquoi le carport */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Pourquoi le carport est le bon endroit (et le garage souvent le mauvais)
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une voiture électrique se recharge là où elle dort. Or, dans la très grande majorité des maisons que nous
                visitons, elle ne dort pas dans le garage : le garage est devenu un atelier, une buanderie, une réserve à
                vélos et à cartons, et la voiture reste dehors. Le carport, lui, est fait pour une seule chose — abriter
                un véhicule — et il le fait à la place exacte où la voiture se gare tous les soirs.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Trois qualités le rendent particulièrement adapté à la recharge.{' '}
                <strong className="text-primary font-semibold">
                  Le stationnement y est toujours au même endroit, dans le même sens
                </strong>{' '}
                : on peut donc placer la borne en fonction du véhicule, ce qui est impossible sur une place aléatoire.
                L&apos;ouvrage est couvert : on branche et on débranche à l&apos;abri de la pluie, ce qui, en Gironde, se
                remarque à peu près trois mois par an. Et il est ouvert, donc ventilé en permanence, sans le volume
                confiné d&apos;un local fermé.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Mais l&apos;argument décisif est ailleurs, et il est de nature calendaire :{' '}
                <strong className="text-primary font-semibold">
                  un carport, ça se construit — un garage, ça existe déjà.
                </strong>{' '}
                Équiper un garage existant, c&apos;est toujours partir d&apos;un état de fait qu&apos;on subit : un
                cheminement à improviser, un mur à percer, une allée à traverser. Construire un carport, c&apos;est
                l&apos;occasion unique de décider tout cela pendant que le sol est ouvert. C&apos;est cette fenêtre-là que
                la plupart des projets laissent passer.
              </p>
            </section>

            {/* 2. Ce qui se décide avant le chantier */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qui se décide avant le chantier : implantation, fourreaux, réservations
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un chantier de carport ouvre le sol. Selon le terrain et le type d&apos;ancrage, nous décapons, nous
                creusons des fouilles pour les plots, nous coulons parfois une dalle ou une longrine, nous reprenons
                l&apos;allée d&apos;accès et les abords.{' '}
                <strong className="text-primary font-semibold">
                  C&apos;est le seul moment du projet où faire passer quelque chose sous terre ne coûte presque rien.
                </strong>
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Concrètement, voici ce que nous mettons en place à ce moment-là, quand le projet le prévoit :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Un fourreau en attente', 'entre le point de départ côté maison et l’emplacement pressenti de la borne, posé dans la tranchée pendant qu’elle est ouverte, avec un tire-fil à l’intérieur pour que l’électricien puisse passer son câble le jour venu.'],
                  ['Une chambre ou un regard de tirage', 'aux points de changement de direction et au droit du carport : c’est ce qui permet d’intervenir plus tard sans rouvrir toute la longueur.'],
                  ['Une réservation dans l’ouvrage', 'traversée de longrine, passage dans un poteau ou dans une joue, sortie protégée à la bonne hauteur : ce sont des détails de fabrication, pas des rattrapages de chantier.'],
                  ['Un support de fixation dédié', 'un poteau de section suffisante, une joue habillée ou une platine rapportée, pensés dès la conception pour recevoir un appareil sans affaiblir la structure.'],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Nous ne décidons pas seuls de ces attentes : nous posons ce qu&apos;un électricien nous demande de poser.
                Le bon réflexe, sur un projet où la recharge est envisagée, est donc de{' '}
                <strong className="text-primary font-semibold">le faire venir avant le terrassement</strong>, pas après la
                pose. Une visite de vingt minutes en amont évite des semaines de bricolage en aval.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Et si la voiture électrique n&apos;est pas encore là ? Nous posons quand même l&apos;attente, dès lors que
                le client envisage l&apos;échéance. Un fourreau vide dans une tranchée déjà creusée est de très loin{' '}
                <strong className="text-primary font-semibold">la ligne la moins chère de tout le devis</strong> — et la
                seule qui ne se rattrape pas sans casse.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Carport-bois-Libourne-5.webp"
              w={1200}
              h={646}
              alt="Charpente de carport bois en cours de montage sur sa dalle, abords non repris, chantier à Lagorce en Gironde"
              caption="À ce stade, le sol est encore accessible et les abords ne sont pas refermés : c'est le seul moment où un fourreau en attente ne coûte qu'une ligne de devis, et non une tranchée."
            />

            {/* 3. Où placer la borne */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Où placer la borne : côté poteau, côté mur, côté véhicule
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                L&apos;emplacement d&apos;une borne se décide en regardant la voiture, pas le mur. La trappe de recharge
                se trouve selon les modèles à l&apos;avant, à l&apos;arrière gauche ou à l&apos;arrière droit : le même
                carport, la même borne et deux voitures différentes ne donnent pas du tout le même geste quotidien. Nous
                posons donc toujours trois questions avant de figer un point :{' '}
                <strong className="text-primary font-semibold">
                  où est la trappe, dans quel sens on se gare, et que se passe-t-il si vous changez de voiture dans cinq
                  ans ?
                </strong>{' '}
                Un emplacement un peu central, atteignable dans les deux sens de stationnement, vaut mieux qu&apos;un
                emplacement parfait pour un seul véhicule.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">Côté mur</strong>, sur un carport adossé, c&apos;est le cas
                le plus simple : le mur de la maison offre un support franc, la borne se retrouve protégée par la
                couverture, et le cheminement depuis l&apos;intérieur est souvent court. C&apos;est la configuration que
                nous recommandons quand la géométrie du terrain le permet.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">Côté poteau</strong>, sur un carport autoportant, il faut
                être plus attentif. Un poteau est un élément porteur : ce n&apos;est pas un piquet où l&apos;on visse ce
                qu&apos;on veut. Sur un ouvrage en bois, nous prévoyons soit un poteau de section généreuse, soit un
                support rapporté qui reprend l&apos;appareil sans entamer la pièce porteuse. Sur un{' '}
                <strong className="text-primary font-semibold">carport en aluminium</strong>, la vigilance est encore plus
                grande, et c&apos;est un point que presque personne ne signale : sur beaucoup de modèles,{' '}
                <strong className="text-primary font-semibold">
                  les eaux de la couverture descendent à l&apos;intérieur des poteaux
                </strong>
                . Percer un profilé au mauvais endroit, c&apos;est percer une descente d&apos;eau — avec une fuite qui ne
                se déclare qu&apos;au premier gros orage. Sur ces ouvrages, l&apos;emplacement se décide avant la
                fabrication, pas la perceuse à la main.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Restent deux règles de bon sens, qui font la différence à l&apos;usage. La borne ne doit pas se trouver
                dans la zone où l&apos;on ouvre les portières ni là où l&apos;on manœuvre en marche arrière : un appareil
                fixé à hauteur de pare-chocs finit toujours par prendre un coup. Et{' '}
                <strong className="text-primary font-semibold">
                  le câble de recharge ne doit jamais traverser le passage des piétons
                </strong>
                , ni celui qui mène à la porte d&apos;entrée. Cela se règle sur le plan, pas sur le chantier.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ces arbitrages supposent évidemment que le carport soit assez grand pour qu&apos;on puisse encore circuler
                autour de la voiture, portières ouvertes et câble en main. Nous ne refaisons pas ici les cotes : elles sont
                détaillées dans notre guide des{' '}
                <a href="/blog/dimensions-carport-taille-hauteur" className={lienInterne}>
                  dimensions d&apos;un carport, largeur, longueur et hauteur
                </a>
                . Retenez seulement qu&apos;un carport dimensionné au plus juste devient franchement inconfortable dès
                qu&apos;on y ajoute un câble.
              </p>
            </section>

            <Figure
              src="/images/blog/carport-voiture-electrique-borne-recharge/borne-recharge-murale-cable-branche-vehicule.jpg"
              w={1200}
              h={801}
              alt="Borne de recharge murale pour voiture électrique, câble branché sur le boîtier au droit du stationnement"
              caption="Sur un mur, la borne trouve un support franc et un cheminement court. Sur un poteau, l'emplacement se décide à la conception : un poteau porte l'ouvrage et, en aluminium, il évacue souvent aussi l'eau de la couverture."
            />

            {/* 4. Toiture photovoltaïque */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Toiture photovoltaïque : ce qu&apos;un carport peut porter, et ce qui se décide à la conception
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                L&apos;idée est séduisante et parfaitement légitime : une surface de toiture inutilisée, plein sud, au
                droit d&apos;un véhicule à recharger. Nous ne dimensionnons pas d&apos;installation solaire — ce
                n&apos;est pas notre métier, et nous y revenons plus bas — mais nous dimensionnons la structure qui la
                porte, et c&apos;est là que tout se joue.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Quatre éléments doivent être arrêtés avant le premier trait de crayon :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Une charge permanente supplémentaire', 'une couverture photovoltaïque pèse, et elle pèse tout le temps. Cela se répercute sur les sections, sur le contreventement, sur les ancrages et jusque sur les fondations. Un carport calculé pour une couverture légère ne devient pas porteur parce qu’on l’a décidé après.'],
                  ['L’orientation et la pente', 'elles cessent d’être un choix purement esthétique et deviennent un paramètre du projet. L’implantation de l’ouvrage sur le terrain s’en trouve parfois modifiée — d’où l’intérêt d’en parler au relevé, pas au montage.'],
                  ['L’étanchéité et l’évacuation des eaux', 'que les modules soient posés en surimposition ou qu’ils fassent office de couverture, l’eau doit être conduite proprement jusqu’au sol. C’est un travail de couvreur, et il se dessine à la conception.'],
                  ['L’accès pour la maintenance', 'une installation se visite, se nettoie, se dépanne. Un ouvrage sur lequel on ne peut plus intervenir sans nacelle ni démontage devient une charge, pas une ressource.'],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La règle que nous répétons à chaque étude tient en une phrase :{' '}
                <strong className="text-primary font-semibold">
                  on ne renforce pas la charpente d&apos;un carport après coup sans le démonter en grande partie.
                </strong>{' '}
                Un carport solaire n&apos;est pas un carport auquel on a ajouté des panneaux : c&apos;est un ouvrage
                conçu dès l&apos;origine pour les porter. Nous préférons le dire avant le devis plutôt que deux ans après.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Sur tout ce qui touche à la production, au dimensionnement de l&apos;installation, au raccordement et à la
                valorisation de l&apos;électricité produite,{' '}
                <strong className="text-primary font-semibold">
                  adressez-vous à un bureau d&apos;études et à un installateur photovoltaïque
                </strong>
                . Nous ne donnerons ici ni puissance, ni rendement, ni production annuelle : nous ne les mesurons pas, et
                les recopier depuis une plaquette commerciale serait vous rendre un mauvais service.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Un point d&apos;urbanisme, en revanche, mérite d&apos;être signalé, parce qu&apos;il surprend souvent :{' '}
                <strong className="text-primary font-semibold">
                  une couverture photovoltaïque peut modifier la formalité applicable à votre projet
                </strong>{' '}
                par rapport au même carport couvert de façon classique. Nous ne donnons pas de seuil ici — les règles
                dépendent de la commune et de la zone. Reportez-vous à notre article sur les{' '}
                <a href="/blog/autorisation-urbanisme-abri-carport-pergola-2026" className={lienInterne}>
                  autorisations d&apos;urbanisme d&apos;un abri, d&apos;un carport ou d&apos;une pergola
                </a>{' '}
                et posez la question au service urbanisme de votre mairie avant d&apos;arrêter le projet.
              </p>
            </section>

            <Figure
              src="/images/carport-solaire-lisudestemps.webp"
              w={1400}
              h={1050}
              alt="Structure aluminium à toiture photovoltaïque, panneaux solaires intégrés à la couverture"
              caption="Visuel du fabricant LI-SU des Temps. Le principe est le même sur un carport : charge des modules, pente, étanchéité et accès de maintenance se calculent avec la structure, pas après elle."
            />

            {/* 5. Aides et fiscalité */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Aides et fiscalité en 2026 : ce qui a disparu, ce qui reste
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est la section pour laquelle nous avons pris le plus de précautions, parce que c&apos;est celle où
                le web raconte massivement autre chose que la réalité. Le fait, tel que l&apos;énonce la{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F35578"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  fiche officielle du service public sur le crédit d&apos;impôt pour un système de charge
                </a>
                , est le suivant :{' '}
                <strong className="text-primary font-semibold">
                  « Le crédit d&apos;impôt est supprimé pour les dépenses payées à partir du 1ᵉʳ janvier 2026. »
                </strong>
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ce dispositif a bel et bien existé, et il était intéressant — au passé. Il valait{' '}
                <strong className="text-primary font-semibold">75 % des dépenses</strong>, dans la limite de{' '}
                <strong className="text-primary font-semibold">500 € par système de charge pilotable</strong>, et il ne
                portait que sur des dépenses <strong className="text-primary font-semibold">facturées et payées avant
                le 31 décembre 2025 inclus</strong>. Le système devait être <em>pilotable</em>, c&apos;est-à-dire capable
                de moduler la puissance appelée ou de programmer la recharge. Pour un chantier engagé aujourd&apos;hui,
                tout cela appartient à l&apos;histoire fiscale.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">
                  Préparez-vous à lire partout ailleurs le contraire.
                </strong>{' '}
                Sites de fabricants, comparateurs, pages d&apos;installateurs : beaucoup affichent encore « 75 %, jusqu&apos;à
                500 € » en tête de page, parfois avec un bandeau « 2026 ». Ces pages n&apos;ont simplement pas été mises à
                jour. Nous appliquons sur ce blog une règle sans exception :{' '}
                <strong className="text-primary font-semibold">
                  un chiffre ne se recopie jamais depuis une page commerciale
                </strong>
                , il se vérifie à la source officielle — et quand la source ne dit rien, nous ne disons rien non plus.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Deux précisions dans le même esprit. Sur la <strong className="text-primary font-semibold">TVA</strong> :
                un taux réduit peut s&apos;appliquer selon les cas, mais nous ne citerons pas de pourcentage ici, faute
                d&apos;une source officielle qui traite explicitement des bornes de recharge — à faire confirmer par votre
                installateur et par le service des impôts. Sur la{' '}
                <strong className="text-primary font-semibold">qualification de l&apos;installateur</strong> : la fiche
                officielle consultée parle de l&apos;entreprise qui fournit l&apos;équipement ou de son sous-traitant.
                Nous vous conseillons donc de faire appel à un électricien qualifié, sans invoquer d&apos;obligation dont
                nous n&apos;avons pas trouvé la trace.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Reste-t-il quelque chose ? Des dispositifs subsistent, mais l&apos;essentiel de ce qui existe encore vise
                le <strong className="text-primary font-semibold">résidentiel collectif et les professionnels</strong>,
                pas la maison individuelle. Nous ne citerons ni montant ni nom de programme : le paysage a changé au 1ᵉʳ
                janvier 2026, et une information périmée coûte plus cher qu&apos;une absence d&apos;information.
                Interrogez votre installateur, et passez un coup de fil à votre mairie ou à votre communauté de communes,
                qui connaissent les aides locales du moment.
              </p>
            </section>

            {/* 6. Limite de métier */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Où s&apos;arrête notre métier, où commence celui de l&apos;électricien
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Nous posons ici la même limite de métier que partout ailleurs sur ce blog, et nous préférons l&apos;écrire
                noir sur blanc :{' '}
                <strong className="text-primary font-semibold">
                  nous ne décrivons pas la mise en œuvre électrique et nous ne la réalisons pas.
                </strong>{' '}
                Vous ne trouverez dans cet article ni puissance de borne, ni intensité, ni section de conducteur, ni type
                de protection, ni profondeur de tranchée. Ce ne sont pas des informations que nous détenons : ce sont
                celles d&apos;un électricien qualifié, qui les établit en fonction de votre installation, de votre
                abonnement et de votre véhicule.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ce que nous savons faire, en revanche, c&apos;est construire l&apos;ouvrage qui accueillera tout cela — et
                le construire de façon que l&apos;électricien trouve, le jour de son intervention, exactement ce dont il a
                besoin. Voici comment nous répartissons les rôles sur un projet :
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Poste</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Qui</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Quand ça se décide</th>
                    </tr>
                  </thead>
                  <tbody>
                    {repartition.map((ligne, i) => (
                      <tr key={ligne[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}>
                        <td className="px-4 py-3 text-primary font-semibold">{ligne[0]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6">
                Le scénario qui tourne mal, nous le connaissons par cœur : une borne achetée en ligne, livrée dans son
                carton, et un artisan à qui l&apos;on demande de « la brancher au passage ». Nous refusons, et tout
                professionnel sérieux refusera. Le bon enchaînement est l&apos;inverse :{' '}
                <strong className="text-primary font-semibold">
                  l&apos;électricien passe avant nous, il nous dit ce qu&apos;il veut trouver dans le sol et sur
                  l&apos;ouvrage, nous le posons, il revient après le montage.
                </strong>{' '}
                Deux visites bien placées valent mieux qu&apos;une reprise.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Carport-bois-Libourne-2.webp"
              w={1200}
              h={646}
              alt="Carport bois sur mesure adossé au prolongement d'une maison, abords en gravier, à Lugon-et-l'Île-du-Carnay en Gironde"
              caption="Adossé au pignon, l'ouvrage garde le tableau de la maison à quelques mètres : c'est la configuration où le cheminement électrique est le plus court, donc le moins cher à préparer."
            />

            {/* 7. Budget et arbitrage */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Budget et arbitrage selon le programme (Libourne, Gironde)
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Nous ne donnerons aucun prix de borne ni d&apos;installation électrique : ce n&apos;est pas notre devis,
                et les fourchettes qui circulent recouvrent des prestations très différentes. En revanche, nous pouvons
                chiffrer ce qui nous concerne. Sur nos propres chantiers en 2026, la préparation d&apos;un carport à la
                recharge — fourreau en attente, regard de tirage, réservation dans l&apos;ouvrage et support de fixation —
                représente le plus souvent{' '}
                <strong className="text-primary font-semibold">
                  un supplément de quelques centaines d&apos;euros
                </strong>
                , très variable selon la longueur du cheminement, la nature du sol et ce qu&apos;il faut traverser. Le
                même travail repris après coup, avec réouverture de tranchée et reprise du revêtement, se compte
                généralement{' '}
                <strong className="text-primary font-semibold">en plusieurs fois ce montant</strong> — et le résultat est
                rarement aussi propre.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Pour le reste, l&apos;arbitrage se ramène à trois situations, que nous rencontrons dans cet ordre de
                fréquence autour de Libourne :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['La voiture électrique est déjà là', 'le projet se conçoit avec l’électricien dès le relevé. C’est le cas le plus simple : tout est arbitré avant d’ouvrir le sol, et rien n’est repris.'],
                  ['Elle est envisagée dans quelques années', 'nous posons l’attente et nous nous arrêtons là. Rien n’est branché, rien ne vieillit, et le jour venu l’intervention se limite à tirer un câble dans un fourreau existant.'],
                  ['Elle n’est pas au programme', 'nous en parlons quand même, une fois, au moment du devis. Sur un ouvrage destiné à durer vingt ans, se fermer cette porte pour économiser une ligne modeste est un mauvais calcul — et la revente du bien la rouvre souvent.'],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le budget de l&apos;ouvrage lui-même, lui, dépend d&apos;abord de la matière et de la couverture retenues.
                Nous les avons traités ailleurs : notre{' '}
                <a href="/blog/carport-bois-guide" className={lienInterne}>
                  guide du carport en bois
                </a>{' '}
                détaille essences, toitures et fourchettes, et notre{' '}
                <a href="/blog/carport-aluminium-ou-bois-comparatif" className={lienInterne}>
                  comparatif carport aluminium ou bois
                </a>{' '}
                tranche selon l&apos;usage — nous vendons et posons les deux, donc nous n&apos;avons aucun intérêt à
                pousser l&apos;une plutôt que l&apos;autre. Sur le sujet qui nous occupe ici, les deux matières se
                préparent aussi bien : la différence tient au moment où l&apos;on décide, pas au matériau.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Autour de Libourne, entre les maisons de bourg à l&apos;allée pavée qu&apos;on n&apos;a pas envie de
                rouvrir et les terrains de la campagne girondine où le tableau électrique se trouve à trente mètres du
                stationnement, c&apos;est presque toujours la même conclusion qui s&apos;impose : le supplément se décide
                au relevé. Vous pouvez voir nos ouvrages finis dans{' '}
                <a href="/realisations" className={lienInterne}>
                  nos réalisations en Gironde
                </a>
                , découvrir notre approche des{' '}
                <a href="/carports" className={lienInterne}>
                  carports sur mesure, bois et aluminium
                </a>{' '}
                et l&apos;ensemble de nos{' '}
                <a href="/constructions-bois" className={lienInterne}>
                  constructions bois
                </a>
                , de l&apos;étude à la pose.
              </p>
            </section>
          </div>
        </article>

        {/* FAQ */}
        <section className="py-section-padding bg-surface-container-low">
          <div className="max-w-4xl mx-auto px-6 md:px-16">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
              Questions fréquentes
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-12">
              Carport et voiture électrique : vos questions
            </h2>
            <div className="space-y-4">
              {faq.map((item, i) => (
                <details
                  key={item.q}
                  className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow"
                  {...(i === 0 ? { open: true } : {})}
                >
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-headline-sm text-headline-sm text-primary pr-6">{item.q}</h3>
                    <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform" aria-hidden="true">
                      expand_more
                    </span>
                  </summary>
                  <p className="text-on-surface-variant text-body-md mt-4">{item.r}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Conclusion + CTA */}
        <section className="py-section-padding bg-primary text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Le mot de la fin
            </span>
            <h2 className="font-headline-md text-headline-md mt-4 mb-6">
              Un carport prêt pour la voiture d&apos;après
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Tout ce qui compte dans ce sujet se joue avant le premier coup de pelle : un fourreau posé pendant que le
              sol est ouvert, une réservation dessinée avec la structure, un support prévu au bon endroit. Le reste
              appartient à un électricien, et nous le disons volontiers. Si vous construisez un carport à Libourne ou
              ailleurs en Gironde, parlons de la recharge au moment du relevé — c&apos;est le seul moment où cela ne
              coûte presque rien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/carports"
                className="bg-secondary text-primary px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-secondary-fixed transition-all active:scale-95"
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
