export default function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: "相見歡與安全須知",
      description: "課程開始前，老師會向小朋友介紹今天的製作內容，並說明廚房安全注意事項，讓孩子在安全的環境中學習。",
    },
    {
      number: 2,
      title: "認識食材與工具",
      description: "老師會介紹今天要使用的食材和烘焙工具，讓孩子了解每種材料的特性和用途，培養觀察力和認知能力。",
    },
    {
      number: 3,
      title: "動手實作與指導",
      description:
        "在老師的引導下，孩子們開始動手操作，從攪拌、塑形到烘烤，每個環節都有專業老師從旁指導，確保成功完成作品。",
    },
    {
      number: 4,
      title: "創意裝飾與完成",
      description: "烘烤完成後，孩子可以發揮創意進行裝飾，使用不同的配料和裝飾工具，讓作品更加豐富多彩。",
    },
    {
      number: 5,
      title: "包裝帶回與分享",
      description:
        "完成的作品會精美包裝，讓孩子可以帶回家與家人分享成果。我們鼓勵孩子分享烘焙過程，增強表達能力和成就感。",
    },
  ]

  return (
    <section id="process" className="py-20 bg-[#fcf2f2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e77c7c] mb-4">上課流程</h2>
          <p className="text-lg max-w-2xl mx-auto">我們的課程設計簡單有趣，讓孩子輕鬆學習烘焙基礎</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-[#fce8e8] text-[#e77c7c] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#4a3e3e]">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
