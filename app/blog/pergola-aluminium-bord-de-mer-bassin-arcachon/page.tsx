import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

/* COVER : pergola bioclimatique aluminium, lames orientables vues de dessous
   (source-adefrance, 1200 x 800). Visuel d'ouvrage aluminium dont la commune
   n'est pas confirmée : jamais géolocalisé, ni ici ni dans l'alt. */
const COVER = '/images/source-adefrance/construction-pool-house-aluminium-libourne-3.webp';

export const metadata: Metadata = buildMetadata({
  title: "Aluminium et air salin : bien choisir au Bassin d'Arcachon",
  description:
    "Pergola aluminium en bord de mer au Bassin d'Arcachon : prétraitement, label Qualimarine, visserie inox et entretien, par un artisan de Libourne (Gironde).",
  keywords:
    "pergola aluminium bord de mer, aluminium air salin, embruns aluminium, thermolaquage Qualimarine, aluminium Bassin d'Arcachon, pergola littoral Gironde, corrosion galvanique visserie, visserie inox aluminium, pergola aluminium Bassin d'Arcachon, aluminium bord de mer Gironde, pergola aluminium Libourne",
  path: '/blog/pergola-aluminium-bord-de-mer-bassin-arcachon',
  ogImage: COVER,
  ogTitle: "Pergola aluminium en bord de mer : bien choisir au Bassin d'Arcachon",
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
        name: 'Aluminium en bord de mer',
        item: 'https://lesprit-bois.fr/blog/pergola-aluminium-bord-de-mer-bassin-arcachon',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "Pergola aluminium en bord de mer : bien choisir au Bassin d'Arcachon",
    description:
      "Ce qui protège une pergola en aluminium au bord du Bassin d'Arcachon n'est ni l'épaisseur du profilé ni la marque du fabricant, mais le prétraitement de surface appliqué avant le laquage et la visserie qui tient l'ouvrage. Corrosion filiforme, exposition réelle selon la commune, mentions à exiger au devis, couples de métaux, entretien littoral et tenue au vent : le guide d'un artisan de Libourne, en Gironde.",
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
    datePublished: '2026-09-04',
    dateModified: '2026-09-04',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/pergola-aluminium-bord-de-mer-bassin-arcachon',
    },
    about: [
      { '@type': 'Thing', name: 'pergola aluminium bord de mer' },
      { '@type': 'Thing', name: 'thermolaquage Qualimarine' },
      { '@type': 'Thing', name: "Bassin d'Arcachon" },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Une pergola en aluminium rouille-t-elle en bord de mer ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non, l'aluminium ne rouille pas : il forme naturellement une couche d'oxyde qui le protège. Ce qui souffre en bord de mer, c'est l'interface entre le métal et sa laque. Partout où le film est blessé, rayure de pose, arête vive, perçage non repris, l'humidité chargée en sel s'infiltre dessous et l'attaque progresse latéralement sous la peinture. La vraie question n'est donc pas la matière, mais le prétraitement de surface appliqué avant le laquage et le soin apporté aux points singuliers.",
        },
      },
      {
        '@type': 'Question',
        name: "Qu'est-ce que le label Qualimarine, et faut-il l'exiger au Bassin d'Arcachon ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Qualimarine est un label français délivré par l'ADAL, organisme accrédité COFRAC selon la norme ISO/CEI 17065, là où Qualicoat est international. Il vise les menuiseries en aluminium thermolaqué exposées à des atmosphères sévères, bord de mer et zones industrielles polluées, et repose sur un prétraitement chimique renforcé avant laquage, qui élimine la couche superficielle du profilé. Il est né à la suite des sinistres constatés en zone littorale à partir de 1996. C'est un label du laqueur, pas une certification du poseur : nous commandons des profilés laqués sous ce label et nous vous transmettons la référence.",
        },
      },
      {
        '@type': 'Question',
        name: "À quelle distance de l'eau faut-il prévoir un laquage renforcé ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Il n'existe pas de rayon fiable, et nous nous méfions des distances toutes faites qui circulent sur le sujet : ce qui compte est l'exposition réelle. Un terrain de première ligne, ouvert au vent d'ouest, reçoit des embruns qu'une maison située à la même distance mais abritée par une pinède ne verra jamais. Trois indices se lisent sur place : l'orientation par rapport au vent dominant, la présence d'un écran (dune, pinède, rangée de maisons) et l'état des ouvrages métalliques du voisinage.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quelle visserie pour une pergola aluminium en bord de mer ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "De l'inox, y compris pour les fixations qu'on ne voit pas. Associer un profilé aluminium et de l'acier zingué en présence d'eau salée revient à créer une pile : le zingage disparaît, l'acier rouille, et le profilé se couvre de coulures brunes qui partent de chaque tête de vis. Nous posons en inox courant à l'intérieur des terres et nous passons à la qualité destinée aux ambiances marines dès que l'ouvrage reçoit des embruns. C'est une règle de pose que nous appliquons, pas une exigence normative que nous vous citerions.",
        },
      },
      {
        '@type': 'Question',
        name: 'À quelle fréquence nettoyer une pergola aluminium au bord du Bassin ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Plus près de l'eau, plus souvent, sans calendrier universel. Le bon repère est observable : dès qu'un dépôt blanchâtre revient sur les profilés ou les vitrages entre deux pluies, on rince à l'eau claire. Le sel se dissout dans l'eau, c'est donc le rinçage qui compte davantage que le savon, et il faut atteindre les endroits que la pluie ne lave jamais, sous-face des lames, gorges de drainage, rails de store et feuillures basses.",
        },
      },
      {
        '@type': 'Question',
        name: "Posez-vous des pergolas en aluminium au Bassin d'Arcachon ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, le Bassin fait partie de notre zone d'intervention depuis Libourne. Nous préférons être clairs sur un point : nos chantiers livrés à ce jour se situent à Libourne, dans le Libournais et en Gironde intérieure. Ce que nous décrivons ici n'est donc pas un retour d'expérience littoral, ce sont les exigences que nous portons au devis et notre manière de poser, transposées à une implantation en bord d'eau.",
        },
      },
    ],
  },
];

