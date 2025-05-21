"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Calendar, ArrowLeft, ArrowRight, Search } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "10 Strategies for Business Growth in 2023",
    excerpt:
      "Discover the top strategies that successful businesses are implementing to drive growth in today's competitive market.",
    date: "May 15, 2023",
    image: "/placeholder.svg?height=300&width=500",
    category: "Business Strategy",
  },
  {
    id: 2,
    title: "The Future of Digital Transformation",
    excerpt:
      "Explore how emerging technologies are reshaping industries and what your business needs to do to stay ahead of the curve.",
    date: "June 22, 2023",
    image: "/placeholder.svg?height=300&width=500",
    category: "Technology",
  },
  {
    id: 3,
    title: "Building a Resilient Supply Chain",
    excerpt:
      "Learn practical approaches to strengthen your supply chain against disruptions and ensure business continuity.",
    date: "July 8, 2023",
    image: "/placeholder.svg?height=300&width=500",
    category: "Operations",
  },
  {
    id: 4,
    title: "Effective Leadership in Times of Change",
    excerpt:
      "Discover key leadership principles that help navigate organizational change and foster innovation and growth.",
    date: "August 3, 2023",
    image: "/placeholder.svg?height=300&width=500",
    category: "Leadership",
  },
  {
    id: 5,
    title: "Sustainable Business Practices for the Modern Enterprise",
    excerpt:
      "Learn how implementing sustainable practices can benefit your business while contributing to environmental conservation.",
    date: "September 12, 2023",
    image: "/placeholder.svg?height=300&width=500",
    category: "Sustainability",
  },
  {
    id: 6,
    title: "Navigating Global Market Uncertainties",
    excerpt:
      "Strategies for businesses to thrive amidst economic fluctuations and geopolitical challenges in global markets.",
    date: "October 5, 2023",
    image: "/placeholder.svg?height=300&width=500",
    category: "Global Markets",
  },
  {
    id: 7,
    title: "The Power of Data-Driven Decision Making",
    excerpt:
      "How leveraging data analytics can transform your business operations and lead to more informed strategic decisions.",
    date: "November 18, 2023",
    image: "/placeholder.svg?height=300&width=500",
    category: "Data Analytics",
  },
  {
    id: 8,
    title: "Building a Customer-Centric Organization",
    excerpt: "Frameworks and approaches to place customers at the center of your business strategy and operations.",
    date: "December 7, 2023",
    image: "/placeholder.svg?height=300&width=500",
    category: "Customer Experience",
  },
  {
    id: 9,
    title: "Emerging Trends in Financial Technology",
    excerpt:
      "An overview of the latest fintech innovations and how they're reshaping the financial services landscape.",
    date: "January 15, 2024",
    image: "/placeholder.svg?height=300&width=500",
    category: "Finance",
  },
]

const categories = [
  "All Categories",
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

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Our Blog</h1>
            <p className="max-w-3xl mx-auto text-lg text-dark/80">
              Insights, strategies, and industry perspectives to help your business thrive.
            </p>
            <Link href="/" className="inline-flex items-center mt-6 text-secondary hover:text-secondary/80">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 space-y-4 md:space-y-0">
            <div className="relative w-full md:w-64">
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setCurrentPage(1)
                }}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-dark/50" />
            </div>
            <div className="w-full md:w-auto">
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Blog Posts */}
          {currentPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post) => (
                <Card key={post.id} className="border-0 shadow-lg overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <Image
                      width={100}
                      height={100}
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-dark/60 mb-2">
                      <span className="bg-primary/30 text-dark/70 px-2 py-1 rounded text-xs">{post.category}</span>
                      <span className="mx-2">•</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2">{post.title}</h3>
                    <p className="text-dark/70 mb-4">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="link" className="p-0 text-secondary hover:text-secondary/80">
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-dark mb-2">No posts found</h3>
              <p className="text-dark/70">Try adjusting your search or filter criteria.</p>
            </div>
          )}

          {/* Pagination */}
          {filteredPosts.length > postsPerPage && (
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="border-dark/20 text-dark hover:bg-dark/5"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <Button
                    key={index}
                    variant={currentPage === index + 1 ? "default" : "outline"}
                    onClick={() => setCurrentPage(index + 1)}
                    className={
                      currentPage === index + 1
                        ? "bg-secondary text-white hover:bg-secondary/90"
                        : "border-dark/20 text-dark hover:bg-dark/5"
                    }
                  >
                    {index + 1}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="border-dark/20 text-dark hover:bg-dark/5"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-dark">Subscribe to Our Newsletter</h2>
          <p className="max-w-2xl mx-auto text-dark/80 mb-8">
            Stay updated with our latest insights and industry news delivered directly to your inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <Input type="email" placeholder="Enter your email" className="flex-grow" />
            <Button className="bg-secondary hover:bg-secondary/90 text-white">Subscribe</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
