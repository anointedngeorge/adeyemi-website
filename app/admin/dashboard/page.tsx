"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, FileText, ImageIcon, Briefcase, MessageSquare, Building, BarChart3 } from "lucide-react"
// import { AdminNavbar } from "../components/AdminNavbar"
import { PageLayout } from "../components/PageLayout"
import { BASE_URL, TOKEN } from "@/config/settings"

export default function AdminDashboard() {
  const [analytic, setAnalytic] = useState<{gallery:number}>();
  const router = useRouter()

  const dashboardItems = [
    {
      title: "Hero Section",
      description: "Manage carousel slides and hero content",
      icon: <ImageIcon className="h-8 w-8" />,
      href: "/admin/hero",
      color: "bg-blue-500",
    },
    {
      title: "About Section",
      description: "Update company information and mission",
      icon: <FileText className="h-8 w-8" />,
      href: "/admin/about",
      color: "bg-green-500",
    },
    {
      title: "Services",
      description: "Add, edit, or remove services",
      icon: <Briefcase className="h-8 w-8" />,
      href: "/admin/services",
      color: "bg-purple-500",
    },
    {
      title: "Team Members",
      description: "Manage team member profiles",
      icon: <Users className="h-8 w-8" />,
      href: "/admin/team",
      color: "bg-orange-500",
    },
    {
      title: "Testimonials",
      description: "Add and manage client testimonials",
      icon: <MessageSquare className="h-8 w-8" />,
      href: "/admin/testimonials",
      color: "bg-pink-500",
    },
    {
      title: "Gallery",
      description: "Upload and manage gallery images",
      icon: <ImageIcon className="h-8 w-8" />,
      href: "/admin/gallery",
      color: "bg-indigo-500",
    },
    {
      title: "Blog Posts",
      description: "Create and edit blog articles",
      icon: <FileText className="h-8 w-8" />,
      href: "/admin/blog",
      color: "bg-red-500",
    },
    {
      title: "Office Locations",
      description: "Manage office locations and contact info",
      icon: <Building className="h-8 w-8" />,
      href: "/admin/offices",
      color: "bg-teal-500",
    },
    {
      title: "Clients",
      description: "Manage client information and categories",
      icon: <Users className="h-8 w-8" />,
      href: "/admin/clients",
      color: "bg-yellow-500",
    },
  ]

   const getAnalytics = async () => {
      try {
        const response = await fetch(`${BASE_URL}/auth/analytics`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${TOKEN}`,
          }
        });
  
        const result = await response.json();
        const status = result?.success;
  
        if (status) {
          setAnalytic(result?.data)
        } else {
          console.log(result?.message)
        }
      } catch (error) {
        console.error("Login failed:", error);
      }
      
    }

    getAnalytics();

  return (
    <PageLayout router={router}>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-dark mb-2">Dashboard</h2>
          <p className="text-dark/70">Manage your website content and settings</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-dark/70">Total Services</p>
                  <p className="text-2xl font-bold text-dark">8</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-dark/70">Team Members</p>
                  <p className="text-2xl font-bold text-dark">4</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <ImageIcon className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-dark/70">Gallery Images</p>
                  <p className="text-2xl font-bold text-dark">{analytic?.gallery}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <FileText className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-dark/70">Blog Posts</p>
                  <p className="text-2xl font-bold text-dark">9</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Management Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center">
                    <div className={`p-2 ${item.color} rounded-lg text-white`}>{item.icon}</div>
                    <CardTitle className="ml-3 text-lg">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-dark/70">{item.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </PageLayout>
  )
}
