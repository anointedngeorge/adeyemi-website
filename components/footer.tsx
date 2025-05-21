import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold">
            {/* AdeyemiApanpaandcompany */}
            <Image
                    width={100}
                    height={100} src="./img/logo.jpeg" className="w-52 h-14 rounded-xl" alt="logo image" />
            </Link>
            <p className="mt-4 text-white/70">
              Empowering businesses through innovative solutions and strategic partnerships.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white/50 hover:text-secondary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white/50 hover:text-secondary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white/50 hover:text-secondary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white/50 hover:text-secondary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-white/70 hover:text-secondary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/70 hover:text-secondary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-white/70 hover:text-secondary">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-white/70 hover:text-secondary">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/70 hover:text-secondary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/70 hover:text-secondary">
                  Strategic Consulting
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-secondary">
                  Digital Transformation
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-secondary">
                  Market Analysis
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-secondary">
                  Business Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-secondary">
                  Global Expansion
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-white/70">
              123 Business Avenue
              <br />
              Suite 500
              <br />
              New York, NY 10001
            </address>
            <p className="mt-4 text-white/70">
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p className="text-white/70">
              <strong>Email:</strong> info@corpvision.com
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/70">
          <p>© {new Date().getFullYear()} CorpVision. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
