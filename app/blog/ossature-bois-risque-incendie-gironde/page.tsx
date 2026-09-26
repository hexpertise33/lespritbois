import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

// Cover : chantier réel (bardage bois vertical et baie vitrée), 1600 × 1200 ; hero + ogImage.
const COVER = '/images/source-adefrance/IMG-20240712-WA0032.webp';

export const metadata: Metadata = buildMetadata({
  title: 'Ossature bois et incendie en Gironde : ce qui protège vraiment',
  description:
    "Ossature bois et incendie en Gironde : la paroi, le bardage et surtout le débroussaillement obligatoire décident. Le guide d'un constructeur de Libourne.",
  keywords:
    "ossature bois incendie, maison bois risque incendie, construction bois feu de forêt Gironde, débroussaillement obligatoire Gironde, bardage bois et feu, constructeur ossature bois Libourne, maison ossature bois feu, obligations légales de débroussaillement Gironde, réaction au feu bardage bois, résistance au feu ossature bois",
  path: '/blog/ossature-bois-risque-incendie-gironde',
  ogImage: COVER,
  ogTitle: 'Une maison en ossature bois brûle-t-elle plus vite ? Le risque incendie en Gironde',
  ville: 'Libourne',
});

const lienInterne =
  'text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors';

const URL_OLD_GIRONDE =
  'https://www.gironde.gouv.fr/Actions-de-l-Etat/Agriculture-viticulture-foret/Foret/Les-Obligations-Legales-de-Debroussaillement-OLD';

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

// FAQ : une seule source pour l'affichage et le JSON-LD, pour qu'elles restent strictement alignées.
const faq = [
  {
    q: 'Une maison en ossature bois brûle-t-elle plus vite qu’une maison maçonnée ?',
    r: "Pas si elle est bien conçue. Le bois est combustible, mais ce n'est pas la matière de la structure qui décide seule du comportement au feu d'une maison : c'est la paroi complète, avec ses parements intérieurs, son isolant, sa continuité et ses recoupements. Une pièce de bois massive se consume lentement, en surface, et la couche carbonisée qui se forme protège son cœur. Dans une maison, un feu démarre presque toujours dans le contenu, meubles, textiles, appareils, et ce contenu est le même quel que soit le mode constructif.",
  },
  {
    q: 'Un bardage bois augmente-t-il le risque en cas de feu de forêt ?',
    r: "Un bardage bois est combustible et participe à la propagation si le feu l'atteint : c'est ce que mesure sa réaction au feu, qui est classée par défaut D-s2,d0 pour un bardage bois massif sous conditions d'épaisseur et de densité. Mais en cas de feu de forêt, ce qui met une façade en danger, ce sont surtout les braises et ce qu'elles trouvent pour s'installer : aiguilles accumulées dans la lame d'air ou les gouttières, bois de chauffage contre le mur, haie résineuse collée au bardage, végétation non débroussaillée. Ce sont ces détails que nous traitons en priorité.",
  },
  {
    q: 'Qui doit débroussailler autour de ma maison en Gironde ?',
    r: "C'est le propriétaire de la construction. Les obligations légales de débroussaillement s'appliquent dans les bois, forêts et landes de plus de 0,5 ha et dans une bande de 200 m autour. Elles imposent de débroussailler 50 m autour des constructions et 6 m de part et d'autre des voies privées d'accès, et tout le terrain en zone urbaine. Si les 50 m débordent chez le voisin, c'est toujours vous qui débroussaillez, avec son accord, valable 3 ans. Les règles sont fixées par l'arrêté préfectoral du 17 octobre 2025 et détaillées sur le site de la préfecture de la Gironde.",
  },
  {
    q: 'Faut-il traiter une ossature bois contre le feu ?',
    r: "Des traitements dits ignifuges existent et améliorent la réaction au feu du bois ; ils sont surtout demandés dans certains bâtiments recevant du public. Pour une maison individuelle, ce n'est pas le premier levier : la conception de la paroi et la maîtrise des abords protègent bien davantage qu'un produit appliqué sur la structure. Si un règlement local ou un plan de prévention impose une disposition particulière sur votre terrain, nous la suivons, et c'est en mairie qu'on le vérifie avant de dessiner.",
  },
  {
    q: 'Mon assurance habitation traite-t-elle différemment une maison bois ?',
    r: "Cela dépend de l'assureur et du contrat, et nous ne pouvons pas répondre à sa place. Déclarez la nature exacte de la construction, demandez par écrit si elle modifie les garanties ou la prime, et renseignez-vous sur les conséquences d'un défaut de débroussaillement : en Gironde, une franchise supplémentaire pouvant aller jusqu'à 5 000 € peut s'appliquer si les obligations légales ne sont pas respectées. Côté construction, l'entreprise qui bâtit doit de son côté être couverte par une garantie décennale.",
  },
];

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
        name: 'Ossature bois et risque incendie',
        item: 'https://lesprit-bois.fr/blog/ossature-bois-risque-incendie-gironde',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Une maison en ossature bois brûle-t-elle plus vite ? Ce que le risque incendie change en Gironde',
    description:
      "Combustion lente et couche carbonisée, réaction et résistance au feu, rôle de la paroi, feux de forêt et obligations légales de débroussaillement, détails de façade en lisière de pins, PPRIF et assurance : ce qui protège vraiment une maison à ossature bois en Gironde.",
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
    datePublished: '2026-09-26',
    dateModified: '2026-09-26',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/ossature-bois-risque-incendie-gironde',
    },
    about: [
      { '@type': 'Thing', name: 'ossature bois' },
      { '@type': 'Thing', name: 'risque incendie' },
      { '@type': 'Thing', name: 'obligations légales de débroussaillement' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.r },
    })),
  },
];

