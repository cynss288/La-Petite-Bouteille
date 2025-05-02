import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container">
        <nav className="flex justify-between items-center py-5">
          <div className="text-2xl font-bold">
            <span className="text-[#b79e8e]">Cream</span>
            <span className="text-[#d2b48c]">ory</span>
          </div>
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link href="#home" className="text-[#5c4b3c] hover:text-[#b79e8e] font-medium transition-colors">
                首頁
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-[#5c4b3c] hover:text-[#b79e8e] font-medium transition-colors">
                關於我們
              </Link>
            </li>
            <li>
              <Link href="#products" className="text-[#5c4b3c] hover:text-[#b79e8e] font-medium transition-colors">
                產品
              </Link>
            </li>
            <li>
              <Link href="#testimonials" className="text-[#5c4b3c] hover:text-[#b79e8e] font-medium transition-colors">
                顧客評價
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-[#5c4b3c] hover:text-[#b79e8e] font-medium transition-colors">
                聯絡我們
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
