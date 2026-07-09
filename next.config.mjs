/** @type {import('next').NextConfig} */
const nextConfig = {
  // Le site n'utilise que des <img> statiques (pas de next/image optimisé) :
  // on désactive l'optimiseur pour éviter sa complexité sur Cloudflare.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
