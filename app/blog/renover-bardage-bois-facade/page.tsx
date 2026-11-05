import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

// Photo Pexels n° 16218524 (licence Pexels), recadrée en 1200 × 750.
const COVER = '/images/blog/renover-bardage-bois-facade/facade-bardage-bois-grise-lames-voilees.webp';

export const metadata: Metadata = buildMetadata({
  title: 'Rénover un bardage bois abîmé en Gironde : le diagnostic',
  description:
    'Rénover un bardage bois abîmé : nettoyer, changer des lames ou tout refaire ? Le diagnostic qui décide, par un artisan bois de Libourne en Gironde.',
  keywords:
    'rénover bardage bois, rénovation bardage bois, bardage bois abîmé, remplacer lames de bardage, bardage bois noirci, bardage bois champignons, bardage bois grisé, rénovation façade bois Libourne, bardage bois Gironde, bardage bois Libourne',
  path: '/blog/renover-bardage-bois-facade',
  ogImage: COVER,
  ogTitle: 'Rénover un bardage bois abîmé : nettoyer, changer des lames ou tout refaire ?',
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
        name: 'Rénover un bardage bois',
        item: 'https://lesprit-bois.fr/blog/renover-bardage-bois-facade',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Rénover un bardage bois abîmé : nettoyer, changer des lames ou tout refaire ?',
    description:
      "Bardage bois gris, noirci, verdi ou fendu : comment faire le diagnostic avant de dépenser. Pied de bardage, lame d'air, tasseaux, pare-pluie et fixations décident entre nettoyer et retraiter, remplacer des lames ou tout déposer, à Libourne et en Gironde.",
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
    datePublished: '2026-11-05',
    dateModified: '2026-11-05',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/renover-bardage-bois-facade',
    },
    about: [
      { '@type': 'Thing', name: 'rénovation de bardage bois' },
      { '@type': 'Thing', name: 'façade bois' },
      { '@type': 'Thing', name: 'entretien du bois extérieur' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Mon bardage bois est devenu gris : faut-il le rénover ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Pas forcément. Le grisaillement est une réaction de surface du bois aux UV et à la pluie : il change la couleur, pas la solidité. Si les lames sont dures sous la pointe d'un tournevis, bien fixées et planes, le bardage est sain. On le rénove alors pour l'aspect, par un nettoyage et éventuellement un retraitement, pas par nécessité technique.",
        },
      },
      {
        '@type': 'Question',
        name: 'Les taches noires sur un bardage bois sont-elles graves ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le plus souvent, ce sont des moisissures ou des champignons de surface qui se développent sur un bois qui reste humide longtemps. Ils salissent sans attaquer la structure du bois. Le vrai signal est ailleurs : si le noircissement s'accompagne d'un bois qui s'enfonce, se délite ou sent le moisi, c'est que l'eau stagne et qu'il faut chercher pourquoi, souvent en pied de bardage ou derrière les lames.",
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on remplacer seulement quelques lames de bardage ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, c'est même l'un des grands avantages du bardage bois. Tant que les tasseaux, le pare-pluie et la ventilation sont sains, on dépose les lames abîmées, on en pose des neuves de même profil et on les refixe en inox. La lame neuve tranche quelque temps avec la façade grisée, puis s'accorde en vieillissant, ou plus vite avec un saturateur grisant.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quand faut-il refaire entièrement un bardage bois ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Quand le problème n'est plus dans les lames mais derrière elles : tasseaux pourris, pare-pluie déchiré ou absent, lame d'air bouchée ou inexistante, ou dégâts répartis sur toute la façade. Remplacer des lames sur une ossature malade revient à repeindre un plancher pourri. Une dépose complète est aussi l'occasion d'isoler la façade par l'extérieur.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faut-il une autorisation pour rénover un bardage bois ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Remplacer des lames à l'identique relève en principe de l'entretien. En revanche, des travaux qui modifient l'aspect extérieur du bâtiment (autre essence, autre teinte, autre sens de pose, isolation par l'extérieur) relèvent en général d'une déclaration préalable, selon l'article R*421-17 du code de l'urbanisme. Les règles locales peuvent être plus strictes, notamment en secteur protégé : il faut vérifier le PLU de la commune avant de commander.",
        },
      },
    ],
  },
];

