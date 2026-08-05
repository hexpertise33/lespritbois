# Landing page `/devis-pergola` — héros : photo nette au lieu du fond assombri

**Date :** 2026-08-05
**Statut :** Conception validée (design approuvé par l'utilisateur)

## Contexte

Quatrième itération le même jour sur la landing page Google Ads. Après avoir
vu la version avec le héros en photo plein fond (itération « richesse
visuelle », voir
[2026-08-05-landing-devis-pergola-visual-richness-design.md](2026-08-05-landing-devis-pergola-visual-richness-design.md)),
retour utilisateur : sur mobile, le formulaire apparaît en premier — avant
même que le visiteur sache ce qu'on lui vend, « à l'envers ». Clarification
en cours d'échange : le principe doit s'appliquer partout, pas seulement
corriger l'ordre mobile — le fond de photo assombri (nécessaire pour la
lisibilité du texte posé dessus) ne compte pas comme « une vraie photo bien
visible ». L'utilisateur veut une photo nette, non assombrie, à côté du
formulaire, sur desktop comme sur mobile.

## Décision validée avec l'utilisateur

Remplacer le traitement actuel du héros (photo plein fond en arrière-plan +
voile sombre `.hero-interne` pour la lisibilité du texte posé dessus) par
une structure plus classique :

- **Fond du héros** : redevient uni (`bg-primary`, sombre, comme le reste du
  site) — on retire la photo plein fond et le voile.
- **Colonne de contenu** (gauche sur desktop, en premier sur mobile) :
  titre → **photo nette de la pergola, bien visible, sans assombrissement**
  → sous-titre → bouton téléphone.
- **Colonne formulaire** (droite sur desktop, en second sur mobile) :
  inchangée dans son contenu.

Sur mobile, ça implique de revenir à l'ordre texte-puis-formulaire — annule
donc le `order-first` posé sur la carte du formulaire lors de l'itération
CTA-boost (qui forçait le formulaire à apparaître en premier sur mobile,
pour respecter le brief initial « CTA visible sans scroller »).
**Compromis explicitement assumé par l'utilisateur** : un peu de défilement
sera de nouveau nécessaire pour atteindre le bouton d'envoi sur mobile — la
priorité passe désormais à « montrer ce qu'on vend avant de demander les
coordonnées » plutôt qu'au zéro-scroll.

La photo réutilisée est la même que celle du fond actuel
(`/images/realisations/pergola-aluminium-terrasse-bois-libourne-1.webp`,
chantier réel déjà optimisé et utilisé ailleurs sur la page) — pas de
nouvel asset, pas de nouveau choix de photo.

## Architecture

### Fichier modifié

- `app/devis-pergola/page.tsx` — le `<header data-devis-hero>` :
  - Retire `relative overflow-hidden` du header, retire le
    `bg-primary` implicite perdu lors de l'itération précédente — le
    header redevient `className="bg-primary text-on-primary pt-10 pb-14
    md:pt-16 md:pb-20"`, sans plus.
  - Retire le `<div className="absolute inset-0 z-0">` contenant l'`<img>`
    de fond et le `<div className="absolute inset-0 hero-interne">`.
  - La grille de contenu perd `relative z-10` (plus nécessaire sans
    élément en position absolue à côté) : redevient
    `className="max-w-container-max mx-auto px-6 md:px-16 grid
    grid-cols-1 md:grid-cols-2 gap-10 items-start"`.
  - Dans la colonne de texte (premier enfant de la grille), insère l'`<img>`
    (même src/alt que l'ancien fond, `fetchPriority="high"` conservé —
    reste l'image la plus proéminente du héros donc candidate LCP probable)
    entre le `<h1>` et le `<p>` du sous-titre, en photo nette (pas de voile),
    coins arrondis pour rester cohérent avec le reste du site.
  - Sur la carte du formulaire (second enfant de la grille), retire les
    classes `order-first md:order-none` — revient à l'ordre naturel du DOM
    (texte, donc photo, donc formulaire) sur toutes les tailles d'écran.

### Fichiers explicitement non modifiés

- Tout le reste de la page (bandeau de confiance, section chiffres, galerie,
  fiches gamme, FAQ, CTA milieu/final, footer, barre CTA flottante, pop-up
  desktop) — cette itération ne touche que le héros.
- `components/LandingPergolaForm.tsx`, `components/LandingPergolaStickyBar.tsx`,
  `components/LandingPergolaDesktopPopup.tsx`, `lib/gtag.ts`,
  `lib/metadata.ts`, `app/api/contact/route.ts`, `app/pergolas/page.tsx`.

## Vérification finale

- Confirmer visuellement (desktop et mobile 375px) que la photo est nette,
  bien visible, sans voile sombre, positionnée entre le titre et le
  sous-titre.
- Confirmer que sur mobile l'ordre de lecture est bien : logo → titre →
  photo → sous-titre → téléphone → formulaire (le formulaire n'apparaît
  plus en premier).
- Mesurer honnêtement, comme lors des itérations précédentes, à quelle
  distance du haut de page se trouve le bouton d'envoi sur mobile — sans
  chercher à minimiser le résultat, le compromis étant déjà assumé.
- Confirmer qu'aucune régression n'affecte le reste de la page (bandeau de
  confiance, galerie, fiches gamme, FAQ, formulaires milieu/bas, footer,
  barre flottante, pop-up).

## Hors périmètre

- Pas de changement de la galerie, des fiches gamme, de la FAQ, ni d'aucune
  section après le héros.
- Pas de nouvelle photo — réutilisation de l'image déjà en place.
