# Landing page `/devis-pergola` hero photo restructure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the hero's full-bleed dark-overlaid background photo with a clear, unobscured photo placed inline in the content column (between the H1 and the subtitle), and revert the form card's mobile-first ordering so the text+photo column appears before the form on every screen size — so a visitor sees what's being sold before being asked to fill out a form.

**Architecture:** Single-file change to `app/devis-pergola/page.tsx`'s hero `<header>`: remove the absolute-positioned background image + overlay, restore a plain `bg-primary` background, insert a normal inline `<img>` in the text column, and remove the `order-first md:order-none` classes from the form card. No other section of the page changes.

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript (strict), Tailwind v4 — same as the rest of the site, no new dependency.

## Global Constraints

- Reuse the exact same image already in place (`/images/realisations/pergola-aluminium-terrasse-bois-libourne-1.webp`, same `alt` text) — no new asset, no new photo choice.
- The photo must render with no dark overlay/gradient — this is the whole point of the change (a previous review's `.hero-interne` treatment was for text-over-photo legibility; that need goes away once the photo is its own inline element, not a background).
- The form card's mobile-first ordering (`order-first md:order-none`, added in the CTA-boost iteration) must be removed — natural DOM order (text column, containing photo, first; form column second) applies at every breakpoint now.
- This is a deliberate, user-confirmed trade-off: the mobile submit button will again require some scroll to reach — do not treat this as a regression to silently minimize; measure and report it honestly in verification, exactly as previous iterations did.
- Do not modify any other section of `app/devis-pergola/page.tsx` (trust bar, stats/nudge section, gallery, mid CTA, comparatif, FAQ, final CTA) or any other file (`components/LandingPergolaForm.tsx`, `components/LandingPergolaStickyBar.tsx`, `components/LandingPergolaDesktopPopup.tsx`, `lib/gtag.ts`, `lib/metadata.ts`, `app/api/contact/route.ts`, `app/pergolas/page.tsx`).
- No `next/image`, no new npm dependency, French copy/comments matching the rest of the codebase.
- `next build` can hang indefinitely without failing on this machine (repo under iCloud Drive). Verification in this plan uses `npx tsc --noEmit` and `npm run dev` — do not run `next build` or `npm run deploy` as part of this plan.

---

## File Structure

**Modified:**
- `app/devis-pergola/page.tsx` — hero `<header>` only.

---

### Task 1: restructure the hero — clear inline photo, revert mobile form ordering

**Files:**
- Modify: `app/devis-pergola/page.tsx`
- Test: `npx tsc --noEmit`; full visual verification is Task 2.

**Interfaces:**
- No new exports, no new props — this task only edits markup inside the existing default-exported `DevisPergolaPage`'s hero `<header>` block.

The current hero block (as of the desktop-popup iteration, commit `9435d43`) reads exactly as follows:

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
```

- [ ] **Step 1: Replace the entire hero block**

Replace the whole block above (from the `{/* Hero : ... */}` comment through the closing `</header>`) with:

```tsx
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
                alt="Pergola aluminium adossée et terrasse bois réalisées par L'Esprit Bois près de Libourne"
              />
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
            <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-xl">
              <h2 className="font-headline-sm text-headline-sm text-primary mb-6">
                Recevez votre devis gratuit
              </h2>
              <LandingPergolaForm instanceId="haut" />
            </div>
          </div>
        </header>
```

Note exactly what changed versus the original block: `data-devis-hero` stays (still needed by `LandingPergolaStickyBar`'s `IntersectionObserver` and `LandingPergolaDesktopPopup`'s trigger logic — do not remove it); `relative`/`overflow-hidden` are gone from the header's className (no longer needed without an absolutely-positioned child); the `absolute inset-0 z-0` image-and-overlay block is gone entirely; the content grid's `relative z-10` is gone; the `<h1>`'s `mb-4` became `mb-6`; a new `<img>` (identical attributes to the removed background image, but now `h-56 md:h-64 object-cover rounded-2xl mb-6` instead of `w-full h-full object-cover`) sits between the `<h1>` and the `<p>` subtitle; the form card's `order-first md:order-none` classes are gone.

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/devis-pergola/page.tsx
git commit -m "devis-pergola: photo nette dans le héros, ordre naturel texte-puis-formulaire partout"
```

---

### Task 2: full verification pass (dev server, browser, no code changes)

**Files:** none created or modified.

**Interfaces:** none.

- [ ] **Step 1: Start the dev server and open the page at desktop width**

Start the `espritbois-dev` preview (or `npm run dev`), navigate to `http://localhost:3000/devis-pergola` at a desktop viewport (≥1024px).

Expected: page loads, no console errors. The hero background is solid dark (`bg-primary`), not a photo. Between the H1 and the subtitle, a clear, unobscured photo of the pergola/terrasse renders with rounded corners — no dark overlay/gradient over it.

- [ ] **Step 2: Confirm mobile ordering**

Resize to a mobile viewport (375px). Reload the page fresh. Expected reading order top to bottom: logo header, H1, photo, subtitle, phone button, then the form card (form card no longer appears before the text/photo).

- [ ] **Step 3: Measure and report the mobile scroll-to-submit distance honestly**

At 375px, measure how far down the page the hero form's submit button (`instanceId="haut"`) sits (e.g. via `getBoundingClientRect()` on the button after a fresh load, no scroll). Report the actual number — this is an accepted trade-off per the spec, not something to minimize or omit.

- [ ] **Step 4: Confirm the sticky bar and desktop popup still trigger correctly**

Both `LandingPergolaStickyBar` (mobile) and `LandingPergolaDesktopPopup` (desktop) depend on `[data-devis-hero]` staying in the DOM to detect when the hero has scrolled out of view. Confirm `data-devis-hero` is still present on the header (inspect the DOM), and confirm both components still behave as before this change (sticky bar appears on mobile after scrolling past the hero; popup still triggers on desktop at 70% scroll progress) — this task didn't intend to change either behavior, only the hero's own visual content, so this is a regression check, not new functionality.

- [ ] **Step 5: Confirm no other regressions**

Confirm the trust bar, stats+nudge section, gallery, mid-page CTA, comparatif cards, FAQ, and final CTA are all visually and functionally unchanged from before this iteration.

No commit for this task (no files changed).
