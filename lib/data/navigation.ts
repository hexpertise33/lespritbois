// =========================================================================
// L'ESPRIT BOIS — source unique de vérité : navigation, coordonnées, marque.
// Modifier ICI met à jour les 7 pages (nav, footer, données structurées).
// =========================================================================

export const SITE = {
  nom: "L'Esprit Bois",
  baseline: "Créateur d'espaces extérieurs",
  url: 'https://lesprit-bois.fr',
} as const;

export const CONTACT = {
  /** Affiché à l'écran, format français lisible. */
  telAffiche: '05 57 40 65 80',
  /** Lien tel: au format E.164 (indicatif +33, zéro initial supprimé). */
  telHref: 'tel:+33557406580',
  /** Même valeur pour schema.org. */
  telE164: '+33557406580',
  email: 'lespritbois33@gmail.com',
  rue: '1 Aux Pradasses',
  codePostal: '33500',
  ville: 'Les Billaux',
  region: 'Gironde',
  adresseComplete: '1 Aux Pradasses, 33500 Les Billaux',
  horaires: 'Lun à Ven · 8h à 17h',
} as const;

/** Réseaux sociaux officiels. Servent au footer ET au `sameAs` de schema.org,
 *  qui aide Google à relier le site à la page Facebook (Knowledge Graph). */
export const RESEAUX = {
  facebook: 'https://www.facebook.com/Eprisbois33',
} as const;

/** Profils à déclarer dans les données structurées. */
export const SAME_AS: string[] = Object.values(RESEAUX);

export type Onglet = {
  cle: string;
  titre: string;
  url: string;
  /** Intitulé complet, quand `titre` est abrégé faute de place dans la barre. */
  titreLong?: string;
};

/** Onglets de la barre de navigation, dans l'ordre d'affichage.
 *
 *  Contrainte mesurée à 1280 px (seuil d'apparition des onglets) : la barre
 *  offre 1152 px utiles, dont 265 px pour le lockup (logo + wordmark) et 241 px
 *  pour le bouton devis. Il reste ~646 px pour les onglets, qui en occupent 619 :
 *  la marge n'est plus que de 27 px. Le libellé « Aménagement extérieur » fait
 *  177 px et poussait le bouton hors de la barre ; il est raccourci en
 *  « Aménagements » (114 px). Tout onglet ajouté ou rallongé ici déborde —
 *  revérifier à 1280 px avant d'y toucher.
 */
export const ONGLETS: Onglet[] = [
  { cle: 'carports', titre: 'Carports', url: '/carports' },
  { cle: 'pergolas', titre: 'Pergolas', url: '/pergolas' },
  {
    cle: 'amenagement-exterieur',
    titre: 'Aménagements',
    url: '/amenagement-exterieur',
    titreLong: 'Aménagement extérieur',
  },
  { cle: 'constructions-bois', titre: 'Constructions bois', url: '/constructions-bois' },
  { cle: 'realisations', titre: 'Réalisations', url: '/realisations' },
  { cle: 'blog', titre: 'Blog', url: '/blog' },
];

/** Bloc « provider » réutilisé dans toutes les données structurées. */
export const ENTREPRISE_JSONLD = {
  '@type': 'GeneralContractor',
  name: SITE.nom,
  telephone: CONTACT.telE164,
  email: CONTACT.email,
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'certification',
    name: 'Qualibat',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT.rue,
    postalCode: CONTACT.codePostal,
    addressLocality: CONTACT.ville,
    addressRegion: CONTACT.region,
    addressCountry: 'FR',
  },
} as const;
