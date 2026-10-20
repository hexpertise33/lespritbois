import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import DevisForm from '@/components/DevisForm';
import DevisStickyBar from '@/components/DevisStickyBar';
import DevisDesktopPopup from '@/components/DevisDesktopPopup';
import { CHANTIERS } from '@/lib/data/chantiers';
import { CONTACT, ENTREPRISE_ID, ENTREPRISE_REF, SITE } from '@/lib/data/navigation';

/** Page créée le 22/08/2026 sur les données Search Console.
 *
 *  « terrasse bois libourne » faisait 42 impressions et zéro clic, et le sujet
 *  n'avait pas de page : il était traité dans /amenagement-exterieur, parmi
 *  cinq autres prestations. C'est la requête la plus proche du cœur de métier
 *  qui n'avait pas sa page. */
const COVER = '/images/terrasse-bois-plots-gironde-1.webp';

/* Étiquettes d'attribution : sans elles, un lead de cette page arriverait
   indistinct de ceux de la landing publicitaire. */
const PROJET = 'Terrasse bois';
const PAGE_LABEL = '/terrasses-bois';

export const metadata: Metadata = buildMetadata({
  title: 'Terrasse en bois sur mesure à Libourne et en Gironde',
  description:
    "Terrasse bois sur plots ou sur vis, en pin traité, douglas ou ipé, plage de piscine : conception et pose par nos équipes à Libourne et en Gironde.",
  keywords:
    'terrasse bois Libourne, terrasse bois Gironde, plage de piscine bois, terrasse ipé, terrasse sur plots, terrasse pin maritime, terrassier bois Libourne',
  path: '/terrasses-bois',
  ogImage: COVER,
  ogTitle: 'Terrasses bois sur mesure à Libourne et en Gironde',
  ville: 'Libourne',
});

const chantiers = ['moulon', 'lacanau']
  .map((id) => CHANTIERS.find((c) => c.id === id))
  .filter((c): c is NonNullable<typeof c> => Boolean(c));

const FAQ = [
  {
    q: 'Quel bois choisir pour une terrasse en Gironde ?',
    r: "Cela se décide sur l'usage, pas sur le catalogue. Le pin maritime a une durabilité naturelle faible mais il est très imprégnable : traité en autoclave, il atteint la classe d'emploi 4 et convient, local et abordable, à une terrasse de plain-pied qu'on entretient. Un ipé ne grise pas, ne donne pas d'échardes pieds nus et tient au bord d'une eau chlorée, mais il est dense, dur et plus cher. Entre les deux, le douglas et le mélèze couvrent la plupart des cas. Le détail des essences est dans notre guide « quel bois pour une terrasse extérieure ».",
  },
  {
    q: 'Plots ou lambourdes : quelle structure ?',
    r: "Les plots réglables rattrapent une pente et ventilent la sous-face sans toucher au sol existant : c'est la solution courante sur dalle ou sur terrain stabilisé. Mais un plot posé en surface ne vaut que ce que vaut le sol dessous. Quand celui-ci ne porte pas (sable, remblai, terrain qui imposerait un décaissement), nous fondons sur vis, vissées jusqu'à trouver de la résistance : c'est ce que nous avons fait à Lacanau. Dans tous les cas, ce qui décide de la durée de vie, c'est la ventilation de la sous-face et la pente d'écoulement, pas l'essence des lames.",
  },
  {
    q: 'Combien de temps dure une terrasse en bois ?',
    r: "Sur nos chantiers girondins, une terrasse bien ventilée par-dessous et nettoyée une fois par an se tient quinze à vingt ans, essence selon, c'est notre observation, pas une garantie. Ce qui la tue prématurément, c'est presque toujours l'eau qui stagne sous les lames, pas le soleil. Quand elle vieillit, tout n'est pas à refaire : notre guide sur la rénovation explique comment décider entre poncer, changer les lames et tout déposer.",
  },
  {
    q: 'Faut-il une autorisation pour construire une terrasse en bois ?',
    r: "Une terrasse de plain-pied non couverte ne demande le plus souvent aucune formalité. Surélevée, couverte ou créant de l'emprise au sol au-delà d'un seuil, elle peut nécessiter une déclaration préalable. Les seuils dépendent du PLU de votre commune, et un secteur protégé change encore la donne : nous les vérifions avant de chiffrer.",
  },
  {
    q: 'Intervenez-vous au bord d’une piscine ?',
    r: "Oui, c'est un cas fréquent. Le point technique n'est pas le bois mais le raccord à la margelle et la tenue pieds nus : la lame de rive doit affleurer sans créer de ressaut, et l'essence doit rester praticable pieds nus au soleil. Nous avons posé une plage complète en ipé à Moulon, avec l'aménagement du tour de bassin. Nous ne construisons pas la piscine : nous construisons tout autour.",
  },
];

