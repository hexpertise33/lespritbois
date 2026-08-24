import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/blog/renover-terrasse-bois-existante/terrasse-bois-grisee-lames-patinees.jpg';

export const metadata: Metadata = buildMetadata({
  title: "Rénover une terrasse en bois : poncer ou refaire ? | Gironde",
  description:
    "Poncer, changer les lames ou tout déposer ? Le diagnostic honnête avant de dépenser : sous-face, lambourdes, dégrisage et prix au m² en Gironde.",
  keywords:
    "rénover une terrasse en bois, remplacer les lames d'une terrasse en bois, rénovation terrasse bois Gironde, terrasse bois Libourne, dégriser et poncer une terrasse, refaire une terrasse en bois prix, terrasse bois grise, changer lambourdes terrasse",
  path: '/blog/renover-terrasse-bois-existante',
  ogImage: COVER,
  ogTitle:
    "Rénover une terrasse en bois : poncer, changer les lames ou tout refaire ?",
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
        name: 'Rénover une terrasse en bois',
        item: 'https://lesprit-bois.fr/blog/renover-terrasse-bois-existante',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      "Rénover une terrasse en bois : poncer, changer les lames ou tout refaire ? Le diagnostic avant de dépenser",
    description:
      "Ce qui décide entre rénovation de surface, remplacement des lames et réfection complète n'est pas la couleur grise du platelage mais l'état de la sous-face : lambourdes, appuis, ventilation, fixations. Diagnostic en trois gestes, dégrisage et ponçage dans le bon ordre, remplacement lame par lame et fourchettes de prix 2026, par un artisan à Libourne (Gironde).",
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
    datePublished: '2026-08-05',
    dateModified: '2026-08-05',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/renover-terrasse-bois-existante',
    },
    about: [
      { '@type': 'Thing', name: 'rénovation terrasse bois' },
      { '@type': 'Thing', name: 'entretien terrasse' },
      { '@type': 'Thing', name: 'aménagement extérieur' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Peut-on rénover une terrasse en bois sans changer les lames ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, dans la majorité des cas. Tant que les lames restent dures sous la pointe d'un poinçon et que la structure est saine, un nettoyage doux, un dégrisage puis un ponçage léger et un saturateur suffisent à leur rendre leur teinte et à supprimer les échardes. Le remplacement ne s'impose que si le bois est spongieux, fendu de part en part ou si les fixations ne tiennent plus dans la lambourde.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faut-il une autorisation pour rénover une terrasse en bois existante ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Remettre en état une terrasse existante à l'identique, sans changer son emprise ni sa hauteur, relève de l'entretien et n'appelle en principe aucune formalité. En revanche, dès que le projet modifie l'ouvrage (agrandissement de l'emprise, surélévation, ajout d'une couverture), une déclaration préalable peut être exigée, selon le PLU de votre commune. Le service urbanisme de la mairie tranche : nous faisons cette vérification avant d'engager le chantier.",
        },
      },
      {
        '@type': 'Question',
        name: 'Le nettoyeur haute pression abîme-t-il vraiment une terrasse en bois ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, et le dégât est irréversible. Le jet creuse le bois tendre du printemps entre les cernes plus durs, laisse un relief en vaguelettes, relève les fibres et ouvre la surface à l'eau et aux champignons. Une terrasse passée au karcher tous les ans vieillit beaucoup plus vite qu'une terrasse simplement brossée. Nous travaillons à la brosse souple et à basse pression, dans le sens des fibres.",
        },
      },
      {
        '@type': 'Question',
        name: "Combien de temps dure une terrasse en bois rénovée ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Cela dépend de ce qui a été rénové. Une rénovation de surface redonne l'aspect pour quelques saisons : le saturateur s'use et se renouvelle, sans décapage puisqu'il ne fait pas de film. Un remplacement des lames sur une structure saine repart pour la durée de vie de la nouvelle essence. En revanche, rénover la surface d'une terrasse dont les lambourdes sont atteintes ne prolonge rien : le platelage retombera avec la structure.",
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on remplacer des lames par une autre essence ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Techniquement oui, à condition de conserver la même largeur et surtout la même épaisseur : l'entraxe des lambourdes en place a été calculé pour la lame d'origine. Une lame plus fine ou plus souple imposerait de rapprocher les lambourdes, donc de reprendre la structure. Attention aussi à l'aspect : mélanger deux essences sur une même terrasse se voit durablement, car elles ne grisent ni à la même vitesse ni de la même façon.",
        },
      },
    ],
  },
];

