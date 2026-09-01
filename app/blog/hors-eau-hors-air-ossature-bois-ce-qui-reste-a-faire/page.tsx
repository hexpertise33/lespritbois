import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/chantiers/ossature-bois-interieur-douglas-porte-vitree-gironde.webp';

export const metadata: Metadata = buildMetadata({
  title: "Hors d'eau hors d'air en Gironde : ce qui reste à faire",
  description:
    "Hors d'eau hors d'air : ce que nous livrons exactement, ce qui reste à faire lot par lot et à quel coût. Guide d'un artisan à Libourne (Gironde).",
  keywords:
    "hors d'eau hors d'air, maison ossature bois hors d'eau hors d'air Gironde, que reste-t-il à faire hors d'air, auto-finition maison bois, lots second œuvre ossature bois, constructeur ossature bois Libourne, clos et couvert ossature bois, réception hors d'eau hors d'air",
  path: '/blog/hors-eau-hors-air-ossature-bois-ce-qui-reste-a-faire',
  ogImage: COVER,
  ogTitle: "Livré hors d'eau hors d'air : ce que vous recevez, et ce qu'il vous reste à faire",
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
        name: "Hors d'eau hors d'air : ce qui reste à faire",
        item: 'https://lesprit-bois.fr/blog/hors-eau-hors-air-ossature-bois-ce-qui-reste-a-faire',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "Livré hors d'eau hors d'air : ce que vous recevez, et ce qu'il vous reste à faire",
    description:
      "Hors d'eau hors d'air n'est pas un niveau de finition, c'est une frontière contractuelle : un bâtiment clos, couvert, isolé et étanche à l'air, où tout ce qui rend la maison habitable reste à faire. Ce que recouvrent les deux étapes, ce qui est inclus dans notre livraison, les lots de second œuvre qui restent, ce qu'on peut raisonnablement faire soi-même et ce qu'il faut confier, la réception et les garanties à ce stade précis, l'ordre du chantier et l'effet sur le budget : le guide d'un constructeur à ossature bois à Libourne, en Gironde.",
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
    datePublished: '2026-09-02',
    dateModified: '2026-09-02',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/hors-eau-hors-air-ossature-bois-ce-qui-reste-a-faire',
    },
    about: [
      { '@type': 'Thing', name: "hors d'eau hors d'air" },
      { '@type': 'Thing', name: 'maison à ossature bois' },
      { '@type': 'Thing', name: 'second œuvre' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "« Hors d'eau hors d'air », qu'est-ce que cela recouvre exactement ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Hors d'eau signifie que le bâtiment est couvert et que la pluie n'entre plus : fondations, ossature, contreventement, charpente, couverture et évacuation des eaux pluviales sont en place. Hors d'air signifie que l'enveloppe est fermée : pare-pluie, bardage, menuiseries extérieures posées et vitrées, portes et seuils, isolation et frein-vapeur continu. Ensemble, ces deux étapes donnent un bâtiment clos, couvert et étanche à l'air, mais pas un logement habitable. Ce n'est pas une norme, c'est une définition contractuelle : la liste exacte doit figurer sur le devis, poste par poste.",
        },
      },
      {
        '@type': 'Question',
        name: "Peut-on habiter une maison livrée hors d'eau hors d'air ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non. Il manque tout ce qui rend un logement habitable : cloisons et doublages, électricité, plomberie, eau chaude, chauffage, ventilation en service, revêtements de sol et sanitaires. À ce stade, le bâtiment se visite, se chauffe temporairement pour sécher et sert d'atelier fermé pour la suite du chantier. L'emménagement suppose que le second œuvre soit fait, les réseaux raccordés et les installations contrôlées.",
        },
      },
      {
        '@type': 'Question',
        name: "Peut-on faire soi-même le second œuvre d'une maison à ossature bois ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Une partie, oui : peinture, revêtements de sol, pose des doublages, aménagements intérieurs et abords sont à la portée d'un particulier patient et bien outillé. Deux lots ne s'improvisent pas : l'électricité et le gaz relèvent de professionnels qualifiés, et la mise en service d'une installation neuve passe par un contrôle de conformité. Surtout, vérifiez votre couverture d'assurance avant de décider, pas après : ce que vous réalisez vous-même n'est couvert par l'assurance d'aucun professionnel.",
        },
      },
      {
        '@type': 'Question',
        name: "Quelles garanties courent après une réception hors d'eau hors d'air ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "C'est la réception qui fait courir les délais. La garantie de parfait achèvement dure un an à compter de la réception, la garantie de bon fonctionnement deux ans sur les éléments d'équipement dissociables, et la garantie décennale dix ans sur les dommages qui compromettent la solidité de l'ouvrage ou le rendent impropre à sa destination. Ces garanties portent sur les travaux réalisés par l'entreprise, et seuls les travaux déclarés à son contrat d'assurance sont couverts : demandez l'attestation avant le début du chantier et vérifiez qu'elle mentionne bien l'activité concernée.",
        },
      },
      {
        '@type': 'Question',
        name: "Combien de temps s'écoule entre la livraison hors d'air et l'emménagement ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Cela dépend entièrement de qui fait le second œuvre. Quand les lots sont confiés à des artisans coordonnés et disponibles, nous constatons sur nos chantiers un délai de quelques mois. En auto-finition, sur les week-ends et les congés, il faut compter beaucoup plus, souvent plus d'un an. L'échéance à surveiller n'est pas la fin des travaux mais celle de votre financement : le différé de prêt ne s'allonge pas parce que la peinture prend du retard.",
        },
      },
    ],
  },
];

