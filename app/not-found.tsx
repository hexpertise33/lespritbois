import type { Metadata } from 'next';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: "Page introuvable | L'Esprit Bois",
  robots: 'noindex',
};

const REPRISES = [
  { titre: 'Carports', url: '/carports' },
  { titre: 'Pergolas', url: '/pergolas' },
  { titre: 'Aménagement extérieur', url: '/amenagement-exterieur' },
  { titre: 'Constructions bois', url: '/constructions-bois' },
  { titre: 'Nos réalisations', url: '/realisations' },
  { titre: 'Le blog', url: '/blog' },
];

export default function NotFound() {
  return (
    <>
      <SiteNav page="" />
      <main id="contenu">
        <header className="pt-40 pb-12 md:pt-48 md:pb-16 bg-surface-container-highest">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <p className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark mb-3">
              Erreur 404
            </p>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary">
              Cette page n&apos;existe pas
            </h1>
          </div>
        </header>

        <section className="py-16 md:py-24">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl">
              L&apos;adresse a peut-être changé, ou le lien qui vous a amené ici était erroné.
              Voici les portes d&apos;entrée du site :
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 max-w-3xl">
              {REPRISES.map((lien) => (
                <li key={lien.url}>
                  <a
                    href={lien.url}
                    className="block px-6 py-4 rounded-xl border border-surface-variant bg-white shadow-sm hover:shadow-md hover:text-secondary-dark transition-all font-body-md text-body-md"
                  >
                    {lien.titre}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/"
              className="inline-block bg-primary text-on-primary font-label-lg text-label-lg px-8 py-4 rounded-full hover:bg-primary/90 transition-colors"
            >
              Revenir à l&apos;accueil
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
