# Pipeline éditorial — Blog L'Esprit Bois

Mémoire de la routine de publication (2 articles/semaine, **mardi & jeudi**).

## Workflow

1. **Temps 1 — veille (auto, mardi/jeudi ~8h).** L'agent planifié lance
   `/veille-blog` : veille web, recoupe avec les sujets déjà listés ci-dessous
   et avec `lib/data/blog.ts`, écrit 2 propositions dans
   `docs/blog-pipeline/AAAA-MM-JJ.md`, notifie l'utilisateur.
2. **Temps 2 — publication (avec l'utilisateur).** L'utilisateur choisit/ajuste
   une proposition, lance `/rediger-article`, qui rédige, source les images,
   build, puis commit + push + deploy Cloudflare, et marque le sujet `publié`
   ci-dessous.

Voir la charte : `docs/blog-pipeline/ligne-editoriale.md`.

## Sujets

Statuts : `idée` · `proposé` · `publié` · `écarté`.

| Date       | Statut  | Titre                                                    | Slug                              |
|------------|---------|----------------------------------------------------------|-----------------------------------|
| 2026-07-09 | publié  | Pergola bois ou pergola bioclimatique : comment choisir ?| pergola-bois-ou-bioclimatique     |
| 2026-07-09 | publié  | Carport en bois : bien le choisir et l'intégrer          | carport-bois-guide                |
| 2026-07-09 | publié  | Quel bois choisir pour une terrasse extérieure ?         | quel-bois-pour-terrasse-exterieure|

## Idées de sujets en réserve

- Entretien d'une terrasse bois (saturateur, dégrisage) — saisonnier printemps.
- Poulailler en bois : bien-être animal, essences, implantation.
- Bardage bois : claire-voie, pré-grisé, entretien, RE2020.
- Pool-house bois : usages, réglementation piscine, intégration.
- Abri de jardin sur mesure vs kit.
- Extension ossature bois : délais, prix au m², avantages vs parpaing.
- Bois local (douglas, pin maritime) : filière Nouvelle-Aquitaine.
