"use client"

import { useState } from "react"
import { Building, Briefcase, Users, CheckCircle } from "lucide-react"

// Client data organized by category
const clientCategories = [
  {
    id: "federal",
    name: "Federal Government",
    icon: <Building className="h-6 w-6" />,
    clients: [
      "Federal Medical Centre, Keffi",
      "Lower Benue River Basin Development Authority, Makurdi",
      "National Agricultural Foundation of Nigeria (NAFN)",
      "Federal Medical Centre, Makurdi",
      "Hospital Management Board",
      "Local Government Pension Board",
    ],
  },
  {
    id: "benue",
    name: "Benue State Government",
    icon: <Building className="h-6 w-6" />,
    clients: [
      "Ushongo Local Government Area",
      "Vandeikya Local Government Area",
      "Gwer Local Government Area",
      "Gwer-west Local Government Area",
      "Konshisha Local Government Area",
      "Scholarship Board",
      "Benue State Polytechnic",
      "College of Education, Oju",
      "University of Mkar, Mkar Gboko",
    ],
  },
  {
    id: "taraba",
    name: "Taraba State Government",
    icon: <Building className="h-6 w-6" />,
    clients: [
      "Taraba State Sports Council",
      "Taraba State Tractor Hiring Agency",
      "Taraba State Transport Corporations",
      "Teakon Nigeria Limited",
    ],
  },
  {
    id: "kogi",
    name: "Kogi State Government",
    icon: <Building className="h-6 w-6" />,
    clients: [
      "Bassa Local Government Education Authority",
      "Kogi Local Government Education Authority",
      "Town Planning and Development Authority",
      "Broadcasting Corporation",
      "State Primary Education Board",
      "Ankpa Local Government Education Authority",
      "Kogi Local Government Education Authority",
      "Basumoh Nigeria Limited",
      "J.B. Motel",
      "Imovic Nigeria Limited",
      "Rahma Oil Nigeria Limited",
      "Mamad Nigeria Limited",
      "Iyabu Nigeria Limited",
      "Jayus Nigeria Limited",
      "Isiaka Alfa Nigeria Limited",
    ],
  },
  {
    id: "nasarawa",
    name: "Nasarawa State Government",
    icon: <Building className="h-6 w-6" />,
    clients: [
      "State Government Account",
      "State Pension Board",
      "State/ Local Government Joint Account",
      "Local Government Education Authorities",
      "Local Government Councils",
    ],
  },
  {
    id: "private",
    name: "Private Companies",
    icon: <Briefcase className="h-6 w-6" />,
    clients: [
      "Global Spirit Nigeria Limited",
      "Jinson Gases Nigeria Limited",
      "Tilley-Gyado Group of Companies",
      "Duvert Nigeria Limited",
      "Jonny Foto Industries Limited",
      "Golden Oil Nigeria Limited",
      "Oriya Farms Limited",
      "Otukpo Micro Finance Bank Limited",
      "Okpoga Micro Finance Bank Limited",
      "Vibrant Insurance Brokers Limited",
      "Bencos Services Nigeria Limited",
      "Freedom Oil Nigeria Limited",
    ],
  },
]

export default function OurClients({show_heading=true}) {
  const [activeCategory, setActiveCategory] = useState("federal")

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {show_heading && (<div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500">Our Clients</h2>
          <div className="w-16 h-1 bg-blue-900  mx-auto mt-4 mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-dark/80">
            We are proud to have served a diverse range of clients across government and private sectors.
          </p>
        </div>)}

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center overflow-auto gap-2 mb-12">
          {clientCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full flex items-center transition-colors ${
                activeCategory === category.id
                  ? "bg-secondary text-white"
                  : "bg-primary/20 text-dark hover:bg-primary/40"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Client Lists */}
        <div className="bg-primary/10 rounded-lg p-8 shadow-md">
          {clientCategories.map((category) => (
            <div key={category.id} className={`${activeCategory === category.id ? "block" : "hidden"}`}>
              <div className="flex items-center mb-6">
                <div className="bg-secondary/10 p-3 rounded-full mr-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-dark">{category.name} Clients</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.clients.map((client, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-dark/80">{client}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-dark/70 italic">
                  These are just some of our valued clients in the {category.name.toLowerCase()} sector.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Client Counter */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center bg-primary/20 px-6 py-3 rounded-full">
            <Users className="h-6 w-6 text-secondary mr-2" />
            <span className="text-xl font-bold text-dark">
              {clientCategories.reduce((total, category) => total + category.clients.length, 0)}+ Satisfied Clients
            </span>
          </div>
          <p className="mt-4 text-dark/70">
            Join our growing list of satisfied clients and experience the difference our services can make for your
            organization.
          </p>
        </div>
      </div>
    </section>
  )
}
