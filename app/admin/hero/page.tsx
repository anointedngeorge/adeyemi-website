"use client"

import type React from "react"

import { useEffect, useState } from "react"
// import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Plus, Trash2, X, MoveUp, MoveDown } from "lucide-react"
import Link from "next/link"
import { GalleryLists } from "../components/Widgets"
import { useForm } from "react-hook-form"
import { BASE_URL, POINTER, TOKEN } from "@/config/settings"
import Image from "next/image"

interface HeroSlide {
  id: string
  content: {title: string
  description: string
  image: string
  buttonText: string
  buttonLink: string
  order: number}
}

interface HeroIn {title: string
  description: string
  image: string
  buttonText: string
  buttonLink: string
  order: number}

export default function AdminHero() {
  const [slides, setSlides] = useState<HeroSlide[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {handleSubmit , register } = useForm<HeroIn>();
  // const router = useRouter()

  useEffect(() => {
         const run = async () => {
           try {
             const response = await fetch(`${BASE_URL}/content/${POINTER.hero}/list`, {
               method: "GET",
               headers: {
                 "Authorization": `Bearer ${TOKEN}`,
                 "Content-Type": "application/json",
               }
             });
     
             const result = await response.json();
             const status = result?.success;
             if (status) {
               const parsed_data = result?.data.map((x: { content: string }) => ({ ...x, content: JSON.parse(x?.content) }));
               setSlides(parsed_data)
               // console.log(parsed_data);
               
             } 
           } catch (error) {
             console.error("Login failed:", error);
           }
         };
         run(); 
    }, [setSlides])
  

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  
  }

  const onSubmit = async (data: HeroIn) => {
          const context = {content_type:'hero', content:JSON.stringify({...data}) }
          try {
            const response = await fetch(`${BASE_URL}/content/create`, {
              method: "POST",
              headers: {
                "Authorization": `Bearer ${TOKEN}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify(context)
            });
      
            const result = await response.json();
            const status = result?.success;
      
            if (status) {
                globalThis.location.reload();
            } else {
              console.log(result?.message)
            }
          } catch (error) {
            console.error("Token failure:", error);
          }
      // closeModal()
    }

  const handleDelete = () => {
  }

  const moveSlide = (id: string, direction: "up" | "down") => {
    const slideIndex = slides.findIndex((slide) => slide.id === id)
    if ((direction === "up" && slideIndex === 0) || (direction === "down" && slideIndex === slides.length - 1)) {
      return
    }

    const newSlides = [...slides]
    const targetIndex = direction === "up" ? slideIndex - 1 : slideIndex + 1

    // Swap the slides
    const temp = newSlides[slideIndex]
    newSlides[slideIndex] = newSlides[targetIndex]
    newSlides[targetIndex] = temp

    // Update order numbers
    newSlides.forEach((slide, index) => {
      slide.content.order = index + 1
    })
  }


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/admin/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <h1 className="text-xl font-bold text-dark ml-4">Hero Section Management</h1>
            </div>
            <Button onClick={() => openModal()} className="bg-secondary hover:bg-secondary/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Slide
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {slides.map((slide, index) => (
            <Card key={slide.id} className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <Image
                  width={20}
                  height={20}
                    src={slide.content.image || "/placeholder.svg"}
                    alt={slide.content.title}
                    className="w-full h-48 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:col-span-2 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="bg-secondary text-white px-2 py-1 rounded text-sm font-medium">
                        Slide {slide.content.order}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => moveSlide(slide.id, "up")}
                        disabled={index === 0}
                      >
                        <MoveUp className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => moveSlide(slide.id, "down")}
                        disabled={index === slides.length - 1}
                      >
                        <MoveDown className="h-4 w-4" />
                      </Button>
                      {/* <Button size="sm" variant="secondary" onClick={() => openModal(slide)}>
                        <Edit className="h-4 w-4" />
                      </Button> */}
                      <Button size="sm" variant="destructive" onClick={() => handleDelete()}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-2">{slide.content.title}</h3>
                  <p className="text-dark/70 mb-4">{slide.content.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-dark/60">
                    <span>Button: {slide.content.buttonText}</span>
                    <span>Link: {slide.content.buttonLink}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>{ "Add New Slide"}</CardTitle>
                <Button variant="ghost" size="sm" onClick={closeModal}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1">Title</label>
                  <Input
                    {...register("title", {required:true})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1">Description</label>
                  <Textarea
                    {...register("description")}
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1">Background Image URL</label>
                   <select {...register("image", {required:true})} className="w-full border p-2" >
                        <GalleryLists />
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1">Button Text</label>
                  <Input
                    {...register("buttonText")}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1">Button Link</label>
                  <Input
                    {...register("buttonLink")}
                    placeholder="#contact or /services"
                    required
                  />
                </div>

                <div className="flex justify-end space-x-2 pt-4">
                  <Button type="button" variant="outline" onClick={closeModal}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-secondary hover:bg-secondary/90">
                    {"Add"} Slide
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
