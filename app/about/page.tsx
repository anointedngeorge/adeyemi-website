import Link from "next/link"
// import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  BookOpen,
  Building,
  Calculator,
  CheckCircle,
  Users,
  Briefcase,
  LineChart,
} from "lucide-react"
import Team from "@/components/team"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">About Our Company</h1>
              <p className="text-lg text-dark/80 mb-8">
                {`With over 40 years of experience, we've been helping businesses transform and thrive through our
                comprehensive range of professional services.`}
              </p>
              <Link href="/" className="inline-flex items-center text-secondary hover:text-secondary/80">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </div>
            <div className="hidden lg:block">
              <Image
                src="./img/n2.jpg"
                alt="Our team at work"
                className="rounded-lg shadow-lg"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">Our Expertise</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-dark/80">
              {`We provide a comprehensive range of professional services designed to help your business succeed in
              today's competitive landscape.`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BookOpen className="h-10 w-10 text-secondary" />,
                title: "Training",
                description: "Professional development programs for your team",
              },
              {
                icon: <Briefcase className="h-10 w-10 text-secondary" />,
                title: "Management Consultancy",
                description: "Strategic guidance for organizational excellence",
              },
              {
                icon: <Calculator className="h-10 w-10 text-secondary" />,
                title: "Taxation Services",
                description: "Proactive tax planning and compliance",
              },
              {
                icon: <Building className="h-10 w-10 text-secondary" />,
                title: "Bank Transaction Verification",
                description: "Ensuring accurate banking charges and fees",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="bg-primary/20 p-4 rounded-full inline-block mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-dark mb-2">{service.title}</h3>
                  <p className="text-dark/70">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Services */}
      <section className="py-20 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-primary/30 p-3 rounded-full mr-4">
                  <BookOpen className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold text-dark">Training Services</h2>
              </div>
              <p className="text-dark/80 mb-6">
                {`One of the benefits of the formal training programme which we provide for our staff and which is
                organized by our own internal training department assisted by specialist partners and managers, is that
                we are able to offer places on our courses, as appropriate, for the staff of our clients.`}
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark/80">Customized training programs for various industries</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark/80">Expert trainers with practical industry experience</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark/80">Comprehensive learning materials and resources</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark/80">Ongoing support and follow-up assessments</span>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Training session"
                className="rounded-lg shadow-lg"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Management Consultancy Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Management consulting"
                className="rounded-lg shadow-lg"
                width={600}
                height={400}
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="bg-primary/30 p-3 rounded-full mr-4">
                  <Briefcase className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold text-dark">Management Consultancy Services</h2>
              </div>
              <p className="text-dark/80 mb-6">
                {`Our associate wholly owned Management Consultancy Company SENI NOMINEES, has developed highly respected
                management consultancy services in Nigeria, services currently being provided cover the following
                fields:`}
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark/80">Management and Financial Consultancy</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark/80">
                    Human Resources Consultants (Training, Executive Selection, etc.)
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark/80">Insurance</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark/80">Organization and Planning</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark/80">Bride Financing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Taxation Services */}
      <section className="py-20 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-primary/30 p-3 rounded-full mr-4">
                  <Calculator className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold text-dark">Taxation Services</h2>
              </div>
              <p className="text-dark/80 mb-6">
                {`Our firm gets involve right from the word go in the Tax Planning of all our clients unlike the
                traditional approach that call in the tax expert for consult after the production of the Profit and Loss
                Accounts and Balance Sheet. Our tax experts will give our wide range of clients a unique approach in Tax
                Planning.`}
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark/80">Proactive tax planning and strategy development</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark/80">Tax compliance and reporting</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark/80">Tax dispute resolution and representation</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark/80">International tax planning and compliance</span>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Tax planning"
                className="rounded-lg shadow-lg"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bank Transactions Verification Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Bank transaction verification"
                className="rounded-lg shadow-lg"
                width={600}
                height={400}
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="bg-primary/30 p-3 rounded-full mr-4">
                  <Building className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold text-dark">Bank Transactions Verification Services</h2>
              </div>
              <p className="text-dark/80 mb-6">
                {`Our experience has shown over the years that, the commercial banks over-charge commission on turnover
                (COT) and other charges on organizations' accounts against the approved Bankers' Tariff or the
                negotiated and agreed tariff.`}
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark/80">Comprehensive bank statement analysis</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark/80">Identification of overcharges and unauthorized fees</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark/80">Recovery of excess charges from financial institutions</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-dark/80">Ongoing monitoring and verification services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-white/80">
              {`Our practice is anchored on the highest ethical and professional standards designed to consistently add
              value to our clients' businesses.`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CheckCircle className="h-10 w-10 text-secondary" />,
                title: "Integrity",
                description: "We uphold the highest ethical standards in all our dealings.",
              },
              {
                icon: <Users className="h-10 w-10 text-secondary" />,
                title: "Professionalism",
                description: "We deliver our services with expertise and dedication.",
              },
              {
                icon: <LineChart className="h-10 w-10 text-secondary" />,
                title: "Excellence",
                description: "We strive for excellence in everything we do.",
              },
              {
                icon: <Briefcase className="h-10 w-10 text-secondary" />,
                title: "Client Focus",
                description: "We prioritize our clients' needs and exceed expectations.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 p-4 rounded-full inline-block mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-white/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <Team />
    </main>
  )
}
