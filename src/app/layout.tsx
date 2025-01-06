import "@/styles/globals.css"

import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { ViewTransitions } from "next-view-transitions"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

interface RootLayoutProps {
  children: React.ReactNode
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
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
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  icons: {
    icon: "/favicon.ico",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://dminhvu.com/nextjs-seo",
  },
  headline: "Next.js SEO: The Complete Checklist to Boost Your Site Ranking",
  description:
    "Learn how to optimize your Next.js website for SEO by following this complete checklist.",
  image:
    "https://ik.imagekit.io/dminhvu/assets/nextjs-seo/thumbnail.png?tr=f-png",
  dateCreated: "2024-01-11T11:35:00+07:00",
  datePublished: "2024-01-11T11:35:00+07:00",
  dateModified: "2024-01-11T11:35:00+07:00",
  author: {
    "@type": "Person",
    name: "Minh Vu",
    url: "https://www.linkedin.com/in/dminhvu02",
  },
  publisher: {
    "@type": "Person",
    name: "Minh Vu",
    logo: {
      "@type": "ImageObject",
      url: "https://dminhvu.com/avatar_zoom.jpg",
    },
  },
  inLanguage: "en-US",
  isFamilyFriendly: "true",
}

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
        </body>
      </html>
    </ViewTransitions>
  )
}
