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
  /** Dimensions réelles du fichier image, à relever avant d'écrire l'entrée. */
  imageLargeur: number;
  imageHauteur: number;
};

export const articles: Article[] = [
  {
    slug: 'termites-gironde-ouvrage-bois-prevention',
    titre:
      'Termites en Gironde : comment concevoir un ouvrage en bois qui ne leur offre pas le couvert',
    extrait:
      "Les termites ne s'attaquent pas au bois parce qu'il est en bois, mais parce qu'il est humide, au contact du sol et jamais ventilé : trois défauts de pose que nous voyons bien plus souvent que des essences mal choisies. La Gironde étant déclarée totalement termitée par arrêté préfectoral du 12 février 2001, voici le point de vue du constructeur — rupture de capillarité et sabots de poteaux, ventilation de sous-face, réservoirs de cellulose à supprimer au jardin, ce que les classes d'emploi et les traitements font vraiment, et vos obligations légales — par un artisan à Libourne (Gironde).",
    date: '2026-08-12',
    categorie: 'Guide · Bois et termites',
    image: '/images/terrasse-bois-plots-gironde-3.webp',
    imageLargeur: 1000,
    imageHauteur: 1333,
  },
  {
    slug: 'aluminium-ecologique-recyclage-bas-carbone',
    titre:
      "L'aluminium est-il écologique ? Recyclage, bas carbone et ce que ça change face au bois en 2026",
    extrait:
      "L'aluminium neuf coûte cher en énergie, l'aluminium recyclé beaucoup moins — et c'est précisément là que la filière française bascule en 2026, avec les objectifs de collecte, de capacité de refonte et de traçabilité annoncés par le SNFA. Ce que cela change vraiment face au bois, qui garde l'avantage à la fabrication quand l'aluminium le reprend sur la durée de vie, l'entretien et la fin de vie, les quatre questions à poser à son installateur et l'arbitrage ouvrage par ouvrage — pergola, carport, garde-corps, véranda — par un artisan qui pose les deux matières à Libourne (Gironde).",
    date: '2026-08-11',
    categorie: 'Guide · Aluminium et environnement',
    image: '/images/realisations/pergola-aluminium-terrasse-bois-libourne-3.webp',
    imageLargeur: 825,
    imageHauteur: 1100,
  },
  {
    slug: 'protection-solaire-brise-soleil-orientable',
    titre:
      'Brise-soleil orientable ou store extérieur : quelle protection solaire pour vos baies vitrées en Gironde ?',
    extrait:
      "Une protection solaire n'est efficace que si elle arrête le rayonnement dehors, avant le vitrage : un store intérieur ne fait que gérer une chaleur déjà entrée. Lire l'orientation de sa façade avant de choisir, trancher entre brise-soleil orientable, store screen à zip et brise-soleil fixe, comprendre la tenue au vent, les automatismes et l'entretien réel des profilés thermolaqués, et savoir quand c'est en réalité une pergola bioclimatique qu'il faut : le guide d'un artisan à Libourne (Gironde).",
    date: '2026-08-10',
    categorie: 'Guide · Protections solaires aluminium',
    image: '/images/realisations/pergola-aluminium-store-zip-libourne-2.webp',
    imageLargeur: 1100,
    imageHauteur: 825,
  },
  {
    slug: 'dimensions-carport-taille-hauteur',
    titre:
      'Quelle taille pour un carport ? Dimensions, hauteur et implantation pour bien garer sa voiture',
    extrait:
      "La cote qui rate un carport n'est presque jamais la longueur : c'est la hauteur libre sous traverse et la place pour ouvrir les portières — un SUV compact 2026 mesure 2,08 à 2,11 m rétroviseurs dépliés, un chiffre qui ne figure sur aucune plaquette de kit. Mesurer son véhicule réel accessoires montés, choisir sa trame selon le programme (une voiture, deux voitures, voiture + rangement), savoir où tombent les poteaux selon qu'on construit en bois ou en aluminium et implanter l'abri pour la manœuvre depuis la rue : le guide dimensionnel d'un artisan à Libourne (Gironde).",
    date: '2026-08-08',
    categorie: 'Guide · Carport',
    image: '/images/source-adefrance/Carport-bois-Libourne-6.webp',
    imageLargeur: 1200,
    imageHauteur: 646,
  },
  {
    slug: 'veranda-ou-extension-ossature-bois',
    titre:
      'Véranda ou extension en ossature bois : que choisir pour agrandir sa maison en Gironde ?',
    extrait:
      "La véranda aluminium gagne quand on cherche de la lumière, une vue sur le jardin et un espace de vie clair ; l'extension en ossature bois s'impose dès que la pièce doit être une vraie pièce de la maison — chambre, bureau, suite parentale — utilisable à l'identique en février et en août. Points de bascule (surface vitrée voulue, heures d'occupation), confort d'été, seuils d'urbanisme et statut RE2020, budget 2026 de 1 200 à 2 500 €/m² posé, raccord à la maison existante et verdict par profil, par un artisan à Libourne (Gironde).",
    date: '2026-08-07',
    categorie: 'Guide · Agrandir sa maison',
    image: '/images/source-adefrance/aggrandissement-accueil.webp',
    imageLargeur: 768,
    imageHauteur: 512,
  },
  {
    slug: 'choisir-teinte-ral-aluminium',
    titre:
      'Choisir la teinte RAL de son aluminium : nuancier, finitions et teintes qui vieillissent bien en Gironde',
    extrait:
      "Une teinte d'aluminium ne se choisit pas vraiment sur un nuancier, mais sur trois critères : la finition — mate, satinée ou sablée —, qui change plus l'aspect final que le code RAL lui-même, l'exposition, une teinte foncée plein sud chauffant et se dilatant davantage, et l'accord avec les menuiseries déjà posées plutôt qu'avec la couleur des murs. Lire un code du RAL Classic, comprendre ce que le thermolaquage et les labels garantissent vraiment, accorder l'ouvrage à la pierre blonde et à la tuile canal, raccorder pergola, carport et garde-corps posés à des dates différentes : le guide d'un artisan à Libourne (Gironde).",
    date: '2026-08-06',
    categorie: 'Guide · Aluminium',
    image:
      '/images/source-adefrance/construction-pool-house-aluminium-libourne-2.webp',
    imageLargeur: 1200,
    imageHauteur: 800,
  },
  {
    slug: 'renover-terrasse-bois-existante',
    titre:
      'Rénover une terrasse en bois : poncer, changer les lames ou tout refaire ? Le diagnostic avant de dépenser',
    extrait:
      "Ce qui décide entre poncer, remplacer les lames et tout déposer n'est pas la couleur grise du platelage — esthétique et parfaitement réversible — mais l'état de la sous-face : lambourdes, appuis, ventilation, fixations. Diagnostic en trois gestes, dégrisage et ponçage dans le bon ordre, remplacement lame par lame sans reprendre la structure, et quatre scénarios chiffrés de 15 à 150 €/m² posé, par un artisan à Libourne (Gironde).",
    date: '2026-08-05',
    categorie: 'Guide · Rénovation terrasse',
    image:
      '/images/blog/renover-terrasse-bois-existante/terrasse-bois-grisee-lames-patinees.jpg',
    imageLargeur: 1200,
    imageHauteur: 800,
  },
  {
    slug: 'garde-corps-terrasse-aluminium-ou-bois',
    titre:
      'Garde-corps de terrasse : aluminium ou bois ? Sécurité, entretien et budget en Gironde',
    extrait:
      "L'aluminium l'emporte dès que la terrasse est haute, exposée au vent ou au bord d'un bassin et qu'il faut préserver la vue : profilés thermolaqués, verre feuilleté ou barreaudage fin, entretien réduit à un lavage. Le bois garde l'avantage quand le garde-corps prolonge une terrasse en bois ou un bâti girondin en pierre, et qu'on veut pouvoir le réparer pièce par pièce. Norme NF P01-012 révisée en 2024, coût réel sur quinze ans, fourchettes au mètre linéaire posé et qualité de l'ancrage — le point qui fait céder la plupart des garde-corps —, par un artisan à Libourne (Gironde).",
    date: '2026-08-04',
    categorie: 'Guide · Aluminium & bois',
    image:
      '/images/blog/garde-corps-terrasse-aluminium-ou-bois/garde-corps-aluminium-verre-terrasse-surelevee.jpg',
    imageLargeur: 1200,
    imageHauteur: 646,
  },
  {
    slug: 'plage-piscine-bois-essences-pose',
    titre:
      "Plage de piscine en bois : quelle essence, quelle pose et quel budget autour d'un bassin en Gironde ?",
    extrait:
      "Le vrai critère d'une plage de piscine n'est pas l'essence « qui résiste au chlore » mais le trio stabilité dimensionnelle, antidérapance pieds nus et ventilation de la sous-face : l'eau de bassin, très diluée, agresse bien moins le bois que l'alternance permanente mouillé/sec et les UV du plein sud. Essences et classe d'emploi 4, lame brossée plutôt que rainurée, raccord aux margelles et trappes de visite, fixations inox A4, sécurité du bassin et budget 2026, par un artisan à Libourne (Gironde).",
    date: '2026-08-02',
    categorie: 'Guide · Plage de piscine',
    image: '/images/terrasse-bois-pool-house-libourne.webp',
    imageLargeur: 736,
    imageHauteur: 981,
  },
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
    imageLargeur: 1200,
    imageHauteur: 800,
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
    imageLargeur: 850,
    imageHauteur: 1133,
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
    imageLargeur: 1200,
    imageHauteur: 646,
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
    imageLargeur: 768,
    imageHauteur: 512,
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
    imageLargeur: 1200,
    imageHauteur: 800,
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
    imageLargeur: 1600,
    imageHauteur: 739,
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
    imageLargeur: 1200,
    imageHauteur: 800,
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
    imageLargeur: 1200,
    imageHauteur: 1800,
  },
  {
    slug: 'extension-ossature-bois-prix-m2',
    titre: 'Extension en ossature bois : prix au m², délais et avantages en 2026',
    extrait:
      "Comptez 1 700 à 2 500 €/m² pour une extension ossature bois sur mesure en 2026, selon finition et toiture. Légèreté adaptée aux sols argileux du Libournais, chantier court, isolation et bilan carbone RE2020 : le guide pour agrandir plutôt que déménager, en Gironde.",
    date: '2026-07-23',
    categorie: 'Guide · Construction bois',
    image: '/images/source-adefrance/WhatsApp-Image-2025-05-02-a-13.59.24_f4a63f6d-opt.webp',
    imageLargeur: 900,
    imageHauteur: 1200,
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
    imageLargeur: 1200,
    imageHauteur: 667,
  },
  {
    slug: 'proteger-terrasse-bois-canicule-entretien-ete',
    titre: "Protéger sa terrasse en bois de la canicule : le guide d'entretien d'été",
    extrait:
      "Ombre, saturateur et nettoyage doux : les trois leviers pour faire traverser l'été à une terrasse en bois, et la règle qu'on enfreint le plus souvent, ne jamais saturer un bois brûlant. Grisaillement, fissures, échauffement et gestes à proscrire, par un artisan en Gironde.",
    date: '2026-07-20',
    categorie: 'Guide · Entretien terrasse',
    image: '/images/terrasse-bois-plots-gironde-2.webp',
    imageLargeur: 1200,
    imageHauteur: 900,
  },
  {
    slug: 'pool-house-bois-guide',
    titre: 'Pool-house en bois : réglementation, usages et budget 2026',
    extrait:
      "Moins de 5 m² sans formalité, déclaration préalable jusqu'à 20 m², permis au-delà : le point sur la réglementation 2026 du pool-house. Usages réels, implantation par rapport au bassin, bois ou aluminium et budget honnête, pour un projet en Gironde.",
    date: '2026-07-16',
    categorie: 'Guide · Pool-house',
    image: '/images/pool-house-bois-terrasse-piscine-libourne.webp',
    imageLargeur: 1200,
    imageHauteur: 800,
  },
  {
    slug: 'autorisation-urbanisme-abri-carport-pergola-2026',
    titre: "Abri de jardin, carport, pergola : quelle autorisation d'urbanisme en 2026 ?",
    extrait:
      "Emprise au sol, seuils de 5, 20 et 40 m², secteurs protégés et nouveau CERFA n°16702 : le guide 2026 des formalités d'urbanisme pour abriter un véhicule ou aménager son jardin, en Gironde comme ailleurs.",
    date: '2026-07-11',
    categorie: 'Guide · Urbanisme',
    image: '/images/source-adefrance/Carport-bois-Libourne-3.webp',
    imageLargeur: 1200,
    imageHauteur: 646,
  },
  {
    slug: 'pergola-bois-ou-bioclimatique',
    titre: 'Pergola bois ou pergola bioclimatique : comment choisir ?',
    extrait:
      "Pergola en bois chaleureuse et sur mesure, ou bioclimatique aluminium à lames orientables motorisées ? Comparatif honnête, cas d'usage, budget 2025-2026 et entretien pour trancher en Gironde.",
    date: '2026-07-09',
    categorie: 'Guide · Pergolas',
    image: '/images/pergola-bioclimatique-lisudestemps.webp',
    imageLargeur: 800,
    imageHauteur: 533,
  },
  {
    slug: 'carport-bois-guide',
    titre: "Carport en bois : bien le choisir et l'intégrer à sa maison",
    extrait:
      "Carport ou garage, adossé ou autoportant, essences, toiture et budget : le guide pour abriter votre voiture sans construire un garage, avec autorisation d'urbanisme et entretien pour un carport bois en Gironde.",
    date: '2026-07-09',
    categorie: 'Guide · Carports bois',
    image: '/images/source-adefrance/Carport-bois-Libourne-1.webp',
    imageLargeur: 1200,
    imageHauteur: 646,
  },
  {
    slug: 'quel-bois-pour-terrasse-exterieure',
    titre: 'Quel bois choisir pour une terrasse extérieure ? Le guide par essence',
    extrait:
      "Douglas, mélèze, red cedar, chêne ou bois exotique : comparatif, classe d'emploi, prix et conseils de pose pour une terrasse en Gironde.",
    date: '2026-07-09',
    categorie: 'Guide · Terrasses bois',
    image: '/images/terrasse-bois-plots-gironde-1.webp',
    imageLargeur: 950,
    imageHauteur: 1267,
  },
];
