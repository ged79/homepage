"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";
import Image from "next/image";
import PageIllustration from "@/components/page-illustration";

const workflowSteps = [
  {
    id: 0,
    title: "전체",
    icon: "📋",
    description: "전체 프로세스 개요"
  },
  {
    id: 1,
    title: "상담 및 기획",
    icon: "💬",
    description: "프로젝트 요구사항 분석 및 전략 수립"
  },
  {
    id: 2,
    title: "디자인",
    icon: "🎨",
    description: "UI/UX 설계 및 프로토타입 제작"
  },
  {
    id: 3,
    title: "개발",
    icon: "⚙️",
    description: "핵심 기능 구현 및 시스템 구축"
  },
  {
    id: 4,
    title: "테스트",
    icon: "🔍",
    description: "품질 검증 및 성능 최적화"
  },
  {
    id: 5,
    title: "배포 및 유지보수",
    icon: "🚀",
    description: "서비스 출시 및 지속적 관리"
  }
];

const workflowCards = [
  {
    title: "요구사항 분석",
    content: "고객의 비즈니스 목표와 기술적 요구사항을 상세히 분석하여 프로젝트 방향성을 설정합니다. 시장 조사와 경쟁사 분석을 통해 차별화 전략을 수립합니다.",
    steps: [0, 1],
    duration: "3-5일",
    deliverable: "요구사항 명세서"
  },
  {
    title: "프로젝트 범위 정의",
    content: "개발 범위, 일정, 예산을 명확히 정의하고 리스크 관리 계획을 수립합니다. 마일스톤과 산출물을 구체화합니다.",
    steps: [0, 1],
    duration: "2-3일",
    deliverable: "프로젝트 계획서"
  },
  {
    title: "기술 스택 선정",
    content: "프로젝트 특성에 맞는 최적의 기술 스택을 선정합니다. 확장성, 성능, 보안을 고려한 아키텍처를 설계합니다.",
    steps: [0, 1],
    duration: "1-2일",
    deliverable: "기술 아키텍처 문서"
  },
  {
    title: "와이어프레임 제작",
    content: "주요 화면의 레이아웃과 정보 구조를 설계합니다. 사용자 흐름을 시각화하여 직관적인 네비게이션을 구성합니다.",
    steps: [0, 2],
    duration: "3-5일",
    deliverable: "와이어프레임"
  },
  {
    title: "UI 디자인",
    content: "브랜드 아이덴티티를 반영한 비주얼 디자인을 제작합니다. 컬러, 타이포그래피, 컴포넌트를 체계적으로 설계합니다.",
    steps: [0, 2],
    duration: "5-7일",
    deliverable: "디자인 시안"
  },
  {
    title: "프로토타입 개발",
    content: "인터랙티브 프로토타입을 제작하여 실제 사용성을 검증합니다. 클라이언트 피드백을 수렴하여 디자인을 개선합니다.",
    steps: [0, 2],
    duration: "3-4일",
    deliverable: "프로토타입"
  },
  {
    title: "프론트엔드 개발",
    content: "React/Next.js를 활용한 반응형 웹 개발을 진행합니다. 크로스 브라우저 호환성과 성능 최적화를 구현합니다.",
    steps: [0, 3],
    duration: "2-4주",
    deliverable: "프론트엔드 코드"
  },
  {
    title: "백엔드 개발",
    content: "RESTful API 또는 GraphQL을 구축하고 데이터베이스를 설계합니다. 인증, 권한 관리 등 핵심 비즈니스 로직을 구현합니다.",
    steps: [0, 3],
    duration: "2-4주",
    deliverable: "API 서버"
  },
  {
    title: "시스템 통합",
    content: "프론트엔드와 백엔드를 연동하고 외부 서비스 API를 통합합니다. 결제, 인증, 알림 등 써드파티 서비스를 연결합니다.",
    steps: [0, 3],
    duration: "1-2주",
    deliverable: "통합 시스템"
  },
  {
    title: "단위 테스트",
    content: "개별 기능과 컴포넌트의 동작을 검증합니다. Jest, React Testing Library를 활용한 자동화 테스트를 구축합니다.",
    steps: [0, 4],
    duration: "3-5일",
    deliverable: "테스트 코드"
  },
  {
    title: "통합 테스트",
    content: "전체 시스템의 통합 동작을 검증합니다. 실제 사용 시나리오를 기반으로 E2E 테스트를 수행합니다.",
    steps: [0, 4],
    duration: "3-5일",
    deliverable: "테스트 보고서"
  },
  {
    title: "성능 최적화",
    content: "로딩 속도, 렌더링 성능을 개선합니다. 이미지 최적화, 코드 스플리팅, 캐싱 전략을 적용합니다.",
    steps: [0, 4],
    duration: "2-3일",
    deliverable: "성능 보고서"
  },
  {
    title: "배포 준비",
    content: "서버 환경 구성과 도메인 설정을 완료합니다. CI/CD 파이프라인을 구축하여 자동 배포 체계를 마련합니다.",
    steps: [0, 5],
    duration: "2-3일",
    deliverable: "배포 환경"
  },
  {
    title: "서비스 런칭",
    content: "최종 점검 후 프로덕션 환경에 배포합니다. 모니터링 시스템을 구축하여 서비스 상태를 실시간 감시합니다.",
    steps: [0, 5],
    duration: "1-2일",
    deliverable: "라이브 서비스"
  },
  {
    title: "유지보수 지원",
    content: "버그 수정, 기능 개선, 보안 업데이트를 지속적으로 제공합니다. 월간 리포트를 통해 서비스 현황을 공유합니다.",
    steps: [0, 5],
    duration: "계약 기간",
    deliverable: "유지보수 보고서"
  }
];

