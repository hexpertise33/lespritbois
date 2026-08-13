import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/terrasse-bois-plots-gironde-4.webp';

export const metadata: Metadata = buildMetadata({
  title: "Structure d'une terrasse bois : plots et lambourdes",
  description:
    "Plots, lambourdes, ventilation, pente : tout ce qui se joue sous les lames et décide de la durée de vie.",
  keywords:
    "structure terrasse bois, terrasse bois sur plots réglables, entraxe lambourdes terrasse, lambourdes terrasse bois, ventilation terrasse bois, sous-face terrasse bois, NF DTU 51.4, pose terrasse bois Gironde, terrasse bois Libourne",
  path: '/blog/terrasse-bois-structure-plots-lambourdes',
  ogImage: COVER,
  ogTitle:
    "Structure d'une terrasse en bois : ce qui décide vraiment de sa durée de vie",
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
        name: "Structure d'une terrasse en bois",
        item: 'https://lesprit-bois.fr/blog/terrasse-bois-structure-plots-lambourdes',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      "Structure d'une terrasse en bois : plots, lambourdes et ventilation, ce qui décide vraiment de sa durée de vie",
    description:
      "Une terrasse en bois meurt rarement de son essence : elle meurt de sa sous-face. Support et plots réglables, section et entraxe des lambourdes, ventilation, gestion de l'eau, fixations et NF DTU 51.4, par un artisan à Libourne (Gironde).",
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
    datePublished: '2026-08-01',
    dateModified: '2026-08-01',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/terrasse-bois-structure-plots-lambourdes',
    },
    about: ['structure terrasse bois', 'lambourdes', 'plots réglables', 'ventilation terrasse'],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Quel entraxe prévoir entre les lambourdes d'une terrasse en bois ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Il n'y a pas de valeur universelle : l'entraxe dépend de l'épaisseur et de l'essence de la lame, du sens de pose et de la charge prévue. Il se détermine à partir du NF DTU 51.4 et des préconisations du fabricant de la lame. Sur nos chantiers, nous restons généralement autour de 40 à 50 cm, et nous resserrons dès que la lame est fine, tendre, posée en diagonale ou destinée à supporter du mobilier lourd.",
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on poser une terrasse en bois directement sur la terre ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non. Une lambourde posée à même la terre reste humide en permanence, se salit, ne sèche jamais et se dégrade par la sous-face, quelle que soit l'essence. Il faut toujours un support qui décolle le bois du sol et laisse l'eau partir : plots réglables, plots béton, dalles, ou une structure porteuse pour une terrasse surélevée, avec un sol dessous stabilisé et drainant.",
        },
      },
      {
        '@type': 'Question',
        name: "Pourquoi faut-il ventiler la sous-face d'une terrasse en bois ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Parce que le bois ne craint pas l'eau, il craint l'eau qui ne repart pas. Une sous-face ventilée sèche entre deux pluies ; une sous-face fermée reste humide, ce qui favorise le développement des champignons, le gonflement, le tuilage et le desserrage des fixations. Concrètement, il faut une hauteur libre sous le platelage, des entrées d'air opposées non obstruées et ne jamais fermer toutes les rives du pourtour.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quel jeu laisser entre les lames de terrasse ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un jeu de quelques millimètres, de l'ordre de 3 à 5 mm selon la lame et son taux d'humidité à la pose, est la pratique courante. Il sert à deux choses : laisser l'eau s'évacuer vers la sous-face plutôt que stagner, et laisser le bois travailler en largeur avec les saisons. La valeur exacte se cale sur les préconisations du fournisseur de la lame et sur son état à la livraison.",
        },
      },
      {
        '@type': 'Question',
        name: 'Que dit le NF DTU 51.4 pour une terrasse de maison individuelle ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le NF DTU 51.4 « Platelages extérieurs en bois », dans sa version parue en décembre 2018, encadre la conception et la mise en œuvre de ces ouvrages. Il distingue une conception dite courante, qui couvre la majorité des terrasses privées et privilégie la durabilité de l'ouvrage, et une conception dite développée pour les platelages plus chargés, comme ceux des lieux publics, où la résistance prime. Il intègre également le double lambourdage au droit des aboutages de lames, avec un jeu qui favorise l'évacuation de l'eau.",
        },
      },
    ],
  },
];

