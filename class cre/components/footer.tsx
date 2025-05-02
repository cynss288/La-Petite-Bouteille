import Link from "next/link"
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#4a3e3e] text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold text-[#e77c7c] mb-4">Creamory</div>
            <p className="text-gray-300 mb-6">
              Creamory 兒童烘焙教室致力於提供優質的烘焙體驗課程，讓孩子在快樂中學習和成長。
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#5a4e4e] rounded-full flex items-center justify-center hover:bg-[#e77c7c] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#5a4e4e] rounded-full flex items-center justify-center hover:bg-[#e77c7c] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#5a4e4e] rounded-full flex items-center justify-center hover:bg-[#e77c7c] transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[#e77c7c] font-semibold text-lg mb-4">快速連結</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-[#e77c7c] transition-colors">
                  首頁
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-[#e77c7c] transition-colors">
                  關於我們
                </Link>
              </li>
              <li>
                <Link href="#courses" className="text-gray-300 hover:text-[#e77c7c] transition-colors">
                  課程介紹
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-gray-300 hover:text-[#e77c7c] transition-colors">
                  上課流程
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-300 hover:text-[#e77c7c] transition-colors">
                  家長評價
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-300 hover:text-[#e77c7c] transition-colors">
                  常見問題
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#e77c7c] font-semibold text-lg mb-4">課程分類</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#courses" className="text-gray-300 hover:text-[#e77c7c] transition-colors">
                  布丁製作
                </Link>
              </li>
              <li>
                <Link href="#courses" className="text-gray-300 hover:text-[#e77c7c] transition-colors">
                  蛋糕裝飾
                </Link>
              </li>
              <li>
                <Link href="#courses" className="text-gray-300 hover:text-[#e77c7c] transition-colors">
                  蛋糕捲製作
                </Link>
              </li>
              <li>
                <Link href="#courses" className="text-gray-300 hover:text-[#e77c7c] transition-colors">
                  造型餅乾
                </Link>
              </li>
              <li>
                <Link href="#courses" className="text-gray-300 hover:text-[#e77c7c] transition-colors">
                  親子同樂課程
                </Link>
              </li>
              <li>
                <Link href="#courses" className="text-gray-300 hover:text-[#e77c7c] transition-colors">
                  進階課程
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#e77c7c] font-semibold text-lg mb-4">聯絡資訊</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[#e77c7c] mr-3">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>台北市中山區烘焙街123號2樓</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#e77c7c] mr-3">
                  <Phone className="h-5 w-5" />
                </span>
                <span>02-1234-5678</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#e77c7c] mr-3">
                  <Mail className="h-5 w-5" />
                </span>
                <span>kids@creamory.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#3e3434] py-4">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          &copy; 2025 Creamory 兒童烘焙教室. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
