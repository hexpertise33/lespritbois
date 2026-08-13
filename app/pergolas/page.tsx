import type { Metadata } from 'next';
import { ENTREPRISE_REF } from '@/lib/data/navigation';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = buildMetadata({
  title: "Pergola bioclimatique, alu & bois à Libourne",
  description:
    "Pergola bioclimatique, aluminium à toiture fixe ou bois massif, sur mesure. Pose à Libourne et en Gironde.",
  keywords:
    'pergola Libourne, pergola Gironde, pergola bioclimatique, pergola aluminium, pergola bois, lames orientables, toiture polycarbonate, store ZIP, pergola adossée, pergola autoportée',
  path: '/pergolas',
  ogImage: '/images/realisations/pergola-aluminium-terrasse-bois-libourne-1.webp',
  ogTitle: 'Pergolas sur mesure à Libourne (33) : bioclimatique, aluminium, bois',
  ville: 'Libourne',
});

const jsonld = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://lesprit-bois.fr/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Pergolas',
        item: 'https://lesprit-bois.fr/pergolas',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Conception, fabrication et pose de pergolas sur mesure',
    name: 'Pergola sur mesure à Libourne et en Gironde',
    areaServed: [
      {
        '@type': 'City',
        name: 'Libourne',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Gironde',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Nouvelle-Aquitaine',
      },
    ],
    provider: ENTREPRISE_REF,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Gamme de pergolas',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pergola bioclimatique aluminium à lames orientables',
            description:
              "Toiture composée de lames aluminium orientables, motorisées ou manuelles, pour régler l'ombre, la ventilation et la protection contre la pluie.",
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pergola aluminium à toiture fixe',
            description:
              'Structure aluminium thermolaquée avec couverture polycarbonate translucide, panneau sandwich isolant ou vitrage, adossée ou autoportée.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pergola bois massif',
            description:
              'Charpente en douglas, mélèze ou red cedar, assemblages traditionnels, couverture claire-voie, lames fixes ou toile.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pergola à toile rétractable et claire-voie',
            description:
              'Ombrage souple par toile tendue ou rétractable et brise-soleil claire-voie, en bois ou en aluminium.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pergola adossée à la maison',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pergola autoportée',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Équipements de pergola : stores ZIP, éclairage LED, claustras brise-vue, motorisation',
          },
        },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Comment fonctionne une pergola bioclimatique ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Sa toiture est composée de lames en aluminium orientables. Lames ouvertes, l'air circule et la chaleur s'échappe. Lames fermées, vous êtes couvert de la pluie et du soleil. C'est cette orientation qui règle l'ombre, la ventilation et la lumière au fil de la journée.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quelle différence entre une pergola bioclimatique et une pergola aluminium à toiture fixe ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La bioclimatique a des lames orientables : vous réglez l'ombre et la ventilation à la demande. La pergola aluminium à toiture fixe garde une couverture permanente (polycarbonate translucide, panneau isolant ou vitrage) : elle abrite en continu, laisse passer plus ou moins de lumière selon la couverture choisie, et coûte généralement moins cher puisqu'elle n'a ni mécanisme ni motorisation. Les deux se posent adossées ou autoportées, dans les mêmes teintes.",
        },
      },
      {
        '@type': 'Question',
        name: 'Une pergola bioclimatique protège-t-elle vraiment de la pluie ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Lames fermées, oui. La toiture est conçue pour que l'eau s'écoule sans stagner, et le profil des lames évite les infiltrations aux extrémités. L'eau est ensuite reprise par un système d'évacuation adapté à votre façade. Ce n'est pas pour autant une toiture au sens de la construction : c'est un ouvrage couvert, pas une couverture. Nous vous montrons concrètement ce que cela implique lors du rendez-vous.",
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on fermer les côtés d\'une pergola ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, partiellement ou totalement. Les stores ZIP, guidés dans des coulisses latérales, coupent le vent, le soleil rasant et les vis-à-vis tout en laissant la vue. Il existe aussi des claustras brise-vue en bois ou en lames aluminium, et des vitrages coulissants pour fermer davantage. Ces équipements se posent à la construction ou s'ajoutent plus tard, à condition d'avoir prévu la structure.",
        },
      },
      {
        '@type': 'Question',
        name: 'Pergola bois ou pergola aluminium : laquelle choisir ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le bois massif apporte chaleur et matière, s'accorde aux maisons girondines traditionnelles et demande un entretien régulier. L'aluminium offre de grandes portées, aucun entretien et, en version bioclimatique, le pilotage des lames, pour une esthétique contemporaine. Le choix dépend de votre maison, de l'usage souhaité et du budget.",
        },
      },
      {
        '@type': 'Question',
        name: 'Adossée ou autoportée : quelle implantation choisir ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La pergola adossée prend appui sur la façade : elle prolonge la maison, protège la baie vitrée et demande moins de poteaux. L'autoportée repose sur ses quatre poteaux et se pose où vous voulez : au bord de la piscine, au fond du jardin, sur une terrasse détachée. Le choix dépend de l'état de la façade, du débord de toiture existant et de l'endroit où vous voulez de l'ombre l'après-midi.",
        },
      },
      {
        '@type': 'Question',
        name: "Faut-il une autorisation d'urbanisme pour une pergola ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le plus souvent oui. Une pergola qui crée de l'emprise au sol relève d'une déclaration préalable de travaux, voire d'un permis de construire selon la surface. En secteur protégé (abords d'un monument historique, site classé), une autorisation est requise même pour de petites surfaces. Les seuils dépendent du PLU de votre commune et évoluent : nous les vérifions sur pièces et montons le dossier.",
        },
      },
      {
        '@type': 'Question',
        name: 'Combien coûte une pergola sur mesure ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le prix dépend de quatre choses : la surface couverte, le type de couverture (claire-voie bois, polycarbonate, panneau isolant, lames orientables motorisées), les équipements ajoutés (stores ZIP, éclairage, claustras) et la nature du support, car une pergola se fonde. Nous ne pratiquons pas le tarif au mètre carré affiché : nous relevons votre terrasse et nous vous remettons un devis détaillé, poste par poste.",
        },
      },
      {
        '@type': 'Question',
        name: "Jusqu'à quelle taille peut-on aller ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La pergola est fabriquée sur mesure, aux dimensions de votre terrasse. Au-delà d'une certaine largeur, un poteau intermédiaire devient nécessaire, ce qui change l'implantation et parfois l'usage de l'espace. Nous relevons votre terrasse, puis nous vous disons ce qui est possible et à quel endroit poser les poteaux.",
        },
      },
      {
        '@type': 'Question',
        name: 'Êtes-vous certifiés et assurés ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui. L'Esprit Bois est une entreprise certifiée Qualibat, la qualification de référence du bâtiment, et chacun de nos ouvrages est couvert par notre garantie décennale. Les structures aluminium de notre partenaire Li-Su des Temps bénéficient par ailleurs d'une garantie fabricant, dont les modalités vous sont précisées avec le devis.",
        },
      },
    ],
  },
];

