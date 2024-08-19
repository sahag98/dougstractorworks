import React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import SectionHeader from "./section-header"

const FAQ = () => {
  const faqArray = [
    {
      id: 1,
      question: "What is Mobile Auto Detailing?",
      answer:
        "Mobile Detailing means you can experience quality auto detailing service for your car at home or work. I come to you, and need nothing but your car keys (if you selected any interior services). This method ensures quality and convenience for you and your car!",
    },
    {
      id: 2,
      question: "What is the Mobile Auto Detailing Process?",
      answer:
        "This is the process - first book your appointment online or call for a personalized service; updates with your appointment will be made accordingly, (including booking fee). The booking will go towards servicing your vehicle. I then go over to your location to greet you and look over your vehicle with you (if you’re available) to confirm what services you’ve requested along with recommendations of services needed for it. Then I pull out everything needed to service your car, including my own power and electricity; if requested, you can get 10% off of services for allowing me to connect to your water and electricity (when available). On average, my services may take anywhere between 1-5 hours (depending on the condition of the vehicle and the services you’ve requested for it). If any additional charges are made, they will be made upfront before I begin servicing your vehicle. Final payments will be made after the vehicle has been serviced along with satisfaction from you (the customer)!",
    },
    {
      id: 3,
      question: "What Areas do you Service?",
      answer:
        "My detailing services come to you if you reside within LA County and surrounding borders: Antelope Valley (Lancaster, Palmdale, etc.) LA (Inglewood, Torrence, Longbeach, Hollywood (Santa Monica, UCLA, Beverly Hills), San Fernando Valley (Northridge, Burbank, Glendale), Santa Clarita (Valencia, New Hall, Saugus)",
    },
    {
      id: 4,
      question: "Do you need Anything from me?",
      answer:
        "YES! These 3 things I need from you: Pictures (highly recommended) - this is to ensure what exactly you’re asking of me to do and make helpful recommendations of what you may actually need. This also ensures a better time estimate for me to service your car and quote upfront fee (if needed). Keys - I only need them if you’ve requested an interior service and/or requested an engine bay service. Power & Water (if requested and/or needed) - need these to perform essential services (wash, vacuuming, etc.)",
    },
    {
      id: 5,
      question: "What Forms of Payment do you take?",
      answer:
        "I primarily take online payment (through my website). I also take app payments (Zelle, Cash App, Venmo, PayPal, and Square). Lastly, I take cash or checks. I always ask for payment after a job is completed to ensure you are satisfied!",
    },
    {
      id: 6,
      question: "How long does it take?",
      answer:
        "Depending on the package you have selected, a job may range from an hour to 5 hours. When booking an auto detail, I will always give you an estimate for how long a job will be, and schedule you accordingly.",
    },
    {
      id: 7,
      question: "What is the booking fee and what is it for?",
      answer:
        "The booking fee is a fee combined of $10 & 25% down payment of your total service booking. This is to ensure confirmation of your appointment and will be used towards your service. After I’m done with servicing your vehicle, you pay the difference.",
    },
  ]
  return (
    <div
      id="faq"
      className="flex w-full flex-col items-center gap-2 bg-primary/25 px-4 py-12 text-foreground  md:px-10 md:py-24 lg:px-48 lg:py-32"
    >
      <SectionHeader title="Frequently Asked Questions" />
      <p className="text-lg">Here are some frequently asked questions.</p>
      <div className="mt-3 flex w-full items-center justify-between gap-10">
        <Accordion className="flex-1" type="single" collapsible>
          {/* {faqArray.map((faq) => (
            <AccordionItem key={faq.id} value={faq.question}>
              <AccordionTrigger className="text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))} */}
        </Accordion>
        <Image
          alt="faq image"
          src={"/tractorlog.jpg"}
          width={1999}
          height={1500}
          className="hidden w-1/2 rounded-lg lg:flex"
        />
      </div>
    </div>
  )
}

export default FAQ
