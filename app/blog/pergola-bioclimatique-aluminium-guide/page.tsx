import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/source-adefrance/Pergolas-aluminium-Libourne-3.webp';

export const metadata: Metadata = buildMetadata({
  title: "Pergola bioclimatique aluminium : le guide",
  description:
    "Lames orientables, évacuation de l'eau, motorisation et options : ce qu'il faut savoir avant de choisir sa pergola bioclimatique, à Libourne et en Gironde.",
  keywords:
    "pergola bioclimatique aluminium, pergola bioclimatique, lames orientables, pergola bioclimatique motorisée, prix pergola bioclimatique 2026, pergola aluminium sur mesure, thermolaquage RAL, store zip pergola, pergola bioclimatique Libourne, pergola aluminium Gironde",
  path: '/blog/pergola-bioclimatique-aluminium-guide',
  ogImage: COVER,
  ogTitle:
    'Pergola bioclimatique en aluminium : lames orientables, motorisation et budget en 2026',
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
        name: 'Pergola bioclimatique aluminium',
        item: 'https://lesprit-bois.fr/blog/pergola-bioclimatique-aluminium-guide',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      'Pergola bioclimatique en aluminium : lames orientables, motorisation et budget en 2026',
    description:
      "Comment fonctionne une pergola bioclimatique en aluminium, ce qui distingue une bonne structure d'une pergola bas de gamme, jusqu'où motoriser, quelle teinte RAL choisir, quelles formalités d'urbanisme et quel budget prévoir en 2026, par un artisan à Libourne (Gironde).",
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
    datePublished: '2026-07-30',
    dateModified: '2026-07-30',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/pergola-bioclimatique-aluminium-guide',
    },
    about: [
      { '@type': 'Thing', name: 'pergola bioclimatique' },
      { '@type': 'Thing', name: 'aluminium' },
      { '@type': 'Thing', name: 'lames orientables' },
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
        name: "Où part l'eau de pluie quand les lames sont fermées ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, lames fermées, une pergola bioclimatique de qualité forme une toiture qui collecte l'eau et l'évacue par des chéneaux périphériques puis par les poteaux. C'est la qualité de l'étanchéité entre les lames et du circuit d'évacuation qui fait la différence : sur les modèles bas de gamme, l'eau finit par ruisseler ou goutter à la jonction des lames. Une pergola reste toutefois un ouvrage ouvert sur les côtés : par pluie battante et vent de travers, la terrasse peut recevoir des embruns.",
        },
      },
      {
        '@type': 'Question',
        name: 'Lames orientables motorisées ou manuelles : que choisir ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La commande manuelle par manivelle suffit sur une petite pergola dont on règle les lames une ou deux fois par jour, et elle coûte moins cher. La motorisation devient vraiment utile au-delà de trois mètres de portée, sur une terrasse qu'on utilise tous les jours, et surtout dès qu'on ajoute un capteur de pluie ou de vent : les lames se referment ou se remettent à plat toutes seules quand personne n'est là. Notre conseil : si vous ne motorisez pas tout de suite, faites au moins passer l'alimentation électrique pendant le chantier.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quel budget prévoir pour une pergola bioclimatique aluminium posée ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Les fourchettes de marché 2026, pose comprise, se situent le plus souvent entre 400 et 900 € du m² selon la gamme et les équipements. En ordre de grandeur : environ 2 500 à 4 500 € pour une pergola aluminium 3 × 3 m à lames manuelles, plutôt 4 500 à 8 500 € pour un modèle d'environ 4 × 3 m à lames motorisées avec capteurs et éclairage LED, et au-delà pour les grandes portées, les stores zip et les finitions poussées. Seul un devis établi après relevé sur place engage réellement.",
        },
      },
      {
        '@type': 'Question',
        name: "Faut-il une déclaration préalable pour une pergola bioclimatique ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Une pergola bioclimatique crée de l'emprise au sol : en règle générale, aucune formalité en dessous de 5 m², une déclaration préalable de 5 à 20 m² et un permis de construire au-delà de 20 m². Mais le PLU de votre commune peut être plus contraignant, et en secteur protégé ou aux abords d'un monument historique une déclaration préalable peut être exigée dès le premier mètre carré. Nous vérifions le PLU et montons le dossier avant d'engager le chantier.",
        },
      },
      {
        '@type': 'Question',
        name: 'Une pergola en aluminium demande-t-elle de l’entretien ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Très peu, et c'est son principal atout : un lavage à l'eau savonneuse une à deux fois par an suffit, sans produit abrasif ni nettoyeur haute pression sur les joints. Il faut en revanche penser à contrôler les évacuations et les chéneaux à l'automne, dépoussiérer les rails des stores et vérifier les articulations des lames et la motorisation. Contrairement au bois, un aluminium thermolaqué ne demande aucune remise en peinture périodique.",
        },
      },
      {
        '@type': 'Question',
        name: 'Stores zippés ou vitrages coulissants : peut-on les ajouter après coup ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, à condition de l'avoir anticipé : stores verticaux zippés, panneaux coulissants à lames ou vitrages coulissants se posent après coup si la structure a été dimensionnée et pré-équipée pour les recevoir. Attention en revanche au point de bascule : une pergola entièrement refermée par des vitrages ne s'utilise plus comme une pergola mais comme une véranda, avec des conséquences réglementaires et thermiques différentes. Mieux vaut en parler dès la conception.",
        },
      },
    ],
  },
];

