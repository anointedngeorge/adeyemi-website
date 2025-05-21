"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "Working with CorpVision transformed our business operations. Their strategic insights and implementation support were invaluable to our growth.",
    author: "Jennifer Lee",
    position: "CEO, TechStart Inc.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The team at CorpVision delivered beyond our expectations. Their attention to detail and commitment to excellence is unmatched in the industry.",
    author: "Robert Martinez",
    position: "COO, Global Solutions",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "CorpVision's innovative approach to our challenges resulted in a 40% increase in efficiency and significant cost savings across our operations.",
    author: "Sophia Williams",
    position: "CTO, Innovate Labs",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "We've been working with CorpVision for over 5 years now, and they continue to impress us with their forward-thinking strategies and reliable execution.",
    author: "Michael Johnson",
    position: "CFO, Enterprise Group",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The digital transformation led by CorpVision has revolutionized how we operate. Our productivity has increased by 35% in just six months.",
    author: "Emily Chen",
    position: "Director of Operations, TechGrowth",
    image: "./img/avatar.png",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState(3)

  // Update visible testimonials based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleTestimonials(1)
      } else if (window.innerWidth < 1024) {
        setVisibleTestimonials(2)
      } else {
        setVisibleTestimonials(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - visibleTestimonials + 1))
  }, [visibleTestimonials])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - visibleTestimonials : prevIndex - 1))
  }, [visibleTestimonials])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section id="testimonials" className="py-20 bg-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500">What Our Clients Say</h2>
          <div className="w-16 h-1 bg-blue-900 mx-auto mt-4 mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-dark/80">
            {"Don't just take our word for it. Here's what our clients have to say about working with us."}
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleTestimonials)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4" style={{ flex: `0 0 ${100 / visibleTestimonials}%` }}>
                  <Card className="border-0 shadow-lg h-full">
                    <CardContent className="p-8">
                      <Quote className="h-10 w-10 text-secondary/50 mb-4" />
                      <p className="text-dark/80 mb-6 italic">{testimonial.quote}</p>
                      <div className="flex items-center">
                        <Image
                                          width={100}
                                          height={100}
                          src={"./img/avatar.png"}
                          alt={testimonial.author}
                          className="h-12 w-12 rounded-full mr-4"
                        />
                        <div>
                          <h4 className="font-bold text-dark">{testimonial.author}</h4>
                          <p className="text-dark/70 text-sm">{testimonial.position}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-dark/20 hover:bg-dark/40 text-white p-2 rounded-full z-10 -ml-4"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-dark/20 hover:bg-dark/40 text-white p-2 rounded-full z-10 -mr-4"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Slider Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: testimonials.length - visibleTestimonials + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-8 rounded-full ${
                  currentIndex === index ? "bg-secondary" : "bg-dark/20"
                } transition-colors`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
