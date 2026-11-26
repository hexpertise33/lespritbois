# Données Search Console — lesprit-bois.fr — 22 août 2026

Lues directement dans l'interface (aucune clé API installée). Période : **11/07 → 20/08/2026**,
soit les trois derniers mois disponibles. C'est la première fois que l'audit dispose de données de
terrain : les quatre audits précédents raisonnaient à l'aveugle.

---

## Vue d'ensemble

| | |
|---|---|
| Clics | **59** |
| Impressions | **2 970** |
| CTR moyen | **2 %** |
| Position moyenne | **26,2** |

Position 26 = milieu de la troisième page. Le site est vu, il n'est pas cliqué.

---

## Le constat qui change tout : le blog ne rapporte rien

**Pages, par clics :**

| Page | Clics | Impressions |
|---|---|---|
| `/` | **55** | **2 000** |
| `/pergolas` | 1 | 594 |
| `/blog/proteger-terrasse-bois-canicule-entretien-ete` | 1 | 72 |
| `/mentions-legales` | 1 | 15 |
| `/blog/cloture-brise-vue-bois-guide` | 1 | 9 |
| `/carports` | 0 | 107 |
| `/blog/dimensions-carport-taille-hauteur` | 0 | 38 |
| `/realisations` | 0 | 26 |
| `/amenagement-exterieur` | 0 | 20 |
| `/contact` | 0 | 18 |

**L'accueil fait 93 % des clics du site.** Les 32 articles de blog réunis en font **2**, pour
environ 130 impressions cumulées — contre 2 000 pour la seule page d'accueil.

Autrement dit : **20 articles publiés en 23 jours ont produit deux clics en trois mois.** La
décision de ramener la cadence à deux par semaine, prise ce matin sur un raisonnement, est
confirmée par les chiffres l'après-midi même.

Seules **30 pages sur 48** apparaissent dans le rapport. Les autres n'ont jamais été affichées.

---

## Ce que les gens cherchent vraiment

**Top requêtes par impressions** — toutes à **zéro clic** :

| Requête | Impressions | Clics |
|---|---|---|
| constructeur maison bois gironde | **89** | 0 |
| maison bois gironde | **60** | 0 |
| constructeur maison la lande de fronsac | 46 | 0 |
| **pergola bioclimatique la teste de buch** | 46 | 0 |
| pergolas bois moderne gironde | 44 | 0 |
| ossature bois 33 | 42 | 0 |
| **terrasse bois libourne** | 42 | 0 |
| constructeur maison libourne | 40 | 0 |
| maison en bois | 38 | 0 |
| bâtiment industriel ossature bois | 38 | 0 |

314 requêtes au total.

**Trois enseignements :**

1. **La demande est massivement sur l'ossature bois et la maison bois en Gironde**, pas sur les
   pergolas ni les carports. Quatre des dix premières requêtes en relèvent, pour 229 impressions
   cumulées et zéro clic. La page `/constructeur-ossature-bois-gironde` créée aujourd'hui vise
   exactement ce terrain — par chance autant que par raisonnement.
2. **La géographie de la demande dépasse le Libournais.** « La Teste-de-Buch » (bassin d'Arcachon,
   46 impressions) et « La Lande-de-Fronsac » (46) apparaissent alors qu'aucune page ne les cite.
3. **« terrasse bois libourne », 42 impressions, zéro clic** : la terrasse est traitée dans
   `/amenagement-exterieur` parmi cinq autres prestations, sans page dédiée. C'est la requête la
   plus proche du cœur de métier qui n'a pas sa page.

---

## Indexation : 32 dans l'index, 11 hors index

| Motif | Pages |
|---|---|
| **Détectée, actuellement non indexée** | **8** |
| Page avec redirection | 2 |
| Explorée, actuellement non indexée | 1 |

**« Détectée, actuellement non indexée » signifie que Google connaît l'URL mais ne l'a même pas
explorée.** C'est un signal de priorité, pas de qualité de page : Google ne juge pas le site assez
important pour dépenser du budget d'exploration dessus.

Les huit :

```
https://lesprit-bois.fr/blog                                   ← l'index du blog lui-même
https://lesprit-bois.fr/qui-sommes-nous                        ← page d'entreprise
https://lesprit-bois.fr/politique-de-confidentialite
https://lesprit-bois.fr/blog/extension-ossature-bois-prix-m2   ← le sujet le plus demandé !
https://lesprit-bois.fr/blog/pool-house-bois-guide
https://lesprit-bois.fr/blog/pergola-bois-ou-bioclimatique
https://lesprit-bois.fr/blog/carport-aluminium-ou-bois-comparatif
https://lesprit-bois.fr/blog/garde-corps-terrasse-aluminium-ou-bois
```

Deux points méritent d'être soulignés :

- **`/blog` et `/qui-sommes-nous` sont dans la barre de navigation**, donc liés depuis les 48 pages
  du site, et Google ne les explore pas. Ce n'est pas un problème de maillage : c'est un budget
  d'exploration saturé par 32 articles que Google ne juge pas prioritaires.
- **`/blog/extension-ossature-bois-prix-m2` porte exactement le sujet qui génère 229 impressions**
  (« constructeur maison bois gironde » et variantes) — et il n'est pas indexé.

---

## GA4 : inaccessible

Le compte Google connecté à ce navigateur a accès à Search Console mais **pas** à la propriété GA4
(l'interface propose de créer un compte). La propriété `G-DBV2Q8X8T2` est déclarée sur
`sasecotoit@gmail.com` ; soit ce n'est pas le compte actif dans Chrome, soit l'accès n'a pas été
partagé. À vérifier de votre côté — je ne me connecte pas à un compte à votre place.
