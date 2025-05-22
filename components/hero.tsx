"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const carouselSlides = [
  {
    title: "Innovative Solutions for Your Business",
    description:
      "We help businesses transform through technology and strategic innovation. Partner with us to achieve sustainable growth and operational excellence.",
    image: "./img/n4.jpg",
    buttonText: "Get Started",
    buttonLink: "#contact",
  },
  {
    title: "Strategic Consulting for Growth",
    description:
      "Our expert team provides strategic guidance to help your business navigate complex challenges and identify opportunities for expansion.",
      image: "./img/n5.jpg",
    buttonText: "Learn More",
    buttonLink: "#services",
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === carouselSlides.length - 1 ? 0 : prev + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? carouselSlides.length - 1 : prev - 1))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section className="relative bg-primary w-full">
      <div className="relative overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out w-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carouselSlides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <div className="relative w-full h-[600px]">
                <Image
                                      width={100}
                                      height={100}
                  src={slide.image || "/placeholder.svg"}
                  alt="Business professionals"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gray-950/55 flex items-center">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl text-white">
                      <h1 className="text-2xl md:text-5xl lg:text-6xl shadow font-bold leading-tight mb-6">{slide.title}</h1>
                      <p className="text-sm md:text-xl text-white/90 mb-8 shadow">{slide.description}</p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link href={slide.buttonLink}>
                          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                            {slide.buttonText}
                          </Button>
                        </Link>
                        <Link href="#services">
                          <Button variant="outline" size="lg" className="border-white text-dark hover:bg-white/20">
                            Learn More
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-8 rounded-full ${currentSlide === index ? "bg-secondary" : "bg-white/50"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
