import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import { CONTACT, GOOGLE, SAME_AS } from '@/lib/data/navigation';

export const metadata: Metadata = buildMetadata({
  title: 'Qui sommes-nous — charpentiers à Libourne',
  description:
    "L'Esprit Bois : charpentiers et constructeurs bois aux Billaux, près de Libourne. Certifiés Qualibat, garantie décennale SMABTP, aucune sous-traitance.",
  keywords:
    "qui sommes-nous L'Esprit Bois, charpentier Libourne, constructeur bois Gironde, entreprise Qualibat Libourne, David Bertrand charpentier",
  path: '/qui-sommes-nous',
  ogImage: '/images/ossature-bois-isolation-fibre-gironde.webp',
  ogTitle: "L'Esprit Bois, charpentiers et constructeurs bois en Gironde",
  ville: 'Les Billaux',
});

const jsonld = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://lesprit-bois.fr/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Qui sommes-nous',
        item: 'https://lesprit-bois.fr/qui-sommes-nous',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: "Qui sommes-nous — L'Esprit Bois",
    url: 'https://lesprit-bois.fr/qui-sommes-nous',
    description:
      "Présentation de L'Esprit Bois, charpentiers et constructeurs bois installés aux Billaux, près de Libourne : métier, engagements, certifications et méthode de travail.",
    mainEntity: {
      '@type': 'GeneralContractor',
      '@id': 'https://lesprit-bois.fr/#entreprise',
      name: "L'Esprit Bois",
      legalName: 'AD FRANCE',
      url: 'https://lesprit-bois.fr/',
      telephone: CONTACT.telE164,
      email: CONTACT.email,
      sameAs: SAME_AS,
      vatID: 'FR47980264584',
      taxID: '980264584',
      knowsAbout: [
        'Charpente traditionnelle',
        'Construction à ossature bois',
        'Couverture',
        'Aménagement extérieur',
        'Pergolas',
        'Carports',
        'Terrasses bois',
        'Bardage bois',
      ],
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'Qualibat',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: CONTACT.rue,
        postalCode: CONTACT.codePostal,
        addressLocality: CONTACT.ville,
        addressRegion: CONTACT.region,
        addressCountry: 'FR',
      },
      areaServed: [
        { '@type': 'City', name: 'Libourne' },
        { '@type': 'AdministrativeArea', name: 'Gironde' },
        { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
      ],
      employee: {
        '@type': 'Person',
        name: 'David Bertrand',
        jobTitle: "Expert bâtiment et créateur d'espaces extérieurs",
        worksFor: { '@type': 'Organization', name: "L'Esprit Bois" },
      },
    },
  },
];

const ENGAGEMENTS = [
  {
    icone: 'verified',
    titre: 'Certifiés Qualibat',
    texte:
      "La qualification de référence du bâtiment. Elle s'obtient sur dossier — moyens techniques, références de chantiers, situation financière — et se renouvelle. Ce n'est pas un logo qu'on achète.",
  },
  {
    icone: 'shield',
    titre: 'Garantie décennale SMABTP',
    texte:
      "Responsabilité civile professionnelle et garantie décennale souscrites auprès de la SMABTP, pour la charpente, la construction bois, la couverture et l'aménagement extérieur. Chaque ouvrage est couvert dix ans à compter de la réception.",
  },
  {
    icone: 'handshake',
    titre: 'Aucune sous-traitance',
    texte:
      "Nous concevons, nous fabriquons en atelier et nous posons avec nos équipes. Vous avez un seul interlocuteur du premier croquis à la dernière vis, et personne à qui renvoyer la responsabilité.",
  },
];

