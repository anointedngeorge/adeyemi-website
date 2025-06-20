"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
// import Image from "next/image"
import Logo from "./logo"
import { NAVIGATION } from "./configs"

const navigation = NAVIGATION


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between ">
          <div className="flex items-center">
            <Link href="/" className=" flex-shrink-0 flex items-center">
              {/* <span className="text-xl font-bold text-dark">CorpVision</span> */}
                <Logo classname="lg:w-36 lg:h-30 w-20  sm:w-28 sm:h-24" />
            </Link>
          </div>  
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((nav, index) => (
                <Link key={`nav_${index}`} href={`${nav.url}`} className="text-dark hover:text-secondary">
                  {nav?.name}
              </Link>
            ))}

            
            
            <Link href="/contact">
              <Button className="bg-secondary hover:bg-secondary/90 text-white">Contact Us</Button>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-dark hover:text-secondary focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            

            {navigation.map((nav, index) => (
                <Link key={`mobile-key-${index}`} href={`/${nav.url}`} className="block px-3 py-2 text-dark hover:text-secondary" onClick={toggleMenu}>
                {nav.name}
              </Link>
              ))}
            
            <Link href="/contact" className="block px-3 py-2" onClick={toggleMenu}>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">Contact Us</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
