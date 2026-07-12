import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import { CONTACT } from '@/lib/data/navigation';
import { articles } from '@/lib/data/blog';

export const metadata: Metadata = buildMetadata({
  title: "Plan du site | L'Esprit Bois",
  description: "Plan du site L'Esprit Bois : accédez à toutes les pages et articles du site en un coup d'œil.",
  path: '/plan-du-site',
  ogTitle: 'Plan du site',
  ville: CONTACT.ville,
});

type Lien = { titre: string; url: string };

const RUBRIQUES: { titre: string; liens: Lien[] }[] = [
  {
    titre: 'Savoir-faire',
    liens: [
      { titre: 'Carports', url: '/carports' },
      { titre: 'Pergolas', url: '/pergolas' },
      { titre: 'Aménagement extérieur', url: '/amenagement-exterieur' },
      { titre: 'Constructions bois', url: '/constructions-bois' },
    ],
  },
  {
    titre: "L'entreprise",
    liens: [
      { titre: 'Accueil', url: '/' },
      { titre: 'Réalisations', url: '/realisations' },
      { titre: 'Blog', url: '/blog' },
      { titre: 'Demander un devis', url: '/#quote' },
    ],
  },
  {
    titre: 'Informations',
    liens: [
      { titre: 'Mentions légales', url: '/mentions-legales' },
      { titre: 'Politique de confidentialité', url: '/politique-de-confidentialite' },
      { titre: 'Plan du site', url: '/plan-du-site' },
    ],
  },
];

const lienClasse =
  'text-on-surface-variant hover:text-secondary-dark hover:translate-x-1 transition-all duration-200 inline-block';

export default function PlanDuSitePage() {
  return (
    <>
      <SiteNav page="" />
      <main id="contenu">
        <header className="pt-40 pb-12 md:pt-48 md:pb-16 bg-surface-container-highest">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <p className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark mb-3">
              Navigation
            </p>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary">Plan du site</h1>
          </div>
        </header>

        <section className="py-16 md:py-24">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {RUBRIQUES.map((rubrique) => (
                <div key={rubrique.titre}>
                  <h2 className="font-headline-sm text-headline-sm text-primary mb-6">{rubrique.titre}</h2>
                  <ul className="space-y-4 font-body-md text-body-md">
                    {rubrique.liens.map((lien) => (
                      <li key={lien.url}>
                        <a className={lienClasse} href={lien.url}>
                          {lien.titre}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-10 border-t border-surface-variant">
              <h2 className="font-headline-sm text-headline-sm text-primary mb-6">Articles du blog</h2>
              <ul className="space-y-4 font-body-md text-body-md">
                {articles.map((article) => (
                  <li key={article.slug}>
                    <a className={lienClasse} href={`/blog/${article.slug}`}>
                      {article.titre}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
