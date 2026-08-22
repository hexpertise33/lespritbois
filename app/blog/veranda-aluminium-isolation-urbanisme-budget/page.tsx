import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER =
  '/images/blog/veranda-aluminium-isolation-urbanisme-budget/veranda-aluminium-extension-vitree-exterieur.webp';

export const metadata: Metadata = buildMetadata({
  title:
    "Véranda aluminium : isolation, urbanisme, budget",
  description:
    "Rupture de pont thermique, autorisation d'urbanisme, surface taxable et budget d'une véranda en aluminium : le guide d'un artisan à Libourne (Gironde).",
  keywords:
    "véranda aluminium, véranda aluminium Gironde, véranda aluminium Libourne, prix véranda aluminium au m2, isolation véranda aluminium, déclaration préalable véranda, rupture de pont thermique véranda, extension véranda alu, toiture véranda, véranda quatre saisons",
  path: '/blog/veranda-aluminium-isolation-urbanisme-budget',
  ogImage: COVER,
  ogTitle:
    "Véranda en aluminium : isolation, urbanisme et budget, le guide pour agrandir sa maison en Gironde",
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
        <figure key={img.alt}>
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
        name: 'Véranda en aluminium',
        item: 'https://lesprit-bois.fr/blog/veranda-aluminium-isolation-urbanisme-budget',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      "Véranda en aluminium : isolation, urbanisme et budget, le guide pour agrandir sa maison en Gironde",
    description:
      "Une véranda aluminium se juge d'abord sur son confort douze mois par an : rupture de pont thermique des profilés, qualité des vitrages et surtout traitement de la toiture. Statut d'urbanisme, formalités selon la surface et fourchettes de prix 2026 au m² posé, par un artisan à Libourne (Gironde).",
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
    datePublished: '2026-08-01',
    dateModified: '2026-08-01',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/veranda-aluminium-isolation-urbanisme-budget',
    },
    about: [
      { '@type': 'Thing', name: 'véranda aluminium' },
      { '@type': 'Thing', name: 'extension de maison' },
      { '@type': 'Thing', name: 'isolation' },
      { '@type': 'Thing', name: 'urbanisme' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Une véranda en aluminium est-elle vraiment utilisable toute l’année ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, à trois conditions : des profilés à rupture de pont thermique, des vitrages adaptés à chaque orientation et surtout une toiture traitée comme un vrai élément d'isolation, pas comme une simple couverture transparente. Une véranda vendue « quatre saisons » avec une toiture non traitée devient invivable en août et froide en janvier : c'est la déception la plus fréquente que nous rencontrons sur nos chantiers en Gironde.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faut-il une déclaration préalable ou un permis de construire pour une véranda ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "En dessous de 5 m² créés, il n'y a pas de formalité, sauf en secteur protégé où une déclaration préalable reste exigée. De 5 à 20 m², une déclaration préalable suffit ; ce seuil est porté à 40 m² lorsque la construction se situe en zone urbaine d'une commune couverte par un PLU ou un POS. Au-delà, c'est un permis de construire. Et si la surface de plancher totale de la maison dépasse 150 m² après travaux, le recours à un architecte devient obligatoire, avec permis de construire.",
        },
      },
      {
        '@type': 'Question',
        name: 'Véranda aluminium ou extension en ossature bois : que choisir ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Nous posons les deux, donc voici notre position franche : la véranda aluminium gagne quand vous cherchez la lumière, la transparence, un chantier plus court et un budget plus contenu. L'extension en ossature bois gagne dès que vous voulez une vraie pièce isolée toute l'année, des murs porteurs pour meubler et ranger, et un meilleur confort d'été. Si la pièce doit devenir une chambre ou un bureau occupé en permanence, l'ossature bois est le bon choix.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quel est le prix d’une véranda en aluminium au m² en 2026 ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Les fourchettes 2026 observées se situent autour de 1 200 à 1 900 €/m² posé en gamme courante, et jusqu'à 2 500 €/m² environ en gamme haute avec profilés renforcés, toiture isolée, vitrages performants, motorisation et stores intégrés. Une véranda de 20 m² représente le plus souvent une enveloppe de plusieurs dizaines de milliers d'euros TTC selon la gamme. La dalle, la toiture, le vitrage, les stores et l'électricité font l'essentiel de l'écart ; seul un devis sur plan engage.",
        },
      },
      {
        '@type': 'Question',
        name: 'Comment éviter la surchauffe d’été dans une véranda en Gironde ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La surchauffe se règle par le haut, pas par le climatiseur. On combine une toiture adaptée (vitrage à contrôle solaire, panneaux sandwich isolants ou solution mixte), une ventilation haute qui évacue l'air chaud, des ouvrants bien répartis pour créer un balayage, et une protection solaire extérieure : store de toiture, brise-soleil orientables ou pergola bioclimatique en prolongement. Sous notre climat girondin, ces protections ne sont pas une option de confort, elles conditionnent l'usage de la pièce.",
        },
      },
      {
        '@type': 'Question',
        name: 'Une véranda en aluminium demande-t-elle de l’entretien ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Très peu sur la structure : l'alliage aluminium est inaltérable et le thermolaquage conserve sa teinte RAL pendant des années, un lavage à l'eau savonneuse une à deux fois par an suffit. L'entretien réel porte sur les points d'eau et les mouvements : dégager chéneaux et descentes, contrôler les joints d'étanchéité et le solin de raccord à la maison, nettoyer les rails des coulissants et graisser légèrement quincailleries et motorisations.",
        },
      },
    ],
  },
];

