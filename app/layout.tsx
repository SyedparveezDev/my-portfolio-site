import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ToastProvider } from "@/components/ui/toast-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Syed Parveez Afham - Full Stack Developer",
  description:
    "Portfolio of Syed Parveez Afham, a passionate full-stack developer creating digital solutions that matter.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  )
}
