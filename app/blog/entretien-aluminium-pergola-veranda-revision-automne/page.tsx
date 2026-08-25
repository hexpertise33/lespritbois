import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/realisations/pergola-aluminium-terrasse-bois-libourne-1.webp';

export const metadata: Metadata = buildMetadata({
  title: "Entretien d'une pergola ou d'une véranda en aluminium | Gironde",
  description:
    "Pergola, véranda et menuiseries en aluminium : ce qu'il faut vraiment vérifier avant l'automne, évacuations, joints, lames, motorisation. En Gironde.",
  keywords:
    "entretien aluminium, entretien pergola aluminium, nettoyer une pergola bioclimatique, hivernage pergola aluminium, entretien véranda aluminium Gironde, entretien menuiserie aluminium Libourne, nettoyage profilé thermolaqué, évacuation d'eau pergola, entretien store zip, aluminium entretien Gironde",
  path: '/blog/entretien-aluminium-pergola-veranda-revision-automne',
  ogImage: COVER,
  ogTitle:
    "Entretien de l'aluminium : la révision d'avant-automne d'une pergola ou d'une véranda en Gironde",
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
        name: "Entretien de l'aluminium",
        item: 'https://lesprit-bois.fr/blog/entretien-aluminium-pergola-veranda-revision-automne',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      "Entretenir sa pergola, sa véranda et ses menuiseries en aluminium : la révision d'avant-automne",
    description:
      "Un ouvrage en aluminium ne s'entretient pas vraiment, il se surveille. Ce qui lâche, ce sont les évacuations d'eau bouchées, les joints fatigués et la motorisation que personne ne regarde jamais : la révision à faire avant la chute des feuilles, les gestes qui abîment le thermolaquage, les symptômes qui doivent alerter et notre calendrier d'entretien en Gironde.",
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
    datePublished: '2026-08-15',
    dateModified: '2026-08-15',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/entretien-aluminium-pergola-veranda-revision-automne',
    },
    about: [
      { '@type': 'Thing', name: 'entretien aluminium' },
      { '@type': 'Thing', name: 'pergola aluminium' },
      { '@type': 'Thing', name: 'véranda aluminium' },
      { '@type': 'Thing', name: 'thermolaquage' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Comment nettoyer une pergola bioclimatique en aluminium ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "À l'eau tiède savonneuse, avec une éponge non abrasive ou un chiffon doux, puis un rinçage à l'eau claire et un essuyage. Rien d'autre n'est utile sur un profilé thermolaqué. On évite les poudres à récurer, les éponges grattantes, les solvants et les nettoyants de façade agressifs, qui ternissent définitivement la finition. Le nettoyage des profilés est la partie la moins importante de l'entretien : ce sont les évacuations d'eau qui méritent le vrai temps passé.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faut-il hiverner une pergola en aluminium ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Une structure aluminium n'a pas besoin d'être hivernée : elle ne craint ni le gel ni la pluie. Ce qui se décide avant l'hiver, ce sont les équipements : évacuations dégagées avant la chute des feuilles, lames laissées en position ouverte ou fermée selon l'usage, stores toile remontés et capteur de vent en service. Sur une exposition très ventée, ou si vous n'utilisez plus la terrasse jusqu'au printemps, la dépose d'une toile de store peut se justifier, c'est une question d'exposition, pas de matériau.",
        },
      },
      {
        '@type': 'Question',
        name: 'À quelle fréquence entretenir des menuiseries en aluminium ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Il n'existe pas de fréquence obligatoire. Le rythme que nous conseillons à nos clients en Gironde : une révision complète en fin d'été, avant la chute des feuilles, un second passage rapide sur les évacuations en novembre, et un lavage des profilés et des rails en sortie d'hiver. Un ouvrage implanté sous des arbres à feuilles caduques demande deux fois plus de passages qu'un ouvrage en plein découvert : c'est l'environnement qui commande, pas le calendrier.",
        },
      },
      {
        '@type': 'Question',
        name: "Peut-on utiliser un nettoyeur haute pression sur de l'aluminium ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Nous le déconseillons. Le profilé lui-même encaisse, mais le jet passe derrière les joints, décolle un mastic de raccord, déchausse un joint de lame, marque une toile de store et chasse l'eau vers l'intérieur d'une véranda. Les dégâts que nous constatons après un lavage haute pression concernent presque toujours l'étanchéité, jamais la peinture. Un tuyau d'arrosage et une éponge font mieux le travail, sans risque.",
        },
      },
      {
        '@type': 'Question',
        name: "L'eau déborde de ma pergola quand il pleut : que faire ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "C'est le symptôme d'une évacuation obstruée, presque toujours par des feuilles, des mousses ou un dépôt de pollen compacté dans le chéneau ou dans la descente intégrée au poteau. Tant que l'eau ne s'évacue pas, elle cherche un autre chemin : le raccord à la maison, la sous-face des lames, le pied de poteau. Il faut dégager le chéneau et vérifier l'écoulement, sans jamais monter ni marcher sur la couverture. Si l'eau ne repart pas après nettoyage, la descente est bouchée plus bas : appelez votre poseur.",
        },
      },
      {
        '@type': 'Question',
        name: 'Que faire si le moteur de ma pergola ou de mon store ne répond plus ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "On commence par le plus simple : pile de télécommande, absence d'obstacle dans la course, capteur de vent ou de pluie encrassé, et une lecture de la notice du fabricant. Au-delà, on s'arrête. Un bruit anormal, un échauffement, une course qui ne va plus en butée, un store qui remonte de travers ou un disjoncteur qui saute imposent de couper l'alimentation et de ne plus actionner l'ouvrage. L'intervention sur un moteur, un coffret, un câblage ou une carte électronique relève de l'installateur ou d'un électricien qualifié, ce n'est pas un geste d'entretien.",
        },
      },
    ],
  },
];

