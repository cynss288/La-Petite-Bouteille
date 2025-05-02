import Image from "next/image"

export type Product = {
  id: string
  name: string
  description: string
  price: number
  image: string
}

const products: Product[] = [
  {
    id: "1",
    name: "經典草莓",
    description:
      "以新鮮草莓果泥製成的馬卡龍，外殼酥脆，內餡濃郁。每一口都能感受到草莓的自然酸甜，搭配細膩的杏仁餅皮，帶來完美的口感平衡。適合喜愛經典風味的您。",
    price: 60,
    image: "/pastel-strawberry-macarons.png",
  },
  {
    id: "2",
    name: "香濃巧克力",
    description:
      "精選比利時高級可可豆研磨製成，濃郁的巧克力風味在口中緩緩融化。外殼帶有微苦的可可香，內餡則是絲滑的巧克力甘納許，層次豐富，回味無窮。巧克力愛好者的首選。",
    price: 65,
    image: "/rich-chocolate-macarons.png",
  },
  {
    id: "3",
    name: "抹茶紅豆",
    description:
      "使用日本京都進口的頂級抹茶粉，混合北海道紅豆餡製成。抹茶的清香與紅豆的甜蜜完美融合，呈現出東方特有的和諧風味。每一口都能感受到抹茶的微苦與紅豆的綿密。",
    price: 70,
    image: "/matcha-azuki-macaron.png",
  },
  {
    id: "4",
    name: "法式焦糖",
    description:
      "採用傳統法式焦糖製作，經過精心熬煮的焦糖醬，帶有濃郁的奶香與焦糖風味。表面灑上少許法國海鹽，增添層次感，甜中帶鹹，讓人回味無窮。焦糖愛好者不容錯過的極致享受。",
    price: 65,
    image: "/caramel-macaron.png",
  },
  {
    id: "5",
    name: "覆盆子",
    description:
      "選用當季新鮮覆盆子製成，保留了水果的天然風味與營養。酸甜可口的覆盆子醬內餡，搭配粉紅色的杏仁餅皮，每一口都充滿了莓果的香氣與微酸的果香。適合喜愛清新水果風味的您。",
    price: 60,
    image: "/raspberry-macaron.png",
  },
  {
    id: "6",
    name: "清新檸檬",
    description:
      "使用西西里島有機檸檬製成，檸檬皮與果肉的完美結合，帶來清新酸甜的口感。明亮的黃色外表下，是充滿活力的檸檬慕斯內餡，每一口都能感受到地中海陽光的味道。夏日消暑的絕佳選擇。",
    price: 60,
    image: "/lemon-macaron.png",
  },
]

export default function ProductsSection() {
  return (
    <section id="products" className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#a38b7b]">我們的馬卡龍</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-2"
              data-id={product.id}
              data-name={product.name}
              data-price={product.price}
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-[#7d6b5d] mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <div className="text-lg font-bold text-[#b79e8e]">NT$ {product.price}</div>
                  <button className="w-10 h-10 bg-[#b79e8e] text-white rounded-full flex items-center justify-center hover:bg-[#a38b7b] transition-transform hover:scale-105 add-to-cart">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
