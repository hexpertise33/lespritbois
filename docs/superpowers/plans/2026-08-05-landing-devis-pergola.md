# Landing page Google Ads `/devis-pergola` Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a standalone, `noindex`, single-purpose landing page at
`/devis-pergola` that converts Google Ads pergola traffic into leads through
the existing Resend/GA4/Google Ads pipeline, without touching `/pergolas` or
any site navigation.

**Architecture:** One new Server Component page assembling two small
presentational components (brand header, minimal footer) and three instances
of one new client-component form. Three existing shared files get small,
additive, backward-compatible extensions (`buildMetadata`'s `noindex` flag,
a new `reportLeadGenerated()` tracker, an optional `source` field on the
contact e-mail). No new dependencies, no new design tokens, no `next/image`
(the codebase uses plain `<img>` everywhere).

**Tech Stack:** Next.js 15 (App Router, Server Components), React 19,
TypeScript (strict), Tailwind v4 (existing tokens in `app/globals.css`),
Resend (existing `/api/contact` route), `gtag.js` (already loaded globally
in `app/layout.tsx`).

## Global Constraints

- Route: `/devis-pergola` exactly (spec decision 1).
- `robots: 'noindex, nofollow'` on this page only — every other page's
  `buildMetadata()` call must keep producing
  `'index, follow, max-image-preview:large, max-snippet:-1'` unchanged.
- No entry added to `app/sitemap.xml/route.ts`'s `PAGES_STATIQUES`.
- No reference to `/devis-pergola` added to `components/SiteNav.tsx`,
  `components/SiteFooter.tsx`, or `lib/data/navigation.ts`.
- `components/ContactForm.tsx` and `app/pergolas/page.tsx` are **not**
  modified.
- Icons: only use names from this confirmed-safe set (already in the
  64-glyph local font subset, verified 2026-08-05):
  `add_home, air, approval, arrow_back, arrow_downward, arrow_forward,
  blinds, bolt, cabin, call, check, check_circle, construction, cottage,
  deck, description, design_services, directions, door_sliding, edit_note,
  fence, forum, grid_goldenratio, groups, handshake, home, home_work,
  horizontal_rule, horizontal_split, house_siding, layers, lightbulb,
  linear_scale, location_on, mail, map, open_in_new, outdoor_grill, palette,
  person, phone_in_talk, photo_camera, plumbing, pool,
  precision_manufacturing, roller_shades, roofing, schedule, sensors,
  settings_remote, shield, straighten, thumb_up, tune, umbrella, verified,
  visibility_off, water_drop, wb_sunny`. Do not introduce any icon name
  outside this list.
- Phone: display `05 57 40 65 80`, link `tel:+33557406580` — always via
  `CONTACT.telAffiche` / `CONTACT.telHref` from `lib/data/navigation.ts`,
  never hardcoded.
- Tracking IDs (`lib/gtag.ts`, do not change): `GADS_ID =
  'AW-18163716378'`, `GA4_ID = 'G-DBV2Q8X8T2'`. Phone-click conversion is
  already global via `PhoneClickTracker` — no new code needed for it.
- No `next/image` — this codebase uses plain `<img>` with explicit
  `width`/`height` everywhere (confirmed: zero `next/image` imports in the
  repo).
- No new npm dependency.
- `next build` can hang indefinitely without failing on this machine
  because the repo lives under iCloud Drive (`fileproviderd` stalls under
  bulk file I/O). Verification in this plan uses `npx tsc --noEmit`
  (read-only, fast) and `npm run dev` (long-running server, not a batch
  build) — **do not run `next build` or `npm run deploy`** as part of this
  plan. Production build/deploy is a separate follow-up step requiring the
  user's explicit go-ahead.

---

## File Structure

**Created:**
- `components/LandingPergolaHeader.tsx` — brand identity bar (logo mark +
  wordmark + baseline), non-clickable, no nav.
- `components/LandingPergolaFooter.tsx` — one-line footer (© + address +
  Mentions légales link only).
- `components/LandingPergolaForm.tsx` — client component, lead form with
  UTM/gclid capture and dual conversion firing (Google Ads + GA4).
- `app/devis-pergola/page.tsx` — the page itself.

**Modified (additive, backward-compatible):**
- `lib/metadata.ts` — add optional `noindex?: boolean` param to
  `buildMetadata()`.
- `lib/gtag.ts` — add `reportLeadGenerated()`.
- `app/api/contact/route.ts` — accept optional `source` field, appended to
  the lead e-mail if present.

