"use client";

import PageIllustration from "@/components/page-illustration";

export default function TestBackgroundPage() {
  return (
    <div className="relative bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 min-h-screen overflow-hidden">
      {/* PageIllustration 효과 강화 */}
      <div className="relative">
        {/* 원본 PageIllustration */}
        <PageIllustration />
        
        {/* 추가 파동 효과 레이어 - 더 밝은 배경에서 보이도록 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/4 pointer-events-none">
          <div className="w-[846px] h-[594px] opacity-30">
            <PageIllustration />
          </div>
        </div>
      </div>
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Hero content */}
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="pb-12 text-center md:pb-20">
              <h1
                className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl leading-tight"
                data-aos="fade-up"
                style={{ lineHeight: '1.2' }}
              >
                Test Background Effects Page
              </h1>
              <div className="mx-auto max-w-3xl">
                <p
                  className="mb-8 text-xl text-indigo-200/65"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  This page shows the exact same background as the main page.
                  All effects should be visible here.
                </p>
              </div>
            </div>
            
            {/* Placeholder content box */}
            <div className="mx-auto max-w-4xl">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-12 text-center">
                <p className="text-gray-300">Main page content area</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
