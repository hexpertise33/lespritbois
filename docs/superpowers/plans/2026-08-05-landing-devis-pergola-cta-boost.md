# Landing page `/devis-pergola` CTA boost Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Broaden the H1's geographic claim from "Libourne" to "Libourne et en Gironde", and add two reinforcement touchpoints — a numeric social-proof + nudge section, and a mobile-only sticky CTA bar — to the already-live `/devis-pergola` landing page, without touching its existing content, forms, or tracking.

**Architecture:** One new small client component (the sticky bar, using `IntersectionObserver` to appear only past the hero) plus targeted edits to the existing page file (H1 copy, one new section, two anchor ids, one new import). No new shared files, no changes to `lib/gtag.ts`, `lib/metadata.ts`, `app/api/contact/route.ts`, `components/LandingPergolaForm.tsx`, `components/LandingPergolaHeader.tsx`, or `components/LandingPergolaFooter.tsx`.

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript (strict), Tailwind v4 — same as the rest of the site, no new dependency.

## Global Constraints

- The three social-proof numbers must be exactly: **10 ans** (d'expérience du bois), **100%** (sur mesure), **5.0/5** (sur 6 avis Google) — these are real figures already published on `app/page.tsx` and `app/qui-sommes-nous/page.tsx`. Do not invent, round differently, or add any other numeric claim (e.g. no "chantiers réalisés" count — not verifiable).
- No urgency/scarcity messaging ("créneaux limités", countdowns, etc.) — explicitly rejected by the user.
- Icons: only use names already confirmed safe in this codebase's 64-glyph subset. This task uses `call` (already used elsewhere on this page) and no new icon names.
- The sticky bar must be mobile-only (`md:hidden`), must not render at all until the hero has scrolled out of view (no duplicate CTA stacked on top of the hero's own visible phone button/form), and must sit at a lower stacking order than `ConsentBanner` (`z-[200]` in `components/ConsentBanner.tsx`, `fixed inset-x-0 bottom-0`) so the cookie banner is never visually obstructed.
- Do not modify `components/LandingPergolaForm.tsx`, `components/LandingPergolaHeader.tsx`, `components/LandingPergolaFooter.tsx`, `lib/gtag.ts`, `lib/metadata.ts`, or `app/api/contact/route.ts` — none of this iteration touches tracking, the form's field set, or metadata.
- Do not add a second reinforcement section (e.g. between the comparatif and the final CTA) — explicitly out of scope for this iteration per the spec.
- No `next/image`, no new npm dependency, French copy/comments matching the rest of the codebase.
- `next build` can hang indefinitely without failing on this machine (repo under iCloud Drive). Verification in this plan uses `npx tsc --noEmit` and `npm run dev` — do not run `next build` or `npm run deploy` as part of this plan.

---

## File Structure

**Created:**
- `components/LandingPergolaStickyBar.tsx` — mobile-only floating CTA bar (phone + anchor link to the final form section), visible only once the hero has scrolled out of view.

**Modified:**
- `app/devis-pergola/page.tsx` — H1 copy, `data-devis-hero` attribute on the hero, new stats+nudge section, two new section ids, one new import + render of the sticky bar.

---

### Task 1: `LandingPergolaStickyBar` component

**Files:**
- Create: `components/LandingPergolaStickyBar.tsx`
- Test: `npx tsc --noEmit` (no test framework in this repo; full visual/behavioral verification happens in Task 3, once wired into the real page).

**Interfaces:**
- Consumes: `CONTACT` from `@/lib/data/navigation` (`telHref`, `telAffiche`, already used elsewhere in this codebase, e.g. `app/devis-pergola/page.tsx`).
- Produces: `LandingPergolaStickyBar` — default-exported client component, no props. Expects an element with the attribute `data-devis-hero` to exist somewhere on the page (added to the hero `<header>` in Task 2) — it observes that element's visibility via `IntersectionObserver` and renders `null` until that element is present and no longer intersecting the viewport. Expects an element with `id="devis-bas"` to exist on the page (added in Task 2) — its CTA button is a plain anchor to `#devis-bas`.

- [ ] **Step 1: Create the component**

Create `components/LandingPergolaStickyBar.tsx`:

```tsx
'use client';

import { useEffect, useState } from 'react';
import { CONTACT } from '@/lib/data/navigation';

/**
 * Barre CTA flottante, mobile uniquement : téléphone + lien vers le
 * formulaire du bas de page. N'apparaît qu'une fois le héros (repéré par
 * l'attribut data-devis-hero) sorti de l'écran — évite un doublon avec le
 * CTA déjà visible en haut de la landing page. Positionnée sous la
 * bannière cookies (z-[200] dans ConsentBanner) : celle-ci reste au-dessus
 * tant qu'elle est affichée, cette barre prend le relais dès qu'elle est
 * fermée, sans code de coordination entre les deux composants.
 */
export default function LandingPergolaStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('[data-devis-hero]');
    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-40 bg-primary text-on-primary border-t border-white/10 shadow-xl px-4 py-3 flex items-center gap-3">
      <a
        href={CONTACT.telHref}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/30 shrink-0"
        aria-label={`Appeler le ${CONTACT.telAffiche}`}
      >
        <span className="material-symbols-outlined text-[22px]">call</span>
      </a>
      <a
        href="#devis-bas"
        className="flex-1 bg-secondary text-primary py-3 rounded-xl font-label-md text-label-md text-center"
      >
        Devis gratuit
      </a>
    </div>
  );
}
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/LandingPergolaStickyBar.tsx
git commit -m "components: barre CTA flottante mobile pour la landing page pergola"
```

---

### Task 2: page edits — H1 copy, new stats section, anchor ids, wire up the sticky bar

**Files:**
- Modify: `app/devis-pergola/page.tsx`
- Test: `npx tsc --noEmit`; full behavioral verification is Task 3.

**Interfaces:**
- Consumes: `LandingPergolaStickyBar` (Task 1, default export, no props).
- Produces: no new exports — this task only edits the existing default-exported `DevisPergolaPage`.

The current file (as of the previous iteration, commit `a801590`) has this exact structure — every edit below is anchored to it verbatim:

```tsx
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { CONTACT } from '@/lib/data/navigation';
import LandingPergolaHeader from '@/components/LandingPergolaHeader';
import LandingPergolaFooter from '@/components/LandingPergolaFooter';
import LandingPergolaForm from '@/components/LandingPergolaForm';

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
        <header className="bg-primary text-on-primary pt-10 pb-14 md:pt-16 md:pb-20">
          <div className="max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4">
                Pergola sur mesure à Libourne — Devis gratuit sous 48h
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
        <section className="py-section-padding bg-surface">
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
        <section className="py-section-padding bg-primary text-on-primary">
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
    </>
  );
}
```

Apply these five edits to it:

- [ ] **Step 1: Add the `LandingPergolaStickyBar` import**

Add this import line after the existing `LandingPergolaForm` import:

```tsx
import LandingPergolaStickyBar from '@/components/LandingPergolaStickyBar';
```

- [ ] **Step 2: Broaden the H1 and mark the hero for the sticky bar's observer**

Replace:
```tsx
        <header className="bg-primary text-on-primary pt-10 pb-14 md:pt-16 md:pb-20">
```
with:
```tsx
        <header data-devis-hero className="bg-primary text-on-primary pt-10 pb-14 md:pt-16 md:pb-20">
```

Replace:
```tsx
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4">
                Pergola sur mesure à Libourne — Devis gratuit sous 48h
              </h1>
```
with:
```tsx
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4">
                Pergola sur mesure à Libourne et en Gironde — Devis gratuit sous 48h
              </h1>
```

- [ ] **Step 3: Insert the new stats + nudge section between the trust bar and the gallery**

Insert this new `<section>` immediately after the closing `</section>` of the "Bandeau de confiance" block and immediately before the `{/* Galerie de réalisations */}` comment:

```tsx
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

```

- [ ] **Step 4: Add the two anchor ids**

Replace:
```tsx
        {/* CTA répété — milieu de page */}
        <section className="py-section-padding bg-surface">
```
with:
```tsx
        {/* CTA répété — milieu de page */}
        <section id="devis-milieu" className="py-section-padding bg-surface">
```

Replace:
```tsx
        {/* CTA final */}
        <section className="py-section-padding bg-primary text-on-primary">
```
with:
```tsx
        {/* CTA final */}
        <section id="devis-bas" className="py-section-padding bg-primary text-on-primary">
```

- [ ] **Step 5: Render the sticky bar**

Replace:
```tsx
      </main>
      <LandingPergolaFooter />
    </>
  );
}
```
with:
```tsx
      </main>
      <LandingPergolaFooter />
      <LandingPergolaStickyBar />
    </>
  );
}
```

- [ ] **Step 6: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 7: Commit**

```bash
git add app/devis-pergola/page.tsx
git commit -m "devis-pergola: élargit la zone géographique du H1, ajoute preuve sociale et barre CTA mobile"
```

---

### Task 3: full verification pass (dev server, browser, no code changes)

**Files:** none created or modified.

**Interfaces:** none.

- [ ] **Step 1: Start the dev server and open the page**

Start the `espritbois-dev` preview (or `npm run dev`), navigate to `http://localhost:3000/devis-pergola`.

Expected: page loads, no console errors. H1 reads "Pergola sur mesure à Libourne et en Gironde — Devis gratuit sous 48h".

- [ ] **Step 2: Confirm the new stats section**

Confirm the new section between the trust bar and the gallery shows exactly "10 ans" / "100%" / "5.0/5", the nudge sentence, and a "Recevoir mon devis gratuit" button.

- [ ] **Step 3: Confirm the nudge button scrolls to the middle form**

Click the new section's "Recevoir mon devis gratuit" link. Expected: smooth-scrolls to the `id="devis-milieu"` section (the existing mid-page CTA form, `instanceId="milieu"`).

- [ ] **Step 4: Confirm the sticky bar's mobile-only, post-hero visibility**

Resize to the `mobile` preset (375×812). Reload the page. Expected: while the hero (H1 + phone + top form) is in view, the floating bottom bar is NOT rendered (no duplicate CTA). Scroll down past the hero. Expected: the floating bar appears, showing the phone icon/number and a "Devis gratuit" button.

At a `desktop` preset (1280px+), reload and scroll past the hero. Expected: the floating bar never appears (`md:hidden`).

- [ ] **Step 5: Confirm the sticky bar's CTA target and stacking with the cookie banner**

On mobile, with the floating bar visible, tap "Devis gratuit". Expected: smooth-scrolls to the `id="devis-bas"` section (the final CTA form, `instanceId="bas"`).

If the cookie consent banner (`ConsentBanner`) is still showing (fresh session, no stored choice), confirm it renders visually on top of the floating bar, not clipped or fought over — both are `fixed`/bottom-anchored, `ConsentBanner` at `z-[200]`, the new bar at `z-40`.

- [ ] **Step 6: Confirm nothing else on the page changed**

Confirm the galerie, comparatif section, and all three `LandingPergolaForm` instances (`haut`/`milieu`/`bas`) are visually and functionally unchanged from before this iteration — this task only added copy, one new section, and the sticky bar.

No commit for this task (no files changed).
