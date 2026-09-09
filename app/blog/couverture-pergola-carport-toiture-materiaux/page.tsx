import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/realisations/pergola-aluminium-terrasse-bois-libourne-5.webp';

export const metadata: Metadata = buildMetadata({
  title: 'Quelle couverture pour une pergola ou un carport en Gironde ?',
  description:
    'Verre, polycarbonate, lames orientables ou panneau isolé : ce que chaque couverture de pergola ou de carport laisse passer, et laquelle choisir en Gironde.',
  keywords:
    'couverture pergola aluminium, toiture carport polycarbonate, verre ou polycarbonate pergola, panneau sandwich isolé pergola, lames orientables aluminium, tôle nervurée carport, pergola Libourne, carport Gironde',
  path: '/blog/couverture-pergola-carport-toiture-materiaux',
  ogImage: COVER,
  ogTitle: 'Quelle couverture choisir pour une pergola ou un carport aluminium ?',
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
        name: 'Couverture de pergola et de carport',
        item: 'https://lesprit-bois.fr/blog/couverture-pergola-carport-toiture-materiaux',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Quelle couverture choisir pour une pergola ou un carport aluminium ?',
    description:
      "On ne choisit pas une couverture sur son prix mais sur ce qu'on veut en dessous. Lames orientables, verre feuilleté, polycarbonate alvéolaire, panneau sandwich isolé ou tôle nervurée : ce que chaque matériau laisse passer en lumière, en chaleur et en bruit de pluie, ce qu'il demande dans le temps, et le tableau de décision par usage, par un artisan de Libourne, en Gironde.",
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
    datePublished: '2026-09-09',
    dateModified: '2026-09-09',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/couverture-pergola-carport-toiture-materiaux',
    },
    about: [
      { '@type': 'Thing', name: 'couverture de pergola aluminium' },
      { '@type': 'Thing', name: 'toiture de carport' },
      { '@type': 'Thing', name: 'polycarbonate alvéolaire' },
      { '@type': 'Thing', name: 'verre feuilleté' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Verre ou polycarbonate pour une pergola : lequel choisir ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le verre feuilleté si la pergola prolonge une pièce de vie et doit rester lumineuse toute l'année : il reste transparent, se nettoie comme une fenêtre et ne se déforme pas. Le polycarbonate alvéolaire si l'ouvrage abrite une voiture, un accès ou du rangement : il coûte nettement moins cher, pèse peu et donne une lumière diffuse qui suffit largement. Le verre est le poste le plus cher des cinq couvertures possibles, le polycarbonate l'un des plus économiques : payer du verre pour couvrir une place de stationnement n'a pas de sens.",
        },
      },
      {
        '@type': 'Question',
        name: 'Le polycarbonate jaunit-il avec le temps ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Les plaques de qualité reçoivent un traitement anti-UV sur la face destinée à être exposée au soleil, et cette face est repérée par un film à la livraison. Une plaque posée à l'envers, ou une plaque d'entrée de gamme sans ce traitement, se ternit et se fragilise plus vite. Le sens de pose et la qualité du produit comptent donc davantage que la marque : c'est un point que nous vérifions systématiquement à la pose.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quelle couverture fait le moins de bruit sous la pluie ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le panneau sandwich isolé, sans hésitation : son âme isolante amortit l'impact des gouttes, là où le polycarbonate alvéolaire et la tôle nervurée résonnent nettement. Le verre est intermédiaire, avec un bruit sec mais moins caverneux. C'est un critère sous-estimé : sous notre climat girondin, une averse d'orage change complètement l'usage d'une terrasse couverte selon la couverture retenue.",
        },
      },
      {
        '@type': 'Question',
        name: "Peut-on remplacer la couverture d'une pergola aluminium existante ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Parfois, mais jamais automatiquement. La structure a été dimensionnée pour un poids donné : passer d'un polycarbonate léger à du verre feuilleté ou à du panneau isolé change la charge reprise par les profilés, les poteaux et l'ancrage. La forme des profilés de rive et le système d'étanchéité doivent également accepter la nouvelle épaisseur. Nous examinons l'ouvrage sur place avant de répondre, et il arrive que la bonne réponse soit de changer la structure.",
        },
      },
      {
        '@type': 'Question',
        name: "Une couverture pleine change-t-elle les démarches d'urbanisme ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Elle peut, oui. Couvrir de manière étanche crée un ouvrage que le PLU de votre commune ne regarde pas forcément comme une simple pergola ouverte, et selon la surface concernée une déclaration préalable de travaux peut être exigée. Les règles varient d'une commune à l'autre en Gironde, et selon la zone. Nous consultons le PLU avant d'engager le projet plutôt que de vous donner un seuil qui ne correspondrait pas à votre situation.",
        },
      },
      {
        '@type': 'Question',
        name: "Quelle couverture demande le moins d'entretien ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Les couvertures opaques, panneau sandwich isolé et tôle nervurée : on ne voit pas la saleté dessus, donc le seul vrai entretien consiste à dégager les feuilles et à vérifier les évacuations d'eau. Le verre demande un nettoyage régulier pour rester transparent, le polycarbonate encaisse mal les produits agressifs, et les lames orientables ajoutent une mécanique à surveiller. Dans tous les cas, ce sont les chéneaux et les descentes qui réclament le plus d'attention, quelle que soit la couverture.",
        },
      },
    ],
  },
];

