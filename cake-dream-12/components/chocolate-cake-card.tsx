"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function ChocolateCakeCard() {
  return (
    <Card className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden max-w-sm mx-auto">
      <div className="relative w-full h-64">
        <Image src="/images/chocolate-cake.png" alt="經典巧克力蛋糕" fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-rose-400 mb-2">經典巧克力蛋糕</h3>
        <p className="text-sm text-gray-600 mb-4">
          使用比利時黑巧克力製作，口感濃郁且微苦，搭配香滑巧克力甘納許，是巧克力愛好者的首選。
        </p>
        <div className="text-base font-bold text-rose-400">NT$ 880 起</div>
      </div>
    </Card>
  )
}
