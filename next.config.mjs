/** Content-Security-Policy en mode Report-Only.
 *
 *  Le site charge des ressources tierces légitimes : Google Fonts (feuille de
 *  style + fichiers woff2), Google Ads et Consent Mode. Une CSP bloquante mal
 *  calibrée les couperait, d'où le Report-Only : le navigateur signale les
 *  violations en console sans rien bloquer. Une fois la console propre sur
 *  plusieurs jours, basculer la clé en `Content-Security-Policy`. */
const CSP = [
  "default-src 'self'",
  // 'unsafe-inline' et 'unsafe-eval' : requis par Next.js et par gtag.
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://www.googleadservices.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: https://www.google-analytics.com https://googleads.g.doubleclick.net https://www.google.com",
  "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com",
  "frame-src https://www.googletagmanager.com https://td.doubleclick.net",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
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
          { key: 'Content-Security-Policy-Report-Only', value: CSP },
        ],
      },
    ];
  },
};

export default nextConfig;
