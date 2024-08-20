import { testimonials } from "@/data/testimonials"
import { User } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="w-full  pb-12 md:pb-24 lg:pb-24">
      <div className="container grid items-start gap-10  px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear from the people who have experienced our services firsthand.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-lg border bg-background p-6 shadow-sm"
            >
              <div key={testimonial.id} className="flex items-start gap-4">
                <User className="h-12 w-12" />
                {/* <img
                  src="/placeholder.svg"
                  alt="Avatar"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full"
                  style={{ aspectRatio: "48/48", objectFit: "cover" }}
                /> */}
                <div className="space-y-2">
                  <div className="text-lg font-medium">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </div>
                </div>
              </div>
              <blockquote className="mt-6 text-lg leading-relaxed">
                {testimonial.content}
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
