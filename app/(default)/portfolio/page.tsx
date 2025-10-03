"use client";

import { useState } from "react";
import PageIllustration from "@/components/page-illustration";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "RAINBOW-F",
      category: "ecommerce",
      description: "꽃 배달 통합 플랫폼",
      image: "/images/screenshot.jpg",
      tags: ["Next.js", "Supabase", "PG연동"],
      period: "2024.08 - 2024.11",
      client: "레인보우꽃집",
      result: "고객이 만족하는 홈페이지 구축"
    },
    {
      id: 2,
      title: "코넥서스 홈페이지",
      category: "corporate",
      description: "IT 개발회사 브랜드 사이트",
      image: "/images/pc.jpg",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      period: "2024.12 - 2025.01",
      client: "자사",
      result: ""
    },
    {
      id: 3,
      title: "헬스케어 플랫폼",
      category: "platform",
      description: "커뮤니티케어 통합 시스템",
      image: "/images/developing.jpg",
      tags: ["Next.js", "Node.js", "PostgreSQL"],
      period: "2024.05 - 2024.08",
      client: "청산노인복지센터",
      result: "업무효율성 증가 및 정부 정책 대응"
    },
    {
      id: 4,
      title: "방산전시회사 홈페이지",
      category: "ecommerce",
      description: "패션 쇼핑몰 전면 개편",
      image: "/images/pc3.jpg",
      tags: ["Vue.js", "Laravel", "MySQL"],
      period: "2024.01 - 2024.03",
      client: "DXKorea",
      result: "홈페이지 버그 수정 및 보안 강화"
    },
    {
      id: 5,
      title: "모바일 앱",
      category: "mobile",
      description: "장례식장 관리앱",
      image: "/images/maint.jpg",
      tags: ["React Native", "Node.js", "MongoDB"],
      period: "2023.10 - 2024.01",
      client: "oo장례식장",
      result: "DAU 10만 달성"
    }
  ];

  const categories = [
    { id: "all", label: "전체" },
    { id: "ecommerce", label: "이커머스" },
    { id: "corporate", label: "기업 홈페이지" },
    { id: "platform", label: "플랫폼" },
    { id: "mobile", label: "모바일" }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <>
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 pt-16 md:py-20 md:pt-32">
          {/* Header */}
          <div className="mx-auto max-w-3xl pb-8 md:pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text text-transparent text-3xl md:text-4xl font-semibold pb-2">
              포트폴리오
            </h1>
            <p className="text-base md:text-lg text-gray-400">
              성공적으로 완료한 프로젝트들
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8 md:mb-12 flex justify-center">
            <div className="inline-flex flex-wrap justify-center rounded-full bg-gray-800/40 p-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`mx-1 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium rounded-full transition-all ${
                    selectedCategory === cat.id
                      ? "bg-gradient-to-b from-indigo-600 to-indigo-500 text-white shadow-lg"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 backdrop-blur-sm border border-gray-700/50"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden bg-gray-800">
                  {project.image ? (
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="text-4xl opacity-30">🚀</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 md:p-6">
                  <h3 className="mb-2 text-lg md:text-xl font-semibold text-gray-200">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm text-indigo-200/65">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Details */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">기간</span>
                      <span className="text-gray-400">{project.period}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">클라이언트</span>
                      <span className="text-gray-400">{project.client}</span>
                    </div>
                    {project.result && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">성과</span>
                        <span className="text-indigo-400 font-semibold">{project.result}</span>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 md:mt-16 text-center">
            <div className="mx-auto max-w-2xl rounded-2xl bg-gradient-to-r from-indigo-900/30 to-purple-900/30 p-6 md:p-8 backdrop-blur-sm">
              <h3 className="mb-3 md:mb-4 text-xl md:text-2xl font-semibold text-gray-200">
                프로젝트를 시작하실 준비가 되셨나요?
              </h3>
              <p className="mb-5 md:mb-6 text-sm md:text-base text-indigo-200/65">
                귀사의 아이디어를 현실로 만들어드립니다
              </p>
              <a
                href="/quote"
                className="inline-flex items-center px-5 md:px-6 py-2.5 md:py-3 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-full hover:from-indigo-500 hover:to-indigo-600 transition-colors"
              >
                프로젝트 상담받기
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
