import type { Metadata } from 'next'
import '@/styles/globals.css'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import { organizationJsonLd } from '@/lib/jsonld'

export const metadata: Metadata = {
  metadataBase: new URL('https://getspotbook.app'),
  title: {
    default: 'Spotbook — Découvrez, Réservez, Vivez',
    template: '%s | Spotbook',
  },
  description:
    'La super-app qui connecte les clients aux meilleurs professionnels indépendants. Feed vidéo, réservation instantanée, billetterie événementielle.',
  keywords: [
    'réservation', 'services', 'professionnels', 'événements', 'billets',
    'barber', 'coiffeur', 'coach', 'photographe', 'DJ', 'traiteur',
    'Montréal', 'Québec',
  ],
  openGraph: {
    title: 'Spotbook — Découvrez, Réservez, Vivez',
    description: 'La super-app qui connecte les clients aux meilleurs professionnels indépendants.',
    url: 'https://getspotbook.app',
    siteName: 'Spotbook',
    locale: 'fr_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spotbook',
    description: 'Découvrez, Réservez, Vivez.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-CA">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
      </head>
      <body className="grain">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
