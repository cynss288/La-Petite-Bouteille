import ChocolateCakeCard from "@/components/chocolate-cake-card"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ChocolateCakePage() {
  return (
    <main className="min-h-screen bg-rose-50 py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-12">
          <Link href="/#cakes" className="text-rose-400 hover:text-rose-500 mr-2">
            ← 返回所有蛋糕
          </Link>
          <h1 className="text-4xl font-bold text-center text-rose-400 flex-grow">經典巧克力蛋糕</h1>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <ChocolateCakeCard />

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-rose-400 mb-6">蛋糕詳細資訊</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-3">蛋糕規格</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>尺寸：6吋、8吋、10吋</li>
                  <li>重量：約550g (6吋)</li>
                  <li>適合人數：3-5人 (6吋)</li>
                  <li>保存方式：冷藏保存，建議於5天內食用完畢</li>
                </ul>
              </Card>

              <Card className="p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-3">食材成分</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>蛋糕體：比利時黑巧克力、可可粉、麵粉、雞蛋、砂糖、發酵奶油</li>
                  <li>甘納許：比利時黑巧克力、鮮奶油、奶油</li>
                  <li>裝飾：可可粉</li>
                  <li>過敏原資訊：含麩質、蛋、奶製品</li>
                </ul>
              </Card>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium mb-3">客製化選項</h3>
              <p className="text-gray-600 mb-4">您可以根據個人喜好客製化您的巧克力蛋糕：</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>可選擇巧克力濃度（70%、85%黑巧克力）</li>
                <li>可加入巧克力碎片或巧克力豆</li>
                <li>可選擇添加酒釀風味（如蘭姆酒、威士忌）</li>
                <li>可訂製無糖或低糖版本</li>
                <li>可客製化文字或圖案</li>
              </ul>
            </div>

            <div className="mt-8 p-6 bg-rose-50 rounded-lg">
              <h3 className="text-lg font-medium mb-3">品嚐建議</h3>
              <p className="text-gray-600 mb-2">為了獲得最佳風味體驗，我們建議：</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>食用前將蛋糕從冰箱取出，在室溫下放置15-20分鐘</li>
                <li>搭配咖啡或紅酒一同享用，以提升巧克力風味</li>
                <li>可配上少量覆盆子或草莓，增添風味層次</li>
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
