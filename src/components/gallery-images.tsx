"use client"

import React from "react"
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
  return (
    <div className="grid grid-cols-1 gap-5 py-3 sm:grid-cols-2 lg:grid-cols-2">
      {beforeAfterImages.map((beforeAfter) => (
        <div key={beforeAfter.id} className="flex flex-col gap-2">
          <div className="flex flex-col items-center gap-12 rounded-md bg-primary/25 p-3 md:flex-row md:gap-4">
            <Dialog
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <DialogTrigger className="items-cente flex flex-col justify-between gap-3">
                <p className="text-center text-lg font-semibold">Before</p>
                <IKImage
                  urlEndpoint={urlEndpoint}
                  path={beforeAfter.beforeImg}
                  width={600}
                  height={600}
                  lqip={{ active: true, quality: 20 }}
                  loading="lazy"
                  alt="alt image"
                  className="md:1/2 w-full rounded-md"
                />
                {/* <DialogImage
                        src={beforeAfter.beforeImg}
                        alt="yard clean up before"
                        className="md:1/2 w-full rounded-md"
                      /> */}
              </DialogTrigger>
              <DialogContainer>
                <DialogContent className="relative">
                  <IKImage
                    urlEndpoint={urlEndpoint}
                    path={beforeAfter.beforeImg}
                    width={600}
                    height={600}
                    lqip={{ active: true, quality: 20 }}
                    loading="lazy"
                    alt="alt image"
                    className="h-auto w-full max-w-[90vw] rounded-[4px] object-cover lg:h-[90vh]"
                  />
                </DialogContent>
                <DialogClose
                  className="fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-1"
                  variants={{
                    initial: { opacity: 0 },
                    animate: {
                      opacity: 1,
                      transition: { delay: 0.3, duration: 0.1 },
                    },
                    exit: { opacity: 0, transition: { duration: 0 } },
                  }}
                >
                  <XIcon className="h-5 w-5 text-zinc-500" />
                </DialogClose>
              </DialogContainer>
            </Dialog>
            <Dialog
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <DialogTrigger className="flex flex-col items-center justify-between gap-3">
                <p className="text-center text-lg font-semibold">After</p>
                <IKImage
                  urlEndpoint={urlEndpoint}
                  path={beforeAfter.afterImg}
                  width={600}
                  height={600}
                  lqip={{ active: true, quality: 20 }}
                  loading="lazy"
                  alt="alt image"
                  className="md:1/2 w-full rounded-md"
                />
              </DialogTrigger>
              <DialogContainer>
                <DialogContent className="relative">
                  <IKImage
                    urlEndpoint={urlEndpoint}
                    path={beforeAfter.afterImg}
                    width={600}
                    height={600}
                    lqip={{ active: true, quality: 20 }}
                    loading="lazy"
                    alt="alt image"
                    className="h-auto w-full rounded-[4px] object-cover lg:h-[90vh]"
                  />
                </DialogContent>
                <DialogClose
                  className="fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-1"
                  variants={{
                    initial: { opacity: 0 },
                    animate: {
                      opacity: 1,
                      transition: { delay: 0.3, duration: 0.1 },
                    },
                    exit: { opacity: 0, transition: { duration: 0 } },
                  }}
                >
                  <XIcon className="h-5 w-5 text-zinc-500" />
                </DialogClose>
              </DialogContainer>
            </Dialog>
          </div>
        </div>
      ))}
    </div>
  )
}

export default GalleryImages
