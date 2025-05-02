"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function CaramelCakeCard() {
  return (
    <Card className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden max-w-sm mx-auto">
      <div className="relative w-full h-64">
        <Image src="/images/caramel-cake.png" alt="焦糖海鹽蛋糕" fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-rose-400 mb-2">焦糖海鹽蛋糕</h3>
        <p className="text-sm text-gray-600 mb-4">
          香濃焦糖奶油與精緻海鹽的完美結合，甜中帶鹹，層次豐富，是近年來最受歡迎的創新口味。
        </p>
        <div className="text-base font-bold text-rose-400">NT$ 900 起</div>
      </div>
    </Card>
  )
}
