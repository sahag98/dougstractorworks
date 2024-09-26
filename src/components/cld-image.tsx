export default function CloudImage({ videos }: { videos: any[] }) {
  const MAX_COLUMNS = 3

  function getColumns(colIndex: number) {
    return videos.filter(
      (video: any, idx: number) => idx % MAX_COLUMNS === colIndex
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-4">
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
        (column, idx) => (
          <div key={idx} className="flex flex-col gap-4 lg:gap-4">
            {column.map((video: any, index: React.Key | null | undefined) => (
              <div key={index} className="overflow-hidden rounded-md shadow-md">
                <video
                  preload="auto"
                  playsInline={true}
                  controls
                  className="h-auto w-full rounded-md"
                >
                  <source src={`${video.url}#t=0.001`} type="video/mp4" />
                  Sorry, your browser doesn&apos;t support embedded videos.
                </video>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  )
}
