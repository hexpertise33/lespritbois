// =========================================================================
// L'ESPRIT BOIS — pages de zone.
//
// Une page de zone n'existe que si l'entreprise a réellement travaillé dans
// le secteur. Chaque zone cite ses chantiers par leur commune, leur contrainte
// et leur durée réelles — les mêmes que /realisations, sans les réécrire à
// l'avantage de la page.
//
// ⚠️ Règle non négociable : ne jamais créer une zone « pour le mot-clé ». Une
// page sans chantier de la zone est une doorway page, que Google traite comme
// telle. Si vous voulez couvrir un secteur où nous n'avons pas encore posé,
// attendez le premier chantier.
// =========================================================================

export type Zone = {
  slug: string;
  /** Nom du secteur tel qu'un habitant le dit. */
  nom: string;
  /** Communes citées, de la plus proche de l'atelier à la plus lointaine. */
  communes: string[];
  title: string;
  description: string;
  keywords: string;
  h1: string;
  chapo: string;
  cover: string;
  coverW: number;
  coverH: number;
  coverAlt: string;
  /** Ce qui distingue vraiment ce secteur, techniquement. Pas du remplissage
   *  géographique : la raison pour laquelle un chantier y est différent. */
  contexte: { titre: string; paragraphes: string[] };
  /** Identifiants des chantiers de /realisations à mettre en avant. */
  chantiers: string[];
  /** Distance et temps depuis l'atelier des Billaux, vérifiés à la carte. */
  acces: string;
  /** Guides du blog à rattacher au secteur.
   *
   *  Search Console, 22/08/2026 : huit pages sont « détectées, actuellement non
   *  indexées », c'est-à-dire connues de Google mais jamais explorées — dont
   *  cinq articles et l'index /blog lui-même. Le maillage existant ne suffit
   *  pas : ces articles reçoivent déjà 5 à 9 liens. Une page neuve, que Google
   *  explore pour la première fois, ouvre un chemin d'exploration qui n'existait
   *  pas. C'est à cela que sert cette liste — pas à faire du volume de liens. */
  guides: { slug: string; titre: string; pourquoi: string }[];
  faq: { q: string; r: string }[];
};

