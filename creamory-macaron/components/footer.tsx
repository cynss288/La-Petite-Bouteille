import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#d2b48c] text-white py-12">
      <div className="container">
        <div className="flex flex-wrap justify-between gap-8">
          <div className="flex-1 min-w-[250px]">
            <h3 className="text-[#f8f4e9] text-xl font-semibold mb-4">Creamory</h3>
            <p className="mb-2">精緻手作馬卡龍專賣店</p>
            <p className="mb-2">用心製作每一個甜點</p>
          </div>

          <div className="flex-1 min-w-[250px]">
            <h3 className="text-[#f8f4e9] text-xl font-semibold mb-4">營業時間</h3>
            <p className="mb-2">週一至週五: 10:00 - 20:00</p>
            <p className="mb-2">週六至週日: 11:00 - 21:00</p>
          </div>

          <div className="flex-1 min-w-[250px]">
            <h3 className="text-[#f8f4e9] text-xl font-semibold mb-4">聯絡方式</h3>
            <p className="mb-2">電話: (02) 2345-6789</p>
            <p className="mb-2">Email: info@creamory.com</p>
            <p className="mb-2">地址: 台北市某區某路123號</p>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Link
            href="#"
            className="w-10 h-10 bg-[#b79e8e] rounded-full flex items-center justify-center text-white hover:bg-[#a38b7b] hover:-translate-y-1 transition-all"
          >
            FB
          </Link>
          <Link
            href="#"
            className="w-10 h-10 bg-[#b79e8e] rounded-full flex items-center justify-center text-white hover:bg-[#a38b7b] hover:-translate-y-1 transition-all"
          >
            IG
          </Link>
          <Link
            href="#"
            className="w-10 h-10 bg-[#b79e8e] rounded-full flex items-center justify-center text-white hover:bg-[#a38b7b] hover:-translate-y-1 transition-all"
          >
            Line
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-[#c2a47c] text-center">
          <p>&copy; 2025 Creamory 馬卡龍專賣店. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
