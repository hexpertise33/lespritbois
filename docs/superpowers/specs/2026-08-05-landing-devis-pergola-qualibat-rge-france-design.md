# Landing page `/devis-pergola` — Qualibat RGE et fabrication française

**Date :** 2026-08-05
**Statut :** Conception validée (design approuvé par l'utilisateur)

## Contexte

Cinquième itération le même jour sur la landing page Google Ads. Retour
utilisateur : mettre en avant le logo Qualibat (« vraiment connu de tous »)
et ajouter un drapeau français pour signaler que les produits sont de
fabrication française — la page reste « un peu triste » selon lui.

## Vérifications factuelles faites avant de concevoir

- **Aucun fichier logo Qualibat/RGE officiel n'existe dans le dépôt** —
  seul un badge texte générique (icône + « Certifiés Qualibat ») existe
  déjà dans le bandeau de confiance.
- **Recherche web** (qualibat.com/faq) : l'usage du logo Qualibat, et
  encore plus du logo combiné « RGE Qualibat », est réservé aux
  entreprises titulaires de la qualification correspondante en cours de
  validité — le logo RGE Qualibat spécifiquement n'est utilisable que par
  les entreprises ayant la mention RGE sur leur certificat. Un logo
  récupéré sur un site tiers, sans certitude qu'il correspond au certificat
  réel de l'entreprise, exposerait à un risque d'usurpation de
  qualification professionnelle.
- **Aucune mention RGE nulle part ailleurs sur le site** avant cette
  itération (seul « Qualibat » classique était affirmé).
- **Aucune affirmation « fabrication française » nulle part ailleurs sur
  le site** avant cette itération. En revanche, le site affirme déjà :
  « conception, fabrication en atelier et pose par nos équipes, sans
  sous-traitance » (`app/page.tsx:520`, `app/qui-sommes-nous/page.tsx:60-62`,
  `app/llms.txt/route.ts`).

## Décisions validées avec l'utilisateur

1. **RGE confirmé** : l'utilisateur confirme que l'entreprise détient
   effectivement la mention RGE sur son certificat Qualibat (pas une simple
   supposition). Le texte « Qualibat RGE » est donc une affirmation
   factuelle vraie.
2. **Pas de logo officiel pour l'instant** : l'utilisateur n'a pas le
   fichier du logo sous la main. On renforce donc le badge existant en
   **texte** (« Certifiés Qualibat RGE »), sans reproduire de marque
   déposée. À remplacer par le vrai logo dès qu'il sera fourni — mais ce
   remplacement est **hors périmètre** de cette itération.
3. **Drapeau français** : initialement emoji 🇫🇷, remplacé après révision
   finale par un SVG en ligne du tricolore français (bleu #002654, blanc
   #FFFFFF, rouge #ED2939) — l'emoji ne se rend pas en drapeau visuel sur
   Windows (Segoe UI Emoji n'inclut pas les glyphes de drapeau, affichant
   à la place « FR »), et le tricolore national n'est pas une marque
   déposée donc sûr à reproduire directement en SVG.
4. **Formulation retenue pour la fabrication française** : initialement
   « Fabrication en atelier, en France », mise à jour après révision finale
   en « Fabrication française » (titre) et « Bois façonné dans notre atelier,
   aluminium de notre partenaire français » (sous-texte) — l'utilisateur a
   confirmé que les structures aluminium sont fabriquées par le partenaire
   français Li-Su des Temps (pas en propre dans l'atelier), tandis que le
   bois massif l'est effectivement. La page étant lourde en aluminium
   (photo héro + 2/3 des cartes gamme), l'ancienne formulation surclamait
   la fabrication maison pour une part importante du contenu. La nouvelle
   formulation reste exacte pour les deux ranges : bois en atelier, aluminium
   du partenaire français — toujours français, juste de mains différentes.

## Architecture

### Fichier modifié

- `app/devis-pergola/page.tsx` — le bandeau de confiance (`aria-label="Nos
  garanties"`) :
  - Le premier élément (icône `verified` + « Certifiés Qualibat » + « La
    qualification reconnue du bâtiment ») devient « Certifiés Qualibat
    RGE » — seul le texte du titre change, tout le reste de cet élément
    (icône, sous-texte) reste identique.
  - Nouvel élément ajouté (4ᵉ élément, après « Libourne & Gironde ») :
    SVG inline du tricolore français (bleu/blanc/rouge) à la place de l'icône
    Material habituelle, titre « Fabrication française », sous-texte « Bois
    façonné dans notre atelier, aluminium de notre partenaire français ».
  - La grille passe de `grid-cols-1 md:grid-cols-3` à `grid-cols-1
    sm:grid-cols-2 lg:grid-cols-4` pour accueillir le 4ᵉ élément
    proprement à toutes les tailles d'écran (1 colonne mobile, 2 colonnes
    tablette, 4 colonnes desktop).

### Fichiers explicitement non modifiés

- Tout le reste de la page (héros, section chiffres, galerie, fiches
  gamme, FAQ, CTA milieu/final, footer, barre CTA flottante, pop-up
  desktop) — cette itération ne touche que le bandeau de confiance.
- `components/LandingPergolaForm.tsx`, `components/LandingPergolaStickyBar.tsx`,
  `components/LandingPergolaDesktopPopup.tsx`, `lib/gtag.ts`,
  `lib/metadata.ts`, `app/api/contact/route.ts`, `app/pergolas/page.tsx`.
- Aucun fichier logo ajouté à `public/images/`.

## Vérification finale

- Confirmer que le bandeau affiche bien 4 éléments, dans l'ordre : Qualibat
  RGE, Garantie décennale, Libourne & Gironde, Fabrication France.
- Confirmer que le drapeau SVG (tricolore) s'affiche correctement sur tous
  les navigateurs et systèmes d'exploitation (le SVG inline en remplace
  l'emoji, qui ne se rendait pas en drapeau sur Windows).
- Confirmer que les nouvelles formulations texte sont présentes et exactes
  dans le code.
- Confirmer la disposition de la grille aux trois tailles d'écran (mobile
  1 colonne, tablette 2 colonnes, desktop 4 colonnes).
- Aucune régression sur le reste de la page.

## Hors périmètre

- Pas d'intégration du vrai logo Qualibat RGE — attend le fichier officiel
  de l'utilisateur, itération future.
- Pas de vérification de l'origine des matières premières (bois,
  aluminium) — la formulation retenue évite volontairement ce terrain.
