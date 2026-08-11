import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/realisations/pergola-aluminium-terrasse-bois-libourne-3.webp';

export const metadata: Metadata = buildMetadata({
  title: "Aluminium recyclé : est-il écologique ? | L'Esprit Bois",
  description:
    "L'aluminium est-il écologique ? Aluminium primaire ou recyclé, filière française de recyclage en 2026, comparaison honnête avec le bois : le guide d'un artisan qui pose les deux à Libourne (Gironde).",
  keywords:
    "aluminium recyclé, aluminium écologique, aluminium bas carbone, bois ou aluminium écologie, recyclage menuiserie aluminium, empreinte carbone aluminium, profilés aluminium recyclés, menuiserie aluminium Gironde, pergola aluminium Libourne, aluminium ou bois durable",
  path: '/blog/aluminium-ecologique-recyclage-bas-carbone',
  ogImage: COVER,
  ogTitle:
    "L'aluminium est-il écologique ? Recyclage, bas carbone et ce que ça change face au bois en 2026",
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
        name: 'Aluminium et écologie',
        item: 'https://lesprit-bois.fr/blog/aluminium-ecologique-recyclage-bas-carbone',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      "L'aluminium est-il écologique ? Recyclage, bas carbone et ce que ça change face au bois en 2026",
    description:
      "Aluminium primaire et aluminium recyclé sont deux matériaux très différents. Ce que coûte la production, ce que rend le recyclage, ce que change la filière française qui se structure en 2026, et comment arbitrer honnêtement entre bois et aluminium selon l'ouvrage, par un artisan qui pose les deux en Gironde.",
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
    datePublished: '2026-08-11',
    dateModified: '2026-08-11',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/aluminium-ecologique-recyclage-bas-carbone',
    },
    about: ['aluminium recyclé', 'aluminium bas carbone', 'bois ou aluminium', 'aménagement extérieur'],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "L'aluminium est-il un matériau écologique ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Tout dépend de quel aluminium on parle. L'aluminium primaire, produit par électrolyse de la bauxite, est l'un des matériaux les plus gourmands en énergie qui soient. L'aluminium recyclé, lui, n'est qu'une refonte de métal déjà produit : il ne demande qu'une fraction de cette énergie. Un profilé n'est donc pas écologique ou non par nature, mais selon la part de matière recyclée qu'il contient, l'origine de son alliage et surtout la durée pendant laquelle l'ouvrage restera en place sans être remplacé.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quelle différence entre aluminium primaire et aluminium recyclé ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "L'aluminium primaire part du minerai : bauxite, alumine, puis électrolyse, une étape qui consomme énormément d'électricité. L'aluminium recyclé part de métal existant — chutes de production ou menuiseries déposées — qu'on refond pour couler de nouvelles billettes, avant filage des profilés. Chimiquement, le métal obtenu est le même et conserve ses propriétés mécaniques. La différence se joue sur l'énergie de fabrication et sur la traçabilité de la matière première.",
        },
      },
      {
        '@type': 'Question',
        name: "L'aluminium se recycle-t-il vraiment en boucle ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, à condition que la matière soit collectée et triée par famille d'alliages. L'aluminium ne perd pas ses qualités à la refonte, ce qui permet en théorie un recyclage sans fin. La limite n'est pas technique mais logistique : il faut que la dépose parte en filière plutôt qu'en benne tout-venant, et que le métal soit refondu près de là où il est collecté. C'est précisément le chaînon que la filière française cherche à consolider.",
        },
      },
      {
        '@type': 'Question',
        name: 'Bois ou aluminium : lequel a le meilleur bilan environnemental ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le bois garde l'avantage à la fabrication : c'est une matière renouvelable, peu transformée, qui stocke du carbone pendant toute sa vie en œuvre, et qui peut venir de quelques dizaines de kilomètres en Gironde. L'aluminium rattrape sur la durée : très longue durée de vie, aucun entretien consommant produits et eau, recyclabilité en boucle et valeur marchande à la dépose. Le pire bilan, dans les deux matières, reste celui d'un ouvrage mal conçu qu'il faut refaire au bout de dix ans.",
        },
      },
      {
        '@type': 'Question',
        name: 'Comment savoir si mes profilés contiennent de l’aluminium recyclé ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "En le demandant par écrit à votre installateur, et en demandant l'origine de ce recyclé : des chutes internes de production ne valent pas de l'aluminium issu de menuiseries réellement déposées. Demandez aussi le nom du gammiste, le lieu de filage et de thermolaquage, et l'existence d'une démarche ou d'un label sur la gamme proposée. Un pourcentage annoncé sans traçabilité derrière ne vaut pas grand-chose.",
        },
      },
      {
        '@type': 'Question',
        name: 'Que devient mon ancienne pergola ou véranda aluminium à la dépose ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Elle doit être déposée séparément du reste des gravats : profilés d'un côté, vitrages, joints et visserie de l'autre. L'aluminium a une valeur marchande, il repart donc en filière plutôt qu'en enfouissement dès lors qu'il est trié. Posez la question de la reprise avant la signature du devis : c'est un point que peu de clients pensent à demander et qui distingue nettement les entreprises.",
        },
      },
    ],
  },
];

