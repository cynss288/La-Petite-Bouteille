export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 md:px-6 py-24 mt-16">
      <h1 className="text-3xl font-bold mb-8">關於我們</h1>

      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-[#e77c7c] mb-4">我們的故事</h2>
            <p className="mb-4">
              Creamory
              成立於2018年，源於我們對烘焙的熱愛和對兒童教育的熱情。我們相信，烘焙不僅是一種技能，更是一種創意表達和情感交流的方式。
            </p>
            <p className="mb-4">
              我們的創始團隊由專業烘焙師和兒童教育專家組成，致力於為孩子們創造一個安全、有趣且富有教育意義的烘焙環境。
            </p>
            <p>在Creamory，每個孩子都能探索烘焙的樂趣，發揮創意，並在過程中學習耐心、精確和團隊合作的重要性。</p>
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Creamory團隊"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#e77c7c] mb-4">我們的理念</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">創意探索</h3>
              <p>鼓勵孩子們發揮想像力，創造獨特的烘焙作品，培養創新思維。</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">快樂學習</h3>
              <p>通過有趣的烘焙活動，讓孩子們在歡笑中學習科學、數學和藝術知識。</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">團隊合作</h3>
              <p>培養孩子們的合作精神和社交技能，共同完成烘焙挑戰。</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