const gammes = [
  [
    'Lames manuelles',
    'Manivelle ou tringle sur les lames',
    'Budget contenu, rien à alimenter, très peu de pannes',
    'Réglage à la main, portée limitée, pas de capteurs',
  ],
  [
    'Lames motorisées',
    'Moteur sur l’axe des lames, télécommande',
    'Confort quotidien, grandes portées, réglage fin',
    'Alimentation électrique à prévoir, maintenance à anticiper',
  ],
  [
    'Motorisée + capteurs',
    'Capteur de pluie et de vent, repli automatique',
    'La pergola se protège seule en votre absence',
    'Surcoût, réglages de seuils à ajuster la première saison',
  ],
  [
    'Motorisée + domotique',
    'Pilotage smartphone, scénarios, programmation',
    'S’intègre aux volets et à l’éclairage de la maison',
    'Dépend de la box, exige une installation cohérente',
  ],
];

const faq = [
  {
    q: "Où part l'eau de pluie quand les lames sont fermées ?",
    r: (
      <>
        Oui, lames fermées, une pergola bioclimatique de qualité forme une toiture qui collecte l&apos;eau et
        l&apos;évacue par des chéneaux périphériques puis par les poteaux. C&apos;est la qualité de l&apos;étanchéité
        entre les lames et du circuit d&apos;évacuation qui fait la différence : sur les modèles bas de gamme, l&apos;eau
        finit par ruisseler ou goutter à la jonction des lames. Une pergola reste toutefois un ouvrage ouvert sur les
        côtés : par pluie battante et vent de travers, la terrasse peut recevoir des embruns.
      </>
    ),
  },
  {
    q: 'Lames orientables motorisées ou manuelles : que choisir ?',
    r: (
      <>
        La commande manuelle par manivelle suffit sur une petite pergola dont on règle les lames une ou deux fois par
        jour, et elle coûte moins cher. La motorisation devient vraiment utile au-delà de trois mètres de portée, sur une
        terrasse qu&apos;on utilise tous les jours, et surtout dès qu&apos;on ajoute un capteur de pluie ou de vent : les
        lames se referment ou se remettent à plat toutes seules quand personne n&apos;est là. Notre conseil : si vous ne
        motorisez pas tout de suite, faites au moins passer l&apos;alimentation électrique pendant le chantier.
      </>
    ),
  },
  {
    q: 'Quel budget prévoir pour une pergola bioclimatique aluminium posée ?',
    r: (
      <>
        Les fourchettes de marché 2026, pose comprise, se situent le plus souvent entre 400 et 900 € du m² selon la
        gamme et les équipements. En ordre de grandeur : environ 2 500 à 4 500 € pour une pergola aluminium 3 × 3 m à
        lames manuelles, plutôt 4 500 à 8 500 € pour un modèle d&apos;environ 4 × 3 m à lames motorisées avec capteurs et
        éclairage LED, et au-delà pour les grandes portées, les stores zip et les finitions poussées. Seul un devis établi
        après relevé sur place engage réellement.
      </>
    ),
  },
  {
    q: 'Faut-il une déclaration préalable pour une pergola bioclimatique ?',
    r: (
      <>
        Une pergola bioclimatique crée de l&apos;emprise au sol : en règle générale, aucune formalité en dessous de
        5 m², une déclaration préalable de 5 à 20 m² et un permis de construire au-delà de 20 m². Mais le PLU de votre
        commune peut être plus contraignant, et en secteur protégé ou aux abords d&apos;un monument historique une
        déclaration préalable peut être exigée dès le premier mètre carré. Nous vérifions le PLU et montons le dossier
        avant d&apos;engager le chantier.
      </>
    ),
  },
  {
    q: 'Une pergola en aluminium demande-t-elle de l’entretien ?',
    r: (
      <>
        Très peu, et c&apos;est son principal atout : un lavage à l&apos;eau savonneuse une à deux fois par an suffit,
        sans produit abrasif ni nettoyeur haute pression sur les joints. Il faut en revanche penser à contrôler les
        évacuations et les chéneaux à l&apos;automne, dépoussiérer les rails des stores et vérifier les articulations des
        lames et la motorisation. Contrairement au bois, un aluminium thermolaqué ne demande aucune remise en peinture
        périodique.
      </>
    ),
  },
  {
    q: 'Stores zippés ou vitrages coulissants : peut-on les ajouter après coup ?',
    r: (
      <>
        Oui, à condition de l&apos;avoir anticipé : stores verticaux zippés, panneaux coulissants à lames ou vitrages
        coulissants se posent après coup si la structure a été dimensionnée et pré-équipée pour les recevoir. Attention
        en revanche au point de bascule : une pergola entièrement refermée par des vitrages ne s&apos;utilise plus comme
        une pergola mais comme une véranda, avec des conséquences réglementaires et thermiques différentes. Mieux vaut en
        parler dès la conception.
      </>
    ),
  },
];

