import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/blog/bois-local-pin-maritime-douglas-gironde/foret-pins-maritimes-bois-local-gironde.jpg';

export const metadata: Metadata = buildMetadata({
  title: "Bois local en Gironde : pin, douglas, châtaignier",
  description:
    "Ce que valent vraiment les essences de Nouvelle-Aquitaine en extérieur : durabilité, usages, limites.",
  keywords:
    "bois local Gironde, pin maritime des Landes, douglas Nouvelle-Aquitaine, filière bois locale Libourne, label Bois de France, essence bois locale terrasse Gironde, bois français construction, châtaignier bardage, CTB B+, classe d'emploi bois",
  path: '/blog/bois-local-pin-maritime-douglas-gironde',
  ogImage: COVER,
  ogTitle: 'Bois local en Gironde : pin maritime, douglas et châtaignier',
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
        name: 'Bois local en Gironde',
        item: 'https://lesprit-bois.fr/blog/bois-local-pin-maritime-douglas-gironde',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      'Bois local en Gironde : pin maritime, douglas et châtaignier, que vaut vraiment la filière Nouvelle-Aquitaine ?',
    description:
      "Pin maritime des Landes de Gascogne, douglas de la partie limousine, chêne et châtaignier : ce que recouvre vraiment le bois local en Gironde, comment vérifier l'origine du bois qu'on vous livre (label Bois de France, CTB B+, classes d'emploi) et quand une autre essence reste le bon choix.",
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
    datePublished: '2026-07-29',
    dateModified: '2026-07-29',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/bois-local-pin-maritime-douglas-gironde',
    },
    about: ['bois local', 'pin maritime', 'douglas', 'châtaignier', 'filière bois Nouvelle-Aquitaine'],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quel est le bois vraiment local en Gironde ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "C'est d'abord le pin maritime : le massif des Landes de Gascogne, environ 974 000 hectares plantés à plus de 80 % en pin maritime, commence à quelques dizaines de kilomètres au sud-ouest de Libourne. Viennent ensuite le douglas, dont l'essentiel de la ressource régionale se trouve dans la partie limousine de la Nouvelle-Aquitaine, puis les feuillus régionaux, chêne et châtaignier, dont la région est la première ressource de France.",
        },
      },
      {
        '@type': 'Question',
        name: 'Le bois local est-il moins cher que le bois importé ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Pas automatiquement. Le pin maritime traité reste l'option la plus économique de notre gamme, mais le douglas se situe au-dessus, et le châtaignier en sciage soigné peut coûter cher, notamment parce que les grandes sections sont plus rares. Le vrai avantage du local se joue plutôt sur les délais d'approvisionnement, la disponibilité des sections et la traçabilité que sur le prix affiché.",
        },
      },
      {
        '@type': 'Question',
        name: 'Les labels PEFC et FSC garantissent-ils que le bois est français ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non, et c'est la confusion la plus fréquente. PEFC et FSC certifient la gestion durable de la forêt d'origine, pas sa localisation géographique : un bois certifié PEFC peut venir de très loin. Pour une garantie d'origine française, c'est le label Bois de France, lancé en janvier 2020 par la Fédération Nationale du Bois, qui trace la provenance de la forêt au produit fini.",
        },
      },
      {
        '@type': 'Question',
        name: 'Le pin maritime traité autoclave convient-il pour une terrasse ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, à condition d'exiger un traitement sérieux. Le pin maritime a une durabilité naturelle faible mais il est très imprégnable : traité en autoclave, il peut atteindre la classe d'emploi 4, celle du contact avec le sol ou l'eau douce. Demandez la mention CTB B+ sur le devis et sur les documents de livraison : le sigle CTB seul ne suffit pas à qualifier le traitement.",
        },
      },
      {
        '@type': 'Question',
        name: 'Douglas ou châtaignier pour un bardage en Gironde ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le douglas est le choix le plus courant : son duramen est naturellement durable en classe d'emploi 3, hors contact du sol, à condition de purger l'aubier, et il se trouve facilement en longueurs de bardage. Le châtaignier est naturellement durable lui aussi et très beau en façade, mais sa disponibilité et ses sections sont plus contraintes et son prix plus élevé. Le châtaignier reste imbattable sur les piquets et les clôtures.",
        },
      },
      {
        '@type': 'Question',
        name: 'Comment vérifier l’origine du bois sur un devis ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un devis honnête mentionne quatre choses : l'essence précise, la classe d'emploi visée, le traitement éventuel avec sa certification, et la provenance du bois ou de la scierie. Vous pouvez demander à votre artisan le nom du fournisseur, la scierie de transformation et, le cas échéant, la certification Bois de France. Un professionnel qui travaille réellement en filière locale répond sans difficulté à ces questions.",
        },
      },
    ],
  },
];

