# Audit comparatif — lesprit-bois.fr

**Audit de référence** : 1er août 2026, 7 h 50 — **Ré-audit** : 1er août 2026, ~17 h 30
**Périmètre** : crawl exhaustif de la production (même script, même méthode). 28 pages indexables ce soir contre 24 ce matin.

---

## Score de santé SEO : **75 → 88 / 100** (+13)

| Catégorie | Poids | Matin | Soir | Δ |
|---|---|---|---|---|
| SEO technique | 22 % | 84 | **93** | +9 |
| Qualité de contenu | 23 % | 68 | **85** | +17 |
| On-page & maillage | 20 % | 72 | **91** | +19 |
| Données structurées | 10 % | 74 | **92** | +18 |
| Performance (CWV) | 10 % | 80 | **91** | +11 |
| Recherche IA (GEO) | 10 % | 68 | **76** | +8 |
| Images | 5 % | 85 | **87** | +2 |
| **SEO local** (hors pondération) | — | 49 | **78** | **+29** |

Le SEO local — identifié ce matin comme le chantier le plus rentable et le plus faible — est celui qui a le plus progressé.

---

## Constats du matin : état ce soir, vérifié en production

### Les 5 problèmes prioritaires — tous résolus

| # | Constat du matin | Vérification ce soir |
|---|---|---|
| 1 | Lien Facebook erroné (`Eprisbois33`) | ✅ `facebook.com/lespritbois33` dans le pied de page et le `sameAs`, Instagram ajouté |
| 2 | Aucun lien vers la fiche GBP | ✅ « Voir les avis / Laisser un avis » sur l'accueil (lien entité `kgmid`), page `/contact` avec itinéraire Google Maps |
| 3 | `/realisations` vide (539 mots / 22 photos) | ✅ **2 494 mots**, 12 études de cas, 37 images |
| 4 | Avis 5/5 non balisés | ✅ `AggregateRating` 5/5, 6 avis, sur l'entité de l'accueil |
| 5 | Lien interne mort vers `/bardages` | ✅ Plus aucun lien entrant vers `/bardages` (0 lien mort sur 28 destinations) |

### Les 5 gains rapides — tous réalisés

- ✅ URL Facebook corrigée + Instagram au `sameAs`
- ✅ Lien `/bardages` réparé
- ✅ `publisher.logo` en PNG sur les **16** articles (0 SVG restant)
- ✅ `AggregateRating` sur l'accueil
- ✅ `llms.txt` en ligne (200)

### Autres constats résolus dans la journée

| Constat du matin | Sévérité | Ce soir |
|---|---|---|
| CSP absente | Medium | ✅ CSP **bloquante et resserrée** en production |
| `X-Powered-By: Next.js` | Low | ✅ Supprimé |
| Pas de page contact | High | ✅ `/contact` (516 mots, `ContactPage`, carte, horaires) |
| Pas de page « Qui sommes-nous » | High | ✅ `/qui-sommes-nous` (975 mots, `AboutPage`), signatures d'articles rattachées |
| `/amenagement-exterieur` sous-développée | Medium | ✅ 1 365 → **2 281 mots** |
| 15 titles > 65 caractères | High | ✅ Il en reste **2** (accueil 66, article pergola 70 — borderline) |
| 14 meta descriptions > 160 caractères | Medium | ✅ Il en reste **1** (163 caractères — borderline) |
| Police d'icônes tierce bloquante (304 Ko) | High | ✅ Sous-ensemble auto-hébergé de **8,9 Ko** — plus aucune requête tierce bloquante |
| Entité `GeneralContractor` dupliquée sans `@id` | Medium | ✅ Une seule entité `#entreprise` sur l'accueil, référencée par `@id` ailleurs |
| Pas de relance d'avis | Low | ✅ Appel à l'action + mode d'emploi de collecte en place |
| Code mort `lib/data/site.ts` | — | ✅ Supprimé |
| Visuels fournisseur au filigrane | — | ✅ Tous retirés |

### En prime, non demandé ce matin

- 2 nouveaux articles publiés (structure terrasse bois, véranda aluminium) — le corpus passe à 16 articles.
- Sitemap toujours parfaitement aligné : 28 URL, zéro écart avec le crawl dans les deux sens.

---

## Ce qui reste ouvert — MISE À JOUR du soir (2ᵉ vague, déployée et vérifiée en production)

| Constat | Sévérité | État après la 2ᵉ vague |
|---|---|---|
| Aucune source externe citée dans les articles | High (GEO) | ✅ **39 liens** vers service-public.gouv.fr, ecologie.gouv.fr, CSTB et FCBA dans les 16 articles, insérés au premier endroit où l'affirmation apparaît ; liste blanche documentée dans la ligne éditoriale |
| Chevauchement blog / pages de gamme | Medium | ✅ 5 questions FAQ dupliquées (dont 1 mot pour mot) reformulées côté articles |
| Canonical de l'accueil sans slash final | Low | ✅ Convention « sans slash » actée (Next normalise ainsi) ; le sitemap est aligné |
| Pas de clé IndexNow | Low | ✅ Clé déposée, 28 URL soumises (202 Accepted), ping intégré à la routine de publication |
| Héro `/realisations` : 224 Ko | Low | ✅ 178 Ko ; 11 images servies recompressées au total (~430 Ko économisés) |
| Vignettes `/blog` sans dimensions | Low | ✅ Dimensions réelles ajoutées au modèle `Article` et aux 16 vignettes |
| Titles/meta « borderline » | — | ✅ Faux positifs : la mesure comptait les entités HTML (`&#x27;`) ; longueurs réelles 56/65 et 158 caractères |
| Signaux de marque hors site quasi inexistants | High (GEO) | ⏳ Hors périmètre du site (YouTube, LinkedIn, presse) — action commerciale, pas code |
| Risque de doublon d'entité avec a-defrance.fr | Medium | ⏳ Clarifier publiquement la relation entre les deux enseignes est une décision d'entreprise — à trancher par vos soins avant tout changement sur le site |
| Volume d'avis (6) | Low | ⏳ Processus de collecte en place ; le volume viendra avec le temps |

Écart d'adresse avec les registres (« 1 Aux Pradasses ») : **reclassé — à ne pas corriger**, conformément à la décision prise (l'adresse du site est la bonne).

---

## Limites (identiques au matin)

Toujours pas de données de terrain (CrUX/PSI), ni Search Console, ni Analytics, ni backlinks. Les scores mesurent la qualité du site, pas ses positions. Les effets des correctifs du jour sur les classements ne seront visibles qu'après recrawl par Google (quelques jours à quelques semaines).

## Artefacts

- Crawl du matin préservé : `crawl-matin-0740.json`
- Crawl du soir : `crawl.json`
- Rapports du matin inchangés : `FULL-AUDIT-REPORT.md`, `ACTION-PLAN.md`, `findings/`
