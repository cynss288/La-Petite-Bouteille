import { Button } from "@/components/ui/button"

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "蛋糕裝飾課程",
      description: "讓孩子們學習如何使用糖霜、巧克力和各種裝飾品來創作獨特的蛋糕設計。",
      price: 1200,
      duration: "2小時",
      ageRange: "6-12歲",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "餅乾製作課程",
      description: "從揉麵團到烘烤，孩子們將學習製作各種形狀和口味的餅乾，並享受裝飾的樂趣。",
      price: 980,
      duration: "1.5小時",
      ageRange: "5-10歲",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "麵包烘焙課程",
      description: "教導孩子們製作各種麵包的基本技巧，從簡單的麵包捲到創意造型麵包。",
      price: 1500,
      duration: "2.5小時",
      ageRange: "8-14歲",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "巧克力製作課程",
      description: "探索巧克力的世界，學習溫度控制和模具使用，創作出精美的巧克力作品。",
      price: 1350,
      duration: "2小時",
      ageRange: "7-12歲",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <main className="container mx-auto px-4 md:px-6 py-24 mt-16">
      <h1 className="text-3xl font-bold mb-2">課程介紹</h1>
      <p className="text-gray-600 mb-8">為孩子們提供有趣且富有教育意義的烘焙體驗</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-gray-200">
              <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-[#e77c7c]">{course.title}</h3>
                <span className="font-bold text-[#4a3e3e]">NT$ {course.price}</span>
              </div>
              <p className="text-[#4a3e3e] mb-4">{course.description}</p>
              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <span>時長: {course.duration}</span>
                <span>適合年齡: {course.ageRange}</span>
              </div>
              <Button className="w-full bg-[#e77c7c] hover:bg-[#d66c6c]">加入購物車</Button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
