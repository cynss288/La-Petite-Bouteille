import Link from "next/link"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen flex items-center bg-cover bg-center relative"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/macaron-making-process.png')",
      }}
    >
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">精緻手作馬卡龍</h1>
          <p className="text-lg mb-8 text-white">以精選食材、創新口味與精湛工藝，為您帶來最美味的法式甜點體驗</p>
          <Link
            href="#products"
            className="btn bg-[#d2b48c] hover:bg-[#c2a47c] text-white px-8 py-3 rounded-full text-lg font-medium transition-all hover:-translate-y-1 hover:shadow-lg inline-block"
          >
            探索馬卡龍
          </Link>
        </div>
      </div>
    </section>
  )
}
