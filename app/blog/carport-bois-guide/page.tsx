import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/source-adefrance/Carport-bois-Libourne-1.webp';

export const metadata: Metadata = buildMetadata({
  title: "Carport bois : le choisir et l'intégrer | L'Esprit Bois",
  description:
    "Carport bois ou garage ? Adossé ou autoportant, essences, toiture, budget et autorisation : le guide pour abriter votre voiture en Gironde.",
  keywords:
    "carport bois, carport en bois, carport adossé, carport autoportant, abri voiture bois, carport ou garage, toiture carport, prix carport bois, autorisation carport, carport Gironde, carport Libourne",
  path: '/blog/carport-bois-guide',
  ogImage: COVER,
  ogTitle: "Carport en bois : bien le choisir et l'intégrer à sa maison",
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
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://lespritbois.fr/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://lespritbois.fr/blog' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Carport en bois',
        item: 'https://lespritbois.fr/blog/carport-bois-guide',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "Carport en bois : bien le choisir et l'intégrer à sa maison",
    description:
      "Carport bois ou garage ? Adossé ou autoportant, essences, toiture, intégration architecturale, autorisation d'urbanisme, budget et entretien : le guide complet pour abriter votre voiture en Gironde.",
    image: 'https://lespritbois.fr' + COVER,
    author: {
      '@type': 'Person',
      name: 'David Bertrand',
      jobTitle: "Expert bâtiment et créateur d'espaces extérieurs",
      worksFor: { '@type': 'Organization', name: "L'Esprit Bois" },
    },
    publisher: {
      '@type': 'Organization',
      name: "L'Esprit Bois",
      logo: { '@type': 'ImageObject', url: 'https://lespritbois.fr/logo-mark.svg' },
    },
    datePublished: '2026-07-09',
    dateModified: '2026-07-09',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lespritbois.fr/blog/carport-bois-guide',
    },
    about: ['carport bois', 'abri voiture', 'aménagement extérieur'],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Carport ou garage : que choisir pour abriter sa voiture ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le carport protège efficacement la voiture de la pluie, du soleil et des feuilles pour un budget bien inférieur à un garage maçonné, tout en restant ouvert et lumineux. Le garage fermé apporte la sécurité et le rangement, mais coûte plus cher et alourdit le bâti. Le carport bois est le bon compromis quand on veut abriter sans construire un volume fermé.",
        },
      },
      {
        '@type': 'Question',
        name: 'Carport adossé ou autoportant : quelle différence ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le carport adossé s'appuie sur un mur de la maison : il coûte moins cher, s'intègre dans le prolongement de l'habitation et abrite souvent un accès direct à la porte. L'autoportant repose sur ses propres poteaux et se pose n'importe où dans le jardin, indépendamment de la maison. Le choix dépend de la configuration du terrain et de la distance entre la place de stationnement et la maison.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quel bois choisir pour un carport ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un carport demande une essence durable exposée aux intempéries : le douglas et le mélèze offrent un excellent rapport durabilité-prix en bois local, le chêne un feuillu noble pour les projets haut de gamme, le pin autoclave une solution économique. La structure porteuse et l'ancrage au sol comptent autant que l'essence pour la longévité de l'ouvrage.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quelle toiture pour un carport en bois ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Les tuiles offrent la meilleure intégration avec une maison couverte en tuiles et une longévité maximale, mais pèsent plus lourd sur la structure. Le bac acier est léger, économique et rapide à poser. La toiture végétalisée séduit pour son esthétique et son isolation, à condition d'une structure et d'une étanchéité prévues pour. Le choix se fait selon la maison, le budget et l'aspect recherché.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faut-il une autorisation pour installer un carport ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un carport crée de l'emprise au sol : selon la surface créée et le PLU de votre commune, une déclaration préalable de travaux ou un permis de construire peut être nécessaire. Les règles varient d'une commune à l'autre et selon la zone. Nous vérifions ces formalités avant d'engager le projet.",
        },
      },
      {
        '@type': 'Question',
        name: 'Un carport en bois demande-t-il beaucoup d’entretien ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Peu, si l'essence est bien choisie et la structure ventilée. Un bois naturellement durable peut griser sans perdre en solidité. Pour conserver la teinte d'origine, on applique un saturateur à renouveler tous les deux à trois ans environ. L'entretien courant consiste surtout à dégager les feuilles de la toiture et à vérifier les évacuations d'eau.",
        },
      },
    ],
  },
];