const essences = [
  [
    'Pin maritime',
    'Landes de Gascogne (Gironde, Landes)',
    'Durabilité naturelle faible mais très imprégnable : classe 4 possible en autoclave CTB B+',
    'Ossature, lambourdes, terrasse, clôture, abri',
    'Nervosité, nœuds apparents, traitement indispensable',
  ],
  [
    'Douglas',
    'Nouvelle-Aquitaine, surtout partie limousine',
    'Duramen naturellement durable, classe 3 hors contact du sol si l’aubier est purgé',
    'Charpente, bardage, pergola, structure apparente',
    'Aubier à purger, grisaillement rapide sans finition',
  ],
  [
    'Châtaignier',
    'Feuillus régionaux (1re ressource de France)',
    'Naturellement durable sans traitement chimique',
    'Piquets, clôture, bardage, mobilier extérieur',
    'Sections et disponibilité limitées, prix plus élevé, quincaillerie adaptée requise',
  ],
  [
    'Chêne',
    'Feuillus régionaux (1re ressource de France)',
    'Feuillu dense et durable, très stable une fois sec',
    'Poteaux, structures nobles, pièces exposées',
    'Coût élevé, mise en œuvre exigeante, poids',
  ],
];

const faq = [
  {
    q: 'Quel est le bois vraiment local en Gironde ?',
    r: (
      <>
        C&apos;est d&apos;abord le pin maritime : le massif des Landes de Gascogne, environ 974 000 hectares plantés à
        plus de 80 % en pin maritime, commence à quelques dizaines de kilomètres au sud-ouest de Libourne. Viennent
        ensuite le douglas, dont l&apos;essentiel de la ressource régionale se trouve dans la partie limousine de la
        Nouvelle-Aquitaine, puis les feuillus régionaux, chêne et châtaignier, dont la région est la première ressource
        de France.
      </>
    ),
  },
  {
    q: 'Le bois local est-il moins cher que le bois importé ?',
    r: (
      <>
        Pas automatiquement. Le pin maritime traité reste l&apos;option la plus économique de notre gamme, mais le
        douglas se situe au-dessus, et le châtaignier en sciage soigné peut coûter cher, notamment parce que les grandes
        sections sont plus rares. Le vrai avantage du local se joue plutôt sur les délais d&apos;approvisionnement, la
        disponibilité des sections et la traçabilité que sur le prix affiché.
      </>
    ),
  },
  {
    q: 'Les labels PEFC et FSC garantissent-ils que le bois est français ?',
    r: (
      <>
        Non, et c&apos;est la confusion la plus fréquente. PEFC et FSC certifient la{' '}
        <strong className="text-primary font-semibold">gestion durable</strong> de la forêt d&apos;origine, pas sa
        localisation géographique : un bois certifié PEFC peut venir de très loin. Pour une garantie d&apos;origine
        française, c&apos;est le label Bois de France, lancé en janvier 2020 par la Fédération Nationale du Bois, qui
        trace la provenance de la forêt au produit fini.
      </>
    ),
  },
  {
    q: 'Le pin maritime traité autoclave convient-il pour une terrasse ?',
    r: (
      <>
        Oui, à condition d&apos;exiger un traitement sérieux. Le pin maritime a une durabilité naturelle faible mais il
        est très imprégnable : traité en autoclave, il peut atteindre la classe d&apos;emploi 4, celle du contact avec le
        sol ou l&apos;eau douce. Demandez la mention{' '}
        <strong className="text-primary font-semibold">CTB B+</strong> sur le devis et sur les documents de livraison :
        le sigle « CTB » seul ne suffit pas à qualifier le traitement.
      </>
    ),
  },
  {
    q: 'Douglas ou châtaignier pour un bardage en Gironde ?',
    r: (
      <>
        Le douglas est le choix le plus courant : son duramen est naturellement durable en classe d&apos;emploi 3, hors
        contact du sol, à condition de purger l&apos;aubier, et il se trouve facilement en longueurs de bardage. Le
        châtaignier est naturellement durable lui aussi et très beau en façade, mais sa disponibilité et ses sections
        sont plus contraintes et son prix plus élevé. Le châtaignier reste imbattable sur les piquets et les clôtures.
      </>
    ),
  },
  {
    q: 'Comment vérifier l’origine du bois sur un devis ?',
    r: (
      <>
        Un devis honnête mentionne quatre choses : l&apos;essence précise, la classe d&apos;emploi visée, le traitement
        éventuel avec sa certification, et la provenance du bois ou de la scierie. Vous pouvez demander à votre artisan
        le nom du fournisseur, la scierie de transformation et, le cas échéant, la certification Bois de France. Un
        professionnel qui travaille réellement en filière locale répond sans difficulté à ces questions.
      </>
    ),
  },
];