const expositions = [
  [
    'Front de bassin, sans écran (Arès, Andernos)',
    'embruns portés directement par le vent d’ouest, dépôt salin visible sur les vitrages entre deux pluies',
    'prétraitement renforcé, laqueur sous label, visserie inox marine, reprise de toute blessure de laque',
  ],
  [
    'Deuxième ou troisième rang, derrière une pinède',
    'dépôt plus lent, concentré sur les faces au vent et sur les sous-faces que la pluie ne lave pas',
    'même exigence de laquage, entretien un cran plus léger',
  ],
  [
    'Fond du Bassin (Le Teich et alentours)',
    'peu d’embruns projetés, mais une atmosphère humide et salée en permanence',
    'prétraitement renforcé, vigilance sur les points où l’eau stagne puis s’évapore',
  ],
  [
    'Arrière-pays (La Teste hors front d’eau)',
    'exposition proche de celle du reste de la Gironde',
    'laquage sous label, visserie inox, entretien courant',
  ],
];

const faq = [
  {
    q: 'Une pergola en aluminium rouille-t-elle en bord de mer ?',
    r: (
      <>
        Non, l&apos;aluminium ne rouille pas : il forme naturellement une couche d&apos;oxyde qui le protège. Ce qui
        souffre en bord de mer, c&apos;est l&apos;interface entre le métal et sa laque. Partout où le film est blessé,
        rayure de pose, arête vive, perçage non repris, l&apos;humidité chargée en sel s&apos;infiltre dessous et
        l&apos;attaque progresse latéralement sous la peinture. La vraie question n&apos;est donc pas la matière, mais le
        prétraitement de surface appliqué avant le laquage et le soin apporté aux points singuliers.
      </>
    ),
  },
  {
    q: "Qu'est-ce que le label Qualimarine, et faut-il l'exiger au Bassin d'Arcachon ?",
    r: (
      <>
        Qualimarine est un label français délivré par l&apos;ADAL, organisme accrédité COFRAC selon la norme ISO/CEI
        17065, là où Qualicoat est international. Il vise les menuiseries en aluminium thermolaqué exposées à des
        atmosphères sévères, bord de mer et zones industrielles polluées, et repose sur un prétraitement chimique
        renforcé avant laquage, qui élimine la couche superficielle du profilé. Il est né à la suite des sinistres
        constatés en zone littorale à partir de 1996. C&apos;est un label du laqueur, pas une certification du poseur :
        nous commandons des profilés laqués sous ce label et nous vous transmettons la référence.
      </>
    ),
  },
  {
    q: "À quelle distance de l'eau faut-il prévoir un laquage renforcé ?",
    r: (
      <>
        Il n&apos;existe pas de rayon fiable, et nous nous méfions des distances toutes faites qui circulent sur le
        sujet : ce qui compte est l&apos;exposition réelle. Un terrain de première ligne, ouvert au vent d&apos;ouest,
        reçoit des embruns qu&apos;une maison située à la même distance mais abritée par une pinède ne verra jamais.
        Trois indices se lisent sur place : l&apos;orientation par rapport au vent dominant, la présence d&apos;un écran
        (dune, pinède, rangée de maisons) et l&apos;état des ouvrages métalliques du voisinage.
      </>
    ),
  },
  {
    q: 'Quelle visserie pour une pergola aluminium en bord de mer ?',
    r: (
      <>
        De l&apos;inox, y compris pour les fixations qu&apos;on ne voit pas. Associer un profilé aluminium et de
        l&apos;acier zingué en présence d&apos;eau salée revient à créer une pile : le zingage disparaît, l&apos;acier
        rouille, et le profilé se couvre de coulures brunes qui partent de chaque tête de vis. Nous posons en inox
        courant à l&apos;intérieur des terres et nous passons à la qualité destinée aux ambiances marines dès que
        l&apos;ouvrage reçoit des embruns. C&apos;est une règle de pose que nous appliquons, pas une exigence normative
        que nous vous citerions.
      </>
    ),
  },
  {
    q: 'À quelle fréquence nettoyer une pergola aluminium au bord du Bassin ?',
    r: (
      <>
        Plus près de l&apos;eau, plus souvent, sans calendrier universel. Le bon repère est observable : dès qu&apos;un
        dépôt blanchâtre revient sur les profilés ou les vitrages entre deux pluies, on rince à l&apos;eau claire. Le sel
        se dissout dans l&apos;eau, c&apos;est donc le rinçage qui compte davantage que le savon, et il faut atteindre
        les endroits que la pluie ne lave jamais, sous-face des lames, gorges de drainage, rails de store et feuillures
        basses.
      </>
    ),
  },
  {
    q: "Posez-vous des pergolas en aluminium au Bassin d'Arcachon ?",
    r: (
      <>
        Oui, le Bassin fait partie de notre zone d&apos;intervention depuis Libourne. Nous préférons être clairs sur un
        point : nos chantiers livrés à ce jour se situent à Libourne, dans le Libournais et en Gironde intérieure. Ce que
        nous décrivons ici n&apos;est donc pas un retour d&apos;expérience littoral, ce sont les exigences que nous
        portons au devis et notre manière de poser, transposées à une implantation en bord d&apos;eau.
      </>
    ),
  },
];

