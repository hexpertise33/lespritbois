import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/source-adefrance/IMG-20250129-WA0077-opt.webp';

export const metadata: Metadata = buildMetadata({
  title: "Bureau de jardin en bois : autorisation, isolation et budget",
  description:
    "Bureau de jardin isolé : déclaration préalable, taxe d'aménagement 2026, isolation, électricité et budget poste par poste, par un artisan en Gironde.",
  keywords:
    "bureau de jardin bois, studio de jardin, bureau de jardin Gironde, studio de jardin Libourne, prix bureau de jardin, taxe d'aménagement abri de jardin, bureau de jardin isolé, studio de jardin ossature bois, bureau de jardin autorisation, bureau de jardin Libourne",
  path: '/blog/bureau-jardin-bois-studio-reglementation-budget',
  ogImage: COVER,
  ogTitle: "Bureau de jardin en bois : autorisation, isolation et budget d'une vraie pièce en plus",
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
        name: 'Bureau de jardin en bois',
        item: 'https://lesprit-bois.fr/blog/bureau-jardin-bois-studio-reglementation-budget',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      "Bureau de jardin en bois : autorisation, isolation et budget d'une vraie pièce en plus dans le jardin",
    description:
      "Ce qui coûte cher dans un bureau de jardin, ce n'est pas l'ossature, c'est tout ce qui le rend habitable : isolation, menuiseries, électricité et raccordements. Autorisation d'urbanisme, taxe d'aménagement 2026, confort d'hiver, alimentation d'une construction détachée et budget poste par poste, par un artisan à Libourne (Gironde).",
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
    datePublished: '2026-08-19',
    dateModified: '2026-08-19',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/bureau-jardin-bois-studio-reglementation-budget',
    },
    about: ['bureau de jardin bois', 'studio de jardin', "taxe d'aménagement", 'construction bois'],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Faut-il une autorisation d'urbanisme pour un bureau de jardin ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, dans la quasi-totalité des cas. Un bureau de jardin est une construction close et couverte qui crée de l'emprise au sol : au-delà d'une très petite surface, une déclaration préalable de travaux est due, et un permis de construire au-delà d'un certain seuil. Le PLU de votre commune ajoute ses propres règles : distances aux limites, hauteur, teinte, matériaux. Méfiez-vous des offres qui promettent une installation dispensée de toute formalité : elles décrivent une exception réservée aux très petites surfaces, pas la règle. Nous vérifions le PLU et montons le dossier avant d'engager le chantier.",
        },
      },
      {
        '@type': 'Question',
        name: "Un bureau de jardin est-il soumis à la taxe d'aménagement ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui dès lors qu'il est clos et couvert et qu'il dépasse 5 m² : les constructions de 5 m² ou moins bénéficient d'une exonération permanente. La taxe se calcule sur la surface taxable multipliée par une valeur forfaitaire fixée par l'État — 892 €/m² hors Île-de-France et 1 011 €/m² en Île-de-France depuis le 1er janvier 2026 — puis par les taux votés par la commune et le département. Une pergola ou une tonnelle non close y échappe, quelle que soit sa surface. Le détail figure sur la fiche officielle service-public.gouv.fr.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quel budget prévoir pour un bureau de jardin en bois ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Il faut raisonner poste par poste, pas au mètre carré : préparation du sol et fondations, ossature, couverture et bardage, isolation et finitions intérieures, menuiseries vitrées, électricité par une entreprise qualifiée, chauffage, puis les frais d'urbanisme et la taxe d'aménagement. Sur nos chantiers en 2026, la part « habitabilité » (isolation, menuiseries, électricité, finitions) pèse couramment autant que l'ossature et la couverture réunies. Un bureau isolé et fini relève donc du budget d'une petite extension, pas de celui d'un abri de jardin.",
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on vraiment y travailler en hiver, et en été ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, à condition que le confort ait été traité à la conception et non ajouté après coup. Un petit volume monte et descend vite en température : il faut une enveloppe isolée sur les six faces (plancher compris), une gestion sérieuse de la vapeur d'eau, une ventilation, et surtout une protection solaire sur les grandes baies. L'été est souvent plus difficile à traiter que l'hiver dans un studio très vitré exposé au sud. Un simple chauffage d'appoint dans une coque non isolée ne suffit pas : la facture s'envole et l'humidité s'installe.",
        },
      },
      {
        '@type': 'Question',
        name: "Comment alimenter en électricité un bureau de jardin détaché de la maison ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "L'alimentation d'un bâtiment détaché n'est pas une rallonge : c'est une installation à part entière, avec son propre tableau de protection et une liaison enterrée depuis la maison. Nous ne la réalisons pas nous-mêmes et nous ne conseillons à personne de l'improviser : c'est le métier d'un électricien qualifié. Notre rôle est d'anticiper le passage des réseaux dans le chantier — tranchée, fourreaux, réservations, entrée des gaines — avant que la dalle et le bardage ne soient posés, pour éviter d'avoir à tout rouvrir ensuite.",
        },
      },
      {
        '@type': 'Question',
        name: 'Bureau de jardin indépendant ou extension accolée à la maison ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "L'extension accolée agrandit la maison, partage ses réseaux et son chauffage, mais suppose un chantier contre la façade existante et un raccord technique délicat. Le bureau de jardin, lui, crée une vraie coupure entre vie professionnelle et vie de famille, ne touche pas au bâti existant et se pose vite, mais il doit assurer seul son enveloppe, son alimentation et son confort. Le critère décisif est souvent l'usage : si vous cherchez du silence et une séparation nette, le jardin gagne ; si vous cherchez des mètres carrés dans la continuité de la maison, l'extension gagne.",
        },
      },
      {
        '@type': 'Question',
        name: "Combien de temps entre la décision et la livraison d'un bureau de jardin ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le chantier lui-même est court — quelques semaines pour un volume ossature bois isolé et fini, hors intervention des autres corps de métier. Ce qui allonge le calendrier, c'est l'instruction du dossier d'urbanisme, à laquelle s'ajoute le délai de recours des tiers et d'affichage sur le terrain. C'est pourquoi une déclaration déposée à la rentrée permet en général de travailler dans son bureau avant l'hiver, alors qu'un projet décidé en novembre glisse presque toujours au printemps suivant.",
        },
      },
    ],
  },
];

