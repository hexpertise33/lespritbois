import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
const COVER = '/images/blog/raccord-extension-ossature-bois-maison-existante/extension-ossature-bois-toit-plat-accolee-maison-gironde.jpg';

export const metadata: Metadata = buildMetadata({
  title: 'Raccord extension ossature bois et maison : guide Gironde',
  description:
    'Sol, mur, toit, ouverture : comment raccorder une extension ossature bois à la maison sans fissure ni infiltration, en Gironde et autour de Libourne.',
  keywords:
    'raccord extension ossature bois maison existante, jonction extension maison, joint de dilatation extension, solin extension toiture, ouverture mur porteur extension, extension bois Gironde, extension bois Libourne',
  path: '/blog/raccord-extension-ossature-bois-maison-existante',
  ogImage: COVER,
  ogTitle: 'Extension en ossature bois : le raccord avec la maison, là où tout se joue',
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
        name: 'Raccord extension et maison',
        item: 'https://lesprit-bois.fr/blog/raccord-extension-ossature-bois-maison-existante',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Extension en ossature bois : le raccord avec la maison, là où tout se joue',
    description:
      "Une extension et une maison ne bougent pas de la même façon. Comment traiter le raccord au sol, au mur, au toit et à l'ouverture pour qu'il reste étanche, isolé et invisible, en Gironde et autour de Libourne.",
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
    datePublished: '2026-11-01',
    dateModified: '2026-11-01',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/raccord-extension-ossature-bois-maison-existante',
    },
    about: [
      { '@type': 'Thing', name: 'extension ossature bois' },
      { '@type': 'Thing', name: 'joint de dilatation' },
      { '@type': 'Thing', name: 'ouverture de mur porteur' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Faut-il toujours désolidariser une extension en ossature bois de la maison ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "C'est la règle générale : des fondations et une dalle distinctes, séparées par un joint, pour que chaque volume bouge sans fissurer l'autre. La légèreté de l'ossature bois ne supprime pas ce mouvement. Les cas particuliers, comme un sol difficile ou des fondations existantes fragiles, sont tranchés par le bureau d'études.",
        },
      },
      {
        '@type': 'Question',
        name: "Quelle largeur doit faire le joint entre l'extension et la maison ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Nous ne donnons pas de chiffre passe-partout : la largeur dépend du sol, des deux structures et des prescriptions de l'étude. Retenez plutôt le principe : le joint doit exister réellement sur toute la jonction, rester libre de bouger et être protégé de l'eau et de l'air. Si un devis ne le mentionne pas, posez la question.",
        },
      },
      {
        '@type': 'Question',
        name: "Une fissure à la jonction entre la maison et l'extension est-elle grave ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Pas forcément, mais elle ne s'interprète pas à distance. Une fissure verticale qui suit la jonction signale souvent deux volumes qui bougent séparément alors qu'ils ont été liés par un enduit ou un carrelage. Faites-la examiner si elle s'élargit, si l'eau passe ou si des menuiseries se mettent à coincer.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quand ouvre-t-on le mur existant pendant le chantier ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le plus tard possible, une fois l'extension hors d'eau, sauf contrainte technique particulière. La maison reste ainsi fermée pendant le gros du chantier, et l'ouverture débouche sur un volume déjà protégé de la pluie. Avant d'ouvrir, l'étude de structure fixe le linteau et ses appuis, puis le mur est étayé.",
        },
      },
      {
        '@type': 'Question',
        name: 'La garantie décennale couvre-t-elle le raccord avec la maison ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Ne le supposez pas : vérifiez-le. Demandez l'attestation d'assurance avant de signer et contrôlez que les activités réellement prévues y figurent, notamment l'ossature bois, la couverture ou l'étanchéité et l'intervention sur la structure existante. Si plusieurs entreprises interviennent, demandez l'attestation de chacune.",
        },
      },
    ],
  },
];

