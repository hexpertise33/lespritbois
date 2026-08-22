import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/source-adefrance/IMG-20250303-WA0044-1.jpg';

export const metadata: Metadata = buildMetadata({
  title: "Bardage bois : essences, pose et prix 2026",
  description:
    "Douglas, mélèze ou red cedar : durabilité, sens de pose, ventilation de la lame d'air et budget au mètre carré, par un charpentier en Gironde.",
  keywords:
    "bardage bois façade, bardage bois, prix bardage bois au m2, bardage bois claire-voie, essence bardage bois douglas mélèze, bardage red cedar, classe d'emploi 3, NF DTU 41.2, lame d'air ventilée, bardage bois Libourne, bardage bois Gironde",
  path: '/blog/bardage-bois-facade-essences-pose',
  ogImage: COVER,
  ogTitle: 'Bardage bois en façade : quelle essence, quelle pose et quel budget en 2026 ?',
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
        name: 'Bardage bois en façade',
        item: 'https://lesprit-bois.fr/blog/bardage-bois-facade-essences-pose',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Bardage bois en façade : quelle essence, quelle pose et quel budget en 2026 ?',
    description:
      "Choisir un bardage bois pour sa façade : comparatif des essences (douglas, mélèze, red cedar, pin traité), classe d'emploi 3, pose claire-voie ou à recouvrement, lame d'air ventilée selon le NF DTU 41.2, déclaration préalable et budget au m² posé, à Libourne et en Gironde.",
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
    datePublished: '2026-07-28',
    dateModified: '2026-07-28',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/bardage-bois-facade-essences-pose',
    },
    about: ['bardage bois', 'façade bois', 'construction bois'],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quelle essence choisir pour un bardage bois en façade ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le douglas et le mélèze sont les deux valeurs sûres : durabilité naturelle satisfaisante en classe d'emploi 3, teintes chaudes, disponibilité correcte. Le pin maritime ou le sapin traité restent la solution la plus économique, à condition d'un traitement qui les amène en classe 3. Le red cedar offre la meilleure stabilité et un très beau brun rouge, mais c'est un bois importé, nettement plus cher. En Gironde, le pin maritime et le douglas ont l'avantage de venir de filières de Nouvelle-Aquitaine.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quel est le prix d’un bardage bois au m² posé en 2026 ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "En fourniture et pose comprises, on constate en 2026 des ordres de grandeur d'environ 90 à 150 €/m² pour un bardage douglas, 120 à 200 €/m² pour du mélèze et 200 à 350 €/m² pour du red cedar, le pin maritime ou le sapin traité formant l'entrée de gamme. Ces fourchettes sont indicatives : l'état du support, la hauteur de façade, l'échafaudage et les finitions (angles, encadrements de baies, grilles de ventilation) font bouger le prix autant que l'essence.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faut-il une déclaration préalable pour poser un bardage bois ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui : poser un bardage modifie l'aspect extérieur de la façade, ce qui relève d'une déclaration préalable de travaux. Le délai d'instruction est d'un mois, porté à deux mois en périmètre des Bâtiments de France ou en site patrimonial remarquable, où l'avis de l'architecte des Bâtiments de France est obligatoire et peut imposer teintes et matériaux. Le dossier présente la façade concernée, le matériau, la teinte, le sens de pose et l'intégration au bâti. Il faut toujours vérifier le PLU de sa commune.",
        },
      },
      {
        '@type': 'Question',
        name: 'Pourquoi faut-il une lame d’air ventilée derrière un bardage bois ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Parce que c'est elle qui fait sécher le bois et le mur. Le NF DTU 41.2, norme de référence des revêtements extérieurs en bois, prévoit une lame d'air ventilée d'au moins 20 mm entre le bardage et le mur, créée par des tasseaux en simple ou double ossature, avec un pare-pluie derrière. Cette lame d'air n'est réellement ventilée que si elle dispose d'une entrée d'air en partie basse et d'une sortie en partie haute débouchant à l'extérieur. Sans cela, l'humidité se condense et le bois se dégrade prématurément.",
        },
      },
      {
        '@type': 'Question',
        name: 'Qu’est-ce que la classe d’emploi 3 et pourquoi concerne-t-elle un bardage ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La classe d'emploi 3 correspond à un bois utilisé à l'extérieur, hors contact du sol, exposé à une humidification fréquente : c'est exactement la situation d'un bardage de façade. On distingue la classe 3.1 pour une exposition normale et la classe 3.2 pour les expositions sévères, comme le bord de mer à moins de 3 km ou la montagne au-dessus de 900 m. Le Libournais, en Gironde intérieure, relève d'une exposition normale : la classe 3.1 y suffit dans la très grande majorité des cas.",
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on empêcher un bardage bois de griser ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non, on peut seulement retarder le grisaillement ou le devancer. Le gris est l'évolution naturelle du bois exposé aux UV et à la pluie : il ne touche que la surface et n'entame pas la solidité des lames. Un saturateur conserve la teinte quelques années et se renouvelle, une lasure demande un entretien plus contraignant, un bardage pré-grisé ou brûlé assume l'aspect final dès la pose. Aucune finition n'est définitive : le vrai choix est d'accepter la patine ou d'accepter un entretien récurrent.",
        },
      },
    ],
  },
];

