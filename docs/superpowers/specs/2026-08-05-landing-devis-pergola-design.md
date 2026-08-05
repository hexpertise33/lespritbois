# Landing page Google Ads « Pergolas » — `/devis-pergola`

**Date :** 2026-08-05
**Statut :** Conception validée (design approuvé par l'utilisateur)

## Objectif

Créer une page dédiée à recevoir uniquement le trafic payant de la campagne
Google Ads sur les pergolas. Ce n'est **pas** un remplacement de `/pergolas`
(qui reste la page SEO, indexée, liée au menu) : cette nouvelle page sert un
seul but — convertir un visiteur qui a cliqué sur une annonce en demande de
devis, via le formulaire de contact existant (Resend + tracking Google
Ads/GA4).

Contrainte explicite de l'utilisateur : la page ne doit pas donner
l'impression d'un microsite isolé. Un visiteur qui atterrit ici puis navigue
ensuite vers le site normal doit reconnaître la même entreprise — même
identité visuelle, même ton, mêmes garanties.

## Contraintes et faits établis (exploration du repo)

- **Stack** : Next.js 15 (App Router) + React 19 + Tailwind v4. Déploiement
  via `opennextjs-cloudflare` (Cloudflare Workers/Pages).
- **Convention de page** : chaque page est un Server Component
  `app/<route>/page.tsx` qui exporte `metadata` via `buildMetadata()`
  (`lib/metadata.ts`), inclut `<JsonLd data={...} />`, puis `<SiteNav
  page="..." />` / `<SiteFooter />`. `/pergolas` sert de modèle direct :
  hero plein écran, bandeau de confiance à 3 items, sections `GAMME`,
  `OPTIONS`, `TEINTES`, `ETAPES`, `GALERIE`, `COMMUNES`, FAQ — tout est déjà
  écrit et réutilisable pour cette landing page.
- **`buildMetadata()`** (`lib/metadata.ts`) pose aujourd'hui toujours
  `robots: 'index, follow, max-image-preview:large, max-snippet:-1'`. Il n'y
  a **aucun** précédent de page `noindex` construite avec cette fonction
  (seul `app/not-found.tsx` pose `robots: 'noindex'` à la main, hors
  `buildMetadata`).
- **Sitemap** : généré par `app/sitemap.xml/route.ts` à partir d'un tableau
  statique `PAGES_STATIQUES` + `lib/data/blog.ts`. Une page n'y apparaît que
  si elle y est explicitement ajoutée.
- **robots.txt** (`public/robots.txt`) autorise tout (`Allow: /`) — le
  blocage à l'indexation doit donc passer par la meta `robots` de la page,
  pas par robots.txt.
- **Navigation/footer** : `components/SiteNav.tsx` et
  `components/SiteFooter.tsx` contiennent les liens vers `/carports`,
  `/pergolas`, `/amenagement-exterieur`, `/constructions-bois`, `/`,
  `/qui-sommes-nous`, `/realisations`, `/blog`, `/contact`,
  `/mentions-legales`, `/politique-de-confidentialite`, `/plan-du-site`. La
  nouvelle page n'y figure dans aucun des deux — aucune modification requise
  pour l'exclure, il suffit de ne pas l'y ajouter.
- **Formulaire existant** (`components/ContactForm.tsx`) : formulaire client
  (`'use client'`) avec champs `projet` (select), `budget` (select), `nom`,
  `tel`, `message`. Au submit réussi (`POST /api/contact` puis `res.ok`), il
  appelle `reportFormConversion()` — conversion Google Ads « Envoi de
  formulaire de lead ». Il n'existe **pas** aujourd'hui d'événement GA4
  `generate_lead`.
- **`app/api/contact/route.ts`** : route handler générique, envoie un e-mail
  via Resend (`RESEND_API_KEY`) à `CONTACT.email`. Accepte
  `{ nom, tel, message, projet, budget }`, valide seulement
  `nom`/`tel`/`message` non vides. N'importe quel champ additionnel dans le
  JSON est aujourd'hui simplement ignoré (pas de validation stricte du
  schéma) — l'ajout d'un champ optionnel est donc rétrocompatible sans rien
  changer à ce qui existe.
