import React from "react"
import { HandshakeIcon, LeafIcon, ThumbsUpIcon } from "lucide-react"

const Values = () => {
  return (
    <section className="w-full bg-primary/25 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
              Our Values
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At Doug&apos;s Tractor Works, we are committed to providing
              exceptional service, maintaining the highest standards of quality,
              and fostering a sustainable, eco-friendly approach to lawn and
              landscape care.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center justify-center space-y-4">
            <LeafIcon className="h-12 w-12 text-primary" />
            <div className="space-y-1 text-center">
              <h3 className="text-xl font-bold">Sustainability</h3>
              <p className="text-muted-foreground">
                We prioritize eco-friendly practices and use sustainable
                materials to minimize our environmental impact.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <ThumbsUpIcon className="h-12 w-12 text-primary" />
            <div className="space-y-1 text-center">
              <h3 className="text-xl font-bold">Quality Assurance</h3>
              <p className="text-muted-foreground">
                Our team of experts is dedicated to delivering exceptional
                results and ensuring your complete satisfaction.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <HandshakeIcon className="h-12 w-12 text-primary" />
            <div className="space-y-1 text-center">
              <h3 className="text-xl font-bold">Customer Service</h3>
              <p className="text-muted-foreground">
                We pride ourselves on our responsive, personalized approach to
                customer service, ensuring a seamless experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values
