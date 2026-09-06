import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/chantiers/ossature-bois-bardage-douglas-facade-tuiles-gironde.webp';

export const metadata: Metadata = buildMetadata({
  title: 'Garage en ossature bois : permis, dalle et budget en Gironde',
  description:
    "Garage en ossature bois : c'est l'emprise au sol qui décide, déclaration préalable jusqu'à 20 m², permis au-delà. Dalle, taxe et budget en Gironde.",
  keywords:
    "garage en ossature bois, garage bois, garage bois Gironde, construire un garage à Libourne, permis de construire garage, garage bois ou carport, dalle pour garage bois, taxe d'aménagement garage, garage ossature bois prix, garage bois Libourne",
  path: '/blog/garage-ossature-bois-permis-dalle-budget',
  ogImage: COVER,
  ogTitle: "Garage en ossature bois : ce qu'on déclare, ce qu'on paie, ce qu'on prévoit",
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
        name: 'Garage en ossature bois',
        item: 'https://lesprit-bois.fr/blog/garage-ossature-bois-permis-dalle-budget',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "Garage en ossature bois : ce qu'on déclare, ce qu'on paie, ce qu'on prévoit",
    description:
      "Passer du carport ouvert au garage fermé change trois choses d'un coup : l'instruction en mairie, où c'est l'emprise au sol qui décide et non la surface de plancher, la taxe d'aménagement, dont un garage détaché n'est pas exonéré, et la physique du bâtiment, où un volume clos non chauffé abritant une voiture mouillée doit être ventilé. Urbanisme, fiscalité, dalle, ossature, condensation et budget par poste, par un artisan de Libourne, en Gironde.",
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
    datePublished: '2026-09-06',
    dateModified: '2026-09-06',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/garage-ossature-bois-permis-dalle-budget',
    },
    about: [
      { '@type': 'Thing', name: 'garage en ossature bois' },
      { '@type': 'Thing', name: 'permis de construire' },
      { '@type': 'Thing', name: 'construction bois' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Faut-il un permis de construire pour un garage de 25 m² ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Pour une construction nouvelle isolée, la déclaration préalable couvre jusqu'à 20 m² d'emprise au sol : au-delà, donc à 25 m², c'est un permis de construire. Le seuil de 40 m² souvent cité ne vaut que pour une extension accolée à un bâtiment existant, en zone urbaine d'une commune dotée d'un plan local d'urbanisme. Un garage détaché au fond du jardin ne rentre pas dans ce cas de figure, et le PLU communal peut de toute façon être plus exigeant : le service urbanisme de la mairie tranche.",
        },
      },
      {
        '@type': 'Question',
        name: 'Un garage en bois est-il moins durable qu’un garage en parpaing ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non, à conception équivalente. Ce qui use un garage en bois n'est pas le matériau mais l'eau : une lisse basse posée à même une dalle qui ne draine pas, un bardage sans lame d'air, un débord de toit trop court, un volume clos non ventilé. Réglés dès la conception, ces points donnent un ouvrage qui traverse les décennies. À l'inverse, un garage maçonné mal drainé se dégrade lui aussi. L'ossature bois a en plus l'avantage d'être plus légère, plus rapide à monter et démontable ou modifiable.",
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on construire un garage en bois en limite de propriété ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Cela dépend entièrement du plan local d'urbanisme de votre commune, qui fixe les règles d'implantation par rapport aux limites séparatives : certaines zones l'autorisent, d'autres imposent un retrait. S'y ajoutent les règles de vue et d'écoulement des eaux vis-à-vis du voisin, et l'obligation que la couverture ne déverse pas chez lui. Nous consultons le PLU et le service urbanisme avant de dessiner l'implantation, jamais l'inverse.",
        },
      },
      {
        '@type': 'Question',
        name: 'Un garage en ossature bois doit-il être isolé ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Pas nécessairement s'il ne sert qu'à garer et ranger : un garage non chauffé n'a pas à être traité comme une pièce de vie. Isoler un volume qu'on ne chauffe pas peut même aggraver la condensation si la ventilation ne suit pas. En revanche, si vous comptez y installer un atelier chauffé, un espace de travail ou une future pièce, il faut le prévoir dès l'ossature, avec l'isolant, le pare-vapeur et la ventilation pensés ensemble. C'est une décision à prendre avant le chantier, pas après.",
        },
      },
      {
        '@type': 'Question',
        name: 'Combien de temps dure la construction d’un garage en ossature bois ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Sur nos chantiers, le montage lui-même est court : quelques jours pour l'ossature et la couverture d'un garage une voiture, une semaine ou un peu plus avec le bardage et les finitions. Ce qui allonge le calendrier, c'est l'amont et le support : l'instruction du dossier en mairie, puis le terrassement, la dalle et son temps de séchage avant qu'on puisse poser la lisse basse. Il faut donc raisonner en mois entre le premier rendez-vous et la porte qui s'ouvre, pas en jours de pose.",
        },
      },
    ],
  },
];

