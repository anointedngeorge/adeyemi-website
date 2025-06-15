"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Plus, Edit, Trash2, X, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  image: string
  category: string
  author: string
}

const categories = [
  "Business Strategy",
  "Technology",
  "Operations",
  "Leadership",
  "Sustainability",
  "Global Markets",
  "Data Analytics",
  "Customer Experience",
  "Finance",
]

export default function AdminBlog() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    date: "",
    image: "",
    category: "",
    author: "",
  })
  const router = useRouter()

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (auth === "true") {
      setIsAuthenticated(true)
      loadBlogPosts()
    } else {
      router.push("/admin/login")
    }
  }, [router])

  const loadBlogPosts = () => {
    const savedPosts = localStorage.getItem("blogPosts")
    if (savedPosts) {
      setBlogPosts(JSON.parse(savedPosts))
    } else {
      // Default blog posts
      const defaultPosts: BlogPost[] = [
        {
          id: 1,
          title: "10 Strategies for Business Growth in 2023",
          excerpt:
            "Discover the top strategies that successful businesses are implementing to drive growth in today's competitive market.",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
          date: "2023-05-15",
          image: "/placeholder.svg?height=300&width=500",
          category: "Business Strategy",
          author: "John Doe",
        },
        {
          id: 2,
          title: "The Future of Digital Transformation",
          excerpt:
            "Explore how emerging technologies are reshaping industries and what your business needs to do to stay ahead of the curve.",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
          date: "2023-06-22",
          image: "/placeholder.svg?height=300&width=500",
          category: "Technology",
          author: "Jane Smith",
        },
      ]
      setBlogPosts(defaultPosts)
      localStorage.setItem("blogPosts", JSON.stringify(defaultPosts))
    }
  }

  const saveBlogPosts = (updatedPosts: BlogPost[]) => {
    setBlogPosts(updatedPosts)
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts))
  }

  const openModal = (post?: BlogPost) => {
    if (post) {
      setEditingPost(post)
      setFormData({
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        date: post.date,
        image: post.image,
        category: post.category,
        author: post.author,
      })
    } else {
      setEditingPost(null)
      setFormData({
        title: "",
        excerpt: "",
        content: "",
        date: new Date().toISOString().split("T")[0],
        image: "/placeholder.svg?height=300&width=500",
        category: categories[0],
        author: "",
      })
    }
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setEditingPost(null)
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      date: "",
      image: "",
      category: "",
      author: "",
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingPost) {
      const updatedPosts = blogPosts.map((post) =>
        post.id === editingPost.id ? { ...editingPost, ...formData } : post,
      )
      saveBlogPosts(updatedPosts)
    } else {
      const newPost: BlogPost = {
        id: Math.max(...blogPosts.map((post) => post.id), 0) + 1,
        ...formData,
      }
      saveBlogPosts([...blogPosts, newPost])
    }

    closeModal()
  }

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      const updatedPosts = blogPosts.filter((post) => post.id !== id)
      saveBlogPosts(updatedPosts)
    }
  }

  if (!isAuthenticated) {
    return <div>Loading...</div>
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
              <h1 className="text-xl font-bold text-dark ml-4">Blog Management</h1>
            </div>
            <Button onClick={() => openModal()} className="bg-secondary hover:bg-secondary/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Blog Post
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image width={20} height={20} src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 flex space-x-2">
                  <Button size="sm" variant="secondary" onClick={() => openModal(post)} className="h-8 w-8 p-0">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(post.id)} className="h-8 w-8 p-0">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center text-sm text-dark/60 mb-2">
                  <span className="bg-primary/30 text-dark/70 px-2 py-1 rounded text-xs">{post.category}</span>
                  <span className="mx-2">•</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <h3 className="font-semibold text-dark mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-sm text-dark/70 line-clamp-3">{post.excerpt}</p>
                <p className="text-xs text-dark/60 mt-2">By {post.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>{editingPost ? "Edit Blog Post" : "Add New Blog Post"}</CardTitle>
                <Button variant="ghost" size="sm" onClick={closeModal}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-dark/70 mb-1">Title</label>
                    <Input
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark/70 mb-1">Author</label>
                    <Input
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-dark/70 mb-1">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                      required
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark/70 mb-1">Date</label>
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1">Featured Image URL</label>
                  <Input
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="/placeholder.svg?height=300&width=500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1">Excerpt</label>
                  <Textarea
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    rows={3}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1">Content</label>
                  <Textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows={8}
                    required
                  />
                </div>

                <div className="flex justify-end space-x-2 pt-4">
                  <Button type="button" variant="outline" onClick={closeModal}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-secondary hover:bg-secondary/90">
                    {editingPost ? "Update" : "Add"} Post
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
