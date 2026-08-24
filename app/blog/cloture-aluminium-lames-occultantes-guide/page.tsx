import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/blog/cloture-aluminium-lames-occultantes-guide/cloture-metallique-occultante-limite-propriete.webp';

export const metadata: Metadata = buildMetadata({
  title: "Clôture aluminium : lames occultantes et pose | L'Esprit Bois",
  description:
    "Clôture aluminium à lames occultantes : degré d'occultation, prise au vent, scellement, raccord au portail et budget 2026 au mètre linéaire, en Gironde.",
  keywords:
    "clôture aluminium, clôture aluminium lames occultantes, brise-vue aluminium, clôture alu occultante, lames orientables clôture, poteaux clôture aluminium, portail et clôture assortis, prix clôture aluminium 2026, clôture aluminium Gironde, clôture aluminium Libourne",
  path: '/blog/cloture-aluminium-lames-occultantes-guide',
  ogImage: COVER,
  ogTitle:
    'Clôture en aluminium : lames occultantes, limite séparative et raccord au portail',
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
        name: 'Clôture en aluminium à lames occultantes',
        item: 'https://lesprit-bois.fr/blog/cloture-aluminium-lames-occultantes-guide',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      'Clôture en aluminium : lames occultantes, limite séparative et raccord au portail, le guide en Gironde',
    description:
      "Une clôture aluminium se choisit sur son degré d'occultation et sur sa prise au vent : c'est ce couple qui décide de la hauteur tenable, du nombre de poteaux et du scellement. Lames pleines, ajourées ou orientables, teinte accordée au portail et aux menuiseries, pose sur terrain en pente et budget 2026 au mètre linéaire, par un artisan à Libourne (Gironde).",
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
    datePublished: '2026-08-13',
    dateModified: '2026-08-13',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/cloture-aluminium-lames-occultantes-guide',
    },
    about: [
      { '@type': 'Thing', name: 'clôture aluminium' },
      { '@type': 'Thing', name: 'lames occultantes' },
      { '@type': 'Thing', name: 'brise-vue aluminium' },
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
        name: 'Une clôture aluminium à lames occultantes résiste-t-elle au vent ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, à condition que la pose soit dimensionnée pour l'occultation choisie. Une clôture pleine ne laisse pas passer l'air : elle se comporte comme une voile et transmet tout l'effort aux poteaux et à leur scellement. Ce n'est presque jamais la lame qui lâche, c'est le pied de poteau qui prend du jeu. Sur un terrain dégagé, nous resserrons l'entraxe des poteaux, nous augmentons le volume des massifs de scellement et nous préférons parfois une occultation partielle à une hauteur pleine.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faut-il une autorisation pour poser une clôture aluminium ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Cela dépend de votre commune et de la zone. Beaucoup de communes soumettent l'édification d'une clôture à déclaration préalable, et le PLU peut imposer une hauteur, une teinte ou un type de clôture. Ces règles se vérifient en mairie, au service urbanisme, avant de commander les profilés. Nous détaillons la logique des hauteurs et de la limite séparative dans notre guide de la clôture brise-vue en bois, et nous nous chargeons de la vérification avant d'engager un chantier.",
        },
      },
      {
        '@type': 'Question',
        name: 'Lames pleines ou lames ajourées : que choisir pour une limite séparative ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Pour une limite séparative, l'occultation totale n'est utile que sur les linéaires réellement exposés aux vues : le vis-à-vis d'une fenêtre, la terrasse, le coin piscine. Sur le reste du tracé, des lames ajourées ou espacées suffisent à marquer la limite, laissent circuler l'air, gardent de la lumière au jardin et coûtent moins cher. Mélanger les deux traitements sur un même chantier est souvent la meilleure décision.",
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on poser une clôture aluminium sur un terrain en pente ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, de deux manières. La pose en décrochements, ou pose en escalier, garde des panneaux horizontaux et rattrape la pente d'un poteau à l'autre : le rendu est net mais laisse un jour triangulaire en pied, à combler par un muret bahut ou une plinthe. La pose suivant la pente, avec des lames coupées en biais, colle au terrain et supprime les jours, mais demande un relevé précis et une fabrication au millimètre. Le choix se fait sur place, après relevé des niveaux.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faut-il assortir la clôture au portail et aux menuiseries ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Assortir, oui ; identifier à tout prix, non. La règle qui fonctionne est celle des deux teintes : une teinte pour les ouvrages de limite (clôture, portail, portillon) et une pour les menuiseries de la maison, ou l'inverse. Attention en revanche à un point technique : deux profilés thermolaqués dans la même référence RAL mais avec des finitions différentes, mat et satiné par exemple, ne renverront pas la même lumière côte à côte.",
        },
      },
      {
        '@type': 'Question',
        name: "Quel budget prévoir pour une clôture aluminium au mètre linéaire ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Sur nos propres chantiers en 2026, en Gironde, une clôture aluminium fournie et posée se situe le plus souvent entre 200 et 350 € le mètre linéaire en lames ajourées ou espacées, et entre 300 et 550 € en lames pleines occultantes de belle hauteur. Les lames orientables et les grandes hauteurs dépassent ces fourchettes. Ce ne sont pas des prix de marché mais nos ordres de grandeur : le degré d'occultation, la hauteur, la longueur totale, la nature du terrain et la présence d'un portail motorisé les font varier fortement.",
        },
      },
    ],
  },
];

