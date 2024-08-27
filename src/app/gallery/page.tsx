import React, { Suspense } from "react"
import { beforeAfterImages } from "@/data/beforeAfterImages"
import { galleryVideos } from "@/data/gallery-videos"
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

const GalleryPage = async () => {
  return (
    <div className="mt-36 flex h-full min-h-screen w-full flex-col items-center gap-2 px-4 md:px-24 lg:px-40 ">
      <h1 className="text-center text-5xl font-bold text-primary">
        Our Best Work
      </h1>
      <p className="text-lg">
        Click on the video or image tab to see our best work.
      </p>
      <Tabs defaultValue="Images" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger className="w-1/2 text-lg" value="Images">
            Images
          </TabsTrigger>
          <TabsTrigger className="w-1/2 text-lg" value="Videos">
            Videos
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Images">
          {" "}
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
                      <p className="text-center text-lg font-semibold">
                        Before
                      </p>
                      <DialogImage
                        src={beforeAfter.beforeImg}
                        alt="yard clean up before"
                        className="md:1/2 w-full rounded-md"
                      />
                    </DialogTrigger>
                    <DialogContainer>
                      <DialogContent className="relative">
                        <DialogImage
                          src={beforeAfter.beforeImg}
                          alt="yard clean up before"
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
                      <DialogImage
                        src={beforeAfter.afterImg}
                        alt="clean up after"
                        className="md:1/2 w-full  rounded-md"
                      />
                    </DialogTrigger>
                    <DialogContainer>
                      <DialogContent className="relative">
                        <DialogImage
                          src={beforeAfter.afterImg}
                          alt="clean up after"
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
        </TabsContent>
        <TabsContent value="Videos">
          <CloudImage images={galleryVideos} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default GalleryPage