---

### Task 1: `noindex` support in `buildMetadata()`

**Files:**
- Modify: `lib/metadata.ts`
- Test: manual, via `npx tsc --noEmit` (no test framework in this repo —
  it's a Next.js marketing site with zero existing unit tests; type-check
  plus the browser verification in Task 7 is the established verification
  method here).

**Interfaces:**
- Produces: `buildMetadata(opts: { ...existing fields..., noindex?:
  boolean })` — when `noindex` is `true`, the returned `Metadata.robots` is
  `'noindex, nofollow'`; when omitted or `false`, behavior is byte-for-byte
  identical to today (`'index, follow, max-image-preview:large,
  max-snippet:-1'`).

- [ ] **Step 1: Add the `noindex` param and branch the `robots` value**

Edit `lib/metadata.ts` — replace the whole file with:

```ts
import type { Metadata } from 'next';
import { SITE } from './data/navigation';

/**
 * Reproduit exactement la logique de `src/layouts/Site.astro` :
 * - canonical sans slash final, sauf la racine qui garde `/`
 *   (Astro.url.pathname.replace(/\/+$/, '') || '/')
 * - og:image / twitter:image en URL absolue
 * - geo.region / geo.placename, theme-color
 */
export function buildMetadata(opts: {
  title: string;
  description: string;
  keywords?: string;
  path: string; // ex: '/', '/pergolas'
  ogImage?: string;
  ogTitle?: string;
  ville?: string;
  /** Pages hors indexation (ex : landing page publicitaire) — pose
   *  `robots: 'noindex, nofollow'` au lieu de la valeur indexable par défaut. */
  noindex?: boolean;
}): Metadata {
  const {
    title,
    description,
    keywords,
    path,
    ogImage = '/images/source-adefrance/mais-en-a-accueil.webp',
    ogTitle,
    ville = 'Libourne',
    noindex = false,
  } = opts;

  const base = SITE.url;
  const chemin = path.replace(/\/+$/, '') || '/';
  const canonical = chemin === '/' ? `${base}/` : `${base}${chemin}`;
  const imageAbsolue = new URL(ogImage, base).href;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    robots: noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1',
    icons: {
      icon: '/favicon.svg',
    },
    other: {
      'geo.region': 'FR-33',
      'geo.placename': ville,
      'theme-color': '#141414',
    },
    openGraph: {
      type: 'website',
      locale: 'fr_FR',
      siteName: SITE.nom,
      title: ogTitle ?? title,
      description,
      images: [{ url: imageAbsolue }],
      url: canonical,
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle ?? title,
      description,
      images: [imageAbsolue],
    },
  };
}
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors (in particular, no error in `app/pergolas/page.tsx`,
`app/carports/page.tsx`, or any other existing caller of `buildMetadata` —
they don't pass `noindex`, which is fine since it's optional).

- [ ] **Step 3: Commit**

```bash
git add lib/metadata.ts
git commit -m "metadata: option noindex pour les pages hors indexation"
```

---

### Task 2: `reportLeadGenerated()` GA4 event

**Files:**
- Modify: `lib/gtag.ts`
- Test: `npx tsc --noEmit`

**Interfaces:**
- Consumes: nothing new (uses the existing `window.gtag` global already
  declared in this file).
- Produces: `reportLeadGenerated(): void` — exported function, no-op on the
  server or before `gtag.js` loads (same guard pattern as
  `reportFormConversion` / `reportPhoneConversion`).

- [ ] **Step 1: Add the function**

Edit `lib/gtag.ts` — insert this new exported function directly after
`reportPhoneConversion` (i.e. after the closing brace on the line
containing `}` that ends that function, before the `// --- Consentement
...` comment block):

```ts
/**
 * Pousse l'événement GA4 `generate_lead` (propriété G-DBV2Q8X8T2).
 * Utilisé uniquement par la landing page Google Ads /devis-pergola — les
 * autres formulaires du site (ex. /contact) ne déclenchent que la
 * conversion Google Ads via reportFormConversion, sans cet événement GA4.
 * No-op côté serveur ou si la balise n'est pas encore chargée.
 */
