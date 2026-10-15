import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import ContactForm from '@/components/ContactForm';
import { AGENCE_LA_TESTE, CONTACT } from '@/lib/data/navigation';
import { getZone } from '@/lib/data/zones';

/* Page de l'agence du Bassin, publiée avant son ouverture de janvier 2027 pour
   laisser à Google le temps de l'explorer. Elle annonce un lieu, elle ne le
   déclare pas : aucun établissement dans le JSON-LD tant que le bureau n'est
   pas ouvert (voir docs/bascule-agence-la-teste.md). */

const bassin = getZone('bassin-arcachon')!;

export const metadata: Metadata = buildMetadata({
  title: 'Agence La Teste-de-Buch : pergola, terrasse, bois',
  description:
    "L'Esprit Bois intervient déjà sur le Bassin d'Arcachon et ouvre une agence à La Teste-de-Buch en janvier 2027. Rendez-vous, relevé et devis gratuits.",
  keywords:
    "agence L'Esprit Bois La Teste-de-Buch, charpentier La Teste-de-Buch, pergola La Teste-de-Buch, terrasse bois La Teste-de-Buch, artisan bois Bassin d'Arcachon",
  path: AGENCE_LA_TESTE.slug,
  ogImage: bassin.cover,
  ogTitle: "L'Esprit Bois ouvre une agence à La Teste-de-Buch",
  ville: 'La Teste-de-Buch',
});

const jsonld = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://lesprit-bois.fr/' },
    {
      '@type': 'ListItem',
      position: 2,
      name: "Bassin d'Arcachon",
      item: 'https://lesprit-bois.fr/bassin-arcachon',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Agence La Teste-de-Buch',
      item: `https://lesprit-bois.fr${AGENCE_LA_TESTE.slug}`,
    },
  ],
};

const carte = 'bg-surface-container-low rounded-2xl p-8 border border-surface-variant';
const puce = 'flex items-start gap-3';
const iconePuce = 'material-symbols-outlined text-secondary-dark text-[20px] mt-0.5';