const comparatif = [
  ['Carport ouvert', 'Abrite la voiture, sans mur', 'Budget contenu, lumineux, pose rapide', 'Ne range pas, ne sécurise pas'],
  ['Carport semi-fermé', 'Abri avec un ou deux côtés bardés', 'Coupe le vent, range vélos et bois', 'Reste ouvert, pas de fermeture à clé'],
  ['Garage ossature bois', 'Volume clos, couvert, fermé par une porte', 'Rangement, atelier, sécurité, vélos au sec', 'Dalle et porte à financer, autorisation plus lourde'],
  ['Garage maçonné', 'Construction fermée traditionnelle', 'Très robuste, familier des assureurs', 'Chantier long, budget élevé, peu modifiable'],
];

const faq = [
  {
    q: 'Faut-il un permis de construire pour un garage de 25 m² ?',
    r: (
      <>
        Pour une construction nouvelle isolée, la déclaration préalable couvre jusqu&apos;à 20 m² d&apos;emprise au sol :
        au-delà, donc à 25 m², c&apos;est un permis de construire. Le seuil de 40 m² souvent cité ne vaut que pour une
        extension accolée à un bâtiment existant, en zone urbaine d&apos;une commune dotée d&apos;un plan local
        d&apos;urbanisme. Un garage détaché au fond du jardin ne rentre pas dans ce cas de figure, et le PLU communal peut
        de toute façon être plus exigeant : le service urbanisme de la mairie tranche.
      </>
    ),
  },
  {
    q: 'Un garage en bois est-il moins durable qu’un garage en parpaing ?',
    r: (
      <>
        Non, à conception équivalente. Ce qui use un garage en bois n&apos;est pas le matériau mais l&apos;eau : une lisse
        basse posée à même une dalle qui ne draine pas, un bardage sans lame d&apos;air, un débord de toit trop court, un
        volume clos non ventilé. Réglés dès la conception, ces points donnent un ouvrage qui traverse les décennies. À
        l&apos;inverse, un garage maçonné mal drainé se dégrade lui aussi. L&apos;ossature bois a en plus l&apos;avantage
        d&apos;être plus légère, plus rapide à monter et démontable ou modifiable.
      </>
    ),
  },
  {
    q: 'Peut-on construire un garage en bois en limite de propriété ?',
    r: (
      <>
        Cela dépend entièrement du plan local d&apos;urbanisme de votre commune, qui fixe les règles d&apos;implantation
        par rapport aux limites séparatives : certaines zones l&apos;autorisent, d&apos;autres imposent un retrait. S&apos;y
        ajoutent les règles de vue et d&apos;écoulement des eaux vis-à-vis du voisin, et l&apos;obligation que la
        couverture ne déverse pas chez lui. Nous consultons le PLU et le service urbanisme avant de dessiner
        l&apos;implantation, jamais l&apos;inverse.
      </>
    ),
  },
  {
    q: 'Un garage en ossature bois doit-il être isolé ?',
    r: (
      <>
        Pas nécessairement s&apos;il ne sert qu&apos;à garer et ranger : un garage non chauffé n&apos;a pas à être traité
        comme une pièce de vie. Isoler un volume qu&apos;on ne chauffe pas peut même aggraver la condensation si la
        ventilation ne suit pas. En revanche, si vous comptez y installer un atelier chauffé, un espace de travail ou une
        future pièce, il faut le prévoir dès l&apos;ossature, avec l&apos;isolant, le pare-vapeur et la ventilation pensés
        ensemble. C&apos;est une décision à prendre avant le chantier, pas après.
      </>
    ),
  },
  {
    q: 'Combien de temps dure la construction d’un garage en ossature bois ?',
    r: (
      <>
        Sur nos chantiers, le montage lui-même est court : quelques jours pour l&apos;ossature et la couverture d&apos;un
        garage une voiture, une semaine ou un peu plus avec le bardage et les finitions. Ce qui allonge le calendrier,
        c&apos;est l&apos;amont et le support : l&apos;instruction du dossier en mairie, puis le terrassement, la dalle et
        son temps de séchage avant qu&apos;on puisse poser la lisse basse. Il faut donc raisonner en mois entre le premier
        rendez-vous et la porte qui s&apos;ouvre, pas en jours de pose.
      </>
    ),
  },
];

