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
3. **Drapeau français** : simple emoji 🇫🇷 (caractère Unicode standard, ne
   dépend pas du jeu d'icônes limité du site, aucun fichier à créer).
4. **Formulation retenue pour la fabrication française** : « Fabrication en
   atelier, en France » — reflète exactement ce que le site affirme déjà
   ailleurs (atelier, sans sous-traitance), sans affirmer quoi que ce soit
   sur l'origine des matières premières (bois, aluminium) qui n'a pas été
   vérifiée.

## Architecture

### Fichier modifié

- `app/devis-pergola/page.tsx` — le bandeau de confiance (`aria-label="Nos
  garanties"`) :
  - Le premier élément (icône `verified` + « Certifiés Qualibat » + « La
    qualification reconnue du bâtiment ») devient « Certifiés Qualibat
    RGE » — seul le texte du titre change, tout le reste de cet élément
    (icône, sous-texte) reste identique.
  - Nouvel élément ajouté (4ᵉ élément, après « Libourne & Gironde ») :
    emoji 🇫🇷 à la place de l'icône Material habituelle, titre
    « Fabrication en atelier, en France », sous-texte « Conception et pose
    par nos équipes, sans sous-traitance ».
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
- Confirmer le rendu du drapeau 🇫🇷 (s'affiche comme un vrai drapeau dans
  le navigateur, pas comme du texte brut — les emoji drapeaux dépendent du
  système d'exploitation/police, à vérifier visuellement).
- Confirmer la disposition de la grille aux trois tailles d'écran (mobile
  1 colonne, tablette 2 colonnes, desktop 4 colonnes).
- Aucune régression sur le reste de la page.

## Hors périmètre

- Pas d'intégration du vrai logo Qualibat RGE — attend le fichier officiel
  de l'utilisateur, itération future.
- Pas de vérification de l'origine des matières premières (bois,
  aluminium) — la formulation retenue évite volontairement ce terrain.