- **Tracking Google/GA4** (`lib/gtag.ts`, chargé globalement dans
  `app/layout.tsx` via `gtag.js`) :
  - `GADS_ID = 'AW-18163716378'`, `GA4_ID = 'G-DBV2Q8X8T2'`.
  - `reportFormConversion()` : conversion Ads « Envoi de formulaire de
    lead » (`AW-18163716378/S0LwCO3xks8cEJqikdVD`).
  - `reportPhoneConversion()` : conversion Ads « Clic téléphone »
    (`AW-18163716378/ti05CIv5ldccEJqikdVD`), déjà déclenchée **globalement**
    sur tout lien `tel:` du site via `components/PhoneClickTracker.tsx`
    (écouteur `click` délégué sur `document`, monté une fois dans
    `RootLayout`). **Aucune action requise** pour le tracking téléphone sur
    la nouvelle page — il fonctionnera automatiquement dès qu'un lien
    `tel:+33557406580` y figure.
  - Consentement (RGPD / Consent Mode v2) géré par `ConsentBanner` +
    `setConsent()`, également global — rien à dupliquer.
- **Police d'icônes** : sous-ensemble local de 64 glyphes seulement
  (`public/fonts/material-symbols-subset.woff2`). Un nom d'icône absent du
  sous-ensemble s'affiche en toutes lettres. Liste extraite du HTML rendu +
  des tableaux de données (`icone: '...'`) de tout le repo : `add_home`,
  `air`, `approval`, `arrow_back`, `arrow_downward`, `arrow_forward`,
  `blinds`, `bolt`, `cabin`, `call`, `check`, `check_circle`,
  `construction`, `cottage`, `deck`, `description`, `design_services`,
  `directions`, `door_sliding`, `edit_note`, `fence`, `forum`,
  `grid_goldenratio`, `groups`, `handshake`, `home`, `home_work`,
  `horizontal_rule`, `horizontal_split`, `house_siding`, `layers`,
  `lightbulb`, `linear_scale`, `location_on`, `mail`, `map`, `open_in_new`,
  `outdoor_grill`, `palette`, `person`, `phone_in_talk`, `photo_camera`,
  `plumbing`, `pool`, `precision_manufacturing`, `roller_shades`, `roofing`,
  `schedule`, `sensors`, `settings_remote`, `shield`, `straighten`,
  `thumb_up`, `tune`, `umbrella`, `verified`, `visibility_off`,
  `water_drop`, `wb_sunny`. **La nouvelle page n'utilise que des icônes de
  cette liste** — aucune régénération de police nécessaire.
- **Images réutilisables** (déjà optimisées, déjà sur `/public/images`) :
  la galerie `GALERIE` et le tableau `GAMME` de `/pergolas/page.tsx`
  fournissent respectivement les photos de chantier et les 3 visuels de
  gamme (bioclimatique / alu fixe / bois) à réutiliser tels quels.
- **Identité de marque pour l'en-tête/pied de page** : `SiteFooter.tsx`
  utilise `/logo-mark-clair.svg` + le wordmark texte « L'Esprit Bois » +
  la baseline « Créateur d'espaces extérieurs ». `SiteNav.tsx` utilise
  `/logo-mark-nav.svg`. C'est ce bloc identité (logo + wordmark + baseline)
  qui sera repris en en-tête de la landing page pour la cohérence de
  marque demandée, **sans** les liens de navigation autour.
- **Coordonnées** (`lib/data/navigation.ts`, `CONTACT`) : téléphone affiché
  `05 57 40 65 80`, lien `tel:+33557406580`, adresse
  `1 Aux Pradasses, 33500 Les Billaux`.

## Décisions validées avec l'utilisateur

