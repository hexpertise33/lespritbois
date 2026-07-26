import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/source-adefrance/aggrandissement-accueil.webp';

export const metadata: Metadata = buildMetadata({
  title: 'Abri de jardin bois : kit ou sur-mesure ? Comparatif honnête | L\'Esprit Bois',
  description:
    "Kit ou sur-mesure pour votre abri de jardin en bois ? Budget 2026, essence, durée de vie, réglementation et implantation : le comparatif honnête d'un artisan à Libourne, en Gironde.",
  keywords:
    "abri de jardin bois, abri de jardin sur mesure, abri de jardin en kit, abri de jardin bois Gironde, abri de jardin Libourne, prix abri de jardin bois 2026, kit abri jardin, abri jardin douglas",
  path: '/blog/abri-jardin-bois-kit-ou-sur-mesure',
  ogImage: COVER,
  ogTitle: 'Abri de jardin en bois : kit ou sur-mesure ? Le comparatif honnête',
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
        name: 'Abri de jardin bois : kit ou sur-mesure',
        item: 'https://lesprit-bois.fr/blog/abri-jardin-bois-kit-ou-sur-mesure',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Abri de jardin en bois : kit ou sur-mesure ? Le comparatif honnête',
    description:
      "Kit ou sur-mesure pour un abri de jardin en bois : budget 2026, essence et classes d'emploi, durée de vie, réglementation et implantation en Gironde. Le comparatif de décision d'un artisan à Libourne.",
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
    datePublished: '2026-07-26',
    dateModified: '2026-07-26',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/abri-jardin-bois-kit-ou-sur-mesure',
    },
    about: ['abri de jardin bois', 'abri de jardin sur mesure', 'abri de jardin en kit'],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Abri de jardin en kit ou sur-mesure : lequel choisir ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le kit gagne sur le prix et le délai : il convient pour un besoin de rangement simple, sur une petite surface, avec un budget serré. Le sur-mesure gagne sur la durée de vie et l'intégration : dimensions libres, essence choisie, ancrage soigné et raccord avec la maison ou le jardin. Le bon choix dépend de la surface visée, du budget et du temps que vous comptez garder l'abri.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quel est le prix d’un abri de jardin en bois en 2026 ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un abri en kit d'environ 4 m² démarre autour de 600 € en bois brut, hors dalle et hors pose. Un abri sur-mesure monté par un artisan coûte nettement plus : à titre d'exemple, un abri bois d'environ 15 m² posé peut avoisiner 5 600 € TTC, dalle, montage, déclaration préalable et taxe comprises. Un modèle composite de 20 m² dépasse souvent 8 000 €. Ce sont des ordres de grandeur : seul un devis sur place chiffre honnêtement.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quelle essence de bois pour un abri de jardin qui dure ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Il faut une essence adaptée à la classe d'emploi 3 pour le bardage et la charpente exposés, et classe 4 pour tout ce qui touche le sol. Le douglas offre un très bon rapport durabilité-prix en bois local, le pin traité autoclave classe 4 sécurise les parties basses, le red cedar est haut de gamme mais plus cher. Sur les kits d'entrée de gamme, l'épicéa non traité impose un entretien vigilant sous peine de durée de vie limitée.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faut-il une autorisation pour installer un abri de jardin ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "En principe, en dessous de 5 m² d'emprise au sol aucune formalité n'est due, entre 5 et 20 m² une déclaration préalable de travaux est requise, et au-delà de 20 m² un permis de construire. Le PLU de votre commune peut durcir ces règles, et une taxe d'aménagement au taux communal (souvent 1 à 5 %) s'applique dès la déclaration préalable. Nous vérifions ces formalités avant d'engager le projet.",
        },
      },
      {
        '@type': 'Question',
        name: 'Combien de temps dure un abri de jardin en bois ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Tout dépend de l'essence, du montage et de l'entretien. Un kit d'entrée de gamme mal posé sur un sol humide peut fatiguer en quelques années, tandis qu'un abri en douglas ou en pin classe 4, posé sur une dalle drainée et entretenu, tient facilement quinze à vingt ans. L'ancrage au sol et la ventilation comptent autant que l'essence.",
        },
      },
      {
        '@type': 'Question',
        name: 'À quelle fréquence entretenir un abri de jardin en bois ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Pour conserver la teinte, on applique un saturateur environ une fois par an les deux à trois premières années, puis tous les deux à trois ans selon l'exposition. On peut aussi laisser le bois griser naturellement sans perte de solidité. L'essentiel est de dégager la toiture des feuilles et de vérifier que l'eau ne stagne jamais au pied des parois.",
        },
      },
    ],
  },
];

