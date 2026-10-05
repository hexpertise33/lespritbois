import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/blog/pergola-aluminium-tempete-vent/pergola-aluminium-ciel-charge-saint-pey-de-castets.webp';

export const metadata: Metadata = buildMetadata({
  title: 'Pergola aluminium et tempête en Gironde : ce qui la fait tenir',
  description:
    "Pergola ou carport aluminium face au vent : ancrage, lames, stores, capteur, gestes avant l'alerte et assurance après tempête. Le guide pour la Gironde.",
  keywords:
    'pergola aluminium tempête, pergola bioclimatique vent, carport aluminium résistance au vent, ancrage pergola, pergola aluminium vent, capteur de vent pergola, assurance tempête pergola, pergola Libourne, pergola aluminium Gironde, carport aluminium Gironde',
  path: '/blog/pergola-aluminium-tempete-vent',
  ogImage: COVER,
  ogTitle: 'Pergola et carport aluminium face aux tempêtes : ce qui les fait tenir',
  ville: 'Libourne',
});

const lienInterne =
  'text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors';

function Figure({
  src,
  alt,
  caption,
  w,
  h,
}: {
  src: string;
  alt: string;
  caption: string;
  /** Dimensions réelles du fichier, à vérifier, sinon la réservation d'espace est fausse. */
  w: number;
  h: number;
}) {
  return (
    <figure className="-mx-6 md:-mx-16">
      <img
        loading="lazy"
        decoding="async"
        width={w}
        height={h}
        className="w-full h-auto rounded-2xl object-cover shadow-sm"
        src={src}
        alt={alt}
      />
      <figcaption className="mt-3 text-center font-label-md text-label-md text-on-surface-variant">
        {caption}
      </figcaption>
    </figure>
  );
}

function DuoFigure({
  a,
  b,
}: {
  /** `w` et `h` : dimensions réelles du fichier, à vérifier avant de les écrire. */
  a: { src: string; alt: string; caption: string; w: number; h: number };
  b: { src: string; alt: string; caption: string; w: number; h: number };
}) {
  return (
    <div className="-mx-6 md:-mx-16 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
      {[a, b].map((img) => (
        <figure key={img.src}>
          <img
            loading="lazy"
            decoding="async"
            width={img.w}
            height={img.h}
            className="w-full h-64 md:h-72 rounded-2xl object-cover shadow-sm"
            src={img.src}
            alt={img.alt}
          />
          <figcaption className="mt-3 text-center font-label-md text-label-md text-on-surface-variant">
            {img.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

const jsonld = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://lesprit-bois.fr/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://lesprit-bois.fr/blog' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Pergola aluminium et tempête',
        item: 'https://lesprit-bois.fr/blog/pergola-aluminium-tempete-vent',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Pergola et carport aluminium face aux tempêtes : ce qui les fait tenir, et les bons réflexes en Gironde',
    description:
      "Une pergola ou un carport aluminium bien conçu ne s'envole pas avec sa structure : il cède par son ancrage, par ce qui fait voile ou par un automatisme oublié. Ancrage, dimensionnement au vent, lames orientables, stores, check-list avant l'alerte et démarches d'assurance après la tempête, en Gironde.",
    image: 'https://lesprit-bois.fr' + COVER,
    author: AUTEUR_REF,
    publisher: {
      '@type': 'Organization',
      name: "L'Esprit Bois",
      logo: {
        '@type': 'ImageObject',
        url: 'https://lesprit-bois.fr/icon-512.png',
        width: 512,
        height: 512,
      },
    },
    datePublished: '2026-10-05',
    dateModified: '2026-10-05',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/pergola-aluminium-tempete-vent',
    },
    about: [
      { '@type': 'Thing', name: 'pergola aluminium' },
      { '@type': 'Thing', name: 'pergola bioclimatique' },
      { '@type': 'Thing', name: 'carport aluminium' },
      { '@type': 'Thing', name: 'tempête' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Une pergola bioclimatique résiste-t-elle à une tempête ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Une pergola bioclimatique aluminium dimensionnée pour la zone de vent de votre commune et ancrée dans un support sain encaisse les coups de vent pour lesquels elle a été calculée. Les dégâts viennent rarement des profilés : ils viennent d'un ancrage insuffisant, d'une toile ou d'un store resté déployé, ou d'un objet projeté. Demandez au fabricant et au poseur de justifier par écrit la tenue au vent retenue.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faut-il ouvrir ou fermer les lames quand le vent se lève ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Il n'existe pas de règle universelle : la bonne position des lames par grand vent est celle indiquée dans la notice de votre modèle, et c'est aussi celle vers laquelle le capteur de vent les pilote s'il est installé et réglé. Avant une alerte, placez les lames dans cette position à la main plutôt que de compter sur l'automatisme, qui ne sert plus à rien en cas de coupure de courant.",
        },
      },
      {
        '@type': 'Question',
        name: 'Mon assurance couvre-t-elle ma pergola après une tempête ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La garantie tempête est incluse dans les contrats multirisques habitation (article L122-7 du Code des assurances), mais les vérandas, stores, panneaux et aménagements extérieurs sont souvent exclus sauf mention au contrat. Relisez votre contrat avant l'hiver et faites déclarer l'ouvrage si besoin. Après un sinistre, la déclaration se fait dans les cinq jours ouvrés suivant la constatation, et l'assureur peut demander une attestation météo ou la preuve que d'autres bâtiments de bonne construction ont été endommagés dans un rayon de 5 km.",
        },
      },
      {
        '@type': 'Question',
        name: "Le carport aluminium peut-il s'envoler ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un carport aluminium a une grande toiture légère : le vent qui s'engouffre dessous crée un effet de soulèvement. C'est pourquoi tout se joue sur l'ancrage des poteaux, dans des massifs ou une dalle béton dimensionnés, et sur la conception des côtés. Un carport bien ancré ne s'envole pas ; un carport posé sur des fixations sous-dimensionnées peut, lui, être arraché.",
        },
      },
      {
        '@type': 'Question',
        name: 'Que vérifier après un coup de vent ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Commencez par constater sans monter sur l'ouvrage : poteaux d'aplomb, platines et chevilles en place, fixation en façade intacte, lames et chéneaux sans déformation, toiles et stores sans déchirure. Photographiez tout, déclarez le sinistre à votre assureur si besoin, et faites contrôler l'ancrage et la motorisation par un professionnel avant de réutiliser la pergola ou le carport.",
        },
      },
    ],
  },
];

