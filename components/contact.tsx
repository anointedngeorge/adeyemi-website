"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contact" className="relative py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=800&width=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Stronger overlay for better text readability */}
        <div className="absolute inset-0 bg-dark/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-dark/50 backdrop-blur-sm px-8 py-4 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">Contact Us</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-white drop-shadow-md">
              Have questions or ready to start your next project? Get in touch with our team.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg h-full bg-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-dark mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-secondary mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-dark">Address</h4>
                      <p className="text-dark/70 mt-1">
                        123 Business Avenue
                        <br />
                        Suite 500
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-secondary mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-dark">Phone</h4>
                      <p className="text-dark/70 mt-1">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-secondary mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-dark">Email</h4>
                      <p className="text-dark/70 mt-1">info@corpvision.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-dark mb-6">Send Us a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark/70 mb-1">
                        Full Name
                      </label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark/70 mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dark/70 mb-1">
                      Phone Number
                    </label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark/70 mb-1">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full md:w-auto bg-secondary hover:bg-secondary/90 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
