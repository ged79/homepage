"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";

const testimonials = [
  {
    name: "김민지 대표",
    company: "㈜테크스타트",
    content:
      "코넥서스와 함께한 웹 플랫폼 개발은 우리 회사의 비즈니스를 한 단계 끌어올렸습니다. React와 Next.js로 구현한 빠른 사이트와 체계적인 프로젝트 관리에 매우 만족합니다.",
    categories: [1, 3, 5],
  },
  {
    name: "이준호 CTO",
    company: "㈜핀테크코리아",
    content:
      "복잡한 금융 앱을 Flutter로 개발해주셨는데, iOS와 Android 동시 출시가 가능해서 시간과 비용을 크게 절감했습니다. 보안 처리도 완벽합니다!",
    categories: [1, 2, 4],
  },
  {
    name: "박서연 팀장",
    company: "커머스프로㈜",
    content:
      "AI 챗봇 도입으로 고객 문의 대응 시간이 70% 감소했습니다. 자연어 처리 기술이 뛰어나서 24시간 고객 지원이 가능해졌고, 고객 만족도도 크게 향상되었습니다.",
    categories: [1, 2, 5],
  },
  {
    name: "최영훈 대표",
    company: "㈜에듀테크",
    content:
      "학습 관리 플랫폼을 AWS 클라우드로 마이그레이션하면서 서버 비용은 40% 절감하고 안정성은 크게 향상되었습니다. 기술 컨설팅부터 구현까지 완벽했습니다.",
    categories: [1, 4],
  },
  {
    name: "정혜진 이사",
    company: "㈜헬스케어플러스",
    content:
      "의료 데이터 분석 AI 솔루션 개발로 진단 정확도가 95%까지 향상되었습니다. 머신러닝 모델의 전문성과 의료 규정 준수가 인상적이었습니다.",
    categories: [1, 3, 5],
  },
  {
    name: "한성민 대표",
    company: "㈜로지스텍",
    content:
      "물류 최적화 시스템 개발로 배송 효율이 30% 개선되었습니다. 실시간 추적과 데이터 시각화가 훌륭했고, 프로젝트도 예정보다 빨리 완료되었습니다.",
    categories: [1, 3],
  },
  {
    name: "강동원 대표",
    company: "㈜클라우드웍스",
    content:
      "기존 레거시 시스템을 마이크로서비스로 전환하는 까다로운 프로젝트였는데, 단계별 마이그레이션 전략 덕분에 서비스 중단 없이 안전하게 완료했습니다. 기술 역량이 정말 뛰어납니다.",
    categories: [1, 4, 5],
  },
  {
    name: "윤지아 본부장",
    company: "㈜리테일넥스트",
    content:
      "오프라인 매장과 온라인몰을 연동하는 O2O 플랫폼을 구축했습니다. 재고 실시간 연동과 직관적인 관리자 화면 덕분에 운영 효율이 크게 올랐습니다.",
    categories: [1, 2, 3],
  },
  {
    name: "임재현 대표",
    company: "㈜모빌리티랩",
    content:
      "스타트업 초기부터 MVP 개발과 인프라 구축을 함께 해주셨습니다. 빠른 개발 속도와 합리적인 비용, 그리고 출시 이후 유지보수까지 믿고 맡길 수 있는 파트너입니다.",
    categories: [1, 2, 4],
  },
];

const categoryFilters = [
  { id: 1, label: "전체" },
  { id: 2, label: "웹/앱 개발" },
  { id: 3, label: "이커머스" },
  { id: 4, label: "엔터프라이즈" },
  { id: 5, label: "AI 솔루션" },
];

export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(1);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            고객이 증명하는 코넥서스
          </h2>
          <p className="text-lg text-indigo-200/65">
            스타트업부터 중견기업까지, 다양한 산업의 고객과 함께
            성공적인 디지털 프로젝트를 만들어왔습니다.
          </p>
        </div>

        <div>
          {/* Category buttons */}
          <div className="flex justify-center pb-12 max-md:hidden md:pb-16">
            <div className="relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-gray-800/40 p-1">
              {categoryFilters.map((filter) => (
                <button
                  key={filter.id}
                  className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-4 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${
                    category === filter.id
                      ? "relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 text-gray-200"
                      : "text-gray-300 opacity-65 transition-opacity hover:opacity-90"
                  }`}
                  aria-pressed={category === filter.id}
                  onClick={() => setCategory(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div
            className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
            ref={masonryContainer}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <Testimonial testimonial={testimonial} category={category}>
                  {testimonial.content}
                </Testimonial>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function initialsOf(name: string) {
  // Korean names: use the first character (surname) as a clean avatar glyph.
  return name.trim().charAt(0);
}

export function Testimonial({
  testimonial,
  category,
  children,
}: {
  testimonial: {
    name: string;
    company: string;
    content: string;
    categories: number[];
  };
  category: number;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`relative rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-sm transition-opacity ${
        !testimonial.categories.includes(category) ? "opacity-30" : ""
      }`}
    >
      <div className="flex flex-col gap-4">
        {/* Star rating */}
        <div className="flex gap-0.5 text-indigo-400" aria-label="별점 5점">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} className="fill-current" width="16" height="16" viewBox="0 0 16 16">
              <path d="M8 .25l2.06 4.77 5.19.45-3.94 3.41 1.18 5.07L8 11.42l-4.49 2.51 1.18-5.07L.75 5.47l5.19-.45L8 .25z" />
            </svg>
          ))}
        </div>
        <p className="text-indigo-200/65 before:content-['“'] after:content-['”']">
          {children}
        </p>
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 font-nacelle text-base font-semibold text-white">
            {initialsOf(testimonial.name)}
          </span>
          <div className="text-sm font-medium text-gray-200">
            <span>{testimonial.name}</span>
            <span className="block text-indigo-200/65">{testimonial.company}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