const comparatif = [
  ['Prix', 'Le plus bas (dès ~600 € un kit 4 m² brut)', 'Plus élevé (dalle + montage + essence choisie)'],
  ['Délai', 'Immédiat en magasin, montage week-end', 'Étude, fabrication et pose sur plusieurs semaines'],
  ['Dimensions', 'Tailles standard imposées', 'Libres, adaptées au terrain et au besoin'],
  ['Essence', 'Souvent épicéa ou pin standard', 'Douglas, pin classe 4, red cedar au choix'],
  ['Durée de vie', 'Limitée si entrée de gamme et mal posé', 'Longue si ancrage et ventilation soignés'],
  ['Intégration', 'Objet posé, peu raccordé au bâti', 'Accordé à la maison, au bardage, au jardin'],
];

const faq = [
  {
    q: 'Abri de jardin en kit ou sur-mesure : lequel choisir ?',
    r: (
      <>
        Le kit gagne sur le prix et le délai : il convient pour un besoin de rangement simple, sur une petite surface,
        avec un budget serré. Le sur-mesure gagne sur la durée de vie et l&apos;intégration : dimensions libres, essence
        choisie, ancrage soigné et raccord avec la maison ou le jardin. Le bon choix dépend de la surface visée, du
        budget et du temps que vous comptez garder l&apos;abri.
      </>
    ),
  },
  {
    q: 'Quel est le prix d’un abri de jardin en bois en 2026 ?',
    r: (
      <>
        Un abri en kit d&apos;environ 4 m² démarre autour de 600 € en bois brut, hors dalle et hors pose. Un abri
        sur-mesure monté par un artisan coûte nettement plus : à titre d&apos;exemple, un abri bois d&apos;environ 15 m²
        posé peut avoisiner 5 600 € TTC, dalle, montage, déclaration préalable et taxe comprises. Un modèle composite de
        20 m² dépasse souvent 8 000 €. Ce sont des ordres de grandeur : seul un devis sur place chiffre honnêtement.
      </>
    ),
  },
  {
    q: 'Quelle essence de bois pour un abri de jardin qui dure ?',
    r: (
      <>
        Il faut une essence adaptée à la classe d&apos;emploi 3 pour le bardage et la charpente exposés, et classe 4 pour
        tout ce qui touche le sol. Le douglas offre un très bon rapport durabilité-prix en bois local, le pin traité
        autoclave classe 4 sécurise les parties basses, le red cedar est haut de gamme mais plus cher. Sur les kits
        d&apos;entrée de gamme, l&apos;épicéa non traité impose un entretien vigilant sous peine de durée de vie limitée.
      </>
    ),
  },
  {
    q: 'Faut-il une autorisation pour installer un abri de jardin ?',
    r: (
      <>
        En principe, en dessous de 5 m² d&apos;emprise au sol aucune formalité n&apos;est due, entre 5 et 20 m² une
        déclaration préalable de travaux est requise, et au-delà de 20 m² un permis de construire. Le PLU de votre
        commune peut durcir ces règles, et une taxe d&apos;aménagement au taux communal (souvent 1 à 5 %) s&apos;applique
        dès la déclaration préalable. Nous vérifions ces formalités avant d&apos;engager le projet.
      </>
    ),
  },
  {
    q: 'Combien de temps dure un abri de jardin en bois ?',
    r: (
      <>
        Tout dépend de l&apos;essence, du montage et de l&apos;entretien. Un kit d&apos;entrée de gamme mal posé sur un
        sol humide peut fatiguer en quelques années, tandis qu&apos;un abri en douglas ou en pin classe 4, posé sur une
        dalle drainée et entretenu, tient facilement quinze à vingt ans. L&apos;ancrage au sol et la ventilation comptent
        autant que l&apos;essence.
      </>
    ),
  },
  {
    q: 'À quelle fréquence entretenir un abri de jardin en bois ?',
    r: (
      <>
        Pour conserver la teinte, on applique un saturateur environ une fois par an les deux à trois premières années,
        puis tous les deux à trois ans selon l&apos;exposition. On peut aussi laisser le bois griser naturellement sans
        perte de solidité. L&apos;essentiel est de dégager la toiture des feuilles et de vérifier que l&apos;eau ne
        stagne jamais au pied des parois.
      </>
    ),
  },
];

