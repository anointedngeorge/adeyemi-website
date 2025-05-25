import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { SERVICES } from "./configs";

const services = SERVICES;


export default function Services({show_heading=true, start=0, end=6}) {
  return (
    <section id="services" className="py-20 bg-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {show_heading && (<div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500">Our Services</h2>
          <div className="w-16 h-1 bg-blue-900 mx-auto mt-4 mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-dark">
            {`We offer a comprehensive range of services designed to help your business thrive in today's competitive
            landscape.`}
          </p>
        </div>)}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.slice(start,end).map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-48 overflow-hidden">
                <Image
                  width={100}
                  height={100}
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-blue-500 text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-dark/80 text-base text-center">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
