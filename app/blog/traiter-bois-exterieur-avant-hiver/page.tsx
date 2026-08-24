import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/source-adefrance/Carport-bois-Libourne-2.webp';

export const metadata: Metadata = buildMetadata({
  title: "Traiter le bois avant l'hiver : la dernière fenêtre en Gironde",
  description:
    "Terrasse, bardage, clôture, carport : quand traiter ses bois avant l'hiver, avec quel produit, et pourquoi on traite pour l'eau, pas pour la couleur.",
  keywords:
    "traiter le bois avant l'hiver, saturateur bois extérieur, entretien bois automne, protéger sa terrasse en bois Gironde, entretien bardage bois Libourne, hivernage ouvrages bois, traitement bois extérieur, entretien clôture bois, entretien carport bois",
  path: '/blog/traiter-bois-exterieur-avant-hiver',
  ogImage: COVER,
  ogTitle:
    "Traiter ses bois avant l'hiver : la dernière fenêtre de l'année, et ce qu'on traite vraiment",
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
        name: "Traiter ses bois avant l'hiver",
        item: 'https://lesprit-bois.fr/blog/traiter-bois-exterieur-avant-hiver',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      "Traiter ses bois avant l'hiver : la dernière fenêtre de l'année, et ce qu'on traite vraiment",
    description:
      "Terrasse, bardage, clôture et brise-vue, carport, abri de jardin : chacun demande un traitement et une fréquence différents. Quand la fenêtre d'automne se ferme, ce que fait vraiment un saturateur, une huile, une lasure ou un dégriseur, les gestes qui gâchent le travail et ce qu'on peut faire soi-même, le guide d'un artisan à Libourne, en Gironde.",
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
    datePublished: '2026-08-22',
    dateModified: '2026-08-22',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/traiter-bois-exterieur-avant-hiver',
    },
    about: [
      { '@type': 'Thing', name: 'entretien du bois' },
      { '@type': 'Thing', name: 'saturateur' },
      { '@type': 'Thing', name: 'terrasse bois' },
      { '@type': 'Thing', name: 'bardage bois' },
      { '@type': 'Thing', name: 'clôture bois' },
      { '@type': 'Thing', name: 'carport bois' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Est-il trop tard pour traiter son bois si l'automne est déjà avancé ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Souvent, oui, et c'est une bonne nouvelle, parce que ne rien faire vaut mieux que mal faire. Un saturateur ne pénètre que dans un bois sec, appliqué par temps doux, sans pluie annoncée derrière. Quand le bois ne parvient plus à sécher entre deux averses, quand les matinées sont humides et les journées courtes, le produit reste en surface : il ne protège pas, il fait une pellicule qui partira au premier hiver et qu'il faudra décaper au printemps. Mieux vaut nettoyer, dégager ce qui retient l'eau, et reporter l'application au printemps suivant.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faut-il traiter une terrasse et un bardage à la même fréquence ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non, et c'est l'erreur la plus fréquente. Une terrasse reçoit l'eau à plat, on marche dessus et on y traîne des meubles : la protection s'y use vite, et un passage annuel ou tous les deux ans est courant. Un bardage est vertical, il s'égoutte tout seul et personne ne le piétine : il tient beaucoup plus longtemps, et ce qui l'abîme, ce sont ses points singuliers, bas de bardage, appuis de fenêtre, retours de tableau. Une clôture prend le vent et l'eau des deux côtés, un carport ne souffre en général que par ses pieds de poteaux. C'est l'exposition de l'ouvrage qui décide, jamais le calendrier.",
        },
      },
      {
        '@type': 'Question',
        name: 'Mon bois est devenu gris : faut-il le traiter en urgence ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non. Le grisaillement est un phénomène de surface, esthétique et réversible : il n'enlève rien à la solidité de l'ouvrage. Ce qui doit vous alerter, c'est l'eau qui stagne, les fentes qui s'ouvrent, les extrémités de lames qui noircissent et les zones molles au pied d'un poteau. On traite pour l'eau, pas pour la couleur. Si vous souhaitez retrouver la teinte d'origine, c'est un travail de rénovation à part entière (dégrisage, ponçage, parfois remplacement de lames) que nous détaillons dans notre guide de rénovation de terrasse.",
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on passer un nettoyeur haute pression avant de traiter ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Nous le déconseillons fermement sur un bois de terrasse. Le jet ouvre les fibres, creuse le bois tendre entre les cernes et laisse une surface pelucheuse qui boit l'eau au lieu de la repousser : le bois paraît propre le jour même, et vieillit plus vite ensuite. Un balai-brosse, de l'eau et un nettoyant bois doux font mieux le travail, en brossant dans le sens du fil. Si vous tenez à un appareil, réservez-le aux surfaces minérales autour de l'ouvrage, pas aux lames.",
        },
      },
      {
        '@type': 'Question',
        name: 'Saturateur, huile ou lasure : lequel choisir pour un ouvrage extérieur ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le saturateur pénètre dans le bois sans former de film : il se recharge par-dessus sans décapage, ce qui en fait la solution la plus simple à entretenir sur les ouvrages horizontaux, terrasses en tête. L'huile fonctionne sur le même principe, en plus nourrissant, mais elle marque davantage. La lasure, elle, forme un film : elle tient bien sur du vertical protégé (un bardage sous débord, une porte d'abri) mais s'écaille sur une surface piétinée et impose un décapage complet à la reprise. Le dégriseur n'est pas un traitement : c'est un nettoyant qui prépare le bois avant traitement. Dans tous les cas, la notice du fabricant fait foi pour son produit.",
        },
      },
      {
        '@type': 'Question',
        name: 'Un carport ou un abri de jardin en bois doivent-ils être traités chaque année ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Rarement. Sur ces ouvrages, l'essentiel se joue à la conception : essence adaptée, structure ventilée, poteaux désolidarisés du sol, toiture qui évacue bien. Le traitement de surface y est un choix esthétique plus qu'une nécessité, à renouveler quand la teinte s'éclaircit. En revanche, deux vérifications annuelles comptent vraiment : dégager les feuilles de la toiture et des évacuations, et inspecter les pieds de poteaux et les bas de bardage, là où l'eau ne repart jamais toute seule.",
        },
      },
    ],
  },
];

