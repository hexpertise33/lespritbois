import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/blog/cloture-brise-vue-bois-guide/cloture-bois-claire-voie-ventilee-jardin.webp';

export const metadata: Metadata = buildMetadata({
  title: 'Claustra bois : masquer un vis-à-vis sans clôturer, en Gironde',
  description:
    "Un claustra ne borne aucune limite : il masque un axe de regard. Ajour, motif, ancrage, essences et budget, le guide d'un artisan à Libourne (Gironde).",
  keywords:
    'claustra bois, claustra jardin, brise-vue terrasse bois, cacher un local technique piscine, claustra bois Gironde, séparation de jardin Libourne, claustra lames verticales, panneau ajouré bois, claustra sur terrasse bois',
  path: '/blog/claustra-bois-separation-jardin',
  ogImage: COVER,
  ogTitle:
    "Claustra en bois : cacher un vis-à-vis, un local technique ou un coin de terrasse sans construire une clôture",
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
        name: 'Claustra en bois',
        item: 'https://lesprit-bois.fr/blog/claustra-bois-separation-jardin',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      "Claustra en bois : cacher un vis-à-vis, un local technique ou un coin de terrasse sans construire une clôture",
    description:
      "Un claustra n'est pas une clôture courte : posé à l'intérieur de la parcelle, il masque un axe de regard précis et obéit à des règles bien plus légères. Taux d'ajour et prise au vent, motifs de lames, ancrage au sol ou sur une terrasse existante, essences, vieillissement et budget, le guide d'un artisan à Libourne, en Gironde.",
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
        url: 'https://lesprit-bois.fr/icon-512.png',
        width: 512,
        height: 512,
      },
    },
    datePublished: '2026-08-23',
    dateModified: '2026-08-23',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/claustra-bois-separation-jardin',
    },
    about: [
      'claustra bois',
      'brise-vue de terrasse',
      'séparation de jardin',
      'local technique de piscine',
      'aménagement extérieur',
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quelle différence entre un claustra et une clôture ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La clôture borne une limite de propriété : elle court sur tout un linéaire, elle regarde le voisin et elle relève à ce titre du règlement d'urbanisme local et des règles de voisinage. Le claustra, lui, se pose à l'intérieur de la parcelle : il ne borne rien, il masque un point précis, un local technique, une fenêtre en vis-à-vis, un coin de terrasse. C'est un ouvrage de composition, généralement bien plus court, dont la longueur et la hauteur se décident au regard, pas au mètre linéaire de la limite.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faut-il une autorisation pour poser un claustra dans son jardin ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le régime est bien plus léger que celui d'une clôture posée en limite, mais il serait faux de dire qu'un claustra ne demande jamais rien. Tout dépend du plan local d'urbanisme de votre commune, de la hauteur de l'ouvrage et du secteur : en secteur protégé ou aux abords d'un monument, les règles changent complètement, et un lotissement peut ajouter son propre règlement. Le bon réflexe est un passage en mairie dès qu'on prend de la hauteur ou qu'on est en secteur sensible. Nous faisons cette vérification avant d'engager le chantier.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quel espacement entre les lames pour ne plus être vu ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Il n'existe aucune règle chiffrée, et méfiez-vous des pourcentages d'ajour présentés comme des normes. Ce qui décide, c'est l'angle : un jour plus étroit que la lame devient pratiquement opaque dès qu'on regarde de biais, alors qu'un jour égal à la lame laisse toujours passer le regard de face. Le bon réglage se fait donc sur place, en se plaçant là où l'on est vu, puis là d'où l'on regarde. Un jour trop fermé transforme en plus le panneau en voile qui prend le vent : l'ajour n'est pas seulement esthétique, il soulage la structure.",
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on poser un claustra sur une terrasse en bois existante ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, mais jamais en vissant les poteaux dans les lames. Une lame de terrasse n'est pas une pièce porteuse : elle ne reprend pas l'effort de bras de levier d'un panneau qui prend le vent, et elle finit par se déchirer autour des vis. Il faut descendre jusqu'à la structure (lambourdes, plots) ou créer un appui dédié sous le platelage, quitte à déposer quelques lames le temps du chantier. C'est le point que nous vérifions en premier quand un claustra doit s'implanter sur une terrasse déjà en place.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quel bois choisir pour un claustra, et faut-il le traiter ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Les mêmes essences que pour un bardage ou une clôture : douglas, mélèze, châtaignier, ou pin maritime local traité pour un budget contenu. La vraie précaution n'est pas dans l'essence mais dans la mise en œuvre, aucune pièce en contact avec le sol, une quincaillerie inox, et un traitement des deux faces avant la pose, car la face arrière d'un claustra plaqué contre un local technique devient inaccessible ensuite. Le grisaillement, lui, est esthétique et réversible : il n'enlève rien à la solidité.",
        },
      },
      {
        '@type': 'Question',
        name: "Un claustra devant un local technique de piscine gêne-t-il le fonctionnement du matériel ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Il le peut, et c'est l'erreur la plus fréquente sur ce type d'habillage. Une pompe, un filtre et surtout une pompe à chaleur ont besoin d'air : un caisson trop fermé fait monter la température et rejette l'air chaud sur l'aspiration. Un claustra ajouré, décollé du matériel et ouvert dans le sens du flux, masque sans étouffer. Deuxième point : l'accès. Le panneau doit s'ouvrir ou se déposer sans outillage, sinon chaque nettoyage de filtre devient une corvée. Les préconisations du fabricant du matériel priment toujours.",
        },
      },
    ],
  },
];

