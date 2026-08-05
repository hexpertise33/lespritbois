# Landing page `/devis-pergola` — richesse visuelle et informations

**Date :** 2026-08-05
**Statut :** Conception validée (design approuvé par l'utilisateur, via l'atelier
visuel du navigateur)

## Contexte

Deuxième itération sur la landing page Google Ads, après le renforcement CTA
livré plus tôt le même jour (voir
[2026-08-05-landing-devis-pergola-cta-boost-design.md](2026-08-05-landing-devis-pergola-cta-boost-design.md)).
Retour utilisateur après avoir vu la page en production : « trop sombre »,
« très peu de pergolas en visuel », « trop peu d'informations », « on est
encore trop loin du résultat qu'il faudrait pour pousser l'appel à
l'action ».

## Décisions validées avec l'utilisateur (atelier visuel)

Trois directions de héros ont été présentées avec de vraies photos (photo
pleine largeur façon `/pergolas`, héros clair avec vignette, héros sombre
actuel + bande photo) — l'utilisateur a choisi **la photo pleine largeur**,
avec la demande explicite d'ajouter aussi plus de photos en galerie.

1. **Héros** : fond uni sombre (`bg-primary`) remplacé par une photo pleine
   largeur en arrière-plan, avec le voile `.hero-interne` déjà défini dans
   `app/globals.css` (utilisé tel quel sur les héros de pages intérieures
   comme `/pergolas`). Le texte et le formulaire restent identiques dans
   leur contenu, seul le traitement visuel du fond change.
2. **Galerie** : passe de 4 à 8 photos (validé après une maquette montrant
   exactement ce nombre), toutes reprises telles quelles de `GALERIE`
   (`app/pergolas/page.tsx`) — pas de nouvel asset.
3. **Fiches gamme** : chacune des 3 cartes du comparatif (bioclimatique /
   aluminium / bois) gagne une photo au-dessus de son texte, reprise de
   `GAMME` (`app/pergolas/page.tsx`) — elles n'avaient qu'une icône
   jusqu'ici.
