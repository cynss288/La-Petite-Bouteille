"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    alert("感謝您的訊息！我們會盡快回覆您。")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "教室地址",
      details: ["台北市中山區烘焙街123號2樓"],
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "聯絡電話",
      details: ["02-1234-5678"],
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "電子郵件",
      details: ["kids@creamory.com"],
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "營業時間",
      details: ["週一至週五：14:00 - 20:00", "週六至週日：10:00 - 18:00"],
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e77c7c] mb-4">聯絡我們</h2>
          <p className="text-lg max-w-2xl mx-auto">有任何問題或特殊需求，歡迎隨時與我們聯絡</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#fce8e8] flex items-center justify-center text-[#e77c7c] mr-4 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-[#e77c7c] mb-6">傳送訊息</h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e77c7c]"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  電子郵件
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e77c7c]"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  聯絡電話
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e77c7c]"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  主旨
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e77c7c]"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  訊息內容
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e77c7c]"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#e77c7c] hover:bg-[#d56b6b] text-white font-semibold rounded-md transition-colors"
              >
                送出訊息
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
