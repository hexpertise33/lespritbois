import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/source-adefrance/Carport-aluminium-Libourne-4.webp';

export const metadata: Metadata = buildMetadata({
  title: "Carport aluminium ou bois : comparatif 2026 en Gironde | L'Esprit Bois",
  description:
    "Budget 2026, entretien, portées et style : nous vendons et posons les deux matières. Le comparatif honnête carport aluminium / carport bois, avec verdict par profil, à Libourne et en Gironde.",
  keywords:
    "carport aluminium ou bois, comparatif carport bois aluminium, carport aluminium Gironde, carport bois Libourne, prix carport aluminium 2026, entretien carport aluminium, carport aluminium sur mesure, carport bois ou alu, abri voiture aluminium",
  path: '/blog/carport-aluminium-ou-bois-comparatif',
  ogImage: COVER,
  ogTitle:
    'Carport aluminium ou carport bois : le comparatif de décision (budget, entretien, style)',
  ville: 'Libourne',
});

const lienInterne =
  'text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors';

function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="-mx-6 md:-mx-16">
      <img
        loading="lazy"
        decoding="async"
        width="1200"
        height="800"
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
  a: { src: string; alt: string; caption: string };
  b: { src: string; alt: string; caption: string };
}) {
  return (
    <div className="-mx-6 md:-mx-16 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
      {[a, b].map((img) => (
        <figure key={img.src}>
          <img
            loading="lazy"
            decoding="async"
            width="800"
            height="600"
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
        name: 'Carport aluminium ou bois',
        item: 'https://lesprit-bois.fr/blog/carport-aluminium-ou-bois-comparatif',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      'Carport aluminium ou carport bois : le comparatif de décision (budget, entretien, style)',
    description:
      "Portées et emprise, style et thermolaquage, entretien sur quinze à vingt ans, budget 2026 posé, couverture et évacuation des eaux, urbanisme : le comparatif de décision entre carport aluminium et carport bois, avec une recommandation nette par profil de projet, par un artisan à Libourne (Gironde).",
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
    datePublished: '2026-07-31',
    dateModified: '2026-07-31',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/carport-aluminium-ou-bois-comparatif',
    },
    about: ['carport aluminium', 'carport bois', 'abri voiture', 'aménagement extérieur'],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Carport aluminium ou bois : lequel dure le plus longtemps ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Les deux durent très longtemps quand ils sont bien conçus, mais pas de la même façon. L'aluminium ne pourrit pas et ne se déforme pas : sa durée de vie dépend surtout de la tenue du thermolaquage et de la qualité des assemblages. Le bois, en essence adaptée et avec des poteaux désolidarisés du sol par des pieds métalliques, tient tout aussi longtemps, à condition d'un entretien régulier ou d'accepter le grisaillement. La vraie différence n'est pas la longévité, c'est le travail à fournir pour l'obtenir.",
        },
      },
      {
        '@type': 'Question',
        name: 'Un carport aluminium demande-t-il vraiment zéro entretien ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Presque, mais pas tout à fait. Un carport aluminium thermolaqué se contente d'un lavage à l'eau savonneuse une à deux fois par an, sans ponçage, sans lasure et sans saturateur. En revanche, les évacuations d'eau intégrées aux poteaux et les chéneaux doivent être dégagés des feuilles et des mousses, sinon ils débordent. C'est le seul entretien réellement obligatoire, et il prend une trentaine de minutes par an.",
        },
      },
      {
        '@type': 'Question',
        name: "Quel est le prix d'un carport aluminium posé en 2026 ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "En ordre de grandeur 2026, comptez environ 3 000 à 6 500 € TTC posé pour un carport aluminium une place, et 5 500 à 10 000 € TTC pour deux places, davantage en sur-mesure avec options (éclairage intégré, panneaux latéraux, occultation, lames orientables). Attention : ces montants concernent la structure posée. La dalle ou les plots béton, le terrassement, le raccordement des eaux pluviales et la taxe d'aménagement s'ajoutent et pèsent lourd dans le budget réel.",
        },
      },
      {
        '@type': 'Question',
        name: 'Un carport aluminium résiste-t-il au vent et à la neige en Gironde ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, à condition que la structure soit dimensionnée pour les charges de neige et de vent de votre zone, et correctement ancrée sur un support béton. Un carport aluminium n'est pas résistant « par nature » : ce sont la section des profilés, le nombre de poteaux, la portée retenue et la fixation au sol qui font la tenue. C'est exactement le même raisonnement qu'en bois, et c'est ce que nous vérifions au moment du devis.",
        },
      },
      {
        '@type': 'Question',
        name: "Faut-il une autorisation d'urbanisme différente selon la matière ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non. L'urbanisme ne regarde pas la matière mais l'emprise au sol créée : les seuils de déclaration préalable et de permis de construire sont les mêmes pour un carport aluminium et pour un carport bois. Seule l'instruction peut différer en secteur protégé ou aux abords d'un monument historique, où l'architecte des Bâtiments de France se prononce sur l'aspect, la teinte et le matériau. Le PLU de votre commune peut également imposer des règles d'aspect.",
        },
      },
    ],
  },
];

