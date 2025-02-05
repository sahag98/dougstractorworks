import React from "react"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import BookForm from "@/components/book-form"

export const metadata: Metadata = {
  title: "Book with Us | Doug's Tractor Works",
  description:
    "We specialize in providing comprehensive tractor services to meet all your agricultural and land management needs.",
}

const BookingPage = () => {
  return (
    <div className="mt-36 min-h-screen w-full space-y-10  px-4 py-5 md:px-10 lg:px-40">
      <h1 className="text-center text-3xl font-bold">Book Now</h1>
      <p className="text-center text-lg font-semibold">
        Click on the consultation box to schedule an appointment today!
      </p>
      <BookForm />
    </div>
  )
}

export default BookingPage
