"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function createMessage(formData: {
  name: string
  phone: string
  email: string
  service: string
  details: string
}) {
  try {
    const { name, email, phone, service, details } = formData

    const { error } = await resend.emails.send({
      from: `Website <quote@dougstractorworks.com>`,
      to: ["dpistone10@yahoo.com"],
      subject: "New Quote Request",

      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Service:</strong> ${service}</p>
             <p><strong>Details:</strong> ${details}</p>`,
    })

    if (error) {
      console.log("resend error: ", error)
      throw error
    }

    return { success: true }
  } catch (error) {
    console.error("Error creating message:", error)
    return { success: false, error }
  }
}
