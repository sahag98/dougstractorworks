"use client"

import { Suspense, useEffect, useRef, useState } from "react"
import Video from "next-video"

export default function CloudImage({ images }: { images: any[] }) {
  const [columns, setColumns] = useState<any[][]>([[], [], []])

  useEffect(() => {
    const distributeImages = () => {
      const isMobile = window.innerWidth < 640 // Tailwind's sm breakpoint
      const columnCount = isMobile ? 1 : 3
      const newColumns: any[][] = Array.from({ length: columnCount }, () => [])
      let columnHeights = Array(columnCount).fill(0)

      images.forEach((image) => {
        const shortestColumnIndex = columnHeights.indexOf(
          Math.min(...columnHeights)
        )
        newColumns[shortestColumnIndex].push(image)
        columnHeights[shortestColumnIndex] += image.height || 200 // Use actual height if available, or estimate
      })

      setColumns(newColumns)
    }

    distributeImages()
    window.addEventListener("resize", distributeImages)

    return () => {
      window.removeEventListener("resize", distributeImages)
    }
  }, [images])

  return (
    <div className="mt-5 flex flex-col gap-4 sm:flex-row">
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="flex-1">
          {column.map((image, imageIndex) => (
            <div key={imageIndex} className="mb-4 rounded-md">
              <Video
                src={image.url}
                preload="metadata"
                playsInline
                // poster={image.url}
                controls
                className="h-auto w-full rounded-md"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
