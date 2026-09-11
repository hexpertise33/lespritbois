import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/blog/isolation-ossature-bois-entre-montants/isolant-entre-montants-ossature-bois-chantier.webp';

export const metadata: Metadata = buildMetadata({
  title: 'Isolation ossature bois en Gironde : quel isolant entre montants',
  description:
    "Dans une ossature bois, l'isolant est le mur : laine minérale, fibre de bois ou ouate, ce qui décide vraiment. Guide d'un artisan à Libourne (Gironde).",
  keywords:
    "isolation ossature bois, isolant entre montants, laine de bois ou laine minérale, ouate de cellulose ossature bois, frein-vapeur ossature bois, étanchéité à l'air maison bois, pont thermique d'ossature, NF DTU 31.2 isolation, extension ossature bois Gironde, constructeur ossature bois Libourne",
  path: '/blog/isolation-ossature-bois-entre-montants',
  ogImage: COVER,
  ogTitle: "Isolation d'une ossature bois : quel isolant entre les montants ?",
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
        name: "Isolation d'une ossature bois",
        item: 'https://lesprit-bois.fr/blog/isolation-ossature-bois-entre-montants',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "Isolation d'une ossature bois : quel isolant entre les montants ?",
    description:
      "Dans une ossature bois, l'isolant n'est pas rapporté contre un mur, il fait partie du mur : ce qu'on met entre les montants décide du confort d'été, de la durabilité de la paroi et du prix. Ce que le NF DTU 31.2 couvre et ce qu'il ne couvre pas encore, ce qui sépare vraiment la laine minérale, la fibre de bois et la ouate de cellulose, le confort d'été en Gironde, les ponts thermiques d'ossature et l'isolation complémentaire, la continuité du frein-vapeur et de l'étanchéité à l'air, et ce que la RE2020 demande à une extension : le guide d'un constructeur à ossature bois à Libourne, en Gironde.",
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
    datePublished: '2026-09-11',
    dateModified: '2026-09-11',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/isolation-ossature-bois-entre-montants',
    },
    about: [
      { '@type': 'Thing', name: 'isolation ossature bois' },
      { '@type': 'Thing', name: 'isolant entre montants' },
      { '@type': 'Thing', name: "étanchéité à l'air" },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Quel isolant mettre entre les montants d'une ossature bois ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Trois familles se posent couramment entre montants : la laine minérale, la fibre de bois et la ouate de cellulose insufflée. La laine minérale reste la solution la plus économique et la mieux couverte par les textes courants. La fibre de bois et la ouate sont plus denses, donc plus lentes à laisser passer la chaleur d'été, et l'écart se paie au mètre carré. Le bon choix dépend moins du matériau que de l'exposition de la paroi, de la qualité de pose et de la continuité du frein-vapeur derrière.",
        },
      },
      {
        '@type': 'Question',
        name: 'Le NF DTU 31.2 couvre-t-il les isolants en fibre de bois ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Pas encore. Le CSTB indique qu'une révision du NF DTU 31.2 est en cours et qu'elle concerne la possibilité d'y introduire les isolants à base de fibres de bois, à la suite d'une décision de la CCFAT de faire passer dans le domaine traditionnel les panneaux et rouleaux à base de fibres de bois pour l'isolation thermique par l'intérieur des murs de locaux chauffés à faible et moyenne hygrométrie. En attendant, ces isolants se posent sous Avis Technique ou Document Technique d'Application visant favorablement leur pose entre montants. Ce n'est pas un défaut, c'est un document à demander au devis.",
        },
      },
      {
        '@type': 'Question',
        name: "L'isolation entre montants suffit-elle dans une ossature bois ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Rarement, car les montants eux-mêmes isolent moins bien que l'isolant qui les sépare : ils créent des ponts thermiques d'ossature répartis sur toute la surface du mur. La réponse n'est pas d'ajouter de l'épaisseur entre montants mais une couche complémentaire continue, posée devant l'ossature, à l'extérieur sous le bardage ou à l'intérieur en contre-cloison technique. Cette contre-cloison a un second mérite : elle offre un vide où faire passer les réseaux sans percer le frein-vapeur.",
        },
      },
      {
        '@type': 'Question',
        name: "À quoi sert le frein-vapeur, et pourquoi sa continuité est-elle si importante ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le frein-vapeur régule la migration de la vapeur d'eau depuis l'intérieur vers la paroi, et la membrane sert le plus souvent aussi de plan d'étanchéité à l'air. L'Agence Qualité Construction rappelle que la continuité de cette étanchéité est essentielle : sans elle, les circulations d'air parasites se concentrent en quelques points et y déposent l'eau condensée, et une discontinuité laisse migrer la vapeur vers la lame d'air et le matériau de couverture, avec un risque important de condensation par temps froid. Le défaut se joue presque toujours aux jonctions et aux traversées, pas au milieu du lé.",
        },
      },
      {
        '@type': 'Question',
        name: 'La RE2020 concerne-t-elle mon extension en ossature bois ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Cela dépend de la surface et de la date de dépôt. Pour les permis de construire et déclarations préalables déposés à compter du 1er janvier 2022, la RE2020 s'applique aux extensions de maison individuelle dont la surface de référence est supérieure ou égale à 80 m². Depuis le 1er janvier 2023, elle s'applique aux autres extensions de bâtiments résidentiels. Votre cas précis se vérifie auprès du service urbanisme de votre commune et se calcule avec un bureau d'études thermiques, dès la conception et non à la fin du chantier.",
        },
      },
      {
        '@type': 'Question',
        name: "Peut-on changer l'isolant d'une ossature bois après coup ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Pas sans ouvrir la paroi. L'isolant se pose murs ouverts, avant les réseaux, les doublages et les finitions : une fois le frein-vapeur posé et les doublages fermés, on n'y revient plus sans déposer l'intérieur et refaire l'étanchéité à l'air. C'est pour cette raison que le choix de l'isolant et l'épaisseur disponible se décident à la conception, avec la section des montants, et non en cours de chantier.",
        },
      },
    ],
  },
];

