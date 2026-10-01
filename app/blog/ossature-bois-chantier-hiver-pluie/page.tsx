import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/blog/ossature-bois-chantier-hiver-pluie/ossature-bois-hiver-pare-pluie-toiture-ciel-gris.webp';

export const metadata: Metadata = buildMetadata({
  title: 'Ossature bois en hiver : la pluie abîme-t-elle le chantier ?',
  description:
    "En hiver, la pluie mouille une ossature bois sans l'abîmer : le risque est de fermer les murs trop tôt. Guide d'un artisan à Libourne (Gironde).",
  keywords:
    "ossature bois hiver, construire ossature bois en hiver, ossature bois pluie chantier, humidité du bois ossature, bâchage chantier ossature, taux d'humidité bois ossature 18 %, extension ossature bois Gironde, construction bois Libourne, chantier ossature bois Gironde, béton par temps froid",
  path: '/blog/ossature-bois-chantier-hiver-pluie',
  ogImage: COVER,
  ogTitle: 'Construire en ossature bois en automne et en hiver : ce que la pluie fait vraiment au chantier',
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
        name: 'Ossature bois en hiver',
        item: 'https://lesprit-bois.fr/blog/ossature-bois-chantier-hiver-pluie',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Construire en ossature bois en automne et en hiver : ce que la pluie fait vraiment au chantier',
    description:
      "La pluie sur une ossature en cours de levage n'est pas un drame : un bois mouillé en surface sèche. Ce qui abîme un chantier d'hiver, c'est d'enfermer l'humidité en refermant la paroi côté intérieur sur un bois ou un isolant encore humide. Le seuil de 18 % d'humidité à l'assemblage fixé par le NF DTU 31.1, la mesure à l'humidimètre, ce qui ne doit jamais prendre l'eau, l'ordre qui protège jusqu'à la mise hors d'eau, le béton par temps froid et ce que l'hiver change vraiment en Gironde : le guide d'un constructeur à ossature bois à Libourne.",
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
    datePublished: '2026-10-01',
    dateModified: '2026-10-01',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/ossature-bois-chantier-hiver-pluie',
    },
    about: [
      { '@type': 'Thing', name: 'construction ossature bois en hiver' },
      { '@type': 'Thing', name: 'humidité du bois' },
      { '@type': 'Thing', name: 'mise hors d’eau' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Peut-on construire une maison ou une extension en ossature bois en hiver ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui. La saison ne disqualifie pas l'ossature bois, c'est l'organisation du chantier qui compte : murs fabriqués à l'abri en atelier, levage rapide, mise hors d'eau au plus vite, et fermeture de la paroi côté intérieur seulement quand le bois et l'isolant sont secs. En Gironde, l'hiver se traduit surtout par de la pluie et des jours courts, rarement par un gel durable. Ce qui se décale le plus souvent, ce sont les fondations quand le froid empêche de couler le béton dans de bonnes conditions.",
        },
      },
      {
        '@type': 'Question',
        name: "Que se passe-t-il si l'ossature prend la pluie pendant le levage ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "En général, rien de grave. Une averse mouille la surface d'un bois livré sec, et cette eau repart dès que l'air circule. Le risque apparaît quand l'eau stagne (lisse basse posée dans une flaque, tête de mur ouverte où l'eau ruisselle, panneau à plat qui forme une cuvette) ou quand on referme la paroi sur un bois resté humide. C'est pour cela qu'on mesure l'humidité avant de poser l'isolant et le frein-vapeur.",
        },
      },
      {
        '@type': 'Question',
        name: "Quel taux d'humidité doit avoir le bois d'une ossature ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le NF DTU 31.1 demande que l'humidité des éléments d'ossature soit inférieure ou égale à 18 % au moment de leur assemblage, avec un écart de 4 % au maximum entre deux éléments. Le guide de l'UICB et de l'AQC sur la gestion de l'humidité en phase chantier signale par ailleurs un risque de développement fongique quand l'humidité du bois dépasse 20 % pendant une longue durée. Ces valeurs se contrôlent à l'humidimètre à pointes, et de nouveau avant de fermer les parois.",
        },
      },
      {
        '@type': 'Question',
        name: "Faut-il bâcher l'ossature bois sur le chantier ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Il faut surtout protéger ce qui craint vraiment l'eau : l'isolant, les panneaux de plancher et de contreventement, les têtes de murs ouvertes. Les matériaux stockés se calent hors sol et se bâchent en laissant l'air circuler, car une bâche plaquée jusqu'au sol transforme le tas en serre humide. Une ossature levée, elle, a moins besoin d'une bâche que d'une couverture et d'un pare-pluie posés rapidement.",
        },
      },
      {
        '@type': 'Question',
        name: "L'hiver retarde-t-il un chantier en ossature bois en Gironde ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Il peut le décaler, sans le compromettre. Les fondations sont l'étape la plus sensible : on ne coule pas sur un sol ou des armatures gelés, et des précautions s'imposent dès que la température ambiante est inférieure ou égale à 5 °C. Le levage se cale sur les fenêtres météo, et la fermeture intérieure attend que le bois soit sec. Nous préférons dire qu'on décale de quelques jours plutôt que d'enfermer de l'humidité dans un mur.",
        },
      },
    ],
  },
];