const parOuvrage = [
  [
    'Terrasse',
    "L'eau reçue à plat, le piétinement, les pieds de meubles",
    'Nettoyage doux puis saturateur, sans oublier les bouts de lames',
    'Souvent chaque année ou tous les deux ans',
  ],
  [
    'Bardage',
    'Les points singuliers : bas de bardage, appuis, retours de tableau',
    'Contrôle des zones basses ; traitement seulement si la teinte compte',
    'Espacé, plusieurs années entre deux passages',
  ],
  [
    'Clôture et brise-vue',
    "Le vent, l'eau des deux faces, le contact avec le sol et la végétation",
    'Dégager la base, tailler ce qui touche, traiter les deux côtés',
    'Intermédiaire, selon exposition et végétation',
  ],
  [
    'Carport et pergola',
    'Les pieds de poteaux et les feuilles qui bouchent les évacuations',
    'Nettoyer la toiture, inspecter les ancrages ; surface = esthétique',
    'Traitement facultatif, contrôle annuel obligatoire',
  ],
  [
    'Abri de jardin, abri à bûches',
    'Le contact au sol, la stagnation derrière les bûches ou les outils',
    'Vérifier plots et ventilation avant de penser au produit',
    'Rare, la ventilation prime sur le traitement',
  ],
];

