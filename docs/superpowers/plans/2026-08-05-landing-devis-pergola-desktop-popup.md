# Landing page `/devis-pergola` desktop popup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a desktop-only, once-per-session popup to the already-live `/devis-pergola` landing page that triggers at 50% scroll depth and offers both a phone call and a "get a quote" path, without duplicating the mobile-only sticky bar that already covers this need on mobile.

**Architecture:** One new small client component (`LandingPergolaDesktopPopup`) using a scroll listener + `sessionStorage` to trigger once, rendered once from `app/devis-pergola/page.tsx` alongside the existing `LandingPergolaStickyBar`. No shared-file changes — the popup's "get a quote" action is a plain anchor to the existing final CTA form (`#devis-bas`), not a new form instance, so no new tracking wiring is needed.

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript (strict), Tailwind v4 — same as the rest of the site, no new dependency.

## Global Constraints

- Popup must be desktop-only: never rendered on mobile (`md:` breakpoint and up only), regardless of scroll position — the mobile-only `LandingPergolaStickyBar` (already live) covers the same need there.
- Trigger: scroll progress ≥ 0.5 (`window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)`), computed on a passive `scroll` listener. No time-based or exit-intent trigger — explicitly rejected in the spec.
- Must show at most once per browser session: use `sessionStorage` (NOT `localStorage`, which would persist across visits) with a dedicated key, checked before attaching the scroll listener and written immediately when the popup fires.
- Must be dismissible three ways: a close control, a click on the backdrop outside the dialog, and the `Escape` key.
- The popup's "get a quote" action must be a plain anchor to `#devis-bas` (the existing final CTA section, already has `id="devis-bas"` from a prior iteration) — do NOT render a new `LandingPergolaForm` instance inside the popup, and do NOT add any new tracking function to `lib/gtag.ts`. The phone link must use `CONTACT.telHref`/`CONTACT.telAffiche` — its conversion tracking is already global via `PhoneClickTracker` (mounted in `app/layout.tsx`), no new code needed for it.
- Close control must be a plain text character (`×`), NOT a Material icon — this codebase's icon font is a 64-glyph local subset and `close` is not in it; introducing an unlisted icon name silently renders as literal text on the live site.
- Stacking: `z-50` on the popup, below `ConsentBanner`'s `z-[200]` (`components/ConsentBanner.tsx`, `fixed inset-x-0 bottom-0`) so the cookie banner is never obstructed.
- Do not modify `components/LandingPergolaForm.tsx`, `components/LandingPergolaHeader.tsx`, `components/LandingPergolaFooter.tsx`, `components/LandingPergolaStickyBar.tsx`, `lib/gtag.ts`, `lib/metadata.ts`, or `app/api/contact/route.ts`.
- No `next/image`, no new npm dependency, French copy/comments matching the rest of the codebase.
- `next build` can hang indefinitely without failing on this machine (repo under iCloud Drive). Verification in this plan uses `npx tsc --noEmit` and `npm run dev` — do not run `next build` or `npm run deploy` as part of this plan.

---

## File Structure

**Created:**
- `components/LandingPergolaDesktopPopup.tsx` — desktop-only, once-per-session scroll-triggered popup with phone + quote-request actions.

**Modified:**
- `app/devis-pergola/page.tsx` — one new import, one new render line.

---

### Task 1: `LandingPergolaDesktopPopup` component and page wiring

**Files:**
- Create: `components/LandingPergolaDesktopPopup.tsx`
- Modify: `app/devis-pergola/page.tsx`
- Test: `npx tsc --noEmit` (no test framework in this repo); full behavioral/visual verification is Task 2.

**Interfaces:**
- Consumes: `CONTACT` from `@/lib/data/navigation` (`telHref`, `telAffiche`, already used elsewhere on this page).
- Produces: `LandingPergolaDesktopPopup` — default-exported client component, no props.

- [ ] **Step 1: Create the component**

Create `components/LandingPergolaDesktopPopup.tsx`:

