import fs from "fs/promises"
import path from "path"
import { NextRequest, NextResponse } from "next/server"
import sharp from "sharp"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  console.log("searchParams:", searchParams)
  const src = searchParams.get("src")

  console.log("src:", src)

  const imagePath = path.join(process.cwd(), "public", src!)

  const originalImage = await fs.readFile(imagePath)

  const resizedImageBuffer = await sharp(originalImage)
    .png({ quality: 85 })
    .resize(500)
    .toBuffer()

  return new Response(resizedImageBuffer)
}