const grille = [
  [
    'Lames orientables',
    'Réglable, du plein soleil à l’ombre complète',
    'Se chasse en ouvrant les lames',
    'Marqué lames fermées',
    'Oui, à la demande',
  ],
  [
    'Verre feuilleté',
    'Maximale et constante toute l’année',
    'Passe, à corriger par un store',
    'Net mais sec',
    'Non',
  ],
  [
    'Polycarbonate alvéolaire',
    'Diffuse, translucide, sans vue sur le ciel',
    'Passe en partie',
    'Le plus sonore',
    'Non',
  ],
  [
    'Panneau sandwich isolé',
    'Aucune, couverture opaque',
    'Bloquée, ombre fraîche',
    'Très discret',
    'Non',
  ],
  [
    'Tôle nervurée',
    'Aucune, couverture opaque',
    'Passe par rayonnement sous la tôle',
    'Sonore',
    'Non',
  ],
];

const decision = [
  [
    'Terrasse de vie dont l’usage change dans la journée',
    'Lames orientables',
    'Le seul système qui se règle : plein soleil le matin, ombre à midi, ciel ouvert le soir.',
  ],
  [
    'Prolongement d’une pièce, lumière à préserver toute l’année',
    'Verre feuilleté',
    'La seule couverture qui n’assombrit pas la pièce derrière, à condition d’ajouter une protection solaire.',
  ],
  [
    'Abriter une voiture, un accès, du rangement',
    'Polycarbonate alvéolaire',
    'Lumière diffuse suffisante, poids faible, budget contenu : l’ouvrage abrite un objet, pas des gens.',
  ],
  [
    'Salon d’été plein sud, sieste, télétravail dehors',
    'Panneau sandwich isolé',
    'Ombre réellement fraîche et silence sous l’averse : c’est le confort qu’on achète, pas la lumière.',
  ],
  [
    'Abri utilitaire, remorque, atelier, fond de parcelle',
    'Tôle nervurée',
    'Efficace, économique et assumé comme tel : inutile de payer une finition qu’on ne regardera pas.',
  ],
];

