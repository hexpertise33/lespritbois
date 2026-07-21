import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/blog/cloture-brise-vue-bois-guide/cloture-bois-lames-horizontales-jardin-gironde.webp';

export const metadata: Metadata = buildMetadata({
  title: "Clôture et brise-vue en bois : essence, hauteur autorisée et budget 2026 | L'Esprit Bois",
  description:
    "Quelle hauteur de clôture ai-je le droit de poser ? PLU, Code civil, déclaration préalable, essences durables, styles et budget au mètre linéaire : le guide clôture bois en Gironde.",
  keywords:
    "clôture en bois, brise-vue bois jardin, hauteur clôture réglementation PLU, clôture bois Gironde, claire-voie bois, clôture bois sur mesure Libourne, déclaration préalable clôture, essence clôture douglas",
  path: '/blog/cloture-brise-vue-bois-guide',
  ogImage: COVER,
  ogTitle: "Clôture et brise-vue en bois : hauteur autorisée, essence et budget 2026",
  ville: 'Libourne',
});

const lienInterne =
  'text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors';

function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="-mx-6 md:-mx-16">
      <img
        loading="lazy"
        decoding="async"
        width="1200"
        height="800"
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
  a: { src: string; alt: string; caption: string };
  b: { src: string; alt: string; caption: string };
}) {
  return (
    <div className="-mx-6 md:-mx-16 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
      {[a, b].map((img) => (
        <figure key={img.src}>
          <img
            loading="lazy"
            decoding="async"
            width="800"
            height="600"
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
        name: 'Clôture et brise-vue en bois',
        item: 'https://lesprit-bois.fr/blog/cloture-brise-vue-bois-guide',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "Clôture et brise-vue en bois : hauteur autorisée, essence et budget 2026",
    description:
      "Hauteur autorisée par le PLU et le Code civil, déclaration préalable, essences durables (douglas, mélèze, pin maritime local), styles claire-voie ou panneau plein, pose et budget au mètre linéaire : le guide complet pour une clôture bois en Gironde.",
    image: 'https://lesprit-bois.fr' + COVER,
    author: {
      '@type': 'Person',
      name: 'David Bertrand',
      jobTitle: "Expert bâtiment et créateur d'espaces extérieurs",
      worksFor: { '@type': 'Organization', name: "L'Esprit Bois" },
    },
    publisher: {
      '@type': 'Organization',
      name: "L'Esprit Bois",
      logo: { '@type': 'ImageObject', url: 'https://lesprit-bois.fr/logo-mark.svg' },
    },
    datePublished: '2026-07-21',
    dateModified: '2026-07-21',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/cloture-brise-vue-bois-guide',
    },
    about: ['clôture en bois', 'brise-vue bois', 'aménagement extérieur', 'réglementation PLU'],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quelle hauteur de clôture ai-je le droit de poser en limite séparative ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "C'est d'abord le PLU de votre commune qui fixe la hauteur maximale, souvent entre 1,80 m et 2,00 m en limite séparative. À défaut de règle locale, le Code civil impose une hauteur minimale de 2,60 m dans les communes de moins de 50 000 habitants et 3,20 m au-delà, mais ces valeurs sont des maximums rarement atteints en pratique. Le bon réflexe est de consulter le règlement d'urbanisme en mairie avant de poser.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faut-il une déclaration préalable pour une clôture ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Pas systématiquement, mais souvent. Une déclaration préalable est obligatoire lorsque le PLU ou le conseil municipal l'impose, dans les secteurs protégés (abords d'un monument historique, site classé, périmètre soumis à l'avis de l'Architecte des Bâtiments de France) et parfois en lotissement. Comme les règles varient d'une commune à l'autre, nous vérifions ces formalités avant tout chantier.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quelle essence de bois choisir pour une clôture sans traitement chimique ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le douglas et le mélèze sont naturellement durables en classe d'emploi 3 (bois exposé à la pluie hors contact permanent avec le sol) sans traitement chimique. Le pin maritime, issu de la filière Nouvelle-Aquitaine, est un choix local pertinent mais demande un traitement autoclave pour durer. Pour une clôture, la règle d'or est de désolidariser le bois du sol : les poteaux ne doivent jamais être noyés directement dans le béton.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quel budget prévoir au mètre linéaire pour une clôture en bois ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "En fourniture, comptez environ 35 à 120 € du mètre linéaire selon l'essence, le style (claire-voie, panneau plein, ganivelle) et la hauteur, auxquels s'ajoute la pose entre 20 et 70 € du mètre linéaire selon la nature du sol et le type de scellement. Un panneau plein occultant en mélèze coûte logiquement plus qu'une claire-voie basse en pin. Seul un relevé sur place permet de chiffrer honnêtement votre linéaire.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quel entretien pour garder une clôture bois nette dans le temps ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Une clôture bois demande peu d'entretien si l'essence est durable et les poteaux désolidarisés du sol. Pour conserver la teinte d'origine, on applique un saturateur ou une lasure tous les 3 à 5 ans. Si vous préférez laisser le bois griser, la patine argentée n'altère pas sa solidité ; un dégrisage ponctuel suffit à retrouver un aspect net. L'essentiel se joue à la conception, pas dans l'entretien.",
        },
      },
    ],
  },
];

