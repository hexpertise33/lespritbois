import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/realisations/pergola-aluminium-toit-polycarbonate-libourne-4.webp';

export const metadata: Metadata = buildMetadata({
  title: "Devis pergola : comparer trois prix en Gironde | L'Esprit Bois",
  description:
    "Trois devis de pergola, trois prix : support, portée, motorisation, eaux pluviales. Ce qui explique vraiment l'écart, par un artisan à Libourne (Gironde).",
  keywords:
    "devis pergola, prix pergola bioclimatique, comparer devis pergola aluminium, pergola sur mesure Libourne, devis pergola Gironde, pergola aluminium prix, postes devis pergola, pergola bioclimatique Libourne",
  path: '/blog/comparer-devis-pergola-postes-prix',
  ogImage: COVER,
  ogTitle: "Trois devis de pergola, trois prix : les postes qui expliquent l'écart",
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
        name: 'Comparer trois devis de pergola',
        item: 'https://lesprit-bois.fr/blog/comparer-devis-pergola-postes-prix',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "Trois devis de pergola, trois prix : les postes qui expliquent vraiment l'écart",
    description:
      "Trois devis « pour la même pergola » vont couramment du simple au double, et l'écart vient presque toujours du périmètre, pas de la marge. Support et massifs, portée et sections de profilés, couverture et motorisation, évacuation des eaux, raccord à la maison, hors-devis : le guide de lecture d'un artisan à Libourne, en Gironde.",
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
    datePublished: '2026-08-25',
    dateModified: '2026-08-25',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/comparer-devis-pergola-postes-prix',
    },
    about: [
      { '@type': 'Thing', name: 'devis pergola' },
      { '@type': 'Thing', name: 'pergola bioclimatique aluminium' },
      { '@type': 'Thing', name: 'prix pergola' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Pourquoi trois devis de pergola affichent-ils des prix aussi différents ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Parce qu'ils ne couvrent pas le même périmètre. Un devis moins cher peut être parfaitement honnête : il chiffre la fourniture et la pose de la pergola, sans le support, sans l'évacuation des eaux, sans le raccord à la façade ni la remise en état des abords. Avant de comparer des totaux, il faut aligner les postes ligne à ligne et repérer les cases vides.",
        },
      },
      {
        '@type': 'Question',
        name: "Quel est le poste le plus souvent absent d'un devis de pergola ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le support : dalle, massifs de fondation, ou reprise d'appui sur une terrasse existante. C'est le poste qu'on ne voit pas une fois l'ouvrage monté, celui qui suppose un constat sur place, et c'est précisément celui qui décide de la tenue de la pergola dans le temps. Un devis qui n'en dit rien fait un pari sur le sol.",
        },
      },
      {
        '@type': 'Question',
        name: 'Un prix de pergola au mètre carré est-il fiable ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "C'est un signal commercial, pas un chiffrage. Le mètre carré ne dit rien du sol, de la portée libre entre poteaux, de la section des profilés, du niveau d'équipement ni du raccord à la maison, qui sont justement les postes qui font l'écart. Nous ne pratiquons pas le tarif au mètre carré affiché : nous relevons la terrasse et nous remettons un devis détaillé, poste par poste.",
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on poser une pergola bioclimatique sur une terrasse en bois existante ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Souvent oui, mais jamais sur les lames elles-mêmes. Le poteau doit descendre jusqu'à un appui capable de reprendre la charge : un plot, un massif créé sous la terrasse, ou une reprise locale de la structure. Cela suppose de déposer quelques lames, donc de prévoir la reprise et parfois le remplacement. C'est un poste à part entière du devis, et il ne se chiffre pas sans avoir regardé sous la terrasse.",
        },
      },
      {
        '@type': 'Question',
        name: 'La motorisation et les stores sont-ils compris dans un devis de pergola bioclimatique ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Cela dépend du devis, et c'est une source d'écart très fréquente. Motorisation des lames, télécommande ou pilotage domotique, capteur de pluie, éclairage intégré aux profilés, stores à zip latéraux : ces éléments sont parfois inclus, parfois listés en option. Deux devis peuvent décrire la même pergola et n'avoir pas le même nombre de moteurs.",
        },
      },
      {
        '@type': 'Question',
        name: 'Combien coûte une pergola bioclimatique en Gironde ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Nous ne publions pas de prix en euros pour une pergola, parce qu'un chiffre sorti du sol et du raccord à la maison n'a pas de sens. Ce que nous pouvons donner, ce sont des poids relatifs constatés sur nos chantiers en 2026 : quand tout le support est à créer, il pèse couramment entre 10 et 25 % du montant total, et les équipements motorisés peuvent ajouter l'équivalent d'un tiers du prix de la structure. Seul un relevé sur place à Libourne ou ailleurs en Gironde permet de chiffrer honnêtement.",
        },
      },
    ],
  },
];

