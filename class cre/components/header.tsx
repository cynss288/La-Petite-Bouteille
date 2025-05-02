"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useCart } from "./cart-provider"
import { ShoppingCart, Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { setIsCartOpen, totalItems } = useCart()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", label: "首頁" },
    { href: "#about", label: "關於我們" },
    { href: "#courses", label: "課程介紹" },
    { href: "#process", label: "上課流程" },
    { href: "#testimonials", label: "家長評價" },
    { href: "#faq", label: "常見問題" },
    { href: "#contact", label: "聯絡我們" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold text-[#e77c7c]">
            Creamory
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-medium text-[#4a3e3e] hover:text-[#e77c7c] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Cart Icon */}
            <button
              id="cartIcon"
              className="ml-6 relative text-[#4a3e3e] hover:text-[#e77c7c] transition-colors"
              onClick={() => setIsCartOpen(true)}
              aria-label="購物車"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#e77c7c] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden">
            {/* Mobile Cart Icon */}
            <button
              id="cartIconMobile"
              className="mr-4 relative text-[#4a3e3e] hover:text-[#e77c7c] transition-colors"
              onClick={() => setIsCartOpen(true)}
              aria-label="購物車"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#e77c7c] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="text-[#4a3e3e]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "關閉選單" : "開啟選單"}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block font-medium text-[#4a3e3e] hover:text-[#e77c7c] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
