"use client"

import { CONTACT_SETUP } from '@/components/configs'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
// import { useRouter } from 'next/router'
import React from 'react'


interface Interface { 
        handleLogout: ()=>void
    }



export const AdminNavbar = ({handleLogout}:Interface) => {
    
    
  return (
    <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-dark"> {CONTACT_SETUP?.title} </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" target="_blank">
                <Button variant="outline" size="sm">
                  View Website
                </Button>
              </Link>
              <Button onClick={handleLogout} variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>
  )
}