```tsx
'use client';

import { useEffect, useState } from 'react';
import { CONTACT } from '@/lib/data/navigation';

const SESSION_KEY = 'lb-devis-pergola-popup-shown';

/**
 * Pop-up de relance, desktop uniquement (voir la classe `hidden md:flex`
 * sur la racine ci-dessous) : sur mobile, LandingPergolaStickyBar affiche
 * déjà en permanence téléphone + bouton devis dès que le héros est
 * dépassé, un pop-up identique y ferait doublon. Se déclenche une seule
 * fois par session au premier passage sous les 50% de défilement de la
 * page, mémorisé en sessionStorage (pas localStorage, qui persisterait
 * entre les visites).
 */
export default function LandingPergolaDesktopPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    function onScroll() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const progression = window.scrollY / scrollable;
      if (progression >= 0.5) {
        setVisible(true);
        sessionStorage.setItem(SESSION_KEY, '1');
        window.removeEventListener('scroll', onScroll);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!visible) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setVisible(false);
    }

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="hidden md:flex fixed inset-0 z-50 items-center justify-center bg-black/50 px-6"
      onClick={() => setVisible(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Recevoir un devis ou appeler"
        className="relative bg-surface rounded-2xl shadow-2xl max-w-md w-full p-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Fermer"
          className="absolute top-4 right-4 text-2xl leading-none text-on-surface-variant hover:text-primary"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <h2 className="font-headline-sm text-headline-sm text-primary mb-3">
          Une question avant de vous lancer ?
        </h2>
        <p className="text-on-surface-variant font-body-md text-body-md mb-6">
          Appelez-nous directement, ou recevez votre devis gratuit sous 48h.
        </p>
        <div className="flex flex-col gap-3">
          <a
            href={CONTACT.telHref}
            className="inline-flex items-center justify-center gap-2 bg-surface-container-low border border-surface-variant text-primary px-6 py-4 rounded-xl font-label-md text-label-md hover:bg-surface-container transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">call</span>
            {CONTACT.telAffiche}
          </a>
          <a
            href="#devis-bas"
            onClick={() => setVisible(false)}
            className="bg-primary text-on-primary px-6 py-4 rounded-xl font-label-md text-label-md hover:bg-secondary hover:text-primary transition-all"
          >
            Recevoir mon devis gratuit
          </a>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Wire it into the page**

In `app/devis-pergola/page.tsx`, add the import after the existing `LandingPergolaStickyBar` import:

```tsx
import LandingPergolaDesktopPopup from '@/components/LandingPergolaDesktopPopup';
```

Then replace:
```tsx
      <LandingPergolaFooter />
      <LandingPergolaStickyBar />
    </>
  );
}
```
with:
```tsx
      <LandingPergolaFooter />
      <LandingPergolaStickyBar />
      <LandingPergolaDesktopPopup />
    </>
  );
}
```

- [ ] **Step 3: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/LandingPergolaDesktopPopup.tsx app/devis-pergola/page.tsx
git commit -m "devis-pergola: pop-up desktop de relance (défilement 50%, une fois par session)"
```

---

### Task 2: full verification pass (dev server, browser, no code changes)

**Files:** none created or modified.

**Interfaces:** none.

- [ ] **Step 1: Start the dev server and open the page at desktop width**

Start the `espritbois-dev` preview (or `npm run dev`), resize to a desktop viewport (≥768px wide), navigate to `http://localhost:3000/devis-pergola`.

Expected: page loads, no console errors, no popup visible yet (top of page, scroll progress is 0).

- [ ] **Step 2: Trigger the popup by scrolling past 50%**

Scroll down past the halfway point of the page. Expected: the popup appears — a dark backdrop, a centered white dialog with the heading "Une question avant de vous lancer ?", a phone button showing `05 57 40 65 80`, and a "Recevoir mon devis gratuit" button. Confirm via the DOM/accessibility tree that the phone link's `href` is `tel:+33557406580` and the quote button's `href` is `#devis-bas`.

- [ ] **Step 3: Confirm it only fires once per session**

Close the popup (any method from Step 5), then scroll back up and down past 50% again in the same page session (no reload). Expected: the popup does NOT reappear. Reload the page fully and repeat Step 2 — expected: since this is a `sessionStorage` flag (not cleared by a normal reload within the same tab/session), the popup should still NOT reappear after reload, confirming the flag genuinely persists for the session rather than only for the component's lifetime. (If you need to reset it for testing, clear `sessionStorage` via devtools/console and reload.)

- [ ] **Step 4: Confirm the quote button works**

With the popup visible, click "Recevoir mon devis gratuit". Expected: the popup closes and the page scrolls to the final CTA section (`id="devis-bas"`, containing the `instanceId="bas"` form) — confirm by checking `window.scrollY` lands near that section, or visually confirm the final form is in view after the click.

- [ ] **Step 5: Confirm all three dismissal methods work**

Test independently (resetting `sessionStorage` and re-triggering between each, or by not letting any one method's test invalidate the others):
- Click the `×` close button — popup closes.
- Click the dark backdrop outside the dialog box — popup closes.
- Press `Escape` while the popup is open — popup closes.

- [ ] **Step 6: Confirm mobile exclusion**

Resize to a mobile viewport (375px). Reload the page (fresh `sessionStorage` state via a new tab, or confirm the flag doesn't matter since the popup shouldn't render regardless). Scroll past 50% of the page. Expected: the popup never appears at this viewport width — confirm via computed style (`display: none` from the `hidden md:flex` classes) rather than just visual absence, since the component may still mount/set `visible` state internally even though it's not displayed.

- [ ] **Step 7: Confirm no regressions elsewhere**

Confirm the mobile sticky bar (from the prior iteration) still works as before, the 3 `LandingPergolaForm` instances are unaffected, and the cookie consent banner (if present, fresh session) still displays above the popup when both would otherwise be visible (`ConsentBanner` `z-[200]` vs popup `z-50`).

No commit for this task (no files changed).
