"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function FruitCakeCard() {
  return (
    <Card className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden max-w-sm mx-auto">
      <div className="relative w-full h-64">
        <Image src="/images/fruit-cake.png" alt="繽紛水果蛋糕" fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-rose-400 mb-2">繽紛水果蛋糕</h3>
        <p className="text-sm text-gray-600 mb-4">
          柔軟的香草蛋糕胚，配上豐富的季節水果與清爽的鮮奶油，色彩繽紛，美味健康。
        </p>
        <div className="text-base font-bold text-rose-400">NT$ 880 起</div>
      </div>
    </Card>
  )
}