const faq = [
  {
    q: 'Verre ou polycarbonate pour une pergola : lequel choisir ?',
    r: (
      <>
        Le verre feuilleté si la pergola prolonge une pièce de vie et doit rester lumineuse toute l&apos;année : il reste
        transparent, se nettoie comme une fenêtre et ne se déforme pas. Le polycarbonate alvéolaire si l&apos;ouvrage
        abrite une voiture, un accès ou du rangement : il coûte nettement moins cher, pèse peu et donne une lumière
        diffuse qui suffit largement. Le verre est le poste le plus cher des cinq couvertures possibles, le polycarbonate
        l&apos;un des plus économiques : payer du verre pour couvrir une place de stationnement n&apos;a pas de sens.
      </>
    ),
  },
  {
    q: 'Le polycarbonate jaunit-il avec le temps ?',
    r: (
      <>
        Les plaques de qualité reçoivent un traitement anti-UV sur la face destinée à être exposée au soleil, et cette
        face est repérée par un film à la livraison. Une plaque posée à l&apos;envers, ou une plaque d&apos;entrée de
        gamme sans ce traitement, se ternit et se fragilise plus vite. Le sens de pose et la qualité du produit comptent
        donc davantage que la marque : c&apos;est un point que nous vérifions systématiquement à la pose.
      </>
    ),
  },
  {
    q: 'Quelle couverture fait le moins de bruit sous la pluie ?',
    r: (
      <>
        Le panneau sandwich isolé, sans hésitation : son âme isolante amortit l&apos;impact des gouttes, là où le
        polycarbonate alvéolaire et la tôle nervurée résonnent nettement. Le verre est intermédiaire, avec un bruit sec
        mais moins caverneux. C&apos;est un critère sous-estimé : sous notre climat girondin, une averse d&apos;orage
        change complètement l&apos;usage d&apos;une terrasse couverte selon la couverture retenue.
      </>
    ),
  },
  {
    q: "Peut-on remplacer la couverture d'une pergola aluminium existante ?",
    r: (
      <>
        Parfois, mais jamais automatiquement. La structure a été dimensionnée pour un poids donné : passer d&apos;un
        polycarbonate léger à du verre feuilleté ou à du panneau isolé change la charge reprise par les profilés, les
        poteaux et l&apos;ancrage. La forme des profilés de rive et le système d&apos;étanchéité doivent également
        accepter la nouvelle épaisseur. Nous examinons l&apos;ouvrage sur place avant de répondre, et il arrive que la
        bonne réponse soit de changer la structure.
      </>
    ),
  },
  {
    q: "Une couverture pleine change-t-elle les démarches d'urbanisme ?",
    r: (
      <>
        Elle peut, oui. Couvrir de manière étanche crée un ouvrage que le PLU de votre commune ne regarde pas forcément
        comme une simple pergola ouverte, et selon la surface concernée une déclaration préalable de travaux peut être
        exigée. Les règles varient d&apos;une commune à l&apos;autre en Gironde, et selon la zone. Nous consultons le PLU
        avant d&apos;engager le projet plutôt que de vous donner un seuil qui ne correspondrait pas à votre situation.
      </>
    ),
  },
  {
    q: "Quelle couverture demande le moins d'entretien ?",
    r: (
      <>
        Les couvertures opaques, panneau sandwich isolé et tôle nervurée : on ne voit pas la saleté dessus, donc le seul
        vrai entretien consiste à dégager les feuilles et à vérifier les évacuations d&apos;eau. Le verre demande un
        nettoyage régulier pour rester transparent, le polycarbonate encaisse mal les produits agressifs, et les lames
        orientables ajoutent une mécanique à surveiller. Dans tous les cas, ce sont les chéneaux et les descentes qui
        réclament le plus d&apos;attention, quelle que soit la couverture.
      </>
    ),
  },
];

