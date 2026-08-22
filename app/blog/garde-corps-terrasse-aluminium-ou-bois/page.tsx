import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER =
  '/images/blog/garde-corps-terrasse-aluminium-ou-bois/garde-corps-aluminium-verre-terrasse-surelevee.jpg';

export const metadata: Metadata = buildMetadata({
  title: "Garde-corps terrasse : aluminium ou bois ? | L'Esprit Bois",
  description:
    "Garde-corps de terrasse en aluminium ou en bois : norme NF P01-012, entretien sur quinze ans, prix au mètre linéaire et ancrage. Le comparatif en Gironde.",
  keywords:
    "garde-corps terrasse aluminium ou bois, garde-corps aluminium Libourne, garde-corps bois terrasse Gironde, norme garde-corps NF P01-012, prix garde-corps terrasse, garde-corps terrasse surélevée, garde-corps verre feuilleté, garde-corps terrasse Gironde",
  path: '/blog/garde-corps-terrasse-aluminium-ou-bois',
  ogImage: COVER,
  ogTitle:
    'Garde-corps de terrasse : aluminium ou bois ? Sécurité, entretien et budget en Gironde',
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
        name: 'Garde-corps de terrasse : aluminium ou bois',
        item: 'https://lesprit-bois.fr/blog/garde-corps-terrasse-aluminium-ou-bois',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      'Garde-corps de terrasse : aluminium ou bois ? Sécurité, entretien et budget en Gironde',
    description:
      "Comparatif de décision entre garde-corps aluminium et garde-corps bois pour une terrasse : ce que dit la norme NF P01-012 révisée en 2024, profilés et remplissages côté aluminium, essences et réparabilité côté bois, entretien sur quinze ans, budget au mètre linéaire posé en Gironde et qualité de l'ancrage.",
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
    datePublished: '2026-08-04',
    dateModified: '2026-08-04',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/garde-corps-terrasse-aluminium-ou-bois',
    },
    about: [
      'garde-corps de terrasse',
      'garde-corps aluminium',
      'garde-corps bois',
      'sécurité terrasse surélevée',
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Garde-corps de terrasse : aluminium ou bois ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "L'aluminium l'emporte dès que la terrasse est haute, exposée au vent, en bord de piscine ou que vous voulez préserver une vue : profilés thermolaqués, remplissage en verre feuilleté ou barreaudage fin, et un entretien réduit à un lavage. Le bois l'emporte quand le garde-corps doit prolonger une terrasse en bois, s'inscrire dans une maison de pierre girondine ou suivre une géométrie particulière : il se fabrique sur mesure et se répare pièce par pièce. Nous posons les deux et tranchons selon la hauteur, l'exposition et l'usage réel.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quelle hauteur minimale pour un garde-corps de terrasse ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La hauteur minimale de référence est de 1 mètre, et la révision de la norme NF P01-012 publiée le 22 novembre 2024 ne l'a pas modifiée. Ce qui a changé porte sur les ouvertures, ramenées à 11 cm de diamètre maximum, et sur le gabarit anti-escalade. La version applicable à votre projet dépend de sa nature et de sa date : faites-la confirmer par votre poseur ou par le service urbanisme de votre mairie.",
        },
      },
      {
        '@type': 'Question',
        name: "Qu'est-ce qui a changé avec la révision 2024 de la norme NF P01-012 ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La norme NF P01-012 « Dimensions des garde-corps » a été révisée et publiée le 22 novembre 2024, remplaçant la version de 1988. La hauteur minimale d'un mètre reste inchangée. Le diamètre des ouvertures est ramené à 11 cm maximum et le gabarit anti-escalade est revu, à la suite de tests menés sur 200 enfants de 3 à 11 ans qui franchissaient en moins de cinq secondes des garde-corps conformes à la version de 1988. L'objectif affiché est de ralentir l'escalade, pas de la rendre impossible. L'applicabilité intervient six mois après la publication, soit en juin 2025, et concerne la construction neuve.",
        },
      },
      {
        '@type': 'Question',
        name: 'Un garde-corps est-il obligatoire sur une terrasse en bois sur plots ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Tout dépend de la hauteur de chute. Une terrasse posée sur plots de quelques centimètres, de plain-pied avec le jardin, ne présente pas de risque de chute et ne demande pas de garde-corps. Dès que le plancher est franchement surélevé au-dessus du terrain naturel, qu'il s'agit d'un plancher en étage ou qu'il surplombe un dénivelé, la protection devient nécessaire. Le cas limite se juge sur place : nous mesurons la hauteur réelle avant de conclure.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quel budget pour un garde-corps de terrasse posé en Gironde ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Sur nos chantiers en Gironde, un garde-corps bois sur mesure se situe le plus souvent autour de 150 à 350 € le mètre linéaire posé, un garde-corps aluminium à barreaudage autour de 250 à 500 €, et un garde-corps aluminium à remplissage en verre feuilleté nettement au-dessus, souvent de 450 à 900 €. Ce sont des ordres de grandeur constatés, pas un tarif : la hauteur, le type d'ancrage et l'accès au chantier font varier la note. Seul un devis après relevé sur place engage.",
        },
      },
      {
        '@type': 'Question',
        name: 'Verre feuilleté, barreaudage ou câbles inox : quel remplissage choisir ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le verre feuilleté préserve la vue et coupe le vent, mais il se salit, demande un nettoyage régulier et coûte le plus cher. Le barreaudage vertical est la valeur sûre : il laisse passer l'air, ne retient pas la saleté et n'offre pas de prise à l'escalade, contrairement aux lignes horizontales qui font échelle pour un enfant. Les câbles inox donnent un rendu léger et contemporain, à condition d'une tension maîtrisée et de montants dimensionnés pour la reprendre.",
        },
      },
    ],
  },
];

