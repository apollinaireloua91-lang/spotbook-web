import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getspotbook.app"),
  title: {
    default: "Spotbook — Découvrez, Réservez, Vivez",
    template: "%s | Spotbook",
  },
  description:
    "La super-app qui connecte les clients aux meilleurs professionnels indépendants. Feed vidéo, réservation instantanée, billetterie événementielle.",
  keywords: [
    "réservation",
    "services",
    "professionnels",
    "événements",
    "billets",
    "barber",
    "coiffeur",
    "coach",
    "photographe",
    "DJ",
    "traiteur",
    "Montréal",
    "Québec",
  ],
  openGraph: {
    title: "Spotbook — Découvrez, Réservez, Vivez",
    description:
      "La super-app qui connecte les clients aux meilleurs professionnels indépendants.",
    url: "https://getspotbook.app",
    siteName: "Spotbook",
    locale: "fr_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spotbook",
    description: "Découvrez, Réservez, Vivez.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