export default function ArticleCouverturePergolaCarportPage() {
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
              alt="Pergola en aluminium thermolaqué à couverture translucide au-dessus d'une terrasse en bois, en Gironde"
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
              <span className="text-secondary-fixed">Couverture de pergola et de carport</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Aluminium
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Quelle couverture choisir pour une pergola ou un carport aluminium ?
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
              <span>9 septembre 2026</span>
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
                On ne choisit pas une couverture sur son prix, mais sur ce qu&apos;on veut vivre en dessous : lames
                orientables si l&apos;usage change dans la journée, verre feuilleté si la pièce derrière doit rester
                lumineuse toute l&apos;année, polycarbonate alvéolaire si l&apos;ouvrage abrite une voiture et pas des
                gens, panneau sandwich isolé si vous cherchez l&apos;ombre fraîche et le silence, tôle nervurée pour un
                abri utilitaire assumé.
              </strong>{' '}
              C&apos;est la première question qu&apos;on nous pose en magasin, juste après la teinte RAL, et c&apos;est
              aussi celle qu&apos;on tranche le plus souvent à l&apos;envers : en comparant des prix au mètre carré au
              lieu de décrire l&apos;usage. Voici, matière par matière, ce que chaque couverture laisse passer, ce
              qu&apos;elle vous coûtera d&apos;attention dans le temps, et comment décider sans regret.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. La grille de décision */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce que chaque couverture laisse passer : lumière, chaleur, bruit de pluie
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une couverture n&apos;est pas un couvercle : c&apos;est un filtre. Elle laisse passer, retient ou
                transforme trois choses, et ce sont ces trois choses qui décideront de votre confort une fois
                l&apos;ouvrage posé.{' '}
                <strong className="text-primary font-semibold">
                  La lumière, la chaleur d&apos;été et le bruit de la pluie.
                </strong>{' '}
                Tout le reste (le prix, la teinte, la marque du profilé) vient après.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La <strong className="text-primary font-semibold">lumière</strong> est le critère le plus visible, et le
                plus sous-estimé : couvrir une terrasse adossée, c&apos;est aussi assombrir la pièce qui donne dessus.
                Une cuisine qui prenait le jour par une baie vitrée peut se retrouver sombre à l&apos;année si la
                couverture est opaque. La <strong className="text-primary font-semibold">chaleur</strong> ne se règle pas
                comme la lumière : une couverture peut être parfaitement transparente et transformer le dessous en serre,
                ou parfaitement opaque et rester brûlante par rayonnement si rien n&apos;isole. Le{' '}
                <strong className="text-primary font-semibold">bruit de la pluie</strong>, enfin, est le critère dont
                personne ne parle en showroom et dont tout le monde parle après la première averse d&apos;orage.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Voici comment se situent les cinq couvertures que nous posons, en qualitatif : ce sont des ordres de
                grandeur ressentis sur nos chantiers, pas des mesures de laboratoire.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Couverture</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Lumière</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Chaleur d&apos;été</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Bruit de pluie</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Réouvrable</th>
                    </tr>
                  </thead>
                  <tbody>
                    {grille.map((ligne, i) => (
                      <tr key={ligne[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}>
                        <td className="px-4 py-3 text-primary font-semibold whitespace-nowrap">{ligne[0]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[2]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[3]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[4]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6">
                Un point commun aux cinq, quelle que soit la matière retenue : dès que la couverture devient étanche,
                l&apos;eau doit aller quelque part. Chéneaux intégrés aux profilés, pente donnée à la pose, descentes
                dimensionnées et raccord soigné sur la façade : la mise en œuvre d&apos;une couverture relève de règles
                de l&apos;art documentées, notamment par le{' '}
                <a href="https://www.cstb.fr/" className={lienInterne} target="_blank" rel="noopener noreferrer">
                  Centre scientifique et technique du bâtiment
                </a>
                . Une belle plaque mal évacuée fait une flaque devant la porte-fenêtre.
              </p>
            </section>

            <Figure
              src="/images/realisations/pergola-aluminium-terrasse-bois-libourne-1.webp"
              w={1600}
              h={900}
              alt="Bandeau de rive en aluminium thermolaqué d'une pergola adossée, vu de dessous, chantier en Gironde"
              caption="Le bandeau de rive fait le tour de la toiture et reçoit les panneaux : l'eau est reprise dans ce pourtour, sans gouttière rapportée en façade."
            />

            {/* 2. Lames orientables */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Les lames orientables : quand l&apos;usage change dans la journée
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est la seule couverture qui se règle. Des lames en aluminium extrudé pivotent sur toute la
                surface : ouvertes, elles laissent passer le ciel et l&apos;air chaud ; fermées, elles font une toiture
                étanche qui renvoie l&apos;eau dans les chéneaux de la structure.{' '}
                <strong className="text-primary font-semibold">
                  On ne l&apos;achète pas pour la lumière ni pour le silence, mais pour la souplesse.
                </strong>{' '}
                Si votre terrasse sert au petit-déjeuner au soleil, au déjeuner à l&apos;ombre et à la soirée à ciel
                ouvert, aucune plaque fixe ne fera le travail.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ses contreparties sont franches : c&apos;est le système le plus cher après le verre, il ajoute une
                motorisation et une mécanique à entretenir, et lames fermées, le bruit de la pluie est nettement
                perceptible. Nous ne le conseillons pas pour couvrir une voiture : payer un réglage fin de la lumière
                au-dessus d&apos;un capot n&apos;a aucun sens.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Comme les lames constituent un produit à part entière et non une simple option de toiture, nous leur
                avons consacré un guide complet :{' '}
                <a href="/blog/pergola-bioclimatique-aluminium-guide" className={lienInterne}>
                  fonctionnement, motorisation, teintes RAL et budget de la pergola bioclimatique
                </a>
                . Et si votre besoin est de couper le soleil sans couvrir, la bonne réponse n&apos;est peut-être pas une
                toiture du tout, mais{' '}
                <a href="/blog/protection-solaire-brise-soleil-orientable" className={lienInterne}>
                  une protection solaire de type brise-soleil orientable
                </a>
                .
              </p>
            </section>

            {/* 3. Verre feuilleté */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le verre feuilleté : la pièce qu&apos;on veut lumineuse toute l&apos;année
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le verre feuilleté est un empilage de feuilles de verre solidarisées par un film intercalaire : en cas de
                casse, les morceaux restent collés au film au lieu de tomber. C&apos;est ce qui le rend acceptable en
                toiture, au-dessus des personnes.{' '}
                <strong className="text-primary font-semibold">
                  C&apos;est la seule couverture qui n&apos;assombrit pas la pièce située derrière.
                </strong>{' '}
                Quand la pergola s&apos;adosse à une cuisine, un séjour ou une baie vitrée, c&apos;est souvent le seul
                choix défendable : tout le reste vous fera regretter le jour perdu en novembre.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Il faut assumer ses trois limites. C&apos;est{' '}
                <strong className="text-primary font-semibold">le poste le plus cher des cinq</strong>, de loin. Il pèse
                lourd, donc les profilés et les poteaux sont plus généreux, et la structure ne s&apos;improvise pas. Et
                il laisse passer le soleil, donc la chaleur : sans protection associée, une toiture verre plein sud est
                intenable en juillet. On lui adjoint donc presque toujours un store, extérieur de préférence, ou une
                réservation prévue pour l&apos;ajouter plus tard.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                C&apos;est aussi le matériau qui ouvre la voie à un usage prolongé de la terrasse. Si votre projet
                consiste à profiter de l&apos;espace hors saison, lisez notre guide sur{' '}
                <a href="/blog/fermer-pergola-bioclimatique-hiver-rideau-verre" className={lienInterne}>
                  la fermeture d&apos;une pergola pour l&apos;hiver, rideaux de verre compris
                </a>{' '}
                : la toiture et les côtés forment un système, et les décider séparément coûte souvent deux fois.
              </p>
            </section>

            <Figure
              src="/images/blog/couverture-pergola-carport-toiture-materiaux/couverture-vitree-profiles-metalliques-terrasse.jpg"
              w={1200}
              h={800}
              alt="Couverture vitrée posée sur des profilés métalliques sombres, vue de dessous au-dessus d'une terrasse couverte"
              caption="Le verre laisse la façade en pleine lumière, mur et menuiseries compris ; en contrepartie il montre tout, traces de pluie comprises."
            />

            {/* 4. Polycarbonate */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le polycarbonate alvéolaire : abriter une voiture, pas des gens
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le polycarbonate alvéolaire est une plaque plastique creuse, structurée par des alvéoles internes qui lui
                donnent sa rigidité pour un poids très faible. C&apos;est, de loin, la couverture la plus posée sur les
                carports en aluminium, et pour de bonnes raisons :{' '}
                <strong className="text-primary font-semibold">
                  elle éclaire sans être transparente, elle ne pèse presque rien, et son coût reste contenu.
                </strong>{' '}
                Une place de stationnement couverte en polycarbonate reste claire, ce qui change tout quand le carport
                est adossé à la maison et longe une fenêtre.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ses défauts sont ceux d&apos;un matériau utilitaire. Il est{' '}
                <strong className="text-primary font-semibold">bruyant sous la pluie</strong>, franchement : les alvéoles
                font caisse de résonance. Il se raye, il se salit, et il n&apos;aime ni les produits agressifs ni le
                nettoyeur haute pression. Il se dilate aussi de manière sensible, ce qui impose des fixations qui
                laissent la plaque travailler et des profilés de jonction adaptés : une plaque vissée trop serrée finit
                par se fissurer autour de la vis.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Notre position est simple, et nous la tenons même quand elle nous fait vendre moins cher :{' '}
                <strong className="text-primary font-semibold">
                  le polycarbonate est excellent au-dessus d&apos;un objet et médiocre au-dessus d&apos;un fauteuil.
                </strong>{' '}
                Sur un carport, c&apos;est le choix de raison. Sur une terrasse où l&apos;on compte déjeuner tous les
                dimanches d&apos;été, il déçoit presque toujours. Si vous hésitez encore sur la structure elle-même,
                notre comparatif{' '}
                <a href="/blog/carport-aluminium-ou-bois-comparatif" className={lienInterne}>
                  carport aluminium ou carport bois
                </a>{' '}
                traite la question en amont de la couverture.
              </p>
            </section>

            <Figure
              src="/images/realisations/pergola-aluminium-toit-polycarbonate-libourne-6.webp"
              w={825}
              h={1100}
              alt="Couverture de pergola en aluminium vue de dessous, plaques translucides et panneaux pleins entre profilés thermolaqués, en Gironde"
              caption="Sur cet ouvrage, les plaques translucides alternent avec des panneaux pleins : la lumière entre par bandes, et les gouttes restées dessus après l'averse se voient d'en dessous."
            />

            {/* 5. Panneau sandwich isolé */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le panneau sandwich isolé : l&apos;ombre fraîche et le silence
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le panneau sandwich associe deux parements métalliques et une âme isolante prise entre les deux. Il est
                opaque, et c&apos;est précisément le point :{' '}
                <strong className="text-primary font-semibold">
                  il ne laisse passer ni lumière, ni chaleur, ni bruit.
                </strong>{' '}
                C&apos;est la seule couverture sous laquelle il fait réellement frais un après-midi d&apos;août en
                Gironde, et la seule sous laquelle on continue à s&apos;entendre parler pendant une averse.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Nous le conseillons chaque fois que l&apos;usage est un usage de séjour extérieur : salon d&apos;été,
                sieste, repas, télétravail dehors, cuisine d&apos;extérieur. Il est également le bon choix au-dessus
                d&apos;un spa ou d&apos;un espace où l&apos;on veut de l&apos;intimité. Le parement se thermolaque dans
                la teinte RAL de la structure, ce qui donne un ouvrage d&apos;un seul tenant visuellement, très propre.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Sa limite est celle de tout ce qui est opaque : il fait de l&apos;ombre, y compris là où vous ne la
                voulez pas.{' '}
                <strong className="text-primary font-semibold">
                  Adossé à une pièce de vie, il assombrit durablement l&apos;intérieur
                </strong>{' '}
                et beaucoup de projets s&apos;en mordent les doigts. La parade que nous employons souvent : un panneau
                isolé sur la majeure partie de la surface, et une bande vitrée ou un dôme translucide côté façade pour
                rendre du jour à la pièce. C&apos;est un peu plus complexe à mettre en œuvre, mais c&apos;est le meilleur
                des deux mondes.
              </p>
            </section>

            {/* 6. Tôle nervurée */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                La tôle nervurée : l&apos;abri utilitaire assumé
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une tôle nervurée, c&apos;est un profilé mince plié en ondes ou en nervures, thermolaqué dans une teinte
                RAL. C&apos;est la solution la plus économique et la plus rapide à mettre en œuvre.{' '}
                <strong className="text-primary font-semibold">
                  Elle n&apos;a qu&apos;un seul défaut, mais il est rédhibitoire au mauvais endroit : elle est
                  utilitaire, et cela se voit.
                </strong>
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Elle est parfaite au fond d&apos;une parcelle, sur un abri à remorque, un rangement de matériel, un
                appentis d&apos;atelier ou un stockage. Elle est franchement à éviter en façade de maison ou au-dessus
                d&apos;une terrasse de vie : elle chauffe par rayonnement, elle résonne sous la pluie, et elle donne à
                l&apos;ouvrage un caractère de bâtiment agricole que personne n&apos;assume longtemps.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nous la proposons sans complexe quand le programme est utilitaire, et nous la déconseillons tout aussi
                franchement quand il ne l&apos;est pas. Économiser sur la couverture d&apos;une terrasse qu&apos;on
                regardera tous les jours pendant vingt ans est la plus mauvaise économie possible.
              </p>
            </section>

            <DuoFigure
              a={{
                src: '/images/source-adefrance/construction-pool-house-aluminium-libourne-2.webp',
                w: 1200,
                h: 800,
                alt: "Couverture pleine en aluminium au-dessus d'un pool house, sous-face opaque et bandeau thermolaqué",
                caption:
                  'Couverture pleine : aucune lumière ne traverse, la sous-face reste nette et le spot est intégré au bandeau.',
              }}
              b={{
                src: '/images/blog/couverture-pergola-carport-toiture-materiaux/toiture-tole-nervuree-batiment-utilitaire.jpg',
                w: 1200,
                h: 900,
                alt: 'Toiture en tôle nervurée sur un bâtiment utilitaire, bardage métallique nervuré assorti',
                caption:
                  "La tôle nervurée ne cache pas ce qu'elle est : nervures apparentes, pose rapide et rien à regarder en sous-face.",
              }}
            />

            {/* 7. Nettoyage et vieillissement */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Nettoyage et vieillissement : ce que chaque couverture demande dans le temps
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une couverture ne se juge pas le jour de la pose mais au bout de quelques hivers. Voici ce que chacune
                réclame réellement :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le verre', 'se nettoie comme une fenêtre, à l’eau savonneuse et à la raclette, mais il montre tout : pollen de printemps, fientes, traces de calcaire. En sous-bois ou sous un arbre, comptez plusieurs nettoyages par an si vous tenez à la transparence.'],
                  ['Le polycarbonate', 'ne supporte ni solvant, ni produit abrasif, ni nettoyeur haute pression, qui rayent la surface et détruisent la couche anti-UV. Eau tiède, savon doux, chiffon souple, et rien d’autre. Les plaques de qualité conservent leur aspect longtemps si la face traitée est bien tournée vers le soleil.'],
                  ['Le panneau isolé et la tôle', 'ne demandent presque rien : le thermolaquage se rince à l’eau claire, et la saleté ne se voit pas puisqu’on ne regarde pas au travers. En bord de Bassin, un rinçage régulier reste conseillé pour évacuer les dépôts salins.'],
                  ['Les lames orientables', 'ajoutent la seule pièce d’usure du lot : la mécanique. Vérifier une fois par an les articulations, les joints de lames et les capteurs, et dégager les chéneaux avant l’automne suffit dans la grande majorité des cas.'],
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
                Le vrai point d&apos;entretien commun, celui qu&apos;on oublie systématiquement, n&apos;est aucune de ces
                surfaces : ce sont les{' '}
                <strong className="text-primary font-semibold">chéneaux et les descentes</strong>. Un chéneau bouché par
                les feuilles fait déborder l&apos;eau au mauvais endroit, mouille un mur et finit par se voir sur la
                façade. Un passage à l&apos;automne, avant les pluies, règle la question pour l&apos;année.
              </p>
            </section>

            {/* 8. Tableau de décision */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le tableau de décision par usage, de Libourne à toute la Gironde
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Reprenons la question par le bon bout. Ne demandez pas « quelle est la meilleure couverture », demandez
                « qu&apos;est-ce que je fais sous cet ouvrage, et à quelle saison ». La réponse tombe alors toute seule :
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Votre usage</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Notre conseil</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Pourquoi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {decision.map((ligne, i) => (
                      <tr key={ligne[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[0]}</td>
                        <td className="px-4 py-3 text-primary font-semibold whitespace-nowrap">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6">
                Deux précisions locales, que nous répétons chaque semaine en rendez-vous entre Libourne et Saint-Émilion.
                D&apos;abord, l&apos;orientation prime sur la matière : une couverture vitrée exposée plein sud sans
                store sera invivable, quand la même vitrée au nord est un excellent choix. Ensuite, une couverture
                étanche n&apos;est jamais neutre pour l&apos;urbanisme : selon la surface concernée et le PLU de votre
                commune, une{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F17578"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  déclaration préalable de travaux
                </a>{' '}
                peut être exigée. Nous vérifions ce point avant de chiffrer, et notre guide des{' '}
                <a href="/blog/autorisation-urbanisme-abri-carport-pergola-2026" className={lienInterne}>
                  autorisations d&apos;urbanisme pour un abri, un carport ou une pergola
                </a>{' '}
                explique le raisonnement en détail.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-5">
                Enfin, méfiez-vous des devis qui ne nomment pas la couverture. « Toiture polycarbonate » ne dit rien du
                type de plaque, du sens de pose ni des profilés de jonction ; « toiture verre » ne dit rien du feuilleté
                ni de la reprise de charge. Notre guide{' '}
                <a href="/blog/comparer-devis-pergola-postes-prix" className={lienInterne}>
                  pour comparer trois devis de pergola poste par poste
                </a>{' '}
                détaille les mentions à exiger. Vous pouvez aussi voir ces couvertures en situation dans{' '}
                <a href="/realisations" className={lienInterne}>
                  nos réalisations en Gironde
                </a>
                , et découvrir nos gammes de{' '}
                <a href="/pergolas" className={lienInterne}>
                  pergolas aluminium et bois
                </a>{' '}
                comme nos{' '}
                <a href="/carports" className={lienInterne}>
                  carports sur mesure
                </a>
                .
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
              Couverture de pergola et de carport : vos questions
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
              La bonne couverture est celle qui correspond à votre usage
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Nous vendons et posons le bois comme l&apos;aluminium, et les cinq couvertures décrites ici sans préférence
              commerciale : nous n&apos;avons donc aucun intérêt à vous en pousser une. Décrivez-nous ce que vous ferez
              sous l&apos;ouvrage, à quelle heure et à quelle saison, et nous vous dirons laquelle tient. C&apos;est le
              diagnostic que nous menons chez L&apos;Esprit Bois, entreprise qualifiée Qualibat, à Libourne et dans toute
              la Gironde, orientation, évacuation des eaux et formalités d&apos;urbanisme comprises.
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
