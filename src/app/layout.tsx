import type { Metadata, Viewport } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import './globals.css';

const COMPANY_NAME = 'AKCI Gebäudereinigung';
const COMPANY_PHONE = '0176 647 529 95';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: `${COMPANY_NAME} | Professionelle Reinigungsdienste in Karlsruhe`,
  description: 'Professionelle Reinigungsdienste für Gewerbe und Privatkundschaft in Karlsruhe. Unterhaltsreinigung, Grundreinigung, Fensterreinigung und mehr.',
  keywords: 'Gebäudereinigung, Reinigungsdienste, Karlsruhe, Büroreinigung, Grundreinigung',
  openGraph: {
    title: `${COMPANY_NAME} | Professionelle Reinigungsdienste`,
    description: 'Professionelle Reinigungsdienste für Gewerbe und Privatkundschaft',
    type: 'website',
    url: 'https://akci-gebaeudereinigung.de',
    images: [
      {
        url: '/logo/logo.png',
        width: 1200,
        height: 630,
        alt: COMPANY_NAME,
      },
    ],
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/logo/icon.png',
    apple: '/logo/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="alternate" hrefLang="de" href="https://akci-gebaeudereinigung.de" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: COMPANY_NAME,
              image: '/logo/logo.png',
              description: 'Professionelle Reinigungsdienste für Gewerbe und Privatkundschaft',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Volzstraße 7',
                addressLocality: 'Karlsruhe',
                addressRegion: 'Baden-Württemberg',
                postalCode: '76185',
                addressCountry: 'DE',
              },
              telephone: COMPANY_PHONE,
              url: 'https://akci-gebaeudereinigung.de',
              sameAs: [
                'https://www.instagram.com/akci.gebaeudereinigung',
                'https://www.facebook.com/akci.gebaeudereinigung',
              ],
            }),
          }}
        />
      </head>
      <body>
        <Navigation />
        <main className="flex flex-col min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
