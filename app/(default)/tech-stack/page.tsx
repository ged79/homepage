"use client";

import { useTheme } from "@/components/theme-provider";
import PageIllustration from "@/components/page-illustration";
import { 
  FaReact, FaVuejs, FaAngular, FaSass, FaNodeJs, FaPython, FaJava, FaDocker,
  FaAws, FaGoogle, FaGitAlt, FaFigma, FaGithub, FaDatabase
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiWebpack, SiSwift,
  SiKotlin, SiExpo, SiIonic, SiExpress, SiNestjs, SiDjango, SiFastapi,
  SiSpring, SiGraphql, SiPostgresql, SiMysql, SiMongodb, SiRedis,
  SiSupabase, SiFirebase, SiPrisma, SiElasticsearch,
  SiKubernetes, SiVercel, SiNetlify, SiPostman,
  SiJest, SiCypress, SiStorybook, SiEslint, SiGo, SiFlutter,
  SiAndroid
} from "react-icons/si";
import { BiLogoFlutter } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";

const techStacks = {
  frontend: {
    title: "프론트엔드",
    technologies: [
      { name: "React", Icon: FaReact, description: "컴포넌트 기반 UI 라이브러리", color: "text-cyan-400" },
      { name: "Next.js", Icon: SiNextdotjs, description: "React 풀스택 프레임워크", color: "text-white" },
      { name: "Vue.js", Icon: FaVuejs, description: "프로그레시브 JS 프레임워크", color: "text-green-500" },
      { name: "Angular", Icon: FaAngular, description: "엔터프라이즈 웹 프레임워크", color: "text-red-600" },
      { name: "TypeScript", Icon: SiTypescript, description: "타입 안정성 JavaScript", color: "text-blue-600" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, description: "유틸리티 CSS 프레임워크", color: "text-cyan-500" },
      { name: "Sass/SCSS", Icon: FaSass, description: "CSS 전처리기", color: "text-pink-500" },
      { name: "Webpack", Icon: SiWebpack, description: "모듈 번들러", color: "text-blue-500" }
    ]
  },
  mobile: {
    title: "모바일",
    technologies: [
      { name: "React Native", Icon: TbBrandReactNative, description: "크로스 플랫폼 앱 개발", color: "text-cyan-400" },
      { name: "Flutter", Icon: SiFlutter, description: "Google 크로스 플랫폼", color: "text-blue-400" },
      { name: "Swift", Icon: SiSwift, description: "iOS 네이티브 개발", color: "text-orange-500" },
      { name: "SwiftUI", Icon: SiSwift, description: "선언형 iOS UI 프레임워크", color: "text-orange-400" },
      { name: "Kotlin", Icon: SiKotlin, description: "Android 네이티브 개발", color: "text-purple-600" },
      { name: "Jetpack Compose", Icon: SiAndroid, description: "선언형 Android UI", color: "text-green-600" },
      { name: "Expo", Icon: SiExpo, description: "React Native 개발 툴체인", color: "text-gray-300" },
      { name: "Ionic", Icon: SiIonic, description: "하이브리드 앱 프레임워크", color: "text-blue-500" }
    ]
  },
  backend: {
    title: "백엔드",
    technologies: [
      { name: "Node.js", Icon: FaNodeJs, description: "JavaScript 런타임", color: "text-green-600" },
      { name: "Express.js", Icon: SiExpress, description: "Node.js 웹 프레임워크", color: "text-gray-400" },
      { name: "NestJS", Icon: SiNestjs, description: "엔터프라이즈 Node.js", color: "text-red-600" },
      { name: "Django", Icon: SiDjango, description: "Python 웹 프레임워크", color: "text-green-700" },
      { name: "FastAPI", Icon: SiFastapi, description: "모던 Python API", color: "text-teal-500" },
      { name: "Spring", Icon: SiSpring, description: "Java 엔터프라이즈", color: "text-green-500" },
      { name: "Go", Icon: SiGo, description: "고성능 백엔드 언어", color: "text-cyan-500" },
      { name: "GraphQL", Icon: SiGraphql, description: "API 쿼리 언어", color: "text-pink-600" }
    ]
  },
  database: {
    title: "데이터베이스",
    technologies: [
      { name: "PostgreSQL", Icon: SiPostgresql, description: "관계형 데이터베이스", color: "text-blue-600" },
      { name: "MySQL", Icon: SiMysql, description: "오픈소스 RDBMS", color: "text-orange-600" },
      { name: "MongoDB", Icon: SiMongodb, description: "NoSQL 문서 DB", color: "text-green-600" },
      { name: "Redis", Icon: SiRedis, description: "인메모리 캐시", color: "text-red-600" },
      { name: "Supabase", Icon: SiSupabase, description: "오픈소스 BaaS", color: "text-green-500" },
      { name: "Firebase", Icon: SiFirebase, description: "Google 실시간 DB", color: "text-yellow-500" },
      { name: "Prisma", Icon: SiPrisma, description: "타입세이프 ORM", color: "text-gray-300" },
      { name: "ElasticSearch", Icon: SiElasticsearch, description: "검색 엔진", color: "text-yellow-400" }
    ]
  },
  devops: {
    title: "DevOps & 클라우드",
    technologies: [
      { name: "AWS", Icon: FaAws, description: "Amazon 클라우드", color: "text-orange-500" },
      { name: "Google Cloud", Icon: FaGoogle, description: "Google 클라우드", color: "text-blue-500" },
      { name: "Azure", Icon: FaGoogle, description: "Microsoft 클라우드", color: "text-blue-600" },
      { name: "Docker", Icon: FaDocker, description: "컨테이너 플랫폼", color: "text-blue-500" },
      { name: "Kubernetes", Icon: SiKubernetes, description: "컨테이너 오케스트레이션", color: "text-blue-600" },
      { name: "GitHub Actions", Icon: FaGithub, description: "CI/CD 자동화", color: "text-gray-300" },
      { name: "Vercel", Icon: SiVercel, description: "프론트엔드 배포", color: "text-white" },
      { name: "Netlify", Icon: SiNetlify, description: "정적 사이트 호스팅", color: "text-teal-500" }
    ]
  },
  tools: {
    title: "개발 도구",
    technologies: [
      { name: "Git", Icon: FaGitAlt, description: "버전 관리", color: "text-orange-600" },
      { name: "VS Code", Icon: VscCode, description: "코드 에디터", color: "text-blue-500" },
      { name: "Figma", Icon: FaFigma, description: "UI/UX 디자인", color: "text-purple-500" },
      { name: "Postman", Icon: SiPostman, description: "API 테스트", color: "text-orange-500" },
      { name: "Jest", Icon: SiJest, description: "JavaScript 테스팅", color: "text-red-600" },
      { name: "Cypress", Icon: SiCypress, description: "E2E 테스팅", color: "text-green-600" },
      { name: "Storybook", Icon: SiStorybook, description: "컴포넌트 개발", color: "text-pink-500" },
      { name: "ESLint", Icon: SiEslint, description: "코드 품질", color: "text-purple-600" }
    ]
  }
};

