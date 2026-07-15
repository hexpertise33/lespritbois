import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import { CONTACT, SITE } from '@/lib/data/navigation';

export const metadata: Metadata = buildMetadata({
  title: "Mentions légales | L'Esprit Bois",
  description: "Mentions légales du site L'Esprit Bois : éditeur, hébergeur, propriété intellectuelle et assurances.",
  path: '/mentions-legales',
  ogTitle: 'Mentions légales',
  ville: CONTACT.ville,
});

export default function MentionsLegalesPage() {
  return (
    <>
      <SiteNav page="" />
      <main id="contenu">
        <header className="pt-40 pb-12 md:pt-48 md:pb-16 bg-surface-container-highest">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <p className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark mb-3">
              Informations légales
            </p>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary">
              Mentions légales
            </h1>
          </div>
        </header>

        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-10 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            <div>
              <h2 className="font-headline-sm text-headline-sm text-primary mb-3">Éditeur du site</h2>
              <p>
                <strong className="text-on-surface">{SITE.nom}</strong>, marque commerciale de la société{' '}
                <strong className="text-on-surface">AD FRANCE</strong>, SAS au capital de 1&nbsp;000&nbsp;€.
                <br />
                Siège social : {CONTACT.adresseComplete}.
                <br />
                SIRET : 980&nbsp;264&nbsp;584&nbsp;00015 · RCS Libourne 980&nbsp;264&nbsp;584.
                <br />
                N° TVA intracommunautaire : FR&nbsp;47&nbsp;980&nbsp;264&nbsp;584.
                <br />
                Téléphone : {CONTACT.telAffiche} · Email :{' '}
                <a className="text-secondary-dark hover:underline" href={`mailto:${CONTACT.email}`}>
                  {CONTACT.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-headline-sm text-headline-sm text-primary mb-3">Directeur de la publication</h2>
              <p>Monsieur David Bertrand, président de la société AD FRANCE.</p>
            </div>

            <div>
              <h2 className="font-headline-sm text-headline-sm text-primary mb-3">Hébergement</h2>
              <p>
                Site hébergé par Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, États-Unis.
                <br />
                <a
                  className="text-secondary-dark hover:underline"
                  href="https://www.cloudflare.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.cloudflare.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-headline-sm text-headline-sm text-primary mb-3">Assurances</h2>
              <p>
                {SITE.nom} est couverte par une assurance responsabilité civile professionnelle et une garantie
                décennale souscrites auprès de la <strong className="text-on-surface">SMABTP</strong>, pour l'ensemble
                de ses activités de charpente, construction bois, couverture et aménagement extérieur en Gironde et
                Nouvelle-Aquitaine.
              </p>
            </div>

            <div>
              <h2 className="font-headline-sm text-headline-sm text-primary mb-3">Propriété intellectuelle</h2>
              <p>
                L'ensemble des contenus présents sur ce site (textes, photographies, visuels, logo et charte
                graphique) est la propriété exclusive de {SITE.nom}, sauf mention contraire. Toute reproduction,
                représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite et
                constituerait une contrefaçon sanctionnée par le Code de la propriété intellectuelle.
              </p>
            </div>

            <div>
              <h2 className="font-headline-sm text-headline-sm text-primary mb-3">Données personnelles</h2>
              <p>
                Les informations recueillies via le formulaire de contact sont utilisées uniquement pour répondre à
                votre demande et ne sont ni cédées ni revendues. Pour en savoir plus sur le traitement de vos données
                et vos droits, consultez notre{' '}
                <a className="text-secondary-dark hover:underline" href="/politique-de-confidentialite">
                  politique de confidentialité
                </a>
                .
              </p>
            </div>

            <div className="pt-4">
              <a
                href="/"
                className="inline-flex items-center gap-2 text-secondary-dark font-label-md hover:gap-4 transition-all"
              >
                <span className="material-symbols-outlined">arrow_back</span> Retour à l'accueil
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