const urbanisme = [
  [
    'Moins de 5 m² créés',
    'Aucune formalité',
    'Sauf en secteur protégé, où une déclaration préalable reste exigée',
  ],
  [
    'De 5 à 20 m²',
    'Déclaration préalable',
    'Cas le plus courant pour un jardin d’hiver ou une petite extension de séjour',
  ],
  [
    'Jusqu’à 40 m²',
    'Déclaration préalable',
    'Uniquement en zone urbaine d’une commune couverte par un PLU (ou un POS)',
  ],
  [
    'Au-delà de ces seuils',
    'Permis de construire',
    'Instruction plus longue : à anticiper dans le calendrier du chantier',
  ],
  [
    'Plus de 150 m² au total après travaux',
    'Permis + architecte',
    'Le recours à un architecte devient obligatoire pour la surface de plancher totale',
  ],
];

const budget = [
  [
    'Gamme courante',
    'Profilés à rupture de pont thermique, double vitrage, toiture standard',
    'environ 1 200 à 1 900 €/m² posé',
  ],
  [
    'Gamme haute',
    'Profilés renforcés, toiture isolée, vitrages performants, motorisation, stores intégrés',
    'jusqu’à 2 500 €/m² environ',
  ],
  [
    'Projet type 20 m²',
    'Dalle, structure, toiture, vitrages, menuiseries et raccords',
    'plusieurs dizaines de milliers d’euros TTC selon la gamme',
  ],
];

