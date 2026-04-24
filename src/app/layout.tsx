import type { Metadata, Viewport } from 'next'
import { DM_Sans } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import SplashScreen from '@/components/ui/SplashScreen'
import LenisProvider from '@/components/providers/LenisProvider'
import CursorGlow from '@/components/ui/CursorGlow'
import { organizationJsonLd } from '@/lib/jsonld'

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
})

export const viewport: Viewport = {
  themeColor: '#0C0C0C',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://getspotbook.app'),
  title: {
    default: 'Spotbook — Découvrez. Réservez. Vivez.',
    template: '%s | Spotbook',
  },
  description:
    'La super-app qui connecte les clients aux meilleurs professionnels indépendants. Feed vidéo, réservation instantanée, billetterie.',
  keywords: [
    'réservation', 'services', 'professionnels', 'événements', 'billets',
    'barber', 'coiffeur', 'coach', 'photographe', 'DJ', 'traiteur',
    'Montréal', 'Québec',
  ],
  openGraph: {
    title: 'Spotbook — Découvrez. Réservez. Vivez.',
    description: 'La super-app qui connecte les clients aux meilleurs professionnels indépendants.',
    url: 'https://getspotbook.app',
    siteName: 'Spotbook',
    locale: 'fr_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spotbook',
    description: 'Découvrez. Réservez. Vivez.',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-CA" className={dmSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
      </head>
      <body suppressHydrationWarning>
        <LenisProvider>
          <SplashScreen>
            <CursorGlow />
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </SplashScreen>
        </LenisProvider>
      </body>
    </html>
  )
}
