import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/blog/poulailler-bois-reglementation-implantation/poulailler-bois-cover.webp';

export const metadata: Metadata = buildMetadata({
  title: "Poulailler en bois : règles et implantation",
  description:
    "Distances à respecter, règlement sanitaire départemental, orientation et conception d'un poulailler en bois qui dure, par un artisan en Gironde.",
  keywords:
    "poulailler en bois, réglementation poulailler 2026, déclaration poulailler mairie, bien-être des poules, poulailler sur mesure Gironde, construire un poulailler Libourne, poulailler bois durable, dimensionnement poulailler",
  path: '/blog/poulailler-bois-reglementation-implantation',
  ogImage: COVER,
  ogTitle: "Poulailler en bois : réglementation 2026, bien-être des poules et implantation",
  ville: 'Libourne',
});

const lienInterne =
  'text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors';

function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="-mx-6 md:-mx-16">
      <img
        loading="lazy"
        decoding="async"
        width="1200"
        height="800"
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
        name: 'Poulailler en bois',
        item: 'https://lesprit-bois.fr/blog/poulailler-bois-reglementation-implantation',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "Poulailler en bois : réglementation 2026, bien-être des poules et implantation",
    description:
      "Réglementation d'urbanisme (seuils 5 et 20 m²), déclaration obligatoire des volailles en mairie, dimensionnement au bien-être des poules, essences durables et bonne implantation : le guide complet du poulailler en bois en Gironde.",
    image: 'https://lesprit-bois.fr' + COVER,
    author: AUTEUR_REF,
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
    datePublished: '2026-07-26',
    dateModified: '2026-07-26',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/poulailler-bois-reglementation-implantation',
    },
    about: [
      { '@type': 'Thing', name: 'poulailler bois' },
      { '@type': 'Thing', name: 'réglementation poulailler' },
      { '@type': 'Thing', name: 'bien-être des poules' },
      { '@type': 'Thing', name: 'aménagement extérieur' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Faut-il une autorisation pour installer un poulailler en bois ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "En dessous de 5 m² d'emprise au sol, aucune formalité d'urbanisme n'est requise, sauf en secteur protégé (abords d'un monument historique, site classé), où la déclaration préalable est due dès le premier mètre carré. De 5 à 20 m², une déclaration préalable en mairie s'impose (instruction environ un mois). Au-delà de 20 m², c'est un permis de construire. Au-delà de 5 m² clos et couvert, une taxe d'aménagement peut s'appliquer, et le PLU comme le Code civil encadrent la hauteur et l'implantation en limite de propriété.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faut-il déclarer ses poules en mairie, même une seule ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui. Depuis les mesures de lutte contre l'influenza aviaire, tout détenteur de volailles doit se déclarer, même pour une seule poule, via le formulaire Cerfa n° 15472*02 ou par télédéclaration sur mesdemarches.agriculture.gouv.fr. Cette déclaration sanitaire est distincte de l'urbanisme. L'absence de déclaration constitue une contravention de 4e classe, punie jusqu'à 750 €.",
        },
      },
      {
        '@type': 'Question',
        name: 'Combien de poules pour quelle surface de poulailler ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Comptez au minimum environ 0,25 m² par poule à l'intérieur de l'abri, en visant plus pour leur confort, et un parcours extérieur d'environ 4 m² par poule. Prévoyez environ 20 cm de perchoir par poule et un pondoir pour 3 à 4 poules. Pour 4 à 6 poules de jardin, un poulailler d'environ 1,5 à 2 m² avec un parcours clos généreux constitue une bonne base.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quel budget pour un poulailler en bois sur mesure ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un poulailler en kit d'entrée de gamme démarre à quelques centaines d'euros, mais sa durée de vie est limitée. Un poulailler en bois sur mesure, en essence durable, avec parcours clos, protection contre les prédateurs et ventilation étudiée, représente un budget plus élevé qui se justifie par sa longévité et le bien-être des poules. Seul un devis établi sur place, selon la surface et l'implantation, chiffre honnêtement votre projet.",
        },
      },
      {
        '@type': 'Question',
        name: 'Comment entretenir un poulailler en bois ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Renouvelez régulièrement la litière et nettoyez le poulailler à fond au moins deux fois par an, avec une désinfection à chaque grand nettoyage. Assurez une ventilation haute permanente, sans courant d'air au niveau des perchoirs. Avant l'hiver, vérifiez l'étanchéité de la toiture, l'état du bois et des grillages, et renforcez la litière pour garder les poules au sec. Un saturateur tous les deux à trois ans conserve la teinte du bois.",
        },
      },
    ],
  },
];

