import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import DevisForm from '@/components/DevisForm';
import DevisStickyBar from '@/components/DevisStickyBar';
import DevisDesktopPopup from '@/components/DevisDesktopPopup';
import { CONTACT, ENTREPRISE_REF, SITE } from '@/lib/data/navigation';

/** Page créée le 01/11/2026.
 *
 *  Les vérandas sont fabriquées par le partenaire français SOKO (Vendée) et
 *  posées par L'Esprit Bois, selon le même partage que les pergolas et carports
 *  aluminium avec Li-Su des Temps. Tout ce qui est décrit ici vient des pages
 *  gamme et conseils de soko.fr, relues le 01/11/2026 et réécrites : on reprend
 *  les faits, jamais les phrases. Aucun prix, coefficient ni durée de garantie
 *  n'est avancé. SOKO publie des fourchettes au m² indicatives, sans options :
 *  elles ne sont pas reprises, car elles ne valent pas un prix posé chez nous.
 *
 *  Pas de photo pour l'instant : les mentions légales de SOKO exigent un accord
 *  préalable. Les photos sont prêtes sur la branche locale
 *  feature/verandas-photos-soko, à fusionner une fois l'accord obtenu. */

/* Étiquettes d'attribution : sans elles, un lead de cette page arriverait
   indistinct de ceux de la landing publicitaire. */
const PROJET = 'Véranda';
const PAGE_LABEL = '/verandas';

/** Photo d'en-tête. Sans image, l'en-tête reste sur fond de marque. */
const HERO: { src: string; w: number; h: number; alt: string } | null = null;

export const metadata: Metadata = buildMetadata({
  title: 'Véranda aluminium sur mesure à Libourne et en Gironde',
  description:
    'Véranda aluminium Klassique, Kosy ou Kontemporaine : étude, pose et suivi par nos équipes à Libourne et en Gironde. Relevé et devis gratuits.',
  keywords:
    'véranda Libourne, véranda Gironde, véranda aluminium, véranda toit plat, véranda sur mesure, extension véranda, SOKO véranda, véranda Saint-Émilion',
  path: '/verandas',
  ogImage: '/images/pergola-terrasse-bois-libourne-1.webp',
  ogTitle: 'Vérandas aluminium sur mesure à Libourne (33)',
  ville: 'Libourne',
});

type Gamme = {
  id: string;
  nom: string;
  accroche: string;
  intro: string[];
  points: string[];
  pourQui: string;
  image?: { src: string; w: number; h: number; alt: string };
};

const GAMMES: Gamme[] = [
  {
    id: 'klassique',
    nom: 'Klassique',
    accroche: 'La véranda lumineuse et personnalisable',
    intro: [
      "C'est la véranda aluminium traditionnelle, celle qui s'adapte à toutes les maisons : en harmonie avec l'architecture existante ou en contraste franc. Sur mesure, elle accepte toutes les formes et tous les styles, du jardin d'hiver aux lignes contemporaines.",
      "C'est aussi la gamme qui permet de composer sa pièce en gardant la main sur le budget : on retient ce qui compte pour l'usage prévu, et on laisse le reste.",
    ],
    points: [
      'Grandes surfaces vitrées, toiture rayonnante, impostes cintrées ou petit-bois selon le style voulu',
      'Version contemporaine possible : teintes de gris, corniche droite, grandes baies coulissantes',
      'Version évolutive : volets roulants ou brise-soleil ajoutables plus tard, sans reprendre la véranda',
      'Budget modéré et maîtrisé, la gamme la plus ouverte aux choix',
    ],
    pourQui:
      "Maison de caractère, jardin d'hiver, ou projet où l'on veut maîtriser le budget sans renoncer à l'isolation.",
  },
  {
    id: 'kosy',
    nom: 'Kosy',
    accroche: 'La véranda équipée, confortable été comme hiver',
    intro: [
      "Sur la Kosy, chacun choisit ses équipements. Ce qui la distingue : la structure comporte d'origine un coffre, qui reçoit des protections de façade, volets roulants ou brise-soleil orientable, invisibles en position ouverte.",
      "On maîtrise ainsi la lumière et la température sans rien accrocher après coup, et on renforce la sécurité de la pièce. Avec un système domotique, ces équipements se pilotent à distance.",
    ],
    points: [
      'Volets roulants intégrés : occultation complète, meilleure isolation, intimité, résistance accrue aux tentatives d’effraction',
      'Brise-soleil orientable : lames aluminium réglables, protection des regards et du soleil, vue conservée sur l’extérieur',
      'Éclairage intégré, vitrage de toiture à teinte variable SageGlass, domotique en option',
      'Pensée pour une pièce utilisée toute l’année',
    ],
    pourQui:
      'Véranda qui sert de pièce à vivre en toute saison, ou orientée plein sud où la maîtrise du soleil et la sécurité comptent.',
  },
  {
    id: 'kontemporaine',
    nom: 'Kontemporaine',
    accroche: "L'extension à toit plat, design et performante",
    intro: [
      "La gamme Kontemporaine reprend le concept de la véranda-extension : un toit plat à l'extérieur, qui reprend les codes de l'architecture moderne, et un plafond plat à l'intérieur, comme dans une pièce de la maison.",
      "Le double plafond renforce l'isolation thermique et phonique. La toiture plate extérieure est composée d'une ossature bois avec membrane d'étanchéité, et peut recevoir un dôme vitré ou un puits de lumière à l'endroit choisi, sans dépendre de l'orientation.",
    ],
    points: [
      'Toit plat extérieur et plafond plat intérieur : l’effet pièce de la maison, pas l’effet véranda',
      'Double plafond isolé : isolation thermique et phonique renforcée',
      'Puits de lumière ou dôme vitré sur mesure, compatibles avec le vitrage SageGlass',
      'Plafond fini en panneau ou en placoplâtre, pour prolonger l’habitation en harmonie',
    ],
    pourQui:
      'Maison récente ou d’architecture contemporaine, ou projet qui doit se lire comme une extension du séjour plus que comme une véranda.',
  },
];

