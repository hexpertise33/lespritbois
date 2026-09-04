import type { Metadata } from 'next';
import { CONTACT, ENTREPRISE_REF } from '@/lib/data/navigation';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import DevisForm from '@/components/DevisForm';
import DevisStickyBar from '@/components/DevisStickyBar';
import DevisDesktopPopup from '@/components/DevisDesktopPopup';

export const metadata: Metadata = buildMetadata({
  title: 'Extension de maison en bois en Gironde, devis gratuit',
  description:
    "Extension à ossature bois en Gironde : conception, fabrication et pose par la même équipe, entreprise qualifiée Qualibat. Devis gratuit et détaillé.",
  path: '/devis-extension',
  ogImage: '/images/chantiers/extension-ossature-bois-bardage-douglas-maison-pierre-gironde.webp',
  ogTitle: 'Extension de maison en bois en Gironde, devis gratuit',
  ville: 'Libourne',
});

/* Étiquettes d'attribution des leads. Obligatoires sur tous les composants
   Devis* : sans elles le lead arriverait étiqueté « Pergola (landing Ads) »
   et l'attribution serait perdue. */
const PROJET = 'Extension bois, Gironde';
const PAGE_LABEL = '/devis-extension';

/* Contrairement à /devis-pergola, cette page est indexable : elle vise
   « extension maison bois » et « extension ossature bois » en Gironde, où
   Search Console constate déjà des impressions sans clic. D'où la
   navigation complète du site, le pied de page complet et le JSON-LD,
   là où la landing publicitaire les supprime. */

const FAQ = [
  {
    q: "Combien coûte une extension à ossature bois ?",
    r: "Nous n'affichons pas de prix au mètre carré, parce qu'il ne veut rien dire tant que le raccord sur l'existant n'a pas été regardé. Le devis dépend de la surface, du mode de livraison, de l'état du bâti sur lequel on se greffe et des finitions. Nous venons relever, puis nous remettons un devis détaillé poste par poste, gratuitement.",
  },
  {
    q: "Livrez-vous hors d'eau hors d'air ou clé en main ?",
    r: "Les deux, et c'est à décider au départ. Le hors d'eau hors d'air est notre mission par défaut : vous confiez le second œuvre à vos propres artisans. Le clé en main se convient dès le devis, pas en cours de chantier. Clérac a été livrée hors d'eau hors d'air, Génissac et Rauzan sont allées jusqu'aux finitions.",
  },
  {
    q: "Combien de temps dure le chantier ?",
    r: "Trois semaines à Clérac en hors d'eau hors d'air, un mois à Génissac en clé en main, un mois et demi à Rauzan pour une maison de 150 m² finie. Ces durées sont celles du chantier lui-même, une fois la conception arrêtée et l'autorisation d'urbanisme obtenue.",
  },
  {
    q: "Peut-on greffer une extension bois sur une maison en pierre ?",
    r: "Oui, c'est même le cas le plus courant en Gironde. La question n'est pas la compatibilité des matériaux mais la continuité de l'enveloppe : une jonction mal traitée crée un pont thermique sur toute la hauteur. À Clérac, c'est l'isolation par l'extérieur qui a réglé le point.",
  },
  {
    q: "Faut-il une autorisation d'urbanisme ?",
    r: "Presque toujours : déclaration préalable ou permis de construire selon la surface créée et la surface finale de la maison. Les seuils dépendent aussi du PLU de votre commune. Nous les vérifions sur pièces et montons le dossier avec vous.",
  },
] as const;

const JSONLD = [
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
        name: 'Extension bois',
        item: 'https://lesprit-bois.fr/devis-extension',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: "Conception, fabrication et pose d'extensions à ossature bois",
    name: 'Extension de maison en bois en Gironde',
    areaServed: [
      { '@type': 'City', name: 'Libourne' },
      { '@type': 'AdministrativeArea', name: 'Gironde' },
      { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
    ],
    provider: ENTREPRISE_REF,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: "Extensions et agrandissements à ossature bois",
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Extension à ossature bois de plain-pied',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: "Surélévation et création d'étage à ossature bois",
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Maison à ossature bois',
          },
        },
      ],
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

