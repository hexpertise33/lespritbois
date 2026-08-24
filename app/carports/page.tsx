import type { Metadata } from 'next';
import { ENTREPRISE_REF } from '@/lib/data/navigation';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import DevisForm from '@/components/DevisForm';
import DevisStickyBar from '@/components/DevisStickyBar';
import DevisDesktopPopup from '@/components/DevisDesktopPopup';

/* Étiquettes d'attribution : sans elles, un lead de cette page arriverait
   indistinct de ceux de la landing publicitaire. */
const PROJET = 'Carport';
const PAGE_LABEL = '/carports';

export const metadata: Metadata = buildMetadata({
  title: "Carport bois, alu & solaire à Libourne (33)",
  description:
    "Carport bois, aluminium ou solaire, sur mesure : conception en atelier et pose par nos équipes à Libourne et dans toute la Gironde. Étude gratuite.",
  keywords:
    'carport Libourne, carport Gironde, carport bois, carport aluminium, carport solaire, abri voiture Libourne, carport toiture plate, carport bac acier, carport adossé, carport autoporté',
  path: '/carports',
  ogImage: '/images/source-adefrance/Carport-aluminium-Libourne-4.webp',
  ogTitle: 'Carports sur mesure à Libourne (33) : bois, aluminium, solaire',
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
        name: 'Carports',
        item: 'https://lesprit-bois.fr/carports',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Conception, fabrication et pose de carports sur mesure',
    name: 'Carport sur mesure à Libourne et en Gironde',
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
      name: 'Gamme de carports',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Carport bois sur mesure',
            description:
              'Charpente en douglas, mélèze, red cedar ou chêne, autoportée ou adossée, poteaux sur platines inox.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Carport bois toiture plate',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Carport bois toiture bac acier',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Carport bois toiture tuile',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Carport aluminium thermolaqué sur mesure',
            description:
              'Structure aluminium et visserie inox, sans entretien, grandes portées, toiture isolante.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Carport solaire photovoltaïque',
            description:
              "Carport dont la toiture reçoit des panneaux photovoltaïques, l'étanchéité étant assurée par la toiture elle-même.",
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Équipements de carport : éclairage intégré, claustras brise-vue, attente pour borne de recharge',
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
        name: "Faut-il une autorisation d'urbanisme pour un carport ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le plus souvent oui. Un carport crée de l'emprise au sol : selon la surface, il relève d'une déclaration préalable de travaux ou d'un permis de construire. Les seuils varient d'une commune à l'autre, dépendent du PLU et évoluent dans le temps ; un secteur protégé change encore la donne. Nous les vérifions sur pièces et montons le dossier pour vous.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quel bois choisir pour un carport en Gironde ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Nous travaillons le douglas, le mélèze, le red cedar et le chêne, choisis selon l'exposition de la structure et la fonction de chaque pièce. En Gironde, le climat océanique impose une attention particulière à la ventilation de la structure et au traitement des pieds de poteaux. Nous arrêtons l'essence avec vous, au vu de votre maison.",
        },
      },
      {
        '@type': 'Question',
        name: 'Toiture plate, bac acier ou tuile : laquelle choisir ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La toiture plate offre une ligne contemporaine et peut être végétalisée. Le bac acier est léger, économique et se pose rapidement, avec un large choix de coloris. La tuile s'accorde à la couverture de la maison mais demande une charpente plus dimensionnée. Le choix dépend de votre maison, de votre budget et du PLU.",
        },
      },
      {
        '@type': 'Question',
        name: 'Carport bois ou carport aluminium : lequel choisir ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le bois apporte chaleur et matière, s'accorde au bâti girondin ancien et demande un entretien périodique. L'aluminium thermolaqué offre des lignes tendues, de grandes portées avec peu de poteaux et aucun entretien. Le bois se décline en trois toitures, l'aluminium se pose plus vite et sert aussi d'abri de terrasse. Le choix dépend de votre façade, de la place disponible et du budget.",
        },
      },
      {
        '@type': 'Question',
        name: 'Adossé ou autoporté : quelle implantation pour un carport ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le carport adossé prend appui sur la façade ou sur le mur du garage : moins de poteaux, une ligne plus nette, et un cheminement à l'abri jusqu'à la porte d'entrée. L'autoporté repose sur ses propres poteaux et se pose n'importe où sur le terrain, sans dépendre de l'état de la façade ni du débord de toiture. Nous tranchons au relevé, après avoir regardé l'accès, la pente et le sens de manœuvre.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quelles dimensions prévoir pour une ou deux voitures ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "En pratique, on compte de l'ordre de 3 mètres de large sur 5 mètres de long pour une voiture, et 5,5 à 6 mètres de large pour deux véhicules côte à côte. Ce ne sont que des ordres de grandeur : la bonne dimension dépend de votre véhicule, de l'ouverture des portières, du passage à laisser sur les côtés et de la manœuvre d'accès. Nous relevons le terrain avant de figer les cotes.",
        },
      },
      {
        '@type': 'Question',
        name: "Qu'est-ce qu'un carport solaire ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "C'est un carport dont la toiture accueille des panneaux photovoltaïques. Chez notre partenaire, l'étanchéité est assurée par la toiture elle-même, et non par les panneaux solaires : vous restez donc libre du nombre de modules installés. Les panneaux photovoltaïques ne sont pas fournis avec la structure ; leur dimensionnement et leur raccordement se font avec votre installateur électricien.",
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on installer une borne de recharge sous le carport ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, à condition de le prévoir à la conception. Nous intégrons l'attente électrique dans la structure (fourreau, passage de câble, emplacement du support) pour que la borne soit posée proprement, sans goulotte apparente. La fourniture, le raccordement et la mise en service de la borne relèvent de votre électricien.",
        },
      },
      {
        '@type': 'Question',
        name: 'Combien coûte un carport sur mesure ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le prix dépend de la surface abritée, du matériau de la structure, de la toiture retenue (bac acier, membrane, tuile, photovoltaïque), des équipements ajoutés et de la nature du sol, car un carport se fonde. Nous ne pratiquons pas le tarif au mètre carré affiché : nous relevons votre terrain et remettons un devis détaillé, poste par poste.",
        },
      },
      {
        '@type': 'Question',
        name: 'Êtes-vous qualifiés et assurés ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui. L'Esprit Bois est une entreprise qualifiée Qualibat (une qualification professionnelle, délivrée après examen de nos références, de nos moyens techniques et de notre situation financière), et chacun de nos ouvrages est couvert par notre garantie décennale : la structure que nous posons est garantie dix ans à compter de la réception du chantier.",
        },
      },
      {
        '@type': 'Question',
        name: 'Intervenez-vous en dehors de Libourne ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui. Basés aux Billaux, nous intervenons dans tout le Libournais (Saint-Émilion, Coutras, Fronsac, Vayres, Izon, Saint-Denis-de-Pile, Castillon-la-Bataille, Guîtres, Branne) et plus largement en Gironde, jusqu'à la métropole bordelaise.",
        },
      },
    ],
  },
];

