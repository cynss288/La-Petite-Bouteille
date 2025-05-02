import Image from "next/image"

type Testimonial = {
  text: string
  author: string
  role: string
  image: string
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      text: "女兒參加了繽紛水果布丁製作的課程，她非常喜歡！老師們很有耐心，教室環境也很乾淨明亮。最重要的是看到孩子完成作品後的驕傲表情，那份成就感對孩子來說真的很寶貴。",
      author: "陳媽媽",
      role: "Lily 的媽媽 (6歲)",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      text: "兒子一直對烘焙有興趣，在 Creamory 的課程中終於有機會親手做蛋糕。老師不只教技巧，還融入許多科學知識，讓孩子在遊戲中學習。四寸蛋糕的成品非常專業，連大人都驚艷！",
      author: "林爸爸",
      role: "小宇 的爸爸 (9歲)",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      text: "兩個孩子一起參加了造型餅乾課程，課程設計很巧妙，能同時照顧到不同年齡層的需求。老師會依據孩子的能力給予適當協助，讓每個孩子都能順利完成作品。環境安全，教學內容充實，非常推薦！",
      author: "王媽媽",
      role: "小芬 (5歲) 和小豪 (8歲) 的媽媽",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e77c7c] mb-4">家長評價</h2>
          <p className="text-lg max-w-2xl mx-auto">聽聽其他家長對我們課程的真實感受</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md relative">
              <div className="mb-6 text-gray-600 italic relative z-10">"{testimonial.text}"</div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[#4a3e3e]">{testimonial.author}</h4>
                  <p className="text-sm text-[#e77c7c]">{testimonial.role}</p>
                </div>
              </div>

              <div className="absolute top-4 right-6 text-[#fce8e8] text-6xl font-serif z-0">"</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
