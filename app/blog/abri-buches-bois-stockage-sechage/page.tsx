import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/blog/abri-buches-bois-stockage-sechage/abri-buches-bois-buches-empilees-sous-toit.webp';

export const metadata: Metadata = buildMetadata({
  title: "Abri à bûches bois : stocker et sécher son bois en Gironde",
  description:
    "Un abri à bûches ne protège pas le bois de l'eau, il le fait sécher. Ventilation, dimensionnement, implantation et budget, par un artisan en Gironde.",
  keywords:
    "abri à bûches, abri buches bois, stockage bois de chauffage, abri bûches sur mesure, faire sécher son bois de chauffage, séchage bois de chauffage, abri à bûches Gironde, abri bûches Libourne, rangement bois de chauffage extérieur",
  path: '/blog/abri-buches-bois-stockage-sechage',
  ogImage: COVER,
  ogTitle: "Abri à bûches en bois : bien stocker son bois de chauffage avant l'hiver",
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
        name: 'Abri à bûches en bois',
        item: 'https://lesprit-bois.fr/blog/abri-buches-bois-stockage-sechage',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "Abri à bûches en bois : bien stocker son bois de chauffage avant l'hiver",
    description:
      "Un bon abri à bûches ne protège pas le bois de l'eau, il le fait sécher : c'est la ventilation qui fait tomber une bûche sous le seuil d'humidité utile. Conception, seuil de séchage, dimensionnement, implantation, budget et durée de vie : le guide d'un artisan à Libourne, en Gironde.",
    image: 'https://lesprit-bois.fr' + COVER,
    author: AUTEUR_REF,
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
    datePublished: '2026-08-14',
    dateModified: '2026-08-14',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/abri-buches-bois-stockage-sechage',
    },
    about: [
      { '@type': 'Thing', name: 'abri à bûches' },
      { '@type': 'Thing', name: 'stockage bois de chauffage' },
      { '@type': 'Thing', name: 'séchage du bois de chauffage' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Un abri à bûches doit-il être fermé sur les côtés ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non. Un abri fermé sur ses quatre côtés emprisonne l'humidité que la bûche relâche : le bois reste mouillé et finit par moisir. Seul le toit doit être vraiment étanche, avec un débord suffisant. L'arrière et les côtés se traitent en claire-voie, ou se laissent ouverts du côté du vent dominant, pour que l'air traverse la pile en permanence.",
        },
      },
      {
        '@type': 'Question',
        name: "Combien de temps faut-il faire sécher son bois de chauffage ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "L'ADEME recommande de laisser sécher les bûches au moins 18 mois après la coupe, et de brûler un bois dont le taux d'humidité est inférieur à 23 %. Concrètement, cela veut dire acheter son bois avec au moins une saison d'avance et disposer d'un abri capable de contenir deux campagnes : celle de l'hiver qui vient et celle du suivant.",
        },
      },
      {
        '@type': 'Question',
        name: "Un bois vendu « prêt à brûler » est-il vraiment sec ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Pas toujours. Un bois livré en vrac au printemps a souvent été fendu récemment et continue de perdre de l'eau. Sauf séchage industriel documenté par le fournisseur, considérez qu'il vous reste du séchage à faire et prévoyez un abri ventilé. C'est précisément le rôle de l'abri à bûches : finir le travail, pas seulement garder le bois au sec.",
        },
      },
      {
        '@type': 'Question',
        name: "Faut-il surélever les bûches par rapport au sol ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, c'est une des règles de base : l'ADEME préconise un stockage sans contact direct avec le sol, sur des palettes par exemple. Le sol remonte de l'humidité par capillarité et bloque la circulation d'air sous la pile. Un plancher à claire-voie surélevé de quelques centimètres, posé sur des lambourdes ou des plots, suffit à changer complètement le comportement du tas.",
        },
      },
      {
        '@type': 'Question',
        name: "Peut-on adosser un abri à bûches au mur de la maison ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Nous le déconseillons. Une pile de bûches plaquée contre une façade bloque le séchage du côté du mur, retient l'humidité contre l'enduit et constitue surtout une réserve de cellulose humide au contact du bâti — un point d'appel classique pour les termites, très présents en Gironde. Mieux vaut adosser l'abri à un mur de dépendance, à un carport ou le laisser autoportant, avec une lame d'air à l'arrière.",
        },
      },
      {
        '@type': 'Question',
        name: "Abri à bûches en kit ou sur mesure : que choisir ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le kit convient pour un petit appoint d'agrément, à condition de vérifier qu'il est ajouré et surélevé — beaucoup de modèles d'entrée de gamme sont trop peu profonds et trop fermés. Dès qu'il s'agit de stocker deux campagnes de chauffage, d'épouser une limite de terrain ou de prolonger un carport existant, le sur-mesure devient plus rationnel : on cale le volume sur la consommation réelle et la longueur de bûche commandée.",
        },
      },
    ],
  },
];

