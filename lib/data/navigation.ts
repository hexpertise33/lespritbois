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
 *  Les onglets apparaissent à partir de 1024 px (`lg:` dans SiteNav) ; en dessous
 *  ils passent dans le menu burger. Le cas le plus contraint est 1024 px, où la
 *  barre offre 881 px utiles : le wordmark « L'Esprit Bois » y est masqué (logo
 *  mark seul, 98 px) et le bouton devis est raccourci en « Devis gratuit »
 *  (129 px), ce qui laisse 654 px aux onglets, qui en occupent 543. Marge : 111 px.
 *  Le libellé « Aménagement extérieur » (177 px) est volontairement abrégé en
 *  « Aménagements » (114 px). Tout onglet ajouté ou rallongé mange cette marge :
 *  revérifier à 1024 px avant d'y toucher.
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
