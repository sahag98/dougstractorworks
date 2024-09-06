import fs from "fs/promises"
import path from "path"
import { NextRequest, NextResponse } from "next/server"
import sharp from "sharp"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  const imageName = searchParams.get("image")
  //   console.log("name:", imageName)
  if (!imageName) {
    return NextResponse.json(
      { error: "Image name is required" },
      { status: 400 }
    )
  }

  const imagePath = path.join(process.cwd(), "public", imageName)

  //   console.log("path:", imagePath)

  try {
    const imageBuffer = await fs.readFile(imagePath)
    const blurredImage = await sharp(imageBuffer)
      .resize(20) // Small size for blur effect
      .blur(5)
      .toBuffer()

    return new NextResponse(blurredImage, {
      headers: {
        "Content-Type": "image/webp",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    })
  } catch (error) {
    console.error("Error processing image:", error)
    return NextResponse.json(
      { error: "Error processing image" },
      { status: 500 }
    )
  }
}
