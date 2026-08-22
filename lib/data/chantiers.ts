// =========================================================================
// L'ESPRIT BOIS — chantiers documentés.
//
// Source unique des études de cas : /realisations les affiche toutes, les pages
// de zone (lib/data/zones.ts) en reprennent un sous-ensemble par `id`. Un
// chantier n'est donc raconté qu'une fois, avec les mêmes faits partout.
// =========================================================================

/** Un chantier documenté : commune réelle, ouvrage réel, contrainte réelle, durée réelle.
 *  Toutes ces données viennent de l'entreprise — rien n'est extrapolé. */
export type Chantier = {
  id: string;
  commune: string;
  categorie: string;
  titre: string;
  src: string;
  w: number;
  h: number;
  alt: string;
  faits: { label: string; valeur: string }[];
  paragraphes: string[];
};

export const CHANTIERS: Chantier[] = [
  {
    id: 'saint-pey-de-castets',
    commune: 'Saint-Pey-de-Castets',
    categorie: 'Pergola',
    titre: 'Ombrager une terrasse plein sud sans lui retirer sa lumière',
    src: '/images/realisations/pergola-aluminium-terrasse-bois-libourne-5.webp',
    w: 825,
    h: 1100,
    alt: "Pergola aluminium anthracite adossée à une maison, vue de trois-quarts depuis le jardin, couverture translucide visible, à Saint-Pey-de-Castets",
    faits: [
      { label: 'Ouvrage', valeur: 'Pergola aluminium adossée' },
      { label: 'Couverture', valeur: 'Panneau sandwich isolé + bande vitrée' },
      { label: 'Équipement', valeur: 'Deux stores électriques verticaux' },
      { label: 'Durée', valeur: '3 jours' },
    ],
    paragraphes: [
      "La terrasse était plein sud. En juillet, elle devenait inutilisable passé onze heures ; l'hiver, c'était le seul endroit de la maison à capter du soleil. Le client ne voulait pas choisir entre les deux.",
      "Une pergola à couverture opaque aurait réglé la chaleur en assombrissant la pièce qui donne dessus. Nous avons donc composé la toiture : du panneau sandwich isolé sur la plus grande partie, qui coupe le rayonnement et évite l'effet de fournaise sous la tôle, et une bande vitrée au droit de la baie pour que la lumière continue d'entrer. Deux stores électriques verticaux ferment les côtés exposés au soleil rasant de fin de journée — on les descend quand il faut, on les remonte le reste du temps.",
      "La structure est en aluminium thermolaqué, adossée à la façade. La terrasse bois sur laquelle elle repose avait été construite par le client lui-même : nos poteaux la traversent pour descendre jusqu'à leurs propres appuis, sans s'appuyer sur son platelage ni obliger à la reprendre.",
      "Trois jours sur place, structure, couverture et stores compris. C'est le rythme d'un ouvrage préparé en atelier : on arrive avec des pièces à assembler, pas à fabriquer.",
    ],
  },
  {
    id: 'clerac',
    commune: 'Clérac',
    categorie: 'Extension ossature bois',
    titre: 'Greffer une ossature bois sur une grange en pierre',
    src: '/images/source-adefrance/WhatsApp-Image-2025-05-02-a-13.59.24_f4a63f6d-opt.webp',
    w: 900,
    h: 1200,
    alt: "Extension à ossature bois bardée en bois vertical raccordée à une grange en pierre, chantier de L'Esprit Bois à Clérac",
    faits: [
      { label: 'Ouvrage', valeur: 'Extension à ossature bois, conception et réalisation' },
      { label: 'Livraison', valeur: "Hors d'eau, hors d'air" },
      { label: 'Enveloppe', valeur: 'Isolation thermique par l\'extérieur, bardage bois vertical' },
      { label: 'Durée', valeur: '3 semaines' },
    ],
    paragraphes: [
      "Une grange en pierre, des contreforts métalliques scellés en façade, et l'envie de gagner du volume sans dénaturer le bâti existant. Nous avons conçu et réalisé l'extension complète, jusqu'au hors d'eau hors d'air.",
      "Le point dur, c'était le raccord. Greffer une ossature bois neuve sur un mur en pierre ancien n'est pas qu'une question d'allure : c'est une question de continuité de l'enveloppe. Un joint mal traité entre deux systèmes constructifs, et vous obtenez un pont thermique sur toute la hauteur, avec la condensation qui l'accompagne.",
      "Nous avons donc mené l'extension avec une isolation thermique par l'extérieur, pour que l'enveloppe neuve se referme sur l'existant plutôt que de simplement s'y accoler. Le bardage bois vertical prend le relais du mur en pierre à la même hauteur, et la couverture en tuiles prolonge celle de la grange sans rupture de pente.",
      "Trois semaines de chantier, conception, fabrication et pose menées par nos équipes.",
    ],
  },
  {
    id: 'genissac',
    commune: 'Génissac',
    categorie: 'Extension ossature bois',
    titre: 'Construire droit sous une toiture qui avait bougé',
    src: '/images/source-adefrance/IMG-20240712-WA0039-opt.webp',
    w: 825,
    h: 1100,
    alt: "Baie vitrée coulissante posée dans un bardage bois teinté, extension à ossature bois réalisée à Génissac",
    faits: [
      { label: 'Ouvrage', valeur: 'Extension à ossature bois, clé en main' },
      { label: 'Particularité', valeur: 'Toiture existante conservée' },
      { label: 'Menuiserie', valeur: 'Baie coulissante toute hauteur' },
      { label: 'Durée', valeur: '1 mois' },
    ],
    paragraphes: [
      "À Génissac, le client voulait une extension livrée clé en main, finitions comprises, et tenait à conserver la toiture existante plutôt qu'à la refaire.",
      "C'est ce deuxième point qui a fait le chantier. La charpente en place avait bougé : elle n'était plus d'aplomb, et les relevés ne donnaient pas les mêmes cotes d'un bout à l'autre du rampant. Poser une ossature neuve sur des cotes théoriques aurait produit un décalage visible dès la première panne, impossible à rattraper ensuite.",
      "Nous avons donc relevé la toiture point par point avant de dessiner quoi que ce soit, puis absorbé les différences dans la structure neuve plutôt que dans les finitions. C'est plus long en préparation, mais c'est la seule manière d'obtenir un raccord qui paraît droit à l'œil une fois le chantier fini.",
      "L'extension est bardée en bois teinté et s'ouvre sur le jardin par une baie coulissante toute hauteur. Un mois de travail, de la conception aux finitions.",
    ],
  },
  {
    id: 'rauzan',
    commune: 'Rauzan',
    categorie: 'Construction bois',
    titre: 'Une maison de 150 m² mêlant ossature bois et maçonnerie',
    src: '/images/source-adefrance/IMG-20250129-WA0077-opt.webp',
    w: 900,
    h: 1200,
    alt: "Maison à ossature bois bardée en bois vertical avec grande baie fixe, construction complète réalisée à Rauzan",
    faits: [
      { label: 'Ouvrage', valeur: 'Maison et garage, ensemble de 150 m²' },
      { label: 'Structure', valeur: 'Ossature bois et volume traditionnel' },
      { label: 'Mission', valeur: 'Conception et réalisation jusqu\'aux finitions intérieures' },
      { label: 'Durée', valeur: '1 mois et demi' },
    ],
    paragraphes: [
      "À Rauzan, il ne s'agissait pas d'agrandir mais de construire : un ensemble de 150 m², maison et garage, dont nous avons assuré la conception et la réalisation complètes, jusqu'aux finitions intérieures.",
      "Le projet mêle deux modes constructifs. L'essentiel du volume est en ossature bois. Une partie a été traitée en maçonnerie traditionnelle, là où le programme et le terrain le demandaient. Faire cohabiter les deux sur un même bâtiment suppose de caler très tôt les niveaux finis, les épaisseurs d'enveloppe et les points de raccord : ce qui n'est pas arbitré au dessin se rattrape en fin de chantier, et se rattrape mal.",
      "La façade est bardée en bois vertical, la couverture en tuiles, les menuiseries en aluminium noir.",
      "Un mois et demi de chantier pour une maison livrée finie, avec un seul interlocuteur du premier plan à la dernière plinthe.",
    ],
  },
  {
    id: 'moulon',
    commune: 'Moulon',
    categorie: 'Terrasse',
    titre: 'Une plage de piscine en ipé, ajustée à la margelle',
    src: '/images/terrasse-bois-pool-house-noir.webp',
    w: 736,
    h: 981,
    alt: "Terrasse en ipé longeant une piscine, avec pool house à bardage noir en arrière-plan, chantier réalisé à Moulon",
    faits: [
      { label: 'Ouvrage', valeur: 'Terrasse et aménagement du tour de bassin' },
      { label: 'Essence', valeur: 'Ipé' },
      { label: 'Durée', valeur: '10 jours' },
    ],
    paragraphes: [
      "À Moulon, la piscine était là, la maison aussi. Il manquait ce qui relie les deux.",
      "Nous avons posé une terrasse complète en ipé et traité tout l'aménagement du tour de bassin. L'ipé n'est pas le bois le plus simple à travailler : dense et dur, il use la visserie et impose des avant-trous systématiques. En contrepartie, il ne grise pas comme un résineux, il ne donne pas d'échardes pieds nus, et il tient au bord d'une eau chlorée sans traitement lourd.",
      "Le tracé suit le bassin au plus juste : la lame de rive vient affleurer la margelle sur toute la longueur, sans jeu qui se voit ni coupe biaise rattrapée à la volée. C'est ce genre de détail qui décide de l'allure d'une plage de piscine, bien plus que le choix de l'essence.",
      'Dix jours de pose.',
    ],
  },
  {
    id: 'lacanau',
    commune: 'Lacanau',
    categorie: 'Terrasse',
    titre: 'Aller chercher un sol qui tient sous le sable',
    src: '/images/terrasse-bois-plots-gironde-2.webp',
    w: 1200,
    h: 900,
    alt: "Terrasse bois en pin US posée sur sol sableux entre deux maisons, chantier de L'Esprit Bois à Lacanau",
    faits: [
      { label: 'Ouvrage', valeur: 'Terrasse bois complète' },
      { label: 'Essence', valeur: 'Pin US' },
      { label: 'Fondation', valeur: 'Vis de fondation' },
      { label: 'Durée', valeur: '3 jours' },
    ],
    paragraphes: [
      "Le sable, à Lacanau, ne porte pas. On peut poser une terrasse sur plots réglables et la voir descendre irrégulièrement au bout de deux hivers, ou on peut aller chercher un sol qui tient.",
      "Nous sommes allés le chercher. La terrasse repose sur des vis de fondation, vissées jusqu'à trouver de la résistance, et non sur un lit de plots posés en surface. La mise en œuvre est plus longue au départ, mais elle supprime le rattrapage de niveau qui revient chaque année sur les terrains sableux du littoral.",
      "Le platelage est en pin US, avec une plinthe de rive qui referme la structure sur les quatre côtés : le sable ne s'installe pas dessous, et la terrasse présente une ligne franche plutôt qu'un dessous ouvert.",
      'Trois jours de pose, structure et finition comprises.',
    ],
  },
  {
    id: 'montussan',
    commune: 'Montussan',
    categorie: 'Pergola',
    titre: 'Une pose en tunnel, entre deux murs, sans jeu de montage',
    src: '/images/source-adefrance/construction-pool-house-aluminium-libourne.webp',
    w: 768,
    h: 512,
    alt: "Pergola aluminium isolée couvrant un espace bar avec plancha et plan de travail, réalisée à Montussan",
    faits: [
      { label: 'Ouvrage', valeur: 'Pergola aluminium isolée' },
      { label: 'Contrainte', valeur: 'Pose en tunnel, sur mesure' },
      { label: 'Usage', valeur: 'Espace bar couvert' },
      { label: 'Durée', valeur: '2 jours' },
    ],
    paragraphes: [
      "Le client de Montussan voulait un espace bar couvert, avec plancha et plan de travail, dans une cour fermée sur ses côtés.",
      "Une pose en tunnel — entre deux ouvrages existants, sans possibilité de reculer pour ajuster — ne pardonne pas l'approximation. Il n'y a pas de jeu de montage : la structure entre au millimètre, ou elle n'entre pas. Toutes les cotes ont donc été relevées sur place, et la pergola fabriquée sur mesure à partir de ce relevé plutôt qu'à partir d'un modèle standard rattrapé par des habillages.",
      "La couverture est en panneau isolé, et ce n'est pas un détail de confort : sous une simple plaque, un espace bar orienté plein soleil devient un four en plein été. Ici, on peut cuisiner dessous à midi.",
      'Deux jours de pose pour la structure.',
    ],
  },
  {
    id: 'capian',
    commune: 'Capian',
    categorie: 'Carport',
    titre: 'Trois voitures, un terrain en pente et un budget serré',
    src: '/images/source-adefrance/Carport-bois-Libourne-3.webp',
    w: 1200,
    h: 646,
    alt: "Carport bois autoporté à couverture bac acier pour trois véhicules, posé sur terrain en pente à Capian",
    faits: [
      { label: 'Ouvrage', valeur: 'Carport bois 6 × 9 m, trois véhicules' },
      { label: 'Couverture', valeur: 'Bac acier' },
      { label: 'Fondation', valeur: 'Vis de fondation de 1,50 m' },
      { label: 'Durée', valeur: "1 jour d'atelier + 2 jours de pose" },
    ],
    paragraphes: [
      "Trois voitures à abriter, un terrain en pente et un budget serré : à Capian, les trois contraintes tiraient dans des directions opposées.",
      "Sur un sol horizontal, on coule une dalle ou des plots et l'affaire est réglée. En pente, une dalle suppose un terrassement, un décaissement et un soutènement — soit une bonne part du budget dépensée avant d'avoir posé le premier poteau.",
      "Nous avons donc fondé le carport sur des vis de fondation d'un mètre cinquante, vissées directement dans le sol. Chaque pied se règle indépendamment en hauteur, ce qui permet de rattraper la pente sans toucher au terrain. Pas de béton, pas d'évacuation de terre, pas de délai de séchage : le budget passe dans la structure au lieu de partir dans le sol.",
      "Le carport fait 6 mètres sur 9, en bois avec couverture bac acier, dimensionné pour trois véhicules de front. Une journée de taille à l'atelier, deux jours de pose sur place.",
    ],
  },
];