const comparatif = [
  [
    'Fabrication',
    'Renouvelable, peu transformé, stocke du carbone en œuvre',
    'Énergie élevée en primaire, bien plus faible en recyclé',
    'Avantage net au bois, surtout local',
  ],
  [
    'Durée de vie',
    'Longue si l’essence et la pose sont justes, sensible à l’eau',
    'Très longue, insensible aux insectes et à l’humidité',
    'Avantage à l’aluminium en exposition sévère',
  ],
  [
    'Entretien',
    'Saturateur, dégrisage : produits, eau et temps réguliers',
    'Lavage à l’eau savonneuse, profilés thermolaqués stables',
    'Avantage à l’aluminium sur la durée',
  ],
  [
    'Fin de vie',
    'Réemploi, broyage ou valorisation énergétique',
    'Refondu en boucle, avec une valeur marchande à la dépose',
    'Avantage à l’aluminium si la dépose part en filière',
  ],
];

const faq = [
  {
    q: "L'aluminium est-il un matériau écologique ?",
    r: (
      <>
        Tout dépend de quel aluminium on parle. L&apos;aluminium primaire, produit par électrolyse de la bauxite, est
        l&apos;un des matériaux les plus gourmands en énergie qui soient. L&apos;aluminium recyclé, lui, n&apos;est
        qu&apos;une refonte de métal déjà produit : il ne demande qu&apos;une fraction de cette énergie. Un profilé
        n&apos;est donc pas écologique ou non par nature, mais selon la part de matière recyclée qu&apos;il contient,
        l&apos;origine de son alliage et surtout la durée pendant laquelle l&apos;ouvrage restera en place sans être
        remplacé.
      </>
    ),
  },
  {
    q: 'Quelle différence entre aluminium primaire et aluminium recyclé ?',
    r: (
      <>
        L&apos;aluminium primaire part du minerai : bauxite, alumine, puis électrolyse, une étape qui consomme
        énormément d&apos;électricité. L&apos;aluminium recyclé part de métal existant — chutes de production ou
        menuiseries déposées — qu&apos;on refond pour couler de nouvelles billettes, avant filage des profilés.
        Chimiquement, le métal obtenu est le même et conserve ses propriétés mécaniques. La différence se joue sur
        l&apos;énergie de fabrication et sur la traçabilité de la matière première.
      </>
    ),
  },
  {
    q: "L'aluminium se recycle-t-il vraiment en boucle ?",
    r: (
      <>
        Oui, à condition que la matière soit collectée et triée par famille d&apos;alliages. L&apos;aluminium ne perd
        pas ses qualités à la refonte, ce qui permet en théorie un recyclage sans fin. La limite n&apos;est pas
        technique mais logistique : il faut que la dépose parte en filière plutôt qu&apos;en benne tout-venant, et que
        le métal soit refondu près de là où il est collecté. C&apos;est précisément le chaînon que la filière française
        cherche à consolider.
      </>
    ),
  },
  {
    q: 'Bois ou aluminium : lequel a le meilleur bilan environnemental ?',
    r: (
      <>
        Le bois garde l&apos;avantage à la fabrication : c&apos;est une matière renouvelable, peu transformée, qui
        stocke du carbone pendant toute sa vie en œuvre, et qui peut venir de quelques dizaines de kilomètres en
        Gironde. L&apos;aluminium rattrape sur la durée : très longue durée de vie, aucun entretien consommant produits
        et eau, recyclabilité en boucle et valeur marchande à la dépose. Le pire bilan, dans les deux matières, reste
        celui d&apos;un ouvrage mal conçu qu&apos;il faut refaire au bout de dix ans.
      </>
    ),
  },
  {
    q: 'Comment savoir si mes profilés contiennent de l’aluminium recyclé ?',
    r: (
      <>
        En le demandant par écrit à votre installateur, et en demandant l&apos;origine de ce recyclé : des chutes
        internes de production ne valent pas de l&apos;aluminium issu de menuiseries réellement déposées. Demandez
        aussi le nom du gammiste, le lieu de filage et de thermolaquage, et l&apos;existence d&apos;une démarche ou
        d&apos;un label sur la gamme proposée. Un pourcentage annoncé sans traçabilité derrière ne vaut pas grand-chose.
      </>
    ),
  },
  {
    q: 'Que devient mon ancienne pergola ou véranda aluminium à la dépose ?',
    r: (
      <>
        Elle doit être déposée séparément du reste des gravats : profilés d&apos;un côté, vitrages, joints et visserie
        de l&apos;autre. L&apos;aluminium a une valeur marchande, il repart donc en filière plutôt qu&apos;en
        enfouissement dès lors qu&apos;il est trié. Posez la question de la reprise avant la signature du devis :
        c&apos;est un point que peu de clients pensent à demander et qui distingue nettement les entreprises.
      </>
    ),
  },
];

