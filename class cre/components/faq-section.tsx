"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

type FAQ = {
  question: string
  answer: string
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQ[] = [
    {
      question: "需要有烘焙經驗嗎？",
      answer:
        "不需要！我們的課程專為沒有經驗的小朋友設計，從基礎開始教起，老師會全程指導，確保每位孩子都能順利完成作品。",
    },
    {
      question: "課程適合幾歲的孩子參加？",
      answer:
        "我們的課程主要針對 4-12 歲的孩子設計。每個課程都會標明適合的年齡層，部分簡單的課程如布丁製作適合年齡較小的孩子，而較複雜的課程如蛋糕捲則建議 7 歲以上參加。",
    },
    {
      question: "家長需要陪同上課嗎？",
      answer:
        "對於 4-6 歲的孩子，建議家長陪同參與，可以在旁邊協助。7 歲以上的孩子則可以獨立參加課程，家長可以在休息區等候或選擇離開後再回來接孩子。",
    },
    {
      question: "課程費用包含哪些內容？",
      answer:
        "課程費用包含所有烘焙材料、設備使用、圍裙租借、成品包裝以及專業教師指導。孩子將帶回當天製作的所有成品，與家人分享。",
    },
    {
      question: "如何預約課程？",
      answer:
        "您可以直接在本網站選擇喜歡的課程加入購物車並完成付款預約。也可以透過電話或 email 與我們聯繫，我們會協助您安排適合的課程時間。",
    },
    {
      question: "如果當天無法參加，可以退費或改期嗎？",
      answer:
        "課程開始前 3 天取消可全額退費，前 2 天取消可退 50% 費用，前 1 天及當天取消恕不退費。若需改期，請至少在課程前 2 天通知我們，我們會盡量協助您安排其他時段。",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-[#fcf2f2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e77c7c] mb-4">常見問題</h2>
          <p className="text-lg max-w-2xl mx-auto">解答關於兒童烘焙課程的常見疑問</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full text-left p-5 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-[#4a3e3e]">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-[#e77c7c]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#e77c7c]" />
                )}
              </button>

              <div className={`px-5 pb-5 transition-all duration-300 ${openIndex === index ? "block" : "hidden"}`}>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
