import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import ContactForm from '@/components/ContactForm';
import { CONTACT, GOOGLE, SAME_AS } from '@/lib/data/navigation';

export const metadata: Metadata = buildMetadata({
  title: 'Contact — charpentier à Libourne (33)',
  description:
    "Contactez L'Esprit Bois : 05 57 40 65 80, 1 Aux Pradasses aux Billaux, à 5 min de Libourne. Étude et devis gratuits en Gironde.",
  keywords:
    "contact L'Esprit Bois, charpentier Libourne contact, devis pergola Gironde, devis carport Libourne, artisan bois Les Billaux",
  path: '/contact',
  ogImage: '/images/realisations/pergola-aluminium-terrasse-bois-libourne-1.webp',
  ogTitle: "Contacter L'Esprit Bois — Libourne et Gironde",
  ville: 'Les Billaux',
});

const jsonld = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://lesprit-bois.fr/' },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://lesprit-bois.fr/contact' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: "Contacter L'Esprit Bois",
    description:
      "Coordonnées, horaires, adresse de l'atelier et formulaire de demande d'étude gratuite de L'Esprit Bois, charpentier et constructeur bois aux Billaux, près de Libourne.",
    url: 'https://lesprit-bois.fr/contact',
    mainEntity: {
      '@type': 'GeneralContractor',
      name: "L'Esprit Bois",
      url: 'https://lesprit-bois.fr/',
      telephone: CONTACT.telE164,
      email: CONTACT.email,
      sameAs: SAME_AS,
      priceRange: '€€',
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
      geo: { '@type': 'GeoCoordinates', latitude: 44.9517, longitude: -0.2372 },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      areaServed: [
        { '@type': 'City', name: 'Libourne' },
        { '@type': 'AdministrativeArea', name: 'Gironde' },
        { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: CONTACT.telE164,
        email: CONTACT.email,
        contactType: 'customer service',
        areaServed: 'FR',
        availableLanguage: 'French',
      },
    },
  },
];

