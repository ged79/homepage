"use client";

import { useState } from "react";

export default function AboutMobile() {
  const [activeTab, setActiveTab] = useState(0);
  
  const projects = [
    { name: "쇼핑몰", status: "운영중", url: "https://sage-gecko-0b9542.netlify.app" },
    { name: "체인점 관리", status: "운영중" },
    { name: "PWA 앱", status: "개발중" },
    { name: "레거시 복구", status: "완료", url: "https://dxkorea.org/" }
  ];

  return (
    <div className="md:hidden px-4 pt-16 pb-12">
      {/* 헤더 */}
      <div className="text-center pb-8 md:pb-12">
        <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text text-transparent text-3xl font-semibold pb-2">
          실제 서비스를 만듭니다
        </h1>
        <p className="text-base text-gray-400">
          지금도 실제로 작동하고, 돈이 오가고, 사람들이 사용하는<br />
          진짜 서비스를 만듭니다.
        </p>
      </div>

      {/* 수치 */}
      <div className="mb-12">
        <div className="flex justify-center gap-8 text-center">
          <div>
            <p className="text-2xl font-bold text-gray-100">5+</p>
            <p className="text-xs text-gray-400">프로젝트</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-100">100%</p>
            <p className="text-xs text-gray-400">완수율</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-100">10+</p>
            <p className="text-xs text-gray-400">년 경력</p>
          </div>
        </div>
      </div>

      {/* 회사 소개 */}
      <div className="mb-12 bg-gray-800/30 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-gray-200 mb-4">코넥서스는</h2>
        <p className="text-sm text-gray-300 mb-4">
          웹/앱 개발 전문 기업으로, 단순한 외주 개발이 아닌 
          고객의 비즈니스 파트너가 되어 함께 성장합니다.
        </p>
        <p className="text-sm text-gray-300">
          우리의 차별점은 <span className="text-gray-100 font-medium">실제로 작동하는 서비스</span>를 
          만든다는 것입니다. 포트폴리오용 데모가 아닌, 실제 사용자가 이용하고 
          매출이 발생하는 서비스를 구축합니다.
        </p>
      </div>

      {/* 프로젝트 리스트 */}
      <div className="mb-12">
        <h2 className="text-lg font-bold text-gray-200 mb-4">실제 프로젝트</h2>
        <div className="space-y-3">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-gray-800/30 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="text-gray-200 font-medium">{project.name}</p>
                <p className="text-xs text-gray-400">{project.status}</p>
              </div>
              {project.url && (
                <a href={project.url} target="_blank" className="text-blue-400 text-sm">
                  보기 →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 핵심 강점 */}
      <div className="mb-12">
        <h2 className="text-lg font-bold text-gray-200 mb-4">왜 코넥서스</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚡</span>
            <div>
              <p className="text-gray-200 font-medium">40% 빠른 개발</p>
              <p className="text-xs text-gray-400">상위 10% 기술력</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🔧</span>
            <div>
              <p className="text-gray-200 font-medium">레거시도 해결</p>
              <p className="text-xs text-gray-400">포기한 프로젝트 복구</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <div>
              <p className="text-gray-200 font-medium">끝까지 책임</p>
              <p className="text-xs text-gray-400">100% 프로젝트 완수</p>
            </div>
          </div>
        </div>
      </div>

      {/* 팀 소개 */}
      <div className="mb-12">
        <h2 className="text-lg font-bold text-gray-200 mb-4">핵심 팀</h2>
        <div className="space-y-4">
          <div className="bg-gray-800/30 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">경영</span>
              </div>
              <div>
                <p className="text-gray-200 font-medium">김영아 대표</p>
                <p className="text-xs text-gray-400">프로젝트 총괄 · 품질 보증</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800/30 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">기술</span>
              </div>
              <div>
                <p className="text-gray-200 font-medium">이경환 CTO</p>
                <p className="text-xs text-gray-400">상위 10% 기술력 · 빠른 개발</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800/30 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">사업</span>
              </div>
              <div>
                <p className="text-gray-200 font-medium">임진석 CSO</p>
                <p className="text-xs text-gray-400">고객 소통 · 비즈니스 전략</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center space-y-3">
        <a href="/quote" className="block w-full py-3 bg-gray-200 text-gray-900 rounded-full font-medium">
          무료 상담 신청
        </a>
        <a href="/portfolio" className="block w-full py-3 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
          더 알아보기
        </a>
      </div>
    </div>
  );
}