export function reportLeadGenerated(): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', 'generate_lead', {
    currency: 'EUR',
    value: 1.0,
  });
}
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add lib/gtag.ts
git commit -m "gtag: ajoute reportLeadGenerated() pour l'événement GA4 generate_lead"
```

---

### Task 3: optional `source` field on the contact e-mail

**Files:**
- Modify: `app/api/contact/route.ts`
- Test: `npx tsc --noEmit`, then a manual `curl` against the dev server
  (started in Task 7's Step 1, or start it now with `npm run dev` in a
  background shell if testing this task in isolation).

**Interfaces:**
- Consumes: nothing new.
- Produces: `POST /api/contact` now accepts an additional optional JSON
  field `source: string`. Omitting it is byte-for-byte identical to
  today's behavior. When present, it's appended as a final line/paragraph
  to both the plain-text and HTML e-mail bodies sent via Resend.

- [ ] **Step 1: Add the optional field and append it to the e-mail**

Edit `app/api/contact/route.ts` — full replacement:

```ts
import { Resend } from 'resend';
import { CONTACT } from '@/lib/data/navigation';

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Corps de requête JSON invalide.' }, { status: 400 });
  }

  const { nom, tel, message, projet, budget, source } = body as Record<string, string | undefined>;

  if (!nom?.trim() || !tel?.trim() || !message?.trim()) {
    return Response.json(
      { error: 'Les champs nom, téléphone et message sont obligatoires.' },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { error: "Configuration serveur incomplète : RESEND_API_KEY n'est pas défini." },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      // Domaine lesprit-bois.fr vérifié sur Resend (DKIM/SPF/DMARC) : envoi depuis
      // une adresse du domaine, ce qui autorise la livraison vers n'importe quel
      // destinataire (dont lespritbois33@gmail.com défini dans CONTACT.email).
      from: "L'Esprit Bois <contact@lesprit-bois.fr>",
      to: CONTACT.email,
      subject: `Nouvelle demande de devis : ${projet ?? 'Projet non précisé'}`,
      text: [
        `Projet : ${projet ?? 'Non précisé'}`,
        `Budget estimé : ${budget ?? 'Non précisé'}`,
        `Nom : ${nom}`,
        `Téléphone : ${tel}`,
        '',
        'Message :',
        message,
        ...(source ? ['', `Origine : ${source}`] : []),
      ].join('\n'),
      html: `
        <p><strong>Projet :</strong> ${projet ?? 'Non précisé'}</p>
        <p><strong>Budget estimé :</strong> ${budget ?? 'Non précisé'}</p>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Téléphone :</strong> ${tel}</p>
        <p><strong>Message :</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
        ${source ? `<p><strong>Origine :</strong> ${source}</p>` : ''}
      `,
    });

    if (error) {
      return Response.json({ error: error.message ?? "Échec de l'envoi de l'e-mail." }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    return Response.json(
      { error: err instanceof Error ? err.message : "Échec de l'envoi de l'e-mail." },
      { status: 500 }
    );
  }
}
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Verify the validation path still rejects incomplete data**

If the dev server isn't already running, start it in the background:

Run: `npm run dev` (background)
Wait for `Ready in` in the output, then:

Run:
```bash
curl -s -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"nom":"","tel":"","message":""}'
```
Expected: `{"error":"Les champs nom, téléphone et message sont obligatoires."}`
with HTTP 400 (add `-i` to see the status line if needed).

This step deliberately does **not** submit a valid payload here — a valid
payload triggers a real Resend send to `CONTACT.email`
(`lespritbois33@gmail.com`) if `RESEND_API_KEY` is configured locally, and
that's better exercised once (with an obviously-marked test payload) during
the full page walkthrough in Task 7, not repeated across tasks.

- [ ] **Step 4: Commit**

```bash
git add app/api/contact/route.ts
git commit -m "api/contact: accepte un champ optionnel source (provenance du lead)"
```

---

### Task 4: brand-consistent header and minimal footer

**Files:**
- Create: `components/LandingPergolaHeader.tsx`
- Create: `components/LandingPergolaFooter.tsx`
- Test: `npx tsc --noEmit` (full visual check happens in Task 7 once these
  are wired into the page — they render nothing meaningful in isolation).

**Interfaces:**
- Produces: `LandingPergolaHeader` — default-exported component, no props,
  renders a non-clickable brand identity bar.
- Produces: `LandingPergolaFooter` — default-exported component, no props,
  renders a single-line footer with copyright, address, and a link to
  `/mentions-legales`.
- Consumes: `CONTACT` from `@/lib/data/navigation` (already defined,
  exports `adresseComplete`).

- [ ] **Step 1: Create the header**