export default function ArticleOssatureBoisRisqueIncendiePage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="blog" />
      <main id="contenu">
        {/* Hero */}
        <header className="relative pt-40 pb-24 md:pt-48 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="1600"
              height="1200"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Extension à ossature bois en bardage bois vertical avec baie vitrée coulissante, réalisation L'Esprit Bois en Gironde"
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
              <span className="text-secondary-fixed">Ossature bois et risque incendie</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Ossature bois
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Une maison en ossature bois brûle-t-elle plus vite ? Ce que le risque incendie change en Gironde
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
              <span>26 septembre 2026</span>
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
                Le bois est combustible, mais une maison à ossature bois bien conçue ne se comporte pas moins bien au
                feu qu&apos;une autre construction : ce qui la protège, c&apos;est la paroi, avec ses parements, son
                isolant et ses recoupements, et non le matériau de structure pris seul. En Gironde, le vrai sujet
                n&apos;est d&apos;ailleurs pas le feu de cuisine mais le feu de forêt venu de l&apos;extérieur, et là
                ce qui décide, c&apos;est le débroussaillement et les détails de façade, bien plus que la matière de
                l&apos;ossature.
              </strong>{' '}
              C&apos;est la question que l&apos;on nous pose le plus souvent, en rendez-vous, juste après celle du prix.
              Elle est légitime, surtout depuis les grands feux de l&apos;été 2022. Nous y répondons ici en
              constructeur : ce que le bois fait vraiment au feu, pourquoi deux notions techniques sont presque toujours
              confondues, ce que la loi impose autour de votre maison en Gironde, et ce que nous faisons concrètement
              quand un projet se construit près des pins.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Le bois brûle mais ne s'effondre pas */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le bois brûle, mais il ne s&apos;effondre pas comme on le croit
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Commençons par ce qui est vrai : le bois brûle. Personne de sérieux ne prétendra le contraire, et nous
                n&apos;allons pas le faire. Mais{' '}
                <strong className="text-primary font-semibold">
                  combustible ne veut pas dire fragile au feu
                </strong>
                . L&apos;idée qu&apos;une charpente ou une ossature en bois s&apos;écroule au premier incendie vient
                d&apos;une confusion entre la petite section qui s&apos;enflamme vite, une allumette, une planchette, et
                la pièce de structure, massive, qui réagit tout autrement.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Quand une pièce de bois massive est exposée à la flamme, sa surface se transforme en charbon. Cette{' '}
                <strong className="text-primary font-semibold">couche carbonisée</strong> est un mauvais conducteur de
                la chaleur : elle ralentit la progression du feu vers l&apos;intérieur et protège le cœur de la pièce,
                qui reste sain et continue de porter. Le bois se consume ainsi par l&apos;extérieur, à une vitesse lente
                et prévisible,{' '}
                <strong className="text-primary font-semibold">moins d&apos;un millimètre par minute</strong>. Cette
                régularité est telle que l&apos;Eurocode 5, la norme européenne de calcul des structures en bois,
                s&apos;en sert pour dimensionner une pièce au feu : on calcule l&apos;épaisseur qui sera perdue pendant
                la durée visée, et on vérifie que la section restante porte toujours.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                C&apos;est ce qui rend le bois de structure si lisible pour un ingénieur : il ne cède pas
                d&apos;un coup, il perd de la matière à un rythme que l&apos;on sait calculer. Nous ne ferons pas ici de
                comparaison chiffrée avec d&apos;autres matériaux, parce que chacun a son propre comportement et que les
                raccourcis sont trompeurs. Retenez l&apos;essentiel : une structure bois correctement dimensionnée
                garde sa tenue pendant un temps connu, et ce temps se conçoit dès le plan.
              </p>
            </section>

            <Figure
              src="/images/blog/ossature-bois-risque-incendie-gironde/bois-carbonise-couche-charbon-bois-sain.webp"
              w={1200}
              h={798}
              alt="Bois brûlé en gros plan, couche carbonisée noire et craquelée en surface, bois clair resté sain juste en dessous"
              caption="La frontière est nette : une croûte de charbon, puis un bois qui n'a pas changé de couleur. C'est cette croûte qui freine la progression du feu vers le cœur."
            />

            {/* 2. Réaction et résistance au feu */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Réaction au feu et résistance au feu : deux notions qu&apos;on confond
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La moitié des idées reçues sur le bois et le feu vient d&apos;un mélange entre deux notions qui
                n&apos;ont rien à voir. Elles ne mesurent pas la même chose, ne s&apos;appliquent pas au même objet, et
                un même élément peut être médiocre sur l&apos;une et très bon sur l&apos;autre.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  [
                    'La réaction au feu',
                    'elle dit comment un matériau contribue au démarrage et à la propagation d’un feu. Elle s’exprime en euroclasses, de A1 (incombustible) à F (non classé), complétées par un indice de production de fumées, noté s, et un indice de gouttelettes ou débris enflammés, noté d. C’est une propriété du matériau et de sa mise en œuvre.',
                  ],
                  [
                    'La résistance au feu',
                    'elle dit pendant combien de temps un élément de construction, un mur, un plancher, une porte, continue de remplir sa fonction pendant un incendie. On l’exprime par des lettres, R pour la capacité portante, E pour l’étanchéité aux flammes et aux gaz chauds, I pour l’isolation thermique, suivies d’une durée en minutes. C’est une propriété de l’ouvrage complet, pas de la matière.',
                  ],
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
                Prenons le bardage. Un{' '}
                <strong className="text-primary font-semibold">
                  bardage bois massif est classé par défaut D-s2,d0
                </strong>
                , sous conditions d&apos;épaisseur et de densité. Traduction : il est combustible et contribue au feu
                s&apos;il est atteint, il produit une quantité moyenne de fumées, et il ne libère pas de gouttelettes
                enflammées. C&apos;est une information honnête sur le matériau, et elle explique pourquoi ce qui se
                passe autour du bardage compte autant que le bardage lui-même.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                À l&apos;inverse, un mur à ossature bois peut offrir une bonne résistance au feu alors que son montant,
                pris seul, est combustible. Ce n&apos;est pas un paradoxe : la résistance se mesure sur le mur entier,
                avec tout ce qui l&apos;habille. C&apos;est l&apos;objet de la section suivante.
              </p>
            </section>

            {/* 3. C'est la paroi qui protège */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Dans une ossature bois, c&apos;est la paroi qui protège
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un mur à ossature bois n&apos;est jamais un montant nu. C&apos;est un assemblage en couches, et chaque
                couche joue un rôle quand un feu se déclare dans la maison. Côté intérieur, les{' '}
                <strong className="text-primary font-semibold">plaques de plâtre</strong> forment le premier écran : le
                plâtre contient de l&apos;eau liée qu&apos;il libère sous l&apos;effet de la chaleur, ce qui retarde
                l&apos;échauffement de ce qui se trouve derrière. Tant que ce parement tient, l&apos;ossature reste à
                l&apos;abri.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Derrière, l&apos;isolant rempli entre les montants compte aussi. Un vide d&apos;air dans une paroi est
                un conduit tout trouvé pour les gaz chauds ; une paroi bien remplie, sans creux, le leur refuse. Nous
                expliquons comment nous posons cet isolant, et pourquoi le remplissage complet est non négociable, dans
                notre guide sur{' '}
                <a href="/blog/isolation-ossature-bois-entre-montants" className={lienInterne}>
                  l&apos;isolation d&apos;une ossature bois entre montants
                </a>
                . Le choix de l&apos;isolant se discute aussi sous cet angle, et nous le faisons au cas par cas.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Enfin, ce qui distingue un bon mur d&apos;un mur médiocre face au feu tient souvent à des détails
                invisibles une fois le chantier fini :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['La continuité des parements', 'pas de plaque interrompue derrière un meuble ou au-dessus d’un faux plafond : un écran troué ne protège plus rien.'],
                  ['Les recoupements', 'des éléments qui ferment les vides de la paroi à chaque niveau et entre les volumes, pour qu’un feu ne circule pas d’une pièce à l’autre par l’intérieur des murs.'],
                  ['Les traversées rebouchées', 'chaque gaine électrique, chaque passage de tuyau ou de ventilation qui perce le parement est refermé soigneusement. C’est le point que l’on bâcle le plus souvent sur les chantiers, et celui que nous contrôlons avant de fermer.'],
                  ['Les appareils de chauffage', 'poêle, conduit de fumée : leurs distances et leurs protections se respectent à la lettre, selon les prescriptions du fabricant et les règles de l’art.'],
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
                Un dernier point de bon sens : dans une maison, un incendie démarre presque toujours dans le contenu,
                meubles, textiles, appareils électriques. Ce contenu est le même dans une maison en bois, en brique ou
                en parpaing. Ce qui change d&apos;une maison à l&apos;autre, c&apos;est la qualité d&apos;exécution des
                parois, et c&apos;est là-dessus que nous nous engageons en tant que{' '}
                <a href="/constructeur-ossature-bois-gironde" className={lienInterne}>
                  constructeur à ossature bois en Gironde
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/ossature-bois-isolation-fibre-gironde.webp"
              w={1200}
              h={900}
              alt="Murs à ossature bois isolés en fibre de bois entre les montants, avant la pose des plaques de plâtre, chantier en Gironde"
              caption="Panneaux jointifs d'un montant à l'autre, sans vide d'air : c'est à ce stade que l'on vérifie le remplissage, avant que le parement intérieur ne le cache."
            />

            {/* 4. En Gironde, le vrai risque vient de la forêt */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                En Gironde, le vrai risque vient de la forêt
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                L&apos;été 2022 a laissé des traces dans tout le département. Les grands feux de Landiras et de La
                Teste-de-Buch ont rappelé ce que les forestiers savaient déjà : en Gironde, la menace qui pèse sur une
                maison n&apos;est pas d&apos;abord le feu qui naît dedans, c&apos;est{' '}
                <strong className="text-primary font-semibold">le feu de forêt qui arrive de l&apos;extérieur</strong>.
                Et face à lui, la question « bois ou parpaing ? » passe très loin derrière une autre : qu&apos;est-ce
                que le feu, et surtout ses braises, vont trouver en arrivant au pied de la maison ?
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est tout le sens des{' '}
                <a href={URL_OLD_GIRONDE} className={lienInterne} target="_blank" rel="noopener noreferrer">
                  obligations légales de débroussaillement (OLD) détaillées par la préfecture de la Gironde
                </a>
                . Elles sont aujourd&apos;hui encadrées par{' '}
                <strong className="text-primary font-semibold">l&apos;arrêté préfectoral du 17 octobre 2025</strong>, et
                voici ce qu&apos;elles imposent :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Où elles s’appliquent', 'dans les bois, forêts et landes de plus de 0,5 ha, et dans une bande de 200 m autour. Beaucoup de terrains du Médoc, des Landes girondines ou du Bassin sont concernés, mais aussi des parcelles de l’Entre-deux-Mers ou du Libournais proches d’un massif boisé.'],
                  ['Sur quelle distance', '50 m autour des constructions, maison, garage, piscine et autres, et 6 m de part et d’autre des voies privées qui y donnent accès. En zone urbaine (U) du document d’urbanisme, c’est tout le terrain qu’il faut débroussailler, qu’il soit bâti ou non.'],
                  ['Qui s’en charge', 'le propriétaire de la construction, même lorsque les 50 m débordent chez le voisin. Dans ce cas, il faut l’accord du voisin, valable 3 ans.'],
                  ['Arbres et branches', 'les arbres et branches situés à moins de 3 m des constructions sont coupés, et aucune branche ne doit se trouver à moins de 2,5 m du sol.'],
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
                Ce n&apos;est pas une recommandation, c&apos;est une obligation assortie de sanctions :{' '}
                <strong className="text-primary font-semibold">
                  une contravention pouvant aller jusqu&apos;à 1 500 €
                </strong>
                , et, en cas de sinistre, une{' '}
                <strong className="text-primary font-semibold">
                  franchise d&apos;assurance supplémentaire pouvant aller jusqu&apos;à 5 000 €
                </strong>
                . Autrement dit, un propriétaire qui n&apos;a pas débroussaillé paie deux fois. Et surtout, il a laissé
                au feu un chemin jusqu&apos;à sa façade, quelle que soit la matière de ses murs.
              </p>
            </section>

            <Figure
              src="/images/blog/ossature-bois-risque-incendie-gironde/maison-sous-pins-sous-bois-debroussaille.webp"
              w={1200}
              h={800}
              alt="Maison sous les pins, sol dégagé et troncs sans branches basses, exemple de débroussaillement autour d'une construction"
              caption="Sol dégagé et troncs élagués en hauteur, mais des pins très proches de la façade : en Gironde, là où le débroussaillement est obligatoire, ceux situés à moins de 3 m d'une construction doivent être coupés."
            />

            {/* 5. Ce que nous faisons en lisière de pins */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce que nous faisons différemment en lisière de pins
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le débroussaillement relève du propriétaire. La façade, elle, relève de nous. Quand un projet se
                construit près d&apos;un massif boisé, nous ne changeons pas de mode constructif : nous changeons une
                série de détails. Aucun n&apos;est spectaculaire, aucun ne figure dans une norme que nous pourrions vous
                citer, mais ils partent tous du même constat. En feu de forêt, ce sont très souvent{' '}
                <strong className="text-primary font-semibold">
                  les braises portées par le vent qui atteignent la maison
                </strong>
                , et elles cherchent un endroit où s&apos;installer. Notre travail consiste à ne pas leur en offrir.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Des grilles en pied et en tête de bardage', 'la lame d’air derrière un bardage doit rester ventilée, mais elle ne doit pas se remplir d’aiguilles de pin, de feuilles et de débris. Nous fermons ses entrées par des grilles métalliques, en bas comme en haut.'],
                  ['Des gouttières et des chéneaux dégagés', 'une gouttière pleine d’aiguilles sèches, c’est un lit de braises posé en rive de toiture. Nous dessinons des évacuations accessibles, et nous rappelons à chaque livraison qu’elles se nettoient avant l’été.'],
                  ['Un dessous de terrasse accessible', 'une terrasse bois sur lambourdes crée un vide où s’accumulent feuilles et brindilles. Nous le laissons visitable et nettoyable plutôt que fermé et oublié.'],
                  ['Le bois de chauffage à distance', 'une pile de bûches contre la façade est la meilleure alliée d’un feu. Nous conseillons un abri séparé, éloigné du mur.'],
                  ['Pas de haie résineuse contre le bardage', 'thuyas, cyprès et autres résineux plantés au ras du mur transmettent le feu à la façade. Nous le disons dès l’implantation, avant le plan des plantations.'],
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
                Pour le stockage, notre guide sur{' '}
                <a href="/blog/abri-buches-bois-stockage-sechage" className={lienInterne}>
                  l&apos;abri à bûches et le séchage du bois de chauffage
                </a>{' '}
                détaille comment ranger son bois sans l&apos;adosser à la maison. Pour la façade, nous choisissons avec
                vous un bardage et une finition que vous serez capable d&apos;entretenir dans la durée : un bardage
                surveillé, nettoyé, dont la lame d&apos;air reste propre, vaut mieux qu&apos;un bardage théoriquement
                parfait que personne ne regarde. Nous comparons les essences et les poses dans notre guide sur{' '}
                <a href="/blog/bardage-bois-facade-essences-pose" className={lienInterne}>
                  le bardage bois en façade
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Il y a une forme d&apos;ironie à construire en bois au milieu des pins, et nous l&apos;assumons : le pin
                maritime de nos forêts est aussi une ressource que nous aimons mettre en œuvre, comme nous
                l&apos;expliquons dans notre article sur{' '}
                <a href="/blog/bois-local-pin-maritime-douglas-gironde" className={lienInterne}>
                  le pin maritime et le douglas de Gironde
                </a>
                . La forêt n&apos;est pas l&apos;ennemie de la maison bois. Ce qui est dangereux, c&apos;est une forêt
                non entretenue qui touche une façade non pensée pour elle.
              </p>
            </section>

            <Figure
              src="/images/blog/bardage-bois-facade-essences-pose/pose-bardage-bois-pare-pluie-tasseaux-lame-air.jpg"
              w={1200}
              h={800}
              alt="Pare-pluie et tasseaux posés sur une façade avant le bardage bois, lame d'air ventilée encore ouverte en pied de mur"
              caption="Entre le pare-pluie et les lames, les tasseaux ménagent la lame d'air : ce sont son entrée en pied de mur et sa sortie en tête que l'on ferme par des grilles métalliques."
            />

            {/* 6. Avant de signer */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Avant de signer : PLU, plan de prévention et assurance
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le risque incendie ne se traite pas seulement sur le chantier. Il se vérifie en amont, au moment où
                l&apos;on achète un terrain ou où l&apos;on dépose un projet. Certaines communes forestières de Gironde
                sont couvertes par un{' '}
                <strong className="text-primary font-semibold">
                  plan de prévention des risques d&apos;incendie de forêt (PPRIF)
                </strong>
                , qui peut imposer des règles de construction, d&apos;implantation ou d&apos;accès. Nous ne vous
                donnerons pas de liste ici, parce que ces documents évoluent et qu&apos;une liste de mémoire serait
                fausse un jour ou l&apos;autre. La bonne démarche est simple :{' '}
                <strong className="text-primary font-semibold">
                  demandez en mairie si votre parcelle est concernée
                </strong>
                , et lisez en même temps le règlement du PLU, qui peut contenir ses propres prescriptions.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Deuxième vérification : votre assurance habitation. Déclarez la nature exacte de la construction et
                demandez par écrit si elle modifie vos garanties. Interrogez aussi votre assureur sur les conséquences
                d&apos;un défaut de débroussaillement, puisque la franchise supplémentaire évoquée plus haut vient
                s&apos;ajouter au reste. Côté construction, l&apos;entreprise qui bâtit votre maison doit être couverte
                par une{' '}
                <a
                  href="https://entreprendre.service-public.gouv.fr/vosdroits/F2034"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  garantie décennale
                </a>
                , et c&apos;est une attestation à demander avant de signer, quel que soit le matériau.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est la même logique que celle que nous appliquons aux autres risques propres à notre département
                : on identifie le risque local, puis on conçoit contre lui plutôt que de le découvrir après coup. Nous
                l&apos;avons détaillée pour les termites dans notre guide{' '}
                <a href="/blog/termites-gironde-ouvrage-bois-prevention" className={lienInterne}>
                  termites en Gironde : protéger un ouvrage bois
                </a>
                , et elle vaut mot pour mot pour le feu.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                À Libourne comme dans le reste de la Gironde, du Libournais à l&apos;Entre-deux-Mers, des Landes
                girondines au Médoc et au Bassin, nous posons ces questions dès la première visite, avant tout dessin.
                Vous pouvez découvrir l&apos;ensemble de nos{' '}
                <a href="/constructions-bois" className={lienInterne}>
                  constructions bois
                </a>{' '}
                et voir ce que donnent nos ouvrages une fois terminés dans{' '}
                <a href="/realisations" className={lienInterne}>
                  nos réalisations en Gironde
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/chantiers/extension-ossature-bois-bardage-douglas-maison-pierre-gironde.webp"
              w={1400}
              h={923}
              alt="Extension à ossature bois bardée douglas accolée à une maison en pierre en Gironde, pied de façade dégagé sur galets et dallage"
              caption="Galets et dallage au pied du bardage, aucune plante contre les lames : un pied de façade minéral ne laisse rien à brûler au contact du bois."
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
              Ossature bois et incendie : vos questions
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
              Ce qui protège, c&apos;est la conception et l&apos;entretien
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Une maison à ossature bois bien conçue n&apos;a pas à rougir face au feu : sa paroi la protège de
              l&apos;intérieur, et ses détails de façade la protègent de l&apos;extérieur. En Gironde, le reste se joue
              autour d&apos;elle, dans le débroussaillement que la loi impose et dans l&apos;entretien de chaque été.
              Chez L&apos;Esprit Bois, entreprise qualifiée Qualibat basée près de Libourne, nous concevons chaque
              projet en tenant compte de son terrain, pins compris, et nous vous disons franchement ce qui relève de
              nous et ce qui relève de vous.
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