const budgets = [
  [
    'Carport bois, 1 place',
    'env. 2 000 à 6 000 € TTC posé',
    'Essence (pin traité, douglas, mélèze), type de couverture, finition lasurée ou brute',
  ],
  [
    'Carport bois, 2 places',
    'env. 4 000 à 9 000 € TTC posé',
    'Portée, section des poutres, toiture tuiles ou bac acier, bardage partiel',
  ],
  [
    'Carport aluminium, 1 place',
    'env. 3 000 à 6 500 € TTC posé',
    'Épaisseur des profilés, teinte RAL, type de couverture, évacuation intégrée',
  ],
  [
    'Carport aluminium, 2 places',
    'env. 5 500 à 10 000 € TTC posé',
    'Portée sans poteau intermédiaire, sur-mesure, options (LED, panneaux, occultation)',
  ],
];

const verdicts = [
  [
    'Maison contemporaine, menuiseries alu anthracite',
    'Aluminium',
    'La cohérence de teinte RAL avec les fenêtres et le portail fait toute la différence visuelle',
  ],
  [
    'Maison ancienne en pierre, longère, environnement boisé',
    'Bois',
    'Le bois dialogue avec la pierre et la tuile ; l’alu y paraît souvent rapporté',
  ],
  [
    'Deux voitures sans poteau au milieu, largeur contrainte',
    'Aluminium',
    'Portée dégagée avec des profilés fins : on gagne des centimètres utiles de chaque côté',
  ],
  [
    'Budget d’entrée serré, une place, bricoleur assumé',
    'Bois',
    'Ticket d’entrée plus doux et entretien réalisable soi-même, saturateur compris',
  ],
  [
    'Carport prolongeant une pergola bioclimatique existante',
    'Aluminium',
    'Même gamme, même RAL, même logique d’évacuation des eaux : l’ensemble se lit comme un seul ouvrage',
  ],
  [
    'Ouvrage à accorder à un bardage ou un abri de jardin bois',
    'Bois',
    'Unité de matière et réparabilité : on remplace une pièce sans dépendre d’un catalogue',
  ],
  [
    'Zéro entretien exigé, propriétaire souvent absent',
    'Aluminium',
    'Un lavage annuel et le dégagement des évacuations suffisent, sans échafaudage ni saturateur',
  ],
];