const faq = [
  {
    q: 'Peut-on construire une maison ou une extension en ossature bois en hiver ?',
    r: (
      <>
        Oui. La saison ne disqualifie pas l&apos;ossature bois, c&apos;est l&apos;organisation du chantier qui compte :
        murs fabriqués à l&apos;abri en atelier, levage rapide, mise hors d&apos;eau au plus vite, et fermeture de la
        paroi côté intérieur seulement quand le bois et l&apos;isolant sont secs. En Gironde, l&apos;hiver se traduit
        surtout par de la pluie et des jours courts, rarement par un gel durable. Ce qui se décale le plus souvent, ce
        sont les fondations quand le froid empêche de couler le béton dans de bonnes conditions.
      </>
    ),
  },
  {
    q: "Que se passe-t-il si l'ossature prend la pluie pendant le levage ?",
    r: (
      <>
        En général, rien de grave. Une averse mouille la surface d&apos;un bois livré sec, et cette eau repart dès que
        l&apos;air circule. Le risque apparaît quand l&apos;eau stagne (lisse basse posée dans une flaque, tête de mur
        ouverte où l&apos;eau ruisselle, panneau à plat qui forme une cuvette) ou quand on referme la paroi sur un bois
        resté humide. C&apos;est pour cela qu&apos;on mesure l&apos;humidité avant de poser l&apos;isolant et le
        frein-vapeur.
      </>
    ),
  },
  {
    q: "Quel taux d'humidité doit avoir le bois d'une ossature ?",
    r: (
      <>
        Le NF DTU 31.1 demande que l&apos;humidité des éléments d&apos;ossature soit inférieure ou égale à 18 % au moment
        de leur assemblage, avec un écart de 4 % au maximum entre deux éléments. Le guide de l&apos;UICB et de
        l&apos;AQC sur la gestion de l&apos;humidité en phase chantier signale par ailleurs un risque de développement
        fongique quand l&apos;humidité du bois dépasse 20 % pendant une longue durée. Ces valeurs se contrôlent à
        l&apos;humidimètre à pointes, et de nouveau avant de fermer les parois.
      </>
    ),
  },
  {
    q: "Faut-il bâcher l'ossature bois sur le chantier ?",
    r: (
      <>
        Il faut surtout protéger ce qui craint vraiment l&apos;eau : l&apos;isolant, les panneaux de plancher et de
        contreventement, les têtes de murs ouvertes. Les matériaux stockés se calent hors sol et se bâchent en laissant
        l&apos;air circuler, car une bâche plaquée jusqu&apos;au sol transforme le tas en serre humide. Une ossature
        levée, elle, a moins besoin d&apos;une bâche que d&apos;une couverture et d&apos;un pare-pluie posés rapidement.
      </>
    ),
  },
  {
    q: "L'hiver retarde-t-il un chantier en ossature bois en Gironde ?",
    r: (
      <>
        Il peut le décaler, sans le compromettre. Les fondations sont l&apos;étape la plus sensible : on ne coule pas sur
        un sol ou des armatures gelés, et des précautions s&apos;imposent dès que la température ambiante est inférieure
        ou égale à 5 °C. Le levage se cale sur les fenêtres météo, et la fermeture intérieure attend que le bois soit
        sec. Nous préférons dire qu&apos;on décale de quelques jours plutôt que d&apos;enfermer de l&apos;humidité dans
        un mur.
      </>
    ),
  },
];

