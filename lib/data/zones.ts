// =========================================================================
// L'ESPRIT BOIS, pages de zone.
//
// Une page de zone n'existe que si l'entreprise a réellement travaillé dans
// le secteur. Chaque zone cite ses chantiers par leur commune, leur contrainte
// et leur durée réelles, les mêmes que /realisations, sans les réécrire à
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
  /** Article et préposition qui précèdent `nom` dans une phrase : « sur le »
   *  Bassin d'Arcachon, « dans l' » Entre-deux-Mers, « en » Gironde. Sans lui,
   *  les titres générés par le gabarit seraient agrammaticaux. */
  article: string;
  /** Ouvrage traité, sur une page d'offre d'un secteur qui en compte plusieurs.
   *  Sert de dernier niveau du fil d'Ariane, sous la page mère : le secteur y est
   *  déjà nommé, le répéter donnerait « Bassin d'Arcachon / Bassin d'Arcachon ». */
  ouvrage?: string;
  /** Page mère du secteur, quand celui-ci a plusieurs pages d'offre. */
  parent?: { slug: string; nom: string };
  /** Pages d'offre du secteur : toutes depuis la page mère, les autres depuis
   *  une page d'offre. Chacune doit traiter une contrainte technique distincte,
   *  quatre pages qui redisent la même chose sont des doorway pages, quel que
   *  soit le soin mis à l'écriture. */
  offres?: {
    slug: string;
    titre: string;
    resume: string;
    /** Vignette de la carte. Sur une page mère, les offres sont la charge utile :
     *  deux lignes de texte ne suffisent pas, il faut des cartes qu'on voie. */
    src?: string;
    w?: number;
    h?: number;
    alt?: string;
  }[];
  /** Libellé du projet transmis à /api/contact par le formulaire de la page.
   *  C'est lui qui permet de distinguer un lead du Bassin d'un lead de la
   *  landing publicitaire dans la boîte mail. */
  projet: string;
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
  /** Variante du contexte en tuiles, pour les pages mères.
   *
   *  Une page mère s'oriente, elle ne se lit pas : son rôle est d'envoyer le
   *  visiteur sur la bonne page d'offre en quelques secondes. Quatre paragraphes
   *  d'affilée, soit environ 400 mots sans respiration, faisaient exactement
   *  l'inverse. Quand ce champ est renseigné, il remplace `contexte.paragraphes`
   *  à l'affichage ; le texte long reste sur les pages d'offre, qui sont faites
   *  pour la profondeur. */
  contexteTuiles?: {
    titre: string;
    texte: string;
    /** Nom d'icône Material Symbols. ⚠️ La police est sous-ensemblée à 64
     *  glyphes (voir app/globals.css) : un nom absent s'affiche en toutes
     *  lettres à l'écran. */
    icone: string;
  }[];
  /** Phrase de bascule sous les tuiles, qui justifie l'existence des pages filles. */
  contexteChute?: string;
  /** Schéma technique illustrant l'argument central de la page, affiché juste
   *  après le contexte. Dessiné, pas photographié : sur un sujet comme la
   *  reprise de charge sous le sable, aucune photo ne montre ce qui compte,
   *  c'est sous la terrasse. Aucun concurrent du secteur n'en publie.
   *
   *  `legende` porte l'information, pas la décoration : elle doit se suffire à
   *  elle-même pour qui ne regarde que les images. */
  schema?: { src: string; w: number; h: number; alt: string; legende: string };
  /** Photos de chantier supplémentaires, en complément de la fiche chantier.
   *
   *  Ajouté le 24/08/2026 : le gabarit n'affichait que deux images de contenu,
   *  la photo de fond du héros et celle de la fiche chantier, sur des pages
   *  de plusieurs milliers de pixels. Pour un métier qui se vend à l'œil, c'est
   *  insuffisant.
   *
   *  ⚠️ La légende nomme toujours la commune réelle du chantier. Montrer une
   *  pergola de Montussan sur une page du Bassin est honnête tant que la page
   *  ne laisse pas croire qu'elle y a été posée. */
  galerie?: { src: string; w: number; h: number; alt: string; legende: string }[];
  /** Identifiants des chantiers de /realisations à mettre en avant. */
  chantiers: string[];
  /** Titre et introduction de la section chantiers. À renseigner quand la zone n'a pas
   *  encore de chantier à elle : le gabarit annonce sinon « nos N chantiers dans le
   *  secteur », ce qui serait faux. */
  chantiersTitre?: string;
  chantiersIntro?: string;
  /** Distance et temps depuis l'atelier des Billaux, vérifiés à la carte. */
  acces: string;
  /** Guides du blog à rattacher au secteur.
   *
   *  Search Console, 22/08/2026 : huit pages sont « détectées, actuellement non
   *  indexées », c'est-à-dire connues de Google mais jamais explorées, dont
   *  cinq articles et l'index /blog lui-même. Le maillage existant ne suffit
   *  pas : ces articles reçoivent déjà 5 à 9 liens. Une page neuve, que Google
   *  explore pour la première fois, ouvre un chemin d'exploration qui n'existait
   *  pas. C'est à cela que sert cette liste, pas à faire du volume de liens. */
  guides: { slug: string; titre: string; pourquoi: string }[];
  faq: { q: string; r: string }[];
};