const lots = [
  [
    'Réseaux intérieurs',
    'Électricité, plomberie, évacuations, réseaux de chauffage',
    'Ils passent dans les vides techniques : ils interviennent avant la fermeture des doublages.',
  ],
  [
    'Ventilation',
    'VMC, réseau de gaines, bouches d’extraction et d’insufflation',
    'Non négociable : une maison étanche à l’air se ventile mécaniquement.',
  ],
  [
    'Cloisons et doublages',
    'Ossatures intérieures, panneaux, bandes et enduits',
    'Ne jamais percer le frein-vapeur sans réparer l’étanchéité derrière.',
  ],
  [
    'Sols',
    'Chape ou plancher sec, isolants, carrelage ou parquet',
    'Les temps de séchage se planifient, ils ne se rattrapent pas.',
  ],
  [
    'Menuiseries intérieures',
    'Portes, escalier, plinthes, habillages',
    'L’escalier se commande tôt : c’est le délai le plus long du lot.',
  ],
  [
    'Finitions',
    'Peintures, revêtements muraux, appareillage électrique, éclairage',
    'Le lot le plus accessible quand on veut mettre la main à la pâte.',
  ],
  [
    'Équipements',
    'Cuisine, salle de bains, eau chaude sanitaire, chauffage',
    'Le poste qui fait le plus varier une enveloppe de second œuvre.',
  ],
  [
    'Abords et raccordements',
    'Terrasse, allées, compteurs, assainissement',
    'Les demandes de raccordement se déposent des mois à l’avance.',
  ],
];