const isolants = [
  [
    'Laine minérale',
    'En panneaux ou rouleaux, découpés et calés entre montants',
    'La plus économique, connue de tous les artisans, couverte par les textes courants',
    'Sa légèreté la rend plus vite traversée par la chaleur d’été ; jeux et tassements pardonnent mal',
  ],
  [
    'Fibre de bois',
    'En panneaux semi-rigides qui se tiennent seuls entre montants',
    'Plus dense, donc plus lente à laisser passer la chaleur ; tamponne les variations d’humidité',
    'Relève aujourd’hui d’un Avis Technique ou d’un DTA, pas encore du NF DTU 31.2 ; plus chère au m²',
  ],
  [
    'Ouate de cellulose',
    'Insufflée en vrac dans des caissons fermés, à la machine',
    'Remplit tous les recoins sans jeu, y compris les géométries irrégulières',
    'Tout se joue sur la densité de mise en œuvre et l’opérateur ; mal insufflée, elle se tasse',
  ],
];

const faq = [
  {
    q: "Quel isolant mettre entre les montants d'une ossature bois ?",
    r: (
      <>
        Trois familles se posent couramment entre montants : la laine minérale, la fibre de bois et la ouate de cellulose
        insufflée. La laine minérale reste la solution la plus économique et la mieux couverte par les textes courants.
        La fibre de bois et la ouate sont plus denses, donc plus lentes à laisser passer la chaleur d&apos;été, et
        l&apos;écart se paie au mètre carré. Le bon choix dépend moins du matériau que de l&apos;exposition de la paroi,
        de la qualité de pose et de la continuité du frein-vapeur derrière.
      </>
    ),
  },
  {
    q: 'Le NF DTU 31.2 couvre-t-il les isolants en fibre de bois ?',
    r: (
      <>
        Pas encore. Le CSTB indique qu&apos;une révision du NF DTU 31.2 est en cours et qu&apos;elle concerne la
        possibilité d&apos;y introduire les isolants à base de fibres de bois, à la suite d&apos;une décision de la CCFAT
        de faire passer dans le domaine traditionnel les panneaux et rouleaux à base de fibres de bois pour
        l&apos;isolation thermique par l&apos;intérieur des murs de locaux chauffés à faible et moyenne hygrométrie. En
        attendant, ces isolants se posent sous Avis Technique ou Document Technique d&apos;Application visant
        favorablement leur pose entre montants. Ce n&apos;est pas un défaut, c&apos;est un document à demander au devis.
      </>
    ),
  },
  {
    q: "L'isolation entre montants suffit-elle dans une ossature bois ?",
    r: (
      <>
        Rarement, car les montants eux-mêmes isolent moins bien que l&apos;isolant qui les sépare : ils créent des ponts
        thermiques d&apos;ossature répartis sur toute la surface du mur. La réponse n&apos;est pas d&apos;ajouter de
        l&apos;épaisseur entre montants mais une couche complémentaire continue, posée devant l&apos;ossature, à
        l&apos;extérieur sous le bardage ou à l&apos;intérieur en contre-cloison technique. Cette contre-cloison a un
        second mérite : elle offre un vide où faire passer les réseaux sans percer le frein-vapeur.
      </>
    ),
  },
  {
    q: 'À quoi sert le frein-vapeur, et pourquoi sa continuité est-elle si importante ?',
    r: (
      <>
        Le frein-vapeur régule la migration de la vapeur d&apos;eau depuis l&apos;intérieur vers la paroi, et la membrane
        sert le plus souvent aussi de plan d&apos;étanchéité à l&apos;air. L&apos;Agence Qualité Construction rappelle
        que la continuité de cette étanchéité est essentielle : sans elle, les circulations d&apos;air parasites se
        concentrent en quelques points et y déposent l&apos;eau condensée, et une discontinuité laisse migrer la vapeur
        vers la lame d&apos;air et le matériau de couverture, avec un risque important de condensation par temps froid.
        Le défaut se joue presque toujours aux jonctions et aux traversées, pas au milieu du lé.
      </>
    ),
  },
  {
    q: 'La RE2020 concerne-t-elle mon extension en ossature bois ?',
    r: (
      <>
        Cela dépend de la surface et de la date de dépôt. Pour les permis de construire et déclarations préalables
        déposés à compter du 1er janvier 2022, la RE2020 s&apos;applique aux extensions de maison individuelle dont la
        surface de référence est supérieure ou égale à 80 m². Depuis le 1er janvier 2023, elle s&apos;applique aux autres
        extensions de bâtiments résidentiels. Votre cas précis se vérifie auprès du service urbanisme de votre commune et
        se calcule avec un bureau d&apos;études thermiques, dès la conception et non à la fin du chantier.
      </>
    ),
  },
  {
    q: "Peut-on changer l'isolant d'une ossature bois après coup ?",
    r: (
      <>
        Pas sans ouvrir la paroi. L&apos;isolant se pose murs ouverts, avant les réseaux, les doublages et les finitions :
        une fois le frein-vapeur posé et les doublages fermés, on n&apos;y revient plus sans déposer l&apos;intérieur et
        refaire l&apos;étanchéité à l&apos;air. C&apos;est pour cette raison que le choix de l&apos;isolant et
        l&apos;épaisseur disponible se décident à la conception, avec la section des montants, et non en cours de
        chantier.
      </>
    ),
  },
];

