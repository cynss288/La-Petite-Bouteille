"use client"

import { useCart } from "./cart-provider"
import { X, Trash2, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect } from "react"

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, totalPrice } = useCart()

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isCartOpen && !target.closest("#cart") && !target.closest("#cartIcon")) {
        setIsCartOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isCartOpen, setIsCartOpen])

  // Prevent scrolling when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isCartOpen])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Cart Sidebar */}
      <div
        id="cart"
        className={`fixed top-0 right-0 w-full max-w-md h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out overflow-auto ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-bold text-[#4a3e3e]">購物車</h3>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-gray-500 hover:text-gray-700"
            aria-label="關閉購物車"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">購物車目前沒有商品</p>
              <Button onClick={() => setIsCartOpen(false)} className="bg-[#e77c7c] hover:bg-[#d56b6b]">
                繼續購物
              </Button>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="flex border-b pb-4 mb-4">
                  <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0 mr-4">
                    <Image
                      src={item.image || "/placeholder.svg?height=80&width=80"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-[#4a3e3e] mb-1">{item.name}</h4>
                    <p className="text-[#e77c7c] font-semibold mb-2">NT$ {item.price}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                          aria-label="減少數量"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="mx-3">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                          aria-label="增加數量"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500"
                        aria-label="移除商品"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-4 border-t mt-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-lg">總計</span>
              <span className="font-bold text-lg">NT$ {totalPrice}</span>
            </div>
            <Button className="w-full bg-[#e77c7c] hover:bg-[#d56b6b] py-3 text-lg">前往結帳</Button>
          </div>
        )}
      </div>
    </>
  )
}