const comparatif = [
  [
    'Entretien courant',
    'Lavage à l’eau savonneuse, une à deux fois par an',
    'Nettoyage, puis saturateur ou lasure à renouveler périodiquement',
  ],
  [
    'Vieillissement visible',
    'Teinte RAL stable ; le thermolaquage peut ternir en ambiance marine',
    'Grisaillement naturel si on ne réapplique rien, sans perte de solidité immédiate',
  ],
  [
    'Réparation',
    'Remplacement d’un module ou d’un remplissage complet',
    'Remplacement d’un barreau ou d’une lisse, pièce par pièce',
  ],
  [
    'Point de vigilance',
    'Fixations et étanchéité des platines, contact avec d’autres métaux',
    'Pieds de montants et zones qui retiennent l’eau, fixations inox',
  ],
  [
    'Coût sur quinze ans',
    'Investissement plus élevé au départ, entretien quasi nul ensuite',
    'Ticket d’entrée plus bas, entretien régulier à budgéter',
  ],
];

const faq = [
  {
    q: 'Garde-corps de terrasse : aluminium ou bois ?',
    r: (
      <>
        L&apos;aluminium l&apos;emporte dès que la terrasse est haute, exposée au vent, en bord de piscine ou que vous
        voulez préserver une vue : profilés thermolaqués, remplissage en verre feuilleté ou barreaudage fin, et un
        entretien réduit à un lavage. Le bois l&apos;emporte quand le garde-corps doit prolonger une terrasse en bois,
        s&apos;inscrire dans une maison de pierre girondine ou suivre une géométrie particulière : il se fabrique sur
        mesure et se répare pièce par pièce. Nous posons les deux et tranchons selon la hauteur, l&apos;exposition et
        l&apos;usage réel.
      </>
    ),
  },
  {
    q: 'Quelle hauteur minimale pour un garde-corps de terrasse ?',
    r: (
      <>
        La hauteur minimale de référence est de 1 mètre, et la révision de la norme NF P01-012 publiée le 22 novembre
        2024 ne l&apos;a pas modifiée. Ce qui a changé porte sur les ouvertures, ramenées à 11 cm de diamètre maximum, et
        sur le gabarit anti-escalade. La version applicable à votre projet dépend de sa nature et de sa date : faites-la
        confirmer par votre poseur ou par le service urbanisme de votre mairie.
      </>
    ),
  },
  {
    q: "Qu'est-ce qui a changé avec la révision 2024 de la norme NF P01-012 ?",
    r: (
      <>
        La norme NF P01-012 « Dimensions des garde-corps » a été révisée et publiée le 22 novembre 2024, remplaçant la
        version de 1988. La hauteur minimale d&apos;un mètre reste inchangée. Le diamètre des ouvertures est ramené à
        11 cm maximum et le gabarit anti-escalade est revu, à la suite de tests menés sur 200 enfants de 3 à 11 ans qui
        franchissaient en moins de cinq secondes des garde-corps conformes à la version de 1988. L&apos;objectif affiché
        est de ralentir l&apos;escalade, pas de la rendre impossible. L&apos;applicabilité intervient six mois après la
        publication, soit en juin 2025, et concerne la construction neuve.
      </>
    ),
  },
  {
    q: 'Un garde-corps est-il obligatoire sur une terrasse en bois sur plots ?',
    r: (
      <>
        Tout dépend de la hauteur de chute. Une terrasse posée sur plots de quelques centimètres, de plain-pied avec le
        jardin, ne présente pas de risque de chute et ne demande pas de garde-corps. Dès que le plancher est franchement
        surélevé au-dessus du terrain naturel, qu&apos;il s&apos;agit d&apos;un plancher en étage ou qu&apos;il surplombe
        un dénivelé, la protection devient nécessaire. Le cas limite se juge sur place : nous mesurons la hauteur réelle
        avant de conclure.
      </>
    ),
  },
  {
    q: 'Quel budget pour un garde-corps de terrasse posé en Gironde ?',
    r: (
      <>
        Sur nos chantiers en Gironde, un garde-corps bois sur mesure se situe le plus souvent autour de 150 à 350 € le
        mètre linéaire posé, un garde-corps aluminium à barreaudage autour de 250 à 500 €, et un garde-corps aluminium à
        remplissage en verre feuilleté nettement au-dessus, souvent de 450 à 900 €. Ce sont des ordres de grandeur
        constatés, pas un tarif : la hauteur, le type d&apos;ancrage et l&apos;accès au chantier font varier la note.
        Seul un devis après relevé sur place engage.
      </>
    ),
  },
  {
    q: 'Verre feuilleté, barreaudage ou câbles inox : quel remplissage choisir ?',
    r: (
      <>
        Le verre feuilleté préserve la vue et coupe le vent, mais il se salit, demande un nettoyage régulier et coûte le
        plus cher. Le barreaudage vertical est la valeur sûre : il laisse passer l&apos;air, ne retient pas la saleté et
        n&apos;offre pas de prise à l&apos;escalade, contrairement aux lignes horizontales qui font échelle pour un
        enfant. Les câbles inox donnent un rendu léger et contemporain, à condition d&apos;une tension maîtrisée et de
        montants dimensionnés pour la reprendre.
      </>
    ),
  },
];

