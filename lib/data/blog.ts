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
    slug: 'veranda-aluminium-isolation-urbanisme-budget',
    titre:
      'Véranda en aluminium : isolation, urbanisme et budget, le guide pour agrandir sa maison en Gironde',
    extrait:
      "Une véranda aluminium se juge d'abord sur son confort douze mois par an : rupture de pont thermique des profilés, vitrages différenciés selon l'orientation et surtout traitement de la toiture, le poste le plus sous-estimé. Statut d'urbanisme (espace tampon ou vraie extension chauffée), seuils de déclaration préalable et de permis, étanchéité du raccord à la maison et fourchettes 2026 de 1 200 à 2 500 €/m² posé, par un artisan à Libourne (Gironde).",
    date: '2026-08-01',
    categorie: 'Guide · Vérandas aluminium',
    image:
      '/images/blog/veranda-aluminium-isolation-urbanisme-budget/veranda-aluminium-extension-vitree-exterieur.jpg',
  },
  {
    slug: 'terrasse-bois-structure-plots-lambourdes',
    titre:
      "Structure d'une terrasse en bois : plots, lambourdes et ventilation, ce qui décide vraiment de sa durée de vie",
    extrait:
      "Une terrasse en bois ne meurt presque jamais de son essence : elle meurt de sa sous-face, faute de ventilation, de drainage ou de lambourdes correctement appuyées. Support et plots réglables, entraxe et sections, jeu entre lames, fixations inox et NF DTU 51.4 : le guide technique de ce qu'on ne voit plus une fois les lames posées, par un artisan à Libourne (Gironde).",
    date: '2026-08-01',
    categorie: 'Guide · Terrasses bois',
    image: '/images/terrasse-bois-plots-gironde-4.webp',
  },
  {
    slug: 'carport-aluminium-ou-bois-comparatif',
    titre:
      'Carport aluminium ou carport bois : le comparatif de décision (budget, entretien, style)',
    extrait:
      "L'aluminium gagne sur l'entretien quasi nul, les grandes portées sans poteau central et l'évacuation des eaux intégrée aux poteaux ; le bois gagne sur la chaleur, le sur-mesure, la réparabilité et le ticket d'entrée. Nous vendons et posons les deux : fourchettes de prix 2026 posées, entretien sur quinze à vingt ans, urbanisme et verdict par profil de projet, par un artisan à Libourne (Gironde).",
    date: '2026-07-31',
    categorie: 'Guide · Carports',
    image: '/images/source-adefrance/Carport-aluminium-Libourne-4.webp',
  },
  {
    slug: 'pergola-bioclimatique-aluminium-guide',
    titre:
      'Pergola bioclimatique en aluminium : lames orientables, motorisation et budget en 2026',
    extrait:
      "Une pergola bioclimatique se juge d'abord sur l'étanchéité de ses lames et l'évacuation des eaux intégrée aux poteaux, la qualité des profilés et de leur thermolaquage, puis sur la pertinence de la motorisation — le prix ne vient qu'après (400 à 900 €/m² posé, fourchettes 2026). Lames orientables, capteurs de pluie et de vent, teinte RAL, stores zip, urbanisme et entretien : le guide produit, par un artisan à Libourne (Gironde).",
    date: '2026-07-30',
    categorie: 'Guide · Pergolas aluminium',
    image: '/images/source-adefrance/Pergolas-aluminium-Libourne-3.webp',
  },
  {
    slug: 'bois-local-pin-maritime-douglas-gironde',
    titre:
      'Bois local en Gironde : pin maritime, douglas et châtaignier, que vaut vraiment la filière Nouvelle-Aquitaine ?',
    extrait:
      "En Gironde, le bois vraiment local c'est d'abord le pin maritime des Landes de Gascogne, puis le douglas de la partie limousine et le châtaignier des feuillus régionaux — trois essences qui couvrent la grande majorité de nos ouvrages. Durabilité réelle, mention CTB B+, label Bois de France et cas où nous proposons franchement une autre essence, par un artisan à Libourne.",
    date: '2026-07-29',
    categorie: 'Guide · Filière bois local',
    image:
      '/images/blog/bois-local-pin-maritime-douglas-gironde/foret-pins-maritimes-bois-local-gironde.jpg',
  },
  {
    slug: 'bardage-bois-facade-essences-pose',
    titre:
      'Bardage bois en façade : quelle essence, quelle pose et quel budget en 2026 ?',
    extrait:
      "L'essence décide de l'aspect et du prix, mais c'est la pose qui décide de la durée de vie : une lame d'air ventilée d'au moins 20 mm, entrée basse et sortie haute, comme le prévoit le NF DTU 41.2. Comparatif douglas, mélèze, red cedar et pin traité, classe d'emploi 3, claire-voie ou recouvrement, déclaration préalable et prix au m² posé, par un artisan à Libourne (Gironde).",
    date: '2026-07-28',
    categorie: 'Guide · Bardage bois',
    image: '/images/source-adefrance/IMG-20250303-WA0044-1.jpg',
  },
  {
    slug: 'poulailler-bois-reglementation-implantation',
    titre:
      'Poulailler en bois : réglementation 2026, bien-être des poules et bonne implantation',
    extrait:
      "Moins de 5 m² sans formalité, déclaration préalable de 5 à 20 m² — et surtout, toute détention de volailles se déclare en mairie, même une seule poule. Dimensionnement au bien-être des poules, essences durables et bonne implantation : le guide du poulailler bois, par un artisan à Libourne (Gironde).",
    date: '2026-07-26',
    categorie: 'Guide · Poulailler',
    image: '/images/blog/poulailler-bois-reglementation-implantation/poulailler-bois-cover.jpg',
  },
  {
    slug: 'abri-jardin-bois-kit-ou-sur-mesure',
    titre:
      'Abri de jardin en bois : kit ou sur-mesure ? Le comparatif honnête (budget, essence, durée)',
    extrait:
      "Le kit gagne sur le prix et le délai, le sur-mesure sur la durabilité et l'intégration : le comparatif de décision pour choisir sans se tromper. Budget 2026, essence et classes d'emploi, réglementation et implantation en Gironde, par un artisan à Libourne.",
    date: '2026-07-26',
    categorie: 'Guide · Abris de jardin',
    image: '/images/blog/abri-jardin-bois-kit-ou-sur-mesure/abri-jardin-bois-cover.jpg',
  },
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
