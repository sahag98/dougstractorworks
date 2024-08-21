// React and Next.js imports
import Image from "next/image"
// Icon imports
import { Facebook, Github, Instagram, Twitter, Youtube } from "lucide-react"
import { Link } from "next-view-transitions"
// Third-party library imports
import Balancer from "react-wrap-balancer"

import { siteConfig } from "@/config/site"

// UI component imports
import { Button } from "./ui/button"

export default function Footer() {
  return (
    <footer className="z-20 w-full border-t  px-4 pb-5 pt-10  md:px-16 lg:px-40">
      <div className="space-y-3">
        <div className="grid gap-12  md:grid-cols-[1.5fr_0.5fr_0.5fr]">
          <div className="not-prose flex flex-col gap-3">
            <Link href="/">
              <h3 className="sr-only text-foreground">
                Doug&apos;s Tractor Works
              </h3>
              <Image
                src={siteConfig.logo}
                alt="Logo"
                width={502}
                height={497}
                className="w-20 transition-all hover:opacity-75 dark:invert"
              ></Image>
            </Link>
            <p className="text-lg text-foreground">
              <Balancer>{siteConfig.description}.</Balancer>
            </p>
            <Link href={`tel:${siteConfig.links.tel}`} target="_blank">
              <Button className="text-base">Get A Quote</Button>
            </Link>
          </div>
          <div className="flex flex-col gap-2 text-foreground">
            <h2 className="mb-2">Links</h2>
            <Link
              className="text-lg font-medium underline underline-offset-2"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-lg font-medium underline underline-offset-2"
              href="#services"
            >
              Services
            </Link>
            <Link
              className="text-lg font-medium underline underline-offset-2"
              href="/about"
            >
              About
            </Link>
            <Link
              className="text-lg font-medium underline underline-offset-2"
              href="/gallery"
            >
              Gallery
            </Link>
            <Link
              className="text-lg font-medium underline underline-offset-2"
              href="#faq"
            >
              Gallery
            </Link>
          </div>
          <div className="flex flex-col gap-2 text-foreground">
            <h5 className="mb-2">Business Hours</h5>
            <h4 className="font-bold">Summer</h4>
            <span className="font-medium">M-TH: 5:30am-10am & 5pm-8pm</span>
            <span className="font-medium">F: 8am - 2pm</span>
            <span className="font-medium">SAT&SUN: 2pm - 8pm</span>
            <h4 className="font-bold">Winter</h4>
            <span className="font-medium">M-F: 8am-6pm</span>

            <span className="font-medium">SAT: 2pm - 6pm</span>
          </div>
          <div className="flex flex-col gap-2 text-foreground">
            <h5 className="text-lg font-bold">Service Areas</h5>
            <p>Anywhere within Antelope Valley, CA.</p>
            {/* <ul className="space-y-2 ">
              <li>- Antelope Valley (Lancaster, Palmdale, etc.)</li>
              <li>- LA (Inglewood, Torrence, Longbeach)</li>
              <li>- Hollywood (Santa Monica, UCLA, Beverly Hills)</li>
              <li>- San Fernando Valley (Northridge, Burbank, Glendale)</li>
              <li>- Santa Clarita (Valencia, New Hall, Saugus)</li>
            </ul> */}
          </div>
        </div>
        <div className="not-prose flex flex-col justify-between gap-6 border-t border-t-foreground pt-5 md:flex-row md:items-center md:gap-2">
          <div className="flex gap-2">
            <Link
              target="_blank"
              href={"https://www.instagram.com/dougstractorworks/"}
            >
              <Button size="icon">
                <Instagram className="" />
              </Button>
            </Link>

            <Link
              target="_blank"
              href={"https://www.facebook.com/profile.php?id=61563286797653"}
            >
              <Button size="icon">
                <Facebook className="" />
              </Button>
            </Link>
          </div>
          <p className="text-foreground">
            © dougstractorworks . All rights reserved. 2024-present.
          </p>
        </div>
      </div>
    </footer>
  )
}