const SOCLE = [
  {
    icone: 'precision_manufacturing',
    titre: 'Aluminium à rupture de pont thermique totale',
    texte:
      "Le même profilé sur les trois gammes : léger, solide, résistant à la corrosion, et recyclable à 100 %. La rupture de pont thermique est totale, ce qui fait la différence l'hiver sur la paroi froide.",
  },
  {
    icone: 'layers',
    titre: 'Double vitrage à isolation renforcée de série',
    texte:
      "Tous les vitrages de façade sont à isolation thermique renforcée avec argon. Des traitements supplémentaires sont possibles selon l'usage et l'orientation de la véranda.",
  },
  {
    icone: 'shield',
    titre: 'Fermeture 4 points de série',
    texte:
      "Les ouvrants sont équipés de systèmes de fermeture 4 points, pour l'étanchéité comme pour la sécurité.",
  },
  {
    icone: 'straighten',
    titre: 'Sur mesure au millimètre',
    texte:
      "La surface se détermine au millimètre près selon votre maison et l'usage prévu. Chaque projet est validé techniquement par le bureau d'études de SOKO avant fabrication.",
  },
];

const COMPARATIF: { critere: string; klassique: string; kosy: string; kontemporaine: string }[] = [
  {
    critere: 'Style',
    klassique: 'Traditionnel, tous styles, du jardin d’hiver au contemporain',
    kosy: 'Moderne, équipé',
    kontemporaine: 'Extension contemporaine à toit plat',
  },
  {
    critere: 'Toiture extérieure',
    klassique: 'Monopente, double pente, rayonnante, en L, victorienne',
    kosy: 'Mêmes formes de toiture que la Klassique',
    kontemporaine: 'Toit plat, avec ou sans dôme vitré',
  },
  {
    critere: 'Intérieur',
    klassique: 'Toiture polycarbonate, panneau ou verre',
    kosy: 'Toiture polycarbonate, panneau ou verre',
    kontemporaine: 'Plafond plat, double plafond isolé',
  },
  {
    critere: 'Protection de façade',
    klassique: 'Volets roulants ou brise-soleil, à ajouter plus tard',
    kosy: 'Coffre intégré dès l’origine, invisible ouvert',
    kontemporaine: 'Volets roulants intégrés ou brise-soleil en option',
  },
  {
    critere: 'Atout principal',
    klassique: 'Luminosité, liberté de conception, budget maîtrisé',
    kosy: 'Sécurité, confort d’usage, domotique',
    kontemporaine: 'Design, isolation thermique et phonique',
  },
  {
    critere: 'Pour qui',
    klassique: 'Maison de caractère, budget à maîtriser',
    kosy: 'Pièce à vivre toute l’année, façade très exposée',
    kontemporaine: 'Maison récente, extension du séjour',
  },
];

const PERSONNALISATION = [
  {
    icone: 'straighten',
    titre: 'La dimension',
    texte: 'Carrée, rectangulaire ou en L, au millimètre selon votre maison.',
  },
  {
    icone: 'palette',
    titre: 'La couleur',
    texte:
      "Nuancier standard (gris anthracite, gris architecte, gris givre, ivoire clair, blanc pur, noir sable), ou toute teinte RAL, satinée, mate, métallisée ou texturée, sur demande.",
  },
  {
    icone: 'roofing',
    titre: 'La forme de toiture',
    texte:
      'Monopente, double pente, rayonnante, victorienne, en L avec noue ou arêtier, et toit plat avec ou sans dôme.',
  },
  {
    icone: 'horizontal_rule',
    titre: 'La corniche',
    texte: 'Trois corniches au choix : classique, moderne ou double moderne.',
  },
  {
    icone: 'grid_goldenratio',
    titre: 'Le remplissage de toiture',
    texte:
      'Polycarbonate, panneau sandwich acoustique ou double vitrage feuilleté 44.2 : le comparatif des toitures, plus haut, détaille ce que chacun change.',
  },
  {
    icone: 'door_sliding',
    titre: 'Les ouvrants de façade',
    texte:
      'Coulissants de 2 à 6 vantaux, portes simples, doubles ou tiercées, fenêtres oscillo-battantes ou à soufflet.',
  },
];

const OPTIONS = [
  {
    titre: 'SageGlass',
    texte:
      "Vitrage de toiture à teinte variable : sa teinte varie à la demande, pour laisser entrer plus ou moins de lumière et limiter la chaleur comme l'éblouissement. Transmission lumineuse de 1 à 58 %, transmission UV de 0 %.",
  },
  {
    titre: 'Rolax',
    texte:
      "Volet roulant de toiture motorisé, pour les toitures en verre : il économise du chauffage en hiver et fait écran à l'effet de serre l'été.",
  },
  {
    titre: 'Éclairage d’ambiance',
    texte:
      'Des spots LED réglables en direction et en intensité, logés dans les chevrons ou le panneau de toiture.',
  },
  {
    titre: 'Murs et murets à ossature bois',
    texte:
      "À la place d'un mur ou muret maçonné, des modules à ossature bois avec lames extérieures en cinq coloris. Notre métier d'origine, au service de la véranda.",
  },
  {
    titre: 'Décoration de toiture et de façade',
    texte:
      'Flammes, crêtes et fleurons en toiture ; soubassements, impostes, cintres aluminium, bandes sablées ou petit-bois en façade.',
  },
  {
    titre: 'Toiture à isolation renforcée',
    texte:
      'Double panneau Sokotop ultra isolant et membrane phonique, pour une isolation acoustique supérieure.',
  },
  {
    titre: 'Pilotage à distance',
    texte:
      'Volets, brise-soleil, volet de toiture et éclairage se commandent d’une seule télécommande, avec des scénarios programmés. Pratique quand on veut fermer la véranda depuis le séjour.',
  },
];

const SOMMAIRE = [
  { href: '#usages', label: 'Usages' },
  { href: '#styles', label: 'Styles' },
  { href: '#gammes', label: 'Les 3 gammes' },
  { href: '#comparatif', label: 'Comparatif' },
  { href: '#toitures', label: 'Toitures' },
  { href: '#personnalisation', label: 'Personnalisation' },
  { href: '#options', label: 'Options' },
  { href: '#confort', label: 'Orientation et confort' },
  { href: '#terrasse', label: 'Sur une terrasse' },
  { href: '#budget', label: 'Budget' },
  { href: '#demarches', label: 'Démarches' },
  { href: '#deroulement', label: 'Déroulement' },
  { href: '#entretien', label: 'Entretien' },
];

