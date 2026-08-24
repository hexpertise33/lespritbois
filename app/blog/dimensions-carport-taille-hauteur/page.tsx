import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/source-adefrance/Carport-bois-Libourne-6.webp';

export const metadata: Metadata = buildMetadata({
  title: "Dimensions d'un carport : quelle taille ? | L'Esprit Bois",
  description:
    "Quelle taille pour un carport ? Hauteur sous traverse, largeur utile, dégagement des portières et trame une ou deux voitures, par un artisan en Gironde.",
  keywords:
    "dimensions carport, hauteur carport, taille carport 2 voitures, largeur carport, carport dimensions Gironde, carport sur mesure Libourne, hauteur sous traverse carport, carport SUV, carport bois Libourne, carport aluminium Gironde",
  path: '/blog/dimensions-carport-taille-hauteur',
  ogImage: COVER,
  ogTitle:
    'Quelle taille pour un carport ? Dimensions, hauteur et implantation pour bien garer sa voiture',
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
        name: "Dimensions d'un carport",
        item: 'https://lesprit-bois.fr/blog/dimensions-carport-taille-hauteur',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      'Quelle taille pour un carport ? Dimensions, hauteur et implantation pour bien garer sa voiture',
    description:
      "La cote qui rate un carport n'est presque jamais la longueur, mais la hauteur libre sous traverse et la place pour ouvrir les portières. Mesurer sa vraie voiture, choisir sa trame, arbitrer portée et poteaux, implanter l'abri par rapport à la rue : le guide dimensionnel d'un artisan à Libourne, en Gironde.",
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
    datePublished: '2026-08-08',
    dateModified: '2026-08-08',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/dimensions-carport-taille-hauteur',
    },
    about: [
      { '@type': 'Thing', name: 'dimensions carport' },
      { '@type': 'Thing', name: 'hauteur carport' },
      { '@type': 'Thing', name: 'carport sur mesure' },
      { '@type': 'Thing', name: 'abri voiture' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quelle hauteur prévoir sous un carport ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La cote qui compte n'est pas la hauteur hors tout de l'ouvrage mais la hauteur libre sous traverse, c'est-à-dire sous le point le plus bas de la structure (poutre, chéneau, gouttière). Sur nos chantiers en Gironde, nous partons rarement en dessous de 2,20 m de hauteur libre pour une berline ou un SUV courant, et nous montons volontiers vers 2,40 à 2,60 m dès qu'il y a des barres de toit, un coffre de toit, un porte-vélos ou un utilitaire. Le plafond de 1,90 m des parkings publics explique d'ailleurs pourquoi tant de véhicules chargés n'y entrent pas : mieux vaut ne pas reproduire cette contrainte chez soi.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quelle largeur pour un carport deux voitures ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Deux voitures ne se rangent pas dans deux fois la largeur d'une voiture : il faut la largeur des deux véhicules, rétroviseurs dépliés, plus le dégagement pour ouvrir quatre portières, dont deux qui s'ouvrent face à face au centre. Sur nos chantiers, nous considérons 5,50 m de largeur libre entre poteaux comme un minimum et nous conseillons plutôt 6 à 6,50 m dès que les deux voitures servent tous les jours. Ce sont des ordres de grandeur constatés, pas une norme.",
        },
      },
      {
        '@type': 'Question',
        name: "Un carport standard de 3 × 5 m suffit-il pour un SUV ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Sur le papier oui, dans l'usage rarement. Un SUV compact 2026 mesure environ 4,50 m de long et 1,83 à 1,90 m de large, mais atteint 2,08 à 2,11 m rétroviseurs dépliés : il reste alors moins de 50 cm de chaque côté dans un carport de 3 m, et cette marge doit encore absorber l'ouverture des portières et l'imprécision du stationnement. Il faut aussi vérifier que la cote de 3 × 5 m annoncée est bien la cote libre entre poteaux et non la dimension hors tout de la toiture.",
        },
      },
      {
        '@type': 'Question',
        name: 'La norme NF P 91-100 et sa place de 2,50 × 5 m s’appliquent-elles à un carport de maison ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non. La norme NF P 91-100 définit une place de stationnement de référence de 2,50 m par 5,00 m en bataille, avec une allée de circulation de 5 m, mais elle vise les parcs de stationnement accessibles au public et les véhicules légers de moins de 3,5 t et de moins de 1,90 m de hauteur. Elle n'a aucune valeur contraignante pour un carport privé. Elle reste utile comme point de départ : c'est le minimum vital sous lequel il ne faut jamais descendre, et non un objectif de confort.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faut-il un poteau central pour un carport deux voitures ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Cela dépend de la matière et de la portée demandée. Les profilés aluminium franchissent de plus grandes portées à section visible constante et permettent souvent de supprimer le poteau intermédiaire, ce qui libère le passage entre les deux voitures. En bois, franchir la même largeur suppose une poutre de section nettement plus importante, ou une trame avec un poteau intermédiaire assumé dès la conception. La question à trancher est donc dimensionnelle avant d'être esthétique : où tomberont les poteaux par rapport aux portières.",
        },
      },
    ],
  },
];