const motifs = [
  [
    'Lames verticales',
    'Occultent fortement dès qu’on regarde de biais, laissent filtrer de face ; le panneau paraît plus haut',
    'Devant un local technique, en retour de terrasse',
    'Le pied des lames doit rester franchement décollé du sol',
  ],
  [
    'Lames horizontales',
    'Rendu contemporain, le panneau paraît plus large et dessine des bandes de lumière',
    'En façade d’un coin salon, en prolongement d’un bardage existant',
    'Chaque lame offre une face qui retient l’eau : chanfrein ou légère pente',
  ],
  [
    'Tasseaux sur chant (claire-voie profonde)',
    'L’effet change avec l’angle : opaque quand on longe, ouvert quand on est pile en face',
    'Entre deux terrasses voisines, devant une fenêtre en vis-à-vis',
    'Tout se joue sur l’épaisseur du tasseau : à décider sur place, pas sur plan',
  ],
  [
    'Croisillons, tressage, persiennes',
    'Filtrent la lumière, apportent un motif, servent de support à une grimpante',
    'En fond de jardin, en habillage d’un mur ou d’un pignon aveugle',
    'Une grimpante entretient l’humidité : il faut la tenir décollée du bois',
  ],
  [
    'Panneau plein en partie basse',
    'Cache totalement ce qui est au sol et laisse l’air et la lumière passer au-dessus',
    'Poubelles, composteur, groupe extérieur, réserve de matériel',
    'La partie pleine prend le vent : ancrage à dimensionner en conséquence',
  ],
];

