import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Doug's Tractor Works",
  author: "Doug's Tractor Works",
  logo: "/website-logo.png",
  description:
    "We provide all kinds of tractor services such as: Weed abatement, mowing fields, and more",
  keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://rdev.pro",
  },
  links: {
    tel: "310-850-9926",
    github: "https://github.com/redpangilinan/next-entree",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/icon.jpg`,
}
