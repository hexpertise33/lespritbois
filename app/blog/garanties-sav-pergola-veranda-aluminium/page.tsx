import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

/** Chantier L'Esprit Bois, Saint-Pey-de-Castets (Gironde), 825 x 1100 px. */
const COVER = '/images/realisations/pergola-aluminium-toit-polycarbonate-libourne-6.webp';

export const metadata: Metadata = buildMetadata({
  title: "Garantie pergola bioclimatique et SAV en Gironde | L'Esprit Bois",
  description:
    "Garantie pergola bioclimatique : décennale, biennale, pièces détachées et SAV. Ce qu'il faut faire écrire avant de signer, à Libourne (Gironde).",
  keywords:
    "garantie pergola bioclimatique, SAV pergola aluminium, pièces détachées pergola, garantie décennale pergola Gironde, réparer une pergola bioclimatique Libourne, garantie biennale menuiserie aluminium, garantie moteur pergola, pergola aluminium Libourne",
  path: '/blog/garanties-sav-pergola-veranda-aluminium',
  ogImage: COVER,
  ogTitle: 'Dans huit ans, qui répare votre pergola en aluminium ?',
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
        name: 'Garanties et SAV pergola aluminium',
        item: 'https://lesprit-bois.fr/blog/garanties-sav-pergola-veranda-aluminium',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Dans huit ans, qui répare votre pergola ? Garanties, pièces détachées et SAV',
    description:
      "Sur une pergola bioclimatique en aluminium, ce qui tombe en panne (moteur, capteur, vérin de lames, store zip) relève des éléments d'équipement dissociables, donc de la garantie de bon fonctionnement de deux ans, pas de la décennale. Garanties légales, garantie commerciale du fabricant, disponibilité des pièces détachées et organisation du SAV à Libourne et en Gironde.",
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
    datePublished: '2026-08-31',
    dateModified: '2026-08-31',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/garanties-sav-pergola-veranda-aluminium',
    },
    about: [
      { '@type': 'Thing', name: 'garantie pergola bioclimatique' },
      { '@type': 'Thing', name: 'SAV pergola aluminium' },
      { '@type': 'Thing', name: 'pièces détachées pergola' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'La garantie décennale couvre-t-elle le moteur de ma pergola bioclimatique ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La garantie décennale vise les dommages qui compromettent la solidité de l'ouvrage ou le rendent impropre à sa destination. Un moteur, un capteur ou un vérin de lames sont des éléments d'équipement démontables sans détériorer l'ouvrage : ils relèvent en principe de la garantie de bon fonctionnement, dite biennale, qui court deux ans à compter de la réception. La qualification précise d'une pergola donnée dépend du cas d'espèce et, en cas de litige, du juge. C'est pourquoi la mention « garantie décennale » sur une plaquette ne répond pas à la question de la panne de motorisation.",
        },
      },
      {
        '@type': 'Question',
        name: "Quelle différence entre garantie légale et garantie commerciale du fabricant ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Les garanties légales (parfait achèvement, bon fonctionnement, décennale) découlent de la loi et courent à compter de la réception des travaux. La garantie commerciale est un engagement contractuel du fabricant ou du poseur, qui s'ajoute aux garanties légales sans jamais les remplacer. Sa valeur dépend entièrement de son texte : qui garantit, ce qui est couvert (la pièce seule, ou aussi la main d'œuvre et le déplacement), à quelles conditions d'entretien, et selon quelle procédure. Demandez toujours le document lui-même, pas la plaquette commerciale.",
        },
      },
      {
        '@type': 'Question',
        name: "Trouvera-t-on encore des pièces détachées pour ma pergola dans huit ans ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Rien ne le garantit d'avance, car les mécanismes d'une pergola bioclimatique ne sont pas interchangeables d'un fabricant à l'autre : lames, vérins, moteurs et cartes électroniques sont propres à chaque gamme. Ce qui augmente vos chances : un fabricant établi avec un réseau de service en France, une gamme qui existe depuis plusieurs années, et surtout un dossier où figurent la marque, la gamme, les références exactes du moteur et la teinte RAL du thermolaquage. Sans ces références, l'identification de la pièce devient le premier obstacle.",
        },
      },
      {
        '@type': 'Question',
        name: 'Que faut-il faire écrire sur le devis pour être tranquille sur le SAV ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La marque, la gamme et les références des profilés, des lames, du moteur et de la toile de store, la teinte RAL du thermolaquage, l'attestation d'assurance de l'entreprise avec des activités déclarées correspondant réellement aux travaux, le contenu exact de la garantie commerciale (pièce, main d'œuvre, déplacement), les conditions d'entretien qui la conditionnent, le délai et l'organisation du SAV, et la date de réception des travaux, qui est le point de départ de toutes les garanties légales.",
        },
      },
      {
        '@type': 'Question',
        name: "Peut-on réparer une pergola en aluminium posée par une autre entreprise ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, à condition d'identifier la gamme et de pouvoir approvisionner la pièce. Nous intervenons régulièrement à Libourne et en Gironde sur des pergolas que nous n'avons pas posées : le premier travail consiste à retrouver le fabricant et les références. Quand la gamme n'est plus suivie et qu'aucune pièce compatible n'existe, nous le disons franchement et nous étudions le remplacement du mécanisme complet plutôt que de faire durer une réparation impossible.",
        },
      },
    ],
  },
];

