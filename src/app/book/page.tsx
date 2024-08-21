import React from "react"

import BookForm from "@/components/book-form"

const BookingPage = () => {
  return (
    <div className="mt-36 min-h-screen w-full space-y-10  px-4 py-5 md:px-10 lg:px-40">
      <h1 className="text-center text-3xl font-bold">Book Now</h1>
      <p className="text-center text-lg">
        Click on the consultation box to schedule an appointment.
      </p>
      <BookForm />
    </div>
  )
}

export default BookingPage