const essences = [
  [
    'Pin maritime / sapin traité',
    'Teinte claire à brun selon le traitement, veinage marqué',
    'Traitement (autoclave notamment) indispensable pour atteindre la classe 3',
    'Entrée de gamme, la solution la plus économique',
  ],
  [
    'Douglas',
    'Rosé à brun clair, chaleureux, très présent en construction bois',
    'Durable dans son bois de cœur : à purger d’aubier pour un bardage',
    'Environ 90 à 150 €/m² posé',
  ],
  [
    'Mélèze',
    'Brun miel qui fonce en vieillissant, nervures très dessinées',
    'Bois dense et résineux, bonne tenue en façade exposée',
    'Environ 120 à 200 €/m² posé',
  ],
  [
    'Red cedar',
    'Brun rouge profond, aspect haut de gamme, teinte homogène',
    'Très stable et très léger, mais essence importée',
    'Environ 200 à 350 €/m² posé',
  ],
];

const faq = [
  {
    q: 'Quelle essence choisir pour un bardage bois en façade ?',
    r: (
      <>
        Le douglas et le mélèze sont les deux valeurs sûres : durabilité naturelle satisfaisante en classe d&apos;emploi
        3, teintes chaudes, disponibilité correcte. Le pin maritime ou le sapin traité restent la solution la plus
        économique, à condition d&apos;un traitement qui les amène en classe 3. Le red cedar offre la meilleure stabilité
        et un très beau brun rouge, mais c&apos;est un bois importé, nettement plus cher. En Gironde, le pin maritime et
        le douglas ont l&apos;avantage de venir de filières de Nouvelle-Aquitaine.
      </>
    ),
  },
  {
    q: 'Quel est le prix d’un bardage bois au m² posé en 2026 ?',
    r: (
      <>
        En fourniture et pose comprises, on constate en 2026 des ordres de grandeur d&apos;environ 90 à 150 €/m² pour un
        bardage douglas, 120 à 200 €/m² pour du mélèze et 200 à 350 €/m² pour du red cedar, le pin maritime ou le sapin
        traité formant l&apos;entrée de gamme. Ces fourchettes sont indicatives : l&apos;état du support, la hauteur de
        façade, l&apos;échafaudage et les finitions (angles, encadrements de baies, grilles de ventilation) font bouger
        le prix autant que l&apos;essence.
      </>
    ),
  },
  {
    q: 'Faut-il une déclaration préalable pour poser un bardage bois ?',
    r: (
      <>
        Oui : poser un bardage modifie l&apos;aspect extérieur de la façade, ce qui relève d&apos;une déclaration
        préalable de travaux. Le délai d&apos;instruction est d&apos;un mois, porté à deux mois en périmètre des
        Bâtiments de France ou en site patrimonial remarquable, où l&apos;avis de l&apos;architecte des Bâtiments de
        France est obligatoire et peut imposer teintes et matériaux. Le dossier présente la façade concernée, le
        matériau, la teinte, le sens de pose et l&apos;intégration au bâti. Il faut toujours vérifier le PLU de sa
        commune.
      </>
    ),
  },
  {
    q: 'Pourquoi faut-il une lame d’air ventilée derrière un bardage bois ?',
    r: (
      <>
        Parce que c&apos;est elle qui fait sécher le bois et le mur. Le NF DTU 41.2, norme de référence des revêtements
        extérieurs en bois, prévoit une lame d&apos;air ventilée d&apos;au moins 20 mm entre le bardage et le mur, créée
        par des tasseaux en simple ou double ossature, avec un pare-pluie derrière. Cette lame d&apos;air n&apos;est
        réellement ventilée que si elle dispose d&apos;une entrée d&apos;air en partie basse et d&apos;une sortie en
        partie haute débouchant à l&apos;extérieur. Sans cela, l&apos;humidité se condense et le bois se dégrade
        prématurément.
      </>
    ),
  },
  {
    q: 'Qu’est-ce que la classe d’emploi 3 et pourquoi concerne-t-elle un bardage ?',
    r: (
      <>
        La classe d&apos;emploi 3 correspond à un bois utilisé à l&apos;extérieur, hors contact du sol, exposé à une
        humidification fréquente : c&apos;est exactement la situation d&apos;un bardage de façade. On distingue la classe
        3.1 pour une exposition normale et la classe 3.2 pour les expositions sévères, comme le bord de mer à moins de 3
        km ou la montagne au-dessus de 900 m. Le Libournais, en Gironde intérieure, relève d&apos;une exposition normale
        : la classe 3.1 y suffit dans la très grande majorité des cas.
      </>
    ),
  },
  {
    q: 'Peut-on empêcher un bardage bois de griser ?',
    r: (
      <>
        Non, on peut seulement retarder le grisaillement ou le devancer. Le gris est l&apos;évolution naturelle du bois
        exposé aux UV et à la pluie : il ne touche que la surface et n&apos;entame pas la solidité des lames. Un
        saturateur conserve la teinte quelques années et se renouvelle, une lasure demande un entretien plus
        contraignant, un bardage pré-grisé ou brûlé assume l&apos;aspect final dès la pose. Aucune finition n&apos;est
        définitive : le vrai choix est d&apos;accepter la patine ou d&apos;accepter un entretien récurrent.
      </>
    ),
  },
];