const garanties = [
  [
    'Parfait achèvement',
    '1 an à compter de la réception',
    'Les désordres signalés à la réception ou apparus dans l’année qui suit, ainsi que les malfaçons.',
  ],
  [
    'Bon fonctionnement (biennale)',
    '2 ans suivant la réception',
    'Les éléments d’équipement dissociables du bâtiment, c’est-à-dire démontables sans le détériorer.',
  ],
  [
    'Décennale',
    '10 ans à compter de la réception',
    'Les dommages qui compromettent la solidité de l’ouvrage ou qui le rendent impropre à sa destination.',
  ],
];

const faq = [
  {
    q: 'La garantie décennale couvre-t-elle le moteur de ma pergola bioclimatique ?',
    r: (
      <>
        La garantie décennale vise les dommages qui compromettent la solidité de l&apos;ouvrage ou le rendent impropre à
        sa destination. Un moteur, un capteur ou un vérin de lames sont des éléments d&apos;équipement démontables sans
        détériorer l&apos;ouvrage : ils relèvent en principe de la garantie de bon fonctionnement, dite biennale, qui
        court deux ans à compter de la réception. La qualification précise d&apos;une pergola donnée dépend du cas
        d&apos;espèce et, en cas de litige, du juge. C&apos;est pourquoi la mention « garantie décennale » sur une
        plaquette ne répond pas à la question de la panne de motorisation.
      </>
    ),
  },
  {
    q: 'Quelle différence entre garantie légale et garantie commerciale du fabricant ?',
    r: (
      <>
        Les garanties légales (parfait achèvement, bon fonctionnement, décennale) découlent de la loi et courent à
        compter de la réception des travaux. La garantie commerciale est un engagement contractuel du fabricant ou du
        poseur, qui s&apos;ajoute aux garanties légales sans jamais les remplacer. Sa valeur dépend entièrement de son
        texte : qui garantit, ce qui est couvert (la pièce seule, ou aussi la main d&apos;œuvre et le déplacement), à
        quelles conditions d&apos;entretien, et selon quelle procédure. Demandez toujours le document lui-même, pas la
        plaquette commerciale.
      </>
    ),
  },
  {
    q: 'Trouvera-t-on encore des pièces détachées pour ma pergola dans huit ans ?',
    r: (
      <>
        Rien ne le garantit d&apos;avance, car les mécanismes d&apos;une pergola bioclimatique ne sont pas
        interchangeables d&apos;un fabricant à l&apos;autre : lames, vérins, moteurs et cartes électroniques sont propres
        à chaque gamme. Ce qui augmente vos chances : un fabricant établi avec un réseau de service en France, une gamme
        qui existe depuis plusieurs années, et surtout un dossier où figurent la marque, la gamme, les références exactes
        du moteur et la teinte RAL du thermolaquage. Sans ces références, l&apos;identification de la pièce devient le
        premier obstacle.
      </>
    ),
  },
  {
    q: 'Que faut-il faire écrire sur le devis pour être tranquille sur le SAV ?',
    r: (
      <>
        La marque, la gamme et les références des profilés, des lames, du moteur et de la toile de store, la teinte RAL
        du thermolaquage, l&apos;attestation d&apos;assurance de l&apos;entreprise avec des activités déclarées
        correspondant réellement aux travaux, le contenu exact de la garantie commerciale (pièce, main d&apos;œuvre,
        déplacement), les conditions d&apos;entretien qui la conditionnent, le délai et l&apos;organisation du SAV, et la
        date de réception des travaux, qui est le point de départ de toutes les garanties légales.
      </>
    ),
  },
  {
    q: 'Peut-on réparer une pergola en aluminium posée par une autre entreprise ?',
    r: (
      <>
        Oui, à condition d&apos;identifier la gamme et de pouvoir approvisionner la pièce. Nous intervenons régulièrement
        à Libourne et en Gironde sur des pergolas que nous n&apos;avons pas posées : le premier travail consiste à
        retrouver le fabricant et les références. Quand la gamme n&apos;est plus suivie et qu&apos;aucune pièce
        compatible n&apos;existe, nous le disons franchement et nous étudions le remplacement du mécanisme complet plutôt
        que de faire durer une réparation impossible.
      </>
    ),
  },
];