export default function TestimonialsPage() {
  const masonryContainer = useMasonry();
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <>
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 pt-16 md:py-20 md:pt-32">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-8 md:pb-12 text-center">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text text-transparent text-3xl md:text-4xl font-semibold pb-2">
              개발 프로세스
            </h2>
            <p className="text-base md:text-lg text-gray-400">
              체계적인 5단계 프로세스로 프로젝트를 성공으로 이끕니다
            </p>
          </div>

          <div>
            {/* Workflow Steps */}
            <div className="flex justify-center pb-12 max-md:hidden md:pb-16">
              <div className="relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-gray-800/40 p-1">
                {workflowSteps.map((step) => (
                  <button
                    key={step.id}
                    className={`flex h-10 flex-1 items-center gap-2 whitespace-nowrap rounded-full px-4 text-sm font-medium transition-all ${
                      activeStep === step.id 
                        ? "relative bg-gradient-to-b from-indigo-600 to-indigo-500 text-white shadow-lg" 
                        : "text-gray-400 hover:text-gray-300"
                    }`}
                    onClick={() => setActiveStep(step.id)}
                  >
                    <span className="text-lg">{step.icon}</span>
                    <span>{step.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Steps */}
            <div className="md:hidden mb-8">
              <select 
                className="w-full p-3 bg-gray-800 text-gray-300 rounded-lg"
                value={activeStep}
                onChange={(e) => setActiveStep(Number(e.target.value))}
              >
                {workflowSteps.map((step) => (
                  <option key={step.id} value={step.id}>
                    {step.icon} {step.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Step Description */}
            <div className="text-center mb-12">
              <h3 className="text-xl font-semibold text-gray-200 mb-2">
                {workflowSteps[activeStep].title}
              </h3>
              <p className="text-gray-400">
                {workflowSteps[activeStep].description}
              </p>
            </div>

            {/* Cards */}
            <div
              className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
              ref={masonryContainer}
            >
              {workflowCards.map((card, index) => {
                const isActive = card.steps.includes(activeStep);
                return (
                  <article
                    key={index}
                    className={`relative rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-sm transition-all duration-300 ${
                      isActive 
                        ? "opacity-100 scale-100 border border-indigo-500/50" 
                        : "opacity-30 scale-95"
                    }`}
                  >
                    <div className="flex flex-col gap-4">
                      <h3 className="text-lg font-semibold text-gray-200">
                        {card.title}
                      </h3>
                      <p className="text-sm text-indigo-200/65">
                        {card.content}
                      </p>
                      <div className="flex flex-col gap-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-500">소요 기간</span>
                          <span className="text-indigo-400">{card.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">산출물</span>
                          <span className="text-gray-300">{card.deliverable}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}