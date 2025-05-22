import Hero from "@/components/hero"
import About from "@/components/about"
import Reputation from "@/components/reputation"
import Services from "@/components/services"
import Consultation from "@/components/consultation"
import Team from "@/components/team"
import Testimonials from "@/components/testimonials"
import BlogSection from "@/components/blog-section"
import OfficeLocations from "@/components/office-location"
// import Contact from "@/components/contact"
import Trustee from "@/components/trustees"
import OurClients from "@/components/our-clients"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <About />
        <Reputation />
        <Services />
        <Consultation />
        <Team />
        <OurClients />
        <Testimonials />
        <OfficeLocations />
        <Trustee />
      </main>
    </div>
  )
}