const faq = [
  {
    q: 'Mon bardage bois est devenu gris : faut-il le rénover ?',
    r: (
      <>
        Pas forcément. Le grisaillement est une réaction de surface du bois aux UV et à la pluie : il change la
        couleur, pas la solidité. Si les lames sont dures sous la pointe d&apos;un tournevis, bien fixées et planes, le
        bardage est sain. On le rénove alors pour l&apos;aspect, par un nettoyage et éventuellement un retraitement, pas
        par nécessité technique.
      </>
    ),
  },
  {
    q: 'Les taches noires sur un bardage bois sont-elles graves ?',
    r: (
      <>
        Le plus souvent, ce sont des moisissures ou des champignons de surface qui se développent sur un bois qui reste
        humide longtemps. Ils salissent sans attaquer la structure du bois. Le vrai signal est ailleurs : si le
        noircissement s&apos;accompagne d&apos;un bois qui s&apos;enfonce, se délite ou sent le moisi, c&apos;est que
        l&apos;eau stagne et qu&apos;il faut chercher pourquoi, souvent en pied de bardage ou derrière les lames.
      </>
    ),
  },
  {
    q: 'Peut-on remplacer seulement quelques lames de bardage ?',
    r: (
      <>
        Oui, c&apos;est même l&apos;un des grands avantages du bardage bois. Tant que les tasseaux, le pare-pluie et la
        ventilation sont sains, on dépose les lames abîmées, on en pose des neuves de même profil et on les refixe en
        inox. La lame neuve tranche quelque temps avec la façade grisée, puis s&apos;accorde en vieillissant, ou plus
        vite avec un saturateur grisant.
      </>
    ),
  },
  {
    q: 'Quand faut-il refaire entièrement un bardage bois ?',
    r: (
      <>
        Quand le problème n&apos;est plus dans les lames mais derrière elles : tasseaux pourris, pare-pluie déchiré ou
        absent, lame d&apos;air bouchée ou inexistante, ou dégâts répartis sur toute la façade. Remplacer des lames sur
        une ossature malade revient à repeindre un plancher pourri. Une dépose complète est aussi l&apos;occasion
        d&apos;isoler la façade par l&apos;extérieur.
      </>
    ),
  },
  {
    q: 'Faut-il une autorisation pour rénover un bardage bois ?',
    r: (
      <>
        Remplacer des lames à l&apos;identique relève en principe de l&apos;entretien. En revanche, des travaux qui
        modifient l&apos;aspect extérieur du bâtiment (autre essence, autre teinte, autre sens de pose, isolation par
        l&apos;extérieur) relèvent en général d&apos;une déclaration préalable, selon l&apos;article R*421-17 du code
        de l&apos;urbanisme. Les règles locales peuvent être plus strictes, notamment en secteur protégé : il faut
        vérifier le PLU de la commune avant de commander.
      </>
    ),
  },
];