const faq = [
  {
    q: "« Hors d'eau hors d'air », qu'est-ce que cela recouvre exactement ?",
    r: (
      <>
        Hors d&apos;eau signifie que le bâtiment est couvert et que la pluie n&apos;entre plus : fondations, ossature,
        contreventement, charpente, couverture et évacuation des eaux pluviales sont en place. Hors d&apos;air signifie
        que l&apos;enveloppe est fermée : pare-pluie, bardage, menuiseries extérieures posées et vitrées, portes et
        seuils, isolation et frein-vapeur continu. Ensemble, ces deux étapes donnent un bâtiment clos, couvert et étanche
        à l&apos;air, mais pas un logement habitable. Ce n&apos;est pas une norme, c&apos;est une définition
        contractuelle : la liste exacte doit figurer sur le devis, poste par poste.
      </>
    ),
  },
  {
    q: "Peut-on habiter une maison livrée hors d'eau hors d'air ?",
    r: (
      <>
        Non. Il manque tout ce qui rend un logement habitable : cloisons et doublages, électricité, plomberie, eau
        chaude, chauffage, ventilation en service, revêtements de sol et sanitaires. À ce stade, le bâtiment se visite,
        se chauffe temporairement pour sécher et sert d&apos;atelier fermé pour la suite du chantier.
        L&apos;emménagement suppose que le second œuvre soit fait, les réseaux raccordés et les installations
        contrôlées.
      </>
    ),
  },
  {
    q: "Peut-on faire soi-même le second œuvre d'une maison à ossature bois ?",
    r: (
      <>
        Une partie, oui : peinture, revêtements de sol, pose des doublages, aménagements intérieurs et abords sont à la
        portée d&apos;un particulier patient et bien outillé. Deux lots ne s&apos;improvisent pas :
        l&apos;électricité et le gaz relèvent de professionnels qualifiés, et la mise en service d&apos;une installation
        neuve passe par un contrôle de conformité. Surtout, vérifiez votre couverture d&apos;assurance avant de décider,
        pas après : ce que vous réalisez vous-même n&apos;est couvert par l&apos;assurance d&apos;aucun professionnel.
      </>
    ),
  },
  {
    q: "Quelles garanties courent après une réception hors d'eau hors d'air ?",
    r: (
      <>
        C&apos;est la réception qui fait courir les délais. La garantie de parfait achèvement dure un an à compter de la
        réception, la garantie de bon fonctionnement deux ans sur les éléments d&apos;équipement dissociables, et la
        garantie décennale dix ans sur les dommages qui compromettent la solidité de l&apos;ouvrage ou le rendent
        impropre à sa destination. Ces garanties portent sur les travaux réalisés par l&apos;entreprise, et seuls les
        travaux déclarés à son contrat d&apos;assurance sont couverts : demandez l&apos;attestation avant le début du
        chantier et vérifiez qu&apos;elle mentionne bien l&apos;activité concernée.
      </>
    ),
  },
  {
    q: "Combien de temps s'écoule entre la livraison hors d'air et l'emménagement ?",
    r: (
      <>
        Cela dépend entièrement de qui fait le second œuvre. Quand les lots sont confiés à des artisans coordonnés et
        disponibles, nous constatons sur nos chantiers un délai de quelques mois. En auto-finition, sur les week-ends et
        les congés, il faut compter beaucoup plus, souvent plus d&apos;un an. L&apos;échéance à surveiller n&apos;est pas
        la fin des travaux mais celle de votre financement : le différé de prêt ne s&apos;allonge pas parce que la
        peinture prend du retard.
      </>
    ),
  },
];

