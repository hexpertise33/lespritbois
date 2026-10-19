import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/realisations/studio-jardin-ossature-bois-saint-martin-du-bois-2.webp';

export const metadata: Metadata = buildMetadata({
  title: "Fondation d'abri de jardin bois : dalle ou plots ? Gironde",
  description:
    "Dalle, plots sur graviers ou vis de fondation : sur quoi poser un abri de jardin bois selon le sol, l'usage et la taille, autour de Libourne.",
  keywords:
    'fondation abri de jardin bois, dalle béton abri de jardin, plots abri de jardin, vis de fondation abri, longrines abri de jardin, support abri de jardin, abri de jardin sol argileux, abri de jardin Libourne, abri de jardin Gironde',
  path: '/blog/fondation-abri-jardin-bois-dalle-plots',
  ogImage: COVER,
  ogTitle: 'Sur quoi poser un abri de jardin en bois : dalle, plots, longrines ou vis de fondation ?',
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
  /** Dimensions réelles du fichier, à vérifier, sinon la réservation d'espace est fausse. */
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
        name: "Fondation d'abri de jardin bois",
        item: 'https://lesprit-bois.fr/blog/fondation-abri-jardin-bois-dalle-plots',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Sur quoi poser un abri de jardin en bois : dalle, plots, longrines ou vis de fondation ?',
    description:
      "Dalle béton, plots et longrines sur lit drainé ou vis de fondation : comment choisir le support d'un abri de jardin en bois selon le sol, l'usage et la taille, et ce que ce choix change à l'urbanisme, en Gironde.",
    image: 'https://lesprit-bois.fr' + COVER,
    author: AUTEUR_REF,
    publisher: {
      '@type': 'Organization',
      name: "L'Esprit Bois",
      logo: {
        '@type': 'ImageObject',
        url: 'https://lesprit-bois.fr/icon-512.png',
        width: 512,
        height: 512,
      },
    },
    datePublished: '2026-10-19',
    dateModified: '2026-10-19',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/fondation-abri-jardin-bois-dalle-plots',
    },
    about: [
      { '@type': 'Thing', name: 'fondation abri de jardin' },
      { '@type': 'Thing', name: 'abri de jardin bois' },
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
        name: 'Peut-on poser un abri de jardin en bois directement sur la terre ou la pelouse ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non. Posé à même la terre, le plancher et le bas des parois restent au contact de l'humidité du sol, ne sèchent jamais et pourrissent en quelques saisons, quelle que soit l'essence. Le sol bouge aussi, ce qui déforme l'abri et fait coincer la porte. Il faut toujours un support qui garde le bois hors d'eau et laisse l'air circuler dessous : dalle, plots sur lit drainé ou vis de fondation.",
        },
      },
      {
        '@type': 'Question',
        name: 'Dalle béton ou plots : lequel choisir pour un abri de jardin ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La dalle s'impose quand l'abri devient une pièce : atelier, bureau de jardin, outillage lourd ou tondeuse autoportée qui roule à l'intérieur. Pour un abri de rangement classique, des plots béton portant des longrines sur un lit de graviers drainé suffisent, coûtent moins cher et ventilent mieux le plancher. Le sol, l'usage et la taille de l'abri décident, pas l'habitude.",
        },
      },
      {
        '@type': 'Question',
        name: 'Les vis de fondation conviennent-elles à un sol argileux ou en pente ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Ce sont souvent les meilleurs terrains pour elles. Sur une pente, elles évitent de terrasser ou de construire un muret ; sur une argile qui gonfle et se rétracte, leurs têtes réglables permettent de reprendre le niveau si le sol bouge. Elles conviennent aussi quand une bétonnière ne peut pas accéder au fond du jardin. Leur tenue dépend du terrain : un sol très caillouteux ou un remblai récent se vérifie avant de s'engager.",
        },
      },
      {
        '@type': 'Question',
        name: "Faut-il une autorisation d'urbanisme pour la dalle d'un abri de jardin ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le support ne change rien aux formalités : c'est la surface de l'abri qui décide. Dans le cas général, aucune formalité sous 5 m², une déclaration préalable entre 5 et 20 m², un permis de construire au-delà. Le seuil peut être relevé en zone urbaine d'une commune dotée d'un PLU, à vérifier en mairie, et un secteur protégé impose des règles plus strictes. Un abri de plus de 5 m² entre par ailleurs dans le calcul de la taxe d'aménagement.",
        },
      },
      {
        '@type': 'Question',
        name: 'Les plots en plastique suffisent-ils pour un abri de jardin ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Pour un très petit abri léger, un coffre de jardin ou un range-bûches, oui, à condition qu'ils reposent sur un sol stabilisé et drainé. Pour un abri de rangement de taille courante, et a fortiori pour un atelier, nous préférons des plots béton ou des vis de fondation : ils tiennent mieux le niveau dans le temps et ne se tassent pas dans un sol meuble ou humide.",
        },
      },
    ],
  },
];