const implantations = [
  [
    'Adossé à un mur existant',
    'Une paroi (dépendance, garage, muret) sert d’appui arrière',
    'Économique, structure simple, se glisse le long d’un accès',
    'Séchage bridé côté mur si aucune lame d’air n’est ménagée',
  ],
  [
    'Autoportant, en pignon libre',
    'Quatre poteaux, ouvert sur ses deux longs côtés',
    'Meilleure ventilation possible, implantation libre',
    'Structure complète à ancrer, plus exposé aux pluies battantes',
  ],
  [
    'Intégré à un carport',
    'Prolonge la toiture et l’ossature d’un abri voiture',
    'Un seul chantier, une seule couverture, rendu homogène',
    'À prévoir dès la conception du carport, pas après coup',
  ],
  [
    'En prolongement d’un abri de jardin',
    'Appentis latéral sous débord de toiture',
    'Rangement outils + bois regroupés, gain de place',
    'Volume limité par la longueur du pignon disponible',
  ],
];

const faq = [
  {
    q: 'Un abri à bûches doit-il être fermé sur les côtés ?',
    r: (
      <>
        Non. Un abri fermé sur ses quatre côtés emprisonne l&apos;humidité que la bûche relâche : le bois reste mouillé
        et finit par moisir. Seul le toit doit être vraiment étanche, avec un débord suffisant. L&apos;arrière et les
        côtés se traitent en claire-voie, ou se laissent ouverts du côté du vent dominant, pour que l&apos;air traverse
        la pile en permanence.
      </>
    ),
  },
  {
    q: 'Combien de temps faut-il faire sécher son bois de chauffage ?',
    r: (
      <>
        L&apos;ADEME recommande de laisser sécher les bûches au moins 18 mois après la coupe, et de brûler un bois dont
        le taux d&apos;humidité est inférieur à 23 %. Concrètement, cela veut dire acheter son bois avec au moins une
        saison d&apos;avance et disposer d&apos;un abri capable de contenir deux campagnes : celle de l&apos;hiver qui
        vient et celle du suivant.
      </>
    ),
  },
  {
    q: 'Un bois vendu « prêt à brûler » est-il vraiment sec ?',
    r: (
      <>
        Pas toujours. Un bois livré en vrac au printemps a souvent été fendu récemment et continue de perdre de
        l&apos;eau. Sauf séchage industriel documenté par le fournisseur, considérez qu&apos;il vous reste du séchage à
        faire et prévoyez un abri ventilé. C&apos;est précisément le rôle de l&apos;abri à bûches : finir le travail,
        pas seulement garder le bois au sec.
      </>
    ),
  },
  {
    q: 'Faut-il surélever les bûches par rapport au sol ?',
    r: (
      <>
        Oui, c&apos;est une des règles de base : l&apos;ADEME préconise un stockage sans contact direct avec le sol, sur
        des palettes par exemple. Le sol remonte de l&apos;humidité par capillarité et bloque la circulation d&apos;air
        sous la pile. Un plancher à claire-voie surélevé de quelques centimètres, posé sur des lambourdes ou des plots,
        suffit à changer complètement le comportement du tas.
      </>
    ),
  },
  {
    q: "Peut-on adosser un abri à bûches au mur de la maison ?",
    r: (
      <>
        Nous le déconseillons. Une pile de bûches plaquée contre une façade bloque le séchage du côté du mur, retient
        l&apos;humidité contre l&apos;enduit et constitue surtout une réserve de cellulose humide au contact du bâti — un
        point d&apos;appel classique pour les{' '}
        <a href="/blog/termites-gironde-ouvrage-bois-prevention" className={lienInterne}>
          termites, très présents en Gironde
        </a>
        . Mieux vaut adosser l&apos;abri à un mur de dépendance, à un carport ou le laisser autoportant, avec une lame
        d&apos;air à l&apos;arrière.
      </>
    ),
  },
  {
    q: 'Abri à bûches en kit ou sur mesure : que choisir ?',
    r: (
      <>
        Le kit convient pour un petit appoint d&apos;agrément, à condition de vérifier qu&apos;il est ajouré et surélevé
        — beaucoup de modèles d&apos;entrée de gamme sont trop peu profonds et trop fermés. Dès qu&apos;il s&apos;agit de
        stocker deux campagnes de chauffage, d&apos;épouser une limite de terrain ou de prolonger un carport existant, le
        sur-mesure devient plus rationnel : on cale le volume sur la consommation réelle et la longueur de bûche
        commandée.
      </>
    ),
  },
];