export default function ArticleOssatureBoisHiverPage() {
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
              height="800"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Maison à ossature bois en chantier en hiver, pare-pluie et tasseaux posés sur les murs, toiture en tuiles couverte, sous un ciel gris"
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
              <span className="text-secondary-fixed">Ossature bois en hiver</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Ossature bois
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Construire en ossature bois en automne et en hiver : ce que la pluie fait vraiment au chantier
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
              <span>1er octobre 2026</span>
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
                Non, la pluie qui tombe sur une ossature en cours de levage n&apos;est pas un drame : un bois mouillé en
                surface sèche, à condition qu&apos;on le laisse sécher. Ce qui abîme un chantier d&apos;hiver, c&apos;est
                d&apos;enfermer l&apos;humidité, en refermant la paroi côté intérieur (isolant, frein-vapeur, plaques) sur
                un bois ou un isolant encore humide. Le vrai sujet n&apos;est donc pas la saison : c&apos;est l&apos;ordre
                des opérations et la vitesse de mise hors d&apos;eau.
              </strong>{' '}
              C&apos;est la question que nous posent presque tous les clients qui signent à l&apos;automne, souvent en
              regardant le ciel : « vous allez vraiment monter les murs sous la pluie ? » Parfois oui, et ce n&apos;est pas
              un problème. Disons aussi les choses franchement : l&apos;hiver girondin, c&apos;est surtout de la pluie et
              des jours courts, rarement un gel qui dure. Voici ce que nous surveillons sur nos chantiers du Libournais, ce
              que nous décalons, et ce que vous pouvez vérifier vous-même.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. La pluie mouille, elle n'abîme pas */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                La pluie mouille le bois, elle ne l&apos;abîme pas (tant qu&apos;elle peut repartir)
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Il faut distinguer deux choses que l&apos;on confond sans cesse :{' '}
                <strong className="text-primary font-semibold">
                  un bois mouillé en surface et un bois humide à cœur.
                </strong>{' '}
                Une averse, même franche, mouille les premiers millimètres d&apos;un montant. Dès que la pluie cesse et que
                l&apos;air circule, cette eau repart. Le cœur de la pièce, lui, n&apos;a presque pas bougé. Le bois
                d&apos;ossature que nous mettons en œuvre est livré sec et raboté : il part de bas, et une journée de pluie
                ne le fait pas basculer dans la zone à risque.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ce qui pose problème, c&apos;est l&apos;eau qui ne peut pas repartir. Trois situations reviennent sur les
                chantiers mal tenus : une lisse basse posée dans une flaque restée sur la dalle, une tête de mur ouverte
                par laquelle l&apos;eau ruisselle à l&apos;intérieur des montants, un panneau posé à plat qui forme une
                cuvette. Dans ces trois cas, le bois ne sèche plus, il trempe.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Et c&apos;est la durée qui fait le dommage. Le guide{' '}
                <a
                  href="https://www.uiccb.fr/wp-content/uploads/2020/05/GUIDE-GESTION-HUMIDITE-OPERATIONS-DE-CONSTRUCTION-BOIS-V01-20200619.pdf"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  « Construction bois et gestion de l&apos;humidité en phase chantier »
                </a>{' '}
                de l&apos;UICB et de l&apos;AQC le dit clairement : le risque de développement fongique apparaît quand
                l&apos;humidité du bois dépasse{' '}
                <strong className="text-primary font-semibold">20 % pendant une longue durée</strong>. Une averse ne fait
                pas cela. Un mur refermé sur un bois humide, si.
              </p>
            </section>

            <Figure
              src="/images/blog/ossature-bois-chantier-hiver-pluie/humidimetre-mesure-humidite-bois-ossature.webp"
              w={1200}
              h={900}
              alt="Humidimètre appliqué sur une pièce de bois pour mesurer son taux d'humidité, écran affichant 14,0"
              caption="Ici un humidimètre sans pointes, qui lit la surface : 14 %, sous le seuil des 18 %. Avant de refermer un mur, on contrôle à cœur, à l'humidimètre à pointes, sur plusieurs pièces. Photo Hrco, CC BY-SA 4.0, Wikimedia Commons."
            />

            {/* 2. 18 % à l'assemblage */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le chiffre qui compte : 18 % à l&apos;assemblage
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Il existe un seuil, et il est écrit. Le{' '}
                <a href="https://www.cstb.fr/" className={lienInterne} target="_blank" rel="noopener noreferrer">
                  NF DTU 31.1
                </a>,{' '}
                cité par le guide de l&apos;UICB et de l&apos;AQC, demande que{' '}
                <strong className="text-primary font-semibold">
                  l&apos;humidité des éléments d&apos;ossature soit inférieure ou égale à 18 % au moment de leur
                  assemblage, avec un écart de 4 % au maximum entre deux éléments.
                </strong>{' '}
                La première valeur protège le bois. La seconde protège l&apos;ouvrage : deux pièces assemblées qui
                n&apos;ont pas la même humidité ne vont pas bouger de la même façon en séchant, et c&apos;est ce mouvement
                différentiel qui finit en fissure de parement ou en assemblage qui travaille.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Concrètement, voici ce que nous mesurons, et quand :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['À la réception du bois', 'un contrôle à l’humidimètre à pointes sur plusieurs pièces du lot. Le bois arrive sec ; on vérifie qu’il l’est, on ne le suppose pas.'],
                  ['Après un épisode de pluie pendant le levage', 'on laisse ressuyer, puis on mesure à cœur, pas en surface : c’est la valeur à cœur qui renseigne.'],
                  ['Avant de fermer les parois', 'c’est le contrôle décisif, celui que le guide prévoit explicitement. Tant que la paroi est ouverte, le bois peut encore sécher ; une fois le frein-vapeur et les plaques posés, il n’en a plus les moyens.'],
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
                Et si la mesure est trop haute ? On ne ferme pas. On ventile, on attend une fenêtre sèche, on remesure.
                C&apos;est un décalage de planning, pas un sinistre. Le sinistre, c&apos;est de fermer quand même parce que
                le plaquiste est prévu le lendemain.
              </p>
            </section>

            {/* 3. Ce qui ne doit jamais prendre l'eau */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qui ne doit jamais prendre l&apos;eau : isolant, panneaux, têtes de murs
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une ossature qui prend une averse sèche. Certains matériaux, eux, ne pardonnent pas.{' '}
                <strong className="text-primary font-semibold">
                  Le NF DTU 31.2 demande que les isolants soient protégés des reprises d&apos;humidité et des intempéries
                  jusqu&apos;à la mise hors d&apos;eau des parois.
                </strong>{' '}
                Un isolant qui a pris l&apos;eau perd ses performances tant qu&apos;il est humide, et surtout il apporte
                cette eau au contact du bois, à l&apos;intérieur d&apos;une paroi qu&apos;on s&apos;apprête à fermer.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['L’isolant', 'fibre de bois, laine minérale ou ouate : il arrive au moment de sa pose, ou il attend à l’abri, jamais à découvert sur la dalle.'],
                  ['Les panneaux de plancher et de contreventement', 'leurs chants sont leur point faible : un panneau qui boit par la tranche gonfle et ne retrouve pas toujours sa planéité.'],
                  ['Les têtes de murs ouvertes', 'tant que la charpente n’est pas posée, le dessus des murs reçoit la pluie et la conduit dans les montants : on le protège en fin de journée.'],
                  ['Les plaques de parement intérieur', 'elles n’ont rien à faire sur le chantier avant que le bâtiment soit fermé.'],
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
                Reste le stockage, où se jouent la plupart des dégâts évitables. Le guide de l&apos;UICB mentionne la
                protection des éléments par bâche, et la façon de bâcher compte autant que la bâche :{' '}
                <strong className="text-primary font-semibold">
                  on cale les matériaux hors sol, sur des bastaings, et on les couvre en laissant l&apos;air passer.
                </strong>{' '}
                Une bâche plaquée jusqu&apos;au sol garde l&apos;eau du terrain et la condensation sous le tas : on
                fabrique une serre humide en croyant protéger. Mieux encore, on évite de stocker longtemps en se faisant
                livrer au fil du chantier.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Le choix de l&apos;isolant lui-même, et la façon dont il cohabite avec le bois une fois en place, sont
                détaillés dans notre guide sur{' '}
                <a href="/blog/isolation-ossature-bois-entre-montants" className={lienInterne}>
                  l&apos;isolant à poser entre les montants d&apos;une ossature bois
                </a>.
              </p>
            </section>

            <Figure
              src="/images/blog/ossature-bois-chantier-hiver-pluie/plancher-ossature-bois-bache-pluie-levage-fermes.webp"
              w={739}
              h={739}
              alt="Plancher d'une construction bois couvert d'une bâche mouillée par la pluie pendant le levage des premières fermes, sous un ciel gris"
              caption="Sur l'un de nos chantiers, le plancher reste bâché pendant le levage des fermes : la pluie ruisselle sur la bâche au lieu d'entrer par les chants des panneaux."
            />

            {/* 4. L'ordre qui protège */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                L&apos;ordre qui protège : fermer par le haut et par l&apos;extérieur, l&apos;intérieur en dernier
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Toute la logique d&apos;un chantier d&apos;hiver tient en une phrase :{' '}
                <strong className="text-primary font-semibold">
                  on protège d&apos;abord le bâtiment de la pluie, et on ne referme la paroi côté intérieur qu&apos;une fois
                  qu&apos;il est sec.
                </strong>{' '}
                Le frein-vapeur est fait pour limiter le passage de la vapeur d&apos;eau à travers la paroi. Posé sur un
                bois ou un isolant humide, il fait exactement son travail, et l&apos;eau reste enfermée dedans. La
                séquence que nous suivons :
              </p>
              <ol className="space-y-3 mb-5 list-none">
                {[
                  ['1. Fondations ou dalle', 'propres, avec l’eau de surface évacuée avant la pose des lisses basses.'],
                  ['2. Levage rapide', 'les murs arrivent fabriqués en atelier, à l’abri : sur le terrain, ils se dressent, se calent et se contreventent sans traîner.'],
                  ['3. Mise hors d’eau', 'charpente, écran de sous-toiture et couverture, puis pare-pluie sur les murs, le plus vite possible. C’est le jalon qui change tout.'],
                  ['4. Menuiseries extérieures', 'les baies se ferment, le volume devient un abri où l’air se maîtrise.'],
                  ['5. Contrôle d’humidité', 'mesure à cœur avant toute fermeture côté intérieur.'],
                  ['6. Isolation et frein-vapeur', 'seulement maintenant, sur un bois et un isolant secs.'],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est là que l&apos;ossature bois préfabriquée prend tout son sens en hiver. Le temps pendant lequel
                le bâtiment est exposé, entre le premier mur levé et la couverture posée, est court, parce que tout ce qui
                pouvait être fait à l&apos;abri l&apos;a été en atelier. Une fois hors d&apos;eau, le volume peut être
                ventilé pour sécher. Un détail qui a son importance : un chauffage d&apos;appoint à combustion rejette de la
                vapeur d&apos;eau dans le volume, il ne fait donc pas sécher ce qu&apos;on croit. On préfère aérer et
                déshumidifier.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ce que recouvrent précisément ces deux jalons, et ce qui reste à faire ensuite lot par lot, est expliqué
                dans notre article{' '}
                <a href="/blog/hors-eau-hors-air-ossature-bois-ce-qui-reste-a-faire" className={lienInterne}>
                  livré hors d&apos;eau hors d&apos;air : ce que vous recevez, et ce qu&apos;il vous reste à faire
                </a>.
              </p>
            </section>

            <Figure
              src="/images/blog/ossature-bois-chantier-hiver-pluie/ossature-bois-murs-fermes-toiture-baies-ouvertes.webp"
              w={1200}
              h={1150}
              alt="Construction à ossature bois aux murs fermés par des panneaux extérieurs et à la toiture fermée, grandes baies encore ouvertes sur la dalle"
              caption="Murs fermés côté extérieur et toit fermé, baies encore ouvertes : le volume est à l'abri de la pluie et l'air y circule, l'intérieur sera refermé une fois le bois sec."
            />

            {/* 5. Fondations par temps froid */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Les fondations par temps froid : c&apos;est souvent là que l&apos;hiver décale le planning
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                On pense au bois, mais en hiver{' '}
                <strong className="text-primary font-semibold">
                  c&apos;est le béton qui commande le plus souvent le calendrier.
                </strong>{' '}
                Le bois se lève par temps froid sans difficulté particulière. Le béton, lui, a besoin de conditions
                minimales pour faire sa prise correctement. Selon{' '}
                <a
                  href="https://www.betons.heidelbergmaterials.fr/fr/produits-services/les-conseils-beton/betonner-par-temps-froid-hiver"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  les recommandations d&apos;Heidelberg Materials pour bétonner par temps froid
                </a>,{' '}
                des précautions s&apos;imposent quand la température ambiante est inférieure ou égale à 5 °C, ou
                qu&apos;une chute sous cette valeur est prévue dans les 24 heures qui suivent le coulage.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Ces précautions sont simples, et nous les appliquons sans discussion :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Ne jamais couler sur un sol gelé ni sur des armatures gelées.',
                  'Couler le matin, pour que le béton profite des heures les moins froides de la journée.',
                  'Protéger le béton frais par des bâches ou une isolation provisoire.',
                  'Recourir à un adjuvant adapté quand les conditions l’exigent, sur avis du fournisseur.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Quand le gel est annoncé, nous décalons le coulage. C&apos;est une décision qui se prend la veille, avec
                les prévisions sous les yeux, et elle ne se discute pas : une fondation ratée ne se rattrape pas, une
                journée perdue si.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                L&apos;autre sujet d&apos;automne, c&apos;est le sol détrempé. Une fouille ouverte dans une argile gorgée
                d&apos;eau se protège et ne reste pas béante sous la pluie. Sur les terrains argileux, fréquents dans le
                Libournais, le type de fondation se décide avec l&apos;étude de sol, et la saison ne change rien à cette
                règle : nous l&apos;expliquons dans notre article sur{' '}
                <a href="/blog/sol-argileux-gironde-etude-de-sol-extension" className={lienInterne}>
                  le sol argileux en Gironde et l&apos;étude de sol avant une extension
                </a>. Une fois la dalle faite, en revanche, l&apos;ossature bois redevient un chantier sec : pas d&apos;eau de
                gâchage, rien à faire prendre.
              </p>
            </section>

            <Figure
              src="/images/blog/ossature-bois-chantier-hiver-pluie/dalle-mouillee-pied-ossature-bois-genissac.webp"
              w={1200}
              h={585}
              alt="Dalle béton encore mouillée par la pluie au pied des premiers montants d'une extension en ossature bois à Génissac, en Gironde"
              caption="Notre chantier d'extension à Génissac, après une averse : une fois la dalle coulée et prise, la pluie ne fait que la mouiller, mais l'eau qui stagne doit partir avant la pose des lisses basses."
            />

            {/* 6. Ce que l'hiver change en Gironde */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce que l&apos;hiver change vraiment sur un chantier en Gironde
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Soyons honnêtes sur notre climat. Entre Libourne, l&apos;Entre-deux-Mers et la métropole bordelaise,
                l&apos;hiver se traduit surtout par{' '}
                <strong className="text-primary font-semibold">de la pluie et des jours courts</strong>, et beaucoup plus
                rarement par un gel qui s&apos;installe. Ce qui change le quotidien d&apos;un chantier, ce n&apos;est pas
                le froid, c&apos;est l&apos;organisation.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Les jours courts', 'moins d’heures de lumière utiles : on cale les opérations délicates, levage et pose de couverture, sur le cœur de la journée.'],
                  ['Les fenêtres météo', 'un levage se programme sur les prévisions de la semaine et se confirme la veille. Un vent fort interdit de manutentionner de grands éléments à la grue, quelle que soit la saison.'],
                  ['L’accès au chantier', 'un terrain détrempé ne porte pas toujours un camion de livraison ni une grue : on prévoit un accès stabilisé et on protège ce qui doit l’être autour de la maison.'],
                  ['La boue', 'elle entre partout. Un chantier propre en hiver, c’est une dalle balayée et dégagée de ses flaques avant chaque pose.'],
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
                <strong className="text-primary font-semibold">Ce que nous décalons :</strong> le coulage quand le gel
                est annoncé, le levage quand la pluie battante ou le vent sont prévus le jour même, et la fermeture
                intérieure tant que l&apos;humidimètre ne dit pas oui.{' '}
                <strong className="text-primary font-semibold">Ce que nous ne décalons pas :</strong> la fabrication des
                murs en atelier, qui se poursuit à l&apos;abri quel que soit le temps, la mise hors d&apos;eau dès
                qu&apos;elle est possible, et les contrôles. Quand nous décalons, nous le disons, et nous disons pourquoi.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Notre atelier est aux Billaux, à côté de Libourne : une distance courte entre l&apos;atelier et le
                chantier permet de recaler une livraison rapidement quand la météo tourne. C&apos;est ainsi que nous
                menons nos{' '}
                <a href="/constructions-bois" className={lienInterne}>
                  constructions et extensions à ossature bois en Gironde
                </a>,{' '}
                en automne comme au printemps.
              </p>
            </section>

            {/* 7. Checklist client et avantage d'un chantier d'hiver */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce que vous pouvez vérifier en tant que client, et ce qu&apos;un chantier d&apos;hiver a de bon
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Pas besoin d&apos;être du métier pour repérer un chantier bien tenu. En passant voir le vôtre, regardez
                ceci :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Les matériaux stockés sont calés hors sol et couverts, avec une bâche qui laisse passer l’air.',
                  'L’isolant n’attend pas à découvert : il arrive au moment de sa pose ou reste à l’abri.',
                  'Aucun isolant n’est posé tant que la toiture n’est pas couverte et les murs protégés par le pare-pluie.',
                  'Les flaques sont évacuées de la dalle avant la pose des lisses basses.',
                  'Le pare-pluie est posé rapidement, continu, sans déchirure laissée en l’état.',
                  'Vous pouvez demander la mesure d’humidité faite avant la fermeture des parois : une entreprise sérieuse vous la donne sans difficulté.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Et il y a un bon côté à lancer un chantier à l&apos;automne, sans en faire une promesse. Un bâtiment mis
                hors d&apos;eau pendant l&apos;hiver permet de mener le second œuvre à l&apos;abri pendant que la météo
                fait ce qu&apos;elle veut dehors. Selon les périodes, le planning des artisans de second œuvre est aussi
                parfois plus souple qu&apos;en pleine saison. Beaucoup de nos clients visent ainsi une installation au
                printemps : c&apos;est un objectif raisonnable, qui dépend de la suite des lots, pas une date que nous
                pouvons garantir.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Pour situer le budget d&apos;un tel projet, notre guide du{' '}
                <a href="/blog/extension-ossature-bois-prix-m2" className={lienInterne}>
                  prix d&apos;une extension en ossature bois au m²
                </a>{' '}
                détaille les postes, et vous pouvez voir des ouvrages terminés dans{' '}
                <a href="/realisations" className={lienInterne}>
                  nos réalisations en Gironde
                </a>.
              </p>
            </section>

            <Figure
              src="/images/chantiers/extension-ossature-bois-toit-plat-bardage-gris-gironde.jpg"
              w={1100}
              h={825}
              alt="Extension à ossature bois à toit plat terminée, bardage horizontal gris, fenêtre et descente d'eau pluviale posées, accolée à une maison en Gironde"
              caption="Une de nos extensions livrées en Gironde : une fois l'enveloppe fermée sur un bois sec, plus rien ne distingue un ouvrage levé en hiver d'un ouvrage levé en été."
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
              Ossature bois en hiver : vos questions
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
              La saison compte moins que l&apos;ordre du chantier
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Une ossature bois peut prendre la pluie sans dommage. Ce qu&apos;elle ne supporte pas, c&apos;est d&apos;être
              refermée sur de l&apos;humidité. Mettre hors d&apos;eau vite, mesurer avant de fermer et décaler quand il le
              faut : c&apos;est notre façon de construire en automne et en hiver chez L&apos;Esprit Bois, entreprise
              qualifiée Qualibat, à Libourne et dans toute la Gironde.
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
