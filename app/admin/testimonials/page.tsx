"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Plus, Trash2, X, Star } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { GalleryLists } from "../components/Widgets"
import { BASE_URL, TOKEN } from "@/config/settings"
import Image from "next/image"

interface Testimonial {
  id: string
  content: {quote: string
  author: string
  position: string
  image: string
  rating: number}
}


interface TestimonialIn {quote: string
  author: string
  position: string
  image: string
  rating: number}

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingTestimonial,] = useState<Testimonial | null>(null)
  const {handleSubmit , register } = useForm<TestimonialIn>();

  useEffect(() => {
    const run = async () => {
      try {
        const response = await fetch(`${BASE_URL}/content/testimonial/list`, {
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
          setTestimonials(parsed_data)
          // console.log(parsed_data);
          
        } 
      } catch (error) {
        console.error("Login failed:", error);
      }
    };
    run(); 
  
  }, [setTestimonials])


  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const onSubmit = async (data:TestimonialIn) => {
    const context = {content_type:'testimonial', content: JSON.stringify({...data}) }
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
                  // console.log("success");
                  globalThis?.localStorage?.removeItem("clients");
                  globalThis.location.reload();
              } else {
                console.log(result?.message)
              }
            } catch (error) {
              console.error("Login failed:", error);
            }
    // closeModal()
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this testimonial?")) {
      try {
                    const response = await fetch(`${BASE_URL}/content/${id}/delete`, {
                      method: "DELETE",
                      headers: {
                        "Authorization": `Bearer ${TOKEN}`,
                        "Content-Type": "application/json",
                      },
                    });
              
                    const result = await response.json();
                    const status = result?.success;
              
                    if (status) {
                        globalThis.location.reload()
                    } else {
                      console.log(result?.message)
                    }
                  } catch (error) {
                    console.error("Login failed:", error);
              }
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star key={index} className={`h-4 w-4 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
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
              <h1 className="text-xl font-bold text-dark ml-4">Testimonials Management</h1>
            </div>
            <Button onClick={() => openModal()} className="bg-secondary hover:bg-secondary/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Testimonial
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-end space-x-2 mb-4">
                  {/* <Button size="sm" variant="secondary" onClick={() => openModal(testimonial)}>
                    <Edit className="h-4 w-4" />
                  </Button> */}
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(testimonial.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex space-x-1 mb-4">{renderStars(testimonial.content.rating)}</div>

                <p className="text-dark/80 mb-4 italic">{testimonial.content.quote}</p>

                <div className="flex items-center">
                  <Image
                  width={20}
                  height={20}
                    src={testimonial.content.image || "/placeholder.svg"}
                    alt={testimonial.content.author}
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-dark">{testimonial.content.author}</h4>
                    <p className="text-dark/70 text-sm">{testimonial.content.position}</p>
                  </div>
                </div>
              </CardContent>
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
                <CardTitle>{editingTestimonial ? "Edit Testimonial" : "Add New Testimonial"}</CardTitle>
                <Button variant="ghost" size="sm" onClick={closeModal}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1">Quote</label>
                  <Textarea
                    {...register("quote", {required:true})}
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1">Author Name</label>
                  <Input
                    {...register("author", {required:true})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1">Position/Company</label>
                  <Input
                    {...register("position", {required:true})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1">Profile Image URL</label>
                        <select {...register("image", {required:true})} className="w-full border p-2" >
                              <GalleryLists />
                        </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1">Rating</label>
                  <select
                    {...register("rating", {required:true})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  >
                    <option value={5}>5 Stars</option>
                    <option value={4}>4 Stars</option>
                    <option value={3}>3 Stars</option>
                    <option value={2}>2 Stars</option>
                    <option value={1}>1 Star</option>
                  </select>
                </div>

                <div className="flex justify-end space-x-2 pt-4">
                  <Button type="button" variant="outline" onClick={closeModal}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-secondary hover:bg-secondary/90">
                    {editingTestimonial ? "Update" : "Add"} Testimonial
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