const COMMUNES = [
  'Libourne',
  'Les Billaux',
  'Saint-Émilion',
  'Coutras',
  'Fronsac',
  'Vayres',
  'Izon',
  'Saint-Denis-de-Pile',
  'Castillon-la-Bataille',
  'Guîtres',
  'Branne',
  'Bordeaux',
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="contact" />
      <main id="contenu">
        {/* Hero */}
        <header className="relative pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="1600"
              height="900"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src="/images/realisations/pergola-aluminium-terrasse-bois-libourne-1.webp"
              alt="Pergola aluminium et terrasse bois réalisées par L'Esprit Bois près de Libourne"
            />
            <div className="absolute inset-0 hero-interne"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-16">
            <p className="font-label-md text-label-md text-white/60 mb-6">
              <a href="/" className="hover:text-secondary-fixed transition-colors">
                Accueil
              </a>
              <span className="mx-2 text-secondary">/</span>
              <span className="text-secondary-fixed">Contact</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Parlons de votre projet
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Contacter L&apos;Esprit Bois
            </h1>
            <p className="font-body-lg text-body-lg text-white/85 max-w-2xl mb-8">
              Notre atelier est aux Billaux, à cinq minutes de Libourne. Appelez-nous, écrivez-nous, ou passez nous
              voir : nous répondons nous-mêmes, il n&apos;y a pas de standard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={CONTACT.telHref}
                className="bg-secondary text-primary px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-secondary-fixed transition-all active:scale-95 shimmer-effect text-center inline-flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                {CONTACT.telAffiche}
              </a>
              <a
                href="#formulaire"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-white/20 transition-all text-center"
              >
                Demander mon étude gratuite
              </a>
            </div>
          </div>
        </header>

        {/* Coordonnées */}
        <section className="py-20 md:py-24 bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <article className="bg-surface-container-low rounded-2xl p-8 border border-surface-variant">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">phone_in_talk</span>
                <h2 className="font-headline-sm text-headline-sm text-primary mb-3">Téléphone</h2>
                <a
                  href={CONTACT.telHref}
                  className="text-secondary-dark font-label-md text-label-md text-[18px] hover:underline"
                >
                  {CONTACT.telAffiche}
                </a>
                <p className="text-on-surface-variant text-body-md mt-3">
                  Le plus direct. C&apos;est l&apos;équipe qui décroche.
                </p>
              </article>

              <article className="bg-surface-container-low rounded-2xl p-8 border border-surface-variant">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">mail</span>
                <h2 className="font-headline-sm text-headline-sm text-primary mb-3">E-mail</h2>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-secondary-dark font-label-md text-label-md break-all hover:underline"
                >
                  {CONTACT.email}
                </a>
                <p className="text-on-surface-variant text-body-md mt-3">
                  Joignez vos photos et vos plans, cela nous fait gagner un aller-retour.
                </p>
              </article>

              <article className="bg-surface-container-low rounded-2xl p-8 border border-surface-variant">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">location_on</span>
                <h2 className="font-headline-sm text-headline-sm text-primary mb-3">Atelier</h2>
                <address className="not-italic text-on-surface-variant text-body-md">
                  {CONTACT.rue}
                  <br />
                  {CONTACT.codePostal} {CONTACT.ville}
                </address>
                <a
                  href={GOOGLE.itineraire}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-secondary-dark font-label-md text-label-md hover:gap-2.5 transition-all"
                >
                  Itinéraire
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </article>

              <article className="bg-surface-container-low rounded-2xl p-8 border border-surface-variant">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">schedule</span>
                <h2 className="font-headline-sm text-headline-sm text-primary mb-3">Horaires</h2>
                <p className="text-on-surface-variant text-body-md">{CONTACT.horaires}</p>
                <p className="text-on-surface-variant text-body-md mt-3">
                  En dehors de ces heures, laissez un message : nous rappelons.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Formulaire */}
        <section className="py-20 md:py-24 bg-surface-container-low" id="formulaire">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-surface-variant">
              <div className="lg:w-2/5 bg-primary p-12 text-white flex flex-col justify-between">
                <div>
                  <h2 className="font-headline-md text-headline-md mb-6 leading-tight">
                    Une étude gratuite, sans engagement
                  </h2>
                  <p className="font-body-md text-body-md text-on-primary-container mb-8">
                    Décrivez-nous votre projet. Nous revenons vers vous sous 48h, et nous venons relever sur place
                    avant de chiffrer quoi que ce soit.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
                      <span className="text-on-primary-container text-body-md">
                        Relevé sur place gratuit, dans tout le Libournais
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
                      <span className="text-on-primary-container text-body-md">
                        Devis détaillé poste par poste, pas de forfait au mètre carré
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
                      <span className="text-on-primary-container text-body-md">
                        Dossier d&apos;urbanisme monté avec vous si nécessaire
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 pt-8 border-t border-white/15">
                  <p className="font-label-md text-label-md uppercase tracking-widest text-secondary mb-2">
                    Vous préférez appeler ?
                  </p>
                  <a
                    href={CONTACT.telHref}
                    className="font-headline-sm text-headline-sm text-white hover:text-secondary transition-colors"
                  >
                    {CONTACT.telAffiche}
                  </a>
                </div>
              </div>
              <div className="lg:w-3/5 p-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Fiche Google */}
        <section className="py-20 md:py-24 bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Nous trouver
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                L&apos;atelier, aux Billaux
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Nous sommes installés au{' '}
                <strong className="text-primary font-semibold">{CONTACT.adresseComplete}</strong>, à cinq minutes de
                Libourne. C&apos;est là que la charpente est taillée et que les structures sont préparées avant
                d&apos;être posées chez vous.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                Passer voir un ouvrage en cours de fabrication est souvent plus parlant qu&apos;un catalogue.
                Appelez avant de venir, nous sommes régulièrement sur chantier.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={GOOGLE.itineraire}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-7 py-4 rounded-xl font-label-md text-label-md hover:bg-primary/90 transition-all active:scale-95"
                >
                  <span className="material-symbols-outlined text-[18px]">directions</span>
                  Calculer mon itinéraire
                </a>
                <a
                  href={GOOGLE.fiche}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-primary/25 text-primary px-7 py-4 rounded-xl font-label-md text-label-md hover:bg-primary/5 transition-all"
                >
                  Voir notre fiche Google
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                </a>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-2xl p-8 border border-surface-variant">
              <h3 className="font-label-md text-label-md uppercase tracking-widest text-primary mb-6">
                Communes desservies
              </h3>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-on-surface-variant text-body-md">
                {COMMUNES.map((c) => (
                  <li key={c} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary-dark text-[18px]">location_on</span>
                    {c}
                  </li>
                ))}
              </ul>
              <p className="text-on-surface-variant text-body-md mt-6 italic">
                Cette liste n&apos;est pas limitative : nous intervenons dans toute la Gironde. En cas de doute sur
                votre commune, appelez-nous.
              </p>
            </div>
          </div>
        </section>

        {/* Garanties */}
        <section className="bg-primary text-white">
          <div className="max-w-container-max mx-auto px-6 md:px-16 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <span className="material-symbols-outlined text-secondary text-4xl mb-3 block">verified</span>
              <h2 className="font-headline-sm text-headline-sm text-secondary-fixed mb-2">Certifiés Qualibat</h2>
              <p className="text-on-primary-container text-body-md">La qualification de référence du bâtiment.</p>
            </div>
            <div>
              <span className="material-symbols-outlined text-secondary text-4xl mb-3 block">shield</span>
              <h2 className="font-headline-sm text-headline-sm text-secondary-fixed mb-2">Garantie décennale</h2>
              <p className="text-on-primary-container text-body-md">
                Chaque ouvrage couvert dix ans à compter de la réception.
              </p>
            </div>
            <div>
              <span className="material-symbols-outlined text-secondary text-4xl mb-3 block">handshake</span>
              <h2 className="font-headline-sm text-headline-sm text-secondary-fixed mb-2">Un seul interlocuteur</h2>
              <p className="text-on-primary-container text-body-md">
                De l&apos;étude à la pose, sans sous-traitance.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