const scenarios = [
  [
    'Rénovation de surface',
    'Nettoyage doux, dégrisage, saturateur',
    'Environ 15 à 30 €/m²',
    'Lames saines, structure saine, simple perte d’éclat',
  ],
  [
    'Rénovation complète de surface',
    'Nettoyage, dégrisage, ponçage, saturateur',
    'Environ 30 à 60 €/m²',
    'Échardes, fibres relevées, ancien film à retirer',
  ],
  [
    'Remplacement des lames',
    'Dépose du platelage, structure conservée, lames neuves',
    'Environ 50 à 200 €/m² selon l’essence',
    'Lames hors d’usage, lambourdes et appuis sains',
  ],
  [
    'Dépose totale et réfection',
    'Structure comprise : appuis, lambourdes, platelage',
    'À partir d’environ 80 à 150 €/m²',
    'Structure atteinte, sol qui a bougé, ventilation absente',
  ],
];

const faq = [
  {
    q: 'Peut-on rénover une terrasse en bois sans changer les lames ?',
    r: (
      <>
        Oui, dans la majorité des cas. Tant que les lames restent dures sous la pointe d&apos;un poinçon et que la
        structure est saine, un nettoyage doux, un dégrisage puis un ponçage léger et un saturateur suffisent à leur
        rendre leur teinte et à supprimer les échardes. Le remplacement ne s&apos;impose que si le bois est spongieux,
        fendu de part en part ou si les fixations ne tiennent plus dans la lambourde.
      </>
    ),
  },
  {
    q: 'Faut-il une autorisation pour rénover une terrasse en bois existante ?',
    r: (
      <>
        Remettre en état une terrasse existante à l&apos;identique, sans changer son emprise ni sa hauteur, relève de
        l&apos;entretien et n&apos;appelle en principe aucune formalité. En revanche, dès que le projet modifie
        l&apos;ouvrage (agrandissement de l&apos;emprise, surélévation, ajout d&apos;une couverture), une{' '}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F17578"
          className={lienInterne}
          target="_blank"
          rel="noopener noreferrer"
        >
          déclaration préalable
        </a>{' '}
        peut être exigée, selon le PLU de votre commune. Le service urbanisme de la mairie tranche : nous faisons cette
        vérification avant d&apos;engager le chantier.
      </>
    ),
  },
  {
    q: 'Le nettoyeur haute pression abîme-t-il vraiment une terrasse en bois ?',
    r: (
      <>
        Oui, et le dégât est irréversible. Le jet creuse le bois tendre du printemps entre les cernes plus durs, laisse
        un relief en vaguelettes, relève les fibres et ouvre la surface à l&apos;eau et aux champignons. Une terrasse
        passée au karcher tous les ans vieillit beaucoup plus vite qu&apos;une terrasse simplement brossée. Nous
        travaillons à la brosse souple et à basse pression, dans le sens des fibres.
      </>
    ),
  },
  {
    q: 'Combien de temps dure une terrasse en bois rénovée ?',
    r: (
      <>
        Cela dépend de ce qui a été rénové. Une rénovation de surface redonne l&apos;aspect pour quelques saisons : le
        saturateur s&apos;use et se renouvelle, sans décapage puisqu&apos;il ne fait pas de film. Un remplacement des
        lames sur une structure saine repart pour la durée de vie de la nouvelle essence. En revanche, rénover la
        surface d&apos;une terrasse dont les lambourdes sont atteintes ne prolonge rien : le platelage retombera avec la
        structure.
      </>
    ),
  },
  {
    q: 'Peut-on remplacer des lames par une autre essence ?',
    r: (
      <>
        Techniquement oui, à condition de conserver la même largeur et surtout la même épaisseur : l&apos;entraxe des
        lambourdes en place a été calculé pour la lame d&apos;origine. Une lame plus fine ou plus souple imposerait de
        rapprocher les lambourdes, donc de reprendre la structure. Attention aussi à l&apos;aspect : mélanger deux
        essences sur une même terrasse se voit durablement, car elles ne grisent ni à la même vitesse ni de la même
        façon.
      </>
    ),
  },
];

