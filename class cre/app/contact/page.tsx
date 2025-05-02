import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 md:px-6 py-24 mt-16">
      <h1 className="text-3xl font-bold mb-8">聯絡我們</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-[#e77c7c] mb-4">聯絡資訊</h2>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="text-[#e77c7c] mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">地址</h3>
                <p className="text-gray-600">台北市信義區松高路123號5樓</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-[#e77c7c] mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">電話</h3>
                <p className="text-gray-600">(02) 2345-6789</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-[#e77c7c] mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">電子郵件</h3>
                <p className="text-gray-600">info@creamory.com.tw</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-[#e77c7c] mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">營業時間</h3>
                <p className="text-gray-600">週二至週日: 10:00 - 18:00</p>
                <p className="text-gray-600">週一: 休息</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-[#e77c7c] mb-4">傳送訊息</h2>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                姓名
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e77c7c]"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                電子郵件
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e77c7c]"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                電話
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e77c7c]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                訊息
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e77c7c]"
                required
              ></textarea>
            </div>

            <Button type="submit" className="w-full bg-[#e77c7c] hover:bg-[#d66c6c]">
              送出訊息
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}