const faq = [
  {
    q: "Est-il trop tard pour traiter son bois si l'automne est déjà avancé ?",
    r: (
      <>
        Souvent, oui, et c&apos;est une bonne nouvelle, parce que ne rien faire vaut mieux que mal faire. Un saturateur
        ne pénètre que dans un bois sec, appliqué par temps doux, sans pluie annoncée derrière. Quand le bois ne parvient
        plus à sécher entre deux averses, quand les matinées sont humides et les journées courtes, le produit reste en
        surface : il ne protège pas, il fait une pellicule qui partira au premier hiver et qu&apos;il faudra décaper au
        printemps. Mieux vaut nettoyer, dégager ce qui retient l&apos;eau, et reporter l&apos;application au printemps
        suivant.
      </>
    ),
  },
  {
    q: 'Faut-il traiter une terrasse et un bardage à la même fréquence ?',
    r: (
      <>
        Non, et c&apos;est l&apos;erreur la plus fréquente. Une terrasse reçoit l&apos;eau à plat, on marche dessus et on
        y traîne des meubles : la protection s&apos;y use vite, et un passage annuel ou tous les deux ans est courant. Un
        bardage est vertical, il s&apos;égoutte tout seul et personne ne le piétine : il tient beaucoup plus longtemps, et
        ce qui l&apos;abîme, ce sont ses points singuliers, bas de bardage, appuis de fenêtre, retours de tableau. Une
        clôture prend le vent et l&apos;eau des deux côtés, un carport ne souffre en général que par ses pieds de
        poteaux. C&apos;est l&apos;exposition de l&apos;ouvrage qui décide, jamais le calendrier.
      </>
    ),
  },
  {
    q: 'Mon bois est devenu gris : faut-il le traiter en urgence ?',
    r: (
      <>
        Non. Le grisaillement est un phénomène de surface, esthétique et réversible : il n&apos;enlève rien à la solidité
        de l&apos;ouvrage. Ce qui doit vous alerter, c&apos;est l&apos;eau qui stagne, les fentes qui s&apos;ouvrent, les
        extrémités de lames qui noircissent et les zones molles au pied d&apos;un poteau. On traite pour l&apos;eau, pas
        pour la couleur. Si vous souhaitez retrouver la teinte d&apos;origine, c&apos;est un travail de rénovation à part
        entière (dégrisage, ponçage, parfois remplacement de lames) que nous détaillons dans notre{' '}
        <a href="/blog/renover-terrasse-bois-existante" className={lienInterne}>
          guide de rénovation de terrasse
        </a>
        .
      </>
    ),
  },
  {
    q: 'Peut-on passer un nettoyeur haute pression avant de traiter ?',
    r: (
      <>
        Nous le déconseillons fermement sur un bois de terrasse. Le jet ouvre les fibres, creuse le bois tendre entre les
        cernes et laisse une surface pelucheuse qui boit l&apos;eau au lieu de la repousser : le bois paraît propre le
        jour même, et vieillit plus vite ensuite. Un balai-brosse, de l&apos;eau et un nettoyant bois doux font mieux le
        travail, en brossant dans le sens du fil. Si vous tenez à un appareil, réservez-le aux surfaces minérales autour
        de l&apos;ouvrage, pas aux lames.
      </>
    ),
  },
  {
    q: 'Saturateur, huile ou lasure : lequel choisir pour un ouvrage extérieur ?',
    r: (
      <>
        Le saturateur pénètre dans le bois sans former de film : il se recharge par-dessus sans décapage, ce qui en fait
        la solution la plus simple à entretenir sur les ouvrages horizontaux, terrasses en tête. L&apos;huile fonctionne
        sur le même principe, en plus nourrissant, mais elle marque davantage. La lasure, elle, forme un film : elle
        tient bien sur du vertical protégé, un bardage sous débord, une porte d&apos;abri, mais s&apos;écaille sur une
        surface piétinée et impose un décapage complet à la reprise. Le dégriseur n&apos;est pas un traitement : c&apos;est
        un nettoyant qui prépare le bois avant traitement. Dans tous les cas, la notice du fabricant fait foi pour son
        produit.
      </>
    ),
  },
  {
    q: 'Un carport ou un abri de jardin en bois doivent-ils être traités chaque année ?',
    r: (
      <>
        Rarement. Sur ces ouvrages, l&apos;essentiel se joue à la conception : essence adaptée, structure ventilée,
        poteaux désolidarisés du sol, toiture qui évacue bien. Le traitement de surface y est un choix esthétique plus
        qu&apos;une nécessité, à renouveler quand la teinte s&apos;éclaircit. En revanche, deux vérifications annuelles
        comptent vraiment : dégager les feuilles de la toiture et des évacuations, et inspecter les pieds de poteaux et
        les bas de bardage, là où l&apos;eau ne repart jamais toute seule.
      </>
    ),
  },
];

