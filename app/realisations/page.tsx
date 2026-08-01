import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import GalerieChantiers, { type Vignette } from './GalerieChantiers';

export const metadata: Metadata = buildMetadata({
  title: 'Réalisations : carports, pergolas, extensions bois | L\'Esprit Bois',
  description:
    'Nos chantiers racontés : carport à Capian, extension à Clérac, maison ossature bois à Rauzan, terrasse à Lacanau, pergola à Montussan. Douze communes, contraintes et durées détaillées.',
  keywords:
    "réalisations L'Esprit Bois, chantiers Libourne, carport Capian, extension bois Clérac, maison ossature bois Rauzan, terrasse Lacanau, pergola Montussan",
  path: '/realisations',
  ogImage: '/images/realisations/pergola-aluminium-terrasse-bois-libourne-1.webp',
  ogTitle: 'Nos chantiers, racontés : douze communes de Gironde',
  ville: 'Libourne',
});

/** Un chantier documenté : commune réelle, ouvrage réel, contrainte réelle, durée réelle.
 *  Toutes ces données viennent de l'entreprise — rien n'est extrapolé. */
type Chantier = {
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

const CHANTIERS: Chantier[] = [
  {
    id: 'saint-pey-de-castets',
    commune: 'Saint-Pey-de-Castets',
    categorie: 'Pergola',
    titre: 'Ombrager une terrasse plein sud sans lui retirer sa lumière',
    src: '/images/realisations/pergola-aluminium-toit-polycarbonate-libourne-6.webp',
    w: 825,
    h: 1100,
    alt: "Couverture de pergola aluminium vue de dessous, alternant panneaux sandwich isolés et bandes vitrées au-dessus d'une porte-fenêtre, à Saint-Pey-de-Castets",
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

/** Quatre carports supplémentaires : mêmes ouvrages, contraintes différentes.
 *  Traités en format court pour éviter quatre textes redondants. */
const CARPORTS_COURTS = [
  {
    commune: "Lugon-et-l'Île-du-Carnay",
    titre: 'Carport adossé de 13 mètres',
    src: '/images/source-adefrance/Carport-bois-Libourne-1.webp',
    w: 1200,
    h: 646,
    alt: "Carport bois adossé courant le long d'une maison sur treize mètres, réalisé à Lugon-et-l'Île-du-Carnay",
    texte:
      "Treize mètres de long pour trois mètres cinquante de large : le passage entre la maison et le mur de clôture ne laissait pas d'autre emprise. S'y ajoutaient une hauteur disponible limitée et un budget contraint. Nous avons dessiné une charpente adossée à la façade, sans poteaux côté maison, avec des sections calculées au plus juste pour ne pas manger la hauteur libre. Couverture bac acier.",
    duree: "1 jour d'atelier + 2 jours de pose",
  },
  {
    commune: 'Lagorce',
    titre: 'Un carport prévu pour devenir garage',
    src: '/images/source-adefrance/Carport-bois-Libourne-5.webp',
    w: 1200,
    h: 646,
    alt: 'Charpente bois à deux pentes de huit mètres sur huit posée sur dalle béton, chantier à Lagorce',
    texte:
      "Le client voulait pouvoir fermer son carport plus tard pour en faire un garage. Un abri conçu pour rester ouvert ne se ferme pas sans tout reprendre : les descentes de charge changent dès qu'on ajoute des murs. Nous avons donc dimensionné une structure à deux pentes de 8 mètres sur 8, calculée sur ses portées pour rester légère tout en acceptant une fermeture ultérieure.",
    duree: "1 jour d'atelier + 2 jours de pose",
  },
  {
    commune: 'Arveyres',
    titre: 'Une structure adaptée à des plots existants',
    src: '/images/source-adefrance/Carport-bois-Libourne-6.webp',
    w: 1200,
    h: 646,
    alt: 'Carport bois autoporté à toiture plate abritant deux voitures en bordure de champ, réalisé à Arveyres',
    texte:
      "Les plots étaient déjà coulés quand nous sommes arrivés : le client les avait faits lui-même, à ses cotes. Plutôt que de les casser, nous avons relevé leur implantation réelle et dessiné le carport autour. C'est la structure qui s'adapte au sol, pas l'inverse. Huit mètres sur cinq, couverture en bac acier isolé pour limiter le bruit de la pluie et l'échauffement sous la tôle.",
    duree: "1 jour d'atelier + 2 jours de pose",
  },
  {
    commune: 'Saint-Denis-de-Pile',
    titre: 'Un trapèze en limite de propriété',
    src: '/images/source-adefrance/carport-bois-libourne.webp',
    w: 1200,
    h: 646,
    alt: 'Carport bois à toiture plate implanté en limite de propriété entre une palissade et une clôture, à Saint-Denis-de-Pile',
    texte:
      "Implanté en limite de propriété, sur une emprise en trapèze : aucun angle droit, donc aucune pièce standard. Chaque élément a été taillé sur mesure à partir du relevé, et la couverture recoupée pour suivre la limite sans déborder chez le voisin. Toit plat, six mètres sur cinq.",
    duree: '½ journée de taille + 3 jours de pose',
  },
];

/** Galerie. Chaque vignette est un ouvrage réalisé par l'entreprise ou une pièce
 *  exposée sur son dépôt — les visuels fournisseur en ont été retirés. */
const GALERIE: Vignette[] = [
  {
    src: '/images/realisations/pergola-aluminium-terrasse-bois-libourne-1.webp',
    w: 1600,
    h: 900,
    cat: 'pergolas',
    categorie: 'Pergolas',
    titre: 'Pergola aluminium adossée',
    lieu: 'Saint-Pey-de-Castets',
    alt: "Pergola aluminium anthracite adossée à une maison, vue en enfilade sur la terrasse bois, à Saint-Pey-de-Castets",
  },
  {
    src: '/images/realisations/pergola-aluminium-store-zip-libourne-2.webp',
    w: 1100,
    h: 825,
    cat: 'pergolas',
    categorie: 'Pergolas',
    titre: 'Store électrique descendu',
    lieu: 'Saint-Pey-de-Castets',
    alt: 'Vue sous une pergola aluminium avec store électrique descendu, terrasse bois et mobilier de jardin',
  },
  {
    src: '/images/realisations/pergola-aluminium-terrasse-bois-libourne-3.webp',
    w: 825,
    h: 1100,
    cat: 'pergolas',
    categorie: 'Pergolas',
    titre: 'Pergola fermée par ses stores',
    lieu: 'Saint-Pey-de-Castets',
    alt: 'Pergola aluminium anthracite fermée par des stores, posée sur une terrasse bois',
  },
  {
    src: '/images/realisations/pergola-aluminium-toit-polycarbonate-libourne-4.webp',
    w: 825,
    h: 1100,
    cat: 'pergolas',
    categorie: 'Pergolas',
    titre: 'Bande vitrée en couverture',
    lieu: 'Saint-Pey-de-Castets',
    alt: "Couverture de pergola aluminium associant panneau sandwich isolé et bande vitrée au-dessus d'une terrasse bois",
  },
  {
    src: '/images/realisations/pergola-aluminium-terrasse-bois-libourne-5.webp',
    w: 825,
    h: 1100,
    cat: 'pergolas',
    categorie: 'Pergolas',
    titre: 'Pergola vue depuis le jardin',
    lieu: 'Saint-Pey-de-Castets',
    alt: 'Pergola aluminium et terrasse bois vues depuis le jardin',
  },
  {
    src: '/images/realisations/pergola-aluminium-toit-polycarbonate-libourne-6.webp',
    w: 825,
    h: 1100,
    cat: 'pergolas',
    categorie: 'Pergolas',
    titre: 'Structure et couverture',
    lieu: 'Saint-Pey-de-Castets',
    alt: "Détail de la couverture en panneau sandwich isolé d'une pergola aluminium adossée à la façade",
  },
  {
    src: '/images/realisations/terrasse-bois-pergola-aluminium-libourne-7.webp',
    w: 825,
    h: 1100,
    cat: 'pergolas',
    categorie: 'Pergolas',
    titre: 'Poteau traversant le platelage',
    lieu: 'Saint-Pey-de-Castets',
    alt: "Poteau de pergola aluminium traversant le platelage d'une terrasse bois pour descendre à son propre appui",
  },
  {
    src: '/images/realisations/salon-sous-pergola-aluminium-libourne-8.webp',
    w: 825,
    h: 1100,
    cat: 'pergolas',
    categorie: 'Pergolas',
    titre: 'Salon sous pergola',
    lieu: 'Saint-Pey-de-Castets',
    alt: 'Salon de jardin installé sous une pergola aluminium avec stores, sur terrasse bois',
  },
  {
    src: '/images/source-adefrance/Carport-bois-Libourne-1.webp',
    w: 1200,
    h: 646,
    cat: 'carports',
    categorie: 'Carports',
    titre: 'Carport adossé de 13 mètres',
    lieu: "Lugon-et-l'Île-du-Carnay",
    alt: "Carport bois adossé courant le long d'une maison sur treize mètres, poteaux et pannes apparents",
  },
  {
    src: '/images/source-adefrance/Carport-bois-Libourne-2.webp',
    w: 1200,
    h: 646,
    cat: 'carports',
    categorie: 'Carports',
    titre: 'Charpente vue de dessous',
    lieu: "Lugon-et-l'Île-du-Carnay",
    alt: 'Charpente de carport bois adossée à une façade, vue en contre-jour au coucher du soleil',
  },
  {
    src: '/images/source-adefrance/Carport-bois-Libourne-3.webp',
    w: 1200,
    h: 646,
    cat: 'carports',
    categorie: 'Carports',
    titre: 'Carport trois voitures sur pente',
    lieu: 'Capian',
    alt: 'Carport bois autoporté à couverture bac acier pour trois véhicules, fondé sur vis de fondation',
  },
  {
    src: '/images/source-adefrance/Carport-bois-Libourne-5.webp',
    w: 1200,
    h: 646,
    cat: 'carports',
    categorie: 'Carports',
    titre: 'Charpente à deux pentes',
    lieu: 'Lagorce',
    alt: 'Charpente bois à deux pentes de huit mètres sur huit posée sur dalle béton, en cours de chantier',
  },
  {
    src: '/images/source-adefrance/Carport-bois-Libourne-6.webp',
    w: 1200,
    h: 646,
    cat: 'carports',
    categorie: 'Carports',
    titre: 'Carport sur plots existants',
    lieu: 'Arveyres',
    alt: 'Carport bois autoporté à toiture plate abritant deux voitures en bordure de champ',
  },
  {
    src: '/images/source-adefrance/carport-bois-libourne.webp',
    w: 1200,
    h: 646,
    cat: 'carports',
    categorie: 'Carports',
    titre: 'Carport en limite de propriété',
    lieu: 'Saint-Denis-de-Pile',
    alt: 'Carport bois à toiture plate implanté en limite de propriété entre une palissade et une clôture',
  },
  {
    src: '/images/terrasse-bois-plots-gironde-2.webp',
    w: 1200,
    h: 900,
    cat: 'terrasses',
    categorie: 'Terrasses',
    titre: 'Terrasse pin US sur sol sableux',
    lieu: 'Lacanau',
    alt: 'Terrasse bois en pin US posée sur vis de fondation dans le sable, entre deux maisons',
  },
  {
    src: '/images/terrasse-bois-pool-house-noir.webp',
    w: 736,
    h: 981,
    cat: 'terrasses',
    categorie: 'Terrasses',
    titre: 'Plage de piscine en ipé',
    lieu: 'Moulon',
    alt: 'Terrasse en ipé longeant une piscine, pool house à bardage noir en arrière-plan',
  },
  {
    src: '/images/source-adefrance/construction-pool-house-aluminium-libourne.webp',
    w: 768,
    h: 512,
    cat: 'pergolas',
    categorie: 'Pergolas',
    titre: 'Pergola isolée sur espace bar',
    lieu: 'Montussan',
    alt: 'Pergola aluminium isolée couvrant un espace bar avec plancha et plan de travail',
  },
  {
    src: '/images/source-adefrance/WhatsApp-Image-2025-05-02-a-13.59.24_f4a63f6d-opt.webp',
    w: 900,
    h: 1200,
    cat: 'extensions',
    categorie: 'Extensions',
    titre: 'Extension sur grange en pierre',
    lieu: 'Clérac',
    alt: 'Extension à ossature bois bardée en bois vertical raccordée à une grange en pierre',
  },
  {
    src: '/images/source-adefrance/IMG-20240712-WA0039-opt.webp',
    w: 825,
    h: 1100,
    cat: 'extensions',
    categorie: 'Extensions',
    titre: 'Baie coulissante toute hauteur',
    lieu: 'Génissac',
    alt: 'Baie vitrée coulissante posée dans un bardage bois teinté sur une extension à ossature bois',
  },
  {
    src: '/images/source-adefrance/IMG-20250129-WA0077-opt.webp',
    w: 900,
    h: 1200,
    cat: 'constructions',
    categorie: 'Constructions bois',
    titre: 'Maison ossature bois de 150 m²',
    lieu: 'Rauzan',
    alt: 'Maison à ossature bois bardée en bois vertical avec grande baie fixe, en fin de chantier',
  },
  {
    src: '/images/source-adefrance/Pergolas-bois-Libourne.webp',
    w: 900,
    h: 990,
    cat: 'pergolas',
    categorie: 'Pergolas',
    titre: 'Pergola bois massif exposée',
    lieu: 'Notre dépôt, Les Billaux',
    alt: "Pergola en bois massif exposée sur le dépôt de L'Esprit Bois aux Billaux",
  },
  {
    src: '/images/source-adefrance/mais-en-a-accueil.webp',
    w: 768,
    h: 512,
    cat: 'constructions',
    categorie: 'Constructions bois',
    titre: 'Maison en A exposée',
    lieu: 'Notre dépôt, Les Billaux',
    alt: "Maison en A à ossature bois et couverture bac acier exposée sur le dépôt de L'Esprit Bois aux Billaux",
  },
];

const jsonld = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://lesprit-bois.fr/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Réalisations',
        item: 'https://lesprit-bois.fr/realisations',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: "Réalisations de L'Esprit Bois",
    description:
      'Chantiers documentés : carports, pergolas, terrasses, extensions et constructions à ossature bois réalisés en Gironde.',
    about: {
      '@type': 'GeneralContractor',
      name: "L'Esprit Bois",
      telephone: '+33557406580',
      email: 'lespritbois33@gmail.com',
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'Qualibat',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1 Aux Pradasses',
        postalCode: '33500',
        addressLocality: 'Les Billaux',
        addressRegion: 'Gironde',
        addressCountry: 'FR',
      },
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        ...CHANTIERS.map((c, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: `${c.categorie} — ${c.titre}, ${c.commune}`,
          url: `https://lesprit-bois.fr/realisations#${c.id}`,
        })),
        ...CARPORTS_COURTS.map((c, i) => ({
          '@type': 'ListItem',
          position: CHANTIERS.length + i + 1,
          name: `Carport — ${c.titre}, ${c.commune}`,
        })),
      ],
    },
  },
];

