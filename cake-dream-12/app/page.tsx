import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"
import CakeGallery from "@/components/cake-gallery"
import HeroBanner from "@/components/hero-banner"
import FaqSection from "@/components/faq-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="home">
        <HeroBanner />
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-rose-400 mb-4">為什麼選擇 Creamory？</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">我們不只是製作蛋糕，更是在創造美好回憶</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon="🎂"
              title="完全客製化"
              description="從口味、造型到裝飾，每一個細節都可依照您的需求和想像進行量身訂製。"
            />
            <FeatureCard
              icon="🌿"
              title="優質食材"
              description="使用有機雞蛋、進口奶油和頂級巧克力等高品質食材，絕不添加人工色素和防腐劑。"
            />
            <FeatureCard
              icon="👨‍🍳"
              title="專業團隊"
              description="由經驗豐富的糕點師傅手工製作，確保每一款蛋糕都達到完美品質與口感。"
            />
            <FeatureCard
              icon="🚚"
              title="專業配送"
              description="採用專業保鮮配送，確保蛋糕在最佳狀態送達，新鮮度與美觀度不打折。"
            />
          </div>
        </div>
      </section>

      {/* Cakes Section */}
      <section id="cakes" className="py-0">
        <CakeGallery />
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-rose-400 mb-4">訂購流程</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">簡單四步驟，打造您的專屬蛋糕</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StepCard
              number="1"
              title="填寫訂單表格"
              description="選擇基本蛋糕款式、大小、口味和預計取貨日期，告訴我們您的特殊需求。"
            />
            <StepCard
              number="2"
              title="確認設計與報價"
              description="我們會根據您的需求提供設計草圖和報價，與您討論並確認細節。"
            />
            <StepCard
              number="3"
              title="付款預訂"
              description="確認設計後，支付50%訂金以確保您的訂單，剩餘款項可於取貨時支付。"
            />
            <StepCard
              number="4"
              title="取貨或配送"
              description="您可選擇親自到店取貨，或我們可安排專業配送服務送達指定地點。"
            />
          </div>
        </div>
      </section>

      {/* Customize Section */}
      <section id="customize" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-rose-400 mb-4">客製化選項</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">無限可能性，打造獨一無二的蛋糕體驗</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <OptionCard
              title="蛋糕口味"
              options={["香草", "巧克力", "紅絲絨", "檸檬", "抹茶", "焦糖", "咖啡", "藍莓"]}
            />
            <OptionCard
              title="填充與覆蓋"
              options={["奶油霜", "鮮奶油", "起司奶油", "巧克力甘納許", "水果夾層", "果醬", "焦糖"]}
            />
            <OptionCard
              title="裝飾選項"
              options={["水果裝飾", "花朵設計", "巧克力裝飾", "馬卡龍", "翻糖造型", "金箔", "照片打印", "特殊主題設計"]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-rose-400 mb-4">立即訂製</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">填寫表格，我們將在24小時內回覆您</p>
          </div>

          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />
    </main>
  )
}

// Component for feature cards
function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <Card className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform hover:-translate-y-2">
      <CardContent className="p-0 text-center">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

// Component for step cards
function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center p-6">
      <div className="w-16 h-16 bg-rose-400 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

// Component for option cards
function OptionCard({ title, options }: { title: string; options: string[] }) {
  return (
    <Card className="bg-white p-6 rounded-lg shadow-md">
      <CardContent className="p-0 text-center">
        <h3 className="text-xl font-semibold text-rose-400 mb-6">{title}</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {options.map((option, index) => (
            <span key={index} className="bg-rose-100 px-3 py-1 rounded-full text-sm">
              {option}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