const faq = [
  {
    q: 'Carport aluminium ou bois : lequel dure le plus longtemps ?',
    r: (
      <>
        Les deux durent très longtemps quand ils sont bien conçus, mais pas de la même façon.
        L&apos;aluminium ne pourrit pas et ne se déforme pas : sa durée de vie dépend surtout de la tenue du
        thermolaquage et de la qualité des assemblages. Le bois, en essence adaptée et avec des poteaux
        désolidarisés du sol par des pieds métalliques, tient tout aussi longtemps, à condition d&apos;un entretien
        régulier ou d&apos;accepter le grisaillement. La vraie différence n&apos;est pas la longévité, c&apos;est le
        travail à fournir pour l&apos;obtenir.
      </>
    ),
  },
  {
    q: 'Un carport aluminium demande-t-il vraiment zéro entretien ?',
    r: (
      <>
        Presque, mais pas tout à fait. Un carport aluminium thermolaqué se contente d&apos;un lavage à l&apos;eau
        savonneuse une à deux fois par an, sans ponçage, sans lasure et sans saturateur. En revanche, les
        évacuations d&apos;eau intégrées aux poteaux et les chéneaux doivent être dégagés des feuilles et des
        mousses, sinon ils débordent. C&apos;est le seul entretien réellement obligatoire, et il prend une trentaine
        de minutes par an.
      </>
    ),
  },
  {
    q: "Quel est le prix d'un carport aluminium posé en 2026 ?",
    r: (
      <>
        En ordre de grandeur 2026, comptez environ 3 000 à 6 500 € TTC posé pour un carport aluminium une place, et
        5 500 à 10 000 € TTC pour deux places, davantage en sur-mesure avec options (éclairage intégré, panneaux
        latéraux, occultation, lames orientables). Attention : ces montants concernent la structure posée. La dalle
        ou les plots béton, le terrassement, le raccordement des eaux pluviales et la taxe d&apos;aménagement
        s&apos;ajoutent et pèsent lourd dans le budget réel.
      </>
    ),
  },
  {
    q: 'Un carport aluminium résiste-t-il au vent et à la neige en Gironde ?',
    r: (
      <>
        Oui, à condition que la structure soit dimensionnée pour les charges de neige et de vent de votre zone, et
        correctement ancrée sur un support béton. Un carport aluminium n&apos;est pas résistant «&nbsp;par
        nature&nbsp;» : ce sont la section des profilés, le nombre de poteaux, la portée retenue et la fixation au
        sol qui font la tenue. C&apos;est exactement le même raisonnement qu&apos;en bois, et c&apos;est ce que nous
        vérifions au moment du devis.
      </>
    ),
  },
  {
    q: "Faut-il une autorisation d'urbanisme différente selon la matière ?",
    r: (
      <>
        Non. L&apos;urbanisme ne regarde pas la matière mais l&apos;emprise au sol créée : les seuils de déclaration
        préalable et de permis de construire sont les mêmes pour un carport aluminium et pour un carport bois. Seule
        l&apos;instruction peut différer en secteur protégé ou aux abords d&apos;un monument historique, où
        l&apos;architecte des Bâtiments de France se prononce sur l&apos;aspect, la teinte et le matériau. Le PLU de
        votre commune peut également imposer des règles d&apos;aspect.
      </>
    ),
  },
];

