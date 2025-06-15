"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, ArrowLeft } from "lucide-react"
import Image from "next/image"

// Gallery images data
const galleryImages = [
    {
      id: 1,
      src: "./gallery/g1.jpeg",
      title: "Head Office - Abuja",
      description: "Our modern head office located in Shakir Plaza, Area 11 Abuja",
      date: "2023-01-15",
      location: "Abuja",
    },
    {
      id: 2,
      src: "./gallery/g2.jpeg",
      title: "Financial Training Workshop",
      description: "Comprehensive financial management training session for government officials",
      date: "2023-03-20",
      location: "Makurdi",
    },
    {
      id: 3,
      src: "./gallery/g3.jpeg",
      title: "Annual Client Conference",
      description: "Our annual conference bringing together clients from across Nigeria",
      date: "2023-05-10",
      location: "Abuja",
    },
    {
      id: 4,
      src: "./gallery/g4.jpeg",
      title: "Team Building Exercise",
      description: "Team building activities to strengthen collaboration and communication",
      date: "2023-02-28",
      location: "Jos",
    },
    {
      id: 5,
      src: "./gallery/g5.jpeg",
      title: "Audit Project - Federal Medical Centre",
      description: "On-site audit work at Federal Medical Centre, Keffi",
      date: "2023-04-05",
      location: "Keffi",
    },
    {
      id: 6,
      src: "./gallery/g6.jpeg",
      title: "Benue Office",
      description: "Our Benue state office serving local government areas",
      date: "2023-01-20",
      location: "Makurdi",
    },
    {
      id: 7,
      src: "./gallery/g7.jpeg",
      title: "Tax Planning Seminar",
      description: "Educational seminar on effective tax planning strategies",
      date: "2023-06-15",
      location: "Kano",
    },
    
  ]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openModal = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const navigateImage = useCallback(
    (direction: "prev" | "next") => {
      if (selectedImage === null) return
  
      const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage)
      let newIndex
  
      if (direction === "prev") {
        newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1
      } else {
        newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0
      }
  
      setSelectedImage(galleryImages[newIndex].id)
    },
    [selectedImage]
  )

  const selectedImageData = selectedImage ? galleryImages.find((img) => img.id === selectedImage) : null

  // Add keyboard event handling for the modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === "Escape") {
          closeModal()
        } else if (e.key === "ArrowLeft") {
          navigateImage("prev")
        } else if (e.key === "ArrowRight") {
          navigateImage("next")
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage, navigateImage])

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Our Gallery</h1>
            <p className="max-w-3xl mx-auto text-lg text-dark/80">
              Explore our offices, training sessions, corporate events, and project work across Nigeria through our
              comprehensive photo gallery.
            </p>
            <Link href="/" className="inline-flex items-center mt-6 text-secondary hover:text-secondary/80">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => openModal(image.id)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                  width={20}
                  height={20}
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                      <h3 className="font-semibold text-lg mb-2">{image.title}</h3>
                      <p className="text-sm line-clamp-2">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && selectedImageData && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal} // Close when clicking the background
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the content
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage("prev")
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage("next")
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <div className="bg-white rounded-lg overflow-hidden">
              <Image
                width={20}
                height={20}
                src={selectedImageData.src || "/placeholder.svg"}
                alt={selectedImageData.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />

              {/* Image details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-dark mb-2">{selectedImageData.title}</h3>
                <p className="text-dark/80 mb-4">{selectedImageData.description}</p>
                <div className="flex items-center text-sm text-dark/60 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(selectedImageData.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {selectedImageData.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
