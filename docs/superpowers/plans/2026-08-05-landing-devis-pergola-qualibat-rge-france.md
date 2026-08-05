# Landing page `/devis-pergola` Qualibat RGE and France badge Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Strengthen the trust bar's Qualibat text to include the RGE mention (a confirmed-true fact), and add a fourth trust item signaling French in-house manufacturing, using a plain 🇫🇷 emoji rather than any logo/icon asset.

**Architecture:** Single-file change to `app/devis-pergola/page.tsx`'s trust bar section: one text edit, one new fourth item, one grid className change. No new components, no new assets, no shared-file changes.

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript (strict), Tailwind v4 — same as the rest of the site, no new dependency.

## Global Constraints

- No Qualibat/RGE logo image asset is added anywhere — text only. This was an explicit user decision after being told official certification logos are usage-restricted to verified certificate holders and the actual file wasn't available; do not substitute an unofficial logo found online, a generated icon, or any graphic implying an official mark.
- The RGE claim ("Certifiés Qualibat RGE") is a confirmed-true fact per the user — do not soften, hedge, or remove it, but also do not embellish it further (e.g. do not add a specific RGE sub-mention/domain not stated by the user).
- The France/manufacturing claim must use exactly the user-approved wording "Fabrication en atelier, en France" — do not substitute a broader claim about material origin (wood/aluminum sourcing), which was explicitly identified as unverified and out of scope.
- The French flag must be the plain Unicode emoji 🇫🇷 — not a Material Symbols icon name (none exists for this), not an SVG asset, not an image file.
- Do not modify any other section of `app/devis-pergola/page.tsx` (hero, stats/nudge section, gallery, mid CTA, comparatif, FAQ, final CTA) or any other file (`components/LandingPergolaForm.tsx`, `components/LandingPergolaStickyBar.tsx`, `components/LandingPergolaDesktopPopup.tsx`, `lib/gtag.ts`, `lib/metadata.ts`, `app/api/contact/route.ts`, `app/pergolas/page.tsx`).
- No `next/image`, no new npm dependency, French copy/comments matching the rest of the codebase.
- `next build` can hang indefinitely without failing on this machine (repo under iCloud Drive). Verification in this plan uses `npx tsc --noEmit` and `npm run dev` — do not run `next build` or `npm run deploy` as part of this plan.

---

## File Structure

**Modified:**
- `app/devis-pergola/page.tsx` — trust bar section (`aria-label="Nos garanties"`) only.

---

### Task 1: strengthen Qualibat text, add France trust item, expand grid

**Files:**
- Modify: `app/devis-pergola/page.tsx`
- Test: `npx tsc --noEmit`; full visual verification is Task 2.

**Interfaces:**
- No new exports, no new props — this task only edits static JSX markup inside the existing default-exported `DevisPergolaPage`'s trust bar section.

The current trust bar block (as of the hero-photo-restructure iteration, commit `ab27b02`) reads exactly as follows:

```tsx
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
```

- [ ] **Step 1: Replace the entire trust bar block**

Replace the whole block above with:

```tsx
        {/* Bandeau de confiance */}
        <section className="bg-surface border-b border-surface-variant" aria-label="Nos garanties">
          <div className="max-w-container-max mx-auto px-6 md:px-16 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-dark text-3xl shrink-0">verified</span>
              <div>
                <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Certifiés Qualibat RGE
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
            <div className="flex items-center gap-4">
              <span className="text-3xl shrink-0" aria-hidden="true">🇫🇷</span>
              <div>
                <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Fabrication en atelier, en France
                </p>
                <p className="text-on-surface-variant text-body-md">Conception et pose par nos équipes, sans sous-traitance</p>
              </div>
            </div>
          </div>
        </section>
```

Note exactly what changed: the grid className gained `sm:grid-cols-2 lg:grid-cols-4` in place of `md:grid-cols-3`; the first item's title text changed from "Certifiés Qualibat" to "Certifiés Qualibat RGE" (icon and subtext unchanged); the second and third items are byte-identical to before; a fourth item was appended, structurally identical to the other three (`flex items-center gap-4` wrapper, `text-3xl shrink-0` leading glyph, title + subtext), except its leading glyph is the plain emoji `🇫🇷` inside a `<span aria-hidden="true">` instead of a `material-symbols-outlined` icon span (emoji already convey their meaning visually to sighted users and are marked `aria-hidden` here consistent with how decorative leading glyphs are treated elsewhere on this page — the adjacent text carries the actual information for assistive technology).

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/devis-pergola/page.tsx
git commit -m "devis-pergola: renforce Qualibat RGE et ajoute la fabrication France au bandeau de confiance"
```

---

### Task 2: full verification pass (dev server, browser, no code changes)

**Files:** none created or modified.

**Interfaces:** none.

- [ ] **Step 1: Start the dev server and open the page**

Start the `espritbois-dev` preview (or `npm run dev`), navigate to `http://localhost:3000/devis-pergola`.

Expected: page loads, no console errors. The trust bar now shows 4 items in order: "Certifiés Qualibat RGE", "Garantie décennale", "Libourne & Gironde", "Fabrication en atelier, en France".

- [ ] **Step 2: Confirm the flag renders as an actual flag glyph**

Inspect the fourth item's leading glyph. Expected: a real French tricolor flag icon (🇫🇷), not literal text like "FR" or a broken/missing-glyph box — flag emoji rendering depends on the OS/browser font, so this needs an actual visual check, not just confirming the Unicode characters are present in the DOM.

- [ ] **Step 3: Confirm the grid layout at three widths**

Check at mobile (375px): 1 column, 4 items stacked. Tablet (~768px): 2 columns × 2 rows. Desktop (≥1024px): 4 columns in one row.

- [ ] **Step 4: Confirm no regressions elsewhere**

Confirm the hero, stats+nudge section, gallery, mid-page CTA, comparatif cards, FAQ, final CTA, footer, sticky bar, and desktop popup are all visually and functionally unchanged from before this iteration — this task only touched the trust bar.

No commit for this task (no files changed).
