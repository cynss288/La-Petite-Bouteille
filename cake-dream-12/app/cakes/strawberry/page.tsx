import StrawberryCakeCard from "@/components/strawberry-cake-card"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function StrawberryCakePage() {
  return (
    <main className="min-h-screen bg-rose-50 py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-12">
          <Link href="/#cakes" className="text-rose-400 hover:text-rose-500 mr-2">
            ← 返回所有蛋糕
          </Link>
          <h1 className="text-4xl font-bold text-center text-rose-400 flex-grow">草莓鮮奶油蛋糕</h1>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <StrawberryCakeCard />

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-rose-400 mb-6">蛋糕詳細資訊</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-3">蛋糕規格</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>尺寸：6吋、8吋、10吋</li>
                  <li>重量：約520g (6吋)</li>
                  <li>適合人數：3-5人 (6吋)</li>
                  <li>保存方式：冷藏保存，建議於2天內食用完畢</li>
                </ul>
              </Card>

              <Card className="p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-3">食材成分</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>蛋糕體：雞蛋、麵粉、砂糖、香草精</li>
                  <li>鮮奶油：動物性鮮奶油、砂糖</li>
                  <li>水果：新鮮草莓</li>
                  <li>過敏原資訊：含麩質、蛋、奶製品</li>
                </ul>
              </Card>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium mb-3">客製化選項</h3>
              <p className="text-gray-600 mb-4">我們提供多種客製化選項，讓您的草莓蛋糕更加獨特：</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>可選擇草莓果醬內餡</li>
                <li>可加入白巧克力裝飾</li>
                <li>可選擇添加藍莓或覆盆子點綴</li>
                <li>可客製化文字或圖案</li>
                <li>可選擇無糖或低糖版本</li>
              </ul>
            </div>

            <div className="mt-8 p-6 bg-rose-50 rounded-lg">
              <h3 className="text-lg font-medium mb-3">季節限定</h3>
              <p className="text-gray-600 mb-4">
                草莓鮮奶油蛋糕使用當季最新鮮的草莓製作，口感最佳的季節為每年12月至隔年5月。在草莓季期間，我們使用台灣本地優質草莓，香甜多汁，風味絕佳。
              </p>
              <p className="text-gray-600">
                非草莓季節期間，我們會使用進口草莓，或建議您選擇其他當季水果蛋糕，以確保最佳品質。
              </p>
            </div>

            <div className="mt-8 p-6 bg-rose-50 rounded-lg">
              <h3 className="text-lg font-medium mb-3">品嚐建議</h3>
              <p className="text-gray-600 mb-2">為了獲得最佳風味體驗，我們建議：</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>食用前將蛋糕從冰箱取出，在室溫下放置10分鐘</li>
                <li>搭配花茶或氣泡酒一同享用，提升草莓的香甜口感</li>
                <li>建議當天食用，以保持草莓的新鮮度與口感</li>
              </ul>
            </div>

            <div className="mt-8 text-center">
              <Button asChild className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-6 rounded-full">
                <a href="#contact">立即訂購</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
