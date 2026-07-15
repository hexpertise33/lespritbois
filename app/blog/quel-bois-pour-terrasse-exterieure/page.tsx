import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

// NOTE (preview) : l'image de couverture définitive est en attente (photo fournie ou
// génération IA). On réutilise ici une vraie photo de terrasse du site pour la preview.
const COVER = '/images/terrasse-bois-plots-gironde-1.webp';

export const metadata: Metadata = buildMetadata({
  title: "Quel bois pour une terrasse extérieure ? | L'Esprit Bois",
  description:
    "Douglas, mélèze, red cedar, chêne ou bois exotique : quel bois choisir pour votre terrasse en Gironde ? Comparatif, classe d'emploi, prix et conseils de pose.",
  keywords:
    "quel bois pour terrasse extérieure, meilleur bois terrasse, essence bois terrasse, classe d'emploi bois, douglas ou mélèze, bois terrasse qui ne grise pas, prix terrasse bois, terrasse bois Gironde",
  path: '/blog/quel-bois-pour-terrasse-exterieure',
  ogImage: COVER,
  ogTitle: 'Quel bois choisir pour une terrasse extérieure ?',
  ville: 'Libourne',
});

const lienInterne =
  'text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors';

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
        name: 'Quel bois pour une terrasse extérieure ?',
        item: 'https://lesprit-bois.fr/blog/quel-bois-pour-terrasse-exterieure',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Quel bois choisir pour une terrasse extérieure ? Le guide par essence',
    description:
      "Douglas, mélèze, red cedar, chêne ou bois exotique : quel bois choisir pour votre terrasse en Gironde ? Comparatif, classe d'emploi, prix et conseils de pose.",
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
    datePublished: '2026-07-09',
    dateModified: '2026-07-09',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/quel-bois-pour-terrasse-exterieure',
    },
    about: ['terrasse bois', 'essences de bois', 'aménagement extérieur'],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quel est le bois le plus résistant pour une terrasse ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le bois le plus résistant est un bois exotique dense comme l'ipé ou le cumaru, naturellement de classe d'emploi 4 à 5, avec une durée de vie de 25 à 50 ans. En bois européen, le robinier est le plus durable (40 ans et plus) et constitue une alternative locale au bois exotique.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quel bois choisir pour une terrasse autour d’une piscine ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Près d'un bassin, privilégiez une essence de classe 4 tolérant l'humidité permanente et les éclaboussures, avec des lames antidérapantes et une structure qui accepte l'eau en continu. Les bois exotiques et le robinier conviennent bien ; L'Esprit Bois habille les abords de piscine mais ne construit pas le bassin.",
        },
      },
      {
        '@type': 'Question',
        name: 'Douglas ou mélèze : lequel choisir pour une terrasse ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Les deux sont d'excellents résineux locaux, naturellement durables en classe 3. Le douglas offre une teinte brun rosé chaleureuse et un très bon rapport qualité-prix ; le mélèze est plus dense et un peu plus stable. Le choix se joue sur la teinte et l'exposition.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faut-il traiter une terrasse en bois ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Cela dépend de l'essence et de l'aspect voulu. Un bois naturellement durable peut se passer de traitement et griser naturellement. Pour conserver la teinte d'origine, on applique un saturateur, à renouveler environ tous les deux ans.",
        },
      },
      {
        '@type': 'Question',
        name: "Quelle est la durée de vie d'une terrasse en bois ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "De dix ans environ pour un pin autoclave à 40-50 ans pour un bois exotique ou du robinier, selon l'essence, l'exposition et l'entretien. La qualité de la pose (ventilation et drainage) détermine si la terrasse atteint le haut ou le bas de sa fourchette.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faut-il une autorisation pour construire une terrasse ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Une terrasse de plain-pied non couverte ne demande le plus souvent aucune formalité. Surélevée, couverte ou créant de l'emprise au sol au-delà d'un seuil, elle peut nécessiter une déclaration préalable. Les seuils dépendent du PLU communal.",
        },
      },
    ],
  },
];

const essences = [
  ['Pin autoclave', 'Résineux traité (classe 4)', '10–15 ans et +', 'Clair, grise vite', 'Économique (~120–150 €/m²)'],
  ['Douglas', 'Résineux local', '15–20 ans avec entretien', 'Brun rosé, chaleureux', '~95–140 €/m²'],
  ['Mélèze', 'Résineux local dense', '~20 ans', 'Brun clair, nerveux', '~120–170 €/m²'],
  ['Red cedar', 'Résineux nord-américain', '~15 ans', 'Léger, grise en argent', 'Moyen-haut'],
  ['Chêne', 'Feuillu européen', '20 ans et +', 'Brun doré, noble', 'Haut de gamme, sur devis'],
  ['Robinier', 'Feuillu européen très durable', '40 ans et +', 'Jaune-brun', 'Haut de gamme, sur devis'],
  ['Ipé / cumaru', 'Bois exotique dense', '25–50 ans', 'Brun rouge profond', '~200–280 €/m²'],
];

