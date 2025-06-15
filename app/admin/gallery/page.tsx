"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Plus, Edit, Trash2, X } from "lucide-react"
import Link from "next/link"
import { PageLayout } from "../components/PageLayout"
import Image from "next/image"
import { BASE_URL, POINTER, TOKEN } from "@/config/settings"
// import { GalleryLists } from "../components/Widgets"
import { useForm } from "react-hook-form"

interface GalleryImage {
  id: number
  image: string
  title: string
  is_gallery: boolean
}

interface GalleryImageIn {
  title: string
  is_gallery: boolean
  file:string
}


export default function AdminGallery() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null)
  const [, setFormData] = useState({
    title: "",
    image: "",
    is_gallery:false,
  })
  const {handleSubmit , register } = useForm<GalleryImageIn>();
  const router = useRouter()

  
  
 
  useEffect(() => {
    const run = async () => {
      try {
        const response = await fetch(`${BASE_URL}/${POINTER.media}/list`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${TOKEN}`,
            "Content-Type": "application/json",
          }
        });

        const result = await response.json();
        const status = result?.success;

        if (status) {
            setImages(result?.data)
        } else {
          
        }
      } catch (error) {
        console.error("Login failed:", error);
      }
    };

    run();
  }, [setImages])

  // const saveImages = (updatedImages: GalleryImage[]) => {
  //   setImages(updatedImages)
  //   localStorage.setItem("galleryImages", JSON.stringify(updatedImages))
  // }

  const openModal = (image?: GalleryImage) => {
    if (image) {
      setEditingImage(image)
      setFormData({
        title: image.title,
        image: image.image,
        is_gallery: image.is_gallery,
      })
    } 
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const onSubmit = async (data: GalleryImageIn) => {
    
    const filter: { [key: string]: boolean } = { "true": true, "false": false, "choose": false };
    const is_gallery = filter[String(data.is_gallery)];

    const formData = new FormData();
    formData.append("title", data?.title);
    formData.append("is_gallery", is_gallery.toString());
    formData.append("file", data?.file[0]);
    try {
      const response = await fetch(`${BASE_URL}/media/create`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${TOKEN}`,
        },
        body: formData
      });

      const result = await response.json();
      const status = result?.success;

      if (status) {
          // console.log(result?.message)
          globalThis.location.reload()
      } else {
        console.log(result?.message)
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
      closeModal()
  }

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this image?")) {

      try {
        const response = await fetch(`${BASE_URL}/media/${id}/delete`, {
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
    <PageLayout router={router}>
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
              <h1 className="text-xl font-bold text-dark ml-4">Gallery Management</h1>
            </div>
            <Button onClick={() => openModal()} className="bg-secondary hover:bg-secondary/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Image
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image width={20} height={20} src={item?.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 flex space-x-2">
                  <Button size="sm" variant="secondary" onClick={() => openModal(item)} className="h-8 w-8 p-0">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(item.id)}
                    className="h-8 w-8 p-0"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-dark mb-1">{item.title}</h3>
                {/* <p className="text-sm text-dark/70 mb-2 line-clamp-2">{image.description}</p> */}
                {/* <div className="text-xs text-dark/60">
                  <p>{image.location}</p>
                  <p>{new Date(image.date).toLocaleDateString()}</p>
                </div> */}
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
                <CardTitle>{editingImage ? "Edit Image" : "Add New Image"}</CardTitle>
                <Button variant="ghost" size="sm" onClick={closeModal}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" encType="multipart/form-data">
                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1">Title</label>
                  <Input type="text" {...register("title", {required: true})}  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1">Image</label>
                  <input type="file" className="w-full"  {...register("file", {required: true})} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1">Show As Gallery</label>
                    <select className="w-full" {...register("is_gallery", {required: true})}>
                      <option defaultValue={'choose'} >Choose</option>
                        <option value={'true'}>Yes</option>
                        <option value={"false"} >No</option>
                    </select>
                </div>

                <div className="flex justify-end space-x-2 pt-4">
                  <Button type="button" variant="outline" onClick={closeModal}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-secondary hover:bg-secondary/90">
                    {editingImage ? "Update" : "Add"} Image
                  </Button>
             
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </PageLayout>
  )
}
