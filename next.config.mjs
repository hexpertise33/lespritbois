/** Content-Security-Policy, appliquée (plus en Report-Only).
 *
 *  Les polices — texte via next/font, icônes via un sous-ensemble local — sont
 *  toutes auto-hébergées : `style-src` et `font-src` n'ont plus besoin
 *  d'autoriser fonts.googleapis.com ni fonts.gstatic.com. Ne subsistent que
 *  Google Ads et le Consent Mode, seules ressources tierces du site.
 *
 *  Vérifié page par page sur les 28 URL du sitemap avant le passage en mode
 *  bloquant : aucune violation. Si une ressource tierce est ajoutée plus tard
 *  (carte, widget d'avis, vidéo), il faut ouvrir la directive correspondante
 *  ICI, sinon le navigateur la bloquera silencieusement. */
const CSP = [
  "default-src 'self'",
  // 'unsafe-inline' et 'unsafe-eval' : requis par Next.js et par gtag.
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://www.googleadservices.com",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  // *.google-analytics.com : GA4 collecte aussi via des hôtes régionaux (region1.google-analytics.com).
  "img-src 'self' data: https://*.google-analytics.com https://googleads.g.doubleclick.net https://www.google.com",
  // googleadservices.com et google.com : pings de conversion Google Ads (fetch/sendBeacon),
  // en plus du fallback image déjà couvert par img-src.
  "connect-src 'self' https://*.google-analytics.com https://www.googletagmanager.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://www.google.com",
  "frame-src https://www.googletagmanager.com https://td.doubleclick.net",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  'upgrade-insecure-requests',
].join('; ');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Le site n'utilise que des <img> statiques (pas de next/image optimisé) :
  // on désactive l'optimiseur pour éviter sa complexité sur Cloudflare.
  images: {
    unoptimized: true,
  },
  // Ne pas divulguer la pile technique dans les en-têtes de réponse.
  poweredByHeader: false,
  // En-têtes de sécurité appliqués à toutes les routes.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=(), interest-cohort=()',
          },
          { key: 'Content-Security-Policy', value: CSP },
        ],
      },
    ];
  },
};

export default nextConfig;
