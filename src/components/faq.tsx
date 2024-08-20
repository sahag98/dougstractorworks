import React from "react"
import Image from "next/image"
import { XIcon } from "lucide-react"

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
      question: "How much do you charge?",
      answer:
        "We must first set an appointment to see the work you would like done. We do not give quotes over the phone. We will inspect the work you need done, the size of your property, entry requirements, and a few other items we must inspect first.",
    },
    {
      id: 2,
      question: "How much do you charge for your home or property inspection?",
      answer:
        "his is a free service if you are within 18 miles of the Lancaster area. If you live further than that we have a minimum charge plus a mileage charge.",
    },
    {
      id: 3,
      question:
        "How do we get started to contract Doug’s Tractor Works to finish my work?",
      answer:
        "I will give you a contract with all the services that we will perform with the price included. If you are in agreement you sign our contract and we will place you on our online scheduling system.",
    },
    {
      id: 4,
      question: "How do we pay for your services?",
      answer:
        " We require 50% up front the day we start your work. No work will be started without the 50% up front payment. The balance will be paid when we complete your work. We take as payment Cash, Zelle, or Venmo.",
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
          {faqArray.map((faq) => (
            <AccordionItem key={faq.id} value={faq.question}>
              <AccordionTrigger className="text-left text-lg md:text-xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
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