export default function AgenceLaTestePage() {
  return (
    <>
      <JsonLd data={[jsonld]} />
      <SiteNav />
      <main id="contenu">
        {/* Hero */}
        <header className="relative pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width={bassin.coverW}
              height={bassin.coverH}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={bassin.cover}
              alt={bassin.coverAlt}
            />
            <div className="absolute inset-0 hero-interne"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-16">
            <p className="font-label-md text-label-md text-white/60 mb-6">
              <a href="/" className="hover:text-secondary-fixed transition-colors">
                Accueil
              </a>
              <span className="mx-2 text-secondary">/</span>
              <a href="/bassin-arcachon" className="hover:text-secondary-fixed transition-colors">
                Bassin d&apos;Arcachon
              </a>
              <span className="mx-2 text-secondary">/</span>
              <span className="text-secondary-fixed">Agence La Teste-de-Buch</span>
            </p>
            <span className="inline-block bg-secondary text-primary px-4 py-2 rounded-full font-label-md text-label-md uppercase tracking-widest">
              Ouverture {AGENCE_LA_TESTE.ouverture}
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-6 mb-6 max-w-4xl">
              Notre agence à La Teste-de-Buch
            </h1>
            <p className="font-body-lg text-body-lg text-white/85 max-w-2xl mb-8">
              Nous travaillons déjà sur le Bassin d&apos;Arcachon : rendez-vous, relevés et chantiers. En{' '}
              {AGENCE_LA_TESTE.ouverture}, nous nous y installons, au {AGENCE_LA_TESTE.adresseComplete}, pour
              être à quelques minutes de chez vous plutôt qu&apos;à une heure de route.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={CONTACT.telHref}
                className="bg-secondary text-primary px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-secondary-fixed transition-all active:scale-95 shimmer-effect text-center inline-flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">phone_in_talk</span>
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

        {/* Aujourd'hui / à l'ouverture */}
        <section className="py-20 md:py-24 bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-12">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-6">
                Déjà sur le Bassin, bientôt sur place
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                L&apos;agence ne marque pas notre arrivée sur le Bassin : elle rapproche une activité qui existe
                déjà. Vous n&apos;avez pas besoin d&apos;attendre janvier pour nous confier votre projet. Exemple
                récent :{' '}
                <a href="/realisations" className="text-secondary-dark font-semibold hover:underline">
                  un étage en ossature bois ajouté à une maison du Pyla-sur-Mer
                </a>
                .
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className={carte}>
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4" aria-hidden="true">
                  check_circle
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Dès aujourd&apos;hui</h3>
                <ul className="space-y-3 text-on-surface-variant text-body-md">
                  <li className={puce}>
                    <span className={iconePuce} aria-hidden="true">arrow_forward</span>
                    Rendez-vous chez vous, partout sur le Bassin, pour parler du projet sur place.
                  </li>
                  <li className={puce}>
                    <span className={iconePuce} aria-hidden="true">arrow_forward</span>
                    Relevé et devis gratuits, déplacement compris.
                  </li>
                  <li className={puce}>
                    <span className={iconePuce} aria-hidden="true">arrow_forward</span>
                    Chantiers de pergola, de terrasse bois et d&apos;ossature bois, menés par nos équipes, sans
                    sous-traitance.
                  </li>
                </ul>
              </article>
              <article className={carte}>
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4" aria-hidden="true">
                  handshake
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">
                  À l&apos;ouverture, en {AGENCE_LA_TESTE.ouverture}
                </h3>
                <ul className="space-y-3 text-on-surface-variant text-body-md">
                  <li className={puce}>
                    <span className={iconePuce} aria-hidden="true">arrow_forward</span>
                    Un bureau à La Teste-de-Buch et des interlocuteurs installés sur le Bassin.
                  </li>
                  <li className={puce}>
                    <span className={iconePuce} aria-hidden="true">arrow_forward</span>
                    Des rendez-vous plus faciles à caler et un suivi de chantier au plus près.
                  </li>
                  <li className={puce}>
                    <span className={iconePuce} aria-hidden="true">arrow_forward</span>
                    La fabrication reste à notre atelier des Billaux : l&apos;ossature y est taillée et assemblée
                    à blanc, puis levée chez vous en quelques jours.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Adresse et communes */}
        <section className="py-20 md:py-24 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Nous trouver
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                29 allée des Mousserons, La Teste-de-Buch
              </h2>
              <address className="not-italic font-body-lg text-body-lg text-on-surface-variant mb-6">
                L&apos;Esprit Bois, agence de {AGENCE_LA_TESTE.ville}
                <br />
                {AGENCE_LA_TESTE.rue}
                <br />
                {AGENCE_LA_TESTE.codePostal} {AGENCE_LA_TESTE.ville}
              </address>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                <span className="material-symbols-outlined text-secondary-dark text-[20px] align-[-4px] mr-2" aria-hidden="true">
                  schedule
                </span>
                Horaires communiqués à l&apos;ouverture. D&apos;ici là, appelez-nous au{' '}
                <a href={CONTACT.telHref} className="text-secondary-dark font-semibold hover:underline">
                  {CONTACT.telAffiche}
                </a>{' '}
                : nous fixons le rendez-vous chez vous.
              </p>
              <a
                href={AGENCE_LA_TESTE.itineraire}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-7 py-4 rounded-xl font-label-md text-label-md hover:bg-primary/90 transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">directions</span>
                Calculer mon itinéraire
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-surface-variant">
              <h3 className="font-label-md text-label-md uppercase tracking-widest text-primary mb-6">
                Communes du Bassin desservies
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-on-surface-variant text-body-md">
                {bassin.communes.map((c) => (
                  <li key={c} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary-dark text-[18px]" aria-hidden="true">
                      location_on
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
              <p className="text-on-surface-variant text-body-md mt-6 italic">
                Votre commune n&apos;est pas dans la liste ? Appelez-nous, nous intervenons dans toute la Gironde.
              </p>
            </div>
          </div>
        </section>

        {/* Ouvrages */}
        <section className="py-20 md:py-24 bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-4">
              Ce que nous réalisons sur le Bassin
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mb-12">
              Le sable, le vent, le sel et les sites classés ne posent pas les mêmes questions à une pergola
              qu&apos;à une terrasse. Chaque ouvrage a sa page.{' '}
              <a href="/bassin-arcachon" className="text-secondary-dark font-semibold hover:underline">
                Voir tout le secteur du Bassin
              </a>
              .
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(bassin.offres ?? []).map((o) => (
                <a
                  key={o.slug}
                  href={`/${o.slug}`}
                  className="group bg-surface-container-low rounded-2xl overflow-hidden border border-surface-variant hover:border-secondary transition-all"
                >
                  {o.src ? (
                    <img
                      src={o.src}
                      width={o.w}
                      height={o.h}
                      alt={o.alt ?? ''}
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-[4/3] object-cover"
                    />
                  ) : null}
                  <div className="p-6">
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2 group-hover:text-secondary-dark transition-colors">
                      {o.titre}
                    </h3>
                    <p className="text-on-surface-variant text-body-md">{o.resume}</p>
                  </div>
                </a>
              ))}
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
                    Votre projet sur le Bassin
                  </h2>
                  <p className="font-body-md text-body-md text-on-primary-container mb-8">
                    Décrivez-nous votre projet. Nous revenons vers vous sous 48h et nous venons relever sur place
                    avant de chiffrer quoi que ce soit, sans attendre l&apos;ouverture de l&apos;agence.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5" aria-hidden="true">check_circle</span>
                      <span className="text-on-primary-container text-body-md">
                        Relevé sur place gratuit, déplacement compris
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5" aria-hidden="true">check_circle</span>
                      <span className="text-on-primary-container text-body-md">
                        Périmètre protégé vérifié au relevé, dossier d&apos;urbanisme monté avec vous
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5" aria-hidden="true">check_circle</span>
                      <span className="text-on-primary-container text-body-md">
                        Devis détaillé poste par poste, pas de forfait au mètre carré
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
                <ContactForm pageLabel={AGENCE_LA_TESTE.slug} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
