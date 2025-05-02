import CaramelCakeCard from "@/components/caramel-cake-card"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CaramelCakePage() {
  return (
    <main className="min-h-screen bg-rose-50 py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-12">
          <Link href="/#cakes" className="text-rose-400 hover:text-rose-500 mr-2">
            ← 返回所有蛋糕
          </Link>
          <h1 className="text-4xl font-bold text-center text-rose-400 flex-grow">焦糖海鹽蛋糕</h1>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <CaramelCakeCard />

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-rose-400 mb-6">蛋糕詳細資訊</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-3">蛋糕規格</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>尺寸：6吋、8吋、10吋</li>
                  <li>重量：約580g (6吋)</li>
                  <li>適合人數：3-5人 (6吋)</li>
                  <li>保存方式：冷藏保存，建議於4天內食用完畢</li>
                </ul>
              </Card>

              <Card className="p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-3">食材成分</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>蛋糕體：麵粉、雞蛋、砂糖、發酵奶油</li>
                  <li>焦糖醬：砂糖、鮮奶油、奶油、海鹽</li>
                  <li>奶油霜：奶油、砂糖、香草精</li>
                  <li>裝飾：焦糖醬、海鹽片</li>
                  <li>過敏原資訊：含麩質、蛋、奶製品</li>
                </ul>
              </Card>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium mb-3">客製化選項</h3>
              <p className="text-gray-600 mb-4">我們提供多種客製化選項，讓您的焦糖海鹽蛋糕更加獨特：</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>可選擇焦糖濃度（淡焦糖、中焦糖、深焦糖）</li>
                <li>可加入核桃或杏仁等堅果增添口感</li>
                <li>可選擇添加咖啡風味</li>
                <li>可選擇海鹽用量（輕鹹、中鹹）</li>
                <li>可客製化文字或圖案</li>
              </ul>
            </div>

            <div className="mt-8 p-6 bg-rose-50 rounded-lg">
              <h3 className="text-lg font-medium mb-3">獨特風味</h3>
              <p className="text-gray-600 mb-4">
                焦糖海鹽蛋糕是我們的招牌創新口味，完美平衡了甜與鹹的層次感。焦糖的香甜與海鹽的微鹹相互襯托，創造出豐富的味覺體驗。
              </p>
              <p className="text-gray-600">
                我們使用法國進口的頂級海鹽，質地細膩，鹹度適中，能夠完美提升焦糖的香氣，讓整體風味更加立體。
              </p>
            </div>

            <div className="mt-8 p-6 bg-rose-50 rounded-lg">
              <h3 className="text-lg font-medium mb-3">品嚐建議</h3>
              <p className="text-gray-600 mb-2">為了獲得最佳風味體驗，我們建議：</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>食用前將蛋糕從冰箱取出，在室溫下放置15分鐘</li>
                <li>搭配黑咖啡或威士忌一同享用，能夠平衡甜度並提升焦糖風味</li>
                <li>每一口都嘗試同時品嚐到蛋糕體、焦糖醬和海鹽，體驗完整的層次感</li>
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