export default function ArticleTraiterBoisAvantHiverPage() {
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
              height="646"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Carport en bois adossé à une maison à Lugon-et-l'Île-du-Carnay, ouvrage bois exposé aux intempéries avant l'hiver"
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
              <span className="text-secondary-fixed">Traiter ses bois avant l&apos;hiver</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Entretien du bois
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Traiter ses bois avant l&apos;hiver : la dernière fenêtre de l&apos;année, et ce qu&apos;on traite vraiment
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
              <span>22 août 2026</span>
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
                Il reste quelques semaines pour traiter ses bois extérieurs, après, ce n&apos;est plus la peine.
              </strong>{' '}
              Un saturateur ne pénètre que sur un bois sec, par temps doux, et sans pluie derrière : passé l&apos;automne,
              le produit reste en surface et part au premier hiver. Et tant qu&apos;à ouvrir le pot, autant savoir ce
              qu&apos;on protège :{' '}
              <strong className="text-primary font-semibold">
                on ne traite pas pour l&apos;esthétique, on traite pour l&apos;eau.
              </strong>{' '}
              Le grisaillement est cosmétique et réversible ; ce qui abîme réellement un ouvrage, ce sont l&apos;eau qui
              stagne, les fibres qui gonflent puis se fendent, et les points où l&apos;eau ne repart jamais. Dernière
              précision, et elle compte : ce guide{' '}
              <strong className="text-primary font-semibold">ne parle pas que de terrasse</strong>. Il s&apos;adresse au
              propriétaire d&apos;ouvrages en bois (terrasse, bardage, clôture et brise-vue, carport, abri de jardin,
              abri à bûches) parce qu&apos;aucun de ces ouvrages ne demande le même traitement ni la même fréquence.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1, Pourquoi l'automne */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Pourquoi l&apos;automne, et pourquoi ça devient inutile passé une certaine date
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La fin de l&apos;été et le début de l&apos;automne réunissent, en Gironde, les trois conditions qu&apos;un
                traitement réclame et qu&apos;on ne retrouve pas ailleurs dans l&apos;année : le bois a séché en
                profondeur pendant la saison chaude, les journées restent douces sans être brûlantes, et la pluie ne
                s&apos;est pas encore installée pour de bon. C&apos;est une fenêtre courte, et elle se referme sans
                prévenir.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ce qui la referme, ce n&apos;est pas une date au calendrier, c&apos;est un régime météo. À partir du
                moment où le bois ne parvient plus à sécher entre deux averses, où les matinées se lèvent chargées de
                rosée et où les journées raccourcissent, un produit appliqué ne fait plus son travail :{' '}
                <strong className="text-primary font-semibold">
                  il reste en surface, se fige sans avoir pénétré, et forme une pellicule qui blanchit, poisse ou pèle au
                  premier hiver
                </strong>
                . On croit avoir protégé, on a en réalité créé un chantier de décapage pour le printemps.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                C&apos;est pour cette raison que nous disons régulièrement à nos clients, en octobre ou en novembre, de{' '}
                <em>ne pas</em> traiter. Ne rien faire n&apos;abîme rien : un bois nu passe l&apos;hiver, il grise, c&apos;est
                tout. Un bois mal traité, lui, se paie deux fois, une fois en produit perdu, une fois en ponçage. Si la
                fenêtre est passée, le bon geste d&apos;automne devient un geste de nettoyage et de dégagement, que nous
                détaillons plus bas, et l&apos;application se reporte au printemps.
              </p>
            </section>

            {/* 2, L'eau, pas la couleur */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qu&apos;on traite vraiment : l&apos;eau, pas la couleur
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La quasi-totalité des appels que nous recevons sur l&apos;entretien commencent par la couleur : « mon
                bois est devenu gris ». Or le gris n&apos;est qu&apos;une réaction de surface aux ultraviolets, sur une
                épaisseur infime : c&apos;est esthétique, c&apos;est réversible, et cela n&apos;enlève rien à la solidité
                de l&apos;ouvrage. Le sujet est tranché en détail dans notre guide de{' '}
                <a href="/blog/renover-terrasse-bois-existante" className={lienInterne}>
                  rénovation d&apos;une terrasse existante
                </a>,{' '}
               on n&apos;y revient pas ici.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ce qui abîme un ouvrage, c&apos;est l&apos;eau. Plus précisément :{' '}
                <strong className="text-primary font-semibold">
                  l&apos;eau qui stagne, et les endroits où elle ne repart jamais.
                </strong>{' '}
                Le bois absorbe, gonfle, puis sèche et se rétracte. Répétez ce cycle des dizaines de fois par an et les
                fibres finissent par céder : une fente s&apos;ouvre, l&apos;eau y entre plus profondément, la fente
                s&apos;élargit, et vous avez ouvert une autoroute vers le cœur de la pièce. Un traitement pénétrant ne
                rend pas le bois imperméable, rien ne le fait, mais il ralentit franchement cette absorption, donc le
                cycle.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Sur nos chantiers, les points critiques sont toujours les mêmes, et ce ne sont presque jamais ceux
                qu&apos;on regarde :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Les extrémités de coupe', 'le bois boit par le bout, bien plus vite que par la face ; toute lame recoupée sur chantier et non retraitée est un point d’entrée.'],
                  ['Les assemblages et les recouvrements', 'partout où deux pièces se touchent, l’eau se glisse par capillarité et ne sèche plus.'],
                  ['Les pieds de poteaux et les bas d’ouvrage', 'la zone qui reçoit les rejaillissements du sol et la végétation qui monte.'],
                  ['Ce qui reste posé sur le bois', 'feuilles mortes accumulées dans une rainure, pot de fleurs à même la lame, paillasson qui ne sèche jamais : autant d’éponges permanentes.'],
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
                Un mot enfin sur la durabilité naturelle : toutes les essences ne partent pas avec les mêmes armes face à
                l&apos;humidité, et c&apos;est un paramètre documenté par{' '}
                <a href="https://www.fcba.fr/" className={lienInterne} target="_blank" rel="noopener noreferrer">
                  l&apos;institut technologique FCBA
                </a>
                . Un bois choisi pour son exposition demandera toujours moins d&apos;entretien qu&apos;un bois rattrapé
                au produit, c&apos;est le sujet de notre article sur{' '}
                <a href="/blog/quel-bois-pour-terrasse-exterieure" className={lienInterne}>
                  le choix des essences pour l&apos;extérieur
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/blog/plage-piscine-bois-essences-pose/lame-terrasse-bois-brossee-jeu-entre-lames.webp"
              w={1100}
              h={825}
              alt="Gros plan sur le fil, les nœuds et les fentes de retrait de lames de terrasse en bois exposées à la pluie"
              caption="Les fentes suivent le fil et s'ouvrent d'abord autour des nœuds ; les graviers coincés dans les jeux entre lames, eux, gardent l'eau bien après l'averse."
            />

            {/* 3, Les conditions */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Les conditions qui décident du résultat : bois sec, temps doux, pas de pluie derrière
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un traitement extérieur réussi tient à trois conditions, et elles pèsent plus lourd que le produit
                lui-même. Nous en avons fait une règle simple, que nous répétons à chaque client :{' '}
                <strong className="text-primary font-semibold">
                  un bois parfaitement sec, une journée douce et sèche, et pas de pluie annoncée derrière.
                </strong>{' '}
                Si l&apos;une des trois manque, on reporte. Ce n&apos;est pas du perfectionnisme : c&apos;est la
                différence entre un produit qui entre dans la matière et un produit qui reste dessus.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                « Sec » mérite une précision, parce que c&apos;est le piège le plus courant. Un bois sec en surface
                n&apos;est pas un bois sec. Après une pluie, il faut plusieurs journées franchement sèches pour que
                l&apos;eau reparte de l&apos;épaisseur des lames, et bien davantage sur une terrasse peu ventilée en
                sous-face, ou sur une clôture entourée de végétation. Un bois lavé le matin et traité l&apos;après-midi,
                c&apos;est de l&apos;eau qu&apos;on enferme sous le produit.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                L&apos;automne ajoute son propre piège : la rosée. Les matinées se lèvent humides même quand la journée
                s&apos;annonce belle. Ce que nous conseillons à nos clients, c&apos;est d&apos;attendre que le bois ait
                réellement perdu son humidité de nuit avant de commencer, et de finir assez tôt dans la journée pour que
                le produit ait le temps de prendre avant la rosée du soir. Le reste (dilution, nombre de couches, délai
                entre deux passes, entretien du matériel) est propre à chaque produit :{' '}
                <strong className="text-primary font-semibold">la notice du fabricant fait foi</strong>, et elle prime
                sur tout ce qu&apos;on peut lire ailleurs, y compris ici.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Dernier point, valable toute l&apos;année : on ne traite jamais un bois sale. Mousses, dépôts verts,
                pollens, résidus gras d&apos;un barbecue, tout ce qui reste sous le produit y reste durablement, et la
                mousse recouverte continue de travailler à l&apos;abri. Nettoyage doux d&apos;abord, séchage complet
                ensuite, produit en dernier. Et si l&apos;ouvrage sort d&apos;un été de plein soleil, notre guide de{' '}
                <a href="/blog/proteger-terrasse-bois-canicule-entretien-ete" className={lienInterne}>
                  protection du bois pendant la canicule
                </a>{' '}
                traite l&apos;autre moitié du calendrier : là, on protège du soleil en pleine saison ; ici, on prépare le
                bois à l&apos;eau et au froid. Ce ne sont pas les mêmes gestes, ni les mêmes urgences.
              </p>
            </section>

            {/* 4, Chaque ouvrage */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Terrasse, bardage, clôture, carport : chacun son traitement et sa fréquence
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est le cœur du sujet, et c&apos;est ce que la plupart des guides ratent en ne parlant que de
                terrasse.{' '}
                <strong className="text-primary font-semibold">
                  Deux ouvrages en bois exposés au même climat ne vieillissent pas de la même façon
                </strong>{' '}
                : ce qui change tout, c&apos;est la manière dont l&apos;eau arrive et dont elle repart. Une surface
                horizontale garde l&apos;eau, une surface verticale s&apos;égoutte. Une pièce piétinée s&apos;use par le
                dessus, une pièce plantée dans le sol s&apos;use par le bas.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Ouvrage</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Ce qui l&apos;abîme vraiment</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Le geste qui compte</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Rythme que nous conseillons</th>
                    </tr>
                  </thead>
                  <tbody>
                    {parOuvrage.map((ligne, i) => (
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
                <strong className="text-primary font-semibold">La terrasse</strong> est l&apos;ouvrage le plus exigeant,
                et c&apos;est logique : elle reçoit toute l&apos;eau à plat, elle est piétinée, on y traîne des chaises
                et des tables. C&apos;est le seul de la liste sur lequel un passage rapproché se justifie vraiment. À
                l&apos;inverse, <strong className="text-primary font-semibold">le bardage</strong> est vertical : il
                s&apos;égoutte seul, personne ne l&apos;use, et il peut tenir des années sans intervention. Le regarder
                comme une terrasse verticale conduit à le traiter beaucoup trop souvent, pour rien. Ce qu&apos;il faut y
                surveiller, ce sont ses points singuliers, ceux dont nous parlons dans notre guide du{' '}
                <a href="/blog/bardage-bois-facade-essences-pose" className={lienInterne}>
                  bardage bois en façade
                </a>{' '}
                : bas de bardage, appuis de fenêtre, retours de tableau.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">La clôture et le brise-vue</strong> forment un cas à part.
                Ils prennent le vent et l&apos;eau sur leurs deux faces, et surtout ils vivent au contact du sol et de la
                végétation : un lierre qui monte, une haie qui touche, un massif arrosé au pied d&apos;un poteau
                entretiennent une humidité permanente qu&apos;aucun produit ne compense. Dégager la base et tailler ce
                qui touche vaut mieux qu&apos;une couche supplémentaire, le sujet est développé dans notre guide{' '}
                <a href="/blog/cloture-brise-vue-bois-guide" className={lienInterne}>
                  clôture et brise-vue en bois
                </a>
                . Et quand vous traitez, traitez les deux côtés : une face laissée nue travaille différemment de
                l&apos;autre, et la lame finit par tuiler.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                <strong className="text-primary font-semibold">Le carport, la pergola et l&apos;abri de jardin</strong>,
                enfin, sont les ouvrages les moins demandeurs, à une condition : qu&apos;ils aient été bien conçus. Une
                structure ventilée, une toiture qui évacue, des poteaux désolidarisés du sol par des pieds métalliques,
                et le traitement de surface redevient un choix esthétique. Ce qui compte, sur ces ouvrages, c&apos;est le
                contrôle d&apos;automne : dégager les feuilles de la couverture et des évacuations, et inspecter les
                pieds de poteaux. Même logique pour{' '}
                <a href="/blog/abri-buches-bois-stockage-sechage" className={lienInterne}>
                  l&apos;abri à bûches
                </a>,
                où la ventilation prime largement sur le produit.
              </p>
            </section>

            <Figure
              src="/images/bardage-bois-douglas-gironde.webp"
              w={1000}
              h={1333}
              alt="Bardage bois douglas à lames verticales et couvre-joints en façade, réalisation en Gironde, avant l'entretien d'automne"
              caption="Les couvre-joints ferment le jeu entre lames et le soubassement maçonné tient le bois à l'écart des rejaillissements du sol : deux détails de pose qui espacent l'entretien plus sûrement qu'une couche de produit."
            />

            {/* 5, Les produits */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Saturateur, huile, lasure, dégriseur : ce que chaque produit fait vraiment
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le rayon est déroutant, mais il n&apos;y a en réalité que deux familles, plus un intrus. Les produits{' '}
                <strong className="text-primary font-semibold">pénétrants</strong> entrent dans le bois et le nourrissent
                sans former de couche ; les produits <strong className="text-primary font-semibold">filmogènes</strong>{' '}
                déposent une pellicule à sa surface. Tout le reste en découle, à commencer par la manière dont on les
                entretient.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le saturateur', 'pénétrant. Il ne fait pas de film, ne s’écaille donc pas, et s’use en s’éclaircissant progressivement. Son immense avantage : on le recharge par-dessus après un simple nettoyage, sans décapage. C’est la solution la plus raisonnable sur tout ce qui est horizontal et piétiné.'],
                  ['L’huile', 'pénétrante elle aussi, plus nourrissante, avec un rendu souvent plus profond. En contrepartie, elle marque davantage les taches et retient plus la poussière. Le choix est autant affaire de goût que de technique.'],
                  ['La lasure', 'filmogène. Elle tient très bien sur du vertical protégé (un bardage sous débord, une porte d’abri, un volet) mais sur une surface piétinée ou en plein soleil, le film finit par craqueler, et la reprise impose alors un décapage complet. Nous ne la conseillons pas sur une terrasse.'],
                  ['Le dégriseur', 'ce n’est pas un traitement. C’est un nettoyant qui redonne au bois sa teinte avant application. Il se rince soigneusement, et le bois doit ensuite sécher complètement, ce qui, en arrière-saison, suffit parfois à faire sortir le chantier de la fenêtre.'],
                  ['Le vernis et la peinture', 'ils créent le film le plus étanche… et le plus fragile en extérieur. Sous nos climats, l’eau finit par passer par un défaut, et elle ne peut plus repartir. Nous les réservons à des ouvrages abrités.'],
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
                Vous ne trouverez ici ni marque, ni rendement au mètre carré, ni durée de tenue annoncée, et c&apos;est
                volontaire. Ces valeurs varient d&apos;une formulation à l&apos;autre, et la seule source qui engage
                quelqu&apos;un, c&apos;est la notice du produit que vous avez entre les mains. Une seule règle
                transversale, en revanche :{' '}
                <strong className="text-primary font-semibold">
                  on ne mélange pas les familles sans préparation
                </strong>
                . Passer un saturateur sur une lasure écaillée, c&apos;est perdre son temps et son produit.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Carport-bois-Libourne-3.webp"
              w={1200}
              h={646}
              alt="Poteaux d'un carport en bois posés sur des ancrages métalliques galvanisés, carport réalisé à Capian en Gironde"
              caption="Chaque poteau est relevé sur un pied métallique galvanisé : les quelques centimètres de vide sous le bois suffisent à lui éviter de pomper l'eau du gravier."
            />

            {/* 6, Les gestes qui gâchent */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Les gestes qui gâchent le travail, le nettoyeur haute pression en tête
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Commençons par celui qui nous coûte le plus de rattrapages.{' '}
                <strong className="text-primary font-semibold">
                  Le nettoyeur haute pression fait plus de mal que de bien sur un bois de terrasse.
                </strong>{' '}
                Le jet ne se contente pas d&apos;enlever la saleté : il attaque la matière, creuse le bois tendre entre
                les cernes et laisse une surface pelucheuse, hérissée de fibres relevées. Le résultat est spectaculaire
                le jour même, le bois n&apos;a jamais paru si propre, et désastreux ensuite : une surface ouverte boit
                l&apos;eau, retient la saleté et grise plus vite. On répare au ponçage, ce qui coûte bien plus cher que
                le nettoyage économisé.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le bon outil est bien plus modeste : un balai-brosse, de l&apos;eau, un nettoyant bois doux, et un
                brossage dans le sens du fil. C&apos;est plus long, c&apos;est moins amusant, et c&apos;est ce qui
                permet de traiter derrière. Voici les autres gestes que nous voyons régulièrement ruiner une journée de
                travail :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Traiter sur un bois encore vert de mousses : le produit enferme la mousse, qui continue de travailler dessous.',
                  'Charger le produit en excès « pour que ça tienne mieux » : le surplus qui n’a pas pénétré reste collant et attrape la poussière.',
                  'Travailler en plein soleil sur un bois chaud : le produit sèche avant d’être entré, et laisse des reprises visibles.',
                  'Utiliser de l’eau de Javel : elle décolore le bois, agresse les fixations et ruisselle dans les massifs voisins.',
                  'Oublier les bouts de lames, les sous-faces accessibles et les retours : ce sont précisément les zones qui boivent le plus.',
                  'Laisser les feuilles mortes, les pots et les paillassons en place tout l’hiver : chacun est une éponge posée sur l’ouvrage.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Si la fenêtre de traitement est passée, ces gestes-là restent tous valables, et ce sont eux le véritable
                hivernage : dégager, brosser à sec, libérer les évacuations, écarter la végétation, décoller du sol ce
                qui traîne. Un ouvrage propre et dégagé passe très bien l&apos;hiver sans produit ; un ouvrage encombré
                le passe mal, même fraîchement traité.
              </p>
            </section>

            <Figure
              src="/images/blog/cloture-brise-vue-bois-guide/cloture-bois-limite-separative-1m80-gironde.webp"
              w={1200}
              h={800}
              alt="Clôture en bois à lames verticales patinées, haie plaquée derrière et pousses de végétation passant entre les lames"
              caption="Les têtes de pointes marquent le bois de traînées sombres : une coulure autour d'une fixation trahit une lame qui ne sèche plus entre deux pluies."
            />

            {/* 7, Soi-même ou nous */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qu&apos;on peut faire soi-même, ce qu&apos;on nous confie (Libourne, Gironde)
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Autant le dire franchement :{' '}
                <strong className="text-primary font-semibold">
                  l&apos;entretien courant d&apos;un ouvrage en bois n&apos;est pas un travail d&apos;artisan.
                </strong>{' '}
                Nettoyer une terrasse de plain-pied, brosser une clôture, passer un saturateur sur un brise-vue : cela se
                fait très bien un week-end de septembre, avec du matériel simple et un peu de méthode. Nous préférons
                vous l&apos;écrire plutôt que de vous vendre une prestation dont vous n&apos;avez pas besoin.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ce qu&apos;on nous confie relève d&apos;autre chose. D&apos;abord la hauteur : un bardage de façade
                impose un échafaudage ou une nacelle, et une façade entière n&apos;est pas une échelle posée contre un
                mur. Ensuite le rattrapage : quand le bois est trop marqué pour un simple entretien, il faut dégriser,
                poncer, parfois remplacer des lames, et l&apos;ordre des opérations compte autant que le produit, c&apos;est
                le sujet de notre guide de{' '}
                <a href="/blog/renover-terrasse-bois-existante" className={lienInterne}>
                  rénovation de terrasse
                </a>
                . Enfin le diagnostic : une lambourde molle, un pied de poteau qui s&apos;effrite, un bas de bardage
                noirci ne relèvent plus de l&apos;entretien mais de la structure, et c&apos;est là que nous sommes utiles.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Côté budget, et pour rester honnête : sur nos propres chantiers en 2026, autour de Libourne, un nettoyage
                doux suivi d&apos;une application de saturateur sur une terrasse accessible se situe le plus souvent{' '}
                <strong className="text-primary font-semibold">entre 15 et 35 € du mètre carré</strong>, produit compris.
                Un rattrapage complet (dégrisage, ponçage, puis traitement) se situe plutôt{' '}
                <strong className="text-primary font-semibold">entre 30 et 60 € du mètre carré</strong>. Sur un bardage,
                ce n&apos;est plus la surface qui commande mais l&apos;accès : le poste échafaudage peut peser autant que
                le reste. Ce sont des ordres de grandeur constatés, pas un tarif : seul un devis établi après avoir vu
                l&apos;ouvrage nous engage.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nous intervenons à Libourne et dans toute la Gironde, sur les ouvrages que nous avons construits comme
                sur ceux que nous découvrons. Vous pouvez voir le type d&apos;ouvrages dont nous parlons dans{' '}
                <a href="/realisations" className={lienInterne}>
                  nos réalisations en Gironde
                </a>,
                et découvrir notre approche de{' '}
                <a href="/amenagement-exterieur" className={lienInterne}>
                  l&apos;aménagement extérieur
                </a>{' '}
                et des{' '}
                <a href="/constructions-bois" className={lienInterne}>
                  constructions bois
                </a>,{' '}
               parce qu&apos;un ouvrage bien conçu, ventilé et bien posé est celui qui vous demandera le moins de
                traitement au fil des années.
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
              Traiter ses bois avant l&apos;hiver : vos questions
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
              Une fenêtre courte, et une règle simple
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Si la météo vous laisse quelques journées douces et sèches, c&apos;est maintenant. Sinon, nettoyez, dégagez
              ce qui retient l&apos;eau, et reportez l&apos;application au printemps : un bois nu passe l&apos;hiver
              sans dommage, un bois mal traité se paie deux fois. Et n&apos;oubliez pas que votre terrasse, votre
              bardage, votre clôture et votre carport ne demandent ni le même produit ni le même rythme. Chez L&apos;Esprit
              Bois, entreprise qualifiée Qualibat installée près de Libourne, nous entretenons, diagnostiquons et
              rénovons les ouvrages en bois dans toute la Gironde, y compris ceux que nous n&apos;avons pas construits.
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
