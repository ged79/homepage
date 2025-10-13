"use client";

import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import AboutMobile from "./about-mobile";
import { useState } from "react";
import { useTheme } from "@/components/theme-provider";

export default function About() {
  const [activeProject, setActiveProject] = useState(0);
  const { isDarkMode } = useTheme();

  // 실제 운영 중인 프로젝트
  const liveProjects = [
    {
      id: 0,
      name: "쇼핑몰 및 온라인 판매사이트",
      status: "LIVE",
      description: "다양한 상품의 온라인 커머스 구축",
      metrics: {
        type: "이커머스",
        features: "온라인 판매",
        payment: "PG 연동",
        responsive: "반응형"
      },
      tech: ["Next.js", "Supabase", "결제 시스템", "SEO"],
      features: [
        "상품 카탈로그 관리",
        "장바구니 및 결제 시스템",
        "회원 관리 및 포인트",
        "배송 추적 시스템"
      ],
      liveUrl: "https://sage-gecko-0b9542.netlify.app",
      color: "from-gray-600 to-gray-700"
    },
    {
      id: 1,
      name: "체인점 플랫폼",
      status: "LIVE",
      description: "다중 지점 통합 관리 시스템",
      metrics: {
        system: "통합 관리",
        type: "B2B 플랫폼",
        tech: "실시간 동기화",
        scale: "확장 가능"
      },
      tech: ["Next.js 14", "TypeScript", "PWA", "실시간 DB"],
      features: [
        "본사-지점 통합 관리",
        "실시간 재고/주문 동기화",
        "지점별 매출 관리",
        "모바일 관리 앱(PWA)"
      ],
      liveUrl: null,
      color: "from-gray-700 to-gray-800"
    },
    {
      id: 2,
      name: "모바일 앱",
      status: "DEVELOPMENT",
      description: "PWA 기반 모바일 애플리케이션 개발",
      metrics: {
        type: "모바일 앱",
        feature: "PWA 기술",
        install: "설치 가능",
        offline: "오프라인 지원"
      },
      tech: ["PWA", "Next.js", "Push알림", "QR코드"],
      liveUrl: null,
      features: [
        "앱스토어 없이 설치 가능",
        "푸시 알림 기능",
        "오프라인 모드 지원",
        "네이티브 앱 수준 성능"
      ],
      color: "from-gray-600 to-gray-700"
    },
    {
      id: 3, 
      name: "기업 홈페이지 & 레거시 복구",
      status: "COMPLETED",
      description: "기업 사이트 구축 및 오래된 시스템 정상화",
      metrics: {
        homepage: "기업 사이트",
        legacy: "15년 시스템",
        bugs: "버그 해결",
        maintenance: "유지보수"
      },
      tech: ["Next.js", "JSP", "Java", "Legacy"],
      liveUrl: "https://dxkorea.org/",
      features: [
        "현대적 기업 홈페이지 구축",
        "오래된 레거시 코드 분석/복구",
        "시스템 안정성 확보",
        "지속적 유지보수 지원"
      ],
      color: "from-gray-700 to-gray-800"
    }
  ];

  const currentProject = liveProjects[activeProject];

  return (
    <>
      <PageIllustration />
      
      {/* Mobile version */}
      <AboutMobile />
      
      {/* Desktop version */}
      <section className="relative hidden md:block">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 pt-32 md:py-20 md:pt-32">
            
            {/* 메인 헤더 - 진솔한 메시지 */}
            <div className="mx-auto max-w-4xl pb-16 text-center">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text text-transparent text-3xl md:text-4xl font-semibold pb-2">
                우리는 데모를 만들지 않습니다
              </h1>
              <p className="text-base md:text-lg text-gray-400">
                <span className="md:hidden">실제 서비스를 만듭니다</span>
                <span className="hidden md:inline">
                  지금 이 순간에도 실제로 작동하고, 돈이 오가고, 사람들이 사용하는<br />
                  <span className="text-gray-200 font-semibold">진짜 서비스</span>를 만듭니다.
                </span>
              </p>
            </div>

            {/* 실시간 운영 지표 */}
            <div className="mb-16 p-6 rounded-2xl bg-gray-800/20 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-200">우리가 만든 것들</h3>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="text-sm text-green-400">실제 작동 중</span>
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center hidden md:block">
                  <p className="text-3xl font-bold text-gray-100">5+</p>
                  <p className="text-sm text-gray-400">완성된 프로젝트</p>
                </div>
                <div className="text-center hidden md:block">
                  <p className="text-3xl font-bold text-gray-100">100%</p>
                  <p className="text-sm text-gray-400">프로젝트 완수율</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-100">40%</p>
                  <p className="text-sm text-gray-400">빠른 개발 속도</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-100">24/7</p>
                  <p className="text-sm text-gray-400">기술 지원</p>
                </div>
              </div>
            </div>

            {/* 실제 프로젝트 쇼케이스 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-200 mb-8 text-center">
                실제 운영 중인 프로젝트
              </h2>

              {/* 프로젝트 선택 탭 */}
              <div className="flex justify-center gap-2 mb-8 flex-wrap">
                {liveProjects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => setActiveProject(project.id)}
                    className={`px-6 py-3 rounded-full transition-all font-medium ${
                      activeProject === project.id
                        ? "bg-gradient-to-r " + project.color + " text-white shadow-lg"
                        : "bg-gray-800/60 text-gray-300 hover:bg-gray-700/80"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {project.status === "LIVE" && (
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                      )}
                      {project.name}
                    </span>
                  </button>
                ))}
              </div>

              {/* 선택된 프로젝트 상세 */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* 왼쪽: 프로젝트 정보 */}
                <div className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-100">{currentProject.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      currentProject.status === "LIVE" 
                        ? "bg-green-500/20 text-green-400 border border-green-500/50"
                        : currentProject.status === "DEVELOPMENT"
                        ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/50"
                        : "bg-blue-500/20 text-blue-400 border border-blue-500/50"
                    }`}>
                      {currentProject.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 mb-6">{currentProject.description}</p>

                  {/* 핵심 지표 */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(currentProject.metrics).map(([key, value]) => (
                      <div key={key} className="bg-gray-900/50 rounded-lg p-4">
                        <p className="text-2xl font-bold text-gray-200">{value}</p>
                        <p className="text-xs text-gray-500 capitalize">{key.replace('_', ' ')}</p>
                      </div>
                    ))}
                  </div>

                  {/* 기술 스택 */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">사용 기술</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.tech.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 오른쪽: 주요 기능 */}
                <div className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur">
                  <h4 className="text-lg font-semibold text-gray-200 mb-6">핵심 기능</h4>
                  <div className="space-y-4">
                    {currentProject.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className={`flex items-start gap-3 ${idx >= 2 ? 'hidden md:flex' : ''}`}>
                        <div className={`w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center flex-shrink-0`}>
                          <span className="text-white text-sm font-bold">{idx + 1}</span>
                        </div>
                        <p className="text-gray-300">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-gray-800/20 rounded-lg border border-gray-700">
                    <p className="text-sm text-gray-400">
                      <span className="font-semibold">실제 서비스 확인</span><br />
                      {currentProject.liveUrl ? (
                        <a 
                          href={currentProject.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-indigo-400 hover:text-indigo-300 underline mt-1 block"
                        >
                          🔗 {currentProject.liveUrl}
                        </a>
                      ) : (
                        <span className="text-xs text-gray-400 mt-1 block">
                          NDA 체결 후 실제 운영 중인 서비스를 직접 확인하실 수 있습니다
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 왜 코넥서스인가? */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-200 mb-8 text-center">
                우리가 특별한 이유
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-800/30 rounded-2xl p-6 backdrop-blur">
                  <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-gray-400 text-sm font-bold">01</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-200 mb-2">레거시도 해결</h3>
                  <p className="text-gray-400 text-sm">
                    다른 개발자가 포기한 프로젝트<br />
                    우리는 살려냅니다
                  </p>
                </div>

                <div className="bg-gray-800/30 rounded-2xl p-6 backdrop-blur">
                  <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-gray-400 text-sm font-bold">02</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-200 mb-2">40% 빠른 개발</h3>
                  <p className="text-gray-400 text-sm">
                    이경환 기술이사의<br />
                    상위 10% 기술력
                  </p>
                </div>

                <div className="bg-gray-800/30 rounded-2xl p-6 backdrop-blur">
                  <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-gray-400 text-sm font-bold">03</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-200 mb-2">끝까지 책임</h3>
                  <p className="text-gray-400 text-sm">
                    프로젝트 중단? 없습니다<br />
                    100% 완수율
                  </p>
                </div>
              </div>

              {/* 특별한 강점 추가 */}
              <div className="mt-8 p-6 bg-gray-800/20 rounded-2xl border border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">!</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-200 mb-2">
                      다른 개발사가 포기한 프로젝트도 우리는 해결합니다
                    </h3>
                    <p className="text-sm text-gray-400">
                      15년된 레거시 시스템, 아무도 건드리지 못하던 스파게티 코드, 
                      문서도 없고 원 개발자도 없는 프로젝트... 
                      <span className="text-gray-300">우리는 이런 것들을 정상화시킨 경험이 있습니다.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 팀 소개 - 간단히 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-200 mb-8 text-center">
                핵심 팀
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-white font-bold">경영</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-200">김영아</h3>
                  <p className="text-sm text-gray-400 mb-2">대표이사</p>
                  <p className="text-xs text-gray-500">프로젝트 총괄 · 품질 보증</p>
                </div>

                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl text-white font-bold">기술</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-200">이경환</h3>
                  <p className="text-sm text-gray-400 mb-2">기술이사 (CTO)</p>
                  <p className="text-xs text-gray-500">상위 10% 기술력 · 40% 빠른 개발</p>
                </div>

                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl text-white font-bold">사업</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-200">임진석</h3>
                  <p className="text-sm text-gray-400 mb-2">사업이사 (CSO)</p>
                  <p className="text-xs text-gray-500">고객 소통 · 비즈니스 전략</p>
                </div>
              </div>
            </div>

            {/* CTA - 강력한 마무리 */}
            <div className="text-center">
              <div className="inline-flex flex-col items-center">
                <p className="text-2xl font-bold text-gray-200 mb-2">
                  실력으로 증명하겠습니다
                </p>
                <p className="text-gray-400 mb-8">
                  포트폴리오가 아닌, 실제 운영 서비스를 보여드립니다
                </p>
                <div className="flex gap-4">
                  <a
                    href="/quote?type=consultation"
                    className="px-8 py-3 bg-gray-200 text-gray-900 rounded-full font-semibold hover:bg-gray-300 transition-all"
                  >
                    무료 상담 신청
                  </a>
                  <a
                    href="/portfolio"
                    className="px-8 py-3 bg-gray-800 text-gray-300 rounded-full font-semibold hover:bg-gray-700 transition-all border border-gray-700"
                  >
                    프로젝트 더보기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
