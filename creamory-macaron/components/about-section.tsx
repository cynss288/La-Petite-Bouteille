import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#efe4d5] py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#a38b7b]">關於 Creamory</h2>
            <p className="mb-4">
              Creamory
              是一家專注於製作高品質馬卡龍的甜點店。我們堅持選用最優質的食材，每一個馬卡龍都由經驗豐富的甜點師傅親手製作，保證口感與風味的完美結合。
            </p>
            <p className="mb-4">
              我們相信，一個完美的馬卡龍應該具有酥脆的外殼、濕潤的內部和豐富的餡料。每一批馬卡龍都經過嚴格的品質控制，確保送到您手中的是最完美的甜點。
            </p>
            <p>無論是經典口味還是創新組合，Creamory 的馬卡龍都將帶給您非凡的味覺體驗。</p>
          </div>
          <div className="flex-1 rounded-lg overflow-hidden shadow-xl order-first md:order-last">
            <Image
              src="/elegant-macaron-assortment.png"
              alt="Creamory 精緻馬卡龍"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
