import type React from "react"
import type { Metadata } from "next"
import { Alice } from "next/font/google"
import "./globals.css"
import Script from "next/script"

import { Toaster } from "@/components/ui/toaster"

// Import Alice font
const alice = Alice({
  weight: "400", // Alice only comes in 400 weight
  subsets: ["latin"],
  display: "swap",
  variable: "--font-alice",
})

export const metadata: Metadata = {
  title: "Celia Vin och Bar | Utsökt mat i Skärhamn<<",
  description:
    "Välkommen till Celia - en restaurang med utsökt mat i en varm och välkomnande atmosfär i Skärhamn. Boka bord idag!",
  keywords: ["restaurang skärhamn", "celia restaurang","boka bord"],
  authors: [{ name: "Celia Vin och Bar" }],
  creator: "Celia Vin och Bar",
  publisher: "Celia Vin och Bar",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL("https://celiavinochbar.se/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://celiavinochbar.se/",
    title: "Celia Vin och Bar | Utsökt mat i Stockholm",
    description:
      "Välkommen till Celia - en restaurang med utsökt mat i en varm och välkomnande atmosfär i centrala Stockholm. Boka bord idag!",
    siteName: "Celia Vin och Bar",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Celia Vin och Bar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Celia Vin och Bar | Utsökt mat i Stockholm",
    description:
      "Välkommen till Celia - en restaurang med utsökt mat i en varm och välkomnande atmosfär i centrala Stockholm. Boka bord idag!",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "google-site-verification-code", // Ersätt med din verifieringskod
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sv">
      <body className={`${alice.variable} font-alice`}>
        {children}
        <Toaster />

        {/* Strukturerad data för restaurangen (JSON-LD) */}
        <Script
          id="restaurant-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Celia Vin och Bar",
              image: "https://celiavinochbar.se/restaurant-image.jpg",
              "@id": "https://celiavinochbar.se/",
              url: "https://celiavinochbar.se/",
              telephone: "+15551234567",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Storgatan 123",
                addressLocality: "Stockholm",
                postalCode: "111 23",
                addressCountry: "SE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 59.3293,
                longitude: 18.0686,
              },
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "11:00",
                  closes: "22:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday", "Sunday"],
                  opens: "10:00",
                  closes: "23:00",
                },
              ],
              servesCuisine: ["Svensk", "Europeisk"],
              menu: "https://celiavinochbar.se/menu.pdf",
              acceptsReservations: "True",
            }),
          }}
        />
      </body>
    </html>
  )
}