export default function ArticlePergolaBioclimatiqueAluminiumPage() {
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
              alt="Pergola bioclimatique en aluminium anthracite à lames orientables, posée en îlot sur une terrasse en pierre"
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
              <span className="text-secondary-fixed">Pergola bioclimatique aluminium</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Pergolas aluminium
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Pergola bioclimatique en aluminium : lames orientables, motorisation et budget en 2026
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
              <span>30 juillet 2026</span>
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
                Une pergola bioclimatique en aluminium se juge sur quatre points, et le prix n&apos;en est que le
                quatrième : l&apos;étanchéité des lames orientables et l&apos;évacuation des eaux intégrée aux poteaux, la
                qualité des profilés et de leur thermolaquage, la pertinence de la motorisation (capteur de pluie et de
                vent plutôt que gadgets), et l&apos;implantation par rapport au soleil de fin de journée.
              </strong>{' '}
              Comptez, en fourchettes de marché 2026 et pose comprise, de 400 à 900 € du m² selon la gamme. Sur nos
              chantiers autour de Libourne, ce sont presque toujours les mêmes détails invisibles au moment du devis qui
              séparent une pergola qu&apos;on utilise dix mois sur douze d&apos;une pergola qui goutte au premier orage.
              Voici comment décider en connaissance de cause.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Fonctionnement */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Comment fonctionne vraiment une pergola bioclimatique ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le principe tient en une phrase : la toiture est constituée de{' '}
                <strong className="text-primary font-semibold">lames en aluminium orientables</strong> que l&apos;on fait
                pivoter, à la manivelle ou au moteur, pour doser l&apos;ombre, la lumière et l&apos;air. C&apos;est ce
                réglage qui rend l&apos;ouvrage « bioclimatique » : on ne subit pas la météo, on l&apos;ajuste.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">Lames entrouvertes</strong>, l&apos;air circule et la
                chaleur accumulée sous la toiture s&apos;échappe : c&apos;est la position d&apos;été, celle qui fait
                gagner plusieurs degrés ressentis par rapport à une toiture pleine, avec une ombre portée en bandes qui
                se déplace au fil de la journée. <strong className="text-primary font-semibold">Lames fermées</strong>, les
                profilés s&apos;emboîtent et forment une couverture continue qui recueille l&apos;eau de pluie, la
                conduit vers les chéneaux périphériques puis vers les poteaux. On peut donc laisser la table dressée sous
                l&apos;averse. <strong className="text-primary font-semibold">Lames à plat en hiver</strong>, on rend au
                séjour la lumière rasante dont il a besoin.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                C&apos;est la différence de fond avec les deux autres familles de pergolas : une pergola à{' '}
                <strong className="text-primary font-semibold">toile</strong> se replie mais n&apos;offre qu&apos;un
                réglage tout ou rien, et sa toile vieillit ; une pergola à{' '}
                <strong className="text-primary font-semibold">toiture fixe</strong> (panneaux, tuiles, bac acier)
                protège bien mais plonge la pièce voisine dans l&apos;ombre toute l&apos;année. La bioclimatique est la
                seule à faire varier son propre couvert. Si vous hésitez encore sur la matière elle-même, notre{' '}
                <a href="/blog/pergola-bois-ou-bioclimatique" className={lienInterne}>
                  comparatif pergola bois ou bioclimatique
                </a>{' '}
                traite ce choix en détail — nous vendons et posons les deux, cet article-ci se consacre à
                l&apos;aluminium.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Pergolas-aluminium-Libourne-9.webp"
              w={768}
              h={512}
              alt="Lames orientables entrouvertes vues du dessous sur une pergola bioclimatique en aluminium"
              caption="Lames entrouvertes : l'air circule, l'ombre tombe en bandes et la chaleur ne stagne pas sous la toiture."
            />

            {/* 2. Implantation */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Adossée, autoportante ou en îlot : quelle implantation ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La <strong className="text-primary font-semibold">pergola adossée</strong> prend appui sur la façade et
                ne repose que sur deux poteaux côté jardin. C&apos;est la configuration la plus fréquente : elle prolonge
                le séjour, se traverse de plain-pied depuis la baie vitrée et coûte moins cher à surface égale. Elle
                demande en revanche une façade saine et un raccord soigné, car c&apos;est là que se joue
                l&apos;étanchéité entre la maison et l&apos;ouvrage.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La <strong className="text-primary font-semibold">pergola autoportante</strong>, sur quatre poteaux, se
                pose où l&apos;on veut : au bord du bassin, au fond du jardin, à l&apos;écart de la maison pour créer un
                second lieu de vie. La version dite{' '}
                <strong className="text-primary font-semibold">en îlot</strong> assume complètement ce statut de pavillon
                de jardin, souvent avec des claustras ou des panneaux à lames sur un ou deux côtés pour couper un vis-à-vis.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Mais le vrai sujet, en Gironde, c&apos;est l&apos;
                <strong className="text-primary font-semibold">orientation</strong>. Nos terrasses libournaises regardent
                très souvent le sud ou l&apos;ouest, et la gêne principale n&apos;est pas le soleil de midi — que les
                lames arrêtent sans difficulté — mais le{' '}
                <strong className="text-primary font-semibold">soleil rasant de fin de journée</strong>, celui de 18 h à
                21 h en juillet, qui passe sous la toiture quel que soit l&apos;angle des lames. La réponse tient
                rarement dans le toit : elle est latérale (store zip, panneau, claustra) et se décide au moment du plan,
                pas après. C&apos;est précisément pour cela que nous relevons les niveaux, la hauteur de la baie, le
                débord de toit et la course du soleil <strong className="text-primary font-semibold">sur place</strong>,
                avant de dessiner quoi que ce soit.
              </p>
            </section>

            <Figure
              src="/images/realisations/pergola-aluminium-store-zip-libourne-2.webp"
              w={1100}
              h={825}
              alt="Store vertical descendu sur le côté d'une pergola aluminium adossée, chantier de L'Esprit Bois à Saint-Pey-de-Castets"
              caption="Un de nos chantiers, à Saint-Pey-de-Castets : adossée, la pergola prolonge le séjour, et c'est le store latéral — non la couverture — qui coupe le soleil rasant."
            />

            {/* 3. Qualité */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qui sépare une bonne pergola alu d&apos;une pergola bas de gamme
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Deux pergolas peuvent se ressembler trait pour trait sur un catalogue et se comporter très différemment
                au bout de trois hivers. Voici les points sur lesquels nous regardons, et que nous vous invitons à faire
                figurer noir sur blanc dans tout devis, chez nous comme ailleurs :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Des profilés en aluminium extrudé, avec de la matière', 'l’épaisseur des parois et la section des poteaux et des poutres conditionnent la portée admissible et la rigidité de l’ensemble. Un profilé trop léger vibre, se voile et fatigue ses articulations.'],
                  ['Un thermolaquage sérieux', 'la teinte n’est pas peinte, elle est cuite. Les labels de la filière, Qualicoat pour le thermolaquage et Qualimarine pour les ambiances marines et le littoral, encadrent la préparation de surface : c’est ce qui évite le farinage et la corrosion filiforme au bout de quelques années.'],
                  ['Une étanchéité de lames réelle', 'demandez à voir la coupe : joints d’emboîtement continus, recouvrement des lames, et non deux profilés qui se posent l’un contre l’autre en espérant que l’eau n’insiste pas.'],
                  ['Une évacuation des eaux intégrée', 'chéneaux périphériques dissimulés dans les poutres, descente à l’intérieur des poteaux, et un trop-plein prévu pour les orages violents. Une pergola qui rejette l’eau au sol par un simple bec finit par creuser la terrasse et salir les poteaux.'],
                  ['Des articulations et une visserie durables', 'les lames pivotent des milliers de fois : bagues, axes et biellettes sont les vraies pièces d’usure. Fixations en inox, et pièces de rechange disponibles chez le fabricant.'],
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
                Reste la tenue au vent, sujet sur lequel on lit beaucoup d&apos;approximations. Nous ne citerons pas de
                vitesse en kilomètres-heure : la seule question utile à poser à un fabricant est{' '}
                <strong className="text-primary font-semibold">
                  quelle classe de résistance au vent a été testée sur ce modèle, dans quelle dimension, et pouvez-vous
                  fournir le procès-verbal d&apos;essai
                </strong>{' '}
                — une pergola de 3 × 3 m et la même en 6 × 4 m ne se comportent pas de la même façon. Même exigence pour
                la charge de neige : une note de calcul, pas une affirmation commerciale. Un fournisseur sérieux sort ces
                documents sans se faire prier.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Pergolas-aluminium-Libourne-8.webp"
              w={768}
              h={512}
              alt="Structure d'une pergola bioclimatique aluminium blanche, poutre périphérique et lames orientables ouvertes"
              caption="La poutre périphérique cache le chéneau : l'eau collectée lames fermées descend à l'intérieur des poteaux."
            />

            {/* 4. Motorisation */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Motorisation, capteurs et domotique : jusqu&apos;où aller ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La motorisation des lames est l&apos;option la plus vendue, et souvent à raison — mais tout le monde
                n&apos;a pas besoin du même niveau d&apos;équipement. Voici comment se situent les quatre configurations
                que nous rencontrons :
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Configuration</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Principe</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Atouts</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Limites</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gammes.map((ligne, i) => (
                      <tr
                        key={ligne[0]}
                        className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}
                      >
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
                Si nous devions ne garder qu&apos;une option, ce serait le{' '}
                <strong className="text-primary font-semibold">capteur de pluie et de vent</strong>. Ce n&apos;est pas un
                gadget : il ferme les lames pendant que vous êtes au travail et les remet à plat quand le vent forcit,
                donc il protège le mobilier <em>et</em> la structure. Le pilotage par smartphone ou par la box domotique
                de la maison vient ensuite, et se justifie surtout si vous voulez des scénarios cohérents avec les volets
                et l&apos;éclairage.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Deux conseils de chantier que l&apos;on nous remercie souvent d&apos;avoir donnés à temps.{' '}
                <strong className="text-primary font-semibold">
                  Faites passer l&apos;alimentation électrique et les fourreaux avant la pose
                </strong>{' '}
                — même si vous choisissez des lames manuelles aujourd&apos;hui : rattraper une alimentation dans une
                terrasse carrelée, c&apos;est casser. Et{' '}
                <strong className="text-primary font-semibold">
                  gardez un accès de maintenance et une commande de secours
                </strong>{' '}
                : un moteur se remplace, à condition que le coffret et la platine restent atteignables sans démonter la
                moitié de la toiture.
              </p>
            </section>

            {/* 5. Teinte */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Choisir la teinte : nuancier RAL, mat ou sablé
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                L&apos;aluminium se thermolaque dans presque tout le nuancier RAL, ce qui est une liberté… et un piège :
                on choisit une teinte sur un échantillon de dix centimètres, on la vit sur douze mètres carrés de
                structure. Trois repères que nous donnons systématiquement.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Les teintes sombres, gris anthracite en tête', 'ce sont les plus demandées, elles dessinent l’ouvrage et s’accordent aux menuiseries contemporaines ; elles chauffent en revanche nettement plus au toucher en plein soleil et marquent davantage la poussière calcaire.'],
                  ['Les teintes claires, blanc et gris pâle', 'elles allègent la structure, rendent la pergola presque discrète sur une façade enduite claire et restent fraîches ; elles montrent en revanche plus vite les coulures et les traces de pluie.'],
                  ['La finition sablée ou texturée', 'plutôt qu’un brillant : elle accroche moins les reflets, masque bien mieux les micro-traces et les marques de doigts, et vieillit plus élégamment qu’un satiné lisse.'],
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
                Notre règle d&apos;intégration est simple : la pergola doit dialoguer avec les{' '}
                <strong className="text-primary font-semibold">menuiseries existantes</strong> plutôt qu&apos;avec la
                façade. Devant une maison de pierre blonde du Libournais, un anthracite franc structure sans concurrencer
                la pierre ; sur un enduit clair et des volets gris, une teinte proche de celle des fenêtres fait
                disparaître l&apos;ouvrage. Selon les gammes, une{' '}
                <strong className="text-primary font-semibold">bicoloration</strong> est possible — sombre à
                l&apos;extérieur, clair à l&apos;intérieur des lames pour renvoyer la lumière sous la terrasse : c&apos;est
                souvent le meilleur des deux mondes.
              </p>
            </section>

            <DuoFigure
              a={{
                src: '/images/source-adefrance/Pergolas-aluminium-Libourne-4.webp',
                w: 768,
                h: 512,
                alt: 'Pergola bioclimatique aluminium anthracite autoportante au bord d’une piscine, lames orientables entrouvertes',
                caption: 'Anthracite : la structure se dessine nettement dans le jardin.',
              }}
              b={{
                src: '/images/source-adefrance/Pergolas-aluminium-Libourne-5.webp',
                w: 768,
                h: 512,
                alt: 'Pergola bioclimatique aluminium blanche adossée à une maison à façade claire, lames orientables',
                caption: 'Teinte claire : le même ouvrage se fait presque oublier sur une façade enduite.',
              }}
            />

            {/* 6. Options */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Stores zip, panneaux, éclairage : les options qui changent l&apos;usage
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ce sont les côtés, pas le toit, qui font passer une pergola de « belle » à « utilisée tous les jours ».
                Quatre familles d&apos;équipements reviennent sur nos chantiers :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Les stores verticaux zippés', 'la toile coulisse dans des rails latéraux, ce qui la tient au vent bien mieux qu’un store banne classique. C’est la réponse la plus efficace au soleil rasant de fin de journée et au vis-à-vis, tout en conservant la vue avec une toile micro-perforée.'],
                  ['Les panneaux coulissants', 'à lames alu pour filtrer, ou vitrés pour couper franchement le vent ; ils se déplacent au fil des saisons et laissent le passage libre l’été.'],
                  ['L’éclairage LED intégré', 'bandeaux logés dans les poutres ou spots orientables : la pergola devient utilisable à la nuit tombée, sans lampadaire ni guirlande rapportée.'],
                  ['Le confort thermique', 'chauffage radiant en hiver, brumisation en canicule : à prévoir dès la conception pour l’alimentation et les fixations, pas à visser après coup.'],
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
                Un point d&apos;honnêteté, car il engage la suite de votre projet :{' '}
                <strong className="text-primary font-semibold">
                  dès qu&apos;on referme entièrement les côtés par des vitrages, on ne parle plus d&apos;une pergola mais
                  d&apos;une véranda.
                </strong>{' '}
                L&apos;usage change (pièce à vivre plutôt qu&apos;espace extérieur abrité), et les conséquences
                réglementaires comme le confort thermique ne s&apos;examinent plus de la même manière : un volume fermé
                et vitré appelle une réflexion sur les surchauffes d&apos;été, le chauffage et, selon les cas, sur les
                règles applicables aux surfaces closes et couvertes. Ce n&apos;est ni mieux ni moins bien, c&apos;est un
                autre ouvrage — autant le savoir avant de commander une structure qui devra l&apos;accueillir.
              </p>
            </section>

            <DuoFigure
              a={{
                src: '/images/realisations/pergola-aluminium-terrasse-bois-libourne-3.webp',
                w: 825,
                h: 1100,
                alt: 'Pergola aluminium anthracite fermée par son store vertical, vue depuis le jardin, à Saint-Pey-de-Castets',
                caption: 'Le store coulisse dans des rails latéraux : il tient au vent et coupe le soleil rasant.',
              }}
              b={{
                src: '/images/realisations/salon-sous-pergola-aluminium-libourne-8.webp',
                w: 825,
                h: 1100,
                alt: 'Salon de jardin installé sous une pergola aluminium, store latéral descendu, sur terrasse bois',
                caption: 'Store descendu en fin de journée : la terrasse reste utilisable quand le soleil tourne.',
              }}
            />

            {/* 7. Urbanisme */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Faut-il une autorisation d&apos;urbanisme pour une pergola bioclimatique ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Oui, dans la plupart des cas, car une pergola bioclimatique est une construction qui crée de{' '}
                <strong className="text-primary font-semibold">l&apos;emprise au sol</strong>. En règle générale : pas de
                formalité en dessous de 5 m² hors secteur protégé, <strong className="text-primary font-semibold"><a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F17578" className={lienInterne} target="_blank" rel="noopener noreferrer">déclaration préalable</a> de 5 à
                20 m²</strong>, et <strong className="text-primary font-semibold"><a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F1986" className={lienInterne} target="_blank" rel="noopener noreferrer">permis de construire</a> au-delà de 20
                m²</strong>. Ces seuils sont le cadre national ; c&apos;est le{' '}
                <strong className="text-primary font-semibold">PLU de votre commune</strong> qui tranche vraiment, et il
                peut être plus exigeant : implantation par rapport aux limites séparatives, hauteur, aspect et teintes
                imposées, règlement de lotissement. En secteur protégé ou aux abords d&apos;un monument historique, une
                déclaration préalable peut être exigée dès le premier mètre carré.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une nuance revient souvent en rendez-vous, celle de la{' '}
                <strong className="text-primary font-semibold"><a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F23263" className={lienInterne} target="_blank" rel="noopener noreferrer">taxe d&apos;aménagement</a></strong>. Elle porte sur la
                création de surface <em>close et couverte</em> : une pergola ouverte sur ses côtés n&apos;entre en
                principe pas dans ce champ, même lames fermées. En revanche, si vous la refermez par des vitrages
                coulissants, elle pourrait basculer du côté des surfaces closes et couvertes, comme une véranda. Comme
                l&apos;appréciation dépend de la configuration exacte et de l&apos;instruction locale, nous invitons
                toujours à faire confirmer le point par le service urbanisme de la mairie plutôt qu&apos;à se fier à une
                règle générale.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Concrètement, nous <strong className="text-primary font-semibold">consultons le PLU et montons le
                dossier</strong> (plans, insertion, notice) avant d&apos;engager le chantier : c&apos;est inclus dans
                notre accompagnement. Pour le détail des formalités selon les surfaces et les cas particuliers, notre
                guide{' '}
                <a href="/blog/autorisation-urbanisme-abri-carport-pergola-2026" className={lienInterne}>
                  quelle autorisation d&apos;urbanisme en 2026 pour un abri, un carport ou une pergola
                </a>{' '}
                reprend l&apos;ensemble des démarches.
              </p>
            </section>

            {/* 8. Budget & entretien */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Budget 2026 et entretien d&apos;une pergola aluminium
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Les fourchettes de marché 2026, pose comprise, se situent le plus souvent entre{' '}
                <strong className="text-primary font-semibold">400 et 900 € du m²</strong> selon la gamme et les
                équipements. En ordres de grandeur :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Environ 2 500 à 4 500 €', 'pour une pergola aluminium d’environ 3 × 3 m à lames orientables manuelles, sans option.'],
                  ['Environ 4 500 à 8 500 €', 'pour un modèle d’environ 4 × 3 m à lames motorisées, avec capteurs de pluie et de vent et éclairage LED intégré.'],
                  ['Au-delà', 'pour les grandes portées et les modules accolés, les stores zip, les panneaux coulissants et les finitions poussées.'],
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
                Ces montants sont des <strong className="text-primary font-semibold">fourchettes de marché, pas un
                tarif</strong> : le prix réel dépend de la portée, du support (dalle existante, plots, reprise de
                terrasse), du raccord en façade, de l&apos;électricité et des options. Deux postes sont régulièrement
                sous-estimés dans les comparaisons : la{' '}
                <strong className="text-primary font-semibold">préparation du support</strong> et l&apos;
                <strong className="text-primary font-semibold">alimentation électrique</strong>. Seul un devis établi
                après relevé sur place nous engage.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                L&apos;entretien, en revanche, est le grand argument de l&apos;aluminium — à condition de ne pas le
                confondre avec « rien à faire » :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Laver les profilés à l’eau savonneuse une à deux fois par an, à l’éponge douce : jamais de produit abrasif, de solvant, ni de nettoyeur haute pression dirigé sur les joints et les articulations.',
                  'Contrôler à l’automne les chéneaux, les descentes intérieures et le trop-plein : une évacuation obstruée par les feuilles est la première cause de débordement lames fermées.',
                  'Dépoussiérer les rails et les coulisses des stores zip, qui s’encrassent plus vite que le reste.',
                  'Vérifier une fois par an les articulations des lames, la visserie et le bon fonctionnement de la motorisation et des capteurs (dont les seuils se règlent souvent après la première saison).',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Aucune remise en peinture périodique, contrairement à un ouvrage bois qu&apos;on entretient pour
                conserver sa teinte : un thermolaquage de qualité tient sa couleur sans intervention. Vous pouvez voir
                comment cela se traduit sur le terrain dans{' '}
                <a href="/realisations" className={lienInterne}>nos réalisations en Gironde</a>, et découvrir notre
                approche des <a href="/pergolas" className={lienInterne}>pergolas bois et aluminium sur mesure</a>, de
                l&apos;étude à la pose.
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
              Pergola bioclimatique aluminium : vos questions
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
              Une pergola réglée sur votre terrasse, pas sur un catalogue
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Une pergola bioclimatique réussie, c&apos;est une structure dimensionnée pour sa portée, une eau qui part
              par les poteaux sans qu&apos;on la voie, une motorisation utile plutôt que bavarde, et des côtés pensés
              pour le soleil de 19 h. Nous vendons et posons le bois comme l&apos;aluminium : nous n&apos;avons donc
              aucun intérêt à vous pousser une matière. C&apos;est le diagnostic que nous menons chez L&apos;Esprit Bois,
              entreprise certifiée Qualibat, à Libourne et dans toute la Gironde, formalités d&apos;urbanisme comprises.
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