export default function ArticleHorsEauHorsAirPage() {
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
              alt="Intérieur d'un ouvrage à ossature bois hors d'eau hors d'air en Gironde, murs et charpente en douglas, porte-fenêtre posée et vitrée, sol en béton brut"
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
              <span className="text-secondary-fixed">Hors d&apos;eau hors d&apos;air</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Ossature bois
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Livré hors d&apos;eau hors d&apos;air : ce que vous recevez, et ce qu&apos;il vous reste à faire
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
              <span>2 septembre 2026</span>
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
                Hors d&apos;eau hors d&apos;air n&apos;est pas un niveau de finition, c&apos;est une frontière
                contractuelle : vous recevez un bâtiment clos et couvert, isolé et étanche à l&apos;air, avec ses
                fondations, son ossature, sa charpente, sa couverture, son bardage et ses menuiseries extérieures posées.
                Tout ce qui rend la maison habitable reste à faire : cloisons, électricité, plomberie, ventilation,
                chauffage, sols, peinture et équipements.
              </strong>{' '}
              C&apos;est la question que pose tout client au premier rendez-vous, et c&apos;est la bonne : « concrètement,
              vous me livrez quoi, et il me reste quoi ? » Bien comprise, cette frontière fait économiser beaucoup, parce
              qu&apos;elle vous rend maître de la moitié du budget. Mal comprise, elle produit exactement le malentendu
              qui gâche une fin de chantier. Voici, poste par poste, ce qui est de notre côté de la ligne et ce qui est du
              vôtre.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Deux étapes distinctes */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Hors d&apos;eau, hors d&apos;air : deux étapes distinctes, souvent confondues
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                L&apos;expression est devenue un bloc, on la prononce d&apos;un seul souffle. Ce sont pourtant deux
                jalons de chantier, séparés par plusieurs semaines, et qui ne veulent pas dire la même chose.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">Hors d&apos;eau</strong>, c&apos;est le moment où la
                pluie n&apos;entre plus par le haut. Les fondations sont coulées, l&apos;ossature est levée et
                contreventée, la charpente est en place, la couverture est posée et les eaux pluviales sont évacuées. Le
                bâtiment est couvert, mais il est encore ouvert : les baies sont des trous, le vent traverse, et sur nos
                chantiers girondins c&apos;est souvent la première fois qu&apos;on peut travailler à l&apos;abri.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">Hors d&apos;air</strong>, c&apos;est le moment où
                l&apos;enveloppe se referme sur les côtés. Pare-pluie, lame d&apos;air ventilée et bardage habillent les
                murs, les menuiseries extérieures sont posées et vitrées, les portes et les seuils sont montés,
                l&apos;isolation est en place et le frein-vapeur est continu, adhésifs et manchons compris. À partir de
                là, on peut chauffer le volume, le faire sécher, et y stocker du matériel sans le voir partir.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Un point qu&apos;on dit rarement : hors d&apos;eau hors d&apos;air n&apos;est pas une norme. Personne
                n&apos;a publié la liste officielle de ce que l&apos;expression contient. C&apos;est une{' '}
                <strong className="text-primary font-semibold">définition contractuelle</strong>, et elle varie
                d&apos;une entreprise à l&apos;autre : certains y incluent le bardage, d&apos;autres non ; certains
                livrent l&apos;isolation, d&apos;autres s&apos;arrêtent au frein-vapeur. D&apos;où la seule règle qui
                vaille quand vous comparez deux offres : ne comparez pas deux fois la même formule, comparez deux listes
                écrites.
              </p>
            </section>

            <Figure
              src="/images/chantiers/ossature-bois-charpente-apparente-pare-pluie-gironde.webp"
              w={1200}
              h={900}
              alt="Charpente apparente et membrane agrafée sur les murs d'un chantier à ossature bois en Gironde, baies encore ouvertes"
              caption="Hors d'eau : la toiture est posée et la pluie n'entre plus, mais les baies sont encore des trous et le chantier se poursuit à l'abri."
            />

            {/* 2. Ce qui est inclus */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qui est inclus quand nous livrons hors d&apos;eau hors d&apos;air
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Voici notre liste, celle que nous écrivons sur le devis et que nous relisons avec vous avant signature.
                Elle vaut pour une maison à ossature bois comme pour une extension, une surélévation ou un pool house.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Les fondations', 'adaptées au terrain, après étude de sol : semelles, longrines ou plots selon le cas.'],
                  ['L’ossature et le contreventement', 'les murs fabriqués à l’atelier, levés et calés sur site, avec leurs panneaux de contreventement.'],
                  ['La charpente et la couverture', 'la structure du toit, la couverture retenue au permis, les rives, et l’évacuation complète des eaux pluviales.'],
                  ['Le pare-pluie et le bardage', 'la peau extérieure, sa lame d’air ventilée et ses fixations : c’est elle qui protège l’ossature.'],
                  ['Les menuiseries extérieures', 'fenêtres et portes posées, vitrées, réglées, avec leurs seuils et leurs habillages.'],
                  ['L’isolation', 'en fibre de bois dans nos ouvrages, posée entre montants et en complément selon la conception retenue.'],
                  ['L’étanchéité à l’air', 'frein-vapeur continu, adhésifs, manchons de traversée : le lot invisible qui décide du confort réel.'],
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
                Deux précisions honnêtes. La première : le choix des essences et leur exposition ne se traitent pas au
                hasard, un bardage et une ossature ne travaillent pas dans les mêmes conditions, et la durabilité
                naturelle des bois se lit dans les référentiels de{' '}
                <a href="https://www.fcba.fr/" className={lienInterne} target="_blank" rel="noopener noreferrer">
                  l&apos;institut technologique FCBA
                </a>{' '}
                plutôt que dans les brochures. La seconde : l&apos;étanchéité à l&apos;air se mesure, par un tiers, et la
                valeur à atteindre se fixe avec votre maître d&apos;œuvre ou votre bureau d&apos;études thermique, pas
                dans un article de blog.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Le détail complet de notre périmètre est décrit sur notre page{' '}
                <a href="/constructions-bois" className={lienInterne}>
                  construction et extension bois à Libourne
                </a>
                , et vous pouvez voir à quoi ressemblent ces ouvrages une fois posés dans{' '}
                <a href="/realisations" className={lienInterne}>
                  nos réalisations en Gironde
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/chantiers/ossature-bois-chantier-bardage-en-cours-gironde.webp"
              w={1100}
              h={825}
              alt="Bardage douglas posé sur un chantier à ossature bois en Gironde, baie encore ouverte avant la pose des menuiseries"
              caption="Le bardage referme les murs, la grande baie attend sa menuiserie : par l'ouverture, on voit la membrane qui court sous la peau extérieure."
            />

            {/* 3. Ce qui reste à faire */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qui reste à faire, lot par lot
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est la partie que les clients découvrent souvent trop tard, alors qu&apos;elle se prépare dès le
                dossier de financement. Nous ne réalisons pas ces lots : ils sont confiés aux artisans de votre choix, ou
                à vous. Les voici, avec le point de vigilance que nous voyons le plus souvent oublié.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Lot</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Ce qu&apos;il recouvre</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Point de vigilance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lots.map((ligne, i) => (
                      <tr key={ligne[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}>
                        <td className="px-4 py-3 text-primary font-semibold whitespace-nowrap">{ligne[0]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6">
                Une remarque propre à l&apos;ossature bois : la ventilation mécanique n&apos;est pas une option de
                confort. Nous vous livrons un bâtiment volontairement étanche à l&apos;air, c&apos;est tout
                l&apos;intérêt de la construction bois bien faite, et un volume étanche{' '}
                <strong className="text-primary font-semibold">doit être ventilé mécaniquement</strong>. Un chantier qui
                repousse la VMC pour des raisons de budget se retrouve avec de la condensation dès le premier hiver.
                C&apos;est le lot à ne jamais sacrifier.
              </p>
            </section>

            {/* 4. Auto-finition */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce que vous pouvez raisonnablement faire vous-même, et ce qu&apos;il vaut mieux confier
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Beaucoup de nos clients choisissent la livraison hors d&apos;eau hors d&apos;air précisément pour finir
                eux-mêmes. C&apos;est un projet légitime, et une vraie économie quand on l&apos;aborde lucidement. Notre
                expérience de chantier donne une frontière assez nette.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                <strong className="text-primary font-semibold">Accessible à un particulier motivé :</strong> la peinture
                et les revêtements muraux, la pose des revêtements de sol, la pose des doublages et des cloisons (long,
                salissant, mais sans piège majeur), les menuiseries intérieures, les aménagements, la terrasse et les
                abords. Ce sont des lots où une erreur se rattrape et ne met personne en danger.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">
                  À confier sans discussion : l&apos;électricité et le gaz.
                </strong>{' '}
                Ces lots relèvent de professionnels qualifiés, la mise en service d&apos;une installation neuve passe par
                un contrôle de conformité, et ce sont les deux postes où une approximation ne se voit pas avant
                l&apos;incident. Nous ajoutons volontiers la plomberie encastrée et la mise en œuvre du chauffage à cette
                liste : une fuite derrière un doublage neuf coûte plus cher que l&apos;économie espérée.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Et le point le plus important, celui que personne ne vous dira à votre place :{' '}
                <strong className="text-primary font-semibold">
                  vérifiez votre couverture d&apos;assurance avant de décider de faire vous-même, pas après.
                </strong>{' '}
                Ce que vous réalisez de vos mains n&apos;est couvert par l&apos;assurance d&apos;aucun professionnel.
                Appelez votre assureur, posez-lui la question de l&apos;assurance dommages-ouvrage et de ce qu&apos;elle
                couvre dans votre configuration exacte, et faites-vous répondre par écrit. Cette conversation dure vingt
                minutes et se tient avant la signature du devis, pas le jour où vous revendez la maison.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Dernier arbitrage, moins juridique : le temps. L&apos;auto-finition ne se paie pas en euros mais en
                week-ends, et le calendrier bancaire, lui, ne se négocie pas. Nous avons vu des projets excellents
                s&apos;abîmer non pas sur la qualité du travail, mais sur dix-huit mois de chantier menés en parallèle
                d&apos;un emploi à temps plein.
              </p>
            </section>

            <Figure
              src="/images/ossature-bois-isolation-fibre-gironde.webp"
              w={1200}
              h={900}
              alt="Panneaux de fibre de bois posés entre les montants d'une ossature bois, chantier en Gironde"
              caption="La fibre de bois se pose murs ouverts, avant les réseaux et les doublages : après la fermeture, on n'y revient plus."
            />

            {/* 5. Réception et garanties */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Réception, assurances et garanties à ce stade précis
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Recevoir un ouvrage hors d&apos;eau hors d&apos;air, ce n&apos;est pas récupérer des clés en serrant des
                mains. C&apos;est un acte :{' '}
                <strong className="text-primary font-semibold">
                  vous signez un procès-verbal de réception, avec ou sans réserves, et c&apos;est cette signature qui
                  fait courir les délais de garantie.
                </strong>{' '}
                Prenez le temps qu&apos;il faut, venez accompagné si vous le souhaitez, et ne signez rien à la va-vite un
                vendredi soir.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Ce que nous regardons ensemble, concrètement, lors d&apos;une réception à ce stade :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'La couverture et les évacuations d’eaux pluviales, si possible après une pluie : c’est là qu’un défaut se voit.',
                  'Le bardage et ses points singuliers : angles, encadrements de baies, arrêts bas, ventilation de la lame d’air.',
                  'Chaque menuiserie : ouverture, fermeture, réglage, étanchéité du seuil, absence de rayure ou d’impact.',
                  'La continuité du frein-vapeur et le traitement des traversées, avant que les doublages ne les rendent invisibles.',
                  'La conformité aux plans et au permis : implantation, dimensions, teintes et matériaux annoncés.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ce qui n&apos;est pas conforme s&apos;écrit au procès-verbal, en réserve, avec un délai de levée. Une
                réserve n&apos;est pas un conflit : c&apos;est la façon normale et écrite de dire « ce point-là reste à
                reprendre ». Ce qui n&apos;est pas écrit, en revanche, se discute mal six mois plus tard.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Côté garanties, le cadre est celui de tout ouvrage de bâtiment, décrit par{' '}
                <a
                  href="https://entreprendre.service-public.gouv.fr/vosdroits/F2034"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  la fiche officielle sur les garanties de construction
                </a>{' '}
                : la garantie de parfait achèvement court{' '}
                <strong className="text-primary font-semibold">un an à compter de la réception</strong>, la garantie de
                bon fonctionnement <strong className="text-primary font-semibold">deux ans</strong> sur les éléments
                d&apos;équipement dissociables, et la garantie décennale{' '}
                <strong className="text-primary font-semibold">dix ans</strong> sur les dommages qui compromettent la
                solidité de l&apos;ouvrage ou le rendent impropre à sa destination. Point capital et rarement dit :{' '}
                <strong className="text-primary font-semibold">
                  seuls les travaux déclarés au contrat d&apos;assurance du constructeur sont couverts
                </strong>
                . Demandez l&apos;attestation avant le premier coup de pelle et vérifiez qu&apos;elle mentionne bien
                l&apos;activité concernée. Nous avons détaillé le fonctionnement de ces trois garanties, appliqué cette
                fois à un ouvrage motorisé, dans notre article sur{' '}
                <a href="/blog/garanties-sav-pergola-veranda-aluminium" className={lienInterne}>
                  les garanties et le SAV d&apos;une pergola en aluminium
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Deux questions pratiques restent à trancher avec votre assureur, et elles ne concernent que ce cas de
                figure : qui assure le bâtiment entre la réception et l&apos;emménagement, alors qu&apos;il est fermé
                mais inoccupé, et comment s&apos;articulent les interventions des différents artisans que vous ferez
                venir ensuite. Un bâtiment vide, fermé et plein de matériaux n&apos;est pas un cas anodin pour un contrat
                d&apos;habitation classique.
              </p>
            </section>

            {/* 6. Calendrier */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le calendrier : dans quel ordre attaquer le second œuvre
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                L&apos;ordre n&apos;est pas une question d&apos;organisation, c&apos;est une question de technique : deux
                ou trois inversions suffisent à casser un travail déjà payé. La séquence que nous conseillons à nos
                clients, et qu&apos;ils ajustent avec chaque artisan :
              </p>
              <ol className="space-y-3 mb-5 list-none">
                {[
                  ['1. Les réseaux', 'électricité, plomberie, évacuations et chauffage passent en premier, tant que les murs sont ouverts.'],
                  ['2. La ventilation', 'le réseau de gaines se cale avec les réseaux, pas après : c’est un volume, il lui faut de la place.'],
                  ['3. Les sols', 'chape ou plancher sec selon la conception, avec le temps de séchage inscrit au planning.'],
                  ['4. Les doublages et cloisons', 'on referme seulement quand tout ce qui doit passer dedans est passé et contrôlé.'],
                  ['5. Les menuiseries intérieures', 'portes, escalier, plinthes : l’escalier se commande bien plus tôt que sa pose.'],
                  ['6. Les finitions', 'peintures, revêtements muraux, appareillage électrique, puis équipements de cuisine et de salle de bains.'],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le point de bascule est le passage 3 vers 4 : une fois les doublages fermés, tout oubli se paie en
                démolition. Et une règle propre à l&apos;ossature bois, à répéter à chaque intervenant qui entre chez
                vous :{' '}
                <strong className="text-primary font-semibold">
                  on ne perce pas le frein-vapeur sans réparer l&apos;étanchéité derrière
                </strong>
                . C&apos;est pour cela qu&apos;une contre-cloison technique se prévoit dès la conception : elle offre un
                vide où faire passer les réseaux sans jamais toucher au plan d&apos;étanchéité à l&apos;air que nous
                venons de vous livrer.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Côté saison, septembre est le bon mois pour ouvrir le dossier. Entre l&apos;étude, le dépôt et
                l&apos;instruction du{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F1986"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  permis de construire
                </a>
                , le montage du financement et la fabrication de l&apos;ossature à l&apos;atelier, un dossier lancé à la
                rentrée vise un levage au printemps. C&apos;est le rythme naturel de nos chantiers en Gironde, et le
                découpage des lots est la toute première chose à caler avec votre banque.
              </p>
            </section>

            <Figure
              src="/images/chantiers/ossature-bois-bardage-douglas-facade-tuiles-gironde.webp"
              w={1200}
              h={900}
              alt="Ouvrage à ossature bois en Gironde, bardage douglas, couverture en tuiles, fenêtre posée et gouttière raccordée, abords non terminés"
              caption="Enveloppe close et couverte, menuiserie posée, gouttière raccordée : de dehors l'ouvrage semble fini alors que tout le second œuvre reste à faire."
            />

            {/* 7. Budget et méthode */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce que ça change au budget, et comment nous travaillons en Gironde
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Vous lirez partout que le second œuvre représente tel ou tel pourcentage du coût total.{' '}
                <strong className="text-primary font-semibold">Nous ne donnerons pas ce chiffre</strong>, parce
                qu&apos;il n&apos;existe pas : sur nos propres chantiers en 2026, l&apos;écart entre deux projets de
                surface identique tient presque entièrement aux équipements choisis, et une cuisine, une salle de bains
                et un mode de chauffage peuvent faire varier une enveloppe de second œuvre du simple au double. Un
                pourcentage moyen ne vous apprendrait rien sur votre maison.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ce que nous pouvons dire, parce que nous le constatons chantier après chantier : les lots invisibles
                coûtent toujours plus cher que ce que les clients avaient prévu (réseaux, ventilation, chape,
                raccordements), et les lots visibles moins (peinture, sols). Les gens budgètent ce qu&apos;ils voient.
                Prévoyez large sur ce qui disparaît dans les murs.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Côté financement, deux réflexes. D&apos;abord, une banque prête contre des devis, pas contre des heures
                de bricolage : si vous prévoyez de l&apos;auto-finition, faites-le savoir dès le montage du dossier et
                chiffrez au moins les matériaux. Ensuite, la fiscalité applicable n&apos;est pas la même selon
                qu&apos;il s&apos;agit d&apos;une construction neuve ou de travaux sur un logement existant : cela se
                vérifie projet par projet, et cela figure sur nos devis. Pour des ordres de grandeur au mètre carré, notre
                guide des{' '}
                <a href="/blog/extension-ossature-bois-prix-m2" className={lienInterne}>
                  prix d&apos;une extension en ossature bois au m²
                </a>{' '}
                détaille les postes ; si vous hésitez encore sur la nature même de l&apos;ouvrage, la comparaison entre{' '}
                <a href="/blog/veranda-ou-extension-ossature-bois" className={lienInterne}>
                  véranda et extension en ossature bois
                </a>{' '}
                pose les bonnes questions, et notre article sur{' '}
                <a href="/blog/surelevation-ossature-bois-maison" className={lienInterne}>
                  la surélévation en ossature bois
                </a>{' '}
                traite le cas où l&apos;on agrandit par le haut.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Notre façon de travailler, depuis Les Billaux, à côté de Libourne, et sur toute la Gironde, tient en
                trois lignes. Nous chiffrons le hors d&apos;eau hors d&apos;air poste par poste, sans forfait opaque.
                Nous écrivons noir sur blanc ce qui n&apos;est pas inclus, parce que c&apos;est là que naissent les
                litiges. Et nous remettons les plans et les réservations à vos artisans, pour qu&apos;ils prennent la
                suite sans repartir de zéro. Nous ne faisons pas le second œuvre : c&apos;est un choix, pas une lacune,
                et il nous permet d&apos;être excellents sur la coquille, celle qui doit tenir cinquante ans. Vous
                trouverez le détail de cette offre sur notre page{' '}
                <a href="/constructeur-ossature-bois-gironde" className={lienInterne}>
                  constructeur d&apos;ossature bois en Gironde
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
              Hors d&apos;eau hors d&apos;air : vos questions
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
              Une frontière claire vaut mieux qu&apos;une promesse floue
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Un chantier se gâte rarement sur la technique, il se gâte sur ce que chacun croyait inclus. Dire dès le
              premier rendez-vous où s&apos;arrête notre travail et où commence le vôtre, c&apos;est ce qui vous permet
              de piloter votre budget au lieu de le subir. C&apos;est notre méthode chez L&apos;Esprit Bois, entreprise
              qualifiée Qualibat, à Libourne et dans toute la Gironde : ossature, charpente, couverture, bardage,
              menuiseries, isolation et étanchéité à l&apos;air, listés poste par poste, et un second œuvre que vous
              confiez en connaissance de cause.
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
