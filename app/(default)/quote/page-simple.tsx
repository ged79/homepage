"use client";

import { useState } from "react";
import PageIllustration from "@/components/page-illustration";
import { useTheme } from "@/components/theme-provider";

export default function QuotePage() {
  const { isDarkMode } = useTheme();
  
  return (
    <>
      <PageIllustration />
      <section className={`relative ${isDarkMode ? '' : 'bg-white'}`}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
          <div className="py-12 pt-16 md:py-20 md:pt-32">
            <div className="mx-auto max-w-3xl pb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">견적 요청</h1>
              <p className="text-lg text-gray-600">24시간 내 답변드립니다</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSeIE_4C8xjKCMMKpQ8cGzE8qocR8Ikpn_GuSfwD7cp9ClWjrw/viewform?embedded=true" 
                width="100%" 
                height="1000" 
                frameBorder="0"
                className="rounded-lg"
              >
                로딩 중...
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}