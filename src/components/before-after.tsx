"use client"

import React, { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"

type beforeAfterImage = {
  beforeImage: string
  afterImage: string
}

const BeforeAfterImage = ({ beforeImage, afterImage }: beforeAfterImage) => {
  const afterImageRef = useRef(null)

  useEffect(() => {
    gsap.to(afterImageRef.current, { opacity: 1, duration: 1, delay: 3 })
  }, [])

  return (
    <div className="relative h-full w-full">
      <section className="h-full w-full object-cover">
        <Image
          src={beforeImage}
          alt="Before"
          className="rounded-lg"
          width={1000}
          height={1000}
        />
      </section>
      <section
        ref={afterImageRef}
        className="absolute inset-0 h-full w-full object-cover opacity-0"
      >
        <Image
          src={afterImage}
          alt="After"
          className="rounded-lg"
          width={1000}
          height={1000}
        />
      </section>
    </div>
  )
}

export default BeforeAfterImage