const faq = [
  {
    q: 'Faut-il une autorisation pour installer un poulailler en bois ?',
    r: (
      <>
        En dessous de <strong className="text-primary font-semibold">5 m² d&apos;emprise au sol</strong>, aucune
        formalité d&apos;urbanisme n&apos;est requise, sauf en secteur protégé (abords d&apos;un monument historique,
        site classé), où la déclaration préalable est due dès le premier mètre carré. De 5 à 20 m², une déclaration
        préalable en mairie s&apos;impose
        (instruction environ un mois). Au-delà de 20 m², c&apos;est un permis de construire. Au-delà de 5 m² clos et
        couvert, une taxe d&apos;aménagement peut s&apos;appliquer, et le PLU comme le Code civil encadrent la hauteur
        et l&apos;implantation en limite de propriété.
      </>
    ),
  },
  {
    q: 'Faut-il déclarer ses poules en mairie, même une seule ?',
    r: (
      <>
        Oui. Depuis les mesures de lutte contre l&apos;influenza aviaire, tout détenteur de volailles doit se déclarer,
        <strong className="text-primary font-semibold"> même pour une seule poule</strong>, via le formulaire Cerfa
        n° 15472*02 ou par télédéclaration sur mesdemarches.agriculture.gouv.fr. Cette déclaration sanitaire est
        distincte de l&apos;urbanisme. L&apos;absence de déclaration constitue une contravention de 4e classe, punie
        jusqu&apos;à 750 €.
      </>
    ),
  },
  {
    q: 'Combien de poules pour quelle surface de poulailler ?',
    r: (
      <>
        Comptez au minimum environ <strong className="text-primary font-semibold">0,25 m² par poule</strong> à
        l&apos;intérieur de l&apos;abri, en visant plus pour leur confort, et un parcours extérieur d&apos;environ
        4 m² par poule. Prévoyez environ 20 cm de perchoir par poule et un pondoir pour 3 à 4 poules. Pour 4 à 6 poules
        de jardin, un poulailler d&apos;environ 1,5 à 2 m² avec un parcours clos généreux constitue une bonne base.
      </>
    ),
  },
  {
    q: 'Quel budget pour un poulailler en bois sur mesure ?',
    r: (
      <>
        Un poulailler en kit d&apos;entrée de gamme démarre à quelques centaines d&apos;euros, mais sa durée de vie est
        limitée. Un poulailler en bois sur mesure, en essence durable, avec parcours clos, protection contre les
        prédateurs et ventilation étudiée, représente un budget plus élevé qui se justifie par sa longévité et le
        bien-être des poules. Seul un devis établi sur place, selon la surface et l&apos;implantation, chiffre
        honnêtement votre projet.
      </>
    ),
  },
  {
    q: 'Comment entretenir un poulailler en bois ?',
    r: (
      <>
        Renouvelez régulièrement la litière et nettoyez le poulailler à fond au moins deux fois par an, avec une
        désinfection à chaque grand nettoyage. Assurez une <strong className="text-primary font-semibold">ventilation
        haute permanente</strong>, sans courant d&apos;air au niveau des perchoirs. Avant l&apos;hiver, vérifiez
        l&apos;étanchéité de la toiture, l&apos;état du bois et des grillages, et renforcez la litière pour garder les
        poules au sec. Un saturateur tous les deux à trois ans conserve la teinte du bois.
      </>
    ),
  },
];

