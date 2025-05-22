import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Clock, ArrowLeft } from "lucide-react"
import OfficeLocations from "@/components/office-location"
import {CONTACT_SETUP} from "@/components/configs"


export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Contact Us</h1>
            <p className="max-w-3xl mx-auto text-lg text-dark/80">
              Have questions or ready to start your next project? Get in touch with our team.
            </p>
            <Link href="/" className="inline-flex items-center mt-6 text-secondary hover:text-secondary/80">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-lg h-full">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-dark mb-6">Contact Information</h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-secondary mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-dark">Address</h3>
                        <p className="text-dark/70 mt-1">
                          {CONTACT_SETUP.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-secondary mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-dark">Phone</h3>
                        <p className="text-dark/70 mt-1">{CONTACT_SETUP.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-secondary mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-dark">Email</h3>
                        <p className="text-dark/70 mt-1">{CONTACT_SETUP.email}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-secondary mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-dark">Business Hours</h3>
                        <p className="text-dark/70 mt-1">
                          Monday - Friday: 9:00 AM - 5:00 PM
                          <br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-medium text-dark mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-dark/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors"
                      >
                        <span className="sr-only">Facebook</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-dark/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors"
                      >
                        <span className="sr-only">Twitter</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-dark/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-dark/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors"
                      >
                        <span className="sr-only">Instagram</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-dark mb-6">Send Us a Message</h2>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-dark/70 mb-1">
                          Full Name
                        </label>
                        <Input id="name" name="name" required />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-dark/70 mb-1">
                          Email Address
                        </label>
                        <Input id="email" name="email" type="email" required />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-dark/70 mb-1">
                        Phone Number
                      </label>
                      <Input id="phone" name="phone" />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-dark/70 mb-1">
                        Subject
                      </label>
                      <Input id="subject" name="subject" required />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-dark/70 mb-1">
                        Your Message
                      </label>
                      <Textarea id="message" name="message" rows={5} required />
                    </div>

                    <Button type="submit" size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">Our Location</h2>
            <p className="max-w-2xl mx-auto text-dark/70">
              Visit our office to meet our team and discuss your business needs in person.
            </p>
          </div>

          <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425882426698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1622568056894!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Office Location Map"
            ></iframe>
          </div>
        </div>
      </section>

      <OfficeLocations />

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">Frequently Asked Questions</h2>
            <p className="max-w-2xl mx-auto text-dark/70">
              Find answers to common questions about our services and how we can help your business.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What industries do you specialize in?",
                  answer:
                    "We work with clients across various industries including technology, finance, healthcare, retail, manufacturing, and professional services. Our team has diverse expertise that allows us to understand the unique challenges of each sector.",
                },
                {
                  question: "How long does a typical project take?",
                  answer:
                    "Project timelines vary depending on scope and complexity. A small consulting engagement might take 4-6 weeks, while a comprehensive digital transformation project could span 6-12 months. During our initial consultation, we'll provide a detailed timeline based on your specific needs.",
                },
                {
                  question: "Do you offer ongoing support after project completion?",
                  answer:
                    "Yes, we offer various support packages to ensure the long-term success of your initiatives. These range from monthly check-ins to dedicated support hours and can be tailored to your specific needs and budget.",
                },
                {
                  question: "How do you measure the success of your services?",
                  answer:
                    "We establish clear KPIs and success metrics at the beginning of each engagement. These might include ROI, efficiency improvements, cost savings, revenue growth, or other relevant metrics specific to your business goals.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-dark mb-2">{faq.question}</h3>
                  <p className="text-dark/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      
    </main>
  )
}
