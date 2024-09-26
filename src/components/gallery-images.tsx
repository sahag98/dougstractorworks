"use client"

import React from "react"
import Image from "next/image"
import { beforeAfterImages } from "@/data/beforeAfterImages"
import { galleryVideos } from "@/data/gallery-videos"
import { IKImage } from "imagekitio-next"
import { XIcon } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CloudImage from "@/components/cld-image"
import {
  Dialog,
  DialogClose,
  DialogContainer,
  DialogContent,
  DialogImage,
  DialogTrigger,
} from "@/components/image-dialog"

const GalleryImages = ({ urlEndpoint }: { urlEndpoint: string }) => {
  console.log("url endpoint: ", urlEndpoint)

  const imageKitLoader = ({
    src,
    width,
    quality,
  }: {
    src: string
    width: number
    quality?: number
  }) => {
    console.log("quality: ", quality)
    if (src[0] === "/") src = src.slice(1)
    const params = [`w-${width}`]
    if (quality) {
      params.push(`q-${quality}`)
    }
    const paramsString = params.join(",")
    if (urlEndpoint[urlEndpoint.length - 1] === "/")
      urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1)

    console.log(`${urlEndpoint}/${src}?tr=${paramsString}`)
    return `${urlEndpoint}/${src}?tr=${paramsString}`
  }

  return (
    <div className="grid grid-cols-1 gap-5 py-3 sm:grid-cols-2 lg:grid-cols-2">
      {beforeAfterImages.map((beforeAfter) => (
        <div key={beforeAfter.id} className="flex flex-col gap-2">
          <div className="flex flex-col items-center gap-12 rounded-md bg-primary/25 p-3 md:flex-row md:gap-4">
            <div className="flex flex-col items-center justify-between gap-3">
              <p className="text-center text-lg font-semibold">Before</p>
              <Image
                src={beforeAfter.beforeImg}
                width={600}
                height={600}
                loading="lazy"
                loader={imageKitLoader}
                quality={60}
                alt="alt image"
                className="w-full rounded-md"
              />
              {/* <DialogImage
                        src={beforeAfter.beforeImg}
                        alt="yard clean up before"
                        className="md:1/2 w-full rounded-md"
                      /> */}
            </div>

            <div className="flex flex-col items-center justify-between gap-3">
              <p className="text-center text-lg font-semibold">After</p>
              <Image
                src={beforeAfter.afterImg}
                width={600}
                height={600}
                loading="lazy"
                loader={imageKitLoader}
                quality={60}
                alt="alt image"
                className="w-full rounded-md"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default GalleryImages
