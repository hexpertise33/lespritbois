import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/realisations/terrasse-bois-pergola-aluminium-libourne-7.webp';

export const metadata: Metadata = buildMetadata({
  title: "Pergola aluminium sur terrasse bois : l'ancrer en Gironde",
  description:
    'On ne pose pas une pergola aluminium sur une terrasse en bois : on la traverse pour aller chercher un appui dur. Notre méthode de pose à Libourne (Gironde).',
  keywords:
    "pergola sur terrasse bois, ancrage pergola aluminium, platine pergola terrasse, fixation pergola terrasse existante, poser pergola terrasse bois, pergola Libourne, terrasse bois Gironde, pergola aluminium Gironde",
  path: '/blog/poser-pergola-aluminium-terrasse-bois-existante',
  ogImage: COVER,
  ogTitle: 'Poser une pergola aluminium sur une terrasse en bois existante',
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
        <figure key={img.src}>
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
        name: 'Pergola aluminium sur terrasse bois',
        item: 'https://lesprit-bois.fr/blog/poser-pergola-aluminium-terrasse-bois-existante',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Poser une pergola aluminium sur une terrasse en bois existante',
    description:
      "Une pergola aluminium ne se pose jamais sur une terrasse en bois : elle la traverse pour aller chercher un appui dur, plot béton dédié, massif ou dalle existante. Descente de charge, traversée du platelage et étanchéité du perçage, cas de la terrasse sur plots et de la terrasse sur pilotis : la méthode de pose d'un artisan à Libourne, en Gironde.",
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
    datePublished: '2026-09-14',
    dateModified: '2026-09-14',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/poser-pergola-aluminium-terrasse-bois-existante',
    },
    about: [
      { '@type': 'Thing', name: 'pergola aluminium' },
      { '@type': 'Thing', name: 'terrasse en bois' },
      { '@type': 'Thing', name: 'ancrage et fixation' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Peut-on poser une pergola aluminium sur une terrasse en bois déjà construite ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, dans la très grande majorité des cas, mais pas en posant les platines sur le platelage. Les poteaux traversent la terrasse et viennent s'ancrer sur un appui dur situé en dessous : plot béton coulé pour l'occasion, massif, ou dalle existante si elle est en bon état. La terrasse est percée localement, elle n'est jamais chargée.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faut-il démonter toute la terrasse pour poser la pergola ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Presque jamais. On ouvre le platelage seulement au droit de chaque poteau, sur une zone limitée, en repérant les lames déposées pour les remettre en place ensuite. Une dépose générale ne s'impose que si la structure de la terrasse est déjà fatiguée et qu'il faut de toute façon la reprendre.",
        },
      },
      {
        '@type': 'Question',
        name: 'Que risque-t-on à visser les platines directement dans les lambourdes ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Une lambourde est dimensionnée pour répartir une charge diffuse sur de nombreux appuis, pas pour encaisser une charge concentrée en un point ni pour résister à l'arrachement. Sous le vent, une pergola travaille aussi vers le haut : les fixations tirent sur le bois en va-et-vient, le bois se mate, la fixation prend du jeu et l'eau s'installe dans le trou. C'est un montage qui peut tenir un été et lâcher au premier coup de vent sérieux.",
        },
      },
      {
        '@type': 'Question',
        name: "Comment évite-t-on les infiltrations à l'endroit où le poteau traverse la terrasse ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La traversée est une découpe franche avec un jeu périphérique, pour que le bois puisse bouger et qu'aucune pièce ne vienne serrer le profilé aluminium. L'eau qui descend le long du poteau est conduite jusqu'à un exutoire, pas relâchée sous la terrasse. Les coupes de bois sont retraitées, la visserie est inox et l'aluminium est isolé du bois traité pour éviter tout contact humide prolongé.",
        },
      },
      {
        '@type': 'Question',
        name: 'Et si la terrasse repose sur des plots réglables posés sur une dalle béton ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "C'est le cas le plus confortable : l'appui dur est déjà là. On ouvre le platelage, on contrôle l'état et la nature de la dalle, et si elle convient la platine y est fixée directement, le poteau remontant à travers la terrasse. En revanche un plot réglable ne reprend jamais un poteau de pergola : il est fait pour porter du platelage, pas une descente de charge de toiture.",
        },
      },
      {
        '@type': 'Question',
        name: 'Une pergola sur terrasse existante coûte-t-elle plus cher ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, il faut compter la reprise d'appui en plus de la pergola : ouverture du platelage, création des appuis, remise en état et finitions de traversée. C'est un poste à part entière, qui explique une bonne partie des écarts entre deux devis de pergola. Le chiffrage dépend de ce qu'on trouve sous les lames, donc d'un relevé sur place.",
        },
      },
    ],
  },
];