const supports = [
  ['Dalle béton', 'Abri qui devient une pièce : atelier, bureau, outils lourds, autoportée', 'Sol plan et propre, accès de plain-pied, supporte un usage intensif', 'Terrassement, coffrage et béton ; exige pente, débord et coupure capillaire'],
  ['Plots béton + longrines', 'Abri de rangement classique sur terrain plat et sain', 'Plancher ventilé, budget contenu, chantier léger', 'Demande un lit drainé et un réglage soigné des niveaux'],
  ['Vis de fondation', 'Pente, sol argileux, accès difficile, jardin à préserver', 'Sans béton, posé vite, têtes réglables si le sol bouge', 'Tenue à vérifier en sol très caillouteux ou en remblai'],
  ['Plots plastique', 'Très petit abri léger, coffre, range-bûches', 'Économique, posé en une heure', 'Se tasse en sol meuble ; à réserver aux petits volumes'],
];

const faq = [
  {
    q: 'Peut-on poser un abri de jardin en bois directement sur la terre ou la pelouse ?',
    r: (
      <>
        Non. Posé à même la terre, le plancher et le bas des parois restent au contact de l&apos;humidité du sol, ne
        sèchent jamais et pourrissent en quelques saisons, quelle que soit l&apos;essence. Le sol bouge aussi, ce qui
        déforme l&apos;abri et fait coincer la porte. Il faut toujours un support qui garde le bois hors d&apos;eau et
        laisse l&apos;air circuler dessous : dalle, plots sur lit drainé ou vis de fondation.
      </>
    ),
  },
  {
    q: 'Dalle béton ou plots : lequel choisir pour un abri de jardin ?',
    r: (
      <>
        La dalle s&apos;impose quand l&apos;abri devient une pièce : atelier, bureau de jardin, outillage lourd ou
        tondeuse autoportée qui roule à l&apos;intérieur. Pour un abri de rangement classique, des plots béton portant
        des longrines sur un lit de graviers drainé suffisent, coûtent moins cher et ventilent mieux le plancher. Le
        sol, l&apos;usage et la taille de l&apos;abri décident, pas l&apos;habitude.
      </>
    ),
  },
  {
    q: 'Les vis de fondation conviennent-elles à un sol argileux ou en pente ?',
    r: (
      <>
        Ce sont souvent les meilleurs terrains pour elles. Sur une pente, elles évitent de terrasser ou de construire un
        muret ; sur une argile qui gonfle et se rétracte, leurs têtes réglables permettent de reprendre le niveau si le
        sol bouge. Elles conviennent aussi quand une bétonnière ne peut pas accéder au fond du jardin. Leur tenue dépend
        du terrain : un sol très caillouteux ou un remblai récent se vérifie avant de s&apos;engager.
      </>
    ),
  },
  {
    q: "Faut-il une autorisation d'urbanisme pour la dalle d'un abri de jardin ?",
    r: (
      <>
        Le support ne change rien aux formalités : c&apos;est la surface de l&apos;abri qui décide. Dans le cas général,
        aucune formalité sous 5 m², une déclaration préalable entre 5 et 20 m², un permis de construire au-delà. Le
        seuil peut être relevé en zone urbaine d&apos;une commune dotée d&apos;un PLU, à vérifier en mairie, et un
        secteur protégé impose des règles plus strictes. Un abri de plus de 5 m² entre par ailleurs dans le calcul de
        la taxe d&apos;aménagement.
      </>
    ),
  },
  {
    q: 'Les plots en plastique suffisent-ils pour un abri de jardin ?',
    r: (
      <>
        Pour un très petit abri léger, un coffre de jardin ou un range-bûches, oui, à condition qu&apos;ils reposent sur
        un sol stabilisé et drainé. Pour un abri de rangement de taille courante, et a fortiori pour un atelier, nous
        préférons des plots béton ou des vis de fondation : ils tiennent mieux le niveau dans le temps et ne se tassent
        pas dans un sol meuble ou humide.
      </>
    ),
  },
];

