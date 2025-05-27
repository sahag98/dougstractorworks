import "@/styles/globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { ViewTransitions } from "next-view-transitions"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url.base),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url.author,
    },
  ],
  creator: siteConfig.author,
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    nocache: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url.base,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  icons: {
    icon: "/website-logo.png",
  },
}

// const jsonLd = {
//   "@context": "https://schema.org",
//   "@type": "LocalBusiness",
//   name: "Doug's Tractor Works",
//   image: "",
//   "@id": "",
//   url: "https://dougstractorworks.com/",
//   telephone: "+1 310-850-9926",
//   address: {
//     "@type": "PostalAddress",
//     streetAddress: "",
//     addressLocality: "Palmdale",
//     addressRegion: "CA",
//     postalCode: "93551",
//     addressCountry: "US",
//   },
//   openingHoursSpecification: [
//     {
//       "@type": "OpeningHoursSpecification",
//       dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Friday", "Thursday"],
//       opens: "08:00",
//       closes: "18:00",
//     },
//     {
//       "@type": "OpeningHoursSpecification",
//       dayOfWeek: "Saturday",
//       opens: "14:00",
//       closes: "18:00",
//     },
//   ],
// }

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "relative min-h-screen bg-background antialiased",
            inter.className
          )}
        >
          {/* <Script
            id="schema"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          /> */}
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <Toaster />
        </body>
      </html>
    </ViewTransitions>
  )
}
