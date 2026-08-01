# On-page & maillage interne — score 72/100

Périmètre : 25 URL uniques crawlées le 01/08/2026, toutes en HTTP 200.

## Ce qui fonctionne déjà

- **Un seul `<h1>` par page**, sur les 25 pages. Aucune page sans h1, aucune page à h1 multiple.
- **Aucune image sans attribut `alt`** sur l'ensemble du site (0 sur ~250 images).
- **Aucun title ni meta description dupliqué** entre pages distinctes.
- **Aucune page orpheline** : chaque URL reçoit au moins un lien éditorial depuis une autre page, hors navigation et pied de page.
- **Hiérarchie de titres riche** sur les pages de gamme : 11 à 14 `h2` et 13 à 36 `h3` par page, ce qui donne à Google des points d'ancrage nombreux pour les extraits enrichis.
- **Canonicals cohérentes** : `https://lesprit-bois.fr` sans slash final, servie de façon identique que l'URL soit appelée avec ou sans slash.
- **Maillage éditorial dense** : la page d'accueil reçoit 23 liens internes, `/realisations` 21, `/amenagement-exterieur` 16, `/blog` et `/constructions-bois` 15.

## Constats

### Titles tronqués dans les résultats Google — Sévérité : Élevée

**Preuve.** 15 des 25 titles dépassent 65 caractères, seuil au-delà duquel Google tronque l'affichage sur desktop. Les pires cas :

| Page | Longueur |
|---|---|
| `/blog/cloture-brise-vue-bois-guide` | 93 car. |
| `/blog/extension-ossature-bois-prix-m2` | 83 car. |
| `/blog/abri-jardin-bois-kit-ou-sur-mesure` | 81 car. |
| `/blog/autorisation-urbanisme-abri-carport-pergola-2026` | 81 car. |
| `/pergolas` | 80 car. |

Le suffixe ` | L'Esprit Bois` coûte 16 caractères sur chaque page. Sur les articles longs, il fait sauter la fin du titre — donc souvent le mot-clé de queue de traîne ou le millésime « 2026 » qui porte la fraîcheur.

**Correctif.** Ramener chaque title sous 60 caractères. Sur les articles de blog, supprimer le suffixe de marque : il n'apporte rien en découverte (personne ne cherche « L'Esprit Bois » avant de connaître l'entreprise) et consomme le budget d'affichage. Exemple : `Clôture et brise-vue en bois : essence, hauteur, budget 2026` (60 car.) au lieu de 93.

### Meta descriptions tronquées — Sévérité : Moyenne

**Preuve.** 14 descriptions dépassent 160 caractères. `/pergolas` monte à 239 caractères, `/carports` à 213, `/blog/poulailler-bois-reglementation-implantation` à 215. Au-delà de ~160, Google coupe ou réécrit entièrement.

**Correctif.** Réécrire ces 14 descriptions entre 140 et 155 caractères, en plaçant l'argument différenciant et l'ancrage local dans les 120 premiers caractères. Les descriptions des pages de gamme ont été rallongées lors de la refonte pour lister tous les produits : c'est utile pour l'humain qui lit la page, inutile dans une balise que Google tronque.

### Lien interne mort vers `/bardages` — Sévérité : Élevée

**Preuve.** L'article `/blog/cloture-brise-vue-bois-guide` contient, dans son corps de texte, `<a href="/bardages">nos bardages bois</a>` (source : `app/blog/cloture-brise-vue-bois-guide/page.tsx`, ligne 506). Or `https://lesprit-bois.fr/bardages` renvoie **404**. C'est le seul lien mort du site : sur 25 destinations internes distinctes testées, les 24 autres répondent en 200.

Un visiteur qui suit ce lien depuis un article tombe sur une page d'erreur, et Google gaspille du budget de crawl sur une URL inexistante depuis une page par ailleurs bien maillée.

**Correctif.** Deux options selon l'intention. Si une page bardages est prévue, la créer — le sujet a le volume pour (un article de blog complet lui est déjà consacré, `/blog/bardage-bois-facade-essences-pose`, 3 744 mots). Sinon, rediriger le lien vers `/amenagement-exterieur`, où les claustras et bardages sont traités. La correction est d'une ligne.

### 14 images sans dimensions sur `/blog` — Sévérité : Faible

**Preuve.** Sur les 17 images de `/blog`, 14 n'ont ni `width` ni `height` — seule page du site dans ce cas, les 24 autres étant à 100 % conformes.

**Nuance importante, vérifiée dans le code.** Les vignettes sont enfermées dans un conteneur à hauteur fixe : `<div className="h-56 overflow-hidden">` (`app/blog/page.tsx`). L'espace vertical est donc réservé avant le chargement de l'image, et **le décalage de mise en page n'a pas lieu**. Le risque CLS théorique ne se matérialise pas ici.

**Correctif.** Ajouter les dimensions reste une bonne pratique — elle protège si quelqu'un retire un jour la hauteur fixe, et aide le navigateur à prioriser le décodage. Mais ce n'est pas une urgence, contrairement à ce que la seule détection automatique laisserait croire.

### `/realisations` est une page mince — Sévérité : Élevée

**Preuve.** 539 mots, 3 `h2`, 1 `h3` — contre 1 365 à 3 156 mots et 11 à 14 `h2` sur les pages de gamme. C'est la deuxième page la plus maillée du site (21 liens entrants), donc celle vers laquelle le site pousse le plus de valeur après l'accueil, et c'est la plus pauvre en contenu.

**Correctif.** C'est la page qui devrait porter la preuve : pour chaque chantier, ajouter la commune, le type d'ouvrage, l'essence ou le matériau, et 2 à 3 phrases sur la contrainte résolue. Vingt-cinq photos accompagnées de 40 mots chacune suffiraient à tripler le contenu tout en le rendant réellement utile — et chaque commune citée devient un signal local.

### Le suffixe de marque occupe 16 caractères sur les 25 titles — Sévérité : Faible

**Preuve.** Les 25 pages portent ` | L'Esprit Bois` ou une variante. Sur les pages de gamme et l'accueil c'est justifié : ce sont les pages de marque. Sur les 14 articles de blog, qui visent des requêtes informationnelles sans intention de marque, c'est du budget perdu.

**Correctif.** Réserver le suffixe aux 8 pages institutionnelles et de gamme.

### Ancrage local absent de 9 titles d'articles — Sévérité : Faible

**Preuve.** Seuls `/blog/bois-local-pin-maritime-douglas-gironde` et `/blog/carport-aluminium-ou-bois-comparatif` portent « Gironde » dans leur title. Les 12 autres articles sont génériques.

**Correctif.** À manier avec retenue : forcer « Gironde » dans tous les titles d'articles nuirait aux requêtes nationales, qui apportent du trafic de découverte. En revanche, l'ajouter aux articles à composante réglementaire ou tarifaire — où la réponse varie réellement selon la commune ou la région — est justifié : autorisation d'urbanisme, prix au m², clôture et hauteur autorisée.