/* ---------------------------------------------------------------------------
   Gamme : vitrine placée au plus haut, le visiteur doit voir les produits
   avant le discours. Le carport solaire n'a pas de photo de chantier : sa
   tuile est traitée en carte sombre plutôt qu'avec une image d'illustration
   qui ne serait pas la nôtre.
--------------------------------------------------------------------------- */
const GAMME = [
  {
    id: 'carport-bois',
    surtitre: 'Charpente massive',
    titre: 'Carport bois',
    accroche: 'Douglas, mélèze, red cedar ou chêne, avec trois toitures possibles.',
    points: ['Toiture plate, bac acier ou tuile', 'Autoporté ou adossé', 'S’accorde au bâti girondin'],
    src: '/images/source-adefrance/carport-bois-libourne.webp',
    alt: 'Carport bois autoporté à toiture plate et sous-face claire, réalisé en Gironde',
    w: 1200,
    h: 646,
    pos: 'center 38%',
  },
  {
    id: 'carport-aluminium',
    surtitre: 'Aluminium thermolaqué',
    titre: 'Carport aluminium',
    accroche: 'Lignes tendues, grandes portées et aucun entretien, dans la teinte de vos menuiseries.',
    points: ['Structure et visserie inox', 'Grandes portées, peu de poteaux', 'Sert aussi d’abri de terrasse'],
    src: '/images/source-adefrance/Carport-aluminium-Libourne-4.webp',
    alt: 'Carport aluminium anthracite thermolaqué à toiture plate abritant deux voitures',
    w: 1200,
    h: 646,
    pos: 'center 50%',
  },
  {
    id: 'carport-solaire',
    surtitre: 'Photovoltaïque',
    titre: 'Carport solaire',
    accroche: 'La même structure, dont la toiture produit votre électricité.',
    points: [
      'Étanchéité assurée par la toiture',
      'Nombre de panneaux libre',
      'Une voiture, plusieurs, un camping-car',
    ],
    src: '/images/carport-solaire-lisudestemps.webp',
    alt: 'Structure aluminium à toiture photovoltaïque LI-SU des Temps, panneaux solaires visibles en couverture',
    w: 1400,
    h: 1050,
    pos: 'center 22%',
  },
];

/* Équipements intégrables à la structure, bois comme aluminium. */
const OPTIONS = [
  {
    icone: 'lightbulb',
    titre: 'Éclairage LED intégré',
    texte:
      'Spots ou bandeaux encastrés dans la structure, commandés par détecteur. On ne cherche plus sa serrure dans le noir en rentrant.',
  },
  {
    icone: 'bolt',
    titre: 'Attente pour borne de recharge',
    texte:
      "Fourreau et passage de câble prévus dès la conception, emplacement du support réservé : la borne se pose ensuite sans goulotte apparente. Raccordement par votre électricien.",
  },
  {
    icone: 'wb_sunny',
    titre: 'Puits de lumière',
    texte:
      "Une ou plusieurs plaques translucides dans la couverture, pour que l'abri ne crée pas une zone d'ombre permanente contre la façade.",
  },
  {
    icone: 'fence',
    titre: 'Claustra ou bardage brise-vue',
    texte:
      "Un ou deux côtés habillés en lames bois ou aluminium : on coupe le vent dominant, on masque le vis-à-vis et l'abri devient un volume à part entière.",
  },
  {
    icone: 'blinds',
    titre: 'Store latéral motorisé',
    texte:
      "Pour fermer un côté à la demande, notamment quand le carport sert aussi d'abri de terrasse ou d'espace de rangement.",
  },
  {
    icone: 'water_drop',
    titre: 'Gouttière et récupération d’eau',
    texte:
      "Descente dissimulée dans un poteau, raccordement au réseau d'eaux pluviales ou à une cuve de récupération selon votre terrain.",
  },
  {
    icone: 'inventory_2',
    titre: 'Local de rangement attenant',
    texte:
      "Une travée fermée dans le prolongement de la structure : vélos, outils de jardin, bois de chauffage, sous la même toiture.",
  },
  {
    icone: 'palette',
    titre: 'Teintes au nuancier RAL',
    texte:
      "Bac acier et structure aluminium thermolaqués dans la teinte de vos menuiseries. Anthracite et gris dominent, toute la palette RAL reste possible.",
  },
];

/* Teintes les plus demandées sur les structures et couvertures. */
const TEINTES = [
  { ral: 'RAL 7016', nom: 'Gris anthracite', hex: '#383E42', clair: false },
  { ral: 'RAL 9005', nom: 'Noir foncé', hex: '#0E0E10', clair: false },
  { ral: 'RAL 7039', nom: 'Gris quartz', hex: '#6B665E', clair: false },
  { ral: 'RAL 9010', nom: 'Blanc pur', hex: '#F1EFE7', clair: true },
  { ral: 'RAL 8019', nom: 'Brun gris', hex: '#403A3A', clair: false },
  { ral: 'RAL 6005', nom: 'Vert mousse', hex: '#0F4336', clair: false },
  { ral: 'RAL 7022', nom: "Gris terre d'ombre", hex: '#4B4A43', clair: false },
  { ral: 'RAL 8017', nom: 'Brun chocolat', hex: '#442F29', clair: false },
];

