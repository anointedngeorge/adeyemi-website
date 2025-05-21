import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

const services = [
  {
    id: 1,
    title: "Strategic Consulting",
    description:
      "Expert guidance to help you navigate complex business challenges and identify opportunities for growth.",
    longDescription:
      "Our strategic consulting services provide comprehensive analysis and expert guidance to help your business navigate complex challenges and capitalize on growth opportunities. We work closely with your leadership team to develop tailored strategies that align with your business goals and market conditions.",
    features: [
      "Comprehensive business analysis",
      "Market opportunity assessment",
      "Competitive positioning strategy",
      "Growth roadmap development",
      "Implementation support and guidance",
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    title: "Digital Transformation",
    description: "Comprehensive solutions to modernize your operations and leverage the latest technologies.",
    longDescription:
      "Our digital transformation services help businesses modernize their operations by implementing cutting-edge technologies and optimizing processes. We guide you through every step of the digital journey, from strategy development to implementation and ongoing support.",
    features: [
      "Digital maturity assessment",
      "Technology stack evaluation and recommendations",
      "Process automation solutions",
      "Data analytics and insights",
      "Change management and training",
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    title: "Market Analysis",
    description: "In-depth research and insights to help you understand your market and stay ahead of the competition.",
    longDescription:
      "Our market analysis services provide deep insights into industry trends, customer behavior, and competitive landscapes. We use advanced research methodologies and data analytics to help you make informed decisions and identify untapped opportunities.",
    features: [
      "Industry trend analysis",
      "Customer segmentation and behavior studies",
      "Competitive landscape mapping",
      "Market opportunity identification",
      "Demand forecasting and planning",
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 4,
    title: "Business Development",
    description: "Strategies and tactics to expand your business and enter new markets with confidence.",
    longDescription:
      "Our business development services focus on creating sustainable growth through strategic partnerships, market expansion, and new product development. We help you identify and capitalize on opportunities that align with your core competencies and business objectives.",
    features: [
      "Partnership and alliance strategy",
      "Market entry planning",
      "Sales channel optimization",
      "Product portfolio expansion",
      "Revenue diversification strategies",
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 5,
    title: "Global Expansion",
    description: "Expert support for businesses looking to establish or strengthen their international presence.",
    longDescription:
      "Our global expansion services help businesses successfully enter and grow in international markets. We provide comprehensive support from market selection and entry strategy to operational setup and compliance management.",
    features: [
      "International market assessment",
      "Entry strategy development",
      "Regulatory and compliance guidance",
      "Local partnership facilitation",
      "Cross-cultural business practices advisory",
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 6,
    title: "Talent Management",
    description: "Innovative approaches to attract, develop, and retain top talent in your organization.",
    longDescription:
      "Our talent management services help organizations build high-performing teams through effective recruitment, development, and retention strategies. We focus on creating a positive workplace culture that drives engagement and productivity.",
    features: [
      "Talent acquisition strategy",
      "Leadership development programs",
      "Performance management systems",
      "Employee engagement initiatives",
      "Succession planning frameworks",
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 7,
    title: "Financial Advisory",
    description: "Expert financial guidance to optimize your company's financial health and drive sustainable growth.",
    longDescription:
      "Our financial advisory services provide strategic guidance on financial planning, risk management, and investment decisions. We help businesses optimize their financial performance and create sustainable value for stakeholders.",
    features: [
      "Financial strategy development",
      "Cash flow optimization",
      "Investment analysis and planning",
      "Risk assessment and management",
      "Financial restructuring",
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 8,
    title: "Operational Excellence",
    description: "Streamline your operations, reduce costs, and improve quality through proven methodologies.",
    longDescription:
      "Our operational excellence services focus on optimizing business processes to enhance efficiency, reduce costs, and improve quality. We apply proven methodologies like Lean and Six Sigma to eliminate waste and drive continuous improvement.",
    features: [
      "Process mapping and analysis",
      "Efficiency improvement initiatives",
      "Quality management systems",
      "Supply chain optimization",
      "Continuous improvement programs",
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Our Services</h1>
            <p className="max-w-3xl mx-auto text-lg text-dark/80">
             {` Comprehensive business solutions tailored to help your organization thrive in today's competitive
              landscape.`}
            </p>
            <Link href="/" className="inline-flex items-center mt-6 text-secondary hover:text-secondary/80">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                  <CardTitle className="text-xl text-dark">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-dark/80 text-base mb-4">{service.description}</CardDescription>
                  <Link href={`/services/${service.id}`}>
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="max-w-2xl mx-auto text-white/80 mb-8">
            Contact us today to discuss how our services can help you achieve your business goals.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