const faq = [
  {
    q: 'Une véranda en aluminium est-elle vraiment utilisable toute l’année ?',
    r: (
      <>
        Oui, à trois conditions : des profilés à rupture de pont thermique, des vitrages adaptés à chaque orientation et
        surtout une toiture traitée comme un vrai élément d&apos;isolation, pas comme une simple couverture
        transparente. Une véranda vendue « quatre saisons » avec une toiture non traitée devient invivable en août et
        froide en janvier : c&apos;est la déception la plus fréquente que nous rencontrons sur nos chantiers en Gironde.
      </>
    ),
  },
  {
    q: 'Faut-il une déclaration préalable ou un permis de construire pour une véranda ?',
    r: (
      <>
        En dessous de 5 m² créés, il n&apos;y a pas de formalité, sauf en secteur protégé où une déclaration préalable
        reste exigée. De 5 à 20 m², une déclaration préalable suffit ; ce seuil est porté à 40 m² lorsque la
        construction se situe en zone urbaine d&apos;une commune couverte par un PLU ou un POS. Au-delà, c&apos;est un
        permis de construire. Et si la surface de plancher totale de la maison dépasse 150 m² après travaux, le recours
        à un architecte devient obligatoire, avec permis de construire.
      </>
    ),
  },
  {
    q: 'Véranda aluminium ou extension en ossature bois : que choisir ?',
    r: (
      <>
        Nous posons les deux, donc voici notre position franche : la véranda aluminium gagne quand vous cherchez la
        lumière, la transparence, un chantier plus court et un budget plus contenu. L&apos;extension en ossature bois
        gagne dès que vous voulez une vraie pièce isolée toute l&apos;année, des murs porteurs pour meubler et ranger,
        et un meilleur confort d&apos;été. Si la pièce doit devenir une chambre ou un bureau occupé en permanence,
        l&apos;ossature bois est le bon choix.
      </>
    ),
  },
  {
    q: 'Quel est le prix d’une véranda en aluminium au m² en 2026 ?',
    r: (
      <>
        Les fourchettes 2026 observées se situent autour de 1 200 à 1 900 €/m² posé en gamme courante, et jusqu&apos;à
        2 500 €/m² environ en gamme haute avec profilés renforcés, toiture isolée, vitrages performants, motorisation et
        stores intégrés. Une véranda de 20 m² représente le plus souvent une enveloppe de plusieurs dizaines de milliers
        d&apos;euros TTC selon la gamme. La dalle, la toiture, le vitrage, les stores et l&apos;électricité font
        l&apos;essentiel de l&apos;écart ; seul un devis sur plan engage.
      </>
    ),
  },
  {
    q: 'Comment éviter la surchauffe d’été dans une véranda en Gironde ?',
    r: (
      <>
        La surchauffe se règle par le haut, pas par le climatiseur. On combine une toiture adaptée (vitrage à contrôle
        solaire, panneaux sandwich isolants ou solution mixte), une ventilation haute qui évacue l&apos;air chaud, des
        ouvrants bien répartis pour créer un balayage, et une protection solaire extérieure : store de toiture,
        brise-soleil orientables ou pergola bioclimatique en prolongement. Sous notre climat girondin, ces protections ne
        sont pas une option de confort, elles conditionnent l&apos;usage de la pièce.
      </>
    ),
  },
  {
    q: 'Une véranda en aluminium demande-t-elle de l’entretien ?',
    r: (
      <>
        Très peu sur la structure : l&apos;alliage aluminium est inaltérable et le thermolaquage conserve sa teinte RAL
        pendant des années, un lavage à l&apos;eau savonneuse une à deux fois par an suffit. L&apos;entretien réel porte
        sur les points d&apos;eau et les mouvements : dégager chéneaux et descentes, contrôler les joints
        d&apos;étanchéité et le solin de raccord à la maison, nettoyer les rails des coulissants et graisser légèrement
        quincailleries et motorisations.
      </>
    ),
  },
];