const faq = [
  {
    q: 'Quelle différence entre un claustra et une clôture ?',
    r: (
      <>
        La clôture borne une limite de propriété : elle court sur tout un linéaire, elle regarde le voisin et elle relève
        à ce titre du règlement d&apos;urbanisme local et des règles de voisinage, c&apos;est le sujet de notre{' '}
        <a href="/blog/cloture-brise-vue-bois-guide" className={lienInterne}>
          guide clôture et brise-vue en bois
        </a>
        . Le claustra, lui, se pose à l&apos;intérieur de la parcelle : il ne borne rien, il masque un point précis, un
        local technique, une fenêtre en vis-à-vis, un coin de terrasse. C&apos;est un ouvrage de composition,
        généralement bien plus court, dont la longueur et la hauteur se décident au regard, pas au mètre linéaire de la
        limite.
      </>
    ),
  },
  {
    q: 'Faut-il une autorisation pour poser un claustra dans son jardin ?',
    r: (
      <>
        Le régime est bien plus léger que celui d&apos;une clôture posée en limite, mais il serait faux de dire
        qu&apos;un claustra ne demande jamais rien. Tout dépend du plan local d&apos;urbanisme de votre commune, de la
        hauteur de l&apos;ouvrage et du secteur : en secteur protégé ou aux abords d&apos;un monument, les règles
        changent complètement, et un lotissement peut ajouter son propre règlement. Le bon réflexe est un passage en
        mairie dès qu&apos;on prend de la hauteur ou qu&apos;on est en secteur sensible, au besoin, une{' '}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F17578"
          className={lienInterne}
          target="_blank"
          rel="noopener noreferrer"
        >
          déclaration préalable de travaux
        </a>{' '}
        peut être demandée. Nous faisons cette vérification avant d&apos;engager le chantier.
      </>
    ),
  },
  {
    q: 'Quel espacement entre les lames pour ne plus être vu ?',
    r: (
      <>
        Il n&apos;existe aucune règle chiffrée, et méfiez-vous des pourcentages d&apos;ajour présentés comme des normes.
        Ce qui décide, c&apos;est l&apos;angle : un jour plus étroit que la lame devient pratiquement opaque dès
        qu&apos;on regarde de biais, alors qu&apos;un jour égal à la lame laisse toujours passer le regard de face. Le
        bon réglage se fait donc sur place, en se plaçant là où l&apos;on est vu, puis là d&apos;où l&apos;on regarde. Un
        jour trop fermé transforme en plus le panneau en voile qui prend le vent : l&apos;ajour n&apos;est pas seulement
        esthétique, il soulage la structure.
      </>
    ),
  },
  {
    q: 'Peut-on poser un claustra sur une terrasse en bois existante ?',
    r: (
      <>
        Oui, mais jamais en vissant les poteaux dans les lames. Une lame de terrasse n&apos;est pas une pièce porteuse :
        elle ne reprend pas l&apos;effort de bras de levier d&apos;un panneau qui prend le vent, et elle finit par se
        déchirer autour des vis. Il faut descendre jusqu&apos;à la structure, lambourdes, plots, comme nous
        l&apos;expliquons dans notre article sur{' '}
        <a href="/blog/terrasse-bois-structure-plots-lambourdes" className={lienInterne}>
          la structure d&apos;une terrasse bois
        </a>,{' '}
       ou créer un appui dédié sous le platelage, quitte à déposer quelques lames le temps du chantier. C&apos;est le
        point que nous vérifions en premier quand un claustra doit s&apos;implanter sur une terrasse déjà en place.
      </>
    ),
  },
  {
    q: 'Quel bois choisir pour un claustra, et faut-il le traiter ?',
    r: (
      <>
        Les mêmes essences que pour un bardage ou une clôture : douglas, mélèze, châtaignier, ou pin maritime local
        traité pour un budget contenu. La vraie précaution n&apos;est pas dans l&apos;essence mais dans la mise en œuvre,
       aucune pièce en contact avec le sol, une quincaillerie inox, et un traitement des deux faces avant la pose, car
        la face arrière d&apos;un claustra plaqué contre un local technique devient inaccessible ensuite. Le
        grisaillement, lui, est esthétique et réversible : il n&apos;enlève rien à la solidité.
      </>
    ),
  },
  {
    q: 'Un claustra devant un local technique de piscine gêne-t-il le fonctionnement du matériel ?',
    r: (
      <>
        Il le peut, et c&apos;est l&apos;erreur la plus fréquente sur ce type d&apos;habillage. Une pompe, un filtre et
        surtout une pompe à chaleur ont besoin d&apos;air : un caisson trop fermé fait monter la température et rejette
        l&apos;air chaud sur l&apos;aspiration. Un claustra ajouré, décollé du matériel et ouvert dans le sens du flux,
        masque sans étouffer. Deuxième point : l&apos;accès. Le panneau doit s&apos;ouvrir ou se déposer sans outillage,
        sinon chaque nettoyage de filtre devient une corvée. Les préconisations du fabricant du matériel priment
        toujours.
      </>
    ),
  },
];

