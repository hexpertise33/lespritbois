import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

// COVER : vraie extension ossature bois L'Esprit Bois (bardage douglas, grande
// baie vitrée coulissante et terrasse) accolée à une maison en pierre girondine.
const COVER = '/images/source-adefrance/WhatsApp-Image-2025-05-02-a-13.59.24_f4a63f6d-opt.webp';

export const metadata: Metadata = buildMetadata({
  title: "Extension ossature bois : prix au m², délais et avantages 2026 | L'Esprit Bois",
  description:
    "Comptez 1 700 à 2 500 €/m² pour une extension ossature bois sur mesure en 2026. Prix, délais, autorisations, RE2020 et bois local : le guide d'un artisan en Gironde.",
  keywords:
    "extension ossature bois, prix extension bois m2, extension bois Gironde, extension ossature bois Libourne, agrandissement maison bois, extension bois RE2020, extension ossature bois prix au m2",
  path: '/blog/extension-ossature-bois-prix-m2',
  ogImage: COVER,
  ogTitle: 'Extension en ossature bois : prix au m², délais et avantages en 2026',
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
        <figure key={img.alt}>
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
        name: 'Extension en ossature bois',
        item: 'https://lesprit-bois.fr/blog/extension-ossature-bois-prix-m2',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Extension en ossature bois : prix au m², délais et avantages en 2026',
    description:
      "Prix au m² d'une extension ossature bois en 2026 (1 700 à 2 500 €/m² sur mesure), avantages (légèreté, rapidité, isolation, bilan carbone), délais de chantier, autorisations et seuils d'urbanisme, RE2020, bois local pin maritime et douglas, et comparatif honnête ossature bois contre parpaing : le guide complet pour agrandir sa maison en Gironde.",
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
    datePublished: '2026-07-23',
    dateModified: '2026-07-23',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/extension-ossature-bois-prix-m2',
    },
    about: ['extension ossature bois', 'agrandissement maison', 'construction bois', 'RE2020'],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Quel est le prix au m² d'une extension en ossature bois en 2026 ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Comptez le plus souvent entre 1 700 et 2 500 €/m² pour une extension ossature bois sur mesure posée, tout compris, en 2026. Une entrée de gamme aux prestations simples peut démarrer autour de 1 500 €/m², tandis qu'un projet haut de gamme (grandes baies, toiture terrasse, finitions poussées, terrain difficile) dépasse 2 500 à 3 000 €/m². Ces fourchettes sont des ordres de grandeur : le juste prix dépend de la surface, de la toiture, des finitions et de la nature du sol. Seul un devis établi sur place engage.",
        },
      },
      {
        '@type': 'Question',
        name: "Pourquoi choisir l'ossature bois pour agrandir sa maison ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "L'ossature bois est légère : elle réduit les fondations, ce qui est précieux sur les sols argileux du Libournais. Le chantier est court et propre (préfabrication en atelier, filière sèche, peu de gravats), l'isolation thermique et acoustique est excellente à épaisseur de mur réduite, et le bilan carbone est favorable. Le bois est aussi le matériau qui se marie le mieux avec une maison existante, ancienne ou contemporaine.",
        },
      },
      {
        '@type': 'Question',
        name: "Combien de temps dure le chantier d'une extension ossature bois ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Sur le terrain, comptez le plus souvent 2 à 4 mois entre le début du chantier et la livraison, selon la surface et le niveau de finition. L'ossature elle-même, préfabriquée en atelier, se lève en quelques jours et la maison est mise hors d'eau et hors d'air très vite. Le second œuvre (isolation, cloisons, électricité, revêtements, raccords avec l'existant) occupe l'essentiel du planning. À cela s'ajoute l'instruction du dossier d'urbanisme en amont : environ un mois pour une déclaration préalable, deux à trois mois pour un permis de construire.",
        },
      },
      {
        '@type': 'Question',
        name: "Faut-il un permis de construire pour une extension en bois ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Cela dépend de la surface créée. Jusqu'à 20 m² d'emprise au sol ou de surface de plancher, une déclaration préalable suffit ; ce seuil est relevé à 40 m² pour une extension accolée à une maison existante en zone urbaine couverte par un PLU. Au-delà, un permis de construire est nécessaire. Enfin, le recours à un architecte devient obligatoire dès que la surface totale de la maison dépasse 150 m² après travaux. Le PLU de votre commune prime toujours et peut imposer des règles plus strictes.",
        },
      },
      {
        '@type': 'Question',
        name: "La RE2020 s'applique-t-elle à une extension ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, selon la surface de l'extension. Les petites extensions relèvent d'exigences allégées, mais dès qu'une certaine surface est franchie, l'extension doit respecter les exigences de la RE2020 en matière d'isolation, de confort d'été et d'empreinte carbone des matériaux. C'est justement là que l'ossature bois est avantagée : matériau biosourcé à faible empreinte carbone et excellente performance thermique, elle coche naturellement les cases que la réglementation valorise.",
        },
      },
      {
        '@type': 'Question',
        name: "Ossature bois ou parpaing : quelle solution pour une extension ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "L'ossature bois offre un chantier plus rapide et propre, des fondations allégées, une meilleure isolation à épaisseur égale et un bien meilleur bilan carbone ; le parpaing reste parfois un peu moins cher au m² sur des projets simples et rassure ceux qui veulent du « lourd ». Sur une extension, où l'on cherche à limiter les fondations, à raccourcir le chantier et à gagner de la surface habitable sans épaissir les murs, l'ossature bois s'impose le plus souvent. Le bon choix dépend du terrain, de l'existant et de vos priorités.",
        },
      },
    ],
  },
];

