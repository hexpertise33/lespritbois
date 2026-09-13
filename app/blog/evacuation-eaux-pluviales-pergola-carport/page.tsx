import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER =
  '/images/blog/evacuation-eaux-pluviales-pergola-carport/pergola-aluminium-toiture-fermee-terrasse-bois-gironde.webp';

export const metadata: Metadata = buildMetadata({
  title: "Évacuation des eaux pluviales d'une pergola en Gironde",
  description:
    "Poteau à descente intégrée, réseau, infiltration ou cuve : où part vraiment l'eau d'une pergola ou d'un carport en Gironde, et ce que dit le code civil.",
  keywords:
    "évacuation eaux pluviales pergola, descente intégrée poteau, gestion des eaux pluviales à la parcelle, raccordement eaux pluviales, évacuation eau carport aluminium, chéneau pergola aluminium, pergola Libourne, carport Gironde",
  path: '/blog/evacuation-eaux-pluviales-pergola-carport',
  ogImage: COVER,
  ogTitle: "Où part l'eau de votre pergola ? L'évacuation des eaux pluviales",
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
      {[a, b].map((img, i) => (
        <figure key={i}>
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
        name: 'Évacuation des eaux pluviales',
        item: 'https://lesprit-bois.fr/blog/evacuation-eaux-pluviales-pergola-carport',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "Où part l'eau de votre pergola ? L'évacuation des eaux pluviales",
    description:
      "Une pergola couverte ou un carport transforment une surface perméable en surface ruisselante. Le poteau à descente intégrée n'est pas une évacuation, c'est un début de tuyau : ce qui compte se joue au pied du poteau. Réseau, infiltration à la parcelle ou récupération, ce que le code civil impose vis-à-vis du voisin, ce que la commune peut exiger et les erreurs qui se voient au bout d'un hiver, par un artisan de Libourne, en Gironde.",
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
    datePublished: '2026-09-13',
    dateModified: '2026-09-13',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/evacuation-eaux-pluviales-pergola-carport',
    },
    about: [
      { '@type': 'Thing', name: 'évacuation des eaux pluviales' },
      { '@type': 'Thing', name: 'pergola aluminium' },
      { '@type': 'Thing', name: 'carport aluminium' },
      { '@type': 'Thing', name: 'gestion des eaux pluviales à la parcelle' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Un poteau à descente intégrée suffit-il à évacuer l'eau d'une pergola ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non. Le poteau à descente intégrée conduit l'eau de la couverture jusqu'au sol sans gouttière apparente, ce qui est une qualité de finition, mais il s'arrête à sa sortie en pied. Ce qui vient après, reprise dans un dauphin ou un regard, tranchée, destination finale, ne fait partie d'aucun catalogue : c'est au projet de le prévoir. Un poteau de descente est un début de tuyau, pas une solution d'évacuation.",
        },
      },
      {
        '@type': 'Question',
        name: "Où doit partir l'eau d'une pergola ou d'un carport ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Trois destinations sont possibles : le réseau d'eaux pluviales quand il existe et qu'un raccordement est accepté, l'infiltration sur votre propre parcelle (puits d'infiltration, tranchée drainante, noue, massif drainant), ou la récupération en cuve pour des usages extérieurs comme l'arrosage. La cuve ne dispense jamais de décider où part le trop-plein : une cuve pleine n'évacue plus rien.",
        },
      },
      {
        '@type': 'Question',
        name: "Puis-je laisser l'eau de ma pergola s'écouler chez le voisin ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non. L'article 681 du code civil dispose que « tout propriétaire doit établir des toits de manière que les eaux pluviales s'écoulent sur son terrain ou sur la voie publique ; il ne peut les faire verser sur le fonds de son voisin ». L'article 640 ajoute que le fonds inférieur reçoit les eaux qui découlent naturellement, sans que la main de l'homme y ait contribué, et que le propriétaire du fonds supérieur ne peut rien faire qui aggrave cette servitude. Une toiture neuve qui collecte et concentre la pluie, c'est précisément la main de l'homme.",
        },
      },
      {
        '@type': 'Question',
        name: "Faut-il une autorisation pour gérer les eaux pluviales d'une pergola ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Cela dépend de votre commune. L'article L2224-10 du code général des collectivités territoriales prévoit que les communes ou leurs établissements publics de coopération intercommunale délimitent, après enquête publique, des zones où des mesures doivent être prises pour limiter l'imperméabilisation des sols et assurer la maîtrise du débit et de l'écoulement des eaux pluviales et de ruissellement, ainsi que des zones où des installations de collecte, de stockage éventuel et de traitement sont nécessaires. Ce zonage et sa traduction dans le document d'urbanisme se vérifient en mairie, commune par commune.",
        },
      },
      {
        '@type': 'Question',
        name: 'Une pergola bioclimatique à lames orientables est-elle concernée ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, dès que les lames sont fermées. En position fermée, la couverture devient une surface pleine qui collecte la pluie et l'envoie vers les chéneaux périphériques, exactement comme une toiture en verre ou en panneau isolé. Et c'est justement sous l'averse, lames fermées, que l'ouvrage sert le plus.",
        },
      },
      {
        '@type': 'Question',
        name: 'Que risque-t-on si rien n’est prévu au pied du poteau ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Les désordres se voient dès le premier hiver : affouillement du sol ou du gravier sous le jet, flaque permanente qui ne sèche plus, terrasse en bois maintenue humide qui noircit, regard colmaté par les feuilles, et en période de gel un circuit bouché qui fait ressortir l'eau en amont. Aucun n'est dramatique pris isolément, tous sont évitables en décidant de la destination de l'eau avant la pose.",
        },
      },
    ],
  },
];