export default function ArticleAluminiumEcologiquePage() {
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
              alt="Pergola aluminium thermolaqué anthracite avec store zip, posée au-dessus d'une terrasse en bois en Gironde"
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
              <span className="text-secondary-fixed">Aluminium et écologie</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Aluminium et environnement
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              L&apos;aluminium est-il écologique ? Recyclage, bas carbone et ce que ça change face au bois en 2026
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/70 font-label-md text-label-md">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">person</span>
                <a
                  href="/qui-sommes-nous#david-bertrand"
                  className="underline underline-offset-4 decoration-white/30 hover:decoration-secondary hover:text-white transition-colors"
                >
                  David Bertrand
                </a>
                , L&apos;Esprit Bois
              </span>
              <span className="text-secondary">·</span>
              <span>11 août 2026</span>
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
                L&apos;aluminium neuf coûte cher en énergie, l&apos;aluminium recyclé beaucoup moins — et c&apos;est
                précisément là que la filière française bascule en 2026.
              </strong>{' '}
              Mais cela ne fait pas de l&apos;aluminium l&apos;égal du bois sur le carbone, et nous ne vous raconterons
              pas le contraire. Le bon réflexe n&apos;est pas de choisir une matière pour son étiquette : c&apos;est de
              la choisir là où elle dure le plus longtemps sans être remplacée. Nous vendons et posons les deux,
              l&apos;atelier bois et l&apos;aluminium, à Libourne et dans toute la Gironde : nous n&apos;avons aucun
              intérêt à défendre l&apos;une contre l&apos;autre, et c&apos;est justement ce qui rend cette comparaison
              possible.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. La réponse en une minute */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                La réponse en une minute : ce que l&apos;aluminium coûte à produire, ce qu&apos;il rend en recyclage
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est la question qu&apos;on nous pose vraiment en magasin, souvent à voix basse, après avoir
                choisi une pergola : «{' '}
                <em>au fond, l&apos;alu, ce n&apos;est pas très écologique, si ?</em> ». La réponse honnête tient en
                deux temps. Oui, produire de l&apos;aluminium à partir du minerai est lourd : il faut extraire la
                bauxite, en tirer de l&apos;alumine, puis séparer le métal par électrolyse — une étape qui consomme
                énormément d&apos;électricité. C&apos;est un fait de procédé, pas une opinion, et aucun fabricant
                sérieux ne le nie.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Mais l&apos;autre moitié de l&apos;histoire est tout aussi vraie :{' '}
                <strong className="text-primary font-semibold">
                  refondre de l&apos;aluminium déjà produit ne demande qu&apos;une fraction de l&apos;énergie
                  nécessaire à l&apos;électrolyse de la bauxite
                </strong>
                , et le métal obtenu conserve ses propriétés. Autrement dit, l&apos;effort énergétique est concentré
                une fois, à la première production ; ensuite, la même matière peut resservir indéfiniment. Un profilé
                de pergola posé aujourd&apos;hui n&apos;est pas un déchet en devenir : c&apos;est un stock de métal
                immobilisé pour trente ou quarante ans, qui repartira en fonderie ensuite.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Cette lecture-là n&apos;est plus seulement militante : elle est en train de devenir une lecture de
                marché. Avec la{' '}
                <a
                  href="https://www.ecologie.gouv.fr/politiques-publiques/reglementation-environnementale-re2020"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  réglementation environnementale RE2020
                </a>
                , l&apos;analyse du cycle de vie des matériaux entre dans le calcul de la construction neuve, et le
                sujet du carbone des matériaux est monté d&apos;un cran dans toute la filière bâtiment. Ce qui se joue
                sur les maisons neuves finit toujours par redescendre sur les ouvrages extérieurs que nous posons.
              </p>
            </section>

            {/* 2. Primaire vs recyclé */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Aluminium primaire et aluminium recyclé : deux matériaux très différents
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Parler de « l&apos;aluminium » au singulier est la première erreur du débat. Derrière un même profilé
                thermolaqué, il y a deux chaînes de production très éloignées l&apos;une de l&apos;autre.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['L’aluminium primaire', 'bauxite extraite, transformée en alumine, puis électrolysée pour obtenir le métal, coulé en billettes. L’étape d’électrolyse est la plus consommatrice, et le mix électrique du pays de production pèse énormément sur le résultat final : le même alliage n’a pas le même bilan selon l’endroit où il est né.'],
                  ['L’aluminium recyclé', 'du métal déjà existant — chutes d’usinage, profilés de dépose, menuiseries déposées — trié par famille d’alliages, refondu, coulé en nouvelles billettes, puis filé pour donner des profilés neufs. Aucune perte de qualité mécanique à l’arrivée.'],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une nuance capitale, que les plaquettes commerciales entretiennent volontiers dans le flou : tous les
                « pourcentages de recyclé » ne se valent pas. Refondre ses propres chutes d&apos;atelier, c&apos;est
                de la bonne gestion industrielle, mais ce métal n&apos;a jamais quitté l&apos;usine — il n&apos;a évité
                aucun enfouissement. Reprendre des menuiseries réellement déposées chez des particuliers, trier des
                profilés vieux de trente ans mêlés à leurs joints, leurs vitrages et leur visserie, c&apos;est un autre
                métier, bien plus difficile.{' '}
                <strong className="text-primary font-semibold">
                  C&apos;est cette seconde filière, dite post-consommation, qui fait réellement bouger le bilan
                </strong>{' '}
                — et c&apos;est justement celle qui manquait en France.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Dernier point technique, souvent ignoré : le recyclage de l&apos;aluminium exige un tri par alliage.
                Un profilé de structure, une lame orientable et un dormant de véranda n&apos;ont pas forcément la même
                composition, et mélanger les familles dégrade la qualité de la coulée. C&apos;est pour cela que la
                traçabilité compte autant que le pourcentage affiché : sans elle, la boucle se referme mal.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/construction-pool-house-aluminium-libourne-2.webp"
              w={1200}
              h={800}
              alt="Poteau et poutre en profilés aluminium thermolaqués anthracite sur une structure de pool-house"
              caption="Poteau, poutre, assemblage d’angle : un profilé filé reste en place trente ou quarante ans avant de repartir en fonderie."
            />

            {/* 3. Ce qui change en 2026 */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qui change en 2026 : la filière française de recyclage se structure
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Jusqu&apos;ici, le maillon faible n&apos;était pas la collecte, mais la destination du métal collecté.
                Le SNFA — le syndicat national de la construction des fenêtres, façades et activités associées —{' '}
                <a
                  href="https://bati.zepros.fr/actu-generale/snfa-organise-filiere-recyclage-menuiseries-aluminium-bas-carbone-ici-2030"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  annonce que 96 % des menuiseries aluminium en fin de vie sont déjà collectées
                </a>
                , mais qu&apos;une part significative de cette matière part à l&apos;étranger pour y être refondue.
                Ce n&apos;est donc pas le tri qui manque : c&apos;est la boucle fermée française.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est ce chaînon que la profession dit vouloir combler.{' '}
                <a
                  href="https://www.batiactu.com/edito/filiere-menuiserie-aluminium-veut-massifier-recyclage-73523.php"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Le syndicat vise une capacité de recyclage de 200 000 tonnes par an dès 2026
                </a>
                , avec pour objectif de recycler 100 % des menuiseries aluminium déposées d&apos;ici 2030. Deux
                fonderies portent cette montée en charge : Coralium, qui vise 40 000 tonnes de billettes bas carbone à
                horizon 2027, et Aluminium Group Solution, qui annonce 80 000 tonnes par an. Ce sont des objectifs
                affichés par la filière, pas des résultats acquis — nous les citons comme tels.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Trois leviers accompagnent le mouvement, et ils sont utiles à connaître quand on compare deux devis :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['L’éco-modulation AGEC', 'la contribution due au titre de la filière déchets du bâtiment est réduite pour les menuiseries contenant au moins 40 % d’aluminium recyclé. Autrement dit, incorporer du recyclé devient un avantage économique, pas seulement un argument de communication.'],
                  ['La démarche Alu+C−', 'portée avec le groupement des fabricants d’aluminium, elle demande au moins 30 % de recyclé pour les fenêtres, une traçabilité complète des profilés et le respect de seuils carbone. C’est la traçabilité qui fait sa valeur : elle interdit d’annoncer un taux sans pouvoir le démontrer.'],
                  ['Les labels fenêtrealu et façadealu', 'ils se dotent d’une nouvelle mention Environnement, une mention RSE étant annoncée pour juin 2026. Un repère de plus pour distinguer un gammiste engagé d’un simple revendeur.'],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ce que cela change pour vous, concrètement ? Il devient possible de{' '}
                <strong className="text-primary font-semibold">poser la question et d&apos;obtenir une réponse</strong>
                . Il y a cinq ans, demander la part de recyclé d&apos;un profilé de pergola n&apos;aboutissait
                généralement à rien. Aujourd&apos;hui, les gammistes savent répondre, ou révèlent en ne répondant pas
                qu&apos;ils n&apos;ont pas travaillé le sujet.
              </p>
            </section>

            <Figure
              src="/images/realisations/pergola-aluminium-toit-polycarbonate-libourne-6.webp"
              w={825}
              h={1100}
              alt="Détail des profilés aluminium thermolaqués anthracite d’une pergola vue de dessous, en Gironde"
              caption="Teinte RAL, lieu de filage, lieu de thermolaquage : trois questions qui se posent avant la signature, pas après."
            />

            {/* 4. Bois ou aluminium */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Bois ou aluminium : sur quoi se joue vraiment la comparaison
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La comparaison ne se joue pas sur une seule ligne, mais sur quatre étapes de la vie de l&apos;ouvrage.
                Et à chaque étape, le vainqueur change. C&apos;est pour cela qu&apos;un match matière contre matière
                n&apos;a aucun sens.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Étape</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Bois</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Aluminium</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Ce que nous en retenons</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparatif.map((ligne, i) => (
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
                <strong className="text-primary font-semibold">
                  À la fabrication, le bois gagne, et il gagne largement.
                </strong>{' '}
                C&apos;est une matière renouvelable, peu transformée, qui stocke du carbone pendant toute sa vie en
                œuvre — un carport en douglas est littéralement un stock de carbone posé dans votre jardin. Et quand
                l&apos;essence pousse à quelques dizaines de kilomètres, comme le pin maritime ou le douglas de notre
                région, le transport pèse à peine. Nous détaillons cette filière courte dans notre article sur{' '}
                <a href="/blog/bois-local-pin-maritime-douglas-gironde" className={lienInterne}>
                  le bois local en Gironde
                </a>{' '}
                : aucun profilé, même bas carbone, ne rattrape un résineux scié à cinquante kilomètres du chantier.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">
                  Sur les trois autres étapes, l&apos;aluminium reprend l&apos;avantage.
                </strong>{' '}
                Il ne craint ni les insectes, ni l&apos;humidité permanente, ni les alternances de gel et de plein
                soleil ; un profilé correctement thermolaqué se lave à l&apos;eau savonneuse et ne demande rien
                d&apos;autre. Un ouvrage bois exposé, lui, réclame un saturateur régulier, parfois un dégrisage : ce
                sont des produits, de l&apos;eau et du temps, tous les deux ou trois ans, sur trente ans. Et en fin de
                vie, la dépose alu vaut de l&apos;argent — donc elle est triée, donc elle repart.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                D&apos;où notre conviction de terrain, qui vaut pour les deux matières :{' '}
                <strong className="text-primary font-semibold">
                  le pire bilan environnemental est toujours celui de l&apos;ouvrage qu&apos;on refait deux fois.
                </strong>{' '}
                Un carport bois posé sur des poteaux noyés dans le béton, une pergola alu sous-dimensionnée dont les
                lames vibrent au premier coup de vent : dans les deux cas, on démonte au bout de dix ans, et tout le
                débat carbone passe à la trappe. La conception et la pose pèsent plus lourd que le choix de matière.
              </p>
            </section>

            <Figure
              src="/images/realisations/pergola-aluminium-terrasse-bois-libourne-1.webp"
              w={1600}
              h={900}
              alt="Pergola en aluminium anthracite au-dessus d’une terrasse en bois, comparaison bois ou aluminium en aménagement extérieur"
              caption="Chantier de Saint-Pey-de-Castets : nous avons posé la pergola aluminium sur une terrasse bois déjà en place."
            />

            {/* 5. Notre position */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Notre position d&apos;artisan qui pose les deux : quand nous conseillons le bois, quand nous
                conseillons l&apos;aluminium
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Disons-le franchement, parce que c&apos;est rare :{' '}
                <strong className="text-primary font-semibold">
                  nous vendons et nous posons les deux matières
                </strong>
                . Notre chiffre d&apos;affaires ne dépend pas de la victoire de l&apos;une sur l&apos;autre, ce qui
                nous dispense d&apos;avoir un avis de commerçant sur la question. Voici donc, sans détour, comment nous
                arbitrons.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                <strong className="text-primary font-semibold">Nous conseillons le bois</strong> quand la structure est
                vue de près et vécue au quotidien, parce qu&apos;aucun matériau n&apos;égale sa chaleur ; quand
                l&apos;ouvrage doit s&apos;accorder à une maison en pierre ou à un jardin ; quand la géométrie est
                atypique et demande d&apos;adapter en atelier plutôt que de commander une trame ; quand la
                réparabilité compte, car on remplace une lame ou une panne sans toucher au reste ; et bien sûr quand
                l&apos;empreinte de fabrication est le premier critère du client. Carports, abris, bardages,
                terrasses, ossatures : c&apos;est le terrain naturel de nos{' '}
                <a href="/constructions-bois" className={lienInterne}>
                  constructions bois
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">Nous conseillons l&apos;aluminium</strong> quand
                l&apos;ouvrage doit franchir une grande portée sans multiplier les poteaux ; quand il embarque des
                fonctions mécaniques — lames orientables, motorisation, capteurs de vent et de pluie — que le bois ne
                sait pas porter ; quand l&apos;étanchéité et l&apos;évacuation des eaux doivent être intégrées à la
                structure elle-même ; quand l&apos;exposition est sévère (bord de piscine, plein sud, projections
                permanentes) ; et quand le client nous dit clairement qu&apos;il ne veut plus rien entretenir. Une{' '}
                <a href="/pergolas" className={lienInterne}>
                  pergola bioclimatique en aluminium
                </a>{' '}
                n&apos;a tout simplement pas d&apos;équivalent en bois.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nous avons déjà tranché ce type d&apos;arbitrage ouvrage par ouvrage : notre{' '}
                <a href="/blog/carport-aluminium-ou-bois-comparatif" className={lienInterne}>
                  comparatif carport aluminium ou bois
                </a>{' '}
                et notre guide{' '}
                <a href="/blog/garde-corps-terrasse-aluminium-ou-bois" className={lienInterne}>
                  garde-corps aluminium ou bois
                </a>{' '}
                donnent les critères de décision détaillés, sans détour par le débat environnemental.
              </p>
            </section>

            {/* 6. Ce que vous pouvez demander */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce que vous pouvez demander à votre installateur
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Si le sujet vous tient à cœur, il ne se règle pas en choisissant une matière : il se règle en posant
                quatre questions précises, avant la signature. Elles ne coûtent rien et elles trient très vite les
                interlocuteurs.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Quelle part d’aluminium recyclé, et de quelle origine ?', 'un pourcentage seul ne veut rien dire. Demandez si le recyclé vient de chutes internes de production ou de menuiseries réellement déposées : ce n’est pas le même effort ni le même effet.'],
                  ['Quel gammiste, et où sont faits le filage et le thermolaquage ?', 'l’origine du métal et le lieu de transformation pèsent lourd. Un profilé filé et laqué en France ou en Europe proche n’a pas le même parcours qu’un profilé venu de l’autre bout du monde.'],
                  ['La gamme relève-t-elle d’une démarche ou d’un label ?', 'Alu+C−, fenêtrealu, façadealu : ces repères existent et sont vérifiables. Ils n’ont pas tous la même portée, mais ils prouvent au moins que la question a été travaillée en amont.'],
                  ['Que devient la dépose de l’ancien ouvrage ?', 'c’est la question que personne ne pose. Les profilés partent-ils triés en filière, séparés des vitrages et des joints, ou finissent-ils en benne tout-venant ? La réponse en dit long sur l’entreprise.'],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Un mot d&apos;honnêteté pour finir : beaucoup d&apos;installateurs ne savent pas encore répondre à ces
                quatre questions, et nous-mêmes remontons certaines réponses auprès de nos fournisseurs plutôt que de
                les improviser. Ce n&apos;est pas grave — ce qui compte, c&apos;est qu&apos;on vous dise «{' '}
                <em>je vérifie et je vous rappelle</em> » plutôt qu&apos;un « oui, c&apos;est recyclable » qui ne vous
                engage sur rien. Côté bois, la question miroir est tout aussi simple : quelle essence, et poussée où ?
              </p>
            </section>

            <Figure
              src="/images/blog/aluminium-ecologique-recyclage-bas-carbone/chutes-profiles-metal-recyclage-aluminium.jpg"
              w={1200}
              h={800}
              alt="Chutes de profilés métalliques amassées avant refonte, illustration du recyclage de l’aluminium"
              caption="Photo d’illustration : trié par famille d’alliages, ce métal repart en fonderie ; mélangé au tout-venant, il est perdu."
            />

            {/* 7. En Gironde */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                En Gironde : le bon arbitrage selon l&apos;ouvrage
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Autour de Libourne, notre climat tranche une partie du débat tout seul : étés chauds et secs, hivers
                doux et humides, vallée de la Dordogne où l&apos;humidité stagne le matin, et des maisons de pierre
                blonde couvertes de tuile canal qui imposent leurs teintes. Voilà comment cela se traduit,
                ouvrage par ouvrage, sur nos chantiers girondins.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Pergola', 'si vous voulez piloter l’ombre — lames orientables, motorisation, évacuation des eaux intégrée —, c’est l’aluminium, sans hésiter. Si vous cherchez une structure chaleureuse sous laquelle faire courir une vigne ou une glycine, le bois reste imbattable et beaucoup plus sobre à fabriquer.'],
                  ['Carport', 'le bois gagne dans la grande majorité des cas : l’ouvrage est ouvert, ventilé, peu exposé aux projections, et son intégration à une maison girondine est bien meilleure. Nous basculons sur l’aluminium quand la portée est longue, le toit plat, ou quand l’abri doit s’aligner sur des menuiseries déjà thermolaquées.'],
                  ['Garde-corps', 'l’aluminium l’emporte presque toujours : c’est un ouvrage de sécurité, très exposé, sur lequel un entretien oublié n’est pas une option esthétique mais un risque. Sa finesse de profilés préserve aussi la vue, ce qu’une lisse bois ne fait pas.'],
                  ['Véranda et extension', 'une véranda largement vitrée appelle l’aluminium et sa rupture de pont thermique ; une extension qui doit devenir une vraie pièce de la maison, habitée toute l’année, appelle plutôt une ossature bois. Ce sont deux programmes différents, pas deux prix différents pour le même objet.'],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un dernier conseil très concret : quand vous mélangez les deux matières sur une même maison — et
                c&apos;est le cas de beaucoup de nos chantiers, terrasse bois plus pergola alu —, l&apos;accord des
                teintes fait tout. Une teinte RAL bien choisie fait dialoguer le métal avec le bois grisé et la pierre ;
                mal choisie, elle donne l&apos;impression de deux chantiers étrangers l&apos;un à l&apos;autre. Notre
                guide sur{' '}
                <a href="/blog/choisir-teinte-ral-aluminium" className={lienInterne}>
                  le choix de la teinte RAL en aluminium
                </a>{' '}
                détaille les finitions mates, satinées et sablées qui vieillissent le mieux sous notre lumière.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Vous verrez dans{' '}
                <a href="/realisations" className={lienInterne}>
                  nos réalisations en Gironde
                </a>{' '}
                que les deux matières s&apos;y croisent constamment, souvent sur le même chantier. Ce n&apos;est pas
                une hésitation de notre part : c&apos;est le résultat d&apos;un arbitrage fait pièce par pièce,
                exposition par exposition.
              </p>
            </section>

            <Figure
              src="/images/realisations/pergola-aluminium-terrasse-bois-libourne-5.webp"
              w={825}
              h={1100}
              alt="Pergola aluminium à toiture polycarbonate posée au-dessus d’une terrasse en bois, réalisation en Gironde"
              caption="Terrasse bois et structure aluminium sur la même maison, à Saint-Pey-de-Castets : chaque matière à la place où elle dure."
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
              Aluminium, recyclage et environnement : vos questions
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
                    <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
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
              La bonne matière, c&apos;est celle qu&apos;on ne refera pas
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              L&apos;aluminium recyclé change réellement la donne, et la filière française se structure pour cela dès
              2026 — sans pour autant effacer l&apos;avantage du bois à la fabrication. Le vrai geste écologique reste
              le même dans les deux cas : un ouvrage bien conçu, bien posé, qui tiendra trente ans sans être remplacé.
              C&apos;est l&apos;arbitrage que nous menons avec vous chez L&apos;Esprit Bois, entreprise certifiée
              Qualibat, à Libourne et dans toute la Gironde — bois ou aluminium, selon ce que votre projet demande
              vraiment.
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