1. **URL** : `/devis-pergola`.
2. **Champs du formulaire** : mêmes champs que `/contact` (nom, téléphone,
   message, budget) — **sauf** le sélecteur « projet », qui n'a pas de sens
   sur une page 100 % pergola : il est retiré de l'UI et envoyé en valeur
   fixe `"Pergola (landing Ads)"`.
3. **En-tête** : logo + wordmark + baseline (identité complète, comme le
   reste du site), **non cliquable** — zéro porte de sortie.
4. **Pied de page** : ligne unique et discrète — © année, adresse, lien
   « Mentions légales » (obligation légale française, reste sur le même
   domaine). Aucun autre lien (pas de Carports/Réalisations/Blog/réseaux
   sociaux/accueil/`/pergolas`).
5. **Portée de l'événement GA4 `generate_lead`** : ajouté **uniquement**
   sur cette landing page, via une fonction dédiée dans `lib/gtag.ts`
   distincte de `reportFormConversion()`. Le formulaire de `/contact` ne
   change pas de comportement.
6. **Cohérence de marque** : priorité explicite de l'utilisateur — la page
   doit se reconnaître comme faisant partie de lesprit-bois.fr (même
   typographie, mêmes couleurs, mêmes photos, même ton), pas comme un
   microsite publicitaire générique.

## Architecture

### Fichiers créés

- `app/devis-pergola/page.tsx` — la page elle-même (Server Component).
- `components/LandingPergolaHeader.tsx` — bloc identité seul (logo +
  wordmark + baseline), non cliquable, sans navigation.
- `components/LandingPergolaFooter.tsx` — pied de page minimal à une ligne
  (© année, adresse, lien Mentions légales).
- `components/LandingPergolaForm.tsx` — variante du formulaire de contact :
  champs nom/téléphone/message/budget (pas de « projet »), capture des
  paramètres `utm_source`, `utm_medium`, `utm_campaign`, `gclid` de l'URL
  courante (lecture seule, `useSearchParams` ou `window.location.search` —
  aucune redirection donc aucun risque de perdre le `gclid`), et déclenche
  au succès `reportFormConversion()` **et** `reportLeadGenerated()`.
  Accepte une prop `instanceId` pour distinguer les 3 occurrences sur la
  page (ids de champs uniques, requis pour un HTML valide).

### Fichiers modifiés (changements additifs, rétrocompatibles)

- `lib/metadata.ts` — nouveau paramètre optionnel `noindex?: boolean` sur
  `buildMetadata()` ; par défaut `false` (comportement actuel inchangé
  pour toutes les pages existantes). Quand `true`, pose
  `robots: 'noindex, nofollow'` au lieu de la valeur actuelle.
- `lib/gtag.ts` — nouvelle fonction exportée `reportLeadGenerated()` qui
  pousse `window.gtag('event', 'generate_lead', { ... })`. N'affecte pas
  `reportFormConversion()` ni aucun appelant existant.