export default function ArticleCarportAluOuBoisPage() {
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
              alt="Carport aluminium thermolaqué gris anthracite abritant deux voitures, réalisation en Gironde"
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
              <span className="text-secondary-fixed">Carport aluminium ou bois</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Carports
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Carport aluminium ou carport bois : le comparatif de décision (budget, entretien, style)
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/70 font-label-md text-label-md">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">person</span>
                David Bertrand, L&apos;Esprit Bois
              </span>
              <span className="text-secondary">·</span>
              <span>31 juillet 2026</span>
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
                Choisissez l&apos;aluminium si vous voulez un carport à l&apos;entretien quasi nul, aux lignes fines,
                capable de franchir deux places sans poteau central, avec l&apos;évacuation des eaux intégrée aux
                poteaux et une teinte RAL accordée à vos menuiseries. Choisissez le bois si vous cherchez la chaleur,
                le sur-mesure au centimètre, la réparabilité pièce par pièce et le meilleur bilan carbone, pour un
                ticket d&apos;entrée généralement plus doux.
              </strong>{' '}
              Nous sommes bien placés pour le dire sans arrière-pensée : chez L&apos;Esprit Bois, à Libourne, nous
              vendons et posons <strong className="text-primary font-semibold">les deux matières</strong>. Aucune ne
              nous rapporte davantage que l&apos;autre, et sur nos chantiers de Gironde nous conseillons régulièrement
              l&apos;alu à des clients venus pour du bois — et l&apos;inverse. Voici comment nous tranchons, cas par
              cas, sans match nul de complaisance.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Réponse en une minute */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Carport aluminium ou bois : notre réponse en une minute
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La question n&apos;est jamais «&nbsp;quelle est la meilleure matière&nbsp;», parce que les deux tiennent
                vingt ans quand elles sont bien mises en œuvre. La vraie question tient en trois points :{' '}
                <strong className="text-primary font-semibold">
                  ce que vous acceptez d&apos;entretenir, ce que votre maison peut porter visuellement, et ce que vous
                  voulez que le carport devienne dans dix ans.
                </strong>
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Vous ne voulez rien avoir à faire', 'l’aluminium thermolaqué, sans hésiter : un lavage annuel et le dégagement des évacuations suffisent.'],
                  ['Vous aimez la matière vivante et le sur-mesure', 'le bois : on adapte au centimètre, on répare une pièce isolée, et il vieillit en prenant de la patine.'],
                  ['Vous devez franchir une grande largeur', 'l’aluminium : à section égale, les profilés dégagent la portée avec beaucoup moins de masse apparente.'],
                  ['Votre priorité est le budget d’entrée', 'le bois, qui démarre plus bas à surface équivalente — l’écart se resserre sur la durée de vie complète.'],
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
                Le reste de cet article détaille chacun de ces arbitrages, avec nos fourchettes de prix 2026 et un{' '}
                <strong className="text-primary font-semibold">verdict par profil de projet</strong> en fin de guide.
                Si vous cherchez d&apos;abord à comprendre le produit bois lui-même, notre{' '}
                <a href="/blog/carport-bois-guide" className={lienInterne}>
                  guide du carport en bois
                </a>{' '}
                est le complément naturel de cette comparaison.
              </p>
            </section>

            <DuoFigure
              a={{
                src: '/images/source-adefrance/Carport-bois-Libourne-6.webp',
                alt: 'Carport bois deux places à toit plat abritant deux voitures, réalisation en Gironde',
                caption:
                  'Le bois : sections apparentes, poteaux posés sur plots béton et pièces remplaçables une par une.',
              }}
              b={{
                src: '/images/source-adefrance/Carport-aluminium-Libourne-3.webp',
                alt: 'Carport aluminium anthracite adossé avec panneaux latéraux ajourés, près de Libourne',
                caption:
                  'L’aluminium : profilés fins, teinte RAL au choix et habillages latéraux dessinés dans la même gamme.',
              }}
            />

            {/* 2. Structure, portées, emprise */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Structure, portées et emprise : ce que chaque matière permet vraiment
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un carport aluminium est assemblé à partir de{' '}
                <strong className="text-primary font-semibold">profilés extrudés</strong>, généralement en alliages
                de la série 6000, refermés par des platines et des équerres. L&apos;intérêt est mécanique autant
                qu&apos;esthétique : à résistance équivalente, un profilé creux mais épais et nervuré occupe beaucoup
                moins de place qu&apos;une poutre bois. Concrètement, on franchit une largeur de deux places sans
                poteau intermédiaire avec des montants qui restent visuellement discrets — c&apos;est le principal
                argument technique de l&apos;alu, et il est réel.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                En bois, la même portée se paie en section. Une poutre porteuse de grande longueur devient massive,
                parfois en lamellé-collé, et les poteaux passent en 15×15 ou 20×20 cm pour rester à l&apos;échelle. Ce
                n&apos;est pas un défaut : cette masse fait justement le caractère d&apos;un carport bois, et une
                structure généreuse est aussi une structure rassurante. Mais si votre allée est étroite et que chaque
                centimètre compte pour ouvrir les portières,{' '}
                <strong className="text-primary font-semibold">
                  l&apos;aluminium vous rend de l&apos;espace utile
                </strong>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Un point commun aux deux matières, souvent négligé : l&apos;ancrage. Un carport alu se boulonne sur
                platines dans un support béton dimensionné, un carport bois se pose sur pieds métalliques qui
                désolidarisent le poteau du sol. Dans les deux cas, ce qui se passe{' '}
                <em>sous</em> le carport décide de sa tenue au vent autant que la structure elle-même.
              </p>
            </section>

            {/* 3. Style et intégration */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Style et intégration : chaleur du bois, discrétion de l&apos;aluminium thermolaqué
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est le critère qui tranche le plus souvent, et le plus vite. Le bois apporte une matière vivante,
                une teinte qui évolue, un rapport d&apos;échelle qui s&apos;accorde naturellement à la pierre, à la
                tuile canal et aux volumes anciens. Sur une maison girondine traditionnelle, une longère ou une maison
                de bourg du Libournais, un carport en{' '}
                <strong className="text-primary font-semibold">douglas, mélèze ou pin maritime traité</strong> se pose
                comme s&apos;il avait toujours été là. Un carport alu, sur le même bâti, a tendance à se lire comme un
                objet rapporté.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                L&apos;aluminium joue exactement la carte inverse : la ligne droite, l&apos;arête vive, la surface mate
                uniforme. Le <strong className="text-primary font-semibold">thermolaquage</strong> — une poudre polyester
                cuite au four sur le profilé — permet de choisir la{' '}
                <strong className="text-primary font-semibold">teinte RAL</strong> exacte, avec des finitions lisses,
                mates ou sablées. Les gris anthracite et gris alu dominent, mais rien n&apos;empêche un noir profond, un
                blanc, un beige, voire un bicolore avec une teinte différente à l&apos;intérieur et à l&apos;extérieur.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Notre règle terrain :{' '}
                <strong className="text-primary font-semibold">
                  regardez d&apos;abord vos menuiseries et votre portail
                </strong>
                . Si la maison est équipée de fenêtres alu anthracite et d&apos;un portail assorti, un carport alu au
                même RAL crée une cohérence immédiate que le bois n&apos;obtiendra jamais. Si les menuiseries sont en
                bois, si la façade est en pierre ou en enduit chaux, l&apos;arbitrage bascule tout aussi nettement de
                l&apos;autre côté.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Carport-aluminium-Libourne-1.webp"
              alt="Carport aluminium thermolaqué anthracite associé à un claustra bois, aménagement extérieur en Gironde"
              caption="Poudre polyester cuite au four : le thermolaquage donne une surface mate parfaitement uniforme, qui supporte très bien le voisinage du bois."
            />

            {/* 4. Entretien */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Entretien : le vrai écart sur quinze à vingt ans
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est ici que les deux matières divergent le plus franchement, et il faut le dire sans détour :{' '}
                <strong className="text-primary font-semibold">
                  l&apos;aluminium demande beaucoup moins de travail que le bois
                </strong>
                . Un carport alu thermolaqué se lave à l&apos;eau savonneuse une à deux fois par an, sans produit
                abrasif ni nettoyeur haute pression sur le laquage. Il ne rouille pas, ne se fend pas, ne travaille pas
                avec l&apos;humidité. Le seul entretien réellement obligatoire concerne l&apos;évacuation des eaux :
                chéneaux et descentes intégrées doivent être dégagés des feuilles, sous peine de débordement.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Côté bois, l&apos;entretien dépend du résultat visé. Si vous acceptez le{' '}
                <strong className="text-primary font-semibold">grisaillement</strong>, un bois de classe d&apos;emploi
                adaptée (classe 3 pour les parties abritées, classe 4 pour tout élément en contact avec l&apos;humidité
                permanente) ne demande qu&apos;une vérification annuelle des fixations et des évacuations. Si vous
                voulez conserver la teinte d&apos;origine, comptez une application de saturateur ou de lasure tous les
                deux à trois ans, soit une demi-journée à une journée de travail à chaque fois sur un carport deux
                places. Sur vingt ans, cela fait six à huit passages.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Mais l&apos;alu a aussi son point faible, et nous préférons le dire :{' '}
                <strong className="text-primary font-semibold">la réparabilité</strong>. Une rayure profonde dans un
                thermolaquage se retouche, jamais parfaitement. Un profilé accidenté se remplace en commandant la pièce
                au fabricant, ce qui suppose que la gamme existe encore. En bois, on remplace une panne, une lame ou un
                poteau avec du bois de scierie et une journée d&apos;atelier. Les garanties constructeur sur le
                thermolaquage sont généralement longues ; leur durée et leurs conditions exactes se vérifient au devis,
                fabricant par fabricant.
              </p>
            </section>

            {/* 5. Budget 2026 */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Budget 2026 : ce que coûte chaque solution, posée
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Voici les ordres de grandeur que nous constatons sur le marché en 2026, TTC et pose comprise. Ce sont
                des <strong className="text-primary font-semibold">fourchettes indicatives</strong>, pas des prix
                fermes : le sur-mesure, la portée et les options peuvent largement dépasser le haut de fourchette.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Configuration</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Fourchette 2026</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Ce qui fait varier</th>
                    </tr>
                  </thead>
                  <tbody>
                    {budgets.map((ligne, i) => (
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
                Le piège classique, dans les deux matières, c&apos;est de comparer des prix catalogue.{' '}
                <strong className="text-primary font-semibold">
                  Un prix affiché correspond presque toujours à la structure seule.
                </strong>{' '}
                Or un carport ne se pose pas sur l&apos;herbe : il faut un support. Quatre postes s&apos;ajoutent
                systématiquement au budget réel, et ils ne sont pas anecdotiques :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le terrassement et le support', 'dalle béton, plots ou longrines selon la nature du sol — les terrains argileux du Libournais demandent souvent plus de fondation qu’on ne l’imagine.'],
                  ['Le raccordement des eaux pluviales', 'un carport crée une surface de ruissellement : il faut conduire l’eau quelque part, vers un puisard, un regard ou le réseau existant.'],
                  ['Les options', 'éclairage, panneaux latéraux, occultation, bardage d’un côté : c’est le poste le plus élastique, dans les deux matières.'],
                  ['La taxe d’aménagement', 'due selon la nature et la surface de l’ouvrage créé, elle se calcule sur des valeurs revalorisées chaque année et surprend beaucoup de propriétaires.'],
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
                Le constat honnête, en fin de compte :{' '}
                <strong className="text-primary font-semibold">
                  le bois est moins cher à l&apos;achat, l&apos;aluminium est moins cher à posséder
                </strong>
                . L&apos;écart initial de quelques centaines à quelques milliers d&apos;euros se rattrape en partie sur
                quinze ans, en produits de finition et surtout en temps passé. Si votre temps a de la valeur, intégrez-le
                au calcul.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Carport-bois-Libourne-5.webp"
              alt="Charpente de carport bois sur mesure en cours de montage sur dalle béton, chantier en Gironde"
              caption="Sous l'ouvrage, le poste qu'on oublie de chiffrer : dalle, plots ou longrines selon la nature du sol, avant même la première poutre."
            />

            {/* 6. Couverture, évacuation et options */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Couverture, évacuation des eaux et options (éclairage, panneaux latéraux, occultation)
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un carport bois se couvre le plus souvent en tuiles — la meilleure intégration quand la maison est en
                tuiles, mais un poids réel à reprendre —, en bac acier léger et économique, en polycarbonate pour laisser
                passer la lumière, voire en toiture végétalisée si la structure et l&apos;étanchéité sont prévues pour.
                L&apos;évacuation se fait par une gouttière rapportée et une descente extérieure, qu&apos;on choisit
                soignée si on ne veut pas gâcher la ligne de l&apos;ouvrage.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Côté aluminium, la couverture fait partie du système : tôle ou panneau alu, remplissage
                polycarbonate, verre feuilleté sur certaines gammes, ou{' '}
                <strong className="text-primary font-semibold">lames orientables</strong> pour un carport-pergola
                capable de s&apos;ouvrir. Surtout,{' '}
                <strong className="text-primary font-semibold">
                  l&apos;évacuation des eaux est intégrée dans la structure
                </strong>{' '}
                : chéneau périphérique dissimulé dans la poutre, descente cachée dans le poteau, sortie en pied. Sur le
                plan de l&apos;étanchéité et de la propreté visuelle, c&apos;est un avantage net de l&apos;alu, à
                condition de nettoyer ces circuits une fois par an.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Les options suivent la même logique. En alu, elles sont pensées dans les profilés :{' '}
                <strong className="text-primary font-semibold">bandeaux LED intégrés</strong> et pilotables, panneaux
                latéraux pleins ou vitrés, stores zip d&apos;occultation coulissant dans des coulisses dédiées,
                motorisation et pilotage à distance quand le modèle est bioclimatique. En bois, tout cela est
                réalisable — nous le faisons — mais les câbles et les rails demandent un travail de menuiserie
                supplémentaire pour rester invisibles.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Si votre projet penche vers un carport-pergola à lames orientables, notre{' '}
                <a href="/blog/pergola-bioclimatique-aluminium-guide" className={lienInterne}>
                  guide de la pergola bioclimatique en aluminium
                </a>{' '}
                détaille le fonctionnement des lames, la motorisation et les capteurs de pluie et de vent.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Pergolas-aluminium-Libourne-1.webp"
              alt="Structure aluminium adossée couvrant un accès voiture, poutre périphérique sans gouttière apparente, Gironde"
              caption="Aucune gouttière rapportée sur la ligne de rive : l'eau court dans la poutre puis descend dans le poteau, un circuit à dégager une fois par an."
            />

            {/* 7. Urbanisme */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Urbanisme à Libourne et en Gironde : les formalités à ne pas oublier
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Bonne nouvelle pour l&apos;arbitrage :{' '}
                <strong className="text-primary font-semibold">
                  l&apos;urbanisme ne fait aucune différence entre l&apos;aluminium et le bois
                </strong>
                . Ce qui compte, c&apos;est l&apos;emprise au sol créée. En principe, un ouvrage de moins de 5 m²
                échappe à toute formalité, une déclaration préalable s&apos;impose au-delà, et l&apos;on bascule vers le
                permis de construire à partir de 20 m² — seuil porté à 40 m² pour une extension en zone urbaine couverte
                par un PLU. La taxe d&apos;aménagement peut par ailleurs s&apos;appliquer selon la nature de
                l&apos;ouvrage.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                À Libourne et dans les communes du Libournais, deux points méritent une vérification systématique. Le{' '}
                <strong className="text-primary font-semibold">PLU communal</strong> d&apos;abord, qui peut imposer des
                règles d&apos;aspect, de teinte, de pente de toiture ou de recul par rapport aux limites séparatives. Les{' '}
                <strong className="text-primary font-semibold">secteurs protégés</strong> ensuite : aux abords d&apos;un
                monument historique, l&apos;architecte des Bâtiments de France se prononce sur l&apos;aspect, et son
                avis peut orienter vers une matière ou une teinte plutôt qu&apos;une autre. Autour de Libourne et de
                Saint-Émilion, ce n&apos;est pas rare.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nous instruisons ce volet avant d&apos;engager le chantier, et le détail des seuils, des formulaires et
                des cas particuliers est développé dans notre article dédié :{' '}
                <a href="/blog/autorisation-urbanisme-abri-carport-pergola-2026" className={lienInterne}>
                  quelle autorisation d&apos;urbanisme pour un abri, un carport ou une pergola en 2026
                </a>
                .
              </p>
            </section>

            {/* 8. Verdict par profil */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Nos recommandations selon votre maison et votre usage
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Assez de nuances : voici ce que nous conseillons réellement, profil par profil, quand un client nous
                pose la question sur son terrain.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Votre situation</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Notre choix</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Pourquoi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {verdicts.map((ligne, i) => (
                      <tr key={ligne[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[0]}</td>
                        <td className="px-4 py-3 text-primary font-semibold whitespace-nowrap">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 mb-5">
                Reste un cas qu&apos;on oublie souvent :{' '}
                <strong className="text-primary font-semibold">la solution mixte</strong>. Rien n&apos;interdit une
                structure porteuse bois et une couverture aluminium avec chéneau intégré, ni des poteaux alu habillés
                d&apos;un bardage bois côté visible. Sur certains chantiers, c&apos;est le meilleur compromis entre
                l&apos;aspect voulu et l&apos;entretien accepté — et c&apos;est précisément le genre de réponse qu&apos;on
                ne peut donner qu&apos;en atelier de conception, pas dans un catalogue.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Pour voir comment ces arbitrages se traduisent sur le terrain, parcourez{' '}
                <a href="/realisations" className={lienInterne}>nos réalisations en Gironde</a> et notre page{' '}
                <a href="/carports" className={lienInterne}>carports bois et aluminium</a>, où les deux familles sont
                présentées côte à côte, avec les configurations une et deux places.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Carport-aluminium-Libourne-2.webp"
              alt="Carport aluminium deux places sans poteau central abritant deux voitures près de Libourne"
              caption="Poteaux repoussés aux angles : on récupère la largeur d'ouverture des portières, précieuse quand l'allée est contrainte."
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
              Carport aluminium ou bois : vos questions
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
              Les deux matières, un seul artisan
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Nous vendons et posons le bois comme l&apos;aluminium : notre seul intérêt est que votre carport soit le
              bon, pas qu&apos;il soit d&apos;une matière plutôt que d&apos;une autre. Venez avec vos contraintes —
              largeur, teinte des menuiseries, entretien accepté, budget global — et nous tranchons ensemble, devant
              votre terrain. L&apos;Esprit Bois, entreprise certifiée Qualibat, intervient à Libourne et dans toute la
              Gironde, formalités d&apos;urbanisme comprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/carports"
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