const supports = [
  [
    'Plots réglables',
    'Plots vissables réglables en hauteur, posés sur dalle, chape ou lit stabilisé',
    'Rattrapent le dénivelé et créent un vide ventilé sous la terrasse',
    'Demandent un support sain et stable dessous',
  ],
  [
    'Plots béton / dalles',
    'Appuis ponctuels maçonnés ou dalles posées sur lit de graviers',
    'Solution robuste et économique sur terrain plat',
    'Réglage fin plus laborieux, calage à surveiller',
  ],
  [
    'Lambourdes sur dalle existante',
    'Structure posée sur une dalle béton déjà en place, sur cales',
    'Rapide, très stable si la dalle est saine et en pente',
    'Vide sous platelage souvent faible : ventilation à soigner',
  ],
  [
    'Terrasse surélevée',
    'Ossature poteaux-solives ancrée, platelage à hauteur de seuil',
    'Rattrape un fort dénivelé, prolonge la maison de plain-pied',
    'Ouvrage porteur : dimensionnement et garde-corps à étudier',
  ],
];

const faq = [
  {
    q: "Quel entraxe prévoir entre les lambourdes d'une terrasse en bois ?",
    r: (
      <>
        Il n&apos;y a pas de valeur universelle : l&apos;entraxe dépend de l&apos;épaisseur et de l&apos;essence de la
        lame, du sens de pose et de la charge prévue. Il se détermine à partir du NF DTU 51.4 et des préconisations du
        fabricant de la lame. Sur nos chantiers, nous restons généralement autour de 40 à 50 cm, et nous resserrons dès
        que la lame est fine, tendre, posée en diagonale ou destinée à supporter du mobilier lourd.
      </>
    ),
  },
  {
    q: 'Peut-on poser une terrasse en bois directement sur la terre ?',
    r: (
      <>
        Non. Une lambourde posée à même la terre reste humide en permanence, se salit, ne sèche jamais et se dégrade par
        la sous-face, quelle que soit l&apos;essence. Il faut toujours un support qui décolle le bois du sol et laisse
        l&apos;eau partir : plots réglables, plots béton, dalles, ou une structure porteuse pour une terrasse surélevée,
        avec un sol dessous stabilisé et drainant.
      </>
    ),
  },
  {
    q: "Pourquoi faut-il ventiler la sous-face d'une terrasse en bois ?",
    r: (
      <>
        Parce que le bois ne craint pas l&apos;eau, il craint l&apos;eau qui ne repart pas. Une sous-face ventilée sèche
        entre deux pluies ; une sous-face fermée reste humide, ce qui favorise le développement des champignons, le
        gonflement, le tuilage et le desserrage des fixations. Concrètement, il faut une hauteur libre sous le
        platelage, des entrées d&apos;air opposées non obstruées et ne jamais fermer toutes les rives du pourtour.
      </>
    ),
  },
  {
    q: 'Quel jeu laisser entre les lames de terrasse ?',
    r: (
      <>
        Un jeu de quelques millimètres, de l&apos;ordre de 3 à 5 mm selon la lame et son taux d&apos;humidité à la pose,
        est la pratique courante. Il sert à deux choses : laisser l&apos;eau s&apos;évacuer vers la sous-face plutôt que
        stagner, et laisser le bois travailler en largeur avec les saisons. La valeur exacte se cale sur les
        préconisations du fournisseur de la lame et sur son état à la livraison.
      </>
    ),
  },
  {
    q: 'Que dit le NF DTU 51.4 pour une terrasse de maison individuelle ?',
    r: (
      <>
        Le NF DTU 51.4 « Platelages extérieurs en bois », dans sa version parue en décembre 2018, encadre la conception
        et la mise en œuvre de ces ouvrages. Il distingue une conception dite <em>courante</em>, qui couvre la majorité
        des terrasses privées et privilégie la durabilité de l&apos;ouvrage, et une conception dite{' '}
        <em>développée</em> pour les platelages plus chargés, comme ceux des lieux publics, où la résistance prime. Il
        intègre également le double lambourdage au droit des aboutages de lames, avec un jeu qui favorise
        l&apos;évacuation de l&apos;eau.
      </>
    ),
  },
];