const faq = [
  {
    q: 'Quel est le bois le plus résistant pour une terrasse ?',
    r: (
      <>
        Le bois le plus résistant est un bois exotique dense comme l&apos;ipé ou le cumaru, naturellement de classe
        d&apos;emploi 4 à 5, avec une durée de vie de 25 à 50 ans. En bois européen, le robinier est le plus durable
        (40 ans et plus) et constitue une alternative locale au bois exotique.
      </>
    ),
  },
  {
    q: 'Quel bois choisir pour une terrasse autour d’une piscine ?',
    r: (
      <>
        Près d&apos;un bassin, privilégiez une essence de classe 4 tolérant l&apos;humidité permanente et les
        éclaboussures, avec des lames antidérapantes et une structure qui accepte l&apos;eau en continu. Les bois
        exotiques et le robinier conviennent bien ; nous habillons les abords de piscine (plage, margelles,
        caillebotis), mais ne construisons pas le bassin lui-même.
      </>
    ),
  },
  {
    q: 'Douglas ou mélèze : lequel choisir ?',
    r: (
      <>
        Les deux sont d&apos;excellents résineux locaux, naturellement durables en classe 3. Le douglas offre une
        teinte brun rosé chaleureuse et un très bon rapport qualité-prix ; le mélèze est plus dense et un peu plus
        stable. Le choix se joue surtout sur la teinte souhaitée et sur l&apos;exposition de la terrasse.
      </>
    ),
  },
  {
    q: 'Faut-il traiter une terrasse en bois ?',
    r: (
      <>
        Cela dépend de l&apos;essence et de l&apos;aspect voulu. Un bois naturellement durable (mélèze, red cedar,
        chêne, exotique) peut se passer de traitement de préservation et griser naturellement. Pour conserver la
        teinte d&apos;origine, on applique un saturateur, à renouveler environ tous les deux ans.
      </>
    ),
  },
  {
    q: "Quelle est la durée de vie d'une terrasse en bois ?",
    r: (
      <>
        Elle va d&apos;une dizaine d&apos;années pour un pin autoclave à 40-50 ans pour un bois exotique ou du
        robinier, selon l&apos;essence, l&apos;exposition et l&apos;entretien. Mais c&apos;est surtout la qualité de la
        pose (ventilation et drainage) qui détermine si une terrasse atteint le haut ou le bas de sa fourchette.
      </>
    ),
  },
  {
    q: 'Faut-il une autorisation pour construire une terrasse ?',
    r: (
      <>
        Une terrasse de plain-pied, non couverte, ne demande le plus souvent aucune formalité. Dès qu&apos;elle est
        surélevée, couverte (pergola, toiture) ou qu&apos;elle crée de l&apos;emprise au sol au-delà d&apos;un certain
        seuil, une déclaration préalable de travaux peut être requise. Les seuils dépendent du PLU de votre commune :
        nous les vérifions pour vous avant d&apos;engager le projet.
      </>
    ),
  },
];

