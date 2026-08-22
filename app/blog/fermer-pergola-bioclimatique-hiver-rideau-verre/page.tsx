import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/realisations/salon-sous-pergola-aluminium-libourne-8.webp';

export const metadata: Metadata = buildMetadata({
  title: "Fermer une pergola pour l'hiver en Gironde | L'Esprit Bois",
  description:
    "Rideau de verre, store screen à zip ou panneaux vitrés : fermer une pergola bioclimatique prolonge la saison sans fabriquer une véranda. Notre avis en Gironde.",
  keywords:
    "fermer une pergola, rideau de verre pergola, fermeture pergola bioclimatique, pergola fermée Gironde, store zip pergola Libourne, pergola quatre saisons, fermer pergola bioclimatique hiver, paroi vitrée pergola, panneau vitré coulissant pergola, pergola fermée hiver Gironde",
  path: '/blog/fermer-pergola-bioclimatique-hiver-rideau-verre',
  ogImage: COVER,
  ogTitle:
    "Fermer sa pergola bioclimatique pour l'hiver : rideaux de verre, stores et ce que ça change vraiment",
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
      {[a, b].map((img) => (
        <figure key={img.src}>
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
        name: 'Fermer sa pergola pour l’hiver',
        item: 'https://lesprit-bois.fr/blog/fermer-pergola-bioclimatique-hiver-rideau-verre',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      "Fermer sa pergola bioclimatique pour l'hiver : rideaux de verre, stores et ce que ça change vraiment",
    description:
      "Fermer une pergola prolonge la saison de quelques mois, mais ne fabrique pas une véranda : sans isolation ni rupture de pont thermique, on gagne un abri hors vent et hors pluie, pas une pièce chauffée. Rideau de verre, store screen à zip, panneaux vitrés fixes ou coulissants, condensation, budget poste par poste et l'effet méconnu de la fermeture sur le statut fiscal de l'ouvrage : le guide d'un artisan à Libourne (Gironde).",
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
    datePublished: '2026-08-21',
    dateModified: '2026-08-21',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/fermer-pergola-bioclimatique-hiver-rideau-verre',
    },
    about: [
      { '@type': 'Thing', name: 'fermer une pergola' },
      { '@type': 'Thing', name: 'rideau de verre' },
      { '@type': 'Thing', name: 'pergola bioclimatique aluminium' },
      { '@type': 'Thing', name: 'store screen à zip' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Une pergola fermée peut-elle remplacer une véranda ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non. Une fermeture de pergola arrête le vent, la pluie et les feuilles, mais les profilés ne sont pas à rupture de pont thermique et le vitrage n'est pas un vitrage isolant : le volume reste froid dès qu'il fait froid dehors. On y gagne quelques mois de saison, pas une pièce chauffée. Si l'espace doit être vivable en février, avec du mobilier d'intérieur et un vrai chauffage, c'est une véranda qu'il faut prévoir dès le départ.",
        },
      },
      {
        '@type': 'Question',
        name: 'Rideau de verre ou store screen à zip : lequel choisir pour fermer une pergola ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le rideau de verre garde la vue et arrête la pluie battante : c'est la solution des côtés qui donnent sur le jardin, et la plus chère. Le store screen à zip coupe le vent, le vis-à-vis et le soleil rasant pour un budget nettement inférieur, mais il filtre la lumière au lieu de la laisser passer et il n'est pas étanche. Beaucoup de nos chantiers combinent les deux : le verre côté vue, la toile côté vent ou côté voisin.",
        },
      },
      {
        '@type': 'Question',
        name: "Fermer sa pergola change-t-il l'autorisation d'urbanisme ou la taxe d'aménagement ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Cela peut, et c'est le point que personne ne signale. Une pergola non close échappe à la taxe d'aménagement quelle que soit sa surface ; en la fermant, on peut la rendre close et couverte, ce qui est précisément le critère qui déclenche cette taxe et peut modifier la formalité d'urbanisme applicable. Le traitement d'une fermeture démontable relève de l'appréciation de votre commune : le réflexe est de passer au service urbanisme avant de commander.",
        },
      },
      {
        '@type': 'Question',
        name: 'Une pergola fermée est-elle étanche à la pluie ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non, et ce n'est pas son objet. Une pergola bioclimatique est couverte, pas étanche comme une toiture : lames fermées, elle évacue l'eau, mais les jonctions entre vantaux et le seuil bas laissent passer un peu d'air et d'eau quand la pluie est poussée à l'horizontale. C'est acceptable, et même utile pour la ventilation, à condition que le sol soit en pente vers l'extérieur pour que rien ne stagne.",
        },
      },
      {
        '@type': 'Question',
        name: "Faut-il enlever les stores de sa pergola pour l'hiver ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Pas nécessairement, s'ils sont conçus pour rester en place et protégés par un coffre. Ce qui abîme une toile, ce n'est pas le froid, c'est de l'enrouler humide et de la laisser plusieurs mois ainsi. La règle : remonter la toile sèche, dégager les coulisses et les évacuations d'eau avant la chute des feuilles, et laisser l'automatisme remonter le store quand le vent forcit. Cette décision se prend en fin d'été, pas en novembre.",
        },
      },
      {
        '@type': 'Question',
        name: "Combien coûte la fermeture d'une pergola en Gironde ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Cela se chiffre côté par côté, jamais au mètre carré de vitrage. Sur nos propres chantiers en 2026, un store screen à zip motorisé posé se situe le plus souvent entre 1 200 et 3 000 € par côté, des panneaux vitrés fixes ou coulissants entre 1 500 et 5 000 €, un rideau de verre coulissant entre 3 000 et 8 000 €. Quand on additionne trois ou quatre côtés vitrés, on entre dans la zone basse du budget d'une véranda : c'est le moment de se demander si ce n'est pas une véranda qu'il faut.",
        },
      },
    ],
  },
];