4. **Nouvelle mini FAQ** (3 questions, décidé en clarification texte après
   l'atelier visuel) : traite le manque d'informations en répondant aux
   objections les plus susceptibles de bloquer avant l'envoi du
   formulaire — prix, autorisation d'urbanisme, choix du matériau. Textes
   raccourcis depuis la FAQ déjà écrite sur `/pergolas` (pas de contenu
   inventé).
5. **Compromis assumé** : la page redevient plus lourde, plus proche du
   poids de `/pergolas` qu'auparavant — ce qui va à l'encontre de
   l'objectif initial « page plus légère que /pergolas » du tout premier
   brief. Choix délibéré de l'utilisateur : la conversion prime sur le
   poids brut de la page à ce stade. Documenté ici pour que ce ne soit pas
   perçu comme une régression silencieuse lors d'une future revue.

## Contenu réutilisé (sources exactes, `app/pergolas/page.tsx`)

### Photo de héros

Déjà utilisée comme image de héros de `/pergolas` et comme `ogImage` de la
landing page actuelle :
`/images/realisations/pergola-aluminium-terrasse-bois-libourne-1.webp`.

### Galerie (8 entrées, extraites de `GALERIE`)

Les 6 premières entrées de `GALERIE` (chantiers réels, déjà utilisées dans
la version actuelle à 4 — les 2 suivantes de `GALERIE` s'y ajoutent) plus 2
entrées supplémentaires couvrant les familles bioclimatique et bois :

1. `pergola-aluminium-terrasse-bois-libourne-1.webp` (1600×900)
2. `pergola-aluminium-store-zip-libourne-2.webp` (1100×825)
3. `pergola-aluminium-toit-polycarbonate-libourne-6.webp` (825×1100)
4. `pergola-aluminium-terrasse-bois-libourne-5.webp` (825×1100)
5. `salon-sous-pergola-aluminium-libourne-8.webp` (825×1100)
6. `pergola-terrasse-bois-libourne-4.webp` (1000×1333)
7. `source-adefrance/Pergolas-aluminium-Libourne-8.webp` (768×512) —
   bioclimatique blanche, lames ouvertes
8. `source-adefrance/Pergolas-bois-Libourne.webp` (900×990) — bois massif
   autoportée

### Photos des fiches gamme (extraites de `GAMME`)

- Bioclimatique : `/images/source-adefrance/Pergolas-aluminium-Libourne-9.webp`
  (768×512)
- Aluminium : `/images/pergola-terrasse-bois-libourne-1.webp` (1200×900)
- Bois massif : `/images/pergola-bois-lames-terrasse.webp` (1000×1500)

### Mini FAQ (3 questions, textes raccourcis depuis la FAQ de `/pergolas`)

- **Combien coûte une pergola sur mesure ?** — condensé de : « Le prix
  dépend de la surface couverte, du type de couverture, des équipements
  ajoutés et de la nature du support. Nous ne pratiquons pas de tarif au
  mètre carré affiché : nous relevons votre terrasse et remettons un devis
  détaillé, poste par poste. »
- **Faut-il une autorisation d'urbanisme ?** — condensé de : « Le plus
  souvent oui, une déclaration préalable de travaux selon la surface. Les
  seuils dépendent du PLU de votre commune : nous les vérifions sur pièces
  et montons le dossier avec vous. »
- **Bois ou aluminium, laquelle choisir ?** — condensé de : « Le bois
  massif apporte chaleur et matière, l'aluminium offre de grandes portées
  sans entretien. Le choix dépend de votre maison, de l'usage souhaité et
  du budget — nous vous conseillons au rendez-vous. »

## Architecture

### Fichier modifié

- `app/devis-pergola/page.tsx` :
  - Le `<header data-devis-hero>` du héros passe d'un fond `bg-primary`
    uni à une image de fond (`absolute inset-0 z-0` + `<img>` +
    `.hero-interne`) suivant exactement le patron déjà utilisé sur
    `/pergolas` (`<div className="absolute inset-0 z-0"><img
    .../><div className="absolute inset-0 hero-interne"></div></div>`,
    contenu existant repositionné en `relative z-10`).
  - `GALERIE_COURTE` passe de 4 à 8 entrées (liste ci-dessus).
  - `GAMME_COURTE` : chaque entrée gagne un champ `src`/`alt`/`w`/`h`
    (photo ci-dessus) ; le rendu de chaque carte affiche désormais l'image
    au-dessus de l'icône + titre + texte existants (rien de retiré).
  - Nouvelle `<section>` FAQ (3 questions), insérée entre le comparatif de
    gamme et le CTA final.
  - Aucun autre contenu retiré : bandeau de confiance, section chiffres +
    relance (ajoutée à l'itération précédente), les 3 formulaires et leurs
    `instanceId`, le footer et la barre CTA flottante restent inchangés.

### Fichiers explicitement non modifiés

- `components/LandingPergolaForm.tsx`, `components/LandingPergolaHeader.tsx`,
  `components/LandingPergolaFooter.tsx`, `components/LandingPergolaStickyBar.tsx`,
  `lib/gtag.ts`, `lib/metadata.ts`, `app/api/contact/route.ts` — rien de
  tout cela ne change dans cette itération.
- `app/pergolas/page.tsx` — reste la source des contenus réutilisés, non
  modifiée.

## Vérification finale

- Rendu mobile réel : confirmer que le héros photo garde le formulaire
  lisible par-dessus le voile, que les 8 photos de galerie se chargent
  (`loading="lazy"`, comme aujourd'hui), que les fiches gamme illustrées
  s'affichent correctement en grille, et que la FAQ est lisible sans
  rogner le texte.
- Poids de page : mesurer et rapporter honnêtement le nouveau poids
  (attendu en hausse, compromis assumé — voir décision 5), sans chercher à
  le présenter comme inchangé.
- Aucune régression sur le `noindex`, l'exclusion du menu/footer/sitemap,
  le suivi UTM/gclid, ou les événements de conversion — rien de tout cela
  n'est touché par cette itération.

## Hors périmètre

- Pas de nuancier de teintes, pas de section « étapes du chantier », pas de
  liste de communes — restent sur `/pergolas` uniquement.
- Pas de JSON-LD FAQPage pour la nouvelle mini FAQ — la page reste
  `noindex`, aucun bénéfice SEO à en tirer, et ça alourdirait le HTML sans
  raison.
