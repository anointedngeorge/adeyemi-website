"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
// import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Plus, Trash2, X, Building, Briefcase } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"
// import { styleEffect } from "framer-motion"
import { BASE_URL, POINTER, TOKEN } from "@/config/settings"

interface ClientCategory {
  id: string
  content: {
    name: string
    icon: string
    clients: string
  }
}

interface ClientIn {
  name: string
  icon: string
  clients: string
}

export default function AdminClients() {
  const [clientCategories, setClientCategories] = useState<ClientCategory[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  // const [newClient, setNewClient] = useState();
  const {handleSubmit , register } = useForm<ClientIn>();
  const client_ref = useRef("");
  // const router = useRouter()

  const iconOptions = [
    { value: "building", label: "Building", icon: <Building className="h-4 w-4" /> },
    { value: "briefcase", label: "Briefcase", icon: <Briefcase className="h-4 w-4" /> },
  ]

  useEffect(() => {
      const run = async () => {
              try {
                const response = await fetch(`${BASE_URL}/content/${POINTER.clients}/list`, {
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
                  setClientCategories(parsed_data)
                  // console.log(parsed_data);
                  
                } 
              } catch (error) {
                console.error("Login failed:", error);
              }
            };
            run(); 
  }, [setClientCategories])

  const openModal = (category?: ClientCategory) => {
    if (category) {

    } 
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const onSubmit = async (data: ClientIn) => {
        const clients = globalThis?.localStorage?.getItem("clients");
        const context = {content_type:'clients', content:JSON.stringify({...data, clients:clients}) }

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
              console.log("success");
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
    if (confirm("Are you sure you want to delete this client category?")) {
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


  useEffect(() => {
    globalThis?.localStorage.setItem("clients", JSON.stringify([]));
  }, []);

  const container:string[] = [];

  // add clients
  const add_new_client = () => {
      container.push(client_ref.current);
      globalThis?.localStorage?.setItem("clients", JSON.stringify(container));
      // const clients = globalThis?.localStorage.getItem("clients");
      // setNewClient(JSON.parse(clients || "[]"))
      alert(client_ref.current)
  }

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "briefcase":
        return <Briefcase className="h-6 w-6" />
      default:
        return <Building className="h-6 w-6" />
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
              <h1 className="text-xl font-bold text-dark ml-4">Clients Management</h1>
            </div>
            <Button onClick={() => openModal()} className="bg-secondary hover:bg-secondary/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Category
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientCategories.map((category) => (
            <Card key={category.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <div className="bg-primary/20 p-2 rounded-full mr-3">{getIcon(category.content.icon)}</div>
                    <CardTitle className="text-lg">{category.content.name}</CardTitle>
                  </div>
                  <div className="flex space-x-2">
                    {/* <Button size="sm" variant="secondary" onClick={() => openModal(category)}>
                      <Edit className="h-4 w-4" />
                    </Button> */}
                    <Button size="sm" variant="destructive" onClick={() => handleDelete(category.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-dark/60 mb-3">{JSON.parse(category.content.clients || "[]").length} clients</p>
                <div className="space-y-1 max-h-40 overflow-y-auto">
                  {JSON.parse(category.content.clients || "[]").slice(0, 5).map((client:string) => (
                    <p key={client}  className={`text-sm text-dark/80 ${category.id}`}>
                      • {client}
                    </p>
                  ))}
                {JSON.parse(category.content.clients || "[]").length > 5 && (
                    <p className="text-sm text-dark/60 italic">+{JSON.parse(category.content.clients || "[]" ).length - 5} more clients...</p>
                  )}
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
                <CardTitle>{"Add New Client Category"}</CardTitle>
                <Button variant="ghost" size="sm" onClick={closeModal}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1">Category Name</label>
                  <Input {...register("name", {required:true})} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1">Icon</label>
                  <select
                    {...register("icon", {required:true})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  >
                    {iconOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-2">Clients</label>
                  <div className="flex items-center space-x-2">
                    <Input
                      onKeyUp={e => client_ref.current=e.currentTarget.value}
                      id="client"
                      placeholder="Add new client..."
                      className="flex-1"
                      
                    />
                    <Button type="button" onClick={add_new_client} size="sm" className="bg-secondary hover:bg-secondary/90">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex justify-end space-x-2 pt-4">
                  <Button type="button" variant="outline" onClick={closeModal}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-secondary hover:bg-secondary/90">
                    {"Add"} Category
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
