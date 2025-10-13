"use client";

import Image from "next/image";
import WorkflowsMobile from "@/components/workflows-mobile";
import WorkflowImg01 from "@/public/images/workflow-01.png";
import WorkflowImg02 from "@/public/images/workflow-02.png";
import WorkflowImg03 from "@/public/images/workflow-03.png";
// 라이트모드용 원본 이미지 (추가 필요)
// import WorkflowImg01Light from "@/public/images/consulting-light.jpg";
// import WorkflowImg02Light from "@/public/images/developing-light.jpg";
// import WorkflowImg03Light from "@/public/images/maint-light.jpg";
import Spotlight from "@/components/spotlight";
import { useTheme } from "@/components/theme-provider";

export default function Workflows() {
  const { isDarkMode } = useTheme();
  return (
    <>
      {/* Mobile version */}
      <WorkflowsMobile />
      
      {/* Desktop version */}
      <section className="hidden md:block">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className={`inline-flex items-center gap-3 before:h-px before:w-8 ${isDarkMode ? 'before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50' : 'before:bg-gradient-to-r before:from-transparent before:to-indigo-600/50 after:bg-gradient-to-l after:from-transparent after:to-indigo-600/50'} after:h-px after:w-8`}>
              <span className={`inline-flex ${isDarkMode ? 'bg-gradient-to-r from-indigo-500 to-indigo-200' : 'bg-gradient-to-r from-indigo-600 to-indigo-400'} bg-clip-text text-transparent`}>
                개발 프로세스
              </span>
            </div>
            <h2 className={`animate-[gradient_6s_linear_infinite] ${isDarkMode ? 'bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))]' : 'bg-[linear-gradient(to_right,theme(colors.gray.900),theme(colors.indigo.600),theme(colors.gray.900),theme(colors.indigo.600),theme(colors.gray.900))]'} bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-2xl font-semibold text-transparent md:text-4xl`}>
              체계적인 프로젝트 진행 과정
            </h2>
            <p className={`text-base md:text-lg ${isDarkMode ? 'text-indigo-200/65' : 'text-gray-600'}`}>
              <span className="md:hidden">애자일과 DevOps로 빠른 개발</span>
              <span className="hidden md:inline">
                요구사항 분석부터 배포까지 애자일 방법론과 DevOps 문화로
                빠르고 안정적인 개발을 보장합니다. 매 단계마다 고객과 긴밀히 소통합니다.
              </span>
            </p>
          </div>
          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 grid-cols-1 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 */}
            <a
              className={`group/card relative h-full overflow-hidden rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-indigo-50/30'} p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full ${isDarkMode ? 'before:bg-indigo-500/80' : 'before:bg-indigo-600/50'} before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full ${isDarkMode ? 'after:bg-indigo-500' : 'after:bg-purple-600/50'} after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 ${isDarkMode ? 'hover:after:opacity-20' : 'hover:after:opacity-40'} group-hover:before:opacity-100`}
              href="#0"
              style={!isDarkMode ? {
                background: 'linear-gradient(135deg, #EEF2FF 0%, #FFFFFF 50%, #F3E8FF 100%)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                boxShadow: '0 4px 6px -1px rgba(99, 102, 241, 0.1), 0 2px 4px -1px rgba(99, 102, 241, 0.06)'
              } : {}}
            >
              <div className={`relative z-20 h-full overflow-hidden rounded-[inherit] ${isDarkMode ? 'bg-gray-950' : 'bg-white/95 backdrop-blur-sm'}`}>
                {/* Arrow */}
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      fill="#F4F4F5"
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div>
                {/* Image */}
                <Image
                  className="inline-flex w-full h-72 object-cover"
                  src={WorkflowImg01}
                  width={350}
                  height={288}
                  alt="상담 및 기획 프로세스"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className={`btn-sm relative rounded-full ${isDarkMode ? 'bg-gray-800/40 hover:bg-gray-800/60' : 'bg-gray-100 hover:bg-gray-200'} px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]`}>
                      <span className={`bg-gradient-to-r ${isDarkMode ? 'from-indigo-500 to-indigo-200' : 'from-indigo-600 to-indigo-400'} bg-clip-text text-transparent`}>
                        상담 & 기획 & 디자인
                      </span>
                    </span>
                  </div>
                  <p className={isDarkMode ? "text-indigo-200/65" : "text-gray-600"}>
                    고객의 비즈니스 목표를 분석하고 사용자 중심의
                    UI/UX를 설계합니다. 초기 상담부터 프로토타입까지.
                  </p>
                </div>
              </div>
            </a>
            {/* Card 2 */}
            <a
              className={`group/card relative h-full overflow-hidden rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-indigo-50/30'} p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full ${isDarkMode ? 'before:bg-indigo-500/80' : 'before:bg-indigo-600/50'} before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full ${isDarkMode ? 'after:bg-indigo-500' : 'after:bg-purple-600/50'} after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 ${isDarkMode ? 'hover:after:opacity-20' : 'hover:after:opacity-40'} group-hover:before:opacity-100`}
              href="#0"
              style={!isDarkMode ? {
                background: 'linear-gradient(135deg, #EEF2FF 0%, #FFFFFF 50%, #F3E8FF 100%)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                boxShadow: '0 4px 6px -1px rgba(99, 102, 241, 0.1), 0 2px 4px -1px rgba(99, 102, 241, 0.06)'
              } : {}}
            >
              <div className={`relative z-20 h-full overflow-hidden rounded-[inherit] ${isDarkMode ? 'bg-gray-950' : 'bg-white/95 backdrop-blur-sm'}`}>
                {/* Arrow */}
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      fill="#F4F4F5"
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div>
                {/* Image */}
                <Image
                  className="inline-flex w-full h-72 object-cover"
                  src={WorkflowImg02}
                  width={350}
                  height={288}
                  alt="개발 및 테스트 프로세스"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className={`btn-sm relative rounded-full ${isDarkMode ? 'bg-gray-800/40 hover:bg-gray-800/60' : 'bg-gray-100 hover:bg-gray-200'} px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]`}>
                      <span className={`bg-gradient-to-r ${isDarkMode ? 'from-indigo-500 to-indigo-200' : 'from-indigo-600 to-indigo-400'} bg-clip-text text-transparent`}>
                        개발 & 테스트
                      </span>
                    </span>
                  </div>
                  <p className={isDarkMode ? "text-indigo-200/65" : "text-gray-600"}>
                    최신 기술 스택으로 개발하고 철저한 테스트를 진행합니다.
                    CI/CD 파이프라인으로 안정적인 배포를 보장합니다.
                  </p>
                </div>
              </div>
            </a>
            {/* Card 3 */}
            <a
              className={`group/card relative h-full overflow-hidden rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-indigo-50/30'} p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full ${isDarkMode ? 'before:bg-indigo-500/80' : 'before:bg-indigo-600/50'} before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full ${isDarkMode ? 'after:bg-indigo-500' : 'after:bg-purple-600/50'} after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 ${isDarkMode ? 'hover:after:opacity-20' : 'hover:after:opacity-40'} group-hover:before:opacity-100`}
              href="#0"
              style={!isDarkMode ? {
                background: 'linear-gradient(135deg, #EEF2FF 0%, #FFFFFF 50%, #F3E8FF 100%)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                boxShadow: '0 4px 6px -1px rgba(99, 102, 241, 0.1), 0 2px 4px -1px rgba(99, 102, 241, 0.06)'
              } : {}}
            >
              <div className={`relative z-20 h-full overflow-hidden rounded-[inherit] ${isDarkMode ? 'bg-gray-950' : 'bg-white/95 backdrop-blur-sm'}`}>
                {/* Arrow */}
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      fill="#F4F4F5"
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div>
                {/* Image */}
                <Image
                  className="inline-flex w-full h-72 object-cover"
                  src={WorkflowImg03}
                  width={350}
                  height={288}
                  alt="배포 및 유지보수 프로세스"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className={`btn-sm relative rounded-full ${isDarkMode ? 'bg-gray-800/40 hover:bg-gray-800/60' : 'bg-gray-100 hover:bg-gray-200'} px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]`}>
                      <span className={`bg-gradient-to-r ${isDarkMode ? 'from-indigo-500 to-indigo-200' : 'from-indigo-600 to-indigo-400'} bg-clip-text text-transparent`}>
                        배포 & 유지보수
                      </span>
                    </span>
                  </div>
                  <p className={isDarkMode ? "text-indigo-200/65" : "text-gray-600"}>
                    안정적인 배포와 지속적인 모니터링으로
                    서비스 품질을 보장합니다. 24/7 지원 체계 운영.
                  </p>
                </div>
              </div>
            </a>
          </Spotlight>
        </div>
      </div>
    </section>
      </>
  );
}
