import React from "react"
import Link from "next/link"
import {
  CheckCheckIcon,
  ClipboardIcon,
  HandshakeIcon,
  LeafIcon,
  ThumbsUpIcon,
  WrenchIcon,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { buttonVariants } from "./ui/button"

const AboutCta = () => {
  return (
    <section className="flex w-full justify-center px-4 pb-16 md:px-0 md:pb-24 lg:pb-32">
      <div className="container rounded-md bg-primary/25 p-4 md:p-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-5">
            <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
              Ready to Transform Your Land?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let us help you with our tractor services to achieve the perfect
              outdoor space for you! Contact us today for a free quote.
            </p>
            <Link
              href={`/`}
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "text-base font-bold text-white"
              )}
            >
              Get A Quote
            </Link>
          </div>
        </div>
        {/* <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center justify-center space-y-4">
            <ClipboardIcon className="h-12 w-12 text-primary" />
            <div className="space-y-1 text-center">
              <h3 className="text-xl font-bold">Consultation</h3>
              <p className="text-muted-foreground">
                We start by understanding your vision and needs, collaborating
                closely to create a customized plan.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <WrenchIcon className="h-12 w-12 text-primary" />
            <div className="space-y-1 text-center">
              <h3 className="text-xl font-bold">Implementation</h3>
              <p className="text-muted-foreground">
                Our experienced team executes the plan with precision, using
                high-quality materials and techniques.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <CheckCheckIcon className="h-12 w-12 text-primary" />
            <div className="space-y-1 text-center">
              <h3 className="text-xl font-bold">Maintenance</h3>
              <p className="text-muted-foreground">
                We provide ongoing maintenance and support to ensure your
                outdoor spaces remain beautiful and functional.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default AboutCta
