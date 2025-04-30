import type React from "react"
import type { Metadata } from "next"
import { Alice } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import { SpeedInsights } from "@vercel/speed-insights/next"

// Import Alice font
const alice = Alice({
  weight: "400", // Alice only comes in 400 weight
  subsets: ["latin"],
  display: "swap",
  variable: "--font-alice",
})

export const metadata: Metadata = {
  title: "Celia Vin och Bar | En modern vinbar för alla.",
  description:
    "Välkommen till Celia - en modern vinbar med utsökt mat i en varm och välkomnande atmosfär i Skärhamn. Boka bord idag!",
  keywords: ["restaurang skärhamn", "celia vin och bar", "lunch skärhamn", "boka bord"],
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
    title: "Celia Vin och Bar | En modern vinbar för alla.",
    description:
      "Välkommen till Celia - en modern vinbar med utsökt mat i en varm och välkomnande atmosfär i Skärhamn. Boka bord idag!",
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
    title: "Celia Vin och Bar | En modern vinbar för alla.",
    description:
      "Välkommen till Celia - en modern vinbar med utsökt mat i en varm och välkomnande atmosfär i Skärhamn. Boka bord idag!",
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
    icon: "/celia-logo.png",
    shortcut: "/celia-logo.png",
    apple: "/celia-logo.png",
  },
  // verification: {
  //   google: "google-site-verification-code", // Ersätt med din verifieringskod
  // },
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

        {/* Strukturerad data för restaurangen (JSON-LD) */}
        <SpeedInsights />
        <Script
          id="restaurant-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Celia Vin och Bar",
              image: "https://celiavinochbar.se/restaurant-image.jpg",
              "@id": "https://celiavinochbar.se/",
              url: "https://celiavinochbar.se/",
              telephone: "+46702450952",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Södra Hamnen 12",
                addressLocality: "Skärhamn",
                postalCode: "471 32",
                addressCountry: "SE",
              },
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Friday"],
                  opens: "17:00",
                  closes: "01:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday"],
                  opens: "12:00",
                  closes: "01:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Sunday"],
                  opens: "12:00",
                  closes: "17:00",
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
