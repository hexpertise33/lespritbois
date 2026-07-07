// =========================================================================
// L'ESPRIT BOIS — contenu du site (source unique de vérité)
// Modifie ce fichier pour mettre à jour textes, coordonnées et réalisations.
// =========================================================================

export const site = {
  nom: "L'Esprit Bois",
  baseline: "Créateur d'espaces extérieurs",
  slogan: "Le bois qui prolonge la maison vers l'extérieur.",
  description:
    "L'Esprit Bois conçoit et réalise terrasses, pergolas, carports, bardages et constructions bois en Gironde. Des espaces extérieurs sur mesure, durables et dessinés pour durer.",
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

export type Metier = {
  slug: string;
  nom: string;
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
    accroche: 'Le prolongement naturel de votre salon, à ciel ouvert.',
    intro: 'Bois exotique, résineux traité ou composite — posées pour durer.',
    description:
      "Une terrasse bien pensée efface la frontière entre l'intérieur et le jardin. Nous étudions l'orientation, l'écoulement de l'eau et le sens des lames pour créer un espace qui vieillit bien et se vit toute l'année.",
    points: [
      'Bois exotique (ipé, cumaru), résineux classe 4 ou composite',
      'Structure ventilée sur plots ou lambourdes',
      'Fixations invisibles et finitions soignées',
      'Étude de la pente et de l’évacuation des eaux',
    ],
    image: '/images/terrasses.svg',
  },
  {
    slug: 'pergolas',
    nom: 'Pergolas',
    accroche: 'Maîtriser la lumière, prolonger les belles soirées.',
    intro: 'Bois ou aluminium, bioclimatiques ou à lames fixes.',
    description:
      "La pergola dessine l'ombre. Adossée à la maison ou autoportée, elle structure la terrasse et filtre le soleil. Nous concevons des ouvrages à la géométrie juste, du poteau à la lame.",
    points: [
      'Pergolas bois massif ou aluminium',
      'Versions bioclimatiques à lames orientables',
      'Adossée, autoportée ou sur mesure',
      'Intégration éclairage, stores et brise-soleil',
    ],
    image: '/images/pergolas.svg',
  },
  {
    slug: 'constructions-bois',
    nom: 'Constructions bois',
    accroche: "L'ossature bois, du studio de jardin à l'extension.",
    intro: 'Ossature bois, extensions, abris et pool houses.',
    description:
      "Le bois construit vite, sain et durable. Extension de vie, studio indépendant, pool house ou abri : nous menons le projet de l'étude à la pose, dans les règles de l'art.",
    points: [
      'Extensions et surélévations en ossature bois',
      'Studios de jardin et bureaux indépendants',
      'Pool houses et abris techniques',
      'Isolation performante et bardage assorti',
    ],
    image: '/images/constructions-bois.svg',
  },
  {
    slug: 'carports',
    nom: 'Carports',
    accroche: "Abriter la voiture avec l'élégance d'une architecture.",
    intro: 'Simple, double ou adossé — bois et aluminium.',
    description:
      "Un carport protège sans enfermer. Ligne épurée, toiture plate ou monopente, intégration parfaite à la maison : l'abri devient un élément d'architecture à part entière.",
    points: [
      'Simple, double ou adossé à la façade',
      'Toiture plate, monopente ou végétalisée',
      'Structure bois lamellé-collé ou aluminium',
      'Option bornes de recharge et rangement',
    ],
    image: '/images/carports.svg',
  },
  {
    slug: 'bardages',
    nom: 'Bardages',
    accroche: 'Habiller la façade, donner du caractère au bâti.',
    intro: 'Claire-voie, à recouvrement, bois brûlé ou composite.',
    description:
      "Le bardage protège et signe l'identité d'une maison. Pose claire-voie, lames verticales ou horizontales, bois pré-grisé ou brûlé : la peau de bois qui change tout.",
    points: [
      'Claire-voie, à recouvrement ou emboîté',
      'Douglas, mélèze, red cedar ou bois brûlé (Yakisugi)',
      'Bardage composite sans entretien',
      'Ossature ventilée et pare-pluie',
    ],
    image: '/images/bardages.svg',
  },
];

export type Realisation = {
  titre: string;
  metier: string;
  lieu: string;
  image: string;
  format: 'large' | 'haut' | 'standard';
};

// Réalisations — à remplacer par de vraies photos (public/images/…).
export const realisations: Realisation[] = [
  { titre: 'Terrasse en ipé & garde-corps', metier: 'Terrasses', lieu: 'Libourne', image: '/images/real-1.svg', format: 'large' },
  { titre: 'Pergola bioclimatique adossée', metier: 'Pergolas', lieu: 'Saint-Émilion', image: '/images/real-2.svg', format: 'haut' },
  { titre: 'Bardage claire-voie mélèze', metier: 'Bardages', lieu: 'Les Billaux', image: '/images/real-3.svg', format: 'standard' },
  { titre: 'Extension ossature bois', metier: 'Constructions bois', lieu: 'Pomerol', image: '/images/real-4.svg', format: 'standard' },
  { titre: 'Carport double toit plat', metier: 'Carports', lieu: 'Fronsac', image: '/images/real-5.svg', format: 'haut' },
  { titre: 'Terrasse & pergola sur mesure', metier: 'Ensemble', lieu: 'Coutras', image: '/images/real-6.svg', format: 'large' },
];

export const demarche = [
  {
    titre: 'Écoute & étude',
    texte: "On visite le lieu, on comprend l'usage, l'orientation et vos envies. Chaque projet commence par le terrain.",
  },
  {
    titre: 'Conception & devis',
    texte: 'Plans, choix des essences, calepinage et devis détaillé. Vous savez exactement ce qui sera construit.',
  },
  {
    titre: 'Fabrication',
    texte: "Débit et préparation en atelier, sélection des bois. Le soin de fabrication fait la longévité de l'ouvrage.",
  },
  {
    titre: 'Pose & finitions',
    texte: 'Chantier propre, pose maîtrisée, finitions vérifiées. On livre un espace prêt à vivre.',
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
    titre: 'Des bois qui durent',
    texte: 'Essences sélectionnées, classées et traitées pour résister au temps et aux saisons.',
  },
  {
    icone: 'main',
    titre: 'Un seul interlocuteur',
    texte: "De l'étude à la pose, c'est le même artisan. Pas de sous-traitance en cascade.",
  },
  {
    icone: 'garantie',
    titre: 'Un travail garanti',
    texte: 'Chantier propre, finitions vérifiées et garanties couvertes. On répond de ce qu’on pose.',
  },
];

export const chiffres = [
  { valeur: '15', unite: 'ans', label: "d'expérience du bois" },
  { valeur: '100', unite: '%', label: 'sur mesure' },
  { valeur: '33', unite: '', label: 'Gironde & alentours' },
  { valeur: '5', unite: 'métiers', label: 'du sol au toit' },
];