const faq = [
  {
    q: 'Une pergola bioclimatique résiste-t-elle à une tempête ?',
    r: (
      <>
        Une pergola bioclimatique aluminium dimensionnée pour la zone de vent de votre commune et ancrée dans un support
        sain encaisse les coups de vent pour lesquels elle a été calculée. Les dégâts viennent rarement des profilés :
        ils viennent d&apos;un ancrage insuffisant, d&apos;une toile ou d&apos;un store resté déployé, ou d&apos;un objet
        projeté. Demandez au fabricant et au poseur de justifier par écrit la tenue au vent retenue.
      </>
    ),
  },
  {
    q: 'Faut-il ouvrir ou fermer les lames quand le vent se lève ?',
    r: (
      <>
        Il n&apos;existe pas de règle universelle : la bonne position des lames par grand vent est celle indiquée dans la
        notice de votre modèle, et c&apos;est aussi celle vers laquelle le capteur de vent les pilote s&apos;il est
        installé et réglé. Avant une alerte, placez les lames dans cette position à la main plutôt que de compter sur
        l&apos;automatisme, qui ne sert plus à rien en cas de coupure de courant.
      </>
    ),
  },
  {
    q: 'Mon assurance couvre-t-elle ma pergola après une tempête ?',
    r: (
      <>
        La garantie tempête est incluse dans les contrats multirisques habitation (article L122-7 du Code des
        assurances), mais les vérandas, stores, panneaux et aménagements extérieurs sont souvent exclus sauf mention au
        contrat. Relisez votre contrat avant l&apos;hiver et faites déclarer l&apos;ouvrage si besoin. Après un sinistre,
        la déclaration se fait dans les cinq jours ouvrés suivant la constatation, et l&apos;assureur peut demander une
        attestation météo ou la preuve que d&apos;autres bâtiments de bonne construction ont été endommagés dans un
        rayon de 5 km.
      </>
    ),
  },
  {
    q: "Le carport aluminium peut-il s'envoler ?",
    r: (
      <>
        Un carport aluminium a une grande toiture légère : le vent qui s&apos;engouffre dessous crée un effet de
        soulèvement. C&apos;est pourquoi tout se joue sur l&apos;ancrage des poteaux, dans des massifs ou une dalle béton
        dimensionnés, et sur la conception des côtés. Un carport bien ancré ne s&apos;envole pas ; un carport posé sur
        des fixations sous-dimensionnées peut, lui, être arraché.
      </>
    ),
  },
  {
    q: 'Que vérifier après un coup de vent ?',
    r: (
      <>
        Commencez par constater sans monter sur l&apos;ouvrage : poteaux d&apos;aplomb, platines et chevilles en place,
        fixation en façade intacte, lames et chéneaux sans déformation, toiles et stores sans déchirure. Photographiez
        tout, déclarez le sinistre à votre assureur si besoin, et faites contrôler l&apos;ancrage et la motorisation par
        un professionnel avant de réutiliser la pergola ou le carport.
      </>
    ),
  },
];

