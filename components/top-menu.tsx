import { Facebook, Instagram, Linkedin, Twitter, Mail } from "lucide-react"

export default function TopMenu() {
  return (
    <div className="bg-dark text-white py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Mail className="h-4 w-4 mr-2 text-secondary" />
          <a href="mailto:support@gmail.com" className="text-sm hover:text-secondary transition-colors">
          apanpaservice@gmail.com
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-white/80 hover:text-secondary transition-colors">
            <Facebook className="h-4 w-4" />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="text-white/80 hover:text-secondary transition-colors">
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="text-white/80 hover:text-secondary transition-colors">
            <Instagram className="h-4 w-4" />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="text-white/80 hover:text-secondary transition-colors">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  )
}
