"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function StrawberryCakeCard() {
  return (
    <Card className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden max-w-sm mx-auto">
      <div className="relative w-full h-64">
        <Image src="/images/strawberry-cake.png" alt="草莓鮮奶油蛋糕" fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-rose-400 mb-2">草莓鮮奶油蛋糕</h3>
        <p className="text-sm text-gray-600 mb-4">
          輕盈的海綿蛋糕層與香滑鮮奶油，鋪滿新鮮草莓，清爽不膩口，適合各種慶祝場合。
        </p>
        <div className="text-base font-bold text-rose-400">NT$ 850 起</div>
      </div>
    </Card>
  )
}