Create `components/LandingPergolaHeader.tsx`:

```tsx
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
```

- [ ] **Step 2: Create the footer**

Create `components/LandingPergolaFooter.tsx`:

```tsx
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
```

- [ ] **Step 3: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/LandingPergolaHeader.tsx components/LandingPergolaFooter.tsx
git commit -m "components: en-tête et pied de page minimaux pour la landing page pergola"
```

---

### Task 5: `LandingPergolaForm` client component

**Files:**
- Create: `components/LandingPergolaForm.tsx`
- Test: `npx tsc --noEmit` (functional test happens in Task 7, once it's
  mounted on an actual page — a form component can't meaningfully be
  exercised without a DOM to submit from).

**Interfaces:**
- Consumes: `reportFormConversion`, `reportLeadGenerated` from
  `@/lib/gtag` (the second one created in Task 2).
- Produces: `LandingPergolaForm({ instanceId: 'haut' | 'milieu' | 'bas' })`
  — default-exported client component. `instanceId` must be unique per
  instance on the page (used to build unique DOM ids and to tag which CTA
  position generated the lead).

- [ ] **Step 1: Create the component**

Create `components/LandingPergolaForm.tsx`:

```tsx
'use client';

import { useState, type FormEvent } from 'react';
import { reportFormConversion, reportLeadGenerated } from '@/lib/gtag';

type Etat = 'idle' | 'loading' | 'success' | 'error';
type InstanceId = 'haut' | 'milieu' | 'bas';

const PARAMETRES_SUIVIS = ['utm_source', 'utm_medium', 'utm_campaign', 'gclid'] as const;

/**
 * Construit la mention d'origine ajoutée à l'e-mail de lead : la position du
 * CTA sur la page, plus les paramètres UTM/gclid présents dans l'URL
 * courante (lus au moment du submit, sans jamais rediriger la page — donc
 * sans jamais perdre le gclid que Google Ads a besoin de retrouver).
 */
function construireOrigine(instanceId: InstanceId): string {
  const base = `Page : /devis-pergola (formulaire ${instanceId})`;
  if (typeof window === 'undefined') return base;
  const params = new URLSearchParams(window.location.search);
  const trouves = PARAMETRES_SUIVIS.map((cle) => {
    const valeur = params.get(cle);
    return valeur ? `${cle}=${valeur}` : null;
  }).filter((v): v is string => v !== null);
  return trouves.length > 0 ? `${base} — ${trouves.join(', ')}` : base;
}

