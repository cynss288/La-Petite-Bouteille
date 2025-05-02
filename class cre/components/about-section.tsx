import Link from "next/link"
import { Shield, Leaf, Users, Paintbrush } from "lucide-react"

export default function AboutSection() {
  const features = [
    {
      icon: <Shield className="h-5 w-5" />,
      title: "安全第一",
      description: "所有課程都有專業老師全程指導，使用兒童友善工具，確保安全",
    },
    {
      icon: <Leaf className="h-5 w-5" />,
      title: "天然食材",
      description: "使用高品質天然食材，無人工添加物，安心健康",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "小班制教學",
      description: "每班最多 8 位小朋友，確保每位孩子都能得到充分關注",
    },
    {
      icon: <Paintbrush className="h-5 w-5" />,
      title: "發揮創意",
      description: "鼓勵孩子自由裝飾成品，培養獨立思考與創意表達能力",
    },
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e77c7c] mb-4">為什麼選擇我們？</h2>
          <p className="text-lg max-w-2xl mx-auto">我們相信，烘焙不僅是一種技能，更是孩子創意與自信的表達方式</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="mb-6">
            Creamory 兒童烘焙教室專為 4-12
            歲的小朋友設計一日體驗課程，我們提供安全、有趣且具教育意義的烘焙環境，讓孩子們在動手做的過程中，培養觀察力、專注力和創造力。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#fce8e8] flex items-center justify-center text-[#e77c7c] mr-4 flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="#courses"
              className="inline-block px-6 py-3 bg-[#e77c7c] hover:bg-[#d56b6b] text-white font-semibold rounded-full transition-colors"
            >
              查看課程
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