const appuis = [
  [
    'Dalle béton existante',
    'La terrasse est posée sur plots ou lambourdes au-dessus d’une dalle',
    'On ouvre, on contrôle l’état et l’épaisseur de la dalle, on y fixe la platine',
    'Le plus simple, si la dalle est saine et dimensionnée pour',
  ],
  [
    'Plot béton dédié',
    'Sous la terrasse : terre, sable, gravier ou hérisson',
    'On creuse et on coule un appui propre au droit de chaque poteau',
    'Le cas le plus fréquent : il faut un temps de prise avant la pose',
  ],
  [
    'Massif en reprise',
    'Terrasse surélevée, sol hétérogène, remblai récent',
    'Appui dimensionné selon le sol et la surface de toiture, vérifié au cas par cas',
    'Demande un avis technique quand la toiture est fermée',
  ],
  [
    'Lambourdes / platelage',
    'Tentation de visser la platine sur ce qui est visible',
    'Nous ne le faisons pas',
    'Aucune reprise d’arrachement, matage du bois, infiltrations',
  ],
];

const faq = [
  {
    q: 'Peut-on poser une pergola aluminium sur une terrasse en bois déjà construite ?',
    r: (
      <>
        Oui, dans la très grande majorité des cas, mais pas en posant les platines sur le platelage. Les poteaux
        traversent la terrasse et viennent s&apos;ancrer sur un appui dur situé en dessous : plot béton coulé pour
        l&apos;occasion, massif, ou dalle existante si elle est en bon état. La terrasse est percée localement, elle
        n&apos;est jamais chargée.
      </>
    ),
  },
  {
    q: 'Faut-il démonter toute la terrasse pour poser la pergola ?',
    r: (
      <>
        Presque jamais. On ouvre le platelage seulement au droit de chaque poteau, sur une zone limitée, en repérant les
        lames déposées pour les remettre en place ensuite. Une dépose générale ne s&apos;impose que si la structure de la
        terrasse est déjà fatiguée et qu&apos;il faut de toute façon la reprendre.
      </>
    ),
  },
  {
    q: 'Que risque-t-on à visser les platines directement dans les lambourdes ?',
    r: (
      <>
        Une lambourde est dimensionnée pour répartir une charge diffuse sur de nombreux appuis, pas pour encaisser une
        charge concentrée en un point ni pour résister à l&apos;arrachement. Sous le vent, une pergola travaille aussi
        vers le haut : les fixations tirent sur le bois en va-et-vient, le bois se mate, la fixation prend du jeu et
        l&apos;eau s&apos;installe dans le trou. C&apos;est un montage qui peut tenir un été et lâcher au premier coup de
        vent sérieux.
      </>
    ),
  },
  {
    q: "Comment évite-t-on les infiltrations à l'endroit où le poteau traverse la terrasse ?",
    r: (
      <>
        La traversée est une découpe franche avec un jeu périphérique, pour que le bois puisse bouger et qu&apos;aucune
        pièce ne vienne serrer le profilé aluminium. L&apos;eau qui descend le long du poteau est conduite jusqu&apos;à un
        exutoire, pas relâchée sous la terrasse. Les coupes de bois sont retraitées, la visserie est inox et
        l&apos;aluminium est isolé du bois traité pour éviter tout contact humide prolongé.
      </>
    ),
  },
  {
    q: 'Et si la terrasse repose sur des plots réglables posés sur une dalle béton ?',
    r: (
      <>
        C&apos;est le cas le plus confortable : l&apos;appui dur est déjà là. On ouvre le platelage, on contrôle
        l&apos;état et la nature de la dalle, et si elle convient la platine y est fixée directement, le poteau remontant
        à travers la terrasse. En revanche un plot réglable ne reprend jamais un poteau de pergola : il est fait pour
        porter du platelage, pas une descente de charge de toiture.
      </>
    ),
  },
  {
    q: 'Une pergola sur terrasse existante coûte-t-elle plus cher ?',
    r: (
      <>
        Oui, il faut compter la reprise d&apos;appui en plus de la pergola : ouverture du platelage, création des appuis,
        remise en état et finitions de traversée. C&apos;est un poste à part entière, qui explique une bonne partie des
        écarts entre deux devis de pergola. Le chiffrage dépend de ce qu&apos;on trouve sous les lames, donc d&apos;un
        relevé sur place.
      </>
    ),
  },
];