const comparatif = [
  ['Rapidité de chantier', 'Ossature préfabriquée en atelier, levée en quelques jours, filière sèche', 'Maçonnerie sur place, temps de séchage, météo-dépendant'],
  ['Fondations', 'Structure légère : fondations réduites, atout sur sol argileux', 'Structure lourde : fondations plus profondes et coûteuses'],
  ['Isolation', 'Excellente à épaisseur de mur réduite, isolant intégré à l’ossature', 'Correcte mais murs plus épais à performance égale'],
  ['Surface habitable', 'Murs plus fins : plus de surface utile à emprise égale', 'Murs plus épais : surface utile grignotée'],
  ['Bilan carbone', 'Matériau biosourcé qui stocke le carbone, favorisé par la RE2020', 'Matériau fortement émetteur à la fabrication'],
  ['Prix au m²', 'À partir de ~1 700 €/m², compétitif tout compris', 'Parfois un peu moins cher au m² sur projet simple'],
];

const faq = [
  {
    q: "Quel est le prix au m² d'une extension en ossature bois en 2026 ?",
    r: (
      <>
        Comptez le plus souvent entre 1 700 et 2 500 €/m² pour une extension ossature bois sur mesure posée, tout
        compris, en 2026. Une entrée de gamme aux prestations simples peut démarrer autour de 1 500 €/m², tandis
        qu&apos;un projet haut de gamme (grandes baies, toiture terrasse, finitions poussées, terrain difficile) dépasse
        2 500 à 3 000 €/m². Ces fourchettes sont des ordres de grandeur : le juste prix dépend de la surface, de la
        toiture, des finitions et de la nature du sol. Seul un devis établi sur place engage.
      </>
    ),
  },
  {
    q: "Pourquoi choisir l'ossature bois pour agrandir sa maison ?",
    r: (
      <>
        L&apos;ossature bois est légère : elle réduit les fondations, ce qui est précieux sur les sols argileux du
        Libournais. Le chantier est court et propre (préfabrication en atelier, filière sèche, peu de gravats),
        l&apos;isolation thermique et acoustique est excellente à épaisseur de mur réduite, et le bilan carbone est
        favorable. Le bois est aussi le matériau qui se marie le mieux avec une maison existante, ancienne ou
        contemporaine.
      </>
    ),
  },
  {
    q: "Combien de temps dure le chantier d'une extension ossature bois ?",
    r: (
      <>
        Sur le terrain, comptez le plus souvent 2 à 4 mois entre le début du chantier et la livraison, selon la surface
        et le niveau de finition. L&apos;ossature elle-même, préfabriquée en atelier, se lève en quelques jours et la
        maison est mise hors d&apos;eau et hors d&apos;air très vite. Le second œuvre (isolation, cloisons, électricité,
        revêtements, raccords avec l&apos;existant) occupe l&apos;essentiel du planning. À cela s&apos;ajoute
        l&apos;instruction du dossier d&apos;urbanisme en amont : environ un mois pour une déclaration préalable, deux à
        trois mois pour un permis de construire.
      </>
    ),
  },
  {
    q: "Faut-il un permis de construire pour une extension en bois ?",
    r: (
      <>
        Cela dépend de la surface créée. Jusqu&apos;à 20 m² d&apos;emprise au sol ou de surface de plancher, une
        déclaration préalable suffit ; ce seuil est relevé à 40 m² pour une extension accolée à une maison existante en
        zone urbaine couverte par un PLU. Au-delà, un permis de construire est nécessaire. Enfin, le recours à un
        architecte devient obligatoire dès que la surface totale de la maison dépasse 150 m² après travaux. Le PLU de
        votre commune prime toujours et peut imposer des règles plus strictes.
      </>
    ),
  },
  {
    q: "La RE2020 s'applique-t-elle à une extension ?",
    r: (
      <>
        Oui, selon la surface de l&apos;extension. Les petites extensions relèvent d&apos;exigences allégées, mais dès
        qu&apos;une certaine surface est franchie, l&apos;extension doit respecter les exigences de la RE2020 en matière
        d&apos;isolation, de confort d&apos;été et d&apos;empreinte carbone des matériaux. C&apos;est justement là que
        l&apos;ossature bois est avantagée : matériau biosourcé à faible empreinte carbone et excellente performance
        thermique, elle coche naturellement les cases que la réglementation valorise.
      </>
    ),
  },
  {
    q: "Ossature bois ou parpaing : quelle solution pour une extension ?",
    r: (
      <>
        L&apos;ossature bois offre un chantier plus rapide et propre, des fondations allégées, une meilleure isolation à
        épaisseur égale et un bien meilleur bilan carbone ; le parpaing reste parfois un peu moins cher au m² sur des
        projets simples et rassure ceux qui veulent du « lourd ». Sur une extension, où l&apos;on cherche à limiter les
        fondations, à raccourcir le chantier et à gagner de la surface habitable sans épaissir les murs, l&apos;ossature
        bois s&apos;impose le plus souvent. Le bon choix dépend du terrain, de l&apos;existant et de vos priorités.
      </>
    ),
  },
];

