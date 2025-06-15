"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Save, Plus, Trash2 } from "lucide-react"
import Link from "next/link"
// import { useForm } from "react-hook-form"
import { GalleryLists } from "../components/Widgets"
import { BASE_URL, TOKEN } from "@/config/settings"
import Image from "next/image"

interface AboutContent {
  title: string
  subtitle: string
  description: string
  image: string
  missionTitle: string
  missionDescription: string
  whyChooseTitle: string
  whyChooseItems: string[]
}

export default function AdminAbout() {
  const [aboutContent, setAboutContent] = useState<AboutContent>({
    title: "",
    subtitle: "",
    description: "",
    image: "",
    missionTitle: "",
    missionDescription: "",
    whyChooseTitle: "",
    whyChooseItems: [],
  })
  // const {handleSubmit , register,  formState:{errors, isLoading, isSubmitting, isValid} } = useForm();
  const [newItem, setNewItem] = useState("")
  const router = useRouter()

  useEffect(() => {
    // const auth = localStorage.getItem("adminAuth")
      loadAboutContent()
    
  }, [router])

  const loadAboutContent = () => {
    const savedContent = localStorage.getItem("aboutContent")
    if (savedContent) {
      setAboutContent(JSON.parse(savedContent))
    } else {
      // Default content
      const defaultContent: AboutContent = {
        title: "About Our Company",
        subtitle:
          "With over 15 years of experience, we've been helping businesses transform and thrive in the digital age.",
        description:
          "We are dedicated to delivering innovative solutions that empower businesses to achieve their full potential. Our mission is to be a trusted partner in your journey to success.",
        image: "/placeholder.svg?height=500&width=500",
        missionTitle: "Our Mission",
        missionDescription:
          "We are dedicated to delivering innovative solutions that empower businesses to achieve their full potential. Our mission is to be a trusted partner in your journey to success.",
        whyChooseTitle: "Why Choose Us",
        whyChooseItems: [
          "Expert team with diverse industry experience",
          "Tailored solutions to meet your specific needs",
          "Commitment to excellence and innovation",
          "Proven track record of successful partnerships",
        ],
      }
      setAboutContent(defaultContent)
      localStorage.setItem("aboutContent", JSON.stringify(defaultContent))
    }
  }

  const saveContent = async () => {
    localStorage.setItem("aboutContent", JSON.stringify(aboutContent))
    const abountcontent= localStorage.getItem("aboutContent")
    const context = {content_type:'about', content:abountcontent }
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

    alert("About content saved successfully!")
  }

  const addWhyChooseItem = () => {
    if (newItem.trim()) {
      setAboutContent({
        ...aboutContent,
        whyChooseItems: [...aboutContent.whyChooseItems, newItem.trim()],
      })
      setNewItem("")
    }
  }

  const removeWhyChooseItem = (index: number) => {
    const updatedItems = aboutContent.whyChooseItems.filter((_, i) => i !== index)
    setAboutContent({
      ...aboutContent,
      whyChooseItems: updatedItems,
    })
  }

  const updateWhyChooseItem = (index: number, value: string) => {
    const updatedItems = aboutContent.whyChooseItems.map((item, i) => (i === index ? value : item))
    setAboutContent({
      ...aboutContent,
      whyChooseItems: updatedItems,
    })
  }

  // if (!isAuthenticated) {
  //   return <div>Loading...</div>
  // }

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
              <h1 className="text-xl font-bold text-dark ml-4">About Us Management</h1>
            </div>
            <Button onClick={saveContent} className="bg-secondary hover:bg-secondary/90">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Main Section */}
          <Card>
            <CardHeader>
              <CardTitle>Main About Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-dark/70 mb-1">Section Title</label>
                <Input
                  value={aboutContent.title}
                  onChange={(e) => setAboutContent({ ...aboutContent, title: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark/70 mb-1">Subtitle</label>
                <Textarea
                  value={aboutContent.subtitle}
                  onChange={(e) => setAboutContent({ ...aboutContent, subtitle: e.target.value })}
                  rows={2}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark/70 mb-1">Description</label>
                <Textarea
                  value={aboutContent.description}
                  onChange={(e) => setAboutContent({ ...aboutContent, description: e.target.value })}
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark/70 mb-1">Image URL</label>
              
                <select onChange={(e) => setAboutContent({ ...aboutContent, image: e.target.value })} className="w-full border p-2" >
                        <GalleryLists />
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Mission Section */}
          <Card>
            <CardHeader>
              <CardTitle>Mission Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-dark/70 mb-1">Mission Title</label>
                <Input
                  value={aboutContent.missionTitle}
                  onChange={(e) => setAboutContent({ ...aboutContent, missionTitle: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark/70 mb-1">Mission Description</label>
                <Textarea
                  value={aboutContent.missionDescription}
                  onChange={(e) => setAboutContent({ ...aboutContent, missionDescription: e.target.value })}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Why Choose Us Section */}
          <Card>
            <CardHeader>
              <CardTitle>Why Choose Us Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-dark/70 mb-1">Section Title</label>
                <Input
                  value={aboutContent.whyChooseTitle}
                  onChange={(e) => setAboutContent({ ...aboutContent, whyChooseTitle: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark/70 mb-2">Why Choose Us Items</label>
                <div className="space-y-2">
                  {aboutContent.whyChooseItems.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Input
                        value={item}
                        onChange={(e) => updateWhyChooseItem(index, e.target.value)}
                        className="flex-1"
                      />
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => removeWhyChooseItem(index)}
                        className="px-3"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-2 mt-4">
                  <Input
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder="Add new item..."
                    className="flex-1"
                    onKeyPress={(e) => e.key === "Enter" && addWhyChooseItem()}
                  />
                  <Button onClick={addWhyChooseItem} size="sm" className="bg-secondary hover:bg-secondary/90">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg p-6 bg-white">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-dark mb-2">{aboutContent.title}</h2>
                  <p className="text-dark/80">{aboutContent.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Image
                      src={aboutContent.image || "/placeholder.svg"}
                      alt="About us"
                      className="rounded-lg shadow-lg w-full"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-4">{aboutContent.missionTitle}</h3>
                    <p className="text-dark/80 mb-6">{aboutContent.missionDescription}</p>

                    <h3 className="text-xl font-bold text-dark mb-4">{aboutContent.whyChooseTitle}</h3>
                    <ul className="space-y-2">
                      {aboutContent.whyChooseItems.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-secondary mr-2">✓</span>
                          <span className="text-dark/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
