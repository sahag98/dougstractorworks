import { ListObjectsV2Command, S3Client } from "@aws-sdk/client-s3"

const s3Client = new S3Client({
  region: "auto",
  endpoint: process.env.CLOUDFLARE_R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID!,
    secretAccessKey: process.env.CLOUDFLARE_SECRET_ACCESS_KEY!,
  },
})

export async function getVideos() {
  try {
    const command = new ListObjectsV2Command({
      Bucket: process.env.CLOUDFLARE_BUCKET_NAME,
    })

    const response = await s3Client.send(command)

    const videos =
      response.Contents?.map((object) => ({
        key: object.Key,
        url: `${process.env.CLOUDFLARE_R2_PUBLIC_URL}/${object.Key}`,

        lastModified: object.LastModified,
        size: object.Size,
      })) || []

    return videos
  } catch (error) {
    console.error("Error fetching videos from R2:", error)
    return []
  }
}
