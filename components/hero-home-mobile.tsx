import Image from "next/image";
import VideoThumb from "@/public/images/ai.jpg";

export default function HeroHomeMobile() {
  return (
    <section className="md:hidden relative min-h-screen overflow-hidden">
      {/* Blob decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full filter blur-3xl translate-x-1/3 translate-y-1/3" />
      
      {/* Content */}
      <div className="relative px-4 py-16">
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 rounded-full border border-indigo-500/20">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-indigo-400">AI 기반 개발 전문</span>
          </div>
        </div>

        {/* Main heading with gradient */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-br from-gray-100 via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              디지털 혁신을<br />
              연결하는<br />
              기술 파트너
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            웹 · 앱 · AI 솔루션 전문
          </p>
        </div>

        {/* Visual element with overlay stats */}
        <div className="relative mb-10">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-[4/3]">
              <Image
                src={VideoThumb}
                alt="코넥서스"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
            </div>
            
            {/* Floating stats cards */}
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                <div className="text-white font-bold text-lg">10+</div>
                <div className="text-white/70 text-xs">년 경력</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                <div className="text-white font-bold text-lg">200+</div>
                <div className="text-white/70 text-xs">프로젝트</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                <div className="text-white font-bold text-lg">98%</div>
                <div className="text-white/70 text-xs">만족도</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-700">
            ✓ 빠른 개발
          </span>
          <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-700">
            ✓ 합리적 가격
          </span>
          <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-700">
            ✓ 24/7 지원
          </span>
        </div>

        {/* CTA Buttons with gradient */}
        <div className="space-y-3">
          <a
            href="/portfolio"
            className="relative block w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-medium text-center overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative">포트폴리오 보기 →</span>
          </a>
          <a
            href="/quote"
            className="block w-full px-6 py-4 bg-gray-800 text-gray-300 rounded-2xl font-medium text-center border border-gray-700 hover:bg-gray-700 transition-colors"
          >
            무료 상담 신청
          </a>
        </div>


      </div>
    </section>
  );
}