import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER =
  '/images/blog/fixer-pergola-aluminium-facade/pergola-aluminium-accolee-facade-enduite-saint-pey-de-castets.webp';

export const metadata: Metadata = buildMetadata({
  title: 'Fixer une pergola alu sur la façade : le guide Gironde',
  description:
    "Pergola alu adossée : identifier le mur, choisir la fixation (pierre, brique creuse, ITE, ossature bois) et soigner l'étanchéité. Guide Libourne, Gironde.",
  keywords:
    'fixation pergola aluminium façade, pergola adossée fixation mur, fixer pergola sur isolation extérieure, fixer pergola ITE, pergola adossée brique creuse, scellement chimique pergola, pergola adossée ou autoportante, pergola aluminium Libourne, pose pergola adossée Gironde, pergola aluminium Gironde',
  path: '/blog/fixer-pergola-aluminium-facade',
  ogImage: COVER,
  ogTitle: 'Pergola aluminium adossée : ce que votre façade doit pouvoir porter',
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

function DuoFigure({
  a,
  b,
}: {
  /** `w` et `h` : dimensions réelles du fichier, à vérifier avant de les écrire. */
  a: { src: string; alt: string; caption: string; w: number; h: number };
  b: { src: string; alt: string; caption: string; w: number; h: number };
}) {
  return (
    <div className="-mx-6 md:-mx-16 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
      {[a, b].map((img) => (
        <figure key={img.src + img.alt}>
          <img
            loading="lazy"
            decoding="async"
            width={img.w}
            height={img.h}
            className="w-full h-64 md:h-72 rounded-2xl object-cover shadow-sm"
            src={img.src}
            alt={img.alt}
          />
          <figcaption className="mt-3 text-center font-label-md text-label-md text-on-surface-variant">
            {img.caption}
          </figcaption>
        </figure>
      ))}
    </div>
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
        name: 'Fixer une pergola aluminium en façade',
        item: 'https://lesprit-bois.fr/blog/fixer-pergola-aluminium-facade',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Pergola aluminium adossée : ce que votre façade doit pouvoir porter',
    description:
      "Sur une pergola aluminium adossée, le profilé de tête vissé en façade reprend une part des charges et surtout l'arrachement au vent. Ce n'est pas la pergola qui décide de la fixation, c'est le mur : pierre, parpaing, brique creuse, béton, isolation par l'extérieur ou ossature bois. Et quand le mur ne peut pas porter, on ajoute des poteaux côté façade. Le guide d'un artisan à Libourne, en Gironde.",
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
    datePublished: '2026-10-17',
    dateModified: '2026-10-17',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/fixer-pergola-aluminium-facade',
    },
    about: [
      { '@type': 'Thing', name: 'pergola aluminium' },
      { '@type': 'Thing', name: 'pergola adossée' },
      { '@type': 'Thing', name: 'fixation en façade' },
      { '@type': 'Thing', name: 'isolation thermique par l’extérieur' },
    ],
    areaServed: [
      { '@type': 'City', name: 'Libourne' },
      { '@type': 'AdministrativeArea', name: 'Gironde' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Peut-on fixer une pergola aluminium sur un mur en brique creuse ou en parpaing creux ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, à condition d'utiliser une fixation prévue pour les matériaux creux : en général un scellement chimique avec tamis, ce manchon perforé qui retient la résine dans les alvéoles, et une résine adaptée à l'extérieur. Un tel support reprend moins d'effort par point qu'un béton plein : on multiplie donc les points de fixation, ou on choisit un autre montage, comme des poteaux côté façade, si les efforts calculés par le fabricant de la pergola le demandent.",
        },
      },
      {
        '@type': 'Question',
        name: "Peut-on fixer une pergola sur une façade isolée par l'extérieur (ITE) ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Jamais dans l'isolant ni dans l'enduit mince. Il faut traverser l'isolant pour aller chercher le mur porteur, avec des fixations conçues pour les charges lourdes sur ITE, qui ne l'écrasent pas et limitent le pont thermique, puis refaire l'étanchéité du percement. Consultez l'entreprise qui a posé l'isolation avant de percer, pour ne pas compromettre sa garantie. Sur une ITE sans renfort prévu, des poteaux côté façade sont souvent la solution la plus sûre.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quelle cheville faut-il pour fixer une pergola en façade ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Il n'y a pas de cheville universelle pour pergola : elle se choisit après avoir identifié le mur réel derrière l'enduit, et en fonction des efforts calculés par le fabricant de la pergola. Béton plein et pierre saine acceptent des chevilles mécaniques adaptées ou un scellement chimique ; les matériaux creux demandent un scellement avec tamis. Dans tous les cas, on retient des chevilles sous évaluation technique européenne pour le support concerné, et le choix est écrit sur le devis.",
        },
      },
      {
        '@type': 'Question',
        name: 'Pergola adossée ou autoportante : laquelle choisir si mon mur est fragile ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Si le mur ne peut pas porter, on ne force pas : on ajoute des poteaux côté façade et la pergola devient autoportante, simplement accolée à la maison. Visuellement, elle reste collée au mur ; techniquement, elle ne lui demande plus rien. Cela coûte deux poteaux et deux massifs de plus, mais c'est souvent la meilleure option sur une isolation par l'extérieur sans renfort ou sur une pierre fatiguée.",
        },
      },
      {
        '@type': 'Question',
        name: "Comment éviter les infiltrations d'eau entre la pergola et le mur ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le raccord entre le profilé de tête et la façade se traite comme une petite toiture : une bande ou une bavette de recouvrement qui renvoie l'eau vers la pergola et jamais vers le mur, un joint compatible avec l'enduit et l'aluminium, et une pente des lames vers la gouttière intégrée, côté opposé à la façade. Le percement de chaque fixation est lui-même rendu étanche. Les débords de toit, génoises, baies et coffres de volets roulants se repèrent dès le relevé, car ils fixent la hauteur possible du profilé.",
        },
      },
    ],
  },
];