/* Bénéfices, pas caractéristiques : la page vend l'espace gagné et
   l'allure de l'ouvrage, la technique n'arrive qu'en preuve plus bas.
   Icônes prises dans le sous-ensemble embarqué (public/fonts). */
const PROMESSES = [
  {
    icone: 'add_home',
    titre: 'La place vous manque, pas la maison',
    texte:
      "Une chambre, un bureau, un séjour qui s'ouvre enfin sur le jardin. Vous gagnez la surface là où votre vie est déjà installée, sans changer de quartier, d'école ni de voisins.",
  },
  {
    icone: 'schedule',
    titre: 'Quelques semaines, pas quelques saisons',
    texte:
      "L'ossature est taillée à l'atelier des Billaux pendant que le terrain se prépare, puis levée en quelques jours. Nos extensions se comptent en semaines de chantier, pas en mois de gravats.",
  },
  {
    icone: 'palette',
    titre: 'Dans le style de votre maison',
    texte:
      "Bardage douglas et débord de toiture sur une maison ancienne, volume contemporain à toit plat sur une maison des années 70 : nous dessinons l'extension pour qu'elle réponde à l'existant, pas pour qu'elle lui soit collée.",
  },
] as const;

/* Ni l'extension bardée douglas sur mur en pierre (fond du hero) ni le
   pignon achevé (illustration du chantier de Clérac plus bas) ne sont ici :
   les remettre en vignette ferait doublon.
   Le rendu 3D `interieur-...-sejour-lumineux.webp` a été retiré : c'est une
   image de synthèse, pas un chantier, elle n'a rien à faire dans une
   galerie de réalisations. */
const GALERIE = [
  {
    src: '/images/blog/extension-ossature-bois-prix-m2/extension-ossature-bois-baie-vitree-libourne.jpg',
    w: 1200,
    h: 900,
    alt: "Extension à ossature bois bardée, grande baie vitrée posée, terrasse en cours de ferraillage, chantier de L'Esprit Bois à Génissac",
  },
  {
    src: '/images/chantiers/extension-ossature-bois-pare-pluie-volume-accole-gironde.jpg',
    w: 1100,
    h: 825,
    alt: "Volume complet d'une extension à ossature bois fermé par un pare-pluie et ses tasseaux, accolé au mur de la maison existante, en Gironde",
  },
  {
    src: '/images/chantiers/ossature-bois-interieur-douglas-porte-vitree-gironde.webp',
    w: 1200,
    h: 900,
    alt: "Intérieur d'une construction à ossature bois entièrement habillée en douglas, porte vitrée donnant sur l'extérieur, en Gironde",
  },
  {
    src: '/images/chantiers/ossature-bois-charpente-apparente-pare-pluie-gironde.webp',
    w: 1200,
    h: 900,
    alt: "Charpente apparente et membrane agrafée sur les murs d'un chantier à ossature bois en Gironde, baies encore ouvertes",
  },
  {
    src: '/images/chantiers/ossature-bois-bardage-douglas-debord-toiture-gironde.webp',
    w: 1100,
    h: 825,
    alt: "Construction à ossature bois en cours de bardage douglas, débord de toiture et charpente apparente, chantier de L'Esprit Bois en Gironde",
  },
  {
    src: '/images/chantiers/extension-ossature-bois-bardage-douglas-porte-vitree-gironde.jpg',
    w: 508,
    h: 1100,
    alt: "Extension à ossature bois achevée, bardage douglas vertical, porte vitrée et couverture en tuiles canal, réalisation de L'Esprit Bois en Gironde",
  },
  {
    src: '/images/chantiers/extension-ossature-bois-raccord-bardage-mur-pierre-gironde.jpg',
    w: 508,
    h: 1100,
    alt: "Raccord entre le bardage douglas d'une extension neuve et le mur en pierre de la maison existante, dallage en travertin, en Gironde",
  },
  {
    src: '/images/chantiers/extension-ossature-bois-levage-ossature-sur-dalle-gironde.jpg',
    w: 880,
    h: 1100,
    alt: "Ossature bois d'une extension levée sur sa dalle, montants et linteau de la future baie, maison existante à gauche, chantier de L'Esprit Bois en Gironde",
  },
  {
    src: '/images/chantiers/extension-ossature-bois-interieur-raccord-mur-existant-gironde.jpg',
    w: 1100,
    h: 826,
    alt: "Intérieur d'une extension à ossature bois, montants et panneaux OSB, solivage apparent, raccord visible sur le mur en brique de la maison existante, en Gironde",
  },
  {
    src: '/images/chantiers/extension-ossature-bois-toit-plat-bardage-gris-gironde.jpg',
    w: 1100,
    h: 825,
    alt: "Extension à ossature bois à toit plat achevée, bardage horizontal gris et descente d'eau pluviale, réalisation de L'Esprit Bois en Gironde",
  },
] as const;

