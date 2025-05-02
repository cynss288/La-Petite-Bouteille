export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#e8e0d5]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#a38b7b]">聯絡我們</h2>
          <p className="max-w-2xl mx-auto text-[#5c4b3c]">
            如果您有任何問題或訂購需求，請隨時與我們聯繫。我們期待聽到您的聲音！
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="您的姓名"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b79e8e]"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="電子郵件"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b79e8e]"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="電話號碼"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b79e8e]"
              />
            </div>
            <div>
              <textarea
                placeholder="您的訊息"
                required
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b79e8e]"
              ></textarea>
            </div>
            <button type="submit" className="btn w-full">
              發送訊息
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