const faq = [
  {
    q: 'Peut-on fixer une pergola aluminium sur un mur en brique creuse ou en parpaing creux ?',
    r: (
      <>
        Oui, à condition d&apos;utiliser une fixation prévue pour les matériaux creux : en général un scellement chimique
        avec tamis, ce manchon perforé qui retient la résine dans les alvéoles, et une résine adaptée à l&apos;extérieur.
        Un tel support reprend moins d&apos;effort par point qu&apos;un béton plein : on multiplie donc les points de
        fixation, ou on choisit un autre montage, comme des poteaux côté façade, si les efforts calculés par le fabricant
        de la pergola le demandent.
      </>
    ),
  },
  {
    q: "Peut-on fixer une pergola sur une façade isolée par l'extérieur (ITE) ?",
    r: (
      <>
        Jamais dans l&apos;isolant ni dans l&apos;enduit mince. Il faut traverser l&apos;isolant pour aller chercher le
        mur porteur, avec des fixations conçues pour les charges lourdes sur ITE, qui ne l&apos;écrasent pas et limitent
        le pont thermique, puis refaire l&apos;étanchéité du percement. Consultez l&apos;entreprise qui a posé
        l&apos;isolation avant de percer, pour ne pas compromettre sa garantie. Sur une ITE sans renfort prévu, des
        poteaux côté façade sont souvent la solution la plus sûre.
      </>
    ),
  },
  {
    q: 'Quelle cheville faut-il pour fixer une pergola en façade ?',
    r: (
      <>
        Il n&apos;y a pas de cheville universelle pour pergola : elle se choisit après avoir identifié le mur réel
        derrière l&apos;enduit, et en fonction des efforts calculés par le fabricant de la pergola. Béton plein et pierre
        saine acceptent des chevilles mécaniques adaptées ou un scellement chimique ; les matériaux creux demandent un
        scellement avec tamis. Dans tous les cas, on retient des chevilles sous évaluation technique européenne pour le
        support concerné, et le choix est écrit sur le devis.
      </>
    ),
  },
  {
    q: 'Pergola adossée ou autoportante : laquelle choisir si mon mur est fragile ?',
    r: (
      <>
        Si le mur ne peut pas porter, on ne force pas : on ajoute des poteaux côté façade et la pergola devient
        autoportante, simplement accolée à la maison. Visuellement, elle reste collée au mur ; techniquement, elle ne lui
        demande plus rien. Cela coûte deux poteaux et deux massifs de plus, mais c&apos;est souvent la meilleure option
        sur une isolation par l&apos;extérieur sans renfort ou sur une pierre fatiguée.
      </>
    ),
  },
  {
    q: "Comment éviter les infiltrations d'eau entre la pergola et le mur ?",
    r: (
      <>
        Le raccord entre le profilé de tête et la façade se traite comme une petite toiture : une bande ou une bavette de
        recouvrement qui renvoie l&apos;eau vers la pergola et jamais vers le mur, un joint compatible avec l&apos;enduit
        et l&apos;aluminium, et une pente des lames vers la gouttière intégrée, côté opposé à la façade. Le percement de
        chaque fixation est lui-même rendu étanche. Les débords de toit, génoises, baies et coffres de volets roulants se
        repèrent dès le relevé, car ils fixent la hauteur possible du profilé.
      </>
    ),
  },
];

