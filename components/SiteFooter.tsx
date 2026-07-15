import { CONTACT, RESEAUX } from '@/lib/data/navigation';

const lien =
  'text-on-surface-variant hover:text-secondary-dark hover:translate-x-1 transition-all duration-200 inline-block';
const ANNEE = 2026;

export default function SiteFooter() {
  return (
    <footer className="w-full pt-section-padding pb-gutter bg-surface-container-highest">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-6 md:px-16 max-w-container-max mx-auto">
        <div className="md:col-span-1">
          <img
            src="/logo-mark-clair.svg"
            alt=""
            aria-hidden="true"
            width="139"
            height="64"
            loading="lazy"
            className="h-16 w-auto mb-5 -ml-2"
          />
          <div className="wordmark text-[22px] mb-3">
            <span className="text-primary">L'Esprit</span> <span className="text-secondary font-normal">Bois</span>
          </div>
          <div className="flex items-center gap-3 filet-cuivre mb-6 max-w-[260px]">
            <span className="wordmark text-[10px] tracking-[0.2em] text-on-surface-variant">
              Créateur d'espaces extérieurs
            </span>
          </div>
          <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">
            Conception, fabrication et pose de structures bois et aluminium sur mesure, à Libourne et dans
            toute la Gironde.
          </p>
        </div>

        <div className="md:col-span-1">
          <p className="font-label-md text-label-md text-primary mb-6 uppercase tracking-widest">Savoir-faire</p>
          <ul className="space-y-4">
            <li><a className={lien} href="/carports">Carports</a></li>
            <li><a className={lien} href="/pergolas">Pergolas</a></li>
            <li><a className={lien} href="/amenagement-exterieur">Aménagement extérieur</a></li>
            <li><a className={lien} href="/constructions-bois">Constructions bois</a></li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <p className="font-label-md text-label-md text-primary mb-6 uppercase tracking-widest">L'entreprise</p>
          <ul className="space-y-4">
            <li><a className={lien} href="/">Accueil</a></li>
            <li><a className={lien} href="/realisations">Réalisations</a></li>
            <li><a className={lien} href="/blog">Blog</a></li>
            <li><a className={lien} href="/#quote">Demander un devis</a></li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <p className="font-label-md text-label-md text-primary mb-6 uppercase tracking-widest">Contact</p>
          <address className="not-italic">
            <ul className="space-y-4 text-on-surface-variant">
              <li>
                <a className="hover:text-secondary-dark transition-colors" href={CONTACT.telHref}>
                  {CONTACT.telAffiche}
                </a>
              </li>
              <li>
                <a className="hover:text-secondary-dark transition-colors" href={`mailto:${CONTACT.email}`}>
                  {CONTACT.email}
                </a>
              </li>
              <li>{CONTACT.adresseComplete}</li>
              <li>{CONTACT.horaires}</li>
            </ul>
          </address>
          <div className="mt-8 flex gap-4">
            <a
              className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-secondary hover:border-secondary hover:text-primary transition-all"
              href={RESEAUX.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="L'Esprit Bois sur Facebook (nouvel onglet)"
            >
              <span className="material-symbols-outlined text-sm">thumb_up</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-6 md:px-16 mt-20 pt-8 border-t border-surface-variant">
        <p className="wordmark text-[11px] tracking-[0.22em] text-secondary-dark text-center leading-relaxed">
          Terrasses <span className="text-surface-dim mx-1">|</span> Pergolas
          <span className="text-surface-dim mx-1">|</span> Constructions bois
          <span className="text-surface-dim mx-1">|</span> Carports <span className="text-surface-dim mx-1">|</span>
          Bardages
        </p>
      </div>

      <div className="max-w-container-max mx-auto px-6 md:px-16 mt-10 pt-8 border-t border-surface-variant flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-on-surface-variant font-body-md text-body-md text-sm">
          © {ANNEE} L'Esprit Bois, créateur d'espaces extérieurs en Gironde.
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <a className="text-on-surface-variant hover:text-secondary-dark transition-colors" href="/mentions-legales">
            Mentions légales
          </a>
          <a
            className="text-on-surface-variant hover:text-secondary-dark transition-colors"
            href="/politique-de-confidentialite"
          >
            Politique de confidentialité
          </a>
          <a className="text-on-surface-variant hover:text-secondary-dark transition-colors" href="/plan-du-site">
            Plan du site
          </a>
          <a
            className="text-on-surface-variant hover:text-secondary-dark transition-colors"
            href="https://rescuepro.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Site réalisé par rescuepro.fr
          </a>
        </div>
      </div>
    </footer>
  );
}
