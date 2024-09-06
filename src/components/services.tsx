"use client"

import React, { useState } from "react"
import Image from "next/image"
import { servicesData } from "@/data/data-services"

import AnimatedBackground from "./animated-services"
import SectionHeader from "./section-header"

const Services = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  const loader = ({
    width,
    quality,
    src,
  }: {
    width: number
    quality?: number
    src: string
  }) => {
    const props = [`w=${width}`]
    if (quality) props.push(`q=${quality}`)
    const queryStr = props.join("&")
    return `/api/normal-image?src=${src}&${queryStr}`
  }
  return (
    <div
      id="services"
      className="flex w-full flex-col items-center justify-center gap-2 px-4 pb-24 pt-20 lg:px-40"
    >
      <SectionHeader title="Our Services" />
      <p>
        Have a look at this list of services we offer and call us for more
        information.
      </p>
      <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <AnimatedBackground
          className="rounded-lg bg-zinc-100 dark:bg-zinc-800"
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.6,
          }}
          enableHover
        >
          {servicesData.map((service) => (
            <div
              className="flex flex-col justify-between gap-2 rounded-md border p-3 md:w-fit"
              key={service.title}
              data-id={`card-${service.title}`}
            >
              {/* <div className="mb-2 h-[300px] w-full rounded-md md:h-[200px]">
                <Image
                  loader={({ src }) => `/api/blur-image?image=${src}`}
                  src={service.image}
                  alt={service.title}
                  sizes="10px"
                  fill
                  className="h-full w-full object-cover"
                  priority
                />
                <Image
                  alt="something"
                  fill
                  priority
                  src={service.image}
                  className={`h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${isLoaded ? "opacity-0" : "opacity-100"}`}
                  loader={loader}
                  onLoadingComplete={() => setIsLoaded(false)}
                />
              </div> */}
              <Image
                className="mb-2 h-[300px] w-full rounded-md  object-cover md:h-[200px]"
                width={300}
                height={300}
                src={service.image}
                alt={service.title}
              />
              <h4 className="text-xl font-semibold">{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </AnimatedBackground>
      </div>
    </div>
  )
}

export default Services
