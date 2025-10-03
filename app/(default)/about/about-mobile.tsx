"use client";

import { useState } from "react";

export default function AboutMobile() {
  const [activeTab, setActiveTab] = useState(0);
  
  const projects = [
    { name: "쇼핑몰", status: "운영중", url: "https://sage-gecko-0b9542.netlify.app" },
    { name: "체인점 관리", status: "운영중" },
    { name: "PWA 앱", status: "개발중" },
    { name: "레거시 복구", status: "완료" }
  ];

  return (
    <div className="md:hidden px-4 py-20">
      {/* 헤더 */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-100 mb-4">
          실제 서비스를 만듭니다
        </h1>
        <div className="flex justify-center gap-8 text-center">
          <div>
            <p className="text-2xl font-bold text-gray-100">5+</p>
            <p className="text-xs text-gray-400">프로젝트</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-100">100%</p>
            <p className="text-xs text-gray-400">완수율</p>
          </div>
        </div>
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