export default function ArticlePergolaAluminiumBordDeMerPage() {
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
              alt="Pergola bioclimatique en aluminium thermolaqué, lames orientables et structure anthracite ouvertes sur le ciel"
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
              <span className="text-secondary-fixed">Aluminium en bord de mer</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Aluminium
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Aluminium en bord de mer : bien choisir sa pergola au Bassin d&apos;Arcachon
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
              <span>4 septembre 2026</span>
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
                En bord de Bassin, ce qui décide de la tenue d&apos;une pergola en aluminium n&apos;est ni la marque du
                fabricant ni la teinte choisie : c&apos;est le prétraitement de surface appliqué avant le laquage, et la
                visserie qui tient l&apos;ouvrage. Faites écrire au devis des profilés laqués sous label Qualimarine, une
                visserie entièrement inox, et prévoyez un rinçage à l&apos;eau claire plus fréquent qu&apos;à
                l&apos;intérieur des terres.
              </strong>{' '}
              L&apos;aluminium reste le bon matériau au littoral, et de loin : il ne rouille pas, il ne travaille pas
              avec l&apos;humidité, il encaisse le vent. Mais l&apos;air salin ne pardonne aucune approximation sur la
              préparation du métal ni sur les points de contact entre matériaux. Voici ce que nous vérifions, ce que nous
              exigeons de nos fournisseurs, et ce qui change vraiment entre Arès, Le Teich et l&apos;arrière-pays.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1, ce que le sel fait au profilé */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce que l&apos;air salin fait réellement à un profilé thermolaqué
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Commençons par lever le malentendu le plus répandu :{' '}
                <strong className="text-primary font-semibold">l&apos;aluminium ne rouille pas.</strong> Au contact de
                l&apos;air, il se couvre spontanément d&apos;une fine couche d&apos;oxyde qui fait barrière et qui se
                reforme d&apos;elle-même si on la raye. C&apos;est exactement l&apos;inverse de l&apos;acier, dont la
                rouille est poreuse et propage l&apos;attaque vers le cœur du métal. Un profilé nu laissé en bord de mer
                se ternit, il ne se désagrège pas.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le point faible n&apos;est donc pas le métal, c&apos;est{' '}
                <strong className="text-primary font-semibold">l&apos;interface entre le métal et sa laque.</strong> Le
                thermolaquage est une poudre projetée sur un profilé préparé, puis cuite au four : sa tenue dépend
                entièrement de la qualité de cette préparation. Le sel, lui, est un excellent conducteur. Dissous dans
                l&apos;humidité de l&apos;air, il transforme la moindre goutte en électrolyte, c&apos;est-à-dire en
                milieu où une réaction électrochimique peut s&apos;entretenir.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le scénario que nous voyons se dérouler est toujours le même. Une blessure du film de laque (rayure de
                manutention, arête vive mal couverte, perçage réalisé sur chantier et laissé nu, bord de coupe) laisse
                l&apos;humidité salée atteindre l&apos;aluminium. L&apos;attaque ne s&apos;arrête pas au point
                d&apos;entrée : elle chemine{' '}
                <strong className="text-primary font-semibold">latéralement, sous la peinture</strong>, en filaments qui
                soulèvent progressivement le film. C&apos;est ce qu&apos;on appelle la corrosion filiforme, et elle est
                caractéristique des ambiances marines. Quand elle devient visible, le mal est fait depuis longtemps.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                À cela s&apos;ajoute un phénomène plus banal mais gênant à l&apos;œil : en atmosphère saline, la teinte
                s&apos;encrasse plus vite, surtout sur les faces que la pluie ne rince jamais. Retenez la hiérarchie :
                <strong className="text-primary font-semibold">
                  {' '}
                  la préparation de surface avant laquage, puis le traitement des points singuliers, puis seulement
                  l&apos;entretien.
                </strong>{' '}
                Un bon entretien ne rattrape pas un mauvais prétraitement.
              </p>
            </section>

            <Figure
              src="/images/realisations/terrasse-bois-pergola-aluminium-libourne-7.webp"
              w={825}
              h={1100}
              alt="Poteau et traverses en aluminium thermolaqué anthracite d'une pergola, finition laquée en gros plan, chantier en Gironde"
              caption="Le sel n'attaque pas le profilé de face : il cherche la moindre blessure du film de laque, sur une arête vive ou un perçage repris au montage."
            />

            {/* 2, exposition réelle */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                À quelle distance de l&apos;eau la question se pose-t-elle vraiment ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                On lit partout des rayons d&apos;agression saline exprimés en kilomètres. Nous ne les reprendrons pas :
                aucun de ceux qui circulent ne s&apos;appuie sur une source que nous puissions vérifier, et surtout ils
                décrivent mal la réalité du Bassin.{' '}
                <strong className="text-primary font-semibold">
                  Le Bassin d&apos;Arcachon n&apos;est pas une zone homogène
                </strong>{' '}
                : c&apos;est un plan d&apos;eau semi-fermé, bordé de rives très différentes les unes des autres, où deux
                terrains distants de trois cents mètres peuvent vivre dans deux climats de corrosion distincts.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ce qui compte n&apos;est pas la distance sur la carte, mais trois éléments qui se lisent sur place :
                l&apos;orientation du terrain par rapport au vent dominant d&apos;ouest, la présence ou non d&apos;un
                écran (cordon dunaire, pinède, rangée de maisons) et l&apos;état des ouvrages métalliques du voisinage.
                Ce dernier indice est le plus honnête de tous : des garde-corps piqués, des chromes ternis et des
                menuiseries qui blanchissent chez le voisin en disent plus long qu&apos;une carte d&apos;exposition.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Situation au Bassin</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Ce qui arrive au profilé</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Ce que nous exigeons au devis</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expositions.map((ligne, i) => (
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
                Une précision de méthode, parce qu&apos;elle nous paraît due :{' '}
                <strong className="text-primary font-semibold">
                  nous n&apos;avons pas encore de chantier livré au Bassin d&apos;Arcachon.
                </strong>{' '}
                Nos réalisations se situent à Libourne, dans le Libournais et en Gironde intérieure. Ce que vous lisez
                ici n&apos;est donc pas un retour d&apos;expérience littoral déguisé : ce sont les exigences que nous
                portons au devis auprès de nos fournisseurs et notre manière de poser, transposées à une implantation en
                bord d&apos;eau. Nous préférons le dire plutôt que d&apos;inventer une référence de front de bassin.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Notre zone d&apos;intervention couvre bien le secteur : nous détaillons nos prestations sur la page{' '}
                <a href="/pergola-bassin-arcachon" className={lienInterne}>
                  pergola au Bassin d&apos;Arcachon
                </a>{' '}
                et l&apos;ensemble de notre offre sur{' '}
                <a href="/bassin-arcachon" className={lienInterne}>
                  notre page dédiée au Bassin
                </a>
                . Le déplacement d&apos;étude depuis Libourne se fait sur rendez-vous, et c&apos;est précisément lors de
                cette visite que l&apos;exposition réelle se juge.
              </p>
            </section>

            <Figure
              src="/images/pergola-terrasse-bois-libourne-2.webp"
              w={900}
              h={1200}
              alt="Pergola aluminium adossée, implantée sur une terrasse ouverte sur le jardin, sans écran au vent, en Gironde"
              caption="Ce chantier girondin est posé à découvert : c'est exactement la configuration qui, en bord d'eau, décide de l'exposition davantage que la distance au rivage."
            />

            {/* 3, exigences au devis */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qu&apos;il faut exiger au devis : laquage, prétraitement, label du laqueur
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La plupart des devis de pergola en aluminium se contentent de deux mots :{' '}
                <em>thermolaqué RAL 7016</em>. C&apos;est une information de teinte, pas une information de tenue. En
                bord de mer, trois lignes supplémentaires méritent d&apos;être écrites noir sur blanc :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['La nature du profilé', 'aluminium extrudé, gamme et fournisseur nommés. Une pergola de menuiserie et une structure d’assemblage bricolée ne vivent pas la même vie au sel.'],
                  ['Le prétraitement de surface', 'la ligne qui manque presque toujours. Ce n’est pas la teinte qui protège, c’est ce qui a été fait au métal avant de la cuire dessus.'],
                  ['Le nom du laqueur et son label', 'un laqueur sérieux travaille sous référentiel et l’assume. Demandez la référence, elle existe.'],
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
                Deux labels encadrent le thermolaquage de l&apos;aluminium.{' '}
                <strong className="text-primary font-semibold">Qualicoat</strong> est international et couvre le laquage
                courant.{' '}
                <a href="https://www.qualimarine.fr/" className={lienInterne} target="_blank" rel="noopener noreferrer">
                  <strong className="text-primary font-semibold">Qualimarine</strong>
                </a>{' '}
                est un label français, délivré par{' '}
                <a
                  href="https://www.adal-aluminium.fr/thermolaquage-qualimarine/"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  l&apos;ADAL
                </a>
                , organisme accrédité COFRAC selon la norme ISO/CEI 17065. Il vise spécifiquement les menuiseries
                exposées aux{' '}
                <strong className="text-primary font-semibold">atmosphères sévères</strong>, bord de mer et zones
                industrielles polluées, et il repose sur un{' '}
                <strong className="text-primary font-semibold">prétraitement chimique renforcé</strong> qui élimine la
                couche superficielle du profilé avant laquage. Son existence même raconte une histoire utile : il est né
                à la suite de la vague de sinistres constatés en zone littorale à partir de 1996, quand des menuiseries
                laquées sans préparation adaptée ont commencé à cloquer en front de mer.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un point de vocabulaire sur lequel nous sommes intransigeants :{' '}
                <strong className="text-primary font-semibold">
                  Qualicoat et Qualimarine sont des labels du laqueur, pas des certifications du poseur.
                </strong>{' '}
                Nous ne sommes pas laqueurs, et nous n&apos;écrirons jamais que nous sommes certifiés Qualimarine. Ce que
                nous faisons, c&apos;est commander des profilés laqués sous ce label pour les projets exposés, et vous
                transmettre la référence du laqueur. Si un concurrent vous annonce sa propre certification Qualimarine
                sur son papier à en-tête, demandez-lui simplement qui laque ses profilés.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Vous remarquerez que nous ne vous donnons aucune épaisseur de laque à réclamer, en microns ou autrement :
                c&apos;est le référentiel du laqueur qui la fixe et qui la contrôle, pas nous, et les valeurs qui
                circulent sur les blogs commerciaux ne s&apos;appuient sur rien de vérifiable. Pour le choix de la teinte
                elle-même, du comportement d&apos;un RAL sombre au rendu des finitions sablées, notre guide sur{' '}
                <a href="/blog/choisir-teinte-ral-aluminium" className={lienInterne}>
                  le choix de la teinte RAL en aluminium
                </a>{' '}
                détaille les deux labels et le nuancier bien plus complètement que cet article, qui traite
                l&apos;implantation littorale.
              </p>
            </section>

            <Figure
              src="/images/realisations/pergola-aluminium-toit-polycarbonate-libourne-6.webp"
              w={825}
              h={1100}
              alt="Chevrons et bandeau en aluminium thermolaqué teinte RAL anthracite vus de dessous, pergola posée en Gironde"
              caption="La teinte est une information de rendu ; le prétraitement appliqué au profilé avant la cuisson de la poudre est l'information de tenue."
            />

            {/* 4, visserie et couples de métaux */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le détail qui décide : visserie et couples de métaux
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Voici le passage que nous aimerions voir dans tous les devis de bord de mer, et qui n&apos;y figure
                presque jamais.{' '}
                <strong className="text-primary font-semibold">
                  Une structure irréprochable peut se salir définitivement à cause d&apos;une vis.
                </strong>{' '}
                Le mécanisme est simple : mettre en contact deux métaux différents en présence d&apos;un électrolyte,
                ici de l&apos;eau chargée en sel, revient à fabriquer une pile. Un courant s&apos;établit, et le métal le
                moins noble se sacrifie.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le couple à éviter absolument est{' '}
                <strong className="text-primary font-semibold">aluminium et acier zingué</strong>. Le zingage part en
                premier, l&apos;acier mis à nu rouille, et le profilé se couvre de coulures brunes qui partent de chaque
                tête de vis. Sur une teinte claire, c&apos;est irrattrapable : la coulure a le temps de s&apos;ancrer
                dans la laque avant qu&apos;on la remarque. En bord de Bassin, ce phénomène ne met pas dix ans à
                apparaître.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Nos règles de pose sur un ouvrage exposé aux embruns, telles que nous les appliquons :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['De l’inox partout', 'y compris sur les fixations qu’on ne voit pas : pattes et équerres, boulonnerie des potelets, tiges d’ancrage dans la dalle, fixations de gouttière. Ce sont celles qu’on oublie qui trahissent en premier.'],
                  ['La bonne qualité d’inox', 'l’inox n’est pas un bloc. Les vis courantes de type A2 conviennent à nos chantiers de l’intérieur des terres ; nous passons en A4, destiné aux ambiances marines, dès que l’ouvrage reçoit des embruns. C’est une règle de pose maison, pas une norme que nous vous citerions.'],
                  ['Séparer quand le contact est inévitable', 'quand deux métaux doivent se toucher, on interpose ce qu’il faut, rondelle ou platine isolante, plutôt que de laisser la pile se former.'],
                  ['Aucune limaille sur un profilé', 'pas de reprise de perçage à la disqueuse au-dessus d’un profilé laqué, et nettoyage systématique des copeaux d’acier en fin de journée : ces poussières rouillent sur place et tachent la laque à demeure.'],
                  ['Reprise de toutes les blessures', 'chaque perçage réalisé sur chantier et chaque rayure de manutention se traite avant de quitter le chantier. En ambiance saline, une rayure n’est plus un défaut d’aspect, c’est une porte d’entrée.'],
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
                La même logique vaut pour un{' '}
                <a href="/carports" className={lienInterne}>
                  carport en aluminium
                </a>{' '}
                : la structure est plus haute, plus ventée, et ses ancrages travaillent davantage. Un devis qui reste
                muet sur la nature de la visserie est un devis incomplet, quelle que soit la beauté du reste.
              </p>
            </section>

            <Figure
              src="/images/realisations/pergola-aluminium-terrasse-bois-libourne-1.webp"
              w={1600}
              h={900}
              alt="Poteaux d'une pergola en aluminium posés sur une terrasse, fixation de la poutre en façade, chantier de Saint-Pey-de-Castets en Gironde"
              caption="Les points de fixation, en pied de poteau comme en façade, sont ceux qu'on ne revoit plus une fois la pose terminée : c'est là que l'inox se justifie."
            />

            {/* 5, entretien littoral */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                L&apos;entretien littoral, et en quoi il diffère de notre routine d&apos;automne
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le geste courant ne change pas, et nous l&apos;avons déjà détaillé dans notre{' '}
                <a href="/blog/entretien-aluminium-pergola-veranda-revision-automne" className={lienInterne}>
                  guide de la révision d&apos;automne d&apos;une pergola ou d&apos;une véranda en aluminium
                </a>{' '}
                : eau tiède savonneuse, éponge non abrasive, jamais de décapage ni de haute pression sur les joints.
                Inutile de le refaire ici. Ce qui change au littoral, ce sont quatre choses.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['La fréquence', 'plus près de l’eau, plus souvent. Nous ne vous donnerons pas un nombre de nettoyages par an, personne ne peut le fixer sans connaître votre exposition. Le repère utile est observable : dès qu’un dépôt blanchâtre revient sur les profilés ou les vitrages entre deux pluies, il est temps de rincer, et systématiquement après un coup de vent d’ouest.'],
                  ['La nature du geste', 'au bord du Bassin, c’est le rinçage à l’eau claire qui compte, davantage que le savon. Le sel se dissout dans l’eau : l’essentiel est de l’emporter, pas de le frotter.'],
                  ['Les points de rétention', 'le sel s’accumule là où la pluie ne va jamais. Sous-face des lames et des traverses, gorges de drainage des poteaux, chéneaux et descentes intégrées, rails et coulisses de store zip, feuillures basses des ouvrants, jonction entre platine et dalle où l’eau s’évapore en concentrant le sel. Ce sont ces endroits qu’il faut atteindre, pas les grandes faces visibles.'],
                  ['Les blessures de laque', 'à l’intérieur des terres, une rayure attend le prochain passage. En bord de mer, elle se traite tout de suite : c’est par là que la corrosion filiforme démarre.'],
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
                Un mot sur la motorisation, qui inquiète souvent au littoral : le coffret électrique, les presse-étoupes
                et les passages de câbles se vérifient à l&apos;œil, de l&apos;extérieur, et ne s&apos;ouvrent pas
                soi-même. Sur une pergola bioclimatique, ce sont les articulations et les axes de lames qui méritent le
                rinçage, pas le moteur.
              </p>
            </section>

            <Figure
              src="/images/realisations/pergola-aluminium-store-zip-libourne-2.webp"
              w={1100}
              h={825}
              alt="Sous-face des traverses d'une pergola en aluminium et coulisse de store zip, zones de rétention à rincer, Gironde"
              caption="La coulisse du store et la sous-face des traverses ne reçoivent jamais la pluie : ce sont ces zones-là qu'un rinçage doit atteindre, et d'autant plus près de l'eau."
            />

            {/* 6, vent et exposition */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Vent et exposition : ce que le Bassin ajoute au sel
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Se concentrer sur la corrosion ferait oublier l&apos;essentiel :{' '}
                <strong className="text-primary font-semibold">
                  le Bassin n&apos;ajoute pas seulement du sel, il ajoute du vent
                </strong>
                , et c&apos;est d&apos;ailleurs le vent qui porte les embruns loin dans les terres. Sur une pergola,
                cela se traduit très concrètement au moment de la conception.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                D&apos;abord sur la structure : portée libre entre poteaux, section des profilés, nombre d&apos;appuis et
                surtout qualité de l&apos;ancrage au support. Une pergola en aluminium est légère, ce qui est un atout
                pour la pose et un point de vigilance face au soulèvement. Ensuite sur les fermetures : un store zip, une
                paroi vitrée coulissante ou des lames en position fermée transforment l&apos;ouvrage en voile. Chaque
                fabricant définit le comportement au vent de sa gamme, et sur une implantation exposée, le capteur de
                vent qui remet automatiquement les lames en sécurité et remonte le store n&apos;est pas un gadget de
                catalogue : c&apos;est ce qui évite d&apos;abîmer la toile un jour où personne n&apos;est à la maison.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Deuxième effet, moins évoqué : en secteur dunaire, le vent transporte du sable, et le sable est abrasif.
                Il use la laque là où la pluie ne rince pas, et il s&apos;accumule dans les mêmes gorges que le sel.
                Troisième point, franchement réglementaire celui-là : les communes du littoral appliquent des règles
                d&apos;urbanisme souvent plus contraignantes qu&apos;ailleurs en Gironde, avec des prescriptions de
                teintes, d&apos;implantation et d&apos;aspect. Une pergola adossée relève selon les cas d&apos;une{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F17578"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  déclaration préalable de travaux
                </a>
                , et la teinte RAL que vous aviez en tête peut être refusée par le règlement local. Nous vérifions le
                PLU de la commune avant d&apos;engager quoi que ce soit, comme nous le faisons pour chaque projet depuis
                Libourne.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Vous verrez comment tout cela se traduit dans nos ouvrages posés en Gironde en parcourant{' '}
                <a href="/realisations" className={lienInterne}>
                  nos réalisations
                </a>
                , et la manière dont nous concevons chaque projet sur notre page{' '}
                <a href="/pergolas" className={lienInterne}>
                  pergolas bois et aluminium
                </a>
                . Nous vendons et posons les deux matières : si nous vous conseillons l&apos;aluminium en bord de Bassin,
                ce n&apos;est pas par préférence commerciale, c&apos;est parce que c&apos;est le bon choix pour cette
                exposition.
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
              Aluminium et air salin : vos questions
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
              Une pergola pensée pour son exposition
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              En bord de Bassin, la différence entre un ouvrage qui tient et un ouvrage qui se marque se joue avant la
              pose : préparation du métal, label du laqueur, visserie inox, traitement des points singuliers. Rien de
              tout cela ne se voit sur une photo de catalogue, et tout se lit sur un devis honnête. C&apos;est le travail
              que nous menons chez L&apos;Esprit Bois, entreprise qualifiée Qualibat, depuis Libourne, dans toute la
              Gironde et jusqu&apos;au Bassin d&apos;Arcachon, formalités d&apos;urbanisme comprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pergolas"
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
