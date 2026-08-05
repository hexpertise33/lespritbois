# Landing page `/devis-pergola` visual richness Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the landing page hero's flat dark background with a full-bleed photo (matching `/pergolas`'s established pattern), grow the gallery from 4 to 8 photos, add a photo to each of the 3 comparatif cards, and add a 3-question mini FAQ answering the objections most likely to block a form submission — all using content already written/hosted elsewhere on the site, no new assets.

**Architecture:** Single-file change to `app/devis-pergola/page.tsx`: the hero header gets the same `absolute inset-0 z-0` image + `.hero-interne` overlay pattern already used on `/pergolas`; `GALERIE_COURTE` and `GAMME_COURTE` grow with more entries/fields; one new FAQ `<section>` is inserted between the comparatif and the final CTA. No new components, no shared-file changes.

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript (strict), Tailwind v4 — same as the rest of the site, no new dependency.

## Global Constraints

- All reused images/copy must come from `app/pergolas/page.tsx`'s existing `GALERIE`, `GAMME`, and FAQ content — no new assets, no invented copy.
- The hero's background-image pattern must match `/pergolas`'s existing markup exactly in shape (`absolute inset-0 z-0` wrapping an `<img>` + a `<div className="absolute inset-0 hero-interne">`, content wrapped in `relative z-10`) — `.hero-interne` is an existing CSS class in `app/globals.css`, do not redefine it.
- Icons: this task introduces no new icon names (the 3 comparatif cards keep their existing `wb_sunny`/`roofing`/`cabin` icons; no icon is used in the FAQ).
- No `next/image`, no new npm dependency, French copy/comments matching the rest of the codebase.
- Do not modify `components/LandingPergolaForm.tsx`, `components/LandingPergolaHeader.tsx`, `components/LandingPergolaFooter.tsx`, `components/LandingPergolaStickyBar.tsx`, `lib/gtag.ts`, `lib/metadata.ts`, `app/api/contact/route.ts`, or `app/pergolas/page.tsx`.
- Do not add a `FAQPage` JSON-LD block or any structured data for the new FAQ — this page is `noindex`, there is no SEO benefit, and it would add weight for nothing (per the design spec's explicit "hors périmètre").
- This iteration is a deliberate, user-approved trade-off: the page gets heavier (more images) in exchange for visual richness and conversion — do not treat the resulting page-weight increase as a regression to silently minimize; report it honestly in verification.
- `next build` can hang indefinitely without failing on this machine (repo under iCloud Drive). Verification in this plan uses `npx tsc --noEmit` and `npm run dev` — do not run `next build` or `npm run deploy` as part of this plan.

---

## File Structure

**Modified:**
- `app/devis-pergola/page.tsx` — hero background treatment, `GALERIE_COURTE` (4→8 entries), `GAMME_COURTE` (adds photo fields + rendering), new FAQ section.

---

### Task 1: hero photo, expanded gallery, illustrated comparatif cards, mini FAQ

**Files:**
- Modify: `app/devis-pergola/page.tsx`
- Test: `npx tsc --noEmit`; full visual verification is Task 2.

**Interfaces:**
- No new exports, no new props — this task only edits the existing default-exported `DevisPergolaPage` and its two module-level `const` arrays (`GAMME_COURTE`, `GALERIE_COURTE`).

The current file (as of the previous iteration, commit `9cd1ee3`) has the exact structure shown below. Apply the four edits that follow it, each anchored to this exact text.

```tsx
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { CONTACT } from '@/lib/data/navigation';
import LandingPergolaHeader from '@/components/LandingPergolaHeader';
import LandingPergolaFooter from '@/components/LandingPergolaFooter';
import LandingPergolaForm from '@/components/LandingPergolaForm';
import LandingPergolaStickyBar from '@/components/LandingPergolaStickyBar';

export const metadata: Metadata = buildMetadata({
  title: "Devis pergola gratuit à Libourne — L'Esprit Bois",
  description:
    'Recevez votre devis gratuit de pergola sur mesure à Libourne et en Gironde, sous 48h. Bioclimatique, aluminium ou bois massif, posé par une entreprise certifiée Qualibat.',
  path: '/devis-pergola',
  ogImage: '/images/realisations/pergola-aluminium-terrasse-bois-libourne-1.webp',
  ogTitle: 'Pergola sur mesure à Libourne — devis gratuit sous 48h',
  ville: 'Libourne',
  noindex: true,
});

/* Comparatif court : juste de quoi rassurer que l'entreprise couvre le
   besoin du visiteur, peu importe son type de pergola — pas le tableau
   complet de /pergolas. Textes raccourcis depuis GAMME (app/pergolas/page.tsx). */
const GAMME_COURTE = [
  {
    icone: 'wb_sunny',
    titre: 'Pergola bioclimatique',
    texte: "Lames aluminium orientables : réglez l'ombre, la ventilation et la pluie d'un geste.",
  },
  {
    icone: 'roofing',
    titre: 'Pergola aluminium',
    texte: 'Structure thermolaquée sans entretien, couverture polycarbonate, panneau isolant ou vitrage.',
  },
  {
    icone: 'cabin',
    titre: 'Pergola bois massif',
    texte: "Douglas, mélèze ou red cedar : charpente traditionnelle qui s'accorde au bâti ancien.",
  },
] as const;

/* 4 photos de chantiers réels, reprises telles quelles de GALERIE
   (app/pergolas/page.tsx) — mêmes fichiers, déjà optimisés et hébergés. */
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
    src: '/images/realisations/salon-sous-pergola-aluminium-libourne-8.webp',
    alt: 'Salon de jardin installé sous une pergola aluminium avec stores, sur terrasse bois',
    w: 825,
    h: 1100,
  },
] as const;

export default function DevisPergolaPage() {
  return (
    <>
      <LandingPergolaHeader />
      <main id="contenu">
        {/* Hero : pas de photo pleine largeur (contrairement à /pergolas) —
            l'accent va au formulaire, pas à l'image, et la page reste plus
            légère à charger sur mobile. */}
        <header data-devis-hero className="bg-primary text-on-primary pt-10 pb-14 md:pt-16 md:pb-20">
          <div className="max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4">
                Pergola sur mesure à Libourne et en Gironde — Devis gratuit sous 48h
              </h1>
              <p className="font-body-lg text-body-lg text-white/85 mb-6">
                Bioclimatique, aluminium ou bois massif : conçue, fabriquée et posée par la même
                équipe, certifiée Qualibat et couverte par notre garantie décennale.
              </p>
              <a
                href={CONTACT.telHref}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-4 rounded-xl font-label-md text-label-md hover:bg-white/20 transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">call</span>
                {CONTACT.telAffiche}
              </a>
            </div>
            <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-xl order-first md:order-none">
              <h2 className="font-headline-sm text-headline-sm text-primary mb-6">
                Recevez votre devis gratuit
              </h2>
              <LandingPergolaForm instanceId="haut" />
            </div>
          </div>
        </header>

        {/* Bandeau de confiance */}
        <section className="bg-surface border-b border-surface-variant" aria-label="Nos garanties">
          <div className="max-w-container-max mx-auto px-6 md:px-16 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-dark text-3xl shrink-0">verified</span>
              <div>
                <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Certifiés Qualibat
                </p>
                <p className="text-on-surface-variant text-body-md">La qualification reconnue du bâtiment</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-dark text-3xl shrink-0">shield</span>
              <div>
                <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Garantie décennale
                </p>
                <p className="text-on-surface-variant text-body-md">Vos ouvrages couverts pendant 10 ans</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-dark text-3xl shrink-0">location_on</span>
              <div>
                <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Libourne &amp; Gironde
                </p>
                <p className="text-on-surface-variant text-body-md">Nous intervenons dans tout le département</p>
              </div>
            </div>
          </div>
        </section>

        {/* Preuve sociale chiffrée + relance vers le formulaire du milieu de page */}
        <section className="py-section-padding bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16 text-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
              <div>
                <p className="font-headline-md text-headline-md text-primary mb-2">10 ans</p>
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
            <div className="grid grid-cols-2 gap-4">
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
                <LandingPergolaForm instanceId="milieu" />
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
                <div key={g.titre} className="bg-surface rounded-2xl p-6 text-center">
                  <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">{g.icone}</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{g.titre}</h3>
                  <p className="text-on-surface-variant font-body-md text-body-md">{g.texte}</p>
                </div>
              ))}
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
                <LandingPergolaForm instanceId="bas" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <LandingPergolaFooter />
      <LandingPergolaStickyBar />
    </>
  );
}
```

Apply these four edits to it, in order:

- [ ] **Step 1: Give the hero a full-bleed photo background**

Replace:
```tsx
        {/* Hero : pas de photo pleine largeur (contrairement à /pergolas) —
            l'accent va au formulaire, pas à l'image, et la page reste plus
            légère à charger sur mobile. */}
        <header data-devis-hero className="bg-primary text-on-primary pt-10 pb-14 md:pt-16 md:pb-20">
          <div className="max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
```
with:
```tsx
        {/* Hero : photo pleine largeur (même patron que /pergolas, même
            image) — remplace le fond uni sombre suite au retour utilisateur
            (page perçue comme trop sombre et pas assez illustrée). */}
        <header
          data-devis-hero
          className="relative text-on-primary pt-10 pb-14 md:pt-16 md:pb-20 overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <img
              width="1600"
              height="900"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src="/images/realisations/pergola-aluminium-terrasse-bois-libourne-1.webp"
              alt="Pergola aluminium adossée et terrasse bois réalisées par L'Esprit Bois près de Libourne"
            />
            <div className="absolute inset-0 hero-interne"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
```

The `</header>` and its inner closing `</div>` tags (right after `<LandingPergolaForm instanceId="haut" />`) do **not** change — only the two opening tags replaced above changed. After this step, `<header>` has one extra closing structure to match its new nesting (the new `<div className="absolute inset-0 z-0">...</div>` block), but the pre-existing `</div></div></header>` sequence that closes the grid/header is unchanged and does not need editing.

- [ ] **Step 2: Grow the gallery from 4 to 8 photos**

Replace the whole `GALERIE_COURTE` constant:
```tsx
/* 4 photos de chantiers réels, reprises telles quelles de GALERIE
   (app/pergolas/page.tsx) — mêmes fichiers, déjà optimisés et hébergés. */
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
    src: '/images/realisations/salon-sous-pergola-aluminium-libourne-8.webp',
    alt: 'Salon de jardin installé sous une pergola aluminium avec stores, sur terrasse bois',
    w: 825,
    h: 1100,
  },
] as const;
```
with:
```tsx
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
    alt: 'Pergola aluminium à toiture polycarbonate au-dessus d’une grande terrasse bois, Gironde',
    w: 1000,
    h: 1333,
  },
  {
    src: '/images/source-adefrance/Pergolas-aluminium-Libourne-8.webp',
    alt: 'Pergola bioclimatique blanche à lames orientables ouvertes, adossée à une maison',
    w: 768,
    h: 512,
  },
  {
    src: '/images/source-adefrance/Pergolas-bois-Libourne.webp',
    alt: 'Pergola en bois massif autoportée posée sur pieds béton',
    w: 900,
    h: 990,
  },
] as const;
```

Then replace the gallery grid's className to fit 8 images better on wider screens:
```tsx
            <div className="grid grid-cols-2 gap-4">
              {GALERIE_COURTE.map((img) => (
```
with:
```tsx
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {GALERIE_COURTE.map((img) => (
```

- [ ] **Step 3: Add a photo to each comparatif card**

Replace the whole `GAMME_COURTE` constant:
```tsx
/* Comparatif court : juste de quoi rassurer que l'entreprise couvre le
   besoin du visiteur, peu importe son type de pergola — pas le tableau
   complet de /pergolas. Textes raccourcis depuis GAMME (app/pergolas/page.tsx). */
const GAMME_COURTE = [
  {
    icone: 'wb_sunny',
    titre: 'Pergola bioclimatique',
    texte: "Lames aluminium orientables : réglez l'ombre, la ventilation et la pluie d'un geste.",
  },
  {
    icone: 'roofing',
    titre: 'Pergola aluminium',
    texte: 'Structure thermolaquée sans entretien, couverture polycarbonate, panneau isolant ou vitrage.',
  },
  {
    icone: 'cabin',
    titre: 'Pergola bois massif',
    texte: "Douglas, mélèze ou red cedar : charpente traditionnelle qui s'accorde au bâti ancien.",
  },
] as const;
```
with:
```tsx
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
    src: '/images/pergola-bois-lames-terrasse.webp',
    alt: 'Pergola en bois massif à poutres apparentes au-dessus d’une terrasse en lames de bois',
    w: 1000,
    h: 1500,
  },
] as const;
```

Then replace the comparatif cards' rendering:
```tsx
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {GAMME_COURTE.map((g) => (
                <div key={g.titre} className="bg-surface rounded-2xl p-6 text-center">
                  <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">{g.icone}</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{g.titre}</h3>
                  <p className="text-on-surface-variant font-body-md text-body-md">{g.texte}</p>
                </div>
              ))}
            </div>
```
with:
```tsx
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
                    <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">{g.icone}</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{g.titre}</h3>
                    <p className="text-on-surface-variant font-body-md text-body-md">{g.texte}</p>
                  </div>
                </div>
              ))}
            </div>
```

- [ ] **Step 4: Insert the mini FAQ between the comparatif and the final CTA**

Insert this new `<section>` immediately after the comparatif's closing `</section>` and immediately before the `{/* CTA final */}` comment:

```tsx
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

```

- [ ] **Step 5: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add app/devis-pergola/page.tsx
git commit -m "devis-pergola: héros en photo, galerie et fiches gamme illustrées, mini FAQ"
```

---

### Task 2: full verification pass (dev server, browser, no code changes)

**Files:** none created or modified.

**Interfaces:** none.

- [ ] **Step 1: Start the dev server and open the page**

Start the `espritbois-dev` preview (or `npm run dev`), navigate to `http://localhost:3000/devis-pergola`.

Expected: page loads, no console errors.

- [ ] **Step 2: Confirm the hero photo renders correctly**

Confirm the hero shows the pergola photo as a background with the dark-gradient overlay, the H1/subtitle/phone link text is legible over it (white text, per `text-on-primary`), and the form card in front is unaffected.

- [ ] **Step 3: Confirm the gallery shows 8 images**

Count the images rendered in the gallery section — expect exactly 8, laid out 2 per row on mobile and 4 per row at `md:` and above.

- [ ] **Step 4: Confirm each comparatif card shows its photo**

Confirm all 3 cards (bioclimatique / aluminium / bois massif) show a photo above their icon/title/text, and that the three photos are visually distinct from each other and from the gallery/hero images.

- [ ] **Step 5: Confirm the FAQ renders between the comparatif and the final CTA**

Confirm the new "Vos questions avant de vous lancer" section appears after the comparatif section and before the final CTA section (`id="devis-bas"`), with exactly 3 questions, matching the text specified in Step 4 of Task 1.

- [ ] **Step 6: Confirm nothing else changed**

Confirm the trust bar, the stats+nudge section, both remaining CTA forms (`milieu`/`bas`), the footer, and the mobile sticky bar are all still present and functioning as before this iteration — this task only touched the hero background, the gallery, the comparatif cards, and added the FAQ.

- [ ] **Step 7: Report page weight honestly**

Compare the page's HTML document size and total resource count against the previous iteration (informal — no strict pass/fail threshold here, per the Global Constraints this is an accepted trade-off). Report the actual numbers so the increase is visible and understood, not hidden.

- [ ] **Step 8: Mobile check**

At a 375px viewport, confirm the hero's text remains readable over the photo, and that the page's overall feel (informally) reads as "richer" per the goal of this iteration — screenshot and share if useful.

No commit for this task (no files changed).
