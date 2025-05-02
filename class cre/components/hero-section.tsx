import Link from "next/link"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white pt-16"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/kids-baking-new.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-shadow">兒童烘焙歡樂時光</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-shadow">
          讓孩子在烘焙中學習、創造與成長，體驗手作甜點的無窮樂趣！
        </p>
        <Link
          href="#courses"
          className="inline-block px-8 py-3 bg-[#e77c7c] hover:bg-[#d56b6b] text-white font-semibold rounded-full transition-colors"
        >
          探索課程
        </Link>
      </div>
    </section>
  )
}