export default function ArticlePergolaSurTerrasseBoisPage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="blog" />
      <main id="contenu">
        {/* Hero */}
        <header className="relative pt-40 pb-24 md:pt-48 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="825"
              height="1100"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Pergola aluminium posée au-dessus d'une terrasse en bois existante, en Gironde : le poteau descend dans le platelage"
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
              <span className="text-secondary-fixed">Pergola sur terrasse bois</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Pergolas aluminium
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Poser une pergola aluminium sur une terrasse en bois existante
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
              <span>14 septembre 2026</span>
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
                On ne pose jamais une pergola aluminium <em>sur</em> une terrasse en bois : on la pose{' '}
                <em>à travers</em>. Les poteaux traversent le platelage pour aller chercher un appui dur en dessous,
                plot béton coulé pour l&apos;occasion, massif ou dalle existante, et la terrasse n&apos;est jamais
                chargée : elle est simplement percée, proprement, puis refermée autour du profilé.
              </strong>{' '}
              C&apos;est le seul sujet où nos deux matières se croisent physiquement, et c&apos;est aussi le cas le plus
              fréquent chez nos clients : la terrasse est déjà là depuis deux, cinq ou dix ans, et la pergola vient
              après. Voici comment nous procédons sur nos chantiers autour de Libourne, ce que nous vérifions avant de
              percer, et les deux ou trois montages que nous refusons de faire, même quand on nous les demande.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. La lambourde ne reprend pas une descente de charge */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Pourquoi une lambourde ne reprend pas une descente de charge
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une terrasse en bois est conçue pour porter une charge{' '}
                <strong className="text-primary font-semibold">diffuse et descendante</strong> : des gens, une table,
                des jardinières, répartis sur toute la surface et redistribués par les lambourdes vers un grand nombre
                d&apos;appuis rapprochés. C&apos;est un plancher, et un plancher travaille en flexion entre ses points
                d&apos;appui. Rien dans ce schéma ne prévoit qu&apos;on vienne concentrer, en quatre ou six points
                précis, tout le poids d&apos;une structure et de sa couverture.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une pergola fait exactement l&apos;inverse. Elle ramasse la charge de toute sa toiture, plus l&apos;eau
                et éventuellement la neige, et la fait redescendre dans ses poteaux. Sous chaque platine, on a donc une
                charge ponctuelle élevée là où le platelage n&apos;attendait qu&apos;un pied de chaise. Le bois, même
                sain, se mate sous une pression ponctuelle qui dure : la platine s&apos;enfonce lentement, le poteau
                perd son aplomb, et la toiture cesse d&apos;être plane.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Et surtout, une pergola ne pousse pas que vers le bas. Une toiture, c&apos;est une surface offerte au
                vent, et le vent la soulève autant qu&apos;il l&apos;appuie.{' '}
                <strong className="text-primary font-semibold">
                  Les ancrages d&apos;une pergola travaillent donc aussi à l&apos;arrachement
                </strong>
                , en va-et-vient, sur des rafales qui reviennent des dizaines de fois par an. Une vis plantée dans une
                lambourde résiste très mal à ce mouvement alterné : le trou s&apos;ovalise, la fixation prend du jeu,
                l&apos;eau entre dans le jeu, et le bois s&apos;altère précisément là où il travaille le plus. Le
                montage peut très bien passer un été. Il ne passe pas dix hivers.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nous ne donnons volontairement aucun chiffre ici : la charge à reprendre dépend de la surface de
                toiture, du type de couverture, de l&apos;exposition du terrain et du sol en place. C&apos;est
                précisément pour cela qu&apos;on ne « sent » pas un ancrage de pergola : on le fait vérifier quand le
                projet le justifie, en s&apos;appuyant sur les règles de l&apos;art de la construction (voir les
                documents techniques du{' '}
                <a href="https://www.cstb.fr/" className={lienInterne} target="_blank" rel="noopener noreferrer">
                  CSTB
                </a>
                ).
              </p>
            </section>

            <Figure
              src="/images/blog/poser-pergola-aluminium-terrasse-bois-existante/poteau-pergola-aluminium-traverse-platelage-terrasse-bois.webp"
              w={810}
              h={660}
              alt="Poteau de pergola aluminium traversant le platelage d'une terrasse en bois, chantier en Gironde"
              caption="Le poteau ressort au milieu des lames : une fois la pergola posée, la traversée est tout ce qui reste visible de l'ancrage."
            />

            {/* 2. Aller chercher le sol dur */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Aller chercher le sol dur : plot béton dédié, massif, dalle existante
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Tout le travail consiste à faire descendre la charge{' '}
                <strong className="text-primary font-semibold">jusqu&apos;à quelque chose qui ne bouge pas</strong>. La
                terrasse devient alors un simple habillage traversé, et non un élément porteur. La première étape se
                fait donc toujours dans le même ordre : on trace l&apos;implantation exacte des poteaux au sol, puis on
                ouvre le platelage à ces endroits-là, et seulement à ces endroits-là, pour voir ce qu&apos;il y a
                dessous. Tant qu&apos;on n&apos;a pas ouvert, on ne sait pas : c&apos;est la raison pour laquelle un
                devis sérieux sur terrasse existante comporte toujours une part de réserve.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Selon ce qu&apos;on trouve, trois solutions couvrent la quasi-totalité des chantiers :
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Appui</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Ce qu&apos;on trouve sous les lames</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Ce qu&apos;on fait</th>
                      <th className="px-4 py-3 font-label-md text-label-md">À savoir</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appuis.map((ligne, i) => (
                      <tr key={ligne[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}>
                        <td className="px-4 py-3 text-primary font-semibold whitespace-nowrap">{ligne[0]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[2]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 mb-5">
                Quand il faut créer l&apos;appui, on descend sous la terrasse, on décaisse au droit du poteau et on
                coule un massif propre, de niveau, sur lequel la platine sera boulonnée. Ses dimensions ne se recopient
                pas d&apos;un chantier à l&apos;autre : elles dépendent de la nature du sol, de la surface de toiture
                et de l&apos;exposition au vent. Sur une pergola à toiture fermée, largement dimensionnée ou en
                situation très ventée, nous faisons vérifier la reprise plutôt que de l&apos;estimer.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Une fois l&apos;appui coulé, il faut le laisser prendre. C&apos;est ce qui transforme presque toujours
                ce type de chantier en deux interventions distinctes, point sur lequel nous revenons plus bas. Côté
                budget, cette reprise d&apos;appui est un poste à part entière, souvent invisible dans les devis les
                moins chers : nous l&apos;avons détaillé dans notre guide sur{' '}
                <a href="/blog/comparer-devis-pergola-postes-prix" className={lienInterne}>
                  les postes qui expliquent l&apos;écart entre trois devis de pergola
                </a>
                , plutôt que de le rejouer ici.
              </p>
            </section>

            {/* 3. Traverser le platelage */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Traverser le platelage proprement et refaire l&apos;étanchéité du perçage
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La traversée est l&apos;endroit où un chantier se juge. Une découpe approximative, une lame laissée en
                porte-à-faux, un profilé aluminium coincé dans le bois : ce sont des désordres qui se voient au bout
                d&apos;un an, pas d&apos;une semaine. Un point mérite d&apos;être rappelé avant tout le reste : percer
                une terrasse, c&apos;est ouvrir le bois là où il était protégé, et la durabilité d&apos;une essence
                s&apos;apprécie justement à l&apos;endroit où elle est exposée (sujet documenté par{' '}
                <a href="https://www.fcba.fr/" className={lienInterne} target="_blank" rel="noopener noreferrer">
                  l&apos;institut technologique FCBA
                </a>
                ). Notre façon de faire tient en quelques principes simples.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Une découpe franche, avec du jeu', 'le bois travaille avec l’humidité, l’aluminium se dilate avec la chaleur : les deux ne doivent jamais se serrer. On laisse un jeu périphérique autour du profilé, qu’un cache viendra masquer.'],
                  ['Aucune lame sans appui', 'toute lame recoupée pour la traversée doit retrouver un appui de part et d’autre de la coupe. Une lame qui se termine dans le vide se met à vibrer, puis à fendre.'],
                  ['Les coupes retraitées', 'une coupe met à nu le cœur de la lame. On la retraite systématiquement, parce que c’est exactement là que commence une dégradation, invisible sous le cache-platine.'],
                  ['Visserie inox et alu isolé du bois', 'on ne met pas n’importe quel métal au contact d’un bois traité et humide. Visserie inox, et une interposition entre la platine aluminium et le support pour éviter un contact humide permanent.'],
                  ['L’eau conduite, pas relâchée', 'sur une pergola à couverture fermée, l’eau descend dans le poteau. Elle doit être menée jusqu’à un exutoire, jamais lâchée sous le platelage où elle détremperait la structure de la terrasse.'],
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
                Le dernier point est celui qu&apos;on sous-estime le plus. Une pergola couverte transforme une surface
                qui laissait passer la pluie en une surface qui la collecte, et tout ce volume d&apos;eau ressort en
                quatre points. Sous une terrasse en bois, une descente mal finie revient à arroser en continu la
                sous-face, c&apos;est-à-dire la partie la plus vulnérable de l&apos;ouvrage. Nous avons consacré un
                article entier à cette question :{' '}
                <a href="/blog/evacuation-eaux-pluviales-pergola-carport" className={lienInterne}>
                  où part réellement l&apos;eau d&apos;une pergola
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Sur le rendu final, la traversée se règle avec une embase ou un cache-platine assorti au thermolaquage
                du profilé : même teinte RAL que la structure, pour que le pied de poteau se lise comme une pièce de la
                pergola et non comme une réparation. C&apos;est une finition, mais c&apos;est elle qui donne
                l&apos;impression que la pergola a toujours été là.
              </p>
            </section>

            <DuoFigure
              a={{
                src: '/images/blog/poser-pergola-aluminium-terrasse-bois-existante/rive-terrasse-bois-plots-reglables-sous-pergola-aluminium.webp',
                alt: "Rive d'une terrasse en bois sur plots réglables sous une pergola aluminium, Saint-Pey-de-Castets en Gironde",
                caption:
                  'Sous la rive, les plots réglables qui portent le platelage : c’est ce qu’on vient regarder avant de décider où descendre les poteaux.',
                w: 785,
                h: 550,
              }}
              b={{
                src: '/images/blog/poser-pergola-aluminium-terrasse-bois-existante/pied-poteau-aluminium-au-ras-des-lames-terrasse-bois.webp',
                alt: "Pied de poteau de pergola aluminium au ras des lames d'une terrasse en bois, Gironde",
                caption:
                  'Au sol, le pied de poteau reprend la teinte des profilés : la finition doit se lire comme une pièce de la pergola.',
                w: 700,
                h: 480,
              }}
            />

            {/* 4. Terrasse sur plots réglables */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le cas de la terrasse sur plots réglables
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est la configuration qu&apos;on rencontre le plus souvent sur les terrasses récentes, et elle
                appelle une distinction nette.{' '}
                <strong className="text-primary font-semibold">
                  Un plot réglable ne reprendra jamais un poteau de pergola
                </strong>{' '}
                : c&apos;est une pièce faite pour rattraper un niveau et porter du platelage réparti, pas pour encaisser
                une descente de charge concentrée assortie d&apos;efforts d&apos;arrachement. Cela n&apos;a rien de
                disqualifiant pour la terrasse, c&apos;est simplement un autre métier.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                En revanche, ce qui se trouve <em>sous</em> les plots change tout. Si les plots reposent sur une dalle
                béton, l&apos;appui dur est déjà là : on ouvre, on contrôle l&apos;état du béton, sa planéité et, autant
                que possible, sa nature, et si l&apos;ensemble convient la platine est fixée directement dessus. Le
                poteau remonte alors à travers la terrasse, dont on recoupe le platelage autour. C&apos;est le scénario
                le plus rapide et le moins coûteux.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Si les plots reposent sur un lit de gravier, un géotextile ou un sol simplement stabilisé, il n&apos;y a
                pas d&apos;appui exploitable : on décaisse localement et on crée le massif. C&apos;est plus long, mais
                c&apos;est la seule manière d&apos;obtenir un ancrage qui vaille quelque chose. Si vous voulez
                comprendre ce qui se passe réellement sous des lames, notre guide sur{' '}
                <a href="/blog/terrasse-bois-structure-plots-lambourdes" className={lienInterne}>
                  la structure d&apos;une terrasse en bois, plots, lambourdes et ventilation
                </a>{' '}
                décrit tout ce qu&apos;on ne voit plus une fois le platelage posé.
              </p>
            </section>

            {/* 5. Terrasse surélevée sur pilotis */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le cas de la terrasse surélevée sur pilotis
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est la configuration la plus délicate, et celle où nous sommes les plus prudents. Sur une
                terrasse sur pilotis, l&apos;appui dur est très bas, parfois plusieurs marches sous le niveau des lames.
                Le poteau de pergola doit donc descendre jusqu&apos;au sol en traversant toute la hauteur de la
                structure, ou bien s&apos;implanter juste à côté, sur son propre massif, la traversée se faisant alors
                en bordure de platelage.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Deux choses changent par rapport à une terrasse de plain-pied. D&apos;abord la{' '}
                <strong className="text-primary font-semibold">hauteur libre du poteau</strong> augmente : plus un
                poteau est long entre son encastrement et la structure qu&apos;il porte, plus les efforts en pied
                deviennent importants. Ensuite, la{' '}
                <strong className="text-primary font-semibold">prise au vent</strong> est plus forte, tout simplement
                parce que l&apos;ouvrage est plus haut et souvent moins abrité que sur un terrain plat. Les deux effets
                se cumulent, et c&apos;est le genre de situation où un avis technique vaut mieux qu&apos;une habitude.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Dans ces cas-là, nous orientons souvent vers une{' '}
                <strong className="text-primary font-semibold">pergola adossée</strong> plutôt qu&apos;autoportante : la
                façade reprend un côté de la structure, via une fixation étudiée dans le mur porteur et non dans un
                bardage, et il ne reste que deux poteaux à descendre. Moins de traversées, moins de reprises, un ouvrage
                plus stable. Encore faut-il que la façade puisse porter, ce qui se vérifie sur place.
              </p>
            </section>

            <Figure
              src="/images/realisations/pergola-aluminium-terrasse-bois-libourne-1.webp"
              w={1600}
              h={900}
              alt="Pergola aluminium adossée à la façade d'une maison au-dessus d'une terrasse en bois, poteaux côté jardin, Gironde"
              caption="Adossée, la pergola ne descend des poteaux que du côté jardin : autant de traversées en moins dans le platelage."
            />

            {/* 6. Ce qu'on refuse */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qu&apos;on refuse de faire, et pourquoi
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Il existe des façons plus rapides de poser une pergola sur une terrasse existante. Elles ont toutes en
                commun de faire l&apos;économie de la descente de charge, et c&apos;est toujours le client qui paie
                cette économie, deux ou trois ans plus tard. Voici celles que nous ne réalisons pas, et la raison.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Visser les platines dans le platelage ou les lambourdes', 'aucune reprise sérieuse de l’arrachement, matage du bois, jeu qui s’installe et infiltrations au droit de chaque vis.'],
                  ['Lester les pieds au lieu de les ancrer', 'des pieds posés sur dalles ou sur bacs peuvent convenir à une voile d’ombrage légère, pas à une structure couverte qui prend le vent.'],
                  ['Fixer un côté dans un bardage ou une isolation extérieure', 'un bardage habille, il ne porte pas. Une fixation de pergola doit atteindre un élément porteur, sinon elle arrache l’habillage avec elle.'],
                  ['Poser sur une terrasse fatiguée sans diagnostic', 'si les appuis, les lambourdes ou la ventilation sont déjà en fin de vie, poser une pergola dessus revient à investir sur un support qu’il faudra déposer.'],
                  ['Promettre « on ne touche pas à votre terrasse »', 'c’est l’argument commercial le plus vendeur et le plus trompeur du sujet. Une pergola ancrée traverse forcément le platelage : la vraie question est de savoir si la traversée est bien faite.'],
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
                Le dernier cas mérite une nuance honnête : quand la terrasse est vraiment en bout de course, mieux vaut
                traiter les deux sujets ensemble plutôt que de poser du neuf sur du fatigué. Notre article sur{' '}
                <a href="/blog/renover-terrasse-bois-existante" className={lienInterne}>
                  la rénovation d&apos;une terrasse en bois
                </a>{' '}
                donne le diagnostic en trois gestes qui permet de trancher entre poncer, remplacer les lames et tout
                reprendre. Si la réponse est « tout reprendre », alors c&apos;est le meilleur moment de votre vie pour
                poser une pergola : les appuis se coulent avant le platelage.
              </p>
            </section>

            {/* 7. Planning, terrasse neuve, ancrage local */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce que ça change au planning quand la terrasse est neuve, à Libourne et en Gironde
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Sur une terrasse existante, le chantier se déroule presque toujours en deux temps : une première venue
                pour ouvrir le platelage, décaisser et couler les appuis, puis un délai de prise, puis une seconde venue
                pour monter la structure aluminium et refermer les traversées. Deux dates, deux équipes parfois, et un
                intervalle qui n&apos;est pas de la lenteur mais du béton qui fait son travail. Quand un devis promet
                tout en une journée sur terrasse existante, il faut regarder ce qui a été escamoté.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Si votre terrasse n&apos;est pas encore construite, ou si elle doit être refaite, le calcul change
                complètement.{' '}
                <strong className="text-primary font-semibold">
                  On coule les massifs de pergola avant de poser la structure de la terrasse
                </strong>
                , on prévoit les réservations dans le platelage, et le jour de la pose de la pergola il n&apos;y a plus
                qu&apos;à boulonner. Aucune dépose, aucune lame recoupée après coup, aucune reprise de finition.
                C&apos;est moins cher, plus propre et plus rapide, et cela ne coûte qu&apos;une chose : décider de la
                pergola au moment de décider de la terrasse, même si elle n&apos;est posée que deux ans plus tard.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est l&apos;un des avantages concrets de travailler avec une entreprise qui fait les deux
                matières. Autour de Libourne, dans le Libournais et plus largement en Gironde, nous posons aussi bien la
                terrasse en bois que la pergola aluminium qui viendra la coiffer : le même interlocuteur trace
                l&apos;implantation des poteaux, dimensionne les appuis et garantit la traversée. Personne ne renvoie la
                responsabilité sur l&apos;autre corps de métier quand une lame fend au droit d&apos;une platine.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Vous pouvez voir comment cela se traduit sur le terrain dans{' '}
                <a href="/realisations" className={lienInterne}>nos réalisations en Gironde</a>, et découvrir notre
                approche des <a href="/pergolas" className={lienInterne}>pergolas sur mesure</a>. Si c&apos;est le
                produit lui-même qui vous intéresse, lames orientables, motorisation et teintes, notre{' '}
                <a href="/blog/pergola-bioclimatique-aluminium-guide" className={lienInterne}>
                  guide de la pergola bioclimatique en aluminium
                </a>{' '}
                traite la question en détail.
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
              Pergola sur terrasse bois : vos questions
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
              La pergola se pose à travers, jamais dessus
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Une pergola aluminium bien ancrée traverse votre terrasse en bois pour aller chercher un appui dur, et
              laisse le platelage faire ce pour quoi il a été construit : marcher dessus. C&apos;est un peu plus de
              travail qu&apos;un vissage sur les lambourdes, et c&apos;est toute la différence entre un ouvrage qui
              tient vingt ans et un montage qui bouge au premier coup de vent. Nous venons regarder ce qu&apos;il y a
              sous vos lames avant de chiffrer, à Libourne et dans toute la Gironde.
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
