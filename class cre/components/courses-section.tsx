"use client"

import { useState } from "react"
import Image from "next/image"
import { useCart } from "./cart-provider"
import { Clock, Calendar, ShoppingCart, Check } from "lucide-react"

type Course = {
  id: string
  title: string
  description: string
  price: number
  duration: string
  schedule: string
  ageRange: string
  image: string
  category: string[]
  availableSeats: number
  totalSeats: number
}

export default function CoursesSection() {
  const [activeFilter, setActiveFilter] = useState("all")
  const { addToCart, cartItems } = useCart()

  const courses: Course[] = [
    {
      id: "1",
      title: "日式香草布丁",
      description: "學習製作柔滑的手工布丁，馬達加斯加香草莢與雞蛋奶香的完美結合。適合初次接觸烘焙的小朋友。",
      price: 980,
      duration: "2小時",
      schedule: "週六 10:00-12:00",
      ageRange: "4-8歲適合",
      image: "/images/vanilla-pudding.png",
      category: ["4-6", "weekend"],
      availableSeats: 7,
      totalSeats: 8,
    },
    {
      id: "2",
      title: "四寸海綿蛋糕裝飾",
      description:
        "學習製作鬆軟可口的經典海綿蛋糕，並運用鮮奶油、水果等材料進行創意裝飾。孩子將帶回一個完整的四寸蛋糕，與家人分享自己的成果。",
      price: 1280,
      duration: "2.5小時",
      schedule: "週日 14:00-16:30",
      ageRange: "7-12歲適合",
      image: "/images/sponge-cake.png",
      category: ["7-12", "weekend"],
      availableSeats: 5,
      totalSeats: 8,
    },
    {
      id: "3",
      title: "迷你蛋糕捲",
      description:
        "學習製作蓬鬆細緻的蛋糕皮，以及捲蛋糕的技巧。孩子們可以選擇不同口味的內餡，如草莓、巧克力或抹茶，製作兩款迷你蛋糕捲帶回家。",
      price: 1380,
      duration: "3小時",
      schedule: "週六 14:00-17:00",
      ageRange: "7-12歲適合",
      image: "/images/cake-roll.png",
      category: ["7-12", "weekend"],
      availableSeats: 2,
      totalSeats: 8,
    },
    {
      id: "4",
      title: "動物造型餅乾",
      description:
        "利用可愛的餅乾模具，製作各種動物造型餅乾，並學習使用糖霜進行裝飾。這堂課程適合各年齡層的孩子，將帶回滿滿一盒自己裝飾的特色餅乾。",
      price: 1080,
      duration: "2.5小時",
      schedule: "週日 10:00-12:30",
      ageRange: "4-12歲適合",
      image: "/images/animal-cookies.png",
      category: ["4-6", "7-12", "weekend"],
      availableSeats: 6,
      totalSeats: 8,
    },
  ]

  const filters = [
    { id: "all", label: "全部課程" },
    { id: "4-6", label: "4-6歲適合" },
    { id: "7-12", label: "7-12歲適合" },
    { id: "weekend", label: "週末課程" },
  ]

  const filteredCourses =
    activeFilter === "all" ? courses : courses.filter((course) => course.category.includes(activeFilter))

  const isInCart = (id: string) => {
    return cartItems.some((item) => item.id === id)
  }

  const handleAddToCart = (course: Course) => {
    addToCart({
      id: course.id,
      name: course.title,
      price: course.price,
      image: course.image,
    })
  }

  return (
    <section id="courses" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e77c7c] mb-4">烘焙體驗課程</h2>
          <p className="text-lg max-w-2xl mx-auto">特別為小朋友設計的一日體驗課程，輕鬆有趣地學習烘焙基礎</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`px-5 py-2 rounded-full border-2 border-[#e77c7c] font-medium transition-colors ${
                activeFilter === filter.id
                  ? "bg-[#e77c7c] text-white"
                  : "bg-transparent text-[#e77c7c] hover:bg-[#e77c7c] hover:text-white"
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-8px]"
            >
              <div className="relative h-48">
                <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                <div className="absolute top-3 right-3 bg-[#e77c7c]/80 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {course.ageRange}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-[#4a3e3e] mb-2">{course.title}</h3>

                <div className="flex justify-between text-sm text-gray-500 mb-3">
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" /> {course.duration}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" /> {course.schedule}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">{course.description}</p>

                <div className="font-bold text-[#e77c7c] text-xl mb-4">NT$ {course.price}</div>

                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm ${
                      course.availableSeats === 0
                        ? "text-red-500"
                        : course.availableSeats <= 2
                          ? "text-orange-500"
                          : "text-gray-500"
                    }`}
                  >
                    剩餘名額：{course.availableSeats}/{course.totalSeats}
                  </span>

                  {course.availableSeats > 0 ? (
                    <button
                      onClick={() => handleAddToCart(course)}
                      disabled={isInCart(course.id)}
                      className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                        isInCart(course.id) ? "bg-gray-700 text-white" : "bg-[#e77c7c] text-white hover:bg-[#d56b6b]"
                      }`}
                    >
                      {isInCart(course.id) ? (
                        <>
                          <Check className="h-4 w-4" /> 已加入購物車
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="h-4 w-4" /> 加入購物車
                        </>
                      )}
                    </button>
                  ) : (
                    <button
                      disabled
                      className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold bg-gray-300 text-gray-600 cursor-not-allowed"
                    >
                      名額已滿
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