const comparatif = [
  [
    'Abri de jardin',
    'Ranger, protéger du gel et de la pluie',
    'Ossature simple, non isolée, pas de réseaux',
    "Inutilisable comme pièce de travail dès qu'il fait froid",
  ],
  [
    'Bureau de jardin',
    'Travailler au quotidien, toute l’année',
    'Enveloppe isolée, menuiseries vitrées, électricité, chauffage',
    'Urbanisme et taxe d’aménagement, budget d’une petite construction',
  ],
  [
    'Studio de jardin',
    'Y travailler, y recevoir, parfois y dormir',
    'Tout le précédent + eau, évacuations, sanitaires',
    'Réseaux lourds, PLU plus regardant, budget nettement supérieur',
  ],
  [
    'Extension accolée',
    'Agrandir la maison elle-même',
    'Réseaux et chauffage partagés avec l’existant',
    'Chantier contre la façade, raccords techniques délicats',
  ],
];

const faq = [
  {
    q: "Faut-il une autorisation d'urbanisme pour un bureau de jardin ?",
    r: (
      <>
        Oui, dans la quasi-totalité des cas. Un bureau de jardin est une construction close et couverte qui crée de
        l&apos;emprise au sol : au-delà d&apos;une très petite surface, une déclaration préalable de travaux est due, et
        un permis de construire au-delà d&apos;un certain seuil. Le PLU de votre commune ajoute ses propres règles :
        distances aux limites, hauteur, teinte, matériaux. Méfiez-vous des offres qui promettent une installation
        dispensée de toute formalité : elles décrivent une exception réservée aux très petites surfaces, pas la règle.
        Nous vérifions le PLU et montons le dossier avant d&apos;engager le chantier.
      </>
    ),
  },
  {
    q: "Un bureau de jardin est-il soumis à la taxe d'aménagement ?",
    r: (
      <>
        Oui dès lors qu&apos;il est clos et couvert et qu&apos;il dépasse 5 m² : les constructions de 5 m² ou moins
        bénéficient d&apos;une exonération permanente. La taxe se calcule sur la surface taxable multipliée par une
        valeur forfaitaire fixée par l&apos;État — 892 €/m² hors Île-de-France et 1 011 €/m² en Île-de-France depuis le
        1<sup>er</sup> janvier 2026 — puis par les taux votés par la commune et le département. Une pergola ou une
        tonnelle non close y échappe, quelle que soit sa surface. Le détail figure sur la{' '}
        <a
          href="https://www.service-public.gouv.fr/particuliers/vosdroits/F23263"
          className={lienInterne}
          target="_blank"
          rel="noopener noreferrer"
        >
          fiche officielle service-public.gouv.fr
        </a>
        .
      </>
    ),
  },
  {
    q: 'Quel budget prévoir pour un bureau de jardin en bois ?',
    r: (
      <>
        Il faut raisonner poste par poste, pas au mètre carré : préparation du sol et fondations, ossature, couverture et
        bardage, isolation et finitions intérieures, menuiseries vitrées, électricité par une entreprise qualifiée,
        chauffage, puis les frais d&apos;urbanisme et la taxe d&apos;aménagement. Sur nos chantiers en 2026, la part
        « habitabilité » (isolation, menuiseries, électricité, finitions) pèse couramment autant que l&apos;ossature et
        la couverture réunies. Un bureau isolé et fini relève donc du budget d&apos;une petite extension, pas de celui
        d&apos;un abri de jardin.
      </>
    ),
  },
  {
    q: 'Peut-on vraiment y travailler en hiver, et en été ?',
    r: (
      <>
        Oui, à condition que le confort ait été traité à la conception et non ajouté après coup. Un petit volume monte et
        descend vite en température : il faut une enveloppe isolée sur les six faces (plancher compris), une gestion
        sérieuse de la vapeur d&apos;eau, une ventilation, et surtout une protection solaire sur les grandes baies.
        L&apos;été est souvent plus difficile à traiter que l&apos;hiver dans un studio très vitré exposé au sud. Un
        simple chauffage d&apos;appoint dans une coque non isolée ne suffit pas : la facture s&apos;envole et
        l&apos;humidité s&apos;installe.
      </>
    ),
  },
  {
    q: 'Comment alimenter en électricité un bureau de jardin détaché de la maison ?',
    r: (
      <>
        L&apos;alimentation d&apos;un bâtiment détaché n&apos;est pas une rallonge : c&apos;est une installation à part
        entière, avec son propre tableau de protection et une liaison enterrée depuis la maison. Nous ne la réalisons pas
        nous-mêmes et nous ne conseillons à personne de l&apos;improviser : c&apos;est le métier d&apos;un électricien
        qualifié. Notre rôle est d&apos;anticiper le passage des réseaux dans le chantier — tranchée, fourreaux,
        réservations, entrée des gaines — avant que la dalle et le bardage ne soient posés, pour éviter d&apos;avoir à
        tout rouvrir ensuite.
      </>
    ),
  },
  {
    q: 'Bureau de jardin indépendant ou extension accolée à la maison ?',
    r: (
      <>
        L&apos;extension accolée agrandit la maison, partage ses réseaux et son chauffage, mais suppose un chantier
        contre la façade existante et un raccord technique délicat. Le bureau de jardin, lui, crée une vraie coupure
        entre vie professionnelle et vie de famille, ne touche pas au bâti existant et se pose vite, mais il doit assurer
        seul son enveloppe, son alimentation et son confort. Le critère décisif est souvent l&apos;usage : si vous
        cherchez du silence et une séparation nette, le jardin gagne ; si vous cherchez des mètres carrés dans la
        continuité de la maison, l&apos;extension gagne.
      </>
    ),
  },
  {
    q: "Combien de temps entre la décision et la livraison d'un bureau de jardin ?",
    r: (
      <>
        Le chantier lui-même est court — quelques semaines pour un volume ossature bois isolé et fini, hors intervention
        des autres corps de métier. Ce qui allonge le calendrier, c&apos;est l&apos;instruction du dossier
        d&apos;urbanisme, à laquelle s&apos;ajoute le délai de recours des tiers et d&apos;affichage sur le terrain.
        C&apos;est pourquoi une déclaration déposée à la rentrée permet en général de travailler dans son bureau avant
        l&apos;hiver, alors qu&apos;un projet décidé en novembre glisse presque toujours au printemps suivant.
      </>
    ),
  },
];