export const ZONES: Zone[] = [
  {
    slug: 'pergola-carport-entre-deux-mers',
    nom: 'Entre-deux-Mers',
    communes: [
      'Génissac',
      'Moulon',
      'Rauzan',
      'Saint-Pey-de-Castets',
      'Capian',
      'Créon',
      'Branne',
      'Targon',
    ],
    title: 'Pergola, carport et terrasse en Entre-deux-Mers',
    description:
      "Pergolas, carports et terrasses sur mesure en Entre-deux-Mers : cinq chantiers racontés à Génissac, Moulon, Rauzan, Saint-Pey-de-Castets et Capian.",
    keywords:
      'pergola Entre-deux-Mers, carport Entre-deux-Mers, terrasse bois Entre-deux-Mers, pergola Créon, carport Rauzan, terrasse Moulon, artisan bois Entre-deux-Mers',
    h1: 'Pergolas, carports et terrasses en Entre-deux-Mers',
    chapo:
      "Cinq de nos douze chantiers documentés sont en Entre-deux-Mers. C'est le secteur où nous posons le plus, et celui dont les terrains nous ont le plus appris.",
    cover: '/images/realisations/pergola-aluminium-terrasse-bois-libourne-5.webp',
    coverW: 825,
    coverH: 1100,
    coverAlt:
      "Pergola aluminium anthracite adossée à une maison, vue depuis le jardin, réalisée à Saint-Pey-de-Castets en Entre-deux-Mers",
    contexte: {
      titre: 'Ce que le relief de l’Entre-deux-Mers impose à un ouvrage',
      paragraphes: [
        "L'Entre-deux-Mers n'est pas une plaine. Entre Génissac et Rauzan, les parcelles sont en coteau, souvent orientées plein sud pour la vigne — et les maisons qui s'y sont installées ont hérité de cette exposition. C'est excellent en février et invivable en juillet, ce qui explique la proportion de pergolas dans ce que nous y posons.",
        "Le relief a une conséquence directe sur les fondations, et sur le budget. Sur un sol horizontal, on coule une dalle ou des plots et l'affaire est réglée ; en pente, une dalle suppose un terrassement, un décaissement et un soutènement — une bonne part de l'enveloppe dépensée avant d'avoir posé le premier poteau. À Capian, pour un carport bois de 6 × 9 mètres à trois véhicules, nous avons fondé sur des vis de fondation d'un mètre cinquante, vissées directement dans le sol : chaque pied se règle indépendamment en hauteur, ce qui rattrape la pente sans toucher au terrain. Pas de béton, pas d'évacuation de terre, pas de délai de séchage.",
        "Le sous-sol change avec l'altitude, et cela se sent à la fondation. Les plateaux reposent sur le calcaire à astéries, celui-là même qui a servi de pierre de construction dans toute la région : il porte très bien, mais il se creuse mal, et une réservation qu'on croyait faite à la tarière se termine parfois au brise-roche. Les vallons, eux, sont sur molasses — plus tendres, plus sensibles à l'eau. Nous sondons avant de chiffrer plutôt que de découvrir le jour de la pose.",
        "Enfin, ces communes viticoles comptent beaucoup d'églises et de bâtis anciens protégés. Une parcelle située dans le périmètre des abords d'un monument historique fait passer la demande d'urbanisme par l'avis de l'Architecte des Bâtiments de France : la teinte, la pente de toiture et parfois le matériau de couverture sont alors regardés. Cela ne bloque rien, mais cela change le calendrier. Nous vérifions ce point au relevé, avant de dessiner, plutôt qu'après un refus.",
      ],
    },
    chantiers: ['saint-pey-de-castets', 'capian', 'moulon', 'genissac', 'rauzan'],
    guides: [
      {
        slug: 'pergola-bois-ou-bioclimatique',
        titre: 'Pergola bois ou bioclimatique : que choisir ?',
        pourquoi:
          "La question qui revient le plus sur un coteau plein sud, où l'ombre doit se régler et pas seulement se poser.",
      },
      {
        slug: 'carport-aluminium-ou-bois-comparatif',
        titre: 'Carport aluminium ou bois : le comparatif',
        pourquoi:
          'Le comparatif poste par poste, utile avant de dessiner une structure sur terrain en pente.',
      },
      {
        slug: 'pool-house-bois-guide',
        titre: 'Pool house bois : règles, usages et budget',
        pourquoi:
          "Emprise au sol et raccordements, les deux points qui décident du projet avant l'esthétique.",
      },
    ],
    acces:
      "L'atelier est aux Billaux, au confluent de l'Isle et de la Dordogne : nous sommes en Libournais, sur l'autre rive, à quelques minutes de l'entrée nord de l'Entre-deux-Mers. Génissac et Moulon sont à une quinzaine de minutes, Rauzan et Saint-Pey-de-Castets à une demi-heure, Capian plus au sud. Nous n'y sous-traitons rien : les équipes qui relèvent sont celles qui posent.",
    faq: [
      {
        q: 'Intervenez-vous à Créon, Targon ou Branne ?',
        r: "Oui. Nos chantiers documentés vont de Génissac à Capian, ce qui couvre du nord au sud l'essentiel de l'Entre-deux-Mers, et Branne se trouve sur cet axe. Le déplacement pour le relevé et le devis est gratuit, quelle que soit la commune du secteur.",
      },
      {
        q: 'Une pergola sur un terrain en pente coûte-t-elle plus cher ?',
        r: "Pas systématiquement, mais elle se fonde différemment. Ce qui coûte en pente, ce n'est pas la structure : c'est le terrassement qu'une dalle impose. À Capian, le carport a été fondé sur vis d'un mètre cinquante, chaque pied réglable en hauteur — la pente est rattrapée dans la fondation, sans décaissement ni soutènement, et le budget passe dans l'ouvrage plutôt que dans le sol.",
      },
      {
        q: 'Faut-il une autorisation pour une pergola en Entre-deux-Mers ?',
        r: "Cela dépend de la surface créée et du PLU de votre commune, pas du secteur. Les seuils nationaux et le détail de la démarche sont expliqués dans notre guide des autorisations d'urbanisme. En revanche, si votre parcelle est dans le périmètre des abords d'un monument historique, l'instruction passe par l'avis de l'Architecte des Bâtiments de France : nous le vérifions au relevé.",
      },
    ],
  },
  {
    slug: 'constructeur-ossature-bois-gironde',
    nom: 'Gironde',
    communes: ['Génissac', 'Rauzan', 'Libourne', 'Les Billaux', 'Coutras', 'Castillon-la-Bataille'],
    title: 'Constructeur ossature bois en Gironde : extension et maison',
    description:
      "Extension et maison à ossature bois en Gironde : les chantiers de Génissac et Rauzan racontés en détail, du raccord sur l'existant à la maison de 150 m².",
    keywords:
      'constructeur ossature bois Gironde, extension ossature bois Gironde, maison ossature bois Gironde, extension bois Libourne, constructeur bois Gironde, surélévation bois Gironde',
    h1: 'Constructeur à ossature bois en Gironde',
    chapo:
      "Une extension et une maison ne se jugent pas sur un catalogue mais sur des raccords. Voici trois chantiers — deux en Gironde, un juste de l'autre côté de la limite départementale — avec le point dur de chacun.",
    cover: '/images/ossature-bois-isolation-fibre-gironde.webp',
    coverW: 1200,
    coverH: 900,
    coverAlt:
      "Intérieur d'une ossature bois en cours de chantier en Gironde, murs isolés en fibre de bois et charpente apparente",
    contexte: {
      titre: 'Le point dur d’une extension, c’est toujours le raccord',
      paragraphes: [
        "Une extension à ossature bois neuve ne pose pas de difficulté en elle-même : elle est dessinée, taillée en atelier, montée en quelques jours. Ce qui fait ou défait le chantier, c'est la jonction avec l'existant — et en Gironde, l'existant est souvent en pierre, parfois ancien, rarement d'équerre.",
        "Le cas le plus démonstratif que nous ayons documenté est à Clérac — en Charente-Maritime, à la limite du département, où la Gironde, la Dordogne et la Charente se rejoignent. Il fallait y greffer une ossature neuve sur une grange en pierre équipée de contreforts métalliques scellés en façade. Le risque n'était pas esthétique : un joint mal traité entre deux systèmes constructifs produit un pont thermique sur toute la hauteur, avec la condensation qui va avec. Nous avons mené l'extension en isolation par l'extérieur, pour que l'enveloppe neuve se referme sur l'existant au lieu de s'y accoler.",
        "À Génissac, le client tenait à garder sa toiture. Elle avait bougé : les relevés ne donnaient pas les mêmes cotes d'un bout à l'autre du rampant. Poser une ossature sur des cotes théoriques aurait produit un décalage visible dès la première panne. Nous avons relevé point par point avant de dessiner, puis absorbé les écarts dans la structure plutôt que dans les finitions.",
        "À Rauzan, il ne s'agissait plus d'agrandir mais de construire : 150 m² de maison et garage, mêlant ossature bois et maçonnerie traditionnelle. Faire cohabiter deux modes constructifs suppose de caler très tôt les niveaux finis et les épaisseurs d'enveloppe. Ce qui n'est pas arbitré au dessin se rattrape en fin de chantier, et se rattrape mal.",
      ],
    },
    chantiers: ['clerac', 'genissac', 'rauzan'],
    guides: [
      {
        slug: 'extension-ossature-bois-prix-m2',
        titre: 'Extension ossature bois : prix au m² et délais',
        pourquoi:
          "Ce que coûte réellement une extension en Gironde, ce qui fait varier le devis et les délais à prévoir.",
      },
      {
        slug: 'veranda-ou-extension-ossature-bois',
        titre: 'Véranda ou extension bois : que choisir ?',
        pourquoi:
          "L'arbitrage à faire avant de dessiner : usage réel, confort thermique, urbanisme et budget.",
      },
      {
        slug: 'bois-local-pin-maritime-douglas-gironde',
        titre: 'Bois local en Gironde : pin, douglas, châtaignier',
        pourquoi:
          'Ce que valent les essences de Nouvelle-Aquitaine en structure et en bardage.',
      },
    ],
    acces:
      "Nous concevons et réalisons depuis l'atelier des Billaux, près de Libourne, et intervenons dans toute la Gironde. Sur les extensions et les constructions, nous livrons hors d'eau hors d'air ; le second œuvre revient aux artisans du client, sauf mission clé en main convenue au départ.",
    faq: [
      {
        q: 'Livrez-vous hors d’eau hors d’air ou clé en main ?',
        r: "Les deux existent dans nos chantiers. Clérac a été livrée hors d'eau hors d'air, Génissac et Rauzan sont allées jusqu'aux finitions. Le hors d'eau hors d'air est notre mission par défaut : il permet au client de confier le second œuvre à ses propres artisans. Le clé en main se convient au départ, pas en cours de route.",
      },
      {
        q: 'Combien de temps dure une extension à ossature bois ?',
        r: "Trois semaines à Clérac en hors d'eau hors d'air, un mois à Génissac en clé en main, un mois et demi à Rauzan pour une maison de 150 m² finie. Ces durées sont celles du chantier, une fois la conception arrêtée et les autorisations obtenues.",
      },
      {
        q: 'Peut-on greffer une extension bois sur une maison en pierre ?',
        r: "Oui, c'est même le cas le plus courant en Gironde. La question n'est pas la compatibilité des matériaux mais la continuité de l'enveloppe : il faut traiter la jonction de manière à ne pas créer de pont thermique. À Clérac, c'est l'isolation par l'extérieur qui a réglé le point.",
      },
    ],
  },
  {
    slug: 'amenagement-exterieur-bordeaux-metropole',
    nom: 'métropole bordelaise',
    communes: ['Bordeaux', 'Cenon', 'Lormont', 'Floirac', 'Artigues-près-Bordeaux', 'Carbon-Blanc', 'Montussan'],
    title: 'Pergola et aménagement extérieur en métropole bordelaise',
    description:
      "Pergola, carport et terrasse sur mesure en métropole bordelaise : un chantier raconté à Montussan, aux portes de la métropole, et ce que la densité change.",
    keywords:
      'pergola Bordeaux, aménagement extérieur Bordeaux, carport Bordeaux métropole, terrasse bois Bordeaux, pergola Montussan, pergola rive droite Bordeaux',
    h1: 'Pergolas et aménagements extérieurs en métropole bordelaise',
    chapo:
      "Notre atelier est aux Billaux, à une quarantaine de minutes de Bordeaux par l'A89. Nous intervenons sur la métropole sans y avoir encore de chantier documenté — et nous préférons vous dire d'emblée ce que sa densité change à un ouvrage.",
    cover: '/images/source-adefrance/construction-pool-house-aluminium-libourne.webp',
    coverW: 768,
    coverH: 512,
    coverAlt:
      "Pergola aluminium isolée couvrant un espace bar avec plancha et plan de travail, réalisée à Montussan, aux portes de Bordeaux Métropole",
    contexte: {
      titre: 'Sur la métropole, la contrainte n’est pas le terrain — c’est l’accès et la limite',
      paragraphes: [
        "Autant le dire tout de suite : nos chantiers sont pour l'essentiel en Libournais et en Entre-deux-Mers, et nous n'avons pas de référence à l'intérieur de Bordeaux Métropole. Le plus proche est à Montussan — commune de la Communauté de communes Les Rives de la Laurence, aux portes de la métropole, à une vingtaine de minutes de Bordeaux par l'A89 et la rocade. Prétendre à une longue liste de références intra-muros serait faux, et vous le verriez au premier rendez-vous.",
        "Ce que nous savons, en revanche, c'est ce qui change quand on quitte la parcelle de campagne. À Montussan, la pergola devait entrer entre deux ouvrages existants, dans une cour fermée : une pose en tunnel, sans jeu de montage. La structure entre au millimètre ou elle n'entre pas. Toutes les cotes ont été relevées sur place et la pergola fabriquée d'après ce relevé, pas d'après un modèle standard rattrapé par des habillages. C'est exactement la situation d'un jardin de ville.",
        "La deuxième contrainte est la limite séparative. En tissu dense, un carport ou une pergola touche presque toujours une limite, ce qui met en jeu la vue sur le fonds voisin et, selon les cas, la hauteur admissible en limite. Sur les vingt-huit communes de Bordeaux Métropole, ces règles figurent au règlement de zone du PLU intercommunal et varient d'un secteur à l'autre ; en périphérie, chaque commune a le sien. Dans les deux cas, nous le lisons avant de dessiner, pas après.",
        "La troisième, c'est l'accès. Une charpente préparée en atelier arrive en éléments à assembler ; encore faut-il pouvoir les livrer. Rue étroite, portail de 90 cm, passage par la maison : cela se règle au relevé, en adaptant les longueurs de pièces, pas le jour de la pose.",
      ],
    },
    chantiers: ['montussan'],
    guides: [
      {
        slug: 'garde-corps-terrasse-aluminium-ou-bois',
        titre: 'Garde-corps de terrasse : aluminium ou bois ?',
        pourquoi:
          'En ville, un garde-corps se pose souvent en limite ou en étage : la norme et l\'ancrage priment sur le style.',
      },
      {
        slug: 'cloture-aluminium-lames-occultantes-guide',
        titre: 'Clôture aluminium à lames occultantes',
        pourquoi:
          "Occultation et prise au vent : le couple qui décide de la hauteur tenable en tissu dense.",
      },
      {
        slug: 'autorisation-urbanisme-abri-carport-pergola-2026',
        titre: "Autorisations d'urbanisme : abri, carport, pergola",
        pourquoi:
          'Les seuils nationaux de déclaration préalable et de permis, à croiser avec le règlement de votre zone.',
      },
    ],
    acces:
      "Une quarantaine de minutes séparent l'atelier des Billaux du centre de Bordeaux par l'A89 puis la rocade. Le relevé et le devis sont gratuits sur la métropole comme ailleurs ; c'est au relevé que se décident l'accès, les longueurs de pièces et la faisabilité en limite.",
    faq: [
      {
        q: 'Vous déplacez-vous jusqu’à Bordeaux ?',
        r: "Oui. L'atelier est aux Billaux, à une quarantaine de minutes du centre de Bordeaux par l'A89. Notre chantier le plus proche est à Montussan, aux portes de la métropole sans y être — nous préférons le dire que le laisser croire. Le déplacement pour le relevé et le devis est gratuit, sur la métropole comme ailleurs.",
      },
      {
        q: 'Peut-on poser une pergola dans une cour fermée, sans recul ?',
        r: "Oui, à condition de fabriquer sur mesure. C'est ce que nous appelons une pose en tunnel : entre deux ouvrages existants, il n'y a pas de jeu de montage, donc pas de rattrapage possible. Toutes les cotes se relèvent sur place et la structure se fabrique d'après ce relevé. Un modèle standard rattrapé par des habillages se voit.",
      },
      {
        q: 'Quelles sont les règles en limite de propriété sur la métropole ?',
        r: "Elles figurent dans le règlement de la zone où se trouve votre parcelle, au PLU métropolitain, et varient d'un secteur à l'autre : hauteur admissible en limite, recul imposé, vues sur le fonds voisin. C'est la première chose que nous vérifions au relevé. Les seuils nationaux de déclaration préalable et de permis, eux, sont détaillés dans notre guide des autorisations d'urbanisme.",
      },
    ],
  },
];

export const getZone = (slug: string) => ZONES.find((z) => z.slug === slug);