export default function ArticleGarantiesSavPergolaAluminiumPage() {
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
              alt="Pergola en aluminium anthracite à toiture polycarbonate posée contre une maison à Saint-Pey-de-Castets, en Gironde"
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
              <span className="text-secondary-fixed">Garanties et SAV pergola</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Garanties et SAV
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Dans huit ans, qui répare votre pergola ? Garanties, pièces détachées et SAV
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
              <span>31 août 2026</span>
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
                Sur une pergola bioclimatique en aluminium, ce qui tombe en panne n&apos;est presque jamais la structure :
                c&apos;est le moteur, un capteur, un vérin de lames ou un store zip. Or ces éléments sont des équipements
                dissociables, démontables sans détériorer l&apos;ouvrage, et ils relèvent donc de la garantie de bon
                fonctionnement de deux ans, pas de la décennale de dix ans qu&apos;on vous a montrée en rendez-vous. La
                vraie question avant de signer n&apos;est pas « combien d&apos;années de garantie ? » mais « dans huit
                ans, qui vient chez moi, et avec quelle pièce ? ».
              </strong>{' '}
              Ce n&apos;est pas très vendeur à écrire quand on installe des pergolas en aluminium, et c&apos;est
              justement pour cela que personne ne l&apos;écrit. Nous posons le bois et l&apos;aluminium, nous n&apos;avons
              aucun intérêt à survendre une matière : voici ce que couvrent réellement les garanties, ce que vaut une
              garantie commerciale de fabricant, et comment sécuriser l&apos;après-chantier dès le devis.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Ce qui tombe en panne */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qui tombe en panne sur une pergola en aluminium, et ce qui ne tombe jamais en panne
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Commençons par la bonne nouvelle, celle qu&apos;on peut dire sans réserve :{' '}
                <strong className="text-primary font-semibold">
                  la partie inerte d&apos;une pergola en aluminium ne tombe pas en panne.
                </strong>{' '}
                Les poteaux, les traverses, les profilés porteurs, les visseries inox et le thermolaquage sont des
                éléments passifs. Ils ne rouillent pas comme l&apos;acier, ils ne travaillent pas comme le bois, ils ne
                demandent aucun traitement périodique. Bien dimensionnés et bien ancrés, ils ne bougeront plus.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ce qui bouge, c&apos;est tout ce que le marché a ajouté par-dessus depuis dix ans, et qui fait
                aujourd&apos;hui l&apos;essentiel de l&apos;argumentaire de vente. Sur nos interventions en Gironde, les
                demandes de dépannage portent presque toujours sur les mêmes organes :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le moteur et sa carte électronique', 'motoréducteur d’orientation des lames, moteur de store, platine de commande : ce sont des pièces mécaniques et électroniques qui vieillissent, comme sur un volet roulant ou un portail.'],
                  ['Les capteurs et la commande radio', 'capteur de vent ou de pluie, sonde, télécommande et récepteur : batteries, appairage perdu, boîtier qui prend l’eau, module qui ne répond plus après un orage.'],
                  ['Les vérins et l’articulation des lames', 'la cinématique d’orientation est le point le plus sollicité de l’ouvrage : elle travaille à chaque manœuvre, toute l’année.'],
                  ['Le store zip et sa toile', 'coulisses, zip, ressort de rappel, toile détendue ou déchirée : c’est l’équipement le plus exposé et le plus souvent remplacé.'],
                  ['Les joints d’étanchéité et les évacuations', 'joints entre lames qui durcissent, gouttière intégrée ou descente dans un poteau qui s’encrasse : rarement une panne, souvent un défaut d’entretien.'],
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
                Regardez cette liste : elle ne contient pas un seul élément de structure. C&apos;est tout le paradoxe du
                secteur. On vend une pergola sur sa structure et on la garantit sur sa structure, alors que la vie de
                l&apos;ouvrage se joue sur ses parties mobiles. Si vous voulez d&apos;abord comprendre le produit
                lui-même, lames orientables, motorisation et thermolaquage, notre{' '}
                <a href="/blog/pergola-bioclimatique-aluminium-guide" className={lienInterne}>
                  guide de la pergola bioclimatique en aluminium
                </a>{' '}
                détaille chaque composant.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Pergolas-aluminium-Libourne-9.webp"
              w={768}
              h={512}
              alt="Lames orientables en aluminium d'une pergola bioclimatique, vues du dessous en position ouverte"
              caption="Les lames et leur cinématique d'orientation travaillent à chaque manœuvre : c'est là que se jouent les pannes, pas dans les profilés porteurs."
            />

            {/* 2. Les trois garanties légales */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Les trois garanties légales, et laquelle couvre vraiment quoi
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Trois garanties légales encadrent des travaux de construction. Elles ne se choisissent pas, elles
                s&apos;appliquent, et elles courent toutes{' '}
                <strong className="text-primary font-semibold">à compter de la réception des travaux</strong>. Voici
                leur périmètre, tel que le décrit la fiche officielle sur{' '}
                <a
                  href="https://entreprendre.service-public.gouv.fr/vosdroits/F2034"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  les garanties dues par un constructeur
                </a>{' '}
                :
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Garantie</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Durée</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Ce qu&apos;elle couvre</th>
                    </tr>
                  </thead>
                  <tbody>
                    {garanties.map((ligne, i) => (
                      <tr key={ligne[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}>
                        <td className="px-4 py-3 text-primary font-semibold">{ligne[0]}</td>
                        <td className="px-4 py-3 text-on-surface-variant whitespace-nowrap">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 mb-5">
                Retenez surtout le mot qui commande tout le tableau :{' '}
                <strong className="text-primary font-semibold">la réception</strong>. C&apos;est elle qui déclenche les
                compteurs, et c&apos;est un acte écrit, daté, signé des deux côtés, avec ou sans réserves. Beaucoup de
                chantiers de pergola se terminent par une poignée de main et un virement, sans document de réception.
                Le jour où il faut faire jouer une garantie, personne ne sait plus quand elle a commencé, et c&apos;est
                au client de le prouver.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Deuxième point, tout aussi décisif : la même source rappelle que{' '}
                <strong className="text-primary font-semibold">
                  seuls les travaux déclarés au contrat d&apos;assurance du constructeur sont couverts.
                </strong>{' '}
                Une attestation d&apos;assurance n&apos;est donc pas un tampon décoratif : il faut lire les activités
                qu&apos;elle mentionne et vérifier qu&apos;elles correspondent réellement à ce qui va être posé chez
                vous. Une entreprise assurée pour la menuiserie bois et qui vous pose une pergola aluminium motorisée
                n&apos;est pas dans la même situation qu&apos;une entreprise dont l&apos;activité alu est déclarée.
              </p>
            </section>

            {/* 3. Pourquoi la décennale ne protège pas votre moteur */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Pourquoi la décennale ne protège pas votre moteur
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Mettons les deux définitions côte à côte. La décennale vise les dommages qui{' '}
                <strong className="text-primary font-semibold">compromettent la solidité de l&apos;ouvrage</strong> ou
                qui le rendent <strong className="text-primary font-semibold">impropre à sa destination</strong>. La
                garantie de bon fonctionnement, elle, vise les{' '}
                <strong className="text-primary font-semibold">éléments d&apos;équipement dissociables</strong>, ceux
                qu&apos;on peut démonter sans détériorer le bâtiment, et elle dure deux ans.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un moteur d&apos;orientation de lames se démonte avec un tournevis. Un capteur de vent se dévisse. Un
                store zip se dépose. Une carte électronique se remplace dans son boîtier. Aucun de ces organes ne tient
                l&apos;ouvrage debout, et leur panne ne fait pas s&apos;effondrer la pergola. Ce sont, par nature, des
                équipements dissociables. C&apos;est exactement pour eux que la garantie de bon fonctionnement existe, et
                elle s&apos;arrête deux ans après la réception. En clair :{' '}
                <strong className="text-primary font-semibold">
                  la troisième année, la panne de motorisation est déjà à votre charge, quelle que soit la mention
                  « décennale » imprimée sur la plaquette.
                </strong>
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une précision honnête s&apos;impose ici, et nous n&apos;irons pas plus loin qu&apos;elle : savoir si une
                pergola donnée constitue un « ouvrage » au sens de la décennale, et si tel désordre précis entre dans son
                périmètre, dépend du cas d&apos;espèce, du type de construction, de son ancrage, de son usage, et cela se
                tranche devant un juge, pas dans un article de blog. Nous n&apos;écrirons donc jamais « votre pergola est
                couverte par la décennale ». Ce que nous pouvons affirmer sans risque, c&apos;est qu&apos;un vendeur qui
                répond « décennale » à la question « et si le moteur lâche ? » ne répond pas à la question posée.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                D&apos;où la reformulation que nous conseillons à tous nos clients en rendez-vous : ne demandez pas
                combien d&apos;années de garantie il y a. Demandez, pour chaque organe mobile,{' '}
                <strong className="text-primary font-semibold">qui vient, dans quel délai, et avec quelle pièce.</strong>
              </p>
            </section>

            <Figure
              src="/images/realisations/pergola-aluminium-store-zip-libourne-2.webp"
              w={1100}
              h={825}
              alt="Store zip vertical descendu sous une pergola en aluminium posée à Saint-Pey-de-Castets, en Gironde"
              caption="Toile, coulisses latérales et coffre d'enroulement : le store est l'équipement le plus exposé d'une pergola, et le plus souvent remplacé."
            />

            {/* 4. La garantie commerciale */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                La garantie commerciale du fabricant : ce qu&apos;elle vaut, ce qu&apos;elle ne vaut pas
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                À côté des garanties légales, presque tous les fabricants d&apos;aluminium proposent des garanties
                commerciales : sur la structure, sur le thermolaquage, sur les mécanismes. Ce sont des engagements
                contractuels, librement définis par celui qui les accorde. Elles{' '}
                <strong className="text-primary font-semibold">s&apos;ajoutent</strong> aux garanties légales, elles ne
                les remplacent jamais, et surtout elles ne valent que ce que dit leur texte.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Vous verrez circuler des durées impressionnantes dans les argumentaires. Nous n&apos;en citerons aucune
                ici, parce qu&apos;elles varient d&apos;un fabricant à l&apos;autre, d&apos;une gamme à l&apos;autre, et
                qu&apos;un chiffre repris d&apos;un site de poseur n&apos;engage personne. Le nombre d&apos;années
                n&apos;est d&apos;ailleurs pas l&apos;information utile. Ce qui compte, ce sont ces sept questions, à
                poser document en main :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Qui garantit', 'le fabricant, l’importateur ou le poseur ? Si c’est le fabricant, vous dépendez d’un tiers avec qui vous n’avez pas signé.'],
                  ['Ce qui est couvert', 'la pièce seule, ou aussi la main d’œuvre et le déplacement ? C’est le point qui fait la facture réelle.'],
                  ['Ce qui est exclu', 'usure normale, corrosion en bord de mer, événements climatiques, manœuvre forcée, intervention d’un tiers.'],
                  ['Les conditions de validité', 'un entretien périodique est-il exigé, et devez-vous en apporter la preuve pour être couvert ?'],
                  ['La procédure', 'à qui s’adresse-t-on, sous quel délai de déclaration, et faut-il passer par le poseur d’origine ?'],
                  ['La transmissibilité', 'la garantie suit-elle la maison si vous la vendez, ou reste-t-elle attachée à l’acheteur initial ?'],
                  ['La preuve', 'le document existe-t-il en dehors de la plaquette commerciale, avec la référence de votre gamme dessus ?'],
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
                Le quatrième point mérite une attention particulière, car il se retourne souvent contre le client :
                beaucoup de garanties commerciales conditionnent leur application à un entretien régulier de l&apos;
                ouvrage. Nettoyer les profilés, dégager les évacuations, contrôler les organes mobiles n&apos;est donc
                pas seulement une question de longévité, c&apos;est une question de couverture. Nous détaillons ces
                gestes dans notre{' '}
                <a href="/blog/entretien-aluminium-pergola-veranda-revision-automne" className={lienInterne}>
                  révision d&apos;automne d&apos;une pergola ou d&apos;une véranda en aluminium
                </a>{' '}
                : gardez-en une trace datée, c&apos;est exactement ce qu&apos;on vous demandera.
              </p>
            </section>

            {/* 5. Pièces détachées */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Pièces détachées : la vraie question, c&apos;est la disponibilité dans huit ans
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Voici le point que nous considérons comme le plus important de tout l&apos;article, et celui dont on
                parle le moins :{' '}
                <strong className="text-primary font-semibold">
                  une pergola bioclimatique n&apos;est pas un produit standardisé.
                </strong>{' '}
                Chaque fabricant a ses profilés, ses sections de lames, ses embouts, sa cinématique, son moteur, sa carte
                et son protocole radio. Une lame d&apos;une marque ne se monte pas sur la structure d&apos;une autre. Un
                moteur d&apos;orientation n&apos;est pas un consommable qu&apos;on trouve au rayon quincaillerie. Passé
                la période de garantie, tout dépend donc d&apos;une seule chose : la pièce existe-t-elle encore ?
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Quatre scénarios se présentent en pratique, du plus simple au plus bloquant. La toile de store se refait
                presque toujours, sur mesure, même longtemps après. Le thermolaquage se retouche, à condition de
                connaître la teinte : une référence RAL notée sur le dossier permet de recommander une pièce laquée dans
                la bonne couleur des années plus tard. Le moteur et la carte dépendent du réseau de service du fabricant
                et de la durée de vie commerciale de la gamme. Enfin, les pièces de cinématique propres à une gamme
                arrêtée sont le vrai mur : quand elles ne sont plus produites, aucune équivalence ne les remplace.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Sur nos propres interventions en Gironde en 2026, ce n&apos;est presque jamais la main d&apos;œuvre qui
                fait la difficulté d&apos;un dépannage : c&apos;est l&apos;identification de la pièce, puis son
                approvisionnement. Quand un client nous appelle pour une pergola dont il ignore la marque, sans facture
                détaillée et sans notice, la première visite sert uniquement à identifier le matériel. Parfois nous y
                arrivons, parfois non.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                D&apos;où trois questions à poser au vendeur, avant de signer, qui ne coûtent rien et qui changent tout :
                depuis combien d&apos;années cette gamme précise est-elle commercialisée, le fabricant dispose-t-il
                d&apos;un réseau de service en France, et l&apos;entreprise s&apos;engage-t-elle par écrit à me remettre
                les références complètes du matériel posé ? Une entreprise sérieuse répond aux trois sans hésiter.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Pergolas-aluminium-Libourne-8.webp"
              w={768}
              h={512}
              alt="Profilés en aluminium thermolaqué blanc et embouts de lames d'une pergola bioclimatique"
              caption="Sections de profilés, lames et embouts diffèrent d'un fabricant à l'autre : c'est ce qui rend une pièce introuvable quand la gamme s'arrête."
            />

            {/* 6. Ce qu'il faut faire écrire */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qu&apos;il faut faire écrire sur le devis et sur la facture
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Tout ce qui précède se règle en une seule fois, au moment du devis, et ne se rattrape plus après. Voici
                la liste que nous conseillons de reprendre telle quelle et de demander à chaque entreprise consultée. Si
                l&apos;une d&apos;elles refuse d&apos;écrire ces éléments, vous avez déjà une information sur la façon
                dont se passera le SAV.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['La date et le document de réception', 'un procès-verbal daté et signé, avec ou sans réserves : c’est le point de départ des trois garanties légales.'],
                  ['L’attestation d’assurance en cours de validité', 'avec les activités déclarées, à confronter à la nature réelle des travaux prévus chez vous.'],
                  ['La marque, la gamme et les références', 'profilés, lames, moteur, capteurs, toile de store : chaque composant nommé et référencé, pas « pergola bioclimatique alu » en une ligne.'],
                  ['La teinte RAL et le type de thermolaquage', 'noté noir sur blanc, pour toute retouche ou pièce de remplacement à commander plus tard.'],
                  ['Le contenu de la garantie commerciale', 'quelle pièce, quelle durée, avec ou sans main d’œuvre et déplacement, et le document annexé au devis.'],
                  ['Les conditions d’entretien exigées', 'périodicité, nature des opérations, preuve à conserver : c’est ce qui peut faire tomber la garantie.'],
                  ['L’organisation du SAV', 'qui intervient, sous quel délai, depuis quelle ville, et si le déplacement est facturé hors garantie.'],
                  ['Les exclusions', 'ce qui n’est pas dans le prix ni dans la couverture : elles se lisent avant la signature, jamais après la panne.'],
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
                Ces mentions se lisent en même temps que les prix. Pour la comparaison chiffrée elle-même, poste par
                poste, nous avons écrit un article distinct :{' '}
                <a href="/blog/comparer-devis-pergola-postes-prix" className={lienInterne}>
                  trois devis de pergola, trois prix, et les postes qui expliquent l&apos;écart
                </a>
                . Il traite l&apos;avant-signature ; celui que vous lisez traite l&apos;après. Lus ensemble, ils
                couvrent la vie complète de l&apos;ouvrage.
              </p>
            </section>

            {/* 7. Notre SAV à Libourne et en Gironde */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Notre façon de gérer le SAV à Libourne et en Gironde
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Nous ne promettrons pas ici une durée de garantie plus longue que celle du voisin : ce serait retomber
                dans le travers que dénonce cet article. Nous préférons décrire ce que nous faisons concrètement, parce
                que c&apos;est vérifiable.{' '}
                <strong className="text-primary font-semibold">
                  Nous sommes une entreprise locale, installée près de Libourne, et nous posons nous-mêmes ce que nous
                  vendons.
                </strong>{' '}
                Quand une lame se bloque trois ans après, c&apos;est le même atelier qui reprend le dossier. Beaucoup
                des dépannages difficiles que nous voyons concernent des ouvrages vendus à distance et posés par une
                équipe de passage, dont plus personne ne sait quoi faire.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                À la fin de chaque chantier, nous laissons un dossier : références des profilés et des lames, teinte RAL,
                marque et référence du moteur et de la commande, notices, et le document de réception daté. Ce dossier ne
                sert à rien pendant huit ans, puis il sert une fois, et ce jour-là il vaut de l&apos;or. Gardez-le avec
                les papiers de la maison, pas dans le garage.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Nous intervenons aussi sur des pergolas et des carports en aluminium que nous n&apos;avons pas posés,
                à Libourne et dans le reste de la Gironde, à condition de pouvoir identifier la gamme et
                d&apos;approvisionner la pièce. Et quand la gamme n&apos;est plus suivie, nous le disons : mieux vaut
                étudier le remplacement d&apos;un mécanisme complet que multiplier les visites sur une pièce
                introuvable. C&apos;est aussi pour cette raison que nous parlons de{' '}
                <a href="/pergolas" className={lienInterne}>
                  pergolas en aluminium
                </a>{' '}
                et de{' '}
                <a href="/carports" className={lienInterne}>
                  carports
                </a>{' '}
                en gardant les deux matières sur la table : sur certains projets, une structure sans aucune pièce mobile
                répond mieux au besoin réel, et nous le disons avant de vendre une motorisation.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Vous pouvez voir les ouvrages en aluminium que nous avons posés et que nous suivons dans{' '}
                <a href="/realisations" className={lienInterne}>
                  nos réalisations en Gironde
                </a>
                . Ce sont ces chantiers-là que nous reverrons dans huit ans.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Carport-aluminium-Libourne-3.webp"
              w={1200}
              h={646}
              alt="Carport en aluminium thermolaqué adossé à une maison, couverture et panneaux latéraux en aluminium"
              caption="Les garanties ne concernent pas que la pergola : un carport en aluminium suit les mêmes règles, avec l'avantage d'une structure sans pièce mobile."
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
              Garanties et SAV d&apos;une pergola en aluminium : vos questions
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
              Une pergola qu&apos;on peut encore réparer dans huit ans
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Une belle pergola en aluminium, c&apos;est d&apos;abord un ouvrage dont on saura encore changer une pièce
              quand la garantie sera loin derrière. Références notées, réception écrite, entretien tracé, poseur joignable :
              c&apos;est ainsi que nous travaillons chez L&apos;Esprit Bois, entreprise qualifiée Qualibat, à Libourne et
              dans toute la Gironde, sur l&apos;aluminium comme sur le bois.
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