export default function LandingPergolaForm({ instanceId }: { instanceId: InstanceId }) {
  const [etat, setEtat] = useState<Etat>('idle');
  const [erreur, setErreur] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEtat('loading');
    setErreur(null);

    try {
      const donnees = Object.fromEntries(new FormData(e.currentTarget));
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...donnees,
          projet: 'Pergola (landing Ads)',
          source: construireOrigine(instanceId),
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Une erreur est survenue lors de l'envoi.");
      }

      setEtat('success');
      // Deux signaux distincts : la conversion Google Ads (comme /contact)
      // et l'événement GA4 generate_lead, dédié à cette landing page.
      reportFormConversion();
      reportLeadGenerated();
    } catch (err) {
      setErreur(err instanceof Error ? err.message : "Une erreur est survenue lors de l'envoi.");
      setEtat('error');
    }
  }

  if (etat === 'success') {
    return (
      <div className="space-y-4 text-center py-12">
        <span className="material-symbols-outlined text-secondary-dark text-5xl">check_circle</span>
        <h3 className="font-headline-sm text-headline-sm text-primary">Merci pour votre demande !</h3>
        <p className="text-on-surface-variant font-body-md text-body-md">
          Nous revenons vers vous sous 48h avec une première estimation.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="font-label-md text-label-md text-primary" htmlFor={`nom-${instanceId}`}>
            Nom &amp; Prénom
          </label>
          <input
            id={`nom-${instanceId}`}
            name="nom"
            className="w-full border-b-2 border-surface-variant focus:border-secondary transition-colors py-3 px-0 bg-transparent outline-none placeholder:text-surface-dim"
            placeholder="Jean Dupont"
            type="text"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="font-label-md text-label-md text-primary" htmlFor={`tel-${instanceId}`}>
            Téléphone
          </label>
          <input
            id={`tel-${instanceId}`}
            name="tel"
            className="w-full border-b-2 border-surface-variant focus:border-secondary transition-colors py-3 px-0 bg-transparent outline-none placeholder:text-surface-dim"
            placeholder="06 00 00 00 00"
            type="tel"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="font-label-md text-label-md text-primary" htmlFor={`budget-${instanceId}`}>
          Budget estimé
        </label>
        <select
          id={`budget-${instanceId}`}
          name="budget"
          className="w-full border-b-2 border-surface-variant focus:border-secondary transition-colors py-3 px-0 bg-transparent outline-none"
        >
          <option>Je ne sais pas encore</option>
          <option>&lt; 5 000 €</option>
          <option>5 000 € à 15 000 €</option>
          <option>15 000 € à 50 000 €</option>
          <option>+ 50 000 €</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="font-label-md text-label-md text-primary" htmlFor={`message-${instanceId}`}>
          Dites-nous en plus
        </label>
        <textarea
          id={`message-${instanceId}`}
          name="message"
          className="w-full border-b-2 border-surface-variant focus:border-secondary transition-colors py-3 px-0 bg-transparent outline-none placeholder:text-surface-dim resize-none"
          placeholder="Dimensions, essence de bois souhaitée, commune…"
          rows={3}
          required
        />
      </div>
      <button
        className="w-full bg-primary text-on-primary py-5 rounded-xl font-label-md text-label-md shadow-lg hover:bg-secondary hover:text-primary hover:-translate-y-1 transition-all disabled:opacity-60"
        type="submit"
        disabled={etat === 'loading'}
      >
        {etat === 'loading' ? 'Envoi en cours…' : 'Recevoir mon devis gratuit'}
      </button>
      {etat === 'error' && erreur && (
        <p className="text-center text-sm text-red-600" role="alert">
          {erreur}
        </p>
      )}
      <p className="text-center text-xs text-on-surface-variant">
        Vos données sont sécurisées et ne seront jamais partagées. Conformité RGPD assurée.
      </p>
    </form>
  );
}
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/LandingPergolaForm.tsx
git commit -m "components: formulaire de lead dédié à la landing page pergola (UTM/gclid + GA4)"
```

---

### Task 6: assemble `app/devis-pergola/page.tsx`

**Files:**
- Create: `app/devis-pergola/page.tsx`
- Test: `npx tsc --noEmit` here; full visual/functional verification is
  Task 7.

**Interfaces:**
- Consumes: `buildMetadata` (Task 1, with `noindex: true`),
  `LandingPergolaHeader` / `LandingPergolaFooter` (Task 4),
  `LandingPergolaForm` (Task 5), `CONTACT` from
  `@/lib/data/navigation`.
- Produces: the default-exported page component `DevisPergolaPage`, plus
  the page's `metadata` export consumed by Next.js routing.

- [ ] **Step 1: Create the page**

Create `app/devis-pergola/page.tsx`:

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
            <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-xl">
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
          <div className="max-w-container-max mx-auto px-6 md:px-16 max-w-2xl">
            <div className="bg-surface-container-low rounded-2xl p-6 md:p-8 shadow-xl border border-surface-variant">
              <h2 className="font-headline-sm text-headline-sm text-primary mb-6 text-center">
                Recevez votre devis gratuit
              </h2>
              <LandingPergolaForm instanceId="milieu" />
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
          <div className="max-w-container-max mx-auto px-6 md:px-16 max-w-2xl">
            <h2 className="font-headline-md text-headline-md mb-8 text-center">
              Prêt à profiter de votre terrasse autrement ?
            </h2>
            <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-xl">
              <LandingPergolaForm instanceId="bas" />
            </div>
          </div>
        </section>
      </main>
      <LandingPergolaFooter />
    </>
  );
}
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/devis-pergola/page.tsx
git commit -m "devis-pergola: assemble la landing page Google Ads"
```

---

### Task 7: full verification pass (dev server, browser, no code changes)

**Files:** none created or modified — this task only reads/observes.

**Interfaces:** none.

This task uses the project's `espritbois-dev` launch configuration
(`.claude/launch.json`, `npm run dev` on port 3000) and the Browser pane
tools. No `next build` is run (see Global Constraints).

- [ ] **Step 1: Start the dev server and open the page**

Start the dev server preview using the `espritbois-dev` configuration, then
navigate to:
```
http://localhost:3000/devis-pergola?utm_source=google&utm_medium=cpc&utm_campaign=pergola-test&gclid=TEST123
```
(the query string simulates a real Google Ads click so the UTM/gclid
capture can actually be observed).

