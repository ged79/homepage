"use client";

import Link from "next/link";

const TRUST_POINTS = [
  { title: "직접 개발·소통", desc: "재하청 없이 대표가 직접" },
  { title: "합리적인 비용", desc: "지역 기업, 거품 없는 견적" },
  { title: "납기 준수", desc: "약속한 일정을 지킵니다" },
  { title: "끝까지 사후관리", desc: "오픈 후에도 함께합니다" },
];

const REASONS = [
  "영동 지역 기업이라 언제든 직접 찾아뵙고 상담드립니다",
  "기획부터 개발·운영까지 대표가 직접 책임집니다",
  "정직한 견적과 세금계산서 발행, 계약서 작성",
  "오픈 이후 유지보수와 기술 지원까지 보장",
];

function Check() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-blue-600"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.3 6.8-6.8a1 1 0 0 1 1.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function HeroTrust() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft, bright background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white" />
      <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-[26rem] w-[26rem] rounded-full bg-sky-100/60 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          {/* Left: message */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-sm font-semibold text-blue-700 shadow-sm">
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M10 2a6 6 0 0 0-6 6c0 4 6 10 6 10s6-6 6-10a6 6 0 0 0-6-6Zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
                  clipRule="evenodd"
                />
              </svg>
              충북 영동 지역 IT 기업
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.2] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">
              가장 가까운 곳에서,
              <br />
              <span className="text-blue-600">믿고 맡기는</span> 웹·앱 개발
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              홈페이지, 쇼핑몰, 모바일 앱, 업무 시스템까지 — 영동 지역 기업
              코넥서스가 기획부터 개발, 운영까지 직접 책임지고 만들어 드립니다.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700"
              >
                무료 상담 신청하기
              </Link>
              <a
                href="tel:01077414569"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-700"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.6a1.5 1.5 0 0 1 1.46 1.15l.6 2.4a1.5 1.5 0 0 1-.4 1.43l-1.1 1.1a11 11 0 0 0 4.26 4.26l1.1-1.1a1.5 1.5 0 0 1 1.43-.4l2.4.6A1.5 1.5 0 0 1 18 14.9v1.6a1.5 1.5 0 0 1-1.5 1.5A14.5 14.5 0 0 1 2 3.5Z" />
                </svg>
                010-7741-4569
              </a>
            </div>

            {/* Trust row */}
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
              {TRUST_POINTS.map((p) => (
                <div key={p.title} className="flex items-start gap-2">
                  <Check />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      {p.title}
                    </div>
                    <div className="mt-0.5 text-xs text-slate-500">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: trust card */}
          <div className="relative lg:pl-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xl shadow-blue-900/5 sm:p-8">
              <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                <Check />
                신뢰할 수 있는 개발 파트너
              </div>
              <h2 className="mt-3 text-xl font-bold text-slate-900 sm:text-2xl">
                코넥서스를 믿을 수 있는 이유
              </h2>

              <ul className="mt-6 space-y-4">
                {REASONS.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <Check />
                    <span className="text-[0.95rem] leading-relaxed text-slate-700">
                      {r}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl bg-blue-50 p-4 text-sm leading-relaxed text-slate-600">
                <strong className="text-slate-900">이 홈페이지도</strong> 코넥서스가
                직접 기획하고 제작했습니다.
              </div>

              <div className="mt-4 border-t border-slate-100 pt-4 text-xs leading-relaxed text-slate-400">
                코넥서스 · 대표 김영아 · 충북 영동군 영동읍
                <br />
                사업자등록번호 853-81-03832
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
