import React, { Suspense } from "react"
import { galleryVideos } from "@/data/gallery-videos"
import { list } from "@vercel/blob"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CloudImage from "@/components/cld-image"
import GalleryImages from "@/components/gallery-images"

const urlEndpoint = process.env.IMAGE_KIT_URL_ENDPOINT!

const GalleryPage = async () => {
  const { blobs } = await list()

  return (
    <div className="mt-36 flex h-full min-h-screen w-full flex-col items-center gap-2 px-4 md:px-24 lg:px-40 ">
      <h1 className="text-center text-5xl font-bold text-primary">
        Our Best Work
      </h1>
      <p className="text-base md:text-lg">
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
          <GalleryImages urlEndpoint={urlEndpoint} />
        </TabsContent>
        <TabsContent value="Videos">
          <Suspense fallback={<p>Loading video...</p>}>
            <CloudImage images={blobs} />
          </Suspense>
          {/* <div className="grid lg:grid-cols-3">
            <Suspense fallback={<p>Loading video...</p>}>
              <VideoComponent fileName="doug-1" />
            </Suspense>
            <Suspense fallback={<p>Loading video...</p>}>
              <VideoComponent fileName="doug-2" />
            </Suspense>
            <Suspense fallback={<p>Loading video...</p>}>
              <VideoComponent fileName="doug-3" />
            </Suspense>
            <Suspense fallback={<p>Loading video...</p>}>
              <VideoComponent fileName="doug-4" />
            </Suspense>
          </div> */}
          {/* <Suspense fallback={<p>Loading video...</p>}>
            <CloudImage images={galleryVideos} />
          </Suspense> */}
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default GalleryPage