export default function ArticlePoulaillerBoisPage() {
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
              height="900"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Poulailler en bois surélevé avec parcours grillagé et volaille, dans un jardin verdoyant"
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
              <span className="text-secondary-fixed">Poulailler en bois</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Poulailler
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Poulailler en bois : réglementation 2026, bien-être des poules et bonne implantation
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/70 font-label-md text-label-md">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]" aria-hidden="true">person</span>
                <a
                  href="/auteur/david-bertrand"
                  className="underline underline-offset-4 decoration-white/30 hover:decoration-secondary hover:text-white transition-colors"
                >
                  David Bertrand
                </a>,
                L&apos;Esprit Bois
              </span>
              <span className="text-secondary">·</span>
              <span>26 juillet 2026</span>
              <span className="text-secondary">·</span>
              <span>8 min de lecture</span>
            </div>
          </div>
        </header>

        {/* Chapô answer-first */}
        <section className="py-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16">
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              <strong className="text-primary font-semibold">
                Avant d&apos;installer votre poulailler : en dessous de 5 m² d&apos;emprise au sol, hors secteur
                protégé, aucune formalité
                d&apos;urbanisme ; de 5 à 20 m², une déclaration préalable en mairie ; au-delà, un permis de construire.
                Attention à la hauteur, à l&apos;implantation en limite et à la taxe d&apos;aménagement dès 5 m² clos et
                couvert, et surtout, toute détention de volailles se déclare en mairie, quelle que soit la quantité,
                même une seule poule.
              </strong>{' '}
              L&apos;engouement pour les poules de jardin ne faiblit pas, et la fin d&apos;été est le bon moment pour
              installer le poulailler avant l&apos;hiver. Une fois la réglementation posée, tout se joue sur le concret :
              dimensionner au bien-être des poules, choisir un bois qui dure et implanter l&apos;abri au bon endroit.
              Voici, en artisan, comment nous menons ces projets en Gironde.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Autorisation urbanisme */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Faut-il une autorisation pour un poulailler ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un poulailler est, aux yeux de l&apos;urbanisme, un petit abri : ce qui compte, c&apos;est son{' '}
                <strong className="text-primary font-semibold">emprise au sol</strong>. Les seuils sont les mêmes que
                pour un abri de jardin ou un pool-house (voir la{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F17578"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  fiche officielle de la déclaration préalable
                </a>{' '}
                sur service-public.gouv.fr) :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Moins de 5 m²', 'aucune formalité d’urbanisme hors secteur protégé, en abords de monument historique ou site classé, la déclaration préalable est due dès le premier mètre carré. Ailleurs, vous pouvez installer votre poulailler librement, sous réserve du règlement de votre commune.'],
                  ['De 5 à 20 m²', 'une déclaration préalable de travaux en mairie est nécessaire, avec une instruction d’environ un mois.'],
                  ['Plus de 20 m²', 'vous entrez dans le champ du permis de construire, rare pour un poulailler familial, plus fréquent pour un projet mixte (poulailler + resserre).'],
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
                Deux points passent souvent inaperçus. D&apos;abord, au-delà de{' '}
                <strong className="text-primary font-semibold">5 m² clos et couvert</strong>, l&apos;ouvrage peut être
                soumis à la{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F23263"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong className="text-primary font-semibold">taxe d&apos;aménagement</strong>
                </a>{' '}
                (taux
                communal souvent de l&apos;ordre de 1 à 5 %). Ensuite, une hauteur importante ou une implantation en
                limite de propriété peuvent être encadrées par le <strong className="text-primary font-semibold">PLU</strong>{' '}
                de votre commune et par le Code civil, un poulailler collé à la clôture du voisin n&apos;est pas
                toujours autorisé.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ces règles d&apos;urbanisme recoupent celles de tous les petits abris de jardin : nous les détaillons
                dans notre guide{' '}
                <a href="/blog/autorisation-urbanisme-abri-carport-pergola-2026" className={lienInterne}>
                  autorisation d&apos;urbanisme pour abri, carport et pergola en 2026
                </a>
                . Comme pour un carport, nous vérifions le PLU de votre commune avant d&apos;engager le chantier.
              </p>
            </section>

            <Figure
              src="/images/blog/poulailler-bois-reglementation-implantation/poules-jardin-petit-poulailler-bois.webp"
              alt="Poules dans un jardin engazonné devant un petit poulailler en bois de moins de 5 m²"
              caption="En dessous de 5 m² d'emprise au sol et hors secteur protégé, le poulailler s'installe sans formalité d'urbanisme, la déclaration des volailles, elle, reste obligatoire quelle que soit la surface."
            />

            {/* 2. Déclaration en mairie des volailles */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                La déclaration en mairie des volailles : l&apos;obligation qu&apos;on oublie
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est la formalité que presque personne ne connaît, et pourtant elle est{' '}
                <strong className="text-primary font-semibold">obligatoire pour tout détenteur de volailles, même une
                seule poule</strong>. Elle n&apos;a rien à voir avec l&apos;urbanisme : il s&apos;agit d&apos;une
                déclaration sanitaire, destinée à la lutte contre l&apos;influenza aviaire (la grippe aviaire).
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Concrètement, elle se fait via le <strong className="text-primary font-semibold">formulaire Cerfa
                n° 15472*02</strong>, à déposer en mairie, ou par télédéclaration en ligne sur le portail{' '}
                <strong className="text-primary font-semibold">mesdemarches.agriculture.gouv.fr</strong>. Elle permet
                aux services vétérinaires de savoir où se trouvent les basses-cours en cas d&apos;épizootie et de
                diffuser les consignes (mise à l&apos;abri, surveillance) le moment venu.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ne la négligez pas : l&apos;absence de déclaration constitue une{' '}
                <strong className="text-primary font-semibold">contravention de 4e classe, punie jusqu&apos;à 750 €</strong>.
                C&apos;est une démarche gratuite et rapide, à faire dès l&apos;arrivée de vos premières poules.
              </p>
            </section>

            {/* 3. Dimensionnement */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Bien dimensionner : combien de poules, quelle surface, quel parcours
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ici, la vraie réponse est <strong className="text-primary font-semibold">« ça dépend »</strong> : de la
                race, du temps que les poules passent dehors, de votre terrain. Mais quelques repères solides évitent le
                sur-effectif, première cause de stress, de picage et de maladies dans une basse-cour :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Surface de l’abri', 'environ 0,25 m² par poule au minimum à l’intérieur du poulailler, et mieux vaut viser plus large, une poule à l’étroit vit mal.'],
                  ['Parcours extérieur', 'comptez environ 4 m² par poule de parcours pour qu’elles grattent, picorent et prennent leurs bains de poussière.'],
                  ['Perchoirs', 'environ 20 cm de perchoir par poule : elles dorment perchées, c’est un besoin, pas un luxe.'],
                  ['Pondoirs', 'un pondoir pour 3 à 4 poules suffit, elles aiment pondre au même endroit, au calme et dans la pénombre.'],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Pour une basse-cour familiale de 4 à 6 poules, un poulailler d&apos;environ 1,5 à 2 m² doublé d&apos;un
                parcours clos généreux forme une base confortable. Prévoyez aussi{' '}
                <strong className="text-primary font-semibold">une ventilation haute sans courant d&apos;air</strong> au
                niveau des perchoirs, et une <strong className="text-primary font-semibold">protection contre les
                prédateurs</strong>, grillage enterré contre le renard, mailles serrées contre la fouine, sur laquelle
                nous revenons plus bas.
              </p>
            </section>

            <Figure
              src="/images/blog/poulailler-bois-reglementation-implantation/interieur-poulailler-pondoir-oeufs.webp"
              alt="Poule couvant dans un pondoir en bois garni de paille à l'intérieur d'un poulailler, avec des œufs"
              caption="Perchoirs à la bonne hauteur, pondoirs à la pénombre et ventilation haute : le bien-être des poules se joue à l'intérieur de l'abri."
            />

            {/* 4. Quel bois */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Quel bois pour un poulailler qui dure ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un poulailler est exposé en permanence à la pluie, à l&apos;humidité du sol et aux fientes : il réclame
                une essence <strong className="text-primary font-semibold">naturellement durable ou traitée pour
                l&apos;extérieur</strong>. Nos valeurs sûres, en filière locale de Nouvelle-Aquitaine :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le douglas', 'naturellement classe 3 lorsqu’il est purgé d’aubier, c’est le résineux local par excellence pour un ouvrage exposé, sans traitement chimique.'],
                  ['Le pin maritime traité classe 3/4', 'issu de la filière girondine, économique et robuste une fois traité en autoclave pour résister à l’humidité et au contact du sol.'],
                  ['Le red cedar', 'très stable et durable, une essence haut de gamme pour un poulailler soigné qui grise joliment.'],
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
                La règle de fond est celle des <strong className="text-primary font-semibold">classes d&apos;emploi</strong>,
                décrites par l&apos;institut technologique{' '}
                <a
                  href="https://www.fcba.fr/"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FCBA
                </a>{' '}
                :
                les parties en contact avec le sol ou l&apos;humidité permanente doivent viser la classe 4, la structure
                aérée et couverte se contente de la classe 3. Comme pour un carport, les pieds ne doivent{' '}
                <strong className="text-primary font-semibold">jamais être noyés dans le béton</strong> mais posés sur
                pieds métalliques, pour que le bois ne pompe pas l&apos;humidité du sol.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nous détaillons ces essences, leurs classes d&apos;emploi et leurs fourchettes de prix dans notre article{' '}
                <a href="/blog/quel-bois-pour-terrasse-exterieure" className={lienInterne}>
                  quel bois choisir pour une terrasse extérieure
                </a>,{' '}
               la logique de durabilité est exactement la même pour un poulailler.
              </p>
            </section>

            {/* 5. Où l'implanter */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Où l&apos;implanter : distance aux voisins, ensoleillement, vent, prédateurs
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                L&apos;emplacement décide du confort des poules… et de la tranquillité du voisinage. Sur nos chantiers
                en Gironde, nous arbitrons quatre critères, mètre en main, devant le terrain :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Distance aux voisins : éloigner le poulailler des limites de propriété limite les nuisances (odeurs, chant du coq) et respecte le PLU comme le Code civil.',
                  'Ensoleillement : une orientation qui capte le soleil du matin réchauffe l’abri et assainit la litière ; on évite le plein sud écrasant l’été.',
                  'Vent : dos aux vents dominants, on protège l’ouverture et les perchoirs des courants d’air, tout en gardant la ventilation haute.',
                  'Prédateurs : grillage enterré sur 20 à 30 cm contre le renard qui creuse, mailles fines et fermetures verrouillées contre la fouine, qui passe par la moindre ouverture.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Un poulailler bien implanté demande souvent d&apos;autres aménagements du même jardin, allée drainée,
                clôture, parcours engazonné. C&apos;est notre métier d&apos;
                <a href="/amenagement-exterieur" className={lienInterne}>aménagement extérieur</a> : nous pensons
                l&apos;abri dans l&apos;ensemble du terrain, pas comme un objet posé à part.
              </p>
            </section>

            <Figure
              src="/images/blog/poulailler-bois-reglementation-implantation/poulailler-parcours-clos-grillage-jardin.jpg"
              alt="Poulailler et parcours clos par un grillage, bien implanté dans un jardin planté à l'écart des limites"
              caption="Bien implanté : éloigné des limites, orienté à la lumière du matin, dos au vent et protégé des prédateurs par un grillage enterré."
            />

            {/* 6. Kit ou sur mesure */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Poulailler kit ou sur mesure : ce que change le travail d&apos;un artisan
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le kit du commerce a ses arguments : prix bas, montage rapide, disponibilité immédiate. Pour deux ou
                trois poules et un budget serré, il dépanne. Mais ses limites apparaissent vite,{' '}
                <strong className="text-primary font-semibold">bois fin peu durable, ventilation mal pensée,
                fermetures fragiles</strong> face à une fouine déterminée, et une durée de vie souvent courte sous notre
                climat girondin humide.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le sur mesure change trois choses. La <strong className="text-primary font-semibold">durabilité</strong> :
                essence et classe d&apos;emploi choisies pour tenir des années, pieds désolidarisés du sol. Le{' '}
                <strong className="text-primary font-semibold">bien-être réel</strong> : surface, perchoirs, pondoirs et
                ventilation dimensionnés à votre effectif, pas standardisés. Et l&apos;
                <strong className="text-primary font-semibold">intégration</strong> : un poulailler qui s&apos;accorde à
                votre jardin et à votre maison, avec les bons accès pour l&apos;entretien quotidien.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                C&apos;est ce que nous concevons dans le cadre de nos{' '}
                <a href="/constructions-bois" className={lienInterne}>constructions bois</a> sur mesure. Vous pouvez
                juger de notre travail dans{' '}
                <a href="/realisations" className={lienInterne}>nos réalisations en Gironde</a>. Le raisonnement kit
                contre sur-mesure, nous l&apos;avons aussi détaillé pour un ouvrage voisin, dans notre guide{' '}
                <a href="/blog/autorisation-urbanisme-abri-carport-pergola-2026" className={lienInterne}>
                  sur les formalités des abris de jardin
                </a>
                .
              </p>
            </section>

            {/* 7. Entretien et hivernage */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Entretien et hivernage : litière, ventilation, désinfection
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un poulailler bien conçu s&apos;entretient facilement, mais il s&apos;entretient. Installer l&apos;abri à
                la fin de l&apos;été laisse justement le temps de roder ces gestes avant les premiers froids :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Renouveler la litière régulièrement et faire un grand nettoyage à fond au moins deux fois par an, avec une désinfection à chaque fois (l’humidité et les parasites sont les vrais ennemis).',
                  'Maintenir une ventilation haute permanente pour évacuer l’humidité et l’ammoniac, sans jamais créer de courant d’air sur les perchoirs.',
                  'Avant l’hiver : vérifier l’étanchéité de la toiture, l’état du bois et des grillages, renforcer la litière pour garder les poules au sec et au chaud.',
                  'Sur le bois : laisser griser sans crainte, ou appliquer un saturateur tous les deux à trois ans pour conserver la teinte d’origine.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                L&apos;hiver girondin est plus humide que froid : c&apos;est l&apos;eau, pas le gel, qui menace le plus
                les poules. Un abri sec, ventilé et bien orienté leur fait passer la mauvaise saison sans difficulté.
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
              Poulailler en bois : vos questions
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
              Un poulailler pensé pour durer et pour vos poules
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Réglementation d&apos;urbanisme, déclaration des volailles en mairie, dimensionnement au bien-être,
              essence durable et bonne implantation : un poulailler réussi, c&apos;est tout cela réuni. C&apos;est le
              diagnostic que nous menons chez L&apos;Esprit Bois, entreprise qualifiée Qualibat, à Libourne et dans toute
              la Gironde, formalités comprises. Installez le vôtre avant l&apos;hiver.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/constructions-bois"
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