/* Déroulé d'un chantier carport, de l'appel à la réception. */
const ETAPES = [
  {
    icone: 'call',
    titre: 'Votre appel',
    texte:
      "Vous décrivez votre terrain, ce que vous voulez abriter et l'accès dont vous disposez. Nous vous disons tout de suite si le projet tient debout.",
  },
  {
    icone: 'straighten',
    titre: 'Relevé sur place',
    texte:
      "Nous mesurons, nous regardons la pente, la nature du sol, la façade, le sens de manœuvre et le réseau d'eaux pluviales. Gratuit et sans engagement.",
  },
  {
    icone: 'description',
    titre: 'Étude et devis détaillé',
    texte:
      'Vous recevez un plan, les dimensions retenues, le matériau, la toiture, les options et le prix poste par poste. Retour sous 48h après le rendez-vous.',
  },
  {
    icone: 'approval',
    titre: 'Dossier d’urbanisme',
    texte:
      'Déclaration préalable ou permis de construire : nous vérifions le PLU de votre commune et nous montons le dossier avec vous.',
  },
  {
    icone: 'construction',
    titre: 'Fondations, structure et pose',
    texte:
      "Massifs béton, charpente ou structure aluminium, couverture, équipements. Une seule équipe, la nôtre, du premier plot à la dernière vis.",
  },
  {
    icone: 'verified',
    titre: 'Réception et garanties',
    texte:
      'Nous vous remettons les documents et l’ouvrage est couvert par notre garantie décennale, dix ans à compter de la réception.',
  },
];

