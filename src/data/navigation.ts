// =========================================================================
// L'ESPRIT BOIS — source unique de vérité : navigation, coordonnées, marque.
// Modifier ICI met à jour les 7 pages (nav, footer, données structurées).
// =========================================================================

export const SITE = {
  nom: "L'Esprit Bois",
  baseline: "Créateur d'espaces extérieurs",
  url: 'https://lespritbois.fr',
} as const;

export const CONTACT = {
  /** Affiché à l'écran, format français lisible. */
  telAffiche: '05 57 40 65 80',
  /** Lien tel: au format E.164 (indicatif +33, zéro initial supprimé). */
  telHref: 'tel:+33557406580',
  /** Même valeur pour schema.org. */
  telE164: '+33557406580',
  email: 'contact@lespritbois.fr',
  rue: '1 Aux Pradasses',
  codePostal: '33500',
  ville: 'Les Billaux',
  region: 'Gironde',
  adresseComplete: '1 Aux Pradasses, 33500 Les Billaux',
  horaires: 'Lun – Ven · 8h – 17h',
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
 *  Contrainte mesurée : la barre offre 1152 px, dont 233 px pour le lockup
 *  (logo + wordmark) et 241 px pour le bouton devis. Il reste ~646 px pour les
 *  onglets. Le libellé « Aménagement extérieur » fait 177 px : à sept onglets,
 *  le bloc atteignait 779 px et poussait le bouton hors de la barre.
 *  D'où deux décisions : le libellé est raccourci en « Aménagements » (114 px),
 *  et « À propos » ne figure plus ici — il reste accessible depuis le footer.
 */
export const ONGLETS: Onglet[] = [
  {
    cle: 'amenagement-exterieur',
    titre: 'Aménagements',
    url: '/amenagement-exterieur',
    titreLong: 'Aménagement extérieur',
  },
  { cle: 'carports', titre: 'Carports', url: '/carports' },
  { cle: 'pergolas', titre: 'Pergolas', url: '/pergolas' },
  { cle: 'extensions', titre: 'Extensions', url: '/extensions' },
  { cle: 'constructions-bois', titre: 'Constructions bois', url: '/constructions-bois' },
  { cle: 'realisations', titre: 'Réalisations', url: '/realisations' },
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
