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
 *  gamme de soko.fr (Klassique, Kosy, Kontemporaine), relues le 01/11/2026 :
 *  aucun prix, aucun coefficient ni aucune durée de garantie n'est avancé, SOKO
 *  n'en publie pas et nous ne les inventons pas.
 *
 *  Pas de photo pour l'instant : on n'affiche que des chantiers réels ou des
 *  photos fabricant autorisées. Pour en ajouter, renseigner `image` dans GAMMES
 *  (le bloc est déjà prévu) et `HERO`. */

/* Étiquettes d'attribution : sans elles, un lead de cette page arriverait
   indistinct de ceux de la landing publicitaire. */
const PROJET = 'Véranda';
const PAGE_LABEL = '/verandas';

/** Photo d'en-tête : à renseigner quand une image autorisée est disponible.
 *  Sans image, l'en-tête reste sur fond de marque. */
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
      "La gamme Kosy s'équipe à la demande. Sa particularité : un coffre intégré directement dans la structure, qui accueille des protections de façade, volets roulants ou brise-soleil orientable, invisibles en position ouverte.",
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
      "Le double plafond renforce l'isolation thermique et phonique. La toiture plate extérieure est composée d'une ossature bois avec membrane d'étanchéité, et peut recevoir un puits de lumière ou un dôme vitré là où l'on veut de la lumière, quelle que soit l'orientation.",
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
    icone: 'architecture',
    titre: 'Aluminium à rupture de pont thermique totale',
    texte:
      "Le même profilé sur les trois gammes : léger, solide, résistant à la corrosion, et recyclable à 100 %. La rupture de pont thermique est totale, ce qui fait la différence l'hiver sur la paroi froide.",
  },
  {
    icone: 'window',
    titre: 'Double vitrage à isolation renforcée de série',
    texte:
      "Tous les vitrages de façade sont à isolation thermique renforcée avec argon. Des traitements supplémentaires sont possibles selon l'usage et l'orientation de la véranda.",
  },
  {
    icone: 'lock',
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
    icone: 'square_foot',
    titre: 'La dimension',
    texte: 'Carrée, rectangulaire ou en L, au millimètre selon votre maison.',
  },
  {
    icone: 'palette',
    titre: 'La couleur',
    texte:
      "Nuancier standard (gris anthracite, gris architecte, gris givre, ivoire clair, blanc pur, noir sable) ou toute autre teinte sur demande.",
  },
  {
    icone: 'roofing',
    titre: 'La forme de toiture',
    texte:
      'Monopente, double pente, rayonnante, victorienne, en L avec noue ou arêtier, et toit plat avec ou sans dôme.',
  },
  {
    icone: 'view_headline',
    titre: 'La corniche',
    texte: 'Trois corniches au choix : classique, moderne ou double moderne.',
  },
  {
    icone: 'grid_view',
    titre: 'Le remplissage de toiture',
    texte:
      'Polycarbonate de 32 à 55 mm, panneau sandwich acoustique de 32 à 66 mm, ou double vitrage feuilleté 44.2 avec différents traitements.',
  },
  {
    icone: 'sensor_door',
    titre: 'Les ouvrants de façade',
    texte:
      'Coulissants de 2 à 6 vantaux, portes simples, doubles ou tiercées, fenêtres oscillo-battantes ou à soufflet.',
  },
];

const OPTIONS = [
  {
    titre: 'SageGlass',
    texte:
      "Vitrage de toiture à teinte variable : il se fonce ou s'éclaircit à volonté pour moduler la lumière, se protéger de la chaleur et de l'éblouissement. Transmission lumineuse de 1 à 58 %, transmission UV de 0 %.",
  },
  {
    titre: 'Rolax',
    texte:
      "Volet roulant de toiture motorisé, pour les toitures en verre : il économise du chauffage en hiver et fait écran à l'effet de serre l'été.",
  },
  {
    titre: 'Éclairage d’ambiance',
    texte:
      'Spots LED orientables et à variateur d’intensité, intégrés aux chevrons ou au panneau de toiture.',
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
    r: "Une véranda crée de la surface et de l'emprise au sol : selon sa taille et selon le PLU de votre commune, elle relève d'une déclaration préalable ou d'un permis de construire. Un secteur protégé change encore la donne. Nous vérifions ce qui s'applique à votre terrain avant de chiffrer, et nous vous orientons sur les démarches.",
  },
  {
    q: "Une véranda est-elle trop chaude l'été ou trop froide l'hiver ?",
    r: "Cela dépend surtout de la toiture, de l'orientation et des protections prévues dès l'étude. Côté solutions, SOKO propose des toitures à panneaux isolants, un vitrage de toiture à teinte variable (SageGlass), un volet roulant de toiture motorisé (Rolax) et des brise-soleil orientables. Tous les vitrages de façade sont à isolation renforcée de série. Nous choisissons avec vous ce qui correspond à l'exposition réelle de votre maison.",
  },
  {
    q: 'Combien coûte une véranda ?',
    r: "Nous ne publions pas de tarif au mètre carré : le prix dépend des dimensions, de la gamme, de la toiture, des ouvrants et des options, et chaque devis suit un relevé sur place. Notre guide sur la véranda en aluminium donne des ordres de grandeur pour la Gironde, datés. Le relevé et le devis sont gratuits.",
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
