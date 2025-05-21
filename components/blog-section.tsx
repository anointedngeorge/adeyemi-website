import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar, ArrowRight } from "lucide-react"
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
]

export default function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-500">Latest Insights</h2>
            <div className="w-16 h-1 bg-blue-900 mt-4"></div>
          </div>
          <Link href="/blog">
            <Button variant="outline" className="border-secondary text-dark hover:bg-secondary/10">
              View All Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
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
      </div>
    </section>
  )
}