const typesLames = [
  [
    'Lames pleines occultantes',
    'Lames jointives, occultation quasi totale',
    'Intimité maximale, effet mur léger, coupe le vis-à-vis',
    'Prise au vent maximale, pose la plus exigeante, coût le plus élevé',
  ],
  [
    'Lames espacées',
    'Lames larges avec un jour régulier entre elles',
    'Occulte à hauteur d’œil, laisse filtrer l’air et la lumière',
    'Vue possible de biais, occultation partielle',
  ],
  [
    'Lames ajourées / claire-voie',
    'Profilés fins, jours marqués, parfois inclinés',
    'Très bonne tenue au vent, rendu léger, budget contenu',
    'Ne masque pas : délimite et filtre seulement',
  ],
  [
    'Lames orientables',
    'Lames pivotantes, occultation réglable',
    'On ouvre ou on ferme selon le moment de la journée',
    'Mécanisme à entretenir, budget nettement supérieur',
  ],
];

const faq = [
  {
    q: 'Une clôture aluminium à lames occultantes résiste-t-elle au vent ?',
    r: (
      <>
        Oui, à condition que la pose soit dimensionnée pour l&apos;occultation choisie. Une clôture pleine ne laisse pas
        passer l&apos;air : elle se comporte comme une voile et transmet tout l&apos;effort aux poteaux et à leur
        scellement. Ce n&apos;est presque jamais la lame qui lâche, c&apos;est le pied de poteau qui prend du jeu. Sur un
        terrain dégagé, nous resserrons l&apos;entraxe des poteaux, nous augmentons le volume des massifs de scellement
        et nous préférons parfois une occultation partielle à une hauteur pleine.
      </>
    ),
  },
  {
    q: 'Faut-il une autorisation pour poser une clôture aluminium ?',
    r: (
      <>
        Cela dépend de votre commune et de la zone. Beaucoup de communes soumettent l&apos;édification d&apos;une clôture
        à déclaration préalable, et le PLU peut imposer une hauteur, une teinte ou un type de clôture. Ces règles se
        vérifient en mairie, au service urbanisme, avant de commander les profilés. Nous détaillons la logique des
        hauteurs et de la limite séparative dans notre{' '}
        <a href="/blog/cloture-brise-vue-bois-guide" className={lienInterne}>
          guide de la clôture brise-vue en bois
        </a>,
        et nous nous chargeons de la vérification avant d&apos;engager un chantier.
      </>
    ),
  },
  {
    q: 'Lames pleines ou lames ajourées : que choisir pour une limite séparative ?',
    r: (
      <>
        Pour une limite séparative, l&apos;occultation totale n&apos;est utile que sur les linéaires réellement exposés
        aux vues : le vis-à-vis d&apos;une fenêtre, la terrasse, le coin piscine. Sur le reste du tracé, des lames
        ajourées ou espacées suffisent à marquer la limite, laissent circuler l&apos;air, gardent de la lumière au jardin
        et coûtent moins cher. Mélanger les deux traitements sur un même chantier est souvent la meilleure décision.
      </>
    ),
  },
  {
    q: 'Peut-on poser une clôture aluminium sur un terrain en pente ?',
    r: (
      <>
        Oui, de deux manières. La pose en décrochements, ou pose en escalier, garde des panneaux horizontaux et rattrape
        la pente d&apos;un poteau à l&apos;autre : le rendu est net mais laisse un jour triangulaire en pied, à combler
        par un muret bahut ou une plinthe. La pose suivant la pente, avec des lames coupées en biais, colle au terrain et
        supprime les jours, mais demande un relevé précis et une fabrication au millimètre. Le choix se fait sur place,
        après relevé des niveaux.
      </>
    ),
  },
  {
    q: 'Faut-il assortir la clôture au portail et aux menuiseries ?',
    r: (
      <>
        Assortir, oui ; identifier à tout prix, non. La règle qui fonctionne est celle des deux teintes : une teinte pour
        les ouvrages de limite (clôture, portail, portillon) et une pour les menuiseries de la maison, ou l&apos;inverse.
        Attention en revanche à un point technique : deux profilés thermolaqués dans la même référence RAL mais avec des
        finitions différentes, mat et satiné par exemple, ne renverront pas la même lumière côte à côte.
      </>
    ),
  },
  {
    q: 'Quel budget prévoir pour une clôture aluminium au mètre linéaire ?',
    r: (
      <>
        Sur nos propres chantiers en 2026, en Gironde, une clôture aluminium fournie et posée se situe le plus souvent
        entre 200 et 350 € le mètre linéaire en lames ajourées ou espacées, et entre 300 et 550 € en lames pleines
        occultantes de belle hauteur. Les lames orientables et les grandes hauteurs dépassent ces fourchettes. Ce ne sont
        pas des prix de marché mais nos ordres de grandeur : le degré d&apos;occultation, la hauteur, la longueur totale,
        la nature du terrain et la présence d&apos;un portail motorisé les font varier fortement.
      </>
    ),
  },
];