export default function ArticleIsolationOssatureBoisPage() {
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
              alt="Isolant en place entre les montants d'un mur à ossature bois sur un chantier en Gironde"
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
              <span className="text-secondary-fixed">Isolation d&apos;une ossature bois</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Ossature bois
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Isolation d&apos;une ossature bois : quel isolant entre les montants ?
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
              <span>11 septembre 2026</span>
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
                Entre les montants d&apos;une ossature bois, trois familles se posent couramment : la laine minérale, la
                fibre de bois et la ouate de cellulose insufflée. La laine minérale reste la plus économique et la mieux
                couverte par les textes ; la fibre de bois et la ouate, plus denses, tiennent mieux la chaleur d&apos;été,
                ce qui est le vrai sujet en Gironde. Mais le nom de l&apos;isolant pèse moins lourd que deux choses
                invisibles une fois les murs fermés : la continuité du frein-vapeur et le traitement des ponts thermiques
                d&apos;ossature.
              </strong>{' '}
              Sur nos chantiers autour de Libourne, la scène se répète : un client arrive avec trois devis, trois
              isolants différents, trois discours, et aucune façon de trancher. Le malentendu de départ est presque
              toujours le même. Dans une maison maçonnée, l&apos;isolant est rapporté contre un mur qui existe déjà.
              Dans une ossature bois, il occupe la même épaisseur que la structure : il{' '}
              <em>est</em> le mur. Voici comment lire ces trois devis.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. L'isolant fait partie du mur */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Dans une ossature bois, l&apos;isolant fait partie du mur
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Sur une maison en parpaing, les rôles sont séparés : le mur porte et tient l&apos;eau, l&apos;isolant est
                ajouté devant, en doublage, et il pourra être refait un jour sans toucher à la structure. Une ossature
                bois fonctionne autrement.{' '}
                <strong className="text-primary font-semibold">
                  Les montants et l&apos;isolant occupent la même tranche de mur
                </strong>{' '}
                : l&apos;isolant remplit les caissons entre les bois, et le mur fini ne fait pas l&apos;épaisseur des deux.
                C&apos;est d&apos;ailleurs l&apos;un des avantages du procédé, parce qu&apos;à performance comparable la
                paroi reste mince et l&apos;on gagne de la surface habitable.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Cette imbrication a trois conséquences très concrètes, et elles expliquent pourquoi nous insistons autant
                sur ce choix en rendez-vous.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['L’épaisseur disponible se décide à la conception', 'elle découle de la section des montants retenue par le plan et par l’étude de structure, pas d’un arbitrage de fin de chantier.'],
                  ['Le choix n’est pas réversible', 'l’isolant se pose murs ouverts, avant les réseaux et les doublages ; une fois la paroi refermée, on n’y revient plus sans la déposer.'],
                  ['L’isolant cohabite avec du bois', 'il doit rester sec, donc la gestion de la vapeur d’eau fait partie du choix de l’isolant, pas d’un lot séparé.'],
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
                Dans le déroulé d&apos;un chantier, l&apos;isolation et le frein-vapeur sont les tout derniers postes de
                l&apos;enveloppe : ils font partie de ce que nous livrons avec le hors d&apos;air, et tout ce qui vient
                ensuite (cloisons, réseaux, finitions) se fait sur une paroi déjà scellée. Si vous vous demandez ce que
                recouvre exactement cette frontière de livraison, nous l&apos;avons détaillée poste par poste dans notre
                guide sur{' '}
                <a href="/blog/hors-eau-hors-air-ossature-bois-ce-qui-reste-a-faire" className={lienInterne}>
                  ce que contient une livraison hors d&apos;eau hors d&apos;air
                </a>
                . Retenez-en une chose ici : le jour où l&apos;on vous annonce le hors d&apos;air, le choix de
                l&apos;isolant n&apos;est plus ouvert. Il devait être tranché des mois plus tôt.
              </p>
            </section>

            <Figure
              src="/images/ossature-bois-isolation-fibre-gironde.webp"
              w={1200}
              h={900}
              alt="Murs à ossature bois montés sur un chantier en Gironde, caissons encore ouverts entre les montants avant la pose de l'isolant"
              caption="Caissons encore ouverts entre les montants : c'est ce volume, et lui seul, que l'isolant viendra remplir. Son épaisseur est déjà fixée par la structure."
            />

            {/* 2. NF DTU 31.2 */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce que le NF DTU 31.2 couvre vraiment aujourd&apos;hui, et ce qu&apos;il ne couvre pas encore
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Voici le point le plus contre-intuitif de cet article, et celui qu&apos;aucun commercial ne vous dira
                spontanément : <strong className="text-primary font-semibold">« maison bois » ne veut pas dire
                « isolant bois d&apos;office »</strong>, du moins pas au sens des textes. Le NF DTU 31.2 est le référentiel
                des ouvrages à ossature en bois, celui qui définit le domaine traditionnel de la construction. Or il ne
                vise pas encore les isolants à base de fibres de bois.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ce n&apos;est pas une interprétation de notre part, c&apos;est écrit noir sur blanc par le{' '}
                <a
                  href="https://www.cstb.fr/toutes-les-actualites/revision-nf-dtu-27-1-31-2"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSTB, sur sa page consacrée à la révision des NF DTU 27.1 et 31.2
                </a>{' '}
                : « Une révision du NF DTU 31.2 est en cours. Elle concerne la possibilité d&apos;y introduire les
                isolants à base de fibres de bois. » Cette révision fait suite à une décision de la CCFAT de faire passer
                dans le domaine traditionnel les panneaux et rouleaux à base de fibres de bois pour l&apos;isolation
                thermique par l&apos;intérieur des murs de locaux chauffés à faible et moyenne hygrométrie.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                En clair : la fibre de bois est en train d&apos;entrer dans le domaine traditionnel, mais elle n&apos;y
                est pas encore. En attendant, elle relève d&apos;un{' '}
                <strong className="text-primary font-semibold">Avis Technique ou d&apos;un Document Technique
                d&apos;Application (DTA)</strong> visant favorablement sa pose entre montants. Et c&apos;est parfaitement
                posable : nous mettons nous-mêmes de la fibre de bois dans nos ouvrages. Un isolant sous Avis Technique
                n&apos;est pas un isolant au rabais, c&apos;est un isolant dont l&apos;emploi est encadré par un document
                qui lui est propre, avec son domaine d&apos;emploi et ses conditions de mise en œuvre.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ce que cela change pour vous tient en une question, à poser telle quelle au moment du devis :{' '}
                <strong className="text-primary font-semibold">
                  sous quel référentiel l&apos;isolant que vous me proposez est-il posé ?
                </strong>{' '}
                Trois réponses sont acceptables : « il relève du NF DTU 31.2 », « il relève d&apos;un Avis Technique, le
                voici », « il relève d&apos;un DTA, le voici ». Une seule ne l&apos;est pas : un silence gêné. Le
                document existe ou il n&apos;existe pas, et une entreprise qui pose l&apos;isolant en question l&apos;a
                forcément sous la main.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Pourquoi insister ? Parce que ce document n&apos;est pas un détail administratif. C&apos;est lui qui
                détermine si l&apos;ouvrage relève de la technique courante, et cette qualification a des effets très
                pratiques en matière d&apos;assurance. La réponse se demande avant la signature, pas après un sinistre.
              </p>
            </section>

            {/* 3. Comparatif des isolants */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Laine minérale, fibre de bois, ouate de cellulose : ce qui les sépare vraiment
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Les trois familles isolent, et elles isolent bien. Ce qui les sépare n&apos;est presque jamais la
                performance annoncée sur la fiche produit, que les fabricants ajustent en jouant sur l&apos;épaisseur.
                Ce qui les sépare, c&apos;est la densité, la façon dont elles se posent, et ce qu&apos;elles font de
                l&apos;humidité et de la chaleur d&apos;été.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Isolant</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Comment il se pose</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Ce qu&apos;il apporte</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Point de vigilance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isolants.map((ligne, i) => (
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
                Deux remarques de chantier, qui valent plus qu&apos;un comparatif de brochures. La première : un isolant
                léger mal posé perd une partie de son intérêt, alors qu&apos;un isolant dense mal posé se voit tout de
                suite. Les panneaux semi-rigides se tiennent seuls entre les montants et ne laissent pas de jeu en pied
                de mur ; les rouleaux souples, eux, demandent une découpe soignée et un calage réel, sans quoi
                l&apos;air circule là où il ne devrait pas. La règle est la même pour tous :{' '}
                <strong className="text-primary font-semibold">plein, jointif, sans compression</strong>. Un isolant
                tassé n&apos;isole plus comme prévu.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La seconde : la ouate de cellulose insufflée est la solution la plus tolérante aux géométries
                compliquées, parce qu&apos;elle remplit tout, jusqu&apos;au dernier recoin d&apos;un angle ou d&apos;un
                linteau. Mais elle transfère la difficulté ailleurs : sur la densité de mise en œuvre et sur la
                compétence de l&apos;opérateur. C&apos;est un lot où l&apos;on ne choisit pas un matériau, on choisit
                quelqu&apos;un.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Reste le prix, qui finit toujours par trancher. L&apos;écart entre laine minérale et isolants biosourcés
                se paie au mètre carré, et il se cumule avec le reste de l&apos;enveloppe. Nous ne le détaillons pas ici
                pour ne pas répéter notre guide dédié : les ordres de grandeur et ce qui fait bouger un devis sont dans{' '}
                <a href="/blog/extension-ossature-bois-prix-m2" className={lienInterne}>
                  notre article sur le prix au m² d&apos;une extension en ossature bois
                </a>
                . Et si la logique du matériau local vous intéresse, elle vaut pour la structure comme pour
                l&apos;isolant : nous l&apos;avons traitée dans{' '}
                <a href="/blog/bois-local-pin-maritime-douglas-gironde" className={lienInterne}>
                  notre guide du bois local, pin maritime et douglas en Gironde
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/blog/isolation-ossature-bois-entre-montants/laine-minerale-entre-montants-mur-ossature.webp"
              w={1200}
              h={801}
              alt="Laine minérale calée entre les montants d'un mur à ossature bois, boîtier électrique encastré dans l'isolant"
              caption="Photo d'illustration : la laine minérale se découpe caisson par caisson, plein et jointif. On y voit aussi un boîtier électrique noyé dans l'isolant, ce qu'un vide technique devant la membrane permet d'éviter."
            />

            {/* 4. Confort d'été */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le confort d&apos;été, le vrai sujet en Gironde
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                En rendez-vous, on nous parle d&apos;hiver. Six mois plus tard, on nous rappelle pour parler d&apos;été.
                C&apos;est une constante de nos chantiers entre Libourne et l&apos;Entre-deux-Mers :{' '}
                <strong className="text-primary font-semibold">
                  l&apos;hiver est un problème résolu, l&apos;été ne l&apos;est pas
                </strong>
                . Une extension bien isolée se chauffe facilement ; la même extension, plein ouest, avec une grande baie
                et une toiture peu protégée, devient invivable les soirs de canicule si personne n&apos;y a pensé en
                amont.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Or les deux problèmes ne se traitent pas avec le même levier. Contre le froid, ce qui compte est la
                capacité de la paroi à freiner la fuite de chaleur. Contre le chaud, ce qui compte est le{' '}
                <strong className="text-primary font-semibold">temps que met la chaleur à traverser la paroi</strong>. Un
                matériau dense met plus longtemps qu&apos;un matériau léger, et ce décalage a une valeur d&apos;usage
                très simple : la chaleur emmagasinée en plein après-midi arrive à l&apos;intérieur bien plus tard, à un
                moment où l&apos;on peut ouvrir et ventiler avec l&apos;air frais de la nuit. C&apos;est la raison pour
                laquelle nous orientons volontiers vers la fibre de bois ou la ouate sur les parois les plus exposées, et
                en priorité absolue en toiture et en rampants, là où le soleil frappe le plus fort et le plus longtemps.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Cela dit, soyons honnêtes sur ce que l&apos;isolant peut et ne peut pas faire.{' '}
                <strong className="text-primary font-semibold">
                  Aucun isolant ne rattrape une baie vitrée non protégée.
                </strong>{' '}
                La chaleur d&apos;été entre d&apos;abord par le vitrage, en rayonnement direct, et elle entre en quelques
                minutes. Une casquette, un débord de toiture calculé, un brise-soleil orientable ou une{' '}
                <a href="/pergolas" className={lienInterne}>
                  pergola à lames orientables posée devant la baie
                </a>{' '}
                changent le confort d&apos;une pièce bien plus vite que n&apos;importe quel arbitrage entre deux
                isolants. La bonne séquence est toujours la même : protéger les baies, choisir un isolant dense sur les
                parois exposées, prévoir une ventilation nocturne possible.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Un dernier mot sur une idée reçue tenace, que nous entendons chaque été : « le bois, ça garde la chaleur ».
                Ce n&apos;est pas la matière du mur qui décide, c&apos;est la conception d&apos;ensemble, l&apos;orientation,
                les protections solaires et la capacité à évacuer la chaleur la nuit. Nous en voyons la preuve chantier
                après chantier, et vous pouvez juger sur pièce dans{' '}
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
              alt="Extension en ossature bois bardée douglas accolée à une maison en pierre en Gironde, porte-fenêtre et baie coulissante sur la terrasse"
              caption="Toiture débordante et baies de plain-pied : l'ombre portée sur le vitrage se dessine au plan de toiture, avant tout arbitrage sur l'isolant."
            />

            {/* 5. Ponts thermiques d'ossature */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Pourquoi on n&apos;empile pas tout entre les montants
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le réflexe naturel, quand on veut une paroi plus performante, est de demander des montants plus larges
                pour y loger davantage d&apos;isolant. C&apos;est rarement le bon réflexe, et pour une raison simple :{' '}
                <strong className="text-primary font-semibold">
                  le bois isole beaucoup moins bien que l&apos;isolant qu&apos;il encadre
                </strong>
                . Chaque montant est un chemin par lequel la chaleur contourne l&apos;isolant. Et ces montants ne sont
                pas une exception dans le mur : ils se répètent régulièrement sur toute la surface, auxquels s&apos;ajoutent
                les lisses haute et basse, les linteaux, les angles et les renforts autour des baies. On parle de{' '}
                <strong className="text-primary font-semibold">ponts thermiques d&apos;ossature</strong>, et leur
                particularité est d&apos;être diffus : ils ne se voient nulle part en particulier parce qu&apos;ils sont
                partout. Élargir les montants revient donc, en partie, à ajouter de l&apos;isolant et du pont thermique
                en même temps.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La réponse tient en un mot : la{' '}
                <strong className="text-primary font-semibold">continuité</strong>. On ajoute une couche isolante qui
                court devant l&apos;ossature, sans interruption, et qui vient couvrir les bois au lieu de se glisser
                entre eux. Deux implantations sont possibles, et le choix se fait projet par projet.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Côté extérieur, sous le bardage', 'la couche complémentaire habille l’ossature en continu, y compris au droit des lisses et des angles ; elle suppose de revoir les fixations du bardage, la lame d’air et les épaisseurs d’encadrement des menuiseries.'],
                  ['Côté intérieur, en contre-cloison technique', 'une seconde ossature légère, désolidarisée, qui reçoit un isolant complémentaire et, surtout, qui ménage un vide où faire passer les réseaux.'],
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
                Ce dernier point mérite d&apos;être souligné, parce qu&apos;il résout deux problèmes d&apos;un coup. La
                contre-cloison technique améliore la paroi <em>et</em> protège le plan d&apos;étanchéité à l&apos;air :
                l&apos;électricien passe ses gaines et ses boîtiers dans le vide technique, devant la membrane, sans
                jamais la percer. Sur un chantier où chaque corps de métier perce ce dont il a besoin, c&apos;est la
                différence entre une paroi intacte et une paroi criblée.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Dernier élément du système, souvent oublié dans les discussions sur l&apos;isolant : la peau extérieure.
                Un isolant n&apos;isole que s&apos;il reste sec, et c&apos;est le pare-pluie, la lame d&apos;air ventilée
                et le bardage qui le tiennent au sec. Une lame d&apos;air bouchée en pied ou en tête, et toute la paroi
                perd sa capacité à sécher. On n&apos;isole jamais directement derrière un bardage plaqué sans lame
                d&apos;air : ce n&apos;est pas une question de performance, c&apos;est une question de durée de vie de
                l&apos;ouvrage.
              </p>
            </section>

            <Figure
              src="/images/chantiers/extension-ossature-bois-pare-pluie-volume-accole-gironde.jpg"
              w={1100}
              h={825}
              alt="Mur à ossature bois d'une extension en Gironde, pare-pluie posé et tasseaux verticaux de lame d'air avant le bardage"
              caption="Pare-pluie agrafé sur l'ossature, puis tasseaux verticaux : c'est ce vide continu qui laissera la paroi sécher une fois le bardage posé."
            />

            {/* 6. Frein-vapeur et étanchéité à l'air */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le frein-vapeur et l&apos;étanchéité à l&apos;air : le poste invisible qui décide de la durée de vie de la
                paroi
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est le lot dont personne ne parle en rendez-vous commercial, parce qu&apos;il ne se voit pas, ne
                se photographie pas et ne se vend pas. C&apos;est pourtant celui qui décide si votre paroi tiendra
                cinquante ans. Deux fonctions y sont assurées, souvent par la même membrane, ce qui explique qu&apos;on
                les confonde constamment.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le frein-vapeur', 'il régule la migration de la vapeur d’eau produite à l’intérieur (cuisine, douches, occupants, séchage) vers la paroi, pour qu’elle n’aille pas se condenser dans l’isolant ou contre les bois.'],
                  ['Le plan d’étanchéité à l’air', 'il empêche l’air de traverser la paroi. Et c’est l’air en mouvement qui transporte le gros de l’humidité, bien plus que la diffusion à travers les matériaux.'],
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
                <a
                  href="https://qualiteconstruction.com/ressource/fiches-pathologie-batiment/defauts-etancheite-air/"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  L&apos;Agence Qualité Construction, dans sa fiche pathologie sur les défauts d&apos;étanchéité à
                  l&apos;air
                </a>
                , est très claire sur le mécanisme : la continuité de l&apos;étanchéité à l&apos;air lors de la pose
                d&apos;un pare-vapeur ou d&apos;un frein-vapeur est essentielle, faute de quoi{' '}
                <strong className="text-primary font-semibold">
                  les circulations d&apos;air parasites se concentrent en quelques points et y déposent l&apos;eau
                  condensée
                </strong>
                . Sa fiche consacrée aux{' '}
                <a
                  href="https://qualiteconstruction.com/ressource/fiches-pathologie-batiment/desordres-structurels-ossatures-bois/"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  désordres structurels des ossatures bois
                </a>{' '}
                ajoute qu&apos;une discontinuité du pare-vapeur laisse migrer la vapeur vers la lame d&apos;air et le
                matériau de couverture, avec un risque important de condensation par temps froid.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ce qu&apos;il faut entendre derrière ce vocabulaire technique est simple et un peu cruel : le défaut ne
                se situe presque jamais au milieu du lé de membrane, qui est étanche par construction.{' '}
                <strong className="text-primary font-semibold">Il se situe aux jonctions</strong> : recouvrements entre
                lés, angles de murs, jonction avec le plancher et avec la toiture, pourtour des menuiseries, et surtout
                chaque traversée, gaine électrique, tuyau, conduit de ventilation. Un mur très bien isolé avec une
                douzaine de percements non repris se comporte moins bien qu&apos;un mur ordinaire soigneusement fermé.
                Adhésifs et manchons prévus pour cet usage, pas du ruban de bricolage : c&apos;est là que se joue la
                différence, et cela ne se rattrape pas après la pose des doublages.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Deux corollaires, que nous répétons à tous les intervenants qui entrent sur un de nos chantiers. Le
                premier :{' '}
                <strong className="text-primary font-semibold">
                  on ne perce pas le frein-vapeur sans réparer l&apos;étanchéité derrière
                </strong>
                , et la contre-cloison technique évoquée plus haut est la meilleure façon de ne jamais avoir à le faire.
                Le second : un bâtiment volontairement étanche à l&apos;air{' '}
                <strong className="text-primary font-semibold">doit être ventilé mécaniquement</strong>. La ventilation
                n&apos;est pas un confort que l&apos;on repousse pour tenir un budget, c&apos;est la contrepartie
                obligatoire de l&apos;étanchéité. Un projet qui sacrifie la VMC récolte de la condensation dès le premier
                hiver.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Enfin, l&apos;étanchéité à l&apos;air ne se promet pas, elle se mesure, par un tiers, et la valeur à
                atteindre se fixe avec votre maître d&apos;œuvre ou votre bureau d&apos;études thermiques, en fonction de
                votre projet. Vous ne trouverez donc pas de chiffre ici : celui d&apos;un article de blog ne serait pas
                celui de votre maison.
              </p>
            </section>

            <Figure
              src="/images/blog/isolation-ossature-bois-entre-montants/membrane-etancheite-air-pare-vapeur-ossature-bois.webp"
              w={1200}
              h={887}
              alt="Membrane d'étanchéité à l'air posée à l'intérieur d'une paroi à ossature bois, recouvrements et pourtour de l'ouverture adhésivés"
              caption="Les bandes noires disent tout : recouvrements entre lés, angles, jonction avec la charpente et pourtour de l'ouverture sont tous repris à l'adhésif."
            />

            {/* 7. RE2020 */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce que la réglementation demande à votre extension
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Dernière pièce du dossier, et celle qui conditionne souvent tout le reste : selon la taille de votre
                projet, votre extension peut relever ou non de la réglementation environnementale RE2020. Le calendrier
                est fixé par le{' '}
                <a
                  href="https://rt-re-batiment.developpement-durable.gouv.fr/champ-et-calendrier-d-application-a1222.html"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  portail officiel RT-RE bâtiment, page « Champ et calendrier d&apos;application »
                </a>
                , et il se lit à la date de dépôt du dossier d&apos;urbanisme.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Permis et déclarations préalables déposés à compter du 1er janvier 2022', 'la RE2020 s’applique aux extensions de maison individuelle dont la surface de référence est supérieure ou égale à 80 m².'],
                  ['À compter du 1er janvier 2023', 'elle s’applique aux autres extensions de bâtiments résidentiels.'],
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
                Nous nous arrêtons volontairement là. Nous ne détaillerons ni les indicateurs de la réglementation ni les
                seuils de performance à atteindre, parce que ce n&apos;est pas le rôle d&apos;un article :{' '}
                <strong className="text-primary font-semibold">
                  c&apos;est le travail d&apos;un bureau d&apos;études thermiques, sur votre projet
                </strong>
                , et votre situation exacte se confirme auprès du service urbanisme de votre commune. Ce que nous pouvons
                vous dire, en revanche, c&apos;est la conséquence pratique : quand un projet entre dans le champ de la
                RE2020, l&apos;étude thermique se lance{' '}
                <strong className="text-primary font-semibold">à la conception, avant le dépôt du dossier</strong>, parce
                que le choix de l&apos;isolant, les épaisseurs, la composition des parois et les menuiseries entrent tous
                dans le même calcul. Les découvrir en fin de chantier coûte cher.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Tous les ouvrages ne relèvent d&apos;ailleurs pas de la même logique : un volume non chauffé ne pose pas
                du tout les mêmes questions qu&apos;une pièce à vivre, et nous les avons traitées séparément dans notre
                guide du{' '}
                <a href="/blog/garage-ossature-bois-permis-dalle-budget" className={lienInterne}>
                  garage en ossature bois, permis, dalle et budget
                </a>
                . Pour une extension chauffée, en revanche, l&apos;isolant fait partie du dossier dès le premier croquis :
                c&apos;est ainsi que nous travaillons sur nos{' '}
                <a href="/constructions-bois" className={lienInterne}>
                  constructions et extensions bois
                </a>{' '}
                et en tant que{' '}
                <a href="/constructeur-ossature-bois-gironde" className={lienInterne}>
                  constructeur d&apos;ossature bois en Gironde
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
              Isolation d&apos;une ossature bois : vos questions
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
              Un mur se décide avant d&apos;être refermé
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Comparer trois devis sur le seul nom de l&apos;isolant, c&apos;est comparer trois voitures sur la couleur.
              Demandez plutôt sous quel référentiel l&apos;isolant est posé, comment la couche complémentaire traite les
              ponts thermiques d&apos;ossature, et qui répond de la continuité du frein-vapeur et des traversées. Ces
              trois réponses écrites valent plus que n&apos;importe quelle promesse de performance. C&apos;est la méthode
              que nous appliquons chez L&apos;Esprit Bois, entreprise qualifiée Qualibat, à Libourne et dans toute la
              Gironde : une paroi décidée à la conception, posée proprement, et documentée sur le devis.{' '}
              <a href="/contact" className="underline underline-offset-4 decoration-white/40 hover:decoration-secondary">
                Parlons de votre projet
              </a>
              .
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