const programmes = [
  [
    'Une voiture',
    '5,00 à 5,50 m',
    '3,00 à 3,50 m',
    'Descendre côté opposé au poteau si le passage est contraint',
  ],
  [
    'Deux voitures',
    '5,00 à 5,50 m',
    '5,50 à 6,50 m',
    'Deux portières qui s’ouvrent face à face au centre',
  ],
  [
    'Voiture + rangement',
    '5,00 à 6,00 m',
    '3,80 à 4,50 m',
    'Bande latérale pour vélos, bois, poubelles ou borne de recharge',
  ],
  [
    'Utilitaire / van',
    '5,50 à 6,50 m',
    '3,20 à 3,80 m',
    'Hauteur libre et débattement du hayon à vérifier en premier',
  ],
];

const faq = [
  {
    q: 'Quelle hauteur prévoir sous un carport ?',
    r: (
      <>
        La cote qui compte n&apos;est pas la hauteur hors tout de l&apos;ouvrage mais la{' '}
        <strong className="text-primary font-semibold">hauteur libre sous traverse</strong>,
        c&apos;est-à-dire sous le point le plus bas de la structure (poutre, chéneau, gouttière). Sur nos chantiers en
        Gironde, nous partons rarement en dessous de 2,20 m de hauteur libre pour une berline ou un SUV courant, et
        nous montons volontiers vers 2,40 à 2,60 m dès qu&apos;il y a des barres de toit, un coffre de toit, un
        porte-vélos ou un utilitaire. Le plafond de 1,90 m des parkings publics explique d&apos;ailleurs pourquoi tant
        de véhicules chargés n&apos;y entrent pas : mieux vaut ne pas reproduire cette contrainte chez soi.
      </>
    ),
  },
  {
    q: 'Quelle largeur pour un carport deux voitures ?',
    r: (
      <>
        Deux voitures ne se rangent pas dans deux fois la largeur d&apos;une voiture : il faut la largeur des deux
        véhicules, rétroviseurs dépliés, plus le dégagement pour ouvrir quatre portières, dont deux qui s&apos;ouvrent
        face à face au centre. Sur nos chantiers, nous considérons 5,50 m de largeur libre entre poteaux comme un
        minimum et nous conseillons plutôt 6 à 6,50 m dès que les deux voitures servent tous les jours. Ce sont des
        ordres de grandeur constatés, pas une norme.
      </>
    ),
  },
  {
    q: 'Un carport standard de 3 × 5 m suffit-il pour un SUV ?',
    r: (
      <>
        Sur le papier oui, dans l&apos;usage rarement. Un SUV compact 2026 mesure environ 4,50 m de long et 1,83 à
        1,90 m de large, mais atteint 2,08 à 2,11 m rétroviseurs dépliés : il reste alors moins de 50 cm de chaque côté
        dans un carport de 3 m, et cette marge doit encore absorber l&apos;ouverture des portières et
        l&apos;imprécision du stationnement. Il faut aussi vérifier que la cote de 3 × 5 m annoncée est bien la cote
        libre entre poteaux et non la dimension hors tout de la toiture.
      </>
    ),
  },
  {
    q: 'La norme NF P 91-100 et sa place de 2,50 × 5 m s’appliquent-elles à un carport de maison ?',
    r: (
      <>
        Non. La norme NF P 91-100 définit une place de stationnement de référence de 2,50 m par 5,00 m en bataille,
        avec une allée de circulation de 5 m, mais elle vise les parcs de stationnement accessibles au public et les
        véhicules légers de moins de 3,5 t et de moins de 1,90 m de hauteur. Elle n&apos;a aucune valeur contraignante
        pour un carport privé. Elle reste utile comme point de départ : c&apos;est le minimum vital sous lequel il ne
        faut jamais descendre, et non un objectif de confort.
      </>
    ),
  },
  {
    q: 'Faut-il un poteau central pour un carport deux voitures ?',
    r: (
      <>
        Cela dépend de la matière et de la portée demandée. Les profilés aluminium franchissent de plus grandes portées
        à section visible constante et permettent souvent de supprimer le poteau intermédiaire, ce qui libère le
        passage entre les deux voitures. En bois, franchir la même largeur suppose une poutre de section nettement plus
        importante, ou une trame avec un poteau intermédiaire assumé dès la conception. La question à trancher est donc
        dimensionnelle avant d&apos;être esthétique : où tomberont les poteaux par rapport aux portières.
      </>
    ),
  },
];

