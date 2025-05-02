"use client"

import { useState } from "react"

const faqs = [
  {
    question: "需要提前多久預訂？",
    answer: "建議至少提前3-5個工作天，節日請提早7-10天。",
  },
  {
    question: "配送範圍和費用？",
    answer: "提供大台北地區配送，依距離NT$150-300，可自取免運費。",
  },
]

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-rose-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-rose-400 mb-10">常見問題</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <button
                onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                className="w-full text-left flex justify-between items-center"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                <span className="text-rose-400 text-2xl transition-transform duration-200">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div id={`faq-answer-${index}`} className="mt-4 text-gray-600 animate-accordion-down">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
