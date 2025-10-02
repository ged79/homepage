"use client";

import PageIllustration from "@/components/page-illustration";
import { useState } from "react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "프로젝트 진행",
      items: [
        {
          question: "프로젝트 진행 과정은 어떻게 되나요?",
          answer: "상담 → 기획/설계 → 디자인 → 개발 → 테스트 → 배포 → 유지보수의 단계로 진행됩니다. 각 단계마다 고객님과 충분한 소통을 통해 피드백을 반영하며, 주 단위로 진행상황을 보고드립니다."
        },
        {
          question: "개발 기간은 얼마나 걸리나요?",
          answer: "프로젝트 규모에 따라 다릅니다. 간단한 랜딩페이지는 1-2주, 기업 홈페이지는 2-6주, 쇼핑몰이나 플랫폼은 4-12주 정도 소요됩니다. 정확한 기간은 상담 후 안내드립니다."
        },
        {
          question: "프로젝트 중 수정이 가능한가요?",
          answer: "네, 가능합니다. 개발 단계별로 검토 및 수정 과정이 포함되어 있습니다. 다만 대규모 기능 변경은 일정과 비용에 영향을 줄 수 있으니 사전 협의가 필요합니다."
        }
      ]
    },
    {
      category: "비용 관련",
      items: [
        {
          question: "견적은 어떻게 산정되나요?",
          answer: "프로젝트의 복잡도, 기능 요구사항, 디자인 수준, 개발 기간 등을 종합적으로 고려하여 산정됩니다. 무료 상담을 통해 정확한 견적을 제공해드립니다."
        },
        {
          question: "계약금은 얼마인가요?",
          answer: "일반적으로 전체 프로젝트 비용의 30-40%를 계약금으로 받고 있습니다. 중간 검수 시 30%, 최종 납품 시 나머지를 지불하는 방식으로 진행됩니다."
        },
        {
          question: "추가 비용이 발생할 수 있나요?",
          answer: "계약서에 명시된 범위 내에서는 추가 비용이 없습니다. 다만 새로운 기능 추가나 대규모 수정 요청 시에는 별도 협의가 필요합니다."
        }
      ]
    },
    {
      category: "기술 지원",
      items: [
        {
          question: "유지보수는 어떻게 진행되나요?",
          answer: "프로젝트 완료 후 3개월간 무상 유지보수를 제공합니다. 이후에는 월 정액제 또는 건별 유지보수 계약을 선택하실 수 있습니다."
        },
        {
          question: "호스팅과 도메인은 어떻게 하나요?",
          answer: "고객님이 직접 구매하시거나, 저희가 대행해드릴 수 있습니다. 최적의 호스팅 서비스를 추천해드리며, 초기 세팅까지 지원합니다."
        },
        {
          question: "모바일 대응이 가능한가요?",
          answer: "모든 웹사이트는 반응형으로 제작되어 PC, 태블릿, 모바일 등 다양한 기기에서 최적화된 화면을 제공합니다."
        },
        {
          question: "SEO 최적화도 포함되나요?",
          answer: "네, 기본적인 SEO 최적화는 모든 프로젝트에 포함됩니다. 메타 태그 설정, 사이트맵 생성, 로봇 파일 설정 등을 진행합니다."
        }
      ]
    },
    {
      category: "기타",
      items: [
        {
          question: "소스코드를 제공받을 수 있나요?",
          answer: "네, 프로젝트 완료 후 전체 소스코드와 관련 문서를 제공해드립니다. GitHub 저장소 이관도 가능합니다."
        },
        {
          question: "교육을 제공하나요?",
          answer: "관리자 페이지 사용법과 간단한 콘텐츠 수정 방법에 대한 교육을 제공합니다. 필요시 추가 교육도 가능합니다."
        },
        {
          question: "계약 해지가 가능한가요?",
          answer: "프로젝트 진행 단계에 따라 해지 및 환불 규정이 적용됩니다. 자세한 내용은 계약서에 명시되어 있습니다."
        }
      ]
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <PageIllustration />
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 pt-32 md:py-20 md:pt-40">
            {/* Header */}
            <div className="mx-auto max-w-3xl pb-12 text-center">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                자주 묻는 질문
              </h1>
              <p className="text-lg text-indigo-200/65">
                코넥서스 서비스에 대해 궁금하신 점을 확인해보세요
              </p>
            </div>

            {/* FAQ Content */}
            <div className="mx-auto max-w-3xl">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-10">
                  <h2 className="mb-6 text-xl font-bold text-gray-200">
                    {category.category}
                  </h2>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => {
                      const index = categoryIndex * 100 + itemIndex;
                      return (
                        <div
                          key={index}
                          className="rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50"
                        >
                          <button
                            className="flex w-full items-center justify-between p-6 text-left transition-colors hover:text-indigo-400"
                            onClick={() => toggleAccordion(index)}
                          >
                            <span className="font-medium text-gray-200">
                              {item.question}
                            </span>
                            <svg
                              className={`h-5 w-5 text-gray-400 transition-transform ${
                                openIndex === index ? "rotate-180" : ""
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                          {openIndex === index && (
                            <div className="border-t border-gray-700/50 px-6 pb-6">
                              <p className="pt-4 text-gray-400">
                                {item.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mx-auto mt-12 max-w-2xl rounded-2xl bg-gradient-to-r from-indigo-900/30 to-purple-900/30 p-8 text-center backdrop-blur-sm border border-indigo-500/30">
              <h3 className="mb-4 text-xl font-semibold text-gray-200">
                원하는 답변을 찾지 못하셨나요?
              </h3>
              <p className="mb-6 text-gray-400">
                언제든지 문의해주시면 친절하게 답변해드리겠습니다
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="/quote?type=consultation"
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-full hover:from-indigo-500 hover:to-indigo-600 transition-colors"
                >
                  무료 상담 신청
                  <span className="ml-2">→</span>
                </a>
                <a
                  href="mailto:contact@connexus.co.kr"
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-gray-300 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-gray-800/70 transition-all border border-gray-700/50"
                >
                  이메일 문의
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