export default function ArticlePergolaAluminiumTempetePage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="blog" />
      <main id="contenu">
        {/* Hero */}
        <header className="relative pt-40 pb-24 md:pt-48 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="1200"
              height="646"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Pergola aluminium anthracite posée par L'Esprit Bois à Saint-Pey-de-Castets, en Gironde, sous un ciel chargé"
            />
            <div className="absolute inset-0 hero-interne"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-16">
            <p className="font-label-md text-label-md text-white/60 mb-6">
              <a href="/" className="hover:text-secondary-fixed transition-colors">
                Accueil
              </a>
              <span className="mx-2 text-secondary">/</span>
              <a href="/blog" className="hover:text-secondary-fixed transition-colors">
                Blog
              </a>
              <span className="mx-2 text-secondary">/</span>
              <span className="text-secondary-fixed">Pergola aluminium et tempête</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Pergolas aluminium
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Pergola et carport aluminium face aux tempêtes : ce qui les fait tenir, et les bons réflexes en Gironde
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/70 font-label-md text-label-md">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]" aria-hidden="true">person</span>
                <a
                  href="/auteur/david-bertrand"
                  className="underline underline-offset-4 decoration-white/30 hover:decoration-secondary hover:text-white transition-colors"
                >
                  David Bertrand
                </a>,
                L&apos;Esprit Bois
              </span>
              <span className="text-secondary">·</span>
              <span>5 octobre 2026</span>
              <span className="text-secondary">·</span>
              <span>9 min de lecture</span>
            </div>
          </div>
        </header>

        {/* Chapô answer-first */}
        <section className="py-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16">
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              <strong className="text-primary font-semibold">
                Une pergola ou un carport aluminium bien conçu ne s&apos;envole pas avec sa structure : quand il cède,
                c&apos;est presque toujours par ses points faibles, c&apos;est-à-dire un ancrage dans un support
                insuffisant, une toile, un store ou un panneau plein qui fait voile, ou un automatisme sur lequel on a
                compté à tort.
              </strong>{' '}
              La bonne nouvelle, c&apos;est que ces points faibles se traitent à la conception, puis par quelques gestes
              simples le jour où un coup de vent est annoncé. L&apos;automne et l&apos;hiver sont la saison des tempêtes
              sur la façade atlantique : voici ce que nous expliquons à nos clients en Gironde, avant la pose et avant la
              première alerte.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* Ce qui casse */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qui casse vraiment pendant une tempête
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Quand on imagine une pergola dans la tempête, on pense aux profilés qui plient. En pratique, c&apos;est
                rarement la structure aluminium elle-même qui lâche : des poteaux et des traverses calculés pour
                l&apos;ouvrage travaillent comme prévu. Ce que nous constatons après les coups de vent, ce sont des{' '}
                <strong className="text-primary font-semibold">défaillances à la périphérie de la structure</strong>,
                là où l&apos;effort se concentre ou là où quelque chose a été ajouté.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ["L'ancrage", "platines arrachées d'une dalle trop mince, chevilles inadaptées au support, fixation en façade dans un enduit ou une maçonnerie fatiguée."],
                  ['Ce qui fait voile', 'toile tendue, store zip resté déployé, rideau ou panneau latéral plein qui transforme la pergola en cerf-volant.'],
                  ['Les éléments ajoutés', "voilages, guirlandes, jardinières suspendues, brise-vue fixés après coup sans que la structure ait été prévue pour."],
                  ['Les objets projetés', "mobilier de jardin, parasol, branche cassée ou tuile du voisin : c'est souvent un projectile qui abîme une lame ou un vitrage."],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Autrement dit, la fiche technique d&apos;une pergola ne dit pas tout. Sa tenue réelle dépend de la façon
                dont elle est tenue au sol et au mur, de ce qu&apos;on y accroche, et de ce que l&apos;on fait quand le
                vent monte.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Pergolas-aluminium-Libourne-3.webp"
              w={768}
              h={512}
              alt="Pergola aluminium anthracite dont les quatre poteaux reposent sur un dallage en pierre, ancrage contre le vent"
              caption="Chaque pied de poteau renvoie l'effort du vent au support : sous un dallage, c'est la dalle ou le massif béton qui ancre la pergola, pas le revêtement."
            />

            {/* Ancrage */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                L&apos;ancrage décide de tout
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le vent ne se contente pas de pousser une pergola de côté : il la soulève, la fait basculer, la secoue.
                Tous ces efforts finissent au même endroit, dans les{' '}
                <strong className="text-primary font-semibold">pieds de poteaux et les fixations</strong>. Une
                structure parfaitement dimensionnée posée sur un support faible ne vaut que ce que vaut son support.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Au sol, nous fixons les poteaux sur des{' '}
                <strong className="text-primary font-semibold">massifs béton</strong> coulés pour l&apos;ouvrage ou sur
                une <strong className="text-primary font-semibold">dalle béton</strong> dont nous avons vérifié
                l&apos;épaisseur et l&apos;état, avec des chevilles choisies pour ce support précis. Une terrasse en
                carrelage collé sur un hérisson mal compacté, des pavés posés sur sable ou une dalle fissurée ne sont pas
                des supports d&apos;ancrage : on les traite avant, ou on va chercher le bon sol en dessous.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une <strong className="text-primary font-semibold">pergola adossée</strong> et une{' '}
                <strong className="text-primary font-semibold">pergola autoportée</strong> ne travaillent pas pareil.
                L&apos;adossée reprend une partie des efforts par sa fixation en façade : le mur doit être sain et la
                fixation adaptée à sa nature (parpaing, brique, pierre, béton). Une lisse vissée dans un enduit ou dans
                une maçonnerie qui s&apos;effrite est un point de rupture annoncé. L&apos;autoportée, elle, ne compte
                que sur ses poteaux : chacun de ses appuis doit être capable de résister seul à l&apos;arrachement.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Le cas particulier d&apos;une pergola posée sur une terrasse bois revient souvent : nous l&apos;avons
                détaillé dans notre article sur{' '}
                <a href="/blog/poser-pergola-aluminium-terrasse-bois-existante" className={lienInterne}>
                  la pose d&apos;une pergola aluminium sur une terrasse bois existante
                </a>
                , car les lames de terrasse ne sont jamais un ancrage en soi.
              </p>
            </section>

            {/* Dimensionnement */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le dimensionnement au vent : votre commune et votre terrain comptent
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                En France, les actions du vent sur les ouvrages se calculent selon l&apos;
                <strong className="text-primary font-semibold">Eurocode 1, partie vent (NF EN 1991-1-4)</strong>, qui
                découpe la métropole en quatre zones de vent. Les règles de l&apos;art et les avis techniques qui
                encadrent la mise en œuvre sont publiés par le{' '}
                <a href="https://www.cstb.fr/" className={lienInterne} target="_blank" rel="noopener noreferrer">
                  CSTB (NF DTU et avis techniques)
                </a>
                . La zone se détermine commune par commune : nous ne vous donnerons donc pas une valeur valable pour
                toute la Gironde, parce qu&apos;elle n&apos;existe pas.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                À zone égale, l&apos;<strong className="text-primary font-semibold">exposition du terrain</strong>{' '}
                change beaucoup la donne. Une pergola en bord de bassin, face à un plan d&apos;eau dégagé, ne reçoit pas
                le même vent qu&apos;une pergola au milieu d&apos;une plaine viticole sans haie ni bâtiment, et encore
                moins qu&apos;une pergola abritée entre deux maisons de lotissement. La hauteur de l&apos;ouvrage, sa
                position sur la parcelle et la présence d&apos;effets de couloir entre bâtiments entrent aussi en jeu.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                <strong className="text-primary font-semibold">
                  C&apos;est au fabricant et au poseur de justifier la tenue au vent retenue pour votre commune et votre
                  exposition : demandez-le par écrit
                </strong>
                , sur le devis ou dans la documentation remise. Pour les terrains littoraux, où le vent s&apos;ajoute à
                l&apos;air salin, notre guide sur{' '}
                <a href="/blog/pergola-aluminium-bord-de-mer-bassin-arcachon" className={lienInterne}>
                  la pergola aluminium en bord de mer et sur le Bassin d&apos;Arcachon
                </a>{' '}
                détaille les précautions propres à cette exposition.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Pergolas-aluminium-Libourne-4.webp"
              w={768}
              h={512}
              alt="Pergola bioclimatique aluminium autoportée au milieu d'une grande pelouse dégagée, exposée au vent"
              caption="Sur un terrain ouvert, sans haie ni bâtiment pour casser le vent, l'exposition pèse autant que la zone de vent dans le dimensionnement."
            />

            {/* Lames, stores, rideaux */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Lames orientables, stores et rideaux : ce qui fait voile
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une pergola bioclimatique ouverte laisse passer le vent. Dès qu&apos;on ajoute des surfaces pleines, la
                logique s&apos;inverse : l&apos;ouvrage offre une prise au vent qui n&apos;a plus rien à voir avec sa
                seule ossature. C&apos;est là que se trouvent la plupart des dégâts évitables.
              </p>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Les lames et le capteur de vent</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Beaucoup de pergolas à lames orientables motorisées peuvent recevoir un{' '}
                <strong className="text-primary font-semibold">capteur de vent (anémomètre)</strong> qui pilote les
                lames au-delà d&apos;un seuil. Ce capteur agit selon le réglage prévu par le fabricant : il n&apos;y a
                pas de position universelle. Selon les modèles, la position de sécurité par grand vent diffère.{' '}
                <strong className="text-primary font-semibold">
                  Suivez la notice de votre pergola pour la position des lames
                </strong>{' '}
                et vérifiez avec votre poseur que le capteur a bien été installé et paramétré à la mise en service.
              </p>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Stores zip, toiles et panneaux</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un store zip déployé, une toile tendue ou un panneau latéral plein transforment une structure aérée en
                voile. Par vent fort annoncé, on{' '}
                <strong className="text-primary font-semibold">remonte les stores et on rentre les toiles</strong>,
                sauf indication contraire explicite du fabricant. Un rideau de verre ou des panneaux pleins fermés en
                permanence changent aussi la prise au vent de l&apos;ensemble : c&apos;est un point à intégrer dès la
                conception, comme nous l&apos;expliquons dans notre article sur{' '}
                <a href="/blog/fermer-pergola-bioclimatique-hiver-rideau-verre" className={lienInterne}>
                  la fermeture d&apos;une pergola bioclimatique en hiver avec un rideau de verre
                </a>
                .
              </p>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">La coupure de courant</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                C&apos;est le piège classique : pendant une tempête, le courant saute, et une motorisation ou un capteur
                de vent sans alimentation ne fait plus rien. Lames, stores et toiles restent figés dans la position où
                ils étaient. D&apos;où notre conseil :{' '}
                <strong className="text-primary font-semibold">
                  ne comptez pas sur l&apos;automatisme, faites le geste manuel avant
                </strong>{' '}
                l&apos;arrivée du vent, dès que l&apos;alerte est donnée.
              </p>
            </section>

            <DuoFigure
              a={{
                src: '/images/source-adefrance/Pergolas-aluminium-Libourne-8.webp',
                w: 768,
                h: 512,
                alt: 'Lames orientables entrouvertes d’une pergola bioclimatique aluminium adossée à une maison',
                caption: 'Par grand vent, les lames se placent dans la position prévue par la notice du fabricant.',
              }}
              b={{
                src: '/images/realisations/pergola-aluminium-store-zip-libourne-2.webp',
                w: 1100,
                h: 825,
                alt: 'Store zip vertical déployé sur le côté d’une pergola aluminium à Saint-Pey-de-Castets, en Gironde',
                caption: 'Déployé, le store zip ferme tout un côté et fait voile : quand le vent est annoncé, on le remonte dans son coffre.',
              }}
            />

            {/* Carport */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le carport aluminium : une grande toiture qui veut s&apos;envoler
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le carport aluminium pose une question un peu différente. Sa toiture est grande, légère et ouverte
                dessous : le vent qui s&apos;y engouffre crée un{' '}
                <strong className="text-primary font-semibold">effet de soulèvement</strong>, comme sous une aile.
                L&apos;effort principal n&apos;est donc pas de pousser le carport, mais de l&apos;arracher vers le haut.
                Tout repose sur l&apos;ancrage des poteaux et la liaison entre poteaux, poutres et panneaux de toiture.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Les côtés comptent aussi. Un carport entièrement ouvert laisse le vent traverser ; un carport bardé sur
                un ou deux côtés protège mieux la voiture de la pluie battante, mais peut piéger le vent sous la toiture
                si le côté ouvert fait face aux vents dominants. Ce n&apos;est pas une raison de renoncer au bardage, mais
                c&apos;est une raison de l&apos;orienter et de le dimensionner avec la structure, pas de l&apos;ajouter
                après coup. Les{' '}
                <a href="/blog/dimensions-carport-taille-hauteur" className={lienInterne}>
                  dimensions et la hauteur du carport
                </a>{' '}
                jouent dans le même sens : plus la toiture est vaste et haute, plus l&apos;ancrage doit être généreux.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nous concevons nos{' '}
                <a href="/carports" className={lienInterne}>carports aluminium et bois sur mesure</a> avec ce critère
                en tête : la portée, le nombre de poteaux et le type de massif se décident en fonction de
                l&apos;exposition du terrain, pas seulement de la place à couvrir.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Carport-aluminium-Libourne-3.webp"
              w={1200}
              h={646}
              alt="Carport aluminium à toit plat avec un côté fermé par des panneaux pleins, résistance au vent"
              caption="Un côté fermé protège de la pluie battante, à condition d'être orienté et calculé avec la structure, pas ajouté après coup."
            />

            {/* Check-list */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Quand une alerte vent est annoncée : la check-list
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le jour où une vigilance vent est annoncée, quelques gestes comptent plus que la fiche technique. Ils
                prennent un quart d&apos;heure et évitent la plupart des dégâts que nous voyons après coup.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Ranger le mobilier', "tables, chaises, parasols, coussins, jardinières : tout ce qui peut devenir un projectile contre une lame, un poteau ou un vitrage."],
                  ['Remonter stores et toiles', "stores zip, toiles d'ombrage, voilages : rien ne doit rester déployé."],
                  ['Placer les lames à la main', "dans la position indiquée par la notice, sans attendre le capteur de vent, au cas où le courant serait coupé."],
                  ['Dégager chéneaux et descentes', "en automne, les feuilles bouchent vite les évacuations ; une tempête arrive rarement sans pluie, et une eau qui ne s'évacue plus alourdit la toiture."],
                  ['Ne pas rester dessous', "ni pergola ni carport ne sont des abris pendant une tempête : on reste à l'intérieur de la maison."],
                  ['Ne pas intervenir pendant le vent', "jamais d'échelle ni de montée sur la toiture tant que le vent souffle, même pour une lame qui claque."],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Le point des évacuations est le plus souvent oublié. Nous lui avons consacré un article complet sur{' '}
                <a href="/blog/evacuation-eaux-pluviales-pergola-carport" className={lienInterne}>
                  l&apos;évacuation des eaux pluviales d&apos;une pergola ou d&apos;un carport
                </a>
                , avec les gestes d&apos;entretien d&apos;automne.
              </p>
            </section>

            {/* Après la tempête */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Après la tempête : constater, photographier, déclarer
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une fois le vent retombé, on fait le tour de l&apos;ouvrage depuis le sol, sans monter dessus : poteaux
                d&apos;aplomb, platines et chevilles en place, fixation en façade intacte, lames et chéneaux sans
                déformation, toiles et stores sans déchirure. On{' '}
                <strong className="text-primary font-semibold">photographie tout</strong>, de près et de loin, avant de
                déplacer quoi que ce soit.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Côté assurance, d&apos;après{' '}
                <a
                  href="https://www.anil.org/votre-besoin/gerer-un-bien/intemperies-et-assurances/"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  l&apos;ANIL (intempéries et assurances)
                </a>
                , la <strong className="text-primary font-semibold">garantie tempête est incluse dans les contrats
                multirisques habitation</strong> (article L122-7 du Code des assurances). Le sinistre se déclare dans un
                délai de <strong className="text-primary font-semibold">cinq jours ouvrés après sa constatation</strong>
                . L&apos;assureur peut demander une attestation météo, ou la preuve que d&apos;autres bâtiments de bonne
                construction ont été endommagés dans un rayon de 5 km.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le point qui surprend le plus nos clients : les{' '}
                <strong className="text-primary font-semibold">
                  vérandas, stores, panneaux et aménagements extérieurs sont souvent exclus, sauf mention au contrat
                </strong>
                . Une pergola ou un carport peut donc ne pas être couvert. Le bon moment pour le vérifier, c&apos;est
                avant l&apos;hiver : relisez votre contrat et, si besoin, faites déclarer l&apos;ouvrage auprès de
                votre assureur.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Enfin, même si rien ne semble cassé, faites{' '}
                <strong className="text-primary font-semibold">contrôler l&apos;ancrage et la motorisation</strong>{' '}
                avant de réutiliser la pergola ou le carport : une cheville qui a pris du jeu ou un moteur qui a forcé ne
                se voient pas toujours à l&apos;œil. Ce que couvrent les garanties du fabricant et du poseur, et ce qui
                relève de l&apos;assurance, est détaillé dans notre article sur{' '}
                <a href="/blog/garanties-sav-pergola-veranda-aluminium" className={lienInterne}>
                  les garanties et le SAV d&apos;une pergola ou d&apos;une véranda aluminium
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/blog/pergola-aluminium-tempete-vent/arbre-brise-apres-tempete-constat.webp"
              w={1200}
              h={646}
              alt="Arbre brisé et branches arrachées au sol après une tempête, dégâts de vent à constater"
              caption="Branches et débris sont les premiers projectiles d'une tempête : on photographie les dégâts depuis le sol, de près et de loin, avant de déplacer quoi que ce soit."
            />

            {/* Gironde */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                En Gironde et autour de Libourne : notre façon de faire
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La Gironde réunit des expositions très différentes : façade littorale, rives d&apos;estuaire et de
                rivière, coteaux et plaines viticoles ouvertes autour de Libourne, lotissements abrités. Une même
                pergola ne se conçoit pas de la même façon partout. Sur chacun de nos chantiers, nous suivons la même
                méthode :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ["Un relevé d'exposition sur place", "orientation des vents dominants, obstacles, effets de couloir, nature du sol et de la façade."],
                  ['Un ancrage dimensionné', "massifs ou dalle adaptés, chevilles choisies pour le support réel, fixation en façade dans une maçonnerie saine."],
                  ['Des automatismes réglés à la pose', "capteur de vent installé et paramétré selon la notice du fabricant, testé avec vous à la mise en service."],
                  ['Des conseils remis au client', "la position des lames par grand vent, les stores à remonter, les évacuations à surveiller à l'automne."],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Côté budget, l&apos;ancrage et le capteur de vent ne sont pas les postes qui pèsent le plus, mais ce sont
                ceux sur lesquels il ne faut pas économiser. Découvrez notre approche des{' '}
                <a href="/pergolas" className={lienInterne}>pergolas aluminium et bioclimatiques</a>, et voyez comment
                elle se traduit concrètement dans{' '}
                <a href="/realisations" className={lienInterne}>nos réalisations en Gironde</a>.
              </p>
            </section>
          </div>
        </article>

        {/* FAQ */}
        <section className="py-section-padding bg-surface-container-low">
          <div className="max-w-4xl mx-auto px-6 md:px-16">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
              Questions fréquentes
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-12">
              Pergola aluminium et tempête : vos questions
            </h2>
            <div className="space-y-4">
              {faq.map((item, i) => (
                <details
                  key={item.q}
                  className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow"
                  {...(i === 0 ? { open: true } : {})}
                >
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-headline-sm text-headline-sm text-primary pr-6">{item.q}</h3>
                    <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform" aria-hidden="true">
                      expand_more
                    </span>
                  </summary>
                  <p className="text-on-surface-variant text-body-md mt-4">{item.r}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Conclusion + CTA */}
        <section className="py-section-padding bg-primary text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Le mot de la fin
            </span>
            <h2 className="font-headline-md text-headline-md mt-4 mb-6">
              Une pergola qui tient, c&apos;est une pergola bien ancrée et bien utilisée
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Une pergola ou un carport aluminium ne s&apos;envole pas par hasard : il tient par un ancrage dimensionné
              pour votre commune et votre terrain, par des automatismes bien réglés, et par quelques gestes le jour de
              l&apos;alerte. C&apos;est ce que nous étudions et posons chez L&apos;Esprit Bois, entreprise qualifiée
              Qualibat, à Libourne et dans toute la Gironde, du relevé d&apos;exposition jusqu&apos;aux conseils de
              mise en service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pergolas"
                className="bg-secondary text-primary px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-secondary-fixed transition-all active:scale-95"
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
