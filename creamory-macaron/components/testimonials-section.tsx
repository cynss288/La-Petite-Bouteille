export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#a38b7b]">顧客評價</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic mb-4 text-[#5c4b3c]">
              "Creamory 的馬卡龍絕對是我吃過最好吃的！外殼酥脆，內部濕潤，餡料豐富。每次經過都會忍不住買幾個。"
            </p>
            <p className="font-semibold text-[#b79e8e]">— 林小姐</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic mb-4 text-[#5c4b3c]">
              "朋友介紹我來這家店，自從嚐過他們的抹茶紅豆馬卡龍後，我就愛上了這個口味。每週都要來買一次！"
            </p>
            <p className="font-semibold text-[#b79e8e]">— 張先生</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic mb-4 text-[#5c4b3c]">
              "我很挑剔甜點，但不得不說，Creamory 的馬卡龍品質確實很高。而且店員的服務態度也非常好，值得推薦。"
            </p>
            <p className="font-semibold text-[#b79e8e]">— 王小姐</p>
          </div>
        </div>
      </div>
    </section>
  )
}