const destinations = [
  [
    'Le réseau',
    "raccordement à un regard ou à une canalisation d'eaux pluviales existante. C'est la solution la plus lisible quand le réseau est là, accessible et séparatif : on sait où va l'eau. Elle suppose une tranchée, une pente continue jusqu'au point de rejet et un regard de visite qui reste atteignable. Les eaux de pluie ne se renvoient jamais dans le réseau d'eaux usées.",
  ],
  [
    'L’infiltration à la parcelle',
    "puits d'infiltration, tranchée drainante, noue ou massif drainant qui rendent l'eau au sol, à distance des fondations. C'est le sens de la réglementation actuelle, mais tout dépend de l'aptitude réelle du terrain : les sols argileux, fréquents dans le Libournais, boivent lentement, et cela se vérifie par un essai avant le chantier, pas après le premier orage.",
  ],
  [
    'La récupération',
    "cuve aérienne ou enterrée, pour les usages extérieurs : arrosage du potager, lavage des outils, appoint du jardin en été. C'est un bon usage de l'eau, à une condition : une cuve pleine n'évacue plus rien. Le trop-plein doit donc repartir vers l'une des deux destinations précédentes, faute de quoi on reproduit le problème au pied de la cuve.",
  ],
];

const erreurs = [
  [
    'L’affouillement au pied du poteau',
    "le jet creuse un cratère dans le gravier ou la terre, le sol se déchausse autour de la platine et le dessus du massif finit par apparaître. C'est le désordre le plus courant, et le plus facile à éviter.",
  ],
  [
    'La flaque qui ne sèche plus',
    "la sortie a été dirigée vers un point bas dont personne n'avait remarqué qu'il en était un. Terre saturée, mousse, odeur, moustiques l'été : la flaque devient permanente d'octobre à mars.",
  ],
  [
    'La terrasse bois maintenue humide',
    "quand l'eau de toiture est rejetée sur le platelage, le bois ne sèche plus entre deux pluies. Il noircit, les lames se salissent, l'humidité stagne sous la structure et le vieillissement s'accélère.",
  ],
  [
    'Le regard colmaté',
    "feuilles, aiguilles de pin, pollen et gravillons finissent dans le circuit. Sans crépine ni trappe accessible, on ne découvre le bouchon qu'au débordement, généralement le jour de la pluie qui compte.",
  ],
  [
    'Le gel',
    "un tuyau enterré qui finit en cuvette garde de l'eau. En épisode de gel, même court, le circuit se bouche et l'eau ressort en amont, souvent au pied du poteau, parfois sous la terrasse.",
  ],
];