export default function ArticleAbriBuchesPage() {
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
              height="796"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Abri à bûches en bois ouvert sur l'avant, rempli de bois de chauffage empilé sous un toit débordant"
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
              <span className="text-secondary-fixed">Abri à bûches en bois</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Abri à bûches
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Abri à bûches en bois : bien stocker son bois de chauffage avant l&apos;hiver
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/70 font-label-md text-label-md">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]" aria-hidden="true">person</span>
                <a
                  href="/auteur/david-bertrand"
                  className="underline underline-offset-4 decoration-white/30 hover:decoration-secondary hover:text-white transition-colors"
                >
                  David Bertrand
                </a>
                , L&apos;Esprit Bois
              </span>
              <span className="text-secondary">·</span>
              <span>14 août 2026</span>
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
                Un bon abri à bûches ne protège pas le bois de l&apos;eau, il le fait sécher : c&apos;est la ventilation,
                pas la couverture, qui fait passer une bûche sous le seuil d&apos;humidité utile.
              </strong>{' '}
              Autrement dit, un toit bien débordant et des côtés largement ajourés valent mieux qu&apos;un coffre bien
              fermé. Deux idées reçues nous coûtent des hivers entiers de mauvaise combustion : croire qu&apos;une bûche
              livrée « prête à brûler » l&apos;est réellement, et croire qu&apos;un abri fermé sur ses quatre côtés
              protège mieux — alors qu&apos;il fait pourrir le bois au lieu de le sécher. Voici, à partir de ce que nous
              construisons sur nos chantiers en Gironde, comment concevoir, dimensionner et implanter un abri à bûches
              qui travaille vraiment pour vous.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1 — Ce qu'un abri à bûches doit faire */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qu&apos;un abri à bûches doit faire (et ce n&apos;est pas juste couvrir)
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                On achète un abri à bûches en pensant « ranger ». On devrait l&apos;acheter en pensant « sécher ». La
                différence n&apos;est pas de vocabulaire : elle change complètement le dessin de l&apos;ouvrage. Un
                simple rangement peut être un coffre fermé ; un séchoir, non. Une bûche fraîchement fendue contient
                énormément d&apos;eau, et cette eau doit partir quelque part. Si l&apos;air ne circule pas, elle reste
                dans l&apos;abri, se recondense sur les bûches du fond et vous obtenez le contraire du résultat cherché :
                du bois moisi, des champignons blancs à l&apos;extrémité des rondins, et un feu qui fume.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un abri à bûches réussi remplit donc trois missions, dans cet ordre :{' '}
                <strong className="text-primary font-semibold">
                  faire sortir l&apos;eau du bois, empêcher la pluie d&apos;y rentrer, et rendre le bois accessible en
                  plein hiver
                </strong>
                . La troisième compte plus qu&apos;on ne croit : un abri au fond du jardin, derrière une pelouse
                détrempée, finit par être délaissé au profit d&apos;un tas de bûches posé sous une bâche près de la
                porte — c&apos;est-à-dire la pire solution possible.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                La bâche, justement, mérite qu&apos;on s&apos;y arrête. Une bâche posée sur un tas et rabattue sur les
                côtés transforme la pile en serre : le soleil chauffe, l&apos;eau s&apos;évapore, la condensation
                retombe, et le bois ne sèche jamais. Si vous n&apos;avez pas encore d&apos;abri, bâchez uniquement le
                dessus du tas, en laissant les flancs entièrement libres. C&apos;est déjà appliquer, avec les moyens du
                bord, le principe de tout ce qui suit.
              </p>
            </section>

            {/* 2 — Le séchage */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le séchage : le seuil d&apos;humidité qui change tout
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Il existe un repère simple, et il suffit à cadrer tout le projet.{' '}
                <strong className="text-primary font-semibold">
                  L&apos;
                  <a
                    href="https://agirpourlatransition.ademe.fr/particuliers/maison/chauffage/bien-chauffer-bois-moins-polluer"
                    className={lienInterne}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ADEME
                  </a>{' '}
                  recommande de brûler du bois dont le taux d&apos;humidité est inférieur à 23 %, et de laisser sécher
                  les bûches 18 mois minimum après la coupe.
                </strong>{' '}
                Elle précise aussi les conditions de stockage : à l&apos;abri de la pluie, dans un endroit bien aéré, et
                sans contact direct avec le sol — sur des palettes, par exemple.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Retenez surtout les mots « bien aéré » et « sans contact direct avec le sol ». Ce sont eux qui
                disqualifient la moitié des abris qu&apos;on trouve dans le commerce, et eux qui expliquent pourquoi
                votre voisin, qui empile pourtant son bois au même endroit que vous, obtient un feu franc quand le vôtre
                siffle. Un bois trop humide brûle mal : une partie de l&apos;énergie part à évaporer l&apos;eau au lieu
                de chauffer la pièce, la combustion est incomplète, et l&apos;installation s&apos;encrasse plus vite.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La conséquence pratique de ces 18 mois est la plus importante de tout cet article :{' '}
                <strong className="text-primary font-semibold">
                  un abri à bûches ne se dimensionne pas sur un hiver, mais sur deux
                </strong>
                . Vous brûlez la campagne sèche pendant que la campagne suivante finit de sécher à côté. Un abri qui ne
                contient qu&apos;une saison vous condamne à brûler du bois trop jeune, année après année.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Dernier point d&apos;honnêteté : une bûche vendue « prête à brûler » ne l&apos;est presque jamais au sens
                strict. Certains fournisseurs pratiquent un séchage accéléré et le documentent — dans ce cas, tant mieux.
                Mais un bois livré en vrac, fendu depuis peu, continue de perdre de l&apos;eau chez vous. Un humidimètre
                de poche, planté dans une bûche fraîchement refendue plutôt que sur sa face extérieure, coûte quelques
                euros et met tout le monde d&apos;accord.
              </p>
            </section>

            <Figure
              src="/images/blog/abri-buches-bois-stockage-sechage/bois-de-chauffage-empile-extremites-buches-ventilation.webp"
              w={1200}
              h={561}
              alt="Stockage de bois de chauffage ventilé : bûches empilées, extrémités des rondins tournées vers l'extérieur"
              caption="Les fentes en étoile visibles au bout des rondins sont un bon indice de terrain : elles n'apparaissent qu'une fois que la bûche a vraiment commencé à perdre son eau."
            />

            {/* 3 — Les cinq règles */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Les cinq règles de conception d&apos;un abri qui sèche vraiment
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ces cinq points reviennent sur tous nos chantiers. Aucun ne coûte cher à la construction ; tous coûtent
                cher quand ils manquent.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  [
                    'Un toit franchement débordant',
                    "c'est la seule partie qui doit être réellement étanche. Le débord protège la face avant de la pile des pluies obliques, celles qui mouillent le bois qu'on va chercher en premier. Une pente marquée, orientée vers l'arrière, évite que l'eau ne ruisselle sur les bûches de façade.",
                  ],
                  [
                    'Un arrière et des côtés ajourés',
                    "en claire-voie, avec des jours entre les lames, ou tout simplement laissés ouverts. On ne cherche pas à fermer, on cherche à créer un courant d'air traversant. Fermer les quatre côtés, c'est fabriquer une cave humide.",
                  ],
                  [
                    'Une surélévation du sol',
                    "un plancher à claire-voie sur lambourdes, des plots, une bastaing sur cales : quelques centimètres suffisent pour couper la remontée d'humidité du terrain et laisser l'air passer sous la pile. C'est le geste le plus rentable de la liste.",
                  ],
                  [
                    'Une orientation face au vent dominant',
                    "le grand côté ouvert de l'abri se tourne vers le vent qui balaie le plus souvent votre terrain, et non vers celui qui amène la pluie. En Gironde, c'est un arbitrage qu'on fait sur place : le vent d'ouest sèche, mais il pousse aussi les averses.",
                  ],
                  [
                    'Une profondeur de pile limitée',
                    "un abri très profond crée un cœur de tas que l'air n'atteint jamais. Mieux vaut un abri long et peu profond qu'un cube. La profondeur se cale sur la longueur de bûche commandée : une rangée, éventuellement deux dos à dos avec une lame d'air au milieu, pas davantage.",
                  ],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">
                      check_circle
                    </span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Un détail de mise en œuvre pour finir : empilez les bûches{' '}
                <strong className="text-primary font-semibold">les extrémités tournées vers l&apos;extérieur</strong>. Le
                bois évacue son eau bien plus vite par les bouts que par l&apos;écorce. Un rang bien rangé, extrémités
                face à l&apos;air, sèche plus vite qu&apos;un tas jeté en vrac, et il tient debout tout seul.
              </p>
            </section>

            <Figure
              src="/images/blog/abri-buches-bois-stockage-sechage/stockage-bois-chauffage-claire-voie-lames-ajourees.webp"
              w={1200}
              h={827}
              alt="Rangement de bois de chauffage à claire-voie : jours réguliers entre les lames, bûches visibles derrière"
              caption="Le stockage compartimenté à claire-voie règle deux problèmes d'un coup : l'air traverse chaque case, et chaque case correspond à une campagne de chauffage."
            />

            {/* 4 — Quel volume construire */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Quel volume construire : dimensionner selon sa consommation
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Nous ne vous donnerons pas de table de conversion universelle : les unités de vente du bois de chauffage
                varient d&apos;un fournisseur à l&apos;autre, et un volume annoncé ne dit rien du volume réellement
                occupé une fois empilé. Nous préférons une méthode, qui a l&apos;avantage de marcher chez tout le monde.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  "Partez de ce que vous consommez déjà. Si vous vous chauffez au bois depuis quelques hivers, vous savez combien de livraisons vous passez dans la saison : c'est votre unité de référence, bien plus fiable qu'un calcul théorique.",
                  "Demandez à votre fournisseur le volume empilé, pas seulement le volume vendu. C'est lui qui sait ce que représente sa livraison une fois rangée en rangs serrés — posez-lui la question avant de construire, pas après.",
                  "Doublez pour tenir les 18 mois de séchage. L'abri doit accueillir la campagne en cours et celle qui sèche. C'est ce doublement, et non la consommation elle-même, qui décide de la taille finale.",
                  "Mesurez la longueur de bûche commandée : 33, 40, 50 cm — c'est elle qui fixe la profondeur utile de l'abri, donc la portée des lambourdes et l'aplomb de la pile.",
                  "Prévoyez une réserve d'accès : un bout de plancher libre pour poser un panier, une hache ou le petit bois d'allumage, sinon il finira par terre, dans l'humidité.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">
                      check_circle
                    </span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                En ordre de grandeur, sur nos chantiers, deux familles reviennent. Le{' '}
                <strong className="text-primary font-semibold">petit abri d&apos;appoint</strong>, pour un poêle
                d&apos;agrément ou un insert utilisé quelques soirées par mois : quelques mètres de long, une seule
                rangée de profondeur, souvent adossé. Et l&apos;
                <strong className="text-primary font-semibold">abri de chauffage principal</strong>, pour une maison
                chauffée majoritairement au bois : un ouvrage long, compartimenté en travées, où l&apos;on stocke une
                campagne par travée pour ne jamais mélanger le bois sec et le bois de l&apos;an prochain.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ce cloisonnement en travées est notre recommandation la plus constante. Il ne coûte que quelques poteaux
                intermédiaires, il rigidifie la structure, et il résout à lui seul le problème de la rotation des stocks
                : on remplit une travée, on brûle l&apos;autre, on ne se trompe jamais.
              </p>
            </section>

            {/* 5 — Implantation */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Adossé, autoportant, intégré à un carport : quelle implantation
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le choix de l&apos;implantation se fait rarement pour des raisons esthétiques : il découle de ce que vous
                avez déjà sur le terrain, et de la place disponible le long d&apos;un cheminement praticable en janvier.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Implantation</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Principe</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Atouts</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Limites</th>
                    </tr>
                  </thead>
                  <tbody>
                    {implantations.map((ligne, i) => (
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
                Notre configuration préférée reste{' '}
                <strong className="text-primary font-semibold">
                  l&apos;abri à bûches adossé au pignon d&apos;un carport
                </strong>
                . On prolonge la charpente existante d&apos;un appentis, on récupère la même couverture, la même teinte
                et le même rythme de poteaux : l&apos;ensemble se lit comme un seul ouvrage, la voiture est abritée, le
                bois aussi, et l&apos;accès est déjà stabilisé puisqu&apos;on y roule. C&apos;est aussi le moment le plus
                économique pour le faire, à condition d&apos;y penser au moment de dessiner le carport — nous détaillons
                cette structure dans notre{' '}
                <a href="/blog/carport-bois-guide" className={lienInterne}>
                  guide du carport en bois
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Côté formalités, un abri à bûches crée de l&apos;emprise au sol comme tout ouvrage couvert : plutôt que
                de recopier ici des seuils qui dépendent de votre commune et de votre PLU, reportez-vous à notre article
                dédié aux{' '}
                <a href="/blog/autorisation-urbanisme-abri-carport-pergola-2026" className={lienInterne}>
                  autorisations d&apos;urbanisme pour un abri, un carport ou une pergola
                </a>
                . Nous vérifions ce point avant tout chantier.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Carport-bois-Libourne-2.webp"
              w={1200}
              h={646}
              alt="Carport bois en appentis adossé à un mur, en Gironde : la structure que l'on prolonge pour un abri à bûches"
              caption="Un de nos carports bois en appentis, en Gironde. C'est cette charpente que l'on prolonge d'une travée pour loger le bois : même couverture, même rythme de poteaux, accès déjà stabilisé."
            />

            {/* 6 — Où le poser */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Où le poser dans le jardin — et pourquoi jamais contre le mur de la maison
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est le réflexe le plus répandu, et celui que nous déconseillons le plus fermement :{' '}
                <strong className="text-primary font-semibold">
                  ne plaquez pas votre bois de chauffage contre la façade de votre maison
                </strong>
                . Trois raisons, dans l&apos;ordre de gravité.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                D&apos;abord, une pile de bûches humide contre un mur est un{' '}
                <strong className="text-primary font-semibold">réservoir de cellulose au contact du bâti</strong>. En
                Gironde, département où la présence de termites est un sujet sérieux, c&apos;est exactement le pont
                naturel qu&apos;on cherche à éviter entre le sol, le bois mort et la structure de la maison. Nous avons
                consacré un article entier à ce raisonnement de constructeur :{' '}
                <a href="/blog/termites-gironde-ouvrage-bois-prevention" className={lienInterne}>
                  concevoir un ouvrage en bois qui n&apos;offre pas le couvert aux termites
                </a>
                . Un tas de bûches contre un mur en est le contre-exemple parfait.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ensuite, le mur bloque une face entière de la pile : le séchage se fait sur trois côtés au lieu de
                quatre, et l&apos;humidité relâchée par le bois se plaque contre l&apos;enduit, qu&apos;elle finit par
                marquer. Enfin, un tas serré contre une façade est un abri idéal pour tout ce qui rampe et grignote, et
                que vous n&apos;avez aucune envie de voir passer sous la porte.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ce que nous cherchons quand nous implantons un abri à bûches sur un terrain :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  "Un sol qui ne retient pas l'eau : point haut du terrain, sol drainant ou drainé, jamais une cuvette où l'eau stagne après l'orage.",
                  "Un cheminement praticable en hiver : allée, dalle, gravillon stabilisé — on va y aller par temps de pluie, de nuit, les bras chargés.",
                  "Une distance raisonnable à la maison : assez près pour que ce soit tenable au quotidien, assez loin pour ne pas coller le bois au bâti.",
                  "Un dégagement à l'arrière : quelques centimètres de lame d'air suffisent si l'abri est adossé, mais ils sont indispensables.",
                  "Pas sous un arbre à feuillage dense : la couverture s'encombre, l'ombre permanente entretient l'humidité et la mousse.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">
                      check_circle
                    </span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Si votre terrain n&apos;offre aucun de ces emplacements, l&apos;abri devient un vrai sujet
                d&apos;aménagement : orientation, sol, cheminement et raccord aux autres ouvrages se pensent ensemble.
                C&apos;est le travail que nous menons en{' '}
                <a href="/amenagement-exterieur" className={lienInterne}>
                  aménagement extérieur
                </a>
                , plutôt que de poser un abri là où il reste de la place.
              </p>
            </section>

            <Figure
              src="/images/terrasse-bois-plots-gironde-2.webp"
              w={1200}
              h={900}
              alt="Plancher bois surélevé sur plots réglables, sans contact avec le sol, sur un chantier en Gironde"
              caption="Sur nos chantiers en Gironde, aucun bois ne repose directement sur le terrain : ici des plots réglables sous une terrasse, exactement le principe à reprendre sous le plancher d'un abri à bûches."
            />

            {/* 7 — Kit ou sur-mesure, budget, durée de vie */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Kit ou sur-mesure, budget et durée de vie de l&apos;abri (Libourne, Gironde)
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le débat kit contre sur-mesure, nous l&apos;avons tranché en détail dans notre article sur{' '}
                <a href="/blog/abri-jardin-bois-kit-ou-sur-mesure" className={lienInterne}>
                  l&apos;abri de jardin en kit ou sur mesure
                </a>{' '}
                : les critères y sont les mêmes, et nous n&apos;allons pas les refaire ici. Une seule spécificité mérite
                d&apos;être ajoutée pour les bûches :{' '}
                <strong className="text-primary font-semibold">
                  la plupart des kits d&apos;entrée de gamme sont trop peu profonds pour la longueur de bûche réelle et
                  trop fermés pour ventiler
                </strong>
                . Vérifiez ces deux cotes avant d&apos;acheter, elles ne figurent pas toujours en évidence sur
                l&apos;emballage.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Côté budget, restons honnêtes et larges, parce que l&apos;écart est réel :{' '}
                <strong className="text-primary font-semibold">
                  d&apos;un petit abri en kit à quelques centaines d&apos;euros jusqu&apos;à plusieurs milliers d&apos;euros
                  pour un ouvrage sur mesure, long, compartimenté et couvert comme la maison
                </strong>{' '}
                — fourchettes constatées sur nos propres chantiers en 2026. Ce qui fait bouger le prix, ce n&apos;est
                presque jamais le volume de bois stocké : c&apos;est la couverture retenue, le nombre de poteaux et
                d&apos;appuis, la préparation du sol, et le fait de raccorder ou non l&apos;abri à un ouvrage existant.
                Seul un relevé sur place permet de chiffrer sérieusement.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Sur la durée de vie, nous n&apos;annoncerons pas de chiffre : elle dépend beaucoup moins de la marque que
                de trois choix de conception. Un{' '}
                <strong className="text-primary font-semibold">bois adapté à un usage extérieur exposé</strong> (les
                essences et leur durabilité naturelle sont documentées par{' '}
                <a href="https://www.fcba.fr/" className={lienInterne} target="_blank" rel="noopener noreferrer">
                  l&apos;institut technologique FCBA
                </a>
                ), des <strong className="text-primary font-semibold">poteaux désolidarisés du sol</strong> par des
                sabots métalliques plutôt que noyés dans le béton, et une{' '}
                <strong className="text-primary font-semibold">couverture qui évacue vraiment l&apos;eau</strong>. Un
                abri qui respecte ces trois points vieillit en grisant, sans perdre sa tenue ; un abri dont les poteaux
                trempent dans la terre se joue sur la base, et c&apos;est toujours par là qu&apos;il lâche.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Autour de Libourne, du Libournais jusqu&apos;à l&apos;Entre-deux-Mers et au nord de la Gironde, nous
                construisons ces abris comme les autres ouvrages de notre atelier :{' '}
                <a href="/constructions-bois" className={lienInterne}>
                  en construction bois sur mesure
                </a>
                , dessinés pour le terrain et pour la vraie consommation du foyer. Vous en verrez le vocabulaire et les
                finitions dans{' '}
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
              Abri à bûches et stockage du bois : vos questions
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
              Un abri à bûches qui sèche votre bois, pas qui le garde au frais
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Toit débordant, côtés ajourés, pile surélevée, profondeur limitée et volume calé sur deux campagnes : cinq
              décisions prises au dessin, et votre bois arrive sec dans le poêle chaque hiver. C&apos;est ce que nous
              construisons chez L&apos;Esprit Bois, à Libourne et dans toute la Gironde — en abri autonome ou en
              prolongement d&apos;un carport, avec un relevé sur votre terrain avant tout chiffrage.
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
