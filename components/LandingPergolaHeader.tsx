/**
 * Bandeau d'identité de la landing page /devis-pergola : logo + wordmark,
 * repris du footer du site principal (components/SiteFooter.tsx) pour que
 * le visiteur reconnaisse la même entreprise. Volontairement NON cliquable
 * et sans navigation : cette page n'a qu'un seul objectif, le formulaire.
 */
export default function LandingPergolaHeader() {
  return (
    <div className="bg-surface border-b border-surface-variant py-4">
      <div className="max-w-container-max mx-auto px-6 flex flex-col items-center justify-center text-center">
        <img
          src="/logo-mark-clair.svg"
          alt=""
          aria-hidden="true"
          width="70"
          height="32"
          className="h-8 w-auto mb-1"
        />
        <div className="wordmark text-[16px] leading-none">
          <span className="text-primary">L&apos;Esprit</span>{' '}
          <span className="text-secondary font-normal">Bois</span>
        </div>
        <p className="wordmark text-[9px] tracking-[0.2em] text-on-surface-variant mt-1">
          Créateur d&apos;espaces extérieurs
        </p>
      </div>
    </div>
  );
}
