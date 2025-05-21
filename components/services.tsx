import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const services = [
  {
    title: "Statutory Audits",
    description:
      "Preparation and presentation of Financial Statements of registered entities are the responsibilities of such entities.",
      image: "./img/s1.jpg",
  },
  {
    title: "Accountancy Services",
    description: "Installation of accounting systems, incorporating cash books, petty cash books, general ledgers, extraction of Trial Balance and preparation of final accounts",
    image: "./img/s2.jpg",
  },
  {
    title: "Taxation Services",
    description: "IAdvisory services on the preparation of tax computations that satisfy the requirements of the Relevant Tax Authorities",
    image: "./img/s3.jpg",
  },
  {
    title: "Computerization Tools",
    description: "Efficient and effective management of business today is a function of the reliability of the internal control and accounting system in place in an organization.",
    image: "./img/s4.jpg",
  },
  {
    title: "Manpower Development And Training",
    description: "Personnel recruitment, Selection and Placement and job evaluation for our clients.",
    image: "./img/s5.jpg",
  },
  {
    title: "The Firm’s Approach to Assignments",
    description: "The Firm’s Approach to Assignments The Firm’s philosophy and approach is determined by the need to customize services to the needs of our clients",
    image: "./img/s6.jpg",
  },
  
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500">Our Services</h2>
          <div className="w-16 h-1 bg-blue-900 mx-auto mt-4 mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-dark">
            {`We offer a comprehensive range of services designed to help your business thrive in today's competitive
            landscape.`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