const jsonld = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE.url}/` },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Aménagement extérieur',
        item: `${SITE.url}/amenagement-exterieur`,
      },
      { '@type': 'ListItem', position: 3, name: 'Terrasses bois', item: `${SITE.url}/terrasses-bois` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Terrasse en bois sur mesure',
    serviceType: 'Construction de terrasse en bois',
    url: `${SITE.url}/terrasses-bois`,
    provider: ENTREPRISE_REF,
    areaServed: [
      { '@type': 'City', name: 'Libourne' },
      { '@type': 'City', name: 'Les Billaux' },
      { '@type': 'City', name: 'Moulon' },
      { '@type': 'City', name: 'Lacanau' },
      { '@type': 'City', name: 'Saint-Pey-de-Castets' },
      { '@type': 'AdministrativeArea', name: 'Gironde' },
    ],
    description:
      "Conception et pose de terrasses en bois sur plots ou lambourdes, plages de piscine et abords de bassin, à Libourne et en Gironde.",
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Terrasses bois',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Terrasse bois sur plots réglables',
            description:
              'Rattrapage de pente et ventilation de la sous-face sans reprise du sol existant.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Plage de piscine et abords de bassin',
            description: 'Raccord à la margelle, antidérapance pieds nus, essences imputrescibles.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Terrasse sur sol instable ou sableux',
            description:
              'Fondation sur vis, vissées jusqu’à un horizon porteur, plutôt que sur plots posés en surface.',
          },
        },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.r },
    })),
  },
];

/* Sections ajoutées le 20/10/2026 sur les requêtes réelles de la page (Search
   Console 90 j) : « terrasse sur plots gironde » 26e, « terrasse pin gironde » 28e,
   « terrasse bois libourne » 12e. Les chiffres viennent de nos guides
   terrasse-bois-structure-plots-lambourdes, quel-bois-pour-terrasse-exterieure et
   bois-local-pin-maritime-douglas-gironde, rien n'est inventé ici. */
const STRUCTURES = [
  {
    icone: 'tune',
    titre: 'Sur plots réglables',
    texte:
      "Quand le sol porte (dalle, terrain stabilisé), les plots rattrapent la pente et ventilent la sous-face sans toucher au terrain. Un plot ne vaut que ce que vaut le sol dessous : nous le vérifions au relevé.",
  },
  {
    icone: 'construction',
    titre: 'Sur vis de fondation',
    texte:
      "Sable du littoral, remblai, terrain qui imposerait un décaissement : les vis sont vissées jusqu'à trouver de la résistance, chaque pied réglable indépendamment. C'est la fondation de notre terrasse de Lacanau.",
  },
  {
    icone: 'straighten',
    titre: 'Lambourdes et platelage',
    texte:
      "Entraxe des lambourdes calé sur le NF DTU 51.4 et la lame, le plus souvent 40 à 50 cm. Un jeu de 3 à 5 mm entre lames pour que l'eau parte et que le bois travaille. Jamais de lambourde à même la terre.",
  },
];

const ESSENCES = [
  {
    titre: 'Pin maritime traité',
    texte:
      "Le bois local par excellence : les Landes de Gascogne commencent à quelques dizaines de kilomètres de Libourne. Peu durable naturellement mais très imprégnable, il atteint la classe d'emploi 4 traité en autoclave. Exigez la mention CTB B+ sur le devis. C'est l'option la plus économique.",
    lien: { href: '/blog/bois-local-pin-maritime-douglas-gironde', texte: 'Le bois local en Gironde' },
  },
  {
    titre: 'Douglas ou mélèze',
    texte:
      "Deux résineux naturellement durables en classe 3. Le douglas, brun rosé, offre un très bon rapport qualité-prix ; le mélèze, plus dense, est un peu plus stable. Le choix se joue sur la teinte et l'exposition.",
    lien: { href: '/blog/quel-bois-pour-terrasse-exterieure', texte: 'Le guide des essences' },
  },
  {
    titre: 'Ipé et bois denses',
    texte:
      "Classe 4 à 5 naturellement, il ne grise pas comme un résineux, ne donne pas d'échardes pieds nus et tient au bord d'une eau chlorée. Plus dense, plus dur et plus cher, il s'impose autour d'une piscine, comme à Moulon.",
    lien: { href: '/blog/plage-piscine-bois-essences-pose', texte: 'La plage de piscine en bois' },
  },
];

/* Uniquement nos chantiers. Les trois premières sont prises sur le chantier de
   Lacanau (même maison, même sable que la fiche), les deux pergolas sur
   terrasse à Saint-Pey-de-Castets. */
const GALERIE = [
  {
    src: '/images/terrasse-bois-plots-gironde-1.webp',
    w: 950,
    h: 1267,
    alt: 'Terrasse bois sur sol sableux le long d’une maison à bardage noir, chantier de Lacanau',
    legende: 'Lacanau, terrasse sur vis dans le sable',
  },
  {
    src: '/images/terrasse-bois-plots-gironde-3.webp',
    w: 1000,
    h: 1333,
    alt: 'Angle de terrasse bois et plinthe de rive refermant la structure, chantier de Lacanau',
    legende: 'Lacanau, plinthe de rive sur les quatre côtés',
  },
  {
    src: '/images/terrasse-bois-plots-gironde-4.webp',
    w: 850,
    h: 1133,
    alt: 'Terrasse bois sous un store, posée sur terrain sableux, chantier de Lacanau',
    legende: 'Lacanau, la terrasse sous le store',
  },
  {
    src: '/images/terrasse-bois-pool-house-libourne.webp',
    w: 736,
    h: 981,
    alt: 'Plage de piscine en bois le long du bassin, pool house à bardage noir au fond',
    legende: 'Plage de piscine le long du bassin',
  },
  {
    src: '/images/realisations/terrasse-bois-pergola-aluminium-libourne-7.webp',
    w: 825,
    h: 1100,
    alt: 'Terrasse bois sous une pergola aluminium, lames vues en enfilade, à Saint-Pey-de-Castets',
    legende: 'Saint-Pey-de-Castets, terrasse sous pergola',
  },
  {
    src: '/images/pergola-terrasse-bois-libourne-2.webp',
    w: 900,
    h: 1200,
    alt: 'Grande terrasse bois sur structure, sous une pergola aluminium, à Saint-Pey-de-Castets',
    legende: 'Saint-Pey-de-Castets, grande terrasse sur structure',
  },
];

const COMMUNES = [
  'Libourne',
  'Les Billaux',
  'Saint-Pey-de-Castets',
  'Moulon',
  'Saint-Émilion',
  'Fronsac',
  'Vayres',
  'Izon',
  'Branne',
  'Créon',
  'Bordeaux',
  'Lacanau',
  'La Teste-de-Buch',
];

const lienInterne =
  'text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors';

export default function TerrassesBoisPage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="amenagement-exterieur" ancreDevis="#devis-bas" />
      <main id="contenu">
        <header
          data-devis-hero
          className="relative pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="1200"
              height="800"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Terrasse en bois longeant une maison, lames posées dans le sens de la façade, réalisée en Gironde"
            />
            <div className="absolute inset-0 hero-interne"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-16">
            <p className="font-label-md text-label-md text-white/60 mb-6">
              <a href="/" className="hover:text-secondary-fixed transition-colors">
                Accueil
              </a>
              <span className="mx-2 text-secondary" aria-hidden="true">
                /
              </span>
              <a
                href="/amenagement-exterieur"
                className="hover:text-secondary-fixed transition-colors"
              >
                Aménagement extérieur
              </a>
              <span className="mx-2 text-secondary" aria-hidden="true">
                /
              </span>
              <span className="text-secondary-fixed">Terrasses bois</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Notre savoir-faire
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Terrasse bois sur mesure à Libourne et en Gironde
            </h1>
            <p className="font-body-lg text-body-lg text-white/85 max-w-2xl">
              Une terrasse se pense par-dessous. Ce qu&apos;on voit, ce sont les lames ; ce qui décide
              de sa durée de vie, c&apos;est la structure et la ventilation.
            </p>
          </div>
        </header>

        <section className="py-20 md:py-28 bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-8">
                Ce qui tue une terrasse, c’est l’eau qui reste dessous
              </h2>
              <div className="font-body-lg text-body-lg text-on-surface-variant space-y-6">
                <p>
                  On nous appelle souvent pour une terrasse grisée, en pensant que le bois est fini. Le
                  grisaillement est esthétique et réversible. Ce qui est irréversible, c&apos;est une
                  sous-face qui ne sèche jamais : lambourdes posées à plat sur une dalle sans cale,
                  pente d&apos;écoulement inexistante, garde au sol insuffisante. Le platelage se
                  refait ; une structure pourrie se dépose.
                </p>
                <p>
                  C&apos;est pour cela que nous commençons par regarder ce qu&apos;il y a en dessous,
                  sur une terrasse neuve comme sur une terrasse à reprendre. Le choix de l&apos;essence
                  vient après, et il compte moins qu&apos;on ne le croit.
                </p>
                <p>
                  Nous travaillons sur plots réglables quand le sol porte et qu&apos;il s&apos;agit de
                  rattraper une pente sans toucher au terrain. Quand il ne porte pas (sable du
                  littoral, remblai, terrain en pente qui imposerait un décaissement), nous fondons sur
                  vis, vissées jusqu&apos;à trouver de la résistance, chaque pied réglable
                  indépendamment. Les essences vont du pin maritime traité en autoclave, local et
                  abordable, à l&apos;ipé pour les abords de bassin.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/blog/terrasse-bois-structure-plots-lambourdes"
                  className="inline-flex items-center gap-2 border border-primary/25 text-primary px-7 py-4 rounded-xl font-label-md text-label-md hover:bg-primary hover:text-white hover:border-primary transition-colors"
                >
                  Le guide de la structure
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    arrow_forward
                  </span>
                </a>
                <a
                  href="/blog/quel-bois-pour-terrasse-exterieure"
                  className="inline-flex items-center gap-2 border border-primary/25 text-primary px-7 py-4 rounded-xl font-label-md text-label-md hover:bg-primary hover:text-white hover:border-primary transition-colors"
                >
                  Le guide des essences
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>


        <section className="py-20 md:py-28 bg-surface-container" id="structure">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-12">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-6">
                Terrasse sur plots, sur vis ou sur lambourdes
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                La structure se décide au relevé, sol à l&apos;appui. Trois réponses, selon ce que le
                terrain porte et ce qu&apos;il faut rattraper.
              </p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {STRUCTURES.map((st) => (
                <li key={st.titre} className="bg-surface rounded-2xl p-8 border border-surface-variant">
                  <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4" aria-hidden="true">
                    {st.icone}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{st.titre}</h3>
                  <p className="text-on-surface-variant text-body-md">{st.texte}</p>
                </li>
              ))}
            </ul>
            <p className="font-body-md text-body-md text-on-surface-variant mt-10 max-w-3xl">
              Le détail, du choix du plot au double lambourdage, est dans notre{' '}
              <a href="/blog/terrasse-bois-structure-plots-lambourdes" className={lienInterne}>
                guide de la structure d&apos;une terrasse
              </a>
              .
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-surface" id="essences">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-12">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-6">
                Pin, douglas ou ipé : quel bois pour votre terrasse en Gironde ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                L&apos;essence se choisit sur l&apos;usage et sur le budget. Quelle qu&apos;elle soit,
                c&apos;est la ventilation de la sous-face qui décide si la terrasse atteint le haut ou le
                bas de sa durée de vie.
              </p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ESSENCES.map((e) => (
                <li key={e.titre} className="rounded-2xl p-8 border border-surface-variant bg-surface-container-low">
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{e.titre}</h3>
                  <p className="text-on-surface-variant text-body-md mb-4">{e.texte}</p>
                  <a href={e.lien.href} className={lienInterne}>
                    {e.lien.texte}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="py-20 md:py-28 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-4">
              Deux terrasses, deux problèmes qui n&apos;avaient rien à voir
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-14 max-w-2xl">
              Un raccord à la margelle au millimètre à Moulon, un sol qui ne porte pas à Lacanau :
              commune réelle, contrainte réelle. Les fiches complètes sont dans{' '}
              <a href="/realisations" className={lienInterne}>
                nos réalisations
              </a>
              . Sur le littoral, le sable commande tout le reste, fondation, ventilation de la
              sous-face, nuance d&apos;inox : voir{' '}
              <a href="/terrasse-bois-bassin-arcachon" className={lienInterne}>
                terrasses bois sur le Bassin d&apos;Arcachon
              </a>
              .
            </p>
            <div className="space-y-16">
              {chantiers.map((c) => (
                <article key={c.id} className="grid lg:grid-cols-2 gap-10 items-start">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      width={c.w}
                      height={c.h}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                      src={c.src}
                      alt={c.alt}
                    />
                  </div>
                  <div>
                    <p className="font-label-md text-label-md uppercase tracking-[0.15em] text-secondary-dark mb-3">
                      {c.categorie}, {c.commune}
                    </p>
                    <h3 className="font-headline-md text-headline-md text-primary mb-5">{c.titre}</h3>
                    <div className="font-body-md text-body-md text-on-surface-variant space-y-4">
                      {c.paragraphes.slice(0, 3).map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                    <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
                      {c.faits.map((f) => (
                        <div key={f.label}>
                          <dt className="font-label-md text-label-md text-secondary-dark">
                            {f.label}
                          </dt>
                          <dd className="font-body-md text-body-md text-on-surface-variant">
                            {f.valeur}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>


        <section className="py-20 md:py-28 bg-surface-container" id="realisations-terrasses">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-12">
              Terrasses bois réalisées en Gironde
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {GALERIE.map((g) => (
                <figure key={g.src} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <img
                    width={g.w}
                    height={g.h}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={g.src}
                    alt={g.alt}
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-5 pt-12 text-white font-label-md text-label-md">
                    {g.legende}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-6">
                Votre terrasse bois à Libourne et partout en Gironde
              </h2>
              <div className="font-body-lg text-body-lg text-on-surface-variant space-y-6">
                <p>
                  Notre atelier est aux Billaux, à cinq minutes de Libourne. Nous venons voir le sol
                  avant de chiffrer, et c&apos;est la même équipe qui pose.
                </p>
                <p>
                  Nos terrasses sont posées dans le Libournais et en{' '}
                  <a href="/pergola-carport-entre-deux-mers" className={lienInterne}>
                    Entre-deux-Mers
                  </a>
                  , à Moulon ou Saint-Pey-de-Castets, jusqu&apos;à la{' '}
                  <a href="/amenagement-exterieur-bordeaux-metropole" className={lienInterne}>
                    métropole bordelaise
                  </a>
                  . Sur le littoral, de Lacanau au{' '}
                  <a href="/terrasse-bois-bassin-arcachon" className={lienInterne}>
                    Bassin d&apos;Arcachon
                  </a>
                  , le sable impose une fondation sur vis : nous y consacrons une page.
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-label-md text-label-md uppercase tracking-widest text-primary mb-6">
                Communes desservies
              </h3>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-on-surface-variant text-body-md">
                {COMMUNES.map((c) => (
                  <li key={c} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary-dark text-[18px]" aria-hidden="true">
                      location_on
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-12">
              Questions fréquentes
            </h2>
            <div className="max-w-3xl space-y-4">
              {FAQ.map((f) => (
                <details
                  key={f.q}
                  className="group border border-outline-variant rounded-xl p-6 bg-surface-container"
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer font-title-md text-title-md text-on-surface">
                    {f.q}
                    <span
                      className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform"
                      aria-hidden="true"
                    >
                      expand_more
                    </span>
                  </summary>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-4">{f.r}</p>
                </details>
              ))}
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mt-12 max-w-3xl">
              Pour aller plus loin :{' '}
              <a href="/blog/plage-piscine-bois-essences-pose" className={lienInterne}>
                plage de piscine en bois
              </a>
              ,{' '}
              <a href="/blog/renover-terrasse-bois-existante" className={lienInterne}>
                rénover une terrasse existante
              </a>{' '}
              et{' '}
              <a href="/blog/proteger-terrasse-bois-canicule-entretien-ete" className={lienInterne}>
                protéger son bois de la canicule
              </a>
              . La terrasse fait partie de notre offre d&apos;
              <a href="/amenagement-exterieur" className={lienInterne}>
                aménagement extérieur
              </a>
              .
            </p>
          </div>
        </section>

        <section id="devis-bas" className="py-20 md:py-28 bg-primary text-on-primary">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-headline-md text-headline-md mb-4 text-center">
                Une terrasse à construire ou à reprendre ?
              </h2>
              <p className="font-body-md text-body-md text-on-primary/80 mb-8 text-center">
                Nous venons voir le sol avant de chiffrer. Le relevé et le devis sont gratuits, à
                Libourne et dans toute la Gironde. Vous pouvez aussi appeler le{' '}
                <a href={CONTACT.telHref} className="underline underline-offset-4">
                  {CONTACT.telAffiche}
                </a>
                .
              </p>
              <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-xl">
                <DevisForm instanceId="bas" projet={PROJET} pageLabel={PAGE_LABEL} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <DevisStickyBar />
      <DevisDesktopPopup pageLabel={PAGE_LABEL} />
    </>
  );
}
