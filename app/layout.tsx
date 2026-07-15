import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { jost, manrope, playfairDisplay } from '@/lib/fonts';
import { GADS_ID } from '@/lib/gtag';
import ConsentBanner from '@/components/ConsentBanner';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://lesprit-bois.fr'),
};

// Cache CDN du HTML : Next/OpenNext posait `s-maxage=31536000` (1 an) sur les
// pages statiques, obligeant à purger Cloudflare à chaque déploiement. On passe
// en revalidation courte : le HTML est re-servi frais au plus tard après ce
// délai (avec stale-while-revalidate), donc un déploiement devient visible tout
// seul, sans purge manuelle. Les assets hashés gardent leur propre cache.
export const revalidate = 300;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

// Note d'architecture : contrairement à `Site.astro` qui recevait `page` en prop
// pour souligner l'onglet actif du nav, ce layout racine ne connaît pas la page
// courante (les Server Components de layout n'ont pas accès au segment actif
// sans complexité supplémentaire). Choix retenu : SiteNav et SiteFooter ne sont
// PAS ici, mais inclus directement dans chaque `page.tsx`, chacun passant son
// propre `page="..."` à <SiteNav />, exactement comme `<Site page="...">` le
// faisait par page dans l'Astro d'origine.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={`scroll-smooth ${jost.variable} ${manrope.variable} ${playfairDisplay.variable}`}
      lang="fr"
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-surface font-body-md text-on-surface antialiased">
        {/* Balise Google (gtag.js) — suivi des conversions Google Ads */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500
});
gtag('js', new Date());
gtag('config', '${GADS_ID}');`}
        </Script>
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-on-primary focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Aller au contenu
        </a>
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