const comparatif = [
  ['Claire-voie', 'Lames espacées, laisse passer un peu de vue et d’air', 'Ventilée, résiste bien au vent, élégante', 'Occultation partielle seulement'],
  ['Panneau plein', 'Lames jointives, occultation totale', 'Intimité maximale, coupe les regards', 'Fait « voile » au vent, plus de prise'],
  ['Persienne / lames inclinées', 'Lames orientées, cache la vue sans fermer l’air', 'Bon compromis intimité / ventilation', 'Un peu plus technique, prix supérieur'],
  ['Ganivelle', 'Rouleau de châtaignier, esprit naturel', 'Rustique, économique, laisse respirer', 'Occultation faible, plutôt délimitation'],
];

const faq = [
  {
    q: 'Quelle hauteur de clôture ai-je le droit de poser en limite séparative ?',
    r: (
      <>
        C&apos;est d&apos;abord le PLU de votre commune qui fixe la hauteur maximale, souvent entre 1,80 m et 2,00 m en
        limite séparative. À défaut de règle locale, le Code civil impose une hauteur minimale de 2,60 m dans les
        communes de moins de 50 000 habitants et 3,20 m au-delà, mais ces valeurs sont des maximums rarement atteints en
        pratique. Le bon réflexe est de consulter le règlement d&apos;urbanisme en mairie avant de poser.
      </>
    ),
  },
  {
    q: 'Faut-il une déclaration préalable pour une clôture ?',
    r: (
      <>
        Pas systématiquement, mais souvent. Une déclaration préalable est obligatoire lorsque le PLU ou le conseil
        municipal l&apos;impose, dans les secteurs protégés (abords d&apos;un monument historique, site classé, périmètre
        soumis à l&apos;avis de l&apos;Architecte des Bâtiments de France) et parfois en lotissement. Comme les règles
        varient d&apos;une commune à l&apos;autre, nous vérifions ces formalités pour vous avant tout chantier.
      </>
    ),
  },
  {
    q: 'Quelle essence de bois choisir pour une clôture sans traitement chimique ?',
    r: (
      <>
        Le douglas et le mélèze sont naturellement durables en classe d&apos;emploi 3 (bois exposé à la pluie hors
        contact permanent avec le sol) sans traitement chimique. Le pin maritime, issu de la filière
        Nouvelle-Aquitaine, est un choix local pertinent mais demande un traitement autoclave pour durer. Pour une
        clôture, la règle d&apos;or est de désolidariser le bois du sol : les poteaux ne doivent jamais être noyés
        directement dans le béton.
      </>
    ),
  },
  {
    q: 'Quel budget prévoir au mètre linéaire pour une clôture en bois ?',
    r: (
      <>
        En fourniture, comptez environ 35 à 120 € du mètre linéaire selon l&apos;essence, le style (claire-voie, panneau
        plein, ganivelle) et la hauteur, auxquels s&apos;ajoute la pose entre 20 et 70 € du mètre linéaire selon la
        nature du sol et le type de scellement. Un panneau plein occultant en mélèze coûte logiquement plus qu&apos;une
        claire-voie basse en pin. Seul un relevé sur place permet de chiffrer honnêtement votre linéaire.
      </>
    ),
  },
  {
    q: 'Quel entretien pour garder une clôture bois nette dans le temps ?',
    r: (
      <>
        Une clôture bois demande peu d&apos;entretien si l&apos;essence est durable et les poteaux désolidarisés du sol.
        Pour conserver la teinte d&apos;origine, on applique un saturateur ou une lasure tous les 3 à 5 ans. Si vous
        préférez laisser le bois griser, la patine argentée n&apos;altère pas sa solidité ; un dégrisage ponctuel suffit
        à retrouver un aspect net. L&apos;essentiel se joue à la conception, pas dans l&apos;entretien.
      </>
    ),
  },
];

