// =========================================================================
// L'ESPRIT BOIS — contenu du site (source unique de vérité)
// Textes & photos repris du site historique a-defrance.fr (Les Billaux, Gironde).
// Modifie ce fichier pour mettre à jour textes, coordonnées et réalisations.
// =========================================================================

export const site = {
  nom: "L'Esprit Bois",
  baseline: "Créateur d'espaces extérieurs",
  slogan: "Le bois qui prolonge la maison vers l'extérieur.",
  description:
    "L'Esprit Bois conçoit et réalise terrasses, pergolas, carports, bardages et constructions bois sur mesure à Libourne et en Gironde. Bois et aluminium, de l'étude à la pose — des espaces extérieurs durables, pensés pour durer.",
  url: 'https://lespritbois.fr',
};

// Coordonnées — reprises du site actuel, à ajuster si besoin.
export const contact = {
  telephone: '05 57 40 65 80',
  telephoneHref: 'tel:+33557406580',
  email: 'contact@lespritbois.fr',
  emailActuel: 'adefrance033@gmail.com',
  adresse: '1 Aux Pradasses',
  codePostal: '33500',
  ville: 'Les Billaux',
  zone: 'Libourne · Gironde · Nouvelle-Aquitaine',
  horaires: 'Lundi – Vendredi · 8h – 17h',
  reseaux: {
    facebook: '#',
    instagram: '#',
  },
};

const IMG = '/images/source-adefrance';

export type Metier = {
  slug: string;
  nom: string;
  categorie: string;
  accroche: string;
  intro: string;
  description: string;
  points: string[];
  image: string;
};

export const metiers: Metier[] = [
  {
    slug: 'terrasses',
    nom: 'Terrasses',
    categorie: 'Sol & Plein Air',
    accroche: 'Le prolongement naturel de votre salon, à ciel ouvert.',
    intro: 'Platelage bois posé pour durer, au plus près de votre maison.',
    description:
      "Une terrasse bien pensée efface la frontière entre l'intérieur et le jardin. Nous étudions l'orientation, l'écoulement de l'eau et le sens des lames pour créer un espace de vie extérieur qui vieillit bien et se vit toute l'année.",
    points: [
      'Platelage bois sur structure ventilée (plots ou lambourdes)',
      'Essences sélectionnées pour leur résistance et leur longévité',
      'Fixations soignées et finitions durables',
      "Étude de la pente et de l'évacuation des eaux",
    ],
    image: `${IMG}/Pergolas-bois-Libourne.webp`,
  },
  {
    slug: 'pergolas',
    nom: 'Pergolas',
    categorie: 'Lumière & Ombre',
    accroche: 'Créez votre nouvel espace de vie extérieur.',
    intro: 'Bois ou aluminium, classiques ou bioclimatiques à lames orientables.',
    description:
      "Véritable extension de la maison, la pergola allie esthétisme, durabilité et fonctionnalité pour transformer votre extérieur en lieu de détente. En bois massif pour la chaleur, ou en aluminium bioclimatique pour maîtriser l'ensoleillement — nous concevons et posons l'ouvrage, du poteau à la lame.",
    points: [
      'Pergola bois massif : chaleur et authenticité naturelle',
      'Pergola aluminium bioclimatique à lames orientables',
      'Adossée à la maison ou autoportée, sur mesure',
      "Solutions haut de gamme via notre partenaire Li-Su des Temps",
    ],
    image: `${IMG}/Pergolas-aluminium-Libourne-1.webp`,
  },
  {
    slug: 'constructions-bois',
    nom: 'Constructions bois',
    categorie: 'Espace & Extension',
    accroche: "L'ossature bois, de l'extension à la maison en A.",
    intro: 'Extensions, surélévations, pool houses et maisons en A.',
    description:
      "Le bois construit vite, sain et durable. Extension pour agrandir, surélévation pour gagner sans emprise au sol, pool house, abri ou maison en A : l'ossature bois s'adapte à tous les styles. Nous menons le projet de l'étude au permis de construire jusqu'à la pose, dans les règles de l'art.",
    points: [
      'Extensions et surélévations en ossature bois',
      'Pool houses, abris de jardin et maisons en A',
      'Isolation fibre de bois, performance RE2020',
      'Permis de construire et coordination de chantier',
    ],
    image: `${IMG}/aggrandissement-accueil.webp`,
  },
  {
    slug: 'carports',
    nom: 'Carports',
    categorie: 'Structure & Protection',
    accroche: "L'élégance durable pour votre véhicule.",
    intro: 'Bois ou aluminium, simple, double ou adossé.',
    description:
      "Un carport protège votre véhicule tout en valorisant votre extérieur. Chaleur naturelle du bois ou technicité de l'aluminium, toiture plate ou en pente : l'abri devient un élément d'architecture qui s'intègre à votre maison.",
    points: [
      'Structures bois sélectionné ou aluminium haut de gamme',
      'Toiture plate ou en pente, couverture bac acier ou tuiles',
      'Adossé à la façade ou entièrement indépendant',
      'Conception et installation sur mesure',
    ],
    image: `${IMG}/Carport-bois-Libourne-1.webp`,
  },
  {
    slug: 'bardages',
    nom: 'Bardages',
    categorie: 'Peau & Façade',
    accroche: 'Habiller la façade, donner du caractère au bâti.',
    intro: 'Bois, métallique ou fibrociment — la finition qui signe la maison.',
    description:
      "Le bardage protège et signe l'identité d'une maison. Sur une extension bois ou une façade à rénover, nous posons des peaux de bois en claire-voie ou à recouvrement, ainsi que des solutions métalliques ou fibrociment, sur ossature ventilée.",
    points: [
      'Bardage bois : douglas, mélèze, red cedar',
      'Pose claire-voie, à recouvrement ou emboîté',
      'Alternatives bardage métallique ou fibrociment',
      'Ossature ventilée et pare-pluie',
    ],
    image: `${IMG}/IMG-20250129-WA0077.jpg`,
  },
];

