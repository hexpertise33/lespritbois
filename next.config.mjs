/** @type {import('next').NextConfig} */
const nextConfig = {
  // Le site n'utilise que des <img> statiques (pas de next/image optimisé) :
  // on désactive l'optimiseur pour éviter sa complexité sur Cloudflare.
  images: {
    unoptimized: true,
  },
  // En-têtes de sécurité appliqués à toutes les routes. On évite volontairement
  // une Content-Security-Policy stricte : le site charge Google Fonts et les
  // scripts Google Ads/Consent Mode, qu'une CSP mal calibrée bloquerait.
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
        ],
      },
    ];
  },
};

export default nextConfig;
