import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const services = [
  {
    title: "External Auditing/Investigation",
    description:
      "We conduct independent assessments of financial statements to ensure they present a true and fair view, helping entities meet their statutory responsibilities and build stakeholder confidence.",
    image: "./img/s1.jpg",
  },
  {
    title: "Internal Auditing",
    description:
      "We design and implement comprehensive accounting systems—covering cash books, ledgers, and trial balances—to enhance internal controls and support accurate financial reporting.",
    image: "./img/s2.jpg",
  },
  {
    title: "Forensic Audit",
    description:
      "We offer investigative accounting services aimed at uncovering fraud, financial discrepancies, or misconduct, supporting both legal processes and internal reviews.",
    image: "./img/s3.jpg",
  },
  {
    title: "Computer Audit",
    description:
      "Our audit solutions assess IT systems to ensure their integrity, security, and alignment with accounting practices—crucial for effective decision-making and operational reliability.",
    image: "./img/s4.jpg",
  },
  {
    title: "Accountancy",
    description:
      "We provide full-spectrum accountancy services including financial recordkeeping, payroll, and personnel management, tailored to streamline client operations.",
    image: "./img/s5.jpg",
  },
  {
    title: "Reporting Accountants",
    description:
      "We deliver tailored assurance services and specialized reports for clients involved in public offerings, acquisitions, or financial restructuring, ensuring compliance and stakeholder clarity.",
    image: "./img/s2.jpg",
  },
  {
    title: "Taxation",
    description:
      "We offer expert tax advisory and compliance services, including the preparation of tax computations in accordance with local tax regulations, helping clients manage their obligations effectively.",
    image: "./img/s6.jpg",
  },
  {
    title: "Financial Training",
    description:
      "Our training programs are designed to enhance the financial literacy and operational skills of individuals and corporate teams, with a focus on real-world applications and regulatory compliance.",
    image: "./img/s1.jpg",
  },
  {
    title: "Management & Financial Consultancy",
    description:
      "We provide strategic advice on business planning, financial structuring, and performance optimization to help organizations achieve long-term sustainability and growth.",
    image: "./img/s6.jpg",
  },
  {
    title: "Excess Bank Charges",
    description:
      "We analyze banking transactions to identify and recover excess charges, helping clients minimize unnecessary costs and improve cash flow management.",
    image: "./img/s5.jpg",
  },
  {
    title: "Overnight Credit Balance",
    description:
      "We review overnight credit arrangements to ensure proper reconciliation, minimize risk, and maintain efficient use of credit facilities.",
    image: "./img/s2.jpg",
  },
];


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
