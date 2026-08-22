import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/source-adefrance/aggrandissement-accueil.webp';

export const metadata: Metadata = buildMetadata({
  title: "Véranda ou extension bois : que choisir ? | L'Esprit Bois",
  description:
    "Véranda aluminium ou extension en ossature bois pour agrandir sa maison ? Usage, confort, urbanisme et budget 2026 : notre arbitrage en Gironde.",
  keywords:
    "véranda ou extension bois, agrandir sa maison Gironde, extension ossature bois Libourne, véranda aluminium Gironde, prix agrandissement maison 2026, extension maison Libournais, véranda ou extension, agrandissement maison Libourne",
  path: '/blog/veranda-ou-extension-ossature-bois',
  ogImage: COVER,
  ogTitle:
    "Véranda ou extension en ossature bois : que choisir pour agrandir sa maison en Gironde ?",
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

function DuoFigure({
  a,
  b,
}: {
  /** `w` et `h` : dimensions réelles du fichier, à vérifier avant de les écrire. */
  a: { src: string; alt: string; caption: string; w: number; h: number };
  b: { src: string; alt: string; caption: string; w: number; h: number };
}) {
  return (
    <div className="-mx-6 md:-mx-16 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
      {[a, b].map((img, i) => (
        <figure key={i}>
          <img
            loading="lazy"
            decoding="async"
            width={img.w}
            height={img.h}
            className="w-full h-64 md:h-72 rounded-2xl object-cover shadow-sm"
            src={img.src}
            alt={img.alt}
          />
          <figcaption className="mt-3 text-center font-label-md text-label-md text-on-surface-variant">
            {img.caption}
          </figcaption>
        </figure>
      ))}
    </div>
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
        name: 'Véranda ou extension ossature bois',
        item: 'https://lesprit-bois.fr/blog/veranda-ou-extension-ossature-bois',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      "Véranda ou extension en ossature bois : que choisir pour agrandir sa maison en Gironde ?",
    description:
      "Véranda aluminium ou extension en ossature bois : l'arbitrage ne se joue pas sur le matériau mais sur l'usage de la pièce. Surface vitrée souhaitée, occupation quotidienne, confort d'été et d'hiver, seuils d'urbanisme, budget 2026 posé et raccord à la maison existante, avec un verdict par profil de projet, par un artisan à Libourne (Gironde).",
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
    datePublished: '2026-08-07',
    dateModified: '2026-08-07',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/veranda-ou-extension-ossature-bois',
    },
    about: [
      'véranda aluminium',
      'extension ossature bois',
      'agrandissement de maison',
      'urbanisme',
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Véranda ou extension en ossature bois : laquelle est la plus confortable toute l’année ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "L'extension en ossature bois, sans hésitation, dès lors que la pièce doit être occupée plusieurs heures par jour en toutes saisons. Son enveloppe est isolée de façon homogène — murs, toiture, plancher — et son comportement se rapproche de celui du reste de la maison. Une véranda aluminium peut atteindre un très bon confort, mais cela suppose d'y mettre les moyens dès la conception : profilés à rupture de pont thermique, vitrages adaptés à chaque orientation, toiture traitée et protections solaires. Sans ces postes, elle reste agréable à la mi-saison et difficile à vivre en plein été comme en plein hiver.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faut-il un permis de construire pour une véranda ou une extension ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Les règles sont les mêmes pour les deux : c'est la surface créée qui compte, pas la matière. Jusqu'à 5 m², aucune formalité n'est exigée, sauf modification de l'aspect extérieur ou secteur protégé. En zone urbaine d'une commune dotée d'un PLU, une déclaration préalable suffit de plus de 5 m² jusqu'à 40 m², et un permis de construire devient nécessaire au-delà de 40 m². Hors zone urbaine ou en site protégé, la déclaration préalable s'applique jusqu'à 20 m² et le permis au-delà. Un permis est également requis si l'agrandissement porte la surface de plancher totale au-delà de 150 m².",
        },
      },
      {
        '@type': 'Question',
        name: 'Quand le recours à un architecte devient-il obligatoire ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Lorsque l'agrandissement porte la surface de plancher totale de la maison au-delà de 150 m². Le seuil s'apprécie sur le total existant plus créé, quelle que soit la matière employée : une véranda aluminium et une extension en ossature bois sont logées à la même enseigne. C'est un point à vérifier très tôt, car il change à la fois le calendrier et le budget du projet.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quel budget prévoir en 2026 pour agrandir sa maison en Gironde ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "En ordre de grandeur 2026, une extension en ossature bois se situe entre 1 700 et 2 500 €/m² posé selon la finition et le type de toiture, et une véranda aluminium entre 1 200 et 2 500 €/m² posé. La véranda démarre plus bas, mais l'écart se resserre vite dès qu'on veut du confort douze mois par an : traitement de la toiture, protections solaires, chauffage. À ces montants s'ajoutent des postes souvent absents des devis : terrassement et dalle ou plots, raccord d'étanchéité, reprise de la couverture existante, électricité et chauffage, finitions intérieures.",
        },
      },
      {
        '@type': 'Question',
        name: 'La RE2020 s’applique-t-elle à une véranda ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Ce n'est pas la matière qui décide, mais le statut de la pièce. Les extensions de bâtiments d'habitation sont entrées dans le champ de la RE2020, avec des exigences qui dépendent de la surface créée. Une véranda non chauffée et non communicante avec la maison joue le rôle d'espace tampon et ne se traite pas comme une extension chauffée et ouverte sur le séjour. C'est ce statut qu'il faut arrêter dès l'esquisse, avec le bureau d'études, car il conditionne la conception et la façon de déposer le dossier.",
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on combiner les deux : une extension bois très vitrée ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, et c'est très souvent la meilleure réponse. On construit une extension en ossature bois isolée, avec des murs pleins sur les côtés utiles pour meubler et ranger, et on ouvre largement une seule façade — celle qui donne sur le jardin ou la piscine — par des baies vitrées aluminium de grande dimension. On récupère la lumière et la vue de la véranda, sans son inconfort d'été, et la pièce reste utilisable à l'identique en février comme en août. C'est un montage que nous proposons régulièrement sur nos chantiers du Libournais.",
        },
      },
    ],
  },
];

