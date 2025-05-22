import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Consultation() {
  return (
    <section className="relative py-20 w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('./img/n3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Stronger overlay for better text readability */}
        <div className="absolute inset-0 bg-gray-950/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto bg-dark/50 backdrop-blur-sm p-8 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-md">
            Still Confused About Our Features? Get A Consultation
          </h2>
          <p className="text-lg text-white mb-8 drop-shadow-md">
            We are open to help you solve that financial accounting issues. A consultation will just be fine to handle
            all cases.
          </p>
          <Link href="#contact">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
