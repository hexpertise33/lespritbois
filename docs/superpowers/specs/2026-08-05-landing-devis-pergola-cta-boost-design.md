# Landing page `/devis-pergola` — renforcement CTA et zone géographique

**Date :** 2026-08-05
**Statut :** Conception validée (design approuvé par l'utilisateur)

## Contexte

Itération sur la landing page Google Ads livrée le même jour (voir
[2026-08-05-landing-devis-pergola-design.md](2026-08-05-landing-devis-pergola-design.md)).
Après mise en ligne, retour utilisateur : (1) la page ne mentionne que
Libourne alors que la zone d'intervention réelle couvre toute la Gironde et
au-delà, (2) pas assez d'appels à l'action — la page ne pousse pas assez le
visiteur à remplir le formulaire.

## Décisions validées avec l'utilisateur

1. **Zone géographique** : le titre H1 doit dire « Libourne et en Gironde »,
   pas seulement « Libourne ». Le reste de la page mentionne déjà « Libourne
   & Gironde » (bandeau de confiance) et « à Libourne et en Gironde »
   (meta description) — donc seul le H1 change.
2. **Preuve sociale chiffrée** : 3 chiffres réels, déjà publiés ailleurs sur
   le site (donc vérifiables et cohérents) — **10 ans d'expérience du
   bois** (`app/page.tsx`, `app/qui-sommes-nous/page.tsx`), **100% sur
   mesure** (mêmes pages), **5.0/5 sur 6 avis Google** (`app/page.tsx`,
   JSON-LD `AggregateRating`). Aucun chiffre inventé (pas de nombre de
   chantiers pergola spécifique — non vérifiable).
3. **Barre CTA flottante mobile** : téléphone + bouton « Devis gratuit »,
   fixée en bas d'écran, visible uniquement sur mobile, seulement après
   avoir dépassé le héros (pas de doublon avec le CTA déjà visible en haut
   de page).
4. **Relance visuelle supplémentaire** : une nouvelle section entre le
   bandeau de confiance et la galerie, combinant les 3 chiffres et un
   bouton qui renvoie vers le formulaire du milieu de page.
5. Pas d'urgence/rareté artificielle (« créneaux limités » etc.) — écarté
   par l'utilisateur, cohérent avec l'absence de données vérifiables pour
   étayer ce type de message.
6. Périmètre volontairement sobre pour cette itération : une seule nouvelle
   section + la barre flottante. Pas de deuxième relance entre le
   comparatif et le CTA final pour l'instant — à ajouter plus tard si
   l'utilisateur juge que ça manque encore.

## Architecture

### Fichier créé

- `components/LandingPergolaStickyBar.tsx` — composant client. Utilise un
  `IntersectionObserver` sur le `<header>` du héros (repéré par l'attribut
  `data-devis-hero`, ajouté au héros existant) : la barre s'affiche
  seulement quand le héros n'est plus visible à l'écran. Visible uniquement
  sur mobile (`md:hidden`). Contient un lien `tel:` (icône `call`) et un
  lien ancre `href="#devis-bas"` vers la section du CTA final — pas de
  logique de « formulaire le plus proche », une ancre fixe vers le dernier
  formulaire suffit et reste plus simple/robuste.
- Positionnement : `fixed inset-x-0 bottom-0`, z-index inférieur à celui de
  `ConsentBanner` (`z-[200]` dans `components/ConsentBanner.tsx`) — la
  bannière cookies reste au-dessus tant qu'elle est affichée, la barre
  prend le relais visuellement dès qu'elle est fermée, sans code de
  coordination entre les deux composants.

### Fichier modifié

- `app/devis-pergola/page.tsx` :
  - H1 : « Pergola sur mesure à Libourne et en Gironde — Devis gratuit sous
    48h ».
  - `data-devis-hero` ajouté au `<header>` du héros.
  - Nouvelle `<section>` entre le bandeau de confiance et la galerie : 3
    chiffres (10 ans / 100% / 5.0★) + phrase de relance + bouton `<a
    href="#devis-milieu">`.
  - `id="devis-milieu"` sur la `<section>` du CTA milieu de page.
  - `id="devis-bas"` sur la `<section>` du CTA final.
  - Import et rendu de `<LandingPergolaStickyBar />`.
  - Aucun autre contenu retiré ou réécrit — la galerie, le comparatif de
    gamme, les 3 formulaires et leurs textes restent inchangés.

Le défilement fluide vers les ancres est déjà actif site-wide
(`className="scroll-smooth"` sur `<html>` dans `app/layout.tsx`) — aucun
code supplémentaire nécessaire pour l'effet de défilement.

## Hors périmètre

- Pas de deuxième relance visuelle (entre comparatif et CTA final) pour
  cette itération.
- Pas de message d'urgence/rareté.
- Pas de modification de `/pergolas`, `/contact`, ou de tout autre
  composant partagé au-delà de ce qui est listé ci-dessus.