export default function ArticleBardageBoisFacadePage() {
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
              alt="Façade habillée d'un bardage bois vertical sur une extension accolée à une maison ancienne, chantier L'Esprit Bois en Gironde"
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
              <span className="text-secondary-fixed">Bardage bois</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Bardage bois
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Bardage bois en façade : quelle essence, quelle pose et quel budget en 2026 ?
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
              <span>28 juillet 2026</span>
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
                L&apos;essence décide de l&apos;aspect et du prix de votre bardage bois ; c&apos;est la pose qui décide de
                sa durée de vie. Douglas ou pin maritime pour une façade en circuit court girondin, mélèze pour un brun
                plus dense, red cedar pour le haut de gamme — mais quelle que soit l&apos;essence retenue, tout se joue
                sur une lame d&apos;air ventilée d&apos;au moins 20 mm derrière les lames, avec entrée d&apos;air basse et
                sortie haute.
              </strong>{' '}
              C&apos;est le point que la plupart des comparatifs d&apos;essences passent sous silence : sur nos chantiers
              en Gironde, les bardages qui vieillissent mal ne sont presque jamais des bardages en « mauvais bois », ce
              sont des bardages mal ventilés. Voici comment choisir votre essence, votre profil de pose et votre
              finition en connaissance de cause, et ce que cela coûte réellement en 2026 à Libourne et alentour.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* Ce qu'apporte un bardage */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Bardage bois : ce qu&apos;il apporte vraiment à une façade
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                On pense d&apos;abord à l&apos;esthétique, et c&apos;est légitime : un bardage bois change radicalement
                le visage d&apos;une maison, réchauffe un enduit fatigué, dessine des lignes horizontales ou verticales
                qui structurent une façade. Mais réduire le bardage à un habillage serait passer à côté de
                l&apos;essentiel. <strong className="text-primary font-semibold">Un bardage est avant tout une peau de
                protection</strong> : posé sur ossature, il forme un écran qui encaisse la pluie battante et le
                rayonnement solaire à la place du mur.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est aussi le support idéal d&apos;une isolation par l&apos;extérieur. Quand on décide
                d&apos;isoler une maison par la façade, il faut de toute façon habiller l&apos;isolant : le bardage
                remplit ce rôle avec une mise en œuvre sèche, sans temps de séchage, et sans surcharger la structure. Sur
                une maison ancienne dont les murs respirent, cette solution ventilée est souvent plus saine qu&apos;un
                enduit fermé appliqué directement sur l&apos;isolant.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Troisième atout, moins visible : la légèreté. Un bardage bois pèse une fraction de ce que pèse un
                parement maçonné. Sur une extension, une surélévation ou une façade dont on ne veut pas reprendre les
                fondations, c&apos;est un argument décisif — la même logique que celle qui fait choisir
                l&apos;ossature bois pour agrandir, détaillée dans notre guide sur{' '}
                <a href="/blog/extension-ossature-bois-prix-m2" className={lienInterne}>
                  le prix au m² d&apos;une extension en ossature bois
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Enfin, un mot sur l&apos;argument environnemental, sans excès : le bois est valorisé dans
                l&apos;analyse de cycle de vie de la RE2020 pour le carbone qu&apos;il stocke. Cela dit, poser un bardage
                bois sur une maison individuelle existante ne relève d&apos;aucune obligation réglementaire.{' '}
                <strong className="text-primary font-semibold">C&apos;est un choix, pas une contrainte</strong> : mieux
                vaut le faire pour de bonnes raisons — l&apos;aspect, la protection, l&apos;isolation — que parce
                qu&apos;on croit y être obligé.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/aggrandissement-accueil.webp"
              alt="Bardage bois vertical posé sur une extension accolée à un bâtiment ancien en pierre, chantier bardage bois en Gironde"
              caption="Sur une reprise de bâti ancien, le bardage vient mourir contre la maçonnerie : ce sont ces jonctions — angle sur pierre, arase basse, raccord sous-toiture — qui prennent le plus de temps de pose."
            />

            {/* Essences */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Quelle essence choisir : douglas, mélèze, red cedar ou pin traité
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Quatre essences couvrent la quasi-totalité des projets de bardage en Gironde. Elles ne se départagent pas
                seulement sur le prix : la teinte, la stabilité dans le temps, l&apos;origine et le besoin de traitement
                comptent tout autant.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Essence</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Aspect</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Durabilité et mise en œuvre</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Budget indicatif posé</th>
                    </tr>
                  </thead>
                  <tbody>
                    {essences.map((ligne, i) => (
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
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 mb-5">
                Le détail que nous rappelons systématiquement en rendez-vous concerne le{' '}
                <strong className="text-primary font-semibold">douglas</strong> : sa durabilité naturelle vient de son
                bois de cœur, pas de l&apos;aubier, la partie claire et tendre en périphérie du tronc. Un bardage
                douglas doit donc être purgé d&apos;aubier. Une lame bon marché où subsistent des bandes d&apos;aubier
                se dégradera par ces zones, quelle que soit la qualité de la pose. Le même raisonnement vaut pour le{' '}
                <strong className="text-primary font-semibold">mélèze</strong>, plus dense, plus résineux, dont le brun
                miel fonce joliment avec les années.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le <strong className="text-primary font-semibold">red cedar</strong>, lui, reste la référence de
                stabilité : il bouge peu, ne gauchit presque pas, et son brun rouge donne un rendu haut de gamme
                immédiat. Le contrepoint est double : c&apos;est un bois importé d&apos;Amérique du Nord, et son prix au
                m² posé peut représenter deux à trois fois celui d&apos;un douglas. À vous de peser ce que vous achetez
                réellement.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nous ne cachons pas notre préférence pour les filières proches : le{' '}
                <strong className="text-primary font-semibold">pin maritime</strong> est l&apos;essence emblématique du
                massif des Landes de Gascogne, à deux pas de nos chantiers, et le douglas dispose d&apos;une filière
                solide en Nouvelle-Aquitaine. À performance équivalente en façade, un bois qui a parcouru cent
                kilomètres nous paraît plus cohérent qu&apos;un bois qui a traversé un océan — sans dogmatisme : sur une
                façade très exposée ou un projet architectural précis, le red cedar garde ses arguments.
              </p>
            </section>

            <Figure
              src="/images/blog/bardage-bois-facade-essences-pose/lames-bardage-bois-essences-teintes.jpg"
              alt="Lames de bois sciées et empilées avant façonnage en bardage : la teinte et le veinage changent d'une essence à l'autre"
              caption="Une teinte de bardage se juge sur lame sèche et à la lumière du jour, jamais sur un nuancier : demandez un échantillon de l'essence retenue avant de commander la façade entière."
            />

            {/* Classe d'emploi */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Classe d&apos;emploi 3 : la case à cocher avant tout le reste
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Avant même de parler de teinte ou de profil, une question tranche le sujet :{' '}
                <strong className="text-primary font-semibold">votre bardage est-il en classe d&apos;emploi 3 ?</strong>{' '}
                Cette classe correspond à un bois mis en œuvre à l&apos;extérieur, hors contact du sol, exposé à une
                humidification fréquente, telle que la décrit l&apos;
                <a href="https://www.fcba.fr/" className={lienInterne} target="_blank" rel="noopener noreferrer">
                  institut technologique FCBA
                </a>
                . C&apos;est très exactement la vie d&apos;un bardage de façade : pluie, rosée,
                projections, séchage, et ainsi de suite pendant des décennies.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La classe 3 se décline en deux niveaux. La{' '}
                <strong className="text-primary font-semibold">classe 3.1</strong> couvre une exposition normale. La{' '}
                <strong className="text-primary font-semibold">classe 3.2</strong> vise les expositions sévères : bord de
                mer à moins de 3 km, montagne au-dessus de 900 m. Le Libournais, en Gironde intérieure, relève
                d&apos;une exposition normale ; sur nos chantiers, la classe 3.1 répond au besoin dans la très grande
                majorité des cas. C&apos;est une lecture de terrain, pas une règle absolue : une façade plein ouest
                battue par les pluies, une maison en fond de vallée humide ou un rez-de-chaussée éclaboussé par une
                toiture sans gouttière méritent d&apos;être regardés de plus près.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Deux chemins mènent à la classe 3 : la{' '}
                <strong className="text-primary font-semibold">durabilité naturelle</strong> de l&apos;essence (douglas
                purgé d&apos;aubier, mélèze, red cedar) ou un{' '}
                <strong className="text-primary font-semibold">traitement</strong> qui confère cette durabilité au pin
                maritime ou au sapin. Les deux sont des solutions valables. Ce qui ne l&apos;est pas, c&apos;est de poser
                en façade un bois de charpente ou de coffrage dont personne ne sait dans quelle classe il se situe. La
                même logique s&apos;applique au sol : nous l&apos;expliquons en détail dans notre guide sur{' '}
                <a href="/blog/quel-bois-pour-terrasse-exterieure" className={lienInterne}>
                  le choix du bois pour une terrasse extérieure
                </a>
                , où la classe d&apos;emploi monte encore d&apos;un cran.
              </p>
            </section>

            {/* Profils de pose */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Claire-voie, à recouvrement ou à rainure et languette : le style dicte la pose
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le profil des lames et leur sens de pose changent complètement le caractère d&apos;une façade. Trois
                familles dominent, et le choix se fait autant sur l&apos;esthétique que sur la technique :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  [
                    'La claire-voie',
                    'des lames espacées, qui laissent un jeu d’ombre et de lumière entre elles. C’est le profil le plus contemporain, celui qui allège visuellement une façade et se marie très bien avec un brise-vue ou une pergola. Techniquement, l’eau passe derrière : la pose exige un pare-pluie spécifiquement adapté à la claire-voie, résistant aux UV et de teinte sombre pour ne pas se voir entre les lames.',
                  ],
                  [
                    'Le bardage à recouvrement',
                    'les lames se chevauchent, à la façon d’un clin traditionnel. Le rendu est classique, très lisible, et l’eau ruisselle naturellement d’une lame à l’autre. C’est souvent le profil le plus consensuel quand il faut composer avec un voisinage bâti ancien.',
                  ],
                  [
                    'La rainure et languette',
                    'les lames s’emboîtent pour former une surface pleine et régulière. Le rendu est net, presque lisse, adapté aux volumes contemporains. En contrepartie, l’emboîtement doit être posé dans le bon sens pour que l’eau ne stagne jamais dans la rainure.',
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
                Reste le sens de pose. L&apos;<strong className="text-primary font-semibold">horizontal</strong> allonge
                visuellement le bâtiment et reste la pose la plus courante ; le{' '}
                <strong className="text-primary font-semibold">vertical</strong> élance une façade, évacue
                remarquablement bien l&apos;eau de ruissellement, mais impose une ossature croisée derrière. Ce choix a
                donc une conséquence directe sur la structure de pose — et parfois sur le budget.
              </p>
            </section>

            <Figure
              src="/images/blog/bardage-bois-facade-essences-pose/bardage-bois-claire-voie-recouvrement-facade.jpg"
              alt="Façade bois associant un bardage vertical à lames jointives et des panneaux horizontaux en claire-voie"
              caption="Vertical et horizontal peuvent cohabiter sur une même façade : chaque changement de sens impose sa propre ossature de tasseaux, donc un calepinage arrêté avant la commande des lames."
            />

            {/* Grisaillement */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le grisaillement : l&apos;accepter, le retarder ou le devancer
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est la question qui revient à chaque rendez-vous, et la réponse honnête tient en une phrase :{' '}
                <strong className="text-primary font-semibold">
                  aucune finition n&apos;empêche définitivement un bardage bois de griser.
                </strong>{' '}
                Le gris est la réaction naturelle du bois aux UV et à la pluie. Il ne concerne que les premiers dixièmes
                de millimètre de la surface et n&apos;entame en rien la solidité des lames. Un bardage gris n&apos;est
                pas un bardage abîmé : c&apos;est un bardage qui a vécu quelques hivers.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ce qui se décide, en réalité, c&apos;est votre rapport à cette évolution. Quatre postures se tiennent :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  [
                    'L’accepter',
                    'ne rien appliquer et laisser la façade prendre sa patine argentée. C’est l’option la plus économique et la plus sereine, à condition d’accepter une phase de transition où le grisaillement n’est pas encore uniforme, notamment entre façade nord et façade sud.',
                  ],
                  [
                    'Le retarder au saturateur',
                    'un saturateur nourrit le bois et conserve la teinte quelques années. Il ne pèle pas, il s’estompe : la reprise se fait par simple nettoyage puis nouvelle application, sans ponçage. C’est l’entretien le plus raisonnable sur une façade.',
                  ],
                  [
                    'Le masquer à la lasure',
                    'une lasure filmogène tient la couleur plus longtemps mais forme un film qui, en vieillissant, peut s’écailler et impose alors une reprise mécanique. Sur des mètres carrés de façade en hauteur, c’est un engagement d’entretien à mesurer avant de se lancer.',
                  ],
                  [
                    'Le devancer',
                    'choisir un bardage pré-grisé ou un bois brûlé, c’est décider de l’aspect final dès le premier jour et supprimer la phase d’évolution inégale. Le rendu est stable et assumé, pour un prix de fourniture plus élevé.',
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
                Notre conseil de terrain : si l&apos;idée du gris ne vous dérange pas, ne cherchez pas à lutter. Les
                façades les plus réussies que nous avons posées en Gironde sont souvent celles dont les propriétaires ont
                accepté la patine dès le départ, et concentré leur budget sur la qualité des lames et de la pose plutôt
                que sur une finition à refaire tous les trois ans.
              </p>
            </section>

            {/* Règles de pose */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Les règles de pose qui font durer une façade
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Voici le cœur du sujet. La norme de référence pour la pose des bardages est le{' '}
                <strong className="text-primary font-semibold">NF DTU 41.2, « Revêtements extérieurs en bois »</strong>,
                publié par le{' '}
                <a href="https://www.cstb.fr/" className={lienInterne} target="_blank" rel="noopener noreferrer">
                  CSTB
                </a>
                .
                Elle formalise ce que tout charpentier sait par expérience : un bardage ne tient pas parce que le bois
                est beau, il tient parce qu&apos;il sèche.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le principe est simple. Le bardage n&apos;est jamais plaqué contre le mur : il est fixé sur des tasseaux,
                en simple ou double ossature selon le sens de pose, qui ménagent une{' '}
                <strong className="text-primary font-semibold">lame d&apos;air ventilée d&apos;au moins 20 mm</strong>{' '}
                entre les lames et le support, avec un <strong className="text-primary font-semibold">pare-pluie</strong>{' '}
                derrière. Cette lame d&apos;air permet à l&apos;humidité qui traverse ou qui condense de s&apos;évacuer,
                et au bois de sécher sur ses deux faces.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le point que l&apos;on voit le plus souvent mal exécuté :{' '}
                <strong className="text-primary font-semibold">
                  une lame d&apos;air n&apos;est réellement ventilée que si elle possède une entrée d&apos;air en partie
                  basse et une sortie en partie haute, débouchant toutes deux à l&apos;extérieur.
                </strong>{' '}
                Une lame d&apos;air bouchée en pied par une finition maladroite, ou fermée en tête sous la sous-toiture,
                n&apos;est plus une lame d&apos;air : c&apos;est un piège à condensation, et le bois s&apos;y dégrade
                prématurément. Nous avons déjà déposé des bardages de belle essence, tombés en dix ans, uniquement pour
                cette raison.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Créer l’ossature de tasseaux avant tout : c’est elle qui fabrique la lame d’air, pas le bardage.',
                  'Poser le pare-pluie derrière, en respectant les recouvrements et les points singuliers (baies, angles, pénétrations).',
                  'Laisser l’entrée d’air libre en pied de façade et la sortie libre en partie haute.',
                  'Protéger le pied de bardage : une grille anti-rongeurs ventilée en partie basse évite d’avoir à choisir entre ventiler et laisser entrer les nuisibles.',
                  'Ne jamais faire mourir le bardage au ras du sol : le bois doit rester à distance des projections et de l’humidité remontante.',
                  'Utiliser des fixations inox et soigner les encadrements de baies et les angles, qui sont les zones où l’eau s’invite.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Retenez ceci : entre un red cedar mal ventilé et un pin traité correctement posé, le second durera plus
                longtemps. C&apos;est contre-intuitif, mais c&apos;est ce que nous constatons chantier après chantier.
              </p>
            </section>

            <Figure
              src="/images/blog/bardage-bois-facade-essences-pose/pose-bardage-bois-pare-pluie-tasseaux-lame-air.jpg"
              alt="Pare-pluie et tasseaux de contre-lattage posés sur la façade avant la fixation du bardage bois, chantier en Gironde"
              caption="L'étape invisible une fois la façade finie : pare-pluie continu sur toute la surface, puis tasseaux qui fabriquent les 20 mm de lame d'air. Les points délicats se traitent ici, autour des baies et en pied de mur."
            />

            {/* Urbanisme */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Faut-il une autorisation pour poser un bardage ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Oui, et c&apos;est une étape que l&apos;on sous-estime souvent parce qu&apos;on ne crée aucune surface.
                Poser un bardage <strong className="text-primary font-semibold">modifie l&apos;aspect extérieur de la
                façade</strong> : à ce titre, les travaux relèvent d&apos;une{' '}
                <strong className="text-primary font-semibold">
                  <a
                    href="https://www.service-public.gouv.fr/particuliers/vosdroits/F17578"
                    className={lienInterne}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    déclaration préalable
                  </a>
                </strong>
                . Le délai
                d&apos;instruction est d&apos;<strong className="text-primary font-semibold">un mois</strong>, porté à{' '}
                <strong className="text-primary font-semibold">deux mois</strong> en périmètre des Bâtiments de France ou
                en site patrimonial remarquable, où l&apos;avis de l&apos;architecte des Bâtiments de France est
                obligatoire et peut imposer des teintes et des matériaux.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le dossier doit présenter la façade concernée, le matériau retenu, la teinte, le sens de pose et
                l&apos;intégration au bâti existant et à son environnement. Autrement dit, les décisions techniques que
                nous venons de passer en revue — essence, profil, horizontal ou vertical, finition — sont aussi des
                décisions administratives : mieux vaut les arrêter avant de déposer, plutôt que de devoir reprendre le
                dossier.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Le Libournais est particulièrement concerné : le territoire compte plusieurs secteurs à contraintes
                patrimoniales, à commencer par Saint-Émilion et ses alentours, où l&apos;encadrement des façades est
                réel. D&apos;une commune à l&apos;autre, et parfois d&apos;une rue à l&apos;autre, les exigences ne sont
                pas les mêmes : la seule bonne méthode est de{' '}
                <strong className="text-primary font-semibold">vérifier le PLU de votre commune</strong> et, au moindre
                doute, d&apos;interroger le service urbanisme avant de commander le bois. Nous détaillons la logique
                générale de ces formalités dans notre article sur{' '}
                <a href="/blog/autorisation-urbanisme-abri-carport-pergola-2026" className={lienInterne}>
                  les autorisations d&apos;urbanisme en 2026
                </a>
                .
              </p>
            </section>

            {/* Budget */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Budget 2026 : combien coûte un bardage bois posé
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Les fourchettes ci-dessous sont des ordres de grandeur constatés sur le marché français en 2026,{' '}
                <strong className="text-primary font-semibold">fourniture et pose comprises</strong>. Elles servent à
                cadrer un budget, pas à remplacer un devis :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Pin maritime ou sapin traité', 'l’entrée de gamme, la solution la plus économique du marché.'],
                  ['Douglas', 'environ 90 à 150 €/m² posé, le meilleur compromis durabilité, aspect et origine locale.'],
                  ['Mélèze', 'environ 120 à 200 €/m² posé, pour une teinte plus dense et une façade très exposée.'],
                  ['Red cedar', 'environ 200 à 350 €/m² posé, le haut de gamme stable, mais importé.'],
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
                Ce que ces chiffres ne disent pas, et qui pèse pourtant autant que l&apos;essence :{' '}
                <strong className="text-primary font-semibold">
                  l&apos;état du support, la hauteur de la façade, l&apos;échafaudage et les finitions
                </strong>
                . Un mur droit et sain se tasseaute vite ; un mur ancien, ondulé, qu&apos;il faut rattraper au calage,
                demande des heures supplémentaires. Une façade de plain-pied se traite d&apos;un escabeau ; un R+1
                impose un échafaudage sur toute la longueur. Et les angles, les encadrements de baies, les grilles
                anti-rongeurs et les couvertines représentent une part de main-d&apos;œuvre bien supérieure à leur part
                de matière.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                C&apos;est pourquoi nous chiffrons toujours après visite : deux maisons voisines, même surface de
                façade, même essence, peuvent aboutir à des devis sensiblement différents. Le contraire relèverait de
                l&apos;approximation. Le même principe s&apos;applique aux autres ouvrages bois — nous l&apos;expliquons
                aussi dans notre comparatif{' '}
                <a href="/blog/abri-jardin-bois-kit-ou-sur-mesure" className={lienInterne}>
                  abri de jardin en kit ou sur-mesure
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/IMG-20240712-WA0032.jpg"
              alt="Bardage bois vertical et encadrement de baie vitrée sur une façade terminée, réalisation L'Esprit Bois en Gironde"
              caption="Encadrements de baies, angles et pied de façade concentrent une large part de la main-d'œuvre : c'est souvent là que se lit l'écart entre deux devis affichés au même prix au m²."
            />

            {/* Ancrage local */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Notre approche du bardage bois à Libourne et en Gironde
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un bardage bois en Gironde intérieure n&apos;a pas les mêmes contraintes qu&apos;un bardage sur le
                Bassin. Ici, pas d&apos;embruns : la classe 3.1 suffit dans la plupart des situations, et l&apos;ennemi
                numéro un n&apos;est pas le sel mais l&apos;humidité qui stagne — pieds de façade mal dégagés, végétation
                plaquée contre le mur, gouttières qui débordent, lame d&apos;air obstruée. C&apos;est là que nous
                regardons en premier quand nous venons voir une façade à habiller.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Notre méthode ne varie pas : visite sur place, diagnostic du support, choix de l&apos;essence et du
                profil avec vous, vérification du PLU et accompagnement sur la déclaration préalable, puis pose dans les
                règles du NF DTU 41.2, ossature et ventilation en tête. Un seul interlocuteur du premier relevé à la
                dernière lame.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Vous pouvez voir comment cela se traduit sur nos{' '}
                <a href="/realisations" className={lienInterne}>réalisations en Gironde</a> et découvrir notre approche
                des <a href="/constructions-bois" className={lienInterne}>constructions bois</a>, du bardage de façade à
                l&apos;extension complète, à Libourne et dans tout le Libournais.
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
              Bardage bois en façade : vos questions
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
              Une façade bois qui vieillit bien, c&apos;est une façade qui respire
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Choisissez l&apos;essence pour son aspect, son origine et votre budget ; choisissez votre poseur pour la
              ventilation qu&apos;il saura ménager derrière les lames. C&apos;est ce diagnostic que nous menons chez
              L&apos;Esprit Bois, entreprise certifiée Qualibat, à Libourne et dans toute la Gironde — essence, profil de
              pose, déclaration préalable et budget compris.
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