/* Trois chantiers réels avec leur point dur. C'est le cœur de la preuve :
   on ne promet pas, on raconte ce qui a coincé et comment ça s'est réglé.
   Faits repris de lib/data/zones.ts (constructeur-ossature-bois-gironde),
   déjà validés avec l'entreprise. Clérac est en Charente-Maritime, à la
   limite du département : ne pas la présenter comme girondine. */
const CHANTIERS = [
  {
    lieu: 'Clérac',
    precision: 'Charente-Maritime, à la limite de la Gironde',
    titre: 'Greffer du bois neuf sur une grange en pierre',
    texte:
      "Une ossature neuve à raccorder sur une grange en pierre équipée de contreforts métalliques scellés en façade. Le risque n'était pas esthétique : un joint mal traité entre deux systèmes constructifs produit un pont thermique sur toute la hauteur, avec la condensation qui va avec. Nous avons mené l'extension en isolation par l'extérieur, pour que l'enveloppe neuve se referme sur l'existant au lieu de s'y accoler.",
    duree: "Trois semaines, livrée hors d'eau hors d'air",
    src: '/images/chantiers/ossature-bois-pignon-bardage-douglas-acheve-gironde.webp',
    w: 1200,
    h: 900,
    alt: "Pignon d'une construction à ossature bois achevée, bardage douglas vertical, en Gironde",
  },
  {
    lieu: 'Génissac',
    precision: 'Gironde',
    titre: 'Garder la toiture, malgré ses écarts',
    texte:
      "Le client tenait à conserver sa toiture. Elle avait bougé : les relevés ne donnaient pas les mêmes cotes d'un bout à l'autre du rampant. Poser une ossature sur des cotes théoriques aurait produit un décalage visible dès la première panne. Nous avons relevé point par point avant de dessiner, puis absorbé les écarts dans la structure plutôt que dans les finitions.",
    duree: 'Un mois, livrée clé en main',
    src: '/images/blog/extension-ossature-bois-prix-m2/extension-ossature-bois-chantier-gironde.jpg',
    w: 1200,
    h: 900,
    alt: "Ossature bois en cours de levage contre une maison existante dont la toiture d'origine a été conservée, chantier de L'Esprit Bois à Génissac",
  },
  {
    lieu: 'Rauzan',
    precision: 'Gironde',
    titre: 'Quand agrandir devient construire',
    texte:
      "Il ne s'agissait plus d'agrandir mais de bâtir : 150 m² de maison et garage, mêlant ossature bois et maçonnerie traditionnelle. Faire cohabiter deux modes constructifs suppose de caler très tôt les niveaux finis et les épaisseurs d'enveloppe. Ce qui n'est pas arbitré au dessin se rattrape en fin de chantier, et se rattrape mal.",
    duree: 'Un mois et demi, livrée clé en main',
    src: '/images/chantiers/ossature-bois-bardage-douglas-facade-tuiles-gironde.webp',
    w: 1200,
    h: 900,
    alt: 'Construction à ossature bois achevée, bardage douglas et couverture en tuiles, en Gironde',
  },
] as const;