export default function ArticleBureauJardinBoisPage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="blog" />
      <main id="contenu">
        {/* Hero */}
        <header className="relative pt-40 pb-24 md:pt-48 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="900"
              height="1200"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Gabarit d'un bureau de jardin : petite construction en ossature bois bardée douglas, grande baie vitrée, chantier à Rauzan (Gironde)"
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
              <span className="text-secondary-fixed">Bureau de jardin en bois</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Bureau de jardin
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Bureau de jardin en bois : autorisation, isolation et budget d&apos;une vraie pièce en plus
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
              <span>19 août 2026</span>
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
                Ce qui coûte cher dans un bureau de jardin, ce n&apos;est pas l&apos;ossature : c&apos;est tout ce qui le
                rend habitable. Isolation, menuiseries, électricité et raccordements.
              </strong>{' '}
              Un abri de jardin devient un bureau le jour où on l&apos;isole et où on l&apos;alimente — et c&apos;est ce
              jour-là, précisément, que l&apos;urbanisme et la taxe d&apos;aménagement s&apos;invitent au projet. Nous
              recevons chaque rentrée des demandes qui commencent par « juste un petit abri aménagé au fond du jardin »
              et qui, une fois le besoin réel posé — y travailler tous les jours, en janvier, sans se geler ni entendre
              la maison —, deviennent une vraie petite construction. Voici, à partir de ce que nous construisons en
              Gironde, ce qui change, ce que la loi exige, et où part réellement l&apos;argent.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1 — Abri, bureau, studio */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Abri, bureau, studio : ce qui change dès qu&apos;on veut y travailler l&apos;hiver
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Les trois mots désignent des ouvrages très différents, et c&apos;est la première source de malentendu sur
                les devis. Un <strong className="text-primary font-semibold">abri de jardin</strong> est une enveloppe
                simple, non isolée, sans réseaux : elle range et elle protège de la pluie. Un{' '}
                <strong className="text-primary font-semibold">bureau de jardin</strong> est une pièce de travail :
                enveloppe isolée, menuiseries vitrées, électricité, chauffage, éclairage. Un{' '}
                <strong className="text-primary font-semibold">studio de jardin</strong> ajoute l&apos;eau et les
                évacuations, donc un point d&apos;eau ou des sanitaires — et un niveau d&apos;exigence encore supérieur,
                côté réseaux comme côté urbanisme.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Le basculement se produit toujours au même endroit : le jour où l&apos;on veut y être{' '}
                <strong className="text-primary font-semibold">au chaud en janvier et au frais en juillet</strong>.
                Voici comment ces quatre familles se situent :
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Ouvrage</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Usage visé</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Ce qu&apos;il embarque</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Ce que ça implique</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparatif.map((ligne, i) => (
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
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6">
                Nous ne refaisons pas ici le travail de nos deux articles voisins : le choix entre kit et sur-mesure pour
                un simple rangement est tranché dans{' '}
                <a href="/blog/abri-jardin-bois-kit-ou-sur-mesure" className={lienInterne}>
                  notre guide de l&apos;abri de jardin en bois
                </a>
                , et la pièce accolée à la maison est traitée dans{' '}
                <a href="/blog/extension-ossature-bois-prix-m2" className={lienInterne}>
                  notre guide de l&apos;extension en ossature bois
                </a>
                . Ce qui suit ne concerne qu&apos;un cas précis : une{' '}
                <strong className="text-primary font-semibold">pièce habitable, isolée et indépendante</strong>, posée
                dans le jardin.
              </p>
            </section>

            <Figure
              src="/images/blog/bureau-jardin-bois-studio-reglementation-budget/bureau-jardin-poste-travail-baie-vitree.jpg"
              w={1200}
              h={800}
              alt="Poste de travail avec ordinateur portable devant une baie vitrée ouverte sur une terrasse en bois et le jardin"
              caption="Le basculement se joue là : un abri range, un bureau se chauffe, s'éclaire, se ventile et s'habite toute l'année."
            />

            {/* 2 — Autorisation */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                L&apos;autorisation : déclaration préalable, permis, et ce que le PLU ajoute
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Disons-le franchement, parce que le web est saturé d&apos;annonces qui prétendent le contraire :{' '}
                <strong className="text-primary font-semibold">
                  un bureau de jardin n&apos;échappe pas à l&apos;urbanisme.
                </strong>{' '}
                C&apos;est une construction close et couverte qui crée de l&apos;emprise au sol. Au-delà d&apos;une très
                petite surface, une{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F17578"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  déclaration préalable de travaux
                </a>{' '}
                est due ; au-delà d&apos;un seuil supérieur, c&apos;est un{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F1986"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  permis de construire
                </a>
                . Les surfaces exactes, le formulaire CERFA et le calcul de l&apos;emprise au sol sont détaillés dans{' '}
                <a href="/blog/autorisation-urbanisme-abri-carport-pergola-2026" className={lienInterne}>
                  notre guide des autorisations d&apos;urbanisme 2026
                </a>{' '}
                : inutile de les répéter ici.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ce que ce guide ne dit pas et qui pèse tout autant, c&apos;est le{' '}
                <strong className="text-primary font-semibold">plan local d&apos;urbanisme</strong>. Le PLU se moque de
                savoir si vous êtes sous ou sur le seuil national : il impose ses propres règles, et c&apos;est très
                souvent lui qui redessine le projet. Sur nos chantiers, ce sont ces quatre points qui reviennent :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  [
                    'La distance aux limites séparatives',
                    'implanter en fond de parcelle contre la clôture du voisin n’est pas toujours permis ; certaines communes imposent un retrait, d’autres l’autorisent sous conditions de hauteur.',
                  ],
                  [
                    'La hauteur et la forme de toiture',
                    'monopente, deux pentes, toiture plate : le PLU peut en imposer une, et plafonner la hauteur au faîtage.',
                  ],
                  [
                    'L’aspect extérieur',
                    'teinte du bardage, nature du bois, couleur de couverture, parfois interdiction d’un bois laissé griser en secteur protégé.',
                  ],
                  [
                    'L’emprise au sol totale et l’imperméabilisation',
                    'un terrain déjà bien bâti peut avoir épuisé son droit à construire, ou imposer un pourcentage de pleine terre.',
                  ],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">
                      check_circle
                    </span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Notre conseil de rentrée est simple :{' '}
                <strong className="text-primary font-semibold">déposez tôt</strong>. L&apos;instruction du dossier,
                l&apos;affichage sur le terrain et le délai de recours des tiers additionnés représentent bien plus de
                temps que la construction elle-même. Un dossier déposé en septembre permet en général de travailler dans
                son bureau avant l&apos;hiver ; le même projet décidé fin novembre glisse au printemps.
              </p>
            </section>

            {/* 3 — Taxe d'aménagement */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                La taxe d&apos;aménagement : le coût qu&apos;on découvre après coup
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est le poste dont personne ne parle au moment du devis, et celui qui provoque le plus de mauvaises
                surprises quelques mois après la fin du chantier. La taxe d&apos;aménagement est due dès qu&apos;une
                autorisation d&apos;urbanisme est délivrée pour une construction{' '}
                <strong className="text-primary font-semibold">close et couverte</strong>. Elle n&apos;a rien à voir avec
                le prix payé à l&apos;entreprise : elle se calcule à partir d&apos;une valeur forfaitaire fixée par
                l&apos;État.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                D&apos;après la{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F23263"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  fiche officielle sur service-public.gouv.fr
                </a>
                ,{' '}
                <strong className="text-primary font-semibold">
                  cette valeur forfaitaire est de 892 €/m² hors Île-de-France et de 1 011 €/m² en Île-de-France depuis le
                  1<sup>er</sup> janvier 2026
                </strong>
                . On multiplie la surface taxable par cette valeur, puis par les taux votés localement : une part
                communale et une part départementale. En Gironde comme ailleurs, ces taux se vérifient auprès de la
                mairie — ils changent d&apos;une commune à l&apos;autre et peuvent être revus par délibération.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Deux points méritent d&apos;être connus avant de dessiner quoi que ce soit :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  [
                    'L’exonération des 5 m² et moins',
                    'toute construction dont la surface taxable ne dépasse pas 5 m² bénéficie d’une exonération permanente. C’est peu — moins qu’un vrai poste de travail confortable — mais c’est bon à savoir pour un local technique annexe.',
                  ],
                  [
                    'Le critère « clos et couvert »',
                    'une annexe n’est taxable que si elle est close et couverte. Une pergola ou une tonnelle non close échappe donc à la taxe d’aménagement, quelle que soit sa surface. Un bureau, par définition, est clos : il est taxable.',
                  ],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">
                      check_circle
                    </span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Notre honnêteté de constructeur nous oblige à le dire : cette taxe ne doit pas décider seule de votre
                projet, mais elle doit figurer dans votre enveloppe dès le premier jour, aux côtés des frais de dossier.
                Chiffrez-la avec votre mairie <em>avant</em> d&apos;arrêter la surface — parfois, un mètre carré de moins
                sur le plan change le régime d&apos;autorisation autant que la note finale.
              </p>
            </section>

            <Figure
              src="/images/ossature-bois-isolation-fibre-gironde.webp"
              w={1200}
              h={900}
              alt="Murs en ossature bois isolés en fibre de bois entre les montants, charpente apparente, chantier en Gironde"
              caption="Un bureau de jardin se construit comme une petite maison : l'enveloppe se joue entre les montants, pas après coup."
            />

            {/* 4 — Isolation, chauffage, confort */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Isolation, chauffage et confort : le vrai écart de prix
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Voilà le cœur du sujet. Deux constructions peuvent avoir la même surface au sol, la même ossature et le
                même bardage, et coûter du simple au double :{' '}
                <strong className="text-primary font-semibold">
                  toute la différence tient à l&apos;enveloppe et aux menuiseries.
                </strong>{' '}
                Un petit volume est un cas thermique ingrat : peu d&apos;inertie, beaucoup de surface déperditive par
                rapport au volume chauffé, et souvent une grande baie vitrée qui fait entrer autant de soleil que de
                lumière.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Concrètement, rendre une annexe habitable suppose de traiter, ensemble et dès la conception :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  [
                    'Les six faces',
                    'murs, toiture et plancher. Le plancher est le plus souvent oublié dans les offres bon marché — c’est pourtant par lui qu’on a froid aux pieds toute la journée d’hiver.',
                  ],
                  [
                    'La gestion de la vapeur d’eau',
                    'une pièce occupée produit de l’humidité. Sans traitement cohérent de l’étanchéité à l’air et de la vapeur, la condensation se loge dans la paroi et abîme l’ouvrage à bas bruit.',
                  ],
                  [
                    'La ventilation',
                    'un bureau fermé, occupé plusieurs heures, a besoin d’un renouvellement d’air. Ouvrir la fenêtre en janvier n’est pas une stratégie de confort.',
                  ],
                  [
                    'Les menuiseries et la protection solaire',
                    'la grande baie fait le charme du bureau de jardin et son principal point faible. Sans débord de toiture, store ou brise-soleil, un studio très vitré exposé au sud devient invivable en été.',
                  ],
                  [
                    'Le chauffage',
                    'il se dimensionne après l’isolation, jamais l’inverse. Un appoint posé dans une coque non isolée coûte cher à l’usage et ne règle rien.',
                  ],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">
                      check_circle
                    </span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nous ne donnons volontairement aucun chiffre de performance dans cet article, et c&apos;est un choix
                assumé : une annexe indépendante non chauffée et un bureau chauffé toute la journée ne relèvent pas du
                même régime, et les exigences applicables dépendent de l&apos;usage déclaré, de la surface et de votre
                commune. Ces points se vérifient au cas par cas auprès du service urbanisme et, pour les projets les plus
                ambitieux, avec un bureau d&apos;études thermiques. Se faire promettre une performance sur une plaquette
                commerciale ne vaut jamais une étude sur votre projet.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/IMG-20240712-WA0039-opt.webp"
              w={825}
              h={1100}
              alt="Grande baie vitrée toute hauteur dans un bardage bois vertical, sous un large débord de toiture, chantier d'extension bois à Génissac (Gironde)"
              caption="La grande baie fait le charme du bureau de jardin — et son point faible en été, sans débord ni protection solaire."
            />

            {/* 5 — Électricité et réseaux */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Électricité et réseaux : alimenter une construction détachée
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un bureau de jardin, c&apos;est un ordinateur, deux écrans, un éclairage, un chauffage, parfois une
                bouilloire et une box. Autrement dit :{' '}
                <strong className="text-primary font-semibold">
                  une installation électrique à part entière, pas une rallonge tirée depuis le garage.
                </strong>{' '}
                Une construction détachée alimentée depuis la maison demande sa propre protection, sa propre liaison
                enterrée et un raccordement fait dans les règles.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Nous posons ici la même limite de métier que partout ailleurs sur ce blog :{' '}
                <strong className="text-primary font-semibold">
                  nous ne décrivons pas la mise en œuvre électrique et nous ne la réalisons pas.
                </strong>{' '}
                Section de conducteur, protections, profondeur de tranchée et grillage avertisseur relèvent d&apos;un
                électricien qualifié, qui engage sa responsabilité sur son ouvrage. Improviser là-dessus, c&apos;est
                exposer sa famille et son assurance.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                En revanche, notre rôle de constructeur est décisif sur le calendrier : tout ce qui traverse le sol, la
                dalle ou la paroi doit être{' '}
                <strong className="text-primary font-semibold">anticipé avant la pose</strong>. Sur nos chantiers, nous
                réservons systématiquement :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Le tracé de la tranchée depuis la maison, décidé avant tout terrassement et repéré sur le plan.',
                  'Les fourreaux en attente, avec un fourreau libre supplémentaire pour un besoin futur (réseau, éclairage extérieur, fibre).',
                  'Le point d’entrée dans le bâtiment, traité pour rester étanche à l’air et à l’eau.',
                  'L’emplacement du tableau, des prises et des points lumineux, arrêté avec vous avant fermeture des parois.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">
                      check_circle
                    </span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Le jour où l&apos;on ajoute l&apos;eau et une évacuation — cas du studio de jardin plutôt que du bureau —
                le projet change encore de dimension : raccordement, pente d&apos;évacuation, mise hors gel. Cela se
                décide au tout début, jamais en cours de chantier.
              </p>
            </section>

            {/* 6 — Ossature, bardage, implantation */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ossature, bardage et implantation dans le jardin
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                L&apos;ossature bois est la technique naturelle pour ce type d&apos;ouvrage : légère, elle demande des
                fondations modestes ; préfabriquée en atelier, elle se monte vite sur le terrain ; et elle loge
                l&apos;isolant dans son épaisseur au lieu de l&apos;ajouter par-dessus. C&apos;est aussi ce qui permet de
                construire au fond d&apos;un jardin sans faire entrer d&apos;engin lourd entre la maison et la clôture.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Côté peau, le bardage bois joue deux rôles : il protège la paroi et il décide de l&apos;allure du
                bâtiment. Le choix de l&apos;essence, du profil et de la finition (bois laissé griser ou saturé) mérite
                d&apos;être fait sérieusement — nous le détaillons dans{' '}
                <a href="/blog/bardage-bois-facade-essences-pose" className={lienInterne}>
                  notre guide du bardage bois en façade
                </a>
                . Retenez surtout ceci : une lame ventilée en sous-face et un soubassement qui éloigne le bois des
                projections d&apos;eau font plus pour la durée de vie qu&apos;un produit de finition coûteux.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                L&apos;implantation, elle, se décide sur le terrain, mètre en main. Quatre critères comptent vraiment :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'L’orientation : une baie plein sud est agréable en hiver et éblouissante en été ; le nord donne la lumière la plus stable pour un écran.',
                  'La distance à la maison : plus elle est courte, moins la tranchée et le trajet quotidien coûtent — mais trop près, on perd la coupure recherchée.',
                  'Le sol et l’eau : un point bas où l’eau stagne se corrige avant de construire, par le terrassement et le drainage, jamais après.',
                  'Le voisinage : vue, ombre portée et bruit se regardent depuis chez le voisin autant que depuis chez soi.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">
                      check_circle
                    </span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Un bureau de jardin appelle presque toujours d&apos;autres ouvrages : un cheminement praticable en hiver,
                une terrasse devant la baie, parfois un claustra pour l&apos;intimité. Nous menons l&apos;ensemble avec
                un seul interlocuteur — voyez nos{' '}
                <a href="/constructions-bois" className={lienInterne}>
                  constructions bois
                </a>{' '}
                et notre approche de l&apos;
                <a href="/amenagement-exterieur" className={lienInterne}>
                  aménagement extérieur
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/bardage-bois-douglas-gironde.webp"
              w={1000}
              h={1333}
              alt="Bardage bois douglas à lames verticales et couvre-joints sur une petite construction annexe, soubassement maçonné, Gironde"
              caption="La ventilation de la lame d'air et le soubassement qui éloigne le bois des projections font plus que la finition."
            />

            {/* 7 — Kit ou sur-mesure, budget, durée de vie */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Kit ou sur-mesure, budget et durée de vie (Libourne, Gironde)
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le débat kit contre sur-mesure est déjà tranché dans{' '}
                <a href="/blog/abri-jardin-bois-kit-ou-sur-mesure" className={lienInterne}>
                  notre guide de l&apos;abri de jardin
                </a>
                , et il se transpose ici avec une nuance de taille : sur un ouvrage isolé et alimenté, le kit ne fait
                qu&apos;une partie du travail. Il livre une coque. Restent la préparation du sol, l&apos;isolation
                complète, les menuiseries, les finitions intérieures, l&apos;électricité et le dossier d&apos;urbanisme —
                c&apos;est-à-dire l&apos;essentiel du coût et la totalité des points où un chantier se rate.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Nous refusons de publier un prix au mètre carré pour un bureau de jardin : ceux qui circulent viennent
                presque tous de catalogues de kits et ne couvrent pas ce qui rend la pièce habitable. Raisonnez plutôt
                poste par poste, comme nous le faisons sur nos chantiers en 2026 :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  [
                    'Préparation du sol et fondations',
                    'plots, longrines ou dalle selon le terrain. Un sol plat et sain coûte peu ; une pente, un remblai ou un sol argileux font grimper ce poste avant même qu’une planche soit posée.',
                  ],
                  [
                    'Ossature, couverture, bardage',
                    'le squelette et la peau. C’est le poste le plus visible, et pourtant rarement celui qui fait exploser un budget.',
                  ],
                  [
                    'Isolation, étanchéité à l’air et finitions intérieures',
                    'parois, plancher, toiture, doublage, sol fini. Poste lourd, invisible une fois terminé, et non négociable si l’on veut y travailler en janvier.',
                  ],
                  [
                    'Menuiseries',
                    'la grande baie vitrée est souvent le premier poste du projet à elle seule. C’est aussi le plus rentable en confort et en lumière.',
                  ],
                  [
                    'Électricité et chauffage',
                    'liaison depuis la maison, tableau, points de commande, appareil de chauffage. À chiffrer par une entreprise qualifiée, en plus de notre lot.',
                  ],
                  [
                    'Urbanisme et taxe d’aménagement',
                    'dossier, éventuel recours à un architecte selon le projet, et la taxe évoquée plus haut. Personne ne l’intègre au budget initial, et tout le monde la paie.',
                  ],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">
                      check_circle
                    </span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                L&apos;ordre de grandeur à retenir, constaté sur nos propres chantiers :{' '}
                <strong className="text-primary font-semibold">
                  la part « habitabilité » — isolation, menuiseries, électricité, finitions — pèse couramment autant que
                  l&apos;ossature, la couverture et le bardage réunis.
                </strong>{' '}
                C&apos;est pourquoi un bureau de jardin isolé et fini se compare au budget d&apos;une petite extension
                bien plus qu&apos;à celui d&apos;un abri de jardin : pour situer les choses, notre article sur{' '}
                <a href="/blog/extension-ossature-bois-prix-m2" className={lienInterne}>
                  le prix au m² d&apos;une extension en ossature bois
                </a>{' '}
                donne des fourchettes documentées, plus proches de la réalité qu&apos;un tarif de catalogue.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Enfin, la durée de vie. Un ouvrage en ossature bois correctement fondé, ventilé et couvert vieillit très
                bien sous le climat girondin — humide l&apos;hiver, chaud et sec l&apos;été. Ce qui tue une annexe de
                jardin, ce n&apos;est presque jamais le bois : c&apos;est l&apos;eau qui remonte d&apos;un sol mal
                préparé, une paroi qui ne respire pas, ou une couverture sans débord. Autour de Libourne, du Libournais
                jusqu&apos;à l&apos;Entre-deux-Mers, nous voyons les mêmes causes revenir. Vous pouvez juger notre façon
                de construire dans{' '}
                <a href="/realisations" className={lienInterne}>
                  nos réalisations en Gironde
                </a>
                .
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
              Bureau de jardin en bois : vos questions
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
              Une vraie pièce en plus, pas un abri déguisé
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Un bureau de jardin réussi, c&apos;est une petite construction traitée comme telle : fondée sérieusement,
              isolée sur ses six faces, alimentée dans les règles, déclarée en mairie et budgétée taxe comprise. C&apos;est
              le projet que nous menons chez L&apos;Esprit Bois, entreprise certifiée Qualibat, à Libourne et dans toute
              la Gironde — de l&apos;étude d&apos;implantation au dossier d&apos;urbanisme, puis du chantier à la
              livraison. Si la déclaration part maintenant, vous travaillez au calme avant l&apos;hiver.
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
