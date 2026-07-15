import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import { CONTACT, SITE } from '@/lib/data/navigation';

export const metadata: Metadata = buildMetadata({
  title: "Politique de confidentialité | L'Esprit Bois",
  description:
    "Politique de confidentialité de L'Esprit Bois : quelles données sont collectées, dans quel but, combien de temps et comment exercer vos droits.",
  path: '/politique-de-confidentialite',
  ogTitle: 'Politique de confidentialité',
  ville: CONTACT.ville,
});

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <SiteNav page="" />
      <main id="contenu">
        <header className="pt-40 pb-12 md:pt-48 md:pb-16 bg-surface-container-highest">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <p className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark mb-3">
              Vos données personnelles
            </p>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary">
              Politique de confidentialité
            </h1>
          </div>
        </header>

        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-10 font-body-md text-body-md text-on-surface-variant leading-relaxed">
            <p>
              La présente politique décrit comment {SITE.nom} (société AD FRANCE) collecte et traite vos données
              personnelles lorsque vous utilisez ce site, dans le respect du Règlement général sur la protection des
              données (RGPD) et de la loi Informatique et Libertés.
            </p>

            <div>
              <h2 className="font-headline-sm text-headline-sm text-primary mb-3">Responsable du traitement</h2>
              <p>
                {SITE.nom}, {CONTACT.adresseComplete}.
                <br />
                Contact : {CONTACT.telAffiche} ·{' '}
                <a className="text-secondary-dark hover:underline" href={`mailto:${CONTACT.email}`}>
                  {CONTACT.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-headline-sm text-headline-sm text-primary mb-3">Données collectées et finalité</h2>
              <p>
                Nous collectons uniquement les données que vous nous transmettez volontairement via le formulaire de
                contact : nom, adresse e-mail, numéro de téléphone et contenu de votre message. Ces informations
                servent exclusivement à traiter votre demande et à vous recontacter au sujet de votre projet.
              </p>
            </div>

            <div>
              <h2 className="font-headline-sm text-headline-sm text-primary mb-3">Base légale</h2>
              <p>
                Le traitement repose sur votre consentement et sur l'intérêt légitime de {SITE.nom} à répondre aux
                demandes de devis et de renseignements.
              </p>
            </div>

            <div>
              <h2 className="font-headline-sm text-headline-sm text-primary mb-3">Durée de conservation</h2>
              <p>
                Vos données sont conservées le temps nécessaire au traitement de votre demande, puis pendant la durée
                de notre relation commerciale, et au maximum 3 ans après le dernier contact à des fins de suivi.
              </p>
            </div>

            <div>
              <h2 className="font-headline-sm text-headline-sm text-primary mb-3">Destinataires</h2>
              <p>
                Vos données sont destinées aux seuls collaborateurs de {SITE.nom} en charge du traitement de votre
                demande. Elles ne sont ni cédées, ni louées, ni revendues à des tiers.
              </p>
            </div>

            <div>
              <h2 className="font-headline-sm text-headline-sm text-primary mb-3">Cookies</h2>
              <p>
                Ce site ne dépose pas de cookie publicitaire ni de traceur à des fins de profilage. Seuls des cookies
                strictement nécessaires à son bon fonctionnement peuvent être utilisés.
              </p>
            </div>

            <div>
              <h2 className="font-headline-sm text-headline-sm text-primary mb-3">Vos droits</h2>
              <p>
                Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation
                et d'opposition au traitement de vos données. Pour exercer ces droits, écrivez-nous à{' '}
                <a className="text-secondary-dark hover:underline" href={`mailto:${CONTACT.email}`}>
                  {CONTACT.email}
                </a>
                . Vous pouvez également introduire une réclamation auprès de la CNIL (
                <a
                  className="text-secondary-dark hover:underline"
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.cnil.fr
                </a>
                ).
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