export default function TechStackPage() {
  return (
    <>
      <PageIllustration />
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 pt-16 md:py-20 md:pt-32">
            {/* Header */}
            <div className="mx-auto max-w-3xl pb-8 md:pb-12 text-center">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text text-transparent text-3xl md:text-4xl font-semibold pb-2">
                기술 스택
              </h1>
              <p className="text-base md:text-lg text-gray-400">
                최신 기술로 최고의 결과를 만들어냅니다
              </p>
            </div>

            {/* Tech Stack Categories */}
            <div className="space-y-12">
              {Object.entries(techStacks).map(([key, category]) => (
                <div key={key}>
                  {/* Category Header */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-100">
                      {category.title}
                    </h2>
                  </div>

                  {/* Technology Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {category.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-4 backdrop-blur-sm transition-all hover:scale-105 hover:from-gray-800/60 hover:to-gray-700/60 border border-gray-700/50 hover:border-indigo-500/50"
                      >
                        <div className="flex flex-col items-center text-center space-y-2">
                          <tech.Icon className={`text-4xl ${tech.color}`} />
                          <h3 className="font-semibold text-gray-200">
                            {tech.name}
                          </h3>
                          <p className="text-xs text-gray-400">
                            {tech.description}
                          </p>
                        </div>
                        
                        {/* Hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
              <div className="inline-flex flex-col items-center">
                <p className="text-gray-400 mb-6">
                  프로젝트에 최적화된 기술 스택을 제안해드립니다
                </p>
                <a
                  href="/quote"
                  className="btn group relative bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
                >
                  <span className="relative inline-flex items-center">
                    기술 상담 받기
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}