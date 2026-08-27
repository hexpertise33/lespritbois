import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/chantiers/ossature-bois-couverture-tuiles-posee-gironde.webp';

export const metadata: Metadata = buildMetadata({
  title: "Surélévation en ossature bois en Gironde | L'Esprit Bois",
  description:
    "Surélever sa maison en ossature bois : ce que l'existant peut porter, étude de structure, permis et calendrier. Guide d'un artisan à Libourne (Gironde).",
  keywords:
    "surélévation ossature bois, surélever sa maison Gironde, surélévation bois Libourne, permis de construire surélévation, prix surélévation ossature bois, extension par le haut, surélévation maison Gironde, étude de structure surélévation",
  path: '/blog/surelevation-ossature-bois-maison',
  ogImage: COVER,
  ogTitle: "Surélever sa maison en ossature bois : ce que l'existant doit pouvoir porter",
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
        name: 'Surélévation en ossature bois',
        item: 'https://lesprit-bois.fr/blog/surelevation-ossature-bois-maison',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "Surélever sa maison en ossature bois : ce que l'existant doit pouvoir porter",
    description:
      "Une surélévation ne se décide pas sur la surface qu'on veut gagner, mais sur ce que la maison existante peut porter : fondations, murs porteurs et plancher haut commandent le projet, et seule une étude de structure y répond. Surélever ou s'étendre au sol selon le terrain et le PLU, pourquoi la légèreté de l'ossature bois rend l'opération possible là où la maçonnerie est exclue, formalités d'urbanisme et hauteur maximale, dépose de la toiture et mise hors d'eau, escalier, réseaux et raccords de façade : le guide d'un artisan à Libourne, en Gironde.",
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
    datePublished: '2026-08-27',
    dateModified: '2026-08-27',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/surelevation-ossature-bois-maison',
    },
    about: [
      { '@type': 'Thing', name: 'surélévation ossature bois' },
      { '@type': 'Thing', name: 'agrandissement de maison' },
      { '@type': 'Thing', name: 'construction bois' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Toutes les maisons peuvent-elles être surélevées ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non, et c'est la première chose à faire vérifier. Une surélévation ajoute des charges qui doivent descendre par le plancher haut, puis par les murs porteurs, puis par les fondations, sans rupture. Si l'un de ces trois maillons n'est pas en état ou n'a pas été conçu pour, il faut le renforcer, et le renfort peut coûter plus cher que l'étage gagné. Seule une étude de structure, confiée à un bureau d'études, tranche cette question. Ce n'est pas notre métier de constructeur bois de la conduire, c'est notre métier d'exiger qu'elle soit faite avant de dessiner quoi que ce soit.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faut-il un permis de construire pour une surélévation ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Très souvent oui. En zone urbaine d'une commune dotée d'un PLU, une déclaration préalable suffit jusqu'à 40 m² de surface de plancher créée, mais le permis de construire redevient obligatoire dès 20 m² créés si l'opération porte la surface de plancher totale au-delà de 150 m². Hors zone urbaine dotée d'un PLU, la déclaration préalable s'arrête à 20 m². Et le recours à un architecte est obligatoire quand les travaux portent la surface totale du bâtiment après travaux à plus de 150 m². Une maison de plain-pied qu'on surélève atteint vite ce seuil : il faut le vérifier au tout début, pas à la fin.",
        },
      },
      {
        '@type': 'Question',
        name: 'Le PLU peut-il interdire une surélévation ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, et c'est le vrai couperet d'un projet de surélévation. Chaque PLU fixe une hauteur maximale constructible, exprimée à l'égout du toit, au faîtage ou en nombre de niveaux, et ces valeurs varient d'une commune à l'autre, parfois d'une zone à l'autre dans la même commune. S'y ajoutent les règles d'aspect extérieur, la pente de toiture imposée, les teintes admises et l'avis de l'architecte des Bâtiments de France en secteur protégé. Aucune de ces règles ne se devine : elles se lisent dans le règlement de votre commune, auprès du service urbanisme de la mairie.",
        },
      },
      {
        '@type': 'Question',
        name: "Peut-on continuer à habiter la maison pendant une surélévation ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Cela dépend de la phase et de la maison. Tant que l'ossature est en fabrication à l'atelier, rien ne change chez vous. La période sensible est celle où la toiture est déposée et la maison ouverte par le haut : il faut vider et protéger les pièces situées sous la zone ouverte, et accepter poussière, bruit et parfois coupures. Beaucoup de familles restent sur place en se repliant au rez-de-chaussée, d'autres préfèrent partir quelques jours autour du levage. C'est une question à trancher avant la signature, pas la veille de la dépose.",
        },
      },
      {
        '@type': 'Question',
        name: "Combien coûte une surélévation en ossature bois, et pourquoi plus qu'une extension ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Nous ne publions pas de prix de marché au mètre carré pour une surélévation, parce qu'il dépend entièrement de l'existant. Ce que nous pouvons donner, c'est un écart constaté sur nos propres chantiers en 2026 : à surface égale, une surélévation revient plus cher au mètre carré qu'une extension au sol, et l'écart se creuse encore quand des renforts de structure sont nécessaires. La raison tient à des postes qui ne se divisent pas par la surface créée : étude de structure, échafaudage, grue, dépose et reprise de la couverture, escalier et trémie. Une petite surélévation coûte donc cher au mètre carré.",
        },
      },
    ],
  },
];