const calendrier = [
  [
    'Fin août à septembre',
    'La révision complète : évacuations, joints, manœuvre et capteurs',
    "C'est la seule fenêtre où elle sert encore : après la chute des feuilles et les premières grosses pluies, le mal est fait.",
  ],
  [
    'Novembre, feuilles tombées',
    'Deuxième passage, uniquement sur les chéneaux et les descentes',
    'Dix minutes qui évitent un débordement pendant tout l’hiver girondin.',
  ],
  [
    'Sortie d’hiver, mars',
    'Lavage des profilés, des rails de coulissants et des drains de seuil',
    'On enlève le dépôt de l’hiver avant que le pollen de printemps ne s’y colle.',
  ],
  [
    'Plein été',
    'Rinçage à l’eau claire après un gros épisode de pollen ou de poussière',
    'Facultatif, purement esthétique : le laquage ne souffre pas d’un peu de dépôt.',
  ],
];

const faq = [
  {
    q: 'Comment nettoyer une pergola bioclimatique en aluminium ?',
    r: (
      <>
        À l&apos;eau tiède savonneuse, avec une éponge non abrasive ou un chiffon doux, puis un rinçage à l&apos;eau
        claire et un essuyage. Rien d&apos;autre n&apos;est utile sur un profilé thermolaqué. On évite les poudres à
        récurer, les éponges grattantes, les solvants et les nettoyants de façade agressifs, qui ternissent
        définitivement la finition. Le nettoyage des profilés est la partie la moins importante de l&apos;entretien : ce
        sont les évacuations d&apos;eau qui méritent le vrai temps passé.
      </>
    ),
  },
  {
    q: 'Faut-il hiverner une pergola en aluminium ?',
    r: (
      <>
        Une structure aluminium n&apos;a pas besoin d&apos;être hivernée : elle ne craint ni le gel ni la pluie. Ce qui
        se décide avant l&apos;hiver, ce sont les équipements : évacuations dégagées avant la chute des feuilles, lames
        laissées en position ouverte ou fermée selon l&apos;usage, stores toile remontés et capteur de vent en service.
        Sur une exposition très ventée, ou si vous n&apos;utilisez plus la terrasse jusqu&apos;au printemps, la dépose
        d&apos;une toile de store peut se justifier, c&apos;est une question d&apos;exposition, pas de matériau.
      </>
    ),
  },
  {
    q: 'À quelle fréquence entretenir des menuiseries en aluminium ?',
    r: (
      <>
        Il n&apos;existe pas de fréquence obligatoire. Le rythme que nous conseillons à nos clients en Gironde : une
        révision complète en fin d&apos;été, avant la chute des feuilles, un second passage rapide sur les évacuations en
        novembre, et un lavage des profilés et des rails en sortie d&apos;hiver. Un ouvrage implanté sous des arbres à
        feuilles caduques demande deux fois plus de passages qu&apos;un ouvrage en plein découvert : c&apos;est
        l&apos;environnement qui commande, pas le calendrier.
      </>
    ),
  },
  {
    q: "Peut-on utiliser un nettoyeur haute pression sur de l'aluminium ?",
    r: (
      <>
        Nous le déconseillons. Le profilé lui-même encaisse, mais le jet passe derrière les joints, décolle un mastic de
        raccord, déchausse un joint de lame, marque une toile de store et chasse l&apos;eau vers l&apos;intérieur
        d&apos;une véranda. Les dégâts que nous constatons après un lavage haute pression concernent presque toujours
        l&apos;étanchéité, jamais la peinture. Un tuyau d&apos;arrosage et une éponge font mieux le travail, sans risque.
      </>
    ),
  },
  {
    q: "L'eau déborde de ma pergola quand il pleut : que faire ?",
    r: (
      <>
        C&apos;est le symptôme d&apos;une évacuation obstruée, presque toujours par des feuilles, des mousses ou un dépôt
        de pollen compacté dans le chéneau ou dans la descente intégrée au poteau. Tant que l&apos;eau ne s&apos;évacue
        pas, elle cherche un autre chemin : le raccord à la maison, la sous-face des lames, le pied de poteau. Il faut
        dégager le chéneau et vérifier l&apos;écoulement, sans jamais monter ni marcher sur la couverture. Si l&apos;eau
        ne repart pas après nettoyage, la descente est bouchée plus bas : appelez votre poseur.
      </>
    ),
  },
  {
    q: 'Que faire si le moteur de ma pergola ou de mon store ne répond plus ?',
    r: (
      <>
        On commence par le plus simple : pile de télécommande, absence d&apos;obstacle dans la course, capteur de vent ou
        de pluie encrassé, et une lecture de la notice du fabricant. Au-delà, on s&apos;arrête. Un bruit anormal, un
        échauffement, une course qui ne va plus en butée, un store qui remonte de travers ou un disjoncteur qui saute
        imposent de couper l&apos;alimentation et de ne plus actionner l&apos;ouvrage. L&apos;intervention sur un moteur,
        un coffret, un câblage ou une carte électronique relève de l&apos;installateur ou d&apos;un électricien
        qualifié, ce n&apos;est pas un geste d&apos;entretien.
      </>
    ),
  },
];

