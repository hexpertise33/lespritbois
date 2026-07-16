import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/pool-house-bois-terrasse-piscine-libourne.webp';

export const metadata: Metadata = buildMetadata({
  title: "Pool-house bois : réglementation, usages et budget 2026 | L'Esprit Bois",
  description:
    "Quelle autorisation pour un pool-house en 2026 ? Seuils 5/20 m², primauté du PLU, usages réels, implantation, matériaux et budget : le guide d'un artisan en Gironde.",
  keywords:
    "pool house bois, pool house bois Gironde, pool house Libourne, réglementation pool house 2026, permis de construire pool house, prix pool house bois, pool house piscine, déclaration préalable pool house, local technique piscine bois",
  path: '/blog/pool-house-bois-guide',
  ogImage: COVER,
  ogTitle: 'Pool-house en bois : réglementation, usages et budget 2026',
  ville: 'Libourne',
});

const lienInterne =
  'text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors';

// `cadrage` sert aux photos natives en portrait : elles sont recadrées sur le
// même bandeau 3:2 que les autres pour ne pas écraser le texte, en gardant le
// sujet dans le champ (haut pour un volume bâti, bas pour une plage de bassin).
function Figure({
  src,
  alt,
  caption,
  cadrage = 'object-center',
}: {
  src: string;
  alt: string;
  caption: string;
  cadrage?: string;
}) {
  return (
    <figure className="-mx-6 md:-mx-16">
      <img
        loading="lazy"
        decoding="async"
        width="1200"
        height="800"
        className={`w-full aspect-[3/2] rounded-2xl object-cover ${cadrage} shadow-sm`}
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
        name: 'Pool-house en bois',
        item: 'https://lesprit-bois.fr/blog/pool-house-bois-guide',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Pool-house en bois : réglementation, usages et budget 2026',
    description:
      "Autorisation d'urbanisme (seuils 5 et 20 m², primauté du PLU, cas de l'extension accolée à 40 m²), quatre usages réels dont le local technique, implantation par rapport au bassin, bois ou aluminium, et budget 2026 du kit au sur-mesure : le guide complet du pool-house en Gironde.",
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
      logo: { '@type': 'ImageObject', url: 'https://lesprit-bois.fr/logo-mark.svg' },
    },
    datePublished: '2026-07-16',
    dateModified: '2026-07-16',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/pool-house-bois-guide',
    },
    about: ['pool house bois', 'piscine', 'aménagement extérieur', 'urbanisme'],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Faut-il une autorisation pour construire un pool-house ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Cela dépend de l'emprise au sol créée. En dessous de 5 m², aucune formalité. De 5 à 20 m², une déclaration préalable de travaux. Au-delà de 20 m², un permis de construire. Le seuil relevé à 40 m² ne concerne que les extensions accolées à une maison existante en zone urbaine couverte par un PLU : un pool-house détaché au fond du jardin reste au seuil de 20 m². Dans tous les cas, le PLU de votre commune prime et peut imposer des règles plus strictes.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quelle différence entre un pool-house et un abri de piscine ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "L'abri de piscine couvre le bassin lui-même pour le sécuriser, le chauffer et limiter l'entretien : c'est un équipement posé sur la piscine. Le pool-house est une construction distincte, implantée à côté du bassin, qui abrite des personnes et des équipements : local technique, rangement, cuisine d'été, vestiaire ou douche. Les deux répondent à des besoins différents et relèvent de formalités d'urbanisme différentes.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quel budget prévoir pour un pool-house en bois ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le marché s'étale de 5 000 € environ pour un kit simple à monter soi-même, à 30 000 € et plus pour un pool-house maçonné ou sur-mesure entièrement équipé. Un pool-house bois sur-mesure posé, de 12 à 20 m², avec local technique ventilé et un espace couvert, se situe le plus souvent entre 12 000 et 25 000 € selon les raccordements, la dalle et le niveau de finition. Ce sont des ordres de grandeur : seul un devis établi sur place après relevé du terrain engage.",
        },
      },
      {
        '@type': 'Question',
        name: 'Pool-house en bois ou en aluminium : que choisir ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le bois offre la meilleure intégration au jardin, un excellent confort thermique et se travaille sur mesure sans contrainte de dimension : c'est notre matériau de référence. L'aluminium apporte des lignes fines, une teinte stable et un entretien quasi nul, particulièrement pertinent sur une maison contemporaine ou en bord de bassin très exposé. La solution mixte, structure bois et menuiseries aluminium, réunit souvent le meilleur des deux.",
        },
      },
      {
        '@type': 'Question',
        name: "Faut-il amener l'eau et l'électricité dans un pool-house ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "L'électricité est presque toujours indispensable : la pompe de filtration, l'éclairage et les prises en dépendent. L'eau et l'évacuation ne se justifient que si le pool-house comporte un point d'eau, une douche, un WC ou une cuisine d'été. Le point capital est de trancher avant la dalle : passer les gaines et les attentes après coup oblige à casser, et c'est le regret le plus fréquent sur ce type de chantier.",
        },
      },
      {
        '@type': 'Question',
        name: 'À quelle distance du bassin implanter un pool-house ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Nous conseillons de laisser au minimum 1,50 à 2 mètres de plage entre le bassin et le pool-house, et davantage si un espace repas est prévu. Trop près, l'ouvrage reçoit les projections d'eau chlorée, gêne la circulation autour du bassin, complique l'entretien et peut porter ombre à l'eau au mauvais moment. Le PLU de votre commune fixe par ailleurs des reculs obligatoires par rapport aux limites de propriété, à vérifier avant toute implantation.",
        },
      },
    ],
  },
];