const lignesDevis = [
  ['Au sol', 'Fondations propres, joint entre les dalles, reprise du seuil et du revêtement à la jonction', '« Dalle » sans un mot sur le joint ni sur la jonction avec le sol existant'],
  ['Au mur', "Traitement de la jonction, continuité du pare-pluie et de l'étanchéité à l'air, finition du bardage contre le mur", '« Raccord à la maison » en une ligne, sans détail ni quantité'],
  ['Au toit', 'Solin ou relevé selon le cas, adaptation de la couverture, reprise de la gouttière et des descentes', '« Toiture » chiffrée comme si le volume était isolé'],
  ['Ouverture', 'Étude de structure, linteau, étaiement, ouverture, évacuation des gravats, finitions des tableaux', '« Ouverture comprise » sans étude ni étaiement, ou renvoyée à un autre lot non chiffré'],
];

const faq = [
  {
    q: 'Faut-il toujours désolidariser une extension en ossature bois de la maison ?',
    r: (
      <>
        C&apos;est la règle générale : des fondations et une dalle distinctes, séparées par un joint, pour que chaque
        volume bouge sans fissurer l&apos;autre. La légèreté de l&apos;ossature bois ne supprime pas ce mouvement. Les
        cas particuliers, comme un sol difficile ou des fondations existantes fragiles, sont tranchés par le bureau
        d&apos;études.
      </>
    ),
  },
  {
    q: "Quelle largeur doit faire le joint entre l'extension et la maison ?",
    r: (
      <>
        Nous ne donnons pas de chiffre passe-partout : la largeur dépend du sol, des deux structures et des
        prescriptions de l&apos;étude. Retenez plutôt le principe : le joint doit exister réellement sur toute la
        jonction, rester libre de bouger et être protégé de l&apos;eau et de l&apos;air. Si un devis ne le mentionne
        pas, posez la question.
      </>
    ),
  },
  {
    q: "Une fissure à la jonction entre la maison et l'extension est-elle grave ?",
    r: (
      <>
        Pas forcément, mais elle ne s&apos;interprète pas à distance. Une fissure verticale qui suit la jonction signale
        souvent deux volumes qui bougent séparément alors qu&apos;ils ont été liés par un enduit ou un carrelage.
        Faites-la examiner si elle s&apos;élargit, si l&apos;eau passe ou si des menuiseries se mettent à coincer.
      </>
    ),
  },
  {
    q: 'Quand ouvre-t-on le mur existant pendant le chantier ?',
    r: (
      <>
        Le plus tard possible, une fois l&apos;extension hors d&apos;eau, sauf contrainte technique particulière. La
        maison reste ainsi fermée pendant le gros du chantier, et l&apos;ouverture débouche sur un volume déjà protégé de
        la pluie. Avant d&apos;ouvrir, l&apos;étude de structure fixe le linteau et ses appuis, puis le mur est étayé.
      </>
    ),
  },
  {
    q: 'La garantie décennale couvre-t-elle le raccord avec la maison ?',
    r: (
      <>
        Ne le supposez pas : vérifiez-le. Demandez l&apos;attestation d&apos;assurance avant de signer et contrôlez que
        les activités réellement prévues y figurent, notamment l&apos;ossature bois, la couverture ou l&apos;étanchéité
        et l&apos;intervention sur la structure existante. Si plusieurs entreprises interviennent, demandez
        l&apos;attestation de chacune.
      </>
    ),
  },
];