/* Galerie : uniquement des ouvrages que nous avons réalisés. */
const GALERIE = [
  {
    src: '/images/source-adefrance/Carport-bois-Libourne-2.webp',
    alt: "Carport bois adossé à la façade au coucher du soleil, charpente apparente, à Lugon-et-l'Île-du-Carnay",
    legende: 'Charpente adossée, contre-jour de fin de journée',
  },
  {
    src: '/images/source-adefrance/Carport-aluminium-Libourne-1.webp',
    alt: 'Carport aluminium sur mesure à toiture plate, adossé à un bardage bois à claire-voie',
    legende: 'Carport aluminium à toiture plate',
  },
  {
    src: '/images/source-adefrance/carport-bois-libourne.webp',
    alt: 'Carport bois autoporté à toiture plate et sous-face claire, réalisé en Gironde',
    legende: 'Carport bois autoporté, toiture plate',
  },
  {
    src: '/images/source-adefrance/Carport-bois-Libourne-5.webp',
    alt: 'Carport bois avec toiture bac acier, à Lagorce',
    legende: 'Grande charpente bois, toiture bac acier',
  },
  {
    src: '/images/source-adefrance/Carport-bois-Libourne-6.webp',
    alt: 'Carport bois autoporté à toiture plate abritant deux voitures, Gironde',
    legende: 'Carport bois autoporté, deux véhicules',
  },
  {
    src: '/images/source-adefrance/Carport-aluminium-Libourne-3.webp',
    alt: 'Carport aluminium thermolaqué avec éclairage intégré',
    legende: 'Éclairage intégré à la structure',
  },
  {
    src: '/images/source-adefrance/Carport-bois-Libourne-1.webp',
    alt: 'Carport bois adossé le long d’une maison girondine, poteaux et pannes apparents',
    legende: 'Carport bois en longueur, le long de la maison',
  },
  {
    src: '/images/source-adefrance/Carport-aluminium-Libourne-2.webp',
    alt: 'Carport aluminium contemporain à toiture plate abritant deux véhicules',
    legende: 'Carport aluminium double',
  },
  {
    src: '/images/source-adefrance/Carport-aluminium-Libourne-4.webp',
    alt: 'Carport aluminium anthracite abritant deux voitures, vue depuis le jardin',
    legende: 'Carport aluminium, vue depuis le jardin',
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

export default function CarportsPage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="carports" ancreDevis="#devis-bas" />
      <main id="contenu">
        {/* Hero de page */}
        <header
          data-devis-hero
          className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="1200"
              height="646"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src="/images/source-adefrance/Carport-bois-Libourne-1.webp"
              alt="Carport bois sur mesure réalisé par L'Esprit Bois à Lugon-et-l'Île-du-Carnay, en Gironde"
            />
            <div className="absolute inset-0 hero-interne"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-16">
            <p className="font-label-md text-label-md text-white/60 mb-6">
              <a href="/" className="hover:text-secondary-fixed transition-colors">
                Accueil
              </a>
              <span className="mx-2 text-secondary">/</span>
              <span className="text-secondary-fixed">Carports</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Structure &amp; Protection
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Carports sur mesure à Libourne et en Gironde
            </h1>
            <p className="font-body-lg text-body-lg text-white/85 max-w-2xl mb-8">
              Carport bois, carport aluminium ou carport solaire : trois familles d'abris, conçus, fabriqués et posés
              par la même équipe.
            </p>

            {/* Raccourcis de gamme */}
            <ul className="flex flex-wrap gap-3 mb-10">
              {[
                { id: 'carport-bois', titre: 'Carport bois' },
                { id: 'carport-aluminium', titre: 'Carport aluminium' },
                { id: 'carport-solaire', titre: 'Carport solaire' },
              ].map((g) => (
                <li key={g.id}>
                  <a
                    href={`#${g.id}`}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/25 text-white px-4 py-2.5 rounded-full font-label-md text-label-md hover:bg-white/20 hover:border-secondary/60 transition-all"
                  >
                    <span className="material-symbols-outlined text-secondary-fixed text-[18px]" aria-hidden="true">arrow_downward</span>
                    {g.titre}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#devis-bas"
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

        {/* Bandeau de confiance : qualification, assurance, interlocuteur */}
        <section className="bg-surface border-b border-surface-variant" aria-label="Nos garanties">
          <div className="max-w-container-max mx-auto px-6 md:px-16 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-dark text-3xl shrink-0" aria-hidden="true">verified</span>
              <div>
                <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Qualifiés Qualibat
                </p>
                <p className="text-on-surface-variant text-body-md">La qualification reconnue du bâtiment</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-dark text-3xl shrink-0" aria-hidden="true">shield</span>
              <div>
                <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Garantie décennale
                </p>
                <p className="text-on-surface-variant text-body-md">Vos ouvrages couverts pendant 10 ans</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-dark text-3xl shrink-0" aria-hidden="true">handshake</span>
              <div>
                <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Un seul interlocuteur
                </p>
                <p className="text-on-surface-variant text-body-md">De l'étude à la pose, sans sous-traitance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gamme : vitrine placée au plus haut */}
        <section className="py-section-padding bg-surface-container-low" id="gamme" aria-labelledby="titre-gamme">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-12">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Notre gamme
              </span>
              <h2 id="titre-gamme" className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                Trois familles de carports, un même sur-mesure
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Voici ce que nous fabriquons et posons. Chaque famille se décline adossée ou autoportée, aux
                dimensions de votre stationnement et dans la teinte de vos menuiseries.
              </p>
            </div>

            {/* Nos photos de carport sont panoramiques (1200x646). Un cadre vertical
                n'en montrerait qu'un tiers : la photo garde donc son format, et le
                texte se place dessous sur le fond sombre de la carte. */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {GAMME.map((g) => (
                <article
                  key={g.id}
                  className="group rounded-2xl overflow-hidden shadow-xl bg-primary hover:shadow-2xl transition-shadow duration-500"
                >
                  <a href={`#${g.id}`} className="flex flex-col h-full" aria-label={`${g.titre}, voir cette gamme`}>
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        width={g.w}
                        height={g.h}
                        style={{ objectPosition: g.pos }}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[900ms]"
                        src={g.src}
                        alt={g.alt}
                      />
                      <span className="absolute top-4 left-4 bg-primary/75 backdrop-blur-md border border-white/20 text-white font-label-md text-[12px] px-3 py-1.5 rounded-full uppercase tracking-widest">
                        {g.surtitre}
                      </span>
                    </div>

                    <div className="p-7 lg:p-8 text-white flex flex-col flex-1">
                      <h3 className="font-headline-md text-headline-md text-[28px] leading-tight mb-3">{g.titre}</h3>
                      <p className="text-on-primary-container text-body-md mb-5">{g.accroche}</p>
                      <ul className="space-y-2 mb-6">
                        {g.points.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-white/90 text-body-md">
                            <span className="material-symbols-outlined text-secondary-fixed text-[18px] mt-0.5" aria-hidden="true">
                              check_circle
                            </span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                      <span className="mt-auto inline-flex items-center gap-2 text-secondary-fixed font-label-md text-label-md group-hover:gap-3 transition-all">
                        Voir cette gamme
                        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
                      </span>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Gamme 1, Carport bois + 3 toitures */}
        <section className="py-section-padding bg-surface" id="carport-bois">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <p className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark mb-2">
                  Gamme 1, Le classique
                </p>
                <h2 className="font-headline-md text-headline-md text-primary mt-2 mb-6">
                  Carport bois : chaleur naturelle et robustesse
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                  Le bois reste la matière la plus chaleureuse pour un abri de voiture, et la plus facile à accorder
                  à une maison girondine, en pierre comme en enduit. Nous travaillons le{' '}
                  <strong className="text-primary font-semibold">douglas</strong>, le{' '}
                  <strong className="text-primary font-semibold">mélèze</strong>, le{' '}
                  <strong className="text-primary font-semibold">red cedar</strong> et le{' '}
                  <strong className="text-primary font-semibold">chêne</strong>, choisis selon l'exposition de
                  l'ouvrage.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                  Structure autoportée ou adossée à la façade, poteaux sur platines inox, ventilation soignée des
                  pieds de poteaux : sous le climat océanique du Libournais, c'est ce qui fait la différence entre un
                  carport qui vieillit bien et un carport qui grise mal.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">
                      check_circle
                    </span>
                    <span className="text-body-md">Essences choisies selon l'exposition de chaque pièce</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">
                      check_circle
                    </span>
                    <span className="text-body-md">Poteaux sur platines inox, décollés du sol</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">
                      check_circle
                    </span>
                    <span className="text-body-md">Trois toitures possibles : plate, bac acier ou tuile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">
                      check_circle
                    </span>
                    <span className="text-body-md">Peut recevoir bardage, claustra ou local de rangement</span>
                  </li>
                </ul>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Pour comparer les essences, les toitures et le budget avant de vous décider, lisez notre guide{' '}
                  <a
                    href="/blog/carport-bois-guide"
                    className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
                  >
                    Carport en bois : bien le choisir et l'intégrer à sa maison
                  </a>
                  .
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    width="1200"
                    height="646"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    src="/images/source-adefrance/Carport-bois-Libourne-6.webp"
                    alt="Carport bois autoporté à toiture plate abritant deux voitures, posé en Gironde par L'Esprit Bois"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    width="1200"
                    height="646"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    src="/images/source-adefrance/carport-bois-libourne.webp"
                    alt="Carport bois autoporté à toiture plate, sous-face claire, réalisé en Gironde"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    width="1200"
                    height="646"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    src="/images/source-adefrance/Carport-bois-Libourne-5.webp"
                    alt="Carport bois de grande portée avec toiture bac acier, chantier à Lagorce"
                  />
                </div>
              </div>
            </div>

            {/* Les 3 toitures */}
            <h3 className="font-headline-sm text-headline-sm text-primary mb-8">
              Trois toitures possibles, selon votre maison et votre budget
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="bg-white rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4" aria-hidden="true">horizontal_rule</span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Toiture plate</h4>
                <p className="text-on-surface-variant text-body-md mb-4">
                  La ligne la plus contemporaine. Étanchéité par membrane, évacuation intégrée dans la structure, et
                  possibilité de <strong className="text-primary font-semibold">toiture végétalisée</strong> pour
                  fondre l'abri dans le jardin.
                </p>
                <p className="text-on-surface-variant text-body-md italic">
                  Idéale sur une maison cubique ou une extension récente.
                </p>
              </article>
              <article className="bg-white rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4" aria-hidden="true">roofing</span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Toiture bac acier</h4>
                <p className="text-on-surface-variant text-body-md mb-4">
                  Légère, économique et rapide à poser. Large choix de coloris RAL pour s'accorder aux menuiseries,
                  et excellente tenue à la pluie. Une sous-face isolée limite le bruit d'averse.
                </p>
                <p className="text-on-surface-variant text-body-md italic">Le meilleur rapport durabilité / budget.</p>
              </article>
              <article className="bg-white rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4" aria-hidden="true">home</span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Toiture tuile</h4>
                <p className="text-on-surface-variant text-body-md mb-4">
                  La continuité parfaite avec la couverture de la maison, souvent la seule solution acceptée près
                  d'un site classé. Plus lourde, elle demande une charpente dimensionnée en conséquence.
                </p>
                <p className="text-on-surface-variant text-body-md italic">
                  Recommandée en secteur patrimonial, autour de Saint-Émilion.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Gamme 2, Carport aluminium */}
        <section className="py-section-padding bg-surface-container-low" id="carport-aluminium">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                <div className="col-span-2 aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    width="1200"
                    height="646"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    src="/images/source-adefrance/Carport-aluminium-Libourne-4.webp"
                    alt="Carport aluminium anthracite abritant deux voitures, structure sur mesure"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    width="1200"
                    height="646"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    src="/images/source-adefrance/Carport-aluminium-Libourne-2.webp"
                    alt="Carport aluminium contemporain sur mesure, modèle de notre gamme"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    width="1200"
                    height="646"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    src="/images/source-adefrance/Carport-aluminium-Libourne-3.webp"
                    alt="Carport aluminium thermolaqué avec éclairage intégré à la structure"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <p className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark mb-2">
                  Gamme 2, Le contemporain
                </p>
                <h2 className="font-headline-md text-headline-md text-primary mt-2 mb-6">
                  Carport aluminium sur mesure
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                  Quand l'architecture appelle des lignes tendues et des portées franches, l'aluminium s'impose.
                  Thermolaqué dans le coloris de votre choix, il ne demande{' '}
                  <strong className="text-primary font-semibold">aucun entretien</strong> : pas de lasure à
                  reprendre, pas de reprise de teinte.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                  Nous posons les carports aluminium de notre partenaire français{' '}
                  <a
                    href="https://www.lisudestemps.fr/aluloge-carport-abri-de-terrasse/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
                  >
                    Li-Su des Temps
                  </a>,
                  fabriqués sur mesure aux dimensions exactes de votre stationnement.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">
                      check_circle
                    </span>
                    <span className="text-body-md">
                      Structure aluminium et <strong className="text-primary font-semibold">visserie inox</strong>,
                      pensées pour le bord de mer comme pour l'humidité girondine
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">
                      check_circle
                    </span>
                    <span className="text-body-md">Toiture isolante, résistante aux chocs et au ruissellement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">
                      check_circle
                    </span>
                    <span className="text-body-md">
                      Fabrication sur mesure : une voiture, deux, ou un abri de terrasse
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">
                      check_circle
                    </span>
                    <span className="text-body-md">Large choix de teintes, laquage durable, aucun entretien</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">
                      check_circle
                    </span>
                    <span className="text-body-md">
                      Options : éclairage intégré, puits de lumière, store motorisé, cloison brise-vue
                    </span>
                  </li>
                </ul>
                <p className="text-on-surface-variant text-body-md mt-6 italic">
                  Dimensions, teintes, options et garanties du fabricant sont arrêtées lors du rendez-vous, après
                  relevé de votre terrain, et détaillées dans le devis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gamme 3, Carport solaire */}
        <section className="py-section-padding bg-primary text-white" id="carport-solaire">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-14">
              <div>
                <p className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary mb-2">
                  Gamme 3, L'abri qui produit
                </p>
                <h2 className="font-headline-md text-headline-md mt-2 mb-6">
                  Carport solaire : abritez votre voiture, produisez votre électricité
                </h2>
                <p className="font-body-lg text-body-lg text-on-primary-container mb-4">
                  Une toiture de carport, c'est une surface plane, dégagée et bien exposée : le support idéal pour
                  des <strong className="text-white font-semibold">panneaux photovoltaïques</strong>. Plutôt que de
                  percer la couverture de votre maison, vous produisez votre électricité au-dessus de votre
                  véhicule.
                </p>
                <p className="font-body-lg text-body-lg text-on-primary-container">
                  Nous posons le carport solaire sur mesure de notre partenaire français{' '}
                  <a
                    href="https://www.lisudestemps.fr/carport-solaire-sur-mesure-lisudestemps/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-fixed underline underline-offset-4 decoration-secondary/60 hover:decoration-secondary transition-colors"
                  >
                    Li-Su des Temps
                  </a>
                  .
                </p>
              </div>
              <figure>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    width="1400"
                    height="1050"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    src="/images/carport-solaire-lisudestemps.webp"
                    alt="Structure aluminium à toiture photovoltaïque LI-SU des Temps, panneaux solaires visibles en couverture"
                  />
                </div>
                <figcaption className="text-on-primary-container text-body-md text-[14px] mt-3 italic">
                  Structure solaire LI-SU des Temps. Photo du fabricant.
                </figcaption>
              </figure>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="border-t-2 border-secondary pt-6">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4" aria-hidden="true">water_drop</span>
                <h3 className="font-headline-sm text-headline-sm text-secondary-fixed mb-3">
                  L'étanchéité ne dépend pas des panneaux
                </h3>
                <p className="text-on-primary-container text-body-md">
                  Chez notre partenaire, c'est la{' '}
                  <strong className="text-white font-semibold">toiture elle-même</strong> qui assure l'étanchéité,
                  jamais le photovoltaïque. Une fuite ne viendra donc pas de vos panneaux.
                </p>
              </div>
              <div className="border-t-2 border-secondary pt-6">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4" aria-hidden="true">tune</span>
                <h3 className="font-headline-sm text-headline-sm text-secondary-fixed mb-3">
                  Le nombre de panneaux, à la carte
                </h3>
                <p className="text-on-primary-container text-body-md">
                  Conséquence directe : vous choisissez librement combien de panneaux installer. Les modules
                  photovoltaïques ne sont pas fournis avec la structure : vous dimensionnez la production avec votre
                  installateur électricien.
                </p>
              </div>
              <div className="border-t-2 border-secondary pt-6">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4" aria-hidden="true">straighten</span>
                <h3 className="font-headline-sm text-headline-sm text-secondary-fixed mb-3">
                  Une voiture, plusieurs, ou un camping-car
                </h3>
                <p className="text-on-primary-container text-body-md">
                  La structure est dimensionnée sur mesure selon ce que vous abritez, et peut recevoir éclairage
                  intégré, store motorisé ou cloison brise-vue. Nous calons tout cela au rendez-vous, après relevé.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Adossé ou autoporté */}
        <section className="py-section-padding bg-surface" id="implantation">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-12">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Implantation
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                Adossé à la maison ou autoporté ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Les trois gammes se posent dans les deux configurations. Ce qui tranche, c'est l'état de votre
                façade, la place disponible et le sens de manœuvre depuis la rue.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article className="bg-surface-container-low rounded-2xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4" aria-hidden="true">house_siding</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Carport adossé</h3>
                <p className="text-on-surface-variant text-body-md mb-5">
                  Il prend appui sur la façade ou sur le mur du garage. Moins de poteaux, une ligne plus nette, et un
                  cheminement à l'abri jusqu'à la porte d'entrée.
                </p>
                <ul className="space-y-2 text-on-surface-variant text-body-md">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary-dark text-[18px] mt-1" aria-hidden="true">check</span>
                    <span>Gagne de la place sur un terrain étroit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary-dark text-[18px] mt-1" aria-hidden="true">check</span>
                    <span>On décharge les courses au sec, jusqu'à la porte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary-dark text-[18px] mt-1" aria-hidden="true">check</span>
                    <span>Demande une façade saine : nous la vérifions au relevé</span>
                  </li>
                </ul>
              </article>
              <article className="bg-surface-container-low rounded-2xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4" aria-hidden="true">deck</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Carport autoporté</h3>
                <p className="text-on-surface-variant text-body-md mb-5">
                  Il repose sur ses propres poteaux et se pose où vous voulez : en limite de propriété, au bout de
                  l'allée, à l'écart de la maison.
                </p>
                <ul className="space-y-2 text-on-surface-variant text-body-md">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary-dark text-[18px] mt-1" aria-hidden="true">check</span>
                    <span>Aucune contrainte liée à la façade ou au débord de toit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary-dark text-[18px] mt-1" aria-hidden="true">check</span>
                    <span>Permet d'abriter plusieurs véhicules côte à côte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary-dark text-[18px] mt-1" aria-hidden="true">check</span>
                    <span>Se prolonge facilement d'un local de rangement</span>
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
                Ce qui transforme un abri en vrai usage quotidien
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary-container">
                La structure abrite. Ce sont les équipements qui décident si vous y gagnez vraiment du confort. Ils
                se posent à la construction, ou plus tard si la structure a été prévue pour les recevoir.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {OPTIONS.map((o) => (
                <article
                  key={o.titre}
                  className="bg-white/[0.06] border border-white/15 rounded-2xl p-7 hover:bg-white/[0.1] hover:border-secondary/40 transition-colors duration-500"
                >
                  <span className="material-symbols-outlined text-secondary-fixed text-4xl mb-4" aria-hidden="true">{o.icone}</span>
                  <h3 className="font-headline-sm text-headline-sm text-[20px] mb-3">{o.titre}</h3>
                  <p className="text-on-primary-container text-body-md">{o.texte}</p>
                </article>
              ))}
            </div>

            {/* Nuancier */}
            <div className="mt-16 pt-12 border-t border-white/15">
              <h3 className="font-headline-sm text-headline-sm mb-3">Les teintes les plus demandées</h3>
              <p className="text-on-primary-container text-body-md mb-8 max-w-2xl">
                Bac acier et structure aluminium sont thermolaqués dans la teinte de votre choix. Voici celles que
                nous posons le plus souvent en Libournais, le nuancier RAL complet reste ouvert.
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
                Bois, aluminium ou solaire : le comparatif
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Il n'y a pas de bonne réponse dans l'absolu, il y a une bonne réponse pour votre maison, votre
                terrain et l'usage que vous en ferez.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-surface-variant bg-white">
              <table className="w-full text-left border-collapse min-w-[820px]">
                <caption className="sr-only">
                  Comparatif des carports bois, aluminium thermolaqué et solaire photovoltaïque
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
                      Carport bois
                    </th>
                    <th scope="col" className="py-5 px-6 font-headline-sm text-headline-sm text-[20px] text-primary">
                      Carport aluminium
                    </th>
                    <th scope="col" className="py-5 px-6 font-headline-sm text-headline-sm text-[20px] text-primary">
                      Carport solaire
                    </th>
                  </tr>
                </thead>
                <tbody className="text-on-surface-variant text-body-md">
                  <tr className="border-b border-surface-variant">
                    <th scope="row" className="py-5 px-6 text-primary font-semibold text-left">
                      Esthétique
                    </th>
                    <td className="py-5 px-6">Chaleur, matière vivante, patine</td>
                    <td className="py-5 px-6">Lignes tendues, contemporain</td>
                    <td className="py-5 px-6">Contemporain, toiture technique</td>
                  </tr>
                  <tr className="border-b border-surface-variant">
                    <th scope="row" className="py-5 px-6 text-primary font-semibold text-left">
                      Toitures possibles
                    </th>
                    <td className="py-5 px-6">Plate, bac acier ou tuile</td>
                    <td className="py-5 px-6">Toiture isolante du fabricant</td>
                    <td className="py-5 px-6">Toiture recevant le photovoltaïque</td>
                  </tr>
                  <tr className="border-b border-surface-variant">
                    <th scope="row" className="py-5 px-6 text-primary font-semibold text-left">
                      Entretien
                    </th>
                    <td className="py-5 px-6">Lasure à reprendre périodiquement</td>
                    <td className="py-5 px-6">Aucun, structure laquée</td>
                    <td className="py-5 px-6">Aucun sur la structure</td>
                  </tr>
                  <tr className="border-b border-surface-variant">
                    <th scope="row" className="py-5 px-6 text-primary font-semibold text-left">
                      Portée
                    </th>
                    <td className="py-5 px-6">Selon section des bois</td>
                    <td className="py-5 px-6">Grandes portées, peu de poteaux</td>
                    <td className="py-5 px-6">Grandes portées, peu de poteaux</td>
                  </tr>
                  <tr className="border-b border-surface-variant">
                    <th scope="row" className="py-5 px-6 text-primary font-semibold text-left">
                      Production d'électricité
                    </th>
                    <td className="py-5 px-6">Non</td>
                    <td className="py-5 px-6">Non</td>
                    <td className="py-5 px-6">Oui, panneaux fournis par votre électricien</td>
                  </tr>
                  <tr className="border-b border-surface-variant">
                    <th scope="row" className="py-5 px-6 text-primary font-semibold text-left">
                      Secteur patrimonial
                    </th>
                    <td className="py-5 px-6">Souvent accepté, surtout en tuile</td>
                    <td className="py-5 px-6">À vérifier au cas par cas</td>
                    <td className="py-5 px-6">Contraintes fréquentes</td>
                  </tr>
                  <tr className="border-b border-surface-variant">
                    <th scope="row" className="py-5 px-6 text-primary font-semibold text-left">
                      Budget relatif
                    </th>
                    <td className="py-5 px-6">Variable selon l'essence et la toiture</td>
                    <td className="py-5 px-6">Intermédiaire</td>
                    <td className="py-5 px-6">Le plus élevé, hors panneaux</td>
                  </tr>
                  <tr>
                    <th scope="row" className="py-5 px-6 text-primary font-semibold text-left">
                      S'accorde à
                    </th>
                    <td className="py-5 px-6">Maison en pierre, bâti ancien</td>
                    <td className="py-5 px-6">Maison contemporaine, extension</td>
                    <td className="py-5 px-6">Projet de rénovation énergétique</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-on-surface-variant text-body-md mt-6 italic">
              Comparatif indicatif : le budget dépend surtout de la surface abritée, de la nature du sol et des
              équipements retenus.
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
                Envoyez-nous une photo de votre terrain : nous vous disons laquelle a du sens chez vous, et pourquoi.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="#devis-bas"
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

        {/* Notre approche, placée ici, elle éclaire le parcours de chantier qui suit */}
        <section className="py-section-padding bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Notre approche
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                Un abri qui devient un élément d'architecture
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                <strong className="text-primary font-semibold">
                  Un carport bois ou aluminium protège votre véhicule de la pluie, du gel et des UV sans les
                  contraintes de fondation d'un garage : toiture plate, bac acier, tuile ou carport solaire, sur
                  mesure à Libourne et en Gironde.
                </strong>{' '}
                Sans l'enfermement d'un garage, bien dessiné, il ne s'ajoute pas à la maison : il la prolonge.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Installés aux Billaux, à quelques minutes de{' '}
                <strong className="text-primary font-semibold">Libourne</strong>, nous réalisons des carports sur
                mesure dans toute la <strong className="text-primary font-semibold">Gironde</strong>. Chaque projet
                part du terrain : orientation, pente, accès, style de la façade, règles du PLU de votre commune, pas
                d'un catalogue.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nous dessinons, nous fabriquons, nous posons,{' '}
                <a
                  href="/#methode"
                  className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
                >
                  un seul interlocuteur
                </a>,
                de l'étude à la dernière vis. Entreprise{' '}
                <strong className="text-primary font-semibold">Qualifiée Qualibat</strong>, nous couvrons chaque
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
                De votre appel à la première voiture garée dessous
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
                  <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4" aria-hidden="true">{e.icone}</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{e.titre}</h3>
                  <p className="text-on-surface-variant text-body-md">{e.texte}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Galerie */}
        <section className="py-section-padding bg-surface-container-low" id="realisations-carports">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
              Nos chantiers
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-12">
              Carports réalisés à Libourne et en Gironde
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-10 max-w-3xl">
              Le carport pour trois voitures sur terrain en pente de Capian, et les autres chantiers du secteur, sont détaillés sur notre page <a href="/pergola-carport-entre-deux-mers" className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors">pergolas et carports en Entre-deux-Mers</a>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {GALERIE.map((p) => (
                <figure key={p.src} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <img
                    width="1200"
                    height="646"
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
              </a>,
              nos{' '}
              <a
                href="/pergolas"
                className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
              >
                pergolas
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

        {/* Zone d'intervention : SEO local */}
        <section className="py-section-padding bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Zone d'intervention
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                Votre carport à Libourne et dans tout le Libournais
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Notre atelier est basé au{' '}
                <strong className="text-primary font-semibold">1 Aux Pradasses, 33500 Les Billaux</strong>, à cinq
                minutes de Libourne. Cette proximité change tout : nous venons relever votre terrain, nous suivons le
                chantier au quotidien, et nous restons joignables après la pose.
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
                    <span className="material-symbols-outlined text-secondary-dark text-[18px]" aria-hidden="true">location_on</span>
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
              Ce qu'on nous demande avant de construire un carport
            </h2>

            <div className="space-y-4">
              <details
                className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow"
                open
              >
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Faut-il une autorisation d'urbanisme pour un carport ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform" aria-hidden="true">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Le plus souvent, oui : un carport crée de l'emprise au sol. Selon la surface, il relève d'une{' '}
                  <strong className="text-primary font-semibold">déclaration préalable de travaux</strong> ou d'un{' '}
                  <strong className="text-primary font-semibold">permis de construire</strong>. Les seuils varient
                  d'une commune à l'autre, dépendent du PLU et évoluent dans le temps ; un secteur protégé change
                  encore la donne. Nous les vérifions sur pièces et montons le dossier pour vous. Nous détaillons le
                  sujet dans{' '}
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
                    Carport bois ou carport aluminium : lequel choisir ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform" aria-hidden="true">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Le <strong className="text-primary font-semibold">bois</strong> apporte chaleur et matière,
                  s'accorde au bâti girondin ancien et demande un entretien périodique. L'
                  <strong className="text-primary font-semibold">aluminium thermolaqué</strong> offre des lignes
                  tendues, de grandes portées avec peu de poteaux et aucun entretien. Le bois se décline en trois
                  toitures, l'aluminium se pose plus vite et sert aussi d'abri de terrasse. Le choix dépend de votre
                  façade, de la place disponible et du budget.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Quel bois choisir pour un carport en Gironde ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform" aria-hidden="true">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Douglas, mélèze, red cedar ou chêne, choisis selon l'exposition de la pièce et sa fonction dans la
                  structure. Sous le climat océanique girondin, ce qui compte autant que l'essence, c'est la
                  conception : ventilation de la structure, pieds de poteaux décollés du sol, évacuation d'eau
                  maîtrisée. Nous arrêtons l'essence avec vous, au vu de votre maison. Notre{' '}
                  <a
                    href="/blog/carport-bois-guide"
                    className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
                  >
                    guide du carport bois
                  </a>{' '}
                  détaille chaque essence et chaque toiture.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Toiture plate, bac acier ou tuile : laquelle choisir ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform" aria-hidden="true">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  La <strong className="text-primary font-semibold">toiture plate</strong> donne une ligne
                  contemporaine et peut être végétalisée. Le{' '}
                  <strong className="text-primary font-semibold">bac acier</strong> est léger, économique et rapide
                  à poser. La <strong className="text-primary font-semibold">tuile</strong> assure la continuité
                  avec la couverture de la maison, souvent exigée en secteur patrimonial, mais impose une charpente
                  plus dimensionnée. Le choix se fait au regard de votre maison, de votre budget et du PLU.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Adossé ou autoporté : quelle implantation choisir ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform" aria-hidden="true">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Le carport <strong className="text-primary font-semibold">adossé</strong> prend appui sur la façade
                  ou sur le mur du garage : moins de poteaux, une ligne plus nette, et un cheminement à l'abri
                  jusqu'à la porte d'entrée. L'<strong className="text-primary font-semibold">autoporté</strong>{' '}
                  repose sur ses propres poteaux et se pose n'importe où sur le terrain, sans dépendre de l'état de
                  la façade ni du débord de toiture. Nous tranchons au relevé, après avoir regardé l'accès, la pente
                  et le sens de manœuvre.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Quelles dimensions prévoir pour une ou deux voitures ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform" aria-hidden="true">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  En pratique, on compte de l'ordre de{' '}
                  <strong className="text-primary font-semibold">3 mètres de large sur 5 mètres de long</strong> pour
                  une voiture, et <strong className="text-primary font-semibold">5,5 à 6 mètres de large</strong>{' '}
                  pour deux véhicules côte à côte. Ce ne sont que des ordres de grandeur : la bonne dimension dépend
                  de votre véhicule, de l'ouverture des portières, du passage à laisser sur les côtés et de la
                  manœuvre d'accès. Nous relevons le terrain avant de figer les cotes.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Qu'est-ce qu'un carport solaire ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform" aria-hidden="true">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Un carport dont la toiture accueille des panneaux photovoltaïques. Point essentiel : chez notre
                  partenaire, l'étanchéité est assurée par la toiture elle-même,{' '}
                  <strong className="text-primary font-semibold">pas par les panneaux solaires</strong>. Vous restez
                  donc libre du nombre de modules installés. Les panneaux photovoltaïques ne sont pas fournis avec la
                  structure : leur dimensionnement et leur raccordement se font avec votre installateur électricien.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Peut-on installer une borne de recharge sous le carport ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform" aria-hidden="true">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Oui, à condition de le prévoir à la conception. Nous intégrons{' '}
                  <strong className="text-primary font-semibold">l'attente électrique</strong> dans la structure (
                  fourreau, passage de câble, emplacement du support) pour que la borne soit posée proprement, sans
                  goulotte apparente. La fourniture, le raccordement et la mise en service de la borne relèvent de
                  votre électricien.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Combien coûte un carport sur mesure ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform" aria-hidden="true">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Le prix dépend de la <strong className="text-primary font-semibold">surface</strong> abritée, du{' '}
                  <strong className="text-primary font-semibold">matériau</strong> de la structure, de la{' '}
                  <strong className="text-primary font-semibold">toiture</strong> retenue (bac acier, membrane,
                  tuile, photovoltaïque), des <strong className="text-primary font-semibold">équipements</strong>{' '}
                  ajoutés et de la nature du <strong className="text-primary font-semibold">sol</strong>, car un
                  carport se fonde. Nous ne pratiquons pas le tarif au mètre carré affiché : nous relevons votre
                  terrain et remettons un devis détaillé, poste par poste.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Êtes-vous qualifiés et assurés ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform" aria-hidden="true">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Oui. L'Esprit Bois est une entreprise{' '}
                  <strong className="text-primary font-semibold">Qualifiée Qualibat</strong>, la qualification de
                  référence du bâtiment, et chacun de nos ouvrages est couvert par notre{' '}
                  <strong className="text-primary font-semibold">garantie décennale</strong>. Concrètement : la
                  structure que nous posons est garantie dix ans à compter de la réception du chantier.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Intervenez-vous en dehors de Libourne ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform" aria-hidden="true">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Oui. Basés aux Billaux, nous couvrons tout le Libournais (Saint-Émilion, Coutras, Fronsac, Vayres,
                  Izon, Saint-Denis-de-Pile, Castillon-la-Bataille, Guîtres, Branne) et plus largement la Gironde,
                  jusqu'à la métropole bordelaise.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="devis-bas" className="py-section-padding bg-primary text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">Parlons-en</span>
            <h2 className="font-headline-md text-headline-md mt-4 mb-6">
              Un projet de carport à Libourne ou en Gironde ?
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Décrivez-nous votre terrain, votre maison et vos usages : nous revenons vers vous sous 48h avec une
              première estimation.
            </p>
            <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-xl text-left">
              <DevisForm instanceId="bas" projet={PROJET} pageLabel={PAGE_LABEL} />
            </div>
            <p className="font-body-md text-body-md text-on-primary-container mt-6">
              Ou appelez directement le{' '}
              <a href="tel:+33557406580" className="underline underline-offset-4">
                05 57 40 65 80
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
      <DevisStickyBar />
      <DevisDesktopPopup pageLabel={PAGE_LABEL} />
    </>
  );
}