const urbanisme = [
  [
    'Jusqu’à 5 m² de surface créée',
    'Aucune formalité',
    'Sauf modification de l’aspect extérieur de la maison ou secteur protégé',
  ],
  [
    'De plus de 5 m² à 40 m², en zone urbaine d’une commune dotée d’un PLU',
    'Déclaration préalable',
    'Le cas le plus fréquent dans les bourgs du Libournais',
  ],
  [
    'Au-delà de 40 m², en zone urbaine d’une commune dotée d’un PLU',
    'Permis de construire',
    'Instruction plus longue, dossier plus fourni',
  ],
  [
    'Hors zone urbaine ou en site protégé, jusqu’à 20 m²',
    'Déclaration préalable',
    'Au-delà de 20 m² dans ces situations, permis de construire',
  ],
  [
    'Surface de plancher totale portée au-delà de 150 m²',
    'Permis de construire + architecte',
    'Seuil apprécié sur le total existant + créé, quelle que soit la matière',
  ],
];

const verdicts = [
  [
    'Chambre, bureau ou suite parentale occupée toute la journée',
    'Ossature bois',
    'Enveloppe isolée homogène, murs pleins pour meubler, confort identique en février et en août',
  ],
  [
    'Salon-jardin d’hiver ouvert sur le jardin ou la piscine',
    'Véranda aluminium',
    'Lumière traversante et vue dégagée : c’est exactement ce que la véranda sait faire mieux que tout',
  ],
  [
    'Budget d’entrée contraint, besoin de surface rapidement',
    'Véranda aluminium',
    'Le ticket d’entrée démarre plus bas — à condition d’assumer un usage de mi-saison',
  ],
  [
    'Prolongement d’un séjour plein sud',
    'Véranda seulement si la toiture et les protections solaires sont budgétées d’emblée',
    'Sinon ossature bois avec de grandes baies : même lumière, sans la surchauffe',
  ],
  [
    'Pièce technique, buanderie, atelier, rangement',
    'Ossature bois',
    'Murs pleins, réseaux encastrés, pas de dépendance à l’orientation ni au vitrage',
  ],
  [
    'Maison ancienne en pierre, secteur protégé',
    'Ossature bois bardée ou véranda au dessin sobre',
    'L’avis sur l’aspect prime : on dessine l’ouvrage à partir des contraintes, pas l’inverse',
  ],
  [
    'On veut la lumière ET une vraie pièce de vie',
    'Extension bois à façade largement vitrée',
    'Le troisième choix, souvent le bon : ossature isolée + baies aluminium de grande dimension',
  ],
];