export type Realisation = {
  titre: string;
  metier: string;
  lieu: string;
  image: string;
  format: 'large' | 'haut' | 'standard';
};

// Réalisations — photos de chantiers réels (a-defrance.fr).
export const realisations: Realisation[] = [
  { titre: 'Carport aluminium contemporain', metier: 'Carports', lieu: 'Gironde', image: `${IMG}/carport-accueil.webp`, format: 'large' },
  { titre: 'Extension bardée bois sur maison en pierre', metier: 'Constructions bois', lieu: 'Gironde', image: `${IMG}/WhatsApp-Image-2025-05-02-a-13.59.24_f4a63f6d.jpg`, format: 'haut' },
  { titre: 'Pool house & terrasse bois', metier: 'Constructions bois', lieu: 'Libourne', image: `${IMG}/construction-pool-house-bois-libourne.webp`, format: 'standard' },
  { titre: 'Maison en A sur mesure', metier: 'Constructions bois', lieu: 'Les Billaux', image: `${IMG}/mais-en-a-accueil.webp`, format: 'standard' },
  { titre: 'Bardage red cedar claire-voie', metier: 'Bardages', lieu: 'Gironde', image: `${IMG}/IMG-20250129-WA0077.jpg`, format: 'haut' },
  { titre: 'Pergola aluminium bioclimatique', metier: 'Pergolas', lieu: 'Libourne', image: `${IMG}/Pergolas-aluminium-Libourne-1.webp`, format: 'large' },
];

// Section « L'excellence du matériau » (home)
export const matiere = {
  eyebrow: 'L’excellence du matériau',
  titre: 'La noblesse du bois,\nl’exigence du design.',
  texte:
    "Nous choisissons chaque essence — douglas, mélèze, red cedar, chêne — pour sa durabilité naturelle et sa beauté. Ossature bois, isolation en fibre de bois et normes RE2020 : chaque projet est un dialogue entre l'ingénierie moderne et la matière vivante.",
  statValeur: '10 ans',
  statLabel: 'd’expertise de la construction bois',
  atouts: [
    {
      titre: 'Précision',
      texte: 'Débit et assemblages étudiés en atelier, plans d’exécution soignés, pour des ouvrages qui tombent juste.',
    },
    {
      titre: 'Durabilité',
      texte: 'Essences sélectionnées, ossatures ventilées, isolation performante : conçues pour traverser les décennies.',
    },
  ],
};

// Témoignage — à remplacer par un vrai avis client à la mise en ligne.
export const temoignage = {
  citation:
    "Une équipe qui ne se contente pas de construire : elle conçoit un lieu de vie. Un seul interlocuteur, du premier croquis à la dernière lame, et un vrai souci du détail.",
  auteur: 'Client — Libourne',
};

export const demarche = [
  {
    titre: 'Écoute & étude',
    texte: "On comprend vos besoins, vos envies et vos contraintes de budget. Chaque projet commence par le terrain et son orientation.",
  },
  {
    titre: 'Conception & permis',
    texte: 'Plans, choix des essences, devis détaillé, et si besoin dossier de permis de construire monté et suivi par nos soins.',
  },
  {
    titre: 'Fabrication & pose',
    texte: "Préparation en atelier ou montage sur site, ossature bois et aluminium. Un chantier propre mené par nos équipes.",
  },
  {
    titre: 'Suivi',
    texte: 'Finitions vérifiées et équipe disponible après la livraison pour tout ajustement. On répond de ce qu’on pose.',
  },
];

export const engagements = [
  {
    icone: 'sur-mesure',
    titre: 'Tout sur mesure',
    texte: "Aucun projet standard. On dessine à partir de votre lieu, vos usages et votre budget.",
  },
  {
    icone: 'bois',
    titre: 'Des matériaux durables',
    texte: 'Essences sélectionnées et sources responsables, pour des ouvrages solides et pérennes.',
  },
  {
    icone: 'main',
    titre: 'Un seul interlocuteur',
    texte: "De l'étude à la pose, un accompagnement de A à Z, sans intermédiaire. Communication directe.",
  },
  {
    icone: 'garantie',
    titre: 'Transparence & délais',
    texte: 'Transparence des coûts, respect des délais annoncés et finitions vérifiées.',
  },
];

export const chiffres = [
  { valeur: '10', unite: 'ans', label: "d'expérience du bois" },
  { valeur: '100', unite: '%', label: 'sur mesure' },
  { valeur: '33', unite: '', label: 'Gironde & alentours' },
  { valeur: '0', unite: '', label: 'sous-traitance' },
];
