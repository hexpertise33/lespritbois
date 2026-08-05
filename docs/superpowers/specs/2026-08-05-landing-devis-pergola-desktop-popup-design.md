# Landing page `/devis-pergola` — pop-up desktop de relance

**Date :** 2026-08-05
**Statut :** Conception validée (design approuvé par l'utilisateur)

## Contexte

Troisième itération le même jour sur la landing page Google Ads. Après les
deux précédentes (renforcement CTA + richesse visuelle, voir les specs
`2026-08-05-landing-devis-pergola-cta-boost-design.md` et
`2026-08-05-landing-devis-pergola-visual-richness-design.md`), l'utilisateur
demande « quelques pop-up qui incitent à appeler ou qui incitent à déposer
le formulaire ».

## Décisions validées avec l'utilisateur

1. **Déclencheur** : défilement, choisi plutôt qu'un délai fixe ou une
   intention de sortie (souris quittant l'écran — inopérant sur mobile, où
   arrive l'essentiel du trafic Ads). Seuil initialement fixé à 50 % lors de
   la conception, **révisé à 70 % pendant la vérification finale** : mesuré
   dans un vrai navigateur, à 50 % le formulaire du milieu de page
   (`#devis-milieu`) remplissait la quasi-totalité de l'écran (50px à 860px
   sur un viewport de 900px de haut) — le pop-up serait apparu directement
   par-dessus un visiteur en train de regarder, voire de remplir, un
   formulaire actif, à l'encontre même de l'objectif de la demande. 70 %
   correspond au moment où ce formulaire est passé (mesuré à ~69,5 % de
   défilement total). Décision technique prise en cours de vérification,
   pas revalidée avec l'utilisateur avant application — signalé
   explicitement pour cette raison.
2. **Contenu** : les deux canaux à la fois — téléphone et bouton devis, côte
   à côte dans la même boîte de dialogue, plutôt qu'un choix exclusif entre
   les deux.
3. **Desktop uniquement** : sur mobile, `LandingPergolaStickyBar` (livrée
   dans l'itération CTA-boost) affiche déjà en permanence téléphone + bouton
   devis dès que le héros est dépassé — un pop-up avec le même contenu y
   ferait doublon. Le pop-up ne comble donc que le manque réel : le desktop,
   qui n'a aucun équivalent de la barre flottante.
4. **Une seule fois par visite** : mémorisé en `sessionStorage` (pas
   `localStorage`, qui persisterait entre les visites) — évite l'effet
   « site qui harcèle » et le risque, réel, qu'un pop-up répété pousse le
   visiteur à quitter la page avant même d'avoir rempli le formulaire.
5. Fermeture par croix, clic en dehors de la boîte, ou touche Échap —
   standard d'accessibilité pour toute boîte de dialogue modale.

## Architecture

### Fichier créé

- `components/LandingPergolaDesktopPopup.tsx` — composant client. Écoute le
  défilement (`window.scroll`, passif) tant que le pop-up n'a pas encore été
  affiché dans cette session ; calcule la progression
  (`window.scrollY / (document.documentElement.scrollHeight -
  window.innerHeight)`) et déclenche l'affichage au premier passage au-delà
  de 0.5, en écrivant immédiatement le flag en `sessionStorage` et en
  retirant l'écouteur. Racine visuelle `hidden md:flex` (jamais rendue sur
  mobile, quel que soit l'état de déclenchement). Contenu : titre court,
  téléphone (`CONTACT.telHref`/`telAffiche`, réutilise le suivi de
  conversion Google Ads déjà global via `PhoneClickTracker`), lien ancre
  `href="#devis-bas"` (referme le pop-up au clic, pas de nouveau formulaire
  à câbler — réutilise le CTA final déjà existant et déjà suivi). Croix de
  fermeture en caractère texte simple (`×`), pas une icône Material — aucun
  nom d'icône hors de la liste de 64 glyphes sûrs n'est introduit.
  Empilement : `z-50`, sous la bannière cookies (`z-[200]` dans
  `ConsentBanner`), au-dessus du reste de la page.

### Fichier modifié

- `app/devis-pergola/page.tsx` : import et rendu de
  `<LandingPergolaDesktopPopup />`, une fois, à côté du rendu existant de
  `<LandingPergolaStickyBar />`.

### Fichiers explicitement non modifiés

- `components/LandingPergolaForm.tsx`, `components/LandingPergolaHeader.tsx`,
  `components/LandingPergolaFooter.tsx`, `components/LandingPergolaStickyBar.tsx`,
  `lib/gtag.ts`, `lib/metadata.ts`, `app/api/contact/route.ts` — rien de
  tout cela ne change. Le pop-up ne soumet aucun formulaire lui-même (il
  renvoie vers le CTA final déjà existant), donc aucun nouvel événement de
  conversion à définir.

## Hors périmètre

- Pas de délai fixe ni de détection d'intention de sortie comme
  déclencheurs supplémentaires — un seul déclencheur (défilement 50%),
  conformément à la décision 1.
- Pas de pop-up sur mobile — décision 3.
- Pas de blocage du défilement de la page en arrière-plan pendant que le
  pop-up est ouvert — nuance mineure, pas demandée, le fond assombri suffit
  à indiquer le focus.
