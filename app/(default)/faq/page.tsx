"use client";

import { useState } from "react";
import Link from "next/link";

const FAQS = [
  {
    category: "신뢰 · 계약",
    items: [
      {
        q: "세금계산서 발행이 되나요?",
        a: "네. 정식 사업자(사업자등록번호 853-81-03832)로서 세금계산서 및 현금영수증 발행이 가능합니다. 계약과 정산을 투명하게 처리합니다.",
      },
      {
        q: "계약서를 작성하나요?",
        a: "네. 작업 범위, 일정, 비용, 사후관리 조건을 명시한 계약서를 작성한 뒤 진행합니다. 구두로만 진행하지 않습니다.",
      },
      {
        q: "관공서·기관 업무도 가능한가요?",
        a: "가능합니다. 영동 지역 기업으로서 직접 방문 상담이 가능하며, 기관 요구사항과 절차에 맞춰 성실히 진행합니다.",
      },
    ],
  },
  {
    category: "프로젝트 진행",
    items: [
      {
        q: "진행 과정은 어떻게 되나요?",
        a: "상담 → 기획·설계 → 디자인 → 개발 → 검수 → 오픈 → 사후관리 순으로 진행합니다. 각 단계마다 직접 소통하며 진행 상황을 공유합니다.",
      },
      {
        q: "개발 기간은 얼마나 걸리나요?",
        a: "규모에 따라 다릅니다. 간단한 홈페이지는 1~2주, 기업 홈페이지는 2~6주, 쇼핑몰·플랫폼은 4~12주가 보통입니다. 정확한 일정은 상담 후 안내드립니다.",
      },
      {
        q: "진행 중 수정이 가능한가요?",
        a: "네. 단계별 검토·수정 과정이 포함되어 있습니다. 다만 큰 폭의 기능 변경은 일정·비용에 영향을 줄 수 있어 사전 협의가 필요합니다.",
      },
    ],
  },
  {
    category: "비용",
    items: [
      {
        q: "견적은 어떻게 산정되나요?",
        a: "기능 요구사항, 디자인 범위, 개발 기간을 종합해 산정합니다. 무료 상담을 통해 거품 없는 정직한 견적을 드립니다.",
      },
      {
        q: "대금은 어떻게 지급하나요?",
        a: "보통 계약 시 일부, 중간 검수 시 일부, 최종 납품 시 잔금을 받는 방식으로 진행하며, 계약서에 명시합니다.",
      },
      {
        q: "추가 비용이 발생하나요?",
        a: "계약서에 명시된 범위 안에서는 추가 비용이 없습니다. 새로운 기능 추가나 대규모 수정은 별도 협의합니다.",
      },
    ],
  },
  {
    category: "유지보수 · 기술 지원",
    items: [
      {
        q: "오픈 이후 유지보수는 어떻게 되나요?",
        a: "오픈 후 일정 기간 무상 유지보수를 제공하며, 이후에는 월 정액 또는 건별 방식 중 선택하실 수 있습니다.",
      },
      {
        q: "호스팅과 도메인은 어떻게 하나요?",
        a: "직접 구매하셔도 되고, 저희가 대행해 드릴 수도 있습니다. 적합한 서비스를 추천하고 초기 세팅까지 지원합니다.",
      },
      {
        q: "모바일에서도 잘 보이나요?",
        a: "모든 사이트는 반응형으로 제작되어 PC·태블릿·모바일에서 최적화되어 보입니다.",
      },
    ],
  },
];

const FLAT = FAQS.flatMap((c, ci) =>
  c.items.map((it, ii) => ({ ...it, key: ci * 100 + ii })),
);

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
            FAQ
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            자주 묻는 질문
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            궁금하신 점을 모았습니다. 더 궁금한 건 편하게 물어보세요.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {FAQS.map((cat) => (
            <div key={cat.category}>
              <h2 className="mb-4 text-lg font-bold text-slate-900">
                {cat.category}
              </h2>
              <div className="space-y-3">
                {cat.items.map((item) => {
                  const k = FLAT.find((f) => f.q === item.q)!.key;
                  const isOpen = open === k;
                  return (
                    <div
                      key={k}
                      className="overflow-hidden rounded-xl border border-slate-200 bg-white"
                    >
                      <button
                        className="flex w-full items-center justify-between gap-4 p-5 text-left"
                        onClick={() => setOpen(isOpen ? null : k)}
                        aria-expanded={isOpen}
                      >
                        <span className="font-semibold text-slate-900">
                          {item.q}
                        </span>
                        <svg
                          className={`h-5 w-5 shrink-0 text-indigo-600 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="border-t border-slate-100 px-5 pb-5 pt-4 leading-relaxed text-slate-600">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-indigo-100 bg-indigo-50 p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900">
            답을 못 찾으셨나요?
          </h3>
          <p className="mt-2 text-slate-600">편하게 물어보세요. 친절히 답변드립니다.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/quote"
              className="rounded-xl bg-indigo-600 px-6 py-3 font-bold text-white transition hover:bg-indigo-700"
            >
              무료 상담 신청
            </Link>
            <a
              href="tel:01077414569"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-indigo-400 hover:text-indigo-700"
            >
              전화 010-7741-4569
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