const formalites = [
  [
    'Zone urbaine, commune dotée d’un PLU',
    'Jusqu’à 40 m² de surface de plancher créée',
    'Déclaration préalable',
  ],
  [
    'Zone urbaine, commune dotée d’un PLU',
    'Plus de 20 m² créés, si la surface de plancher totale dépasse 150 m² après travaux',
    'Permis de construire',
  ],
  [
    'Zone urbaine, commune dotée d’un PLU',
    'Plus de 40 m² de surface de plancher créée',
    'Permis de construire',
  ],
  [
    'Hors zone urbaine dotée d’un PLU',
    'Jusqu’à 20 m² de surface de plancher créée',
    'Déclaration préalable',
  ],
  [
    'Hors zone urbaine dotée d’un PLU',
    'Plus de 20 m² de surface de plancher créée',
    'Permis de construire',
  ],
];

const faq = [
  {
    q: 'Toutes les maisons peuvent-elles être surélevées ?',
    r: (
      <>
        Non, et c&apos;est la première chose à faire vérifier. Une surélévation ajoute des charges qui doivent descendre
        par le plancher haut, puis par les murs porteurs, puis par les fondations, sans rupture. Si l&apos;un de ces
        trois maillons n&apos;est pas en état ou n&apos;a pas été conçu pour, il faut le renforcer, et le renfort peut
        coûter plus cher que l&apos;étage gagné. Seule une étude de structure, confiée à un bureau d&apos;études, tranche
        cette question. Ce n&apos;est pas notre métier de constructeur bois de la conduire, c&apos;est notre métier
        d&apos;exiger qu&apos;elle soit faite avant de dessiner quoi que ce soit.
      </>
    ),
  },
  {
    q: 'Faut-il un permis de construire pour une surélévation ?',
    r: (
      <>
        Très souvent oui. En zone urbaine d&apos;une commune dotée d&apos;un PLU, une déclaration préalable suffit
        jusqu&apos;à 40 m² de surface de plancher créée, mais le permis de construire redevient obligatoire dès 20 m²
        créés si l&apos;opération porte la surface de plancher totale au-delà de 150 m². Hors zone urbaine dotée
        d&apos;un PLU, la déclaration préalable s&apos;arrête à 20 m². Et le recours à un architecte est obligatoire
        quand les travaux portent la surface totale du bâtiment après travaux à plus de 150 m². Une maison de plain-pied
        qu&apos;on surélève atteint vite ce seuil : il faut le vérifier au tout début, pas à la fin.
      </>
    ),
  },
  {
    q: 'Le PLU peut-il interdire une surélévation ?',
    r: (
      <>
        Oui, et c&apos;est le vrai couperet d&apos;un projet de surélévation. Chaque PLU fixe une hauteur maximale
        constructible, exprimée à l&apos;égout du toit, au faîtage ou en nombre de niveaux, et ces valeurs varient
        d&apos;une commune à l&apos;autre, parfois d&apos;une zone à l&apos;autre dans la même commune. S&apos;y ajoutent
        les règles d&apos;aspect extérieur, la pente de toiture imposée, les teintes admises et l&apos;avis de
        l&apos;architecte des Bâtiments de France en secteur protégé. Aucune de ces règles ne se devine : elles se lisent
        dans le règlement de votre commune, auprès du service urbanisme de la mairie.
      </>
    ),
  },
  {
    q: 'Peut-on continuer à habiter la maison pendant une surélévation ?',
    r: (
      <>
        Cela dépend de la phase et de la maison. Tant que l&apos;ossature est en fabrication à l&apos;atelier, rien ne
        change chez vous. La période sensible est celle où la toiture est déposée et la maison ouverte par le haut : il
        faut vider et protéger les pièces situées sous la zone ouverte, et accepter poussière, bruit et parfois
        coupures. Beaucoup de familles restent sur place en se repliant au rez-de-chaussée, d&apos;autres préfèrent
        partir quelques jours autour du levage. C&apos;est une question à trancher avant la signature, pas la veille de
        la dépose.
      </>
    ),
  },
  {
    q: "Combien coûte une surélévation en ossature bois, et pourquoi plus qu'une extension ?",
    r: (
      <>
        Nous ne publions pas de prix de marché au mètre carré pour une surélévation, parce qu&apos;il dépend entièrement
        de l&apos;existant. Ce que nous pouvons donner, c&apos;est un écart constaté sur nos propres chantiers en 2026 :
        à surface égale, une surélévation revient plus cher au mètre carré qu&apos;une extension au sol, et l&apos;écart se
        creuse encore quand des renforts de structure sont nécessaires. La raison tient à des postes qui
        ne se divisent pas par la surface créée : étude de structure, échafaudage, grue, dépose et reprise de la
        couverture, escalier et trémie. Une petite surélévation coûte donc cher au mètre carré.
      </>
    ),
  },
];