export default function ArticleRenoverBardageBoisPage() {
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
              height="750"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Façade en bardage bois grisé à clin, lames voilées et traces sombres autour des fenêtres : un bardage à diagnostiquer avant de le rénover"
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
              <span className="text-secondary-fixed">Rénover un bardage bois</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Bardage bois
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Rénover un bardage bois abîmé : nettoyer, changer des lames ou tout refaire ?
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
              <span>5 novembre 2026</span>
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
                Comme pour une terrasse, la couleur d&apos;un bardage bois n&apos;est presque jamais le problème : gris,
                noirci ou verdi, il se nettoie. Ce qui décide entre nettoyer, remplacer des lames ou tout refaire,
                c&apos;est l&apos;état de ce qu&apos;on ne voit pas : le pied de bardage, la lame d&apos;air, les
                tasseaux, le pare-pluie et les fixations. Tant que l&apos;ossature support est saine, un bardage se
                répare lame par lame.
              </strong>{' '}
              La dépose complète ne se justifie que lorsque le mal est derrière les lames. Sur nos chantiers en Gironde,
              nous voyons régulièrement des façades condamnées sur leur seule couleur, et d&apos;autres repeintes
              alors que les tasseaux pourrissaient dessous. Voici comment poser le bon diagnostic avant de dépenser.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* Esthétique ou symptôme */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Gris, noirci, verdi : ce qui est esthétique et ce qui est un symptôme
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un bardage bois change de couleur, c&apos;est dans sa nature. Le{' '}
                <strong className="text-primary font-semibold">gris argenté</strong> est une patine : les UV dégradent
                la lignine en surface, la pluie lessive les résidus, et il reste une fine couche grise qui protège le
                bois en dessous. Ce phénomène est détaillé dans notre guide{' '}
                <a href="/blog/bardage-bois-facade-essences-pose" className={lienInterne}>
                  bardage bois : essences, pose et grisaillement
                </a>{' '}
                ; retenons ici qu&apos;il ne dit rien de la santé de la façade.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le <strong className="text-primary font-semibold">noir</strong> et le{' '}
                <strong className="text-primary font-semibold">vert</strong> sont des colonisations de surface :
                moisissures, champignons de bleuissement, algues, mousses. Ils ne mangent pas le bois, mais ils disent
                quelque chose d&apos;utile :{' '}
                <strong className="text-primary font-semibold">à cet endroit, le bois reste humide trop longtemps</strong>.
                Une façade nord uniformément verdie, c&apos;est une question d&apos;exposition. Une bande noire au ras
                du sol ou une coulure sombre sous une fenêtre, c&apos;est un point d&apos;eau localisé qu&apos;il faut
                aller voir de près.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                La règle que nous appliquons : la couleur oriente le regard, elle ne fait jamais le diagnostic. Ce qui
                compte, c&apos;est la tenue du bois, sa forme et ce qui se passe derrière.
              </p>
            </section>

            <Figure
              src="/images/blog/renover-bardage-bois-facade/bardage-bois-grise-verdi-algues-pignon.webp"
              w={1200}
              h={800}
              alt="Pignon en bardage bois vertical grisé, couvert de dépôts verts et jaunâtres sous la toiture, autour d'une fenêtre"
              caption="Ce voile vert est une colonisation de surface : il dit où le bois reste humide, pas que la lame est perdue. Photo Pexels."
            />

            {/* Diagnostic */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le diagnostic en quelques gestes
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Pas besoin d&apos;outillage pour un premier état des lieux : un tournevis, une lampe et un tour de
                maison suffisent à classer la plupart des façades. Voici ce que nous regardons, dans l&apos;ordre.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ["La pointe de tournevis au pied", "piquez le bas des lames et l'extrémité des tasseaux visibles. Un bois sain résiste et se fend en fibres longues ; un bois atteint s'enfonce sans effort, se casse en petits cubes ou s'effrite en éponge."],
                  ['Les lames tuilées ou fendues', "une lame qui se creuse, se voile ou se fend sur sa longueur travaille sous l'effet de l'humidité. Une ou deux lames isolées, c'est souvent le bois lui-même ; une zone entière, c'est un problème de ventilation ou d'eau."],
                  ['Les coulures de rouille', "des traînées brunes sous chaque pointe signalent des fixations non inox. Elles tachent le bois et finissent par lâcher : les lames se décollent et l'eau entre par les trous."],
                  ['La ventilation basse et haute', "en pied et en tête de bardage, l'air doit pouvoir entrer et sortir. Une grille bouchée par la terre, un enduit ou une jardinière, un haut de façade fermé hermétiquement : la lame d'air ne joue plus son rôle."],
                  ['Le pare-pluie aux rives', "aux angles, autour des baies ou en bas de façade, on aperçoit souvent le film derrière les lames. Déchiré, décollé, cuit par le soleil ou carrément absent, il change complètement le diagnostic."],
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
                C&apos;est exactement la logique que nous décrivons pour{' '}
                <a href="/blog/renover-terrasse-bois-existante" className={lienInterne}>
                  rénover une terrasse bois existante
                </a>{' '}
                : sur une terrasse, le juge est la sous-face ; sur une façade, c&apos;est l&apos;ossature support et la
                lame d&apos;air. Si le tournevis s&apos;enfonce dans une pièce de structure ou si vous trouvez des
                galeries et du bois creux, pensez aussi aux insectes : notre article sur{' '}
                <a href="/blog/termites-gironde-ouvrage-bois-prevention" className={lienInterne}>
                  les termites en Gironde
                </a>{' '}
                explique quoi regarder et qui prévenir.
              </p>
            </section>

            <Figure
              src="/images/blog/renover-bardage-bois-facade/lames-bardage-bois-fendues-coulures-rouille.webp"
              w={1200}
              h={800}
              alt="Lames de bardage bois grisées et fendues, avec des taches sombres autour de chaque pointe de fixation"
              caption="Fentes et auréoles noires autour des pointes : deux indices à noter lors du diagnostic, avant de sonder le bois au tournevis. Photo Pexels."
            />

            {/* Zones à risque */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Les zones qui lâchent en premier
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un bardage ne s&apos;abîme presque jamais uniformément. Il cède là où l&apos;eau arrive en quantité ou
                repart mal, et ce sont toujours les mêmes endroits que nous inspectons en premier :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le pied de bardage', "trop près du sol, d'un gravillon, d'une pelouse ou d'une terrasse posée après coup, il boit l'eau qui ruisselle et celle qui rejaillit. C'est de loin la première cause de remplacement que nous rencontrons."],
                  ["Sous les appuis de fenêtre", "un appui sans goutte d'eau ou trop court déverse l'eau de la vitre directement sur les lames du dessous, toujours au même endroit."],
                  ['Les angles et les bois de bout', "la coupe en bout de lame absorbe l'eau comme une paille. Une extrémité non protégée ou un angle mal couvert se dégrade bien avant le reste de la lame."],
                  ['Les zones de rejaillissement', "pied de descente de gouttière, débord de toiture insuffisant, bas de mur au droit d'une allée : partout où l'eau rebondit, le bois reste mouillé."],
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
                Ce repérage a une conséquence pratique :{' '}
                <strong className="text-primary font-semibold">
                  remplacer une lame sans traiter la cause, c&apos;est la remplacer deux fois
                </strong>
                . Relever le terrain au pied du mur, rallonger un appui, ajouter un profil de protection en bout de lame
                ou dévier une descente d&apos;eau font partie de la réparation, pas d&apos;une option.
              </p>
            </section>

            <Figure
              src="/images/blog/renover-bardage-bois-facade/pied-bardage-bois-contact-sol.webp"
              w={1200}
              h={800}
              alt="Bas d'un bardage bois grisé reposant presque au contact de la roche, lames tachées de lichens et ferrure rouillée"
              caption="Ici, les lames descendent jusqu'au sol, sans garde : le pied de bardage reçoit le ruissellement et le rejaillissement en premier. Photo Pexels."
            />

            {/* Nettoyer et retraiter */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Nettoyer et retraiter : quand ça suffit
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Si le tournevis ne s&apos;enfonce nulle part, que les lames sont planes et bien tenues, que la ventilation
                circule et que le pare-pluie visible est intact,{' '}
                <strong className="text-primary font-semibold">le bardage est sain et la rénovation est esthétique</strong>.
                Un nettoyage adapté au bois (brosse douce, produit dégriseur ou anti-mousse selon le cas) suffit à
                retrouver une façade homogène.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Deux mises en garde que nous répétons sur chaque chantier. D&apos;abord, le nettoyeur haute pression
                utilisé de près arrache les fibres tendres, rend le bois pelucheux et pousse l&apos;eau derrière les
                lames : c&apos;est l&apos;inverse du but recherché. Ensuite, la décision de retraiter ou non dépend de
                ce que vous voulez voir : laisser griser est un choix parfaitement valable sur une essence durable, un
                saturateur sert à garder ou retrouver une teinte.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nous ne refaisons pas ici l&apos;exposé des produits et de la bonne saison d&apos;application : tout
                est dans notre guide pour{' '}
                <a href="/blog/traiter-bois-exterieur-avant-hiver" className={lienInterne}>
                  traiter le bois extérieur avant l&apos;hiver
                </a>
                . Retenez simplement qu&apos;un produit ne répare rien : il protège un bois sain, il ne sauve pas un
                bois atteint.
              </p>
            </section>

            {/* Remplacer des lames */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Remplacer des lames : comment ça se passe
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est le grand atout du bardage bois face aux enduits ou aux panneaux :{' '}
                <strong className="text-primary font-semibold">il se répare localement</strong>. Quand le diagnostic
                montre des lames abîmées sur une ossature saine, on intervient lame par lame, sans toucher au reste de
                la façade.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  "Déposer les lames abîmées en dégageant les fixations, sans blesser les lames voisines ni le pare-pluie.",
                  "Profiter de l'ouverture pour contrôler les tasseaux, le film et la lame d'air à cet endroit précis.",
                  "Poser des lames neuves de même essence et de même profil, recoupées et protégées en bout de lame.",
                  "Refixer en inox, y compris les lames voisines si leurs anciennes pointes rouillaient.",
                  "Traiter la cause repérée : pied de bardage relevé, appui rallongé, descente d'eau déviée.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La question qui revient toujours : la lame neuve va-t-elle se voir ? Oui, au début. Une lame fraîche
                tranche nettement sur une façade grisée. Trois options s&apos;offrent à vous : la laisser griser
                naturellement, ce qui finit par fondre la réparation dans l&apos;ensemble ; appliquer un{' '}
                <strong className="text-primary font-semibold">saturateur grisant</strong> qui rapproche tout de suite
                la teinte ; ou nettoyer toute la façade pour que l&apos;ensemble reparte d&apos;une même base.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Une limite à connaître : un profil de lame ancien n&apos;est pas toujours encore fabriqué. Dans ce cas,
                on fait usiner un profil équivalent, ou l&apos;on récupère des lames saines sur une façade moins
                exposée pour les reposer en zone visible et mettre le neuf là où il se voit le moins.
              </p>
            </section>

            <Figure
              src="/images/blog/renover-bardage-bois-facade/bardeaux-bois-neufs-anciens-pare-pluie-renovation.webp"
              w={1023}
              h={683}
              alt="Rénovation d'une façade en bardeaux de bois : bardeaux neufs clairs posés à côté des anciens, foncés, sous une zone où le film pare-pluie est à nu"
              caption="Même principe qu'un remplacement de lames : le bois neuf tranche nettement avec l'ancien avant de patiner. Photo Grand Canyon NPS, CC BY 2.0, via Flickr."
            />

            {/* Tout déposer */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Tout déposer : quand le problème est derrière les lames
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le diagnostic bascule vers la réfection complète quand ce ne sont plus les lames qui sont en cause, mais
                ce qui les porte et les protège :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ["L'ossature support est atteinte", "des tasseaux qui s'effritent, se fendent ou ne tiennent plus les fixations ne supporteront pas des lames neuves."],
                  ['Le pare-pluie a lâché', "déchiré, décollé, dégradé par les UV ou absent : l'eau qui passe entre les lames atteint directement le mur ou l'isolant."],
                  ["La lame d'air ne fonctionne plus", "bouchée en pied et en tête, ou inexistante parce que les lames ont été posées à même le mur : le bois ne sèche jamais."],
                  ['Les dégâts sont partout', "quand la moitié de la façade est à remplacer, la réparation lame par lame coûte plus cher en main-d'œuvre qu'une dépose franche."],
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
                Une dépose complète permet de repartir sur les bonnes règles, celles du NF DTU 41.2 qui encadre la pose
                des revêtements extérieurs en bois : ossature de tasseaux saine, pare-pluie continu, lame d&apos;air
                ventilée en pied et en tête, fixations inox, pied de bardage dégagé du sol. Nous les détaillons dans
                notre guide sur{' '}
                <a href="/blog/bardage-bois-facade-essences-pose" className={lienInterne}>
                  la pose d&apos;un bardage bois neuf
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                C&apos;est surtout{' '}
                <strong className="text-primary font-semibold">l&apos;occasion d&apos;isoler par l&apos;extérieur</strong>.
                Le mur est à nu, l&apos;échafaudage est monté, l&apos;ossature est à refaire : ajouter un isolant entre
                les montants d&apos;une nouvelle ossature coûte bien moins cher à ce moment-là qu&apos;en intervention
                séparée. C&apos;est le même savoir-faire que nos{' '}
                <a href="/constructions-bois" className={lienInterne}>constructions et extensions en ossature bois</a>,
                appliqué à une façade existante. Attention cependant : isoler change l&apos;épaisseur de la façade et
                les retours autour des baies, ce qui se prévoit avant de commander quoi que ce soit.
              </p>
            </section>

            <Figure
              src="/images/chantiers/extension-ossature-bois-pare-pluie-volume-accole-gironde.jpg"
              w={1100}
              h={825}
              alt="Mur à ossature bois sous pare-pluie avec ses tasseaux verticaux, avant la pose du bardage, sur un chantier en Gironde"
              caption="Ce que l'on retrouve sous un bardage : film pare-pluie continu et tasseaux qui créent la lame d'air. Ici, l'une de nos extensions en Gironde, avant la pose des lames."
            />

            {/* Autorisation + approche locale */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Autorisation et rénovation de façade bois à Libourne et en Gironde
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Côté urbanisme, tout dépend de ce que vous changez. Remplacer des lames à l&apos;identique, même
                essence, même teinte, même sens de pose, relève en principe de l&apos;entretien. En revanche,{' '}
                <strong className="text-primary font-semibold">
                  des travaux qui modifient l&apos;aspect extérieur d&apos;un bâtiment existant relèvent en général
                  d&apos;une{' '}
                  <a
                    href="https://www.service-public.gouv.fr/particuliers/vosdroits/F17578"
                    className={lienInterne}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    déclaration préalable de travaux
                  </a>
                </strong>
                , au titre de l&apos;article R*421-17 du code de l&apos;urbanisme : changer d&apos;essence ou de
                teinte, passer d&apos;une pose horizontale à verticale, isoler par l&apos;extérieur.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Les règles locales peuvent être plus strictes. En secteur protégé, aux abords d&apos;un monument ou dans
                un lotissement doté de son propre règlement, même une réfection peut être encadrée, teintes comprises.
                Le Libournais compte plusieurs de ces secteurs, à commencer par Saint-Émilion et ses alentours. La seule
                méthode fiable :{' '}
                <strong className="text-primary font-semibold">consulter le PLU de votre commune</strong> et, au
                moindre doute, interroger le service urbanisme avant de commander le bois. Notre article sur{' '}
                <a href="/blog/autorisation-urbanisme-abri-carport-pergola-2026" className={lienInterne}>
                  les autorisations d&apos;urbanisme en 2026
                </a>{' '}
                en reprend la logique générale.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Notre approche, à Libourne comme dans le reste de la Gironde, est toujours la même :{' '}
                <strong className="text-primary font-semibold">diagnostiquer avant de chiffrer</strong>. Nous venons
                voir la façade, nous sondons le pied de bardage, nous ouvrons une lame si nécessaire pour regarder
                l&apos;ossature et le pare-pluie, puis nous vous disons honnêtement si un nettoyage suffit, si quelques
                lames sont à changer ou si la façade est à reprendre. Vous pouvez voir nos chantiers bois dans{' '}
                <a href="/realisations" className={lienInterne}>nos réalisations en Gironde</a>, ou nous décrire votre
                façade via la{' '}
                <a href="/contact" className={lienInterne}>page contact</a>, photos à l&apos;appui.
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
              Rénover un bardage bois : vos questions
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
              Regardez derrière les lames avant de choisir
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Un bardage gris ou noirci n&apos;est pas un bardage fichu, et un bardage repeint n&apos;est pas un bardage
              sauvé. Ce qui tranche, c&apos;est le pied de bardage, la lame d&apos;air, les tasseaux et le pare-pluie.
              C&apos;est ce diagnostic que nous menons chez L&apos;Esprit Bois, entreprise qualifiée Qualibat, à Libourne
              et dans toute la Gironde, pour que vous dépensiez au bon endroit : nettoyer, changer des lames ou refaire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/constructions-bois"
                className="bg-secondary text-primary px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-secondary-fixed transition-all active:scale-95"
              >
                Demander mon diagnostic
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