const devis = [
  'Le nombre de poteaux de descente et leur emplacement exact, décidé avec vous devant le terrain.',
  'La nature de la reprise en pied : dauphin, boîte de reprise ou regard, jamais une sortie qui tombe en terre nue.',
  'La destination finale retenue : réseau, dispositif d’infiltration ou cuve, et l’exutoire du trop-plein.',
  'Le linéaire de tranchée, la remise en état du sol, du gravier ou de l’engazonnement après passage.',
  'Ce qui reste hors devis, écrit noir sur blanc, pour qu’aucune case vide ne se découvre au moment de la pose.',
];

const faq = [
  {
    q: "Un poteau à descente intégrée suffit-il à évacuer l'eau d'une pergola ?",
    r: (
      <>
        Non. Le poteau à descente intégrée conduit l&apos;eau de la couverture jusqu&apos;au sol sans gouttière
        apparente, ce qui est une qualité de finition, mais il s&apos;arrête à sa sortie en pied. Ce qui vient après,
        reprise dans un dauphin ou un regard, tranchée, destination finale, ne fait partie d&apos;aucun catalogue :
        c&apos;est au projet de le prévoir. Un poteau de descente est un début de tuyau, pas une solution
        d&apos;évacuation.
      </>
    ),
  },
  {
    q: "Où doit partir l'eau d'une pergola ou d'un carport ?",
    r: (
      <>
        Trois destinations sont possibles : le réseau d&apos;eaux pluviales quand il existe et qu&apos;un raccordement
        est accepté, l&apos;infiltration sur votre propre parcelle (puits d&apos;infiltration, tranchée drainante, noue,
        massif drainant), ou la récupération en cuve pour des usages extérieurs comme l&apos;arrosage. La cuve ne
        dispense jamais de décider où part le trop-plein : une cuve pleine n&apos;évacue plus rien.
      </>
    ),
  },
  {
    q: "Puis-je laisser l'eau de ma pergola s'écouler chez le voisin ?",
    r: (
      <>
        Non. L&apos;article 681 du code civil dispose que «&nbsp;tout propriétaire doit établir des toits de manière que
        les eaux pluviales s&apos;écoulent sur son terrain ou sur la voie publique ; il ne peut les faire verser sur le
        fonds de son voisin&nbsp;». L&apos;article 640 ajoute que le fonds inférieur reçoit les eaux qui découlent
        naturellement, sans que la main de l&apos;homme y ait contribué, et que le propriétaire du fonds supérieur ne
        peut rien faire qui aggrave cette servitude. Une toiture neuve qui collecte et concentre la pluie, c&apos;est
        précisément la main de l&apos;homme.
      </>
    ),
  },
  {
    q: "Faut-il une autorisation pour gérer les eaux pluviales d'une pergola ?",
    r: (
      <>
        Cela dépend de votre commune. L&apos;article L2224-10 du code général des collectivités territoriales prévoit
        que les communes ou leurs établissements publics de coopération intercommunale délimitent, après enquête
        publique, des zones où des mesures doivent être prises pour limiter l&apos;imperméabilisation des sols et
        assurer la maîtrise du débit et de l&apos;écoulement des eaux pluviales et de ruissellement, ainsi que des zones
        où des installations de collecte, de stockage éventuel et de traitement sont nécessaires. Ce zonage et sa
        traduction dans le document d&apos;urbanisme se vérifient en mairie, commune par commune.
      </>
    ),
  },
  {
    q: 'Une pergola bioclimatique à lames orientables est-elle concernée ?',
    r: (
      <>
        Oui, dès que les lames sont fermées. En position fermée, la couverture devient une surface pleine qui collecte
        la pluie et l&apos;envoie vers les chéneaux périphériques, exactement comme une toiture en verre ou en panneau
        isolé. Et c&apos;est justement sous l&apos;averse, lames fermées, que l&apos;ouvrage sert le plus.
      </>
    ),
  },
  {
    q: 'Que risque-t-on si rien n’est prévu au pied du poteau ?',
    r: (
      <>
        Les désordres se voient dès le premier hiver : affouillement du sol ou du gravier sous le jet, flaque permanente
        qui ne sèche plus, terrasse en bois maintenue humide qui noircit, regard colmaté par les feuilles, et en période
        de gel un circuit bouché qui fait ressortir l&apos;eau en amont. Aucun n&apos;est dramatique pris isolément,
        tous sont évitables en décidant de la destination de l&apos;eau avant la pose.
      </>
    ),
  },
];