const USAGES = [
  {
    titre: 'Un séjour agrandi',
    texte:
      'Le cas le plus courant : on gagne une pièce de vie sans déménager. Prévoyez un mobilier plutôt bas, pour ne pas boucher la vue qui justifie le projet.',
  },
  {
    titre: 'Une salle à manger',
    texte:
      'Une grande table, le jardin de chaque côté. Une toiture qui alterne panneaux et verre évite d’avoir le soleil de midi dans l’assiette.',
  },
  {
    titre: 'Une cuisine',
    texte:
      'Possible, à condition de le prévoir dès l’étude : extraction mécanique pour les vapeurs et les odeurs, et un mur assez solide pour porter les meubles et l’électroménager.',
  },
  {
    titre: 'Un jardin d’hiver',
    texte:
      'Contrairement à une serre, c’est une vraie pièce rattachée à la maison : les plantes passent l’hiver hors gel et à la lumière, et on y prend le café. Elle doit être bien ventilée.',
  },
  {
    titre: 'Un espace piscine ou spa',
    texte:
      'L’humidité change la donne : la ventilation mécanique devient indispensable, et les matériaux se choisissent en conséquence. Le verre en toiture convient bien à ce type de volume.',
  },
  {
    titre: 'Un commerce',
    texte:
      'Salle de restaurant, salon d’hiver, surface de vente : la véranda ajoute des places ou des mètres linéaires et se voit de la rue. Les règles d’accueil du public sont à vérifier au cas par cas.',
  },
];

const STYLES = [
  {
    titre: 'Le toit plat contemporain',
    texte:
      'Lignes droites, plafond plat à l’intérieur, effet loft. C’est la gamme Kontemporaine, avec dôme vitré ou puits de lumière pour compenser l’absence de toiture transparente.',
  },
  {
    titre: 'La verrière',
    texte:
      'Toiture entièrement vitrée, ciel dégagé, lumière maximale. Elle s’accorde aussi bien à une maison ancienne qu’à une maison récente, mais demande une vraie protection solaire sous nos étés.',
  },
  {
    titre: 'L’atelier d’artiste',
    texte:
      'Grand volume, grandes hauteurs d’ouverture, et un décor assumé : petits-bois, traverses, soubassements aluminium, fleurons. Il se plaît surtout au nord, où la lumière reste régulière.',
  },
  {
    titre: 'Le jardin d’hiver traditionnel',
    texte:
      'Toiture rayonnante ou victorienne, impostes cintrées, crête de toit. Pour une maison de pierre du Libournais, c’est souvent la forme qui s’intègre le plus naturellement.',
  },
];

const TOITURES = [
  {
    nom: 'Double vitrage feuilleté',
    lumiere: 'Maximale',
    atout: 'L’effet verrière, idéal pour un jardin d’hiver ou un espace piscine',
    limite: 'Contrôle solaire ou protection mobile à prévoir (Rolax, SageGlass)',
  },
  {
    nom: 'Polycarbonate 32 à 55 mm',
    lumiere: 'Diffuse, finition vénitien ou opale',
    atout: 'Léger, épais et l’option la plus abordable',
    limite: 'Isole moins bien qu’un panneau plein, à réserver aux expositions modérées',
  },
  {
    nom: 'Panneau sandwich 32 à 66 mm',
    lumiere: 'Aucune, panneau opaque',
    atout: 'Isolation et acoustique ; dessus ardoise ou tuile, dessous blanc',
    limite: 'À combiner avec des travées de verre pour garder de la lumière',
  },
  {
    nom: 'Double panneau Sokotop',
    lumiere: 'Aucune, panneau opaque',
    atout: 'SOKO annonce 50 % d’isolation thermique et phonique en plus qu’une toiture classique',
    limite: 'Option, à arbitrer selon l’usage de la pièce',
  },
  {
    nom: 'Toit plat isolé (Kontemporaine)',
    lumiere: 'Par puits de lumière ou dôme vitré',
    atout: 'Ossature bois, membrane d’étanchéité et plafond doublé, proches d’une pièce de la maison',
    limite: 'Réservé à la gamme Kontemporaine',
  },
];

const ORIENTATIONS = [
  {
    titre: 'Sud et sud-ouest',
    texte:
      'Très agréable au printemps et à l’automne, mais la pièce surchauffe l’été sans protection solaire. En Gironde, sur une grande surface vitrée, on ne fait pas l’impasse dessus.',
  },
  {
    titre: 'Est',
    texte:
      'Le soleil du matin, puis de l’ombre quand la chaleur monte. C’est souvent le meilleur compromis pour une salle à manger ou une cuisine.',
  },
  {
    titre: 'Nord',
    texte:
      'Peu de soleil direct, une lumière égale toute la journée, et un abri contre le vent dominant. La toiture et le chauffage doivent alors compter davantage en hiver.',
  },
];

const CONFORT = [
  {
    titre: 'Ventiler',
    texte:
      'Des aérateurs en partie basse font entrer l’air frais, des ouvrants en partie haute évacuent l’air chaud. Si cela ne suffit pas, un extracteur motorisé prend le relais en toiture. Avec une pièce humide ou une cuisine, il devient indispensable. C’est aussi la première défense contre la condensation.',
  },
  {
    titre: 'Chauffer',
    texte:
      'Pour une pièce occupée toute l’année, il faut le prévoir comme ailleurs dans la maison. Prolonger le chauffage central est simple si la chaudière a la puissance nécessaire. Le plancher chauffant, plus lent à réagir, donne une chaleur très régulière et se décide avant de couler le sol.',
  },
  {
    titre: 'Lire une fiche de vitrage',
    texte:
      'Trois valeurs suffisent : le coefficient U (pertes de chaleur, le plus bas possible), le facteur solaire g (chaleur du soleil qui entre, à garder bas sur une façade très exposée) et la transmission lumineuse TL (lumière qui passe). On les arbitre selon l’orientation.',
  },
  {
    titre: 'Choisir la couleur',
    texte:
      'La teinte du crépi ou des menuiseries existantes pour se fondre dans la maison, le gris anthracite ou le blanc pour une valeur sûre à la revente. Un contraste franc fonctionne aussi, à condition de l’assumer.',
  },
];

