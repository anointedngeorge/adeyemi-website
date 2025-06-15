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
  title: "ADEYEMI APANPA & COMPANY./SENI NOMINEES",
  description: "ADEYEMI APANPA & COMPANY./SENI NOMINEES is a composite firm of Certified National Accountants, Management and Financial Consultants. The firm offers unique professional services to various organisations in Nigeria, including Commercial, non-commercial and Government establishments.",
  generator: 'Sharashell',
  icons: {
    icon: './img/logo_favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider  attribute="class" defaultTheme="light" enableSystem>
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