const comparatif = [
  ['Pool-house ouvert', 'Toit sur poteaux, aucun mur plein', 'Économique, lumineux, formalités légères, aucune sensation d’enfermement', 'Ne range rien en sécurité, subit le vent et la pluie battante'],
  ['Pool-house semi-fermé', 'Un à deux côtés bardés, le reste ouvert', 'Le meilleur compromis : abrite le local technique, coupe le vent dominant, garde la vue sur le bassin', 'Demande de bien viser l’orientation des parties fermées'],
  ['Pool-house fermé', 'Volume clos, menuiseries, parfois isolé', 'Range, sécurise, permet douche, WC, cuisine ou chambre d’amis', 'Budget nettement supérieur, urbanisme plus lourd, surface de plancher créée'],
  ['Fermé + habitable', 'Pièce de vie chauffée et isolée', 'Une pièce en plus qui sert toute l’année', 'Change la nature du projet : permis quasi systématique, fiscalité, RE2020 possible'],
];

const faq = [
  {
    q: 'Faut-il une autorisation pour construire un pool-house ?',
    r: (
      <>
        Cela dépend de l&apos;emprise au sol créée. En dessous de 5 m², aucune formalité. De 5 à 20 m², une déclaration
        préalable de travaux. Au-delà de 20 m², un permis de construire. Le seuil relevé à 40 m² ne concerne que les
        extensions accolées à une maison existante en zone urbaine couverte par un PLU : un pool-house détaché au fond du
        jardin reste au seuil de 20 m². Dans tous les cas, le PLU de votre commune prime et peut imposer des règles plus
        strictes.
      </>
    ),
  },
  {
    q: 'Quelle différence entre un pool-house et un abri de piscine ?',
    r: (
      <>
        L&apos;abri de piscine couvre le bassin lui-même pour le sécuriser, le chauffer et limiter l&apos;entretien :
        c&apos;est un équipement posé sur la piscine. Le pool-house est une construction distincte, implantée à côté du
        bassin, qui abrite des personnes et des équipements : local technique, rangement, cuisine d&apos;été, vestiaire ou
        douche. Les deux répondent à des besoins différents et relèvent de formalités d&apos;urbanisme différentes.
      </>
    ),
  },
  {
    q: 'Quel budget prévoir pour un pool-house en bois ?',
    r: (
      <>
        Le marché s&apos;étale de 5 000 € environ pour un kit simple à monter soi-même, à 30 000 € et plus pour un
        pool-house maçonné ou sur-mesure entièrement équipé. Un pool-house bois sur-mesure posé, de 12 à 20 m², avec local
        technique ventilé et un espace couvert, se situe le plus souvent entre 12 000 et 25 000 € selon les raccordements,
        la dalle et le niveau de finition. Ce sont des ordres de grandeur : seul un devis établi sur place après relevé du
        terrain engage.
      </>
    ),
  },
  {
    q: 'Pool-house en bois ou en aluminium : que choisir ?',
    r: (
      <>
        Le bois offre la meilleure intégration au jardin, un excellent confort thermique et se travaille sur mesure sans
        contrainte de dimension : c&apos;est notre matériau de référence. L&apos;aluminium apporte des lignes fines, une
        teinte stable et un entretien quasi nul, particulièrement pertinent sur une maison contemporaine ou en bord de
        bassin très exposé. La solution mixte, structure bois et menuiseries aluminium, réunit souvent le meilleur des
        deux.
      </>
    ),
  },
  {
    q: "Faut-il amener l'eau et l'électricité dans un pool-house ?",
    r: (
      <>
        L&apos;électricité est presque toujours indispensable : la pompe de filtration, l&apos;éclairage et les prises en
        dépendent. L&apos;eau et l&apos;évacuation ne se justifient que si le pool-house comporte un point d&apos;eau, une
        douche, un WC ou une cuisine d&apos;été. Le point capital est de trancher avant la dalle : passer les gaines et les
        attentes après coup oblige à casser, et c&apos;est le regret le plus fréquent sur ce type de chantier.
      </>
    ),
  },
  {
    q: 'À quelle distance du bassin implanter un pool-house ?',
    r: (
      <>
        Nous conseillons de laisser au minimum 1,50 à 2 mètres de plage entre le bassin et le pool-house, et davantage si
        un espace repas est prévu. Trop près, l&apos;ouvrage reçoit les projections d&apos;eau chlorée, gêne la
        circulation autour du bassin, complique l&apos;entretien et peut porter ombre à l&apos;eau au mauvais moment. Le
        PLU de votre commune fixe par ailleurs des reculs obligatoires par rapport aux limites de propriété, à vérifier
        avant toute implantation.
      </>
    ),
  },
];

