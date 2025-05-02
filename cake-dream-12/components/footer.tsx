import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-rose-400">Creamory</h3>
            <p className="text-gray-300">
              我們是專注於客製化蛋糕的專業烘焙工作室，致力於為每一個特別時刻創造甜蜜回憶。
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-rose-400">聯絡我們</h3>
            <p className="text-gray-300 mb-2">電話：02-XXXX-XXXX</p>
            <p className="text-gray-300 mb-2">電子郵件：info@creamory.com</p>
            <p className="text-gray-300">地址：台北市中山區蛋糕街123號</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-rose-400">營業時間</h3>
            <p className="text-gray-300 mb-2">週二至週五：10:00 - 19:00</p>
            <p className="text-gray-300 mb-2">週六至週日：10:00 - 20:00</p>
            <p className="text-gray-300">週一：公休</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-rose-400">關注我們</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                aria-label="Facebook"
                className="bg-rose-400 hover:bg-rose-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="bg-rose-400 hover:bg-rose-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                aria-label="Line"
                className="bg-rose-400 hover:bg-rose-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <span className="font-bold text-white">L</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2025 Creamory. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
