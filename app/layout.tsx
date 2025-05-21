import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import TopMenu from "@/components/top-menu"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LoadingEffect from "@/components/loading-effect"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CorpVision - Innovative Business Solutions",
  description: "Professional corporate website offering innovative business solutions and strategic consulting.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LoadingEffect />
          <TopMenu />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