export default function ArticleEntretienAluminiumPage() {
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
              height="900"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Pergola en aluminium thermolaqué anthracite adossée à une maison, vue d'ensemble avant la révision d'entretien d'avant-automne, en Gironde"
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
              <span className="text-secondary-fixed">Entretien de l&apos;aluminium</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Entretien aluminium
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Entretenir sa pergola, sa véranda et ses menuiseries en aluminium : la révision
              d&apos;avant-automne
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
              <span>15 août 2026</span>
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
                Un ouvrage en aluminium ne s&apos;entretient pas vraiment, il se surveille. Le thermolaquage ne demande
                qu&apos;un lavage à l&apos;eau savonneuse ; ce qui lâche, sur nos chantiers, ce sont les évacuations
                d&apos;eau bouchées, les joints fatigués et la motorisation que personne n&apos;a jamais regardée.
              </strong>{' '}
              Autrement dit : la seule intervention qui compte vraiment avant l&apos;hiver, c&apos;est de{' '}
              <strong className="text-primary font-semibold">
                dégager les évacuations avant la chute des feuilles
              </strong>,
              pas d&apos;astiquer les profilés. Et c&apos;est maintenant que ça se joue, une fois les chéneaux pleins
              et les premières grosses pluies passées, la révision ne sert plus à grand-chose. Voici, pièce par pièce, ce
              que nous regardons sur une pergola, une véranda ou des menuiseries aluminium en Gironde, ce qui doit vous
              alerter, et où s&apos;arrête le bricolage.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1, Ce que l'alu demande vraiment */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce que l&apos;aluminium demande vraiment, et ce qu&apos;il ne demande pas
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Commençons par la bonne nouvelle, celle qui explique pourquoi tant de clients choisissent l&apos;alu :{' '}
                <strong className="text-primary font-semibold">
                  le métal, lui, ne demande rien.
                </strong>{' '}
                Il ne pourrit pas, ne travaille pas avec l&apos;humidité, ne se fend pas, ne se ponce pas, ne se lasure
                pas. Aucun saturateur à repasser tous les deux ans, aucune reprise de teinte à prévoir. Un profilé
                thermolaqué posé correctement traverse les saisons sans que vous ayez à y toucher.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ce qui vieillit sur un ouvrage aluminium, ce n&apos;est jamais l&apos;aluminium : c&apos;est{' '}
                <strong className="text-primary font-semibold">tout ce qu&apos;on lui a accroché.</strong> Les joints qui
                assurent l&apos;étanchéité entre deux lames ou autour d&apos;un vitrage. Les chéneaux et les descentes qui
                évacuent l&apos;eau. Les rails et les coulisses dans lesquels glissent une baie ou un store. Le moteur, la
                télécommande, le capteur de vent. Et le raccord à la maison, ce point de couture entre votre ouvrage et
                votre façade. Voilà les cinq organes à surveiller, le reste est cosmétique.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                D&apos;où une hiérarchie très simple, que nous répétons à chaque livraison de chantier :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Ce qui compte vraiment', 'les évacuations d’eau dégagées, avant l’automne. Si vous ne faites qu’une seule chose dans l’année, c’est celle-là.'],
                  ['Ce qui compte beaucoup', 'un tour d’inspection des joints, du raccord à la façade et des organes mobiles, et une manœuvre complète de la motorisation.'],
                  ['Ce qui compte peu', 'le lavage des profilés : agréable à l’œil, utile pour repérer un défaut au passage, mais sans effet sur la durée de vie de l’ouvrage.'],
                  ['Ce qui ne se fait pas', 'décaper, poncer, repeindre au rouleau, dégripper un rail, mastiquer par-dessus un joint fatigué, démonter un coffret électrique.'],
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
                Cette révision d&apos;avant-automne prend une petite heure sur une pergola, un peu plus sur une véranda.
                Elle ne remplace pas le regard d&apos;un poseur, mais elle attrape 90 % des problèmes que nous voyons
                arriver en dépannage au premier coup de vent d&apos;ouest.
              </p>
            </section>

            {/* 2, Thermolaquage */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le thermolaquage : laver, jamais décaper (et le geste qui l&apos;abîme)
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La teinte de vos profilés n&apos;est pas une peinture appliquée au pinceau : c&apos;est une poudre
                projetée sur le métal préparé, puis cuite au four. Cette finition est dure et stable, les laqueurs
                sérieux travaillent d&apos;ailleurs sous label de qualité, du type Qualicoat, ou Qualimarine pour les
                ambiances marines, ce qui en dit long sur la rigueur du process. Mais c&apos;est une{' '}
                <strong className="text-primary font-semibold">finition, pas une armure</strong> : elle se raye, et
                surtout elle se ternit définitivement si on l&apos;agresse.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le geste juste tient en une phrase :{' '}
                <strong className="text-primary font-semibold">
                  eau tiède savonneuse, éponge non abrasive ou chiffon doux, rinçage à l&apos;eau claire, essuyage.
                </strong>{' '}
                On descend un profilé de haut en bas, on n&apos;oublie pas la sous-face des lames et des traverses, où le
                dépôt s&apos;accumule le plus, ni la feuillure basse des ouvrants. Sur une véranda, on lave par temps
                couvert : le savon qui sèche au soleil laisse des voiles.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Et voici ce que nous voyons régulièrement, et qui abîme pour de bon :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'L’éponge grattante ou la poudre à récurer : elles matifient le laquage par micro-rayures, et la trace reste visible en lumière rasante, pour toujours.',
                  'Le solvant, l’acétone, l’alcool ménager, le nettoyant de façade acide ou basique : ils attaquent la finition, parfois en quelques minutes sur une teinte foncée.',
                  'Le nettoyeur haute pression : il passe derrière les joints, décolle un mastic de raccord, déchausse un joint de lame et chasse l’eau vers l’intérieur. Le laquage résiste, l’étanchéité, non.',
                  'La retouche improvisée au pinceau sur une rayure, avec la première bombe de peinture venue : la teinte ne tombe jamais juste et la reprise se voit plus que la rayure.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Sur la question précise de la rayure et de la retouche d&apos;un profilé, nous avons déjà détaillé la
                marche à suivre, codes de teinte, effet de la finition mat, satinée ou sablée sur la discrétion d&apos;une
                reprise, dans notre article sur{' '}
                <a href="/blog/choisir-teinte-ral-aluminium" className={lienInterne}>
                  le choix de la teinte RAL en aluminium
                </a>
                . Inutile de le refaire ici : retenez seulement qu&apos;une rayure superficielle sur un profilé
                n&apos;est jamais une urgence, et qu&apos;une reprise ratée, si.
              </p>
            </section>

            <Figure
              src="/images/realisations/terrasse-bois-pergola-aluminium-libourne-7.webp"
              w={825}
              h={1100}
              alt="Poteau en aluminium thermolaqué gris anthracite d'une pergola adossée, finition mate vue de près, chantier en Gironde"
              caption="La lumière rasante est le meilleur révélateur du laquage : c'est sous cet angle qu'une micro-rayure d'éponge grattante se voit, et qu'elle ne s'efface plus."
            />

            {/* 3, Évacuations */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Évacuations d&apos;eau : le vrai point de panne d&apos;une pergola ou d&apos;une véranda
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est le cœur de cet article, et de loin le premier motif de nos dépannages d&apos;automne. On
                oublie souvent qu&apos;une pergola à lames orientables ou une véranda est aussi{' '}
                <strong className="text-primary font-semibold">un ouvrage de couverture</strong> : quand il pleut, toute
                l&apos;eau de la surface couverte est collectée par des chéneaux intégrés aux traverses, puis descend
                dans les poteaux, les descentes sont invisibles, c&apos;est toute l&apos;élégance du système, pour
                ressortir en pied par un orifice de quelques centimètres seulement.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Quelques centimètres. C&apos;est peu, et c&apos;est là que tout se joue. En Gironde, une pergola posée
                sous un tilleul, un platane, un érable ou à côté d&apos;un pin encaisse en trois semaines d&apos;automne
                de quoi obstruer complètement un chéneau. Ajoutez le pollen du printemps précédent qui a fait de la boue
                au fond, quelques mousses, parfois un nid : la section utile disparaît sans que rien ne se voie
                d&apos;en bas.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Les symptômes qui doivent vous alerter, par ordre de gravité :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'L’eau déborde du chéneau en rideau au lieu de sortir en pied de poteau : l’évacuation est déjà obstruée.',
                  'Une flaque persistante au pied d’un poteau, ou au contraire aucun écoulement visible alors qu’il pleut fort.',
                  'Une coulure, une trace verticale ou une auréole sur un poteau ou sur le mur, sous le raccord à la maison : l’eau a trouvé un autre chemin.',
                  'Un bruit de gargouillis, ou de l’eau qui goutte en sous-face des lames une fois la pluie terminée.',
                  'Sur une véranda : une trace au plafond ou en tête de vitrage, à distinguer d’une simple condensation (voir plus bas).',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le geste, lui, n&apos;a rien de technique : dégager à la main les feuilles et le dépôt du chéneau
                accessible, rincer doucement au tuyau, puis{' '}
                <strong className="text-primary font-semibold">verser un seau d&apos;eau et regarder ce qui ressort</strong>{' '}
                en pied de poteau. Si l&apos;eau ne repart pas franchement, la descente est bouchée plus bas et il faut
                appeler votre poseur : on ne débouche pas une descente intégrée en enfonçant un fil de fer, on risque de
                déchausser un joint interne.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Deux règles de sécurité, sans discussion :{' '}
                <strong className="text-primary font-semibold">
                  on ne monte jamais sur la couverture d&apos;une pergola ou d&apos;une véranda
                </strong>,
                et on ne marche jamais sur un panneau de polycarbonate ou sur un vitrage, qui ne sont pas prévus pour
                porter un homme. Tout se fait depuis le sol ou depuis une échelle stable, et à deux quand c&apos;est
                haut. Si l&apos;accès n&apos;est pas sûr, c&apos;est exactement le moment de nous appeler.
              </p>
            </section>

            <Figure
              src="/images/realisations/pergola-aluminium-toit-polycarbonate-libourne-6.webp"
              w={825}
              h={1100}
              alt="Sous-face d'une pergola en aluminium à couverture polycarbonate : chéneau périphérique et traverses de collecte des eaux de pluie"
              caption="Le bandeau périphérique n'est pas décoratif : c'est le chéneau qui ramène toute l'eau de la couverture vers les poteaux. Il se contrôle depuis la terrasse, jamais en montant dessus."
            />

            {/* 4, Organes mobiles */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Lames orientables, stores zip et coulissants : les organes mobiles
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Tout ce qui bouge s&apos;use, et tout ce qui bouge se coince, c&apos;est la deuxième famille de pannes.
                Nous ne redétaillons pas ici le fonctionnement de ces équipements : la pergola bioclimatique est traitée
                de fond en comble dans{' '}
                <a href="/blog/pergola-bioclimatique-aluminium-guide" className={lienInterne}>
                  notre guide de la pergola bioclimatique en aluminium
                </a>,
                et les stores screen à zip, leur tenue au vent et leurs automatismes dans{' '}
                <a href="/blog/protection-solaire-brise-soleil-orientable" className={lienInterne}>
                  notre comparatif des protections solaires
                </a>
                . Concentrons-nous sur ce qu&apos;il faut regarder avant l&apos;automne.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">Les lames orientables.</strong> Faites-les tourner
                lentement sur toute leur course, d&apos;une butée à l&apos;autre, et regardez-les de biais : elles
                doivent rester parfaitement alignées et arriver ensemble en position fermée. Une lame qui claque, qui
                prend du retard sur ses voisines ou qui laisse un jour de lumière en position fermée signale presque
                toujours un joint de lame déchaussé, un débris coincé en about ou une lame qui a bougé sur son axe. On
                nettoie les joints de lames en même temps que le laquage, à l&apos;eau savonneuse, sans jamais tirer
                dessus.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">Les stores à zip.</strong> La fermeture à glissière doit
                courir librement dans sa coulisse et la barre de charge descendre bien droite. Un store qui remonte de
                travers, qui vibre ou qui force est un store qu&apos;il faut{' '}
                <strong className="text-primary font-semibold">cesser d&apos;actionner immédiatement</strong> : chaque
                manœuvre supplémentaire abîme la toile ou la glissière. On dépoussière la coulisse, on rentre la toile
                sèche plutôt que trempée quand c&apos;est possible, et on décide de l&apos;hiver : chez nous, la toile
                reste en place, remontée, capteur de vent en service, sauf exposition très ventée ou terrasse laissée à
                l&apos;abandon jusqu&apos;au printemps, où la dépose se justifie.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">Les coulissants et les baies.</strong> Neuf fois sur dix,
                un coulissant devenu dur n&apos;a pas un chariot mort : il a un rail encrassé. On aspire la feuillure
                basse, on brosse le rail, et surtout on dégage{' '}
                <strong className="text-primary font-semibold">les petits trous de drainage du seuil</strong>, deux ou
                trois orifices discrets, en partie basse, dont l&apos;obstruction fait stagner l&apos;eau dans le
                dormant et finit par la faire entrer.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Un piège très répandu, pour finir : ne mettez{' '}
                <strong className="text-primary font-semibold">ni graisse, ni dégrippant en aérosol sur un rail</strong>{' '}
                ou dans une coulisse. Le produit attire la poussière, la retient, et fabrique en quelques semaines une
                pâte abrasive qui use les galets bien plus vite qu&apos;un rail simplement sec et propre. Si un
                lubrifiant est prévu par le fabricant, il est indiqué dans la notice de votre ouvrage : c&apos;est la
                seule référence à suivre.
              </p>
            </section>

            <Figure
              src="/images/realisations/pergola-aluminium-store-zip-libourne-2.webp"
              w={1100}
              h={825}
              alt="Store screen à zip déroulé dans ses coulisses latérales sous une pergola en aluminium, chantier en Gironde"
              caption="Sur un store à zip, tout se joue dans la coulisse : propre, elle laisse la barre de charge descendre bien droite ; encrassée, elle fait forcer le moteur et abîme la toile."
            />

            {/* 5, Motorisation */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Motorisation, capteurs de vent et domotique : la révision qu&apos;on oublie
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est l&apos;angle mort absolu. Une motorisation fonctionne pendant des années sans rien demander,
                donc personne ne la regarde, jusqu&apos;au jour où l&apos;on découvre, au premier coup de vent, que le{' '}
                <strong className="text-primary font-semibold">capteur de vent ne tourne plus depuis deux étés</strong>.
                Or ce capteur est précisément ce qui remonte un store avant qu&apos;il ne se déchire. Le tester en août
                coûte cinq minutes ; le découvrir en novembre coûte une toile.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Ce que vous pouvez faire vous-même, sans aucun risque :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Une manœuvre complète, lente, de chaque équipement motorisé : ouverture totale, fermeture totale, en écoutant. Un bruit nouveau est une information.',
                  'Regarder l’anémomètre : les coupelles doivent tourner librement au moindre souffle. Une toile d’araignée, un nid ou un dépôt suffisent à le bloquer.',
                  'Dépoussiérer délicatement, au chiffon doux et sec, la cellule d’un capteur de pluie, de soleil ou de vent, et dégager la branche qui a poussé devant.',
                  'Remplacer la pile de la télécommande, cause la plus fréquente et la plus vexante des « pannes » de motorisation.',
                  'Retrouver et ranger la notice du fabricant, ainsi que la marque et la référence des moteurs : une photo du coffret et de l’étiquette vous fera gagner un temps fou le jour d’un dépannage.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Et voici où{' '}
                <strong className="text-primary font-semibold">notre métier s&apos;arrête et où commence celui d&apos;un
                autre</strong>,{' '}
               nous préférons le dire noir sur blanc plutôt que de vous laisser improviser. On n&apos;ouvre pas un
                coffret, on ne dépose pas un moteur, on ne touche ni au câblage ni à la carte électronique, et on ne
                force jamais un mécanisme qui résiste. Un bruit anormal, un échauffement, une odeur, une course qui ne va
                plus en butée, un fin de course déréglé, un disjoncteur qui saute : on coupe l&apos;alimentation, on
                cesse d&apos;actionner l&apos;ouvrage, et on appelle l&apos;installateur ou un électricien qualifié.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Le réglage des fins de course, l&apos;appairage d&apos;une télécommande ou d&apos;une box domotique, la
                reprogrammation d&apos;un capteur : tout cela se fait selon la procédure exacte du fabricant, souvent
                avec son propre outil. La notice de votre ouvrage fait foi, pas un tutoriel générique trouvé en ligne, et
                encore moins une manipulation à l&apos;aveugle qui peut désolidariser les réglages d&apos;usine.
              </p>
            </section>

            {/* 6, Joints et raccord */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Joints, étanchéité et raccord à la maison
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le raccord entre un ouvrage aluminium et la façade est le point le plus discret de tout le chantier, et
                celui qui coûte le plus cher quand il est négligé. C&apos;est là que la pergola adossée, la véranda ou
                l&apos;extension viennent se coudre au bâti existant, par une bavette, un solin, un closoir et des joints.{' '}
                <strong className="text-primary font-semibold">
                  Une infiltration à cet endroit n&apos;abîme pas l&apos;aluminium : elle abîme votre maison.
                </strong>
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Le tour d&apos;inspection, jumelles ou échelle stable, tient en cinq points :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Le mastic du raccord : cherchez une fissure, un retrait, un décollement, une teinte qui a viré ou une zone devenue friable.',
                  'Les joints de lames et de vitrage : ils doivent rester logés dans leur gorge, souples, sans partie sortie, écrasée ou pendante.',
                  'La visserie et les pattes de fixation apparentes : rien ne doit être desserré, ni présenter de coulure de rouille venue d’une pièce d’acier voisine.',
                  'Le mur sous le raccord : une auréole, un salpêtre, une peinture qui cloque ou un enduit qui poudre signalent une entrée d’eau, même si vous n’avez jamais vu une goutte tomber.',
                  'Les seuils et les appuis : l’eau doit y filer vers l’extérieur, jamais stagner en cuvette.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un réflexe à combattre :{' '}
                <strong className="text-primary font-semibold">
                  on ne remastique pas par-dessus un joint fatigué.
                </strong>{' '}
                Le mastic frais n&apos;adhère pas sur l&apos;ancien, il masque le défaut quelques mois et l&apos;eau
                continue de passer derrière, invisible. Une reprise sérieuse, c&apos;est une dépose, un nettoyage du
                support, puis une remise en œuvre avec le bon produit sur le bon profil. De même, un joint de lame ou de
                vitrage ne se remplace pas par un cordon acheté au hasard : la section doit correspondre exactement à la
                gorge.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Enfin, sur une véranda, apprenez à distinguer{' '}
                <strong className="text-primary font-semibold">la condensation de l&apos;infiltration</strong>. La
                condensation est généralisée, apparaît par temps froid sur les parties les plus froides des profilés ou
                du vitrage, et se règle par la ventilation et la maîtrise de l&apos;humidité intérieure : une véranda se
                ventile aussi en hiver. L&apos;infiltration, elle, est localisée, se déclenche après une pluie, souvent
                avec du vent, et laisse une trace qui sèche en auréole. Le sujet de l&apos;isolation et du confort
                thermique d&apos;une véranda est traité à part dans{' '}
                <a href="/blog/veranda-aluminium-isolation-urbanisme-budget" className={lienInterne}>
                  notre guide véranda aluminium
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/realisations/pergola-aluminium-toit-polycarbonate-libourne-4.webp"
              w={825}
              h={1100}
              alt="Pergola en aluminium adossée à la façade d'une maison : raccord entre la traverse haute et le mur, en Gironde"
              caption="Chantier de Saint-Pey-de-Castets : c'est sur cette ligne de couture entre la traverse aluminium et l'enduit que se joue l'étanchéité, pas sur le profilé lui-même."
            />

            {/* 7, Calendrier Gironde */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Notre calendrier d&apos;entretien en Gironde, et quand appeler un professionnel
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Notre climat girondin a ses habitudes : un printemps très chargé en pollen, un été poussiéreux, des
                automnes et des hivers de pluies longues plutôt que violentes, et des coups de vent d&apos;ouest qui
                arrivent souvent avant que l&apos;on ait pensé aux protections solaires. Autour de Libourne, sur les
                terrasses bordées de tilleuls, de platanes ou de chênes, la charge de feuilles est réelle et elle tombe
                vite. D&apos;où le rythme suivant, que nous conseillons à nos clients :
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Période</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Ce que nous conseillons</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Pourquoi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {calendrier.map((ligne, i) => (
                      <tr key={ligne[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}>
                        <td className="px-4 py-3 text-primary font-semibold whitespace-nowrap">{ligne[0]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 mb-5">
                Précision qui compte :{' '}
                <strong className="text-primary font-semibold">
                  ce ne sont ni des obligations, ni une règle, ni une fréquence normative
                </strong>,{' '}
               ce sont nos habitudes de chantier, à adapter à votre situation. Une pergola implantée sous un grand
                arbre demandera deux fois plus de passages qu&apos;un ouvrage en plein découvert ; une véranda exposée
                plein ouest, plus d&apos;attention aux joints qu&apos;une véranda abritée. Regardez votre jardin, pas le
                calendrier.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Et voici les cas où il faut nous appeler plutôt que d&apos;insister :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'L’eau ne s’évacue plus après nettoyage du chéneau : la descente est obstruée plus bas dans le poteau.',
                  'Une trace d’eau, une auréole ou un salpêtre apparaît sur le mur au droit du raccord à la maison.',
                  'Une lame ne rejoint plus ses voisines, un store remonte de travers, un coulissant force malgré un rail propre.',
                  'La motorisation fait un bruit inhabituel, chauffe, ne va plus en butée ou fait disjoncter : coupez l’alimentation avant tout.',
                  'L’accès demande de monter sur la couverture, sur un vitrage ou sur du polycarbonate : cela ne se fait pas, sous aucun prétexte.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nous intervenons sur les ouvrages que nous avons posés comme sur ceux d&apos;autres entreprises, à
                Libourne et dans toute la Gironde. Vous pouvez voir le type d&apos;ouvrages dont nous parlons dans{' '}
                <a href="/realisations" className={lienInterne}>nos réalisations</a>, et découvrir notre travail sur les{' '}
                <a href="/pergolas" className={lienInterne}>pergolas en aluminium</a> ainsi que sur les{' '}
                <a href="/carports" className={lienInterne}>carports</a>, dont la couverture et les évacuations demandent
                exactement la même vigilance d&apos;avant-automne.
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
              Entretien de l&apos;aluminium : vos questions
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
              Une heure maintenant, ou un dépannage en novembre
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              L&apos;aluminium tient sans vous. Ses évacuations, ses joints et sa motorisation, non : ils demandent une
              heure de regard par an, et cette heure-là se prend avant la chute des feuilles, pas après. Si votre pergola
              déborde, si un store force ou si vous préférez confier la révision à quelqu&apos;un dont c&apos;est le
              métier, nous nous déplaçons à Libourne et dans toute la Gironde, sur nos ouvrages comme sur ceux
              d&apos;autres poseurs.
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
