import React from "react"
import {
  CheckCheckIcon,
  ClipboardIcon,
  HandshakeIcon,
  LeafIcon,
  ThumbsUpIcon,
  WrenchIcon,
} from "lucide-react"

const Process = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
              Our Process
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At Doug&apos;s Tractor Works, we follow a structured, efficient
              process to ensure your outdoor spaces are transformed with
              precision and care.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
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
        </div>
      </div>
    </section>
  )
}

export default Process
