// =========================================================================
// L'ESPRIT BOIS — articles de blog.
// Ajoute un objet à ce tableau pour publier un nouvel article sur /blog.
// =========================================================================

export type Article = {
  slug: string;
  titre: string;
  extrait: string;
  date: string;
  categorie: string;
  image: string;
};

export const articles: Article[] = [
  {
    slug: 'pergola-bois-ou-bioclimatique',
    titre: 'Pergola bois ou pergola bioclimatique : comment choisir ?',
    extrait:
      "Pergola en bois chaleureuse et sur mesure, ou bioclimatique aluminium à lames orientables motorisées ? Comparatif honnête, cas d'usage, budget 2025-2026 et entretien pour trancher en Gironde.",
    date: '2026-07-09',
    categorie: 'Guide · Pergolas',
    image: '/images/pergola-bioclimatique-lisudestemps.jpg',
  },
  {
    slug: 'carport-bois-guide',
    titre: "Carport en bois : bien le choisir et l'intégrer à sa maison",
    extrait:
      "Carport ou garage, adossé ou autoportant, essences, toiture et budget : le guide pour abriter votre voiture sans construire un garage, avec autorisation d'urbanisme et entretien pour un carport bois en Gironde.",
    date: '2026-07-09',
    categorie: 'Guide · Carports bois',
    image: '/images/source-adefrance/Carport-bois-Libourne-1.webp',
  },
  {
    slug: 'quel-bois-pour-terrasse-exterieure',
    titre: 'Quel bois choisir pour une terrasse extérieure ? Le guide par essence',
    extrait:
      "Douglas, mélèze, red cedar, chêne ou bois exotique : comparatif, classe d'emploi, prix et conseils de pose pour une terrasse en Gironde.",
    date: '2026-07-09',
    categorie: 'Guide · Terrasses bois',
    image: '/images/terrasse-bois-plots-gironde-1.webp',
  },
];