export default function ArticleFixerPergolaAluminiumFacadePage() {
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
              alt="Pergola aluminium anthracite accolée à la façade enduite d'une maison à Saint-Pey-de-Castets, en Gironde"
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
              <span className="text-secondary-fixed">Fixer une pergola aluminium en façade</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Pergolas aluminium
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Pergola aluminium adossée : ce que votre façade doit pouvoir porter
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
              <span>17 octobre 2026</span>
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
                Sur une pergola aluminium adossée, le profilé de tête vissé en façade reprend une part du poids de
                l&apos;ouvrage et surtout l&apos;arrachement dû au vent. Ce n&apos;est donc pas la pergola qui décide de
                la fixation, c&apos;est le mur : on ne choisit la cheville qu&apos;après avoir identifié ce qu&apos;il y a
                derrière l&apos;enduit, et quand le mur ne peut pas porter, on ne force pas, on ajoute des poteaux côté
                façade.
              </strong>{' '}
              Pierre calcaire, parpaing, brique creuse, béton, isolation par l&apos;extérieur ou ossature bois : chaque
              façade appelle sa propre réponse. Voici comment nous raisonnons sur nos chantiers autour de Libourne et en
              Gironde, avant le premier coup de perforateur.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* Ce que reprend la façade */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce que la façade reprend sur une pergola adossée
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une pergola adossée n&apos;a des poteaux que d&apos;un côté. De l&apos;autre, elle s&apos;appuie sur la
                maison par un <strong className="text-primary font-semibold">profilé de tête</strong> (on parle aussi de
                poutre murale ou de lisse de façade) fixé dans le mur sur toute sa longueur. Ce profilé n&apos;est pas un
                simple support décoratif : il fait partie de la structure, et ce qu&apos;il reçoit, il le transmet à la
                façade.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le poids propre', "profilés aluminium, lames orientables, motorisation, éclairage intégré, stores éventuels : une part de cet ensemble descend dans le mur, par cisaillement des fixations."],
                  ["L'eau et la neige", "une averse retenue par une gouttière bouchée ou, plus rarement en Gironde, une couche de neige ajoutent une charge temporaire que la fixation doit encaisser."],
                  ["L'arrachement au vent", "c'est l'effort le plus exigeant. Le vent qui passe sous la toiture tend à soulever la pergola : côté façade, il tire sur les chevilles et cherche à les extraire du mur."],
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
                Retenez surtout ceci : <strong className="text-primary font-semibold">l&apos;effort doit aller dans la
                maçonnerie porteuse, pas dans l&apos;enduit</strong>. Un enduit, un parement ou un isolant ne sont pas
                faits pour tenir une structure ; une fixation qui s&apos;y arrête tient le jour de la pose et lâche au
                premier vrai coup de vent. Nous avons détaillé le rôle de l&apos;ancrage face aux rafales dans notre
                article sur{' '}
                <a href="/blog/pergola-aluminium-tempete-vent" className={lienInterne}>
                  la pergola aluminium face aux tempêtes
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Le nombre de fixations, leur entraxe et leur type ne se devinent pas : ils découlent des{' '}
                <strong className="text-primary font-semibold">efforts calculés par le fabricant de la pergola</strong>{' '}
                pour ses dimensions, sa commune et son exposition. Notre travail de poseur consiste à faire en sorte que
                le mur puisse réellement recevoir ces efforts.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Pergolas-aluminium-Libourne-8.webp"
              w={768}
              h={512}
              alt="Pergola bioclimatique aluminium blanche adossée à une façade enduite, profilé de tête posé le long du mur sous la toiture"
              caption="Visuel fabricant (LI-SU DES TEMPS) d'une pergola adossée : côté maison, plus de poteaux, c'est le profilé fixé dans le mur qui porte. Ses fixations doivent atteindre la maçonnerie, pas l'enduit."
            />

            {/* Identifier le mur */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Identifier le mur avant de percer
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Deux maisons au même enduit blanc peuvent cacher deux murs qui n&apos;ont rien à voir. Avant de choisir
                une fixation, nous cherchons donc à savoir{' '}
                <strong className="text-primary font-semibold">ce qu&apos;il y a vraiment derrière l&apos;enduit</strong>
                , et sur quelle épaisseur.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ["L'âge et l'histoire de la maison", "une maison ancienne, une construction des années soixante-dix ou un pavillon récent n'ont pas été montés avec les mêmes matériaux. Une rénovation énergétique a pu tout recouvrir."],
                  ['Les plans et documents', "permis de construire, descriptif du constructeur, factures de ravalement ou d'isolation : quand ils existent, ils évitent bien des suppositions."],
                  ['Le sondage', "au son, à l'aimant, et par l'observation d'un ouvrage déjà percé : tableau de fenêtre, passage de gaine, applique extérieure."],
                  ["Le perçage d'essai", "à l'endroit exact où passera le profilé. La poussière, la résistance au foret et la présence ou non de vide disent beaucoup plus qu'un plan."],
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
                Autour de Libourne, nous rencontrons pour l&apos;essentiel six familles de façades :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['La pierre calcaire', "des maisons anciennes, des fermes et des échoppes, avec des moellons ou de la pierre de taille plus ou moins tendre, et des joints parfois fatigués."],
                  ['Le parpaing béton creux', "très courant dans les maisons des dernières décennies, sous un enduit qui ne laisse rien deviner."],
                  ['La brique creuse ou alvéolaire', "fréquente dans les constructions plus récentes : performante thermiquement, mais pleine de vides."],
                  ['Le béton plein', "voiles béton, poteaux, chaînages et linteaux : le meilleur support, souvent présent par endroits seulement."],
                  ["L'ossature bois", "maisons et extensions à ossature, habillées d'enduit sur isolant ou de bardage."],
                  ["L'isolation thermique par l'extérieur", "en rénovation, un isolant et un enduit mince sont venus recouvrir l'un des murs précédents."],
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
                Une même façade peut d&apos;ailleurs mélanger plusieurs de ces supports : un chaînage béton au-dessus
                d&apos;un mur en parpaing, une extension en ossature accolée à une maison en pierre. Le profilé de tête,
                lui, traverse tout. C&apos;est pour cela que le relevé se fait sur la ligne exacte de fixation, pas
                « sur la maison » en général.
              </p>
            </section>

            <DuoFigure
              a={{
                src: '/images/blog/fixer-pergola-aluminium-facade/mur-moellons-calcaire-joints-chaux.webp',
                w: 1200,
                h: 800,
                alt: 'Mur ancien en moellons de calcaire smillés, joints au mortier de chaux, support de fixation pour une pergola adossée',
                caption: 'Moellons calcaire et joints à la chaux : on fixe dans la pierre saine, jamais dans le joint. Photo Coyau, Wikimedia Commons, CC BY-SA 3.0.',
              }}
              b={{
                src: '/images/blog/fixer-pergola-aluminium-facade/brique-alveolaire-terre-cuite-alveoles.webp',
                w: 1200,
                h: 900,
                alt: 'Deux briques creuses alvéolaires en terre cuite, alvéoles visibles sur le dessus, support difficile pour fixer une pergola adossée',
                caption: 'Une brique alvéolaire est surtout faite de vide : une cheville classique n\'y trouve presque rien à serrer. Photo Kozuch, Wikimedia Commons, CC BY-SA 3.0.',
              }}
            />

            {/* Maçonnerie */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Maçonnerie : pierre, parpaing, brique creuse, béton
              </h2>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Béton plein et pierre saine</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ce sont les supports les plus favorables. Le béton plein accepte des chevilles mécaniques adaptées ou un
                scellement chimique. La pierre saine aussi, avec une nuance importante sur nos maisons anciennes :{' '}
                <strong className="text-primary font-semibold">on vise la pierre, pas le joint</strong>. Un joint à la
                chaux ou au mortier fatigué s&apos;effrite sous l&apos;effort ; une pierre calcaire tendre peut éclater
                sous l&apos;expansion d&apos;une cheville mécanique. Sur ces murs, le scellement chimique, qui colle sans
                écarter, est souvent le choix le plus sûr, et l&apos;implantation des fixations se cale sur
                l&apos;appareillage réel du mur.
              </p>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                Parpaing creux et brique alvéolaire
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Dans un matériau creux, une cheville à expansion n&apos;a presque rien à serrer et une résine injectée
                seule se perd dans les alvéoles. La réponse habituelle est le{' '}
                <strong className="text-primary font-semibold">scellement chimique avec tamis</strong> : un manchon
                perforé glissé dans le trou, qui retient la résine et la laisse déborder juste ce qu&apos;il faut pour
                former un ancrage dans les cloisons du bloc. En extérieur, on retient une résine adaptée à cet usage,
                de type vinylester.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Il faut être honnête sur la limite :{' '}
                <strong className="text-primary font-semibold">
                  un support creux reprend moins d&apos;effort par point de fixation qu&apos;un béton plein
                </strong>
                . On compense par davantage de points, par une fixation dans un chaînage ou un linteau béton quand il
                passe au bon endroit, ou par un autre montage si le calcul ne passe pas. Ce n&apos;est pas une
                fatalité, c&apos;est une donnée de conception.
              </p>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Une règle commune</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Quel que soit le mur, nous utilisons des chevilles et des scellements{' '}
                <strong className="text-primary font-semibold">
                  sous évaluation technique européenne (ETE) pour le support concerné
                </strong>
                , mis en œuvre selon la notice du fabricant de cheville : diamètre de perçage, nettoyage du trou, temps
                de prise. Une cheville excellente dans le béton peut être inadaptée dans la brique creuse. Nous ne vous
                donnerons donc pas de « bonne cheville pour pergola » valable partout, parce qu&apos;elle n&apos;existe
                pas.
              </p>
            </section>

            {/* ITE */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Façade isolée par l&apos;extérieur (ITE) : traverser sans écraser
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est le cas qui se présente de plus en plus souvent avec les rénovations énergétiques. Le principe
                ne souffre aucune exception :{' '}
                <strong className="text-primary font-semibold">
                  on ne fixe jamais une pergola dans l&apos;isolant ni dans l&apos;enduit mince qui le recouvre
                </strong>
                . Ni l&apos;un ni l&apos;autre n&apos;est porteur. Il faut traverser l&apos;isolant pour aller chercher
                le mur d&apos;origine, derrière.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Traverser ne suffit pas : une simple tige filetée qui passe à travers l&apos;isolant écrase celui-ci
                sous le serrage, fléchit sous la charge et crée un pont thermique à chaque point. On utilise donc des{' '}
                <strong className="text-primary font-semibold">
                  fixations dédiées aux charges lourdes sur ITE
                </strong>
                , qui existent sous avis technique. Selon les familles de produits, on trouve par exemple une entretoise
                isolante qui reprend l&apos;appui à travers l&apos;épaisseur de l&apos;isolant, associée à une tige,
                parfois en composite pour limiter la conduction de chaleur, scellée chimiquement dans le mur porteur.
                Certaines se posent avant l&apos;isolation, d&apos;autres peuvent se poser après. Les avis techniques et
                les règles de l&apos;art de référence sont publiés par le{' '}
                <a href="https://www.cstb.fr/" className={lienInterne} target="_blank" rel="noopener noreferrer">
                  CSTB (NF DTU et avis techniques)
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Si la pergola et l&apos;isolation font partie du même projet, le bon ordre est simple :{' '}
                <strong className="text-primary font-semibold">
                  on prévoit les points d&apos;ancrage de la pergola avant de poser l&apos;ITE
                </strong>
                . Les platines ou entretoises sont installées sur le mur nu, l&apos;isolant vient autour, et la pergola
                se fixe ensuite sans aucune improvisation. C&apos;est plus propre, plus étanche et plus économique que
                de percer une façade neuve.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Chaque percement de l&apos;enduit est ensuite rendu étanche, avec des produits compatibles avec le
                système d&apos;isolation. Un trou mal refermé laisse l&apos;eau entrer dans l&apos;isolant, où elle ne
                se voit pas pendant des mois.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Dernier point, très concret :{' '}
                <strong className="text-primary font-semibold">
                  consultez l&apos;entreprise qui a posé votre isolation avant tout percement
                </strong>
                . Son ouvrage est couvert par sa{' '}
                <a
                  href="https://entreprendre.service-public.gouv.fr/vosdroits/F2034"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  garantie décennale
                </a>
                , et une intervention non concertée sur l&apos;enveloppe peut lui donner un motif de discussion en cas
                de désordre. Nous demandons systématiquement les références du système posé avant de proposer une
                fixation.
              </p>
            </section>

            <Figure
              src="/images/blog/fixer-pergola-aluminium-facade/isolation-thermique-exterieur-panneaux-isolants-mur.webp"
              w={1200}
              h={900}
              alt="Pose d'une isolation thermique par l'extérieur, épais panneaux de polystyrène collés sur le mur porteur avant enduit"
              caption="Ici 18 cm d'isolant entre le futur enduit et le mur porteur : c'est l'épaisseur que la fixation d'une pergola doit traverser. Photo Handwerker, Wikimedia Commons, CC BY-SA 3.0."
            />

            {/* Ossature bois */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Façade en ossature bois : viser la structure, pas l&apos;habillage
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une maison à ossature bois peut parfaitement recevoir une pergola aluminium adossée, à une condition :{' '}
                <strong className="text-primary font-semibold">
                  on fixe dans les montants de l&apos;ossature ou dans une lisse de reprise prévue pour cela
                </strong>
                , jamais dans le bardage ni dans le seul panneau de contreventement. Le bardage est un habillage ; le
                panneau assure la rigidité du mur, pas la reprise d&apos;une charge ponctuelle qui tire vers
                l&apos;extérieur.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Comme les montants ne tombent pas toujours à l&apos;emplacement voulu, la solution la plus propre est
                une pièce de reprise intégrée dans le mur, idéalement dès la construction. Sur une maison existante, on
                repère les montants, on adapte l&apos;entraxe des fixations, et on cale la traversée de la lame
                d&apos;air pour ne pas écraser le bardage ni boucher la ventilation derrière lui.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Chaque fixation traverse aussi le{' '}
                <strong className="text-primary font-semibold">pare-pluie</strong>, cette membrane qui protège
                l&apos;ossature de l&apos;eau. Ce passage se refait proprement, avec une étanchéité compatible avec la
                membrane, sinon on introduit de l&apos;humidité au cœur du mur.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Si vous faites construire une extension ou une maison en ossature et qu&apos;une pergola est prévue plus
                tard, dites-le dès la conception : c&apos;est ce que nous faisons sur nos projets de{' '}
                <a href="/constructeur-ossature-bois-gironde" className={lienInterne}>
                  construction à ossature bois en Gironde
                </a>
                , où la reprise de la future pergola est intégrée au mur avant qu&apos;il soit fermé.
              </p>
            </section>

            {/* Raccord étanche */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le raccord étanche entre le profilé de tête et la façade
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une pergola peut être parfaitement fixée et pourtant faire couler de l&apos;eau le long du mur.
                Le raccord avec la façade se traite comme le faîtage d&apos;une petite toiture, avec un principe
                unique : <strong className="text-primary font-semibold">l&apos;eau doit toujours être renvoyée vers
                la pergola, jamais vers le mur</strong>.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Bande ou bavette de recouvrement', "un profilé aluminium, thermolaqué dans le RAL de la pergola, recouvre la jonction et écarte l'eau de ruissellement de la façade."],
                  ['Joint adapté', "un mastic compatible avec l'enduit et l'aluminium, qui accepte les dilatations des profilés sans se décoller."],
                  ["Sens de l'eau", "lames et chéneaux évacuent vers la gouttière intégrée, côté opposé à la maison, puis vers les poteaux de descente."],
                  ['Percements étanches', "chaque fixation qui traverse l'enduit est rendue étanche, pour que l'eau ne suive pas la tige jusque dans le mur."],
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
                La hauteur du profilé de tête n&apos;est pas libre. Elle est coincée entre deux contraintes : en haut,
                le <strong className="text-primary font-semibold">débord de toit ou la génoise</strong>, qu&apos;on ne
                perce pas et qu&apos;il faut contourner ; en bas, les{' '}
                <strong className="text-primary font-semibold">baies et les coffres de volets roulants</strong>, qui
                doivent continuer à s&apos;ouvrir et rester accessibles pour l&apos;entretien. Sur une maison basse à
                génoise, l&apos;espace restant peut être juste : c&apos;est l&apos;une des raisons pour lesquelles une
                pergola &laquo; adossée &raquo; finit parfois sur ses propres poteaux.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                La gestion de l&apos;eau ne s&apos;arrête pas au raccord : descentes, raccordement et entretien sont
                détaillés dans notre article sur{' '}
                <a href="/blog/evacuation-eaux-pluviales-pergola-carport" className={lienInterne}>
                  l&apos;évacuation des eaux pluviales d&apos;une pergola ou d&apos;un carport
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/blog/fixer-pergola-aluminium-facade/pergola-aluminium-jonction-toit-tuiles-saint-pey-de-castets.webp"
              w={1200}
              h={800}
              alt="Toiture d'une pergola aluminium raccordée sous le rang de tuiles d'une maison, vue depuis le toit, à Saint-Pey-de-Castets"
              caption="Vue depuis le toit, sur notre chantier de Saint-Pey-de-Castets : la couverture de la pergola démarre juste sous le dernier rang de tuiles, qui la recouvre : l'eau du toit tombe sur la pergola, pas entre elle et le mur."
            />

            {/* Mur qui ne porte pas */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Quand le mur ne peut pas porter : des poteaux côté façade
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Il arrive que le relevé donne une mauvaise nouvelle : pierre délitée, ITE sans renfort et entreprise
                d&apos;isolation injoignable, brique creuse sur laquelle le calcul ne passe pas, génoise trop basse.
                Dans ces cas-là, notre position est nette :{' '}
                <strong className="text-primary font-semibold">on ne force pas la fixation, on ajoute des poteaux côté
                façade</strong>.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La pergola devient alors autoportante, simplement accolée à la maison. Visuellement, elle reste collée
                au mur ; techniquement, elle ne lui demande plus rien. Ce que cela change :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Deux poteaux de plus', "plantés le long de la façade, avec leurs massifs ou leur ancrage dans une dalle saine."],
                  ['Aucun effort sur le mur', "ni poids, ni arrachement : la façade, l'enduit et l'isolant restent intacts."],
                  ['Un joint de finition', "un couvre-joint souple ferme l'espace entre la pergola et la maison sans les rendre solidaires."],
                  ['Un léger surcoût', "poteaux et massifs supplémentaires, compensés en partie par des fixations en façade devenues inutiles."],
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
                Sur une isolation par l&apos;extérieur non préparée ou sur une pierre fatiguée,{' '}
                <strong className="text-primary font-semibold">c&apos;est la solution que nous recommandons</strong>,
                même si une fixation &laquo; pourrait passer &raquo;. Une pergola est faite pour durer des décennies :
                autant qu&apos;elle ne dépende pas d&apos;un mur dont on doute. Les différences entre pergola adossée,
                autoportante et en îlot sont détaillées dans notre{' '}
                <a href="/blog/pergola-bioclimatique-aluminium-guide" className={lienInterne}>
                  guide de la pergola bioclimatique aluminium
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Les poteaux, eux, demandent un sol qui tient. Si la pergola se pose sur une terrasse en bois, lisez
                notre article sur{' '}
                <a href="/blog/poser-pergola-aluminium-terrasse-bois-existante" className={lienInterne}>
                  la pose d&apos;une pergola aluminium sur une terrasse bois existante
                </a>
                : les lames ne sont jamais un ancrage en soi. Et pour voir les configurations que nous proposons,
                adossées ou autoportantes, rendez-vous sur notre page{' '}
                <a href="/pergolas" className={lienInterne}>pergola aluminium à Libourne</a>.
              </p>
            </section>

            <Figure
              src="/images/blog/fixer-pergola-aluminium-facade/pergola-aluminium-poteaux-le-long-du-mur-saint-pey-de-castets.webp"
              w={1200}
              h={800}
              alt="Pergola aluminium anthracite accolée à une maison, poteau planté le long de la façade enduite, à Saint-Pey-de-Castets en Gironde"
              caption="Sur ce chantier de Saint-Pey-de-Castets, un poteau se dresse contre le mur : de loin, la pergola paraît adossée, mais côté maison elle s'appuie aussi sur ses propres poteaux."
            />

            {/* Libourne / Gironde */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                À Libourne et en Gironde : comment nous procédons
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Entre les maisons en pierre des bourgs, les pavillons en parpaing ou en brique et les façades rénovées
                par l&apos;extérieur, nos chantiers autour de Libourne couvrent à peu près tous les cas de cet article.
                Notre méthode, elle, ne change pas :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Un relevé sur place', "dimensions, hauteur disponible sous la génoise ou le débord de toit, baies, volets roulants, descentes d'eau existantes."],
                  ['Un sondage du mur', "sur la ligne exacte du profilé de tête, avec perçage d'essai quand le doute subsiste."],
                  ['Un choix de fixation écrit sur le devis', "type de fixation, support visé, ou poteaux côté façade : vous savez avant de signer comment la pergola tiendra."],
                  ["Des photos du support avant habillage", "le mur percé, les scellements, les entretoises éventuelles : ce qui disparaît sous la bavette reste documenté."],
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
                Si vous comparez plusieurs propositions, regardez précisément cette ligne : un devis qui écrit seulement
                &laquo; fixation murale &raquo; ne dit rien du support. Nous expliquons comment lire ce poste, avec les
                autres, dans notre article pour{' '}
                <a href="/blog/comparer-devis-pergola-postes-prix" className={lienInterne}>
                  comparer des devis de pergola poste par poste
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Découvrez nos{' '}
                <a href="/pergolas" className={lienInterne}>pergolas aluminium et bioclimatiques en Gironde</a>, et
                voyez comment ces choix se traduisent sur le terrain dans{' '}
                <a href="/realisations" className={lienInterne}>nos réalisations</a>.
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
              Fixer une pergola aluminium en façade : vos questions
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
              On choisit la fixation après avoir regardé le mur, jamais avant
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Une pergola aluminium adossée tient par son mur autant que par ses profilés. Identifier la façade, choisir
              une fixation qui atteint la maçonnerie porteuse, soigner le raccord étanche et, quand le mur ne suit pas,
              poser des poteaux côté façade : c&apos;est ce que nous étudions et posons chez L&apos;Esprit Bois,
              entreprise qualifiée Qualibat, à Libourne et dans toute la Gironde, du sondage du mur jusqu&apos;à la
              mise en service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pergolas"
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
