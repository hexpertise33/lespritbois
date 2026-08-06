/**
 * Bandeau d'identité de la landing page /devis-pergola : logo + wordmark,
 * repris du footer du site principal (components/SiteFooter.tsx) pour que
 * le visiteur reconnaisse la même entreprise. Le logo renvoie vers
 * l'accueil du site dans un nouvel onglet (target="_blank") : un visiteur
 * qui veut vérifier l'entreprise avant de remplir le formulaire ne doit
 * pas perdre la page de conversion (et ce qu'il a déjà saisi) pour autant.
 */
export default function LandingPergolaHeader() {
  return (
    <div className="bg-surface border-b border-surface-variant py-4">
      <div className="max-w-container-max mx-auto px-6 flex flex-col items-center justify-center text-center">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Voir le site L'Esprit Bois (nouvel onglet)"
          className="flex flex-col items-center"
        >
          <img
            src="/logo-mark-clair.svg"
            alt=""
            aria-hidden="true"
            width="98"
            height="44"
            className="h-11 md:h-12 w-auto mb-1"
          />
          <div className="wordmark text-[18px] leading-none">
            <span className="text-primary">L&apos;Esprit</span>{' '}
            <span className="text-secondary font-normal">Bois</span>
          </div>
          <p className="wordmark text-[9px] tracking-[0.2em] text-on-surface-variant mt-1">
            Créateur d&apos;espaces extérieurs
          </p>
        </a>
      </div>
    </div>
  );
}
