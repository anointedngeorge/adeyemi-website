import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  {
    name: "Adeyemi Apanpa FCNA, FCTI",
    role: "Principal  Partmer",
    bio: "MEMBERSHIP IN PROFESSIONAL SOCIETIES:  Association of   National Accountants of Nigeria (ANAN), FCNA, Chartered Institute of Taxation of   Nigeria (CITN), ACTI",
    image: "./img/p1.jpeg",
  },
  {
    name: "Elias Adejoh Otama FCNA, FCPA, ACTI",
    role: "Engagement Partner",
    bio: "MEMBERSHIP IN PROFESSIONAL SOCIETIES: Association of   National Accountants of Nigeria (ANAN), Chartered Institute of Taxation (CITN), CPA (England and Wales)",
    image: "./img/p2.jpeg",
  },
  {
    name: "Augustine Ranti Fagbola CNA, ACTI",
    role: "Audit Manager",
    bio: "MEMBERSHIP IN PROFESSIONAL SOCIETIES:  ANAN, ACTI",
    image: "./img/p1.jpeg",
  },
  {
    name: "Adedotun Abiola Apanpa CNA, CCrFA",
    role: "Chief Financial Adviser",
    bio: "MEMBERSHIP IN PROFESSIONAL SOCIETIES:  National Institute of Management (NIM)",
    image: "./img/p2.jpeg",
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500">Our Leadership Team</h2>
          <div className="w-16 h-1 bg-blue-900 mx-auto mt-4 mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-dark/80">
            {`Meet the experienced professionals who guide our company's vision and strategy.`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-0 shadow-lg overflow-hidden">
              <div className="aspect-square relative">
                <Image
                                  width={100}
                                  height={100}
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-dark">{member.name}</h3>
                <p className="text-dark/70 font-medium mt-1">{member.role}</p>
                <p className="text-dark/70 mt-3 text-sm">{member.bio}</p>
                <div className="flex justify-center mt-4 space-x-4">
                  <a href="#" className="text-dark/50 hover:text-secondary">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="#" className="text-dark/50 hover:text-secondary">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="#" className="text-dark/50 hover:text-secondary">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