export default function ArticleGardeCorpsTerrassePage() {
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
              alt="Garde-corps de terrasse surélevée en aluminium à remplissage en verre, sur une terrasse contemporaine en bois"
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
              <span className="text-secondary-fixed">Garde-corps de terrasse</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Aluminium &amp; bois
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Garde-corps de terrasse : aluminium ou bois ? Sécurité, entretien et budget en Gironde
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
              <span>4 août 2026</span>
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
                Choisissez l&apos;aluminium dès que la terrasse est haute, exposée au vent ou au bord d&apos;un bassin,
                et quand vous voulez préserver une vue : profilés thermolaqués, remplissage en verre feuilleté ou
                barreaudage fin, entretien réduit à un lavage. Choisissez le bois quand le garde-corps doit prolonger
                une terrasse en bois, s&apos;inscrire dans une maison girondine en pierre ou suivre une géométrie
                particulière : il se dessine sur mesure et se répare pièce par pièce.
              </strong>{' '}
              Nous vendons et posons les deux matières, donc nous n&apos;avons aucun intérêt à en pousser une : ce qui
              nous fait trancher sur le terrain, c&apos;est la hauteur de chute, l&apos;exposition, la présence
              d&apos;enfants et la façon dont l&apos;ouvrage pourra être ancré. Car le vrai point de rupture d&apos;un
              garde-corps n&apos;est presque jamais sa matière : c&apos;est sa fixation. Voici comment décider.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Quand un garde-corps devient-il indispensable */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Quand un garde-corps devient-il indispensable sur une terrasse ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un garde-corps n&apos;est pas un élément de décoration : c&apos;est un{' '}
                <strong className="text-primary font-semibold">dispositif de protection contre les chutes de
                hauteur</strong>. Il ne se pose donc pas partout, mais il devient incontournable dans quatre situations
                que nous rencontrons sans arrêt en Gironde :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['La terrasse surélevée', 'plancher porté par des plots hauts, des poteaux ou un vide sanitaire, avec un décalage franc entre le niveau de la terrasse et le terrain naturel.'],
                  ['Le plancher en étage', 'terrasse accessible à l’étage, balcon, toit-terrasse : la chute est immédiate et sans obstacle.'],
                  ['Le dénivelé de terrain', 'très fréquent sur les parcelles en pente du Libournais : la terrasse est de plain-pied côté maison et surplombe le jardin de l’autre.'],
                  ['La plage de piscine en surplomb', 'quand le bassin ou la plage domine un talus, un mur de soutènement ou un escalier.'],
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
                À l&apos;inverse, une terrasse posée sur plots de quelques centimètres, de plain-pied avec la pelouse, ne
                relève pas du sujet : il n&apos;y a pas de hauteur de chute. Entre les deux, le cas limite se juge{' '}
                <strong className="text-primary font-semibold">mètre en main, devant l&apos;ouvrage</strong>, et pas sur
                un plan.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Une confusion revient souvent en rendez-vous : garde-corps et clôture ne sont pas la même chose. Une
                clôture délimite une propriété et gère le vis-à-vis ; un garde-corps retient un corps qui bascule et doit
                encaisser un effort horizontal en tête. Les exigences de résistance, de remplissage et de fixation
                n&apos;ont rien à voir. Une lisse de clôture reprise sur un poteau planté ne fera jamais un garde-corps,
                même si elle en a la hauteur.
              </p>
            </section>

            {/* 2. La norme */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce que dit la norme NF P01-012, révisée en 2024
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La norme de référence sur le sujet est la{' '}
                <strong className="text-primary font-semibold">NF P01-012 « Dimensions des garde-corps »</strong>. Elle
                a été révisée et publiée le 22 novembre 2024, remplaçant une version qui datait de 1988 —{' '}
                <a
                  href="https://www.afnor.org/actualites/sante-securite-travail/garde-corps-norme-mieux-proteger-enfants/"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  l&apos;AFNOR détaille cette révision
                </a>
                . Autant dire que la référence en vigueur avait plus de trente-cinq ans.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Trois points méritent d&apos;être connus avant de commander quoi que ce soit :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['La hauteur minimale d’un mètre ne change pas', 'c’est le seul chiffre que tout le monde connaît, et la révision ne l’a pas touché.'],
                  ['Le diamètre des ouvertures est ramené à 11 cm maximum', 'c’est-à-dire l’espace libre que peut laisser un remplissage entre deux éléments.'],
                  ['Le gabarit anti-escalade est revu', 'à la suite de tests menés sur 200 enfants de 3 à 11 ans, qui franchissaient en moins de cinq secondes des garde-corps pourtant conformes à la version de 1988. L’objectif affiché est de ralentir l’escalade, pas de la rendre impossible.'],
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
                L&apos;applicabilité de cette version révisée intervient six mois après sa publication, soit en{' '}
                <strong className="text-primary font-semibold">juin 2025</strong>, et vise la construction neuve. Pour un
                garde-corps ajouté sur une terrasse existante, la situation demande d&apos;être regardée cas par cas :{' '}
                <strong className="text-primary font-semibold">
                  faites confirmer la version applicable à votre projet par votre poseur ou par votre mairie
                </strong>{' '}
                plutôt que de vous fier à un article de blog, celui-ci compris.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Retenez surtout l&apos;esprit du texte, qui vaut pour toutes les matières : ce qui protège vraiment un
                enfant, ce n&apos;est pas la hauteur seule, c&apos;est l&apos;absence de prise pour grimper et
                l&apos;absence d&apos;ouverture où passer. Un garde-corps d&apos;un mètre dix avec trois lisses
                horizontales bien espacées reste une échelle. C&apos;est exactement ce que la révision cherche à
                corriger, et c&apos;est ce qui doit guider votre choix de remplissage, en aluminium comme en bois.
              </p>
            </section>

            <Figure
              src="/images/blog/garde-corps-terrasse-aluminium-ou-bois/garde-corps-barreaudage-vertical-rive-terrasse.jpg"
              w={1200}
              h={646}
              alt="Garde-corps de terrasse à barreaudage vertical serré en rive de plancher bois, dans l'esprit de la norme NF P01-012"
              caption="Une ouverture se contrôle au gabarit, pas à l'œil : c'est le diamètre qui passe entre deux barreaux qui compte, et non l'entraxe annoncé sur le devis."
            />

            {/* 3. Aluminium */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le garde-corps en aluminium : profilés, thermolaquage et remplissages
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un garde-corps aluminium se compose de{' '}
                <strong className="text-primary font-semibold">profilés extrudés</strong> — montants, main courante,
                lisse basse — assemblés mécaniquement et recevant un remplissage. L&apos;alliage employé et
                l&apos;épaisseur des profilés font toute la différence entre un ensemble rigide et un ensemble qui vibre
                sous la main : c&apos;est le premier point à comparer entre deux devis, bien avant la teinte.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La finition se fait par{' '}
                <strong className="text-primary font-semibold">thermolaquage</strong>, une poudre polymérisée au four,
                déclinable dans toute la palette{' '}
                <strong className="text-primary font-semibold">RAL</strong> : gris anthracite pour un rendu
                contemporain, teintes sable ou bronze pour s&apos;accorder à une façade en pierre. La qualité tient
                moins à la couleur qu&apos;à la préparation de surface avant laquage — et en Gironde, si le projet se
                situe près de l&apos;estuaire ou du littoral, demandez explicitement une préparation adaptée à
                l&apos;ambiance marine : l&apos;air salin est bien plus agressif pour un revêtement que la pluie.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Le remplissage décide ensuite du caractère de l&apos;ouvrage :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le verre feuilleté', 'préserve intégralement la vue et coupe le vent, ce qui change tout sur une terrasse exposée. En contrepartie, il se salit, il se voit quand il est sale, et c’est le remplissage le plus cher.'],
                  ['Le barreaudage vertical', 'la valeur sûre : il laisse passer l’air, ne retient pas les salissures, ne fait pas prise à l’escalade et se nettoie tout seul sous la pluie.'],
                  ['Les lames pleines ou orientables', 'quand on cherche aussi une occultation partielle, par exemple sur une terrasse en vis-à-vis. Attention au comportement au vent : plus on ferme, plus on prend.'],
                  ['Les câbles inox tendus', 'un rendu léger et marin, à condition d’une tension maîtrisée et de montants dimensionnés pour la reprendre dans la durée.'],
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
                Deux détails que nous surveillons systématiquement : la nature des visseries et des pièces de contact,
                pour éviter les couples de métaux qui se dégradent l&apos;un l&apos;autre, et le traitement de
                l&apos;étanchéité au droit de chaque platine. C&apos;est la même exigence que sur une{' '}
                <a href="/pergolas" className={lienInterne}>
                  pergola aluminium
                </a>{' '}
                : la matière ne rouille pas, mais l&apos;eau qui entre par un perçage mal traité, elle, fait des dégâts
                sous la terrasse.
              </p>
            </section>

            <Figure
              src="/images/blog/garde-corps-terrasse-aluminium-ou-bois/profiles-aluminium-thermolaques-garde-corps.jpg"
              w={1200}
              h={646}
              alt="Profilés thermolaqués teinte anthracite d'un garde-corps aluminium : main courante, barreaudage et lisse basse"
              caption="Sur un ouvrage laqué, regardez la jonction entre barreau et lisse : un assemblage net et une arête franche trahissent une bonne préparation avant mise en peinture."
            />

            {/* 4. Bois */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le garde-corps en bois : chaleur, sur-mesure et réparabilité
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le bois garde trois avantages qu&apos;aucun profilé ne lui prendra : il est{' '}
                <strong className="text-primary font-semibold">chaleureux au toucher comme à l&apos;œil</strong>, il se
                fabrique en atelier à la dimension exacte de l&apos;ouvrage — y compris sur une terrasse biscornue, un
                angle non droit ou un limon d&apos;escalier — et il se répare{' '}
                <strong className="text-primary font-semibold">pièce par pièce</strong> : un barreau abîmé se remplace,
                une lisse fatiguée se change, sans toucher au reste.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un garde-corps est un ouvrage exposé sur toutes ses faces, souvent en plein soleil et en plein vent :
                l&apos;essence se choisit donc pour sa durabilité face aux intempéries, sur les mêmes critères que ceux
                documentés par{' '}
                <a href="https://www.fcba.fr/" className={lienInterne} target="_blank" rel="noopener noreferrer">
                  l&apos;institut technologique FCBA
                </a>
                . En Gironde, nous travaillons volontiers le douglas et le mélèze, très bon rapport durabilité-prix en
                résineux local, et le chêne sur les projets qui veulent du feuillu noble. Notre article sur{' '}
                <a href="/blog/quel-bois-pour-terrasse-exterieure" className={lienInterne}>
                  le choix du bois pour une terrasse
                </a>{' '}
                détaille ces essences, leur classe d&apos;emploi et leurs fourchettes de prix.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Côté conception, trois règles nous évitent la quasi-totalité des désordres que nous constatons sur les
                garde-corps bois vieillissants : des{' '}
                <strong className="text-primary font-semibold">sections de montants généreuses</strong>, parce que
                c&apos;est le montant qui reprend l&apos;effort et non le remplissage ; des{' '}
                <strong className="text-primary font-semibold">arêtes et des assemblages qui ne retiennent pas
                l&apos;eau</strong>, avec des pentes et des jeux pour que tout sèche ; et des{' '}
                <strong className="text-primary font-semibold">fixations inox</strong>, jamais d&apos;acier zingué qui
                coule et tache le bois au premier hiver.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Reste l&apos;entretien, qu&apos;il faut assumer honnêtement : sans rien faire, un bois durable grise et
                continue de tenir, mais l&apos;aspect change. Pour conserver la teinte d&apos;origine, on applique un
                saturateur ou une lasure à renouveler périodiquement — un ouvrage vertical s&apos;entretient beaucoup
                plus vite qu&apos;un platelage, mais il faut le faire. Si vous savez d&apos;avance que vous ne le ferez
                pas, dites-le nous : nous vous orienterons vers l&apos;aluminium sans discuter.
              </p>
            </section>

            <Figure
              src="/images/blog/garde-corps-terrasse-aluminium-ou-bois/garde-corps-bois-terrasse-bois-surelevee.jpg"
              w={1200}
              h={646}
              alt="Garde-corps bois à montants et barreaudage vertical bordant une terrasse en bois surélevée"
              caption="Montants, lisse haute et lisse basse encadrent le barreaudage : c'est ce cadre, et non les barreaux, qui reprend l'effort et fixe la section de bois à commander."
            />

            {/* 5. Entretien et vieillissement */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Entretien et vieillissement sur quinze ans : le vrai comparatif de coût
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Comparer deux devis le jour de la signature ne dit pas grand-chose. Un garde-corps se juge sur la durée,
                et c&apos;est là que les deux matières divergent vraiment : l&apos;aluminium coûte plus cher à
                l&apos;achat et presque rien ensuite, le bois coûte moins cher à l&apos;achat et demande une attention
                régulière. Voici comment cela se traduit concrètement :
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Critère</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Aluminium</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Bois</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparatif.map((ligne, i) => (
                      <tr key={ligne[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}>
                        <td className="px-4 py-3 text-primary font-semibold">{ligne[0]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6">
                Le raisonnement est exactement le même que celui que nous détaillons dans notre{' '}
                <a href="/blog/carport-aluminium-ou-bois-comparatif" className={lienInterne}>
                  comparatif carport aluminium ou bois
                </a>{' '}
                : l&apos;aluminium achète de la tranquillité, le bois achète de la chaleur et de la réparabilité. Aucune
                des deux matières n&apos;est « meilleure » dans l&apos;absolu — mais sur un ouvrage aussi exposé
                qu&apos;un garde-corps, la question « qui va l&apos;entretenir, et à quelle fréquence ? » pèse plus lourd
                que sur n&apos;importe quel autre élément du jardin.
              </p>
            </section>

            <Figure
              src="/images/blog/garde-corps-terrasse-aluminium-ou-bois/garde-corps-bois-grise-vieillissement.jpg"
              w={1200}
              h={646}
              alt="Main courante et lisse d'un garde-corps bois grisées par les intempéries après plusieurs saisons sans finition"
              caption="Le gris apparaît d'abord sur les faces horizontales, les plus exposées à la pluie et aux UV : c'est là que se juge l'état réel d'un garde-corps bois, pas sur ses montants."
            />

            {/* 6. Budget */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Budget posé en Gironde : à quoi s&apos;attendre au mètre linéaire
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un garde-corps se chiffre au{' '}
                <strong className="text-primary font-semibold">mètre linéaire posé</strong>. Voici les ordres de grandeur
                que nous constatons sur nos chantiers en Gironde, à Libourne et alentour — ce sont des repères pour
                cadrer un projet, pas un tarif :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Garde-corps bois sur mesure', 'de l’ordre de 150 à 350 € le mètre linéaire posé, selon l’essence, la section des montants et le dessin du remplissage.'],
                  ['Garde-corps aluminium à barreaudage', 'de l’ordre de 250 à 500 € le mètre linéaire posé, selon l’épaisseur des profilés, la teinte RAL et la hauteur.'],
                  ['Garde-corps aluminium à remplissage verre feuilleté', 'nettement au-dessus, souvent de 450 à 900 € le mètre linéaire posé : le vitrage et sa mise en œuvre dominent le prix.'],
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
                Trois postes font sortir un projet de ces fourchettes : la{' '}
                <strong className="text-primary font-semibold">nature de l&apos;ancrage</strong> (une reprise de
                structure ou une étanchéité à refaire change complètement la donne), l&apos;
                <strong className="text-primary font-semibold">accès au chantier</strong> — une terrasse en étage ou en
                fond de parcelle se travaille plus lentement — et le{' '}
                <strong className="text-primary font-semibold">développé réel</strong>, c&apos;est-à-dire les angles, les
                retours et les portillons, qui coûtent plus cher qu&apos;une longue ligne droite.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Un mot d&apos;urbanisme : ajouter un garde-corps modifie l&apos;aspect extérieur d&apos;une construction,
                et selon votre PLU et le contexte (secteur protégé, lotissement à règlement propre), une{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F17578"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  déclaration préalable de travaux
                </a>{' '}
                peut être demandée, en particulier si la terrasse surélevée elle-même est à créer. Nous vérifions ce
                point avec la mairie avant d&apos;engager le chantier plutôt que de vous annoncer un seuil qui ne
                s&apos;appliquerait pas chez vous.
              </p>
            </section>

            {/* 7. Pose et ancrage */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Pose et ancrage : le point qui fait échouer la plupart des garde-corps
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Voilà le passage à lire deux fois.{' '}
                <strong className="text-primary font-semibold">
                  Un garde-corps ne cède pratiquement jamais par sa main courante ou son remplissage : il cède par ses
                  fixations.
                </strong>{' '}
                L&apos;effort à reprendre est horizontal, appliqué en tête, à un mètre du point d&apos;appui : chaque
                poussée devient un bras de levier considérable sur la platine. Un ouvrage magnifique vissé dans un
                support qui ne tient pas est un ouvrage dangereux.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Deux familles de pose, deux logiques :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['La fixation en platine, sur le dessus du plancher', 'simple à mettre en œuvre et facile à contrôler, mais elle mange quelques centimètres de terrasse et impose de percer le plancher — donc de traiter chaque perçage.'],
                  ['La fixation en applique, en rive', 'le garde-corps se fixe sur la face verticale du nez de dalle ou de la structure. On ne perd pas de surface et l’effort est mieux repris, à condition que la rive soit saine et suffisamment épaisse.'],
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
                Sur un plancher étanché — toit-terrasse, terrasse au-dessus d&apos;un volume habité — chaque perçage
                traverse une membrane. C&apos;est le scénario le plus délicat : l&apos;infiltration ne se voit pas
                immédiatement, elle se découvre par une tache au plafond, deux ans plus tard. Là, la fixation en applique
                ou un dispositif conçu pour ne pas percer l&apos;étanchéité est souvent la bonne réponse ; le choix se
                fait après avoir identifié la nature exacte du complexe en place.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Cas particulier, très fréquent chez nous : la{' '}
                <strong className="text-primary font-semibold">terrasse bois sur plots</strong>. La règle absolue est
                qu&apos;un garde-corps ne se fixe{' '}
                <strong className="text-primary font-semibold">jamais sur les lames de platelage</strong>, ni sur une
                lambourde simplement posée : ce sont des éléments flottants, prévus pour reprendre une charge verticale,
                pas un effort horizontal. Les montants doivent descendre jusqu&apos;à la structure porteuse ou traverser
                le platelage pour être ancrés en dessous. C&apos;est pour cette raison que nous préférons intégrer le
                garde-corps dès la conception de la terrasse : notre article sur la{' '}
                <a href="/blog/terrasse-bois-structure-plots-lambourdes" className={lienInterne}>
                  structure d&apos;une terrasse en bois
                </a>{' '}
                explique ce qui se passe sous les lames, et donc ce sur quoi il est possible de s&apos;ancrer.
              </p>
            </section>

            <Figure
              src="/images/blog/garde-corps-terrasse-aluminium-ou-bois/fixation-applique-garde-corps-inox.jpg"
              w={1200}
              h={646}
              alt="Fixation en applique d'une main courante inox sur son support : détail du point d'ancrage d'un garde-corps"
              caption="Tout se joue ici : c'est le support et sa fixation qui encaissent l'effort, pas la main courante. Une seule patte mal scellée annule la résistance de l'ensemble."
            />

            {/* 8. Verdict */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Notre verdict, cas par cas
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Nous vendons et posons les deux matières, donc voici notre avis franc, sans match nul :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Terrasse surélevée très exposée, vue à préserver', 'aluminium, sans hésiter. Profilés thermolaqués et remplissage en verre feuilleté : vous coupez le vent, vous gardez le paysage, et un ouvrage haut, difficile d’accès pour l’entretien, doit être celui qu’on entretient le moins.'],
                  ['Terrasse en bois, ambiance chaleureuse, hauteur modérée', 'bois. Le garde-corps prolonge le platelage, vieillit avec lui et se répare pièce par pièce. Une solution mixte fonctionne aussi très bien : montants et main courante en bois, remplissage en câbles inox ou en barreaudage aluminium.'],
                  ['Bord de piscine', 'aluminium. Entre les projections d’eau, les UV du plein sud, les crèmes solaires et les pieds mouillés, un ouvrage qui se rince au jet et ne demande aucune reprise de finition est objectivement plus adapté. Nous restons attentifs à la qualité de la visserie en ambiance chlorée.'],
                  ['Maison girondine en pierre', 'ça dépend du dessin. Un barreaudage aluminium fin en teinte sable ou bronze disparaît devant la pierre et respecte la façade ; un garde-corps bois en chêne, dessiné dans l’esprit du bâti, s’y intègre tout aussi bien. Ici, c’est la cohérence architecturale qui tranche, pas la technique.'],
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
                Un cas mérite d&apos;être signalé à part : celui de la plage de piscine bordée d&apos;un dénivelé, où le
                garde-corps se conçoit en même temps que le platelage et le raccord aux margelles. Nous le détaillons
                dans notre guide sur la{' '}
                <a href="/blog/plage-piscine-bois-essences-pose" className={lienInterne}>
                  plage de piscine en bois
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Dans tous les cas, la matière se choisit après la question de l&apos;ancrage, jamais avant. Vous pouvez
                voir comment cela se traduit sur nos chantiers dans{' '}
                <a href="/realisations" className={lienInterne}>
                  nos réalisations en Gironde
                </a>
                , et découvrir notre approche globale de l&apos;
                <a href="/amenagement-exterieur" className={lienInterne}>
                  aménagement extérieur
                </a>
                , terrasse, garde-corps et abords menés par un seul interlocuteur.
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
              Garde-corps de terrasse : vos questions
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
              Un garde-corps qui tient, dans la matière qui vous ressemble
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Aluminium ou bois, un garde-corps réussi est d&apos;abord un garde-corps correctement ancré, dimensionné
              pour l&apos;effort qu&apos;il doit reprendre et pensé pour ne pas offrir de prise à un enfant. Nous posons
              les deux matières et nous vous dirons franchement laquelle convient à votre terrasse, après avoir mesuré
              la hauteur et regardé sur quoi il est possible de fixer. C&apos;est le diagnostic que nous menons chez
              L&apos;Esprit Bois, entreprise certifiée Qualibat, à Libourne et dans toute la Gironde.
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
