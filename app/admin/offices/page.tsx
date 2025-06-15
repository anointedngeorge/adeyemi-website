"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Plus, Trash2, X, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { BASE_URL, POINTER, TOKEN } from "@/config/settings"

interface Office {
  id: string
  content: {name: string
  address: string
  phone: string
  email?: string}
}

interface OfficeIn {
  name: string
  address: string
  phone: string
  email?: string
}

export default function AdminOffices() {
  const [offices, setOffices] = useState<Office[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {handleSubmit , register } = useForm<OfficeIn>();

  useEffect(() => {
       const run = async () => {
         try {
           const response = await fetch(`${BASE_URL}/content/${POINTER.office_location}/list`, {
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
             setOffices(parsed_data)
             // console.log(parsed_data);
             
           } 
         } catch (error) {
           console.error("Login failed:", error);
         }
       };
       run(); 
  }, [setOffices])



  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
   
  }

  const onSubmit = async (data:OfficeIn) => {
    const context = {content_type:'office_location', content:JSON.stringify({...data}) }
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
    closeModal()
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this office?")) {
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
              <h1 className="text-xl font-bold text-dark ml-4">Office Locations Management</h1>
            </div>
            <Button onClick={() => openModal()} className="bg-secondary hover:bg-secondary/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Office
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offices.map((office) => (
            <Card key={office.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{office.content.name}</CardTitle>
                  <div className="flex space-x-2">
                    {/* <Button size="sm" variant="secondary" onClick={() => openModal(office)}>
                      <Edit className="h-4 w-4" />
                    </Button> */}
                    <Button size="sm" variant="destructive" onClick={() => handleDelete(office.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-dark/80 text-sm">{office.content.address}</p>
                </div>

                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                  <p className="text-dark/80 text-sm">{office.content.phone}</p>
                </div>

                {office.content.email && (
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                    <p className="text-dark/80 text-sm">{office.content.email}</p>
                  </div>
                )}
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
                <CardTitle>{"Add New Office"}</CardTitle>
                <Button variant="ghost" size="sm" onClick={closeModal}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1">Office Name</label>
                  <Input
                    {...register("name", {required:true})}
                    placeholder="e.g., HEAD OFFICE"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1">Address</label>
                  <Textarea
                    {...register("address", {required:true})}
                    rows={3}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1">Phone</label>
                  <Input
                    {...register("phone", {required:true})}
                    placeholder="e.g., 080 3435 2515"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1">Email (Optional)</label>
                  <Input
                    {...register("email", {required:true})}
                    placeholder="office@example.com"
                  />
                </div>

                <div className="flex justify-end space-x-2 pt-4">
                  <Button type="button" variant="outline" onClick={closeModal}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-secondary hover:bg-secondary/90">
                    { "Add"} Office
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
