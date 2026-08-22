import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/terrasse-bois-plots-gironde-3.webp';

export const metadata: Metadata = buildMetadata({
  title: "Termites en Gironde : protéger un ouvrage bois | L'Esprit Bois",
  description:
    "La Gironde est classée zone à termites depuis 2001. Contact au sol, ventilation, essences, obligations légales : nos règles de conception à Libourne.",
  keywords:
    "termites Gironde, protéger le bois des termites, terrasse bois termites, traitement bois termites Libourne, diagnostic termites Gironde, insectes xylophages bois extérieur, arrêté préfectoral termites Gironde, état relatif à la présence de termites",
  path: '/blog/termites-gironde-ouvrage-bois-prevention',
  ogImage: COVER,
  ogTitle: "Termites en Gironde : concevoir un ouvrage bois qui ne leur offre pas le couvert",
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
        name: 'Termites en Gironde',
        item: 'https://lesprit-bois.fr/blog/termites-gironde-ouvrage-bois-prevention',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "Termites en Gironde : comment concevoir un ouvrage en bois qui ne leur offre pas le couvert",
    description:
      "Les termites ne s'attaquent pas au bois parce qu'il est en bois, mais parce qu'il est humide, au contact du sol et jamais ventilé. Contact bois-sol, ventilation de sous-face, réservoirs de cellulose au jardin, essences et classes d'emploi, obligations légales du propriétaire : le point de vue du constructeur, à Libourne et en Gironde.",
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
    datePublished: '2026-08-12',
    dateModified: '2026-08-12',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/termites-gironde-ouvrage-bois-prevention',
    },
    about: ['termites', 'bois extérieur', 'terrasse bois', 'Gironde'],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Toute la Gironde est-elle concernée par les termites ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui. L'arrêté préfectoral du 12 février 2001 institue une zone de surveillance et de lutte contre les termites dans le département de la Gironde, et le département a été déclaré totalement termité : l'ensemble du territoire est concerné, et pas seulement certaines communes. Beaucoup de propriétaires pensent à tort que leur commune est hors zone.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quelle essence de bois résiste aux termites ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Certaines essences présentent une meilleure durabilité naturelle vis-à-vis des insectes que d'autres, mais aucune n'est invulnérable si l'ouvrage reste humide et au contact du sol. Le bon réflexe est de raisonner en classe d'emploi : classe 4 pour un bois en contact avec le sol ou l'eau douce, classe 3 pour un bois extérieur hors contact du sol. L'essence est un facteur parmi d'autres, jamais une garantie à elle seule.",
        },
      },
      {
        '@type': 'Question',
        name: "Une terrasse en bois attire-t-elle les termites vers la maison ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Une terrasse correctement conçue — désolidarisée du sol, ventilée en sous-face, sans bois enterré ni débris de chantier laissés dessous — n'est pas un appât. En revanche, un ouvrage en bois posé à même la terre et fermé sur son pourtour crée exactement les conditions recherchées. Si vous découvrez un foyer dans un ouvrage proche du bâti, c'est un signal à faire diagnostiquer sans attendre : ni une contamination certaine de la maison, ni une découverte à ignorer.",
        },
      },
      {
        '@type': 'Question',
        name: "Faut-il un diagnostic termites pour vendre en Gironde ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "En cas de vente de tout ou partie d'un immeuble bâti, un état du bâtiment relatif à la présence de termites est joint au dossier de diagnostic technique. Cet état est daté et signé, sa durée de validité est de 6 mois, et il doit être réalisé par une personne certifiée par un organisme accrédité par le Cofrac. Les articles L. 126-24 et L. 126-25 du code de la construction et de l'habitation encadrent cette obligation.",
        },
      },
      {
        '@type': 'Question',
        name: "Que faire si je découvre des termites chez moi ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Dès que la présence de termites a été détectée, l'occupant, ou à défaut le propriétaire, doit en informer la mairie. Pour la partie curative, il faut faire appel à une entreprise spécialisée : nous concevons et posons des ouvrages en bois, nous ne sommes pas applicateurs de traitement curatif. Pour établir l'état du bâtiment, c'est un diagnostiqueur certifié qu'il faut solliciter.",
        },
      },
      {
        '@type': 'Question',
        name: "Un traitement du bois suffit-il à protéger une terrasse des termites ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non, pas à lui seul. Un traitement de préservation adapté à la classe d'emploi fait partie de la réponse, mais il ne rattrape pas une pose qui met le bois en contact permanent avec un sol humide, ni une sous-face fermée qui ne sèche jamais. Sur nos chantiers, la prévention se joue d'abord à la conception : rupture de capillarité, garde au sol, ventilation, suppression des réservoirs de cellulose autour de l'ouvrage.",
        },
      },
      {
        '@type': 'Question',
        name: "Existe-t-il un arrêté mérules en Gironde ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non. La Gironde fait l'objet d'un arrêté préfectoral relatif aux termites, mais il n'existe pas d'arrêté préfectoral mérules dans le département. Les deux sujets sont souvent confondus alors qu'ils ne relèvent pas du même dispositif : les termites sont des insectes xylophages, la mérule est un champignon lignivore.",
        },
      },
    ],
  },
];

