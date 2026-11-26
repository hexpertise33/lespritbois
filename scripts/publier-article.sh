#!/usr/bin/env bash
# Met en ligne un article de blog déjà préparé et buildé. C'est le seul geste
# que David valide : tout ce qui précède se fait sans lui.
#
#   scripts/publier-article.sh <slug> "<message de commit>" [fichier voisin maillé]...
set -euo pipefail

REPO=/Users/bertranddavid/Projets/lespritbois
INDEXNOW_KEY=a0b43b04a9254681af50f9e95240c80b

slug=${1:?slug manquant}
message=${2:?message de commit manquant}
shift 2

[[ "$slug" =~ ^[a-z0-9-]+$ ]] || { echo "Slug invalide : $slug" >&2; exit 1; }
cd "$REPO"

page="app/blog/$slug/page.tsx"
[ -f "$page" ] || { echo "Page introuvable : $page" >&2; exit 1; }
grep -q "slug: '$slug'" lib/data/blog.ts || { echo "Entrée absente de lib/data/blog.ts" >&2; exit 1; }
if grep -q "__IMAGE_A_SOURCER__" "$page"; then
  echo "Marqueur d'image non résolu dans $page" >&2
  exit 1
fi

npm run build

git add "$page" lib/data/blog.ts docs/blog-pipeline/README.md "$@"
if [ -d "public/images/blog/$slug" ]; then
  git add "public/images/blog/$slug"
fi
git commit -m "$message" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
git push origin main

npm run deploy

url="https://lesprit-bois.fr/blog/$slug"
for essai in 1 2 3; do
  sleep 20
  code=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  echo "Contrôle $essai : $url -> $code"
  if [ "$code" != "200" ]; then
    echo "La page ne répond pas 200. Ne pas signaler aux moteurs." >&2
    exit 1
  fi
done

code=$(curl -s -o /dev/null -w "%{http_code}" "https://api.indexnow.org/indexnow?url=$url&key=$INDEXNOW_KEY")
echo "IndexNow : $code"
