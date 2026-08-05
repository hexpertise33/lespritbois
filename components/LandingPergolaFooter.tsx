import { CONTACT } from '@/lib/data/navigation';

const ANNEE = 2026;

/**
 * Pied de page minimal de la landing page /devis-pergola : une seule ligne
 * (copyright, adresse, mentions légales). Volontairement dépourvu de tout
 * lien vers les autres pages du site (Carports, Réalisations, Blog,
 * réseaux sociaux) — l'unique lien est une obligation légale française
 * (mentions légales), pas une invitation à quitter la page de conversion.
 */
export default function LandingPergolaFooter() {
  return (
    <footer className="bg-surface-container-highest py-6">
      <div className="max-w-container-max mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-center">
        <p className="text-on-surface-variant font-body-md text-body-md text-sm">
          © {ANNEE} L&apos;Esprit Bois — {CONTACT.adresseComplete}
        </p>
        <a
          className="text-on-surface-variant hover:text-secondary-dark transition-colors text-sm underline"
          href="/mentions-legales"
        >
          Mentions légales
        </a>
      </div>
    </footer>
  );
}