export default function ArticleStructureTerrasseBoisPage() {
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
              alt="Terrasse en bois posée sur plots au-dessus d'un sol sableux drainant, chantier en Gironde"
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
              <span className="text-secondary-fixed">Structure d&apos;une terrasse en bois</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Terrasses bois
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Structure d&apos;une terrasse en bois : plots, lambourdes et ventilation, ce qui décide vraiment de sa
              durée de vie
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
              <span>1er août 2026</span>
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
                Une terrasse en bois ne meurt presque jamais de son essence : elle meurt de sa sous-face. Ce qui décide
                de sa durée de vie, c&apos;est un support qui décolle le bois du sol, des lambourdes correctement
                dimensionnées et appuyées, un vide ventilé sous le platelage et une eau qui repart toujours.
              </strong>{' '}
              La lame se voit, la structure décide. Sur les terrasses que nous reprenons autour de Libourne, les lames
              sont souvent encore saines en surface alors que la structure, elle, a lâché : lambourdes noircies, plots
              qui se sont enfoncés, rives fermées qui ont piégé l&apos;humidité. Voici, en détail, ce qu&apos;on ne voit
              plus une fois la terrasse posée — et ce que nous vérifions avant de visser la première lame.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Ce qui tue une terrasse */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qui tue une terrasse en bois, ce n&apos;est presque jamais l&apos;essence
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Quand on nous appelle pour une terrasse « fatiguée », le diagnostic se répète d&apos;un chantier à
                l&apos;autre. On soulève deux lames, on passe la main dessous, et on trouve toujours la même chose :{' '}
                <strong className="text-primary font-semibold">
                  du bois qui n&apos;a jamais séché depuis la pose.
                </strong>{' '}
                Les lames, elles, sont exposées au soleil et au vent : elles grisent, elles se fendillent un peu, mais
                elles tiennent. C&apos;est la face cachée, celle qui ne voit ni lumière ni air, qui se dégrade en
                premier.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le bois ne craint pas l&apos;eau. Il craint l&apos;eau qui reste. Une lame mouillée par un orage
                d&apos;été sèche en quelques heures si l&apos;air circule dessous ; la même lame, posée sur une
                lambourde noyée dans du gravier fin, contre un mur et sans aucune sortie d&apos;air, va rester chargée
                d&apos;humidité pendant des semaines. Les cycles d&apos;humidification et de séchage deviennent lents,
                irréguliers, et c&apos;est là que tout arrive : gonflement, tuilage des lames, desserrage des vis,
                développement de champignons, affaissement localisé.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Autrement dit, deux terrasses posées avec exactement la même essence peuvent avoir des trajectoires
                totalement différentes selon ce qu&apos;il y a dessous. Le choix de l&apos;essence reste important — nous
                le détaillons dans notre guide{' '}
                <a href="/blog/quel-bois-pour-terrasse-exterieure" className={lienInterne}>
                  quel bois choisir pour une terrasse extérieure
                </a>{' '}
                — mais c&apos;est un facteur parmi d&apos;autres. La structure, elle, est le facteur qui n&apos;admet
                aucun rattrapage : on ne reprend pas une sous-face une fois les lames vissées.
              </p>
            </section>

            {/* 2. Support */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Plots réglables, lambourdes au sol ou terrasse surélevée : quel support pour quel terrain
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le premier choix technique n&apos;est pas celui de la lame, c&apos;est celui du support. Il dépend de
                trois données que nous relevons sur place : la nature du sol, le dénivelé entre le point haut et le
                point bas, et la hauteur disponible sous le seuil de la maison (une terrasse ne doit pas venir bloquer
                une porte-fenêtre ni remonter au-dessus d&apos;une arase de mur).
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Les quatre configurations que nous rencontrons le plus souvent en Gironde :
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Support</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Principe</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Atouts</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Limites</th>
                    </tr>
                  </thead>
                  <tbody>
                    {supports.map((ligne, i) => (
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
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6">
                Notre solution par défaut sur une terrasse de plain-pied, c&apos;est le{' '}
                <strong className="text-primary font-semibold">plot réglable</strong>. Il permet de rattraper couramment
                plusieurs dizaines de centimètres de dénivelé, de régler chaque appui au millimètre pour obtenir un
                platelage parfaitement plan, et surtout il crée d&apos;emblée un vide sous la terrasse — donc de la
                ventilation. C&apos;est un poste qui coûte, et qui représente une part importante du prix d&apos;une
                terrasse posée : c&apos;est aussi celui sur lequel il ne faut jamais rogner.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-5">
                La règle absolue, quel que soit le support :{' '}
                <strong className="text-primary font-semibold">
                  une lambourde ne repose jamais à même la terre.
                </strong>{' '}
                Une lambourde posée sur le sol reste humide toute l&apos;année, se salit, ne sèche jamais, et emmène le
                platelage avec elle. Même une essence très durable ne survit pas à ce traitement.
              </p>
            </section>

            <Figure
              src="/images/pergola-terrasse-bois-libourne-2.webp"
              alt="Terrasse en bois sur plots réglables, rive laissée ouverte et vide d'air sous le platelage, sur un de nos chantiers en Gironde"
              caption="Les plots noirs se lisent sous la rive : ils rattrapent un terrain qui n'est pas plan et créent d'emblée le vide d'air sous la terrasse."
            />

            {/* 3. Lambourdes */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Les lambourdes : section, appuis, entraxe et sens de pose
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La lambourde, c&apos;est la pièce de bois qui reçoit les lames et transmet les charges aux appuis.
                C&apos;est elle qui travaille. Quatre paramètres la caractérisent, et tous doivent être cohérents entre
                eux.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['La section', 'la largeur d’appui doit permettre de visser proprement la lame sans fendre le bois, et l’épaisseur doit encaisser la portée entre appuis. Une lambourde trop maigre fléchit entre deux plots et fait « rebondir » la terrasse sous le pas.'],
                  ['Les appuis', 'une lambourde doit reposer sur au moins trois points d’appui : deux extrémités et un appui intermédiaire. Deux appuis seulement, c’est une poutre qui plie au milieu, et un platelage qui se creuse en son centre au bout de quelques saisons.'],
                  ['L’entraxe', 'la distance entre deux lambourdes conditionne directement le confort et la tenue de la lame. Trop large, la lame fléchit, se vrille et se fend autour des vis.'],
                  ['Le sens de pose', 'les lambourdes se posent perpendiculairement aux lames, et le sens des lames se choisit en fonction de l’écoulement de l’eau, de la circulation et de la lecture de l’espace depuis la maison.'],
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
                Soyons précis sur les chiffres, parce que c&apos;est là que circulent beaucoup d&apos;approximations :{' '}
                <strong className="text-primary font-semibold">
                  il n&apos;existe pas d&apos;entraxe ni de section « standard » valables partout.
                </strong>{' '}
                Ces valeurs dépendent de l&apos;essence, de l&apos;épaisseur et de la largeur de la lame, du sens de
                pose et des charges prévues. Elles se déterminent à partir du NF DTU 51.4, publié par le{' '}
                <a href="https://www.cstb.fr/" className={lienInterne} target="_blank" rel="noopener noreferrer">
                  CSTB
                </a>
                , et des préconisations du fournisseur de la lame, qui indique la portée admissible de son produit.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Cela dit, pour donner un ordre de grandeur de chantier : sur nos terrasses privées courantes, nous
                restons généralement <strong className="text-primary font-semibold">autour de 40 à 50 cm</strong>{' '}
                d&apos;entraxe, et nous resserrons systématiquement dès que la lame est fine, tendre, posée en diagonale
                (la portée réelle augmente alors) ou destinée à recevoir une charge lourde — un spa, une jardinière
                maçonnée, un plan de cuisson extérieur. Nous préférons ajouter une lambourde que d&apos;expliquer trois
                ans plus tard pourquoi le platelage « fait le trampoline ».
              </p>
            </section>

            <Figure
              src="/images/blog/terrasse-bois-structure-plots-lambourdes/lambourdes-terrasse-bois-entraxe-pose-lames.jpg"
              alt="Lambourdes bois d'une terrasse espacées à entraxe régulier, premières lames vissées par-dessus"
              caption="À gauche la trame de lambourdes encore nue, à droite les lames déjà vissées : une fois cette limite franchie, plus rien ne se reprend en sous-face."
            />

            {/* 4. Ventilation */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                La ventilation de la sous-face : la règle la plus souvent enfreinte
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est le point sur lequel nous voyons le plus d&apos;erreurs, y compris sur des terrasses posées
                par des professionnels.{' '}
                <strong className="text-primary font-semibold">
                  Une terrasse en bois est un ouvrage qui doit respirer par-dessous.
                </strong>{' '}
                Si l&apos;air ne traverse pas la sous-face, l&apos;humidité s&apos;installe, et tout le reste — essence
                durable, saturateur, belle visserie — ne fait que retarder l&apos;échéance.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Nous ne donnons volontairement pas de ratio d&apos;aération chiffré : le sujet est physique avant
                d&apos;être arithmétique. Ce qu&apos;il faut obtenir, c&apos;est un courant d&apos;air réel. Quatre
                conditions le garantissent :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Une hauteur libre suffisante entre le sol et la sous-face du platelage : le vide doit exister, pas être théorique.',
                  'Des entrées d’air opposées : l’air doit pouvoir entrer d’un côté et ressortir de l’autre, sinon il ne circule pas.',
                  'Des rives qui ne sont jamais fermées sur tout le pourtour : une jupe décorative ou un bardage de finition doit rester ajouré ou interrompu.',
                  'Un dessous qu’on entretient : ni feuilles accumulées, ni terre remontée, ni stockage de bûches ou de mobilier qui bouche la circulation.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Le piège le plus fréquent est esthétique : le client veut masquer le vide sous la terrasse, et on ferme
                les quatre rives avec une plinthe pleine. On vient de transformer un ouvrage ventilé en caisson humide.
                Nous proposons alors une jupe claire-voie, une rive interrompue ou une grille discrète : on cache le
                vide sans couper l&apos;air. Même logique pour la garde au sol : sous la terrasse, on met un sol
                drainant et un géotextile, jamais une couche de terre végétale qui remontera l&apos;humidité et fera
                pousser des herbes contre les lambourdes.
              </p>
            </section>

            <Figure
              src="/images/terrasse-bois-plots-gironde-2.webp"
              alt="Sous-face ventilée d'une terrasse en bois en Gironde : rive périphérique ouverte au-dessus d'un sol sableux drainant"
              caption="Rive libre sur tout le pourtour et sol drainant dessous : l'air entre d'un côté et ressort de l'autre, c'est ce qui permet au bois de sécher entre deux pluies."
            />

            {/* 5. Eau */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                L&apos;eau : pente, drainage, jeu entre lames et protection des lambourdes
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une terrasse bien conçue est une terrasse d&apos;où l&apos;eau part toute seule. Cela se joue à quatre
                niveaux, du platelage jusqu&apos;au sol.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">La pente d&apos;abord.</strong> Une légère pente, donnée
                à la structure et non à l&apos;œil au moment de poser les lames, oriente l&apos;eau vers l&apos;extérieur
                — et jamais vers la façade de la maison. Sur un platelage réglé au cordeau, une différence de quelques
                millimètres suffit à décider si l&apos;eau part ou si elle stagne en flaque au même endroit à chaque
                pluie.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">Le jeu entre lames ensuite.</strong> On laisse quelques
                millimètres — de l&apos;ordre de 3 à 5 mm selon la lame et son humidité à la livraison — pour deux
                raisons cumulées : l&apos;eau doit pouvoir traverser le platelage plutôt que de rester dessus, et le
                bois doit pouvoir travailler en largeur au fil des saisons. Une lame livrée très humide se rétractera en
                séchant : le jeu se cale sur cet état réel, pas sur une règle apprise par cœur.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">La protection des lambourdes.</strong> Comme
                l&apos;eau traverse le platelage, elle tombe sur le dessus des lambourdes et stagne là, juste sous
                chaque lame, au droit de chaque vis. C&apos;est le point faible numéro un d&apos;une terrasse. Nous
                posons donc une bande bitumineuse (ou une protection équivalente) sur le chant supérieur des
                lambourdes : elle empêche l&apos;eau de s&apos;installer au contact bois-bois et de pénétrer par les
                perçages.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                <strong className="text-primary font-semibold">Le sol enfin.</strong> Sous la terrasse, le sol doit
                absorber ou évacuer. Un lit drainant, un géotextile, et le cas échéant un exutoire vers un point bas du
                jardin : si l&apos;eau qui traverse le platelage se retrouve piégée dans une cuvette argileuse, on a
                simplement déplacé le problème de dix centimètres. Ce travail de nivellement et de drainage fait partie
                intégrante de nos chantiers d&apos;
                <a href="/amenagement-exterieur" className={lienInterne}>
                  aménagement extérieur
                </a>
                .
              </p>
            </section>

            {/* 6. Fixations */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Fixations : vis inox, clips invisibles, dilatation
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La fixation est le point de contact entre la lame et la structure : c&apos;est aussi par là que
                l&apos;eau entre dans le bois et que les désordres commencent à se voir.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">Les vis inox</strong> sont la solution la plus robuste et
                la plus réparable : une lame abîmée se démonte et se remplace en dix minutes. L&apos;inox est
                indispensable en extérieur — une vis acier ordinaire rouille, coule et laisse des traînées noires
                irrattrapables sur la lame, en particulier avec les essences tanniques comme le chêne ou le
                châtaignier. Le pré-perçage n&apos;est pas une option sur les bois durs : c&apos;est ce qui évite les
                fentes au bout des lames.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">Les clips invisibles</strong> donnent un platelage sans
                aucune tête de vis visible, très net, et imposent mécaniquement un jeu régulier entre lames. En
                contrepartie, ils exigent des lames rainurées compatibles, une structure parfaitement réglée, et le
                démontage d&apos;une lame isolée est plus contraignant. Nous les proposons volontiers sur les terrasses
                très visibles, en expliquant clairement ce compromis.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Dans les deux cas, un principe ne change pas :{' '}
                <strong className="text-primary font-semibold">le bois bouge, la fixation doit l&apos;accepter.</strong>{' '}
                Une lame bridée sur toute sa longueur, coincée contre un mur ou vissée sans jeu périphérique, va se
                vriller ou fendre au premier grand écart d&apos;humidité. On laisse donc un jeu en about, un jeu contre
                les murs et les obstacles, et on ne serre pas les vis à l&apos;excès.
              </p>
            </section>

            <Figure
              src="/images/terrasse-bois-plots-gironde-3.webp"
              alt="Lames de terrasse en bois vissées le long d'une façade, jeu régulier entre lames et en périphérie, Gironde"
              caption="Le jeu ne se remarque pas : quelques millimètres entre lames pour l'eau, et un dégagement le long des murs pour laisser le bois travailler."
            />

            {/* 7. DTU */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce que dit le NF DTU 51.4 (et comment nous l&apos;appliquons)
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le texte de référence pour ce type d&apos;ouvrage est le{' '}
                <strong className="text-primary font-semibold">
                  NF DTU 51.4 « Platelages extérieurs en bois »
                </strong>
                , dans sa version parue en décembre 2018. Il encadre la conception et la mise en œuvre des platelages, et
                c&apos;est lui qui sert de cadre commun entre l&apos;artisan, le fournisseur de lames et le client.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Deux points en particulier méritent d&apos;être connus des maîtres d&apos;ouvrage. D&apos;abord, le
                texte distingue une <strong className="text-primary font-semibold">conception dite « courante »</strong>,
                qui couvre la grande majorité des terrasses privées et privilégie la durabilité de l&apos;ouvrage, et
                une <strong className="text-primary font-semibold">conception dite « développée »</strong>, destinée aux
                platelages plus chargés — typiquement les lieux publics — où c&apos;est la résistance mécanique qui
                prime. Une terrasse de maison relève presque toujours de la première catégorie : l&apos;objectif
                n&apos;est pas de tenir une foule, c&apos;est de durer.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ensuite, la version actuelle intègre le{' '}
                <strong className="text-primary font-semibold">
                  double lambourdage au droit des aboutages de lames
                </strong>
                , avec un jeu qui favorise l&apos;évacuation de l&apos;eau. Concrètement : là où deux lames se
                rejoignent bout à bout, on ne les fait pas mourir sur une seule lambourde partagée, mais sur deux
                lambourdes accolées avec un espace entre elles. Chaque about a son propre appui, et l&apos;eau qui
                s&apos;infiltre à la jonction — l&apos;endroit le plus vulnérable d&apos;un platelage — trouve un
                passage au lieu de rester coincée entre deux bouts de bois.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Pour tout le reste — sections, entraxes, nombre d&apos;appuis, fixations — nous croisons
                systématiquement le DTU et les préconisations du fournisseur de la lame retenue. C&apos;est aussi
                pourquoi nous refusons de donner un tableau universel : le bon entraxe pour une lame de pin de 21 mm
                n&apos;est pas celui d&apos;une lame exotique de 21 mm, et ce n&apos;est pas non plus celui d&apos;une
                pose en diagonale.
              </p>
            </section>

            {/* 8. Gironde */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Terrains argileux et jardins du Libournais : nos règles de chantier en Gironde
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Autour de Libourne, de Saint-Émilion et dans une grande partie du Libournais, nous travaillons sur des
                sols argileux qui gonflent l&apos;hiver et se rétractent l&apos;été. Un été sec comme ceux que nous
                connaissons désormais fait bouger le terrain, et une terrasse dont les appuis reposent sur un sol non
                préparé s&apos;en ressent : un plot qui descend de quelques millimètres, et c&apos;est le point dur au
                milieu du platelage, la vis qui se desserre, la flaque qui apparaît toujours au même endroit.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                D&apos;où quelques règles que nous appliquons sur nos chantiers girondins :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Préparer le sol avant tout : décaissement, lit stabilisé et géotextile, plutôt que de poser des plots sur de la terre végétale.',
                  'Multiplier les appuis plutôt que les espacer, sur terrain argileux : mieux vaut un plot de plus qu’un affaissement.',
                  'Éloigner l’ouvrage des descentes d’eaux pluviales et des zones où l’eau se concentre, ou prévoir un exutoire.',
                  'Se méfier des arbres proches : racines qui soulèvent, ombre permanente qui empêche le séchage, feuilles qui bouchent la ventilation à l’automne.',
                  'Vérifier les niveaux par rapport aux seuils de la maison avant de figer la hauteur des plots.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une fois la structure saine, l&apos;entretien devient simple et porte surtout sur la surface : nettoyage
                doux, saturateur au bon moment, et vigilance pendant les fortes chaleurs — c&apos;est le sujet de notre
                article sur{' '}
                <a href="/blog/proteger-terrasse-bois-canicule-entretien-ete" className={lienInterne}>
                  la protection d&apos;une terrasse en bois pendant la canicule
                </a>
                . Et si vous hésitez encore sur l&apos;essence, notre{' '}
                <a href="/blog/quel-bois-pour-terrasse-exterieure" className={lienInterne}>
                  guide par essence
                </a>{' '}
                vous donnera durabilité, teinte et fourchettes de prix.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Vous pouvez voir comment tout cela se traduit sur le terrain dans{' '}
                <a href="/realisations" className={lienInterne}>nos réalisations en Gironde</a>, et découvrir notre
                approche des{' '}
                <a href="/amenagement-exterieur#terrasses" className={lienInterne}>
                  terrasses bois sur mesure
                </a>{' '}
                — de l&apos;étude des niveaux à la dernière lame vissée.
              </p>
            </section>

            <Figure
              src="/images/terrasse-bois-pool-house-libourne.webp"
              alt="Terrasse en bois terminée au bord d'une piscine à Libourne, lames alignées et jeu régulier, réalisation L'Esprit Bois"
              caption="Une terrasse réussie ne montre rien de sa structure : alignement, planéité et jeu constant sont le résultat visible d'un réglage fait sous les lames."
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
              Structure d&apos;une terrasse en bois : vos questions
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
              La lame se voit, la structure décide
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Personne ne vous complimentera jamais sur vos lambourdes. C&apos;est pourtant là que se joue la différence
              entre une terrasse qui traverse quinze saisons sans broncher et une terrasse qu&apos;il faut reprendre au
              bout de cinq ans. Chez L&apos;Esprit Bois, entreprise certifiée Qualibat à Libourne et dans toute la
              Gironde, nous commençons toujours par le sol, les niveaux et la ventilation — le choix de la lame vient
              ensuite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/amenagement-exterieur#terrasses"
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
