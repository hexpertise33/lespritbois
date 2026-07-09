import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import { articles } from '@/lib/data/blog';

export const metadata: Metadata = buildMetadata({
  title: "Blog | L'Esprit Bois, charpentiers à Libourne",
  description:
    "Conseils, retours de chantier et actualités autour du bois, des terrasses, pergolas, carports et constructions bois à Libourne et en Gironde.",
  keywords: "blog charpentier Libourne, conseils construction bois, actualités L'Esprit Bois",
  path: '/blog',
  ogImage: '/images/source-adefrance/Magasin-materiaux-bois-libourne.webp',
  ogTitle: "Blog | L'Esprit Bois",
  ville: 'Les Billaux',
});

const jsonld = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://lespritbois.fr/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://lespritbois.fr/blog' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: "Blog L'Esprit Bois",
    description:
      "Conseils, retours de chantier et actualités autour du bois, des terrasses, pergolas, carports et constructions bois à Libourne et en Gironde.",
    url: 'https://lespritbois.fr/blog',
    publisher: {
      '@type': 'GeneralContractor',
      name: "L'Esprit Bois",
    },
  },
];

export default function BlogPage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="blog" />
      <main id="contenu">
        {/* Hero */}
        <header className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="900"
              height="558"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src="/images/source-adefrance/Magasin-materiaux-bois-libourne.webp"
              alt="Le showroom de L'Esprit Bois, à quelques minutes de Libourne"
            />
            <div className="absolute inset-0 hero-interne"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-16">
            <p className="font-label-md text-label-md text-white/60 mb-6">
              <a href="/" className="hover:text-secondary-fixed transition-colors">
                Accueil
              </a>
              <span className="mx-2 text-secondary">/</span>
              <span className="text-secondary-fixed">Blog</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Le journal du bois
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6">
              Conseils et retours de chantier
            </h1>
            <p className="font-body-lg text-body-lg text-white/85 max-w-2xl">
              Essences, entretien, réglementation, avant/après de chantiers en Gironde : nos articles pour
              préparer votre projet.
            </p>
          </div>
        </header>

        {/* Articles */}
        <section className="py-section-padding bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            {articles.length === 0 ? (
              <div className="max-w-2xl mx-auto text-center py-12">
                <span className="material-symbols-outlined text-secondary-dark text-5xl mb-6">edit_note</span>
                <h2 className="font-headline-md text-headline-md text-primary mb-4">
                  Les premiers articles arrivent bientôt
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
                  Nous préparons des articles sur le choix des essences, l'entretien du bois, la réglementation
                  et nos chantiers récents. En attendant, contactez-nous directement pour vos questions.
                </p>
                <a
                  href="/#quote"
                  className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-secondary hover:text-primary transition-all active:scale-95"
                >
                  Nous contacter <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <article
                    key={article.slug}
                    className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-surface-variant flex flex-col"
                  >
                    <div className="h-56 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.titre}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark mb-2">
                        {article.categorie}
                      </span>
                      <h2 className="font-headline-sm text-headline-sm text-primary mb-3">{article.titre}</h2>
                      <p className="font-body-md text-body-md text-on-surface-variant mb-4 flex-1">
                        {article.extrait}
                      </p>
                      <a
                        href={`/blog/${article.slug}`}
                        className="inline-flex items-center gap-2 text-secondary-dark font-label-md hover:gap-4 transition-all"
                      >
                        Lire l'article <span className="material-symbols-outlined">arrow_forward</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
