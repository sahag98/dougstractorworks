import { Circle } from "lucide-react"

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Circle className="h-10 w-10 animate-spin" />
    </div>
  )
}
