"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Plus, Trash2, X } from "lucide-react"
import Link from "next/link"
import { PageLayout } from "../components/PageLayout"
import { BASE_URL, POINTER, TOKEN } from "@/config/settings"
import { useForm } from "react-hook-form"
import {GalleryLists } from "../components/Widgets"
import Image from "next/image"

interface TeamMember {
  id: string
  content: {name: string
  role: string
  bio: string
  image: string}
}

interface TeamMemberIn {name: string
  role: string
  bio: string
  image: string}
export default function AdminTeam() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null)
  const [, setFormData] = useState<TeamMember>()
  const {handleSubmit , register } = useForm<TeamMemberIn>();
  const router = useRouter()
  
  useEffect(() => {
      const run = async () => {
        try {
          const response = await fetch(`${BASE_URL}/content/${POINTER.team}/list`, {
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
            setTeamMembers(parsed_data)
          } else {
            
          }
        } catch (error) {
          console.error("Login failed:", error);
        }
      };
      run();
    }, [setTeamMembers])


  // const saveTeamMembers = (updatedMembers: TeamMember[]) => {
  //   setTeamMembers(updatedMembers)
  //   localStorage.setItem("teamMembers", JSON.stringify(updatedMembers))
  // }

  const openModal = (member?: TeamMember) => {
    if (member) {
      setEditingMember(member)
      setFormData({
        id:member.id,
        content: {
          name: member.content.name,
          role: member.content.role,
          bio: member.content.bio,
          image: member.content.image,
        }
      })
    } 
    setIsModalOpen(true)
  }
  

  const closeModal = () => {
    setIsModalOpen(false)
    setEditingMember(null)
  
  }

  const onSubmit = async (data:TeamMemberIn) => {
        const context = {content_type:'teams', content:JSON.stringify(data)}
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
              // console.log(result?.message)
              globalThis.location.reload()
          } else {
            console.log(result?.message)
          }
        } catch (error) {
          console.error("Login failed:", error);
        }
    // closeModal();
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this team member?")) {
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
              <h1 className="text-xl font-bold text-dark ml-4">Team Management</h1>
            </div>
            <Button onClick={() => openModal()} className="bg-secondary hover:bg-secondary/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Team Member
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <Card key={member?.id} className="overflow-hidden">
              <div className="relative aspect-square">
                <Image
                width={20}
                height={20}
                  src={member?.content?.image}
                  alt={member?.content?.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 flex space-x-2">
                  {/* <Button size="sm" variant="secondary" onClick={() => openModal(member)} className="h-8 w-8 p-0">
                    <Edit className="h-4 w-4" />
                  </Button> */}
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(member.id)}
                    className="h-8 w-8 p-0"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold text-dark mb-1">{member?.content?.name}</h3>
                <p className="text-sm text-dark/70 font-medium mb-2">{member?.content?.role}</p>
                <p className="text-xs text-dark/60 line-clamp-3">{member?.content?.bio}</p>
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
                <CardTitle>{editingMember ? "Edit Team Member" : "Add New Team Member"}</CardTitle>
                <Button variant="ghost" size="sm" onClick={closeModal}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-dark/70 mb-1">Name</label>
                    <Input {...register("name", {required:true})} />
                </div>

                

                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1">Role</label>
                  <Input {...register("role", {required:true})} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1">Bio</label>
                  <Textarea {...register("bio", {required:true})} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1">Image Gallery</label>
                  <select {...register("image", {required:true})} className="w-full border p-2" >
                        <GalleryLists />
                    </select>
                </div>

                <div className="flex justify-end space-x-2 pt-4">
                  <Button type="button" variant="outline" onClick={closeModal}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-secondary hover:bg-secondary/90">
                    {editingMember ? "Update" : "Add"} Member
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