export default function RealisationsPage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="realisations" />
      <main id="contenu">
        {/* Hero */}
        <header className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="1600"
              height="900"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src="/images/realisations/pergola-aluminium-terrasse-bois-libourne-1.webp"
              alt="Pergola aluminium adossée et terrasse bois réalisées par L'Esprit Bois à Saint-Pey-de-Castets"
            />
            <div className="absolute inset-0 hero-interne"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-16">
            <p className="font-label-md text-label-md text-white/60 mb-6">
              <a href="/" className="hover:text-secondary-fixed transition-colors">
                Accueil
              </a>
              <span className="mx-2 text-secondary">/</span>
              <span className="text-secondary-fixed">Réalisations</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Nos chantiers
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6">
              Nos réalisations à Libourne et en Gironde
            </h1>
            <p className="font-body-lg text-body-lg text-white/85 max-w-2xl">
              Carports, pergolas, terrasses, extensions et constructions à ossature bois. Douze chantiers racontés
              avec leur commune, leur contrainte et leur durée.
            </p>
          </div>
        </header>

        {/* Bandeau de confiance */}
        <section className="bg-surface border-b border-surface-variant" aria-label="Nos garanties">
          <div className="max-w-container-max mx-auto px-6 md:px-16 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-dark text-3xl shrink-0">verified</span>
              <div>
                <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Certifiés Qualibat
                </p>
                <p className="text-on-surface-variant text-body-md">La qualification reconnue du bâtiment</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-dark text-3xl shrink-0">shield</span>
              <div>
                <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Garantie décennale
                </p>
                <p className="text-on-surface-variant text-body-md">Vos ouvrages couverts pendant 10 ans</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-dark text-3xl shrink-0">handshake</span>
              <div>
                <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Un seul interlocuteur
                </p>
                <p className="text-on-surface-variant text-body-md">De l'étude à la pose, sans sous-traitance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Chapô */}
        <section className="pt-section-padding pb-14 bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Ce que nous avons bâti
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                Douze chantiers, douze contraintes différentes
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Un carport pour trois voitures sur un terrain en pente à{' '}
                <strong className="text-primary font-semibold">Capian</strong>, une extension greffée sur une grange
                en pierre à <strong className="text-primary font-semibold">Clérac</strong>, une terrasse posée sur le
                sable à <strong className="text-primary font-semibold">Lacanau</strong>, une maison de 150 m² à{' '}
                <strong className="text-primary font-semibold">Rauzan</strong> : aucun de ces projets ne ressemble au
                précédent.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ce qui se répète, c'est la méthode — le relevé avant le dessin, la fabrication en atelier, la pose par
                nos équipes. Voici ce que chacun de ces chantiers a demandé, sans arrondir les angles.
              </p>
            </div>
          </div>
        </section>

        {/* Études de cas */}
        <section className="pb-section-padding bg-surface" id="etudes-de-cas">
          <div className="max-w-container-max mx-auto px-6 md:px-16 space-y-20 lg:space-y-28">
            {CHANTIERS.map((c, i) => (
              <article
                key={c.id}
                id={c.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center scroll-mt-32"
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : undefined}>
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      width={c.w}
                      height={c.h}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto"
                      src={c.src}
                      alt={c.alt}
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : undefined}>
                  <p className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark mb-2">
                    {c.categorie} — {c.commune}
                  </p>
                  <h3 className="font-headline-md text-headline-md text-primary mt-2 mb-6">{c.titre}</h3>
                  {c.paragraphes.map((p) => (
                    <p key={p.slice(0, 40)} className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                      {p}
                    </p>
                  ))}
                  <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 border-t border-surface-variant pt-6">
                    {c.faits.map((f) => (
                      <div key={f.label}>
                        <dt className="font-label-md text-label-md uppercase tracking-widest text-secondary-dark text-[12px]">
                          {f.label}
                        </dt>
                        <dd className="text-on-surface-variant text-body-md mt-1">{f.valeur}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Quatre carports en format court */}
        <section className="py-section-padding bg-surface-container-low" id="autres-carports">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-12">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Carports
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                Quatre autres carports, quatre contraintes
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Un carport, c'est quatre poteaux et une couverture. Ce qui change d'un chantier à l'autre, c'est ce
                qu'il y a autour : le sol, la limite de propriété, la place disponible, ce que le client veut pouvoir
                en faire dans dix ans.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {CARPORTS_COURTS.map((c) => (
                <article key={c.commune} className="flex flex-col">
                  <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
                    <img
                      width={c.w}
                      height={c.h}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto"
                      src={c.src}
                      alt={c.alt}
                    />
                  </div>
                  <p className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark mb-2">
                    {c.commune}
                  </p>
                  <h3 className="font-headline-sm text-headline-sm text-primary text-[20px] mb-4">{c.titre}</h3>
                  <p className="text-on-surface-variant text-body-md mb-4">{c.texte}</p>
                  <p className="text-on-surface-variant text-body-md mt-auto">
                    <span className="font-label-md text-label-md uppercase tracking-widest text-secondary-dark text-[12px]">
                      Durée
                    </span>
                    <br />
                    {c.duree}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Filtres + galerie */}
        <section className="py-section-padding bg-surface" id="galerie">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-12">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                En images
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                Toutes nos photos de chantier
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Chaque photo est un ouvrage sorti de notre atelier, ou une pièce exposée sur notre dépôt des Billaux.
                Aucun visuel de catalogue.
              </p>
            </div>

            <GalerieChantiers vignettes={GALERIE} />

            <p className="mt-12 text-on-surface-variant text-body-md">
              Un projet similaire en tête ? Découvrez nos{' '}
              <a
                href="/carports"
                className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
              >
                carports
              </a>
              , nos{' '}
              <a
                href="/pergolas"
                className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
              >
                pergolas
              </a>
              , nos{' '}
              <a
                href="/amenagement-exterieur"
                className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
              >
                aménagements extérieurs
              </a>{' '}
              et nos{' '}
              <a
                href="/constructions-bois"
                className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
              >
                constructions bois
              </a>
              .
            </p>
          </div>
        </section>

        {/* Zone d'intervention */}
        <section className="py-section-padding bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Zone d'intervention
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                De Libourne à Lacanau, en passant par l'Entre-deux-Mers
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Notre atelier est basé au{' '}
                <strong className="text-primary font-semibold">1 Aux Pradasses, 33500 Les Billaux</strong>, à cinq
                minutes de Libourne. Sur un chantier, la proximité se voit : nous passons, nous corrigeons, nous
                restons joignables après la réception.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nos chantiers récents nous ont menés dans tout le Libournais, dans l'Entre-deux-Mers jusqu'à Capian,
                et jusqu'au littoral à Lacanau. Les communes ci-contre sont celles où nous sommes intervenus ou où
                nous nous déplaçons régulièrement.
              </p>
            </div>
            <div>
              <h3 className="font-label-md text-label-md uppercase tracking-widest text-primary mb-6">
                Communes desservies
              </h3>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-on-surface-variant text-body-md">
                {[
                  'Libourne',
                  'Les Billaux',
                  'Arveyres',
                  'Génissac',
                  'Moulon',
                  'Rauzan',
                  'Saint-Pey-de-Castets',
                  'Saint-Denis-de-Pile',
                  "Lugon-et-l'Île-du-Carnay",
                  'Lagorce',
                  'Montussan',
                  'Capian',
                  'Lacanau',
                  'Clérac',
                  'Saint-Émilion',
                  'Coutras',
                  'Fronsac',
                  'Vayres',
                  'Izon',
                  'Castillon-la-Bataille',
                  'Guîtres',
                  'Branne',
                  'Bordeaux',
                ].map((commune) => (
                  <li key={commune} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary-dark text-[18px]">location_on</span>
                    {commune}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-section-padding bg-primary text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              À votre tour
            </span>
            <h2 className="font-headline-md text-headline-md mt-4 mb-6">Votre projet, notre prochain chantier</h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Racontez-nous ce que vous imaginez. Nous revenons vers vous sous 48h avec une première estimation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#quote"
                className="bg-secondary text-primary px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-secondary-fixed transition-all active:scale-95 shimmer-effect"
              >
                Demander mon étude gratuite
              </a>
              <a
                href="tel:+33557406580"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-white/20 transition-all"
              >
                05 57 40 65 80
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