export const ZONES: Zone[] = [
  {
    slug: 'pergola-carport-entre-deux-mers',
    nom: 'Entre-deux-Mers',
    article: "dans l'",
    projet: 'Pergola ou carport, Entre-deux-Mers',
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
    /* Couverture changée le 24/08/2026. La précédente était une photo en
       portrait (825 × 1100) : dans un bandeau large, `object-cover` n'en gardait
       qu'une bande centrale, la façade, et le voile du héros achevait de la
       noircir. Celle-ci fait 1200 × 646, presque le format du bandeau, donc
       quasiment aucun recadrage. Elle montre en plus les vis de fondation au
       pied des poteaux, c'est-à-dire l'argument que défendent le texte et le
       schéma juste en dessous. */
    cover: '/images/source-adefrance/Carport-bois-Libourne-3.webp',
    coverW: 1200,
    coverH: 646,
    coverAlt:
      "Carport bois autoporté à couverture bac acier pour trois véhicules, posé sur terrain en pente à Capian, vis de fondation visibles au pied des poteaux",
    contexte: {
      titre: 'Ce que le relief de l’Entre-deux-Mers impose à un ouvrage',
      paragraphes: [
        "L'Entre-deux-Mers n'est pas une plaine. Entre Génissac et Rauzan, les parcelles sont en coteau, souvent orientées plein sud pour la vigne, et les maisons qui s'y sont installées ont hérité de cette exposition. C'est excellent en février et invivable en juillet, ce qui explique la proportion de pergolas dans ce que nous y posons.",
        "Le relief a une conséquence directe sur les fondations, et sur le budget. Sur un sol horizontal, on coule une dalle ou des plots et l'affaire est réglée ; en pente, une dalle suppose un terrassement, un décaissement et un soutènement, une bonne part de l'enveloppe dépensée avant d'avoir posé le premier poteau. À Capian, pour un carport bois de 6 × 9 mètres à trois véhicules, nous avons fondé sur des vis de fondation d'un mètre cinquante, vissées directement dans le sol : chaque pied se règle indépendamment en hauteur, ce qui rattrape la pente sans toucher au terrain. Pas de béton, pas d'évacuation de terre, pas de délai de séchage.",
        "Le sous-sol change avec l'altitude, et cela se sent à la fondation. Les plateaux reposent sur le calcaire à astéries, celui-là même qui a servi de pierre de construction dans toute la région : il porte très bien, mais il se creuse mal, et une réservation qu'on croyait faite à la tarière se termine parfois au brise-roche. Les vallons, eux, sont sur molasses, plus tendres, plus sensibles à l'eau. Nous sondons avant de chiffrer plutôt que de découvrir le jour de la pose.",
        "Enfin, ces communes viticoles comptent beaucoup d'églises et de bâtis anciens protégés. Une parcelle située dans le périmètre des abords d'un monument historique fait passer la demande d'urbanisme par l'avis de l'Architecte des Bâtiments de France : la teinte, la pente de toiture et parfois le matériau de couverture sont alors regardés. Cela ne bloque rien, mais cela change le calendrier. Nous vérifions ce point au relevé, avant de dessiner, plutôt qu'après un refus.",
      ],
    },
    schema: {
      src: '/images/schemas/fonder-en-coteau-dalle-ou-vis.svg',
      w: 960,
      h: 460,
      alt: "Comparaison en coupe entre une dalle sur terrain en pente, qui impose décaissement et mur de soutènement, et des vis de fondation réglées chacune à sa hauteur",
      legende:
        "Sur un coteau, le choix de fondation décide du budget avant qu'un seul poteau soit posé. À gauche, la dalle suppose de corriger le terrain : décaissement, soutènement, terre à évacuer. À droite, chaque vis se règle en hauteur et le terrain reste en place. C'est ce que nous avons fait à Capian.",
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
        r: "Pas systématiquement, mais elle se fonde différemment. Ce qui coûte en pente, ce n'est pas la structure : c'est le terrassement qu'une dalle impose. À Capian, le carport a été fondé sur vis d'un mètre cinquante, chaque pied réglable en hauteur, la pente est rattrapée dans la fondation, sans décaissement ni soutènement, et le budget passe dans l'ouvrage plutôt que dans le sol.",
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
    article: 'en',
    projet: 'Ossature bois, Gironde',
    communes: ['Génissac', 'Rauzan', 'Libourne', 'Les Billaux', 'Coutras', 'Castillon-la-Bataille'],
    title: 'Constructeur ossature bois en Gironde : extension et maison',
    description:
      "Extension et maison à ossature bois en Gironde : les chantiers de Génissac et Rauzan racontés en détail, du raccord sur l'existant à la maison de 150 m².",
    keywords:
      'constructeur ossature bois Gironde, extension ossature bois Gironde, maison ossature bois Gironde, extension bois Libourne, constructeur bois Gironde, surélévation bois Gironde',
    h1: 'Constructeur à ossature bois en Gironde',
    chapo:
      "Une extension et une maison ne se jugent pas sur un catalogue mais sur des raccords. Voici trois chantiers (deux en Gironde, un juste de l'autre côté de la limite départementale) avec le point dur de chacun.",
    cover: '/images/ossature-bois-isolation-fibre-gironde.webp',
    coverW: 1200,
    coverH: 900,
    coverAlt:
      "Intérieur d'une ossature bois en cours de chantier en Gironde, murs isolés en fibre de bois et charpente apparente",
    contexte: {
      titre: 'Le point dur d’une extension, c’est toujours le raccord',
      paragraphes: [
        "Une extension à ossature bois neuve ne pose pas de difficulté en elle-même : elle est dessinée, taillée en atelier, montée en quelques jours. Ce qui fait ou défait le chantier, c'est la jonction avec l'existant, et en Gironde, l'existant est souvent en pierre, parfois ancien, rarement d'équerre.",
        "Le cas le plus démonstratif que nous ayons documenté est à Clérac, en Charente-Maritime, à la limite du département, où la Gironde, la Dordogne et la Charente se rejoignent. Il fallait y greffer une ossature neuve sur une grange en pierre équipée de contreforts métalliques scellés en façade. Le risque n'était pas esthétique : un joint mal traité entre deux systèmes constructifs produit un pont thermique sur toute la hauteur, avec la condensation qui va avec. Nous avons mené l'extension en isolation par l'extérieur, pour que l'enveloppe neuve se referme sur l'existant au lieu de s'y accoler.",
        "À Génissac, le client tenait à garder sa toiture. Elle avait bougé : les relevés ne donnaient pas les mêmes cotes d'un bout à l'autre du rampant. Poser une ossature sur des cotes théoriques aurait produit un décalage visible dès la première panne. Nous avons relevé point par point avant de dessiner, puis absorbé les écarts dans la structure plutôt que dans les finitions.",
        "À Rauzan, il ne s'agissait plus d'agrandir mais de construire : 150 m² de maison et garage, mêlant ossature bois et maçonnerie traditionnelle. Faire cohabiter deux modes constructifs suppose de caler très tôt les niveaux finis et les épaisseurs d'enveloppe. Ce qui n'est pas arbitré au dessin se rattrape en fin de chantier, et se rattrape mal.",
      ],
    },
    schema: {
      src: '/images/schemas/raccord-extension-ossature-sur-pierre.svg',
      w: 960,
      h: 460,
      alt: "Vue en plan comparant une extension simplement accolée à un mur en pierre, qui laisse un pont thermique sur toute la hauteur, et une extension en isolation par l'extérieur dont l'enveloppe se referme sur l'existant",
      legende:
        "Le raccord se joue en plan, pas en façade. Accolée, l'extension laisse une coupure verticale sur toute la hauteur du joint, et c'est là que la condensation s'installe. En isolation par l'extérieur, l'isolant passe devant les deux systèmes constructifs et la coupure disparaît. C'est la solution retenue à Clérac.",
    },
    galerie: [
      {
        src: '/images/blog/extension-ossature-bois-prix-m2/extension-ossature-bois-chantier-gironde.jpg',
        w: 1200,
        h: 900,
        alt: "Ossature bois en cours de levage contre une maison existante dont la toiture d'origine a été conservée, chantier de L'Esprit Bois à Génissac",
        legende:
          'Génissac : ossature en cours de levage, toiture d\'origine conservée. Les cotes du rampant ont été relevées point par point avant le dessin.',
      },
      {
        src: '/images/blog/extension-ossature-bois-prix-m2/extension-ossature-bois-baie-vitree-libourne.jpg',
        w: 1200,
        h: 900,
        alt: "Extension à ossature bois bardée, grande baie vitrée posée, terrasse en cours de ferraillage, chantier de L'Esprit Bois à Génissac",
        legende:
          'Génissac, plus tard : bardage et baie posés, terrasse en ferraillage. Les écarts du relevé ont été absorbés dans la structure, pas dans les finitions.',
      },
    ],
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
    article: 'sur la',
    projet: 'Aménagement extérieur, métropole bordelaise',
    communes: ['Bordeaux', 'Cenon', 'Lormont', 'Floirac', 'Artigues-près-Bordeaux', 'Carbon-Blanc', 'Montussan'],
    title: 'Pergola et aménagement extérieur en métropole bordelaise',
    description:
      "Pergola, carport et terrasse sur mesure en métropole bordelaise : un chantier raconté à Montussan, aux portes de la métropole, et ce que la densité change.",
    keywords:
      'pergola Bordeaux, aménagement extérieur Bordeaux, carport Bordeaux métropole, terrasse bois Bordeaux, pergola Montussan, pergola rive droite Bordeaux',
    h1: 'Pergolas et aménagements extérieurs en métropole bordelaise',
    chapo:
      "Notre atelier est aux Billaux, à une quarantaine de minutes de Bordeaux par l'A89. Nous intervenons sur la métropole sans y avoir encore de chantier documenté, et nous préférons vous dire d'emblée ce que sa densité change à un ouvrage.",
    cover: '/images/source-adefrance/construction-pool-house-aluminium-libourne.webp',
    coverW: 768,
    coverH: 512,
    coverAlt:
      "Pergola aluminium isolée couvrant un espace bar avec plancha et plan de travail, réalisée à Montussan, aux portes de Bordeaux Métropole",
    contexte: {
      titre: 'Sur la métropole, la contrainte n’est pas le terrain, c’est l’accès et la limite',
      paragraphes: [
        "Autant le dire tout de suite : nos chantiers sont pour l'essentiel en Libournais et en Entre-deux-Mers, et nous n'avons pas de référence à l'intérieur de Bordeaux Métropole. Le plus proche est à Montussan, commune de la Communauté de communes Les Rives de la Laurence, aux portes de la métropole, à une vingtaine de minutes de Bordeaux par l'A89 et la rocade. Prétendre à une longue liste de références intra-muros serait faux, et vous le verriez au premier rendez-vous.",
        "Ce que nous savons, en revanche, c'est ce qui change quand on quitte la parcelle de campagne. À Montussan, la pergola devait entrer entre deux ouvrages existants, dans une cour fermée : une pose en tunnel, sans jeu de montage. La structure entre au millimètre ou elle n'entre pas. Toutes les cotes ont été relevées sur place et la pergola fabriquée d'après ce relevé, pas d'après un modèle standard rattrapé par des habillages. C'est exactement la situation d'un jardin de ville.",
        "La deuxième contrainte est la limite séparative. En tissu dense, un carport ou une pergola touche presque toujours une limite, ce qui met en jeu la vue sur le fonds voisin et, selon les cas, la hauteur admissible en limite. Sur les vingt-huit communes de Bordeaux Métropole, ces règles figurent au règlement de zone du PLU intercommunal et varient d'un secteur à l'autre ; en périphérie, chaque commune a le sien. Dans les deux cas, nous le lisons avant de dessiner, pas après.",
        "La troisième, c'est l'accès. Une charpente préparée en atelier arrive en éléments à assembler ; encore faut-il pouvoir les livrer. Rue étroite, portail de 90 cm, passage par la maison : cela se règle au relevé, en adaptant les longueurs de pièces, pas le jour de la pose.",
      ],
    },
    schema: {
      src: '/images/schemas/limite-separative-et-acces-en-ville.svg',
      w: 960,
      h: 460,
      alt: "À gauche, une parcelle urbaine vue en plan avec le recul imposé entre le carport et la limite séparative ; à droite, un portail de 90 cm qui impose d'adapter la longueur des pièces préparées en atelier",
      legende:
        "Les deux contraintes qui décident d'un ouvrage en ville, et qu'aucune ne se voit sur une photo. À gauche le règlement de zone, qui fixe le recul et la hauteur admissible en limite. À droite l'accès, qui fixe la longueur des pièces qu'on peut préparer en atelier.",
    },
    galerie: [
      {
        src: '/images/realisations/salon-sous-pergola-aluminium-libourne-8.webp',
        w: 825,
        h: 1100,
        alt: "Salon de jardin abrité sous une pergola aluminium à couverture translucide, store screen descendu sur le côté, réalisation de L'Esprit Bois à Saint-Pey-de-Castets",
        legende:
          'Saint-Pey-de-Castets : store screen descendu côté vis-à-vis. En jardin de ville, c\'est souvent lui qui règle la question du voisinage.',
      },
      {
        src: '/images/realisations/pergola-aluminium-toit-polycarbonate-libourne-4.webp',
        w: 825,
        h: 1100,
        alt: "Pergola aluminium anthracite à couverture polycarbonate adossée à une maison, terrasse bois sur plots visible en contrebas, réalisation de L'Esprit Bois à Saint-Pey-de-Castets",
        legende:
          'Saint-Pey-de-Castets : couverture polycarbonate, structure adossée. La même pose en cour fermée se prépare entièrement au relevé.',
      },
    ],
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
        r: "Oui. L'atelier est aux Billaux, à une quarantaine de minutes du centre de Bordeaux par l'A89. Notre chantier le plus proche est à Montussan, aux portes de la métropole sans y être, nous préférons le dire que le laisser croire. Le déplacement pour le relevé et le devis est gratuit, sur la métropole comme ailleurs.",
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
  {
    slug: 'pergola-bassin-arcachon',
    nom: "Bassin d'Arcachon",
    article: 'sur le',
    ouvrage: 'Pergolas',
    parent: { slug: 'bassin-arcachon', nom: "Bassin d'Arcachon" },
    offres: [
      {
        slug: 'terrasse-bois-bassin-arcachon',
        titre: 'Terrasses bois sur le Bassin',
        resume:
          "Le sable ne porte pas : ce que ça change à la fondation, aux fixations et à la déclaration préalable.",
      },
      {
        slug: 'extension-ossature-bois-bassin-arcachon',
        titre: 'Extensions ossature bois sur le Bassin',
        resume:
          "Le sable qui se tasse contre une maison déjà stabilisée, la loi Littoral, et l'obligation de débroussailler sur cinquante mètres.",
      },
    ],
    projet: "Pergola, Bassin d'Arcachon",
    communes: [
      'La Teste-de-Buch',
      'Arcachon',
      'Gujan-Mestras',
      'Le Teich',
      'Biganos',
      'Andernos-les-Bains',
      'Lège-Cap-Ferret',
    ],
    title: "Pergola sur le Bassin d'Arcachon : vent, embruns, site classé",
    description:
      "Pergola bioclimatique ou aluminium sur le Bassin d'Arcachon : ce que le vent, les embruns et les sites classés changent à la structure et au dossier.",
    keywords:
      "pergola Bassin d'Arcachon, pergola La Teste-de-Buch, pergola bioclimatique Arcachon, pergola Gujan-Mestras, pergola Cap-Ferret, store extérieur Bassin d'Arcachon",
    h1: "Pergolas sur le Bassin d'Arcachon",
    chapo:
      "Nous nous déplaçons sur le Bassin pour les pergolas. Autant le dire tout de suite : nous n'y avons pas encore posé, voici donc ce que nous savons du terrain, pas une liste de références que nous n'avons pas.",
    cover: '/images/realisations/pergola-aluminium-store-zip-libourne-2.webp',
    coverW: 1200,
    coverH: 900,
    coverAlt:
      "Pergola aluminium anthracite équipée d'un store screen à zip, guidage latéral visible, réalisée par L'Esprit Bois",
    contexte: {
      titre: 'Quatre contraintes que le Bassin ajoute à une pergola',
      paragraphes: [
        "La première est le vent. Une pergola bioclimatique n'est pas une toiture : c'est une surface qui prend au vent, et ses lames orientables encore davantage. Sur une façade exposée aux entrées maritimes, ce n'est pas la lame qui décide du dimensionnement, c'est l'ancrage, nombre de poteaux, section, type de massif. Nous ne donnerons pas ici de vitesse de référence : le zonage réglementaire se lit à la commune, et l'exposition réelle d'une parcelle abritée par la forêt n'a rien à voir avec celle d'une façade ouverte sur l'eau. C'est un calcul, pas un abaque, et il se fait après le relevé.",
        "La deuxième est l'air salin. Un profilé aluminium thermolaqué tient très bien dehors, mais en ambiance marine la question n'est plus la teinte, c'est la préparation de surface et l'alliage. Le label Qualicoat couvre le laquage ; Qualimarine, délivré par l'ADAL, ajoute un contrôle en amont sur l'alliage lui-même, teneurs en cuivre et en fer, et vise précisément les ambiances marines. Sur le Bassin, nous demandons la qualification du laqueur et nous faisons écrire la garantie du laquage sur le devis. Le détail est dans notre guide sur le choix des teintes RAL.",
        "La troisième est le dossier d'urbanisme, et c'est celle qu'on sous-estime. Le Bassin concentre les protections : la Ville d'Hiver d'Arcachon est un site classé depuis 1985, la dune du Pilat et la forêt communale de La Teste-de-Buch le sont également. Dans un périmètre protégé, l'exonération applicable sous 5 m² ne joue plus : la déclaration préalable est due dès le premier mètre carré, et le dossier passe par l'avis de l'Architecte des Bâtiments de France, ce qui porte l'instruction à deux mois. Une pergola commandée en mars pour l'été se prépare en janvier.",
        "La quatrième ne se voit pas au devis, elle se voit au bout de deux ans : l'évacuation de l'eau. Une pergola bioclimatique n'évacue pas par une gouttière apparente mais par ses propres poteaux, à travers des sections étroites. Sur le Bassin, ces sections reçoivent ce que la pinède envoie (aiguilles de pin, pollen au printemps) et ce que le vent porte depuis la plage. Une descente qui s'engorge ne fuit pas immédiatement : elle déborde en lame par un angle, toujours le même, et c'est la façade qui prend. Nous posons donc des accès de nettoyage plutôt que des sections fermées, et nous le disons au client : ici, ce point demande un coup d'œil deux fois par an. Un installateur qui promet zéro entretien sur une parcelle sous pinède ne l'a pas regardée.",
        "Rien de tout cela n'empêche quoi que ce soit. Mais un devis qui ignore ces quatre points est un devis qu'il faudra refaire.",
      ],
    },
    schema: {
      src: '/images/schemas/pergola-ancrage-au-vent.svg',
      w: 960,
      h: 460,
      alt: "Schéma d'une pergola bioclimatique sous le vent : les lames orientables créent un soulèvement, l'effort descend par les poteaux jusqu'aux massifs",
      legende:
        "Le vent ne s'arrête pas à la lame : il la traverse pour descendre dans les poteaux et finir dans les massifs. C'est pour cela qu'une tenue au vent ne se promet pas sur catalogue, elle se calcule après le relevé de la parcelle.",
    },
    galerie: [
      {
        src: '/images/realisations/pergola-aluminium-terrasse-bois-libourne-3.webp',
        w: 825,
        h: 1100,
        alt: "Pergola aluminium anthracite avec store screen à zip déployé sur un côté, posée sur une terrasse bois, réalisation de L'Esprit Bois à Saint-Pey-de-Castets",
        legende:
          'Saint-Pey-de-Castets, le store à guidage par zip, celui qui reste tenu quand un store banne classique se rentre.',
      },
      {
        src: '/images/realisations/terrasse-bois-pergola-aluminium-libourne-7.webp',
        w: 825,
        h: 1100,
        alt: "Vue sous la couverture d'une pergola aluminium anthracite en enfilade au-dessus d'une terrasse bois, réalisation de L'Esprit Bois à Saint-Pey-de-Castets",
        legende:
          'Saint-Pey-de-Castets, vue sous couverture : c\'est la section des poteaux qui reprend l\'effort, pas la traverse.',
      },
      {
        src: '/images/source-adefrance/construction-pool-house-aluminium-libourne.webp',
        w: 768,
        h: 512,
        alt: "Pergola aluminium à couverture isolée abritant un espace bar avec plancha et plan de travail, réalisation de L'Esprit Bois à Montussan",
        legende:
          'Montussan, couverture en panneau isolé : sous une simple plaque, un espace plein sud devient un four.',
      },
    ],
    chantiers: ['lacanau'],
    chantiersTitre: 'Notre chantier littoral le plus proche',
    chantiersIntro:
      "Nous n'avons pas encore de pergola posée sur le Bassin. Notre référence côtière est à Lacanau, sur la côte océane : ce n'est pas le Bassin, et c'est une terrasse et non une pergola, mais le sol y pose exactement la même question, et c'est ce que vous devriez demander à tout artisan qui vient chez vous.",
    guides: [
      {
        slug: 'choisir-teinte-ral-aluminium',
        titre: 'Teinte RAL aluminium : bien la choisir',
        pourquoi:
          "Contient le passage sur Qualicoat et Qualimarine : à lire avant de signer un devis en bord de mer.",
      },
      {
        slug: 'pergola-bioclimatique-aluminium-guide',
        titre: 'Pergola bioclimatique aluminium : le guide',
        pourquoi:
          'Lames orientables, évacuation de l’eau et motorisation, les postes qui décident du confort réel.',
      },
      {
        slug: 'protection-solaire-brise-soleil-orientable',
        titre: 'Brise-soleil orientable ou store extérieur ?',
        pourquoi:
          "Le store à guidage par zip tient au vent là où un store banne classique se rentre : distinction utile ici.",
      },
    ],
    acces:
      "L'atelier est aux Billaux, près de Libourne : comptez un peu plus d'une heure de route jusqu'au Bassin. Le relevé et le devis sont gratuits, déplacement compris, nous ne facturons pas la distance, nous en tenons compte dans l'organisation du chantier, en préparant davantage en atelier pour réduire le nombre de journées sur place.",
    faq: [
      {
        q: 'Vous déplacez-vous vraiment jusqu’au Bassin ?',
        r: "Oui, pour les pergolas. C'est une zone que nous voulons développer, et nous préférons l'annoncer plutôt que de le laisser deviner. Le relevé et le devis sont gratuits, déplacement compris. En revanche nous ne vous dirons pas que nous y avons vingt chantiers : nous n'y avons pas encore posé, et vous le verriez au premier rendez-vous.",
      },
      {
        q: 'Une pergola tient-elle au vent du Bassin ?',
        r: "Oui, à condition qu'elle soit dimensionnée pour, et c'est l'ancrage qui décide, pas la lame. Le zonage réglementaire du vent se lit à la commune, et l'exposition réelle d'une parcelle abritée par la forêt n'a rien à voir avec celle d'une façade ouverte sur l'eau : nous relevons avant de dimensionner. Méfiez-vous d'un devis qui annonce une tenue au vent sans être venu voir la parcelle.",
      },
      {
        q: 'Faut-il une autorisation pour une pergola à Arcachon ou à La Teste ?',
        r: "Presque toujours, et plus tôt qu'ailleurs. Le Bassin concentre les sites classés, la Ville d'Hiver d'Arcachon depuis 1985, la dune du Pilat, la forêt communale de La Teste-de-Buch. Dans ces périmètres, l'exonération sous 5 m² ne s'applique pas : la déclaration préalable est due dès le premier mètre carré, avec avis de l'Architecte des Bâtiments de France et deux mois d'instruction. Nous vérifions la situation de votre parcelle au relevé.",
      },
      {
        q: 'Une pergola bioclimatique demande-t-elle de l’entretien ici ?',
        r: "Un peu plus qu'à l'intérieur des terres, et pas là où on l'attend. La structure en aluminium thermolaqué ne demande rien d'autre qu'un lavage. Ce qui demande de l'attention, c'est l'évacuation de l'eau : elle passe par les poteaux, en sections étroites, et sous pinède elle reçoit des aiguilles de pin et du pollen. Un coup d'œil deux fois par an suffit, à condition que la pergola ait été posée avec des accès de nettoyage. Demandez ce point avant de signer, il ne figure sur aucun devis.",
      },
      {
        q: 'L’aluminium résiste-t-il aux embruns ?',
        r: "Bien, s'il est préparé pour. Le thermolaquage seul ne dit rien de l'alliage : c'est la qualification du laqueur qui compte, Qualicoat pour le laquage et Qualimarine, délivré par l'ADAL, pour les ambiances marines, qui ajoute un contrôle sur les teneurs en cuivre et en fer. Demandez cette qualification et faites écrire la garantie du laquage sur le devis : elle varie beaucoup d'un fournisseur à l'autre.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // Terrasses bois, Bassin d'Arcachon.
  //
  // Deuxième page d'offre du secteur, ouverte le 24/08/2026 avant le carport
  // parce que c'est la seule offre pour laquelle l'entreprise a une preuve
  // littorale réelle : Lacanau, sur sable, en vis de fondation. La page le dit
  // et ne prétend pas que Lacanau soit le Bassin.
  // -----------------------------------------------------------------------
  {
    slug: 'terrasse-bois-bassin-arcachon',
    nom: "Bassin d'Arcachon",
    article: 'sur le',
    ouvrage: 'Terrasses bois',
    parent: { slug: 'bassin-arcachon', nom: "Bassin d'Arcachon" },
    offres: [
      {
        slug: 'pergola-bassin-arcachon',
        titre: 'Pergolas sur le Bassin',
        resume:
          "Le vent, les embruns et l'avis de l'Architecte des Bâtiments de France : les trois points qu'un devis de pergola oublie ici.",
      },
      {
        slug: 'extension-ossature-bois-bassin-arcachon',
        titre: 'Extensions ossature bois sur le Bassin',
        resume:
          "Le sable qui se tasse contre une maison déjà stabilisée, la loi Littoral, et l'obligation de débroussailler sur cinquante mètres.",
      },
    ],
    projet: "Terrasse bois, Bassin d'Arcachon",
    communes: [
      'La Teste-de-Buch',
      'Arcachon',
      'Gujan-Mestras',
      'Le Teich',
      'Biganos',
      'Andernos-les-Bains',
      'Lège-Cap-Ferret',
    ],
    title: "Terrasse bois sur le Bassin d'Arcachon : sable et sel",
    description:
      "Terrasse bois sur le Bassin d'Arcachon : pourquoi le sable ne porte pas, ce que le sel fait aux fixations, et quand la déclaration préalable devient due.",
    keywords:
      "terrasse bois Bassin d'Arcachon, terrasse bois Arcachon, terrasse bois Gujan-Mestras, terrasse bois Cap-Ferret, terrasse La Teste-de-Buch, terrasse sur sable",
    h1: "Terrasses bois sur le Bassin d'Arcachon",
    chapo:
      "Nous n'avons pas encore posé de terrasse sur le Bassin. Mais nous en avons posé une sur le sable, à Lacanau : c'est la même question de portance, et c'est elle qui commande tout le reste.",
    /* Couverture en paysage : le bandeau du héros est deux fois plus large que
       haut, une photo en portrait y perdrait la moitié de sa hauteur (voir
       `verifieCouvertures` en bas de ce fichier). Celle-ci montre la vis de
       fondation sous la rive et le sable tout autour, c'est-à-dire l'argument
       de la page. */
    cover: '/images/terrasse-bois-plots-gironde-2.webp',
    coverW: 1200,
    coverH: 900,
    coverAlt:
      "Terrasse bois posée sur sable devant une maison à bardage noir, vis de fondation visible sous la plinthe de rive, chantier de L'Esprit Bois à Lacanau",
    contexte: {
      titre: 'Quatre choses que le sable change à une terrasse',
      paragraphes: [
        "La première est la portance, et c'est de loin la plus coûteuse à ignorer. Le sable ne porte pas mal : il porte inégalement. Une terrasse posée sur des plots réglables simplement déposés en surface tient parfaitement le jour de la réception, puis descend là où le sable se tasse le plus, et pas ailleurs. Au bout de deux hivers, ce n'est plus un niveau qu'on rattrape, c'est une gîte. À Lacanau, nous sommes allés chercher un sol qui tient : la terrasse repose sur des vis de fondation, vissées jusqu'à trouver de la résistance. La pose est plus longue au départ et elle supprime le rattrapage annuel.",
        "La deuxième est que le sable ne reste pas dehors. Il s'installe sous le platelage, remonte entre les lames, et finit par former un matelas qui retient l'humidité contre la structure. La plinthe de rive posée à Lacanau referme l'ouvrage sur ses quatre côtés pour cette raison, pas pour l'esthétique, même si la ligne y gagne. Attention toutefois à ce qu'on referme : une sous-face de terrasse doit rester ventilée, sans quoi c'est elle qui pourrit, et pas les lames qu'on regarde. Fermer la rive sans étouffer la sous-face est un arbitrage de pose, pas un détail de finition.",
        "La troisième est le sel, et il ne s'attaque pas à ce qu'on croit. L'air salin n'attaque pas le bois : il attaque la visserie. Les fixations d'un platelage extérieur se font en inox, mais la nuance compte en bord de mer, l'inox A4, allié au molybdène, est celle qui est retenue en ambiance marine, là où l'A2 suffit à l'intérieur des terres. C'est un poste invisible sur un devis, quelques dizaines d'euros de différence, et c'est ce qui décide de l'aspect de la terrasse dans dix ans. Demandez la nuance, pas seulement le mot « inox ».",
        "La quatrième est l'urbanisme, et elle réserve une mauvaise surprise ici. Une terrasse de plain-pied, non couverte et non surélevée, ne crée pas d'emprise au sol : elle ne demande aucune formalité, quelle que soit sa surface. Sauf en périmètre protégé, et le Bassin en concentre, avec la Ville d'Hiver d'Arcachon classée depuis 1985, la dune du Pilat et la forêt communale de La Teste-de-Buch. L'article R. 421-11 du code de l'urbanisme y fait tomber cette dispense : ce qui est normalement exonéré de toute formalité repasse en déclaration préalable. Ajoutez qu'aucun texte ne fixe la hauteur à partir de laquelle une terrasse cesse d'être « de plain-pied » : c'est l'instruction communale qui apprécie, et elle apprécie sévèrement dans ces secteurs.",
        "Aucun de ces quatre points n'empêche de faire une belle terrasse sur le Bassin. Mais un devis qui n'en parle d'aucun est un devis qui n'est pas venu voir le terrain.",
      ],
    },
    schema: {
      src: '/images/schemas/terrasse-plots-ou-vis-sur-sable.svg',
      w: 960,
      h: 460,
      alt: "Coupe comparant une terrasse sur plots posés en surface, qui prend une gîte quand le sable se tasse, et une terrasse sur vis de fondation vissées jusqu'à la couche porteuse",
      legende:
        "Ce qui décide de la tenue d'une terrasse sur sable est sous le platelage, donc invisible sur une photo. À gauche, chaque plot descend de sa propre hauteur : c'est le tassement différentiel qui déforme l'ouvrage, pas la charge. À droite, la charge est reprise sous le sable.",
    },
    galerie: [
      {
        src: '/images/terrasse-bois-plots-gironde-4.webp',
        w: 850,
        h: 1133,
        alt: "Terrasse bois posée à même le sable devant une maison à bardage noir, pins maritimes en arrière-plan, chantier de L'Esprit Bois à Lacanau",
        legende:
          'Lacanau, le sable vient jusqu\'à la rive du platelage, et la pinède commence derrière la maison.',
      },
      {
        src: '/images/terrasse-bois-plots-gironde-1.webp',
        w: 950,
        h: 1267,
        alt: "Terrasse bois posée sur sol sableux, plinthe de rive fermant la structure sur ses quatre côtés, chantier de L'Esprit Bois à Lacanau",
        legende:
          'Lacanau, la plinthe de rive referme l\'ouvrage sur ses quatre côtés, pour que le sable ne s\'installe pas sous le platelage.',
      },
      {
        src: '/images/terrasse-bois-pool-house-noir.webp',
        w: 736,
        h: 981,
        alt: 'Plage de piscine en bois clair longeant un bassin, pool house à bardage noir au fond, réalisation de L\'Esprit Bois à Moulon',
        legende:
          'Moulon, ce n\'est pas le littoral, mais c\'est le même travail de rive au millimètre le long du bassin.',
      },
    ],
    chantiers: ['lacanau'],
    chantiersTitre: 'Notre terrasse posée sur le sable',
    chantiersIntro:
      "Lacanau est sur la côte océane et non sur le Bassin : nous ne prétendrons pas le contraire. Mais c'est le même sable et la même question de portance, et c'est le seul chantier que nous puissions vous montrer pour en parler.",
    guides: [
      {
        slug: 'terrasse-bois-structure-plots-lambourdes',
        titre: 'Structure : plots, lambourdes et ventilation',
        pourquoi:
          "Ce qu'on ne voit plus une fois les lames posées, et c'est là que se joue la durée de vie sur sol sableux.",
      },
      {
        slug: 'quel-bois-pour-terrasse-exterieure',
        titre: 'Quel bois pour une terrasse extérieure ?',
        pourquoi:
          'Le guide essence par essence, à lire avant de trancher entre pin traité et bois naturellement durable.',
      },
      {
        slug: 'proteger-terrasse-bois-canicule-entretien-ete',
        titre: 'Protéger sa terrasse de la canicule',
        pourquoi:
          "Sur le Bassin, le platelage prend le plein soleil et le sel : l'entretien d'été n'y est pas optionnel.",
      },
    ],
    acces:
      "L'atelier est aux Billaux, près de Libourne : comptez un peu plus d'une heure de route jusqu'au Bassin. Le relevé et le devis sont gratuits, déplacement compris. Sur une terrasse, ce relevé sert d'abord à une chose : savoir sur quoi on va fonder. C'est la seule question qui coûte cher si on y répond après la pose.",
    faq: [
      {
        q: 'Faut-il une autorisation pour une terrasse à Arcachon ou au Cap-Ferret ?',
        r: "Cela dépend d'abord de la terrasse. De plain-pied, non couverte et non surélevée, elle ne crée pas d'emprise au sol et ne demande aucune formalité, quelle que soit sa surface. Mais en site classé ou aux abords d'un monument historique (la Ville d'Hiver d'Arcachon, la dune du Pilat, la forêt communale de La Teste-de-Buch), l'article R. 421-11 du code de l'urbanisme fait tomber cette dispense et la déclaration préalable redevient due. Nous vérifions la situation de votre parcelle au relevé.",
      },
      {
        q: 'Plots réglables ou vis de fondation sur un terrain sableux ?',
        r: "Des vis de fondation, dans la très grande majorité des cas. Un plot réglable déposé en surface reprend la charge sur le sable tel qu'il est : il ne descend pas partout à la même vitesse, et c'est le tassement différentiel qui déforme la terrasse, pas la charge elle-même. Une vis se visse jusqu'à trouver de la résistance. C'est ce que nous avons fait à Lacanau, et c'est ce que nous proposerons sur le Bassin.",
      },
      {
        q: 'Quelle essence tient le mieux en bord de mer ?',
        r: "La question de l'essence arrive après celle de la mise en œuvre, et c'est souvent l'inverse qu'on entend. Le sel n'attaque pas le bois : il attaque les fixations, d'où l'inox A4 plutôt que l'A2. Ce qui use le platelage en bord de mer, c'est l'UV et l'alternance humide-sec. Un pin traité correctement posé et ventilé tiendra mieux qu'un bois exotique posé sur une sous-face qui ne respire pas. Notre guide par essence détaille les cas.",
      },
      {
        q: 'Vous déplacez-vous jusqu’au Bassin pour une terrasse ?',
        r: "Oui, et nous le disons franchement : c'est un secteur que nous voulons développer, où nous n'avons pas encore posé. Le relevé et le devis sont gratuits, déplacement compris. Vous ne trouverez pas ici de liste de références locales, parce qu'elle n'existe pas encore, vous trouverez le chantier de Lacanau, sur sable, et ce que nous en avons appris.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // Extensions à ossature bois, Bassin d'Arcachon.
  //
  // Vague 2, ouverte le 26/08/2026. La condition posée le 24/08 est levée :
  // les deux pages neuves de la vague 1 étaient indexées en moins de 48 heures.
  // L'ossature passe avant le carport parce que Search Console montre que la
  // demande girondine qui rapporte est là (« maison en bois gironde »,
  // « ossature bois », « construction maison bois gironde »), et non sur les
  // pergolas ou les carports.
  // -----------------------------------------------------------------------
  {
    slug: 'extension-ossature-bois-bassin-arcachon',
    nom: "Bassin d'Arcachon",
    article: 'sur le',
    ouvrage: 'Extensions ossature bois',
    parent: { slug: 'bassin-arcachon', nom: "Bassin d'Arcachon" },
    offres: [
      {
        slug: 'pergola-bassin-arcachon',
        titre: 'Pergolas sur le Bassin',
        resume:
          "Le vent décide de l'ancrage, les embruns du laquage, l'Architecte des Bâtiments de France du calendrier.",
      },
      {
        slug: 'terrasse-bois-bassin-arcachon',
        titre: 'Terrasses bois sur le Bassin',
        resume:
          "Le sable ne porte pas, la sous-face doit rester ventilée, et la nuance d'inox décide de l'aspect dans dix ans.",
      },
    ],
    projet: "Extension ossature bois — Bassin d'Arcachon",
    communes: [
      'La Teste-de-Buch',
      'Arcachon',
      'Gujan-Mestras',
      'Le Teich',
      'Biganos',
      'Andernos-les-Bains',
      'Lège-Cap-Ferret',
    ],
    title: "Extension ossature bois sur le Bassin d'Arcachon",
    description:
      "Extension à ossature bois sur le Bassin d'Arcachon : ce que le sable, la loi Littoral et l'obligation de débroussailler sur 50 mètres changent à un projet.",
    keywords:
      "extension ossature bois Bassin d'Arcachon, agrandissement maison bois Arcachon, extension bois La Teste-de-Buch, constructeur ossature bois Gujan-Mestras, surélévation bois Cap-Ferret",
    h1: "Extensions à ossature bois sur le Bassin d'Arcachon",
    chapo:
      "Nous n'avons pas encore construit sur le Bassin, et nous préférons l'écrire. Nos extensions sont à l'intérieur des terres. Voici donc ce que le littoral ajoute à un projet d'agrandissement, sous pinède et en commune littorale.",
    cover: '/images/blog/extension-ossature-bois-prix-m2/extension-ossature-bois-baie-vitree-libourne.jpg',
    coverW: 1200,
    coverH: 900,
    coverAlt:
      "Extension à ossature bois bardée avec grande baie vitrée posée, terrasse en cours de ferraillage, chantier de L'Esprit Bois à Génissac",
    contexte: {
      titre: "Ce que le Bassin ajoute à un projet d'extension",
      paragraphes: [
        "Le sol, d'abord, et il ne pose pas ici la même question qu'à une terrasse. Une extension pèse : elle descend des charges permanentes dans un sable qui porte inégalement, souvent avec une nappe proche. Le risque n'est pas que l'ouvrage s'effondre, il est qu'il ne bouge pas comme la maison à laquelle il s'accroche. Un différentiel de tassement de quelques millimètres entre l'existant, fondé il y a trente ans, et l'extension neuve suffit à fissurer le raccord. C'est pour cela que nous sondons avant de dessiner, et que nous refusons de chiffrer une extension sur le littoral sans être venus voir le terrain.",
        "La loi Littoral, ensuite, et c'est elle qui décide si le projet est possible avant même de parler de bois. La loi du 3 janvier 1986 s'applique aux communes riveraines du Bassin. Deux règles pèsent sur un agrandissement : hors des espaces déjà urbanisés, l'article L. 121-16 du code de l'urbanisme interdit les constructions dans une bande de cent mètres à compter de la limite haute du rivage, et le plan local d'urbanisme peut porter cette bande au-delà de cent mètres quand la sensibilité des milieux le justifie. S'y ajoute le principe de continuité avec l'urbanisation existante. Une parcelle constructible pour une maison ne l'est donc pas automatiquement pour tout agrandissement, et cela se vérifie parcelle par parcelle, pas à l'échelle de la commune.",
        "Le débroussaillement, enfin, et c'est le point que presque personne n'annonce avant la signature. En Gironde, l'obligation légale s'applique dans les bois, forêts et landes de plus d'un demi-hectare, ainsi que dans une bande de deux cents mètres autour d'eux, ce qui couvre l'essentiel des parcelles sous pinède du Bassin. Elle impose de débroussailler sur cinquante mètres de profondeur autour des constructions, et six mètres de part et d'autre des accès privés. La zone ne s'arrête pas à votre clôture : quand elle déborde chez le voisin, l'obligation reste la vôtre, et il faut lui demander l'accès par lettre recommandée. Depuis l'arrêté préfectoral du 17 octobre 2025, le manquement est sanctionné jusqu'à cinquante euros par mètre carré non débroussaillé, et l'assurance peut appliquer une franchise supplémentaire allant jusqu'à cinq mille euros après un sinistre.",
        "Le calendrier, pour finir. Une extension relève du permis de construire bien plus souvent qu'un abri, et dans les périmètres protégés du Bassin le dossier passe par l'avis de l'Architecte des Bâtiments de France, ce qui allonge l'instruction. Au-delà de cent cinquante mètres carrés de surface de plancher, le recours à un architecte devient obligatoire. Nous vérifions ces trois points au relevé, avant de dessiner.",
      ],
    },
    schema: {
      src: '/images/schemas/debroussaillement-50-metres-extension.svg',
      w: 960,
      h: 460,
      alt: "Vue en plan d'une parcelle sous pinède : la zone de débroussaillement de 50 mètres autour de la maison déborde sur la parcelle voisine, avec une bande de 6 mètres le long de l'accès privé",
      legende:
        "C'est la règle la moins anticipée d'un projet sous pinède, et la seule qui vous oblige à parler à votre voisin. Le disque des cinquante mètres se compte depuis la construction, pas depuis la limite de propriété : la part qui tombe chez le voisin reste à votre charge, et son accès se demande par lettre recommandée.",
    },
    galerie: [
      {
        src: '/images/blog/extension-ossature-bois-prix-m2/extension-ossature-bois-chantier-gironde.jpg',
        w: 1200,
        h: 900,
        alt: "Ossature bois en cours de levage contre une maison existante dont la toiture d'origine a été conservée, chantier de L'Esprit Bois à Génissac",
        legende:
          'Génissac : ossature en cours de levage, toiture conservée. Les cotes du rampant ont été relevées point par point avant le dessin.',
      },
      {
        src: '/images/source-adefrance/IMG-20250129-WA0077-opt.webp',
        w: 1600,
        h: 1200,
        alt: "Maison à ossature bois de 150 m² avec garage, mêlant ossature et maçonnerie traditionnelle, construite par L'Esprit Bois à Rauzan",
        legende:
          'Rauzan : 150 m² mêlant ossature bois et maçonnerie. Faire cohabiter deux modes constructifs suppose de caler les niveaux finis très tôt.',
      },
      {
        src: '/images/bardage-bois-douglas-gironde.webp',
        w: 1000,
        h: 1333,
        alt: 'Bardage bois en douglas posé à claire-voie sur une façade, veinage et nœuds visibles',
        legende:
          "Le bardage est ce que le vent salé attaque en premier : sa pose et son essence se décident avec l'exposition de la façade.",
      },
    ],
    chantiers: ['genissac'],
    chantiersTitre: 'Notre extension la plus démonstrative',
    chantiersIntro:
      "Nous n'avons pas encore d'extension sur le Bassin. Celle de Génissac est à l'intérieur des terres, et nous ne prétendrons pas le contraire. Mais elle porte la question qui compte ici : greffer du neuf sur un existant qui a déjà bougé, sans que le raccord travaille.",
    guides: [
      {
        slug: 'extension-ossature-bois-prix-m2',
        titre: "Extension ossature bois : le prix au m²",
        pourquoi:
          "Les postes qui font le budget d'un agrandissement, à lire avant de comparer des devis sur le Bassin.",
      },
      {
        slug: 'veranda-ou-extension-ossature-bois',
        titre: 'Véranda ou extension à ossature bois ?',
        pourquoi:
          "Deux réponses très différentes au même besoin de surface, et l'une des deux se chauffe toute l'année.",
      },
      {
        slug: 'bardage-bois-facade-essences-pose',
        titre: 'Bardage bois : essences et pose',
        pourquoi:
          "Ce que le vent salé attaque en premier sur une façade neuve, et comment le bardage y répond.",
      },
    ],
    acces:
      "L'atelier est aux Billaux, près de Libourne : comptez un peu plus d'une heure de route jusqu'au Bassin. Sur une extension, cette distance se gère en préparant davantage en atelier : l'ossature est taillée et assemblée à blanc chez nous, puis levée sur place en quelques jours. Le relevé et l'étude de faisabilité sont gratuits, déplacement compris.",
    faq: [
      {
        q: 'Peut-on agrandir une maison située près du rivage du Bassin ?',
        r: "Cela dépend de la parcelle, et la réponse se lit avant de dessiner. La loi Littoral du 3 janvier 1986 s'applique aux communes riveraines du Bassin. Hors des espaces déjà urbanisés, l'article L. 121-16 du code de l'urbanisme interdit les constructions dans une bande de cent mètres depuis la limite haute du rivage, et le plan local d'urbanisme peut élargir cette bande quand la sensibilité des milieux le justifie. S'y ajoute le principe de continuité avec l'urbanisation existante. Nous vérifions la situation exacte de votre parcelle au relevé.",
      },
      {
        q: 'Qu’est-ce que l’obligation de débroussaillement change à mon projet ?',
        r: "Beaucoup plus qu'on ne le croit, et cela ne concerne pas que le chantier. En Gironde, l'obligation s'applique dans les bois, forêts et landes de plus d'un demi-hectare et dans une bande de deux cents mètres autour d'eux. Il faut débroussailler sur cinquante mètres autour des constructions et six mètres de part et d'autre des accès privés. Quand la zone déborde sur la parcelle voisine, l'obligation reste la vôtre et l'accès se demande par lettre recommandée. Depuis l'arrêté préfectoral du 17 octobre 2025, le manquement est sanctionné jusqu'à cinquante euros par mètre carré, et l'assurance peut appliquer une franchise supplémentaire après un sinistre.",
      },
      {
        q: 'Le sable pose-t-il un problème pour une extension ?',
        r: "Le problème n'est pas la portance en soi, c'est le différentiel. Une extension descend des charges permanentes dans un sol qui se tasse inégalement, contre une maison fondée il y a des décennies et déjà stabilisée. Quelques millimètres d'écart entre les deux suffisent à fissurer le raccord. C'est la raison pour laquelle nous sondons avant de dessiner et refusons de chiffrer une extension sur le littoral sans être venus sur place.",
      },
      {
        q: 'Combien de temps dure le chantier, à une heure de votre atelier ?',
        r: "Le levage lui-même est court, quelques jours pour une ossature préparée en atelier. Ce qui allonge le calendrier est en amont : l'instruction du permis, l'avis de l'Architecte des Bâtiments de France en périmètre protégé, et l'étude de sol. Nous compensons la distance en préparant davantage chez nous, ce qui réduit le nombre de journées sur place plutôt que d'ajouter des allers-retours.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // Page mère du Bassin d'Arcachon.
  //
  // Seul secteur du site à porter plusieurs pages d'offre, donc le seul à
  // avoir besoin d'une mère. Elle traite les contraintes à un niveau
  // synthétique et renvoie à la page qui approfondit chacune : si elle se met
  // à redire ce que disent ses filles, le groupe entier devient redondant.
  // -----------------------------------------------------------------------
  {
    slug: 'bassin-arcachon',
    nom: "Bassin d'Arcachon",
    article: 'sur le',
    offres: [
      {
        slug: 'pergola-bassin-arcachon',
        titre: 'Pergolas sur le Bassin',
        resume:
          "Le vent décide de l'ancrage, les embruns du laquage, l'Architecte des Bâtiments de France du calendrier.",
        src: '/images/realisations/pergola-aluminium-store-zip-libourne-2.webp',
        w: 1100,
        h: 825,
        alt: "Pergola aluminium anthracite équipée d'un store screen à zip, guidage latéral visible, réalisée par L'Esprit Bois",
      },
      {
        slug: 'terrasse-bois-bassin-arcachon',
        titre: 'Terrasses bois sur le Bassin',
        resume:
          "Le sable ne porte pas, la sous-face doit rester ventilée, et la nuance d'inox décide de l'aspect dans dix ans.",
        src: '/images/terrasse-bois-plots-gironde-2.webp',
        w: 1200,
        h: 900,
        alt: "Terrasse bois posée sur sable devant une maison à bardage noir, vis de fondation visible sous la plinthe de rive, chantier de L'Esprit Bois à Lacanau",
      },
      {
        slug: 'extension-ossature-bois-bassin-arcachon',
        titre: 'Extensions ossature bois sur le Bassin',
        resume:
          "Le sable qui se tasse contre une maison déjà stabilisée, la loi Littoral, et l'obligation de débroussailler sur cinquante mètres.",
        src: '/images/blog/extension-ossature-bois-prix-m2/extension-ossature-bois-baie-vitree-libourne.jpg',
        w: 1200,
        h: 900,
        alt: "Extension à ossature bois bardée avec grande baie vitrée posée, chantier de L'Esprit Bois à Génissac",
      },
    ],
    projet: "Projet extérieur, Bassin d'Arcachon",
    communes: [
      'La Teste-de-Buch',
      'Arcachon',
      'Gujan-Mestras',
      'Le Teich',
      'Biganos',
      'Andernos-les-Bains',
      'Lège-Cap-Ferret',
    ],
    title: "Aménagement extérieur bois sur le Bassin d'Arcachon",
    description:
      "Pergola, terrasse et aménagement extérieur sur le Bassin d'Arcachon : ce que le sable, le vent, le sel et les sites classés changent à un ouvrage en bois.",
    keywords:
      "aménagement extérieur Bassin d'Arcachon, artisan bois Bassin d'Arcachon, pergola Arcachon, terrasse bois Arcachon, menuisier extérieur La Teste-de-Buch, Cap-Ferret",
    h1: "Aménagement extérieur bois sur le Bassin d'Arcachon",
    chapo:
      "Nous nous déplaçons sur le Bassin depuis notre atelier des Billaux. Nous n'y avons pas encore posé, et nous préférons l'écrire : voici ce que le terrain impose, ouvrage par ouvrage, plutôt qu'une liste de références que nous n'avons pas.",
    /* Seule couverture du site qui montre un lieu et non un ouvrage. C'est
       assumé : cette page est une page mère, elle annonce un secteur. L'alt le
       dit explicitement pour qu'on ne puisse pas la lire comme une réalisation,
       la page reposant tout entière sur le fait que nous n'y avons pas encore
       posé. Photo fournie par David, libre de droits (confirmé le 25/08/2026). */
    cover: '/images/bassin-arcachon-passes-dune-du-pilat.jpg',
    coverW: 1400,
    coverH: 933,
    coverAlt:
      "Vue aérienne des passes du Bassin d'Arcachon, bancs de sable découverts et dune du Pilat en arrière-plan : le secteur où intervient L'Esprit Bois",
    contexte: {
      titre: "Ce que le Bassin change, quel que soit l'ouvrage",
      paragraphes: [
        "Le sable ne porte pas mal, il porte inégalement : une structure fondée en surface descend là où le sable se tasse, et nulle part ailleurs. Le vent commande l'ancrage plutôt que la lame. Le sel n'attaque pas le bois mais les métaux. Et les sites classés font tomber les exonérations d'urbanisme dès le premier mètre carré.",
      ],
    },
    contexteTuiles: [
      {
        titre: 'Le sol',
        icone: 'layers',
        texte:
          "Le sable ne porte pas mal, il porte inégalement. Une structure fondée en surface descend là où le sable se tasse, et nulle part ailleurs.",
      },
      {
        titre: 'Le vent',
        icone: 'air',
        texte:
          "Une pergola prend au vent, ses lames orientables davantage encore. C'est l'ancrage qui commande le dimensionnement, jamais la lame.",
      },
      {
        titre: 'Le sel',
        icone: 'water_drop',
        texte:
          "Il n'attaque pas le bois mais les métaux : la visserie d'un platelage, l'alliage d'un profilé. Inox A4 d'un côté, laqueur qualifié de l'autre.",
      },
      {
        titre: "L'urbanisme",
        icone: 'description',
        texte:
          "Ville d'Hiver, dune du Pilat, forêt de La Teste : en site classé, les exonérations tombent. Déclaration préalable, avis de l'ABF, deux mois d'instruction.",
      },
    ],
    contexteChute:
      "Chacun de ces quatre points se traite différemment selon l'ouvrage. C'est pourquoi nous avons une page par ouvrage plutôt qu'une page qui dirait tout à moitié.",
    galerie: [
      {
        src: '/images/terrasse-bois-plots-gironde-4.webp',
        w: 850,
        h: 1133,
        alt: "Terrasse bois posée à même le sable devant une maison à bardage noir, pins maritimes en arrière-plan, chantier de L'Esprit Bois à Lacanau",
        legende:
          'Lacanau, le sable vient jusqu\'à la rive du platelage. C\'est le sol du littoral, et il ne porte pas seul.',
      },
      {
        src: '/images/realisations/pergola-aluminium-terrasse-bois-libourne-3.webp',
        w: 825,
        h: 1100,
        alt: "Pergola aluminium anthracite avec store screen à zip déployé sur un côté, posée sur une terrasse bois, réalisation de L'Esprit Bois à Saint-Pey-de-Castets",
        legende:
          'Saint-Pey-de-Castets, pergola aluminium et store à zip, la protection qui tient quand le vent se lève.',
      },
      {
        src: '/images/terrasse-bois-pool-house-noir.webp',
        w: 736,
        h: 981,
        alt: 'Plage de piscine en bois clair longeant un bassin, pool house à bardage noir au fond, réalisation de L\'Esprit Bois à Moulon',
        legende:
          'Moulon, plage de piscine et pool house : le même soin de rive que sur une terrasse de bord de mer.',
      },
    ],
    chantiers: ['lacanau'],
    chantiersTitre: 'Notre chantier littoral le plus proche',
    chantiersIntro:
      "Nous n'avons pas encore de chantier sur le Bassin. Notre référence côtière est à Lacanau, sur la côte océane, ce n'est pas le Bassin, et c'est une terrasse. Mais le sol y pose exactement la même question, et c'est celle qu'il faut poser à tout artisan qui se déplace chez vous.",
    guides: [
      {
        slug: 'autorisation-urbanisme-abri-carport-pergola-2026',
        titre: 'Quelle autorisation d’urbanisme en 2026 ?',
        pourquoi:
          'Les seuils de droit commun, à connaître avant de découvrir que le périmètre protégé les fait tomber.',
      },
      {
        slug: 'bois-local-pin-maritime-douglas-gironde',
        titre: 'Bois local en Gironde : que vaut la filière ?',
        pourquoi:
          'Le pin maritime des Landes de Gascogne pousse sur le même sable, durabilité réelle, et cas où nous proposons autre chose.',
      },
      {
        slug: 'traiter-bois-exterieur-avant-hiver',
        titre: 'Traiter ses bois avant l’hiver',
        pourquoi:
          "Sur le littoral, l'alternance humide-sec use plus vite qu'à l'intérieur des terres : la fenêtre de traitement compte.",
      },
    ],
    acces:
      "L'atelier est aux Billaux, près de Libourne : comptez un peu plus d'une heure de route jusqu'au Bassin. Le relevé et le devis sont gratuits, déplacement compris, nous ne facturons pas la distance, nous en tenons compte dans l'organisation du chantier, en préparant davantage en atelier pour réduire le nombre de journées sur place.",
    faq: [
      {
        q: 'Intervenez-vous vraiment sur le Bassin d’Arcachon ?',
        r: "Oui, et nous préférons annoncer la situation plutôt que de la laisser deviner : c'est un secteur que nous développons, où nous n'avons pas encore posé. Le relevé et le devis sont gratuits, déplacement compris. Ce que vous ne trouverez pas ici, c'est une liste de vingt références locales, vous le verriez au premier rendez-vous.",
      },
      {
        q: 'Quels ouvrages réalisez-vous sur le secteur ?',
        r: "Pergolas et terrasses bois pour l'instant, chacune traitée sur sa propre page parce que le Bassin ne leur pose pas les mêmes problèmes. Carports et extensions à ossature bois font partie de nos gammes et nous les réalisons ailleurs en Gironde ; nous ouvrirons leurs pages pour le Bassin quand nous aurons de quoi les écrire autrement qu'en généralités.",
      },
      {
        q: 'Le déplacement depuis Libourne est-il facturé ?',
        r: "Non. Comptez un peu plus d'une heure de route depuis notre atelier des Billaux : le relevé et le devis restent gratuits, déplacement compris. La distance ne se retrouve pas en ligne sur le devis, elle se retrouve dans l'organisation, nous préparons davantage en atelier pour réduire le nombre de journées sur place.",
      },
      {
        q: 'Faut-il une autorisation pour un ouvrage extérieur sur le Bassin ?',
        r: "Plus souvent qu'ailleurs, et plus tôt. Les seuils de droit commun (déclaration préalable de 5 à 20 m², permis au-delà) cessent de s'appliquer en site classé et aux abords des monuments historiques : l'article R. 421-11 du code de l'urbanisme y remet en déclaration préalable ce qui en serait normalement dispensé, avec avis de l'Architecte des Bâtiments de France. Le Bassin concentre ces périmètres. Nous vérifions la situation de la parcelle au relevé.",
      },
    ],
  },
];

/** Format approximatif du bandeau de héros sur un écran large : le conteneur
 *  fait environ 1424 × 746 px, soit 1,9. */
const FORMAT_HERO = 1.9;

/** Part minimale de la hauteur de la photo qui doit rester visible dans le
 *  bandeau. En dessous, on ne montre plus une photo mais une bande prélevée en
 *  son milieu, et ce qu'elle contient relève de la chance. */
const PART_MINIMALE = 0.5;

/** Refuse une couverture de zone trop haute pour le bandeau du héros.
 *
 *  Constaté le 24/08/2026 sur la zone Entre-deux-Mers : sa couverture était une
 *  photo en portrait de 825 × 1100. `object-cover` n'en gardait qu'une bande
 *  centrale, ici la façade de la maison, et le voile du héros (0,9 à 0,6
 *  d'opacité) achevait de l'éteindre. Le héros s'affichait comme un rectangle
 *  noir, et rien dans le code ne le signalait.
 *
 *  Même politique que le contrôle de longueur des balises dans `lib/metadata.ts`
 *  : on échoue franchement au build et en développement, on se contente d'un
 *  avertissement en production, une page en ligne ne devant jamais tomber pour
 *  un motif d'affichage. */
function verifieCouvertures(zones: Zone[]) {
  const ecarts = zones
    .map((z) => {
      const part = Math.min(z.coverW / z.coverH / FORMAT_HERO, 1);
      if (part >= PART_MINIMALE) return null;
      return (
        `${z.slug} : couverture ${z.coverW}×${z.coverH}, ` +
        `le bandeau n'en garderait que ${Math.round(part * 100)} % de la hauteur ` +
        `(minimum ${PART_MINIMALE * 100} %). Prenez une photo au moins aussi large que haute.`
      );
    })
    .filter((x): x is string => x !== null);

  if (ecarts.length === 0) return;

  const message = '[ZONES] couverture inadaptée au bandeau du héros\n  ' + ecarts.join('\n  ');
  const bloquant =
    process.env.NEXT_PHASE === 'phase-production-build' ||
    process.env.NODE_ENV === 'development';

  if (bloquant) throw new Error(message);
  console.warn(message);
}

verifieCouvertures(ZONES);

export const getZone = (slug: string) => ZONES.find((z) => z.slug === slug);