const faq = [
  {
    q: 'Véranda ou extension en ossature bois : laquelle est la plus confortable toute l’année ?',
    r: (
      <>
        L&apos;extension en ossature bois, sans hésitation, dès lors que la pièce doit être occupée plusieurs heures par
        jour en toutes saisons. Son enveloppe est isolée de façon homogène — murs, toiture, plancher — et son
        comportement se rapproche de celui du reste de la maison. Une véranda aluminium peut atteindre un très bon
        confort, mais cela suppose d&apos;y mettre les moyens dès la conception : profilés à rupture de pont thermique,
        vitrages adaptés à chaque orientation, toiture traitée et protections solaires. Sans ces postes, elle reste
        agréable à la mi-saison et difficile à vivre en plein été comme en plein hiver.
      </>
    ),
  },
  {
    q: 'Faut-il un permis de construire pour une véranda ou une extension ?',
    r: (
      <>
        Les règles sont les mêmes pour les deux : c&apos;est la surface créée qui compte, pas la matière. Jusqu&apos;à
        5 m², aucune formalité n&apos;est exigée, sauf modification de l&apos;aspect extérieur ou secteur protégé. En
        zone urbaine d&apos;une commune dotée d&apos;un PLU, une déclaration préalable suffit de plus de 5 m²
        jusqu&apos;à 40 m², et un permis de construire devient nécessaire au-delà de 40 m². Hors zone urbaine ou en
        site protégé, la déclaration préalable s&apos;applique jusqu&apos;à 20 m² et le permis au-delà. Un permis est
        également requis si l&apos;agrandissement porte la surface de plancher totale au-delà de 150 m².
      </>
    ),
  },
  {
    q: 'Quand le recours à un architecte devient-il obligatoire ?',
    r: (
      <>
        Lorsque l&apos;agrandissement porte la surface de plancher totale de la maison au-delà de 150 m². Le seuil
        s&apos;apprécie sur le total existant plus créé, quelle que soit la matière employée : une véranda aluminium et
        une extension en ossature bois sont logées à la même enseigne. C&apos;est un point à vérifier très tôt, car il
        change à la fois le calendrier et le budget du projet.
      </>
    ),
  },
  {
    q: 'Quel budget prévoir en 2026 pour agrandir sa maison en Gironde ?',
    r: (
      <>
        En ordre de grandeur 2026, une extension en ossature bois se situe entre 1 700 et 2 500 €/m² posé selon la
        finition et le type de toiture, et une véranda aluminium entre 1 200 et 2 500 €/m² posé. La véranda démarre plus
        bas, mais l&apos;écart se resserre vite dès qu&apos;on veut du confort douze mois par an : traitement de la
        toiture, protections solaires, chauffage. À ces montants s&apos;ajoutent des postes souvent absents des devis :
        terrassement et dalle ou plots, raccord d&apos;étanchéité, reprise de la couverture existante, électricité et
        chauffage, finitions intérieures.
      </>
    ),
  },
  {
    q: 'La RE2020 s’applique-t-elle à une véranda ?',
    r: (
      <>
        Ce n&apos;est pas la matière qui décide, mais le statut de la pièce. Les extensions de bâtiments
        d&apos;habitation sont entrées dans le champ de la RE2020, avec des exigences qui dépendent de la surface créée.
        Une véranda non chauffée et non communicante avec la maison joue le rôle d&apos;espace tampon et ne se traite pas
        comme une extension chauffée et ouverte sur le séjour. C&apos;est ce statut qu&apos;il faut arrêter dès
        l&apos;esquisse, avec le bureau d&apos;études, car il conditionne la conception et la façon de déposer le
        dossier.
      </>
    ),
  },
  {
    q: 'Peut-on combiner les deux : une extension bois très vitrée ?',
    r: (
      <>
        Oui, et c&apos;est très souvent la meilleure réponse. On construit une extension en ossature bois isolée, avec
        des murs pleins sur les côtés utiles pour meubler et ranger, et on ouvre largement une seule façade — celle qui
        donne sur le jardin ou la piscine — par des baies vitrées aluminium de grande dimension. On récupère la lumière
        et la vue de la véranda, sans son inconfort d&apos;été, et la pièce reste utilisable à l&apos;identique en
        février comme en août. C&apos;est un montage que nous proposons régulièrement sur nos chantiers du Libournais.
      </>
    ),
  },
];