/* ---------------------------------------------------------------------------
   Gamme : sert à la fois au sommaire visuel (cartes) et à la lecture rapide.
   Chaque entrée pointe vers la section détaillée correspondante.
--------------------------------------------------------------------------- */
const GAMME = [
  {
    id: 'pergola-bioclimatique',
    surtitre: 'Aluminium motorisé',
    titre: 'Pergola bioclimatique',
    accroche: "Lames orientables : vous réglez l'ombre, la ventilation et la pluie d'un geste.",
    points: ['Lames aluminium orientables', 'Adossée ou autoportée', 'Éclairage et stores intégrables'],
    src: '/images/source-adefrance/Pergolas-aluminium-Libourne-9.webp',
    alt: "Salon de jardin sous une pergola bioclimatique à lames orientables blanches, adossée à une maison contemporaine",
    w: 768,
    h: 512,
    pos: 'center 35%',
  },
  {
    id: 'pergola-aluminium',
    surtitre: 'Aluminium toiture fixe',
    titre: 'Pergola aluminium',
    accroche: 'Une couverture permanente : polycarbonate translucide, panneau isolant ou vitrage.',
    points: ['Structure thermolaquée sans entretien', 'Toiture claire ou isolante', 'Le meilleur rapport abri / budget'],
    src: '/images/pergola-terrasse-bois-libourne-1.webp',
    alt: "Pergola aluminium anthracite adossée à une maison girondine, vue en enfilade sur la terrasse bois",
    w: 1200,
    h: 900,
    pos: 'center 45%',
  },
  {
    id: 'pergola-bois',
    surtitre: 'Charpente massive',
    titre: 'Pergola bois massif',
    accroche: 'Douglas, mélèze ou red cedar, assemblages traditionnels et patine qui vieillit bien.',
    points: ['Essences choisies selon l’exposition', 'Claire-voie, lames fixes ou toile', 'S’accorde au bâti ancien'],
    src: '/images/pergola-bois-lames-terrasse.webp',
    alt: 'Pergola en bois massif à poutres apparentes au-dessus d’une terrasse en lames de bois',
    w: 1000,
    h: 1500,
    pos: 'center 45%',
  },
];

/* Équipements proposés en option sur les pergolas aluminium et bois. */
const OPTIONS = [
  {
    icone: 'blinds',
    titre: 'Stores ZIP latéraux',
    texte:
      'Guidés dans des coulisses, ils tiennent au vent, coupent le soleil rasant de fin de journée et les vis-à-vis, sans supprimer la vue.',
  },
  {
    icone: 'lightbulb',
    titre: 'Éclairage LED intégré',
    texte:
      'Bandeaux ou spots encastrés dans les traverses, gradables. La terrasse reste utilisable le soir sans installer de luminaire.',
  },
  {
    icone: 'fence',
    titre: 'Claustras brise-vue',
    texte:
      'Lames bois ou aluminium sur un ou deux côtés, pour cadrer la vue, masquer un mur mitoyen et couper le vent dominant.',
  },
  {
    icone: 'settings_remote',
    titre: 'Motorisation & télécommande',
    texte:
      "Orientation des lames, stores et éclairage pilotés depuis une télécommande, avec possibilité d'automatisation.",
  },
  {
    icone: 'sensors',
    titre: 'Capteurs pluie et vent',
    texte:
      'La toiture se ferme seule à la première averse et les stores remontent au-delà d’un seuil de vent. Utile si la maison reste vide la journée.',
  },
  {
    icone: 'door_sliding',
    titre: 'Vitrages coulissants',
    texte:
      'Pour aller plus loin que le store et fermer réellement un côté, tout en gardant la lumière et la possibilité de tout rouvrir.',
  },
  {
    icone: 'water_drop',
    titre: 'Évacuation des eaux',
    texte:
      "Descente dissimulée dans un poteau ou raccordement au réseau existant : le choix se fait selon votre façade et vos regards d'eaux pluviales.",
  },
  {
    icone: 'palette',
    titre: 'Teintes au nuancier RAL',
    texte:
      'Thermolaquage dans la teinte de vos menuiseries. Anthracite et blanc dominent, mais toute la palette RAL est possible.',
  },
];

/* Teintes les plus demandées en Libournais — le nuancier complet reste ouvert. */
const TEINTES = [
  { ral: 'RAL 7016', nom: 'Gris anthracite', hex: '#383E42', clair: false },
  { ral: 'RAL 9005', nom: 'Noir foncé', hex: '#0E0E10', clair: false },
  { ral: 'RAL 7039', nom: 'Gris quartz', hex: '#6B665E', clair: false },
  { ral: 'RAL 9010', nom: 'Blanc pur', hex: '#F1EFE7', clair: true },
  { ral: 'RAL 1015', nom: 'Ivoire clair', hex: '#E6D2B5', clair: true },
  { ral: 'RAL 8019', nom: 'Brun gris', hex: '#403A3A', clair: false },
  { ral: 'RAL 6005', nom: 'Vert mousse', hex: '#0F4336', clair: false },
  { ral: 'RAL 7022', nom: "Gris terre d'ombre", hex: '#4B4A43', clair: false },
];

/* Déroulé d'un chantier pergola, de l'appel à la réception. */
const ETAPES = [
  {
    icone: 'call',
    titre: 'Votre appel',
    texte:
      'Vous décrivez votre terrasse, son orientation et ce que vous en attendez. Nous vous disons tout de suite si le projet tient debout.',
  },
  {
    icone: 'straighten',
    titre: 'Relevé sur place',
    texte:
      'Nous mesurons, nous regardons la course du soleil, la façade, la nature du sol et le réseau d’eaux pluviales. Gratuit et sans engagement.',
  },
  {
    icone: 'description',
    titre: 'Étude et devis détaillé',
    texte:
      'Vous recevez un plan, les dimensions retenues, la teinte, les options et le prix poste par poste. Retour sous 48h après le rendez-vous.',
  },
  {
    icone: 'approval',
    titre: 'Dossier d’urbanisme',
    texte:
      'Déclaration préalable ou permis de construire : nous vérifions le PLU de votre commune et nous montons le dossier avec vous.',
  },
  {
    icone: 'construction',
    titre: 'Fabrication et pose',
    texte:
      'Fondations, structure, couverture, équipements. Une seule équipe, la nôtre, du premier plot à la dernière lame.',
  },
  {
    icone: 'verified',
    titre: 'Réception et garanties',
    texte:
      'Nous vous montrons le fonctionnement, nous remettons les documents, et l’ouvrage est couvert par notre garantie décennale.',
  },
];

