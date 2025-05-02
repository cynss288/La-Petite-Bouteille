import ChocolateCakeCard from "@/components/chocolate-cake-card"
import StrawberryCakeCard from "@/components/strawberry-cake-card"
import CaramelCakeCard from "@/components/caramel-cake-card"
import FruitCakeCard from "@/components/fruit-cake-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CakesPage() {
  return (
    <main className="min-h-screen bg-rose-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-rose-400 mb-12">我們的蛋糕系列</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Link href="/cakes/chocolate">
              <ChocolateCakeCard />
            </Link>
            <div className="mt-4 text-center">
              <Button asChild className="bg-rose-400 hover:bg-rose-500">
                <Link href="/cakes/chocolate">查看詳情</Link>
              </Button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Link href="/cakes/strawberry">
              <StrawberryCakeCard />
            </Link>
            <div className="mt-4 text-center">
              <Button asChild className="bg-rose-400 hover:bg-rose-500">
                <Link href="/cakes/strawberry">查看詳情</Link>
              </Button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Link href="/cakes/caramel">
              <CaramelCakeCard />
            </Link>
            <div className="mt-4 text-center">
              <Button asChild className="bg-rose-400 hover:bg-rose-500">
                <Link href="/cakes/caramel">查看詳情</Link>
              </Button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Link href="/cakes/fruit">
              <FruitCakeCard />
            </Link>
            <div className="mt-4 text-center">
              <Button asChild className="bg-rose-400 hover:bg-rose-500">
                <Link href="/cakes/fruit">查看詳情</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            喜歡我們的蛋糕嗎？我們還有更多款式可供選擇，也可以依照您的需求客製化專屬蛋糕！
          </p>
          <Button asChild size="lg" className="bg-rose-400 hover:bg-rose-500">
            <Link href="/#contact">立即訂購</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