const ETAPES = [
  {
    icone: 'straighten',
    titre: 'On vient voir, et on relève',
    texte:
      "Rendez-vous sur place, gratuit et sans engagement. On regarde le bâti existant, l'accès, l'orientation, et on relève les cotes réelles plutôt que celles du plan.",
  },
  {
    icone: 'description',
    titre: 'On dessine, puis on chiffre',
    texte:
      "Vous recevez un dessin et un devis détaillé poste par poste. Rien n'est arbitré plus tard : le mode de livraison, les finitions et l'urbanisme sont tranchés à ce moment.",
  },
  {
    icone: 'cabin',
    titre: "On taille à l'atelier",
    texte:
      "L'ossature est fabriquée aux Billaux pendant que le terrain se prépare. C'est ce qui raccourcit le temps passé chez vous, et ce qui garde la précision au sec.",
  },
  {
    icone: 'handshake',
    titre: 'On lève, on ferme, on vous rend les clés',
    texte:
      "Levage en quelques jours, puis mise hors d'eau hors d'air. Selon ce qui a été convenu, on s'arrête là ou on va jusqu'aux finitions.",
  },
] as const;

export default function DevisExtensionPage() {
  return (
    <>
      <JsonLd data={JSONLD} />
      <SiteNav ancreDevis="#devis-bas" />
      <main id="contenu">
        {/* Hero plein cadre, patron des pages de gamme du site (/pergolas,
            /carports) : la photo occupe tout le bandeau au lieu d'être un
            timbre coincé entre le titre et le texte. Voile volontairement
            plus léger que le `hero-interne` du reste du site : empilé avec
            un noir supplémentaire, il noyait la photo au point qu'on ne
            voyait plus l'ouvrage. Ici le dégradé reste dense à gauche pour
            la lisibilité du titre, s'efface au centre là où se trouve le
            bardage, et laisse la carte du formulaire flotter sur une image
            nette à droite.
            pt-32/md:pt-40 : SiteNav est en `fixed top-0 z-50`, le hero doit
            dégager sa hauteur sous peine de voir le h1 passer dessous.
            `data-devis-hero` est lu par DevisStickyBar pour n'afficher la
            barre qu'une fois le hero sorti de l'écran : sans lui, doublon
            avec le formulaire encore visible. */}
        <header
          data-devis-hero
          className="relative pt-36 pb-28 md:pt-48 md:pb-40 overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <img
              width="1400"
              height="923"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src="/images/chantiers/extension-ossature-bois-bardage-douglas-maison-pierre-gironde.webp"
              alt="Extension à ossature bois achevée, bardage douglas et couverture en tuiles raccordée à une maison ancienne en pierre, terrasse en travertin, réalisation de L'Esprit Bois en Gironde"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-black/10"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-16">
            <p className="font-label-md text-label-md text-white/60 mb-5">
              <a href="/" className="hover:text-secondary-fixed transition-colors">
                Accueil
              </a>
              <span className="mx-2 text-secondary">/</span>
              <span className="text-secondary-fixed">Extension bois</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Agrandir sans déménager
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-5 max-w-3xl">
              Extension de maison en bois, en Gironde
            </h1>
            <p className="font-headline-sm text-headline-sm text-secondary-fixed mb-6">
              Il vous manque une pièce, pas une maison.
            </p>
            <p className="font-body-lg text-body-lg text-white/85 mb-9 max-w-xl">
              Conçue, taillée et posée par la même équipe, depuis notre atelier des Billaux.
              Entreprise qualifiée Qualibat, garantie décennale.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#devis-haut"
                className="inline-flex items-center gap-2 bg-secondary text-primary px-7 py-4 rounded-xl font-label-md text-label-md hover:bg-secondary-fixed transition-all"
              >
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">description</span>
                Recevoir mon devis gratuit
              </a>
              <a
                href={CONTACT.telHref}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-7 py-4 rounded-xl font-label-md text-label-md hover:bg-white/20 transition-all"
              >
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">call</span>
                {CONTACT.telAffiche}
              </a>
            </div>
          </div>
        </header>

        {/* Le formulaire est sorti du hero : posé par-dessus, il masquait la
            moitié de la photo et le bandeau ne mettait plus rien en valeur.
            Ici la photo occupe tout le hero, et le formulaire prend un bloc
            clair juste dessous, atteint en un clic depuis le bouton du hero
            comme depuis la barre collante. */}
        <section id="devis-haut" className="py-section-padding bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-headline-md text-headline-md text-primary mb-3 text-center">
                Recevez votre devis gratuit
              </h2>
              <p className="text-on-surface-variant font-body-md text-body-md mb-8 text-center">
                Deux minutes suffisent. Nous vous rappelons pour convenir du relevé.
              </p>
              <div className="bg-surface-container-low rounded-2xl p-6 md:p-8 shadow-xl border border-surface-variant">
                <DevisForm instanceId="haut" projet={PROJET} pageLabel={PAGE_LABEL} />
              </div>
            </div>
          </div>
        </section>

        {/* Bandeau de confiance */}
        <section className="bg-surface border-b border-surface-variant" aria-label="Nos garanties">
          <div className="max-w-container-max mx-auto px-6 md:px-16 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-dark text-3xl shrink-0" aria-hidden="true">verified</span>
              <div>
                <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Entreprise qualifiée Qualibat
                </p>
                <p className="text-on-surface-variant text-body-md">La qualification reconnue du bâtiment</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-dark text-3xl shrink-0" aria-hidden="true">shield</span>
              <div>
                <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Garantie décennale
                </p>
                <p className="text-on-surface-variant text-body-md">Vos ouvrages couverts pendant 10 ans</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-dark text-3xl shrink-0" aria-hidden="true">cabin</span>
              <div>
                <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Atelier intégré
                </p>
                <p className="text-on-surface-variant text-body-md">Ossature taillée chez nous, aux Billaux</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-dark text-3xl shrink-0" aria-hidden="true">location_on</span>
              <div>
                <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Libourne &amp; Gironde
                </p>
                <p className="text-on-surface-variant text-body-md">Nous intervenons dans tout le département</p>
              </div>
            </div>
          </div>
        </section>

        {/* Le discours : ce que le client gagne, avant toute technique */}
        <section className="py-section-padding bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <h2 className="font-headline-md text-headline-md text-primary mb-4 text-center">
              Agrandir, c&apos;est rester
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 text-center max-w-3xl mx-auto">
              Déménager coûte des frais de notaire, un déracinement et souvent un compromis.
              Une extension ajoute la pièce qui manque à la maison que vous avez déjà choisie.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PROMESSES.map((p) => (
                <div key={p.titre} className="bg-surface-container-low rounded-2xl p-8">
                  <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4 block" aria-hidden="true">{p.icone}</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{p.titre}</h3>
                  <p className="text-on-surface-variant font-body-md text-body-md">{p.texte}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galerie de réalisations */}
        <section className="py-section-padding bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <h2 className="font-headline-md text-headline-md text-primary mb-3 text-center">
              Nos extensions et ossatures
            </h2>
            <p className="text-on-surface-variant font-body-md text-body-md mb-8 text-center">
              Des chantiers que nous avons livrés, photographiés tels quels.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {GALERIE.map((img) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  width={img.w}
                  height={img.h}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl aspect-[4/3]"
                />
              ))}
            </div>
          </div>
        </section>

        {/* La surélévation, argument que la page ne portait pas avant d'avoir
            la photo du chantier Brunet. Le cliché est en portrait et se lit
            entier ou pas du tout : recadré, l'étage ajouté sort du champ et
            la photo ne montre plus une surélévation. D'où h-auto et une
            largeur bridée plutôt qu'un object-cover à hauteur fixe. */}
        <section className="py-section-padding bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <img
                src="/images/chantiers/surelevation-ossature-bois-etage-bardage-douglas-gironde.jpg"
                alt="Surélévation à ossature bois : étage neuf bardé en douglas posé au-dessus du rez-de-chaussée existant, grande baie vitrée en dessous, réalisation de L'Esprit Bois en Gironde"
                width={618}
                height={1100}
                loading="lazy"
                className="w-full max-w-xs mx-auto h-auto rounded-2xl"
              />
              <div>
                <p className="font-label-md text-label-md text-secondary-dark uppercase tracking-widest mb-3">
                  Surélévation
                </p>
                <h2 className="font-headline-md text-headline-md text-primary mb-5">
                  Pas de place au sol ? On monte.
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                  Quand le terrain ne permet pas de s&apos;étendre, la surface se gagne
                  au-dessus de l&apos;existant. Un étage entier, sans grignoter le jardin
                  ni s&apos;approcher des limites de propriété.
                </p>
                <p className="text-on-surface-variant font-body-md text-body-md">
                  L&apos;ossature bois est assez légère pour se poser sur des murs déjà en
                  place sans systématiquement reprendre les fondations. C&apos;est ce qui
                  rend la surélévation possible là où le parpaing l&apos;interdirait.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA milieu de page */}
        <section id="devis-milieu" className="py-section-padding bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-headline-md text-headline-md text-primary mb-3 text-center">
                Dites-nous ce qui vous manque
              </h2>
              <p className="text-on-surface-variant font-body-md text-body-md mb-8 text-center">
                Une pièce, un étage, une maison entière : le devis est gratuit dans tous les cas.
              </p>
              <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-xl border border-surface-variant">
                <DevisForm instanceId="milieu" projet={PROJET} pageLabel={PAGE_LABEL} />
              </div>
            </div>
          </div>
        </section>

        {/* La preuve : trois chantiers, trois points durs */}
        <section className="py-section-padding bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <h2 className="font-headline-md text-headline-md text-primary mb-4 text-center">
              Trois chantiers, trois points durs
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 text-center max-w-3xl mx-auto">
              Une extension ne se juge pas sur un catalogue, elle se juge sur ses raccords.
              Voici ce qui a coincé sur chacun, et comment nous l&apos;avons réglé.
            </p>
            <div className="flex flex-col gap-10">
              {CHANTIERS.map((c, i) => (
                <article
                  key={c.lieu}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-surface rounded-2xl overflow-hidden ${
                    i % 2 === 1 ? 'md:[&>figure]:order-2' : ''
                  }`}
                >
                  <figure className="m-0">
                    <img
                      src={c.src}
                      alt={c.alt}
                      width={c.w}
                      height={c.h}
                      loading="lazy"
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </figure>
                  <div className="p-6 md:p-10">
                    <p className="font-label-md text-label-md text-secondary-dark uppercase tracking-widest mb-1">
                      {c.lieu}
                    </p>
                    <p className="text-on-surface-variant font-body-md text-body-md mb-4">
                      {c.precision}
                    </p>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-4">
                      {c.titre}
                    </h3>
                    <p className="text-on-surface-variant font-body-md text-body-md mb-5">
                      {c.texte}
                    </p>
                    <p className="inline-flex items-center gap-2 font-label-md text-label-md text-primary">
                      <span className="material-symbols-outlined text-[20px]" aria-hidden="true">schedule</span>
                      {c.duree}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Le déroulé, pour lever la peur du chantier */}
        <section className="py-section-padding bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <h2 className="font-headline-md text-headline-md text-primary mb-10 text-center">
              Comment ça se passe
            </h2>
            <ol className="grid grid-cols-1 md:grid-cols-4 gap-8 list-none p-0 m-0">
              {ETAPES.map((e, i) => (
                <li key={e.titre} className="flex flex-col">
                  <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4" aria-hidden="true">{e.icone}</span>
                  <p className="font-label-md text-label-md text-secondary-dark uppercase tracking-widest mb-2">
                    Étape {i + 1}
                  </p>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{e.titre}</h3>
                  <p className="text-on-surface-variant font-body-md text-body-md">{e.texte}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ, reprise à l'identique dans le JSON-LD FAQPage */}
        <section className="py-section-padding bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-headline-md text-headline-md text-primary mb-10 text-center">
                Vos questions avant de vous lancer
              </h2>
              <div className="flex flex-col gap-8">
                {FAQ.map((f) => (
                  <div key={f.q}>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{f.q}</h3>
                    <p className="text-on-surface-variant font-body-md text-body-md">{f.r}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section id="devis-bas" className="py-section-padding bg-primary text-on-primary">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-headline-md text-headline-md mb-3 text-center">
                Et si la pièce en plus arrivait cette année ?
              </h2>
              <p className="font-body-lg text-body-lg text-white/85 mb-8 text-center">
                Décrivez votre projet en deux minutes. Le relevé et le devis sont gratuits.
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