export default function ArticleFondationAbriJardinBoisPage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="blog" />
      <main id="contenu">
        {/* Hero */}
        <header className="relative pt-40 pb-24 md:pt-48 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="1360"
              height="1020"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Bâtiment de jardin en ossature bois et bardage douglas posé sur un soubassement béton, chantier L'Esprit Bois à Saint-Martin-du-Bois en Gironde"
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
              <span className="text-secondary-fixed">Fondation d&apos;abri de jardin bois</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Abri de jardin
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Sur quoi poser un abri de jardin en bois : dalle, plots, longrines ou vis de fondation ?
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
              <span>19 octobre 2026</span>
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
                Posez votre abri de jardin en bois sur une dalle béton s&apos;il devient une pièce (atelier, bureau,
                outils lourds, tondeuse autoportée), sur des plots béton et des longrines posés sur un lit de graviers
                drainé s&apos;il sert au rangement classique, et sur des vis de fondation si le terrain est en pente,
                argileux ou difficile d&apos;accès. Jamais à même la terre.
              </strong>{' '}
              Ce qui fait mourir un abri bois, ce n&apos;est presque jamais l&apos;essence : c&apos;est le bas des parois
              et le plancher qui restent au contact de l&apos;humidité. Le bon support est celui qui garde le bois hors
              d&apos;eau et ventilé sur votre sol, pour votre usage et à la taille de votre abri. Voici comment nous le
              choisissons sur nos chantiers autour de Libourne.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* Réponse courte */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                La réponse courte : ce qui use un abri par le bas
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Quand on nous appelle pour un abri qui « ne tient plus », le diagnostic est presque toujours le même :
                une lisse basse noircie, des lames de plancher qui s&apos;enfoncent sous le pied, un bardage qui a bu
                par sa tranche inférieure. Le haut de l&apos;abri, lui, va bien.{' '}
                <strong className="text-primary font-semibold">
                  Le bois supporte très bien la pluie s&apos;il sèche ensuite ; il ne supporte pas de rester humide.
                </strong>{' '}
                Or le pied d&apos;un abri posé trop bas, sur une terre qui garde l&apos;eau, ne sèche jamais.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Une essence durable et un traitement adapté à l&apos;exposition (les classes d&apos;emploi du bois sont
                documentées par{' '}
                <a href="https://www.fcba.fr/" className={lienInterne} target="_blank" rel="noopener noreferrer">
                  l&apos;institut technologique FCBA
                </a>
                ) retardent le problème ; seul le support le règle. Un bon support remplit trois fonctions : porter
                l&apos;abri de niveau sans tassement, tenir le bois à distance de la terre et de l&apos;eau qui
                rejaillit, laisser l&apos;air circuler pour que tout sèche. Voici les quatre solutions que nous
                rencontrons, et le cas où chacune gagne :
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Support</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Pour quel cas</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Atouts</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Limites</th>
                    </tr>
                  </thead>
                  <tbody>
                    {supports.map((ligne, i) => (
                      <tr
                        key={ligne[0]}
                        className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}
                      >
                        <td className="px-4 py-3 text-primary font-semibold whitespace-nowrap">{ligne[0]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[2]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <Figure
              src="/images/blog/fondation-abri-jardin-bois-dalle-plots/abri-jardin-bois-pose-a-meme-le-sol-bardage-grise.webp"
              w={800}
              h={531}
              alt="Vieil abri de jardin en bois posé à même le sol, planches grisées et bas de paroi au contact de l'herbe"
              caption="Posé directement sur la terre, ce vieil abri a le bas de son bardage pris dans l'herbe, là où le bois reste humide le plus longtemps. Photo Philip Halling, CC BY-SA 2.0, via Wikimedia Commons."
            />

            {/* Dalle béton */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Dalle béton : quand elle s&apos;impose et ce qu&apos;elle implique
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Nous conseillons la dalle dès que{' '}
                <strong className="text-primary font-semibold">l&apos;abri devient une pièce</strong> : un atelier avec
                établi et machines, un bureau de jardin meublé, un local qui accueille une tondeuse autoportée, un
                motoculteur ou des charges concentrées. La dalle offre un sol plan, propre, accessible de plain-pied, qui
                encaisse un usage intensif sans fatiguer. Pour un bureau ou un studio, c&apos;est presque toujours la
                bonne base, et notre guide sur le{' '}
                <a href="/blog/bureau-jardin-bois-studio-reglementation-budget" className={lienInterne}>
                  bureau de jardin en bois, de la réglementation au budget
                </a>{' '}
                détaille ce qui change quand on isole et qu&apos;on chauffe.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Mais une dalle mal pensée fait pire que des plots : elle devient un plateau où l&apos;eau stagne au pied
                des parois. Quatre détails décident de sa réussite :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Une légère pente vers l’extérieur', 'pour que l’eau qui entre par la porte ou ruisselle ne reste jamais au pied du bois.'],
                  ['Un bardage qui déborde de la dalle', 'la dalle ne doit pas dépasser des parois : l’eau qui coule le long du bardage doit tomber sur le sol drainé, pas sur le béton au pied de la lisse.'],
                  ['Un drainage autour', 'une bande de graviers en périphérie évite les rejaillissements de boue et éloigne l’eau de ruissellement.'],
                  ['Une coupure capillaire sous la lisse basse', 'le béton remonte l’humidité : la lisse ne repose jamais directement dessus, mais sur une bande d’arase ou une membrane d’étanchéité, idéalement légèrement surélevée.'],
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
                La dalle demande aussi un vrai chantier : terrassement, hérisson, coffrage, béton, temps de séchage
                avant de monter l&apos;abri. C&apos;est le support le plus coûteux et le plus définitif. Nous ne le
                proposons donc pas par réflexe pour un simple abri à vélos.
              </p>
            </section>

            <Figure
              src="/images/blog/garage-ossature-bois-permis-dalle-budget/garage-ossature-bois-murs-montes-sur-dalle-gironde.jpg"
              w={880}
              h={700}
              alt="Murs en ossature bois levés sur une dalle béton, chantier L'Esprit Bois en Gironde"
              caption="Sur ce chantier en Gironde, les murs d'ossature sont levés sur une dalle béton déjà coulée et de niveau, la base retenue quand le bâtiment de jardin devient un vrai local."
            />

            {/* Plots et longrines */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Plots béton et longrines sur lit de graviers : la solution par défaut
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Pour un abri de rangement classique (outils à main, vélos, mobilier de jardin, tondeuse poussée),{' '}
                <strong className="text-primary font-semibold">
                  c&apos;est le support que nous posons le plus souvent
                </strong>
                . Le principe est simple : on décape la terre végétale, on pose un géotextile puis un lit de graviers
                compacté qui draine, on implante des plots béton aux points d&apos;appui, et l&apos;abri repose sur des
                longrines (des poutres basses en bois traité pour le contact avec l&apos;humidité) qui portent le
                plancher.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Son gros avantage tient en un mot :{' '}
                <strong className="text-primary font-semibold">ventilation</strong>. L&apos;air circule entre les
                graviers et le plancher, qui sèche par-dessous après chaque pluie. Le lit drainé empêche l&apos;eau de
                former une flaque sous l&apos;abri, et les graviers évitent que la terre ne rejaillisse sur le bardage.
                Le chantier est léger, rapide, et coûte nettement moins qu&apos;une dalle.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ses exigences : un terrain globalement plat et sain, des plots calés exactement au même niveau (un abri
                qui n&apos;est pas d&apos;équerre fait vite coincer sa porte), et des longrines adaptées à
                l&apos;humidité. C&apos;est aussi la base que nous recommandons dans notre comparatif{' '}
                <a href="/blog/abri-jardin-bois-kit-ou-sur-mesure" className={lienInterne}>
                  abri de jardin en kit ou sur mesure
                </a>{' '}
                : beaucoup de kits fatiguent vite non à cause de leur bois, mais parce qu&apos;ils ont été posés sans ce
                support.
              </p>
            </section>

            {/* Vis de fondation */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Vis de fondation : pente, argile, accès difficile
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La vis de fondation est un pieu métallique galvanisé que l&apos;on visse dans le sol, sans béton ni
                terrassement lourd, et qui reçoit en tête un support réglable sur lequel reposent les longrines. Nous la
                choisissons dans trois situations où elle gagne nettement :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le terrain en pente', 'chaque vis est réglée à sa propre hauteur : l’abri est de niveau sans muret, sans remblai et sans déblai.'],
                  ['Le sol argileux ou instable', 'les têtes réglables permettent de reprendre un niveau si le sol a bougé après un été sec ou un hiver gorgé d’eau.'],
                  ['L’accès difficile', 'fond de jardin sans passage pour une toupie ou une mini-pelle, pelouse ou racines à préserver : la pose se fait avec un outillage léger.'],
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
                Elle a ses limites, et nous préférons les dire : un sol très caillouteux peut bloquer le vissage, un
                remblai récent ou une terre très meuble ne tiennent pas toujours comme un sol en place. Le nombre et la
                longueur des vis se décident selon l&apos;abri et le terrain, pas sur catalogue. C&apos;est une
                solution technique, pas un gadget : bien dimensionnée, elle donne un abri ventilé, démontable et
                réglable dans le temps.
              </p>
            </section>

            <Figure
              src="/images/blog/fondation-abri-jardin-bois-dalle-plots/vis-de-fondation-galvanisees-abri-jardin.webp"
              w={1200}
              h={797}
              alt="Vis de fondation en acier galvanisé avec hélice soudée, stockées avant la pose"
              caption="Un tube d'acier galvanisé et une hélice soudée : la vis de fondation se visse dans le sol au lieu d'y couler du béton. Photo Sandra Thornton, CC BY-SA 4.0, via Wikimedia Commons."
            />

            {/* Sol argileux Gironde */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Sol argileux et terrains humides en Gironde : ce que nous regardons
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Autour de Libourne, dans le Libournais comme dans l&apos;Entre-deux-Mers, une bonne partie des jardins
                reposent sur des sols argileux. L&apos;argile{' '}
                <strong className="text-primary font-semibold">gonfle quand elle se gorge d&apos;eau et se rétracte
                quand elle sèche</strong>
                , ce qui fait monter et descendre le terrain au fil des saisons. Pour une maison, c&apos;est un sujet
                d&apos;étude de sol, que nous détaillons dans notre article sur le{' '}
                <a href="/blog/sol-argileux-gironde-etude-de-sol-extension" className={lienInterne}>
                  sol argileux en Gironde et l&apos;étude de sol avant une extension
                </a>
                . Pour un abri de jardin, l&apos;enjeu est plus modeste mais bien réel : un support qui tasse d&apos;un
                côté met l&apos;abri de travers, la porte frotte et les assemblages travaillent.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                L&apos;autre ennemi est l&apos;eau qui stagne l&apos;hiver. Les terrains bas, les fonds de parcelle en
                cuvette et les zones proches des palus restent détrempés plusieurs semaines. Poser un abri à cet endroit
                sans drainage, c&apos;est le condamner, quel que soit le support.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Notre règle sur ces terrains : éviter la dalle rigide posée sur une argile mouvante sans précaution,
                privilégier les{' '}
                <strong className="text-primary font-semibold">vis de fondation réglables</strong> ou des plots sur un
                lit drainé généreux, et toujours surélever le plancher pour qu&apos;il reste hors de l&apos;eau même
                lors d&apos;un hiver très pluvieux. Si l&apos;emplacement rêvé est le point le plus humide du jardin,
                nous le disons, et nous proposons de déplacer l&apos;abri de quelques mètres.
              </p>
            </section>

            {/* Urbanisme */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce que le support change à l&apos;urbanisme : rien, c&apos;est la surface qui décide
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une idée reçue tenace : poser l&apos;abri sur plots ou sur vis le dispenserait de démarches, puisqu&apos;il
                n&apos;y a « pas de fondation ». C&apos;est faux.{' '}
                <strong className="text-primary font-semibold">
                  Une dalle ne dispense de rien, et des plots non plus : c&apos;est la surface de l&apos;abri qui
                  décide.
                </strong>{' '}
                Dans le cas général, aucune formalité sous 5 m², une{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F17578"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  déclaration préalable de travaux
                </a>{' '}
                entre 5 et 20 m², et un permis de construire au-delà. Le seuil peut être relevé en zone urbaine
                d&apos;une commune dotée d&apos;un PLU, à vérifier en mairie, et un secteur protégé (abords d&apos;un
                monument, site classé) impose des règles plus strictes dès les plus petites surfaces.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Côté fiscalité, un abri de plus de 5 m² entre dans le calcul de la{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F23263"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  taxe d&apos;aménagement
                </a>
                , là aussi quel que soit son support. Mieux vaut l&apos;intégrer au budget dès le départ que la
                découvrir quelques mois après la pose.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Pour le détail des seuils, des délais d&apos;instruction et des cas particuliers, notre guide des{' '}
                <a href="/blog/autorisation-urbanisme-abri-carport-pergola-2026" className={lienInterne}>
                  autorisations d&apos;urbanisme pour un abri, un carport ou une pergola
                </a>{' '}
                fait le tour de la question. Le PLU de votre commune peut aussi imposer des distances aux limites, une
                hauteur ou un aspect : nous le consultons avant de dessiner l&apos;abri.
              </p>
            </section>

            <Figure
              src="/images/blog/fondation-abri-jardin-bois-dalle-plots/abri-jardin-bois-solives-sur-lit-de-graviers.webp"
              w={1200}
              h={900}
              alt="Solives en bois d'un abri de jardin posées sur une base alvéolaire garnie de graviers"
              caption="Les solives du plancher reposent ici sur une base alvéolaire remplie de graviers : le bois ne touche pas la terre et l'eau s'écoule dessous. Photo Guywall, CC BY-SA 4.0, via Wikimedia Commons."
            />

            {/* Notre façon de faire */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Notre façon de faire autour de Libourne
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le support d&apos;un abri ne se choisit pas sur photo. Avant tout devis, nous venons{' '}
                <strong className="text-primary font-semibold">voir le terrain</strong> : nature du sol, pente,
                emplacement prévu, accès pour le matériel, présence d&apos;eau. C&apos;est cette visite qui tranche
                entre dalle, plots et vis, et c&apos;est la seule manière de chiffrer honnêtement. Notre calendrier idéal
                suit les saisons girondines :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['L’automne pour observer et préparer', 'les premières grosses pluies montrent où l’eau stagne ; c’est le bon moment pour valider l’emplacement, terrasser, drainer et poser le support.'],
                  ['L’hiver pour les démarches', 'le temps d’instruction d’une déclaration préalable s’écoule pendant la mauvaise saison, sans retarder le chantier.'],
                  ['Le printemps pour poser l’abri', 'le bois est monté sur un support qui a déjà passé un hiver, par temps sec, et l’abri est prêt pour la saison au jardin.'],
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
                Nous concevons et posons des abris sur mesure, du support à la toiture, dans le cadre de nos{' '}
                <a href="/amenagement-exterieur" className={lienInterne}>aménagements extérieurs</a> à Libourne et dans
                toute la Gironde. Vous pouvez voir le soin porté au pied des ouvrages dans{' '}
                <a href="/realisations" className={lienInterne}>nos réalisations</a> : un abri qui dure se reconnaît
                d&apos;abord à ce qu&apos;on ne voit pas.
              </p>
            </section>

            <Figure
              src="/images/realisations/studio-jardin-ossature-bois-saint-martin-du-bois-5.webp"
              w={982}
              h={736}
              alt="Bâtiment de jardin en ossature bois en cours de montage sur un soubassement béton, chantier L'Esprit Bois à Saint-Martin-du-Bois en Gironde"
              caption="À Saint-Martin-du-Bois, l'ossature habillée de son pare-pluie repose sur un soubassement béton qui la tient au-dessus de la terre du jardin."
            />
          </div>
        </article>

        {/* FAQ */}
        <section className="py-section-padding bg-surface-container-low">
          <div className="max-w-4xl mx-auto px-6 md:px-16">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
              Questions fréquentes
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-12">
              Fondation d&apos;abri de jardin : vos questions
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
              Un abri qui dure commence par son pied
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Dalle pour l&apos;abri qui devient une pièce, plots et longrines sur lit drainé pour le rangement, vis de
              fondation pour la pente, l&apos;argile ou l&apos;accès difficile : le bon support est celui qui garde votre
              bois hors d&apos;eau et ventilé sur votre terrain. C&apos;est ce que nous venons vérifier chez vous, à
              Libourne et dans toute la Gironde, avant de proposer un devis, formalités d&apos;urbanisme comprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/amenagement-exterieur"
                className="bg-secondary text-primary px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-secondary-fixed transition-all active:scale-95"
              >
                Demander une visite du terrain
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