/* Galerie : chantiers réels en priorité, puis références de gamme. */
const GALERIE = [
  {
    src: '/images/realisations/pergola-aluminium-terrasse-bois-libourne-1.webp',
    alt: "Pergola aluminium anthracite adossée à une maison, vue en enfilade sur la terrasse bois, réalisée par L'Esprit Bois",
    legende: 'Pergola aluminium adossée et terrasse bois, Libournais',
    w: 1600,
    h: 900,
  },
  {
    src: '/images/realisations/pergola-aluminium-store-zip-libourne-2.webp',
    alt: 'Vue sous une pergola aluminium avec store ZIP descendu, terrasse bois et mobilier de jardin',
    legende: 'Store ZIP descendu côté ouest, même chantier',
    w: 1100,
    h: 825,
  },
  {
    src: '/images/realisations/pergola-aluminium-toit-polycarbonate-libourne-6.webp',
    alt: "Détail de la couverture polycarbonate d'une pergola aluminium adossée à la façade",
    legende: 'Détail de la couverture polycarbonate',
    w: 825,
    h: 1100,
  },
  {
    src: '/images/realisations/pergola-aluminium-terrasse-bois-libourne-5.webp',
    alt: 'Pergola aluminium et terrasse bois sur plots vues depuis le jardin',
    legende: 'Vue depuis le jardin, terrasse sur plots',
    w: 825,
    h: 1100,
  },
  {
    src: '/images/realisations/salon-sous-pergola-aluminium-libourne-8.webp',
    alt: 'Salon de jardin installé sous une pergola aluminium avec stores, sur terrasse bois',
    legende: 'La terrasse une fois habitée',
    w: 825,
    h: 1100,
  },
  {
    src: '/images/pergola-terrasse-bois-libourne-4.webp',
    alt: 'Pergola aluminium à toiture polycarbonate au-dessus d’une grande terrasse bois, Gironde',
    legende: 'Grande portée sur terrasse bois, Gironde',
    w: 1000,
    h: 1333,
  },
  {
    src: '/images/realisations/pergola-aluminium-toit-polycarbonate-libourne-4.webp',
    alt: 'Pergola aluminium adossée à toiture polycarbonate, raccord à la façade vu depuis la terrasse',
    legende: 'Raccord à la façade, même chantier',
    w: 825,
    h: 1100,
  },
  {
    src: '/images/realisations/terrasse-bois-pergola-aluminium-libourne-7.webp',
    alt: 'Poteau et traverse en aluminium thermolaqué d’une pergola adossée, au-dessus d’une terrasse bois',
    legende: 'Détail de poteau thermolaqué',
    w: 825,
    h: 1100,
  },
  {
    src: '/images/realisations/pergola-aluminium-terrasse-bois-libourne-3.webp',
    alt: 'Pergola aluminium adossée vue depuis la terrasse bois, poteaux et traverses thermolaqués',
    legende: 'Vue en enfilade sous la pergola',
    w: 825,
    h: 1100,
  },
];

const COMMUNES = [
  'Libourne',
  'Les Billaux',
  'Saint-Émilion',
  'Coutras',
  'Fronsac',
  'Vayres',
  'Izon',
  'Saint-Denis-de-Pile',
  'Castillon-la-Bataille',
  'Guîtres',
  'Branne',
  'Bordeaux',
];