export default function ArticleClaustraBoisPage() {
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
              height="1798"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Claustra en bois à lames verticales dressé devant un mur, jours réguliers entre les tasseaux"
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
              <span className="text-secondary-fixed">Claustra en bois</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Claustra bois
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Claustra en bois : cacher un vis-à-vis, un local technique ou un coin de terrasse sans construire une
              clôture
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/70 font-label-md text-label-md">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">person</span>
                <a
                  href="/qui-sommes-nous#david-bertrand"
                  className="underline underline-offset-4 decoration-white/30 hover:decoration-secondary hover:text-white transition-colors"
                >
                  David Bertrand
                </a>,
                L&apos;Esprit Bois
              </span>
              <span className="text-secondary">·</span>
              <span>23 août 2026</span>
              <span className="text-secondary">·</span>
              <span>8 min de lecture</span>
            </div>
          </div>
        </header>

        {/* Chapô answer-first */}
        <section className="py-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16">
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              <strong className="text-primary font-semibold">Un claustra n&apos;est pas une clôture courte.</strong> Il
              ne ferme pas une limite de propriété : il masque un point précis, un local technique, un vis-à-vis de
              fenêtre à fenêtre, un coin de terrasse. Et parce qu&apos;il ne borne rien, il obéit à des règles bien plus
              légères que celles d&apos;une clôture : c&apos;est ce qui en fait, dans nos jardins girondins, la solution
              la plus rapide à mettre en œuvre. Reste la vraie question, celle que presque personne ne pose avant de
              commander un panneau :{' '}
              <strong className="text-primary font-semibold">on ne masque pas une vue, on masque un axe de regard.</strong>{' '}
              Ce qui compte, ce n&apos;est pas la longueur du claustra, c&apos;est d&apos;où l&apos;on regarde et depuis
              où l&apos;on est vu, et à ce jeu-là, un claustra bien implanté est très souvent beaucoup plus court et
              plus bas qu&apos;on ne l&apos;imagine.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1, Claustra ou clôture */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Claustra ou clôture : ce qui change dès qu&apos;on ne borne plus une limite
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Les deux ouvrages se ressemblent (des poteaux, des lames, du bois) et pourtant ils ne relèvent pas du
                même métier ni des mêmes contraintes. Une clôture{' '}
                <strong className="text-primary font-semibold">borne</strong> : elle marque la limite entre deux
                propriétés, court sur tout un linéaire, et concerne le voisin autant que vous. Un claustra{' '}
                <strong className="text-primary font-semibold">compose</strong> : il se pose à l&apos;intérieur de votre
                parcelle, il ne délimite rien du tout, et il ne regarde que votre usage du jardin.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Cette différence a une conséquence directe.{' '}
                <strong className="text-primary font-semibold">
                  Tout le corpus de règles qui encadre une clôture (hauteurs autorisées, distances, rapports de
                  voisinage) s&apos;applique à la limite séparative
                </strong>,
                et nous l&apos;avons traité en détail dans notre guide{' '}
                <a href="/blog/cloture-brise-vue-bois-guide" className={lienInterne}>
                  clôture et brise-vue en bois
                </a>
                . Nous ne le refaisons pas ici : si votre projet est de fermer une limite, c&apos;est là qu&apos;il faut
                aller. Un claustra implanté à l&apos;intérieur de la parcelle n&apos;est pas soumis aux mêmes
                contraintes, et c&apos;est précisément ce qui le rend souple.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Souple ne veut pas dire libre de toute formalité, et nous préférons le dire franchement plutôt que de
                vous faire plaisir : tout dépend du plan local d&apos;urbanisme de votre commune, de la hauteur que
                prend l&apos;ouvrage et du secteur dans lequel vous vous trouvez. Un secteur protégé, les abords
                d&apos;un monument ou un lotissement doté de son propre règlement changent complètement la donne.{' '}
                <strong className="text-primary font-semibold">
                  Le régime est bien plus léger que celui d&apos;une clôture de limite, mais un passage en mairie reste
                  le bon réflexe dès qu&apos;on prend de la hauteur ou qu&apos;on est en secteur protégé
                </strong>,{' '}
               et selon la commune, une{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F17578"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  déclaration préalable de travaux
                </a>{' '}
                peut être demandée. C&apos;est une vérification que nous menons en amont, comme sur tous nos chantiers.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Sur le terrain, la vraie liberté du claustra est ailleurs : il ne se négocie avec personne. Pas de
                mitoyenneté, pas d&apos;alignement à respecter, pas de conversation délicate avec le voisin sur qui paie
                quoi. On l&apos;implante là où il sert, on l&apos;arrête là où il ne sert plus, et on peut le déplacer si
                le jardin évolue.
              </p>
            </section>

            <Figure
              src="/images/blog/claustra-bois-separation-jardin/claustra-bois-claire-voie-jours-angle-de-vue.jpg"
              w={1200}
              h={800}
              alt="Claustra en bois à claire-voie vu de biais, dont les jours se referment à mesure que le regard devient oblique"
              caption="Un seul et même panneau : à gauche, pris presque de face, il laisse passer le jardin ; à droite, dès que le regard devient oblique, le chant des lames l'a refermé. C'est l'angle qui masque, pas la largeur du jour."
            />

            {/* 2, Les trois usages */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Les trois usages qui reviennent : local technique, vis-à-vis, coin de terrasse
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                En une saison, les demandes de claustra que nous recevons se rangent presque toutes dans trois cases. Et
                chacune appelle un ouvrage différent, même essence, même savoir-faire, mais pas la même géométrie.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">Le local technique</strong> arrive en tête, piscine en
                première ligne : pompe, filtre, coffret électrique, pompe à chaleur, parfois une réserve de produits.
                C&apos;est le cas le plus simple à masquer et le plus facile à rater, parce qu&apos;on est tenté de
                fabriquer un coffre. Or ce matériel a besoin d&apos;air, et il a besoin qu&apos;on l&apos;atteigne : un
                claustra franchement ajouré, décollé des appareils, avec un panneau qui s&apos;ouvre ou se dépose à la
                main, fait le travail sans transformer chaque nettoyage de filtre en démontage. Le raisonnement vaut
                aussi pour un composteur, un local à poubelles ou le groupe extérieur d&apos;une climatisation. Quand le
                bassin est déjà là, ce cache-technique se pense avec la{' '}
                <a href="/blog/plage-piscine-bois-essences-pose" className={lienInterne}>
                  plage de piscine en bois
                </a>{' '}
                : mêmes lames, même teinte, et l&apos;ensemble paraît d&apos;origine. Quand le projet est plus ambitieux,
                le claustra devient souvent la première pierre d&apos;un{' '}
                <a href="/blog/pool-house-bois-guide" className={lienInterne}>
                  pool house
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">Le vis-à-vis</strong> est le cas le plus mal traité, et
                c&apos;est là que notre règle prend tout son sens. Quand un client nous dit « je suis vu », il pense
                spontanément à un rideau continu tout le long du jardin. Dans les faits, la gêne est presque toujours{' '}
                <em>ponctuelle</em> : c&apos;est une fenêtre d&apos;étage précise, un balcon, un angle de terrasse
                voisine. Une fois qu&apos;on identifie cet axe-là, un panneau de deux ou trois mètres, correctement
                placé, supprime la gêne aussi bien que quinze mètres de clôture, pour un cinquième du budget, et sans
                assombrir le jardin.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                <strong className="text-primary font-semibold">Le coin de terrasse</strong>, enfin, relève moins de
                l&apos;intimité que du confort. Il s&apos;agit d&apos;adosser un salon d&apos;extérieur, de couper le
                vent d&apos;ouest qui traverse une terrasse trop ouverte, de fermer visuellement un espace qui flotte au
                milieu de la pelouse. Un claustra crée là un{' '}
                <strong className="text-primary font-semibold">dossier</strong>, au sens propre : on s&apos;installe
                différemment dans un coin qui a un dos. C&apos;est souvent le prolongement naturel d&apos;une pergola,
                dont il ferme un côté sans l&apos;enfermer.
              </p>
            </section>

            {/* 3, Le taux d'ajour */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le taux d&apos;ajour : masquer sans créer un mur, et sans prendre le vent
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Vous lirez partout des pourcentages d&apos;ajour donnés comme des vérités. Autant l&apos;écrire tout de
                suite :{' '}
                <strong className="text-primary font-semibold">
                  « 30 % d&apos;ajour » n&apos;est pas une norme, ce n&apos;est même pas un repère utile
                </strong>,
                parce que l&apos;occultation ne dépend pas d&apos;un ratio mais d&apos;une géométrie. Deux panneaux au
                jour identique masqueront très différemment selon l&apos;épaisseur des lames, la distance à laquelle on
                se tient et, surtout, l&apos;angle sous lequel on regarde.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le raisonnement que nous tenons devant le jardin est relatif, jamais chiffré. Un{' '}
                <strong className="text-primary font-semibold">jour plus étroit que la lame</strong> devient
                pratiquement opaque dès qu&apos;on s&apos;écarte de l&apos;axe : c&apos;est le réglage des vis-à-vis
                latéraux, quand le regard arrive de côté. Un{' '}
                <strong className="text-primary font-semibold">jour égal à la lame</strong> reste franchement traversant
                de face : il filtre, il joue avec la lumière, il ne cache pas, c&apos;est un choix de composition, pas
                d&apos;intimité. Et plus la lame est épaisse, plus le panneau se ferme vite en tournant autour, parce que
                c&apos;est le chant du bois qui masque, pas sa face.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                D&apos;où notre méthode de relevé, qui prend dix minutes et évite des erreurs coûteuses : on se place
                d&apos;abord{' '}
                <strong className="text-primary font-semibold">là où l&apos;on est vu</strong> (assis sur le transat,
                pas debout), puis on va se mettre{' '}
                <strong className="text-primary font-semibold">là d&apos;où l&apos;on regarde</strong>, chez soi ou
                depuis la limite. Entre ces deux points, on tend un drap ou on plante deux piquets. Neuf fois sur dix, le
                claustra nécessaire est plus court et plus bas que ce qui était envisagé, et il se décale de deux mètres
                par rapport à l&apos;endroit prévu.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Le second rôle de l&apos;ajour est structurel, et il est trop souvent ignoré :{' '}
                <strong className="text-primary font-semibold">
                  un panneau plein est une voile, un panneau ajouré laisse respirer le vent
                </strong>
                . Sur nos chantiers, ce que nous observons est constant, les désordres n&apos;apparaissent jamais sur
                les claires-voies, ils apparaissent sur les panneaux pleins mal ancrés, qui se mettent à jouer, puis à
                pousser le poteau. En Gironde, entre les coups de vent d&apos;ouest et les orages d&apos;été, refermer un
                claustra à l&apos;extrême oblige à surdimensionner ses appuis. Ajourer, c&apos;est aussi acheter de la
                tranquillité.
              </p>
            </section>

            {/* 4, Les motifs */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Lames verticales, horizontales, à claire-voie, croisillons : ce que chaque motif donne à voir
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le motif n&apos;est pas qu&apos;une affaire de goût : il décide de ce que l&apos;on voit, de la façon
                dont l&apos;eau s&apos;évacue et de l&apos;entretien futur. Voici comment nous situons les grandes
                familles que nous posons.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Motif</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Ce qu&apos;il donne à voir</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Où nous l&apos;employons</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Point de vigilance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {motifs.map((ligne, i) => (
                      <tr key={ligne[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}>
                        <td className="px-4 py-3 text-primary font-semibold">{ligne[0]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[2]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 mb-5">
                Deux remarques d&apos;atelier valent pour tous les motifs. La première concerne{' '}
                <strong className="text-primary font-semibold">l&apos;eau</strong> : une lame horizontale présente
                toujours une face supérieure qui garde la pluie, là où une lame verticale s&apos;égoutte toute seule.
                Cela ne condamne pas l&apos;horizontal, que nous posons très souvent, mais cela impose un chanfrein, une
                légère inclinaison ou un profil qui rejette l&apos;eau vers l&apos;extérieur. C&apos;est exactement la
                logique de pose d&apos;une façade, développée dans notre guide du{' '}
                <a href="/blog/bardage-bois-facade-essences-pose" className={lienInterne}>
                  bardage bois en façade
                </a>,
                dont un claustra est le cousin proche : mêmes lames, mêmes essences, même attention aux points où
                l&apos;eau s&apos;attarde.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                La seconde concerne <strong className="text-primary font-semibold">la cohérence</strong>. Un claustra qui
                reprend le motif, le sens et la teinte d&apos;un ouvrage déjà présent, un bardage, une clôture, la
                sous-face d&apos;une pergola, disparaît dans la composition. Un claustra au motif inédit, posé au milieu
                d&apos;un jardin qui parle une autre langue, saute aux yeux : au lieu de masquer quelque chose, il
                devient lui-même la chose qu&apos;on regarde. C&apos;est le piège classique des panneaux décoratifs
                achetés en jardinerie.
              </p>
            </section>

            <Figure
              src="/images/blog/claustra-bois-separation-jardin/claustra-bois-lames-horizontales-jour-etroit.jpg"
              w={1200}
              h={800}
              alt="Panneau de claustra en bois à lames horizontales, jour étroit entre les lames et montant d'ossature en bout de panneau"
              caption="Jour étroit entre lames horizontales : le panneau se ferme vite dès qu'on quitte l'axe. Reste que chaque lame présente une face qui garde la pluie, c'est le chanfrein donné à la pose qui fait la différence dans dix ans."
            />

            {/* 5, Ancrage */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ancrage : au sol, sur plots, sur une terrasse existante
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est le sujet qui décide de la durée de vie de l&apos;ouvrage, et le seul sur lequel nous ne
                transigeons jamais. Un claustra est un panneau vertical au bout d&apos;un bras de levier : tout ce que le
                vent lui donne, ce sont ses appuis qui l&apos;encaissent. Un panneau magnifique sur un ancrage bâclé,
                c&apos;est un panneau qui joue au bout d&apos;un an.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">Au sol</strong>, en pleine terre, nous travaillons sur
                massifs béton avec platines ou pieds métalliques.{' '}
                <strong className="text-primary font-semibold">
                  Le bois n&apos;est jamais noyé directement dans le béton
                </strong>{' '}
                : il est relevé de quelques centimètres, désolidarisé du sol, pour qu&apos;il ne pompe ni l&apos;eau de
                pluie ni l&apos;humidité du massif. C&apos;est le même principe que sous les poteaux d&apos;un carport,
                et c&apos;est ce qui explique qu&apos;un ouvrage bien posé grise tranquillement pendant que le voisin
                pourrit par le pied. Nous ne donnons volontairement aucune dimension de massif ici : elle dépend de la
                hauteur, du motif, de la nature du sol (argile, sable, remblai récent) et cela se décide sur place.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">Sur une terrasse en bois existante</strong>, c&apos;est le
                cas le plus fréquent et le plus mal traité. La tentation est de visser les poteaux dans les lames :
                jamais. Une lame de platelage n&apos;est pas une pièce porteuse, elle ne reprend aucun effort de levier,
                et elle finit par se déchirer autour des vis. Il faut{' '}
                <strong className="text-primary font-semibold">descendre chercher la structure</strong> (lambourdes,
                plots, ou un appui dédié créé pour l&apos;occasion), quitte à déposer quelques lames le temps du
                chantier et à les reposer ensuite. Notre article sur{' '}
                <a href="/blog/terrasse-bois-structure-plots-lambourdes" className={lienInterne}>
                  la structure d&apos;une terrasse bois
                </a>{' '}
                explique ce qui se trouve sous vos pieds et pourquoi tout se joue là.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">Sur une dalle, un carrelage ou une terrasse maçonnée</strong>,
                on travaille en platines chevillées, à condition de savoir ce qu&apos;il y a sous la dalle. Percer une
                terrasse étanchée au-dessus d&apos;un volume habité n&apos;est pas un geste anodin, et nous préférons
                alors des solutions qui ne traversent pas : appuis rapportés, jardinières lestées, panneau autoportant
                calé sur une structure indépendante.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Reste enfin le claustra{' '}
                <strong className="text-primary font-semibold">amovible</strong>, que nous proposons plus souvent
                qu&apos;on ne l&apos;imagine : lesté ou posé en fourreaux, il se retire pour l&apos;hiver, se déplace
                quand le jardin change, et convient aux situations où l&apos;on ne veut rien percer. Il a une limite
                honnête à connaître : un panneau lesté doit être franchement ajouré, sinon le premier coup de vent
                d&apos;ouest s&apos;en charge.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Carport-bois-Libourne-3.webp"
              w={1200}
              h={646}
              alt="Poteaux bois d'un carport posés sur pieds métalliques galvanisés, bois relevé au-dessus du gravier, chantier à Capian en Gironde"
              caption="Ce carport que nous avons posé à Capian montre le principe qui vaut aussi sous un claustra : chaque poteau est repris sur un pied métallique, et le bois ne touche jamais le sol."
            />

            {/* 6, Essences et vieillissement */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Essences, finition et vieillissement
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un claustra est un ouvrage vertical, ventilé sur ses deux faces, jamais piétiné : c&apos;est, avec le
                bardage, l&apos;une des situations les plus favorables au bois. Les essences que nous employons sont
                celles de nos clôtures et de nos façades, <strong className="text-primary font-semibold">douglas</strong>{' '}
                et <strong className="text-primary font-semibold">mélèze</strong> pour leur excellent rapport
                durabilité-prix, <strong className="text-primary font-semibold">châtaignier</strong> pour un feuillu
                local à la belle patine, <strong className="text-primary font-semibold">pin maritime</strong> traité de
                Gironde pour un budget contenu et un vrai circuit court. La durabilité naturelle des essences est un
                sujet documenté par{' '}
                <a href="https://www.fcba.fr/" className={lienInterne} target="_blank" rel="noopener noreferrer">
                  l&apos;institut technologique FCBA
                </a>{' '}
                ; le choix se fait ensuite selon la teinte, le budget et l&apos;exposition réelle du panneau. Notre
                article sur{' '}
                <a href="/blog/quel-bois-pour-terrasse-exterieure" className={lienInterne}>
                  le choix des essences pour l&apos;extérieur
                </a>{' '}
                détaille chacune d&apos;elles.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Trois précautions de mise en œuvre pèsent plus lourd que l&apos;essence elle-même. La première :{' '}
                <strong className="text-primary font-semibold">aucune pièce de bois en contact avec le sol</strong>,
                cadre relevé, lames arrêtées au-dessus de la terre ou du gravier, végétation tenue à distance. La
                deuxième : <strong className="text-primary font-semibold">une quincaillerie inox</strong>, faute de quoi
                chaque fixation laisse couler une traînée noire sur la lame au bout de deux hivers. La troisième, celle
                qu&apos;on oublie toujours :{' '}
                <strong className="text-primary font-semibold">traiter les deux faces avant la pose</strong>. La face
                arrière d&apos;un claustra plaqué contre un local technique ou un mur devient inaccessible dès que
                l&apos;ouvrage est monté, et une lame protégée d&apos;un seul côté travaille de façon dissymétrique :
                elle tuile.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Quant au grisaillement, il est esthétique et parfaitement réversible : il n&apos;enlève rien à la
                solidité de l&apos;ouvrage, et nous avons tranché le sujet dans notre guide de{' '}
                <a href="/blog/renover-terrasse-bois-existante" className={lienInterne}>
                  rénovation d&apos;une terrasse existante
                </a>
                . Si vous tenez à la teinte d&apos;origine, un saturateur se recharge sans décapage, au bon moment de
                l&apos;année, et pas n&apos;importe lequel : c&apos;est tout le propos de notre article sur{' '}
                <a href="/blog/traiter-bois-exterieur-avant-hiver" className={lienInterne}>
                  le traitement des bois avant l&apos;hiver
                </a>
                . Sur un claustra, l&apos;opération est bien plus rapide que sur une terrasse : quelques mètres carrés,
                accessibles debout, sans meubles à déplacer.
              </p>
            </section>

            <Figure
              src="/images/blog/claustra-bois-separation-jardin/claustra-bois-ajoure-habillage-local-technique.jpg"
              w={1200}
              h={900}
              alt="Claustra en bois ajouré refermé en angle autour d'un équipement technique extérieur"
              caption="Un habillage à claire-voie posé autour d'un équipement technique, décollé du matériel : l'ajour n'est pas décoratif, il laisse respirer les appareils, et la face avant doit pouvoir se déposer sans outillage."
            />

            {/* 7, Budget et délai */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Budget, délai et ce qu&apos;on peut poser en une journée (Libourne, Gironde)
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Parlons chiffres, avec la prudence qui s&apos;impose : ce qui suit correspond à des fourchettes{' '}
                <strong className="text-primary font-semibold">constatées sur nos propres chantiers en 2026</strong>,
                autour de Libourne, et ne remplace en rien un devis. Un claustra bois posé se situe le plus souvent{' '}
                <strong className="text-primary font-semibold">entre 250 et 700 € du mètre linéaire</strong>, fourniture
                et pose comprises, un écart considérable, qui s&apos;explique par la hauteur, l&apos;essence, le motif
                (une claire-voie simple ne coûte pas un tressage) et surtout par l&apos;ancrage. Pour un cache de local
                technique de quelques mètres, ouvertures et accès compris, nous constatons plutôt une enveloppe{' '}
                <strong className="text-primary font-semibold">entre 800 et 2 500 €</strong>.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ce qui fait vraiment bouger la note n&apos;est presque jamais le nombre de lames :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['L’ancrage', 'des massifs béton à couler ne coûtent pas la même chose qu’une reprise sur une structure de terrasse déjà en place, ni qu’un panneau amovible posé en fourreaux.'],
                  ['La hauteur', 'au-delà d’une certaine hauteur, ce ne sont plus seulement des lames en plus : ce sont des sections de poteaux et des appuis dimensionnés autrement.'],
                  ['Le motif et l’usinage', 'un tressage, des croisillons ou des tasseaux sur chant demandent nettement plus d’heures d’atelier qu’une claire-voie à lames plates.'],
                  ['Les ouvrants', 'un panneau démontable, un portillon d’accès au local technique ou une trappe de visite sont des ouvrages à part entière, avec leur quincaillerie.'],
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
                Côté délai, c&apos;est le grand avantage de cet ouvrage.{' '}
                <strong className="text-primary font-semibold">
                  La plupart des claustras courts se posent en une journée
                </strong>{' '}
                quand l&apos;appui existe déjà, une terrasse dont on connaît la structure, une dalle saine, des
                fourreaux en place. Dès qu&apos;il faut couler des massifs, comptez une intervention pour la
                préparation, le temps que le béton fasse sa prise, puis une seconde pour le montage. C&apos;est le genre
                de chantier que nous glissons entre deux gros ouvrages, et c&apos;est aussi pour cela qu&apos;il rend
                service : un vis-à-vis qui gâche vos soirées d&apos;été peut être réglé avant la fin de la saison.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nous concevons et posons ces claustras à Libourne et dans toute la Gironde, seuls ou dans le cadre
                d&apos;un aménagement plus large. Ils font partie de notre offre d&apos;
                <a href="/amenagement-exterieur" className={lienInterne}>
                  aménagement extérieur
                </a>,{' '}
               au même titre que les bardages et les cloisons ajourées, et se raccordent naturellement à nos{' '}
                <a href="/constructions-bois" className={lienInterne}>
                  constructions bois
                </a>{' '}
                quand le projet grandit. Vous trouverez le type d&apos;ouvrages dont nous parlons dans{' '}
                <a href="/realisations" className={lienInterne}>
                  nos réalisations en Gironde
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
              Claustra en bois : vos questions
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
              Trois mètres bien placés valent mieux que quinze mètres de clôture
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Avant de chiffrer un linéaire, allez vous asseoir là où vous êtes gêné, puis allez voir d&apos;où l&apos;on
              vous regarde. C&apos;est ce trajet-là qui dessine le claustra : sa position, sa hauteur, son ajour, et
              presque toujours un ouvrage plus modeste, plus lumineux et moins cher que celui qu&apos;on imaginait. Le
              reste tient à l&apos;ancrage et à un bois tenu à l&apos;écart du sol. Chez L&apos;Esprit Bois, entreprise
              certifiée Qualibat installée près de Libourne, nous concevons et posons ces séparations de jardin dans
              toute la Gironde, du simple cache-technique au claustra qui structure toute une terrasse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/amenagement-exterieur"
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