const ETAPES = [
  {
    icone: 'straighten',
    titre: 'Le relevé avant le dessin',
    texte:
      "Nous venons mesurer, regarder l'orientation, la nature du sol, l'état de la façade et le réseau d'eaux pluviales. Ce que le terrain permet décide de ce qu'on dessine, jamais l'inverse.",
  },
  {
    icone: 'design_services',
    titre: 'Le dessin sur mesure',
    texte:
      "Aucun projet standard. Les dimensions, les essences et les sections sortent de votre lieu et de votre usage. Le devis est détaillé poste par poste — nous ne pratiquons pas le tarif au mètre carré.",
  },
  {
    icone: 'precision_manufacturing',
    titre: "La fabrication à l'atelier",
    texte:
      "La charpente est taillée et les structures assemblées aux Billaux, à l'abri. C'est là que se gagne la précision : un assemblage ajusté en atelier ne se rattrape pas sur le chantier.",
  },
  {
    icone: 'construction',
    titre: 'La pose par nos équipes',
    texte:
      "Fondations, levage, couverture, finitions. Les mêmes personnes qui ont relevé et dessiné sont sur le chantier, ce qui évite la déperdition d'information entre le bureau et le terrain.",
  },
];

export default function QuiSommesNousPage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="qui-sommes-nous" />
      <main id="contenu">
        {/* Hero */}
        <header className="relative pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="1200"
              height="900"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src="/images/ossature-bois-isolation-fibre-gironde.webp"
              alt="Intérieur d'une ossature bois en cours de chantier, murs isolés en fibre de bois et charpente apparente"
            />
            <div className="absolute inset-0 hero-interne"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-16">
            <p className="font-label-md text-label-md text-white/60 mb-6">
              <a href="/" className="hover:text-secondary-fixed transition-colors">
                Accueil
              </a>
              <span className="mx-2 text-secondary">/</span>
              <span className="text-secondary-fixed">Qui sommes-nous</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              L&apos;entreprise
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Charpentiers et constructeurs bois à Libourne
            </h1>
            <p className="font-body-lg text-body-lg text-white/85 max-w-2xl">
              Installés aux Billaux, à cinq minutes de Libourne. Nous ne sommes pas des revendeurs : nous dessinons,
              nous taillons, nous posons — et nous répondons de ce que nous posons.
            </p>
          </div>
        </header>

        {/* Le métier */}
        <section className="py-20 md:py-24 bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Notre métier
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                Le bois d&apos;abord, le reste ensuite
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                <strong className="text-primary font-semibold">
                  L&apos;Esprit Bois est une entreprise de charpente, de construction bois, de couverture et
                  d&apos;aménagement extérieur, basée aux Billaux (33500) et intervenant en Gironde et en
                  Nouvelle-Aquitaine.
                </strong>{' '}
                Ce sont les quatre activités pour lesquelles nous sommes assurés, et ce sont les seules que nous
                exerçons.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                La charpente est le métier d&apos;origine, et il irrigue tout le reste. Une pergola bois, un carport,
                une terrasse sur plots, une extension à ossature : ce sont les mêmes questions de descente de charge,
                de ventilation, d&apos;écoulement de l&apos;eau et de protection des pieds de poteaux. Un
                assemblage mal pensé se voit au bout de trois hivers, quelle que soit la taille de l&apos;ouvrage.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nous posons aussi des structures aluminium — pergolas bioclimatiques, carports, carports solaires —
                fabriquées sur mesure par notre partenaire français{' '}
                <a
                  href="https://www.lisudestemps.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
                >
                  Li-Su des Temps
                </a>
                . Nous le disons plutôt que de laisser croire que nous les fabriquons : la pose, l&apos;étude et la
                garantie de l&apos;ouvrage posé, elles, sont les nôtres.
              </p>
            </div>
          </div>
        </section>

        {/* Chiffres */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div>
              <p className="font-display-lg text-[56px] leading-none text-secondary">10</p>
              <p className="font-label-md text-label-md uppercase tracking-widest text-on-primary-container mt-4">
                ans d&apos;expérience du bois
              </p>
            </div>
            <div>
              <p className="font-display-lg text-[56px] leading-none text-secondary">100 %</p>
              <p className="font-label-md text-label-md uppercase tracking-widest text-on-primary-container mt-4">
                sur mesure
              </p>
            </div>
            <div>
              <p className="font-display-lg text-[56px] leading-none text-secondary">33</p>
              <p className="font-label-md text-label-md uppercase tracking-widest text-on-primary-container mt-4">
                Gironde &amp; alentours
              </p>
            </div>
            <div>
              <p className="font-display-lg text-[56px] leading-none text-secondary">0</p>
              <p className="font-label-md text-label-md uppercase tracking-widest text-on-primary-container mt-4">
                sous-traitance
              </p>
            </div>
          </div>
        </section>

        {/* Nos engagements */}
        <section className="py-20 md:py-24 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-12">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Nos engagements
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                Ce qui est vérifiable, et pas seulement affirmé
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Tout le monde dit faire du sur-mesure et du travail soigné. Voici ce qui, chez nous, repose sur un
                document opposable.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ENGAGEMENTS.map((e) => (
                <article
                  key={e.titre}
                  className="bg-white rounded-2xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500"
                >
                  <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">{e.icone}</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{e.titre}</h3>
                  <p className="text-on-surface-variant text-body-md">{e.texte}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Méthode */}
        <section className="py-20 md:py-24 bg-surface" id="methode">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-12">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Comment nous travaillons
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                Du relevé à la dernière vis
              </h2>
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ETAPES.map((e, i) => (
                <li
                  key={e.titre}
                  className="relative bg-surface-container-low rounded-2xl p-8 border border-surface-variant"
                >
                  <span className="absolute top-6 right-7 font-display-lg text-[44px] leading-none text-primary/[0.08]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">{e.icone}</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{e.titre}</h3>
                  <p className="text-on-surface-variant text-body-md">{e.texte}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* L'auteur des guides */}
        <section className="py-20 md:py-24 bg-surface-container-low" id="david-bertrand">
          <div className="max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Qui écrit sur ce site
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">David Bertrand</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Expert bâtiment et créateur d&apos;espaces extérieurs, il dirige L&apos;Esprit Bois et signe les
                guides techniques publiés sur ce site.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Ces guides ne sont pas des articles de remplissage. Ils répondent aux questions qui reviennent en
                rendez-vous : quel bois tient dehors en Gironde, quelle autorisation d&apos;urbanisme pour un abri,
                ce que coûte réellement une extension à ossature bois, pourquoi une terrasse se pense par dessous.
                Ce sont les réponses que nous donnons de vive voix, mises par écrit.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Quand un sujet dépend du PLU de votre commune ou de la nature de votre sol, les guides le disent
                plutôt que d&apos;avancer un chiffre universel qui serait faux chez la moitié des lecteurs.
              </p>
              <a
                href="/blog"
                className="mt-8 inline-flex items-center gap-2 border border-primary/25 text-primary px-7 py-4 rounded-xl font-label-md text-label-md hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                Lire les guides
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                width="1400"
                height="1050"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
                src="/images/source-adefrance/WhatsApp-Image-2024-08-13-a-15.28.15_3b74f9f0.webp"
                alt="Charpentier de L'Esprit Bois posant une ossature bois sur un chantier en Gironde"
              />
            </div>
          </div>
        </section>

        {/* L'entreprise */}
        <section className="py-20 md:py-24 bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                L&apos;entreprise
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                À qui vous confiez votre chantier
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                <strong className="text-primary font-semibold">L&apos;Esprit Bois</strong> est la marque commerciale
                de la société <strong className="text-primary font-semibold">AD FRANCE</strong>, SAS immatriculée au
                RCS de Libourne. L&apos;atelier et le siège sont au {CONTACT.adresseComplete}.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                Ces informations sont publiques et vérifiables : avant de signer un devis avec n&apos;importe quelle
                entreprise du bâtiment, vérifiez son numéro SIRET, son immatriculation et son attestation
                d&apos;assurance décennale en cours de validité. Nous les affichons pour que vous puissiez le faire.
              </p>
              <dl className="space-y-4 text-body-md">
                <div className="flex flex-wrap gap-x-3 border-b border-surface-variant pb-3">
                  <dt className="font-label-md text-label-md uppercase tracking-widest text-primary min-w-[150px]">
                    Raison sociale
                  </dt>
                  <dd className="text-on-surface-variant">AD FRANCE, SAS</dd>
                </div>
                <div className="flex flex-wrap gap-x-3 border-b border-surface-variant pb-3">
                  <dt className="font-label-md text-label-md uppercase tracking-widest text-primary min-w-[150px]">
                    SIRET
                  </dt>
                  <dd className="text-on-surface-variant">980 264 584 00015</dd>
                </div>
                <div className="flex flex-wrap gap-x-3 border-b border-surface-variant pb-3">
                  <dt className="font-label-md text-label-md uppercase tracking-widest text-primary min-w-[150px]">
                    RCS
                  </dt>
                  <dd className="text-on-surface-variant">Libourne 980 264 584</dd>
                </div>
                <div className="flex flex-wrap gap-x-3 border-b border-surface-variant pb-3">
                  <dt className="font-label-md text-label-md uppercase tracking-widest text-primary min-w-[150px]">
                    Assurance
                  </dt>
                  <dd className="text-on-surface-variant">
                    SMABTP — responsabilité civile professionnelle et garantie décennale
                  </dd>
                </div>
                <div className="flex flex-wrap gap-x-3">
                  <dt className="font-label-md text-label-md uppercase tracking-widest text-primary min-w-[150px]">
                    Qualification
                  </dt>
                  <dd className="text-on-surface-variant">Qualibat</dd>
                </div>
              </dl>
              <p className="text-on-surface-variant text-body-md mt-6">
                Le détail figure dans nos{' '}
                <a
                  href="/mentions-legales"
                  className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
                >
                  mentions légales
                </a>
                .
              </p>
            </div>

            <div className="bg-surface-container-low rounded-2xl p-8 border border-surface-variant">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Nous rencontrer</h3>
              <p className="text-on-surface-variant text-body-md mb-6">
                L&apos;atelier est aux Billaux. Voir un ouvrage en cours de fabrication est souvent plus parlant
                qu&apos;un catalogue — appelez avant de venir, nous sommes régulièrement sur chantier.
              </p>
              <div className="space-y-4 mb-8">
                <a
                  href={CONTACT.telHref}
                  className="flex items-center gap-3 text-primary hover:text-secondary-dark transition-colors"
                >
                  <span className="material-symbols-outlined text-secondary-dark">phone_in_talk</span>
                  <span className="font-label-md text-label-md">{CONTACT.telAffiche}</span>
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 text-primary hover:text-secondary-dark transition-colors break-all"
                >
                  <span className="material-symbols-outlined text-secondary-dark shrink-0">mail</span>
                  <span className="font-label-md text-label-md">{CONTACT.email}</span>
                </a>
                <p className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary-dark">location_on</span>
                  <span>{CONTACT.adresseComplete}</span>
                </p>
                <p className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary-dark">schedule</span>
                  <span>{CONTACT.horaires}</span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="flex-1 text-center bg-primary text-white px-6 py-4 rounded-xl font-label-md text-label-md hover:bg-primary/90 transition-all active:scale-95"
                >
                  Nous contacter
                </a>
                <a
                  href={GOOGLE.fiche}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center inline-flex items-center justify-center gap-2 border border-primary/25 text-primary px-6 py-4 rounded-xl font-label-md text-label-md hover:bg-primary/5 transition-all"
                >
                  Fiche Google
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-section-padding bg-primary text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">Parlons-en</span>
            <h2 className="font-headline-md text-headline-md mt-4 mb-6">Un projet en tête ?</h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Le relevé sur place est gratuit et sans engagement. Nous revenons vers vous sous 48h avec une première
              estimation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-secondary text-primary px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-secondary-fixed transition-all active:scale-95 shimmer-effect"
              >
                Demander mon étude gratuite
              </a>
              <a
                href={CONTACT.telHref}
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-white/20 transition-all"
              >
                {CONTACT.telAffiche}
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
