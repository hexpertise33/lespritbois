import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { CONTACT } from '@/lib/data/navigation';
import LandingPergolaHeader from '@/components/LandingPergolaHeader';
import LandingPergolaFooter from '@/components/LandingPergolaFooter';
import DevisForm from '@/components/DevisForm';
import DevisStickyBar from '@/components/DevisStickyBar';
import DevisDesktopPopup from '@/components/DevisDesktopPopup';

export const metadata: Metadata = buildMetadata({
  title: "Devis pergola gratuit à Libourne — L'Esprit Bois",
  description:
    "Devis gratuit sous 48 h pour une pergola sur mesure à Libourne et en Gironde : bioclimatique, aluminium ou bois massif, par une entreprise Qualibat.",
  path: '/devis-pergola',
  ogImage: '/images/realisations/pergola-aluminium-terrasse-bois-libourne-1.webp',
  ogTitle: 'Pergola sur mesure à Libourne — devis gratuit sous 48h',
  ville: 'Libourne',
  noindex: true,
});

/* Étiquettes d'attribution des leads. Valeurs historiques de cette landing,
   conservées telles quelles : elles alimentent l'e-mail de lead et la clé de
   session du pop-up, et servaient de constantes en dur avant que les
   composants Devis* soient partagés avec les pages de zone. */
const PROJET = 'Pergola (landing Ads)';
const PAGE_LABEL = '/devis-pergola';

/* Comparatif court : juste de quoi rassurer que l'entreprise couvre le
   besoin du visiteur, peu importe son type de pergola — pas le tableau
   complet de /pergolas. Textes et photos raccourcis/repris depuis GAMME
   (app/pergolas/page.tsx). */
const GAMME_COURTE = [
  {
    icone: 'wb_sunny',
    titre: 'Pergola bioclimatique',
    texte: "Lames aluminium orientables : réglez l'ombre, la ventilation et la pluie d'un geste.",
    src: '/images/source-adefrance/Pergolas-aluminium-Libourne-9.webp',
    alt: 'Salon de jardin sous une pergola bioclimatique à lames orientables blanches, adossée à une maison contemporaine',
    w: 768,
    h: 512,
  },
  {
    icone: 'roofing',
    titre: 'Pergola aluminium',
    texte: 'Structure thermolaquée sans entretien, couverture polycarbonate, panneau isolant ou vitrage.',
    src: '/images/pergola-terrasse-bois-libourne-1.webp',
    alt: 'Pergola aluminium anthracite adossée à une maison girondine, vue en enfilade sur la terrasse bois',
    w: 1200,
    h: 900,
  },
  {
    icone: 'cabin',
    titre: 'Pergola bois massif',
    texte: "Douglas, mélèze ou red cedar : charpente traditionnelle qui s'accorde au bâti ancien.",
    src: '/images/pergola-bois-chevrons-enfilade.webp',
    alt: 'Pergola en bois massif à chevrons apparents vue en enfilade au-dessus d’une allée',
    w: 800,
    h: 1200,
  },
] as const;

/* 8 photos, reprises telles quelles de GALERIE (app/pergolas/page.tsx) —
   6 chantiers réels + 1 exemple bioclimatique + 1 exemple bois massif, pour
   couvrir les 3 familles. Mêmes fichiers, déjà optimisés et hébergés. */
const GALERIE_COURTE = [
  {
    src: '/images/realisations/pergola-aluminium-terrasse-bois-libourne-1.webp',
    alt: "Pergola aluminium anthracite adossée à une maison, vue en enfilade sur la terrasse bois, réalisée par L'Esprit Bois",
    w: 1600,
    h: 900,
  },
  {
    src: '/images/realisations/pergola-aluminium-store-zip-libourne-2.webp',
    alt: 'Vue sous une pergola aluminium avec store ZIP descendu, terrasse bois et mobilier de jardin',
    w: 1100,
    h: 825,
  },
  {
    src: '/images/realisations/pergola-aluminium-toit-polycarbonate-libourne-6.webp',
    alt: "Détail de la couverture polycarbonate d'une pergola aluminium adossée à la façade",
    w: 825,
    h: 1100,
  },
  {
    src: '/images/realisations/pergola-aluminium-terrasse-bois-libourne-5.webp',
    alt: 'Pergola aluminium et terrasse bois sur plots vues depuis le jardin',
    w: 825,
    h: 1100,
  },
  {
    src: '/images/realisations/salon-sous-pergola-aluminium-libourne-8.webp',
    alt: 'Salon de jardin installé sous une pergola aluminium avec stores, sur terrasse bois',
    w: 825,
    h: 1100,
  },
  {
    src: '/images/pergola-terrasse-bois-libourne-4.webp',
    alt: 'Pergola aluminium à toiture polycarbonate au-dessus d’une grande terrasse bois, à Saint-Pey-de-Castets',
    w: 1000,
    h: 1333,
  },
  {
    src: '/images/realisations/pergola-aluminium-toit-polycarbonate-libourne-4.webp',
    alt: 'Pergola aluminium adossée à toiture polycarbonate, raccord à la façade vu depuis la terrasse',
    w: 825,
    h: 1100,
  },
  {
    src: '/images/realisations/pergola-aluminium-terrasse-bois-libourne-3.webp',
    alt: 'Pergola aluminium adossée vue depuis la terrasse bois, poteaux et traverses thermolaqués',
    w: 825,
    h: 1100,
  },
] as const;

