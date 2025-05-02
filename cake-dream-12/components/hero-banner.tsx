"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden bg-rose-50">
      <Image src="/images/hero-banner.png" alt="Creamory 首頁橫幅" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">打造專屬於您的夢幻蛋糕</h1>
          <p className="mt-4 text-lg text-white">
            由專業糕點師傅親手製作，使用頂級食材，為您的特別時刻增添甜蜜與驚喜。
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-rose-400 hover:bg-rose-500 text-white px-8 py-6 rounded-full font-semibold"
          >
            <a href="#contact">立即訂製</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