export default function ArticleDimensionsCarportPage() {
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
              alt="Carport bois deux voitures avec poteau central, hauteur libre sous traverse visible au-dessus des véhicules, à Arveyres en Gironde"
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
              <span className="text-secondary-fixed">Dimensions d&apos;un carport</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Carport
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Quelle taille pour un carport ? Dimensions, hauteur et implantation pour bien garer sa voiture
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
              <span>8 août 2026</span>
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
                La cote qui rate un carport n&apos;est presque jamais la longueur : c&apos;est la hauteur libre sous
                traverse et la place de manœuvre pour ouvrir les portières. Avant de comparer le moindre kit, mesurez
                votre véhicule réel (rétroviseurs dépliés, hauteur avec barres, coffre de toit ou porte-vélos) puis
                ajoutez le dégagement nécessaire pour descendre de voiture.
              </strong>{' '}
              Un carport aux bonnes cotes sur le papier devient inutilisable dès qu&apos;on y met un SUV chargé, un
              utilitaire ou un van aménagé. Sur nos chantiers en Gironde, nous voyons régulièrement des abris tout neufs
              où l&apos;on n&apos;ouvre plus la portière conducteur qu&apos;à moitié, ou sous lesquels on ne rentre plus
              dès qu&apos;on a monté le coffre de toit pour partir en vacances. Voici comment poser les bonnes cotes,
              dans le bon ordre, que votre carport soit en bois ou en aluminium, nous vendons et posons les deux.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Les cotes réelles d'une voiture */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Les cotes réelles d&apos;une voiture d&apos;aujourd&apos;hui face aux kits standards
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le point de départ le plus répandu, c&apos;est la place de stationnement de référence de la norme{' '}
                <strong className="text-primary font-semibold">NF P 91-100</strong> : 2,50 m par 5,00 m en bataille,
                desservie par une allée de circulation de 5 m. Deux précisions honnêtes avant de s&apos;en servir. Cette
                norme vise les <em>parcs de stationnement accessibles au public</em> et les véhicules légers de moins de
                3,5 t et de moins de 1,90 m de hauteur : elle{' '}
                <strong className="text-primary font-semibold">ne s&apos;applique pas à un carport privé</strong>. Et
                elle décrit un minimum vital de parking urbain, pas un confort de maison. Elle reste un excellent
                plancher, on ne descend pas en dessous, mais un mauvais objectif.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Confrontons-la aux voitures que nos clients garent réellement. Un SUV compact 2026 comme la{' '}
                <strong className="text-primary font-semibold">Peugeot 3008</strong> mesure environ 4,54 m de long,
                1,90 m de large et 1,64 m de haut ; un <strong className="text-primary font-semibold">Renault Austral</strong>{' '}
                environ 4,51 m × 1,83 m × 1,64 m. Mais la cote qui décide de tout n&apos;est écrite ni sur la plaquette
                du kit, ni en tête de fiche technique : la{' '}
                <strong className="text-primary font-semibold">largeur rétroviseurs dépliés</strong>, qui atteint
                environ 2,08 à 2,11 m sur ces deux modèles. Dans une place de 2,50 m, il reste donc une vingtaine de
                centimètres de chaque côté, de quoi passer, pas de quoi vivre.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Deuxième piège des kits : la dimension annoncée. Un carport « 3 × 5 m » désigne très souvent la{' '}
                <strong className="text-primary font-semibold">dimension hors tout de la toiture</strong>, débords
                compris, et non la cote libre entre poteaux, qui peut être inférieure de 20 à 40 cm selon la position
                des appuis et la section des montants. Sur un ouvrage sur mesure, nous raisonnons toujours en{' '}
                <strong className="text-primary font-semibold">cote libre</strong> : c&apos;est la seule qui vous
                concerne au volant.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Le geste à faire ce week-end, mètre en main, sur votre voiture garée : longueur pare-chocs à
                pare-chocs, largeur rétroviseurs dépliés, hauteur au point le plus haut{' '}
                <em>avec</em> les accessoires que vous laissez à demeure. Ces trois chiffres-là valent tous les
                catalogues.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Carport-bois-Libourne-3.webp"
              w={1200}
              h={646}
              alt="Carport bois avec véhicule garé : cote libre entre poteaux et débord de toiture, chantier à Capian en Gironde"
              caption="Sur cet abri, la couverture déborde nettement au-delà de la ligne des poteaux : la dimension « hors tout » d'un kit est toujours plus flatteuse que la cote libre entre poteaux, la seule qui vous concerne au volant."
            />

            {/* 2. Hauteur libre sous traverse */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                La hauteur libre sous traverse : la cote qu&apos;on oublie
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est de très loin l&apos;erreur la plus fréquente, et la plus difficile à rattraper une fois
                l&apos;ouvrage posé. Une fiche produit annonce une{' '}
                <strong className="text-primary font-semibold">hauteur hors tout</strong>, du sol au faîtage ou au
                point haut de la couverture. Ce qui vous intéresse, c&apos;est la{' '}
                <strong className="text-primary font-semibold">hauteur libre sous traverse</strong> : la distance entre
                le sol fini et le point le plus bas de la structure, c&apos;est-à-dire la poutre, la panne basse, le
                chéneau ou la gouttière. Entre les deux, il peut manquer 30, 40, parfois 60 cm.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le repère des 1,90 m des parkings publics, la hauteur maximale des véhicules visés par la norme, est
                très parlant : c&apos;est exactement pour cette raison que tant de SUV équipés d&apos;un coffre de toit
                se retrouvent bloqués à l&apos;entrée d&apos;un parking souterrain. Un véhicule de 1,64 m de haut
                dépasse facilement 1,95 à 2,05 m une fois les barres et le coffre montés, davantage avec un porte-vélos
                de toit. Reproduire cette contrainte chez soi serait dommage.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Sur nos chantiers en Gironde, nous partons rarement en dessous de{' '}
                <strong className="text-primary font-semibold">2,20 m de hauteur libre</strong> pour une berline ou un
                SUV courant, et nous montons volontiers vers{' '}
                <strong className="text-primary font-semibold">2,40 à 2,60 m</strong> dans quatre cas très concrets. Ce
                sont des ordres de grandeur constatés, pas une règle :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Coffre de toit, barres, porte-vélos', 'ces accessoires restent souvent montés plusieurs semaines par an ; on dimensionne sur la configuration chargée, pas sur la voiture nue.'],
                  ['Van aménagé, fourgon, utilitaire', 'ce sont des véhicules hauts par nature, et le hayon ou les portes arrière relevés montent encore plus haut que le pavillon.'],
                  ['Hayon de coffre ouvert', 'sur un break ou un SUV, un hayon relevé dépasse largement la hauteur du véhicule : si vous chargez sous l’abri, la traverse arrière doit en tenir compte.'],
                  ['Porte de garage ou portail motorisé à proximité', 'une porte sectionnelle qui se replie sous plafond, un rail de portail coulissant ou un moteur de portail battant peuvent occuper précisément le volume où l’on comptait poser la traverse.'],
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
                Le point bas n&apos;est pas au même endroit selon la matière. Sur un carport{' '}
                <strong className="text-primary font-semibold">bois</strong>, c&apos;est la poutre de rive ou la panne
                basse, à laquelle s&apos;ajoute une gouttière rapportée qui descend encore de quelques centimètres. Sur
                un carport <strong className="text-primary font-semibold">aluminium</strong>, le chéneau est
                généralement intégré au profilé périphérique et l&apos;évacuation descend dans un poteau : la hauteur
                libre est plus lisible, mais elle se mesure sous ce profilé, pas sous la couverture. Dans les deux cas,
                on relève la cote au point le plus bas, du côté de la pente basse.
              </p>
            </section>

            {/* 3. Largeur et dégagement des portières */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Largeur et dégagement des portières : garer n&apos;est pas descendre de voiture
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une largeur de carport se compose de trois choses, jamais d&apos;une seule :{' '}
                <strong className="text-primary font-semibold">la largeur du véhicule rétroviseurs dépliés</strong>, le{' '}
                <strong className="text-primary font-semibold">débattement des portières</strong>, et la{' '}
                <strong className="text-primary font-semibold">marge d&apos;imprécision</strong> du stationnement
                quotidien, parce que personne ne se gare au centimètre, surtout de nuit, sous la pluie, avec les
                courses à décharger.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Faites le test le plus simple qui soit : garez-vous, ouvrez la portière conducteur comme vous
                l&apos;ouvrez habituellement, et mesurez. Une ouverture confortable, celle qui permet de sortir sans
                se contorsionner, d&apos;installer un enfant dans un siège auto ou de descendre avec une canne, demande
                sur nos chantiers de l&apos;ordre de 60 à 80 cm entre le flanc du véhicule et l&apos;obstacle. Sur un
                carport de 3 m de largeur libre où l&apos;on gare un SUV de 2,10 m rétroviseurs dépliés, il reste moins
                de 45 cm à répartir des deux côtés : on ouvre à moitié.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                D&apos;où une règle d&apos;implantation que nous appliquons systématiquement quand la largeur est
                contrainte :{' '}
                <strong className="text-primary font-semibold">
                  on place la contrainte du côté où l&apos;on ne descend pas
                </strong>
                . Poteau, mur mitoyen, haie, coffre de rangement : tout ce qui pince l&apos;espace va du côté passager
                si le conducteur est seul, ou du côté opposé à la porte d&apos;entrée si la maison se rejoint par un
                côté précis. C&apos;est gratuit à la conception et invivable à corriger après coup.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Sur nos réalisations, nous partons donc de{' '}
                <strong className="text-primary font-semibold">3,00 à 3,50 m de largeur libre</strong> pour une voiture,
                en visant le haut de la fourchette dès qu&apos;il y a des enfants, un siège auto, un fauteuil ou
                simplement l&apos;habitude de charger par le côté. Là encore, ordre de grandeur constaté, pas norme.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Carport-bois-Libourne-2.webp"
              w={1200}
              h={646}
              alt="Largeur libre sous un carport bois adossé à la maison, entre le mur et la ligne de poteaux, à Lugon-et-l'Île-du-Carnay"
              caption="Adossé à un mur, un carport n'offre qu'un seul côté pour descendre : c'est cette bande-là qu'on mesure, en visant 60 à 80 cm entre le flanc du véhicule et l'obstacle."
            />

            {/* 4. Trois programmes, trois trames */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Une voiture, deux voitures, voiture + rangement : trois programmes, trois trames
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un carport ne se dimensionne pas en surface mais en{' '}
                <strong className="text-primary font-semibold">programme</strong> : ce que vous y mettez, et ce que vous
                y ferez. Le piège classique du deux voitures est arithmétique, on double la largeur d&apos;une place et
                on oublie que quatre portières s&apos;ouvrent, dont deux face à face au centre. Voici les trames dont
                nous partons, à ajuster ensuite sur votre véhicule et votre terrain :
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Programme</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Longueur libre</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Largeur libre</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Point de vigilance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {programmes.map((ligne, i) => (
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
                Ces fourchettes sont des ordres de grandeur relevés sur nos chantiers girondins, à confronter à vos
                propres mesures, elles n&apos;ont aucune valeur réglementaire. Deux remarques les accompagnent presque
                toujours.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                D&apos;abord, la longueur mérite un peu plus d&apos;attention qu&apos;on ne croit : 5 m suffisent pour
                la carrosserie d&apos;un SUV compact, mais pas pour charger un coffre ouvert à l&apos;abri, ni pour un
                break, ni pour laisser passer quelqu&apos;un derrière le pare-chocs sans sortir sous la pluie. Sur les
                projets où le carport sert aussi d&apos;auvent d&apos;entrée, nous allongeons volontiers.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ensuite, la bande de rangement latérale est ce que les clients regrettent le plus de ne pas avoir prévu.
                Vélos, poubelles, bois de chauffage, et de plus en plus{' '}
                <strong className="text-primary font-semibold">une borne de recharge</strong> avec son câble : autant
                d&apos;usages qui grignotent la largeur si on ne leur a pas donné leur propre bande. Un carport pensé
                comme un abri à tout faire se dessine différemment d&apos;un simple couvre-voiture, c&apos;est aussi ce
                que nous traitons dans notre{' '}
                <a href="/blog/carport-bois-guide" className={lienInterne}>
                  guide du carport en bois
                </a>,
                côté conception et intégration.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Carport-aluminium-Libourne-4.webp"
              w={1200}
              h={646}
              alt="Carport aluminium deux voitures : un SUV et un coupé garés côte à côte sous une même toiture"
              caption="Un abri deux voitures se dimensionne sur la largeur des deux véhicules rétroviseurs dépliés, plus la bande centrale où s'ouvrent deux portières face à face : 5,50 m de largeur libre au minimum, 6 à 6,50 m pour un usage quotidien."
            />

            {/* 5. Portée et poteaux */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Portée et poteaux : ce que la matière change à la trame
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Nous posons le bois et l&apos;aluminium, et sur le plan strictement dimensionnel la différence est
                nette : elle porte sur la{' '}
                <strong className="text-primary font-semibold">portée franchissable sans appui intermédiaire</strong>.
                C&apos;est la seule question que nous traitons ici, le budget, l&apos;entretien et l&apos;esthétique
                sont abordés ailleurs.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Côté <strong className="text-primary font-semibold">aluminium</strong>, les profilés porteurs (poutres
                de rive et chevrons en alliage, souvent avec chéneau intégré) franchissent de plus grandes portées à
                section visible constante. Concrètement, sur un abri deux voitures, cela permet fréquemment de{' '}
                <strong className="text-primary font-semibold">supprimer le poteau intermédiaire</strong> et de libérer
                complètement le passage central, celui-là même où s&apos;ouvrent les deux portières face à face. La
                lecture de l&apos;ouvrage reste fine, les poteaux se placent aux angles.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Côté <strong className="text-primary font-semibold">bois</strong>, franchir la même largeur suppose une
                poutre de section nettement plus importante (visuellement présente, et qui mange par le bas quelques
                centimètres de hauteur libre) ou bien une{' '}
                <strong className="text-primary font-semibold">trame assumée</strong>, avec un poteau intermédiaire et
                un entraxe de pannes calé sur cette trame. Ce n&apos;est ni un défaut ni une fatalité : c&apos;est un
                paramètre à intégrer <em>avant</em> de figer le plan de stationnement, pour que le poteau tombe entre
                les deux voitures à l&apos;endroit où personne ne descend, et non pile devant une portière.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                La bonne méthode est donc inverse de l&apos;habituelle : on dessine d&apos;abord les places et les
                portières, ensuite on place les poteaux, et c&apos;est ce plan qui oriente le choix de la matière. Si
                vous en êtes à arbitrer entre les deux, notre{' '}
                <a href="/blog/carport-aluminium-ou-bois-comparatif" className={lienInterne}>
                  comparatif carport aluminium ou bois
                </a>{' '}
                détaille le reste de l&apos;équation, budget et entretien compris.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Carport-aluminium-Libourne-2.webp"
              w={1200}
              h={646}
              alt="Carport aluminium à grande portée, poteaux reportés en périphérie et passage central libre entre les deux places"
              caption="Ici, aucun appui entre les deux voitures : les poteaux sont reportés en périphérie. Franchir la même largeur en bois suppose une poutre de forte section, ou un poteau intermédiaire placé dès le plan de stationnement."
            />

            {/* 6. Implantation et manœuvre */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Implantation et manœuvre depuis la rue : le contexte girondin
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un carport correctement dimensionné peut rester inutilisable si l&apos;on ne peut pas y entrer
                proprement. La cote décisive devient alors l&apos;
                <strong className="text-primary font-semibold">espace de manœuvre entre le portail et l&apos;abri</strong>{' '}
                : c&apos;est lui qui décide si l&apos;on rentre d&apos;un coup de volant ou en trois reprises, tous les
                soirs, pendant vingt ans.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Autour de Libourne, nous rencontrons trois configurations récurrentes. Dans les rues étroites du centre
                ancien et des bourgs du Libournais, le véhicule arrive presque perpendiculairement au portail :
                l&apos;entrée se fait en marche arrière et l&apos;abri doit être décalé, voire tourné, pour offrir une
                amorce de manœuvre. Dans les lotissements récents de Libourne, Saint-Denis-de-Pile ou Les Billaux, la
                parcelle est souvent en longueur, avec une allée qui longe la maison : le carport s&apos;implante bien
                en enfilade, à condition de vérifier que l&apos;on ouvre encore les portières côté maison. Enfin, sur
                les propriétés viticoles et les maisons de campagne du secteur, la place ne manque pas mais l&apos;abri
                doit se caler sur le sens du vent dominant et sur le cheminement piéton vers la porte d&apos;entrée.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Notre méthode de relevé tient en une opération que vous pouvez faire vous-même :{' '}
                <strong className="text-primary font-semibold">
                  matérialisez au sol l&apos;emprise du futur carport
                </strong>{' '}
                (quatre piquets, une cordelette ou un trait de peinture temporaire) puis garez-vous dedans pendant une
                semaine, matin et soir. Vous saurez très vite si l&apos;implantation tient, bien avant d&apos;engager le
                moindre euro. Nous faisons exactement cela lors de nos visites, mètre en main, avec le client au volant.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Dernier point, réglementaire cette fois : votre PLU peut imposer des reculs par rapport aux limites
                séparatives ou à l&apos;alignement de la voie, et ces règles varient d&apos;une commune à l&apos;autre,
                à vérifier au service urbanisme de votre mairie avant de figer l&apos;implantation. Pour les formalités
                elles-mêmes, nous les détaillons dans notre article dédié :{' '}
                <a href="/blog/autorisation-urbanisme-abri-carport-pergola-2026" className={lienInterne}>
                  quelle autorisation d&apos;urbanisme pour un abri, un carport ou une pergola
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/carport-bois-libourne.webp"
              w={1200}
              h={646}
              alt="Carport bois vu depuis le portail d'entrée, allée en gravier et recul de manœuvre, à Saint-Denis-de-Pile en Gironde"
              caption="Vue depuis le portail : c'est le recul entre l'entrée et l'abri qui décide si l'on rentre d'un seul coup de volant. Matérialisez l'emprise avec quatre piquets et garez-vous dedans une semaine avant de figer l'implantation."
            />

            {/* 7. Pente, évacuation, débord */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Pente, évacuation des eaux et débord de toit : les cotes qui protègent vraiment la voiture
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                On peut avoir les bonnes cotes au sol et mouiller quand même sa voiture. Trois dimensions de toiture
                déterminent la protection réelle, et elles se décident en même temps que les autres.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">Le débord de toit</strong> d&apos;abord. Sous nos pluies
                girondines, souvent portées par le vent d&apos;ouest, une couverture qui s&apos;arrête au nu du poteau
                laisse la pluie battre sur les portières et sur celui qui descend. Sur nos chantiers, nous prévoyons de
                l&apos;ordre de 20 à 40 cm de débord, davantage du côté exposé au vent dominant, ordre de grandeur, à
                ajuster selon l&apos;implantation et la hauteur de l&apos;abri.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">La pente et le point bas</strong> ensuite. Toute
                couverture doit évacuer franchement l&apos;eau, sans stagnation. Sur un carport monopente, cela a une
                conséquence directe et trop souvent oubliée :{' '}
                <strong className="text-primary font-semibold">
                  la hauteur libre utile se mesure au point bas
                </strong>,
                pas au point haut ni à la moyenne. Un abri annoncé « 2,50 m » peut n&apos;offrir que 2,10 m sous la
                gouttière basse, c&apos;est précisément là que passe le coffre de toit.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">L&apos;évacuation</strong> enfin, qui ne se traite pas de
                la même façon selon la matière. En aluminium, le chéneau est le plus souvent intégré au profilé
                périphérique et la descente d&apos;eau court dans un poteau : l&apos;encombrement est maîtrisé, mais
                l&apos;étanchéité des raccords et le point de rejet au sol se calent dès l&apos;étude. En bois, la
                gouttière est rapportée sous la rive : elle descend de quelques centimètres, qu&apos;il faut déduire de
                la hauteur libre annoncée. Dans les deux cas, on décide{' '}
                <em>où part l&apos;eau</em> avant de poser : vers un regard, une noue, un massif drainant, jamais au
                pied du poteau ni en travers de l&apos;allée, où elle gèlera en janvier.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ces arbitrages se voient mieux qu&apos;ils ne se racontent : nos{' '}
                <a href="/realisations" className={lienInterne}>
                  réalisations en Gironde
                </a>{' '}
                montrent comment débord, pente et évacuation se combinent selon les maisons et les terrains, et notre
                page{' '}
                <a href="/carports" className={lienInterne}>
                  carports sur mesure
                </a>{' '}
                détaille notre façon de travailler, du relevé sur place à la pose.
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
              Dimensions d&apos;un carport : vos questions
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
              Un carport dimensionné sur votre voiture, pas sur un catalogue
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Retenez l&apos;ordre des opérations : mesurez votre véhicule réel (rétroviseurs dépliés, hauteur
              accessoires montés), ajoutez le dégagement des portières, vérifiez la hauteur libre au point bas, puis
              seulement ensuite choisissez la trame et la matière. C&apos;est ce relevé que nous menons chez
              L&apos;Esprit Bois, mètre en main et client au volant, à Libourne et dans toute la Gironde, en bois comme
              en aluminium.
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