const faq = [
  {
    q: 'Toute la Gironde est-elle concernée par les termites ?',
    r: (
      <>
        Oui. L&apos;arrêté préfectoral du 12 février 2001 institue une zone de surveillance et de lutte contre les
        termites dans le département de la Gironde, et le département a été déclaré{' '}
        <strong className="text-primary font-semibold">totalement termité</strong> : l&apos;ensemble du territoire est
        concerné, et pas seulement certaines communes. Beaucoup de propriétaires pensent à tort que leur commune est
        hors zone.
      </>
    ),
  },
  {
    q: 'Quelle essence de bois résiste aux termites ?',
    r: (
      <>
        Certaines essences présentent une meilleure durabilité naturelle vis-à-vis des insectes que d&apos;autres, mais
        aucune n&apos;est invulnérable si l&apos;ouvrage reste humide et au contact du sol. Le bon réflexe est de
        raisonner en classe d&apos;emploi : classe 4 pour un bois en contact avec le sol ou l&apos;eau douce, classe 3
        pour un bois extérieur hors contact du sol. L&apos;essence est un facteur parmi d&apos;autres, jamais une
        garantie à elle seule.
      </>
    ),
  },
  {
    q: 'Une terrasse en bois attire-t-elle les termites vers la maison ?',
    r: (
      <>
        Une terrasse correctement conçue — désolidarisée du sol, ventilée en sous-face, sans bois enterré ni débris de
        chantier laissés dessous — n&apos;est pas un appât. En revanche, un ouvrage posé à même la terre et fermé sur
        son pourtour crée exactement les conditions recherchées. Si vous découvrez un foyer dans un ouvrage proche du
        bâti, c&apos;est un signal à faire diagnostiquer sans attendre : ni une contamination certaine de la maison, ni
        une découverte à ignorer.
      </>
    ),
  },
  {
    q: 'Faut-il un diagnostic termites pour vendre en Gironde ?',
    r: (
      <>
        En cas de vente de tout ou partie d&apos;un immeuble bâti, un état du bâtiment relatif à la présence de termites
        est joint au dossier de diagnostic technique. Cet état est daté et signé, sa durée de validité est de{' '}
        <strong className="text-primary font-semibold">6 mois</strong>, et il doit être réalisé par une personne
        certifiée par un organisme accrédité par le Cofrac. Les articles L. 126-24 et L. 126-25 du code de la
        construction et de l&apos;habitation encadrent cette obligation.
      </>
    ),
  },
  {
    q: 'Que faire si je découvre des termites chez moi ?',
    r: (
      <>
        Dès que la présence de termites a été détectée, l&apos;occupant, ou à défaut le propriétaire, doit en informer
        la mairie. Pour la partie curative, il faut faire appel à une entreprise spécialisée : nous concevons et posons
        des ouvrages en bois, nous ne sommes pas applicateurs de traitement curatif. Pour établir l&apos;état du
        bâtiment, c&apos;est un diagnostiqueur certifié qu&apos;il faut solliciter.
      </>
    ),
  },
  {
    q: 'Un traitement du bois suffit-il à protéger une terrasse des termites ?',
    r: (
      <>
        Non, pas à lui seul. Un traitement de préservation adapté à la classe d&apos;emploi fait partie de la réponse,
        mais il ne rattrape pas une pose qui met le bois en contact permanent avec un sol humide, ni une sous-face
        fermée qui ne sèche jamais. Sur nos chantiers, la prévention se joue d&apos;abord à la conception : rupture de
        capillarité, garde au sol, ventilation, suppression des réservoirs de cellulose autour de l&apos;ouvrage.
      </>
    ),
  },
  {
    q: 'Existe-t-il un arrêté mérules en Gironde ?',
    r: (
      <>
        Non. La Gironde fait l&apos;objet d&apos;un arrêté préfectoral relatif aux termites, mais il n&apos;existe pas
        d&apos;arrêté préfectoral mérules dans le département. Les deux sujets sont souvent confondus alors qu&apos;ils
        ne relèvent pas du même dispositif : les termites sont des insectes xylophages, la mérule est un champignon
        lignivore.
      </>
    ),
  },
];