export default function ArticleRaccordExtensionOssatureBoisPage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="blog" />
      <main id="contenu">
        {/* Hero */}
        <header className="relative pt-40 pb-24 md:pt-48 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="1600"
              height="1200"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Extension en ossature bois à toit plat et bardage gris accolée au pignon enduit d'une maison en Gironde, en fin de chantier"
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
              <span className="text-secondary-fixed">Raccord extension et maison</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Ossature bois
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Extension en ossature bois : le raccord avec la maison, là où tout se joue
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
              <span>1er novembre 2026</span>
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
                Une extension et une maison ne bougent pas de la même façon : un bon raccord ne cherche donc pas à les
                souder, il les laisse vivre chacune de son côté et rend le joint étanche, isolé et invisible. Ce raccord
                se traite à quatre endroits : le sol, le mur, le toit et l&apos;ouverture.
              </strong>{' '}
              Le détail exact dépend toujours de votre bâti et de l&apos;étude : nous donnons ici la logique que nous
              appliquons sur nos chantiers à Libourne et en Gironde, pas des recettes à recopier. Si vous hésitez encore
              sur la nature du volume, notre comparatif{' '}
              <a href="/blog/veranda-ou-extension-ossature-bois" className={lienInterne}>
                véranda ou extension en ossature bois
              </a>{' '}
              vous aidera à trancher d&apos;abord.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* Point faible */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Pourquoi la jonction est le point faible de toute extension
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                À la jonction, trois écarts se rencontrent.{' '}
                <strong className="text-primary font-semibold">Deux âges</strong> : la maison a fini de se stabiliser
                depuis longtemps, alors que l&apos;extension charge un sol qui n&apos;a encore rien porté.{' '}
                <strong className="text-primary font-semibold">Deux fondations</strong> : pas la même profondeur, pas la
                même conception, parfois pas le même terrain.{' '}
                <strong className="text-primary font-semibold">Deux matériaux</strong> : une ossature bois légère
                d&apos;un côté, un mur lourd de l&apos;autre, qui ne réagissent ni à la même vitesse ni de la même
                manière à l&apos;humidité et à la chaleur.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le résultat a un nom : le tassement différentiel. Quand un volume descend ou bouge un peu plus que
                l&apos;autre, tout ce qui les relie de façon rigide encaisse l&apos;écart. D&apos;où cette fissure
                verticale qui apparaît précisément à la jonction, puis l&apos;eau qui s&apos;y invite et l&apos;air froid
                qui la suit.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                La réponse n&apos;est donc pas de lier plus fort. Le joint n&apos;est pas un défaut que l&apos;on cache :
                c&apos;est un ouvrage à part entière, que l&apos;on dessine et que l&apos;on chiffre.
              </p>
            </section>
            <Figure
              src="/images/chantiers/extension-ossature-bois-pare-pluie-volume-accole-gironde.jpg"
              w={1100}
              h={825}
              alt="Volume d'extension en ossature bois sous pare-pluie, avec ses tasseaux, accolé au mur enduit d'une maison en Gironde"
              caption="Avant le bardage, le pare-pluie enveloppe tout le volume neuf : on lit bien deux constructions distinctes, et la ligne où elles se rencontrent."
            />

            {/* Au sol */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Au sol : des fondations et une dalle désolidarisées
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est le point de départ. Le{' '}
                <a
                  href="https://parc-vosges-nord.fr/19-extensions"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  guide du Parc naturel régional des Vosges du Nord sur les extensions
                </a>{' '}
                le formule clairement : les fondations de l&apos;extension doivent être dissociées de celles de la
                maison, et un joint de dilatation permet un mouvement sans fissuration. Le même principe vaut entre les
                deux dalles : celle de l&apos;extension ne vient pas prendre appui sur la structure existante.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">
                  Le joint désolidarisé est la règle générale, et le bureau d&apos;études tranche les cas particuliers.
                </strong>{' '}
                Une ossature légère ne dispense pas de cette réflexion, et les fondations anciennes demandent de la
                prudence : on ne terrasse pas au pied d&apos;un vieux mur sans savoir sur quoi il repose. En Gironde, les
                sols argileux, qui gonflent et se rétractent au fil des saisons, rendent ce point encore plus sensible.
                Notre article sur le{' '}
                <a href="/blog/sol-argileux-gironde-etude-de-sol-extension" className={lienInterne}>
                  sol argileux en Gironde et l&apos;étude de sol avant une extension
                </a>{' '}
                explique ce que cette étude apporte.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Reste la question que tout le monde pose : comment avoir un sol continu si les dalles sont séparées ? Le
                joint de structure doit se retrouver dans le revêtement. Un carrelage collé d&apos;un seul tenant
                par-dessus risque de se fendre le long de cette ligne. On place donc la coupure au droit du passage, le
                plus souvent sous un seuil ou un profilé discret, et l&apos;on aligne les niveaux avec soin. Une maison
                ancienne n&apos;a pas toujours un sol de niveau : le seuil se décide sur relevé, pas sur plan.
              </p>
            </section>
            <Figure
              src="/images/blog/raccord-extension-ossature-bois-maison-existante/dalle-extension-ossature-bois-contre-mur-maison-gironde.jpg"
              w={1200}
              h={900}
              alt="Dalle béton et premiers montants d'une extension en ossature bois, le long du mur d'une maison en Gironde"
              caption="Dalle coulée, ossature à peine commencée : c'est à ce stade, tant que le pied du mur reste accessible, que se traite la rencontre entre le sol neuf et la maison."
            />

            {/* Au mur */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Au mur : une ossature sur ses propres montants, un bardage qui s&apos;arrête proprement
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                L&apos;ossature s&apos;appuie sur ses propres montants : le mur de la maison n&apos;est pas là pour la
                porter. Sauf prescription particulière de l&apos;étude, le dernier montant longe le mur existant sans en
                dépendre. Or ce mur n&apos;est ni droit ni lisse. Pierre, enduit ou brique : il faut relever ses
                irrégularités avant de dessiner, et les rattraper dans le détail de jonction plutôt qu&apos;à coups de
                mastic.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Trois continuités doivent alors se retrouver à cet endroit :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le pare-pluie', "il remonte jusqu'à la jonction et s'y raccorde sans laisser de chemin à l'eau qui passerait derrière le bardage."],
                  ["L'isolant et l'étanchéité à l'air", "ils se referment sur le mur existant : c'est le pont thermique classique du raccord, et le terrain favorable à la condensation s'il reste ouvert."],
                  ['Le bardage', "il s'arrête sur une finition pensée pour cette rencontre, qui laisse les deux supports bouger au lieu de les relier par un enduit rigide."],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un de nos chantiers l&apos;illustre, à Clérac, en Charente-Maritime, à la limite de la
                Gironde : une ossature neuve à raccorder sur une grange en pierre équipée de contreforts métalliques
                scellés en façade. Le risque n&apos;était pas esthétique. Un joint mal traité entre deux systèmes
                constructifs produit un pont thermique sur toute la hauteur, avec la condensation qui va avec. Nous avons
                mené l&apos;extension en isolation par l&apos;extérieur, pour que l&apos;enveloppe neuve se referme sur
                l&apos;existant au lieu de s&apos;y accoler.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                À l&apos;intérieur, le même raisonnement s&apos;applique : un doublage vissé et enduit d&apos;un seul
                tenant, d&apos;un volume à l&apos;autre, retrouvera tôt ou tard sa fissure. Il faut lui laisser la
                possibilité de bouger, par une coupure franche ou une finition prévue pour cela. Pour le reste de la
                paroi, notre guide sur{' '}
                <a href="/blog/isolation-ossature-bois-entre-montants" className={lienInterne}>
                  l&apos;isolation d&apos;une ossature bois entre montants
                </a>{' '}
                détaille la composition du mur et le rôle de chaque couche.
              </p>
            </section>
            <Figure
              src="/images/blog/raccord-extension-ossature-bois-maison-existante/raccord-bardage-bois-extension-angle-mur-pierre.jpg"
              w={1200}
              h={1080}
              alt="Bardage bois vertical d'une extension venant s'arrêter contre l'angle en pierre de taille d'une maison ancienne"
              caption="Les pierres d'angle ne sont jamais parfaitement droites : la dernière lame vient buter sur un support irrégulier, sur toute la hauteur de la jonction."
            />

            {/* Au toit */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Au toit : solin et relevé, ce qui recouvre sans être soudé
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est l&apos;endroit où l&apos;eau cherche à entrer, et le même principe s&apos;y applique :{' '}
                <strong className="text-primary font-semibold">
                  l&apos;étanchéité vient du recouvrement, pas d&apos;un collage rigide entre les deux volumes.
                </strong>{' '}
                Un élément solidaire de la maison, le solin, vient couvrir un élément solidaire de l&apos;extension, le
                relevé. L&apos;un coiffe l&apos;autre, et chacun garde sa liberté de mouvement. Un cordon de mastic seul
                n&apos;est pas un raccord durable. Trois configurations reviennent :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['La pente raccordée sur les tuiles', "la couverture de l'extension rejoint celle de la maison. Le rendu est souvent le plus naturel, mais il faut reprendre une partie des tuiles existantes, et une couverture ancienne n'a pas toujours des cotes régulières."],
                  ["Le monopente sous l'égout", "le toit de l'extension démarre sous le bas de la toiture existante. C'est simple et efficace, à condition que la hauteur disponible permette à la fois une pente suffisante pour la couverture choisie et un plafond confortable. Ce calcul se fait avant de valider le plan."],
                  ["Le toit plat avec relevé et acrotère", "la membrane d'étanchéité remonte contre le mur, sous un solin, et l'acrotère ferme le pourtour. L'eau ne doit jamais stagner contre la maison : pente, évacuations et trop-plein se dessinent dès la conception."],
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
                Reste ce que l&apos;on oublie : la gouttière et le débord de la maison. Si l&apos;extension se glisse sous
                l&apos;égout, l&apos;ancienne gouttière peut se retrouver au mauvais endroit, et sa descente au milieu du
                nouveau volume. Le débord peut gêner le passage du nouveau toit, et le couper touche à la charpente : ce
                n&apos;est pas un geste de finition. Ces reprises se prévoient et se chiffrent avec le reste.
              </p>
            </section>
            <Figure
              src="/images/blog/raccord-extension-ossature-bois-maison-existante/toit-plat-extension-releve-membrane-mur-maison-gironde.jpg"
              w={1200}
              h={900}
              alt="Toit plat d'une extension en ossature bois en Gironde : membrane d'étanchéité noire relevée contre le mur enduit de la maison, sous un profilé métallique"
              caption="La membrane remonte contre le mur et un profilé métallique en tient le haut, juste sous la rive de la toiture existante : l'eau ne trouve pas de rive ouverte à cet endroit."
            />

            {/* Ouverture */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                L&apos;ouverture dans le mur existant : étude d&apos;abord, marteau ensuite
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Relier les deux volumes suppose le plus souvent d&apos;ouvrir un mur, et un mur de maison ancienne est
                rarement un simple écran. Dès qu&apos;il participe à la structure, l&apos;ouverture se prépare avec une{' '}
                <strong className="text-primary font-semibold">étude de structure</strong> : c&apos;est elle qui
                dimensionne le linteau et définit ses appuis, à partir du mur réel et des charges qu&apos;il reçoit. Nous
                ne donnons pas de dimension type, car elle n&apos;existe pas. Vient ensuite l&apos;étaiement, qui reprend
                ces charges le temps des travaux, avant toute démolition.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le moment compte autant que la méthode.{' '}
                <strong className="text-primary font-semibold">
                  Sauf contrainte particulière, nous ouvrons le plus tard possible, une fois l&apos;extension hors
                  d&apos;eau.
                </strong>{' '}
                La maison reste close pendant le gros du chantier, ce qui limite la poussière et l&apos;exposition à la
                pluie, et l&apos;ouverture débouche sur un volume déjà protégé.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                La matière change aussi la manière de faire. Dans la pierre, on découvre parfois au moment d&apos;ouvrir
                des parements et un remplissage de qualité inégale : l&apos;appui du linteau et la reprise des tableaux
                demandent alors une attention particulière. Dans la brique, tout dépend de son type et de la façon dont le
                mur a été monté : les appuis doivent pouvoir recevoir une charge concentrée, ce qui n&apos;est pas acquis.
              </p>
            </section>
            <Figure
              src="/images/blog/raccord-extension-ossature-bois-maison-existante/ouverture-linteau-mur-pierre-cote-extension.jpg"
              w={1200}
              h={1020}
              alt="Passage dans un mur de pierre ancien, avec linteau clair et tableaux enduits, vu depuis l'intérieur d'une extension en chantier"
              caption="Linteau et appuis ne se décident pas à l'œil : ils découlent du mur réel et des charges que l'étude a calculées."
            />

            {/* Devis */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qu&apos;il faut demander sur le devis
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Un raccord non chiffré ne disparaît pas : il revient plus tard en supplément, ou il n&apos;est pas
                traité. Le meilleur test consiste à chercher ces quatre postes, écrits noir sur blanc, en face du prix :
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Endroit</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Ce que l&apos;on doit retrouver</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Ce qui doit alerter</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lignesDevis.map((ligne, i) => (
                      <tr
                        key={ligne[0]}
                        className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}
                      >
                        <td className="px-4 py-3 text-primary font-semibold whitespace-nowrap">{ligne[0]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 mb-5">
                Ces postes pèsent d&apos;autant plus que le projet est petit, puisqu&apos;ils se répartissent sur peu de
                mètres carrés : c&apos;est l&apos;une des raisons détaillées dans notre guide du{' '}
                <a href="/blog/extension-ossature-bois-prix-m2" className={lienInterne}>
                  prix au m² d&apos;une extension en ossature bois
                </a>.{' '}
                Demandez aussi sur quelles règles de l&apos;art repose la mise en œuvre : les{' '}
                <a href="https://www.cstb.fr/" className={lienInterne} target="_blank" rel="noopener noreferrer">
                  NF DTU et avis techniques, présentés par le CSTB
                </a>,{' '}
                servent de référence, et une solution hors du courant mérite une justification écrite.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Enfin, la{' '}
                <a
                  href="https://entreprendre.service-public.gouv.fr/vosdroits/F2034"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  garantie décennale
                </a>{' '}
                ne se présume pas :{' '}
                <strong className="text-primary font-semibold">
                  vérifiez sur l&apos;attestation que l&apos;activité est bien couverte
                </strong>,{' '}
                qu&apos;il s&apos;agisse de l&apos;ossature, de la couverture ou de l&apos;étanchéité, ou de
                l&apos;intervention sur le mur existant. Si plusieurs entreprises se partagent le raccord, demandez qui
                répond de quoi et l&apos;attestation de chacune.
              </p>
            </section>

            {/* Gironde */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                En Gironde : pierre de taille, échoppes, enduits anciens et sols argileux
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le bâti girondin rend ce raccord particulièrement intéressant. Sur une maison en{' '}
                <strong className="text-primary font-semibold">pierre de taille</strong>, on veut préserver une façade qui
                fait la valeur de la maison : le raccord doit rester aussi discret que possible, et éviter d&apos;enfermer
                ce mur ancien derrière une finition inadaptée. Sur une{' '}
                <strong className="text-primary font-semibold">échoppe</strong>, l&apos;extension se joue souvent à
                l&apos;arrière, sur le jardin, avec une emprise et des accès qui contraignent la toiture comme le
                chantier. Sur un <strong className="text-primary font-semibold">enduit ancien</strong>, le support peut
                masquer un mur plus irrégulier ou plus fatigué qu&apos;il n&apos;y paraît : on ne fixe rien dessus sans
                avoir compris ce qu&apos;il y a derrière.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ajoutez les <strong className="text-primary font-semibold">sols argileux</strong> fréquents dans le
                Libournais, et vous comprenez pourquoi nous regardons la maison entière avant de dessiner son
                agrandissement. À Libourne et aux alentours, cette lecture du bâti et du terrain fait partie de nos{' '}
                <a href="/constructions-bois" className={lienInterne}>constructions bois</a>, de l&apos;étude à la pose.
                Vous pouvez voir des projets concrets dans{' '}
                <a href="/realisations" className={lienInterne}>nos réalisations</a>.
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
              Raccord d&apos;extension : vos questions
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
              Un raccord réussi ne se remarque pas
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Au sol, au mur, au toit et à l&apos;ouverture, le bon raccord laisse chaque volume bouger et garde
              l&apos;eau, l&apos;air et les fissures dehors. C&apos;est ce que nous venons étudier sur place chez
              L&apos;Esprit Bois, entreprise qualifiée Qualibat, à Libourne et dans toute la Gironde, avant de chiffrer
              chaque poste de votre extension.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/devis-extension"
                className="bg-secondary text-primary px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-secondary-fixed transition-all active:scale-95"
              >
                Demander mon devis d&apos;extension
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
