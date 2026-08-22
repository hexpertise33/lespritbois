import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import { CHANTIERS } from '@/lib/data/chantiers';
import { CONTACT, ENTREPRISE_ID, ENTREPRISE_REF, SITE } from '@/lib/data/navigation';
import type { Zone } from '@/lib/data/zones';

const lienInterne =
  'text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors';

/** Gabarit commun aux pages de zone.
 *
 *  Le gabarit est partagé, le contenu ne l'est pas : chaque zone apporte ses
 *  propres chantiers, son propre contexte technique et sa propre FAQ. C'est la
 *  condition pour que ces pages ne soient pas des doorway pages — un même texte
 *  décliné par commune serait détecté comme tel, et à juste titre. */
export default function PageZone({ zone }: { zone: Zone }) {
  const chantiers = zone.chantiers
    .map((id) => CHANTIERS.find((c) => c.id === id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const url = `${SITE.url}/${zone.slug}`;

  const jsonld = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE.url}/` },
        { '@type': 'ListItem', position: 2, name: zone.nom, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: zone.h1,
      url,
      provider: ENTREPRISE_REF,
      areaServed: zone.communes.map((c) => ({ '@type': 'City', name: c })),
      description: zone.description,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: zone.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.r },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `Chantiers réalisés — ${zone.nom}`,
      numberOfItems: chantiers.length,
      itemListElement: chantiers.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'CreativeWork',
          name: `${c.categorie} — ${c.commune} : ${c.titre}`,
          about: { '@type': 'Place', name: c.commune },
          provider: { '@id': ENTREPRISE_ID },
        },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="realisations" />
      <main id="contenu">
        <header className="relative pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width={zone.coverW}
              height={zone.coverH}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={zone.cover}
              alt={zone.coverAlt}
            />
            <div className="absolute inset-0 hero-interne"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-16">
            <p className="font-label-md text-label-md text-white/60 mb-6">
              <a href="/" className="hover:text-secondary-fixed transition-colors">
                Accueil
              </a>
              <span className="mx-2 text-secondary" aria-hidden="true">
                /
              </span>
              <span className="text-secondary-fixed">{zone.nom}</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Zone d&apos;intervention
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              {zone.h1}
            </h1>
            <p className="font-body-lg text-body-lg text-white/85 max-w-2xl">{zone.chapo}</p>
          </div>
        </header>

        {/* Contexte technique du secteur */}
        <section className="py-20 md:py-28 bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-8">
                {zone.contexte.titre}
              </h2>
              <div className="font-body-lg text-body-lg text-on-surface-variant space-y-6">
                {zone.contexte.paragraphes.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Les chantiers réels du secteur */}
        <section className="py-20 md:py-28 bg-surface-container">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-4">
              {chantiers.length === 1
                ? 'Notre chantier dans le secteur'
                : `Nos ${chantiers.length} chantiers dans le secteur`}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-14 max-w-2xl">
              Commune réelle, contrainte réelle, durée réelle. Ce sont les mêmes fiches que dans{' '}
              <a href="/realisations" className={lienInterne}>
                nos réalisations
              </a>
              , sans réécriture à l&apos;avantage de la page.
            </p>
            <div className="space-y-16">
              {chantiers.map((c) => (
                <article key={c.id} className="grid lg:grid-cols-2 gap-10 items-start">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      width={c.w}
                      height={c.h}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                      src={c.src}
                      alt={c.alt}
                    />
                  </div>
                  <div>
                    <p className="font-label-md text-label-md uppercase tracking-[0.15em] text-secondary-dark mb-3">
                      {c.categorie} — {c.commune}
                    </p>
                    <h3 className="font-headline-md text-headline-md text-primary mb-5">{c.titre}</h3>
                    <div className="font-body-md text-body-md text-on-surface-variant space-y-4">
                      {c.paragraphes.slice(0, 2).map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                    <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
                      {c.faits.map((f) => (
                        <div key={f.label}>
                          <dt className="font-label-md text-label-md text-secondary-dark">
                            {f.label}
                          </dt>
                          <dd className="font-body-md text-body-md text-on-surface-variant">
                            {f.valeur}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Accès et méthode */}
        <section className="py-20 md:py-28 bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-6">
                Depuis l&apos;atelier des Billaux
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">{zone.acces}</p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Communes citées sur cette page : {zone.communes.join(', ')}. Nos gammes complètes sont
                détaillées sur{' '}
                <a href="/pergolas" className={lienInterne}>
                  pergolas
                </a>
                ,{' '}
                <a href="/carports" className={lienInterne}>
                  carports
                </a>
                ,{' '}
                <a href="/amenagement-exterieur" className={lienInterne}>
                  aménagement extérieur
                </a>{' '}
                et{' '}
                <a href="/constructions-bois" className={lienInterne}>
                  constructions bois
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-surface-container">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-12">
              Questions fréquentes
            </h2>
            <div className="max-w-3xl space-y-4">
              {zone.faq.map((f) => (
                <details
                  key={f.q}
                  className="group border border-outline-variant rounded-xl p-6 bg-surface"
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer font-title-md text-title-md text-on-surface">
                    {f.q}
                    <span
                      className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform"
                      aria-hidden="true"
                    >
                      expand_more
                    </span>
                  </summary>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-4">{f.r}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16 text-center">
            <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-6">
              Un projet dans le secteur ?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
              Le relevé et le devis sont gratuits, sans engagement. Appelez-nous au{' '}
              {CONTACT.telAffiche} ou décrivez votre projet en ligne.
            </p>
            <a
              href="/contact"
              className="inline-block bg-secondary text-primary px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-secondary-fixed transition-all active:scale-95"
            >
              Demander mon étude gratuite
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
