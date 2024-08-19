"use client"

import React, { useState } from "react"
import Image from "next/image"
import { aboutImages } from "@/data/aboutImages"
import Autoplay from "embla-carousel-autoplay"
import { Circle } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import { Button } from "./ui/button"

const AboutImages = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  )

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  return (
    <Carousel
      setApi={setApi}
      plugins={[plugin.current]}
      className="w-full lg:w-1/2"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="">
        {aboutImages.map((images, index) => (
          <CarouselItem
            className="relative flex items-center justify-center"
            key={images.id}
          >
            <Image
              alt="image"
              loading="eager"
              className="w-full rounded-md object-cover"
              src={images.url}
              width={1000}
              height={1000}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default AboutImages
