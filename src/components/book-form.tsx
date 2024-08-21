//@ts-nocheck
"use client"

import React, { LegacyRef, useRef, useState } from "react"
import { InlineWidget } from "react-calendly"

const BookForm = () => {
  const dateRef = useRef<LegacyRef<InlineWidget> | undefined>()

  return (
    <InlineWidget
      ref={dateRef}
      pageSettings={{
        primaryColor: "#3BAC5D",

        hideGdprBanner: true,
        hideLandingPageDetails: true,
      }}
      url="https://calendly.com/dpistone10"
    />
  )
}

export default BookForm