export default function ArticleBoisLocalGirondePage() {
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
              alt="Futaie de pins maritimes aux fûts droits et à écorce rousse, essence de référence du bois local en Gironde"
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
              <span className="text-secondary-fixed">Bois local en Gironde</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Filière bois local
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Bois local en Gironde : pin maritime, douglas et châtaignier, que vaut vraiment la filière
              Nouvelle-Aquitaine ?
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
              <span>29 juillet 2026</span>
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
                En Gironde, le bois vraiment local, c&apos;est d&apos;abord le pin maritime : le massif des Landes de
                Gascogne commence à quelques dizaines de kilomètres de Libourne. Viennent ensuite le douglas, venu de la
                partie limousine de la Nouvelle-Aquitaine, et le châtaignier issu des feuillus régionaux. À elles trois,
                ces essences couvrent la grande majorité des ouvrages que nous construisons.
              </strong>{' '}
              Reste à dire les choses honnêtement : le bois local n&apos;est ni automatiquement moins cher, ni adapté à
              tout. Il existe des demandes d&apos;aspect ou de stabilité pour lesquelles nous allons chercher une autre
              essence, et nous le disons au client plutôt que de faire semblant. Voici ce que recouvre réellement la
              filière régionale, et comment vérifier ce qu&apos;on vous livre.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Vocabulaire */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Bois local, bois français, bois certifié : trois choses différentes
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Avant de parler essences, il faut démêler trois notions qu&apos;on nous mélange presque à chaque
                rendez-vous, parce que le marketing les emploie comme des synonymes. Elles ne le sont pas.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le bois local', 'c’est une question de rayon d’approvisionnement : une forêt et une scierie proches du chantier. Aucune définition réglementaire ne fixe ce rayon, chacun l’entend à sa façon — d’où l’importance de demander la provenance réelle plutôt que de se fier au mot.'],
                  ['Le bois français', 'c’est une question d’origine nationale : l’arbre a poussé en France et le produit y a été transformé. C’est ce que trace le label Bois de France, dont nous reparlons plus bas.'],
                  ['Le bois certifié PEFC ou FSC', 'c’est une question de gestion durable de la forêt d’origine : renouvellement de la ressource, respect des sols et de la biodiversité, conditions d’exploitation. Ce n’est pas une garantie d’origine géographique.'],
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
                Retenez surtout ceci :{' '}
                <strong className="text-primary font-semibold">
                  un bois certifié PEFC ou FSC peut parfaitement avoir traversé un océan.
                </strong>{' '}
                La certification dit comment la forêt est gérée, pas où elle se trouve. C&apos;est la confusion la plus
                fréquente, et elle explique une bonne part des malentendus entre clients et professionnels sur ce qu&apos;est
                un « bois responsable ».
              </p>
            </section>

            {/* 2. Nouvelle-Aquitaine */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                La Nouvelle-Aquitaine, première région forestière de France
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Quand on construit en bois en Gironde, on travaille dans la région la mieux dotée du pays. La
                Nouvelle-Aquitaine est la{' '}
                <strong className="text-primary font-semibold">première région forestière de France par la surface</strong>{' '}
                : environ 2,94 millions d&apos;hectares de forêt, soit près de 35 % du territoire régional selon
                l&apos;inventaire forestier de l&apos;IGN. Autrement dit, un tiers de la région autour de nous est boisé.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Cette forêt n&apos;est pas uniforme. Les feuillus représentent environ 62 % de la surface forestière
                régionale, et la région est la première de France pour la ressource en chêne et en châtaignier. À
                l&apos;ouest s&apos;étend le massif cultivé des Landes de Gascogne ; à l&apos;est, la partie limousine
                concentre les résineux de montagne — douglas, sapins, épicéas, mélèzes — sur environ 262 000 hectares.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Concrètement, pour un chantier à Libourne, cette proximité change trois choses :{' '}
                <strong className="text-primary font-semibold">les délais</strong> (un complément de commande se règle en
                jours, pas en semaines de transit),{' '}
                <strong className="text-primary font-semibold">la disponibilité des sections</strong> (on peut faire
                scier une pièce hors standard sans bloquer un chantier) et{' '}
                <strong className="text-primary font-semibold">la relation avec les scieries régionales</strong>, qui
                permet de savoir d&apos;où vient le lot qu&apos;on pose. Sur le plan environnemental, l&apos;équation est
                simple : le bois stocke du carbone pendant toute sa vie en œuvre (un atout que valorise la{' '}
                <a
                  href="https://www.ecologie.gouv.fr/politiques-publiques/reglementation-environnementale-re2020"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  réglementation environnementale RE2020
                </a>
                ), et un approvisionnement court réduit la part transport du bilan.
              </p>
            </section>

            <Figure
              src="/images/blog/bois-local-pin-maritime-douglas-gironde/grumes-parc-scierie-filiere-bois-locale.jpg"
              alt="Grumes de résineux empilées et arrosées dans un parc à scierie, étape de transformation de la filière bois locale"
              caption="Les grumes sont arrosées en continu dans le parc à scierie : cette aspersion évite fentes et échauffures avant le sciage. C&apos;est aussi ce stock tampon qui explique les délais courts d&apos;un approvisionnement régional."
            />

            {/* 3. Pin maritime */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le pin maritime : l&apos;essence girondine par excellence
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le massif des Landes de Gascogne couvre environ 974 000 hectares — près d&apos;un million — et
                c&apos;est la plus grande forêt cultivée d&apos;Europe occidentale, plantée à plus de 80 % en{' '}
                <strong className="text-primary font-semibold">pin maritime</strong>. C&apos;est le bois d&apos;ici, au
                sens le plus littéral : le massif commence à quelques dizaines de kilomètres au sud-ouest de nos
                chantiers libournais.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Sa particularité technique mérite d&apos;être comprise, parce qu&apos;elle est souvent mal expliquée. Le
                pin maritime a une{' '}
                <strong className="text-primary font-semibold">durabilité naturelle faible</strong> : brut, il ne tient
                pas dehors. Mais il est{' '}
                <strong className="text-primary font-semibold">très imprégnable</strong>, c&apos;est-à-dire que le
                produit de traitement pénètre profondément dans le bois au lieu de rester en surface. Traité en
                autoclave, il atteint donc la{' '}
                <a href="https://www.fcba.fr/" className={lienInterne} target="_blank" rel="noopener noreferrer">
                  classe d&apos;emploi 4
                </a>
                , celle du contact avec le sol ou l&apos;eau douce.
                Un pin maritime correctement traité est un bois d&apos;extérieur sérieux, pas un pis-aller.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le mot important est « correctement ». Nous exigeons la mention{' '}
                <strong className="text-primary font-semibold">CTB B+</strong> sur nos approvisionnements : c&apos;est
                elle qui atteste d&apos;un traitement contrôlé et de la classe d&apos;emploi réellement obtenue. Le sigle
                « CTB » employé seul, sans le « B+ », ne suffit pas — et il circule beaucoup dans les argumentaires de
                vente. C&apos;est la première chose à faire préciser sur un devis.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Usages où il excelle : ossature, lambourdes, lames de terrasse, clôture, structure d&apos;abri. Ses
                limites, il faut aussi les dire : c&apos;est un bois nerveux, qui travaille, avec des nœuds visibles et
                un aspect moins « propre » qu&apos;un résineux de montagne. Sur une terrasse, le choix de l&apos;essence
                se joue autant sur ce rendu que sur la technique — nous l&apos;avons détaillé dans notre guide sur{' '}
                <a href="/blog/quel-bois-pour-terrasse-exterieure" className={lienInterne}>
                  quel bois choisir pour une terrasse extérieure
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/terrasse-bois-plots-gironde-3.webp"
              alt="Lames de terrasse en pin maritime traité autoclave, nœuds et fil apparents, chantier L&apos;Esprit Bois en Gironde"
              caption="Nœuds marqués et fil vif : c&apos;est la signature du pin maritime, et non un défaut de qualité. Sur ce type de platelage, seule la mention CTB B+ atteste que la classe d&apos;emploi annoncée est bien atteinte."
            />

            {/* 4. Douglas */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le douglas : charpente et bardage sans traitement chimique
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le douglas est l&apos;autre pilier de notre atelier, et il répond à une demande précise :{' '}
                <strong className="text-primary font-semibold">
                  un bois d&apos;extérieur qui tienne sans traitement chimique.
                </strong>{' '}
                Son duramen — le cœur rouge du bois — est naturellement durable et convient à la classe d&apos;emploi 3,
                celle des ouvrages exposés aux intempéries mais{' '}
                <strong className="text-primary font-semibold">hors contact du sol</strong>. Une condition, non
                négociable : purger l&apos;aubier, cette couche périphérique claire qui, elle, n&apos;est pas durable.
                Une lame de bardage douglas avec de l&apos;aubier oublié, c&apos;est le point de départ d&apos;une
                dégradation.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Côté ressource, il faut être précis pour rester honnête : le douglas n&apos;est pas girondin. La
                Nouvelle-Aquitaine en dispose largement, mais l&apos;essentiel du gisement régional se trouve dans la{' '}
                <strong className="text-primary font-semibold">partie limousine</strong>, issue des grandes plantations
                du Fonds forestier national menées entre 1950 et 1980. C&apos;est donc un bois régional plutôt que local
                au sens strict — nuance que nous préférons énoncer plutôt que de laisser croire que tout pousse à côté de
                Libourne.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nous l&apos;employons en charpente, en structure apparente, en bardage et en{' '}
                <a href="/pergolas" className={lienInterne}>
                  pergola bois
                </a>
                . Son rapport durabilité-prix est excellent : il se situe au-dessus du pin traité, mais nettement en
                dessous d&apos;un red cedar importé. Sur la mise en œuvre en façade, ventilation et sens de pose
                comprises, notre guide du{' '}
                <a href="/blog/bardage-bois-facade-essences-pose" className={lienInterne}>
                  bardage bois en façade
                </a>{' '}
                détaille les points techniques que nous ne reprenons pas ici.
              </p>
            </section>

            {/* 5. Feuillus */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Chêne et châtaignier : les feuillus qu&apos;on oublie
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                On parle beaucoup de résineux, et on passe à côté de la moitié de la forêt : les feuillus représentent
                environ 62 % de la surface forestière régionale, et la Nouvelle-Aquitaine est la{' '}
                <strong className="text-primary font-semibold">
                  première région française pour la ressource en chêne et en châtaignier
                </strong>
                . C&apos;est une richesse largement sous-employée dans l&apos;aménagement extérieur contemporain.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le <strong className="text-primary font-semibold">châtaignier</strong> est naturellement durable, sans
                aucun traitement. Ce n&apos;est pas une découverte : la campagne girondine est pleine de piquets de
                châtaignier plantés il y a des décennies et toujours debout. Il fait aussi un bardage magnifique, qui
                prend une patine chaude, et des clôtures pleines de caractère — un usage que nous évoquons dans notre
                guide{' '}
                <a href="/blog/cloture-brise-vue-bois-guide" className={lienInterne}>
                  clôture et brise-vue en bois
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ses limites sont réelles, et nous les annonçons avant de proposer : les grandes sections et les grandes
                longueurs sont plus difficiles à trouver, la disponibilité dépend des lots, et le prix est supérieur à
                celui d&apos;un résineux régional. Le châtaignier est par ailleurs riche en tanin, ce qui impose de
                choisir une quincaillerie adaptée — de l&apos;inox de qualité — sous peine de coulures et de réactions
                disgracieuses sur la façade. Rien d&apos;insurmontable, mais ça se prévoit dès le devis.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Le <strong className="text-primary font-semibold">chêne</strong>, lui, reste le feuillu noble par
                excellence : dense, durable, très stable une fois sec. Nous le réservons aux pièces qui le méritent —
                poteaux, structures apparentes, ouvrages destinés à traverser les générations — car son coût et sa mise
                en œuvre sont exigeants.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Essence</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Origine</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Durabilité</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Usages</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Vigilance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {essences.map((ligne, i) => (
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
            </section>

            <Figure
              src="/images/blog/bois-local-pin-maritime-douglas-gironde/cloture-chataignier-feuillu-patine-naturelle.jpg"
              alt="Clôture rurale en bois de châtaignier fendu, patine grise argentée d&apos;un feuillu naturellement durable laissé sans traitement"
              caption="Un feuillu naturellement durable comme le châtaignier n&apos;a besoin d&apos;aucun produit pour tenir dehors : il vire simplement à l&apos;argenté en quelques saisons. Le gris n&apos;est pas une usure, c&apos;est de la surface."
            />

            {/* 6. Vérifier l'origine */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Comment vérifier réellement l&apos;origine du bois qu&apos;on vous livre
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Dire « c&apos;est du bois local » ne coûte rien. Le vérifier, si. Depuis janvier 2020, la Fédération
                Nationale du Bois porte le label{' '}
                <strong className="text-primary font-semibold">Bois de France</strong>, aujourd&apos;hui le seul label
                national qui garantisse la traçabilité de l&apos;origine française du bois, de la forêt au produit fini.
                Son référentiel est structuré en trois niveaux progressifs, avec une part de bois issu de forêts
                françaises généralement supérieure ou égale à 80 % et une transformation réalisée en France. Près de 300
                entreprises y adhèrent aujourd&apos;hui.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                À défaut de label, quatre questions suffisent à savoir à qui vous avez affaire. Aucune n&apos;est
                agressive, et tout professionnel qui travaille vraiment en filière courte y répond en trente secondes :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'De quelle essence précise s’agit-il, et non pas seulement « du bois traité » ou « du résineux » ?',
                  'Quelle classe d’emploi est visée pour cet usage (contact au sol, exposition, ventilation) ?',
                  'Le bois est-il traité, et si oui avec quelle certification — CTB B+ pour un autoclave ?',
                  'D’où vient le bois, et quelle scierie l’a transformé ?',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Un devis honnête porte ces informations noir sur blanc :{' '}
                <strong className="text-primary font-semibold">
                  essence, classe d&apos;emploi, traitement et certification, provenance.
                </strong>{' '}
                Un devis qui écrit seulement « fourniture et pose bois » vous empêche de comparer quoi que ce soit — y
                compris deux offres entre elles.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Magasin-materiaux-bois-libourne.webp"
              alt="Showroom bois de L&apos;Esprit Bois aux Billaux, près de Libourne : échantillons de lames, bardages et quincaillerie présentés aux clients"
              caption="C&apos;est ici que se joue la traçabilité : devant l&apos;échantillon, on nomme l&apos;essence, la scierie et le traitement. Ces quatre mentions reportées au devis sont ce qui rend deux offres réellement comparables."
            />

            {/* 7. Nos chantiers */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qu&apos;on utilise vraiment sur nos chantiers autour de Libourne
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Voici nos arbitrages, sans habillage. Sur la très grande majorité de nos chantiers en Gironde — Libourne,
                Saint-Émilion, Coutras, la rive droite et jusqu&apos;à la métropole bordelaise —{' '}
                <strong className="text-primary font-semibold">
                  le pin maritime traité et le douglas couvrent l&apos;essentiel du besoin
                </strong>
                . Le pin pour les ossatures, les lambourdes, les structures enterrées ou proches du sol, les clôtures et
                les terrasses au budget maîtrisé. Le douglas dès qu&apos;on veut du bois apparent qui vieillit bien sans
                traitement chimique : charpente, bardage, pergola, structure de carport.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le châtaignier, nous le proposons quand le projet s&apos;y prête vraiment : une clôture de propriété
                rurale, un bardage sur une maison ancienne, un ouvrage où la patine du feuillu apporte quelque chose que
                le résineux ne donnera pas. Nous ne l&apos;imposons jamais, parce que sa disponibilité et son prix ne le
                permettent pas sur tous les budgets.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Et il y a les cas où{' '}
                <strong className="text-primary font-semibold">nous proposons autre chose que du bois local</strong>.
                Quand un client cherche une stabilité dimensionnelle maximale sur un platelage très exposé, ou un aspect
                précis que le douglas ne donnera pas — une teinte, une régularité de fil, une absence de nœuds — un red
                cedar ou un bois exotique bien sourcé reste techniquement supérieur. Le dire clairement fait partie du
                travail : nous préférons expliquer l&apos;arbitrage et laisser le client décider en connaissance de
                cause plutôt que vendre du local qui décevra.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Vous verrez ces essences en situation dans{' '}
                <a href="/realisations" className={lienInterne}>
                  nos réalisations en Gironde
                </a>
                , et l&apos;usage que nous en faisons en structure sur nos{' '}
                <a href="/constructions-bois" className={lienInterne}>
                  constructions bois
                </a>{' '}
                comme sur nos{' '}
                <a href="/amenagement-exterieur" className={lienInterne}>
                  aménagements extérieurs
                </a>
                . Pour un projet d&apos;agrandissement, notre guide sur{' '}
                <a href="/blog/extension-ossature-bois-prix-m2" className={lienInterne}>
                  l&apos;extension en ossature bois
                </a>{' '}
                reprend la même logique côté budget.
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
              Bois local en Gironde : vos questions
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
              Le bon bois, au bon endroit, le plus près possible
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Travailler le bois local en Gironde n&apos;est pas un argument marketing : c&apos;est une ressource
              disponible à quelques dizaines de kilomètres de Libourne, avec de vraies qualités techniques et de vraies
              limites. Chez L&apos;Esprit Bois, entreprise certifiée Qualibat, nous choisissons l&apos;essence pour
              l&apos;usage, nous écrivons la provenance et la classe d&apos;emploi sur le devis, et nous disons quand une
              autre essence servira mieux votre projet.
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
