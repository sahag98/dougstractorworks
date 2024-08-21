// app/api/getVideos/route.js
import cloudinary from "@/lib/cloudinary"

export async function GET() {
  try {
    const result = await cloudinary.search
      .expression("folder:dougstractorworks/* AND resource_type:video")
      .sort_by("public_id", "desc")
      .max_results(30)
      .execute()

    return new Response(JSON.stringify(result.resources), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch videos" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
