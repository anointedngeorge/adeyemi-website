"use client"

import React, { useEffect, useState } from 'react'
import { AdminNavbar } from './AdminNavbar'
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';





export const PageLayout = ({children, router}: Readonly<{children: React.ReactNode, router:AppRouterInstance}>) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

    useEffect(() => {
        const token = globalThis.sessionStorage.getItem('api_key_token');
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
        
    }, [setIsAuthenticated]);

    const handleLogout = () => {
      localStorage.removeItem("adminAuth")
      router.push("/admin/login")
    }

// printout message if  is not authenticated
  if (!isAuthenticated) {
    return <div>Click Homepage to login</div>
  }


  return (
    <div className="min-h-screen bg-gray-50">
          <AdminNavbar handleLogout={handleLogout} />
          {children}
    </div>
  )
}