export default function DevisPergolaPage() {
  return (
    <>
      <LandingPergolaHeader />
      <main id="contenu">
        {/* Hero : photo nette dans la colonne de texte (pas de fond plein
            largeur assombri) — le visiteur doit voir ce qu'on lui vend
            avant d'arriver au formulaire, sur mobile comme sur desktop.
            Le formulaire n'est plus forcé en premier sur mobile (retire
            order-first) : ordre naturel partout, texte+photo puis
            formulaire. */}
        <header data-devis-hero className="bg-primary text-on-primary pt-10 pb-14 md:pt-16 md:pb-20">
          <div className="max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6">
                Pergola sur mesure à Libourne et en Gironde — Devis gratuit sous 48h
              </h1>
              <img
                width="1600"
                height="900"
                fetchPriority="high"
                decoding="async"
                className="w-full h-56 md:h-64 object-cover rounded-2xl mb-6"
                src="/images/realisations/pergola-aluminium-terrasse-bois-libourne-1.webp"
                alt="Pergola aluminium adossée posée par L'Esprit Bois à Saint-Pey-de-Castets, en Entre-deux-Mers"
              />
              <p className="font-body-lg text-body-lg text-white/85 mb-6">
                Bioclimatique, aluminium ou bois massif : conçue, fabriquée et posée par la même
                équipe, qualifiée Qualibat et couverte par notre garantie décennale.
              </p>
              <a
                href={CONTACT.telHref}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-4 rounded-xl font-label-md text-label-md hover:bg-white/20 transition-all"
              >
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">call</span>
                {CONTACT.telAffiche}
              </a>
            </div>
            <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-xl">
              <h2 className="font-headline-sm text-headline-sm text-primary mb-6">
                Recevez votre devis gratuit
              </h2>
              <DevisForm instanceId="haut" projet={PROJET} pageLabel={PAGE_LABEL} />
            </div>
          </div>
        </header>

        {/* Bandeau de confiance */}
        <section className="bg-surface border-b border-surface-variant" aria-label="Nos garanties">
          <div className="max-w-container-max mx-auto px-6 md:px-16 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-dark text-3xl shrink-0" aria-hidden="true">verified</span>
              <div>
                <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Qualifiés Qualibat RGE
                </p>
                <p className="text-on-surface-variant text-body-md">La qualification reconnue du bâtiment</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-dark text-3xl shrink-0" aria-hidden="true">shield</span>
              <div>
                <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Garantie décennale
                </p>
                <p className="text-on-surface-variant text-body-md">Vos ouvrages couverts pendant 10 ans</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-dark text-3xl shrink-0" aria-hidden="true">location_on</span>
              <div>
                <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Libourne &amp; Gironde
                </p>
                <p className="text-on-surface-variant text-body-md">Nous intervenons dans tout le département</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <svg
                className="w-9 h-6 shrink-0 border border-surface-variant"
                viewBox="0 0 3 2"
                aria-hidden="true"
              >
                <rect width="1" height="2" x="0" fill="#002654" />
                <rect width="1" height="2" x="1" fill="#FFFFFF" />
                <rect width="1" height="2" x="2" fill="#ED2939" />
              </svg>
              <div>
                <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Fabrication française
                </p>
                <p className="text-on-surface-variant text-body-md">Bois façonné dans notre atelier, aluminium de notre partenaire français</p>
              </div>
            </div>
          </div>
        </section>

        {/* Preuve sociale chiffrée + relance vers le formulaire du milieu de page */}
        <section className="py-section-padding bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16 text-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
              <div>
                <p className="font-headline-md text-headline-md text-primary mb-2">20 ans</p>
                <p className="text-on-surface-variant font-body-md text-body-md">d&apos;expérience du bois</p>
              </div>
              <div>
                <p className="font-headline-md text-headline-md text-primary mb-2">100%</p>
                <p className="text-on-surface-variant font-body-md text-body-md">sur mesure</p>
              </div>
              <div>
                <p className="font-headline-md text-headline-md text-primary mb-2">5.0/5</p>
                <p className="text-on-surface-variant font-body-md text-body-md">sur 6 avis Google</p>
              </div>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
              Envie d&apos;une pergola comme celles-ci ? Recevez votre devis gratuit en 2 minutes.
            </p>
            <a
              href="#devis-milieu"
              className="inline-block bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-secondary hover:text-primary transition-all"
            >
              Recevoir mon devis gratuit
            </a>
          </div>
        </section>

        {/* Galerie de réalisations */}
        <section className="py-section-padding bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <h2 className="font-headline-md text-headline-md text-primary mb-8 text-center">
              Nos dernières réalisations
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {GALERIE_COURTE.map((img) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  width={img.w}
                  height={img.h}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl aspect-square"
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA répété — milieu de page */}
        <section id="devis-milieu" className="py-section-padding bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-2xl mx-auto">
              <div className="bg-surface-container-low rounded-2xl p-6 md:p-8 shadow-xl border border-surface-variant">
                <h2 className="font-headline-sm text-headline-sm text-primary mb-6 text-center">
                  Recevez votre devis gratuit
                </h2>
                <DevisForm instanceId="milieu" projet={PROJET} pageLabel={PAGE_LABEL} />
              </div>
            </div>
          </div>
        </section>

        {/* Comparatif rapide des 3 gammes */}
        <section className="py-section-padding bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <h2 className="font-headline-md text-headline-md text-primary mb-10 text-center">
              Quelle que soit la pergola que vous imaginez, nous la construisons
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {GAMME_COURTE.map((g) => (
                <div key={g.titre} className="bg-surface rounded-2xl overflow-hidden text-center">
                  <img
                    src={g.src}
                    alt={g.alt}
                    width={g.w}
                    height={g.h}
                    loading="lazy"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4" aria-hidden="true">{g.icone}</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{g.titre}</h3>
                    <p className="text-on-surface-variant font-body-md text-body-md">{g.texte}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mini FAQ — répond aux objections les plus susceptibles de
            bloquer avant l'envoi du formulaire. Textes raccourcis depuis la
            FAQ de /pergolas. Pas de JSON-LD FAQPage : page noindex, aucun
            bénéfice SEO, inutile d'alourdir le HTML. */}
        <section className="py-section-padding bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-headline-md text-headline-md text-primary mb-10 text-center">
                Vos questions avant de vous lancer
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                    Combien coûte une pergola sur mesure ?
                  </h3>
                  <p className="text-on-surface-variant font-body-md text-body-md">
                    Le prix dépend de la surface couverte, du type de couverture, des équipements
                    ajoutés et de la nature du support. Nous ne pratiquons pas de tarif au mètre
                    carré affiché : nous relevons votre terrasse et remettons un devis détaillé,
                    poste par poste.
                  </p>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                    Faut-il une autorisation d&apos;urbanisme ?
                  </h3>
                  <p className="text-on-surface-variant font-body-md text-body-md">
                    Le plus souvent oui, une déclaration préalable de travaux selon la surface. Les
                    seuils dépendent du PLU de votre commune : nous les vérifions sur pièces et
                    montons le dossier avec vous.
                  </p>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                    Bois ou aluminium, laquelle choisir ?
                  </h3>
                  <p className="text-on-surface-variant font-body-md text-body-md">
                    Le bois massif apporte chaleur et matière, l&apos;aluminium offre de grandes
                    portées sans entretien. Le choix dépend de votre maison, de l&apos;usage
                    souhaité et du budget — nous vous conseillons au rendez-vous.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section id="devis-bas" className="py-section-padding bg-primary text-on-primary">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-headline-md text-headline-md mb-8 text-center">
                Prêt à profiter de votre terrasse autrement ?
              </h2>
              <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-xl">
                <DevisForm instanceId="bas" projet={PROJET} pageLabel={PAGE_LABEL} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <LandingPergolaFooter />
      <DevisStickyBar />
      <DevisDesktopPopup pageLabel={PAGE_LABEL} />
    </>
  );
}