export default function PergolasPage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="pergolas" />
      <main id="contenu">
        {/* Hero de page */}
        <header className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="1600"
              height="900"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src="/images/realisations/pergola-aluminium-terrasse-bois-libourne-1.webp"
              alt="Pergola aluminium adossée et terrasse bois réalisées par L'Esprit Bois près de Libourne"
            />
            <div className="absolute inset-0 hero-interne"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-16">
            <p className="font-label-md text-label-md text-white/60 mb-6">
              <a href="/" className="hover:text-secondary-fixed transition-colors">
                Accueil
              </a>
              <span className="mx-2 text-secondary">/</span>
              <span className="text-secondary-fixed">Pergolas</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Lumière &amp; Ombre
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Pergolas sur mesure à Libourne et en Gironde
            </h1>
            <p className="font-body-lg text-body-lg text-white/85 max-w-2xl mb-8">
              Bioclimatique à lames orientables, aluminium à toiture fixe ou bois massif : trois familles de
              pergolas, conçues, fabriquées et posées par la même équipe.
            </p>

            {/* Raccourcis de gamme */}
            <ul className="flex flex-wrap gap-3 mb-10">
              {GAMME.map((g) => (
                <li key={g.id}>
                  <a
                    href={`#${g.id}`}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/25 text-white px-4 py-2.5 rounded-full font-label-md text-label-md hover:bg-white/20 hover:border-secondary/60 transition-all"
                  >
                    <span className="material-symbols-outlined text-secondary-fixed text-[18px]">arrow_downward</span>
                    {g.titre}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#quote"
                className="bg-secondary text-primary px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-secondary-fixed transition-all active:scale-95 shimmer-effect text-center"
              >
                Demander mon étude gratuite
              </a>
              <a
                href="tel:+33557406580"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-white/20 transition-all text-center"
              >
                05 57 40 65 80
              </a>
            </div>
          </div>
        </header>

        {/* Bandeau de confiance */}
        <section className="bg-surface border-b border-surface-variant" aria-label="Nos garanties">
          <div className="max-w-container-max mx-auto px-6 md:px-16 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-dark text-3xl shrink-0">verified</span>
              <div>
                <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Certifiés Qualibat
                </p>
                <p className="text-on-surface-variant text-body-md">La qualification reconnue du bâtiment</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-dark text-3xl shrink-0">shield</span>
              <div>
                <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Garantie décennale
                </p>
                <p className="text-on-surface-variant text-body-md">Vos ouvrages couverts pendant 10 ans</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-dark text-3xl shrink-0">handshake</span>
              <div>
                <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Un seul interlocuteur
                </p>
                <p className="text-on-surface-variant text-body-md">De l'étude à la pose, sans sous-traitance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gamme : sommaire visuel — placée au plus haut, le visiteur doit voir les produits d'abord */}
        <section className="py-section-padding bg-surface-container-low" id="gamme" aria-labelledby="titre-gamme">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-12">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Notre gamme
              </span>
              <h2 id="titre-gamme" className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                Trois familles de pergolas, un même sur-mesure
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Voici ce que nous fabriquons et posons. Chaque famille se décline adossée ou autoportée, aux
                dimensions de votre terrasse et dans la teinte de vos menuiseries.
              </p>
            </div>

            {/* Tuiles immersives : la photo porte le message, le texte se pose dessus. */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {GAMME.map((g) => (
                <article key={g.id} className="group relative rounded-2xl overflow-hidden shadow-xl">
                  <a
                    href={`#${g.id}`}
                    className="block relative h-[460px] lg:h-[560px]"
                    aria-label={`${g.titre} — voir cette gamme`}
                  >
                    <img
                      width={g.w}
                      height={g.h}
                      loading="lazy"
                      decoding="async"
                      style={{ objectPosition: g.pos }}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[900ms]"
                      src={g.src}
                      alt={g.alt}
                    />
                    {/* Voile sombre : lisibilité du texte quelle que soit la photo */}
                    <span aria-hidden="true" className="absolute inset-0 voile-tuile"></span>
                    {/* Au survol, le détail se déploie plus haut : on assombrit d'un cran */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-primary/0 lg:group-hover:bg-primary/35 lg:group-focus-within:bg-primary/35 transition-colors duration-500"
                    ></span>

                    <span className="absolute top-5 left-5 bg-primary/70 backdrop-blur-md border border-white/20 text-white font-label-md text-[12px] px-3 py-1.5 rounded-full uppercase tracking-widest">
                      {g.surtitre}
                    </span>

                    <div className="absolute inset-x-0 bottom-0 p-7 lg:p-8 text-white">
                      <h3 className="font-headline-md text-headline-md text-[28px] leading-tight mb-3">{g.titre}</h3>
                      <p className="text-on-primary-container text-body-md mb-4">{g.accroche}</p>

                      {/* Détail révélé au survol sur grand écran, toujours visible au doigt */}
                      <ul className="space-y-2 overflow-hidden transition-all duration-500 lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-40 lg:group-hover:opacity-100 lg:group-focus-within:max-h-40 lg:group-focus-within:opacity-100">
                        {g.points.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-white/90 text-body-md">
                            <span className="material-symbols-outlined text-secondary-fixed text-[18px] mt-0.5">
                              check_circle
                            </span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>

                      <span className="mt-5 inline-flex items-center gap-2 text-secondary-fixed font-label-md text-label-md group-hover:gap-3 transition-all">
                        Voir cette gamme
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </span>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Gamme 1 — Pergola bioclimatique */}
        <section className="py-section-padding bg-surface" id="pergola-bioclimatique">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <p className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark mb-2">
                  Gamme 1 — Le pilotage du soleil
                </p>
                <h2 className="font-headline-md text-headline-md text-primary mt-2 mb-6">
                  Pergola bioclimatique à lames orientables
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                  C'est le principe qui donne son nom à l'ouvrage : la toiture est faite de{' '}
                  <strong className="text-primary font-semibold">lames en aluminium orientables</strong>. Ouvertes,
                  elles laissent l'air chaud s'échapper et la lumière entrer. Fermées, elles couvrent la terrasse et
                  vous abritent de l'averse. Une même terrasse, deux usages, réglés d'un geste.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                  Nous posons la pergola bioclimatique de notre partenaire français{' '}
                  <a
                    href="https://www.lisudestemps.fr/pergola-bioclimatique/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
                  >
                    Li-Su des Temps
                  </a>
                  , fabriquée à la commande, sur mesure.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">
                      Lames aluminium orientables : ombre, ventilation et lumière réglables
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">Adossée à la façade ou entièrement autoportée</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">Fabrication sur mesure, aux dimensions de votre terrasse</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">Large choix de teintes, structure sans entretien</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">
                      Options : éclairage intégré, store motorisé, cloison brise-vue
                    </span>
                  </li>
                </ul>
                <p className="text-on-surface-variant text-body-md mt-6 italic">
                  Dimensions, teintes, options et garanties du fabricant sont arrêtées lors du rendez-vous, après
                  relevé de votre terrasse, et détaillées dans le devis.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    width="800"
                    height="533"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    src="/images/pergola-bioclimatique-lisudestemps.webp"
                    alt="Pergola bioclimatique aluminium à lames orientables, terrasse bois et spa"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    width="768"
                    height="512"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    src="/images/source-adefrance/Pergolas-aluminium-Libourne-8.webp"
                    alt="Lames orientables ouvertes sur une pergola bioclimatique blanche adossée"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    width="768"
                    height="512"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    src="/images/source-adefrance/Pergolas-aluminium-Libourne-9.webp"
                    alt="Lames orientables d'une pergola bioclimatique en aluminium, vues de dessous"
                  />
                </div>
              </div>
            </div>

            {/* Gestion de l'eau */}
            <h3 className="font-headline-sm text-headline-sm text-primary mb-8">
              Là où tout se joue : l'évacuation de l'eau
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="bg-white rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">water_drop</span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Pas d'eau stagnante</h4>
                <p className="text-on-surface-variant text-body-md">
                  La toiture est conçue pour que l'eau s'écoule toujours, dans les deux sens : rien ne s'accumule sur
                  les lames, même après une averse d'orage girondine.
                </p>
              </article>
              <article className="bg-white rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">
                  precision_manufacturing
                </span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Le détail invisible</h4>
                <p className="text-on-surface-variant text-body-md">
                  Le jeu entre les lames et le profil de leurs embouts sont calculés pour éviter les infiltrations
                  aux extrémités. C'est là que se joue la différence entre les gammes.
                </p>
              </article>
              <article className="bg-white rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">plumbing</span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Une évacuation adaptée</h4>
                <p className="text-on-surface-variant text-body-md">
                  Plusieurs systèmes existent, dont l'évacuation dissimulée dans les poteaux. Nous retenons celui qui
                  convient à votre façade et à votre réseau d'eaux pluviales.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Gamme 2 — Pergola aluminium à toiture fixe */}
        <section className="py-section-padding bg-surface-container-low" id="pergola-aluminium">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                <div className="col-span-2 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    width="1600"
                    height="900"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    src="/images/realisations/pergola-aluminium-terrasse-bois-libourne-1.webp"
                    alt="Pergola aluminium anthracite adossée à toiture polycarbonate, sur terrasse bois, Libournais"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    width="825"
                    height="1100"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    src="/images/realisations/pergola-aluminium-toit-polycarbonate-libourne-6.webp"
                    alt="Détail de la couverture polycarbonate translucide d'une pergola aluminium"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    width="1100"
                    height="825"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    src="/images/realisations/pergola-aluminium-store-zip-libourne-2.webp"
                    alt="Store ZIP latéral descendu sous une pergola aluminium, terrasse bois"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <p className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark mb-2">
                  Gamme 2 — L'abri permanent
                </p>
                <h2 className="font-headline-md text-headline-md text-primary mt-2 mb-6">
                  Pergola aluminium à toiture fixe
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                  Toutes les pergolas aluminium ne sont pas bioclimatiques, et toutes les terrasses n'ont pas besoin
                  de lames motorisées.{' '}
                  <strong className="text-primary font-semibold">
                    La pergola aluminium à toiture fixe couvre en permanence
                  </strong>{' '}
                  : la table reste dressée, les fauteuils restent dehors, la baie vitrée est protégée du soleil de
                  plein été comme de la pluie de novembre.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                  C'est la solution que nous posons le plus souvent en Libournais, parce qu'elle offre le meilleur
                  rapport entre l'abri obtenu et le budget engagé. La structure est en{' '}
                  <strong className="text-primary font-semibold">aluminium thermolaqué</strong>, sans entretien, dans
                  la teinte de vos menuiseries.
                </p>

                <h3 className="font-label-md text-label-md uppercase tracking-widest text-primary mb-4">
                  Trois couvertures possibles
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="bg-white rounded-xl p-5 border border-surface-variant">
                    <p className="font-headline-sm text-headline-sm text-[20px] text-primary mb-2">
                      Polycarbonate translucide
                    </p>
                    <p className="text-on-surface-variant text-body-md">
                      Laisse passer la lumière tout en coupant les UV. La pièce derrière ne s'assombrit pas — c'est le
                      choix à privilégier quand la pergola est devant une baie vitrée ou une pièce à vivre.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-surface-variant">
                    <p className="font-headline-sm text-headline-sm text-[20px] text-primary mb-2">
                      Panneau sandwich isolant
                    </p>
                    <p className="text-on-surface-variant text-body-md">
                      Opaque et isolé : la chaleur ne traverse pas, le bruit de la pluie est amorti. On l'utilise
                      quand la terrasse est plein sud et qu'on cherche une vraie fraîcheur.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-surface-variant">
                    <p className="font-headline-sm text-headline-sm text-[20px] text-primary mb-2">
                      Vitrage feuilleté
                    </p>
                    <p className="text-on-surface-variant text-body-md">
                      La version la plus qualitative : ciel dégagé, aspect véranda, nettoyage plus fréquent. À
                      réserver aux façades dégagées, sans arbre au-dessus.
                    </p>
                  </div>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">
                      Adossée à la façade ou autoportée, grandes portées possibles
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">
                      Stores ZIP latéraux, claustras et éclairage intégrables dès la conception
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">
                      Aucun mécanisme, aucune motorisation obligatoire : rien à entretenir
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">
                      Se pose en même temps qu'une{' '}
                      <a
                        href="/amenagement-exterieur"
                        className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
                      >
                        terrasse bois
                      </a>{' '}
                      : un seul chantier, une seule équipe
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Encadré chantier */}
            <div className="bg-primary text-white rounded-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
              <div className="lg:col-span-2">
                <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
                  Chantier réalisé
                </span>
                <h3 className="font-headline-md text-headline-md mt-4 mb-6">
                  Pergola adossée, polycarbonate et stores ZIP
                </h3>
                <p className="font-body-lg text-body-lg text-on-primary-container mb-6">
                  Une maison des années 80 près de Libourne, une terrasse plein ouest inutilisable après 17h. Nous
                  avons posé une terrasse bois sur plots, puis une pergola aluminium anthracite adossée à la façade,
                  couverte en polycarbonate translucide pour ne pas assombrir le séjour, et fermée côté couchant par
                  un store ZIP guidé.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  <div>
                    <p className="font-label-md text-label-md uppercase tracking-widest text-secondary mb-1">
                      Implantation
                    </p>
                    <p className="text-on-primary-container text-body-md">Adossée</p>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md uppercase tracking-widest text-secondary mb-1">
                      Couverture
                    </p>
                    <p className="text-on-primary-container text-body-md">Polycarbonate</p>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md uppercase tracking-widest text-secondary mb-1">
                      Teinte
                    </p>
                    <p className="text-on-primary-container text-body-md">Anthracite</p>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md uppercase tracking-widest text-secondary mb-1">
                      Options
                    </p>
                    <p className="text-on-primary-container text-body-md">Store ZIP</p>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                <img
                  width="825"
                  height="1100"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  src="/images/realisations/salon-sous-pergola-aluminium-libourne-8.webp"
                  alt="Salon de jardin sous la pergola aluminium terminée, terrasse bois, Libournais"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gamme 3 — Pergola bois massif */}
        <section className="py-section-padding bg-surface" id="pergola-bois">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                <div className="col-span-2 aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    width="1200"
                    height="800"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    src="/images/pergola-bois-claire-voie-terrasse.webp"
                    alt="Pergola en bois massif à claire-voie adossée à une maison, au-dessus d’une terrasse en bois"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    width="900"
                    height="990"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    src="/images/source-adefrance/Pergolas-bois-Libourne.webp"
                    alt="Pergola en bois massif autoportée, poteaux sur pieds béton, exposée sur notre dépôt des Billaux"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    width="1200"
                    height="800"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    src="/images/pergola-bois-poutres-terrasse.webp"
                    alt="Pergola à poutres apparentes prolongeant une maison contemporaine sur une grande terrasse bois"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <p className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark mb-2">
                  Gamme 3 — La chaleur de la matière
                </p>
                <h2 className="font-headline-md text-headline-md text-primary mt-2 mb-6">Pergola bois massif</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                  Aucun matériau ne vieillit avec autant de noblesse qu'une charpente bois bien dessinée. Sur une
                  maison en pierre du Libournais, une pergola en{' '}
                  <strong className="text-primary font-semibold">douglas</strong>,{' '}
                  <strong className="text-primary font-semibold">mélèze</strong> ou{' '}
                  <strong className="text-primary font-semibold">red cedar</strong> ne fait pas rapport : elle
                  appartient au lieu.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                  C'est notre métier d'origine. Nous taillons la charpente, nous soignons les assemblages, et nous
                  décollons systématiquement les pieds de poteaux du sol : c'est ce détail-là qui décide de la durée
                  de vie de l'ouvrage.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">Essences choisies selon l'exposition de l'ouvrage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">Adossée à la façade ou autoportée, assemblages traditionnels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">Pieds de poteaux protégés, décollés du sol</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">Couverture claire-voie, lames fixes, canisse ou toile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">
                      Peut recevoir la même couverture polycarbonate qu'une pergola aluminium
                    </span>
                  </li>
                </ul>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Une pergola bois s'installe souvent en même temps qu'une{' '}
                  <strong className="text-primary font-semibold">terrasse</strong> : même platelage, même structure
                  ventilée, un seul chantier. Voir aussi nos{' '}
                  <a
                    href="/constructions-bois"
                    className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
                  >
                    constructions bois
                  </a>{' '}
                  et nos{' '}
                  <a
                    href="/carports"
                    className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
                  >
                    carports
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Couvertures possibles sur une charpente bois */}
            <h3 className="font-headline-sm text-headline-sm text-primary mt-16 mb-8">
              Quatre façons de couvrir une pergola bois
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <article className="bg-surface-container-low rounded-xl p-7 border border-surface-variant">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">grid_goldenratio</span>
                <h4 className="font-headline-sm text-headline-sm text-[20px] text-primary mb-3">Claire-voie</h4>
                <p className="text-on-surface-variant text-body-md">
                  Des lames fixes espacées, dont l'écartement et l'orientation se calculent selon la course du
                  soleil. L'ombre est portée aux heures chaudes, le ciel reste ouvert. Ne protège pas de la pluie.
                </p>
              </article>
              <article className="bg-surface-container-low rounded-xl p-7 border border-surface-variant">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">horizontal_split</span>
                <h4 className="font-headline-sm text-headline-sm text-[20px] text-primary mb-3">Lames fixes serrées</h4>
                <p className="text-on-surface-variant text-body-md">
                  Le même principe, resserré : l'ombre devient dense et continue. C'est le choix pour une terrasse
                  plein sud dont on veut faire une pièce fraîche.
                </p>
              </article>
              <article className="bg-surface-container-low rounded-xl p-7 border border-surface-variant">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">roller_shades</span>
                <h4 className="font-headline-sm text-headline-sm text-[20px] text-primary mb-3">
                  Toile tendue ou rétractable
                </h4>
                <p className="text-on-surface-variant text-body-md">
                  L'ombrage le plus léger, manuel ou motorisé : on la replie pour retrouver le soleil d'octobre. La
                  solution la plus discrète et la plus légère en budget.
                </p>
              </article>
              <article className="bg-surface-container-low rounded-xl p-7 border border-surface-variant">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">water_drop</span>
                <h4 className="font-headline-sm text-headline-sm text-[20px] text-primary mb-3">
                  Polycarbonate ou panneau
                </h4>
                <p className="text-on-surface-variant text-body-md">
                  Une charpente bois peut recevoir la même couverture qu'une pergola aluminium. C'est le seul moyen
                  d'être réellement à l'abri de la pluie sous une structure bois.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Adossée ou autoportée */}
        <section className="py-section-padding bg-surface" id="implantation">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-12">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Implantation
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                Adossée à la maison ou autoportée ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Les trois gammes se posent dans les deux configurations. Ce qui tranche, c'est l'état de votre
                façade, le débord de toiture existant et l'endroit où vous voulez de l'ombre en fin de journée.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article className="bg-white rounded-2xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">house_siding</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Pergola adossée</h3>
                <p className="text-on-surface-variant text-body-md mb-5">
                  Elle prend appui sur la façade et prolonge la maison. Deux poteaux au lieu de quatre, une ligne
                  plus nette, et la baie vitrée protégée de la surchauffe.
                </p>
                <ul className="space-y-2 text-on-surface-variant text-body-md">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary-dark text-[18px] mt-1">check</span>
                    <span>Idéale devant un séjour ou une cuisine ouverte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary-dark text-[18px] mt-1">check</span>
                    <span>Moins d'emprise au sol visible, moins de poteaux</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary-dark text-[18px] mt-1">check</span>
                    <span>Demande une façade saine : nous la vérifions au relevé</span>
                  </li>
                </ul>
              </article>
              <article className="bg-white rounded-2xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">deck</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Pergola autoportée</h3>
                <p className="text-on-surface-variant text-body-md mb-5">
                  Elle repose sur ses quatre poteaux et se pose où vous voulez : au bord de la piscine, au fond du
                  jardin, sur une terrasse détachée de la maison.
                </p>
                <ul className="space-y-2 text-on-surface-variant text-body-md">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary-dark text-[18px] mt-1">check</span>
                    <span>Aucune contrainte liée à la façade ou au débord de toit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary-dark text-[18px] mt-1">check</span>
                    <span>Crée une pièce à part entière dans le jardin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary-dark text-[18px] mt-1">check</span>
                    <span>S'associe bien à un pool house ou à une terrasse de piscine</span>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Options & équipements */}
        <section className="py-section-padding bg-primary text-white" id="options">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-12">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
                Équipements
              </span>
              <h2 className="font-headline-md text-headline-md mt-4 mb-6">
                Ce qui transforme une pergola en pièce à vivre
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary-container">
                La structure abrite. Ce sont les équipements qui décident si vous y passerez vos soirées. Ils se
                posent à la construction, ou plus tard si la structure a été prévue pour les recevoir.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {OPTIONS.map((o) => (
                <article
                  key={o.titre}
                  className="bg-white/[0.06] border border-white/15 rounded-2xl p-7 hover:bg-white/[0.1] hover:border-secondary/40 transition-colors duration-500"
                >
                  <span className="material-symbols-outlined text-secondary-fixed text-4xl mb-4">{o.icone}</span>
                  <h3 className="font-headline-sm text-headline-sm text-[20px] mb-3">{o.titre}</h3>
                  <p className="text-on-primary-container text-body-md">{o.texte}</p>
                </article>
              ))}
            </div>

            {/* Nuancier */}
            <div className="mt-16 pt-12 border-t border-white/15">
              <h3 className="font-headline-sm text-headline-sm mb-3">Les teintes les plus demandées</h3>
              <p className="text-on-primary-container text-body-md mb-8 max-w-2xl">
                Le thermolaquage se fait dans la teinte de votre choix. Voici celles que nous posons le plus souvent
                en Libournais — le nuancier RAL complet reste ouvert, y compris en finition texturée.
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {TEINTES.map((t) => (
                  <li
                    key={t.ral}
                    className="flex items-center gap-4 bg-white/[0.06] border border-white/15 rounded-xl p-4"
                  >
                    <span
                      aria-hidden="true"
                      className={`w-11 h-11 rounded-lg shrink-0 ${t.clair ? 'border border-white/40' : ''}`}
                      style={{ backgroundColor: t.hex }}
                    ></span>
                    <span>
                      <span className="block font-label-md text-label-md text-white">{t.nom}</span>
                      <span className="block text-on-primary-container text-body-md text-[14px]">{t.ral}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-on-primary-container text-body-md mt-6 italic">
                Les couleurs affichées à l'écran sont indicatives : nous vous présentons les échantillons réels lors
                du rendez-vous.
              </p>
            </div>
          </div>
        </section>

        {/* Comparatif */}
        <section className="py-section-padding bg-surface" id="comparatif">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-12">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Aide au choix
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                Bois, aluminium fixe ou bioclimatique : le comparatif
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Il n'y a pas de bonne réponse dans l'absolu, il y a une bonne réponse pour votre maison, votre
                terrasse et l'usage que vous en ferez.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-surface-variant bg-white">
              <table className="w-full text-left border-collapse min-w-[820px]">
                <caption className="sr-only">
                  Comparatif des pergolas bois massif, aluminium à toiture fixe et aluminium bioclimatique
                </caption>
                <thead>
                  <tr className="bg-surface-container-low border-b border-surface-variant">
                    <th
                      scope="col"
                      className="py-5 px-6 font-label-md text-label-md uppercase tracking-widest text-on-surface-variant"
                    >
                      Critère
                    </th>
                    <th scope="col" className="py-5 px-6 font-headline-sm text-headline-sm text-[20px] text-primary">
                      Bois massif
                    </th>
                    <th scope="col" className="py-5 px-6 font-headline-sm text-headline-sm text-[20px] text-primary">
                      Aluminium toiture fixe
                    </th>
                    <th scope="col" className="py-5 px-6 font-headline-sm text-headline-sm text-[20px] text-primary">
                      Aluminium bioclimatique
                    </th>
                  </tr>
                </thead>
                <tbody className="text-on-surface-variant text-body-md">
                  <tr className="border-b border-surface-variant">
                    <th scope="row" className="py-5 px-6 text-primary font-semibold text-left">
                      Esthétique
                    </th>
                    <td className="py-5 px-6">Chaleur, matière vivante, patine</td>
                    <td className="py-5 px-6">Lignes sobres, discret</td>
                    <td className="py-5 px-6">Lignes tendues, contemporain</td>
                  </tr>
                  <tr className="border-b border-surface-variant">
                    <th scope="row" className="py-5 px-6 text-primary font-semibold text-left">
                      Ombre
                    </th>
                    <td className="py-5 px-6">Fixe, réglée à la conception</td>
                    <td className="py-5 px-6">Permanente, selon la couverture</td>
                    <td className="py-5 px-6">Pilotable, lames orientables</td>
                  </tr>
                  <tr className="border-b border-surface-variant">
                    <th scope="row" className="py-5 px-6 text-primary font-semibold text-left">
                      Pluie
                    </th>
                    <td className="py-5 px-6">Selon la couverture choisie</td>
                    <td className="py-5 px-6">Couvert en permanence</td>
                    <td className="py-5 px-6">Couvert lames fermées, eau évacuée</td>
                  </tr>
                  <tr className="border-b border-surface-variant">
                    <th scope="row" className="py-5 px-6 text-primary font-semibold text-left">
                      Luminosité conservée
                    </th>
                    <td className="py-5 px-6">Élevée en claire-voie</td>
                    <td className="py-5 px-6">Élevée en polycarbonate ou vitrage</td>
                    <td className="py-5 px-6">Variable, au réglage</td>
                  </tr>
                  <tr className="border-b border-surface-variant">
                    <th scope="row" className="py-5 px-6 text-primary font-semibold text-left">
                      Entretien
                    </th>
                    <td className="py-5 px-6">Lasure à reprendre périodiquement</td>
                    <td className="py-5 px-6">Structure laquée, nettoyage de la couverture</td>
                    <td className="py-5 px-6">Structure laquée, sans entretien</td>
                  </tr>
                  <tr className="border-b border-surface-variant">
                    <th scope="row" className="py-5 px-6 text-primary font-semibold text-left">
                      Mécanisme
                    </th>
                    <td className="py-5 px-6">Aucun</td>
                    <td className="py-5 px-6">Aucun (hors stores en option)</td>
                    <td className="py-5 px-6">Motorisation des lames</td>
                  </tr>
                  <tr className="border-b border-surface-variant">
                    <th scope="row" className="py-5 px-6 text-primary font-semibold text-left">
                      Portée
                    </th>
                    <td className="py-5 px-6">Selon section des bois</td>
                    <td className="py-5 px-6">Grandes portées</td>
                    <td className="py-5 px-6">Grandes portées, moins de poteaux</td>
                  </tr>
                  <tr className="border-b border-surface-variant">
                    <th scope="row" className="py-5 px-6 text-primary font-semibold text-left">
                      Budget relatif
                    </th>
                    <td className="py-5 px-6">Variable selon l'essence</td>
                    <td className="py-5 px-6">Le plus contenu à surface égale</td>
                    <td className="py-5 px-6">Le plus élevé</td>
                  </tr>
                  <tr>
                    <th scope="row" className="py-5 px-6 text-primary font-semibold text-left">
                      S'accorde à
                    </th>
                    <td className="py-5 px-6">Maison en pierre, bâti ancien</td>
                    <td className="py-5 px-6">Pavillon, maison des années 70-90</td>
                    <td className="py-5 px-6">Maison contemporaine, extension</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-on-surface-variant text-body-md mt-6 italic">
              Comparatif indicatif : le budget dépend surtout de la surface couverte, de la nature du sol et des
              équipements retenus. Voir aussi notre article{' '}
              <a
                href="/blog/pergola-bois-ou-bioclimatique"
                className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors not-italic"
              >
                pergola bois ou bioclimatique
              </a>
              .
            </p>
          </div>
        </section>

        {/* CTA intermédiaire */}
        <section className="bg-surface-container-low border-y border-surface-variant">
          <div className="max-w-container-max mx-auto px-6 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-headline-sm text-headline-sm text-primary mb-2">
                Vous hésitez encore entre deux gammes ?
              </h2>
              <p className="text-on-surface-variant text-body-md">
                Envoyez-nous une photo de votre terrasse : nous vous disons laquelle a du sens chez vous, et pourquoi.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="/#quote"
                className="bg-primary text-white px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-primary/90 transition-all active:scale-95 text-center"
              >
                Demander conseil
              </a>
              <a
                href="tel:+33557406580"
                className="border border-primary/25 text-primary px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-primary/5 transition-all text-center"
              >
                05 57 40 65 80
              </a>
            </div>
          </div>
        </section>

        {/* Notre approche — descendue ici : elle éclaire le parcours de chantier qui suit */}
        <section className="py-section-padding bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Notre approche
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                L'ombre choisie, la lumière maîtrisée
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                <strong className="text-primary font-semibold">
                  Pour profiter de votre terrasse de mars à octobre, trois solutions existent : la pergola
                  bioclimatique à lames orientables, la pergola aluminium à toiture fixe et la pergola en bois
                  massif — cette dernière se couvrant en claire-voie, en lames fixes ou en toile rétractable.
                </strong>{' '}
                Toutes se posent adossées à la maison ou entièrement autoportées. Ce qui les sépare, c'est la façon
                dont elles traitent le soleil, la pluie et le budget.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Installés aux Billaux, à quelques minutes de{' '}
                <strong className="text-primary font-semibold">Libourne</strong>, nous concevons et posons ces
                pergolas sur mesure dans toute la <strong className="text-primary font-semibold">Gironde</strong>.
                Chaque projet part de l'orientation de votre terrasse, du trajet du soleil et des vents dominants —
                pas d'un catalogue.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nous dessinons, nous posons,{' '}
                <a
                  href="/#methode"
                  className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
                >
                  un seul interlocuteur
                </a>
                , de l'étude à la dernière lame. Entreprise{' '}
                <strong className="text-primary font-semibold">certifiée Qualibat</strong>, nous couvrons chaque
                ouvrage par notre <strong className="text-primary font-semibold">garantie décennale</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Parcours */}
        <section className="py-section-padding bg-surface" id="deroule">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-12">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Comment ça se passe
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                De votre appel à la première soirée dessous
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Aucune étape n'est sous-traitée. C'est la même équipe qui relève, dessine, fabrique et pose.
              </p>
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ETAPES.map((e, i) => (
                <li
                  key={e.titre}
                  className="relative bg-surface-container-low rounded-2xl p-8 border border-surface-variant"
                >
                  <span className="absolute top-6 right-7 font-display-lg text-[44px] leading-none text-primary/[0.08]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">{e.icone}</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{e.titre}</h3>
                  <p className="text-on-surface-variant text-body-md">{e.texte}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Galerie */}
        <section className="py-section-padding bg-surface-container-low" id="realisations-pergolas">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
              Nos chantiers
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-12">
              Pergolas réalisées à Libourne et en Gironde
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {GALERIE.map((p) => (
                <figure key={p.src} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <img
                    width={p.w}
                    height={p.h}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={p.src}
                    alt={p.alt}
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-5 pt-12 text-white font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {p.legende}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-10 text-on-surface-variant text-body-md">
              Découvrez aussi{' '}
              <a
                href="/realisations"
                className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
              >
                l'ensemble de nos réalisations
              </a>
              , nos{' '}
              <a
                href="/carports"
                className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
              >
                carports
              </a>{' '}
              et nos{' '}
              <a
                href="/constructions-bois"
                className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
              >
                constructions bois
              </a>
              .
            </p>
          </div>
        </section>

        {/* Zone d'intervention */}
        <section className="py-section-padding bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Zone d'intervention
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                Votre pergola à Libourne et dans tout le Libournais
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Notre atelier est basé au{' '}
                <strong className="text-primary font-semibold">1 Aux Pradasses, 33500 Les Billaux</strong>, à cinq
                minutes de Libourne. Nous venons relever votre terrasse, étudier son orientation, et nous restons
                joignables après la pose.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nous intervenons dans tout le Libournais et plus largement en Gironde, jusqu'à la métropole
                bordelaise.
              </p>
            </div>
            <div>
              <h3 className="font-label-md text-label-md uppercase tracking-widest text-primary mb-6">
                Communes desservies
              </h3>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-on-surface-variant text-body-md">
                {COMMUNES.map((c) => (
                  <li key={c} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary-dark text-[18px]">location_on</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-section-padding bg-surface-container-low">
          <div className="max-w-4xl mx-auto px-6 md:px-16">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
              Questions fréquentes
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-12">
              Ce qu'on nous demande avant d'installer une pergola
            </h2>

            <div className="space-y-4">
              <details
                className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow"
                open
              >
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Comment fonctionne une pergola bioclimatique ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Sa toiture est composée de{' '}
                  <strong className="text-primary font-semibold">lames en aluminium orientables</strong>. Lames
                  ouvertes, l'air circule et la chaleur s'échappe. Lames fermées, vous êtes couvert de la pluie et du
                  soleil. C'est cette orientation qui règle l'ombre, la ventilation et la lumière au fil de la
                  journée.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Quelle différence entre une pergola bioclimatique et une pergola aluminium à toiture fixe ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  La bioclimatique a des{' '}
                  <strong className="text-primary font-semibold">lames orientables</strong> : vous réglez l'ombre et
                  la ventilation à la demande. La pergola aluminium à{' '}
                  <strong className="text-primary font-semibold">toiture fixe</strong> garde une couverture
                  permanente (polycarbonate translucide, panneau isolant ou vitrage) : elle abrite en continu, laisse
                  passer plus ou moins de lumière selon la couverture choisie, et coûte généralement moins cher
                  puisqu'elle n'a ni mécanisme ni motorisation. Les deux se posent adossées ou autoportées, dans les
                  mêmes teintes.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Une pergola bioclimatique protège-t-elle vraiment de la pluie ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Lames fermées, oui. La toiture est conçue pour que l'eau s'écoule sans stagner, et le profil des
                  lames évite les infiltrations aux extrémités. L'eau est ensuite reprise par un système d'évacuation
                  adapté à votre façade. Ce n'est pas pour autant une toiture au sens de la construction : c'est un{' '}
                  <strong className="text-primary font-semibold">ouvrage couvert, pas une couverture</strong>. Nous
                  vous montrons concrètement ce que cela implique lors du rendez-vous.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Peut-on fermer les côtés d'une pergola ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Oui, partiellement ou totalement. Les{' '}
                  <strong className="text-primary font-semibold">stores ZIP</strong>, guidés dans des coulisses
                  latérales, coupent le vent, le soleil rasant et les vis-à-vis tout en laissant la vue. Il existe
                  aussi des <strong className="text-primary font-semibold">claustras brise-vue</strong> en bois ou en
                  lames aluminium, et des vitrages coulissants pour fermer davantage. Ces équipements se posent à la
                  construction ou s'ajoutent plus tard, à condition d'avoir prévu la structure.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Pergola bois ou pergola aluminium : laquelle choisir ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Le <strong className="text-primary font-semibold">bois massif</strong> apporte chaleur et matière,
                  s'accorde aux maisons girondines traditionnelles et demande un entretien régulier. L'
                  <strong className="text-primary font-semibold">aluminium</strong> offre de grandes portées, aucun
                  entretien et, en version bioclimatique, le pilotage des lames, pour une esthétique contemporaine.
                  Le choix dépend de votre maison, de l'usage souhaité et du budget.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Adossée ou autoportée : quelle implantation choisir ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  La pergola <strong className="text-primary font-semibold">adossée</strong> prend appui sur la
                  façade : elle prolonge la maison, protège la baie vitrée et demande moins de poteaux. L'
                  <strong className="text-primary font-semibold">autoportée</strong> repose sur ses quatre poteaux et
                  se pose où vous voulez : au bord de la piscine, au fond du jardin, sur une terrasse détachée. Le
                  choix dépend de l'état de la façade, du débord de toiture existant et de l'endroit où vous voulez
                  de l'ombre l'après-midi.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Faut-il une autorisation d'urbanisme pour une pergola ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Le plus souvent oui. Une pergola qui crée de l'emprise au sol relève d'une{' '}
                  <strong className="text-primary font-semibold">déclaration préalable de travaux</strong>, voire d'un{' '}
                  <strong className="text-primary font-semibold">permis de construire</strong> selon la surface. En
                  secteur protégé (abords d'un monument historique, site classé), une autorisation est requise même
                  pour de petites surfaces. Les seuils dépendent du PLU de votre commune et évoluent : nous les
                  vérifions sur pièces et montons le dossier. Nous détaillons le sujet dans{' '}
                  <a
                    href="/blog/autorisation-urbanisme-abri-carport-pergola-2026"
                    className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
                  >
                    cet article
                  </a>
                  .
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Combien coûte une pergola sur mesure ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Le prix dépend de quatre choses : la <strong className="text-primary font-semibold">surface</strong>{' '}
                  couverte, le type de <strong className="text-primary font-semibold">couverture</strong> (claire-voie
                  bois, polycarbonate, panneau isolant, lames orientables motorisées), les{' '}
                  <strong className="text-primary font-semibold">équipements</strong> ajoutés (stores ZIP, éclairage,
                  claustras) et la nature du <strong className="text-primary font-semibold">support</strong>, car une
                  pergola se fonde. Nous ne pratiquons pas le tarif au mètre carré affiché : nous relevons votre
                  terrasse et nous vous remettons un devis détaillé, poste par poste.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Jusqu'à quelle taille peut-on aller ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  La pergola est fabriquée sur mesure, aux dimensions de votre terrasse. Au-delà d'une certaine
                  largeur, un poteau intermédiaire devient nécessaire, ce qui change l'implantation et parfois
                  l'usage de l'espace. Nous relevons votre terrasse, puis nous vous disons ce qui est possible et à
                  quel endroit poser les poteaux.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Êtes-vous certifiés et assurés ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Oui. L'Esprit Bois est une entreprise{' '}
                  <strong className="text-primary font-semibold">certifiée Qualibat</strong> et chacun de nos ouvrages
                  est couvert par notre <strong className="text-primary font-semibold">garantie décennale</strong>.
                  Les structures aluminium de notre partenaire{' '}
                  <a
                    href="https://www.lisudestemps.fr/garanties/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
                  >
                    Li-Su des Temps
                  </a>{' '}
                  bénéficient par ailleurs d'une garantie fabricant, dont les modalités vous sont précisées avec le
                  devis.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-section-padding bg-primary text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">Parlons-en</span>
            <h2 className="font-headline-md text-headline-md mt-4 mb-6">
              Un projet de pergola à Libourne ou en Gironde ?
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Orientation de la terrasse, dimensions, bois ou aluminium, toiture fixe ou lames orientables : dites-nous
              ce que vous imaginez. Nous revenons vers vous sous 48h avec une première estimation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#quote"
                className="bg-secondary text-primary px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-secondary-fixed transition-all active:scale-95 shimmer-effect"
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
