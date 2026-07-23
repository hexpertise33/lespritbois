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
    slug: 'extension-ossature-bois-prix-m2',
    titre: 'Extension en ossature bois : prix au m², délais et avantages en 2026',
    extrait:
      "Comptez 1 700 à 2 500 €/m² pour une extension ossature bois sur mesure en 2026, selon finition et toiture. Légèreté adaptée aux sols argileux du Libournais, chantier court, isolation et bilan carbone RE2020 : le guide pour agrandir plutôt que déménager, en Gironde.",
    date: '2026-07-23',
    categorie: 'Guide · Construction bois',
    image: '/images/source-adefrance/WhatsApp-Image-2025-05-02-a-13.59.24_f4a63f6d-opt.webp',
  },
  {
    slug: 'cloture-brise-vue-bois-guide',
    titre:
      "Clôture et brise-vue en bois : quelle essence, quelle hauteur autorisée et quel budget en 2026 ?",
    extrait:
      "Hauteur plafonnée par le PLU (souvent 1,80–2,00 m), Code civil à défaut et déclaration préalable souvent requise : le point réglementaire pour clôturer sans se tromper. Essences durables, styles claire-voie ou panneau plein, pose et budget au mètre linéaire, par un artisan en Gironde.",
    date: '2026-07-21',
    categorie: 'Guide · Clôtures bois',
    image: '/images/blog/cloture-brise-vue-bois-guide/cloture-bois-lames-horizontales-jardin-gironde.webp',
  },
  {
    slug: 'proteger-terrasse-bois-canicule-entretien-ete',
    titre: "Protéger sa terrasse en bois de la canicule : le guide d'entretien d'été",
    extrait:
      "Ombre, saturateur et nettoyage doux : les trois leviers pour faire traverser l'été à une terrasse en bois, et la règle qu'on enfreint le plus souvent, ne jamais saturer un bois brûlant. Grisaillement, fissures, échauffement et gestes à proscrire, par un artisan en Gironde.",
    date: '2026-07-20',
    categorie: 'Guide · Entretien terrasse',
    image: '/images/terrasse-bois-plots-gironde-2.webp',
  },
  {
    slug: 'pool-house-bois-guide',
    titre: 'Pool-house en bois : réglementation, usages et budget 2026',
    extrait:
      "Moins de 5 m² sans formalité, déclaration préalable jusqu'à 20 m², permis au-delà : le point sur la réglementation 2026 du pool-house. Usages réels, implantation par rapport au bassin, bois ou aluminium et budget honnête, pour un projet en Gironde.",
    date: '2026-07-16',
    categorie: 'Guide · Pool-house',
    image: '/images/pool-house-bois-terrasse-piscine-libourne.webp',
  },
  {
    slug: 'autorisation-urbanisme-abri-carport-pergola-2026',
    titre: "Abri de jardin, carport, pergola : quelle autorisation d'urbanisme en 2026 ?",
    extrait:
      "Emprise au sol, seuils de 5, 20 et 40 m², secteurs protégés et nouveau CERFA n°16702 : le guide 2026 des formalités d'urbanisme pour abriter un véhicule ou aménager son jardin, en Gironde comme ailleurs.",
    date: '2026-07-11',
    categorie: 'Guide · Urbanisme',
    image: '/images/source-adefrance/Carport-bois-Libourne-3.webp',
  },
  {
    slug: 'pergola-bois-ou-bioclimatique',
    titre: 'Pergola bois ou pergola bioclimatique : comment choisir ?',
    extrait:
      "Pergola en bois chaleureuse et sur mesure, ou bioclimatique aluminium à lames orientables motorisées ? Comparatif honnête, cas d'usage, budget 2025-2026 et entretien pour trancher en Gironde.",
    date: '2026-07-09',
    categorie: 'Guide · Pergolas',
    image: '/images/pergola-bioclimatique-lisudestemps.webp',
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
