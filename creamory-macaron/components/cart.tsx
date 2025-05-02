"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

type CartItem = {
  id: string
  name: string
  price: number
  img: string
  quantity: number
}

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // DOM Elements
    const addToCartButtons = document.querySelectorAll(".add-to-cart")

    // Add to cart
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const target = e.currentTarget as HTMLElement
        const productCard = target.closest("[data-id]") as HTMLElement

        if (productCard) {
          const id = productCard.getAttribute("data-id") || ""
          const name = productCard.getAttribute("data-name") || ""
          const price = Number.parseInt(productCard.getAttribute("data-price") || "0")
          const img = productCard.querySelector("img")?.src || ""

          // Check if product is already in cart
          const existingItem = cart.find((item) => item.id === id)

          if (existingItem) {
            setCart(cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)))
          } else {
            setCart([
              ...cart,
              {
                id,
                name,
                price,
                img,
                quantity: 1,
              },
            ])
          }

          setIsOpen(true)

          // Animation effect
          target.style.transform = "scale(1.3)"
          setTimeout(() => {
            target.style.transform = "scale(1)"
          }, 200)
        }
      })
    })
  }, [cart])

  const increaseQuantity = (id: string) => {
    setCart(cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)))
  }

  const decreaseQuantity = (id: string) => {
    const item = cart.find((item) => item.id === id)

    if (item && item.quantity > 1) {
      setCart(cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item)))
    } else {
      setCart(cart.filter((item) => item.id !== id))
    }
  }

  const checkout = () => {
    if (cart.length === 0) return

    alert("感謝您的訂購！我們將盡快處理您的訂單。")
    setCart([])
    setIsOpen(false)
  }

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <>
      {/* Cart Icon */}
      <div className="cart-icon" onClick={() => setIsOpen(true)}>
        🛒<span className="cart-count">{totalItems}</span>
      </div>

      {/* Cart Overlay */}
      <div className={`cart-overlay ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(false)}></div>

      {/* Cart Container */}
      <div className={`cart-container ${isOpen ? "active" : ""}`}>
        <div className="cart-header">
          <h3>購物車</h3>
          <button className="close-cart" onClick={() => setIsOpen(false)}>
            ✕
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="text-center text-[#7d6b5d]">您的購物車是空的</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-img">
                  <Image
                    src={item.img || "/placeholder.svg"}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">NT$ {item.price}</div>
                  <div className="cart-item-quantity">
                    <button className="quantity-btn decrease" onClick={() => decreaseQuantity(item.id)}>
                      -
                    </button>
                    <span className="item-quantity">{item.quantity}</span>
                    <button className="quantity-btn increase" onClick={() => increaseQuantity(item.id)}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-total">
          <span>總計:</span>
          <span>NT$ {totalPrice}</span>
        </div>

        <button className="checkout-btn" onClick={checkout} disabled={cart.length === 0}>
          結帳
        </button>
      </div>
    </>
  )
}
