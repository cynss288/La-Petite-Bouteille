import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_TC } from "next/font/google"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CartProvider from "@/components/cart-provider"

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-tc",
})

export const metadata: Metadata = {
  title: "Creamory - 兒童烘焙體驗課程",
  description: "讓孩子在烘焙中學習、創造與成長，體驗手作甜點的無窮樂趣！",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <head />
      <body className={`${notoSansTC.variable} font-sans bg-[#fff9f9] text-[#4a3e3e]`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'