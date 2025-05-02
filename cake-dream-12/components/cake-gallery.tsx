"use client"

import Image from "next/image"

const cakes = [
  { name: "經典巧克力蛋糕", price: "NT$ 880 起", image: "/images/chocolate-cake.png" },
  { name: "草莓鮮奶油蛋糕", price: "NT$ 850 起", image: "/images/strawberry-cake.png" },
  { name: "繽紛水果蛋糕", price: "NT$ 880 起", image: "/images/fruit-cake.png" },
]

export default function CakeGallery() {
  return (
    <section className="py-16 bg-rose-50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-rose-400 mb-10">熱門蛋糕款式</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cakes.map((cake, index) => (
            <div key={index} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <div className="relative w-full h-64">
                <Image src={cake.image || "/placeholder.svg"} alt={cake.name} fill className="object-cover" />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-rose-400 mb-2">{cake.name}</h3>
                <p className="text-sm text-gray-600">{cake.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
