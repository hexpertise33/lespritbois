# Audit SEO — lesprit-bois.fr — 2 août 2026, soir

**4ᵉ audit en 36 h**, même méthode (crawl exhaustif de la production). Crawls précédents préservés. Entre le midi et ce soir : le bloc code (7 chantiers), Search Console, Bing Webmaster, GA4 — et un article publié par la routine quotidienne.

---

## Score de santé SEO : 75 → 88 → 91 → **92 / 100**

| Catégorie | Poids | 01/08 matin | 01/08 soir | 02/08 midi | **02/08 soir** |
|---|---|---|---|---|---|
| SEO technique | 22 % | 84 | 93 | 94 | **96** |
| Qualité de contenu | 23 % | 68 | 85 | 86 | **87** |
| On-page & maillage | 20 % | 72 | 91 | 93 | **94** |
| Données structurées | 10 % | 74 | 92 | 93 | **95** |
| Performance (CWV) | 10 % | 80 | 91 | 91 | **91** |
| Recherche IA (GEO) | 10 % | 68 | 76 | 87 | **92** |
| Images | 5 % | 85 | 87 | 90 | **92** |
| **SEO local** (hors pondération) | — | 49 | 78 | 79 | **80** |

## L'état des lieux, vérifié en production (29 pages, zéro erreur)

- **Zéro anomalie** : 0 page en erreur, 0 lien mort, 0 image sans `alt` ni dimensions (sur 298), alignement sitemap ↔ crawl parfait (29/29).
- **Les 7 chantiers du bloc code tiennent** : llms.txt dynamique, RSS (17 articles), 404 française, images OG toutes distinctes, icônes PNG, 6 `Review` en JSON-LD, `lastmod` complet.
- **La preuve du bien-fondé du llms.txt dynamique** : l'article publié ce matin par la routine (plage de piscine) y figure **sans aucune intervention** — le fichier statique d'hier serait déjà périmé. Idem pour le RSS et le sitemap.
- **La routine éditoriale a intégré la charte des sources** : l'article du jour cite service-public.gouv.fr, le FCBA et Légifrance (loi n° 2003-9 sur la sécurité des piscines — lien vérifié dans un vrai navigateur, l'anti-bot de Légifrance bloquant les vérifications automatiques).
- **GA4 collecte** (`region1.google-analytics.com`, autorisé par la CSP élargie), Search Console et Bing Webmaster sont branchés — les données arrivent sous 48 h à 4 jours.

## Ce qui empêche encore le 95+

| Constat | Sévérité | Commentaire |
|---|---|---|
| Signaux de marque hors site | High (GEO) | Toujours le seul High restant : aucun canal externe (YouTube, LinkedIn, presse). C'est structurel, pas technique. |
| Volume d'avis (6) | Low (Local) | Processus en place ; seul le temps et vos chantiers le feront monter. |
| Relation a-defrance.fr | Medium (Local) | En attente de votre décision. |
| Title (66) et meta (161) de l'article du jour | Info | 1 caractère au-dessus des bornes chacun — la routine a frôlé la limite ; à surveiller, pas à corriger. |
| Performance : pas encore de données de terrain | — | CrUX/GSC rempliront ce trou d'ici quelques jours ; les mesures labo restent excellentes (CLS 0, TTFB < 400 ms). |

## Le mot de la fin

En 36 heures : **75 → 92**. Le site a épuisé ce que le code peut donner — les quatre derniers points se gagnent dehors (avis clients, canal externe, données de terrain à exploiter). Prochain rendez-vous utile : **dans une semaine**, quand Search Console et GA4 auront assez de données pour un audit croisé qualité × positions × trafic réel — un exercice qu'aucun des quatre audits n'a encore pu faire.