export default function ArticleClotureAluminiumPage() {
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
              height="901"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Clôture métallique à remplissage occultant posée en limite de propriété, entre piliers maçonnés"
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
              <span className="text-secondary-fixed">Clôture aluminium</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Clôture aluminium
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Clôture en aluminium : lames occultantes, limite séparative et raccord au portail, le guide en Gironde
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
              <span>13 août 2026</span>
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
                Une clôture en aluminium se choisit sur son taux d&apos;occultation et sur sa prise au vent, pas sur son
                profil : c&apos;est ce couple-là qui décide de la hauteur tenable, du nombre de poteaux et du type de
                scellement.
              </strong>{' '}
              La teinte, la finition et le dessin des lames viennent après, ils font le style, pas la tenue. Sur nos
              chantiers en Gironde, les clôtures alu qui penchent au bout de deux hivers ne sont presque jamais des
              clôtures mal fabriquées : ce sont des clôtures pleines posées avec le scellement d&apos;une clôture
              ajourée. Voici comment décider, dans l&apos;ordre : combien occulter, où, puis comment tenir au sol, et
              enfin comment raccorder proprement le tout au portail existant.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Ce qu'elle apporte */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Clôture alu : ce qu&apos;elle apporte et ce qu&apos;elle ne remplace pas
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ce que l&apos;aluminium apporte est simple et réel : des profilés qui ne travaillent pas avec
                l&apos;humidité, un thermolaquage qui tient la teinte sans être repeint, une visserie inox, et une
                géométrie qui reste droite dans le temps. Une clôture alu se lave à l&apos;eau claire une à deux fois par
                an et c&apos;est à peu près tout. Sur les linéaires longs, les alignements très visibles depuis la rue et
                les abords de piscine, c&apos;est cette stabilité de forme et de teinte qui fait la différence.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ce qu&apos;elle ne remplace pas, en revanche :{' '}
                <strong className="text-primary font-semibold">
                  elle ne remplace pas un mur, ni une haie, ni le règlement d&apos;urbanisme de votre commune.
                </strong>{' '}
                Elle ne coupe pas le bruit d&apos;une route, un panneau de quelques millimètres d&apos;épaisseur ne fait
                pas écran acoustique. Et elle n&apos;est pas non plus toujours le bon choix esthétique : devant une
                maison en pierre, dans un bourg ancien, un ouvrage bois ou une clôture mixte s&apos;intègre souvent mieux.
                Nous posons les deux matières et nous le disons sans détour ; le comparatif de fond entre alu et bois,
                nous l&apos;avons déjà tranché dans notre article sur le{' '}
                <a href="/blog/garde-corps-terrasse-aluminium-ou-bois" className={lienInterne}>
                  garde-corps aluminium ou bois
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Un point à régler avant tout le reste : une clôture est un ouvrage réglementé. Selon la commune, son
                édification peut relever d&apos;une{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F17578"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  déclaration préalable de travaux
                </a>,
                et le <strong className="text-primary font-semibold">PLU peut imposer une hauteur, une teinte ou un
                type de clôture</strong>, cela se vérifie au service urbanisme de votre mairie, jamais par analogie avec
                le voisin. Nous n&apos;allons pas re-détailler ici les questions de hauteur autorisée et de limite
                séparative : elles sont traitées en profondeur dans notre{' '}
                <a href="/blog/cloture-brise-vue-bois-guide" className={lienInterne}>
                  guide de la clôture brise-vue
                </a>,
                et la logique est exactement la même en aluminium.
              </p>
            </section>

            {/* 2. Degré d'occultation */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le vrai critère : quel degré d&apos;occultation pour quel usage
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est la question que presque personne ne se pose, et c&apos;est pourtant la seule qui commande tout
                le reste.{' '}
                <strong className="text-primary font-semibold">
                  On n&apos;occulte pas une limite séparative comme on masque une terrasse.
                </strong>{' '}
                Une limite séparative court sur des dizaines de mètres, borde souvent un jardin, un potager, des arbres,
                et n&apos;est réellement exposée aux regards que sur quelques mètres. Une terrasse, elle, se protège
                ponctuellement, à hauteur d&apos;assise et de regard, sur un linéaire court.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                La méthode que nous appliquons en visite est terre à terre : on marche le tracé, et on note ce qu&apos;on
                voit réellement.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Les zones à occulter vraiment', 'le vis-à-vis d’une fenêtre voisine, le coin repas, les abords de piscine, l’angle vu depuis la rue. C’est là que les lames pleines se justifient.'],
                  ['Les zones à filtrer', 'le fond du jardin, la limite le long d’une haie existante, le côté nord peu fréquenté : des lames espacées ou ajourées suffisent, et le jardin reste lumineux.'],
                  ['Les zones à seulement délimiter', 'une limite sur champ ouvert, un fond de parcelle : un remplissage léger marque la propriété sans transformer le terrain en enclos.'],
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
                Le réflexe « je prends du plein partout » coûte cher deux fois : à l&apos;achat, parce que le plein est
                le remplissage le plus onéreux au mètre linéaire, et à la pose, parce qu&apos;il impose partout le
                scellement le plus lourd. Un chantier bien arbitré mélange les traitements (plein sur les mètres qui le
                méritent, ajouré ailleurs) dans la même teinte et le même profilé, ce qui donne un ensemble parfaitement
                cohérent à l&apos;œil.
              </p>
            </section>

            <Figure
              src="/images/blog/cloture-aluminium-lames-occultantes-guide/lames-metalliques-ajourees-contre-jour.webp"
              w={1200}
              h={1800}
              alt="Lames métalliques espacées vues à contre-jour, la lumière passant entre les profilés"
              caption="Photo d'illustration. Ajouré ou espacé, le remplissage laisse circuler l'air et la lumière : moins de prise au vent, et un jardin qui ne devient pas une cour."
            />

            {/* 3. Types de lames */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Lames pleines, ajourées, orientables : ce que chacune donne à voir
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Une fois le degré d&apos;occultation décidé zone par zone, le choix du remplissage devient presque
                mécanique. Quatre familles couvrent la quasi-totalité des projets que nous posons :
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Remplissage</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Principe</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Atouts</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Limites</th>
                    </tr>
                  </thead>
                  <tbody>
                    {typesLames.map((ligne, i) => (
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
                Deux nuances de terrain, qu&apos;on ne lit nulle part. D&apos;abord, une lame « pleine » ne l&apos;est
                jamais tout à fait : l&apos;emboîtement laisse un très léger jeu, et c&apos;est tant mieux, car il évite
                les sifflements et absorbe la dilatation des profilés entre une journée d&apos;août et une nuit de
                janvier. Ensuite, l&apos;<strong className="text-primary font-semibold">orientation des lames espacées
                compte autant que leur écartement</strong> : des lames légèrement inclinées masquent parfaitement depuis
                la rue, à hauteur de passant, tout en laissant voir le ciel depuis la terrasse. C&apos;est souvent le
                meilleur compromis pour une façade sur rue.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Quant aux lames orientables, elles reprennent la logique de la{' '}
                <a href="/pergolas" className={lienInterne}>
                  pergola bioclimatique
                </a>{' '}
                : on règle l&apos;occultation selon le moment de la journée. C&apos;est confortable, c&apos;est
                spectaculaire sur un linéaire court devant une terrasse, et c&apos;est un mécanisme de plus à entretenir
                sur une clôture de trente mètres. Nous les conseillons ponctuellement, rarement sur toute une limite.
              </p>
            </section>

            {/* 4. Prise au vent et scellement */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Prise au vent et scellement : ce qui fait pencher une clôture pleine
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Voici le cœur du sujet.{' '}
                <strong className="text-primary font-semibold">
                  Plus une clôture occulte, plus elle prend le vent ; plus elle prend le vent, plus le scellement et
                  l&apos;entraxe des poteaux deviennent le vrai sujet.
                </strong>{' '}
                Un panneau plein ne laisse rien traverser : il se comporte comme une voile et transmet intégralement
                l&apos;effort à ses appuis. Un remplissage ajouré, lui, laisse filer une partie de l&apos;air et sollicite
                bien moins la structure, à hauteur égale, ce n&apos;est tout simplement pas le même ouvrage.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Quand une clôture penche, ce n&apos;est presque jamais la lame qui a cédé, ni le poteau qui a plié :
                c&apos;est <strong className="text-primary font-semibold">le pied de poteau qui a pris du jeu dans le
                sol</strong>. L&apos;effort de vent travaille en levier ; le mouvement est d&apos;abord invisible, puis un
                alignement de vingt mètres se met à onduler et l&apos;œil ne voit plus que ça. C&apos;est le défaut que
                nous reprenons le plus souvent sur des clôtures posées trop légèrement.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Ce que nous appliquons sur nos chantiers, à adapter au terrain et à l&apos;exposition :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Resserrer l’entraxe des poteaux dès que l’on passe en lames pleines ou que la hauteur augmente : plus d’appuis, moins d’effort sur chacun.',
                  'Augmenter le volume du massif de scellement en pleine terre, et le couler avec une reprise nette autour du fût du poteau, l’ancrage est un ouvrage à part entière, pas un trou rebouché.',
                  'Sur muret, longrine ou dalle existante : platines et scellement chimique, avec visserie inox, après vérification que le support reprend réellement l’effort. Une platine chevillée dans un muret creux ne tient pas.',
                  'Adapter au sol réel : un terrain sableux, remblayé ou détrempé ne se comporte pas comme une terre ferme, et cela se voit à la première tarière.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                En Gironde, entre les parcelles abritées des lotissements et les limites en plein champ du Libournais ou
                des plateaux dégagés du nord du département, l&apos;écart d&apos;exposition est considérable. Nous ne
                donnons donc jamais de recette universelle :{' '}
                <strong className="text-primary font-semibold">un terrain très exposé se dimensionne au cas par cas</strong>,
                et il nous arrive de recommander de baisser la hauteur ou d&apos;alléger le remplissage plutôt que de
                surdimensionner indéfiniment les massifs.
              </p>
            </section>

            <Figure
              src="/images/blog/cloture-aluminium-lames-occultantes-guide/cloture-metallique-barreaudage-poteaux.webp"
              w={1200}
              h={800}
              alt="Clôture métallique en barreaudage vue en enfilade, poteaux régulièrement espacés"
              caption="Photo d'illustration. Un remplissage ajouré laisse passer le vent : les poteaux peuvent être espacés. Plus on occulte, plus il faut les rapprocher et soigner leur pied."
            />

            {/* 5. Teinte, portail, menuiseries */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Teinte, portail et menuiseries : réussir l&apos;ensemble
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une clôture ne se regarde jamais seule : elle est vue en même temps que le portail, le portillon, le
                garde-corps et les menuiseries de la maison. La question n&apos;est donc pas « quelle teinte me plaît »
                mais <strong className="text-primary font-semibold">« combien de teintes y a-t-il déjà sur cette
                façade »</strong>. La règle qui fonctionne presque toujours est celle des deux teintes : une pour les
                ouvrages de limite (clôture, portail, portillon), une pour les menuiseries, avec éventuellement un
                rappel de l&apos;une dans l&apos;autre.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Deux pièges concrets, vus plus d&apos;une fois. Le premier : commander la clôture chez un fournisseur et
                le portail chez un autre, dans la même référence RAL, mais avec des{' '}
                <strong className="text-primary font-semibold">finitions différentes</strong>, un mat et un satiné, par
                exemple. Côte à côte, à deux mètres l&apos;un de l&apos;autre, la différence saute aux yeux alors que le
                nuancier annonçait la même teinte. Le second : choisir la teinte sur un échantillon tenu à la main, en
                magasin. Une teinte se juge dehors, à la lumière du jour, contre la façade et posée verticalement.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nous n&apos;allons pas refaire ici le tour du nuancier et des finitions : tout est détaillé dans notre
                article sur{' '}
                <a href="/blog/choisir-teinte-ral-aluminium" className={lienInterne}>
                  le choix de la teinte RAL en aluminium
                </a>
                . Retenez seulement, pour une clôture, que la teinte se décide en même temps que celle du portail, et
                que si le PLU impose une couleur de clôture, c&apos;est elle qui commande le reste du raisonnement.
              </p>
            </section>

            <Figure
              src="/images/realisations/pergola-aluminium-toit-polycarbonate-libourne-4.webp"
              w={825}
              h={1100}
              alt="Structure en aluminium thermolaqué anthracite posée contre une maison girondine à enduit clair et volets battants"
              caption="Un de nos chantiers en Gironde : c'est aux menuiseries et au bâti existants qu'une teinte d'aluminium doit répondre, pas au catalogue. Le raisonnement vaut à l'identique pour une clôture et son portail."
            />

            {/* 6. Terrain en pente et raccords */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Pose sur terrain en pente et raccord aux ouvrages existants
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Peu de terrains sont plats, et c&apos;est là que se joue la qualité perçue d&apos;une clôture alu. Deux
                façons de traiter une pente. La{' '}
                <strong className="text-primary font-semibold">pose en décrochements</strong>, dite pose en escalier,
                garde chaque panneau parfaitement horizontal et rattrape la dénivelée d&apos;un poteau au suivant :
                rendu très net, mais un jour triangulaire apparaît en pied de chaque panneau, qu&apos;il faut combler par
                un muret bahut, une plinthe ou une lame basse ajustée. La{' '}
                <strong className="text-primary font-semibold">pose suivant la pente</strong>, avec un remplissage coupé
                en biais, épouse le terrain et supprime ces jours, c&apos;est plus élégant sur une pente régulière, mais
                cela suppose un relevé de niveaux précis avant fabrication, chaque panneau étant alors une pièce unique.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le raccord au portail, lui, se prépare avant le premier trou de tarière. Le poteau de portail n&apos;est
                pas un poteau de clôture : il encaisse le poids du vantail et les efforts répétés de la manœuvre, il se
                dimensionne et se scelle en conséquence. Et si le portail est motorisé,{' '}
                <strong className="text-primary font-semibold">
                  les fourreaux d&apos;alimentation et de commande passent avant le scellement
                </strong>,
                pas après : c&apos;est le regret numéro un des chantiers où la clôture a été posée en premier « pour
                avancer », et où il faut ensuite ouvrir une tranchée le long d&apos;un ouvrage tout juste terminé.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Restent les raccords aux ouvrages existants, qui font tout le soin d&apos;une pose : arrivée en about
                contre un mur de maison ou un pilier maçonné, angle sur un poteau existant, jonction avec une haie ou un
                grillage conservé, franchissement d&apos;un regard ou d&apos;un compteur. Chacun de ces points se
                dessine sur le relevé, avant commande, c&apos;est exactement le travail que nous menons sur nos chantiers
                d&apos;<a href="/amenagement-exterieur" className={lienInterne}>aménagement extérieur</a>, où la clôture
                arrive souvent en même temps qu&apos;une terrasse, un portail ou une allée.
              </p>
            </section>

            {/* 7. Budget */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Budget 2026 au mètre linéaire et arbitrage en Gironde (Libourne)
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une clôture se chiffre au mètre linéaire, pose comprise. Les ordres de grandeur que nous donnons ici sont{' '}
                <strong className="text-primary font-semibold">
                  ceux constatés sur nos propres chantiers en 2026, en Gironde
                </strong>,{' '}
               ce ne sont ni des prix de marché ni un tarif : entre 200 et 350 € le mètre linéaire pour un remplissage
                ajouré ou à lames espacées, et entre 300 et 550 € le mètre linéaire pour des lames pleines occultantes de
                belle hauteur, fournies et posées. Les lames orientables et les grandes hauteurs sortent de ces
                fourchettes, et un portail motorisé se chiffre à part.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Ce qui fait bouger ces chiffres, dans l&apos;ordre d&apos;importance sur nos devis :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le degré d’occultation', 'c’est le premier poste : le plein coûte plus cher au mètre, et il impose en plus un ancrage renforcé sur tout le linéaire concerné.'],
                  ['La hauteur', 'elle joue deux fois, sur la quantité de profilés et sur le dimensionnement des poteaux et des massifs.'],
                  ['La longueur totale', 'un long linéaire amortit la mise en œuvre et l’approvisionnement ; dix mètres coûtent proportionnellement plus cher que soixante.'],
                  ['Le terrain', 'pente, sol dur ou remblayé, accès pour la mini-pelle, réseaux enterrés à repérer : c’est le poste le plus imprévisible depuis un bureau.'],
                  ['Le portail et ses abords', 'poteaux renforcés, motorisation, fourreaux, coffret : à intégrer dès le devis plutôt qu’à rajouter ensuite.'],
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
                Notre arbitrage le plus fréquent à Libourne et dans le Libournais consiste à{' '}
                <strong className="text-primary font-semibold">
                  concentrer le budget occultant là où il sert
                </strong>{' '}
                : lames pleines sur les quelques mètres exposés aux vues, remplissage ajouré sur le reste du tracé, même
                teinte et même profilé partout. À budget égal, l&apos;ouvrage est mieux posé, mieux tenu au vent, et le
                jardin garde sa lumière. Si votre projet penche finalement vers le bois (maison ancienne, esprit
                végétal, budget serré), nous le disons et nous vous orientons vers notre{' '}
                <a href="/blog/cloture-brise-vue-bois-guide" className={lienInterne}>
                  guide de la clôture brise-vue en bois
                </a>{' '}
                ; et si la question du bilan environnemental de l&apos;aluminium vous retient, nous y avons répondu dans{' '}
                <a href="/blog/aluminium-ecologique-recyclage-bas-carbone" className={lienInterne}>
                  notre article sur l&apos;aluminium recyclé
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Le reste se juge sur pièce : vous pouvez parcourir{' '}
                <a href="/realisations" className={lienInterne}>
                  nos réalisations en Gironde
                </a>{' '}
                pour voir comment nous traitons les alignements, les angles et les raccords aux ouvrages existants.
              </p>
            </section>

            <Figure
              src="/images/realisations/salon-sous-pergola-aluminium-libourne-8.webp"
              w={825}
              h={1100}
              alt="Ouvrage en aluminium thermolaqué avec store screen posé par L'Esprit Bois en Gironde"
              caption="Un ouvrage aluminium posé par nos équipes en Gironde : comme pour une clôture, la tenue dans le temps se joue au relevé et à l'ancrage, pas au profil choisi sur catalogue."
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
              Clôture en aluminium : vos questions
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
              Une clôture qui tient droite dans dix ans
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Occulter là où c&apos;est utile, filtrer partout ailleurs, et dimensionner les poteaux et le scellement
              pour l&apos;occultation réellement choisie : c&apos;est tout le métier d&apos;une clôture en aluminium. Le
              reste (teinte, finition, dessin des lames) fait le style, pas la tenue. Nous relevons votre limite,
              vérifions les règles applicables à votre commune et chiffrons l&apos;ouvrage sur place, à Libourne et dans
              toute la Gironde.
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