export default function ArticleSurelevationOssatureBoisPage() {
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
              alt="Toiture en tuiles reposée sur une charpente neuve, vue depuis l'échafaudage d'un chantier de charpente et couverture en Gironde"
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
              <span className="text-secondary-fixed">Surélévation en ossature bois</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Surélévation bois
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Surélever sa maison en ossature bois : ce que l&apos;existant doit pouvoir porter
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
              <span>27 août 2026</span>
              <span className="text-secondary">·</span>
              <span>10 min de lecture</span>
            </div>
          </div>
        </header>

        {/* Chapô answer-first */}
        <section className="py-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16">
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              <strong className="text-primary font-semibold">
                Une surélévation ne se décide pas sur la surface qu&apos;on veut gagner, mais sur ce que la maison
                existante peut porter. Fondations, murs porteurs et plancher haut commandent le projet, et c&apos;est une
                étude de structure, confiée à un bureau d&apos;études, qui donne la réponse avant le premier dessin. La
                légèreté de l&apos;ossature bois est précisément ce qui rend l&apos;opération possible là où monter en
                maçonnerie serait exclu.
              </strong>{' '}
              Et il y a une deuxième chose qu&apos;on découvre rarement à temps : contrairement à une extension au sol, on
              ouvre la toiture. Pendant quelques jours, la maison est à ciel ouvert. La mise hors d&apos;eau et le
              calendrier deviennent alors le vrai sujet du chantier, bien avant le choix des finitions. Voici comment nous
              instruisons ces projets, sur nos chantiers du Libournais et de la Gironde.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Surélever ou s'étendre au sol */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Surélever ou s&apos;étendre au sol : c&apos;est le terrain qui tranche
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Commençons par trancher, parce que la réponse est nette dans la grande majorité des cas :{' '}
                <strong className="text-primary font-semibold">
                  si votre parcelle offre encore de la place et que le PLU vous laisse de l&apos;emprise au sol,
                  étendez-vous au sol.
                </strong>{' '}
                Une extension de plain-pied ne touche pas à la toiture, ne dépend pas de la capacité portante de
                l&apos;existant, se construit à côté de la maison pendant que vous continuez d&apos;y vivre, et revient
                moins cher au mètre carré. Surélever pour le plaisir de surélever n&apos;a aucun sens.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La surélévation devient la bonne réponse quand le sol n&apos;est plus disponible, et il cesse de
                l&apos;être plus vite qu&apos;on ne le croit. Quatre situations reviennent constamment sur nos chantiers
                du Libournais :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['La parcelle est petite ou contrainte', 'maison de bourg, lotissement dense, terrain en lanière, mitoyenneté sur un ou deux côtés. Il reste des mètres carrés au cadastre, mais pas là où il faudrait pour construire une pièce qui se raccorde à la maison.'],
                  ['L’emprise au sol est déjà consommée', 'la maison, le garage, la terrasse couverte, le carport, le local piscine et parfois une première extension ont déjà mangé le coefficient d’emprise autorisé par le PLU. Le sol est libre à l’œil, il ne l’est plus au règlement.'],
                  ['Les règles d’implantation bloquent', 'reculs imposés par rapport aux limites séparatives et à la voie, distances aux constructions voisines, servitude de passage, alignement à respecter. L’extension rentrerait, mais pas à l’endroit où elle serait utile.'],
                  ['Le jardin vaut plus que la surface', 'un beau chêne, un potager installé, une piscine, l’unique zone d’ombre de la parcelle, ou tout simplement le dégagement devant la maison. Gagner 40 m² en perdant le seul coin agréable du terrain est un mauvais calcul, et il est irréversible.'],
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
                Il faut y ajouter ce qui ne se voit pas depuis la rue : un assainissement individuel avec son épandage,
                une fosse et ses regards, un puits, un réseau enterré, autant de zones où l&apos;on ne pose pas de
                fondations. Sur une parcelle de bourg girondin, entre les reculs, l&apos;épandage et l&apos;accès, il
                arrive qu&apos;il ne reste littéralement aucune bande constructible.{' '}
                <strong className="text-primary font-semibold">
                  C&apos;est ce constat, et lui seul, qui fait basculer un projet vers le haut.
                </strong>
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Avant d&apos;aller plus loin, comparez honnêtement les deux voies : notre guide sur{' '}
                <a href="/blog/extension-ossature-bois-prix-m2" className={lienInterne}>
                  le prix au mètre carré d&apos;une extension en ossature bois
                </a>{' '}
                donne les ordres de grandeur de l&apos;agrandissement au sol, et notre comparatif{' '}
                <a href="/blog/veranda-ou-extension-ossature-bois" className={lienInterne}>
                  véranda ou extension en ossature bois
                </a>{' '}
                aide à qualifier la pièce que vous voulez vraiment obtenir. Si l&apos;une de ces deux réponses convient à
                votre terrain, prenez-la : la surélévation est le chemin le plus exigeant des trois.
              </p>
            </section>

            {/* 2. Ce que l'existant doit pouvoir porter */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce que l&apos;existant doit pouvoir porter : l&apos;étude de structure avant tout le reste
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Voici le principe qui gouverne tout le reste de l&apos;article.{' '}
                <strong className="text-primary font-semibold">
                  Une surélévation ajoute un poids permanent en haut d&apos;une maison qui n&apos;a pas forcément été
                  conçue pour le recevoir, et ce poids doit redescendre sans rupture jusqu&apos;au sol.
                </strong>{' '}
                Il traverse d&apos;abord le plancher haut existant, qui devient le plancher bas du nouvel étage, puis les
                murs porteurs et les refends, puis les chaînages, puis les fondations, puis le sol lui-même. Si un seul
                de ces maillons ne suit pas, ce n&apos;est pas le projet qui s&apos;adapte, c&apos;est le maillon
                qu&apos;il faut renforcer, et un renfort de structure coûte parfois plus cher que l&apos;étage gagné.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Disons-le tout de suite, parce que c&apos;est la limite de notre métier :{' '}
                <strong className="text-primary font-semibold">
                  cette vérification est l&apos;affaire d&apos;un bureau d&apos;études structure, pas la nôtre.
                </strong>{' '}
                Nous concevons, fabriquons et levons des ossatures bois ; nous ne calculons pas la capacité portante
                d&apos;une maçonnerie existante, et nous nous méfions de ceux qui le font de tête sur le trottoir. Notre
                rôle est de dire au client, dès la première visite, que l&apos;étude est un passage obligé du projet et
                pas une option qu&apos;on peut sauter pour économiser, puis de construire selon ses conclusions.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Ce que cette étude regarde, dans l&apos;ordre où les charges descendent :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le plancher haut existant', 'sa nature (solivage bois, poutrelles-hourdis, dalle), son état réel, ses portées, ses appuis. C’est lui qui recevra les murs du nouvel étage et le poids d’usage d’une pièce habitée. Un plancher de combles conçu pour du rangement n’est pas un plancher d’habitation.'],
                  ['Les murs porteurs et les refends', 'nature du matériau (pierre, moellon, parpaing, brique, béton), épaisseur, présence de chaînages verticaux et horizontaux, état des linteaux et des jambages. Un mur percé de grandes baies, ou une pièce ouverte au rez-de-chaussée après suppression d’une cloison porteuse, change tout.'],
                  ['La continuité de la descente de charges', 'les murs du nouvel étage doivent tomber sur des appuis qui existent en dessous, et non au milieu d’un plancher ou au-dessus d’un grand séjour ouvert. C’est cette contrainte, bien plus que vos envies de plan, qui dessine l’étage.'],
                  ['Les fondations et le sol', 'profondeur, nature, comportement du terrain. En Gironde, les sols argileux sujets au retrait et au gonflement sont fréquents, et une maison qui a déjà bougé ne se surélève pas sans en tenir compte.'],
                  ['L’historique du bâti', 'fissures existantes et leur évolution, ancienne extension mal chaînée, garage accolé fondé plus superficiellement, appentis repris à la va-vite. Ce sont les zones où un projet se bloque, ou se renchérit.'],
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
                Une bonne partie de ces informations ne se lit sur aucun plan. Sur une maison des années 1970, les plans
                d&apos;origine ont souvent disparu, et quand ils existent, ils décrivent l&apos;intention, pas ce qui a
                été construit puis modifié trois fois. Il faut donc ouvrir : sondage d&apos;une fondation, dépose d&apos;un
                point de plafond, regard sur le solivage depuis les combles.{' '}
                <strong className="text-primary font-semibold">
                  Tant qu&apos;on n&apos;a pas regardé, on ne conçoit pas, on suppose.
                </strong>
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Et il faut accepter que la conclusion puisse être négative, ou coûteuse. Nous préférons annoncer au
                deuxième rendez-vous qu&apos;une maison ne se surélèvera pas sans reprises lourdes, plutôt que de le
                découvrir la toiture déposée. C&apos;est la même logique que celle appliquée sur toutes nos{' '}
                <a href="/constructions-bois" className={lienInterne}>
                  constructions et extensions à ossature bois
                </a>{' '}
                : ce que l&apos;existant permet décide de ce qu&apos;on dessine, jamais l&apos;inverse.
              </p>
            </section>

            <Figure
              src="/images/ossature-bois-isolation-fibre-gironde.webp"
              w={1200}
              h={900}
              alt="Murs à ossature bois montés sur un soubassement maçonné, panneaux de contreventement et charpente en place, chantier en Gironde"
              caption="Ici sur une construction neuve : les murs d'ossature reposent sur un soubassement maçonné. En surélévation, le principe est le même, chaque mur doit retomber sur un appui qui existe en dessous."
            />

            {/* 3. Pourquoi l'ossature bois */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Pourquoi l&apos;ossature bois est la matière des surélévations
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Si le bois domine ce type de chantier, ce n&apos;est pas une question de goût ni de mode.{' '}
                <strong className="text-primary font-semibold">
                  C&apos;est parce qu&apos;une ossature bois offre un excellent rapport entre ce qu&apos;elle porte et ce
                  qu&apos;elle pèse, et qu&apos;en surélévation, chaque kilo ajouté se paie en renforts plus bas.
                </strong>{' '}
                À performance équivalente, monter un étage en maçonnerie sur une maison existante impose d&apos;examiner,
                et souvent de reprendre, toute la structure inférieure. En ossature bois, la même opération reste
                fréquemment réalisable sans toucher aux fondations, sous réserve, toujours, des conclusions de
                l&apos;étude de structure. C&apos;est très exactement ce qui rend possibles des surélévations qui
                seraient abandonnées en béton.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Trois autres propriétés comptent autant que la légèreté, et elles tiennent au mode de mise en œuvre :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['La préfabrication en atelier', 'les murs sont assemblés à plat, à l’abri, aux tolérances de l’atelier, pendant que votre maison est encore couverte. Rien ne se fabrique sur un toit ouvert. C’est là que se gagne la précision du chantier, et surtout le temps pendant lequel la maison reste fermée.'],
                  ['Le chantier sec', 'pas d’eau de gâchage, pas de temps de séchage, pas de banches ni de coffrage à monter en hauteur. On ne fait pas prendre du béton au-dessus d’un salon habité, et on ne fait pas sécher un mur en février.'],
                  ['Un levage court', 'les éléments arrivent finis et se posent en quelques jours. Sur une opération où la maison est ouverte, la durée du levage n’est pas un argument de confort commercial : c’est la durée d’exposition de votre intérieur.'],
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
                S&apos;y ajoute un avantage discret mais réel à l&apos;usage : à performance égale, un mur à ossature
                bois est plus fin qu&apos;un mur maçonné isolé, donc l&apos;étage créé offre davantage de surface
                habitable pour la même emprise. Sur une surélévation, où l&apos;emprise est figée par les murs du
                dessous au centimètre près, ce n&apos;est pas anecdotique : c&apos;est parfois la différence entre une
                chambre avec salle d&apos;eau et une chambre sans.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Dernier point, souvent décisif en centre-bourg de Libourne ou dans les rues étroites de
                l&apos;Entre-deux-Mers : les éléments d&apos;ossature se transportent et se manutentionnent par pièces.
                Là où une solution lourde exigerait des moyens de levage impossibles à installer, l&apos;ossature bois
                s&apos;adapte à l&apos;accès disponible. Nous découpons le calepinage des murs en fonction de ce que la
                rue permet, pas l&apos;inverse.
              </p>
            </section>

            <Figure
              src="/images/chantiers/ossature-bois-charpente-apparente-pare-pluie-gironde.webp"
              w={1200}
              h={900}
              alt="Solivage et plafond en bois posés, membrane agrafée sur les murs à ossature bois, chantier en Gironde"
              caption="Chantier sec : des bois débités en amont, un plafond posé, une membrane agrafée. Rien à faire prendre ni à faire sécher, ce qui compte quand on travaille au-dessus d'une maison occupée."
            />

            {/* 4. Urbanisme */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Autorisation d&apos;urbanisme : ce qui s&apos;applique vraiment à une surélévation
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une surélévation est un agrandissement : elle crée de la surface de plancher et elle modifie
                l&apos;aspect extérieur de la maison.{' '}
                <strong className="text-primary font-semibold">
                  Dans les faits, elle relève très souvent du permis de construire, et beaucoup plus vite qu&apos;une
                  extension au sol de même surface.
                </strong>{' '}
                Les seuils applicables aux agrandissements, surélévation comprise, sont publiés par
                l&apos;administration dans la fiche{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F36777"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  service-public.gouv.fr sur l&apos;agrandissement d&apos;une maison
                </a>
                , et se lisent ainsi :
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Situation de la maison</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Surface de plancher créée</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Formalité</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formalites.map((ligne, i) => (
                      <tr key={ligne[0] + ligne[1]} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}>
                        <td className="px-4 py-3 text-primary font-semibold">{ligne[0]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 mb-5">
                Retenez surtout la ligne du milieu, car c&apos;est celle qui surprend :{' '}
                <strong className="text-primary font-semibold">
                  en zone urbaine, dès 20 m² créés, le permis de construire redevient obligatoire si l&apos;opération
                  porte la surface de plancher totale au-delà de 150 m².
                </strong>{' '}
                Une maison de 120 m² qu&apos;on surélève de 40 m² dépasse ce seuil sans effort. Dans la même logique, le
                recours à un architecte est obligatoire lorsque les travaux portent la surface de plancher totale du
                bâtiment après travaux à plus de 150 m². C&apos;est une donnée de budget et de calendrier, à connaître au
                tout début du projet et pas au moment de déposer le dossier.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Mais le vrai couperet d&apos;une surélévation n&apos;est pas là. Il est dans le PLU de votre commune, qui
                fixe une <strong className="text-primary font-semibold">hauteur maximale constructible</strong>, exprimée
                à l&apos;égout du toit, au faîtage, ou en nombre de niveaux autorisés. Cette valeur varie d&apos;une
                commune à l&apos;autre, et parfois d&apos;une zone à l&apos;autre à l&apos;intérieur de la même commune :
                nous ne pouvons donc en donner aucune ici sans vous induire en erreur. À cette hauteur s&apos;ajoutent
                les règles d&apos;aspect (pente de toiture imposée, matériaux et teintes admis, traitement des pignons),
                le règlement propre à un lotissement, et l&apos;avis de l&apos;architecte des Bâtiments de France dans
                les abords d&apos;un monument historique, fréquents dans nos bourgs girondins.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La démarche est donc toujours la même chez nous, et elle est gratuite :{' '}
                <strong className="text-primary font-semibold">
                  on lit le règlement de la zone avant de dessiner, et on va poser la question au service urbanisme de la
                  mairie.
                </strong>{' '}
                Une surélévation qui dépasserait la hauteur admise ne se rattrape pas en cours de projet, et un étage
                dessiné sans avoir vérifié la pente de toit imposée se redessine intégralement.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Dernier point à ne pas oublier : créer de la surface, c&apos;est aussi devenir redevable de la{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F23263"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  taxe d&apos;aménagement
                </a>
                , calculée en 2026 sur une valeur forfaitaire de 892 € par mètre carré hors Île-de-France (1 011 € en
                Île-de-France), avec un abattement de 50 % sur les 100 premiers mètres carrés d&apos;une résidence
                principale et une exonération des constructions inférieures ou égales à 5 m². Nous en détaillons le
                calcul, exemples à l&apos;appui, dans notre guide sur{' '}
                <a href="/blog/bureau-jardin-bois-studio-reglementation-budget" className={lienInterne}>
                  le bureau de jardin, sa réglementation et son budget
                </a>
                .
              </p>
            </section>

            {/* 5. Le chantier vu du dessus */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le chantier vu du dessus : dépose de la toiture et mise hors d&apos;eau
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est ici que la surélévation se distingue radicalement de tout autre agrandissement.{' '}
                <strong className="text-primary font-semibold">
                  On ne construit pas à côté de la maison, on l&apos;ouvre par le haut.
                </strong>{' '}
                Entre la dépose de la couverture et la remise hors d&apos;eau, votre intérieur, vos plafonds, vos
                cloisons et vos réseaux sont séparés du ciel par une bâche. Tout le reste du chantier, la structure, le
                confort, les finitions, se juge après. Cette phase-là se juge avant.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                D&apos;où une règle de conduite que nous ne négocions pas :{' '}
                <strong className="text-primary font-semibold">
                  on ne dépose jamais une toiture avant que l&apos;ossature du nouvel étage soit fabriquée, contrôlée et
                  livrée sur place.
                </strong>{' '}
                Le calendrier se construit à l&apos;envers, à partir du jour de levage. La séquence type ressemble à
                ceci :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Fabrication complète des murs et de la charpente en atelier, pendant que la maison est encore couverte et habitée normalement.',
                  'Installation de l’échafaudage, protection et dégagement des pièces situées sous la zone qui sera ouverte, dépose des éléments fragiles.',
                  'Dépose de la couverture puis de la charpente existante, tri des tuiles réemployables, mise en place des protections provisoires.',
                  'Préparation de l’arase, pose de la lisse basse, puis levage des murs d’ossature, souvent en une à deux journées de grue.',
                  'Charpente neuve, écran de sous-toiture et couverture : c’est le jour où la maison est hors d’eau, et où l’on respire.',
                  'Pare-pluie, lame d’air ventilée et bardage ou support d’enduit, menuiseries posées et étanchéité à l’air : la surélévation est hors d’air.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La question que tout le monde pose ensuite, et qui mérite une réponse franche : peut-on rester dans la
                maison ? Souvent oui, en se repliant au rez-de-chaussée, à condition d&apos;avoir vidé et protégé les
                pièces sous la zone ouverte et d&apos;accepter le bruit, la poussière et quelques coupures. Parfois non,
                notamment quand la trémie d&apos;escalier est ouverte au même moment.{' '}
                <strong className="text-primary font-semibold">
                  Cette question se tranche avant la signature, pas la veille de la dépose.
                </strong>
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Vient enfin le choix de la période, qui n&apos;est pas un détail. On ne lance pas une surélévation
                n&apos;importe quand dans l&apos;année : la fenêtre où l&apos;on ouvre la toiture doit tomber dans une
                saison raisonnablement clémente, et l&apos;idéal en Gironde est de caler la dépose entre la fin du
                printemps et le début de l&apos;automne. Cela ne veut pas dire qu&apos;on ne surélève pas en hiver, cela
                veut dire qu&apos;on ne promet pas la météo : bâchage sérieux, suivi des prévisions au jour le jour, et
                acceptation de décaler la dépose de quarante-huit heures plutôt que d&apos;ouvrir la veille d&apos;un
                coup de vent.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Un dernier mot sur l&apos;imprévu, parce qu&apos;il existe. Une charpente n&apos;est jamais entièrement
                visible avant sa dépose, et il arrive de découvrir des bois attaqués, un plancher différent de ce que
                laissait supposer le relevé, ou un chaînage absent. C&apos;est la raison pour laquelle nous prévoyons
                explicitement une ligne d&apos;aléas dans nos chiffrages de surélévation, avec des avenants validés avant
                exécution. Un chantier de rénovation sans ligne d&apos;aléas n&apos;est pas un chantier moins cher,
                c&apos;est un chantier moins sincère.
              </p>
            </section>

            <Figure
              src="/images/chantiers/ossature-bois-bardage-douglas-debord-toiture-gironde.webp"
              w={1100}
              h={825}
              alt="Toiture encore sous membrane et débord de charpente en place sur une construction à ossature bois bardée en douglas, Gironde"
              caption="Bardage posé, toiture pas encore couverte : tant que la couverture n'est pas finie, c'est elle qui commande le calendrier, pas les finitions."
            />

            {/* 6. Les postes oubliés */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Escalier, réseaux et raccords : les postes qu&apos;on oublie de chiffrer
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une surélévation ne se limite jamais à l&apos;étage qu&apos;on ajoute :{' '}
                <strong className="text-primary font-semibold">
                  elle transforme aussi le niveau du dessous, et c&apos;est le poste que personne n&apos;anticipe.
                </strong>{' '}
                Quatre sujets reviennent sur tous nos chantiers, et méritent d&apos;être posés sur la table dès la phase
                d&apos;étude.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                <strong className="text-primary font-semibold">L&apos;escalier et sa trémie.</strong> Créer un étage
                suppose d&apos;y accéder, donc de percer le plancher, donc de perdre de la surface en bas. Un escalier
                confortable et sa circulation mangent plusieurs mètres carrés au rez-de-chaussée, auxquels il faut
                ajouter le dégagement à son pied et à son sommet. Autrement dit, on ne gagne pas 40 m², on gagne 40 m² en
                haut moins la trémie et les circulations en bas. Et son emplacement n&apos;est pas libre : il doit tomber
                au bon endroit vis-à-vis des appuis, ne pas couper une pièce en deux, et souvent prendre la place
                d&apos;un placard, d&apos;un couloir ou d&apos;un bout de séjour. Sur bien des projets, c&apos;est
                l&apos;escalier qui redessine tout le rez-de-chaussée, et cela se voit sur le plan avant de se voir sur
                le devis.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                <strong className="text-primary font-semibold">La montée des réseaux.</strong> Un étage habité demande
                de l&apos;électricité (donc des circuits neufs, parfois un tableau à reprendre), du chauffage et de la
                ventilation, et, si vous prévoyez une salle d&apos;eau ou des sanitaires, une alimentation en eau et
                surtout une évacuation. C&apos;est l&apos;évacuation qui commande : elle doit trouver un tracé vertical
                jusqu&apos;au réseau existant, et ce tracé passe quelque part, dans un placard, une gaine technique ou un
                angle de pièce du rez-de-chaussée. Ces lots relèvent du second œuvre et ne font pas partie de notre
                périmètre, mais les réservations, elles, se prévoient pendant la fabrication de l&apos;ossature. Une
                gaine oubliée à ce stade se paie deux fois.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                <strong className="text-primary font-semibold">Le raccord de façade.</strong> Votre maison aura désormais
                deux âges superposés, et il faut choisir franchement entre deux partis. Soit la continuité : on
                reprend l&apos;étage dans le même enduit et la même teinte, et l&apos;œil doit oublier la couture, ce qui
                suppose de reprendre aussi une partie de la façade existante. Soit la rupture assumée : un bardage bois
                sur l&apos;étage, une base minérale conservée en bas, et une ligne horizontale nette entre les deux.
                Cette seconde solution est souvent la plus élégante, et c&apos;est aussi la plus honnête. Les essences,
                les poses en claire-voie ou à recouvrement et les budgets au mètre carré sont détaillés dans notre guide
                du{' '}
                <a href="/blog/bardage-bois-facade-essences-pose" className={lienInterne}>
                  bardage bois en façade
                </a>
                . Ce qu&apos;il ne faut pas faire, c&apos;est ne pas choisir : un rattrapage à moitié assumé se remarque
                depuis la rue pendant trente ans.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">La reprise de la couverture et des abords.</strong> La
                toiture est neuve : les tuiles réemployées ne suffisent presque jamais à couvrir toute la surface, et des
                tuiles neuves ne prennent pas la teinte des anciennes avant longtemps. Il faut donc arbitrer entre
                panachage et couverture entièrement neuve, sujet qui peut d&apos;ailleurs être imposé par le PLU. S&apos;y
                ajoutent les gouttières et descentes à reprendre sur une hauteur nouvelle, le raccordement des eaux
                pluviales, l&apos;échafaudage sur toute la durée, l&apos;évacuation des gravats de dépose et la remise en
                état des abords piétinés. Aucun de ces postes n&apos;est spectaculaire, et tous figurent sur le devis
                d&apos;une entreprise qui a déjà fait le chantier.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Une surélévation sérieusement chiffrée est donc un devis long. Si le vôtre tient en cinq lignes, ce
                n&apos;est pas qu&apos;il est simple : c&apos;est qu&apos;une partie du travail est encore devant vous,
                mais pas encore dans le prix.
              </p>
            </section>

            <Figure
              src="/images/chantiers/extension-ossature-bois-bardage-douglas-maison-pierre-gironde.webp"
              w={1400}
              h={923}
              alt="Volume neuf bardé en douglas accolé à une maison ancienne en pierre, raccord de façade assumé, réalisation en Gironde"
              caption="Une extension de plain-pied accolée à une maison de pierre : le bardage douglas assume la rupture au lieu d'imiter l'ancien. Pour un étage ajouté, l'arbitrage est identique."
            />

            {/* 7. Budget, délais et déroulé en Gironde */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Budget, délais et déroulé d&apos;une surélévation en Gironde
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Nous ne publions pas de prix de marché au mètre carré pour une surélévation, et pour une raison simple :
                ce prix dépend d&apos;un existant que nous n&apos;avons pas vu. Ce que nous pouvons donner, c&apos;est un
                écart{' '}
                <strong className="text-primary font-semibold">constaté sur nos propres chantiers en 2026</strong> : à
                surface égale, une surélévation revient plus cher au mètre carré qu&apos;une extension au sol, et
                l&apos;écart se creuse dès que des renforts de structure entrent dans le périmètre. Pour situer la base de comparaison, reportez-vous aux fourchettes de notre article sur{' '}
                <a href="/blog/extension-ossature-bois-prix-m2" className={lienInterne}>
                  le prix d&apos;une extension en ossature bois
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Il y a une conséquence de cet écart qu&apos;il vaut mieux entendre tôt.{' '}
                <strong className="text-primary font-semibold">
                  Une bonne partie du coût d&apos;une surélévation ne se divise pas par la surface créée.
                </strong>{' '}
                L&apos;étude de structure, l&apos;échafaudage, la journée de grue, la dépose et la reprise de la
                couverture, l&apos;escalier et sa trémie coûtent presque la même chose que l&apos;on ajoute 20 ou 50 m².
                Surélever petit revient donc très cher au mètre carré, et c&apos;est souvent l&apos;argument qui pousse
                nos clients à profiter de l&apos;ouverture de la toiture pour aller au bout du volume autorisé plutôt que
                de recommencer dans cinq ans.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Côté calendrier, une surélévation se compte en mois, dont la plus grande partie se passe sans que rien ne
                bouge chez vous :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Étude et faisabilité', 'relevé de l’existant, lecture du PLU, passage au service urbanisme, puis étude de structure par un bureau d’études. C’est la phase qui décide si le projet existe.'],
                  ['Conception et autorisation', 'plans, recours à un architecte si le seuil de 150 m² est franchi, dépôt du dossier et instruction en mairie. Le délai d’instruction se compte en mois et se vérifie auprès de votre commune.'],
                  ['Fabrication en atelier', 'murs et charpente débités et assemblés à l’abri. Votre maison est intacte pendant toute cette période.'],
                  ['Levage et mise hors d’eau', 'la phase courte et intense, celle qui se cale sur la météo et qu’on prépare depuis le premier jour.'],
                  ['Mise hors d’air et second œuvre', 'bardage ou enduit, menuiseries, étanchéité à l’air, puis les lots que vous confiez à vos artisans.'],
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
                Notre périmètre, lui, est écrit noir sur blanc et ne change pas :{' '}
                <strong className="text-primary font-semibold">
                  nous livrons la surélévation hors d&apos;eau et hors d&apos;air
                </strong>
                , c&apos;est-à-dire une coquille close, couverte et étanche à l&apos;air, ossature, charpente,
                couverture, pare-pluie, bardage, isolation, menuiseries extérieures et frein-vapeur continu. Les
                cloisons, l&apos;électricité, la plomberie, le chauffage et les revêtements restent à vos artisans. Ce
                n&apos;est pas une lacune, c&apos;est un choix : nous préférons exceller sur la partie qui tient
                cinquante ans et qu&apos;on ne reprend pas. Le détail de cet engagement est sur notre page{' '}
                <a href="/constructions-bois" className={lienInterne}>
                  construction et surélévation à ossature bois
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Enfin, l&apos;ancrage local n&apos;est pas un argument de plaquette sur ce type de chantier. Notre atelier
                est aux Billaux, à cinq minutes de Libourne : c&apos;est là que votre ossature est fabriquée, et une
                distance courte entre l&apos;atelier et le chantier, c&apos;est un levage qui se recale en vingt-quatre
                heures quand la météo tourne. Nous connaissons les sols argileux du Libournais, les maisons de pierre de
                l&apos;Entre-deux-Mers et les règlements de nos communes, y compris les secteurs où l&apos;architecte des
                Bâtiments de France a son mot à dire. Vous pouvez voir ce que cela donne une fois posé dans{' '}
                <a href="/realisations" className={lienInterne}>
                  nos réalisations en Gironde
                </a>{' '}
                et sur notre page{' '}
                <a href="/constructeur-ossature-bois-gironde" className={lienInterne}>
                  constructeur à ossature bois en Gironde
                </a>
                , où plusieurs chantiers sont racontés avec leur point dur.
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
              Surélévation en ossature bois : vos questions
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
              Un étage qui commence par une lecture de l&apos;existant
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Si votre terrain et votre PLU vous laissent encore de l&apos;emprise au sol, étendez-vous au sol :
              c&apos;est plus simple et moins cher. Si le sol est fermé, la surélévation en ossature bois est la voie la
              plus sûre pour gagner un vrai niveau, à condition de commencer par l&apos;étude de structure et de traiter
              la mise hors d&apos;eau comme le cœur du chantier. Chez L&apos;Esprit Bois, entreprise qualifiée Qualibat,
              nous relevons l&apos;existant et lisons le PLU avant de dessiner, à Libourne, dans le Libournais et dans
              toute la Gironde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/constructions-bois#devis-bas"
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