Expected: page loads, no console errors, no navigation bar, no footer with
site-wide links — only the brand header at the top and the minimal footer
at the very bottom.

- [ ] **Step 2: Confirm the `noindex` tag is present**

Read the rendered page and check for a `<meta name="robots"
content="noindex, nofollow">` tag in the `<head>`.

Expected: present, exact content `noindex, nofollow`.

- [ ] **Step 3: Confirm no accidental exits exist**

On the rendered page, check that:
- the header logo/wordmark is not wrapped in an `<a>` tag (not clickable),
- the only link in the footer is `/mentions-legales`,
- there is no link anywhere on the page to `/`, `/pergolas`, `/carports`,
  `/blog`, `/realisations`, or any other site page.

- [ ] **Step 4: Submit the top form with a clearly-marked test lead**

Fill the first (`instanceId="haut"`) form: Nom = `TEST — ne pas traiter`,
Téléphone = `0600000000`, Message = `Test de la landing page
/devis-pergola, à ignorer`, leave Budget on its default option. Submit.

Expected:
- the form switches to the success state ("Merci pour votre demande !"),
- in the network requests, `POST /api/contact` returns `200` with body
  `{"ok":true}`,
- **if** `RESEND_API_KEY` is configured in this environment, a real e-mail
  is sent to `lespritbois33@gmail.com` — this is expected and intentional
  given the clearly-marked test content; if it is *not* configured, the
  request instead returns a `500` with the "Configuration serveur
  incomplète" error, which is also an acceptable, already-existing
  behavior to confirm (not a bug introduced by this plan).

- [ ] **Step 5: Confirm the tracking calls fire**

Check the outgoing network requests (or `window.dataLayer` via the JS
console) after the Step 4 submission for:
- a `gtag` conversion event with `send_to:
  'AW-18163716378/S0LwCO3xks8cEJqikdVD'` (existing Google Ads form
  conversion, unchanged),
- a `gtag` event named `generate_lead` (new, from
  `reportLeadGenerated()`).

- [ ] **Step 6: Confirm UTM/gclid reached the e-mail body**

If Step 4's request succeeded and an e-mail was actually sent (per Step 4's
note), the `source` field constructed by `construireOrigine('haut')` should
read `Page : /devis-pergola (formulaire haut) — utm_source=google,
utm_medium=cpc, utm_campaign=pergola-test, gclid=TEST123`. If e-mail
sending isn't available in this environment, instead confirm this by
inspecting the JSON body of the `POST /api/contact` network request
directly (its `source` field must contain the same string) — this proves
the capture logic works independently of whether Resend is configured.

- [ ] **Step 7: Mobile viewport check**

Resize the browser preview to the `mobile` preset (375×812) and reload
`/devis-pergola` (fresh load, not the post-submit success state — reload
the URL from Step 1). Take a screenshot.

Expected observation to report back (not a pass/fail gate — this is the
known trade-off flagged and accepted in the design spec): is the submit
button of the top form visible without scrolling, or does it require a
small scroll? Report the actual measured result rather than assuming
compliance.

- [ ] **Step 8: Compare page weight against `/pergolas`**

There's no Lighthouse CLI available in this environment, so this is a
qualitative check using the network request list: load
`http://localhost:3000/devis-pergola` fresh (clear/ignore cache), list all
network requests and sum their transfer sizes; then do the same for
`http://localhost:3000/pergolas`. Report both totals and the request
counts.

Expected: `/devis-pergola` transfers meaningfully less than `/pergolas` —
it has no hero photo, no `SiteNav`/`SiteFooter` markup, and only 4 gallery
images versus `/pergolas`'s much larger `GALERIE`/`OPTIONS`/`TEINTES`
sections. Report the actual numbers rather than assuming this holds.

- [ ] **Step 9: Confirm the page is excluded from navigation and sitemap**

Run:
```bash
grep -n "devis-pergola" components/SiteNav.tsx components/SiteFooter.tsx lib/data/navigation.ts app/sitemap.xml/route.ts
```
Expected: no output (no matches in any of the four files).

- [ ] **Step 10: Report the final URL for the Google Ads campaign**

State explicitly to the user: the destination URL to configure in Google
Ads is `https://lesprit-bois.fr/devis-pergola` (once deployed — this plan
does not deploy; deployment is a separate step requiring the user's
explicit go-ahead, per `opennextjs-cloudflare` and the Cloudflare
version-verification memory).

No commit for this task (no files changed).