export default function ArticleRenoverTerrasseBoisPage() {
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
              height="800"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Terrasse en bois vieillie, lames grisées et patinées par les intempéries avant rénovation"
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
              <span className="text-secondary-fixed">Rénover une terrasse en bois</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Rénovation terrasse
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Rénover une terrasse en bois : poncer, changer les lames ou tout refaire ?
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
              <span>5 août 2026</span>
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
                Avant de dépenser un euro sur une terrasse fatiguée, retournez le raisonnement : dans neuf cas sur dix,
                ce qui décide entre poncer, remplacer les lames ou tout déposer n&apos;est pas la couleur grise du
                platelage, purement esthétique et parfaitement réversible, mais l&apos;état de la sous-face :
                lambourdes, appuis, ventilation, fixations. Une terrasse grise, fendue et pleine d&apos;échardes se
                rénove très bien en surface. Une terrasse dont les lambourdes travaillent doit être déposée, même si les
                lames sont encore belles.
              </strong>{' '}
              Nous voyons chaque printemps, autour de Libourne et dans tout le Libournais, des terrasses poncées et
              saturées à grands frais qui s&apos;affaissent l&apos;hiver suivant : l&apos;argent est parti dans la
              couche visible, pas dans le problème. Voici le diagnostic que nous menons, dans l&apos;ordre, avant de
              chiffrer quoi que ce soit.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Diagnostic */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Rénover ou refaire : le diagnostic en trois points
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le diagnostic tient en trois gestes, que vous pouvez faire vous-même en dix minutes, un jour sec. Ils ne
                remplacent pas une visite, mais ils vous éviteront de demander le mauvais devis.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Marcher et écouter', 'parcourez la terrasse lentement, en appuyant, notamment le long des bords et près des descentes d’eau. Un léger cliquetis de vis est bénin ; un fléchissement mou sous le pied, une lame qui « respire » ou un craquement sourd désignent la lambourde, pas la lame.'],
                  ['Sonder à la vis ou au poinçon', 'plantez une pointe dans une lame en zone suspecte, puis, par une fente ou depuis le bord, dans une lambourde. Si la pointe s’enfonce sans effort sur plusieurs millimètres, le bois est attaqué. Un bois sain résiste, même gris.'],
                  ['Regarder sous la lame', 'démontez une ou deux lames en partie basse, là où l’eau stagne. C’est là que tout se joue : humidité permanente, terre remontée, lambourde noire, appui écrasé, absence de lame d’air.'],
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
                La règle que nous appliquons est simple :{' '}
                <strong className="text-primary font-semibold">
                  on juge la structure, jamais la couleur.
                </strong>{' '}
                Une terrasse peut être hideuse et parfaitement saine ; une autre peut paraître acceptable de loin et
                reposer sur des lambourdes qui ne tiennent plus rien. Ces deux terrasses n&apos;appellent ni le même
                devis, ni le même budget.
              </p>
            </section>

            <Figure
              src="/images/blog/renover-terrasse-bois-existante/lames-terrasse-bois-grises-fendues-diagnostic.jpg"
              w={1200}
              h={800}
              alt="Lames de terrasse en bois grisées, fendues et fibreuses, à diagnostiquer avant rénovation"
              caption="Le gris et les fentes ne condamnent rien : c'est la dureté du bois sous la pointe qui parle."
            />

            {/* 2. Gris, fentes, échardes */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce que disent vraiment le gris, les fentes et les échardes
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le grisaillement est le premier motif d&apos;appel, et c&apos;est le moins grave de tous. Sous
                l&apos;effet des UV et de la pluie, la lignine de surface se dégrade sur quelques dixièmes de
                millimètre et le bois prend cette patine argentée.{' '}
                <strong className="text-primary font-semibold">
                  C&apos;est un phénomène de surface, esthétique, qui n&apos;enlève rien à la résistance mécanique de la
                  lame
                </strong>,{' '}
               et il se corrige en une journée avec un dégriseur.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Les fentes de retrait, elles aussi, sont normales. Le bois travaille avec les cycles d&apos;humidité :
                des fentes fines en surface, des petits éclats en bout de lame, des têtes de vis légèrement en relief
                font partie de la vie d&apos;une terrasse extérieure. Les échardes viennent du même phénomène, les
                fibres se relevant à mesure que la surface s&apos;érode ; un ponçage les supprime.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Ce qui doit alerter, en revanche, est d&apos;une autre nature :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Le bois spongieux, qui cède sous l’ongle ou la pointe : la pourriture est installée, la lame ne se rattrape pas.',
                  'Les zones noires et humides en permanence, même après plusieurs jours de beau temps : le bois ne sèche plus, donc il ne s’en sortira pas seul.',
                  'Les têtes de vis qui remontent et ne tiennent plus au revissage : ce n’est pas la lame qui lâche, c’est la lambourde en dessous.',
                  'Les fentes traversantes ou les lames qui vrillent franchement, signe que la lame a dépassé son état d’usage.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Autrement dit : le gris se traite, la pourriture se remplace. Confondre les deux, c&apos;est soit jeter
                une terrasse encore bonne, soit maquiller une terrasse condamnée.
              </p>
            </section>

            {/* 3. Sous-face */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                La sous-face, le vrai juge du dossier
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Tout se décide sous les lames. Une terrasse en bois ne meurt presque jamais par le dessus : elle meurt
                parce que sa sous-face reste humide. Le{' '}
                <a href="https://www.cstb.fr/" className={lienInterne} target="_blank" rel="noopener noreferrer">
                  NF DTU 51.4
                </a>{' '}
                (platelages extérieurs en bois) demande d&apos;ailleurs que le platelage soit ventilé, avec une lame
                d&apos;air d&apos;au moins 50 mm sous les lambourdes, et une pente d&apos;écoulement de l&apos;ordre de
                1 à 2 % pour que l&apos;eau parte au lieu de stagner.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Quand nous ouvrons une terrasse, nous regardons quatre choses :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['La lambourde', 'sa dureté sur toute la longueur, et surtout au droit des appuis, là où l’eau se concentre.'],
                  ['Les appuis', 'plots, cales, dés béton : sont-ils encore réglés, désolidarisés du sol, non écrasés ?'],
                  ['La ventilation', 'y a-t-il un vrai vide sous le platelage, ou la terre, le gravier et les feuilles sont-ils venus le combler au fil des ans ?'],
                  ['Le drainage et la pente', 'l’eau trouve-t-elle une sortie, ou une bordure, un muret ou une dalle plus haute la retiennent-ils sous la terrasse ?'],
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
                Dernier point à vérifier si vous envisagez de changer les lames : l&apos;entraxe des lambourdes dépend
                de l&apos;épaisseur et de l&apos;essence des lames posées, couramment de l&apos;ordre de 40 à 50 cm
                pour une lame de 27 mm, sans jamais dépasser ce que prescrit le document pour la lame retenue. Nous
                avons détaillé toute cette partie invisible dans notre guide sur{' '}
                <a href="/blog/terrasse-bois-structure-plots-lambourdes" className={lienInterne}>
                  la structure d&apos;une terrasse en bois : plots, lambourdes et ventilation
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/terrasse-bois-plots-gironde-2.webp"
              w={1200}
              h={900}
              alt="Terrasse en bois sur plots réglables, lame d'air visible sous le platelage, chantier à Lacanau en Gironde"
              caption="Terrasse posée sur plots à Lacanau : le vide sous le platelage laisse sécher lambourdes et sous-face."
            />

            {/* 4. Rénovation de surface */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Rénovation de surface : dégriser, poncer, saturer, dans le bon ordre
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Si la structure est saine, la remise à neuf de l&apos;aspect suit toujours la même séquence, et
                l&apos;ordre compte autant que les produits.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['1. Nettoyer en douceur', 'balayage, brosse souple, eau savonneuse, basse pression. Nous proscrivons le nettoyeur haute pression : le jet creuse le bois tendre du printemps entre les cernes durs, laisse un relief en vaguelettes et relève les fibres. Le gain visuel du jour même se paie en vieillissement accéléré.'],
                  ['2. Dégriser', 'un dégriseur à base d’acide oxalique dissout la couche oxydée et rend sa teinte au bois. On le laisse agir sans le laisser sécher, puis on rince abondamment : un dégriseur mal rincé ruine l’accroche du saturateur.'],
                  ['3. Poncer si nécessaire', 'grain moyen, dans le sens de la fibre, uniquement là où les échardes ou un ancien film de lasure l’exigent. Un ponçage trop agressif enlève de la matière utile ; on cherche à ouvrir la surface, pas à raboter la lame.'],
                  ['4. Saturer', 'sur bois propre, sec et froid. Le saturateur nourrit le bois sans former de film : il s’use au lieu de s’écailler, et se renouvelle sans décapage.'],
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
                L&apos;erreur la plus fréquente en Gironde, c&apos;est le saturateur passé en plein été sur une lame
                brûlante : le produit sèche avant de pénétrer, laisse des traces et ne protège rien. On applique tôt le
                matin, à l&apos;ombre, hors canicule, un sujet que nous détaillons dans notre article sur{' '}
                <a href="/blog/proteger-terrasse-bois-canicule-entretien-ete" className={lienInterne}>
                  la protection d&apos;une terrasse bois en été
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/blog/renover-terrasse-bois-existante/application-saturateur-pinceau-bois-exterieur.webp"
              w={1200}
              h={800}
              alt="Application d'un saturateur au pinceau sur du bois extérieur, après dégrisage et ponçage"
              caption="Le saturateur s'applique au pinceau, dans le sens de la fibre, sur un bois sec et froid, jamais sur une lame brûlante."
            />

            {/* 5. Remplacer les lames */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Remplacer les lames sans tout déposer
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Quand quelques lames seulement sont hors d&apos;usage et que la structure tient, le remplacement ciblé
                est de loin la solution la plus économique. On repère les lames atteintes, on les dévisse, on en profite
                pour inspecter et brosser la lambourde mise à nu, puis on repose une lame neuve de même section.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Trois points méritent l&apos;attention. D&apos;abord{' '}
                <strong className="text-primary font-semibold">les fixations</strong> : on repose en inox, A2 en
                situation courante, A4 en bord de bassin, en ambiance chlorée ou en air marin, et on décale légèrement
                le perçage pour ne pas revisser dans un trou fatigué. Ensuite{' '}
                <strong className="text-primary font-semibold">la teinte</strong> : une lame neuve détonne au milieu de
                lames patinées, c&apos;est inévitable, mais l&apos;écart se referme en une à deux saisons
                d&apos;exposition. Enfin{' '}
                <strong className="text-primary font-semibold">la section</strong> : garder la même largeur et la même
                épaisseur permet de conserver l&apos;entraxe existant. Passer à une lame plus fine oblige à reprendre le
                lambourdage, ce qui fait basculer le chantier dans une autre catégorie de budget.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Si vous remplacez la totalité du platelage, c&apos;est le bon moment pour revoir l&apos;essence en
                fonction de sa durabilité naturelle, les classes d&apos;emploi sont documentées par{' '}
                <a href="https://www.fcba.fr/" className={lienInterne} target="_blank" rel="noopener noreferrer">
                  l&apos;institut technologique FCBA
                </a>,{' '}
               et de votre exposition réelle. Notre guide{' '}
                <a href="/blog/quel-bois-pour-terrasse-exterieure" className={lienInterne}>
                  quel bois choisir pour une terrasse extérieure
                </a>{' '}
                compare les essences, leur tenue et leurs fourchettes de prix.
              </p>
            </section>

            <Figure
              src="/images/blog/renover-terrasse-bois-existante/lame-bois-neuve-sur-terrasse-ancienne.webp"
              w={1200}
              h={800}
              alt="Bois neuf posé sur une terrasse en bois ancienne : contraste de teinte entre lames neuves et lames patinées"
              caption="Une lame neuve détonne quelques mois : la teinte se rejoint en une à deux saisons d'exposition."
            />

            {/* 6. Refaire à neuf */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Quand refaire à neuf a plus de sens, et ce qu&apos;on en profite pour changer
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Quatre situations nous font recommander la dépose totale plutôt que la rénovation :{' '}
                <strong className="text-primary font-semibold">
                  la structure est atteinte sur plusieurs lambourdes ; le sol a bougé
                </strong>{' '}
                (tassement, racines, dalle fissurée) et la terrasse ne se rattrape plus au réglage ; la terrasse était
                mal ventilée dès l&apos;origine, posée quasiment à même la terre, dans ce cas, la refaire à
                l&apos;identique reviendrait à reproduire la panne ; ou bien le projet change, parce que vous voulez
                agrandir, redécouper ou sécuriser l&apos;ouvrage.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Une réfection complète est aussi l&apos;occasion de corriger tout ce qu&apos;on ne peut plus atteindre
                ensuite :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Des plots réglables, qui rattrapent les niveaux et redonnent une vraie lame d’air sous la structure.',
                  'Un double lambourdage aux abouts de lames, pour que chaque extrémité repose sur son propre appui.',
                  'Une pente d’écoulement franche et un drainage de la surface située sous la terrasse.',
                  'Un géotextile et un lit de graviers pour couper les remontées et la végétation.',
                  'Le passage des gaines d’éclairage ou d’alimentation avant la pose du platelage.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est également le moment de traiter la question du garde-corps : dès qu&apos;une terrasse est
                suffisamment surélevée, la protection devient obligatoire, et il est bien plus simple de prévoir les
                ancrages pendant la réfection qu&apos;après coup. Nous détaillons les hauteurs, la norme applicable et
                le choix des matériaux dans notre comparatif{' '}
                <a href="/blog/garde-corps-terrasse-aluminium-ou-bois" className={lienInterne}>
                  garde-corps de terrasse : aluminium ou bois
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Côté formalités : remettre en état une terrasse existante à l&apos;identique relève de l&apos;entretien
                et n&apos;appelle en principe aucune démarche. C&apos;est la{' '}
                <em>modification</em> de l&apos;ouvrage, agrandissement de l&apos;emprise, surélévation, ajout
                d&apos;une couverture, qui peut déclencher une{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F17578"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  déclaration préalable de travaux
                </a>
                . Les règles dépendant du PLU communal, nous interrogeons le service urbanisme de votre mairie avant
                d&apos;engager le chantier plutôt que de vous annoncer un seuil qui ne serait pas le vôtre.
              </p>
            </section>

            {/* 7. Budget */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Budget 2026 en Gironde : trois scénarios de rénovation de terrasse
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Voici les ordres de grandeur que nous constatons sur nos chantiers à Libourne et dans le Libournais,
                prestations posées, TTC. Ce sont des repères pour situer votre projet, pas des prix fermes : la surface,
                l&apos;accès, la hauteur, l&apos;essence retenue et l&apos;état réel de la structure font varier la note.
                Seul un devis établi sur place, après ouverture d&apos;une partie du platelage, engage vraiment.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Scénario</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Ce que ça comprend</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Ordre de grandeur posé</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Quand c&apos;est le bon choix</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scenarios.map((ligne, i) => (
                      <tr key={ligne[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}>
                        <td className="px-4 py-3 text-primary font-semibold">{ligne[0]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant whitespace-nowrap">{ligne[2]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 mb-5">
                L&apos;écart considérable sur le remplacement des lames s&apos;explique par l&apos;essence : un pin
                traité se situe en bas de fourchette, un exotique dense en haut, avec les résineux locaux entre les
                deux. Pour la réfection complète, le prix dépend surtout de ce qu&apos;il faut reprendre au sol.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le raisonnement utile est celui-ci :{' '}
                <strong className="text-primary font-semibold">
                  dès que la structure est en cause, la rénovation de surface est de l&apos;argent perdu.
                </strong>{' '}
                Mettre 25 €/m² de dégrisage et de saturateur sur des lambourdes qui pourrissent revient à repeindre une
                coque percée. À l&apos;inverse, déposer une terrasse dont les appuis sont sains et les lames encore
                dures, c&apos;est jeter trois fois le budget nécessaire.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nous intervenons sur ces trois scénarios dans tout le Libournais et la Gironde, dans le cadre de nos
                prestations d&apos;<a href="/terrasses-bois" className={lienInterne}>aménagement extérieur</a>. Vous
                pouvez voir des terrasses reprises ou refaites entièrement parmi{' '}
                <a href="/realisations" className={lienInterne}>nos réalisations en Gironde</a>.
              </p>
            </section>

            <Figure
              src="/images/terrasse-bois-plots-gironde-4.webp"
              w={850}
              h={1133}
              alt="Terrasse en pin posée sur sol sableux, teinte homogène à la livraison, chantier de L'Esprit Bois à Lacanau"
              caption="La teinte que l'on cherche à retrouver : sur une structure saine, une journée de dégrisage puis de saturateur ramène un platelage grisé à cet aspect. La photo est celle d'une terrasse neuve, prise à la livraison."
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
              Rénover une terrasse en bois : vos questions
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
              Faites diagnostiquer avant de faire chiffrer
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Une terrasse grise n&apos;est pas une terrasse morte, et une terrasse d&apos;aspect correct n&apos;est pas
              forcément saine. Nous démontons une lame, nous sondons la structure, et nous vous disons franchement si
              votre terrasse mérite un saturateur, quelques lames neuves ou une réfection complète. C&apos;est le
              diagnostic que nous menons chez L&apos;Esprit Bois, à Libourne et dans toute la Gironde, avant tout devis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/amenagement-exterieur"
                className="bg-secondary text-primary px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-secondary-fixed transition-all active:scale-95"
              >
                Demander mon diagnostic gratuit
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