export default function ArticleAbriJardinBoisPage() {
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
              alt="Abri de jardin en bois sur mesure, bardage douglas et toiture tuiles, dans un jardin en Gironde"
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
              <span className="text-secondary-fixed">Abri de jardin : kit ou sur-mesure</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Abris de jardin
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Abri de jardin en bois : kit ou sur-mesure ? Le comparatif honnête
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/70 font-label-md text-label-md">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">person</span>
                David Bertrand, L&apos;Esprit Bois
              </span>
              <span className="text-secondary">·</span>
              <span>26 juillet 2026</span>
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
                Le kit gagne sur le prix et le délai, le sur-mesure sur la durabilité et l&apos;intégration.
              </strong>{' '}
              Si vous cherchez un rangement simple, sur une petite surface, à installer vite et sans vous ruiner, un abri
              en kit fait le travail. Si vous voulez un abri aux dimensions libres, dans une essence choisie, ancré pour
              durer et raccordé proprement à votre maison ou à votre jardin, le sur-mesure fabriqué par un artisan prend
              l&apos;avantage. À la rentrée, quand les projets de rangement extérieur repartent avant l&apos;automne, la
              vraie question n&apos;est pas « lequel est le meilleur » mais « lequel correspond à votre besoin, votre
              budget et la durée pendant laquelle vous comptez le garder ». Voici comment trancher, en toute honnêteté,
              depuis nos chantiers en Gironde.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. La réponse en une minute */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Kit ou sur-mesure : la réponse en une minute
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Pour aller vite : le kit est un produit standard, vendu en éléments à assembler soi-même, imbattable sur
                le prix d&apos;entrée et le délai, mais contraint par des dimensions figées, une essence et une
                quincaillerie standard, et une durée de vie qui dépend beaucoup de la qualité du modèle et du montage. Le
                sur-mesure est un ouvrage conçu et posé par un artisan : dimensions libres, essence choisie selon la
                classe d&apos;emploi, ancrage et ventilation soignés, intégration au bâti — pour un budget nettement plus
                élevé.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Le tableau ci-dessous résume les grands arbitrages. Gardez en tête qu&apos;un bon kit bien posé peut
                très bien vieillir, et qu&apos;un « sur-mesure » bâclé peut décevoir : ce qui compte, ce sont les
                détails, pas l&apos;étiquette.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Critère</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Abri en kit</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Abri sur-mesure</th>
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <Figure
              src="/images/blog/abri-jardin-bois-kit-ou-sur-mesure/abri-jardin-bois-ancien-rangement-jardin.jpg"
              alt="Vieil abri de jardin en bois entouré de bacs et caisses de rangement dans un jardin arboré"
              caption="À la rentrée, le rangement extérieur déborde souvent d'un vieil abri : c'est le moment où repartent les projets d'abri de jardin, avant l'automne."
            />

            {/* 2. L'abri en kit */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                L&apos;abri en kit : pour qui, à quel prix, quelles limites
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                L&apos;abri en kit, c&apos;est la solution la plus rapide et la moins chère pour un besoin simple : ranger
                une tondeuse, des outils, du mobilier de jardin ou des vélos. On trouve des{' '}
                <strong className="text-primary font-semibold">kits bois d&apos;environ 4 m² à partir de 600 €</strong> en
                grande surface de bricolage, en bois brut, hors dalle et hors pose. Le montage se fait en un week-end à
                deux, avec un outillage courant. Pour un usage occasionnel et un budget serré, c&apos;est un choix
                parfaitement défendable — nous ne dirons jamais le contraire.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ses limites, elles, tiennent à sa nature de produit standardisé. Les dimensions sont figées : on prend la
                taille la plus proche du besoin, jamais la bonne. L&apos;essence est le plus souvent de{' '}
                <strong className="text-primary font-semibold">l&apos;épicéa ou du pin standard</strong>, parfois non
                traité ou en faible épaisseur, avec une quincaillerie et une couverture d&apos;entrée de gamme. Enfin,
                beaucoup de kits sont posés à même le sol, sans dalle ni ventilation, ce qui condamne le bas des parois à
                l&apos;humidité. Résultat : une durée de vie qui peut se limiter à quelques années si le modèle est bas
                de gamme et l&apos;implantation négligée.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Notre conseil, si vous partez sur un kit : montez d&apos;une gamme sur l&apos;épaisseur des madriers,
                posez-le impérativement sur une dalle ou des plots drainés, et appliquez un traitement dès la première
                année. C&apos;est ce qui sépare un kit qui dure d&apos;un kit qui se déforme.
              </p>
            </section>

            {/* 3. L'abri sur-mesure */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                L&apos;abri sur-mesure : ce que l&apos;artisan change (essence, dimensions, intégration)
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Faire fabriquer un abri sur-mesure, ce n&apos;est pas payer plus cher le même objet : c&apos;est changer
                de logique. On part de <strong className="text-primary font-semibold">votre besoin réel</strong> — la
                surface juste, la hauteur sous toiture utile, l&apos;emplacement de la porte, une avancée pour ranger le
                bois — et de <strong className="text-primary font-semibold">votre terrain</strong>. Rien n&apos;est
                imposé par un catalogue.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Trois différences pèsent lourd sur la durée. D&apos;abord l&apos;<strong className="text-primary font-semibold">essence</strong>,
                choisie selon la classe d&apos;emploi et non selon un prix d&apos;appel. Ensuite l&apos;
                <strong className="text-primary font-semibold">ancrage et la ventilation</strong> : poteaux et lambourdes
                désolidarisés du sol par des pieds métalliques, dalle ou plots drainés, lame d&apos;air derrière le
                bardage — les détails qui font qu&apos;un abri traverse les hivers girondins sans pourrir par le bas.
                Enfin l&apos;<strong className="text-primary font-semibold">intégration</strong> : teinte et bardage
                accordés à la maison, toiture cohérente, raccord avec une terrasse, un carport ou une clôture existante.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                C&apos;est exactement l&apos;approche de nos ouvrages d&apos;
                <a href="/amenagement-exterieur" className={lienInterne}>aménagement extérieur</a> et de nos{' '}
                <a href="/constructions-bois" className={lienInterne}>constructions bois</a> : un abri pensé comme une
                pièce du jardin, pas comme une boîte posée dans un coin. Le sur-mesure prend tout son sens dès que la
                surface grimpe, que l&apos;abri se voit depuis la maison, ou qu&apos;il doit durer quinze à vingt ans.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/IMG-20240712-WA0039-opt.webp"
              alt="Bardage bois douglas raccordé à la maison existante avec grande baie vitrée, chantier L'Esprit Bois en Gironde"
              caption="Sur-mesure : bardage douglas et teinte accordés au bâti existant — l'ouvrage se raccorde à la maison au lieu d'y être simplement posé."
            />

            {/* 4. Quelle essence */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Quelle essence pour durer ? Douglas, pin classe 4, red cedar et classes d&apos;emploi
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le mot-clé pour un abri qui dure, c&apos;est la{' '}
                <strong className="text-primary font-semibold">classe d&apos;emploi</strong>. Elle décrit l&apos;exposition
                du bois à l&apos;humidité : la <strong className="text-primary font-semibold">classe 3</strong> pour ce
                qui est exposé aux intempéries sans contact permanent avec l&apos;eau (bardage, charpente sous
                débord), la <strong className="text-primary font-semibold">classe 4</strong> pour tout ce qui touche le
                sol ou reste humide (lambourdes basses, poteaux au sol). Un abri bien conçu combine les deux au bon
                endroit.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le douglas', 'résineux local, naturellement durable en classe 3, très bon rapport durabilité-prix ; le choix par défaut de nos abris pour le bardage et la structure sous abri.'],
                  ['Le pin traité autoclave classe 4', 'solution économique et fiable pour les parties basses et tout ce qui approche le sol, là où la durabilité naturelle ne suffit pas.'],
                  ['Le red cedar', 'haut de gamme, léger, très stable et esthétique, avec une belle durabilité ; plus cher, on le réserve aux projets où le rendu prime.'],
                  ['L’épicéa non traité', 'fréquent sur les kits d’entrée de gamme : peu durable en extérieur, il impose un entretien vigilant sous peine de durée de vie limitée.'],
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
                La logique est la même que pour une terrasse : on choisit l&apos;essence selon l&apos;exposition, pas
                selon la seule étiquette de prix. Notre article sur{' '}
                <a href="/blog/quel-bois-pour-terrasse-exterieure" className={lienInterne}>
                  le choix du bois pour une terrasse
                </a>{' '}
                détaille ces essences et leurs classes d&apos;emploi avec leurs fourchettes de prix.
              </p>
            </section>

            {/* 5. Budget 2026 comparé */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Budget 2026 comparé : du kit 4 m² au sur-mesure monté
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Comparons ce qui est comparable, car un prix de kit affiché n&apos;inclut ni la dalle, ni la pose, ni les
                formalités. Voici des ordres de grandeur 2026, à prendre comme des repères, pas comme des devis :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Kit bois ~4 m² (brut)', 'à partir d’environ 600 €, hors dalle et hors montage : vous fournissez le support et la main-d’œuvre.'],
                  ['Sur-mesure ~15 m² posé', 'de l’ordre de 5 600 € TTC dans un cas typique, dalle, montage, déclaration préalable et taxe d’aménagement comprises.'],
                  ['Abri ~20 m² composite ou finitions poussées', 'souvent au-delà de 8 000 €, selon la couverture, le bardage et les aménagements intérieurs.'],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                L&apos;écart de prix est réel, et il serait malhonnête de le minimiser. Mais rapporté à la durée de vie
                et à l&apos;usage, le raisonnement change : un kit changé deux fois en quinze ans, mal implanté, finit par
                coûter cher et décevoir, tandis qu&apos;un abri sur-mesure bien ancré s&apos;amortit sur sa longévité et
                valorise le jardin. <strong className="text-primary font-semibold">Ça dépend</strong> vraiment de votre
                horizon : quelques années de rangement d&apos;appoint, ou un ouvrage qui reste.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ces fourchettes sont des repères de marché : le juste prix de <em>votre</em> abri dépend de sa surface,
                de son support et des finitions. Seul un devis établi sur place, après relevé du terrain, nous engage.
              </p>
            </section>

            <Figure
              src="/images/blog/abri-jardin-bois-kit-ou-sur-mesure/interieur-abri-jardin-bois-rangement-outils.jpg"
              alt="Intérieur d'un abri de jardin en bois avec parois lambrissées et étagère de rangement au-dessus d'un escabeau"
              caption="Parois lambrissées et étagères hautes : dans un abri bois, le volume utile et le rangement se pensent dès la conception."
            />

            {/* 6. Réglementation express */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Réglementation express : seuils de surface, taxe d&apos;aménagement, distances
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un abri de jardin crée de l&apos;emprise au sol : il relève donc de l&apos;urbanisme. Les grands repères
                nationaux, sous réserve du PLU de votre commune :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Moins de 5 m²', 'en principe aucune formalité, sauf secteur protégé ou règle locale spécifique.'],
                  ['De 5 à 20 m²', 'déclaration préalable de travaux, avec un délai d’instruction d’environ 1 mois.'],
                  ['Au-delà de 20 m²', 'permis de construire, avec une instruction plus longue.'],
                  ['Taxe d’aménagement', 'due dès la déclaration préalable, calculée sur la surface et le taux communal (souvent 1 à 5 %).'],
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
                À cela s&apos;ajoutent les distances aux limites de propriété, fixées par le PLU ou, à défaut, par le Code
                civil. Ces règles varient d&apos;une commune girondine à l&apos;autre : nous vérifions le PLU et montons
                le dossier avant d&apos;engager le projet. Pour le détail des seuils et du CERFA, voyez notre guide
                dédié :{' '}
                <a href="/blog/autorisation-urbanisme-abri-carport-pergola-2026" className={lienInterne}>
                  abri de jardin, carport, pergola : quelle autorisation d&apos;urbanisme en 2026
                </a>
                .
              </p>
            </section>

            {/* 7. Bien l'implanter */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Bien l&apos;implanter dans un jardin en Gironde (sol, orientation, humidité)
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                En Gironde, l&apos;implantation fait souvent plus pour la durée de vie que le prix d&apos;achat. Nos sols
                argileux gonflent et se rétractent, les hivers sont humides, et un abri posé à même la terre pompe
                l&apos;eau par capillarité. Quatre points guident nos poses :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Poser sur une dalle ou des plots drainés, jamais directement sur la terre, pour couper l’humidité du sol.',
                  'Désolidariser le bois du support par des pieds métalliques et ménager une lame d’air derrière le bardage.',
                  'Orienter la porte à l’abri des vents dominants et éviter les cuvettes où l’eau stagne après la pluie.',
                  'Dégager les abords : éloigner la végétation qui garde l’humidité et prévoir l’écoulement de l’eau de toiture.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Côté entretien, comptez un saturateur environ une fois par an les deux à trois premières années, puis tous
                les deux à trois ans selon l&apos;exposition — ou laissez le bois griser sans crainte pour la solidité.
                Vous verrez comment tout cela se traduit sur le terrain dans{' '}
                <a href="/realisations" className={lienInterne}>nos réalisations en Gironde</a>. Les mêmes principes
                d&apos;ancrage et de ventilation valent d&apos;ailleurs pour un abri voiture : notre{' '}
                <a href="/blog/carport-bois-guide" className={lienInterne}>guide du carport bois</a> les détaille.
              </p>
            </section>

            {/* 8. Notre façon de faire */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Notre façon de faire à Libourne
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Chez L&apos;Esprit Bois, à Libourne et dans toute la Gironde, nous ne cherchons pas à vous vendre du
                sur-mesure à tout prix : si un kit bien posé couvre votre besoin, nous vous le dirons. Notre valeur
                ajoutée commence dès que la surface, la durée de vie ou l&apos;intégration au jardin comptent vraiment.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Concrètement : nous venons voir le terrain, nous relevons les niveaux et l&apos;exposition, nous
                conseillons l&apos;essence selon la classe d&apos;emploi, nous vérifions le PLU et montons le dossier de
                déclaration préalable, puis nous fabriquons et posons un abri ancré pour durer. Un seul interlocuteur, de
                l&apos;étude à la clé en main.
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
              Abri de jardin en bois : vos questions
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
              Un abri de jardin pensé pour durer, en Gironde
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Kit ou sur-mesure, il n&apos;y a pas de mauvaise réponse dans l&apos;absolu : il y a l&apos;abri juste pour
              votre besoin, votre budget et la durée pendant laquelle vous comptez le garder. Dès que la surface, la
              longévité ou l&apos;intégration au jardin comptent, le sur-mesure fait la différence. C&apos;est le
              diagnostic que nous menons chez L&apos;Esprit Bois, entreprise certifiée Qualibat, à Libourne et dans toute
              la Gironde, formalités d&apos;urbanisme comprises.
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
