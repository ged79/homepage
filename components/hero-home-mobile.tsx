"use client";

import Image from "next/image";
import VideoThumb from "@/public/images/ai.jpg";
import { useTheme } from "@/components/theme-provider";

export default function HeroHomeMobile() {
  const { isDarkMode } = useTheme();
  return (
    <section className="md:hidden relative overflow-hidden">
      {/* Blob decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full filter blur-3xl translate-x-1/3 translate-y-1/3" />
      
      {/* Content */}
      <div className="relative px-4 py-12">
        {/* Main heading with gradient */}
        <div className="mb-6 text-center">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text text-transparent text-3xl font-bold mb-4 leading-tight">
            디지털 혁신을 연결하는<br />
            기술 파트너
          </h1>
          <p className="text-gray-400 text-lg">
            웹 · 앱 · AI 솔루션 전문
          </p>
        </div>

        {/* Visual element with overlay stats */}
        <div className="relative mb-8">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-[4/3] relative">
              <Image
                src={VideoThumb}
                alt="코넥서스"
                fill
                className="object-cover"
                priority
              />
              {/* Edge blur overlay - 가장자리만 처리 */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${isDarkMode ? 'from-gray-900' : 'from-white'} to-transparent`} />
                <div className={`absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t ${isDarkMode ? 'from-gray-900' : 'from-white'} to-transparent`} />
                <div className={`absolute inset-y-0 left-0 w-20 bg-gradient-to-r ${isDarkMode ? 'from-gray-900' : 'from-white'} to-transparent`} />
                <div className={`absolute inset-y-0 right-0 w-20 bg-gradient-to-l ${isDarkMode ? 'from-gray-900' : 'from-white'} to-transparent`} />
              </div>
            </div>
            
            {/* Floating stats cards */}
            <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-2 z-20">
              <div className="glass rounded-lg p-2">
                <div className="text-white font-bold text-base">10+</div>
                <div className="text-white/70 text-xs">년 경력</div>
              </div>
              <div className="glass rounded-lg p-2">
                <div className="text-white font-bold text-base">200+</div>
                <div className="text-white/70 text-xs">프로젝트</div>
              </div>
              <div className="glass rounded-lg p-2">
                <div className="text-white font-bold text-base">98%</div>
                <div className="text-white/70 text-xs">만족도</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-2 mb-6">
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