export default function ArticleClotureBriseVueBoisPage() {
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
              alt="Clôture et brise-vue en bois fermant un jardin en Gironde"
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
              <span className="text-secondary-fixed">Clôture et brise-vue en bois</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Clôtures bois
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Clôture et brise-vue en bois : quelle essence, quelle hauteur autorisée et quel budget en 2026 ?
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/70 font-label-md text-label-md">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">person</span>
                David Bertrand, L&apos;Esprit Bois
              </span>
              <span className="text-secondary">·</span>
              <span>21 juillet 2026</span>
              <span className="text-secondary">·</span>
              <span>8 min de lecture</span>
            </div>
          </div>
        </header>

        {/* Chapô answer-first */}
        <section className="py-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16">
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              <strong className="text-primary font-semibold">
                La hauteur de votre clôture dépend d&apos;abord du PLU de votre commune, qui plafonne souvent la limite
                séparative entre 1,80 m et 2,00 m. À défaut de règle locale, le Code civil autorise jusqu&apos;à 2,60 m
                dans les communes de moins de 50 000 habitants et 3,20 m au-delà. Et dans bien des cas, une déclaration
                préalable en mairie est nécessaire avant de poser.
              </strong>{' '}
              En été, c&apos;est le besoin numéro un sur nos chantiers en Gironde : préserver l&apos;intimité du jardin,
              de la terrasse ou du tour de piscine des regards. Mais une clôture bois réussie, ce n&apos;est pas
              seulement une hauteur réglementaire : c&apos;est une essence durable, un style adapté au vent et à
              l&apos;intimité recherchée, et une pose qui tient dans le temps. Voici comment décider en connaissance de
              cause.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* Hauteur autorisée */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Quelle hauteur de clôture ai-je le droit de poser ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La réponse tient en une hiérarchie simple.{' '}
                <strong className="text-primary font-semibold">
                  C&apos;est le Plan Local d&apos;Urbanisme (PLU) de votre commune qui commande en premier :
                </strong>{' '}
                il fixe presque toujours une hauteur maximale en limite séparative, le plus souvent comprise entre
                1,80 m et 2,00 m. Ce document peut aussi imposer des matériaux, des teintes ou un aspect précis, surtout
                sur la partie visible depuis la rue.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">
                  Quand aucune règle locale n&apos;existe, c&apos;est le Code civil qui prend le relais
                </strong>{' '}
                : il fixe une hauteur de référence de 2,60 m (murs et clôtures compris) dans les communes de moins de
                50 000 habitants, et 3,20 m dans les communes plus peuplées. Ces chiffres sont des maximums que
                l&apos;on atteint rarement pour une clôture de jardin : une clôture d&apos;intimité efficace se joue
                presque toujours autour de 1,80 m.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                La notion clé, c&apos;est la <strong className="text-primary font-semibold">limite séparative</strong> :
                la clôture se pose soit exactement sur la limite de propriété (elle devient alors mitoyenne si le voisin
                y contribue), soit entièrement sur votre terrain. Dans les deux cas, mieux vaut en parler au voisin en
                amont : c&apos;est autant une question de bon sens que de tranquillité juridique.
              </p>
            </section>

            <Figure
              src="/images/blog/cloture-brise-vue-bois-guide/cloture-bois-limite-separative-1m80-gironde.webp"
              alt="Clôture bois occultante en limite séparative surmontée d'une haie, hauteur d'intimité en Gironde"
              caption="En limite séparative, le PLU plafonne le plus souvent la clôture autour de 1,80 m."
            />

            {/* Déclaration préalable */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Faut-il une déclaration préalable pour une clôture ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Contrairement à une idée répandue, poser une clôture n&apos;est pas toujours libre.{' '}
                <strong className="text-primary font-semibold">
                  Une déclaration préalable de travaux est obligatoire dans plusieurs cas de figure fréquents :
                </strong>{' '}
                lorsque le PLU ou une délibération du conseil municipal l&apos;impose sur tout ou partie de la commune,
                dans les secteurs sauvegardés et les abords d&apos;un monument historique (avis de l&apos;Architecte des
                Bâtiments de France), dans les sites classés ou inscrits, et souvent au sein d&apos;un lotissement doté
                de son propre règlement.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                À la différence d&apos;un carport ou d&apos;un abri, une clôture ne crée pas d&apos;emprise au sol
                habitable : elle relève donc rarement du permis de construire. Mais le fait qu&apos;elle échappe au
                permis ne veut pas dire qu&apos;elle échappe à toute formalité — c&apos;est là que beaucoup de
                particuliers se font surprendre.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Plutôt que de vous donner des règles qui ne colleraient pas forcément à votre parcelle, nous{' '}
                <strong className="text-primary font-semibold">vérifions ces formalités avant d&apos;engager le
                chantier</strong>, en consultant le PLU de votre commune et, au besoin, le service urbanisme de la
                mairie. Pour comprendre la logique d&apos;ensemble des autorisations d&apos;urbanisme, notre article
                dédié aux{' '}
                <a href="/blog/autorisation-urbanisme-abri-carport-pergola-2026" className={lienInterne}>
                  autorisations pour abri, carport et pergola
                </a>{' '}
                détaille les seuils et les démarches.
              </p>
            </section>

            {/* Essences */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Quelle essence choisir pour une clôture qui dure ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une clôture est exposée en permanence à la pluie, au soleil et aux projections d&apos;eau du sol : elle
                réclame une essence durable en <strong className="text-primary font-semibold">classe d&apos;emploi 3</strong>{' '}
                (bois soumis à une humidification fréquente, hors contact permanent avec le sol). Trois valeurs sûres
                sous notre climat girondin :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le douglas', 'résineux naturellement durable en classe 3 sans traitement chimique, purgé d’aubier ; excellent rapport durabilité-prix, teinte chaude rosée qui grise joliment.'],
                  ['Le mélèze', 'dense, stable et durable sans traitement, il offre un beau fil et une bonne tenue au vent ; un cran au-dessus du douglas côté esthétique et prix.'],
                  ['Le pin maritime', 'l’essence locale de la filière Nouvelle-Aquitaine, économique et à faible empreinte transport ; il demande un traitement autoclave (classe 4) pour durer face à l’humidité.'],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Notre préférence, pour une clôture sans traitement chimique, va au douglas ou au mélèze certifiés PEFC :
                ils tiennent naturellement en classe 3, ce qui est exactement l&apos;usage d&apos;une clôture. Le choix
                fin de l&apos;essence — durabilité, teinte, prix — obéit à la même logique que pour une terrasse : notre
                guide{' '}
                <a href="/blog/quel-bois-pour-terrasse-exterieure" className={lienInterne}>
                  quel bois choisir pour une terrasse extérieure
                </a>{' '}
                détaille les classes d&apos;emploi et les fourchettes de prix, essence par essence.
              </p>
            </section>

            <Figure
              src="/images/blog/cloture-brise-vue-bois-guide/lames-cloture-bois-douglas-meleze-classe-3.webp"
              alt="Gros plan sur des lames de clôture en bois résineux, fil et teinte chaude type douglas ou mélèze"
              caption="Douglas et mélèze tiennent naturellement en classe 3, sans traitement chimique."
            />

            {/* Styles */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Claire-voie, panneau plein, ganivelle : quel style pour quel besoin ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le style d&apos;une clôture n&apos;est pas qu&apos;une affaire de goût : il arbitre entre{' '}
                <strong className="text-primary font-semibold">occultation et ventilation</strong>. Plus vous fermez pour
                l&apos;intimité, plus vous créez une prise au vent — un paramètre qui compte sur les terrains dégagés de
                Gironde. Voici comment se situent les grandes familles :
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Style</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Principe</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Atouts</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Limites</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparatif.map((ligne, i) => (
                      <tr
                        key={ligne[0]}
                        className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}
                      >
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
                Pour un tour de terrasse ou de piscine à l&apos;abri des regards, le{' '}
                <strong className="text-primary font-semibold">panneau plein</strong> ou la{' '}
                <strong className="text-primary font-semibold">persienne à lames inclinées</strong> sont les plus
                efficaces. Sur un terrain venté, nous recommandons souvent de laisser respirer la clôture — claire-voie
                serrée ou lames légèrement espacées — pour qu&apos;elle ne fasse pas voile et ne fatigue pas ses appuis.
                C&apos;est un arbitrage que nous faisons sur place, en fonction de l&apos;exposition réelle du terrain.
              </p>
            </section>

            <DuoFigure
              a={{
                src: '/images/blog/cloture-brise-vue-bois-guide/cloture-bois-claire-voie-ventilee-jardin.webp',
                alt: 'Clôture bois en claire-voie à lames espacées laissant passer la lumière, style ventilé',
                caption: 'La claire-voie laisse respirer le terrain et résiste mieux au vent.',
              }}
              b={{
                src: '/images/blog/cloture-brise-vue-bois-guide/brise-vue-bois-panneau-plein-occultant-terrasse.webp',
                alt: 'Brise-vue bois en panneau plein à lames jointives, occultation totale des regards',
                caption: 'Le panneau plein coupe totalement les regards autour de la terrasse ou de la piscine.',
              }}
            />

            {/* Pose */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Bien poser sa clôture : poteaux, scellement et alignement
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une clôture ne vaut que par ses appuis. Le point le plus important, celui que beaucoup de guides
                oublient :{' '}
                <strong className="text-primary font-semibold">
                  le bois ne doit jamais être noyé directement dans le béton.
                </strong>{' '}
                Un poteau bois scellé dans une fondation pompe l&apos;humidité par le pied et pourrit en quelques années.
                Nous ancrons les poteaux sur des pieds ou sabots métalliques désolidarisés du sol, ce qui garde le bois
                au sec et permet un remplacement facile.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Des poteaux de section suffisante (au minimum 90 × 90 mm) pour reprendre la hauteur et la prise au vent d’un brise-vue plein.',
                  'Un scellement béton sur platine ou un ancrage sur pied métallique, jamais le bois directement dans la fondation.',
                  'Un alignement rigoureux en limite séparative, au cordeau, avec des niveaux repris poteau par poteau.',
                  'Un accord préalable du voisin quand la clôture est mitoyenne ou implantée pile sur la limite de propriété.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Une clôture ou un brise-vue s&apos;inscrit presque toujours dans un projet plus large — terrasse, tour de
                piscine, portail, bardage assorti. Nous concevons l&apos;ensemble d&apos;un seul tenant : découvrez notre
                approche de l&apos;<a href="/amenagement-exterieur" className={lienInterne}>aménagement extérieur</a> et
                nos <a href="/bardages" className={lienInterne}>bardages bois</a>, pour une clôture qui dialogue avec la
                maison plutôt que de la contredire.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Carport-bois-Libourne-3.webp"
              alt="Poteaux bois montés sur pieds métalliques galvanisés désolidarisés du sol, chantier L'Esprit Bois en Gironde"
              caption="Sur nos chantiers, les poteaux bois reposent sur des pieds métalliques désolidarisés du sol : le principe qui fait durer clôtures comme carports."
            />

            {/* Budget */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Quel budget prévoir au mètre linéaire en 2026 ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une clôture se chiffre au mètre linéaire, en séparant fourniture et pose.{' '}
                <strong className="text-primary font-semibold">
                  Côté fourniture, comptez environ 35 à 120 € du mètre linéaire
                </strong>{' '}
                selon l&apos;essence, le style et la hauteur : une claire-voie basse en pin traité se situe dans le bas
                de la fourchette, un panneau plein occultant en mélèze de 1,80 m dans le haut.{' '}
                <strong className="text-primary font-semibold">La pose ajoute de 20 à 70 € du mètre linéaire</strong>,
                selon la nature du sol (terre, remblai, présence de roche) et le type de scellement.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Trois postes font varier la note bien au-delà du simple linéaire :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['L’essence et le style', 'un panneau plein en mélèze n’a pas le même coût qu’une ganivelle de châtaignier ou une claire-voie de pin.'],
                  ['La nature du sol', 'un terrain caillouteux, en pente ou instable complique le scellement des poteaux et alourdit la pose.'],
                  ['Les finitions', 'portillon assorti, occultation totale, teinte saturée, raccord avec un portail ou un bardage existant.'],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ces fourchettes sont des ordres de grandeur honnêtes : le juste prix de <em>votre</em> clôture dépend de
                son linéaire, de son style et de votre sol. Seul un devis établi sur place, après relevé du terrain et
                de la limite séparative, nous engage — c&apos;est la seule façon de chiffrer sérieusement une clôture bois
                sur mesure à Libourne et alentour.
              </p>
            </section>

            {/* Entretien */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Comment garder un brise-vue bois net dans le temps ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une clôture bien conçue demande peu d&apos;entretien, car{' '}
                <strong className="text-primary font-semibold">l&apos;essentiel se joue à la conception</strong> : essence
                durable, poteaux désolidarisés du sol, lames qui sèchent vite. Le reste tient à quelques gestes simples,
                et surtout à un choix de départ — garder la teinte ou laisser griser.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Appliquer un saturateur ou une lasure tous les 3 à 5 ans pour conserver la teinte d’origine du bois.',
                  'Accepter la patine argentée si vous préférez le naturel : le grisaillement n’altère pas la solidité de la clôture.',
                  'Réaliser un dégrisage (nettoyant spécifique) pour raviver un bois grisé avant de le re-saturer.',
                  'Dégager la végétation grimpante et vérifier une fois par an l’état des fixations inox et des pieds de poteaux.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                La logique est exactement la même que pour une terrasse exposée : ne jamais saturer un bois humide ou
                brûlant, respecter le rythme de 3 à 5 ans, et privilégier un nettoyage doux. Notre guide{' '}
                <a href="/blog/proteger-terrasse-bois-canicule-entretien-ete" className={lienInterne}>
                  protéger sa terrasse en bois de la canicule
                </a>{' '}
                détaille ces gestes d&apos;entretien d&apos;été, transposables à une clôture. Et pour voir comment tout
                cela se traduit sur le terrain, parcourez{' '}
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
              Clôture et brise-vue en bois : vos questions
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
                    <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
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
              Une clôture pensée pour votre terrain
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Il n&apos;existe pas de clôture universelle : il y a la hauteur autorisée par votre PLU, l&apos;essence qui
              tiendra sous notre climat, le style juste entre intimité et ventilation, et une pose qui garde le bois au
              sec. C&apos;est le diagnostic que nous menons chez L&apos;Esprit Bois, entreprise certifiée Qualibat, à
              Libourne et dans toute la Gironde, formalités d&apos;urbanisme comprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/amenagement-exterieur"
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
