import { CldImage } from "next-cloudinary"
import { Link } from "next-view-transitions"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import AboutImages from "@/components/about-images"
import CloudImage from "@/components/cld-image"
import FAQ from "@/components/faq"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center gap-4 px-4 text-center lg:h-screen">
        <h1 className="text-start text-5xl font-bold sm:text-5xl md:text-6xl lg:text-center lg:text-7xl">
          {siteConfig.name}
        </h1>
        <p className="max-w-[42rem] text-start leading-normal text-muted-foreground sm:text-xl sm:leading-8 lg:text-center">
          {siteConfig.description} in
          <span className="font-semibold"> Antelope Valley, CA.</span>
        </p>
        <div className="flex w-full flex-col items-center justify-center gap-3 lg:flex-row">
          <Link
            href={`tel:${siteConfig.links.tel}`}
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-11/12 animate-buttonheartbeat cursor-pointer text-base font-bold md:w-fit"
            )}
          >
            Get A Quote
          </Link>
          <Link
            href={"/gallery"}
            className={cn(
              buttonVariants({ size: "lg", variant: "secondary" }),
              "w-11/12 cursor-pointer text-sm font-bold md:w-fit lg:text-lg"
            )}
          >
            View our Best Work
          </Link>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-between gap-3 bg-primary/25 px-4 py-12 text-foreground md:py-24 lg:flex-row lg:px-40 lg:py-32">
        <section className="flex flex-col items-start gap-3">
          <h3 className="text-lg font-medium">About</h3>
          <h2 className="w-full text-2xl font-semibold lg:w-2/3 lg:text-5xl">
            Welcome to Doug&apos;s Tractor Works
          </h2>
          <p className="text-lg font-medium lg:text-xl">
            Your Affordable Go-To for All Things Tractor.
          </p>
          <p className="w-full lg:w-2/3">
            We specialize in providing comprehensive tractor services to meet
            all your agricultural and land management needs
          </p>
          <Link
            href={"/about"}
            className="mt-3 font-bold text-primary underline"
          >
            Learn More
          </Link>
        </section>
        <AboutImages />
      </div>
      <Services />
      <Testimonials />
      <FAQ />
    </main>
  )
}