export default function ArticleGarageOssatureBoisPage() {
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
              height="900"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Bâtiment annexe en ossature bois bardé de douglas, couverture en tuiles et gouttière zinc, réalisation en Gironde"
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
              <span className="text-secondary-fixed">Garage en ossature bois</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Constructions bois
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Construire un garage en ossature bois en Gironde : permis, dalle et budget
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
              <span>6 septembre 2026</span>
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
                Un garage en ossature bois n&apos;est pas un carport avec des murs. En fermant le volume, vous changez
                trois choses d&apos;un coup : l&apos;instruction en mairie, qui se joue sur l&apos;emprise au sol et non
                sur la surface de plancher (déclaration préalable jusqu&apos;à 20 m² pour une construction isolée, permis
                de construire au-delà) ; la fiscalité, car un garage détaché n&apos;est pas exonéré de taxe
                d&apos;aménagement ; et la physique du bâtiment, puisqu&apos;un volume clos, non chauffé, avec une voiture
                mouillée dedans, condense.
              </strong>{' '}
              Sur nos chantiers autour de Libourne, ce sont ces trois points, plus la dalle, qui font la différence entre
              un garage qui vieillit bien et un ouvrage qu&apos;on regrette. Voici ce que vous déclarez, ce que vous
              payez, et ce qui doit être prévu dès le terrassement.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Garage fermé ou carport */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Garage fermé ou carport : ce que le mur change vraiment
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Soyons honnêtes avant tout le reste : si votre besoin est{' '}
                <strong className="text-primary font-semibold">simplement d&apos;abriter une voiture</strong>, le carport
                reste le meilleur rapport service/prix. Il protège de la pluie, du gel, du soleil, des feuilles et de la
                résine, il se pose vite, il coûte une fraction d&apos;un garage, et il ne pose quasiment aucun problème de
                ventilation puisqu&apos;il est ouvert. Nous en posons beaucoup, et nous le disons à nos clients quand
                c&apos;est la bonne réponse. Le sujet est détaillé dans notre{' '}
                <a href="/blog/carport-bois-guide" className={lienInterne}>
                  guide du carport en bois
                </a>.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Le garage se justifie quand le besoin dépasse la voiture : ranger l&apos;outillage et le mobilier de
                jardin sans les voir, monter un établi, mettre les vélos et la tondeuse à l&apos;abri des regards, fermer
                à clé, et parfois simplement libérer le sous-sol ou la maison. C&apos;est un ouvrage de rangement autant
                qu&apos;un abri de voiture. Voici comment se situent les quatre solutions que nous chiffrons le plus
                souvent :
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Solution</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Principe</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Atouts</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Limites</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparatif.map((ligne, i) => (
                      <tr key={ligne[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}>
                        <td className="px-4 py-3 text-primary font-semibold whitespace-nowrap">{ligne[0]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[2]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6">
                Notre conseil de terrain : posez-vous la question du rangement avant celle de la voiture. Si vous
                n&apos;avez rien à enfermer, le mur ne vous apportera qu&apos;un surcoût, une autorisation plus lourde et
                un problème d&apos;humidité à gérer. Si vous avez un atelier en tête, alors le garage est le bon ouvrage,
                et il faut le construire comme un bâtiment, pas comme un abri.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Carport-bois-Libourne-5.webp"
              w={1200}
              h={646}
              alt="Carport en bois à charpente apparente posé sur une dalle béton, chantier L'Esprit Bois à Lagorce en Gironde"
              caption="Charpente montée, couverture posée, aucun mur : à ce stade, tout ce qui sépare l'abri du garage reste à construire."
            />

            {/* 2. Urbanisme */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Urbanisme : c&apos;est l&apos;emprise au sol qui décide, pas la surface de plancher
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est le point le moins intuitif du sujet, et celui qui fait trébucher la moitié des projets.
                L&apos;article R111-22 du code de l&apos;urbanisme déduit du calcul de la surface de plancher{' '}
                <em>« les surfaces de plancher aménagées en vue du stationnement des véhicules motorisés ou non, y
                compris les rampes d&apos;accès et les aires de manœuvres »</em>. Autrement dit :{' '}
                <strong className="text-primary font-semibold">
                  un garage ne crée quasiment pas de surface de plancher
                </strong>. Beaucoup de propriétaires en concluent qu&apos;ils n&apos;ont rien à déclarer. C&apos;est faux.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Car un garage crée bien de l&apos;<strong className="text-primary font-semibold">emprise au sol</strong>,
                et c&apos;est elle qui déclenche l&apos;autorisation. La règle de base, pour une construction nouvelle
                isolée :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Jusqu’à 20 m² d’emprise au sol', 'une déclaration préalable de travaux suffit pour une construction nouvelle isolée.'],
                  ['Au-delà de 20 m²', 'il faut déposer un permis de construire, avec un dossier plus complet et une instruction plus longue.'],
                  ['Le seuil de 40 m²', 'ne concerne pas votre garage détaché : il ne vaut que pour une extension accolée à un bâtiment existant, en zone urbaine d’une commune dotée d’un plan local d’urbanisme.'],
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
                Les formalités et la liste des pièces sont décrites sur les fiches officielles de la{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F17578"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  déclaration préalable de travaux
                </a>{' '}
                et du{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F1986"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  permis de construire
                </a>. Nous détaillons également les cas d&apos;abri, de carport et de pergola dans notre article sur les{' '}
                <a href="/blog/autorisation-urbanisme-abri-carport-pergola-2026" className={lienInterne}>
                  autorisations d&apos;urbanisme en 2026
                </a>.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Dernier avertissement, et il compte plus que les seuils :{' '}
                <strong className="text-primary font-semibold">le PLU de votre commune peut être plus strict</strong>.
                Implantation par rapport aux limites séparatives, distance à la voirie, emprise maximale autorisée sur la
                parcelle, pente et matériau de toiture, teinte du bardage, hauteur au faîtage : à Libourne comme dans
                chaque commune du Libournais, ces règles varient d&apos;une zone à l&apos;autre, et un lotissement peut
                encore y ajouter son propre règlement. Sur nos chantiers, la première visite en mairie précède le premier
                dessin, jamais l&apos;inverse.
              </p>
            </section>

            {/* 3. Taxe d'aménagement */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Taxe d&apos;aménagement : le garage détaché n&apos;y échappe pas
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Voilà la deuxième mauvaise surprise classique. Il existe bien une exonération de plein droit pour les
                surfaces de stationnement, mais elle vise{' '}
                <strong className="text-primary font-semibold">
                  les surfaces comprises dans la projection verticale de l&apos;emprise du bâtiment principal
                </strong>, c&apos;est-à-dire le garage intégré sous la maison ou dans son volume. Un garage autonome, construit au
                fond du jardin, en est explicitement exclu :{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F23263"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  la taxe d&apos;aménagement
                </a>{' '}
                s&apos;y applique.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Trois repères chiffrés valables en 2026, et rien de plus :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['892 € par m²', 'la valeur forfaitaire 2026 de la surface de construction hors Île-de-France, base de calcul de la taxe.'],
                  ['5 m² ou moins', 'les constructions inférieures ou égales à 5 m² bénéficient d’une exonération de plein droit. Un garage, par définition, dépasse largement ce seuil.'],
                  ['2 928 € par emplacement', 'la valeur forfaitaire 2026 d’un emplacement de stationnement extérieur non clos.'],
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
                Nous nous arrêtons là, volontairement. Savoir laquelle de ces deux assiettes s&apos;applique exactement à
                un garage détaché, celle du mètre carré de surface close et couverte ou le forfait par emplacement, relève
                de modalités réglementaires que nous ne trancherons pas depuis un article de blog : c&apos;est le rôle du
                service urbanisme, ou du{' '}
                <strong className="text-primary font-semibold">
                  simulateur des taxes d&apos;urbanisme d&apos;impots.gouv.fr
                </strong>, qui pose les bonnes questions et applique le bon régime à votre dossier.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Retenez surtout le principe :{' '}
                <strong className="text-primary font-semibold">
                  à ce barème s&apos;ajoutent un taux communal et un taux départemental
                </strong>, votés localement, qui diffèrent d&apos;une commune de Gironde à l&apos;autre. Deux garages identiques,
                l&apos;un à Libourne et l&apos;autre à trois kilomètres, ne coûtent donc pas la même chose en taxe. C&apos;est
                une ligne de budget à part entière, à sortir dès le début du projet et non à découvrir à la réception de
                l&apos;avis d&apos;imposition.
              </p>
            </section>

            <Figure
              src="/images/blog/garage-ossature-bois-permis-dalle-budget/garage-ossature-bois-murs-montes-sur-dalle-gironde.jpg"
              w={880}
              h={700}
              alt="Murs en ossature bois montés sur une dalle béton, ouverture réservée pour la porte, chantier en Gironde"
              caption="Les murs arrivent sur une dalle déjà finie et de niveau : la lisse basse traitée se fixe dessus, et toute la géométrie de l'ouvrage en dépend."
            />

            {/* 4. La dalle */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                La dalle : le poste qu&apos;on sous-estime toujours
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une voiture, c&apos;est plus d&apos;une tonne posée sur quatre petites surfaces de contact, qui roule,
                freine et braque au même endroit tous les jours. Rien à voir avec le sol d&apos;un abri de jardin. Le
                support d&apos;un garage est donc{' '}
                <strong className="text-primary font-semibold">une dalle béton ferraillée</strong>, dimensionnée pour
                cette charge concentrée et pour la nature du terrain.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Nous ne vous donnerons ici ni épaisseur, ni dosage, ni section d&apos;acier :{' '}
                <strong className="text-primary font-semibold">
                  ces valeurs dépendent du sol et de sa portance, et ne se décident pas depuis un article
                </strong>. Entre les terrains argileux du Libournais, sujets au retrait-gonflement, et un sol graveleux stable, le
                dimensionnement n&apos;a rien à voir. C&apos;est l&apos;étude de sol, ou à défaut une reconnaissance
                sérieuse du terrain, qui fixe la structure de la dalle. Ce qui est en revanche systématique :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Un décaissement et une forme drainante sous la dalle, pour que l’eau ne stagne jamais sous le béton.',
                  'Une légère pente vers l’extérieur, du fond du garage vers la porte, pour que l’eau qui goutte d’une voiture mouillée ressorte au lieu de s’accumuler contre les parois.',
                  'Un arase et un relevé bien pensés, de sorte que la lisse basse de l’ossature soit surélevée par rapport au sol fini extérieur et ne baigne jamais lors d’un ruissellement.',
                  'Une barrière de capillarité entre le béton et la lisse basse, pour couper la remontée d’humidité du support vers le bois.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ces quatre points ne coûtent presque rien s&apos;ils sont prévus au terrassement, et sont impossibles à
                rattraper une fois le béton tiré. C&apos;est exactement pour cela que nous parlons de la dalle avant de
                parler du bardage : c&apos;est le seul poste du chantier qui soit vraiment irréversible.
              </p>
            </section>

            {/* 5. Ossature, bardage, couverture */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ossature, bardage, couverture : comment nous le construisons
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un garage en ossature bois se monte comme un petit bâtiment : des murs à montants verticaux, entretoisés
                et contreventés pour reprendre les efforts du vent, assemblés sur une{' '}
                <strong className="text-primary font-semibold">lisse basse traitée et surélevée</strong>, elle-même isolée
                du béton. Nous préfabriquons les murs à l&apos;atelier, ce qui limite le temps d&apos;exposition à la
                pluie sur site et fiabilise les aplombs : un mur monté au sec est un mur qui reste droit.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Vient ensuite l&apos;enveloppe. Un pare-pluie protège l&apos;ossature, puis le{' '}
                <strong className="text-primary font-semibold">bardage est posé ventilé</strong>, sur tasseaux, avec une
                lame d&apos;air continue qui laisse l&apos;eau et la vapeur ressortir par le bas et par le haut. C&apos;est
                ce détail, plus que l&apos;essence choisie, qui fait tenir une façade bois. Le douglas est notre valeur
                sûre en Gironde : durable, disponible localement, et beau en grisant. Nous détaillons les profils, les
                sens de pose et les essences dans notre guide du{' '}
                <a href="/blog/bardage-bois-facade-essences-pose" className={lienInterne}>
                  bardage bois en façade
                </a>, et la question de la provenance dans celui consacré au{' '}
                <a href="/blog/bois-local-pin-maritime-douglas-gironde" className={lienInterne}>
                  bois local en Gironde
                </a>.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Pour la couverture, deux familles selon le contexte. Le{' '}
                <strong className="text-primary font-semibold">toit à deux pentes en tuiles</strong> se raccorde
                naturellement au bâti girondin et reste le choix le plus consensuel en mairie ; il donne en prime du
                volume sous rampant, utile pour stocker. Le{' '}
                <strong className="text-primary font-semibold">toit plat ou monopente</strong> convient aux maisons
                contemporaines et aux implantations contraintes en hauteur, sous réserve que le PLU l&apos;autorise et que
                l&apos;étanchéité et les évacuations soient traitées sérieusement.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Et dans les deux cas, un point que nous ne négocions pas :{' '}
                <strong className="text-primary font-semibold">un débord de toit généreux</strong>. C&apos;est la
                casquette qui protège le bardage du ruissellement direct et le fait vieillir régulièrement, sans coulures
                ni zones noires. Un garage bois avec un débord chiche vieillit deux fois plus vite qu&apos;un garage bien
                coiffé, pour quelques dizaines d&apos;euros de bois en moins.
              </p>
            </section>

            <Figure
              src="/images/chantiers/ossature-bois-chantier-bardage-en-cours-gironde.webp"
              w={1100}
              h={825}
              alt="Bardage douglas vertical en cours de pose sur une ossature bois, large ouverture réservée pour la porte, en Gironde"
              caption="Le bardage s'arrête net au-dessus du soubassement béton : ces quelques centimètres tiennent les lames hors des rejaillissements de pluie."
            />

            {/* 6. Condensation, ventilation, sécurité */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Condensation, ventilation et sécurité : ce qui fait vieillir un garage bois
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est le vrai ennemi, et le grand absent de la plupart des devis. Vous rentrez une voiture trempée,
                chaude, couverte d&apos;eau, dans un volume clos et non chauffé. L&apos;eau s&apos;évapore, l&apos;air se
                charge d&apos;humidité, puis rencontre des parois froides : le point de rosée est atteint et{' '}
                <strong className="text-primary font-semibold">
                  la condensation se dépose sur les parois et sous la couverture
                </strong>. Répété tout un hiver, c&apos;est ce qui noircit une sous-face, ternit un bardage par l&apos;intérieur et
                rouille l&apos;outillage accroché au mur.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La réponse n&apos;est pas de chauffer, c&apos;est de faire circuler l&apos;air :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Des grilles de ventilation hautes et basses, sur des façades opposées, pour créer un balayage traversant du volume.',
                  'Un écran de sous-toiture adapté et une couverture ventilée en sous-face, pour que l’humidité ne se condense pas sur le support de couverture.',
                  'Une porte qui n’étanche pas tout : un garage n’a pas à être hermétique, un léger jeu périphérique participe au renouvellement d’air.',
                  'Ne pas isoler un volume non chauffé sans avoir pensé la ventilation : ce serait piéger l’humidité plutôt que l’évacuer.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Côté fermeture, trois options que nous posons régulièrement. La{' '}
                <strong className="text-primary font-semibold">porte sectionnelle</strong> se relève sous plafond, ne
                déborde pas devant et se motorise facilement : c&apos;est la plus confortable quand le recul extérieur est
                court. La <strong className="text-primary font-semibold">porte basculante</strong> est plus simple et plus
                économique, mais elle balaie un débattement devant le garage. Les{' '}
                <strong className="text-primary font-semibold">portes battantes en bois</strong>, enfin, sont les plus
                cohérentes esthétiquement avec un ouvrage bois et les plus faciles à entretenir, à condition
                d&apos;accepter d&apos;ouvrir deux vantaux sous la pluie.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Enfin l&apos;électricité. Un garage sert vite d&apos;atelier : prévoyez dès l&apos;ossature le cheminement
                des gaines, l&apos;emplacement de l&apos;éclairage et des prises, et l&apos;arrivée depuis la maison, tant
                que les murs sont ouverts. L&apos;installation elle-même revient à un électricien, et nous ne donnerons
                ici aucune règle chiffrée : c&apos;est son métier, pas le nôtre. Un conseil tout de même, celui que nous
                donnons systématiquement :{' '}
                <strong className="text-primary font-semibold">
                  faites passer une attente dimensionnée pour une future borne de recharge
                </strong>, même si vous roulez encore au thermique. Le sujet est traité en détail dans notre article sur le{' '}
                <a href="/blog/carport-voiture-electrique-borne-recharge" className={lienInterne}>
                  carport et la borne de recharge pour voiture électrique
                </a>. Passer un câble dans une tranchée ouverte coûte une fraction de ce que coûtera la même tranchée rouverte
                dans cinq ans.
              </p>
            </section>

            <Figure
              src="/images/chantiers/ossature-bois-charpente-apparente-pare-pluie-gironde.webp"
              w={1200}
              h={900}
              alt="Intérieur d'un ouvrage en ossature bois en Gironde : charpente apparente, membrane agrafée sur les murs, sol en béton brut"
              caption="Volume clos, non chauffé et sans occupant : les traversées de ventilation se percent à ce stade, avant que les parements ne ferment les murs."
            />

            {/* 7. Budget, délais, notre façon de faire */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Budget, délais et notre façon de faire autour de Libourne
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Nous préférons donner des ordres de grandeur par poste plutôt qu&apos;un prix global au mètre carré, parce
                qu&apos;un prix global ne veut rien dire tant qu&apos;on ne sait pas ce qu&apos;il contient. Voici comment
                se répartit, sur nos chantiers girondins, le budget d&apos;un garage une voiture :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Terrassement et dalle', 'de quelques milliers d’euros à beaucoup plus selon l’accès des engins, le décaissement, l’évacuation des terres et la nature du sol. Un terrain en pente ou difficile d’accès fait exploser ce poste.'],
                  ['Ossature et bardage posés', 'le cœur de notre métier, et souvent le poste le plus prévisible : il varie surtout avec la surface, la hauteur et l’essence retenue.'],
                  ['Couverture', 'très variable selon qu’on part sur des tuiles accordées à la maison, un bac acier ou un toit plat étanché.'],
                  ['Porte de garage', 'de quelques centaines d’euros pour une basculante simple à plusieurs milliers pour une sectionnelle motorisée et isolée.'],
                  ['Électricité et attentes', 'poste modeste si les gaines sont posées pendant le chantier, nettement plus lourd s’il faut rouvrir tranchée et cloisons ensuite.'],
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
                Le constat qui surprend le plus nos clients :{' '}
                <strong className="text-primary font-semibold">
                  la dalle et la porte pèsent souvent plus lourd, ensemble, que l&apos;ossature elle-même
                </strong>. On compare des devis de garages bois en regardant le bois, alors que l&apos;écart se fait sur le
                terrassement et sur la menuiserie de fermeture. Quand un devis paraît anormalement bas, c&apos;est en
                général de ce côté-là qu&apos;il faut regarder, ainsi que du côté de la ventilation et du débord de toit.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Côté délais, le montage est la partie rapide. Ce qui commande le calendrier, c&apos;est l&apos;instruction
                du dossier en mairie, puis la dalle et son séchage avant que nous puissions poser la lisse basse. Nous
                intégrons donc l&apos;urbanisme au projet dès la première visite : relevé du terrain, vérification du PLU
                avec le service urbanisme, montage du dossier de déclaration préalable ou de permis, puis planification du
                terrassement et de la fabrication.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nos murs sont fabriqués dans notre atelier des Billaux, à côté de Libourne, où se trouve aussi notre
                magasin : vous pouvez y voir les bois, les bardages et les teintes avant de décider. Nous intervenons sur
                tout le Libournais et la Gironde. Découvrez notre approche des{' '}
                <a href="/constructions-bois" className={lienInterne}>
                  constructions bois sur mesure
                </a>, celle des{' '}
                <a href="/carports" className={lienInterne}>
                  carports
                </a>{' '}
                si l&apos;abri ouvert vous suffit, et parcourez{' '}
                <a href="/realisations" className={lienInterne}>
                  nos réalisations en Gironde
                </a>{' '}
                pour voir comment tout cela se traduit sur le terrain.
              </p>
            </section>

            <Figure
              src="/images/chantiers/extension-ossature-bois-bardage-douglas-maison-pierre-gironde.webp"
              w={1400}
              h={923}
              alt="Volume en ossature bois bardé de douglas accolé à une maison en pierre, couverture en tuiles canal, réalisation L'Esprit Bois en Gironde"
              caption="Même couverture en tuiles que la maison en pierre et un bardage laissé brut : l'accord se joue autant sur la toiture que sur le bois."
            />
          </div>
        </article>

        {/* FAQ */}
        <section className="py-section-padding bg-surface-container-low">
          <div className="max-w-4xl mx-auto px-6 md:px-16">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
              Questions fréquentes
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-12">
              Garage en ossature bois : vos questions
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
              Un garage bois qu&apos;on déclare, qu&apos;on chiffre et qu&apos;on ventile
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Fermer le volume, c&apos;est passer de l&apos;abri au bâtiment : l&apos;emprise au sol décide de
              l&apos;autorisation, la taxe d&apos;aménagement s&apos;applique, la dalle se dessine avant l&apos;ossature et
              la ventilation se prévoit avant la porte. C&apos;est le diagnostic que nous menons chez L&apos;Esprit Bois,
              entreprise qualifiée Qualibat, à Libourne et dans toute la Gironde, dossier d&apos;urbanisme compris.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/constructions-bois"
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