const POSTES_BUDGET = [
  {
    titre: 'La véranda elle-même',
    texte: 'Surface, forme, gamme, type de toiture, traitement des vitrages et nombre de vantaux.',
  },
  {
    titre: 'Les options de confort',
    texte:
      'Volets roulants, brise-soleil, volet de toiture, SageGlass, éclairage, panneaux renforcés : elles pèsent vite, on les choisit selon l’exposition réelle.',
  },
  {
    titre: 'Les travaux autour',
    texte:
      'Terrassement, dalle, muret maçonné, électricité, revêtement de sol, chauffage et ventilation. C’est le poste le plus souvent oublié dans les premiers calculs.',
  },
  {
    titre: 'La pose',
    texte:
      'Une véranda doit rester étanche et sûre pendant des années : la main-d’œuvre fait partie du prix et ne se juge pas à part de la qualité de pose.',
  },
  {
    titre: 'La fiscalité',
    texte:
      'Votre base de taxe foncière augmente avec la surface créée, et une taxe d’aménagement peut être due au-delà de 5 m². À intégrer dès le départ.',
  },
];

const DEMARCHES = [
  { surface: 'Moins de 5 m²', dossier: 'Aucune formalité, sauf en secteur protégé' },
  { surface: 'De 5 à 20 m²', dossier: 'Déclaration préalable' },
  {
    surface: 'De 20 à 40 m² en zone urbaine d’un PLU',
    dossier: 'Déclaration préalable, si le total maison et véranda reste sous 150 m²',
  },
  { surface: 'Au-delà, ou hors de ces conditions', dossier: 'Permis de construire' },
  { surface: 'Total maison et véranda au-dessus de 150 m²', dossier: 'Permis de construire avec architecte' },
];

const ENTRETIEN = [
  {
    titre: 'Au moins deux lavages par an',
    texte: 'Éponge douce, eau tiède et un peu de liquide vaisselle, puis rinçage à l’eau claire.',
  },
  {
    titre: 'Les taches plus tenaces',
    texte: 'Bicarbonate de soude dilué sur les zones moyennement sales, blanc de Meudon sur les plus encrassées.',
  },
  {
    titre: 'Ce qu’il ne faut jamais utiliser',
    texte: 'Javel, détergents agressifs, paille de fer ou papier émeri : ils marquent le laquage pour de bon.',
  },
  {
    titre: 'Sans oublier le reste',
    texte: 'Toiture, vitrages, rails de coulissants et volets roulants se nettoient aussi. Des rails propres, ce sont des ouvrants qui glissent.',
  },
];

const ETAPES = [
  {
    titre: 'Rendez-vous et relevé',
    texte:
      "Nous venons voir la maison, le terrain, l'orientation et l'usage que vous voulez en faire. Le relevé et le devis sont gratuits.",
  },
  {
    titre: 'Étude et démarches',
    texte:
      "Nous affinons le projet avec vous, vérifions ce que le PLU de votre commune exige (déclaration préalable ou permis) et vous orientons sur les travaux préparatoires. Le projet est validé techniquement par le bureau d'études de SOKO.",
  },
  {
    titre: 'Fabrication et pré-montage',
    texte:
      "Votre véranda est fabriquée sur mesure et pré-montée dans l'usine de SOKO, en Vendée.",
  },
  {
    titre: 'Pose par nos équipes',
    texte:
      "C'est nous qui installons. Il ne vous reste plus qu'à en profiter, été comme hiver.",
  },
];

const FAQ = [
  {
    q: "Qui fabrique les vérandas que vous posez ?",
    r: "Nos vérandas sont fabriquées par SOKO, fabricant français installé en Vendée depuis près de 30 ans, qui en conçoit plus de 1 000 sur mesure chaque année. Nous ne les fabriquons pas : nous le disons clairement. L'étude de votre projet, le relevé, la pose et le suivi après la pose sont les nôtres.",
  },
  {
    q: 'Quelle gamme choisir : Klassique, Kosy ou Kontemporaine ?',
    r: "La Klassique est la plus ouverte : toutes les formes, tous les styles, le budget le plus maîtrisable. La Kosy intègre dès l'origine un coffre pour volets roulants ou brise-soleil, ce qui compte si la véranda est très exposée ou occupée toute l'année. La Kontemporaine, avec son toit plat et son plafond plat, se lit comme une pièce de la maison. Si vous hésitez entre Klassique et Kosy, la version évolutive de la Klassique permet d'ajouter les protections de façade plus tard.",
  },
  {
    q: 'Véranda ou extension à ossature bois : comment choisir ?',
    r: "Une véranda apporte de la lumière et un lien direct avec le jardin ; une extension à ossature bois se comporte comme une pièce pleine de la maison. La gamme Kontemporaine, avec son plafond plat isolé, est à mi-chemin. Comme nous construisons les deux, nous n'avons aucun intérêt à vous orienter vers l'une plutôt que l'autre : nous regardons l'orientation, l'usage de la pièce et le budget. Notre guide « véranda ou extension à ossature bois » détaille la comparaison.",
  },
  {
    q: 'Faut-il une autorisation pour installer une véranda ?',
    r: "Une véranda crée de la surface et de l'emprise au sol. De 5 à 20 m², une déclaration préalable suffit, et jusqu'à 40 m² en zone urbaine d'un PLU si le total reste sous 150 m². Au-delà, il faut un permis de construire, avec architecte si le total dépasse 150 m². Un secteur protégé change encore la donne. Nous vérifions ce qui s'applique à votre terrain avant de chiffrer, et nous vous orientons sur les démarches.",
  },
  {
    q: "Une véranda est-elle trop chaude l'été ou trop froide l'hiver ?",
    r: "Cela dépend surtout de la toiture, de l'orientation et des protections prévues dès l'étude. Côté solutions, SOKO propose des toitures à panneaux isolants, un vitrage de toiture à teinte variable (SageGlass), un volet roulant de toiture motorisé (Rolax) et des brise-soleil orientables. Tous les vitrages de façade sont à isolation renforcée de série. Nous choisissons avec vous ce qui correspond à l'exposition réelle de votre maison.",
  },
  {
    q: 'Combien coûte une véranda ?',
    r: "Nous ne publions pas de tarif au mètre carré : le prix dépend des dimensions, de la gamme, de la toiture, des ouvrants et des options, et chaque devis suit un relevé sur place. Notre guide sur la véranda en aluminium donne des ordres de grandeur pour la Gironde, datés. Le relevé et le devis sont gratuits.",
  },
  {
    q: 'Peut-on construire une véranda sur une terrasse existante ?',
    r: "Souvent, et c'est même un bon point de départ : l'accès depuis la maison existe déjà et l'exposition a fait ses preuves. Mais la véranda doit reposer sur un support solide, de niveau et protégé des remontées d'humidité. Nous contrôlons cela au relevé, avant de chiffrer.",
  },
  {
    q: 'Quelle est la meilleure orientation pour une véranda ?',
    r: "Il n'y en a pas une seule : tout dépend de l'usage. L'est donne le soleil du matin et de l'ombre l'après-midi. Le sud et le sud-ouest sont agréables en demi-saison mais imposent une protection solaire l'été. Le nord offre une lumière régulière et demande plus d'attention à l'isolation.",
  },
  {
    q: 'Faut-il chauffer une véranda ?',
    r: "Pour un usage au printemps et à l'automne, pas forcément. Pour une pièce occupée toute l'année, oui, comme le reste de la maison. Le besoin dépend de la surface, de la hauteur, de l'isolation et de l'orientation. Prolonger le chauffage central ou installer un plancher chauffant sont les deux pistes les plus courantes.",
  },
  {
    q: 'Faut-il déclarer une véranda aux impôts ?',
    r: "Oui. La surface créée se déclare aux impôts dans les 90 jours suivant la fin des travaux, et elle fait évoluer la taxe foncière. Une taxe d'aménagement peut aussi être due. Les modalités et les éventuelles exonérations dépendent de votre situation : votre centre des impôts ou votre mairie vous renseignera.",
  },
  {
    q: 'Comment entretenir une véranda en aluminium ?',
    r: "Deux lavages par an à l'eau tiède savonneuse suffisent en général, suivis d'un rinçage à l'eau claire. Pas de javel ni d'abrasif, qui marquent le laquage. Pensez aussi aux rails des coulissants, aux vitrages et aux volets roulants.",
  },
];