export default function ArticleExtensionOssatureBoisPage() {
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
              alt="Extension en ossature bois accolée à une maison en Gironde, bardage bois et grandes baies vitrées, près de Libourne"
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
              <span className="text-secondary-fixed">Extension en ossature bois</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Construction bois
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Extension en ossature bois : prix au m², délais et avantages en 2026
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/70 font-label-md text-label-md">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">person</span>
                David Bertrand, L&apos;Esprit Bois
              </span>
              <span className="text-secondary">·</span>
              <span>23 juillet 2026</span>
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
                Comptez 1 700 à 2 500 €/m² pour une extension en ossature bois sur mesure en 2026, selon la finition et
                la toiture. On peut descendre vers 1 500 €/m² sur un projet simple, ou dépasser 2 500 à 3 000 €/m² sur du
                haut de gamme. C&apos;est le prix d&apos;un vrai agrandissement, isolé et fini, prêt à vivre.
              </strong>{' '}
              Mais le prix au m² ne dit pas tout, et il n&apos;explique pas pourquoi, sur nos chantiers en Gironde,
              l&apos;ossature bois s&apos;impose de plus en plus pour agrandir plutôt que déménager : sa légèreté allège
              les fondations sur nos sols argileux, son chantier est court et propre, son isolation est remarquable et
              son bilan carbone joue en votre faveur avec la RE2020. Voici comment décider, chiffres et délais réels à
              l&apos;appui.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Prix au m² */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Extension ossature bois : le prix au m² en 2026
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Allons droit au but, car c&apos;est la question qui amène ici :{' '}
                <strong className="text-primary font-semibold">
                  une extension en ossature bois sur mesure, posée et finie, se situe le plus souvent entre 1 700 et
                  2 500 €/m² en 2026
                </strong>
                . Ce prix comprend l&apos;ossature, l&apos;isolation, le bardage, la toiture, les menuiseries et le
                second œuvre courant, mais il dépend fortement de ce que vous mettez dedans.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Entrée de gamme (dès ~1 500 €/m²)', 'petite surface, volume simple, toiture monopente, finitions sobres, raccord facile avec l’existant.'],
                  ['Milieu de gamme (1 700 à 2 500 €/m²)', 'le cœur du marché : belles ouvertures, isolation soignée, bardage bois de qualité, raccords propres avec la maison.'],
                  ['Haut de gamme (au-delà de 2 500 à 3 000 €/m²)', 'grandes baies vitrées, toiture terrasse ou végétalisée, prestations sur mesure, terrain en pente ou accès difficile.'],
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
                Un exemple parle mieux qu&apos;un ratio : une extension de 25 m² pour créer un séjour ou une suite
                parentale représente, à ces fourchettes, un budget de l&apos;ordre de{' '}
                <strong className="text-primary font-semibold">42 000 à 62 000 €</strong> tout compris. C&apos;est un
                investissement, mais il reste très inférieur au coût et aux tracas d&apos;un déménagement, et il valorise
                durablement votre bien. Attention : ces chiffres sont des ordres de grandeur de marché, pas un devis. Le
                juste prix de <em>votre</em> extension se chiffre sur place, après avoir vu le terrain et l&apos;existant.
              </p>
            </section>

            <Figure
              src="/images/blog/extension-ossature-bois-prix-m2/extension-ossature-bois-chantier-gironde.jpg"
              alt="Montage de l'ossature bois d'une extension sur un chantier en Gironde, structure montée contre la maison existante"
              caption="Sur nos chantiers, l'ossature de l'extension se monte contre la maison existante : le raccord de toiture se prépare avant la mise hors d'eau."
            />

            {/* 2. Pourquoi l'ossature bois */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Pourquoi l&apos;ossature bois pour agrandir : légèreté, rapidité, isolation
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Si l&apos;ossature bois s&apos;est imposée comme la référence de l&apos;extension, ce n&apos;est pas une
                mode : c&apos;est une réponse technique à quatre contraintes concrètes de l&apos;agrandissement.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['La légèreté', 'une structure bois pèse une fraction d’un mur maçonné. Résultat : des fondations réduites, un vrai atout sur les sols argileux du Libournais qui gonflent et se rétractent avec l’humidité. Moins de béton dans le sol, c’est du budget et des risques en moins.'],
                  ['La rapidité et la propreté', 'les murs sont préfabriqués en atelier, à l’abri de la météo, puis levés sur place en quelques jours. C’est une filière sèche : peu de gravats, peu de nuisances, un chantier qui n’immobilise pas votre maison pendant des mois.'],
                  ['L’isolation', 'l’isolant se loge dans l’épaisseur même de l’ossature. On obtient une performance thermique et acoustique excellente avec des murs plus fins qu’en maçonnerie : vous gagnez de la surface habitable à emprise au sol égale.'],
                  ['Le bilan carbone', 'le bois stocke le carbone au lieu d’en émettre à la fabrication. C’est un matériau biosourcé que la RE2020 valorise directement, et un argument qui compte à la revente.'],
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
                À cela s&apos;ajoute un atout esthétique que nous constatons à chaque chantier : le bois dialogue avec
                tout, une maison en pierre ancienne comme un pavillon des années 80. C&apos;est le sens même de notre
                travail de <a href="/constructions-bois" className={lienInterne}>construction bois</a> : ajouter du
                volume sans trahir l&apos;existant.
              </p>
            </section>

            <Figure
              src="/images/blog/extension-ossature-bois-prix-m2/interieur-extension-ossature-bois-sejour-lumineux.jpg"
              alt="Intérieur lumineux d'un séjour d'extension à ossature bois avec grande baie vitrée coulissante et finitions bois clair"
              caption="Illustration : à isolation performante, l'ossature bois autorise de grandes baies vitrées sans compromettre le confort thermique, pour une pièce de vie baignée de lumière."
            />

            {/* 3. Ce qui fait varier le prix */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qui fait varier le prix : surface, toiture, finitions, sol
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Deux extensions de même surface peuvent afficher un écart de prix du simple au double. Ce n&apos;est
                presque jamais le bois qui l&apos;explique, mais quatre postes autour :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['La surface et la forme', 'plus une extension est petite, plus son prix au m² grimpe : les postes fixes (raccordements, raccords de toiture, étude) se répartissent sur peu de mètres. Un volume simple et compact coûte moins cher qu’une forme découpée.'],
                  ['La toiture', 'monopente, toiture terrasse plate, ou raccord sur la pente de la toiture existante : c’est l’un des postes les plus variables. Une toiture terrasse ou végétalisée demande une étanchéité et une structure spécifiques, et coûte davantage qu’une simple monopente.'],
                  ['Les finitions et les ouvertures', 'grandes baies coulissantes, essence et pose du bardage, qualité des menuiseries, revêtements de sol, cuisine ou salle d’eau à équiper : c’est le curseur qui fait passer du milieu au haut de gamme.'],
                  ['La nature du sol et l’accès', 'un sol argileux, une pente à rattraper, un terrain difficile d’accès pour la grue ou des réseaux éloignés alourdissent les fondations et le terrassement. Sur le Libournais, l’argile est la variable qu’on regarde en premier.'],
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
                C&apos;est pour cela qu&apos;un prix au m² annoncé au téléphone ne veut pas dire grand-chose. Nous ne
                chiffrons qu&apos;après être venus voir le terrain, sonder le sol et comprendre l&apos;existant : seul un
                devis établi sur place tient jusqu&apos;à la fin du chantier.
              </p>
            </section>

            <Figure
              src="/images/blog/extension-ossature-bois-prix-m2/extension-ossature-bois-baie-vitree-libourne.jpg"
              alt="Extension ossature bois terminée près de Libourne, grande baie vitrée coulissante et bardage bois douglas"
              caption="La grande baie vitrée inonde l'extension de lumière ; à emprise au sol égale, l'ossature bois offre plus de surface habitable qu'en maçonnerie."
            />

            {/* 4. Délais de chantier */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Combien de temps sur le chantier ? Les étapes et les délais réels
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La rapidité est l&apos;un des grands arguments de l&apos;ossature bois, mais il faut être honnête sur ce
                qu&apos;on mesure. Le levage spectaculaire de l&apos;ossature, qui donne l&apos;impression que la maison
                pousse en quelques jours, n&apos;est qu&apos;une étape.{' '}
                <strong className="text-primary font-semibold">
                  Comptez plutôt 2 à 4 mois entre le début du chantier et la remise des clés
                </strong>
                , selon la surface et le niveau de finition.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Études et préparation', 'relevé du terrain, plans, dépôt du dossier d’urbanisme et fabrication des murs en atelier. Cette phase se déroule avant même de toucher au terrain.'],
                  ['Fondations et plateforme', 'terrassement et fondations allégées, puis la plateforme sur laquelle reposera l’ossature. Quelques jours à deux semaines selon le sol.'],
                  ['Levage et mise hors d’eau, hors d’air', 'les panneaux préfabriqués sont montés, la charpente et la couverture posées, les menuiseries installées : en quelques jours, l’extension est close et protégée.'],
                  ['Second œuvre', 'c’est le gros du temps : isolation, cloisons, électricité, plomberie, revêtements, et surtout les raccords avec la maison existante (jonction de toiture, ouverture du mur porteur, harmonisation).'],
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
                À ce planning de chantier s&apos;ajoute, en amont, l&apos;instruction du dossier d&apos;urbanisme :
                environ un mois pour une déclaration préalable, deux à trois mois pour un permis de construire. Un projet
                bien mené se décide donc plusieurs mois avant le premier coup de pelle : mieux vaut lancer les démarches
                à l&apos;automne pour un chantier au printemps.
              </p>
            </section>

            {/* 5. Autorisations et RE2020 */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Autorisations : déclaration préalable, permis, seuils et RE2020
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une extension crée de la surface : elle relève donc de l&apos;urbanisme, et les seuils sont précis.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Jusqu’à 20 m²', 'une déclaration préalable de travaux suffit dans le cas général (emprise au sol ou surface de plancher créée).'],
                  ['Jusqu’à 40 m²', 'le seuil est relevé à 40 m² pour une extension accolée à une maison existante en zone urbaine couverte par un PLU. C’est le cas le plus fréquent d’un agrandissement en ville ou en lotissement.'],
                  ['Au-delà de ces seuils', 'un permis de construire devient nécessaire, avec une instruction plus longue.'],
                  ['Le seuil des 150 m²', 'dès que la surface totale de la maison dépasse 150 m² après travaux, le recours à un architecte est obligatoire pour le dépôt du dossier.'],
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
                Côté performance, la <strong className="text-primary font-semibold">RE2020 s&apos;applique aux
                extensions selon leur surface</strong> : les petites relèvent d&apos;exigences allégées, mais dès
                qu&apos;une certaine surface est franchie, l&apos;extension doit répondre aux exigences d&apos;isolation,
                de confort d&apos;été et d&apos;empreinte carbone des matériaux. C&apos;est un point où l&apos;ossature
                bois part avec une longueur d&apos;avance : matériau biosourcé, faible empreinte carbone, excellente
                isolation. La réglementation qui inquiète en maçonnerie devient un atout en bois.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Comme pour tout ouvrage, le PLU de votre commune prime et peut durcir la règle (teintes de bardage,
                gabarits, reculs). Nous détaillons les seuils, l&apos;emprise au sol et les CERFA dans notre{' '}
                <a href="/blog/autorisation-urbanisme-abri-carport-pergola-2026" className={lienInterne}>
                  guide 2026 des autorisations d&apos;urbanisme
                </a>{' '}
                : une lecture utile avant de dessiner votre projet. De notre côté, nous vérifions systématiquement le PLU
                et montons le dossier avec vous.
              </p>
            </section>

            <Figure
              src="/images/blog/extension-ossature-bois-prix-m2/bardage-bois-douglas-pin-maritime.jpg"
              alt="Gros plan sur un bardage en bois douglas de Nouvelle-Aquitaine, filière pin maritime et douglas des Landes de Gascogne"
              caption="Pin maritime des Landes de Gascogne et douglas : une filière régionale qui raccourcit les circuits et soutient l'emploi local."
            />

            {/* 6. Le bois local */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le bois local : pin maritime et douglas de Nouvelle-Aquitaine
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Construire une extension en bois dans le Libournais, c&apos;est aussi puiser dans une ressource qui
                pousse à côté de chez nous. La Nouvelle-Aquitaine est la première région forestière de France pour le
                bois d&apos;œuvre, et deux essences y dominent pour l&apos;ossature et le bardage.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le pin maritime', 'l’arbre emblématique du massif des Landes de Gascogne, avec environ 818 000 hectares en Nouvelle-Aquitaine. Traité à cœur, c’est un bois de structure et de bardage économique et disponible localement, au cœur de la filière régionale.'],
                  ['Le douglas', 'environ 90 000 hectares dans la région, apprécié pour sa résistance mécanique et sa durabilité naturelle. Il permet souvent un bardage sans traitement chimique et se prête bien aux parements visibles d’une extension.'],
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
                Privilégier ce bois local, c&apos;est raccourcir les circuits, réduire l&apos;empreinte carbone du
                transport et soutenir l&apos;emploi de la filière régionale, un cercle vertueux que la RE2020 encourage.
                C&apos;est aussi une garantie de cohérence : un bois qui pousse sous notre climat océanique vieillit bien
                sous notre climat. Nous appliquons la même logique de classe d&apos;emploi que pour une terrasse ou un
                bardage, et vous pouvez en voir le rendu dans{' '}
                <a href="/realisations" className={lienInterne}>nos réalisations en Gironde</a>.
              </p>
            </section>

            {/* 7. Comparatif ossature bois vs parpaing */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ossature bois vs parpaing : le comparatif honnête
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La question revient à chaque rendez-vous, et elle mérite une réponse franche plutôt qu&apos;un plaidoyer.
                Voici comment se situent les deux solutions sur une extension, poste par poste :
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Critère</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Ossature bois</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Parpaing / maçonnerie</th>
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 mb-5">
                Soyons justes : le parpaing garde des partisans, et sur un projet très simple il peut afficher un prix au
                m² un peu plus bas. Certains restent aussi attachés à la sensation de « lourd » et de « massif ».
                C&apos;est légitime, et nous ne cherchons à convaincre personne contre son goût.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Mais sur une <strong className="text-primary font-semibold">extension</strong>, où l&apos;enjeu est
                précisément de limiter les fondations, de raccourcir le chantier et de gagner de la surface habitable
                sans épaissir les murs, l&apos;ossature bois répond mieux au cahier des charges dans la grande majorité
                des cas. Le bon choix dépend toujours du terrain, de l&apos;existant et de vos priorités : c&apos;est ce
                que nous évaluons ensemble, sans parti pris commercial.
              </p>
            </section>

            {/* 8. Notre approche en Gironde */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Notre approche de l&apos;extension bois en Gironde
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Agrandir une maison, c&apos;est ouvrir un mur porteur, raccorder une toiture, faire dialoguer du neuf
                avec de l&apos;ancien : c&apos;est autrement plus engageant que poser un abri au fond du jardin.
                Entre Libourne, Saint-Émilion, Les Billaux et la rive droite, notre méthode tient en quelques principes
                appris sur le terrain :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Sonder le sol avant de rêver le volume', 'l’argile du Libournais commande les fondations. On regarde le terrain d’abord, le plan ensuite : c’est ce qui évite les mauvaises surprises budgétaires.'],
                  ['Soigner le raccord avec l’existant', 'jonction de toiture étanche, ouverture propre du mur porteur, bardage et menuiseries harmonisés : c’est ce détail qui fait qu’une extension paraît d’origine, pas rapportée.'],
                  ['Vérifier le PLU et monter le dossier avec vous', 'seuils, teintes imposées, reculs : nous vérifions systématiquement les règles de votre commune avant de dessiner, et nous montons le dossier d’urbanisme.'],
                  ['Un seul interlocuteur, de l’étude à la pose', 'de la conception aux finitions, vous parlez à la même équipe. Une extension réussie appelle souvent la terrasse et les abords qui vont avec.'],
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
                Une extension prolonge souvent le projet vers l&apos;extérieur : une terrasse, un ombrage, un raccord de
                jardin. C&apos;est tout le sens de notre travail d&apos;{' '}
                <a href="/amenagement-exterieur" className={lienInterne}>aménagement extérieur</a>, mené dans la
                continuité de la <a href="/constructions-bois" className={lienInterne}>construction bois</a>. Et si votre
                besoin est en réalité une pièce détachée au bord de la piscine plutôt qu&apos;un agrandissement de la
                maison, notre guide du{' '}
                <a href="/blog/pool-house-bois-guide" className={lienInterne}>pool-house en bois</a> vous aidera à faire
                la part des choses.
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
              Extension en ossature bois : vos questions
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
              Agrandir plutôt que déménager, en bois
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Une extension en ossature bois, c&apos;est de la surface en plus sans déménager, un chantier court et
              propre, une belle isolation et un bilan carbone qui joue en votre faveur, pour 1 700 à 2 500 €/m² sur
              mesure. Reste à caler le juste projet sur votre terrain et votre budget : c&apos;est le diagnostic que nous
              menons chez L&apos;Esprit Bois, entreprise certifiée Qualibat, à Libourne et dans toute la Gironde,
              vérification du PLU et dossier d&apos;urbanisme compris.
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
