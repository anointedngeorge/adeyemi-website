import { MapPin, Phone, Mail } from "lucide-react"

const offices = [
  {
    name: "HEAD OFFICE",
    address: "Shakir Plaza, Area 11 Abuja",
    phone: "080 3435 2515, 070 8522 2227",
    email: "apanpaservice@gmail.com",
  },
  {
    name: "BENUE OFFICE",
    address: "House No. 4, Adeyemi Apanpa House Off Inikpi Street. High Level P. O. Box 2175, Makurdi",
    phone: "070 3308 3691",
  },
  {
    name: "LAFIA OFFICE",
    address: "No. 103 Makurdi Road, Lafia",
    phone: "070 3240 9695",
  },
  {
    name: "KANO OFFICE",
    address: "12 Civic Centre Road, Besides Aminu Dabo School of Health Kano State.",
    phone: "070 6099 7477",
  },
  {
    name: "JOS OFFICE",
    address: "1st Floor Haga Plaza by Gada Biu Overhead Bridge",
    phone: "070 3308 3691",
  },
  {
    name: "LOKOJA OFFICE",
    address: "317, Ibrahim Taiwo Road, Opp. SUBEB Lokoja",
    phone: "080 6382 3509",
  },
]

export default function OfficeLocations() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500">Our Offices</h2>
          <div className="w-16 h-1 bg-blue-900 mx-auto mt-4 mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-dark/80">
            Visit one of our offices across Nigeria to meet with our team of professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-primary/10 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-dark border-b border-dark/10 pb-2 mb-4">{office.name}</h3>

              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-dark/80">{office.address}</p>
                </div>

                {office.phone && (
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                    <p className="text-dark/80">{office.phone}</p>
                  </div>
                )}

                {office.email && (
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-dark/80 hover:text-secondary">
                      {office.email}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