const comparatif = [
  ['Carport bois ouvert', 'Abrite de la pluie, du soleil, des feuilles', 'Économique, lumineux, rapide à poser', 'Ne ferme pas, protection latérale limitée'],
  ['Carport semi-fermé', 'Abri + un ou deux côtés bardés', 'Coupe le vent dominant, range vélos/bois', 'Un peu plus cher, moins ouvert'],
  ['Abri fermé / garage bois', 'Ferme entièrement, sécurise', 'Sécurité, rangement, hors gel relatif', 'Budget plus élevé, volume bâti important'],
  ['Garage maçonné', 'Construction fermée traditionnelle', 'Robuste, valorise le bien', 'Coût élevé, chantier lourd, moins souple'],
];

const faq = [
  {
    q: 'Carport ou garage : que choisir pour abriter sa voiture ?',
    r: (
      <>
        Le carport protège efficacement la voiture de la pluie, du soleil et des feuilles pour un budget bien inférieur
        à un garage maçonné, tout en restant ouvert et lumineux. Le garage fermé apporte la sécurité et le rangement,
        mais coûte plus cher et alourdit le bâti. Le carport bois est le bon compromis quand on veut abriter sans
        construire un volume fermé.
      </>
    ),
  },
  {
    q: 'Carport adossé ou autoportant : quelle différence ?',
    r: (
      <>
        Le carport adossé s&apos;appuie sur un mur de la maison : il coûte moins cher, s&apos;intègre dans le
        prolongement de l&apos;habitation et abrite souvent un accès direct à la porte. L&apos;autoportant repose sur ses
        propres poteaux et se pose n&apos;importe où dans le jardin, indépendamment de la maison. Le choix dépend de la
        configuration du terrain et de la distance entre la place de stationnement et la maison.
      </>
    ),
  },
  {
    q: 'Quel bois choisir pour un carport ?',
    r: (
      <>
        Un carport demande une essence durable exposée aux intempéries : le douglas et le mélèze offrent un excellent
        rapport durabilité-prix en bois local, le chêne un feuillu noble pour les projets haut de gamme, le pin
        autoclave une solution économique. La structure porteuse et l&apos;ancrage au sol comptent autant que
        l&apos;essence pour la longévité de l&apos;ouvrage.
      </>
    ),
  },
  {
    q: 'Quelle toiture pour un carport en bois ?',
    r: (
      <>
        Les tuiles offrent la meilleure intégration avec une maison couverte en tuiles et une longévité maximale, mais
        pèsent plus lourd sur la structure. Le bac acier est léger, économique et rapide à poser. La toiture
        végétalisée séduit pour son esthétique et son isolation, à condition d&apos;une structure et d&apos;une
        étanchéité prévues pour. Le choix se fait selon la maison, le budget et l&apos;aspect recherché.
      </>
    ),
  },
  {
    q: 'Faut-il une autorisation pour installer un carport ?',
    r: (
      <>
        Un carport crée de l&apos;emprise au sol : selon la surface créée et le PLU de votre commune, une déclaration
        préalable de travaux ou un permis de construire peut être nécessaire. Les règles varient d&apos;une commune à
        l&apos;autre et selon la zone. Nous vérifions ces formalités pour vous avant d&apos;engager le projet.
      </>
    ),
  },
  {
    q: 'Un carport en bois demande-t-il beaucoup d’entretien ?',
    r: (
      <>
        Peu, si l&apos;essence est bien choisie et la structure ventilée. Un bois naturellement durable peut griser sans
        perdre en solidité. Pour conserver la teinte d&apos;origine, on applique un saturateur à renouveler tous les
        deux à trois ans environ. L&apos;entretien courant consiste surtout à dégager les feuilles de la toiture et à
        vérifier les évacuations d&apos;eau.
      </>
    ),
  },
];