const COMMUNES = [
  'Libourne',
  'Les Billaux',
  'Saint-Émilion',
  'Fronsac',
  'Vayres',
  'Izon',
  'Branne',
  'Coutras',
  'Créon',
  'Bordeaux',
  'La Teste-de-Buch',
  'Bassin d’Arcachon',
];

const jsonld = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE.url}/` },
      { '@type': 'ListItem', position: 2, name: 'Vérandas', item: `${SITE.url}/verandas` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Véranda aluminium sur mesure',
    serviceType: 'Étude et pose de vérandas aluminium sur mesure',
    url: `${SITE.url}/verandas`,
    provider: ENTREPRISE_REF,
    areaServed: [
      { '@type': 'City', name: 'Libourne' },
      { '@type': 'City', name: 'Saint-Émilion' },
      { '@type': 'City', name: 'Fronsac' },
      { '@type': 'AdministrativeArea', name: 'Gironde' },
    ],
    description:
      'Étude, pose et suivi de vérandas aluminium sur mesure, fabriquées par SOKO, à Libourne et en Gironde.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Gammes de vérandas',
      itemListElement: GAMMES.map((g) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: `Véranda ${g.nom}`,
          description: g.accroche,
        },
      })),
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.r },
    })),
  },
];

const lienInterne =
  'text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors';

const boutonSecondaire =
  'inline-flex items-center gap-2 border border-primary/25 text-primary px-7 py-4 rounded-xl font-label-md text-label-md hover:bg-primary hover:text-white hover:border-primary transition-colors';

export default function VerandasPage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="verandas" ancreDevis="#devis-bas" />
      <main id="contenu">
        <header
          data-devis-hero
          className={`relative pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden ${HERO ? '' : 'bg-primary'}`}
        >
          {HERO && (
            <div className="absolute inset-0 z-0">
              <img
                width={HERO.w}
                height={HERO.h}
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover"
                src={HERO.src}
                alt={HERO.alt}
              />
              <div className="absolute inset-0 hero-interne"></div>
              {/* Sur mobile le texte couvre toute la largeur : le voile doit tenir jusqu'à droite. */}
              <div className="absolute inset-0 bg-black/35 md:hidden"></div>
            </div>
          )}
          <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-16">
            <p className="font-label-md text-label-md text-white/60 mb-6">
              <a href="/" className="hover:text-secondary-fixed transition-colors">
                Accueil
              </a>
              <span className="mx-2 text-secondary" aria-hidden="true">
                /
              </span>
              <span className="text-secondary-fixed">Vérandas</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Notre savoir-faire
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Véranda aluminium sur mesure à Libourne et en Gironde
            </h1>
            <p className="font-body-lg text-body-lg text-white/85 max-w-2xl">
              Trois gammes pour trois façons d&apos;habiter l&apos;extension : la Klassique, la Kosy et
              la Kontemporaine. Nous venons voir la maison avant de chiffrer, et c&apos;est notre équipe
              qui pose.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#devis-bas"
                className="inline-flex items-center gap-2 bg-secondary text-primary px-7 py-4 rounded-xl font-label-md text-label-md hover:bg-white transition-colors"
              >
                Demander un devis gratuit
              </a>
              <a
                href="#gammes"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-4 rounded-xl font-label-md text-label-md hover:bg-white hover:text-primary transition-colors"
              >
                Voir les trois gammes
              </a>
            </div>
            {HERO && <p className="text-white/70 text-[14px] mt-8 italic">Photo du fabricant.</p>}
          </div>
        </header>

        <section className="py-20 md:py-28 bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-8">
                Nous posons, SOKO fabrique
              </h2>
              <div className="font-body-lg text-body-lg text-on-surface-variant space-y-6">
                <p>
                  Nous posons les vérandas de notre partenaire français{' '}
                  <a
                    href="https://www.soko.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={lienInterne}
                  >
                    SOKO
                  </a>
                  , fabricant installé en Vendée depuis près de 30 ans. Elles sont conçues sur mesure
                  dans son usine, chaque projet étant validé par son bureau d&apos;études, puis
                  pré-montées avant de nous être livrées.
                </p>
                <p>
                  Nous le disons plutôt que de laisser croire que nous les fabriquons : le relevé,
                  l&apos;étude avec vous, la pose et le suivi après la pose sont les nôtres. C&apos;est
                  un partage qui nous convient, parce qu&apos;il nous laisse faire ce que nous savons
                  faire, regarder une maison, un sol, une orientation, et poser proprement.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="/blog/veranda-aluminium-isolation-urbanisme-budget" className={boutonSecondaire}>
                  Véranda alu : isolation, urbanisme, budget
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    arrow_forward
                  </span>
                </a>
                <a href="/blog/veranda-ou-extension-ossature-bois" className={boutonSecondaire}>
                  Véranda ou extension bois ?
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <nav aria-label="Sur cette page" className="bg-surface pb-16">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <p className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant mb-4">
              Sur cette page
            </p>
            <ul className="flex flex-wrap gap-3">
              {SOMMAIRE.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-block border border-outline-variant rounded-full px-4 py-2 font-label-md text-label-md text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <section className="py-20 md:py-28 bg-surface-container-low" id="usages">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-12">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Avant de choisir
              </span>
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mt-4 mb-6">
                À quoi va servir votre véranda ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                C&apos;est la première question que nous posons. Vous êtes à l&apos;étroit, vous ne
                voulez pas déménager, et une extension maçonnée vous fermerait sur le jardin. Mais une
                véranda occupée au printemps ne se conçoit pas comme une cuisine utilisée douze mois
                par an : l&apos;usage décide de la toiture, de la ventilation et du chauffage.
              </p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {USAGES.map((u) => (
                <li key={u.titre} className="rounded-2xl p-8 border border-surface-variant bg-surface">
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{u.titre}</h3>
                  <p className="text-on-surface-variant text-body-md">{u.texte}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-surface" id="styles">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-12">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-6">
                Quatre styles, selon votre maison
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                L&apos;aluminium autorise des profilés fins et des formes complexes : la véranda peut
                prolonger l&apos;architecture de la maison, ou trancher avec elle.
              </p>
            </div>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {STYLES.map((st) => (
                <div key={st.titre} className="border-t border-outline-variant pt-6">
                  <dt className="font-headline-sm text-headline-sm text-primary mb-2">{st.titre}</dt>
                  <dd className="font-body-md text-body-md text-on-surface-variant">{st.texte}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-surface-container" id="gammes">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-16">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Les gammes
              </span>
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mt-4 mb-6">
                Klassique, Kosy ou Kontemporaine
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Même aluminium, même vitrage, mêmes performances de base : ce qui change d&apos;une
                gamme à l&apos;autre, c&apos;est le style, la toiture et l&apos;équipement.
              </p>
            </div>

            <div className="space-y-12">
              {GAMMES.map((g, i) => (
                <article
                  key={g.id}
                  id={g.id}
                  className="bg-surface rounded-2xl p-8 md:p-12 border border-surface-variant grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start"
                >
                  <div>
                    <p className="font-label-md text-label-md uppercase tracking-[0.15em] text-secondary-dark mb-3">
                      Gamme {i + 1}
                    </p>
                    <h3 className="font-headline-md text-headline-md text-primary mb-2">
                      Véranda {g.nom}
                    </h3>
                    <p className="font-title-md text-title-md text-secondary-dark mb-6">{g.accroche}</p>
                    <div className="font-body-md text-body-md text-on-surface-variant space-y-4">
                      {g.intro.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                    <p className="font-body-md text-body-md text-primary mt-6">
                      <strong className="font-semibold">Pour qui :</strong>{' '}
                      <span className="text-on-surface-variant">{g.pourQui}</span>
                    </p>
                  </div>
                  <div>
                    {g.image && (
                      <figure className="mb-8">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                          <img
                            width={g.image.w}
                            height={g.image.h}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover"
                            src={g.image.src}
                            alt={g.image.alt}
                          />
                        </div>
                        <figcaption className="text-on-surface-variant text-[14px] mt-3 italic">
                          Véranda {g.nom} SOKO. Photo du fabricant.
                        </figcaption>
                      </figure>
                    )}
                    <ul className="space-y-4">
                      {g.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-3">
                          <span
                            className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5"
                            aria-hidden="true"
                          >
                            check_circle
                          </span>
                          <span className="text-body-md text-on-surface-variant">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-surface" id="comparatif">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-12">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Aide au choix
              </span>
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mt-4 mb-6">
                Les trois gammes côte à côte
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Il n&apos;y a pas de meilleure gamme dans l&apos;absolu : il y a celle qui correspond à
                votre maison et à l&apos;usage de la pièce.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-surface-variant bg-white">
              <table className="w-full text-left border-collapse min-w-[820px]">
                <caption className="sr-only">
                  Comparatif des vérandas SOKO Klassique, Kosy et Kontemporaine
                </caption>
                <thead>
                  <tr className="bg-surface-container-low border-b border-surface-variant">
                    <th
                      scope="col"
                      className="py-5 px-6 font-label-md text-label-md uppercase tracking-widest text-on-surface-variant"
                    >
                      Critère
                    </th>
                    <th scope="col" className="py-5 px-6 font-headline-sm text-headline-sm text-[20px] text-primary">
                      Klassique
                    </th>
                    <th scope="col" className="py-5 px-6 font-headline-sm text-headline-sm text-[20px] text-primary">
                      Kosy
                    </th>
                    <th scope="col" className="py-5 px-6 font-headline-sm text-headline-sm text-[20px] text-primary">
                      Kontemporaine
                    </th>
                  </tr>
                </thead>
                <tbody className="text-on-surface-variant text-body-md">
                  {COMPARATIF.map((l) => (
                    <tr key={l.critere} className="border-b border-surface-variant last:border-b-0">
                      <th scope="row" className="py-5 px-6 text-primary font-semibold text-left">
                        {l.critere}
                      </th>
                      <td className="py-5 px-6">{l.klassique}</td>
                      <td className="py-5 px-6">{l.kosy}</td>
                      <td className="py-5 px-6">{l.kontemporaine}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-primary text-white" id="socle">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-12">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-white mb-6">
                Ce qui est commun aux trois gammes
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary-container">
                Quelle que soit la gamme, la base ne change pas : c&apos;est ce qui fait qu&apos;on
                peut utiliser la pièce en toute saison.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {SOCLE.map((s) => (
                <div key={s.titre} className="border-t-2 border-secondary pt-6">
                  <span className="material-symbols-outlined text-secondary text-4xl mb-4" aria-hidden="true">
                    {s.icone}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-secondary-fixed mb-3">{s.titre}</h3>
                  <p className="text-on-primary-container text-body-md">{s.texte}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-surface-container-low" id="toitures">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-12">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-6">
                Quelle toiture pour votre véranda ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                C&apos;est le choix qui pèse le plus sur le confort, parce que c&apos;est par le haut
                que la chaleur entre l&apos;été et s&apos;échappe l&apos;hiver. La solution la plus
                demandée aujourd&apos;hui alterne panneaux pleins et travées de verre : on garde la
                lumière en limitant les apports solaires.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-surface-variant bg-white">
              <table className="w-full text-left border-collapse min-w-[820px]">
                <caption className="sr-only">Comparatif des toitures de véranda</caption>
                <thead>
                  <tr className="bg-surface-container-low border-b border-surface-variant">
                    {['Toiture', 'Lumière', 'Atout', 'À prévoir'].map((c) => (
                      <th
                        key={c}
                        scope="col"
                        className="py-5 px-6 font-label-md text-label-md uppercase tracking-widest text-on-surface-variant"
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-on-surface-variant text-body-md">
                  {TOITURES.map((t) => (
                    <tr key={t.nom} className="border-b border-surface-variant last:border-b-0">
                      <th scope="row" className="py-5 px-6 text-primary font-semibold text-left">
                        {t.nom}
                      </th>
                      <td className="py-5 px-6">{t.lumiere}</td>
                      <td className="py-5 px-6">{t.atout}</td>
                      <td className="py-5 px-6">{t.limite}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-surface" id="personnalisation">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-12">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-6">
                Six choix pour composer votre véranda
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                On les arrête ensemble, au rendez-vous, une fois la maison relevée. Teintes, dimensions
                et options sont détaillées dans le devis.
              </p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PERSONNALISATION.map((p) => (
                <li
                  key={p.titre}
                  className="rounded-2xl p-8 border border-surface-variant bg-surface-container-low"
                >
                  <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4" aria-hidden="true">
                    {p.icone}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{p.titre}</h3>
                  <p className="text-on-surface-variant text-body-md">{p.texte}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-surface-container-low" id="options">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-12">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-6">
                Les options qui changent l&apos;usage
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Lumière, chaleur, ambiance : ce sont les options qui rendent la pièce agréable en
                toute saison.
              </p>
            </div>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {OPTIONS.map((o) => (
                <div key={o.titre} className="border-t border-outline-variant pt-6">
                  <dt className="font-headline-sm text-headline-sm text-primary mb-2">{o.titre}</dt>
                  <dd className="font-body-md text-body-md text-on-surface-variant">{o.texte}</dd>
                </div>
              ))}
            </dl>
            <p className="font-body-md text-body-md text-on-surface-variant mt-12 max-w-3xl">
              Pour la teinte, notre guide{' '}
              <a href="/blog/choisir-teinte-ral-aluminium" className={lienInterne}>
                choisir la teinte RAL d&apos;un ouvrage en aluminium
              </a>{' '}
              aide à trancher. Et pour la condensation, un sujet fréquent l&apos;hiver, voir{' '}
              <a href="/blog/condensation-veranda-aluminium-hiver" className={lienInterne}>
                la condensation sur une véranda aluminium
              </a>
              .
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-surface" id="confort">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-12">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-6">
                Orientation et confort : ce qui se décide dès l&apos;étude
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Une véranda agréable toute l&apos;année ne tient pas à un équipement, mais à la
                cohérence entre l&apos;exposition, la toiture, le vitrage et l&apos;usage.
              </p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {ORIENTATIONS.map((o) => (
                <li key={o.titre} className="bg-surface-container rounded-2xl p-8 border border-surface-variant">
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{o.titre}</h3>
                  <p className="text-on-surface-variant text-body-md">{o.texte}</p>
                </li>
              ))}
            </ul>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {CONFORT.map((c) => (
                <div key={c.titre} className="border-t border-outline-variant pt-6">
                  <dt className="font-headline-sm text-headline-sm text-primary mb-2">{c.titre}</dt>
                  <dd className="font-body-md text-body-md text-on-surface-variant">{c.texte}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-surface-container-low" id="terrasse">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-6">
                Transformer votre terrasse en véranda
              </h2>
              <div className="font-body-lg text-body-lg text-on-surface-variant space-y-6">
                <p>
                  C&apos;est souvent l&apos;emplacement le plus logique : la porte est déjà là,
                  l&apos;exposition a fait ses preuves et il y a moins d&apos;ouvertures à créer dans
                  la maison.
                </p>
                <p>
                  Tout dépend de ce qu&apos;il y a dessous. La véranda doit reposer sur un support
                  solide, de niveau, qui ne laisse pas remonter l&apos;humidité. Une dalle saine peut
                  parfois servir de base et limiter la maçonnerie ; sinon, il faut la reprendre. Nous
                  le contrôlons au relevé, terrasse en béton comme terrasse en bois, avant de chiffrer.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-surface" id="budget">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-12">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-6">
                Ce qui fait le prix d&apos;une véranda
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Un prix au mètre carré ne dit pas grand-chose avant le relevé. Voici les cinq postes
                à regarder pour comparer deux devis et ne pas découvrir de dépense en cours de route.
              </p>
            </div>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {POSTES_BUDGET.map((b) => (
                <div key={b.titre} className="border-t border-outline-variant pt-6">
                  <dt className="font-headline-sm text-headline-sm text-primary mb-2">{b.titre}</dt>
                  <dd className="font-body-md text-body-md text-on-surface-variant">{b.texte}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-surface-container-low" id="demarches">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-12">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-6">
                Déclaration préalable ou permis de construire ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Le seuil se calcule sur l&apos;emprise au sol et la surface de plancher créées. Ce
                tableau donne la règle générale : le PLU de votre commune, ou un secteur protégé,
                peut ajouter des contraintes, notamment autour de Saint-Émilion.
              </p>
            </div>
            <div className="rounded-2xl border border-surface-variant bg-white overflow-hidden">
              <table className="w-full text-left border-collapse">
                <caption className="sr-only">Formalité selon la surface de la véranda</caption>
                <thead>
                  <tr className="bg-surface-container-low border-b border-surface-variant">
                    <th scope="col" className="py-4 px-4 md:px-6 font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">
                      Surface créée
                    </th>
                    <th scope="col" className="py-4 px-4 md:px-6 font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">
                      Dossier
                    </th>
                  </tr>
                </thead>
                <tbody className="text-on-surface-variant text-body-md">
                  {DEMARCHES.map((d) => (
                    <tr key={d.surface} className="border-b border-surface-variant last:border-b-0">
                      <th scope="row" className="py-4 px-4 md:px-6 text-primary font-semibold text-left align-top">
                        {d.surface}
                      </th>
                      <td className="py-4 px-4 md:px-6 align-top">{d.dossier}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mt-8 max-w-3xl">
              Une fois les travaux terminés, la surface créée se déclare aux impôts dans les 90 jours.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-surface" id="deroulement">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-12">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-6">
                Comment se déroule votre projet
              </h2>
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ETAPES.map((e, i) => (
                <li key={e.titre} className="bg-surface-container rounded-2xl p-8 border border-surface-variant">
                  <span className="font-display-md text-display-md-mobile text-secondary block mb-4">
                    {i + 1}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{e.titre}</h3>
                  <p className="text-on-surface-variant text-body-md">{e.texte}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-surface-container-low" id="entretien">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-12">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-6">
                Entretenir sa véranda aluminium
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                L&apos;aluminium thermolaqué demande peu d&apos;entretien, mais pas aucun, surtout sous
                les pins ou près du Bassin.
              </p>
            </div>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {ENTRETIEN.map((e) => (
                <div key={e.titre} className="border-t border-outline-variant pt-6">
                  <dt className="font-headline-sm text-headline-sm text-primary mb-2">{e.titre}</dt>
                  <dd className="font-body-md text-body-md text-on-surface-variant">{e.texte}</dd>
                </div>
              ))}
            </dl>
            <p className="font-body-md text-body-md text-on-surface-variant mt-12 max-w-3xl">
              Notre guide sur{' '}
              <a href="/blog/entretien-aluminium-pergola-veranda-revision-automne" className={lienInterne}>
                l&apos;entretien de l&apos;aluminium et la révision d&apos;automne
              </a>{' '}
              détaille le calendrier.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-surface-container">
          <div className="max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-6">
                Votre véranda à Libourne et partout en Gironde
              </h2>
              <div className="font-body-lg text-body-lg text-on-surface-variant space-y-6">
                <p>
                  Notre atelier est aux Billaux, à cinq minutes de Libourne. Nous venons voir la maison
                  avant de chiffrer, dans le Libournais, en Entre-deux-Mers et jusqu&apos;à la métropole
                  bordelaise.
                </p>
                <p>
                  Nous intervenons aussi sur le Bassin d&apos;Arcachon, où nous avons une{' '}
                  <a href="/agence-la-teste-de-buch" className={lienInterne}>
                    agence à La Teste-de-Buch
                  </a>
                  . Pour une véranda en bord de mer, le choix de la teinte et de la visserie compte :
                  voir notre guide sur{' '}
                  <a href="/blog/pergola-aluminium-bord-de-mer-bassin-arcachon" className={lienInterne}>
                    l&apos;aluminium en bord de mer
                  </a>
                  .
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-label-md text-label-md uppercase tracking-widest text-primary mb-6">
                Communes desservies
              </h3>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-on-surface-variant text-body-md">
                {COMMUNES.map((c) => (
                  <li key={c} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary-dark text-[18px]" aria-hidden="true">
                      location_on
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-12">
              Questions fréquentes
            </h2>
            <div className="max-w-3xl space-y-4">
              {FAQ.map((f) => (
                <details
                  key={f.q}
                  className="group border border-outline-variant rounded-xl p-6 bg-surface-container"
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer font-title-md text-title-md text-on-surface">
                    {f.q}
                    <span
                      className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform"
                      aria-hidden="true"
                    >
                      expand_more
                    </span>
                  </summary>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-4">{f.r}</p>
                </details>
              ))}
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mt-12 max-w-3xl">
              Pour aller plus loin :{' '}
              <a href="/blog/veranda-aluminium-isolation-urbanisme-budget" className={lienInterne}>
                véranda aluminium : isolation, urbanisme et budget
              </a>
              ,{' '}
              <a href="/blog/remplacer-veranda-ancienne-aluminium-renovation" className={lienInterne}>
                remplacer une ancienne véranda
              </a>{' '}
              et{' '}
              <a href="/blog/garanties-sav-pergola-veranda-aluminium" className={lienInterne}>
                les garanties et le service après-vente
              </a>
              . Une terrasse couverte vous suffit ? Voyez nos{' '}
              <a href="/pergolas" className={lienInterne}>
                pergolas
              </a>
              .
            </p>
          </div>
        </section>

        <section id="devis-bas" className="py-20 md:py-28 bg-primary text-on-primary">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-headline-md text-headline-md mb-4 text-center">
                Un projet de véranda ?
              </h2>
              <p className="font-body-md text-body-md text-on-primary/80 mb-8 text-center">
                Nous venons voir la maison avant de chiffrer. Le relevé et le devis sont gratuits, à
                Libourne et dans toute la Gironde. Vous pouvez aussi appeler le{' '}
                <a href={CONTACT.telHref} className="underline underline-offset-4">
                  {CONTACT.telAffiche}
                </a>
                .
              </p>
              <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-xl">
                <DevisForm instanceId="bas" projet={PROJET} pageLabel={PAGE_LABEL} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <DevisStickyBar />
      <DevisDesktopPopup pageLabel={PAGE_LABEL} />
    </>
  );
}