export default function ArticleTermitesGirondePage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="blog" />
      <main id="contenu">
        {/* Hero */}
        <header className="relative pt-40 pb-24 md:pt-48 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="1000"
              height="1333"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Terrasse en bois neuve le long d'une façade, rive et marche décollées du sol, chantier en Gironde"
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
              <span className="text-secondary-fixed">Termites en Gironde</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Bois et termites
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Termites en Gironde : comment concevoir un ouvrage en bois qui ne leur offre pas le couvert
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
              <span>12 août 2026</span>
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
                Les termites ne s&apos;attaquent pas au bois parce qu&apos;il est en bois, mais parce qu&apos;il est
                humide, au contact du sol et jamais ventilé.
              </strong>{' '}
              Ce sont trois défauts de pose, et nous les rencontrons bien plus souvent que des essences mal choisies.
              Cet article n&apos;est pas celui d&apos;une société de traitement : c&apos;est le point de vue du
              constructeur, celui qui décide de la garde au sol d&apos;un poteau, du vide sous une terrasse et de la
              lame d&apos;air d&apos;un bardage. En Gironde, où le département entier est classé en zone à termites, ces
              choix de conception valent bien plus qu&apos;un produit passé au pinceau après coup.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1 — Ce qui attire vraiment les termites */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qui attire vraiment les termites (et ce n&apos;est pas l&apos;essence)
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Les termites qui nous concernent ici vivent dans le sol. Leur colonie y est installée, et c&apos;est
                depuis le sol qu&apos;elle prospecte, en creusant des galeries et en construisant des cordonnets de terre
                pour atteindre une source de cellulose sans jamais s&apos;exposer à l&apos;air libre. Trois conditions les
                intéressent :{' '}
                <strong className="text-primary font-semibold">
                  de la cellulose, de l&apos;humidité et de l&apos;obscurité tranquille
                </strong>
                . Un bois sec, ventilé, visible et accessible à l&apos;œil ne remplit aucune de ces conditions.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est pour cela que la question qu&apos;on nous pose le plus — « quelle essence ne craint pas les
                termites ? » — n&apos;est pas la bonne première question. Elle vient en cinquième position, après
                l&apos;implantation, le contact avec le sol, la ventilation et l&apos;environnement immédiat de
                l&apos;ouvrage. Un bois réputé plus résistant, posé à même la terre et coffré derrière une plinthe
                pleine, se retrouve dans des conditions bien plus favorables aux insectes qu&apos;un bois plus ordinaire
                mais décollé du sol et balayé par l&apos;air.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                En Gironde, le sujet n&apos;est pas théorique. Un{' '}
                <a
                  href="https://www.gironde.gouv.fr/Actions-de-l-Etat/Amenagement-du-territoire-construction-logement/Habitat-logement/Le-risque-termites-et-merules-en-Gironde2/Le-risque-termites-et-merules-en-Gironde"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  arrêté préfectoral du 12 février 2001
                </a>{' '}
                institue une zone de surveillance et de lutte contre les termites dans le département, et{' '}
                <strong className="text-primary font-semibold">
                  la Gironde a été déclarée « totalement termitée »
                </strong>{' '}
                : c&apos;est l&apos;ensemble du département qui est concerné, pas une liste de communes. Nous voyons
                régulièrement des propriétaires convaincus que leur commune est « hors zone » parce qu&apos;ils
                n&apos;ont jamais rien constaté chez eux. Ce n&apos;est pas ainsi que le classement fonctionne.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Deux conséquences en découlent, citées par la préfecture : en cas de vente de tout ou partie d&apos;un
                immeuble bâti, un état du bâtiment relatif à la présence de termites est joint au dossier de diagnostic
                technique ; et en cas de construction ou d&apos;aménagement neuf, des mesures relatives à la protection
                contre les termites s&apos;appliquent. Nous y revenons plus bas. Précisons au passage, parce que la
                confusion est fréquente : il n&apos;existe{' '}
                <strong className="text-primary font-semibold">pas d&apos;arrêté préfectoral mérules</strong> en Gironde.
                Les termites sont des insectes, la mérule est un champignon, et les deux dispositifs ne se recouvrent
                pas.
              </p>
            </section>

            {/* 2 — Contact bois-sol */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le contact bois-sol : le défaut de pose n° 1 sur nos chantiers
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Quand nous reprenons un ouvrage dégradé, la cause est presque toujours la même :{' '}
                <strong className="text-primary font-semibold">
                  quelque part, du bois touche la terre ou un béton qui reste humide
                </strong>
                . Un poteau de carport scellé directement dans un plot de béton, une lambourde posée à plat sur une
                dalle sans cale, un bardage qui descend jusqu&apos;au sol fini, une bordure de terrasse enterrée de
                quelques centimètres pour « faire propre » : autant de points où l&apos;eau remonte par capillarité et
                où le bois ne sèche plus jamais.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ce contact fait deux cadeaux aux termites d&apos;un coup. Il maintient le bois à un taux d&apos;humidité
                confortable pour eux, et il leur offre un accès direct depuis le sol, à l&apos;abri du regard. Une
                colonie n&apos;a alors même pas besoin de construire un cordonnet visible sur une façade : elle passe
                sous l&apos;ouvrage.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Nos règles de pose, constatées et éprouvées sur nos chantiers en Gironde — ce sont nos usages
                d&apos;entreprise, pas des valeurs normatives :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Aucun bois structurel enterré', 'les poteaux reposent sur un sabot ou un pied métallique réglable, jamais noyés dans le béton. Le pied décolle le bois du support de 2 à 5 cm et laisse l’eau s’évacuer.'],
                  ['Une rupture de capillarité systématique', 'une cale ou une bande d’étanchéité entre le bois et tout support minéral : plot, dalle, muret, longrine.'],
                  ['Une garde au sol sur le bardage', 'nous arrêtons le bardage à une dizaine de centimètres au-dessus du sol fini, avec une grille anti-rongeurs en pied de lame d’air.'],
                  ['Des points de contrôle visibles', 'ce qui reste visible reste inspectable : un cordonnet de terre le long d’un plot se repère en dix secondes, sous une plinthe pleine il ne se repère jamais.'],
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
                Ce dernier point est le plus sous-estimé. La meilleure protection d&apos;un ouvrage extérieur, c&apos;est
                qu&apos;on puisse en faire le tour et regarder dessous. Une conception qui laisse voir le pied des
                appuis transforme une découverte tardive en simple contrôle de routine.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Carport-bois-Libourne-2.webp"
              w={1200}
              h={646}
              alt="Poteau de carport en bois posé sur un pied métallique, décollé du sol, chantier en Gironde"
              caption="Le poteau de droite repose sur son pied métallique, à quelques centimètres du gravier : ni bois enterré, ni scellement dans le béton, et un pied qu'on peut inspecter debout."
            />

            {/* 3 — Ventiler la sous-face */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ventiler la sous-face : pourquoi une terrasse bien ventilée se défend seule
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une terrasse en bois, un plancher d&apos;abri ou un bardage ne sèchent que par leur face cachée. Si
                l&apos;air ne circule pas dessous, l&apos;humidité du sol s&apos;accumule dans un volume clos, tiède et
                sombre :{' '}
                <strong className="text-primary font-semibold">
                  c&apos;est exactement le milieu que recherchent les insectes xylophages
                </strong>
                . À l&apos;inverse, une sous-face traversée par l&apos;air reste sèche, donc peu attractive, et les
                éventuels cordonnets y deviennent visibles.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Nous ne détaillons pas ici toute la mise en œuvre de la structure : nous l&apos;avons déjà fait dans
                notre guide{' '}
                <a href="/blog/terrasse-bois-structure-plots-lambourdes" className={lienInterne}>
                  structure de terrasse bois : plots, lambourdes et ventilation
                </a>
                , qui traite en détail la hauteur de vide, l&apos;entraxe et le drainage. Retenons ce qui compte du point
                de vue des termites :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Un vide continu sous les lambourdes, jamais interrompu par un remblai ou une chape rapportée après coup.',
                  'Une ventilation traversante : au moins deux côtés opposés ouverts, pour créer un vrai courant d’air et pas une poche fermée.',
                  'Un pourtour qui respire : si l’esthétique impose une finition, une claire-voie ou une grille inox, jamais une plinthe pleine collée au sol.',
                  'Un fond propre : géotextile et gravier plutôt que terre végétale, et aucun bois abandonné sous l’ouvrage — chutes, cales de réglage, coffrages perdus.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Cette dernière ligne mérite qu&apos;on s&apos;y arrête. Les chutes de coupe laissées sous une terrasse
                sont, à notre expérience, la faute la plus banale et la plus coûteuse : on referme un ouvrage sur une
                réserve de cellulose humide, posée à même le sol, invisible pour dix ans. Nous sortons systématiquement
                les chutes du chantier avant de fermer.
              </p>
            </section>

            <Figure
              src="/images/terrasse-bois-plots-gironde-2.webp"
              w={1200}
              h={900}
              alt="Terrasse en bois sur plots réglables, vide ventilé visible sous la rive, chantier en Gironde"
              caption="Rive laissée ouverte, plots métalliques apparents, sol nu et propre dessous : l'air traverse la structure au lieu de stagner sous le platelage."
            />

            {/* 4 — Réservoirs de cellulose */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Bûches, souches et bois stockés : les réservoirs qu&apos;on installe soi-même
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                On peut soigner un ouvrage au millimètre et lui installer un garde-manger à trois mètres. Dans un jardin
                girondin, les réservoirs de cellulose les plus fréquents sont toujours les mêmes :{' '}
                <strong className="text-primary font-semibold">
                  une souche laissée en terre après un abattage, un tas de bûches posé à même le sol contre le mur, des
                  palettes oubliées derrière l&apos;abri
                </strong>
                , des traverses en bordure de potager, un paillage épais poussé contre un bardage, ou des piquets de
                clôture cassés qu&apos;on n&apos;a jamais retirés.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ces éléments ne « créent » pas les termites, mais ils entretiennent une source de nourriture humide,
                permanente et directement reliée au sol, à proximité immédiate de vos ouvrages et parfois de votre
                maison. C&apos;est le point sur lequel un constructeur peut agir sans rien traiter du tout.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Nos recommandations d&apos;implantation, là encore issues de nos chantiers et non d&apos;une norme :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Ne jamais stocker le bois de chauffage à même la terre : sur un support non cellulosique (parpaings, plots, structure métallique), surélevé de quelques centimètres.',
                  'Décoller la pile du mur d’au moins 50 cm, pour que l’air passe derrière et qu’on puisse regarder ce qui s’y passe.',
                  'Arracher les souches plutôt que les laisser se décomposer en terre, surtout à proximité du bâti ou d’un ouvrage neuf.',
                  'Évacuer les bois de chantier, coffrages et palettes dès la fin des travaux — rien d’enterré, rien de laissé sous une structure.',
                  'Tenir les paillages et écorces à distance des pieds de bardage et des lames d’air.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Quand nous dessinons un{' '}
                <a href="/amenagement-exterieur" className={lienInterne}>
                  aménagement extérieur complet
                </a>
                , cette logique fait partie du plan au même titre que les cheminements ou l&apos;éclairage : on décide
                où va le bois de chauffage, comment il est surélevé et à quelle distance des murs, avant de construire —
                pas trois ans après.
              </p>
            </section>

            <Figure
              src="/images/blog/termites-gironde-ouvrage-bois-prevention/bois-de-chauffage-empile-sol-contre-mur.jpg"
              w={1200}
              h={901}
              alt="Bûches de bois de chauffage empilées à même le sol, plaquées contre le mur d'un appentis de jardin"
              caption="Le stockage à éviter : posé sur la terre, collé au mur, jamais déplacé. Surélever la pile sur des parpaings et la décaler de 50 cm ne coûte rien et change tout."
            />

            {/* 5 — Essences, classes d'emploi, traitements */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Essences, classes d&apos;emploi et traitements : ce qu&apos;ils font et ne font pas
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Venons-en à la question de départ, maintenant qu&apos;elle est à sa place. Oui, les essences ne se valent
                pas : certaines présentent une durabilité naturelle plus élevée vis-à-vis des insectes, d&apos;autres
                beaucoup moins.{' '}
                <strong className="text-primary font-semibold">
                  Mais aucune essence n&apos;est invulnérable si l&apos;ouvrage reste humide et au contact du sol
                </strong>{' '}
                — et méfiez-vous de tout discours qui vous promet l&apos;inverse.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le vocabulaire utile est celui des <strong className="text-primary font-semibold">classes
                d&apos;emploi</strong>, qui décrivent l&apos;exposition à laquelle un bois est destiné : la classe 4 pour
                un bois en contact avec le sol ou l&apos;eau douce, la classe 3 pour un bois extérieur hors contact du
                sol. La documentation technique de{' '}
                <a href="https://www.fcba.fr/" className={lienInterne} target="_blank" rel="noopener noreferrer">
                  l&apos;institut technologique FCBA
                </a>{' '}
                détaille ces classes et la durabilité des essences. Deux précisions de terrain :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['La durabilité naturelle concerne le duramen', 'la part tendre et claire du bois (l’aubier) n’en bénéficie pas, quelle que soit l’essence — d’où l’importance du choix de la qualité, pas seulement du nom de l’essence.'],
                  ['Un traitement de préservation n’est pas un traitement curatif', 'le premier prépare un bois neuf à son exposition, le second combat une infestation déclarée. Ce sont deux métiers différents.'],
                  ['Les coupes et perçages faits sur le chantier ouvrent le bois', 'les recoupes de bois traité doivent être reprises en bout, sinon on offre une entrée non protégée là où on vient de scier.'],
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
                Disons-le franchement :{' '}
                <strong className="text-primary font-semibold">
                  nous concevons et posons des ouvrages en bois, nous ne sommes pas applicateurs de traitement curatif
                </strong>
                . Si une infestation est déclarée, c&apos;est une entreprise spécialisée qu&apos;il faut appeler, et un
                diagnostiqueur certifié pour établir l&apos;état du bâtiment. Notre rôle s&apos;arrête — et se joue
                entièrement — à la conception et à la mise en œuvre.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Pour choisir l&apos;essence en connaissance de cause, notre guide{' '}
                <a href="/blog/quel-bois-pour-terrasse-exterieure" className={lienInterne}>
                  quel bois pour une terrasse extérieure
                </a>{' '}
                compare durabilité, teinte et budget ; côté façade, l&apos;article{' '}
                <a href="/blog/bardage-bois-facade-essences-pose" className={lienInterne}>
                  bardage bois : essences et pose
                </a>{' '}
                détaille la lame d&apos;air ventilée, qui joue ici exactement le même rôle que le vide sous une terrasse.
              </p>
            </section>

            <Figure
              src="/images/bardage-bois-douglas-gironde.webp"
              w={1000}
              h={1333}
              alt="Bardage bois douglas à couvre-joint sur une façade en Gironde, lames arrêtées au-dessus du soubassement"
              caption="Ici, les lames s'arrêtent au-dessus du soubassement maçonné : derrière elles, la lame d'air sèche la façade, et le bas du bardage ne trempe jamais dans la terre."
            />

            {/* 6 — Ce que la loi demande */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Vous en trouvez : ce que la loi vous demande
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Trouver un foyer de termites dans un jardin n&apos;est ni une catastrophe immédiate ni une affaire à
                traiter en silence. C&apos;est un fait qui déclenche des obligations précises, rappelées par{' '}
                <a
                  href="https://www.ecologie.gouv.fr/politiques-publiques/termites-insectes-xylophages-champignons-lignivores"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  le ministère chargé de l&apos;écologie
                </a>
                . Voici ce qu&apos;il faut en retenir, dans l&apos;ordre où cela vous concerne.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Déclarer en mairie', '« dès que la présence de termite a été détectée, l’occupant, ou à défaut le propriétaire, doit en informer la mairie ». C’est la première démarche, et elle ne coûte rien.'],
                  ['L’arrêté préfectoral', 'lorsque des foyers sont identifiés, un arrêté préfectoral délimite les zones concernées — articles L. 126-4 à L. 126-6 du code de la construction et de l’habitation. En Gironde, c’est l’arrêté de 2001, applicable à tout le département.'],
                  ['En cas de vente', 'un état relatif à la présence de termites est joint au dossier de diagnostic technique — articles L. 126-24 et L. 126-25. Il est daté et signé, sa durée de validité est de 6 mois, et il doit être réalisé par une personne certifiée par un organisme accrédité par le Cofrac.'],
                  ['Les bois de démolition', '« les bois et les matériaux contaminés issus des travaux de démolition doivent être incinérés sur place ou traités avant tout transport » — articles R. 126-2 à R. 126-4. Autrement dit : on ne déplace pas un bois contaminé sans précaution.'],
                  ['En construction neuve', 'des mesures relatives à la protection contre les termites s’appliquent aux constructions et aménagements neufs — articles R. 131-1 à R. 131-3.'],
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
                Pour situer votre commune dans le paysage national, le Cerema publie une{' '}
                <a
                  href="https://www.cerema.fr/fr/actualites/cartographie-nationale-termites-merules"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cartographie nationale termites et mérules
                </a>{' '}
                — utile, notamment, si vous possédez un bien hors Gironde et voulez comparer.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Un mot sur la juste mesure, parce que le sujet se prête aux deux excès. Un foyer découvert dans une
                souche ou un tas de bûches au fond du jardin ne signifie pas que votre maison est contaminée ; mais un
                foyer proche du bâti est un signal qu&apos;il faut{' '}
                <strong className="text-primary font-semibold">faire diagnostiquer sans attendre</strong>, par un
                professionnel certifié. Ni panique, ni haussement d&apos;épaules : un constat, puis un avis compétent.
              </p>
            </section>

            {/* 7 — Concevoir en Gironde */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Concevoir en Gironde : nos règles de pose sur terrasse, carport et bardage
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Travailler le bois à Libourne et dans toute la Gironde, dans un département entièrement classé en zone à
                termites, ne nous a jamais fait renoncer au bois — cela nous a fait{' '}
                <strong className="text-primary font-semibold">changer notre manière de le poser</strong>. Voici, ouvrage
                par ouvrage, ce que cela donne concrètement sur nos chantiers.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Terrasse', 'structure sur plots, vide continu et ventilé sur au moins deux côtés opposés, géotextile et gravier au sol, aucune chute laissée dessous, finition de rive en claire-voie plutôt qu’en plinthe pleine.'],
                  ['Carport et abri', 'poteaux sur sabots métalliques, jamais de bois scellé dans le béton, pieds visibles et inspectables, pente et évacuation d’eau étudiées pour que rien ne stagne au pied des appuis.'],
                  ['Bardage', 'lame d’air ventilée continue, grille de pied, garde au sol d’une dizaine de centimètres, et pas de massif végétal ni de paillage poussé contre le bas de la façade.'],
                  ['Clôture et ouvrages de jardin', 'poteaux sur platines ou pieds métalliques quand la configuration le permet, plutôt que scellés en pleine terre ; bois enterré réduit au strict nécessaire.'],
                  ['Abords', 'stockage du bois de chauffage surélevé et écarté du bâti, souches arrachées, chantier laissé propre — c’est la moitié de la prévention, et elle ne coûte rien.'],
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
                Ajoutons une habitude simple, à prendre chez soi : une fois par an, à la belle saison, faites le tour de
                vos ouvrages. Regardez le pied des poteaux, le bas du bardage, le pourtour de la terrasse, la base des
                murets. Vous cherchez des cordonnets de terre, un bois qui sonne creux, une lame qui s&apos;enfonce sous
                le pouce. Dix minutes par an, et une conception qui laisse tout cela visible : c&apos;est la meilleure
                surveillance qui soit.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ces principes irriguent tout ce que nous construisons, des{' '}
                <a href="/constructions-bois" className={lienInterne}>
                  constructions bois
                </a>{' '}
                aux petits ouvrages de jardin. Vous pouvez en voir la traduction concrète dans{' '}
                <a href="/realisations" className={lienInterne}>
                  nos réalisations en Gironde
                </a>{' '}
                : sur la plupart des photos, ce qui protège l&apos;ouvrage est justement ce qui se voit le moins — le
                vide sous la structure et le pied décollé du sol.
              </p>
            </section>
          </div>
        </article>

        <div className="bg-surface pb-section-padding">
          <div className="max-w-3xl mx-auto px-6 md:px-16">
            <Figure
              src="/images/source-adefrance/carport-bois-libourne.webp"
              w={1200}
              h={646}
              alt="Carport en bois achevé sur sol gravillonné drainant, pieds de poteaux dégagés, réalisation L'Esprit Bois en Gironde"
              caption="Un de nos carports bois en Gironde : sol gravillonné drainant, pieds de poteaux visibles, aucune chute de bois laissée au sol après le chantier."
            />
          </div>
        </div>

        {/* FAQ */}
        <section className="py-section-padding bg-surface-container-low">
          <div className="max-w-4xl mx-auto px-6 md:px-16">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
              Questions fréquentes
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-12">
              Termites et ouvrages en bois : vos questions
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
              Construire en bois en Gironde, sans naïveté
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              La Gironde est classée en zone à termites depuis l&apos;arrêté préfectoral de 2001, et cela ne nous
              empêche pas de construire en bois : cela nous oblige à bien le poser. Rupture de capillarité, garde au
              sol, sous-face ventilée, abords tenus propres — la prévention se joue à la conception, et aucun produit ne
              rattrape une pose qui laisse le bois dans la terre. C&apos;est ainsi que nous travaillons chez L&apos;Esprit
              Bois, à Libourne et dans toute la Gironde ; pour le curatif et le diagnostic, nous vous orientons vers des
              professionnels certifiés.
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