export default function ArticleCarportBoisPage() {
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
              alt="Carport en bois adossé à une maison, abritant une voiture, en Gironde"
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
              <span className="text-secondary-fixed">Carport en bois</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Carports bois
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Carport en bois : bien le choisir et l&apos;intégrer à sa maison
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/70 font-label-md text-label-md">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">person</span>
                David Bertrand, L&apos;Esprit Bois
              </span>
              <span className="text-secondary">·</span>
              <span>9 juillet 2026</span>
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
                Pour abriter votre voiture sans construire un garage, le carport en bois est le meilleur compromis :
                choisissez-le adossé à la maison si vous cherchez un accès direct et un budget maîtrisé, autoportant s&apos;il
                doit se poser à l&apos;écart, avec une essence durable (douglas, mélèze, chêne) et une toiture cohérente
                avec celle de votre maison (tuiles, bac acier ou végétalisée).
              </strong>{' '}
              Mais un carport n&apos;est pas qu&apos;un abri posé sur quatre poteaux : sur nos chantiers en Gironde, ce
              qui fait la réussite d&apos;un carport, c&apos;est son intégration à l&apos;architecture existante, la
              qualité de son ancrage au sol et une toiture bien pensée. Voici comment décider en connaissance de cause.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* Carport ou garage */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Carport ou abri fermé : quelle solution pour abriter sa voiture ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un carport est un abri ouvert, généralement à un ou deux côtés, qui protège efficacement un véhicule de
                la pluie, du gel, du soleil et des salissures (feuilles, résine, fientes), sans le volume ni le coût
                d&apos;un garage fermé. C&apos;est la réponse la plus fréquente quand on veut{' '}
                <strong className="text-primary font-semibold">abriter sans enfermer</strong> : la voiture reste
                accessible, l&apos;ouvrage reste léger, lumineux, et il se pose vite.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Le garage fermé, lui, sécurise le véhicule, sert de rangement et met à l&apos;abri du regard, mais il
                coûte nettement plus cher et constitue une véritable construction. Voici comment se situent les
                principales solutions :
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
                Chez L&apos;Esprit Bois, nous voyons souvent des clients hésiter entre carport et garage : dans la
                plupart des cas, un carport bois bien intégré couvre le besoin réel (protéger le véhicule au quotidien)
                pour une fraction du budget. Et rien n&apos;empêche de le concevoir semi-fermé, avec un côté bardé pour
                ranger vélos, bois de chauffage ou local technique.
              </p>
            </section>

            {/* Image carport ouvert */}
            <Figure
              src="/images/source-adefrance/Carport-bois-Libourne-2.webp"
              alt="Carport en bois ouvert abritant une voiture, réalisation en Gironde"
              caption="Le carport bois abrite sans enfermer : la voiture reste accessible, l'ouvrage reste léger et lumineux."
            />

            {/* Adossé ou autoportant */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Carport adossé ou autoportant : lequel pour votre terrain ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le <strong className="text-primary font-semibold">carport adossé</strong> s&apos;appuie sur un mur de la
                maison. Il coûte moins cher (une façade sert d&apos;appui), s&apos;intègre dans le prolongement de
                l&apos;habitation et abrite souvent un accès direct vers la porte d&apos;entrée ou de garage : on passe
                de la voiture à la maison à l&apos;abri. C&apos;est la solution idéale quand la place de stationnement
                jouxte la maison.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le <strong className="text-primary font-semibold">carport autoportant</strong> repose sur ses propres
                poteaux et ne dépend d&apos;aucun mur. On peut le poser n&apos;importe où : au fond du jardin, en bordure
                de terrain, à côté du portail. Il offre plus de liberté d&apos;implantation, mais demande une structure
                complète et un ancrage soigné sur ses quatre appuis.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Le choix se joue donc sur la géométrie de votre terrain : distance entre la place de stationnement et la
                maison, orientation, présence d&apos;un mur exploitable, contraintes d&apos;accès. C&apos;est le genre de
                décision que nous prenons <strong className="text-primary font-semibold">devant votre terrain</strong>,
                mètre en main, pas sur plan.
              </p>
            </section>

            {/* Image dans le corps */}
            <Figure
              src="/images/source-adefrance/Carport-bois-Libourne-3.webp"
              alt="Carport en bois sur mesure réalisé par L'Esprit Bois près de Libourne"
              caption="Un carport bois sur mesure en Gironde : structure ventilée, poteaux ancrés et toiture accordée à la maison."
            />

            {/* Essences */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Quel bois choisir pour un carport durable ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Comme pour une terrasse, un carport réclame une essence dont la durabilité naturelle résiste aux
                intempéries, car la structure est exposée en permanence. Les valeurs sûres sous notre climat girondin
                sont le <strong className="text-primary font-semibold">douglas</strong> et le{' '}
                <strong className="text-primary font-semibold">mélèze</strong>, deux résineux locaux au très bon rapport
                durabilité-prix, le <strong className="text-primary font-semibold">chêne</strong> pour un feuillu noble
                sur les projets haut de gamme, et le{' '}
                <strong className="text-primary font-semibold">pin autoclave</strong> pour un budget serré.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un point que beaucoup de guides oublient : sur un carport, la structure porteuse et l&apos;ancrage au sol
                comptent autant que l&apos;essence. Les poteaux doivent être{' '}
                <strong className="text-primary font-semibold">désolidarisés du sol</strong> par des pieds métalliques,
                jamais noyés directement dans le béton, pour que le bois ne pompe pas l&apos;humidité et ne pourrisse pas
                par le bas. C&apos;est le détail qui fait la différence entre un carport qui tient vingt ans et un
                carport qui fatigue en cinq.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Pour choisir plus finement l&apos;essence selon la durabilité, la teinte et le prix, notre article sur{' '}
                <a href="/blog/quel-bois-pour-terrasse-exterieure" className={lienInterne}>
                  le choix du bois pour une terrasse
                </a>{' '}
                détaille les mêmes essences, avec leur classe d&apos;emploi et leurs fourchettes de prix.
              </p>
            </section>

            {/* Toiture */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Quelle toiture pour un carport : tuiles, bac acier ou végétalisée ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La toiture d&apos;un carport ne se choisit pas au hasard : c&apos;est elle qui décide de son intégration
                visuelle et de son coût. Trois grandes familles couvrent la plupart des projets :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Les tuiles', 'la meilleure intégration avec une maison couverte en tuiles, une longévité maximale et un rendu traditionnel ; en contrepartie, elles pèsent plus lourd et demandent une structure dimensionnée en conséquence.'],
                  ['Le bac acier', 'léger, économique et rapide à poser, disponible en plusieurs teintes ; idéal pour un rendu contemporain ou un budget maîtrisé, avec une évacuation d’eau simple.'],
                  ['La toiture végétalisée', 'esthétique, elle apporte de l’isolation et se fond dans le jardin ; elle exige une structure renforcée et une étanchéité étudiée dès la conception.'],
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
                Notre règle sur le terrain : la toiture du carport doit dialoguer avec celle de la maison. Une maison en
                tuiles canal appelle une couverture tuiles ou un bac acier discret ; une extension contemporaine
                s&apos;accorde mieux à un bac acier ou à une toiture plate végétalisée. Dans tous les cas, la pente et
                les évacuations se calculent avant la pose pour que l&apos;eau ne stagne jamais.
              </p>
            </section>

            {/* Image toiture / intégration */}
            <Figure
              src="/images/source-adefrance/Carport-bois-Libourne-5.webp"
              alt="Carport en bois dont la toiture reprend celle de la maison, en Gironde"
              caption="La toiture du carport dialogue avec celle de la maison : pente, teinte et matériau accordés."
            />

            {/* Intégration architecturale */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Comment bien intégrer un carport à l&apos;architecture de la maison ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un carport réussi ne se remarque pas comme une pièce rapportée :{' '}
                <strong className="text-primary font-semibold">il prolonge la maison au lieu de la contredire.</strong>{' '}
                C&apos;est ce travail d&apos;intégration qui distingue un abri de jardin en kit d&apos;un ouvrage sur
                mesure. Quatre points guident nos réalisations :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Reprendre la pente, la teinte et le matériau de la toiture existante pour que le carport paraisse d’origine.',
                  'Accorder la teinte du bois et des finitions aux menuiseries et au bardage de la maison.',
                  'Soigner les proportions et la hauteur sous toiture pour rester à l’échelle de la façade.',
                  'Penser les abords : sol drainé, éclairage, raccord avec une allée ou un portail.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Un carport bien conçu appelle souvent d&apos;autres ouvrages du même chantier, que nous menons avec un
                seul interlocuteur : découvrez notre approche des{' '}
                <a href="/carports" className={lienInterne}>carports sur mesure</a> et l&apos;ensemble de nos{' '}
                <a href="/constructions-bois" className={lienInterne}>constructions bois</a>, de l&apos;étude à la pose.
              </p>
            </section>

            {/* Image intégration */}
            <Figure
              src="/images/source-adefrance/Carport-bois-Libourne-6.webp"
              alt="Carport en bois intégré au prolongement d'une maison, réalisation L'Esprit Bois"
              caption="Bien intégré, le carport prolonge la maison au lieu de la contredire."
            />

            {/* Autorisation */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Faut-il une autorisation d&apos;urbanisme pour un carport ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un carport crée de l&apos;emprise au sol : il relève donc de l&apos;urbanisme.{' '}
                <strong className="text-primary font-semibold">
                  Selon la surface créée et le PLU de votre commune, une déclaration préalable de travaux ou un permis de
                  construire peut être nécessaire.
                </strong>{' '}
                Les règles varient d&apos;une commune à l&apos;autre, selon la zone (secteur protégé, proximité d&apos;un
                monument, lotissement avec règlement propre) et selon la surface concernée.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Plutôt que de vous donner des seuils qui ne correspondraient pas forcément à votre situation, nous
                <strong className="text-primary font-semibold"> vérifions ces formalités pour vous avant d&apos;engager
                le projet</strong>, en consultant le PLU de votre commune et, au besoin, le service urbanisme de la
                mairie. C&apos;est inclus dans notre accompagnement : vous n&apos;avez pas à démêler seul la
                réglementation.
              </p>
            </section>

            {/* Budget */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Quel budget prévoir pour un carport en bois ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le budget d&apos;un carport bois posé se situe le plus souvent entre{' '}
                <strong className="text-primary font-semibold">2 500 et 6 000 € pour un abri une voiture</strong>, et
                grimpe <strong className="text-primary font-semibold">au-delà de 8 000 à 12 000 € pour un modèle deux
                voitures</strong> sur mesure avec toiture tuiles ou finitions poussées (fourchettes de marché
                2025-2026, pose comprise). Un carport adossé revient généralement moins cher qu&apos;un autoportant à
                surface égale.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Trois postes font varier la note bien au-delà de la surface :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['La structure et l’ancrage', 'section des poteaux, pieds métalliques, dalle ou plots : le « dessous » conditionne la durée de vie autant que le prix.'],
                  ['La toiture', 'tuiles, bac acier ou végétalisée : c’est le poste qui fait le plus varier le budget d’un projet à l’autre.'],
                  ['Les finitions', 'bardage d’un côté, éclairage, gouttières, raccord avec la maison, teinte et saturateur.'],
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
                Ces fourchettes sont des ordres de grandeur : le juste prix de <em>votre</em> carport dépend de son
                implantation, de son support et de la toiture retenue. Seul un devis établi sur place, après relevé des
                niveaux et du terrain, nous engage : c&apos;est la seule manière de chiffrer honnêtement.
              </p>
            </section>

            {/* Entretien */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Comment entretenir un carport en bois dans le temps ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un carport bien conçu demande peu d&apos;entretien, car{' '}
                <strong className="text-primary font-semibold">l&apos;essentiel se joue à la conception</strong> : bois
                durable, poteaux désolidarisés du sol, structure ventilée, toiture qui évacue bien. Le reste tient à
                quelques gestes simples au fil des saisons.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Dégager régulièrement les feuilles et débris de la toiture et des gouttières, surtout à l’automne.',
                  'Vérifier une fois par an les évacuations d’eau et l’état des fixations inox.',
                  'Appliquer un saturateur tous les deux à trois ans si vous voulez conserver la teinte d’origine du bois.',
                  'Laisser griser le bois sans crainte si vous préférez la patine naturelle : elle n’altère pas la solidité.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Vous pouvez voir comment tout cela se traduit concrètement dans{' '}
                <a href="/realisations" className={lienInterne}>nos réalisations en Gironde</a> : chaque carport y est
                pensé pour durer et vieillir joliment, pas seulement pour tenir la première année.
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
              Carport en bois : vos questions
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
              Un carport pensé pour votre maison
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Il n&apos;existe pas de carport universel : il y a l&apos;abri juste pour votre terrain, votre maison et
              votre budget, ancré sur une structure durable et coiffé d&apos;une toiture cohérente. C&apos;est le
              diagnostic que nous menons chez L&apos;Esprit Bois, entreprise certifiée Qualibat, à Libourne et dans toute
              la Gironde, formalités d&apos;urbanisme comprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/carports"
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