export default function ArticleEvacuationEauxPluvialesPage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="blog" />
      <main id="contenu">
        {/* Hero */}
        <header className="relative pt-40 pb-24 md:pt-48 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="900"
              height="720"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Pergola en aluminium à toiture fermée au-dessus d'une terrasse en bois, poteaux descendant sur le platelage, chantier en Gironde"
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
              <span className="text-secondary-fixed">Évacuation des eaux pluviales</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Aluminium
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Où part l&apos;eau de votre pergola ? L&apos;évacuation des eaux pluviales
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
              <span>13 septembre 2026</span>
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
                L&apos;eau d&apos;une pergola couverte ou d&apos;un carport doit finir quelque part, et ce quelque part
                se décide avant la pose : le poteau à descente intégrée ne fait que conduire l&apos;eau jusqu&apos;au
                sol, la vraie question est ce qui se passe au pied du poteau, entre raccordement au réseau
                d&apos;eaux pluviales, infiltration sur votre parcelle et récupération en cuve.
              </strong>{' '}
              Sur nos chantiers autour de Libourne, c&apos;est le poste dont on nous parle le moins au moment du projet
              et celui qui se rappelle le plus vite au client. Au bout d&apos;un hiver, un pied de poteau creusé ou une
              flaque qui ne sèche plus racontent toujours la même histoire : une toiture neuve dont personne
              n&apos;avait décidé la sortie. Voici comment nous traitons la question, ce que le code civil impose
              vis-à-vis du voisin et ce que votre commune peut exiger.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Ce que change une toiture fermée */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qu&apos;une toiture fermée change au ruissellement de votre jardin
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Avant les travaux, la pluie qui tombe sur cette partie du jardin est répartie sur toute la surface :
                elle arrive partout à la fois, doucement, et le sol la prend à son rythme. Une pergola à lames ouvertes
                ou une simple structure à claire-voie ne changent presque rien à ce régime.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le jour où la couverture se ferme, tout change.{' '}
                <strong className="text-primary font-semibold">
                  Une surface qui laissait passer l&apos;eau devient une surface qui la collecte
                </strong>
                , et cette eau ne tombe plus sur des dizaines de mètres carrés : elle est reprise par les chéneaux des
                profilés périphériques, dirigée vers un ou deux points, et rendue au sol en un filet concentré. Ce
                n&apos;est plus une pluie, c&apos;est un jet. La différence n&apos;est pas seulement la quantité, qui
                elle n&apos;a pas bougé, c&apos;est la concentration dans l&apos;espace et dans le temps : sous un
                orage d&apos;été girondin, toute la surface arrive au même endroit, au même moment, sur un sol qui
                n&apos;a aucun délai pour l&apos;absorber.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Sont concernés de la même façon un carport aluminium, souvent plus grand qu&apos;une pergola, une
                toiture en verre feuilleté, un polycarbonate alvéolaire, un panneau sandwich isolé, et aussi une{' '}
                <a href="/blog/pergola-bioclimatique-aluminium-guide" className={lienInterne}>
                  pergola bioclimatique à lames orientables
                </a>{' '}
                dès que ses lames sont fermées, c&apos;est-à-dire précisément quand il pleut. Le choix du matériau de
                couverture, que nous détaillons dans notre guide des{' '}
                <a href="/blog/couverture-pergola-carport-toiture-materiaux" className={lienInterne}>
                  couvertures de pergola et de carport
                </a>
                , ne change rien à ce raisonnement : ici, on part du principe que la toiture est fermée et on suit
                l&apos;eau.
              </p>
            </section>

            <Figure
              src="/images/blog/evacuation-eaux-pluviales-pergola-carport/rive-couverture-pergola-aluminium-gouttes-panneaux.webp"
              w={1000}
              h={640}
              alt="Dessous d'une couverture de pergola aluminium, panneaux clos couverts de gouttes de pluie et poutre de rive, en Gironde"
              caption="Après l'averse, les gouttes restent sur les panneaux. Une couverture close ne laisse plus rien tomber entre ses éléments : l'eau ne peut repartir que par le pourtour."
            />

            {/* 2. Poteaux à descente intégrée */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Poteaux à descente intégrée : ce qu&apos;ils font vraiment, et où ils s&apos;arrêtent
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est l&apos;argument que tout le monde retient d&apos;une pergola aluminium : «&nbsp;l&apos;eau
                part dans les poteaux&nbsp;». C&apos;est vrai, et c&apos;est une vraie qualité. Les profilés
                périphériques forment des chéneaux, les traverses conduisent l&apos;eau vers les angles, et un ou
                plusieurs poteaux évidés font office de descente. Rien ne pend, aucune gouttière rapportée ne vient
                casser la ligne de l&apos;ouvrage, et l&apos;eau circule à l&apos;abri du gel et des feuilles sur tout
                son trajet aérien.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Mais il faut regarder où ce dispositif s&apos;achève.{' '}
                <strong className="text-primary font-semibold">
                  Le poteau à descente intégrée n&apos;est pas une solution d&apos;évacuation, c&apos;est un début de
                  tuyau.
                </strong>{' '}
                Il se termine par un orifice de sortie en pied, souvent à quelques centimètres du sol. À partir de cet
                orifice, plus rien n&apos;est prévu : ni par le fabricant, ni par la notice, ni par le catalogue. La
                question de savoir si l&apos;eau va dans un regard, dans un massif drainant, dans une cuve ou tout
                simplement sur le gravier, personne ne l&apos;a tranchée à votre place. C&apos;est le projet qui doit
                le faire.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Ce que nous vérifions au montage, sur la partie haute, avant même de parler du sol :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Que les chéneaux aient une pente réelle vers le ou les poteaux de descente, et pas seulement sur le plan.',
                  'Que les angles et les jonctions de profilés soient étanchés proprement, c’est là que les fuites apparaissent.',
                  'Que les entrées d’eau soient équipées et restent accessibles pour un nettoyage, feuilles et pollen circulent partout.',
                  'Que le poteau choisi comme descente soit celui qui arrange le terrain, pas celui qui tombe le mieux sur le plan de calepinage.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ce dernier point est celui qu&apos;on néglige le plus. Sur une pergola de quatre poteaux, choisir
                lequel descend l&apos;eau, c&apos;est déjà décider de la moitié du problème : autant le placer du côté
                où l&apos;eau pourra être reprise, pas du côté de la clôture ou du mur enterré.
              </p>
            </section>

            <Figure
              src="/images/blog/evacuation-eaux-pluviales-pergola-carport/pied-poteau-aluminium-pergola-sur-terrasse-bois.webp"
              w={940}
              h={580}
              alt="Pied d'un poteau de pergola aluminium posé au milieu d'une terrasse en bois, chantier en Gironde"
              caption="Tout se joue ici : le poteau s'arrête au ras du platelage, et ce que devient l'eau à partir de ce point n'est écrit dans aucun catalogue."
            />

            {/* 3. Les trois destinations */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Les trois destinations possibles de l&apos;eau
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une fois sortie du poteau, l&apos;eau n&apos;a que trois avenirs possibles. Aucun n&apos;est meilleur
                dans l&apos;absolu : ils dépendent de ce qui existe déjà sur votre terrain, de la nature du sol et des
                règles de votre commune. On peut d&apos;ailleurs en combiner deux sur le même ouvrage.
              </p>
              <ul className="space-y-3 mb-5">
                {destinations.map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Sur la récupération, restons dans le raisonnable : une cuve alimentée par une pergola sert très bien à
                l&apos;arrosage et aux usages extérieurs. Tout usage à l&apos;intérieur de la maison relève d&apos;une
                réglementation sanitaire à part, que nous ne traitons pas ici et qui ne s&apos;improvise pas.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Le seul choix vraiment interdit, c&apos;est le quatrième : ne rien décider, laisser la sortie de poteau
                cracher sur le gravier et espérer que le terrain s&apos;arrange. C&apos;est pourtant, de loin, celui
                que nous rencontrons le plus souvent quand on nous appelle pour reprendre un ouvrage posé par
                quelqu&apos;un d&apos;autre.
              </p>
            </section>

            <DuoFigure
              a={{
                src: '/images/blog/evacuation-eaux-pluviales-pergola-carport/reseau-eaux-pluviales-tranchee-lit-de-gravier.webp',
                alt: "Tuyau d'évacuation des eaux pluviales posé sur un lit de gravier au fond d'une tranchée",
                caption:
                  "Photo d'illustration. Le réseau, c'est d'abord du terrassement : une tranchée, un lit de gravier et une pente qui ne se rattrape pas après coup.",
                w: 1200,
                h: 674,
              }}
              b={{
                src: '/images/blog/evacuation-eaux-pluviales-pergola-carport/recuperation-eau-pluie-fut-sous-descente.webp',
                alt: "Descente d'eau de pluie débouchant au-dessus d'un fût de récupération plein, contre un soubassement en pierre",
                caption:
                  "Photo d'illustration. Récupérer, c'est un contenant sous la descente. Le jour où il est plein, l'eau continue : le trop-plein doit avoir sa propre destination.",
                w: 1200,
                h: 800,
              }}
            />

            {/* 4. Le voisin et le code civil */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le voisin et l&apos;écoulement : ce que dit le code civil
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est le point où un projet d&apos;agrément devient un sujet de droit, et il vaut mieux le savoir
                avant de creuser.{' '}
                <a
                  href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006429847"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  L&apos;article 640 du code civil
                </a>{' '}
                pose la servitude naturelle d&apos;écoulement : les fonds inférieurs sont assujettis envers ceux qui
                sont plus élevés à recevoir les eaux qui en découlent{' '}
                <strong className="text-primary font-semibold">
                  naturellement, sans que la main de l&apos;homme y ait contribué
                </strong>
                . Le propriétaire du fonds inférieur ne peut pas élever de digue qui empêche cet écoulement, et, c&apos;est
                le point qui nous concerne, le propriétaire du fonds supérieur ne peut rien faire qui aggrave la
                servitude du fonds inférieur.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Lisez la formule une seconde fois : «&nbsp;sans que la main de l&apos;homme y ait contribué&nbsp;». Une
                toiture neuve qui collecte la pluie sur toute sa surface et la restitue concentrée en un point, c&apos;est
                exactement la main de l&apos;homme. L&apos;eau qui sort de votre poteau n&apos;est plus de
                l&apos;écoulement naturel, et la tolérance dont bénéficie le ruissellement du terrain ne la couvre pas.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le second texte est encore plus direct.{' '}
                <a
                  href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006430256"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  L&apos;article 681 du code civil
                </a>{' '}
                dispose : «&nbsp;Tout propriétaire doit établir des toits de manière que les eaux pluviales
                s&apos;écoulent sur son terrain ou sur la voie publique ; il ne peut les faire verser sur le fonds de
                son voisin.&nbsp;» Une pergola couverte et un carport sont des toits. La règle vaut donc pour eux comme
                pour la maison.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Concrètement, sur nos chantiers, cela veut dire trois choses. On regarde la pente réelle du terrain
                avant de figer l&apos;implantation, pas après. On place le poteau de descente du côté où l&apos;eau
                peut être reprise chez vous, jamais du côté de la limite séparative. Et quand le terrain penche
                franchement vers la propriété voisine, on le dit au client avant la signature : la solution existe
                presque toujours, mais elle a un coût et elle doit être au devis.
              </p>
            </section>

            {/* 5. Ce que la commune peut imposer */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce que votre commune peut imposer : la gestion à la parcelle, de Libourne aux communes voisines
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Au-delà du voisinage, il y a la collectivité.{' '}
                <a
                  href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000046783819"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  L&apos;article L2224-10 du code général des collectivités territoriales
                </a>{' '}
                prévoit que les communes ou leurs établissements publics de coopération intercommunale délimitent,
                après enquête publique, des zones où des mesures doivent être prises pour{' '}
                <strong className="text-primary font-semibold">limiter l&apos;imperméabilisation des sols</strong> et
                assurer la maîtrise du débit et de l&apos;écoulement des eaux pluviales et de ruissellement, ainsi que
                des zones où des installations de collecte, de stockage éventuel et de traitement sont nécessaires.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est ce qu&apos;on appelle le zonage pluvial, et il explique pourquoi certaines communes
                demandent aujourd&apos;hui que l&apos;eau d&apos;une construction neuve reste sur la parcelle plutôt
                que de partir au réseau. Le point important à retenir est celui-ci :{' '}
                <strong className="text-primary font-semibold">
                  ce zonage se délimite commune par commune, et sa traduction dans le document d&apos;urbanisme
                  n&apos;est pas la même partout.
                </strong>{' '}
                Ce qui vaut à Libourne ne vaut pas forcément trois kilomètres plus loin, et une règle lue sur un forum
                ou dans un guide national ne vous protège de rien. Cela se vérifie en mairie, dossier en main, auprès
                du service urbanisme et du service en charge de l&apos;assainissement.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ne confondez pas les deux démarches, elles se croisent sur le même dossier sans se remplacer :
                l&apos;autorisation d&apos;urbanisme porte sur l&apos;ouvrage que vous construisez, le zonage pluvial
                porte sur l&apos;eau qu&apos;il produit. Notre guide des{' '}
                <a href="/blog/autorisation-urbanisme-abri-carport-pergola-2026" className={lienInterne}>
                  autorisations d&apos;urbanisme pour un abri, un carport ou une pergola
                </a>{' '}
                traite la première ; c&apos;est au moment de déposer le dossier qu&apos;on pose la seconde question au
                guichet, et pas quand la dalle est coulée.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Carport-aluminium-Libourne-2.webp"
              w={1200}
              h={646}
              alt="Carport en aluminium à toiture fermée accolé à une maison, poteaux implantés en bord de terrain"
              caption="Une toiture de carport couvre vite deux places. Plus l'ouvrage s'approche d'une limite, moins le choix du poteau qui descend l'eau est un détail d'esthétique."
            />

            {/* 6. Les erreurs qui se voient au bout d'un hiver */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Les erreurs qui se voient au bout d&apos;un hiver
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un ouvrage mal évacué ne se voit pas le jour de la réception. Il se voit en mars, quand la belle saison
                revient et que la pergola a passé un hiver complet à concentrer la pluie au même endroit. Voici ce
                qu&apos;on retrouve, dans l&apos;ordre de fréquence :
              </p>
              <ul className="space-y-3 mb-5">
                {erreurs.map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le cas de la terrasse bois mérite une attention particulière, parce qu&apos;il est fréquent chez nous :
                la pergola arrive après la terrasse, et le pied de poteau se retrouve sur le platelage. L&apos;eau
                rejetée à cet endroit ne gêne personne le premier été, puis elle entretient une humidité permanente qui
                fait vieillir le bois deux fois plus vite. Si vous en êtes à la conception, notre guide sur la{' '}
                <a href="/blog/terrasse-bois-structure-plots-lambourdes" className={lienInterne}>
                  structure d&apos;une terrasse bois, plots et lambourdes
                </a>{' '}
                explique pourquoi la ventilation sous platelage compte autant que les lames elles-mêmes.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Tous ces désordres ont la même parade, et elle est simple : reprendre la sortie du poteau dans un
                élément dur (dauphin, boîte de reprise, regard), lui donner une pente continue jusqu&apos;à sa
                destination, et garder un accès pour curer. Décidé avant la pose, c&apos;est un détail de chantier.
                Repris après, c&apos;est une reprise de terrassement autour d&apos;un ouvrage déjà monté.
              </p>
            </section>

            <Figure
              src="/images/blog/evacuation-eaux-pluviales-pergola-carport/flaque-stagnante-gravier-eau-non-reprise.webp"
              w={1000}
              h={667}
              alt="Flaque d'eau stagnante creusée dans un sol en gravier après la pluie"
              caption="Photo d'illustration. Une flaque qui revient au même endroit et ne sèche plus, c'est la signature d'un rejet que rien ne reprend."
            />

            {/* 7. Ce qu'on écrit au devis */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qu&apos;on écrit au devis, chez nous, à Libourne
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une bonne partie des écarts entre deux devis de pergola vient de ce poste, parce qu&apos;il est facile à
                ne pas écrire. Nous préférons qu&apos;il figure noir sur blanc, même quand il alourdit le total :
              </p>
              <ul className="space-y-3 mb-5">
                {devis.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Si vous comparez plusieurs propositions, alignez ce poste ligne à ligne avant de regarder les totaux :
                c&apos;est exactement la méthode que nous détaillons dans notre guide pour{' '}
                <a href="/blog/comparer-devis-pergola-postes-prix" className={lienInterne}>
                  comparer trois devis de pergola poste par poste
                </a>
                . Un devis moins cher qui ne mentionne pas l&apos;évacuation n&apos;est pas malhonnête, il est
                simplement incomplet, et la différence se paiera plus tard, au terrassement.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ce que nous regardons en visite, avant de chiffrer quoi que ce soit : la pente réelle du terrain, la
                présence d&apos;un regard existant et son état, la nature du sol, la position des limites séparatives,
                et surtout où l&apos;eau part aujourd&apos;hui. Un terrain sait déjà ce qu&apos;il fait de la pluie ;
                notre travail consiste à ne pas contrarier ce qui marche et à corriger ce qui ne marche plus une fois la
                toiture posée.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Vous pouvez voir comment cela se traduit sur des ouvrages livrés dans{' '}
                <a href="/realisations" className={lienInterne}>nos réalisations en Gironde</a>, et découvrir nos{' '}
                <a href="/pergolas" className={lienInterne}>pergolas aluminium</a> comme nos{' '}
                <a href="/carports" className={lienInterne}>carports</a>, de l&apos;étude sur site à la pose.
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
              Évacuation des eaux pluviales : vos questions
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
              La sortie de l&apos;eau se décide avant la pose
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Une pergola ou un carport bien posés, c&apos;est aussi une eau dont on sait où elle va : reprise en pied
              de poteau, conduite avec une pente franche, et rendue au réseau, au sol ou à une cuve selon ce que permet
              votre terrain et ce qu&apos;exige votre commune. C&apos;est le relevé que nous faisons chez L&apos;Esprit
              Bois, entreprise qualifiée Qualibat, à Libourne et dans toute la Gironde, avant d&apos;écrire la moindre
              ligne de devis.
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