export default function ArticleQuelBoisTerrassePage() {
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
              alt="Terrasse en bois posée sur plots au pied d'une maison, en Gironde"
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
              <span className="text-secondary-fixed">Quel bois pour une terrasse ?</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Terrasses bois
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Quel bois choisir pour une terrasse extérieure ? Le guide par essence
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
                Pour une terrasse extérieure durable, choisissez un bois d&apos;une classe d&apos;emploi adaptée à son
                exposition (classe 3 pour une terrasse ventilée, classe 4 en contact avec le sol ou l&apos;eau) : le
                douglas et le mélèze pour un bois local au bon rapport qualité-prix, le red cedar pour sa stabilité, le
                chêne pour un feuillu noble, ou un bois exotique comme l&apos;ipé pour une durée de vie maximale.
              </strong>{' '}
              Mais l&apos;essence n&apos;est que la moitié de la réponse : sur nos chantiers en Gironde, ce qui fait
              vieillir (ou tenir) une terrasse, c&apos;est l&apos;exposition, le drainage et la façon dont elle est
              posée. Voici comment décider en connaissance de cause.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* Meilleures essences */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Quelles sont les meilleures essences de bois pour une terrasse ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Les meilleures essences de bois pour une terrasse sont celles dont la durabilité naturelle résiste à
                l&apos;humidité sans traitement lourd : le <strong className="text-primary font-semibold">red cedar</strong>{' '}
                et le <strong className="text-primary font-semibold">mélèze</strong> chez les résineux, le{' '}
                <strong className="text-primary font-semibold">chêne</strong> et le{' '}
                <strong className="text-primary font-semibold">robinier</strong> chez les feuillus européens, et
                l&apos;<strong className="text-primary font-semibold">ipé</strong> ou le{' '}
                <strong className="text-primary font-semibold">cumaru</strong> chez les bois exotiques. Le douglas et le
                pin autoclave complètent l&apos;offre pour des budgets plus mesurés.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Voici un comparatif des essences les plus courantes, avec des fourchettes de prix relevées sur le marché
                français en 2025-2026 (agrégateurs spécialisés, pose comprise) :
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Essence</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Type</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Durée de vie</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Aspect &amp; patine</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Budget posé</th>
                    </tr>
                  </thead>
                  <tbody>
                    {essences.map((ligne, i) => (
                      <tr
                        key={ligne[0]}
                        className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}
                      >
                        <td className="px-4 py-3 text-primary font-semibold whitespace-nowrap">{ligne[0]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant whitespace-nowrap">{ligne[2]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[3]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[4]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6">
                Chez L&apos;Esprit Bois, nous travaillons principalement le{' '}
                <strong className="text-primary font-semibold">douglas, le mélèze, le red cedar et le chêne</strong> :
                quatre essences que nous savons approvisionner, poser et faire durer sous le climat girondin, et que
                nous choisissons devant votre terrain plutôt que sur catalogue.
              </p>
            </section>

            {/* Classe d'emploi */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Qu&apos;est-ce que la classe d&apos;emploi du bois, et pourquoi vise-t-on la classe 4 ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La classe d&apos;emploi d&apos;un bois, définie par la norme{' '}
                <strong className="text-primary font-semibold">NF EN 335</strong>, indique le niveau d&apos;humidité
                auquel il peut être exposé sans se dégrader. Elle va de la classe 1 (intérieur sec) à la classe 5
                (immersion en eau de mer). Pour une terrasse, la référence courante est la{' '}
                <strong className="text-primary font-semibold">classe 4</strong> : un bois capable de rester en contact
                avec le sol ou l&apos;eau douce, soumis en permanence à un taux d&apos;humidité supérieur à 20 %.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Deux chemins mènent à la classe 4. Certaines essences l&apos;atteignent{' '}
                <strong className="text-primary font-semibold">naturellement</strong>, grâce à leur densité et à leurs
                composés protecteurs : bois exotiques (ipé, cumaru, teck) et, en Europe, robinier. D&apos;autres y
                accèdent <strong className="text-primary font-semibold">par traitement</strong>, comme le pin sylvestre
                rendu imputrescible en autoclave, ou par un procédé thermique.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Un point que beaucoup de guides oublient, et qui compte sur le terrain :{' '}
                <strong className="text-primary font-semibold">
                  une terrasse ventilée, posée sur plots, n&apos;est pas en contact permanent avec l&apos;eau.
                </strong>{' '}
                Elle relève souvent de la classe 3 plutôt que de la classe 4 stricte, ce qui permet à un douglas ou à
                un mélèze de tenir parfaitement, à condition que l&apos;eau s&apos;évacue sous les lames.
              </p>
            </section>

            {/* Local ou exotique */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Bois local ou bois exotique : que privilégier en Gironde ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                En Gironde, un bois local bien choisi rivalise avec un bois exotique pour la plupart des terrasses, avec
                une empreinte carbone bien moindre. Le douglas, le mélèze et le red cedar poussent ou se transforment
                près de chez nous ; l&apos;ipé et le cumaru arrivent d&apos;Amérique du Sud par cargo, et depuis le
                durcissement des contrôles à l&apos;import en 2020, ces essences se raréfient et voient leur prix
                grimper.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le bois exotique garde un avantage réel là où il excelle : une{' '}
                <strong className="text-primary font-semibold">durée de vie très longue</strong> (25 à 50 ans) et une
                densité qui encaisse tout, y compris le bord de piscine. Mais il se paie, à l&apos;achat comme à la
                pose, et sa provenance mérite qu&apos;on exige un label de gestion durable de la forêt.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Notre climat océanique (pluie régulière, humidité, proximité des pins landais et parfois d&apos;un
                bassin) pèse plus lourd dans le choix que le pays d&apos;origine du bois. C&apos;est pour cette raison
                que nous discutons du choix <strong className="text-primary font-semibold">devant votre terrain</strong>,
                pas au téléphone.
              </p>
            </section>

            {/* Qui ne grise pas */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Quel bois choisir pour une terrasse qui ne grise pas ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Aucun bois de terrasse ne reste éternellement couleur miel :{' '}
                <strong className="text-primary font-semibold">tous grisent</strong> sous l&apos;effet des UV et de la
                pluie, en deux ans environ. Ce grisaillement est une patine de surface argentée, purement esthétique :
                il n&apos;altère ni la solidité ni la durée de vie du bois.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Si vous voulez conserver la teinte chaude d&apos;origine, il faut{' '}
                <strong className="text-primary font-semibold">appliquer un saturateur</strong> et le renouveler
                régulièrement, en général tous les deux ans. Le saturateur nourrit le bois et le protège des UV, sans
                former de film qui s&apos;écaille comme une lasure.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                En clair : le choix « terrasse qui ne grise pas » est moins une question d&apos;essence que
                d&apos;entretien. Décidez d&apos;abord si vous préférez la patine grise naturelle (zéro entretien de
                teinte) ou la couleur d&apos;origine entretenue (un saturateur tous les deux ans).
              </p>
            </section>

            {/* Budget */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Quel budget prévoir pour une terrasse en bois ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le budget d&apos;une terrasse en bois se situe le plus souvent entre{' '}
                <strong className="text-primary font-semibold">120 et 170 €/m² pose comprise pour un bois résineux</strong>,
                et entre <strong className="text-primary font-semibold">200 et 280 €/m² pour un bois exotique</strong>,
                main-d&apos;œuvre incluse (marché 2025-2026). Toutes essences confondues, le prix moyen constaté
                avoisine 150 €/m² posé.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Trois postes font varier la note bien au-delà de l&apos;essence :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['La structure porteuse', 'plots réglables, lambourdes, platelage : le « dessous » pèse lourd sur le prix et la durée de vie.'],
                  ['La préparation du terrain', 'décaissement, drainage, mise à niveau, gestion de la pente.'],
                  ['Les finitions', 'emmarchements, jardinières, éclairage, garde-corps, raccord avec une pergola ou une piscine.'],
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
                Ces fourchettes sont des ordres de grandeur : le juste prix de <em>votre</em> terrasse dépend de son
                accès, de son support et de sa géométrie. Nous établissons un devis détaillé après avoir relevé les
                niveaux sur place : c&apos;est la seule manière de chiffrer honnêtement.
              </p>
            </section>

            {/* Pose */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Comment poser une terrasse en bois qui dure vraiment ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une terrasse dure grâce à ce qu&apos;on ne voit pas :{' '}
                <strong className="text-primary font-semibold">une terrasse réussie se pense d&apos;abord par-dessous.</strong>{' '}
                Sur nos chantiers, la longévité tient à quatre points que nous soignons avant même de choisir la teinte
                des lames :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Une structure ventilée, sur plots ou lambourdes, pour que le bois sèche entre deux pluies.',
                  'Une pente et une évacuation des eaux étudiées avant la pose, pour que l’eau ne stagne jamais.',
                  'Le sens des lames et un espacement régulier, calés sur la circulation et l’écoulement.',
                  'Des fixations soignées (invisibles ou vissées inox) qui ne remontent pas et ne fendent pas le bois.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est ce qui explique qu&apos;une même essence puisse durer quinze ans chez l&apos;un et se
                dégrader en cinq ans chez l&apos;autre : la pose fait la différence autant que le bois. Une terrasse
                bien conçue appelle souvent d&apos;autres ouvrages du même chantier (une{' '}
                <a href="/pergolas" className={lienInterne}>pergola</a> pour l&apos;ombre, l&apos;habillage des{' '}
                <a href="/amenagement-exterieur" className={lienInterne}>abords d&apos;un bassin</a>) que nous menons
                avec un seul interlocuteur, de l&apos;étude à la pose.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Vous pouvez voir comment cela se traduit dans{' '}
                <a href="/realisations" className={lienInterne}>nos réalisations en Gironde</a>, et découvrir notre
                approche des{' '}
                <a href="/amenagement-exterieur#terrasses" className={lienInterne}>terrasses bois sur mesure</a>.
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
              Quel bois pour une terrasse extérieure ?
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
              Le bon bois, puis la bonne pose
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Il n&apos;existe pas de « meilleur bois » universel : il y a le bois juste pour votre terrain, votre
              exposition et votre budget, posé sur une structure ventilée et bien drainée. C&apos;est le diagnostic que
              nous menons chez L&apos;Esprit Bois, entreprise certifiée Qualibat, à Libourne et dans toute la Gironde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/amenagement-exterieur#terrasses"
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
