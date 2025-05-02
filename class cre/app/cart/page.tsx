import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CartPage() {
  return (
    <main className="container mx-auto px-4 md:px-6 py-24 mt-16">
      <h1 className="text-3xl font-bold mb-8">購物車</h1>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="empty-cart text-center py-12">
          <div className="mb-4 text-[#e77c7c]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">您的購物車是空的</h2>
          <p className="text-gray-500 mb-6">看起來您還沒有添加任何課程到購物車</p>
          <Link href="/courses">
            <Button className="bg-[#e77c7c] hover:bg-[#d66c6c]">瀏覽課程</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