export default function ArticlePoolHouseBoisPage() {
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
              alt="Pool-house en bois à grandes baies vitrées, bordé d'une terrasse en bois et d'une piscine, en Gironde"
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
              <span className="text-secondary-fixed">Pool-house en bois</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Pool-house
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Pool-house en bois : réglementation, usages et budget 2026
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/70 font-label-md text-label-md">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">person</span>
                David Bertrand, L&apos;Esprit Bois
              </span>
              <span className="text-secondary">·</span>
              <span>16 juillet 2026</span>
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
                Un pool-house de moins de 5 m² ne demande aucune formalité ; entre 5 et 20 m² d&apos;emprise au sol, une
                déclaration préalable de travaux suffit ; au-delà de 20 m², il faut un permis de construire. Mais c&apos;est
                le PLU de votre commune qui tranche vraiment, et lui seul.
              </strong>{' '}
              Cela dit, sur nos chantiers en Gironde, la surface n&apos;est jamais ce qui fait un pool-house réussi : ce
              qui compte, c&apos;est l&apos;usage réel qu&apos;on lui donne et son implantation par rapport au bassin. Un
              9 m² bien placé, qui avale la pompe de filtration et abrite une vraie plage d&apos;ombre, rend plus service
              qu&apos;un 25 m² posé au mauvais endroit. Voici comment décider, dans l&apos;ordre.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Autorisation */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Pool-house : quelle autorisation d&apos;urbanisme en 2026 ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un pool-house est une construction : il crée de l&apos;emprise au sol, c&apos;est-à-dire la projection
                verticale du volume au sol, poteaux et débords de toiture compris. Les seuils du cas général sont simples
                et n&apos;ont pas bougé en 2026 : <strong className="text-primary font-semibold">moins de 5 m², aucune
                formalité ; de 5 à 20 m², une déclaration préalable de travaux ; au-delà de 20 m², un permis de
                construire.</strong>
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Vient la nuance qui cause le plus d&apos;erreurs : le fameux{' '}
                <strong className="text-primary font-semibold">seuil de 40 m²</strong>. Il existe bien, mais il ne vaut
                QUE pour une extension <strong className="text-primary font-semibold">accolée</strong> à une maison
                existante, en <strong className="text-primary font-semibold">zone urbaine couverte par un PLU</strong>, et
                si la mairie qualifie l&apos;ouvrage d&apos;extension. Un pool-house{' '}
                <strong className="text-primary font-semibold">détaché</strong> au fond du jardin, l&apos;immense
                majorité des cas, reste au seuil de 20 m². Nous voyons régulièrement des projets dimensionnés à 30 ou
                35 m² en croyant rester en déclaration préalable : c&apos;est un permis.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ces seuils ne sont qu&apos;un plancher national :{' '}
                <strong className="text-primary font-semibold">le PLU communal prime toujours</strong> et peut durcir la
                règle : zones, teintes de bardage et de couverture, gabarits, hauteurs, reculs par rapport aux limites
                séparatives. Deux communes voisines du Libournais n&apos;imposent pas les mêmes contraintes. En secteur
                protégé ou dans le périmètre UNESCO de Saint-Émilion, l&apos;avis de l&apos;Architecte des Bâtiments de
                France s&apos;ajoute et allonge l&apos;instruction.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Deux points à ne pas confondre. La{' '}
                <strong className="text-primary font-semibold">taxe d&apos;aménagement</strong> se calcule en 2026 sur une
                valeur forfaitaire de <strong className="text-primary font-semibold">892 €/m²</strong> hors
                Île-de-France : c&apos;est une base de calcul, pas un coût de construction, à multiplier par la surface
                taxable et les taux communal et départemental. Et{' '}
                <strong className="text-primary font-semibold">la piscine relève d&apos;une formalité distincte</strong> :
                un bassin de 10 à 100 m² demande sa propre déclaration préalable. Deux ouvrages, deux dossiers.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Plutôt que de tout redérouler ici, nous avons détaillé les seuils, le calcul de l&apos;emprise au sol, le
                CERFA et les délais dans notre{' '}
                <a href="/blog/autorisation-urbanisme-abri-carport-pergola-2026" className={lienInterne}>
                  guide 2026 des autorisations d&apos;urbanisme
                </a>{' '}
                : à lire avant de dessiner quoi que ce soit. De notre côté, nous vérifions systématiquement le PLU de
                votre commune avant d&apos;engager le projet.
              </p>
            </section>

            {/* 2. Usages */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Les 4 usages d&apos;un pool-house (et celui qu&apos;on oublie toujours)
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Avant la surface, avant le matériau, avant le budget : à quoi va-t-il servir ? C&apos;est la question qui
                débloque tout, parce que la réponse commande l&apos;implantation, les raccordements et l&apos;urbanisme.
                Quatre usages reviennent, et ils se combinent presque toujours :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le rangement et le local technique', 'l’usage qu’on oublie systématiquement, et pourtant celui qui commande le projet. La pompe est bruyante, le coffret électrique et les bidons de traitement doivent être à l’abri et hors de portée des enfants, le robot et les perches encombrent. Neuf clients sur dix nous parlent de cuisine d’été en premier, et finissent par reconnaître que c’est le local technique qui les décide.'],
                  ['La cuisine d’été et la réception', 'plancha, évier, frigo, plan de travail, table à l’ombre : l’usage le plus rêvé, et celui qui transforme vraiment l’été. Il impose l’eau, l’évacuation et plusieurs circuits électriques.'],
                  ['Le vestiaire, la douche et le WC', 'le plus sous-estimé en confort quotidien : plus personne ne traverse la maison en maillot mouillé, et un WC extérieur change la vie quand on reçoit. En contrepartie, il faut une évacuation raccordée, à anticiper dès la conception.'],
                  ['La chambre d’amis ou la pièce en plus', 'séduisant, mais attention : dès qu’il devient habitable, le pool-house crée de la surface de plancher, change la donne urbanisme (permis quasi systématique) et bascule dans une autre logique : isolation, chauffage, menuiseries. Ce n’est plus un pool-house, c’est une petite construction bois.'],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Notre conseil : hiérarchisez ces usages, ne les additionnez pas. Un pool-house qui prétend tout faire
                devient un bâtiment cher et mal résolu ; un pool-house qui fait très bien deux choses se vit tous les
                jours. Si le programme déborde vers l&apos;habitable, on bascule sur une vraie{' '}
                <a href="/constructions-bois" className={lienInterne}>construction bois</a>, avec les exigences qui vont
                avec.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/construction-pool-house-aluminium-libourne.webp"
              alt="Cuisine d'été équipée d'un bar et d'une plancha sous un pool-house couvert, réalisation en Gironde"
              caption="La cuisine d'été est l'usage le plus demandé, mais le local technique reste celui qu'on implante en premier : les autres s'organisent autour."
            />

            {/* 3. Implantation */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Où l&apos;implanter ? Distance au bassin, orientation, vis-à-vis
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est le sujet sur lequel nous passons le plus de temps sur le terrain, mètre en main : celui qui
                sépare un pool-house qu&apos;on utilise d&apos;un pool-house qu&apos;on regarde. Trois paramètres se
                croisent.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">La distance au bassin.</strong> Le réflexe est de coller le
                pool-house à l&apos;eau ; c&apos;est une erreur. Conservez au minimum{' '}
                <strong className="text-primary font-semibold">1,50 à 2 mètres de plage</strong>, davantage si un espace
                repas est prévu : il faut pouvoir passer derrière une chaise occupée. Trop près du bord, la structure
                reçoit les projections d&apos;eau chlorée en continu, l&apos;entretien du bassin devient acrobatique, la
                circulation se coince et la sécurité en pâtit.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">L&apos;orientation.</strong> En Gironde, le vrai sujet est
                le soleil de fin de journée : on vit autour de la piscine entre 17 h et 21 h, pas à midi. Un pool-house
                plein sud offre une belle photo et une fournaise à l&apos;apéritif. Nous regardons la course du soleil et
                les arbres existants pour placer la partie couverte, tout en vérifiant que le volume ne porte pas ombre au
                bassin en début de saison, quand l&apos;eau a besoin de chauffer. Le vent dominant compte autant : sur le
                Libournais il vient de l&apos;ouest, et c&apos;est de ce côté qu&apos;on ferme.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">Le vis-à-vis et les limites.</strong> Le PLU fixe des
                reculs par rapport aux limites séparatives : souvent 3 mètres, parfois plus, parfois l&apos;implantation en
                limite est admise sous conditions. S&apos;y ajoute le vis-à-vis réel : bien placé, le pool-house sert
                d&apos;écran visuel côté voisin. C&apos;est un des rares cas où une contrainte devient un atout.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Si le besoin premier est l&apos;ombre plutôt que le volume bâti, disons-le honnêtement : une{' '}
                <a href="/pergolas" className={lienInterne}>pergola</a> au bord du bassin coûte moins cher, se pose plus
                vite et rend souvent le même service. Nous préférons vous le dire en rendez-vous que vous vendre un
                bâtiment dont vous n&apos;avez pas besoin.
              </p>
            </section>

            <Figure
              src="/images/terrasse-bois-piscine-exemple-opt.webp"
              alt="Plage de piscine en bois avec recul sur la limite séparative et écran végétal, aménagement en Gironde"
              caption="Le recul se décide avant la dalle : plage de circulation le long du bassin, distance à la limite séparative, et végétal pour traiter le vis-à-vis."
              cadrage="object-bottom"
            />

            {/* 4. Matériaux */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Bois, aluminium ou mixte : ce que nous posons et pourquoi
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">Le bois reste notre matériau de référence</strong>, et pas
                seulement par goût d&apos;artisan : il s&apos;intègre au jardin comme aucun autre, ne chauffe pas sous la
                main en plein été, se travaille sur mesure sans contrainte de dimension standard et encaisse très bien la
                proximité de l&apos;eau, à condition de choisir l&apos;essence et de ventiler. Autour du bassin, nous
                travaillons surtout le <strong className="text-primary font-semibold">douglas</strong> et le{' '}
                <strong className="text-primary font-semibold">mélèze</strong>, deux résineux à bonne durabilité naturelle
                sous notre climat océanique, le <strong className="text-primary font-semibold">pin autoclave</strong> pour
                les budgets serrés et le <strong className="text-primary font-semibold">chêne</strong> quand le projet le
                justifie. La logique de classe d&apos;emploi est celle de la terrasse qui entoure la piscine, détaillée
                essence par essence dans notre guide sur{' '}
                <a href="/blog/quel-bois-pour-terrasse-exterieure" className={lienInterne}>
                  le choix du bois pour une terrasse extérieure
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">L&apos;aluminium</strong> a de vrais arguments et nous en
                posons : lignes fines, teinte stable, entretien quasi nul, aucune sensibilité aux projections chlorées.
                Sur une maison contemporaine, ou quand le client ne veut entendre parler d&apos;aucun entretien, c&apos;est
                le bon choix. Il est en revanche moins chaleureux, plus rigide en conception, et il chauffe au soleil
                direct.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">Le mixte est souvent la meilleure réponse</strong> :
                ossature et bardage bois pour la chaleur et l&apos;intégration, menuiseries et coulissants aluminium pour
                la finesse et la durabilité.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Un point technique qui vaut pour tous les matériaux : les poteaux ne sont jamais noyés dans le béton, mais{' '}
                <strong className="text-primary font-semibold">désolidarisés du sol par des pieds métalliques</strong>,
                pour que le bois ne pompe pas l&apos;humidité par le bas. À quelques mètres d&apos;un bassin, sur un sol
                régulièrement mouillé, ce détail décide de la durée de vie de l&apos;ouvrage.
              </p>
            </section>

            {/* 5. Ouvert / semi-fermé / fermé */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ouvert, semi-fermé ou fermé : le choix qui conditionne tout le reste
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est la décision structurante du projet : elle entraîne le budget, l&apos;urbanisme, les
                raccordements et jusqu&apos;à la fiscalité. Un pool-house ouvert et un pool-house fermé de même surface ne
                sont ni le même chantier, ni le même dossier, ni le même prix.
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
                    {comparatif.map((ligne, i) => (
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
                Dans les faits, <strong className="text-primary font-semibold">le semi-fermé emporte la majorité de nos
                chantiers</strong>, et ce n&apos;est pas un hasard : il ferme ce qui doit l&apos;être (local technique,
                rangement, vent dominant, vis-à-vis du voisin) et laisse ouvert ce qui fait le plaisir de l&apos;été, la
                vue sur le bassin et la circulation libre. Il tient souvent sous les 20 m² d&apos;emprise, donc en
                déclaration préalable.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Le tout-ouvert ne se justifie que si le rangement est résolu ailleurs. Le tout-fermé se justifie quand la
                douche, le WC ou la cuisine d&apos;été sont au programme : il faut alors assumer le budget et le permis.
              </p>
            </section>

            <Figure
              src="/images/terrasse-bois-pool-house-libourne.webp"
              alt="Pool-house semi-fermé au bardage bois foncé : volume clos d'un côté, auvent ouvert sur la piscine, en Gironde"
              caption="Attention au calcul : la partie ouverte compte elle aussi dans l'emprise au sol, poteaux et débords de toiture compris."
              cadrage="object-top"
            />

            {/* 6. Budget */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Budget 2026 : du kit au sur-mesure, ce qui fait vraiment monter la facture
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Soyons directs : le marché du pool-house s&apos;étale de{' '}
                <strong className="text-primary font-semibold">5 000 € environ pour un kit</strong> à monter soi-même à{' '}
                <strong className="text-primary font-semibold">30 000 € et plus pour un modèle maçonné ou sur-mesure
                entièrement équipé</strong>. Un écart de 1 à 6, et il est réel. Entre les deux, un pool-house bois
                sur-mesure posé de 12 à 20 m², avec local technique ventilé et espace couvert, se situe le plus souvent
                entre <strong className="text-primary font-semibold">12 000 et 25 000 €</strong>.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le kit peut suffire, et nous le disons quand c&apos;est le cas : besoin simple, terrain plat, rangement
                seul. Le sur-mesure se justifie dès qu&apos;il y a une contrainte réelle : terrain en pente, intégration à
                une maison de caractère, local technique à insonoriser, cuisine d&apos;été, ou une dimension qui ne tombe
                pas juste dans un catalogue.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Ce qui fait monter la facture, ce n&apos;est presque jamais le bois. C&apos;est ce qui est autour :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Les raccordements', 'eau, électricité, évacuation : le poste le plus sous-estimé. Une tranchée de 25 mètres depuis la maison, un passage sous une terrasse existante ou un raccordement à l’assainissement pèsent vite plusieurs milliers d’euros.'],
                  ['La dalle et les fondations', 'un terrain plat et sain se prépare vite ; une pente à rattraper, un sol argileux (fréquent sur le Libournais) ou un terrassement à évacuer changent l’équation.'],
                  ['Le degré de fermeture', 'chaque paroi bardée, chaque menuiserie, chaque coulissant ajoute : c’est le curseur qui fait passer de 12 000 à 25 000 €.'],
                  ['L’équipement', 'plan de travail, évier, douche, WC, éclairage, plancha : c’est du second œuvre, et le second œuvre se chiffre vite.'],
                  ['La taxe d’aménagement', 'calculée sur la valeur forfaitaire de 892 €/m² en 2026 hors Île-de-France, à multiplier par la surface taxable et les taux communal et départemental.'],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ces fourchettes sont des ordres de grandeur de marché, pas un devis : le juste prix de <em>votre</em>{' '}
                pool-house dépend de son implantation, de la distance aux réseaux et de votre programme. Nous ne chiffrons
                qu&apos;après être venus sur place, seule façon d&apos;annoncer un prix qui tienne jusqu&apos;à la fin du
                chantier.
              </p>
            </section>

            {/* 7. Terrain Gironde */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Nos pool-houses en Gironde : ce qu&apos;on a appris sur le terrain
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Entre Libourne, Saint-Émilion, Les Billaux et la rive droite, voici les leçons qui reviennent sur nos
                chantiers, et qu&apos;aucun catalogue ne vous donnera :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Anticiper les réseaux AVANT la dalle', 'le regret n°1, et il est irréversible. Gaines électriques, arrivée d’eau, évacuation, voire une attente pour un futur point d’eau : on les passe pendant le terrassement. Repiquer sur une dalle coulée, c’est casser.'],
                  ['Ventiler le local technique, vraiment', 'la pompe chauffe, l’humidité stagne, le chlore est corrosif : un local borgne et étanche tue son matériel en deux saisons. Entrées d’air basses, sortie haute, porte qui laisse passer l’air.'],
                  ['Penser le bruit de la pompe dès l’implantation', 'une filtration tourne plusieurs heures par jour, souvent quand on est dehors. On l’éloigne des chambres et de l’espace repas, et on désolidarise pour éviter la caisse de résonance.'],
                  ['Regarder le soleil de fin de journée et le vent dominant', 'sur le Libournais, le vent vient de l’ouest et le soleil de 19 h tape bas : ces deux données décident de l’orientation mieux que n’importe quel plan sur ordinateur.'],
                  ['Ne pas coller le pool-house au bassin', 'projections chlorées, circulation coincée, entretien acrobatique, sécurité en moins : 1,50 à 2 mètres de plage minimum, on ne le regrette jamais.'],
                  ['Traiter la terrasse et le pool-house comme un seul ouvrage', 'même essence, mêmes niveaux, même sens de lame : c’est ce qui fait qu’un aménagement paraît d’origine plutôt que rapporté.'],
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
                Un dernier point, saisonnier. Nous écrivons ces lignes à la mi-juillet : la piscine tourne à plein, et
                c&apos;est maintenant que les manques sautent aux yeux : pas d&apos;ombre à l&apos;apéritif, une pompe qui
                ronronne sous les fenêtres, rien pour se changer. <strong className="text-primary font-semibold">
                C&apos;est le bon moment pour décider, pas pour construire.</strong> Un projet lancé en juillet-août
                s&apos;instruit à l&apos;automne (un mois pour une déclaration préalable, deux à trois pour un permis),
                se construit hors saison, quand le jardin n&apos;est pas occupé, et se met en service au printemps.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Le pool-house arrive rarement seul : il vient avec la terrasse, l&apos;ombrage, l&apos;éclairage et les
                abords du bassin. C&apos;est tout le sens de notre approche de l&apos;{' '}
                <a href="/amenagement-exterieur" className={lienInterne}>aménagement extérieur</a>, menée avec un seul
                interlocuteur de l&apos;étude à la pose, et vous pouvez voir ce que cela donne dans{' '}
                <a href="/realisations" className={lienInterne}>nos réalisations en Gironde</a>.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/construction-pool-house-aluminium-libourne-2.webp"
              alt="Pool-house équipé d'un bar en pierre et d'une toiture plate en aluminium, réalisation près de Libourne"
              caption="Un plan de travail, un évier, une plancha : chaque équipement suppose une gaine ou une attente passée avant la dalle."
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
              Pool-house en bois : vos questions
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
              Un pool-house pensé pour votre bassin
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              La réglementation vous dira ce que vous avez le droit de construire ; elle ne vous dira jamais ce dont vous
              avez besoin. Un bon pool-house, c&apos;est le juste usage, à la bonne distance du bassin, avec les réseaux
              passés au bon moment. C&apos;est le diagnostic que nous menons chez L&apos;Esprit Bois, entreprise
              certifiée Qualibat, à Libourne et dans toute la Gironde, vérification du PLU et formalités
              d&apos;urbanisme comprises.
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