const postes = [
  [
    'Le support',
    'Sondage du sol, décaissement, massifs ou dalle, reprise d’appui sur une terrasse existante, évacuation des déblais.',
    'Aucune ligne « terrassement », « massifs » ni « fondations » nulle part.',
  ],
  [
    'La structure',
    'Poteaux, traverses, platines et visserie, portée libre entre appuis, sections des profilés.',
    'Pas une seule dimension en millimètres dans tout le devis.',
  ],
  [
    'La couverture',
    'Lames orientables, claire-voie, panneaux : c’est le cœur du produit et le premier écart de gamme.',
    'Une ligne « toiture » sans préciser le type ni la commande des lames.',
  ],
  [
    'Motorisation et options',
    'Nombre de moteurs, télécommande ou domotique, capteurs, éclairage intégré, stores à zip.',
    'Tout renvoyé à « en option, sur demande », sans montant.',
  ],
  [
    'Les eaux pluviales',
    'Descentes intégrées aux poteaux, regard, drain, raccord au réseau existant.',
    'Le devis s’arrête au pied du poteau et ne dit pas où va l’eau.',
  ],
  [
    'Le raccord à la maison',
    'Profilé de fixation en façade, étanchéité du raccord, dépose ou recoupe de la gouttière existante.',
    'Rien sur la façade, alors que la pergola est adossée.',
  ],
  [
    'Finitions et abords',
    'Teinte RAL et thermolaquage, reprise du sol autour des poteaux, remise en état, nettoyage de chantier.',
    'Pas de ligne « remise en état » ni « évacuation des gravats ».',
  ],
];

const faq = [
  {
    q: 'Pourquoi trois devis de pergola affichent-ils des prix aussi différents ?',
    r: (
      <>
        Parce qu&apos;ils ne couvrent pas le même périmètre. Un devis moins cher peut être parfaitement honnête : il
        chiffre la fourniture et la pose de la pergola, sans le support, sans l&apos;évacuation des eaux, sans le raccord
        à la façade ni la remise en état des abords. Avant de comparer des totaux, il faut aligner les postes ligne à
        ligne et repérer les cases vides.
      </>
    ),
  },
  {
    q: "Quel est le poste le plus souvent absent d'un devis de pergola ?",
    r: (
      <>
        Le support : dalle, massifs de fondation, ou reprise d&apos;appui sur une terrasse existante. C&apos;est le poste
        qu&apos;on ne voit pas une fois l&apos;ouvrage monté, celui qui suppose un constat sur place, et c&apos;est
        précisément celui qui décide de la tenue de la pergola dans le temps. Un devis qui n&apos;en dit rien fait un
        pari sur le sol.
      </>
    ),
  },
  {
    q: 'Un prix de pergola au mètre carré est-il fiable ?',
    r: (
      <>
        C&apos;est un signal commercial, pas un chiffrage. Le mètre carré ne dit rien du sol, de la portée libre entre
        poteaux, de la section des profilés, du niveau d&apos;équipement ni du raccord à la maison, qui sont justement
        les postes qui font l&apos;écart. Nous ne pratiquons pas le tarif au mètre carré affiché : nous relevons la
        terrasse et nous remettons un devis détaillé, poste par poste.
      </>
    ),
  },
  {
    q: 'Peut-on poser une pergola bioclimatique sur une terrasse en bois existante ?',
    r: (
      <>
        Souvent oui, mais jamais sur les lames elles-mêmes. Le poteau doit descendre jusqu&apos;à un appui capable de
        reprendre la charge : un plot, un massif créé sous la terrasse, ou une reprise locale de la structure. Cela
        suppose de déposer quelques lames, donc de prévoir la reprise et parfois le remplacement. C&apos;est un poste à
        part entière du devis, et il ne se chiffre pas sans avoir regardé sous la terrasse.
      </>
    ),
  },
  {
    q: 'La motorisation et les stores sont-ils compris dans un devis de pergola bioclimatique ?',
    r: (
      <>
        Cela dépend du devis, et c&apos;est une source d&apos;écart très fréquente. Motorisation des lames, télécommande
        ou pilotage domotique, capteur de pluie, éclairage intégré aux profilés, stores à zip latéraux : ces éléments
        sont parfois inclus, parfois listés en option. Deux devis peuvent décrire la même pergola et n&apos;avoir pas le
        même nombre de moteurs.
      </>
    ),
  },
  {
    q: 'Combien coûte une pergola bioclimatique en Gironde ?',
    r: (
      <>
        Nous ne publions pas de prix en euros pour une pergola, parce qu&apos;un chiffre sorti du sol et du raccord à la
        maison n&apos;a pas de sens. Ce que nous pouvons donner, ce sont des poids relatifs constatés sur nos chantiers
        en 2026 : quand tout le support est à créer, il pèse couramment entre 10 et 25 % du montant total, et les
        équipements motorisés peuvent ajouter l&apos;équivalent d&apos;un tiers du prix de la structure. Seul un relevé
        sur place à Libourne ou ailleurs en Gironde permet de chiffrer honnêtement.
      </>
    ),
  },
];

