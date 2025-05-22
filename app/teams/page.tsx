import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Team from "@/components/team"



export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Our Teams</h1>
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
      <Team show_heading={false} end={100000} />

     
    </main>
  )
}
