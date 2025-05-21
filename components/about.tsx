import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500">About Our Company</h2>
          <div className="w-16 h-1 bg-blue-900 mx-auto mt-4 mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-dark/80">
            {`With over 15 years of experience, we've been helping businesses transform and thrive in the digital age.`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              
              src="./img/aboutus.jpeg"
              alt="Our office space"
              className="rounded-lg shadow-lg"
              width={500}
              height={500}
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-dark mb-6">Our Mission</h3>
            <p className="text-dark/80 mb-6">
              {`We are dedicated to delivering innovative solutions that empower businesses to achieve their full
              potential. Our mission is to be a trusted partner in your journey to success.`}
            </p>

            <h3 className="text-2xl font-bold text-dark mb-6">Why Choose Us</h3>
            <ul className="space-y-4">
              {[
                "Expert team with diverse industry experience",
                "Tailored solutions to meet your specific needs",
                "Commitment to excellence and innovation",
                "Proven track record of successful partnerships",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0" />
                  <span className="text-dark/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
