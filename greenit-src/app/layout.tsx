import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://hylst.fr/greenit"),
  title: "Le Green IT en clair - Écologie Numérique et Numérique Responsable",
  description:
    "Découvrez l'impact environnemental du numérique et adoptez des pratiques responsables. Informations, outils interactifs et ressources pour un Green IT en France.",
  keywords: [
    "Green IT",
    "numérique responsable",
    "écologie numérique",
    "empreinte carbone numérique",
    "sobriété numérique",
    "développement durable",
    "déchets électroniques",
    "recyclage IT",
    "écoconception",
    "datacenters verts",
  ],
  authors: [{ name: "Geoffroy Streit", url: "https://hylst.fr" }],
  creator: "Geoffroy Streit",
  publisher: "Le Green IT en clair",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://hylst.fr/greenit",
    siteName: "Le Green IT en clair",
    title: "Le Green IT en clair - Écologie Numérique et Numérique Responsable",
    description:
      "Découvrez l'impact environnemental du numérique et adoptez des pratiques responsables. Informations, outils interactifs et ressources pour un Green IT en France.",
    images: [
      {
        url: "/greenit/abstract-green-technology-network-with-leaves-and-.webp",
        width: 1200,
        height: 630,
        alt: "Le Green IT en clair - Écologie Numérique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Green IT en clair - Écologie Numérique et Numérique Responsable",
    description:
      "Découvrez l'impact environnemental du numérique et adoptez des pratiques responsables. Informations, outils interactifs et ressources pour un Green IT en France.",
    images: ["/greenit/abstract-green-technology-network-with-leaves-and-.webp"],
    creator: "@greenitenclair",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://hylst.fr/greenit",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Anti-flash script - sets theme before page renders */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('greenIT-theme');
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                  } else if (theme === 'dark' || !theme) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  } else if (theme === 'system') {
                    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    document.documentElement.classList.add(prefersDark ? 'dark' : 'light');
                    document.documentElement.classList.remove(prefersDark ? 'light' : 'dark');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#059669" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#10b981" media="(prefers-color-scheme: dark)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Green IT" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          <Navigation />
          <Breadcrumb />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(registration) {
                    console.log('SW registered: ', registration);
                  }).catch(function(error) {
                    console.log('SW registration failed: ', error);
                  });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
