"use client";

import Reveal from "@/components/reveal";
import { useTheme } from "@/components/theme-provider";

type Service = {
  title: string;
  desc: string;
  price: string;
  icon: string;
  gradient: string;
  features: string[];
  /** Bento span on large screens. */
  span: string;
};

const SERVICES: Service[] = [
  {
    title: "기업 홈페이지",
    desc: "회사 소개, 서비스 안내, 포트폴리오를 담은 전문적인 기업 홈페이지를 제작합니다.",
    price: "600–3,000만원",
    icon: "🏢",
    gradient: "from-blue-500 to-indigo-500",
    features: ["맞춤 디자인", "SEO 최적화", "관리자 페이지"],
    span: "lg:col-span-2",
  },
  {
    title: "이커머스 플랫폼",
    desc: "쇼핑몰, 예약 시스템, 멤버십 서비스 등 온라인 비즈니스 플랫폼을 구축합니다.",
    price: "1,500–3,500만원",
    icon: "🛒",
    gradient: "from-indigo-500 to-purple-500",
    features: ["결제 시스템", "재고 관리", "회원 시스템"],
    span: "lg:col-span-1",
  },
  {
    title: "헬스케어 플랫폼",
    desc: "커뮤니티케어, 원격의료, 건강관리 시스템 등 헬스케어 전문 플랫폼을 개발합니다.",
    price: "5,000만원~",
    icon: "⚕️",
    gradient: "from-purple-500 to-pink-500",
    features: ["원격의료", "EMR 연동", "보안 인증"],
    span: "lg:col-span-1",
  },
  {
    title: "통합 플랫폼",
    desc: "다중 사용자, 가맹점 관리, 정산 시스템을 갖춘 B2B2C 통합 플랫폼을 구축합니다.",
    price: "3,000–5,000만원",
    icon: "🔗",
    gradient: "from-pink-500 to-rose-500",
    features: ["다중 사용자", "정산 시스템", "API 연동"],
    span: "lg:col-span-2",
  },
  {
    title: "AI 솔루션",
    desc: "챗봇, 추천 시스템, 데이터 분석 등 LLM 기반 AI 기능을 제품에 통합합니다.",
    price: "맞춤 견적",
    icon: "🤖",
    gradient: "from-cyan-500 to-blue-500",
    features: ["AI 챗봇", "추천 엔진", "데이터 분석"],
    span: "lg:col-span-2",
  },
  {
    title: "유지보수 · 기술 지원",
    desc: "출시 이후에도 지속적인 모니터링, 버그 수정, 기능 개선을 책임집니다.",
    price: "문의하기",
    icon: "🔧",
    gradient: "from-emerald-500 to-teal-500",
    features: ["24/7 지원", "버그 수정", "기능 추가"],
    span: "lg:col-span-1",
  },
];

export default function Features() {
  const { isDarkMode } = useTheme();

  const cardBase = isDarkMode
    ? "border-gray-800/60 bg-gradient-to-br from-gray-900/60 to-gray-900/20 hover:border-indigo-500/50"
    : "border-gray-200 bg-white shadow-sm hover:border-indigo-400 hover:shadow-lg";
  const titleColor = isDarkMode ? "text-white" : "text-gray-900";
  const descColor = isDarkMode ? "text-gray-300" : "text-gray-600";
  const pillClass = isDarkMode
    ? "border-white/10 bg-white/5 text-gray-300"
    : "border-gray-200 bg-gray-50 text-gray-600";

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400_/_0.25),transparent)_1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div
              className={`mb-4 inline-flex items-center gap-3 text-sm font-medium tracking-wide before:h-px before:w-8 after:h-px after:w-8 ${
                isDarkMode
                  ? "text-indigo-300 before:bg-gradient-to-r before:from-transparent before:to-indigo-400/60 after:bg-gradient-to-l after:from-transparent after:to-indigo-400/60"
                  : "text-indigo-600 before:bg-gradient-to-r before:from-transparent before:to-indigo-600/50 after:bg-gradient-to-l after:from-transparent after:to-indigo-600/50"
              }`}
            >
              핵심 서비스
            </div>
            <h2
              className={`animate-[gradient_6s_linear_infinite] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl ${
                isDarkMode
                  ? "bg-[linear-gradient(to_right,#e5e7eb,#c7d2fe,#fafafa,#cbd5e1,#e5e7eb)]"
                  : "bg-[linear-gradient(to_right,theme(colors.gray.900),theme(colors.indigo.600),theme(colors.gray.900),theme(colors.indigo.600),theme(colors.gray.900))]"
              }`}
            >
              프로젝트 규모별 맞춤 솔루션
            </h2>
            <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              소규모 랜딩페이지부터 대규모 플랫폼까지. 코넥서스는 고객의 비즈니스에
              최적화된 기술 솔루션을 제공합니다.
            </p>
          </div>

          {/* Bento grid */}
          <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08} className={s.span}>
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${cardBase}`}
                >
                  {/* Hover glow */}
                  <div
                    className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${s.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                  />
                  <div className="relative flex h-full flex-col">
                    <div
                      className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${s.gradient} text-xl shadow-lg`}
                    >
                      {s.icon}
                    </div>
                    <h3
                      className={`font-nacelle text-xl font-semibold ${titleColor}`}
                    >
                      {s.title}
                    </h3>
                    <p className={`mt-2 leading-relaxed ${descColor}`}>{s.desc}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.features.map((f) => (
                        <span
                          key={f}
                          className={`rounded-lg border px-2.5 py-1 text-xs ${pillClass}`}
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-6">
                      <span
                        className={`bg-gradient-to-r ${s.gradient} bg-clip-text font-nacelle text-lg font-semibold text-transparent`}
                      >
                        {s.price}
                      </span>
                      <a
                        href="/quote"
                        className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
                          isDarkMode
                            ? "text-indigo-300 hover:text-indigo-200"
                            : "text-indigo-600 hover:text-indigo-700"
                        }`}
                      >
                        상담하기
                        <span className="transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
