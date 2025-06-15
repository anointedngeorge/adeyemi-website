"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Plus, Trash2, X } from "lucide-react"
import Link from "next/link"
import { BASE_URL, POINTER, TOKEN } from "@/config/settings"
import { useForm } from "react-hook-form"
import { GalleryLists } from "../components/Widgets"
import Image from "next/image"

interface Service {
  id: string
  content: {title: string
  description: string
  image: string}
}


interface ServiceIn {title: string
  description: string
  image: string}

export default function AdminServices() {
  const [services, setServices] = useState<Service[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {handleSubmit , register } = useForm<ServiceIn>();

  useEffect(() => {
       const run = async () => {
         try {
           const response = await fetch(`${BASE_URL}/content/${POINTER.service}/list`, {
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
             setServices(parsed_data)
             // console.log(parsed_data);
             
           } 
         } catch (error) {
           console.error("Login failed:", error);
         }
       };
       run(); 
  }, [setServices])


  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)

  }

 const onSubmit = async (data:ServiceIn) => {
        const context = {content_type:'service', content:JSON.stringify({...data}) }
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

  const handleDelete =  async (id: string) => {
    if (confirm("Are you sure you want to delete this service?")) {
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
              <h1 className="text-xl font-bold text-dark ml-4">Services Management</h1>
            </div>
            <Button onClick={() => openModal()} className="bg-secondary hover:bg-secondary/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Service
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                width={20}
                height={20}
                  src={service.content.image || "/placeholder.svg"}
                  alt={service.content.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 flex space-x-2">
                  {/* <Button size="sm" variant="secondary" onClick={() => openModal(service)} className="h-8 w-8 p-0">
                    <Edit className="h-4 w-4" />
                  </Button> */}
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(service.id)}
                    className="h-8 w-8 p-0"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-dark mb-2">{service.content.title}</h3>
                <p className="text-sm text-dark/70 line-clamp-3">{service.content.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>{"Add New Service"}</CardTitle>
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
                    {...register("description", {required:true})}
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1">Image URL</label>
                  <select {...register("image", {required:true})} className="w-full border p-2" >
                          <GalleryLists />
                    </select>
                </div>

                <div className="flex justify-end space-x-2 pt-4">
                  <Button type="button" variant="outline" onClick={closeModal}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-secondary hover:bg-secondary/90">
                    { "Add"} Service
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
