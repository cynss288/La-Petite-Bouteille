"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className={`text-2xl font-bold ${isScrolled || isMenuOpen ? "text-rose-400" : "text-white"}`}>
            Creamory
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-gray-800" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-800" : "text-white"}`} />
            )}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {["home", "features", "cakes", "how-it-works", "customize", "contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item}`}
                    className={`font-medium hover:text-rose-400 transition-colors ${
                      isScrolled ? "text-gray-800" : "text-white"
                    }`}
                  >
                    {item === "home"
                      ? "首頁"
                      : item === "features"
                        ? "特色"
                        : item === "cakes"
                          ? "蛋糕款式"
                          : item === "how-it-works"
                            ? "訂購流程"
                            : item === "customize"
                              ? "客製選項"
                              : "聯絡我們"}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              {["home", "features", "cakes", "how-it-works", "customize", "contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item}`}
                    className="block font-medium text-gray-800 hover:text-rose-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item === "home"
                      ? "首頁"
                      : item === "features"
                        ? "特色"
                        : item === "cakes"
                          ? "蛋糕款式"
                          : item === "how-it-works"
                            ? "訂購流程"
                            : item === "customize"
                              ? "客製選項"
                              : "聯絡我們"}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