const comparatif = [
  [
    'Pergola bioclimatique ouverte',
    'Le soleil et l’averse verticale, lames fermées',
    'Ne coupe ni le vent ni la pluie latérale',
    'La belle saison, de mai à septembre',
  ],
  [
    'Stores screen à zip',
    'Le vent modéré, le soleil rasant, le vis-à-vis',
    'N’est ni étanche ni transparent',
    'Prolonger les soirées de mi-saison',
  ],
  [
    'Rideau de verre coulissant',
    'Le vent, la pluie battante, les feuilles',
    'N’isole pas et ne retient pas la chaleur',
    'Un salon d’extérieur d’octobre à avril',
  ],
  [
    'Véranda aluminium',
    'Le froid, dans un volume isolé et chauffé',
    'N’est plus une pergola : c’est une pièce',
    'Vivre dedans toute l’année',
  ],
];

const faq = [
  {
    q: 'Une pergola fermée peut-elle remplacer une véranda ?',
    r: (
      <>
        Non. Une fermeture de pergola arrête le vent, la pluie et les feuilles, mais les profilés ne sont pas à rupture
        de pont thermique et le vitrage n&apos;est pas un vitrage isolant : le volume reste froid dès qu&apos;il fait
        froid dehors. On y gagne quelques mois de saison, pas une pièce chauffée. Si l&apos;espace doit être vivable en
        février, avec du mobilier d&apos;intérieur et un vrai chauffage, c&apos;est une véranda qu&apos;il faut prévoir
        dès le départ.
      </>
    ),
  },
  {
    q: 'Rideau de verre ou store screen à zip : lequel choisir pour fermer une pergola ?',
    r: (
      <>
        Le rideau de verre garde la vue et arrête la pluie battante : c&apos;est la solution des côtés qui donnent sur
        le jardin, et la plus chère. Le store screen à zip coupe le vent, le vis-à-vis et le soleil rasant pour un
        budget nettement inférieur, mais il filtre la lumière au lieu de la laisser passer et il n&apos;est pas étanche.
        Beaucoup de nos chantiers combinent les deux : le verre côté vue, la toile côté vent ou côté voisin.
      </>
    ),
  },
  {
    q: "Fermer sa pergola change-t-il l'autorisation d'urbanisme ou la taxe d'aménagement ?",
    r: (
      <>
        Cela peut, et c&apos;est le point que personne ne signale. Une pergola non close échappe à la taxe
        d&apos;aménagement quelle que soit sa surface ; en la fermant, on peut la rendre close et couverte, ce qui est
        précisément le critère qui déclenche cette taxe et peut modifier la formalité d&apos;urbanisme applicable. Le
        traitement d&apos;une fermeture démontable relève de l&apos;appréciation de votre commune : le réflexe est de
        passer au service urbanisme avant de commander.
      </>
    ),
  },
  {
    q: 'Une pergola fermée est-elle étanche à la pluie ?',
    r: (
      <>
        Non, et ce n&apos;est pas son objet. Une pergola bioclimatique est couverte, pas étanche comme une toiture :
        lames fermées, elle évacue l&apos;eau, mais les jonctions entre vantaux et le seuil bas laissent passer un peu
        d&apos;air et d&apos;eau quand la pluie est poussée à l&apos;horizontale. C&apos;est acceptable, et même utile
        pour la ventilation, à condition que le sol soit en pente vers l&apos;extérieur pour que rien ne stagne.
      </>
    ),
  },
  {
    q: "Faut-il enlever les stores de sa pergola pour l'hiver ?",
    r: (
      <>
        Pas nécessairement, s&apos;ils sont conçus pour rester en place et protégés par un coffre. Ce qui abîme une
        toile, ce n&apos;est pas le froid, c&apos;est de l&apos;enrouler humide et de la laisser plusieurs mois ainsi.
        La règle : remonter la toile sèche, dégager les coulisses et les évacuations d&apos;eau avant la chute des
        feuilles, et laisser l&apos;automatisme remonter le store quand le vent forcit. Cette décision se prend en fin
        d&apos;été, pas en novembre.
      </>
    ),
  },
  {
    q: "Combien coûte la fermeture d'une pergola en Gironde ?",
    r: (
      <>
        Cela se chiffre côté par côté, jamais au mètre carré de vitrage. Sur nos propres chantiers en 2026, un store
        screen à zip motorisé posé se situe le plus souvent entre 1 200 et 3 000 € par côté, des panneaux vitrés fixes
        ou coulissants entre 1 500 et 5 000 €, un rideau de verre coulissant entre 3 000 et 8 000 €. Quand on additionne
        trois ou quatre côtés vitrés, on entre dans la zone basse du budget d&apos;une véranda : c&apos;est le moment de
        se demander si ce n&apos;est pas une véranda qu&apos;il faut.
      </>
    ),
  },
];