export default function ArticleVerandaOuExtensionBoisPage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="blog" />
      <main id="contenu">
        {/* Hero */}
        <header className="relative pt-40 pb-24 md:pt-48 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="768"
              height="512"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Agrandissement de maison en Gironde : extension en ossature bois bardée accolée à une maison ancienne en pierre"
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
              <span className="text-secondary-fixed">Véranda ou extension bois</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Agrandir sa maison
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Véranda ou extension en ossature bois : que choisir pour agrandir sa maison en Gironde ?
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/70 font-label-md text-label-md">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]" aria-hidden="true">person</span>
                <a
                  href="/qui-sommes-nous#david-bertrand"
                  className="underline underline-offset-4 decoration-white/30 hover:decoration-secondary hover:text-white transition-colors"
                >
                  David Bertrand
                </a>
                , L&apos;Esprit Bois
              </span>
              <span className="text-secondary">·</span>
              <span>7 août 2026</span>
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
                Choisissez la véranda aluminium si vous cherchez avant tout de la lumière, une vue sur le jardin et un
                espace de vie clair, occupé surtout aux belles heures. Choisissez l&apos;extension en ossature bois dès
                que la pièce doit être une vraie pièce de la maison — chambre, bureau, suite parentale — utilisable à
                l&apos;identique en février et en août.
              </strong>{' '}
              Autrement dit, la question n&apos;est pas «&nbsp;quel matériau&nbsp;», c&apos;est{' '}
              <strong className="text-primary font-semibold">quel usage de la pièce</strong>. Et nous sommes bien placés
              pour le dire sans arrière-pensée : chez L&apos;Esprit Bois, à Libourne, nous vendons et posons{' '}
              <strong className="text-primary font-semibold">les deux</strong>, la véranda et l&apos;extension bois.
              Aucune des deux ne nous rapporte davantage que l&apos;autre. Voici comment nous tranchons, chantier après
              chantier, en Gironde.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. La vraie question */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Véranda ou extension bois : la vraie question n&apos;est pas le matériau, c&apos;est l&apos;usage
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Presque tous les clients qui poussent la porte de notre magasin arrivent avec la question à
                l&apos;envers. Ils ont déjà choisi une image — la véranda vitrée ouverte sur la piscine, ou le cube bois
                bardé au design contemporain — et cherchent à la justifier ensuite. Nous faisons systématiquement le
                chemin inverse :{' '}
                <strong className="text-primary font-semibold">
                  qu&apos;est-ce que vous allez faire dans cette pièce, et combien d&apos;heures par jour ?
                </strong>
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Parce qu&apos;au fond, deux critères suffisent à faire basculer la décision dans neuf cas sur dix :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  [
                    'La surface vitrée que vous voulez',
                    'si l’objectif est de voir le jardin de partout, avec le moins de murs possible, la véranda aluminium est imbattable — c’est son métier. Si vous avez besoin de murs pour poser une bibliothèque, un lit ou un bureau, chaque mètre vitré devient un mètre inutilisable.',
                  ],
                  [
                    'Le nombre d’heures d’occupation par jour',
                    'une pièce traversée une heure le matin et occupée le week-end tolère parfaitement les variations de température d’une véranda. Une pièce où l’on travaille huit heures par jour ou où l’on dort ne les tolère pas.',
                  ],
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
                Le reste — l&apos;esthétique, le budget, l&apos;urbanisme — vient ensuite et se règle. Mais un mauvais
                arbitrage sur l&apos;usage ne se rattrape pas : on ne transforme pas après coup une véranda en chambre,
                et on ne redonne pas à une extension fermée la sensation de volume d&apos;un jardin d&apos;hiver.
              </p>
            </section>

            {/* 2. Ce que chacune apporte */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce que chacune apporte vraiment — et ce qu&apos;elle coûte en contreparties
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La <strong className="text-primary font-semibold">véranda aluminium</strong> apporte trois choses que
                rien d&apos;autre ne donne aussi bien : une lumière traversante qui change la perception de toute la
                maison, une sensation de volume très supérieure à la surface réelle, et un effet «&nbsp;pièce en
                plus&nbsp;» rapide, parce que le chantier reste relativement court. Les profilés aluminium autorisent
                des sections fines, donc beaucoup de verre et peu de matière apparente ; le thermolaquage permet
                d&apos;accorder la teinte RAL aux menuiseries déjà posées, et l&apos;étanchéité comme l&apos;évacuation
                des eaux sont intégrées au système.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ses contreparties sont l&apos;exact revers de ses qualités. Des murs vitrés, ce sont{' '}
                <strong className="text-primary font-semibold">peu de rangements et peu de liberté de meubler</strong> :
                on colle un canapé le long d&apos;une baie, pas une armoire. Et le confort dépend fortement de
                l&apos;orientation : la même véranda ne se vit pas du tout de la même façon au nord et au plein sud.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                L&apos;<strong className="text-primary font-semibold">extension en ossature bois</strong> joue une tout
                autre partition. Elle offre une enveloppe isolée homogène — murs, toiture et plancher traités avec la
                même logique —, des murs porteurs contre lesquels on peut tout poser, une grande liberté de toiture
                (toit plat, monopente, prolongement de la pente existante), un vrai sur-mesure au centimètre puisque
                l&apos;ossature se dessine avant d&apos;être fabriquée, et un bilan carbone favorable, le bois stockant
                du carbone au lieu d&apos;en émettre pour être produit.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Sa contrepartie principale : elle referme. Une extension bois, même largement ouverte, reste un volume
                bâti avec des murs pleins. Si votre motivation profonde était de vivre dehors en restant dedans, elle ne
                vous la donnera pas — sauf à la dessiner très vitrée, ce que nous évoquons en fin d&apos;article.
              </p>
            </section>

            <DuoFigure
              a={{
                src: '/images/source-adefrance/IMG-20250129-WA0077-opt.webp',
                alt: "Extension en ossature bois bardée douglas avec baie et porte-fenêtre aluminium anthracite, chantier à Rauzan en Gironde",
                caption:
                  "Ossature bois : les murs pleins dominent et chaque ouverture est dessinée là où elle sert vraiment.",
                w: 900,
                h: 1200,
              }}
              b={{
                src: '/images/blog/veranda-aluminium-isolation-urbanisme-budget/veranda-aluminium-extension-vitree-exterieur.jpg',
                alt: "Véranda aluminium vitrée du sol au plafond, profilés anthracite ouverts sur une terrasse et un jardin",
                caption:
                  "Véranda aluminium : des profilés fins, un maximum de verre — et presque aucun mur contre lequel meubler.",
                w: 1200,
                h: 800,
              }}
            />

            {/* 3. Confort été / hiver */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Confort d&apos;été et d&apos;hiver : le point de bascule en Gironde
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est ici que se joue l&apos;essentiel, et nous préférons le dire franchement, alu à la main :{' '}
                <strong className="text-primary font-semibold">
                  une véranda plein sud dont la toiture n&apos;a pas été traitée devient invivable l&apos;été
                </strong>
                . Nos étés girondins ne pardonnent plus grand-chose. Or, dans une véranda, le poste le plus
                sous-estimé n&apos;est pas les façades vitrées mais{' '}
                <strong className="text-primary font-semibold">la toiture</strong> : c&apos;est par elle que le
                rayonnement entre le plus fort, aux heures les plus chaudes, quand le soleil est haut.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ce n&apos;est pas une fatalité, c&apos;est un budget. Une véranda confortable douze mois par an
                s&apos;obtient en combinant plusieurs leviers : des profilés à{' '}
                <strong className="text-primary font-semibold">rupture de pont thermique</strong>, un traitement de
                toiture adapté (panneaux isolés, vitrage de toiture spécifique), des{' '}
                <strong className="text-primary font-semibold">protections solaires</strong> — stores de toiture,
                brise-soleil orientables, stores zip en façade, motorisés si l&apos;on veut qu&apos;ils servent
                vraiment —, et une ventilation traversante réelle, pas symbolique : des ouvrants hauts et bas, placés
                pour créer un balayage. Chacun de ces postes se chiffre, et c&apos;est précisément pour cela que la
                véranda «&nbsp;pas chère&nbsp;» n&apos;existe qu&apos;en version mi-saison.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Côté <strong className="text-primary font-semibold">ossature bois</strong>, la question se pose
                autrement. L&apos;enveloppe isolée sur toute sa surface amortit naturellement les écarts, et le choix
                des isolants biosourcés apporte un déphasage — le temps que met la chaleur à traverser la paroi — qui
                décale le pic de chaleur en fin de journée, quand on peut ventiler. Résultat concret sur nos chantiers :
                une extension bois bien conçue se comporte comme le reste de la maison, alors qu&apos;une véranda a
                toujours son propre climat, plus contrasté.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nous ne donnons volontairement aucun chiffre de performance ici : ils dépendent entièrement des produits
                retenus, de l&apos;orientation et de la composition des parois, et se calculent projet par projet. Le
                détail produit de la véranda — vitrages selon l&apos;orientation, traitement de toiture, statut
                thermique — est développé dans notre{' '}
                <a href="/blog/veranda-aluminium-isolation-urbanisme-budget" className={lienInterne}>
                  guide de la véranda en aluminium
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Pergolas-aluminium-Libourne-7.webp"
              alt="Store zip descendu sur une structure aluminium à lames adossée à une maison : protection solaire d'un ouvrage vitré"
              caption="Le poste que les devis oublient : sans traitement de toiture ni store motorisé, une véranda plein sud reste une pièce de mi-saison."
              w={768}
              h={512}
            />

            {/* 4. Urbanisme */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Urbanisme : mêmes seuils pour les deux, conséquences différentes
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Bonne nouvelle pour l&apos;arbitrage :{' '}
                <strong className="text-primary font-semibold">
                  l&apos;urbanisme ne fait aucune différence entre une véranda et une extension bois
                </strong>
                . Dans les deux cas, on raisonne en emprise au sol et en surface de plancher. Voici les règles
                applicables, telles que les expose la fiche officielle sur{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F36777"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  l&apos;autorisation nécessaire pour agrandir sa maison
                </a>{' '}
                :
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Votre situation</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Formalité</th>
                      <th className="px-4 py-3 font-label-md text-label-md">À retenir</th>
                    </tr>
                  </thead>
                  <tbody>
                    {urbanisme.map((ligne, i) => (
                      <tr key={ligne[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[0]}</td>
                        <td className="px-4 py-3 text-primary font-semibold">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 mb-5">
                Deux précisions pratiques. La{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F17578"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  déclaration préalable de travaux
                </a>{' '}
                est une procédure allégée, mais elle n&apos;est pas une formalité de complaisance : le dossier doit
                montrer l&apos;insertion du projet dans son environnement. Et le passage au-delà de{' '}
                <strong className="text-primary font-semibold">150 m² de surface de plancher totale</strong> déclenche à
                la fois le permis de construire et le{' '}
                <strong className="text-primary font-semibold">recours obligatoire à un architecte</strong> — un point
                qui surprend souvent, car le seuil s&apos;apprécie sur l&apos;existant plus le créé, pas sur la seule
                extension.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                À Libourne comme dans les communes du Libournais, le{' '}
                <strong className="text-primary font-semibold">PLU local peut être plus restrictif</strong> que ces
                règles générales : aspect des façades, teintes admises, pente de toiture, implantation par rapport aux
                limites séparatives. Nous passons systématiquement au service urbanisme{' '}
                <em>avant</em> de dessiner, parce qu&apos;un projet redessiné après un premier refus coûte du temps et
                de l&apos;argent. Nous ne citons volontairement aucune règle de PLU précise ici : elle serait fausse
                d&apos;une commune à l&apos;autre.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Reste la question énergétique. Les extensions de bâtiments d&apos;habitation sont entrées dans le champ
                de la{' '}
                <a
                  href="https://www.ecologie.gouv.fr/politiques-publiques/reglementation-environnementale-re2020"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  réglementation environnementale RE2020
                </a>
                , avec des exigences qui dépendent de la surface créée. Le point décisif, là encore, n&apos;est pas la
                matière mais le <strong className="text-primary font-semibold">statut de la pièce</strong> : une véranda
                non chauffée et non communicante avec la maison reste un espace tampon, quand une extension chauffée et
                ouverte sur le séjour est un volume habitable à part entière. Ce statut se décide dès l&apos;esquisse,
                avec le bureau d&apos;études — c&apos;est lui qui conditionne la conception et le contenu du dossier.
              </p>
            </section>

            {/* 5. Budget */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Budget 2026 : ce que coûte réellement chaque solution
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Les ordres de grandeur que nous constatons en 2026, pose comprise :{' '}
                <strong className="text-primary font-semibold">
                  1 700 à 2 500 €/m² pour une extension en ossature bois
                </strong>{' '}
                selon la finition et le type de toiture, et{' '}
                <strong className="text-primary font-semibold">1 200 à 2 500 €/m² pour une véranda aluminium</strong>.
                Ce sont des fourchettes, jamais des prix fermes : seul un relevé sur place engage qui que ce soit.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ce que ces chiffres racontent est plus intéressant que les chiffres eux-mêmes.{' '}
                <strong className="text-primary font-semibold">
                  La véranda démarre nettement plus bas, mais rattrape très vite
                </strong>
                . Le bas de sa fourchette correspond à un modèle de mi-saison, sans traitement de toiture particulier ni
                protection solaire ni chauffage. Dès qu&apos;on veut une pièce vivable toute l&apos;année, on ajoute la
                toiture traitée, les brise-soleil ou stores motorisés, un émetteur de chaleur — et l&apos;on arrive
                dans le haut de fourchette, c&apos;est-à-dire au niveau de l&apos;extension bois. L&apos;écart de prix
                initial, dans les faits, achète surtout du confort en moins.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Et dans les deux cas, cinq postes manquent presque systématiquement dans les devis les moins chers :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  [
                    'Le terrassement et le support',
                    'dalle, plots ou longrines selon la nature du sol : sur les terrains argileux du Libournais, ce poste est régulièrement plus lourd que prévu.',
                  ],
                  [
                    'Le raccord d’étanchéité à la maison',
                    'la jonction en tête, entre l’ouvrage neuf et la façade existante : c’est le point qui fuit, et il ne se rattrape pas après coup.',
                  ],
                  [
                    'La reprise de la couverture existante',
                    'débord de toit à recouper, gouttière à déposer et à reprendre, tuiles à réagréer sur la ligne de raccord.',
                  ],
                  [
                    'L’électricité et le chauffage',
                    'points lumineux, prises, tableau à compléter, émetteur de chaleur : une pièce en plus, c’est aussi des réseaux en plus.',
                  ],
                  [
                    'Les finitions intérieures',
                    'sol, plinthes, peinture, raccord avec le revêtement existant — le poste qu’on découvre le dernier jour du chantier.',
                  ],
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
                Le détail poste par poste du prix au m² d&apos;une extension bois — ossature, isolation, bardage,
                toiture, second œuvre — fait l&apos;objet d&apos;un article dédié :{' '}
                <a href="/blog/extension-ossature-bois-prix-m2" className={lienInterne}>
                  le prix d&apos;une extension en ossature bois au m²
                </a>
                . Nous ne le reprenons pas ici pour ne pas dire deux fois la même chose.
              </p>
            </section>

            <Figure
              src="/images/blog/extension-ossature-bois-prix-m2/extension-ossature-bois-chantier-gironde.jpg"
              alt="Chantier d'extension en ossature bois levée contre une maison existante, avec reprise de la couverture, en Gironde"
              caption="Le raccord en tête et la reprise du débord de toit se traitent avant tout le reste : c'est par là que ça fuit."
              w={1200}
              h={900}
            />

            {/* 6. Chantier */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Chantier, délais et raccord à la maison existante
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                L&apos;ossature bois a un avantage que peu de clients anticipent :{' '}
                <strong className="text-primary font-semibold">
                  l&apos;essentiel du travail se fait en atelier
                </strong>
                . Les murs sont assemblés à plat, à l&apos;abri, aux dimensions du plan ; sur site, on lève, on assemble,
                on met hors d&apos;eau. Le temps de nuisance réelle chez vous — bruit, poussière, va-et-vient — est donc
                court, et il n&apos;y a pas d&apos;attente de séchage comme sur une maçonnerie traditionnelle.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La véranda aluminium, elle, arrive en éléments fabriqués sur mesure et se monte vite une fois le support
                prêt. Dans les deux cas,{' '}
                <strong className="text-primary font-semibold">
                  ce qui prend du temps n&apos;est pas la structure mais ce qu&apos;il y a dessous et autour
                </strong>{' '}
                : le terrassement, le support, puis les finitions et les réseaux.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Deux points de vigilance propres à notre secteur. D&apos;abord{' '}
                <strong className="text-primary font-semibold">les sols argileux du Libournais</strong>, sensibles au
                retrait-gonflement : ils imposent de soigner les fondations, et c&apos;est un terrain où la légèreté de
                l&apos;ossature bois joue en sa faveur, l&apos;ouvrage sollicitant moins le sol qu&apos;une extension
                maçonnée. Ensuite le <strong className="text-primary font-semibold">raccord en tête</strong>, entre le
                nouvel ouvrage et la façade : c&apos;est là que ça fuit, systématiquement, quand le détail a été traité
                à la va-vite. Bavette, relevé, reprise du débord de toit et de la gouttière : ce sont quelques heures de
                travail qui décident de la tranquillité des dix prochaines années.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Dernier point, très concret : vivre chez soi pendant les travaux. Une extension accolée à un séjour
                suppose d&apos;ouvrir une baie dans un mur porteur, à un moment précis du planning ; nous organisons
                cette ouverture le plus tard possible, une fois le volume neuf hors d&apos;eau, pour que la maison ne
                reste jamais ouverte aux intempéries. Vous pouvez voir comment cela se traduit sur le terrain dans{' '}
                <a href="/realisations" className={lienInterne}>
                  nos réalisations en Gironde
                </a>
                .
              </p>
            </section>

            {/* 7. Verdict */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Notre verdict, projet par projet, à Libourne et en Gironde
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Assez de nuances : voici ce que nous conseillons réellement quand un client nous pose la question, plan
                de maison sur la table.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Votre projet</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Notre choix</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Pourquoi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {verdicts.map((ligne, i) => (
                      <tr key={ligne[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[0]}</td>
                        <td className="px-4 py-3 text-primary font-semibold">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 mb-5">
                Insistons sur la dernière ligne, parce que c&apos;est celle que nous proposons le plus souvent et
                qu&apos;elle n&apos;apparaît dans aucun catalogue :{' '}
                <strong className="text-primary font-semibold">
                  l&apos;extension en ossature bois à façade largement vitrée
                </strong>
                . On isole l&apos;enveloppe comme une vraie pièce, on garde des murs pleins sur les côtés — pour meubler,
                ranger, faire passer les réseaux — et on ouvre une seule façade, celle qui donne sur le jardin ou le
                bassin, par de grandes baies aluminium. La lumière et la vue de la véranda, la stabilité thermique de
                l&apos;extension. Ce n&apos;est pas un compromis mou : c&apos;est un troisième choix, souvent le
                meilleur.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nous concevons et posons les deux familles d&apos;ouvrages : côté{' '}
                <a href="/constructions-bois" className={lienInterne}>
                  constructions et extensions bois
                </a>{' '}
                comme côté{' '}
                <a href="/amenagement-exterieur" className={lienInterne}>
                  aménagement extérieur et structures aluminium
                </a>
                , de l&apos;étude au chantier, avec un seul interlocuteur.
              </p>
            </section>

            <Figure
              src="/images/blog/extension-ossature-bois-prix-m2/extension-ossature-bois-baie-vitree-libourne.jpg"
              alt="Extension en ossature bois bardée ouverte par une grande baie coulissante aluminium noire, réalisation en Gironde"
              caption="Baie coulissante aluminium posée dans une ossature bois bardée : la lumière de la véranda, la stabilité thermique de l'extension."
              w={1200}
              h={900}
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
              Véranda ou extension bois : vos questions
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
              Agrandir juste, plutôt qu&apos;agrandir vite
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Véranda aluminium ou extension en ossature bois, nous posons les deux : notre seul intérêt est que la
              pièce que vous ajoutez soit celle que vous utiliserez vraiment, en février comme en août. Venez avec vos
              contraintes — usage visé, orientation, surface, budget global — et nous tranchons ensemble, devant votre
              maison. L&apos;Esprit Bois, entreprise certifiée Qualibat, intervient à Libourne et dans toute la Gironde,
              formalités d&apos;urbanisme comprises.
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
