import React from "react"
import { servicesData } from "@/data/data-services"

import SectionHeader from "./section-header"

const Services = () => {
  return (
    <div
      id="services"
      className="flex w-full flex-col items-center justify-center gap-2 px-4 pb-24 pt-20 lg:px-40"
    >
      <SectionHeader title="Our Services" />
      <p>
        Have a look at this list of services we offer and call us for more
        information.
      </p>
      <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {servicesData.map((service) => (
          <div
            className="flex w-full flex-col justify-between gap-2 rounded-md border  p-5 md:w-fit"
            key={service.title}
          >
            <h4 className="text-xl font-semibold">{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