export default function ArticleFermerPergolaPage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="blog" />
      <main id="contenu">
        {/* Hero */}
        <header className="relative pt-40 pb-24 md:pt-48 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="825"
              height="1100"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Salon d'extérieur sous une pergola en aluminium dont un côté est fermé par un store screen à zip, en Gironde"
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
              <span className="text-secondary-fixed">Fermer sa pergola</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Fermeture de pergola
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Fermer sa pergola bioclimatique pour l&apos;hiver : rideaux de verre, stores et ce que ça change vraiment
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
              <span>21 août 2026</span>
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
                Fermer une pergola prolonge la saison de quelques mois — mais ne fabrique pas une véranda. Sans
                isolation ni rupture de pont thermique, on gagne un abri hors vent et hors pluie, pas une pièce
                chauffée.
              </strong>{' '}
              C&apos;est la phrase que nous disons en premier à chaque client qui nous appelle en août pour « fermer la
              pergola avant l&apos;hiver ». Le choix ne se décide pas sur un catalogue de rideaux de verre : il se
              décide sur l&apos;usage visé. Si la pièce doit vivre en février, il faut une véranda, et mieux vaut le dire
              franchement que vendre une fermeture qui décevra. Si elle doit simplement servir jusqu&apos;en novembre et
              redémarrer en mars, alors oui, une fermeture bien choisie change tout — et elle s&apos;installe{' '}
              <strong className="text-primary font-semibold">avant l&apos;automne, pas après</strong>. Voici comment
              trancher, côté par côté.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Ce qu'on gagne et ce qu'on ne gagne pas */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qu&apos;on gagne vraiment en fermant une pergola — et ce qu&apos;on ne gagne pas
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ce qu&apos;on gagne est réel, et c&apos;est même beaucoup : une pergola bioclimatique lames fermées vous
                met à l&apos;abri de la pluie verticale, mais elle ne vous protège ni du vent, ni de la pluie qui arrive
                de côté, ni des feuilles qui traversent. Fermer un ou deux côtés supprime ces trois nuisances d&apos;un
                coup. Le mobilier reste dehors et propre, le sol reste sec, on ressort la table dès le premier week-end
                de mars et on la rentre fin novembre au lieu de fin septembre. Par une journée ensoleillée d&apos;hiver,
                un volume fermé et vitré se réchauffe même agréablement en milieu de journée.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Ce qu&apos;on ne gagne pas, il faut l&apos;entendre aussi clairement.{' '}
                <strong className="text-primary font-semibold">
                  Les profilés d&apos;une pergola ne sont pas des profilés à rupture de pont thermique, et une fermeture
                  n&apos;est pas une menuiserie isolante.
                </strong>{' '}
                Les fabricants de ces systèmes le précisent d&apos;ailleurs eux-mêmes : ils ne sont pas destinés à créer
                une pièce chauffée. Dès que la nuit tombe ou que le thermomètre descend, le volume redescend à la
                température extérieure ou presque. Voici comment se situent les quatre familles de solutions :
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Solution</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Ce que ça arrête</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Ce que ça ne fait pas</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Pour quel usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparatif.map((ligne, i) => (
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
                Si le fonctionnement même de la pergola à lames orientables ne vous est pas familier, notre{' '}
                <a href="/blog/pergola-bioclimatique-aluminium-guide" className={lienInterne}>
                  guide de la pergola bioclimatique en aluminium
                </a>{' '}
                reprend le produit depuis le début : c&apos;est le préalable à toute réflexion sur la fermeture. Ici,
                nous partons du principe que la structure existe déjà, ou qu&apos;elle est en projet.
              </p>
            </section>

            <Figure
              src="/images/realisations/pergola-aluminium-toit-polycarbonate-libourne-4.webp"
              w={825}
              h={1100}
              alt="Pergola en aluminium adossée à une maison, côtés entièrement ouverts, sur une terrasse bois en Gironde"
              caption="Point de départ : côtés ouverts, l’ouvrage arrête l’averse verticale mais laisse passer le vent et la pluie de côté."
            />

            {/* 2. Rideau de verre */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le rideau de verre coulissant : transparence, encombrement, entretien
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est la solution la plus spectaculaire, et celle que tout le monde demande. Le principe : des
                vantaux en <strong className="text-primary font-semibold">verre trempé</strong>, sans montant vertical
                entre eux, qui coulissent dans un rail haut et un rail bas fixés sur la structure aluminium, puis
                s&apos;empilent et pivotent à une extrémité pour libérer complètement l&apos;ouverture. L&apos;épaisseur
                du verre n&apos;est pas un choix de client : elle est définie par le fabricant selon la portée, la
                hauteur et l&apos;exposition de l&apos;ouvrage. Méfiez-vous des chiffres qui circulent sur les pages
                commerciales : demandez la préconisation du fabricant pour <em>votre</em> configuration.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Son argument décisif est unique et suffit souvent à le justifier :{' '}
                <strong className="text-primary font-semibold">il ne coupe pas la vue</strong>. Fermé, on voit le jardin
                comme s&apos;il n&apos;y avait rien. Aucune toile, aucun panneau opaque ne fait cela. En contrepartie,
                trois réalités à intégrer dès le relevé :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  [
                    'L’encombrement des vantaux empilés',
                    'ouverts, les panneaux se rangent à une extrémité et mangent de la largeur. Le sens d’empilage se décide en fonction de l’accès à la maison et de la vue à préserver — c’est un choix qu’on ne rattrape pas après la pose.',
                  ],
                  [
                    'Le rail bas',
                    'il ramasse feuilles, graviers et sable. C’est le seul vrai entretien du système : un coup de brosse régulier, sinon le coulissement durcit et les joints-brosses s’usent.',
                  ],
                  [
                    'L’étanchéité limitée entre vantaux',
                    'les jonctions verre contre verre reçoivent un joint souple, pas un joint de menuiserie. Un peu d’air et d’eau passe par forte pluie battante. C’est structurel, pas un défaut de pose.',
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
                Un rideau de verre reste du <strong className="text-primary font-semibold">simple vitrage</strong>.
                Il arrête le vent et la pluie, il ne retient pas la chaleur. C&apos;est exactement pour cette raison
                qu&apos;une pergola ainsi fermée ne devient pas une véranda, quel que soit le prix payé.
              </p>
            </section>

            {/* 3. Stores screen à zip */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Stores screen à zip et toiles : la fermeture souple
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le store screen à zip est la fermeture la plus fréquente sur nos chantiers, et de loin la plus
                rationnelle en rapport service-prix. Une toile technique descend dans deux coulisses latérales où elle
                est retenue par un jonc cousu sur ses bords : elle reste{' '}
                <strong className="text-primary font-semibold">tendue et ne bat pas au vent</strong>, contrairement à un
                store classique. Fermée, elle coupe le vent, le vis-à-vis, le soleil rasant de fin de journée et une
                bonne partie de la pluie poussée à l&apos;oblique.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ses limites sont l&apos;exact revers de ses qualités. Une toile screen est une trame : elle{' '}
                <strong className="text-primary font-semibold">filtre la lumière au lieu de la laisser passer</strong>,
                et la vue devient un paysage tamisé, pas un paysage net. Il existe des toiles dites « cristal », en PVC
                transparent, qui préservent mieux la vue mais vieillissent moins bien et se rayent. Et surtout : un
                store, même à zip, n&apos;est jamais étanche. On le choisit pour tenir au vent, pas pour faire office de
                paroi.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Attention à ne pas confondre deux usages qui emploient le même produit. Dans{' '}
                <a href="/blog/protection-solaire-brise-soleil-orientable" className={lienInterne}>
                  notre article sur les protections solaires et les brise-soleil orientables
                </a>
                , le store zip sert à <strong className="text-primary font-semibold">arrêter le soleil</strong> : on
                choisit la toile sur son facteur d&apos;ouverture et sa couleur, pour rafraîchir. Ici, c&apos;est
                l&apos;inverse : on ferme <strong className="text-primary font-semibold">contre le vent et la pluie</strong>,
                on cherche à garder un maximum de lumière au moment de l&apos;année où elle manque, et la toile se
                choisit sur sa tenue mécanique. Même quincaillerie, cahier des charges opposé.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Côté motorisation, une commande à distance et un automatisme de remontée quand le vent forcit sont, à
                notre avis, le vrai confort du système — bien plus qu&apos;une manœuvre manuelle qu&apos;on finit par ne
                plus faire. Et la question de fin d&apos;été est toujours la même :{' '}
                <strong className="text-primary font-semibold">laisser ou non les stores en place pour l&apos;hiver ?</strong>{' '}
                Notre réponse : les laisser, s&apos;ils sont protégés par un coffre — à condition de remonter la toile{' '}
                <em>sèche</em>. Une toile enroulée humide et oubliée jusqu&apos;en mars, c&apos;est une toile qui
                moisit.
              </p>
            </section>

            <Figure
              src="/images/realisations/pergola-aluminium-store-zip-libourne-2.webp"
              w={1100}
              h={825}
              alt="Store screen à zip descendu sur le côté d'une pergola en aluminium, coulisses latérales et coffre visibles"
              caption="Le zip maintient la toile tendue dans ses coulisses : elle ne bat pas au vent, à l'inverse d'un store classique."
            />

            {/* 4. Panneaux vitrés */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Panneaux vitrés fixes, coulissants, pivotants : lequel pour quel côté
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                L&apos;erreur la plus courante est de choisir <em>un</em> système pour toute la pergola. Sur le terrain,
                les projets qui fonctionnent traitent <strong className="text-primary font-semibold">chaque côté
                séparément</strong>, selon ce qu&apos;il subit et ce qu&apos;il dessert. Trois familles de menuiseries
                se partagent le travail :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  [
                    'Le panneau fixe',
                    'le moins cher, le plus stable, celui qui ferme le mieux. Idéal sur un pignon, un côté aveugle ou le côté exposé au vent dominant, là où personne ne passe jamais.',
                  ],
                  [
                    'Le coulissant',
                    'il libère un passage et permet d’aérer sans tout ouvrir, mais une partie de la baie reste toujours occupée par un vantail, et il impose un rail bas à balayer.',
                  ],
                  [
                    'Le pivotant',
                    'il dégage l’ouverture en grand et se plie bien à un côté qu’on ouvre entièrement l’été ; en revanche le vantail ouvert prend de la place et prend le vent, il faut prévoir où il se range.',
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
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Notre règle de répartition, telle que nous la posons devant la maison : le côté exposé aux vents
                d&apos;ouest reçoit du fixe ou une fermeture bien tenue ; le côté qui donne sur la porte-fenêtre reçoit
                un coulissant, parce qu&apos;on y passe dix fois par jour ; le côté qui donne sur le jardin, celui qui
                fait la valeur de l&apos;espace, reçoit le rideau de verre. Et un côté au moins reste{' '}
                <strong className="text-primary font-semibold">ouvert ou facilement ouvrable</strong>. Ce dernier point
                n&apos;est pas une coquetterie : il conditionne la ventilation, la condensation et, comme nous le
                verrons, le statut même de l&apos;ouvrage.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Sur la teinte, la règle est celle de tous nos ouvrages aluminium : les profilés de fermeture reprennent
                le RAL thermolaqué de la pergola et, si possible, celui des menuiseries de la maison. Un rail dans un
                gris différent de la structure se voit immédiatement — nous détaillons ce point dans notre article sur{' '}
                <a href="/blog/choisir-teinte-ral-aluminium" className={lienInterne}>
                  le choix de la teinte RAL en aluminium
                </a>
                .
              </p>
            </section>

            <DuoFigure
              a={{
                src: '/images/blog/fermer-pergola-bioclimatique-hiver-rideau-verre/paroi-vitree-coulissante-fermeture-terrasse.webp',
                w: 1200,
                h: 600,
                alt: 'Côté de terrasse fermé par des panneaux vitrés à profilés thermolaqués, vue conservée sur le jardin',
                caption: 'Côté exposé : des panneaux vitrés qui ferment vraiment et se manœuvrent peu.',
              }}
              b={{
                src: '/images/realisations/pergola-aluminium-terrasse-bois-libourne-5.webp',
                w: 825,
                h: 1100,
                alt: 'Pergola en aluminium sur terrasse bois, laissée ouverte côté jardin, en Gironde',
                caption: 'Côté jardin : on garde un côté ouvrable — ventilation et statut de l’ouvrage en dépendent.',
              }}
            />

            {/* 5. Vent, pluie, condensation */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Vent, pluie battante et condensation : les trois vrais sujets
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">Le vent d&apos;abord.</strong> Une pergola ouverte laisse
                filer le vent entre ses poteaux ; fermée, elle devient une surface pleine, et les efforts remontent dans
                les poteaux, les fixations et les ancrages. La bonne question, sur une pergola déjà posée, n&apos;est
                donc pas « est-ce que ça se pose ? » mais{' '}
                <strong className="text-primary font-semibold">
                  « la structure et son scellement ont-ils été prévus pour être fermés un jour ? »
                </strong>{' '}
                Nous ne donnons pas de valeur ici : c&apos;est le fabricant de la pergola qui indique ce que son ouvrage
                accepte, et cette vérification se fait avant de commander la fermeture, pas après.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">La pluie battante ensuite.</strong> Une pergola
                bioclimatique est <em>couverte</em>, pas étanche comme une toiture : lames fermées, elle collecte et
                évacue l&apos;eau par les chéneaux et les poteaux, mais elle n&apos;est pas conçue comme une enveloppe
                continue. Quand la pluie arrive à l&apos;horizontale, ce qui n&apos;est pas rare en Gironde entre
                novembre et février, l&apos;eau entre par le bas des vantaux et par les angles. Le remède n&apos;est pas
                d&apos;essayer de tout calfeutrer, c&apos;est de traiter le sol : une pente vers l&apos;extérieur et un
                exutoire, pour que ce qui entre reparte tout seul.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">La condensation enfin</strong>, et c&apos;est le sujet
                dont personne ne parle avant la vente. De l&apos;air humide — celui d&apos;un hiver girondin, celui d&apos;un
                repas, celui du jardin arrosé — au contact de surfaces froides — du verre simple, des profilés non
                isolés — donne de la buée, puis du ruissellement, puis des gouttes sur le mobilier le matin, et une
                odeur de renfermé si le volume ne s&apos;ouvre jamais. Ce n&apos;est ni un défaut ni une malfaçon :
                c&apos;est la physique d&apos;un volume fermé non isolé. Quatre réflexes suffisent :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Ouvrir franchement quelques minutes par jour, même en hiver : un volume fermé qui ne respire jamais devient humide.',
                  'Ne jamais y stocker du bois humide, du linge ou des végétaux en pot en grand nombre : ce sont des sources d’humidité permanentes.',
                  'Éviter tout appareil à combustion, qui produit lui-même de la vapeur d’eau en plus d’exiger une ventilation.',
                  'Garder le sol drainé et la pente vers l’extérieur : une flaque qui stagne alimente la condensation tout l’hiver.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ces trois sujets se préparent au même moment que la révision d&apos;avant-automne de l&apos;ouvrage :
                nous avons détaillé les gestes qui comptent dans{' '}
                <a href="/blog/entretien-aluminium-pergola-veranda-revision-automne" className={lienInterne}>
                  l&apos;entretien d&apos;une pergola et d&apos;une véranda en aluminium
                </a>{' '}
                — chéneaux dégagés avant la chute des feuilles, joints vérifiés, motorisation testée. Poser une
                fermeture sur un ouvrage dont les évacuations sont bouchées, c&apos;est enfermer le problème avec soi.
              </p>
            </section>

            {/* 6. Sol, éclairage, chauffage */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Sol, éclairage, chauffage d&apos;appoint : rendre l&apos;espace vivable en octobre
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une pergola fermée mais posée sur une dalle froide et mal éclairée ne sert à personne. Ce sont ces trois
                postes, souvent traités en dernier, qui décident si l&apos;espace est utilisé en octobre ou seulement
                regardé depuis le salon.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">Le sol</strong> est le premier levier de confort, avant
                toute idée de chauffage. Un sol qui reste humide rend l&apos;espace désagréable même quand il fait doux.
                Nous privilégions une terrasse bois ou un carrelage extérieur posé avec une pente franche vers
                l&apos;extérieur, sur support drainé, et surtout jamais un revêtement d&apos;intérieur détourné : il
                n&apos;est fait ni pour le gel ni pour l&apos;humidité. Un grand tapis d&apos;extérieur fait le reste
                pour la sensation sous le pied.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">L&apos;éclairage</strong> est le second, et le plus
                sous-estimé : à partir d&apos;octobre, il fait nuit avant le dîner. Un bandeau intégré dans le chéneau
                ou des spots dans les lames, en lumière chaude et à intensité réglable, transforment l&apos;usage bien
                plus sûrement qu&apos;un vitrage supplémentaire. L&apos;alimentation se prévoit à la conception : faire
                passer un câble après coup dans une structure aluminium déjà montée est toujours plus compliqué
                qu&apos;avant.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                <strong className="text-primary font-semibold">Le chauffage d&apos;appoint</strong>, enfin, mérite
                d&apos;être présenté honnêtement. Un volume non isolé{' '}
                <strong className="text-primary font-semibold">ne se chauffe pas comme une pièce</strong> : la chaleur
                s&apos;échappe par le vitrage et les jonctions au fur et à mesure qu&apos;on la produit. Un appareil
                d&apos;appoint sert à <em>rendre une soirée agréable</em>, à réchauffer les personnes assises autour,
                pas à tenir une température dans le volume. Nous ne recommandons ni puissance ni matériel dans un
                article : cela se choisit sur place, avec un appareil prévu pour l&apos;extérieur ou le semi-abrité,
                installé selon la notice du fabricant, et en gardant à l&apos;esprit qu&apos;un appareil à combustion
                n&apos;a rien à faire dans un volume qu&apos;on vient précisément de fermer. Pour l&apos;ensemble du
                traitement de l&apos;espace — sol, abords, éclairage, mobilier —, voyez notre page{' '}
                <a href="/amenagement-exterieur" className={lienInterne}>
                  aménagement extérieur
                </a>{' '}
                et nos{' '}
                <a href="/realisations" className={lienInterne}>
                  réalisations en Gironde
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/realisations/pergola-aluminium-terrasse-bois-libourne-1.webp"
              w={1600}
              h={900}
              alt="Terrasse bois sous une pergola en aluminium, sol en pente vers le jardin, en Gironde"
              caption="Le sol et l'éclairage décident de l'usage réel en octobre — bien plus qu'un vitrage supplémentaire."
            />

            {/* 7. Pergola fermée ou véranda */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Pergola fermée ou véranda ? Trancher selon l&apos;usage (Libourne, Gironde)
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Voici comment nous tranchons, et nous le faisons toujours de la même façon.{' '}
                <strong className="text-primary font-semibold">
                  Si l&apos;espace doit servir de mars à novembre, en prolongement du salon, ouvert dès qu&apos;il fait
                  beau, la fermeture d&apos;une pergola est la bonne réponse
                </strong>{' '}
                : on double presque la durée d&apos;usage pour une fraction du coût d&apos;une construction. Si en
                revanche vous vous voyez y déjeuner en février, y installer un bureau, y mettre du mobilier
                d&apos;intérieur et compter dessus comme sur une pièce, alors il faut une véranda — avec des profilés à
                rupture de pont thermique, un vitrage isolant et un vrai traitement du chauffage. C&apos;est le sujet de
                notre guide{' '}
                <a href="/blog/veranda-aluminium-isolation-urbanisme-budget" className={lienInterne}>
                  véranda en aluminium : isolation, urbanisme et budget
                </a>
                , et c&apos;est là qu&apos;il faut aller si votre réponse est « février ».
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Le budget aide à trancher, à condition de le regarder côté par côté. Voici les ordres de grandeur{' '}
                <strong className="text-primary font-semibold">constatés sur nos propres chantiers en 2026</strong>,
                pose comprise, volontairement larges — un prix au mètre carré de vitrage n&apos;aurait aucun sens sur ce
                type d&apos;ouvrage :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Store screen à zip motorisé', '1 200 à 3 000 € par côté, selon la largeur, la toile et le type de commande.'],
                  ['Panneaux vitrés fixes ou coulissants', '1 500 à 5 000 € par côté, selon le nombre de vantaux et la manœuvre retenue.'],
                  ['Rideau de verre coulissant', '3 000 à 8 000 € par côté, selon la longueur, le nombre de vantaux et l’accessibilité du chantier.'],
                  ['Sol, éclairage et finitions', 'de quelques centaines d’euros à 2 000 € et au-delà, selon l’état du support existant.'],
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
                L&apos;arbitrage saute alors aux yeux : additionnez trois ou quatre côtés vitrés haut de gamme et vous
                entrez dans la zone basse du budget d&apos;une véranda — pour un résultat qui, lui, n&apos;est toujours
                pas une pièce chauffée. C&apos;est le moment de reposer la question de départ, pas après signature.
              </p>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-8 mb-4">
                Le point que personne ne vous dira : fermer peut rendre l&apos;ouvrage taxable
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est l&apos;angle mort de toutes les pages commerciales du sujet, et il mérite votre attention
                avant de commander.{' '}
                <strong className="text-primary font-semibold">
                  Une pergola ou une tonnelle non close échappe à la taxe d&apos;aménagement quelle que soit sa surface
                </strong>{' '}
                — c&apos;est précisément le caractère <em>clos et couvert</em> qui déclenche cette taxe, comme
                l&apos;indique la fiche officielle sur la{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F23263"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  taxe d&apos;aménagement
                </a>
                . En fermant votre pergola, vous pouvez donc faire basculer l&apos;ouvrage d&apos;un côté à l&apos;autre
                de cette frontière, et modifier du même coup{' '}
                <strong className="text-primary font-semibold">son statut fiscal et la formalité d&apos;urbanisme qui
                s&apos;y applique</strong>.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Nous ne chiffrons volontairement aucun seuil ici : ces valeurs, la surface prise en compte et
                l&apos;exonération applicable sont détaillées dans nos deux guides dédiés —{' '}
                <a href="/blog/autorisation-urbanisme-abri-carport-pergola-2026" className={lienInterne}>
                  autorisations d&apos;urbanisme pour un abri, un carport ou une pergola
                </a>{' '}
                et{' '}
                <a href="/blog/bureau-jardin-bois-studio-reglementation-budget" className={lienInterne}>
                  bureau de jardin : autorisation, valeur forfaitaire et exonération
                </a>
                . Une nuance de bon sens s&apos;impose au passage : un store amovible qu&apos;on remonte n&apos;a pas le
                même caractère qu&apos;une paroi vitrée fixe posée à demeure, mais c&apos;est votre commune qui apprécie
                la situation, pas nous et pas votre fournisseur.{' '}
                <strong className="text-primary font-semibold">
                  Un passage au service urbanisme avant de commander règle la question en une visite
                </strong>{' '}
                — et évite la mauvaise surprise un an plus tard.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Un dernier mot sur notre climat, parce qu&apos;il change le calcul.{' '}
                <strong className="text-primary font-semibold">
                  Autour de Libourne et dans toute la Gironde, l&apos;hiver est doux et humide plutôt que froid, avec des
                  vents d&apos;ouest marqués
                </strong>
                . Fermer une pergola y rapporte donc beaucoup de jours d&apos;usage — bien plus que sous un climat
                continental —, mais l&apos;humidité y rend la condensation plus présente qu&apos;ailleurs. Traduction
                concrète : ici, on ferme surtout pour couper le vent et la pluie, et on garde impérativement de quoi
                ventiler. Vous retrouverez cette logique dans notre approche des{' '}
                <a href="/pergolas" className={lienInterne}>
                  pergolas sur mesure
                </a>
                , bois comme aluminium.
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
              Fermer sa pergola : vos questions
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
              Fermer, oui — mais pour le bon usage
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Fermer une pergola est une excellente idée quand on veut gagner des mois de terrasse, et une mauvaise idée
              quand on espère une pièce chauffée : dans ce cas, c&apos;est une véranda qu&apos;il faut, et nous le
              dirons. Le reste se décide côté par côté, devant votre maison, en regardant d&apos;où vient le vent, où
              donne la vue et par où l&apos;on passe — sans oublier de vérifier en mairie ce que la fermeture change au
              statut de l&apos;ouvrage. C&apos;est le diagnostic que nous menons chez L&apos;Esprit Bois, à Libourne et
              dans toute la Gironde, et la fermeture se pose avant l&apos;automne, pas après.
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