- `app/api/contact/route.ts` — accepte un champ optionnel `source` (texte
  libre construit côté client : page d'origine + UTM/gclid présents) ajouté
  en fin de corps de l'e-mail (texte et HTML) s'il est fourni. Absent →
  comportement strictement identique à aujourd'hui.

### Fichiers explicitement NON modifiés

- `app/sitemap.xml/route.ts` — pas d'entrée pour `/devis-pergola`.
- `components/SiteNav.tsx`, `components/SiteFooter.tsx`,
  `lib/data/navigation.ts` — aucune référence à la nouvelle page.
- `public/robots.txt` — inutile d'y toucher, le blocage passe par la meta
  `robots` de la page (voir ci-dessus, `Allow: /` reste correct pour le
  reste du site).
- `components/ContactForm.tsx` — le formulaire de `/contact` n'est pas
  touché (voir décision 5).

## Contenu de la page (ordre du brief, tel que validé)

1. **En-tête** : `LandingPergolaHeader` seul, ~48-56px, non cliquable.
2. **Hero** : H1 reprenant la promesse d'annonce (« Pergola sur mesure à
   Libourne — Devis gratuit sous 48h »), sous-titre court raccourci de
   `/pergolas` (Qualibat / garantie décennale / un seul interlocuteur),
   téléphone `tel:+33557406580` bien visible, puis `LandingPergolaForm`
   (instance 1) juste en dessous. Objectif : le bouton d'envoi visible sans
   scroller sur mobile ; avec nom/téléphone/message/budget le formulaire
   complet peut demander un très léger scroll — vérifié à l'étape 5
   (capture d'écran mobile réelle), pas juste supposé.
3. **Bandeau de confiance** (3 items en ligne) : Qualibat (icône
   `verified`), Garantie décennale (icône `shield`), Zone d'intervention
   Libourne/Gironde (icône `location_on`).
4. **Galerie** : 3-4 photos reprises de `GALERIE` (`/pergolas/page.tsx`),
   mêmes fichiers `/public/images/realisations/...`, pas de nouvel asset.
5. **Comparatif rapide** : 3 cartes courtes (bioclimatique / alu fixe /
   bois), textes raccourcis à partir de `GAMME` (`/pergolas/page.tsx`) —
   juste de quoi rassurer que l'entreprise couvre le besoin du visiteur,
   pas le tableau complet de la page SEO.
6. `LandingPergolaForm` (instance 2, CTA répété).
7. `LandingPergolaForm` (instance 3, CTA final) + `LandingPergolaFooter`.

Les 3 instances de formulaire sont indépendantes (pas d'ancre vers un
formulaire unique) : chacune fonctionne seule, poste vers `/api/contact`,
et déclenche son propre événement de conversion au succès.

## Tracking (récapitulatif)

- **Conversion Google Ads formulaire** : `reportFormConversion()`, déjà
  existante, appelée par chaque instance de `LandingPergolaForm` au succès
  — identique au comportement de `/contact`.
- **Conversion Google Ads téléphone** : automatique et globale
  (`PhoneClickTracker`), aucun code à ajouter.
- **GA4 `generate_lead`** : nouvelle fonction `reportLeadGenerated()`,
  appelée uniquement par `LandingPergolaForm`.
- **UTM/gclid** : aucune redirection sur la page (le formulaire poste en
  `fetch` sans navigation), donc les paramètres d'URL restent intacts pour
  toute la durée de la visite. En plus, `LandingPergolaForm` les recopie
  dans le corps de l'e-mail de lead (champ `source`) pour que vous voyiez
  la provenance de chaque demande.

## Vérification finale (avant de considérer la page terminée)

- Rendu mobile réel (375px) dans le navigateur : capture d'écran du hero,
  confirmation visuelle que le bouton d'envoi du premier formulaire est
  visible sans scroller.
- Poids/performance de la page comparé à `/pergolas` (moins d'images, pas
  de script de menu) — au minimum une vérification qualitative faute
  d'outillage Lighthouse en CLI dans cet environnement.
- Confirmation que `/devis-pergola` n'apparaît dans aucun lien de
  `SiteNav`, `SiteFooter`, ni dans `/sitemap.xml`.
- Confirmation que la balise `<meta name="robots" content="noindex,
  nofollow">` est bien présente dans le HTML rendu.
- URL finale confirmée pour la configuration de la campagne Google Ads :
  `https://lesprit-bois.fr/devis-pergola`.

## Hors périmètre

- Pas de modification de `/pergolas` (reste la page SEO indexée).
- Pas de nouvelle campagne Google Ads créée ni configurée — cette page
  fournit seulement l'URL de destination.
- Pas de tableau comparatif complet, pas de FAQ, pas de section « étapes du
  chantier », pas de nuancier de teintes — tout ce qui alourdirait la page
  ou l'éloignerait de l'objectif unique (devis) reste sur `/pergolas`.