export default function ArticleComparerDevisPergolaPage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="blog" />
      <main id="contenu">
        {/* Hero */}
        <header className="relative pt-40 pb-24 md:pt-48 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="825"
              height="1100"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Pergola aluminium anthracite adossée à une maison, couverture translucide au-dessus d'une terrasse bois, chantier en Gironde"
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
              <span className="text-secondary-fixed">Comparer trois devis de pergola</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Devis pergola
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Trois devis de pergola, trois prix : les postes qui expliquent vraiment l&apos;écart
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
              <span>25 août 2026</span>
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
                Quand trois devis « pour la même pergola » vont du simple au double, l&apos;écart ne vient presque jamais
                de la marge du poseur : il vient de ce que chacun a mis, ou n&apos;a pas mis, dans le prix. Le poste le
                plus souvent absent est le support (dalle, massifs, fixation sur une terrasse existante), et c&apos;est
                justement celui qui décide de la tenue de l&apos;ouvrage dans le temps.
              </strong>{' '}
              Autrement dit : le devis le moins cher n&apos;est pas forcément le moins sérieux, il couvre simplement
              moins. Tant qu&apos;on compare des totaux, on ne compare rien. Voici, poste par poste, ce que nous
              regardons quand un client nous pose trois devis de pergola sur la table, chez lui, à Libourne ou ailleurs
              en Gironde.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Deux devis ne comparent pas la même chose */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Pourquoi deux devis « pour la même pergola » ne comparent pas la même chose
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                « Pergola bioclimatique aluminium, 4 × 3 m, adossée, lames orientables, RAL 7016 » : cette ligne décrit
                à peine un quart de l&apos;ouvrage. Elle ne dit rien du sol sur lequel les poteaux vont reposer, rien de
                la distance qu&apos;ils doivent franchir sans appui, rien de ce que devient l&apos;eau une fois les lames
                fermées, rien de la façon dont la structure vient se marier à la façade. Or c&apos;est là, et pas dans le
                catalogue, que se logent les milliers d&apos;euros d&apos;écart.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Nous voyons régulièrement arriver trois documents très différents dans leur forme : un devis
                d&apos;une seule ligne « fourniture et pose », un devis de cinq lignes, et un devis de douze lignes.
                Le premier n&apos;est pas malhonnête pour autant.{' '}
                <strong className="text-primary font-semibold">
                  Il chiffre ce qu&apos;il vend, une pergola livrée et montée, et laisse au client tout ce qui va
                  autour.
                </strong>{' '}
                Le problème n&apos;est pas le prix, c&apos;est que le client croit avoir trois propositions comparables
                alors qu&apos;il en a une, plus deux périmètres différents.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                La méthode que nous conseillons est simple et elle ne demande qu&apos;une feuille : recopiez les trois
                devis en colonnes, une ligne par poste, et laissez les cases vides quand un poste n&apos;apparaît nulle
                part. Le tableau ci-dessous liste les sept postes à faire figurer, et le signe qui trahit leur absence.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Poste</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Ce qu&apos;il recouvre</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Le signe qu&apos;il manque</th>
                    </tr>
                  </thead>
                  <tbody>
                    {postes.map((ligne, i) => (
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
                C&apos;est aussi la raison pour laquelle, sur notre page{' '}
                <a href="/pergolas" className={lienInterne}>
                  pergolas sur mesure
                </a>,
                nous écrivons noir sur blanc :{' '}
                <em>
                  nous ne pratiquons pas le tarif au mètre carré affiché, nous relevons votre terrasse et nous vous
                  remettons un devis détaillé, poste par poste.
                </em>{' '}
                Un prix au mètre carré est un argument de mise en relation, pas un chiffrage : il ne peut pas intégrer ce
                qu&apos;il n&apos;a pas vu.
              </p>
            </section>

            {/* 2. Le support */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le support : dalle, massifs, fixation sur une terrasse existante, le poste le plus souvent absent
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une pergola bioclimatique n&apos;est pas un parasol. Lames fermées, elle se comporte comme une toiture :
                elle reçoit l&apos;eau, elle prend le vent, et tout cela redescend dans les poteaux, puis dans le sol.
                D&apos;où une règle que nous ne négocions pas :{' '}
                <strong className="text-primary font-semibold">
                  on ne pose pas une pergola sur ce qui traîne par terre, on la pose sur un appui vérifié.
                </strong>
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Trois situations reviennent sans arrêt sur nos chantiers, et chacune se chiffre différemment :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Une dalle béton existante', 'le cas le plus simple en apparence, le plus trompeur en réalité : personne ne connaît son épaisseur ni son ferraillage sans un sondage. Une dalle de terrasse coulée pour supporter des pieds de chaise n’est pas une dalle de fondation.'],
                  ['Des massifs à créer', 'décaissement au droit de chaque poteau, coffrage, coulage, temps de séchage avant montage, et évacuation des déblais. C’est le cas de loin le plus fréquent quand la pergola arrive sur du gravier, de la pelouse ou une terrasse récente sur remblai.'],
                  ['Une terrasse en bois déjà posée', 'le poteau ne se pose jamais sur une lame. Il faut déposer localement, descendre chercher un appui (plot, massif créé sous la terrasse, reprise de structure) puis refermer proprement, parfois avec des lames neuves qui ne seront pas de la même teinte.'],
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
                Le troisième cas mérite qu&apos;on s&apos;y arrête, parce qu&apos;il est le plus mal chiffré des trois.
                Une terrasse bois repose sur une trame de plots et de lambourdes dimensionnée pour un usage de terrasse,
                pas pour reprendre les charges ponctuelles d&apos;une pergola : nous détaillons cette logique
                d&apos;appuis dans notre guide sur{' '}
                <a href="/blog/terrasse-bois-structure-plots-lambourdes" className={lienInterne}>
                  la structure d&apos;une terrasse en bois, plots et lambourdes
                </a>
                . Tant qu&apos;on n&apos;a pas soulevé deux lames pour regarder dessous, on ne chiffre pas : on devine.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ce que nous pouvons donner, ce n&apos;est pas un prix de marché (les fourchettes qui circulent viennent
                de comparateurs, pas de chantiers) mais un poids relatif{' '}
                <strong className="text-primary font-semibold">constaté sur nos propres chantiers en 2026</strong> :
                quand tout le support est à créer, il pèse couramment entre 10 et 25 % du montant total de
                l&apos;opération. Un devis qui affiche zéro sur cette ligne a déplacé ce coût, il ne l&apos;a pas
                supprimé.
              </p>
            </section>

            <Figure
              src="/images/realisations/terrasse-bois-pergola-aluminium-libourne-7.webp"
              w={825}
              h={1100}
              alt="Pied de poteau d'une pergola aluminium adossée descendant au droit d'une terrasse bois, chantier en Gironde"
              caption="Chantier de Saint-Pey-de-Castets : les lames ont été découpées au droit du poteau, et l'appui qui le reprend se trouve sous la terrasse, invisible une fois le platelage refermé. Sur le devis, il tient en une ligne."
            />

            {/* 3. La structure */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                La structure : portée, section des profilés, nombre de poteaux
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Deux pergolas peuvent afficher exactement les mêmes dimensions hors-tout et ne pas être le même ouvrage.
                Ce qui coûte, en aluminium, ce n&apos;est pas la surface couverte :{' '}
                <strong className="text-primary font-semibold">c&apos;est la distance franchie sans appui.</strong>{' '}
                Plus la portée libre augmente, plus les profilés doivent gagner en section et en épaisseur de paroi, ou
                alors on ajoute un poteau, et c&apos;est un autre projet.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est l&apos;arbitrage le plus concret d&apos;un devis de pergola, et le plus souvent invisible dans
                le document. Quatre poteaux au lieu de six, c&apos;est une terrasse dégagée, une table qui se place
                librement, une vue qui ne se coupe pas, et une structure plus lourde à financer. Six poteaux, c&apos;est
                moins cher, parfaitement tenable, mais il faut savoir qu&apos;on en aura deux au milieu du passage. Les
                deux réponses sont légitimes ; ce qui ne l&apos;est pas, c&apos;est de les comparer sans savoir laquelle
                on regarde.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Trois éléments à chercher dans le devis, et à réclamer s&apos;ils n&apos;y sont pas :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Le nombre de poteaux et leur implantation, idéalement sur un croquis coté : c’est la donnée qui change le plus l’usage réel de la terrasse.',
                  'Les sections des profilés en millimètres, poteaux et traverses. Deux profilés de même aspect n’ont pas la même épaisseur de paroi, et cela ne se voit sur aucune photo.',
                  'La nature des platines et de la visserie, ainsi que le mode de fixation retenu. C’est le détail qui vieillit bien ou mal, et il tient en une ligne.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                En contrepoint, le bois obéit à la même logique avec une lecture différente : la portée s&apos;y lit dans
                la section des poutres et l&apos;entraxe des chevrons, et une pergola bois franchit rarement les mêmes
                distances qu&apos;un profilé aluminium sans devenir massive. Nous vendons et posons les deux, donc nous
                n&apos;avons aucun intérêt à pousser l&apos;une ou l&apos;autre : le comparatif détaillé est dans notre
                article{' '}
                <a href="/blog/pergola-bois-ou-bioclimatique" className={lienInterne}>
                  pergola bois ou bioclimatique
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/pergola-terrasse-bois-libourne-1.webp"
              w={1200}
              h={900}
              alt="Structure d'une pergola aluminium vue en enfilade : poteaux alignés, poutre porteuse et portée libre au-dessus d'une terrasse bois, réalisation en Gironde"
              caption="Les poteaux sont alignés en rive de terrasse : un appui de plus allège la poutre porteuse, mais ajoute un pied à fonder et à contourner."
            />

            {/* 4. Couverture et motorisation */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                La couverture et la motorisation
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est le poste le plus visible, et paradoxalement celui où les devis se ressemblent le plus en
                surface. Une ligne « toiture à lames orientables » peut recouvrir des réalités très différentes : lames
                simple paroi ou à double peau, commande manuelle par manivelle ou motorisée, un moteur ou deux selon la
                largeur, télécommande seule ou pilotage intégré à la domotique de la maison, avec ou sans capteur de
                pluie.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                À côté de la couverture, les équipements font le reste de l&apos;écart, et ce sont eux qui basculent le
                plus souvent d&apos;un devis à l&apos;autre entre « inclus » et « en option » : stores à zip sur un ou
                plusieurs côtés, éclairage intégré aux profilés, claustras brise-vue, jonction avec un ouvrage voisin.{' '}
                <strong className="text-primary font-semibold">
                  Sur nos chantiers en 2026, l&apos;ensemble des équipements motorisés peut représenter
                  l&apos;équivalent d&apos;un tiers du prix de la structure seule.
                </strong>{' '}
                Un devis « sans option » et un devis « tout équipé » n&apos;ont donc aucune chance de tomber au même
                montant, même produit, même poseur.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Dernier point rarement lu : le thermolaquage. Une teinte RAL standard n&apos;a pas le même coût
                ni le même délai qu&apos;une teinte hors gamme, et une pergola bicolore, une teinte à
                l&apos;extérieur, une autre en sous-face, se commande différemment. Si l&apos;un des trois devis vous
                paraît anormalement bas et que la teinte n&apos;y figure pas, c&apos;est souvent qu&apos;elle est
                comptée en supplément.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Le fonctionnement des lames, leur orientation selon l&apos;exposition et ce que la motorisation change
                vraiment à l&apos;usage sont détaillés dans notre{' '}
                <a href="/blog/pergola-bioclimatique-aluminium-guide" className={lienInterne}>
                  guide de la pergola bioclimatique en aluminium
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/realisations/pergola-aluminium-store-zip-libourne-2.webp"
              w={1100}
              h={825}
              alt="Store screen à zip déroulé dans ses coulisses latérales sous une pergola aluminium, chantier en Gironde"
              caption="Un store à zip se compte côté par côté, jamais au forfait : c'est souvent cette ligne-là qui sépare deux devis présentés comme identiques."
            />

            {/* 5. Eaux pluviales et raccord */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                L&apos;évacuation des eaux et le raccord à la maison
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Lames fermées, une pergola bioclimatique de douze mètres carrés collecte l&apos;eau de douze mètres
                carrés de toiture. Cette eau descend dans les poteaux, par des descentes intégrées, et ressort en bas.{' '}
                <strong className="text-primary font-semibold">La vraie question du devis est : et ensuite ?</strong>{' '}
                Raccordement à un regard, création d&apos;un drain, caniveau, rejet en pied de poteau sur la terrasse,
                ce ne sont ni le même travail ni le même prix, et l&apos;un des trois est un problème différé.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le raccord à la façade est l&apos;autre zone où les devis divergent sans que cela se voie. Une pergola
                adossée se fixe par un profilé en façade, et ce point demande une étanchéité soignée : c&apos;est là que
                se jouent les infiltrations, pas au milieu de la toiture. Selon la maison, il faut composer avec un
                débord de toit, une gouttière existante à recouper ou à déposer, un mur en pierre, un enduit récent ou
                une isolation par l&apos;extérieur qu&apos;on ne perce pas à la légère.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Sur nos chantiers du Libournais et de l&apos;Entre-deux-Mers, ces trois façades se croisent dans la même
                semaine, et elles n&apos;appellent pas le même mode de fixation ni la même reprise. C&apos;est une des
                raisons pour lesquelles nous refusons de chiffrer une pergola adossée sans être passés voir le mur :{' '}
                <strong className="text-primary font-semibold">
                  le raccord ne se déduit d&apos;aucune photo et d&apos;aucun plan.
                </strong>
              </p>
            </section>

            <Figure
              src="/images/realisations/pergola-aluminium-toit-polycarbonate-libourne-6.webp"
              w={825}
              h={1100}
              alt="Raccord d'une pergola aluminium adossée sur la façade : profilé de tête fixé au mur et poutre de rive, chantier en Gironde"
              caption="À Saint-Pey-de-Castets, la couverture se raccorde au mur juste sous le débord de toit de la maison : c'est ce point de couture, et pas le milieu de la toiture, qui décide de l'étanchéité."
            />

            {/* 6. Hors devis */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qui est hors devis et qu&apos;on découvre après : électricité, démarches, reprise de terrasse
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un devis peut être complet sur son périmètre et laisser malgré tout des frais à votre charge. Ce
                n&apos;est pas un défaut en soi, encore faut-il le savoir avant de signer, et pas le jour de la
                livraison. Quatre sujets reviennent systématiquement.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['L’électricité', 'nous préparons et nous intégrons (attentes, cheminements dans les profilés, éclairage), mais le raccordement au tableau relève d’un électricien. Vérifiez dans chaque devis qui pose l’attente, qui fournit le point d’alimentation et qui raccorde.'],
                  ['Les démarches d’urbanisme', 'selon la commune et le projet, une formalité peut être nécessaire. Certaines entreprises la portent, d’autres la laissent au client : c’est une ligne à chercher explicitement, pas à supposer.'],
                  ['La reprise du sol et des abords', 'dalles à recouper autour des poteaux, lames de terrasse à remplacer, gravier à remettre, gravats à évacuer. Sur un chantier de rénovation, c’est rarement anecdotique.'],
                  ['L’accès au chantier', 'les profilés arrivent en grandes longueurs. Un jardin accessible par un portillon de 90 cm ou un dénivelé important allonge le temps de pose, et cela se chiffre, mieux vaut que ce soit avant qu’après.'],
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
                Sur le volet administratif, nous ne reprenons pas ici le détail des seuils et des formulaires : ils sont
                traités, commune par commune et cas par cas, dans notre guide{' '}
                <a href="/blog/autorisation-urbanisme-abri-carport-pergola-2026" className={lienInterne}>
                  autorisation d&apos;urbanisme pour un abri, un carport ou une pergola
                </a>
                . Retenez seulement, à l&apos;étape du devis, cette question : qui porte la démarche, et est-ce compris ?
              </p>
            </section>

            {/* 7. Six questions */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Les six questions à poser avant de signer
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Posez-les aux trois entreprises, dans les mêmes termes. Les réponses vous en apprendront souvent plus
                que les totaux, et elles vous permettront surtout de{' '}
                <strong className="text-primary font-semibold">remettre les trois devis sur le même périmètre</strong>{' '}
                avant de les comparer.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Sur quoi repose la pergola, et comment l’avez-vous vérifié ? Le support est-il chiffré, y compris le décaissement, le séchage et l’évacuation des déblais ?',
                  'Combien de poteaux, quelle portée libre entre appuis, et quelles sections de profilés en millimètres ?',
                  'Où va l’eau quand les lames sont fermées ? Le raccordement en pied de poteau est-il compris ?',
                  'Qu’est-ce qui est inclus et qu’est-ce qui est en option : motorisation, nombre de moteurs, capteur, éclairage, stores à zip, teinte RAL ?',
                  'Qui porte les démarches d’urbanisme, et qui raccorde l’électricité ?',
                  'Si le chantier révèle autre chose que prévu, comment se calcule l’avenant, et est-il validé avant exécution ?',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une entreprise qui répond précisément à ces six questions vous donne, de fait, un devis comparable. Une
                entreprise qui n&apos;a pas vu votre terrasse ne peut répondre ni à la première, ni à la troisième, ni à
                la cinquième, et c&apos;est une information en soi.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                De notre côté, la démarche est toujours la même : relevé sur place, croquis coté, puis{' '}
                <a href="/devis-pergola" className={lienInterne}>
                  devis de pergola détaillé poste par poste
                </a>
                . Vous pouvez voir à quoi ces arbitrages ressemblent une fois posés dans{' '}
                <a href="/realisations" className={lienInterne}>
                  nos réalisations en Gironde
                </a>,{' '}
               et si le projet penche finalement vers un abri de voiture, la même grille de lecture s&apos;applique
                à nos{' '}
                <a href="/carports" className={lienInterne}>
                  carports bois et aluminium
                </a>,
                support compris.
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
              Devis de pergola : vos questions
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
              Un devis qui se lit ligne à ligne
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Le devis le moins cher n&apos;est pas le mauvais devis : c&apos;est souvent celui qui couvre le moins. Une
              fois les trois documents remis sur le même périmètre (support, portée, couverture, eaux pluviales, raccord
              à la façade), l&apos;écart se réduit presque toujours, et le choix redevient un vrai choix. Chez
              L&apos;Esprit Bois, à Libourne et dans toute la Gironde, nous venons relever votre terrasse avant de
              chiffrer, et nous vous remettons un devis détaillé poste par poste, en bois comme en aluminium.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/devis-pergola"
                className="bg-secondary text-primary px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-secondary-fixed transition-all active:scale-95"
              >
                Demander mon devis détaillé
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