export default function ArticleVerandaAluminiumPage() {
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
              alt="Véranda en aluminium : extension vitrée à profilés thermolaqués anthracite accolée à une maison, vue extérieure"
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
              <span className="text-secondary-fixed">Véranda en aluminium</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Vérandas aluminium
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Véranda en aluminium : isolation, urbanisme et budget, le guide pour agrandir sa maison en Gironde
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
              <span>1er août 2026</span>
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
                Une véranda en aluminium se juge d&apos;abord sur son confort douze mois par an — donc sur la rupture de
                pont thermique des profilés, la qualité des vitrages et surtout le traitement de la toiture — puis sur
                son statut d&apos;urbanisme, selon qu&apos;il s&apos;agit d&apos;un espace tampon non chauffé ou
                d&apos;une vraie extension chauffée. Le prix ne vient qu&apos;après.
              </strong>{' '}
              La faute que nous voyons le plus souvent sur nos chantiers autour de Libourne, c&apos;est la véranda
              vendue « quatre saisons » coiffée d&apos;une toiture qui la rend invivable en août et glaciale en janvier.
              Elle finit en débarras à géraniums. Voici, dans l&apos;ordre, les décisions qui font une véranda
              réellement habitable en Gironde.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* Usage */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Véranda aluminium : à quoi ça sert vraiment, et la question à trancher avant tout devis
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Sous le mot « véranda », nous rencontrons en réalité quatre projets très différents : la{' '}
                <strong className="text-primary font-semibold">extension de séjour</strong>, qui prolonge la pièce de
                vie et sert tous les jours ; la <strong className="text-primary font-semibold">pièce à vivre</strong>{' '}
                dédiée (salle à manger, bureau, salle de jeux) ; le{' '}
                <strong className="text-primary font-semibold">jardin d&apos;hiver</strong>, consacré aux plantes et à
                la lumière ; et l&apos;<strong className="text-primary font-semibold">espace tampon</strong>, sas
                solarisé entre l&apos;extérieur et la maison, qui coupe le vent et récupère les apports solaires
                d&apos;hiver.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ces quatre usages ne se construisent pas de la même façon, et tout se joue sur une seule question, à
                trancher <strong className="text-primary font-semibold">avant de demander le moindre devis</strong> :
                votre véranda sera-t-elle chauffée et ouverte sur la maison, ou non chauffée et séparée par une
                menuiserie ?
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une véranda <strong className="text-primary font-semibold">chauffée et communicante</strong> est
                traitée comme une extension de l&apos;habitation : elle emporte des exigences thermiques, et donc des
                choix de profilés, de vitrages et de toiture nettement plus engageants. Une véranda{' '}
                <strong className="text-primary font-semibold">non chauffée, isolable par une menuiserie</strong> reste
                un espace tampon solarisé : elle échappe à ces exigences tout en améliorant réellement le confort de la
                pièce qu&apos;elle protège. Le régime exact se confirme avec le service urbanisme de votre commune et,
                pour une extension chauffée d&apos;une certaine surface, avec un bureau d&apos;études thermiques —
                c&apos;est ce que nous faisons sur nos chantiers plutôt que de vous laisser deviner.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Notre conseil : décidez de l&apos;usage réel, pas de l&apos;usage rêvé. Une véranda « au cas où » qu&apos;on
                se promet de chauffer plus tard coûte deux fois : une fois à la pose, une fois quand il faut reprendre
                la toiture.
              </p>
            </section>

            <Figure
              src="/images/blog/veranda-aluminium-isolation-urbanisme-budget/interieur-veranda-vitree-extension-sejour.webp"
              w={1200}
              h={801}
              alt="Intérieur d'une véranda vitrée aménagée en extension de séjour, profilés fins et grandes baies coulissantes"
              caption="Une véranda ouverte en permanence sur le séjour est traitée comme une pièce chauffée : profilés, vitrages et toiture changent de niveau d’exigence."
            />

            {/* Pourquoi l'alu */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Pourquoi l&apos;aluminium s&apos;impose sur une véranda — et où il l&apos;est moins
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Sur une véranda, la matière de la structure décide de la quantité de lumière. Et c&apos;est là que
                l&apos;aluminium prend l&apos;avantage : à résistance mécanique égale, les{' '}
                <strong className="text-primary font-semibold">profilés sont plus fins</strong> que dans n&apos;importe
                quel autre matériau. Moins de matière, plus de verre : on obtient de grandes surfaces vitrées, des
                coulissants larges et des angles vitrés qui seraient impossibles autrement.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Des profilés fins et rigides', 'ils portent de grandes portées et libèrent la vue ; sur un projet ouvert plein sud, c’est ce qui fait la différence entre une véranda et une cage.'],
                  ['Un alliage inaltérable', 'l’aluminium ne rouille pas, ne gonfle pas, ne travaille pas avec l’humidité — un vrai atout à proximité des rivières et dans les fonds de vallée du Libournais.'],
                  ['Le thermolaquage', 'la teinte est cuite sur le profilé : elle tient dans le temps, se décline dans toute la palette RAL et permet d’accorder la véranda aux menuiseries et à la toiture existantes, y compris en bicoloration intérieur/extérieur.'],
                  ['Un entretien quasi nul', 'un lavage à l’eau savonneuse une à deux fois par an, sans ponçage ni traitement de surface à reprendre.'],
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
                Où l&apos;aluminium est-il moins pertinent ? Chez L&apos;Esprit Bois, nous vendons et posons{' '}
                <strong className="text-primary font-semibold">le bois et l&apos;aluminium</strong>, nous n&apos;avons
                donc aucun intérêt à pousser une matière. Et nous le disons franchement : dès que le projet devient une{' '}
                <em>vraie pièce</em> occupée toute l&apos;année — chambre, bureau permanent, cuisine — une extension en
                ossature bois est supérieure. Elle offre des murs isolés et porteurs, donc des rangements et des
                meubles au mur, une inertie et un confort d&apos;été bien meilleurs, et une facture de chauffage sans
                mauvaise surprise.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                La véranda aluminium gagne, elle, sur la lumière, la transparence, un chantier plus court et un budget
                plus contenu. Notre arbitrage tient en une phrase : <strong className="text-primary font-semibold">si
                vous voulez du ciel et de la vue, c&apos;est l&apos;alu ; si vous voulez une pièce de plus, c&apos;est
                l&apos;ossature bois.</strong> Pour comparer les ordres de grandeur, notre guide sur{' '}
                <a href="/blog/extension-ossature-bois-prix-m2" className={lienInterne}>
                  le prix au m² d&apos;une extension en ossature bois
                </a>{' '}
                donne l&apos;autre moitié du raisonnement.
              </p>
            </section>

            <Figure
              src="/images/realisations/pergola-aluminium-toit-polycarbonate-libourne-4.webp"
              w={825}
              h={1100}
              alt="Profilés aluminium thermolaqués anthracite d’une structure adossée, chantier de L’Esprit Bois à Saint-Pey-de-Castets"
              caption="La teinte RAL est cuite au four sur le profilé : elle ne s’écaille pas et ne se repeint pas. Ici sur une de nos pergolas aluminium à Saint-Pey-de-Castets — le traitement est identique sur les profilés de véranda."
            />

            {/* Rupture de pont thermique */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le point qui décide de tout : la rupture de pont thermique et les vitrages
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                L&apos;aluminium a un défaut connu : c&apos;est un excellent conducteur. Brut, un profilé transmet
                intégralement le froid extérieur vers l&apos;intérieur — d&apos;où les ruissellements de condensation
                des anciennes vérandas et cette sensation de paroi glacée en janvier. La réponse technique est la{' '}
                <strong className="text-primary font-semibold">rupture de pont thermique</strong> : le profilé est
                composé de deux parties, l&apos;une extérieure et l&apos;autre intérieure, reliées par des{' '}
                <strong className="text-primary font-semibold">barrettes en polyamide</strong> qui interrompent le
                transfert de chaleur.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est le premier point à vérifier sur un devis, et il ne se voit pas sur une photo. Une véranda
                sans rupture de pont thermique peut être très bien fabriquée par ailleurs : elle restera inconfortable
                et sujette à la condensation dès qu&apos;elle est chauffée. Sur nos projets, plus la barrette est large
                et travaillée, meilleur est le comportement de la véranda — et plus les menuiseries résistent aux écarts
                de température entre une face plein sud et une face nord.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Les vitrages viennent ensuite, et ils ne se choisissent pas identiques sur toutes les faces :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le double vitrage à isolation renforcée', 'la base d’une véranda destinée à être chauffée : il limite les déperditions et supprime l’effet de paroi froide en hiver.'],
                  ['Le vitrage à contrôle solaire', 'il filtre une partie de l’énergie du soleil sans assombrir la pièce ; on le réserve aux faces sud et ouest, les plus exposées l’après-midi.'],
                  ['Le facteur solaire', 'c’est l’arbitrage central : trop d’apports et la pièce surchauffe l’été, trop peu et elle perd sa chaleur gratuite d’hiver. On le module face par face, selon l’orientation et les masques (arbres, mur voisin, débord de toit).'],
                  ['Les ouvrants', 'coulissants à galandage, frappe ou accordéon : leur répartition conditionne la ventilation traversante autant que l’usage quotidien.'],
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
                Une véranda bien conçue n&apos;a pas le même vitrage partout. C&apos;est un travail d&apos;orientation,
                pas de catalogue.
              </p>
            </section>

            <Figure
              src="/images/blog/veranda-aluminium-isolation-urbanisme-budget/profile-aluminium-rupture-pont-thermique-double-vitrage.webp"
              w={1200}
              h={800}
              alt="Coupe d'un profilé aluminium à rupture de pont thermique avec échantillon de double vitrage, détail technique de véranda"
              caption="En coupe, on voit les deux demi-profilés séparés par les barrettes isolantes : c’est cette ligne-là qu’il faut chercher sur un devis."
            />

            {/* Toiture */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                La toiture, poste le plus sous-estimé d&apos;une véranda
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Si nous ne devions retenir qu&apos;un conseil de cet article, ce serait celui-ci :{' '}
                <strong className="text-primary font-semibold">c&apos;est la toiture qui décide si votre véranda sera
                habitable ou non.</strong> Le soleil d&apos;été frappe à la verticale, la chaleur monte et stagne sous
                le plafond : une toiture mal traitée transforme la plus belle des vérandas en serre à tomates de juin à
                septembre — et en passoire thermique la nuit d&apos;hiver, puisque c&apos;est aussi par le haut que la
                chaleur s&apos;échappe.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Trois familles de solutions, à combiner plutôt qu&apos;à opposer :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le vitrage de toiture à contrôle solaire', 'il conserve la lumière zénithale et la vue sur le ciel, tout en filtrant une part de l’énergie solaire. C’est le choix de ceux qui veulent une véranda lumineuse — à condition de l’accompagner d’une protection mobile.'],
                  ['Les panneaux sandwich isolants', 'une âme isolante entre deux parements : c’est la solution la plus efficace contre la surchauffe et les déperditions, au prix d’une toiture opaque. Idéale au-dessus d’un coin repas ou d’un bureau.'],
                  ['La toiture mixte', 'notre configuration préférée : des panneaux isolants sur la partie proche de la maison, des zones vitrées en périphérie. On garde la lumière là où elle sert, on isole là où l’on s’installe.'],
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
                À cela s&apos;ajoutent les équipements qui gèrent l&apos;été, et qu&apos;on regrette systématiquement de
                ne pas avoir prévus dès la conception : une{' '}
                <strong className="text-primary font-semibold">ventilation haute</strong> (ouvrants de toiture ou
                lanterneaux motorisés) pour évacuer l&apos;air chaud accumulé au plafond, des{' '}
                <strong className="text-primary font-semibold">stores de toiture</strong> intérieurs ou extérieurs — les
                extérieurs, qui arrêtent le rayonnement avant le vitrage, sont bien plus efficaces — et des{' '}
                <strong className="text-primary font-semibold">brise-soleil orientables</strong> en façade sud et ouest.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Autre piste que nous proposons souvent dans le Libournais : prolonger la véranda par une{' '}
                <a href="/pergolas" className={lienInterne}>
                  pergola bioclimatique en aluminium
                </a>{' '}
                dont les lames orientables ombragent la façade vitrée avant que le soleil ne la touche. Le principe est
                détaillé dans notre{' '}
                <a href="/blog/pergola-bioclimatique-aluminium-guide" className={lienInterne}>
                  guide de la pergola bioclimatique
                </a>
                . Deux ouvrages, une seule logique : on traite le soleil à l&apos;extérieur, jamais une fois qu&apos;il
                est entré.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Pergolas-aluminium-Libourne-9.webp"
              w={768}
              h={512}
              alt="Toiture à lames orientables d'une pergola bioclimatique en aluminium adossée à une maison, vue de dessous"
              caption="Traiter le soleil avant la façade vitrée : les lames orientables ferment l’ombre à midi et s’ouvrent le soir."
            />

            {/* Étanchéité */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Étanchéité, évacuation des eaux et raccord à la maison
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une véranda est un ouvrage qui se greffe sur un bâtiment existant : c&apos;est{' '}
                <strong className="text-primary font-semibold">à la jonction que naissent les sinistres</strong>, jamais
                au milieu du vitrage. Les infiltrations que nous sommes appelés à reprendre viennent presque toujours
                des mêmes endroits.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le solin de raccord', 'la liaison entre la toiture de la véranda et le mur de la maison doit être traitée par un solin correctement engagé et jointoyé, pas par un cordon de mastic posé en fin de chantier.'],
                  ['Les chéneaux et descentes', 'sur une véranda aluminium, l’eau de toiture est collectée par des chéneaux périphériques et souvent évacuée dans les poteaux. Il faut vérifier que le débit correspond à la surface couverte et raccorder la sortie au réseau existant, sinon l’eau se déverse au pied de la façade.'],
                  ['Le seuil de porte', 'point sensible entre le dedans et le dehors : un seuil bien conçu draine l’eau vers l’extérieur et reste franchissable. C’est là que se décide aussi l’accessibilité de plain-pied.'],
                  ['Les joints et l’étanchéité à l’air', 'sur une véranda chauffée, les défauts d’étanchéité à l’air ruinent le bénéfice des meilleurs vitrages et provoquent des courants d’air froid au sol.'],
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
                Reste le support. Une véranda repose sur une dalle et des fondations dimensionnées pour porter la
                structure et les vitrages — donc sur une étude du sol et des niveaux, avec un soubassement qui met le
                seuil hors d&apos;eau. En Gironde, entre sols argileux sujets au retrait-gonflement et terrains en
                pente, ce poste n&apos;est jamais une formalité : c&apos;est souvent lui qui explique l&apos;écart entre
                deux devis. Nous le traitons dans la continuité de nos autres ouvrages d&apos;
                <a href="/amenagement-exterieur" className={lienInterne}>
                  aménagement extérieur
                </a>
                , terrasse et abords compris.
              </p>
            </section>

            {/* Urbanisme */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Urbanisme en Gironde : quelles formalités selon la surface de votre véranda
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une véranda close et couverte crée de l&apos;emprise au sol et de la surface de plancher : elle relève
                donc du code de l&apos;urbanisme. Voici les seuils applicables, détaillés dans la{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F17578"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  fiche officielle de la déclaration préalable de travaux
                </a>
                , à confronter systématiquement au PLU de votre commune.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Surface créée</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Formalité</th>
                      <th className="px-4 py-3 font-label-md text-label-md">À retenir</th>
                    </tr>
                  </thead>
                  <tbody>
                    {urbanisme.map((ligne, i) => (
                      <tr key={ligne[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}>
                        <td className="px-4 py-3 text-primary font-semibold">{ligne[0]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 mb-5">
                Ces seuils ne sont qu&apos;un point de départ. Le{' '}
                <strong className="text-primary font-semibold">PLU de votre commune</strong> peut imposer une hauteur
                maximale, une implantation par rapport aux limites séparatives, un aspect ou une palette de teintes —
                autant de contraintes qui orientent la teinte RAL du thermolaquage et la forme de la toiture. Et dans
                le Libournais comme à Saint-Émilion, les périmètres de monuments historiques sont fréquents :{' '}
                <strong className="text-primary font-semibold">l&apos;avis de l&apos;Architecte des Bâtiments de France
                </strong>{' '}
                y est alors requis, ce qui allonge les délais et pèse sur les choix esthétiques. Mieux vaut le savoir
                avant de dessiner.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Dernier point à ne pas oublier : une véranda close et couverte génère de la surface taxable, la{' '}
                <strong className="text-primary font-semibold">
                  <a
                    href="https://www.service-public.gouv.fr/particuliers/vosdroits/F23263"
                    className={lienInterne}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    taxe d&apos;aménagement
                  </a>
                </strong>{' '}
                est donc due. Son calcul
                se fait au cas par cas ; renseignez-vous auprès du service urbanisme de votre mairie, qui vous donnera
                le montant applicable à votre projet. Nous détaillons la logique générale des autorisations dans notre{' '}
                <a href="/blog/autorisation-urbanisme-abri-carport-pergola-2026" className={lienInterne}>
                  guide des autorisations d&apos;urbanisme 2026
                </a>
                , et nous montons le dossier avec vous.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/IMG-20240712-WA0039-opt.webp"
              w={825}
              h={1100}
              alt="Extension vitrée adossée à une maison, baie coulissante toute hauteur et raccord au mur existant, chantier de L’Esprit Bois à Génissac"
              caption="Un ouvrage adossé crée de l’emprise au sol : hauteur, implantation et teinte se vérifient au PLU avant de dessiner le raccord au mur. Ici notre extension de Génissac."
            />

            {/* Budget */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Budget 2026 : fourchettes honnêtes et ce qui fait vraiment varier la facture
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Parlons chiffres. Voici les{' '}
                <strong className="text-primary font-semibold">fourchettes 2026 observées</strong> sur le marché, TTC
                posé, hors aménagement intérieur (sol, peinture, mobilier, chauffage) :
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Gamme</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Ce qu’elle comprend</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Fourchette observée</th>
                    </tr>
                  </thead>
                  <tbody>
                    {budget.map((ligne, i) => (
                      <tr key={ligne[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}>
                        <td className="px-4 py-3 text-primary font-semibold">{ligne[0]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 mb-4">
                L&apos;écart entre le bas et le haut de ces fourchettes ne vient pas de la marque du profilé, mais de
                cinq postes :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'La dalle et les fondations : nature du sol, dénivelé, accès du chantier, reprise éventuelle d’une terrasse existante.',
                  'La toiture retenue : c’est le poste n° 1 des écarts, entre un vitrage simple à contrôle solaire et une toiture mixte à panneaux isolants.',
                  'Les vitrages : leur nombre, leur surface, leur performance et leur différenciation face par face.',
                  'Les stores et protections solaires : stores de toiture motorisés et brise-soleil orientables pèsent lourd, mais conditionnent l’usage en été.',
                  'L’électricité, le chauffage et la motorisation : éclairage, prises, ouvrants motorisés, capteurs, mode de chauffe.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un réflexe utile : <strong className="text-primary font-semibold">le prix au m² baisse quand la surface
                augmente.</strong> Les postes fixes — étude, raccord à la maison, chéneaux, amenée de chantier — se
                répartissent sur plus de mètres carrés. Passer de 12 à 18 m² coûte rarement 50 % de plus, et change
                radicalement l&apos;usage de la pièce. À l&apos;inverse, une toute petite véranda paie cher chaque mètre
                carré.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ces fourchettes varient selon la gamme et l&apos;accès au chantier :{' '}
                <strong className="text-primary font-semibold">seul un devis établi sur plan, après visite et relevé,
                nous engage.</strong>{' '}
                Vous pouvez voir comment nous traitons ces ouvrages vitrés et nos{' '}
                <a href="/constructions-bois" className={lienInterne}>
                  extensions et constructions
                </a>{' '}
                dans{' '}
                <a href="/realisations" className={lienInterne}>
                  nos réalisations en Gironde
                </a>
                , du carport aluminium à l&apos;extension complète.
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
              Véranda en aluminium : vos questions
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
              Une véranda qu&apos;on habite douze mois par an
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Une véranda en aluminium réussie, c&apos;est un usage tranché dès le départ, des profilés à rupture de
              pont thermique, des vitrages différenciés selon l&apos;orientation, une toiture pensée pour l&apos;été
              girondin et un raccord à la maison irréprochable. Le reste — la teinte RAL, la motorisation, le budget —
              découle de ces décisions. Nous vendons et posons le bois comme l&apos;aluminium : chez L&apos;Esprit
              Bois, entreprise certifiée Qualibat à Libourne et dans toute la Gironde, nous vous dirons franchement
              laquelle des deux solutions sert le mieux votre projet, formalités d&apos;urbanisme comprises.
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
