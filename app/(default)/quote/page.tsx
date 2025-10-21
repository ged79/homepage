"use client";

import { useState } from "react";
import PageIllustration from "@/components/page-illustration";
import { useTheme } from "@/components/theme-provider";

export default function QuotePage() {
  const { isDarkMode } = useTheme();
  const searchParams = typeof window !== 'undefined' 
    ? new URLSearchParams(window.location.search)
    : null;
  const initialType = searchParams?.get('type') === 'consultation';
  
  const [isConsultation, setIsConsultation] = useState(initialType);
  const [selectedCase, setSelectedCase] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    budget: "",
    timeline: "",
    message: ""
  });

  // 페이지 타이틀 설정
  const pageTitle = isConsultation 
    ? "무료 상담 신청" 
    : "프로젝트 규모별 견적";
  
  const pageSubtitle = isConsultation
    ? "부담없이 문의하세요. 24시간 내 답변드립니다."
    : "프로젝트 규모에 맞는 최적의 솔루션을 제공합니다";

  // 실제 프로젝트 사례들
  const realProjects = [
    {
      id: 0,
      category: "소규모 프로젝트",
      title: "스타트업 랜딩 페이지",
      price: "200-800만원",
      duration: "1-2주",
      image: "/images/pc1.jpg",
      description: "빠르게 제작하는 원페이지 사이트",
      features: [
        "✓ 원페이지 구성",
        "✓ 반응형 디자인",
        "✓ 문의 폼",
        "✓ SEO 기본 설정",
        "✓ 애니메이션 효과",
        "✓ SNS 연동"
      ],
      tech: ["Next.js", "Tailwind CSS"],
      suitable: "스타트업, 이벤트, 포트폴리오, 제품 소개"
    },
    {
      id: 1,
      category: "기업 홈페이지",
      title: "코넥서스 - IT 개발회사",
      price: "600-3,000만원",
      duration: "2-6주",
      image: "/images/pc.jpg",
      description: "기업 브랜드 홈페이지",
      features: [
        "✓ 회사 소개",
        "✓ 서비스/제품 소개",
        "✓ 포트폴리오",
        "✓ 뉴스/공지사항",
        "✓ 문의/견적 시스템",
        "✓ 관리자 페이지",
        "✓ SEO 최적화"
      ],
      tech: ["Next.js", "TypeScript", "Strapi CMS"],
      suitable: "중소기업, 스타트업, 전문회사, 제조업, 서비스업"
    },
    {
      id: 2,
      category: "쇼핑몰/서비스",
      title: "BLOOM Flower - 꽃 배달 서비스",
      price: "1,500-3,500만원",
      duration: "4-8주",
      image: "/images/screenshot.jpg",
      description: "온라인 커머스 & 서비스 플랫폼",
      features: [
        "✓ 회원 시스템",
        "✓ 상품 관리",
        "✓ 장바구니/결제",
        "✓ 포인트/쿠폰",
        "✓ 주문 관리",
        "✓ 배송 추적",
        "✓ 리뷰 시스템",
        "✓ 관리자 대시보드",
        "✓ 모바일 앱 (PWA)"
      ],
      tech: ["Next.js", "Supabase", "PG연동", "SMS/알림톡"],
      suitable: "온라인 쇼핑몰, 예약 시스템, 멤버십 사이트, 교육 플랫폼"
    },
    {
      id: 3,
      category: "플랫폼",
      title: "BLOOM 통합 플랫폼",
      price: "3,000-5,000만원",
      duration: "6-10주",
      image: "/images/pc3.jpg",
      description: "다중 사용자 통합 플랫폼",
      features: [
        "✓ 고객용 홈페이지",
        "✓ 관리자 시스템",
        "✓ 가맹점/파트너 시스템",
        "✓ 실시간 주문 분배",
        "✓ 정산 시스템",
        "✓ 통계/리포트",
        "✓ API 연동",
        "✓ 다중 사업자 관리"
      ],
      tech: ["Next.js", "Node.js", "PostgreSQL", "실시간 동기화"],
      suitable: "프랜차이즈, 배달 중개, 인력 매칭, 다점포 관리, 마켓플레이스"
    },
    {
      id: 4,
      category: "헬스케어 플랫폼",
      title: "커뮤니티케어 통합 시스템",
      price: "5,000만원~",
      duration: "8-12주",
      image: "/images/developing.jpg",
      description: "고령화 시대 건강관리 플랫폼",
      features: [
        "✓ 회원 건강 관리",
        "✓ 의료기관 연계",
        "✓ 복약/진료 알림",
        "✓ 건강 데이터 수집",
        "✓ 보호자 연동",
        "✓ 응급 알림 시스템",
        "✓ 리포트/통계",
        "✓ 모바일 앱 지원"
      ],
      tech: ["Next.js", "Node.js", "PostgreSQL", "IoT 연동"],
      suitable: "지자체, 요양기관, 의료기관, 복지시설, 실버타운"
    },
    {
      id: 5,
      category: "맞춤 제작",
      title: "고객 맞춤 개발",
      price: "별도 협의",
      duration: "프로젝트별 상이",
      image: "/images/custom.jpg",
      description: "AI, LMS, ERP 등 특수 목적 시스템",
      features: [
        "✓ AI 챗봇/크롤링/데이터분석",
        "✓ 웹 및 홈페이지",
        "✓ 모바일앱",
        "✓ 커머스",
        "✓ 플랫폼",
        "✓ LMS (온라인 교육 시스템)",
        "✓ 사내 시스템 (ERP, MES 등)",
        "✓ 기타 맞춤 개발"
      ],
      tech: ["요구사항 기반 선정"],
      suitable: "AI 솔루션, 교육 플랫폼, 업무 자동화, 특수 목적 소프트웨어"
    }
  ];

  const currentProject = realProjects[selectedCase];

<<<<<<< HEAD
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // EmailJS import
      const emailjs = (await import('@emailjs/browser')).default;
      
      // EmailJS 초기화
      emailjs.init('yosbct3vEbp9y_9az');
      
      // EmailJS로 전송
      await emailjs.send(
        'service_hzglkqs',
        'template_fa1zx7f',
        {
          to_email: 'conexus25@conexus.co.kr',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company || '-',
          budget: formData.budget || '-',
          timeline: formData.timeline || '-',
          message: formData.message || '-',
          project: currentProject?.title || '-'
        }
      );
      
      const message = isConsultation 
        ? "무료 상담 신청이 접수되었습니다. 24시간 내 연락드리겠습니다."
        : "견적 요청이 접수되었습니다. 24시간 내 견적서를 보내드리겠습니다.";
      alert(message);
      
      setFormData({
        name: "", company: "", email: "", phone: "",
        budget: "", timeline: "", message: ""
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('전송 실패. 직접 연락주세요: 010-7741-4569');
    }
=======
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = isConsultation 
      ? "무료 상담 신청이 접수되었습니다. 24시간 내에 연락드리겠습니다."
      : "견적 요청이 접수되었습니다. 24시간 내에 상세 견적서를 보내드리겠습니다.";
    alert(message);
>>>>>>> e930f213f982c84ff53205ba7b7747618e288223
  };

  return (
    <>
      <PageIllustration />
      <section className={`relative ${isDarkMode ? '' : 'bg-white'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="py-12 pt-16 md:py-20 md:pt-32">
            {/* Header */}
            <div className="mx-auto max-w-3xl pb-8 md:pb-12 text-center">
              <h1 className={`animate-[gradient_6s_linear_infinite] ${isDarkMode ? 'bg-[linear-gradient(to_right,#e5e7eb,#c7d2fe,#fafafa,#cbd5e1,#e5e7eb)]' : 'bg-[linear-gradient(to_right,theme(colors.gray.900),theme(colors.blue.600),theme(colors.gray.900),theme(colors.blue.600),theme(colors.gray.900))]'} bg-[length:200%_auto] bg-clip-text text-transparent text-3xl md:text-4xl font-semibold pb-2`}>
                {pageTitle}
              </h1>
              <p className={`text-base md:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                {pageSubtitle}
              </p>
            </div>

            {/* 무료 상담일 경우 간단한 폼만 표시 */}
            {isConsultation ? (
              <div className="max-w-2xl mx-auto">
                <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white shadow-lg'} rounded-2xl p-6 md:p-8`}>
                  <h3 className={`text-lg md:text-xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-5 md:mb-6`}>
                    어떤 프로젝트를 준비 중이신가요?
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                    <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                      <div>
                        <input
                          type="text"
                          placeholder="이름 *"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className={`w-full px-3 md:px-4 py-2.5 md:py-3 ${isDarkMode ? 'bg-gray-900 border-gray-700 text-gray-300' : 'bg-white border-gray-400 text-gray-800'} border rounded-lg focus:border-indigo-500 focus:outline-none text-sm md:text-base`}
                        />
                      </div>
                      
                      <div>
                        <input
                          type="tel"
                          placeholder="연락처 *"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className={`w-full px-4 py-3 ${isDarkMode ? 'bg-gray-900 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-800'} border rounded-lg focus:border-indigo-500 focus:outline-none`}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <input
                        type="email"
                        placeholder="이메일 *"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className={`w-full px-4 py-3 ${isDarkMode ? 'bg-gray-900 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-800'} border rounded-lg focus:border-indigo-500 focus:outline-none`}
                      />
                    </div>
                    
                    <div>
                      <input
                        type="text"
                        placeholder="회사명 (선택)"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className={`w-full px-4 py-3 ${isDarkMode ? 'bg-gray-900 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-800'} border rounded-lg focus:border-indigo-500 focus:outline-none`}
                      />
                    </div>
                    
                    <div>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        className={`w-full px-4 py-3 ${isDarkMode ? 'bg-gray-900 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-800'} border rounded-lg focus:border-indigo-500 focus:outline-none`}
                      >
                        <option value="">관심 서비스 선택</option>
                        <option value="website">웹사이트 개발</option>
                        <option value="ecommerce">쇼핑몰 제작</option>
                        <option value="app">모바일 앱 개발</option>
                        <option value="platform">플랫폼 구축</option>
                        <option value="ai">AI 솔루션</option>
                        <option value="other">기타</option>
                      </select>
                    </div>
                    
                    <div>
                      <textarea
                        placeholder="프로젝트에 대해 간단히 설명해주세요"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className={`w-full px-4 py-3 ${isDarkMode ? 'bg-gray-900 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-800'} border rounded-lg focus:border-indigo-500 focus:outline-none`}
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className={`w-full py-4 ${isDarkMode ? 'bg-indigo-600 hover:bg-indigo-500' : 'bg-indigo-700 hover:bg-indigo-800'} rounded-lg text-white font-semibold transition-all text-lg`}
                    >
                      무료 상담 신청하기
                    </button>
                  </form>

                  {/* 혜택 안내 */}
                  <div className={`mt-8 pt-8 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                    <h4 className={`text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>무료 상담 혜택</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className={`flex items-center gap-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                        <span className="text-green-400">✓</span>
                        프로젝트 타당성 검토
                      </div>
                      <div className={`flex items-center gap-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                        <span className="text-green-400">✓</span>
                        예상 견적 안내
                      </div>
                      <div className={`flex items-center gap-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                        <span className="text-green-400">✓</span>
                        최적 기술 스택 제안
                      </div>
                      <div className={`flex items-center gap-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                        <span className="text-green-400">✓</span>
                        개발 일정 컨설팅
                      </div>
                    </div>
                  </div>

                  {/* 연락처 정보 */}
                  <div className={`mt-6 p-4 ${isDarkMode ? 'bg-indigo-900/20 border-indigo-500/30' : 'bg-indigo-50 border-indigo-300'} rounded-lg border`}>
                    <p className={`text-sm ${isDarkMode ? 'text-indigo-300' : 'text-indigo-700'} text-center`}>
                      빠른 상담을 원하시면 직접 연락주세요<br />
<<<<<<< HEAD
                      <span className="font-semibold">📞 010-7741-4569</span> | 
                      <span className="font-semibold"> 📧 conexus25@conexus.co.kr</span>
=======
                      <span className="font-semibold">📞 010-1234-5678</span> | 
                      <span className="font-semibold"> 📧 contact@connexus.kr</span>
>>>>>>> e930f213f982c84ff53205ba7b7747618e288223
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              // 기존 견적 페이지 내용
              <>
                {/* 프로젝트 선택 탭 */}
                <div className="flex justify-center gap-1.5 md:gap-2 mb-6 md:mb-8 flex-wrap">
                  {realProjects.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => setSelectedCase(project.id)}
                      className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full transition-all text-xs md:text-sm lg:text-base ${
                        selectedCase === project.id
                          ? "bg-indigo-500 text-white shadow-lg"
                          : isDarkMode 
                            ? "bg-gray-800/60 text-gray-300 hover:bg-gray-700/80"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      {project.category}
                    </button>
                  ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* 왼쪽: 실제 사례 상세 */}
                  <div className="lg:col-span-2">
                    {selectedCase === 5 ? (
                      // 맞춤 제작 카테고리
                      <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white shadow-lg'} rounded-2xl p-8`}>
                        <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-6`}>맞춤형 프로젝트 선택</h2>
                        
                        {/* 체크박스 리스트 */}
                        <div className="mb-8">
                          <label className={`block text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-3`}>프로젝트 유형 (복수선택 가능)</label>
                          <div className="grid md:grid-cols-2 gap-3">
                            {[
                              "AI 챗봇",
                              "AI 크롤링",
                              "AI 데이터분석",
                              "웹 및 홈페이지",
                              "모바일앱",
                              "커머스",
                              "플랫폼",
                              "LMS (온라인 교육)",
                              "사내 시스템 (ERP/MES)",
                              "기타"
                            ].map((type) => (
                              <label key={type} className={`flex items-center ${isDarkMode ? 'text-gray-300 hover:text-gray-200' : 'text-gray-700 hover:text-gray-900'} cursor-pointer`}>
                                <input
                                  type="checkbox"
                                  className={`mr-2 ${isDarkMode ? 'bg-gray-900 border-gray-600' : 'bg-white border-gray-400'} text-indigo-600 focus:ring-indigo-500 rounded`}
                                />
                                {type}
                              </label>
                            ))}
                          </div>
                        </div>

                        {/* 프로젝트 상세 설명 */}
                        <div className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} pt-6`}>
                          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'} mb-4`}>프로젝트 상세 설명</h3>
                          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-6`}>*** 아래 샘플을 참고하여 작성해주세요 ***</p>
                          
                          <div className="space-y-4">
                            <div>
                              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                                프로젝트 개요
                                <span className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'} block mt-1`}>의뢰하시는 배경과 프로젝트 목표를 알려주세요</span>
                              </label>
                              <textarea
                                className={`w-full px-4 py-2 ${isDarkMode ? 'bg-gray-900 border-gray-700 text-gray-300 placeholder-gray-600' : 'bg-white border-gray-300 text-gray-800 placeholder-gray-400'} border rounded-lg focus:border-indigo-500 focus:outline-none`}
                                rows={3}
                                placeholder="예시: 플랫폼이 직접 계약하고 책임지는 IT 아웃소싱개발 플랫폼을 제작하려 합니다"
                              />
                            </div>
                            
                            <div>
                              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                                주요 기능
                                <span className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'} block mt-1`}>핵심적인 기능이나 화면 구성을 알려주세요</span>
                              </label>
                              <textarea
                                className={`w-full px-4 py-2 ${isDarkMode ? 'bg-gray-900 border-gray-700 text-gray-300 placeholder-gray-600' : 'bg-white border-gray-300 text-gray-800 placeholder-gray-400'} border rounded-lg focus:border-indigo-500 focus:outline-none`}
                                rows={3}
                                placeholder="예시: 로그인/회원가입(이메일, 구글, 카카오), 인앱결제, 상품 리뷰 등"
                              />
                            </div>
                            
                            <div>
                              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                                레퍼런스
                                <span className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'} block mt-1`}>유사한 서비스가 있다면 알려주세요</span>
                              </label>
                              <textarea
                                className={`w-full px-4 py-2 ${isDarkMode ? 'bg-gray-900 border-gray-700 text-gray-300 placeholder-gray-600' : 'bg-white border-gray-300 text-gray-800 placeholder-gray-400'} border rounded-lg focus:border-indigo-500 focus:outline-none`}
                                rows={2}
                                placeholder="예시: 배달의민족 - 매장 분류 및 검색 시스템 참고"
                              />
                            </div>
                            
                            <div>
                              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                                기타 참고사항
                                <span className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'} block mt-1`}>전담 매니저가 미리 알아두면 좋을 점을 알려주세요</span>
                              </label>
                              <textarea
                                className={`w-full px-4 py-2 ${isDarkMode ? 'bg-gray-900 border-gray-700 text-gray-300 placeholder-gray-600' : 'bg-white border-gray-300 text-gray-800 placeholder-gray-400'} border rounded-lg focus:border-indigo-500 focus:outline-none`}
                                rows={2}
                                placeholder="예시: 커머스 경험이 많은 곳, 대기업 프로젝트 경험, 꼼꼼한 기획력 등"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // 기존 프로젝트 상세
                      <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white shadow-md'} rounded-2xl overflow-hidden`}>
                        {/* 프로젝트 이미지 */}
                        <div className={`aspect-video ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} relative`}>
                          {currentProject.image ? (
                            <img 
                              src={currentProject.image} 
                              alt={currentProject.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="flex items-center justify-center h-full">
                              <span className="text-6xl opacity-50">
                                {currentProject.id === 0 ? "🚀" : 
                                 currentProject.id === 1 ? "🏢" :
                                 currentProject.id === 2 ? "🛍️" :
                                 currentProject.id === 3 ? "⚡" :
                                 currentProject.id === 4 ? "🏛️" : "🆕"}
                              </span>
                            </div>
                          )}
                          <div className="absolute top-4 right-4 bg-indigo-600 px-4 py-2 rounded-full">
                            <span className="text-white font-bold text-lg">{currentProject.price}</span>
                          </div>
                        </div>

                        <div className="p-8">
                          <div className="mb-6">
                            <span className={`text-sm ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'} font-medium`}>{currentProject.category}</span>
                            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'} mt-2`}>{currentProject.title}</h2>
                            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-2`}>{currentProject.description}</p>
                            
                            {/* 적합한 프로젝트 */}
                            <div className={`mt-4 p-4 ${isDarkMode ? 'bg-indigo-900/20 border-indigo-500/30' : 'bg-indigo-50 border-indigo-300'} rounded-lg border`}>
                              <p className={`text-sm ${isDarkMode ? 'text-indigo-300' : 'text-indigo-700'} mb-1`}>이런 프로젝트에 적합합니다</p>
                              <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{currentProject.suitable}</p>
                            </div>
                          </div>

                          {/* 개발 정보 */}
                          <div className="grid md:grid-cols-2 gap-4 mb-6">
                            <div className={`${isDarkMode ? 'bg-gray-900/50' : 'bg-gray-50'} rounded-lg p-4`}>
                              <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'} mb-1`}>개발 기간</p>
                              <p className={`text-xl font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>{currentProject.duration}</p>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-900/50' : 'bg-gray-50'} rounded-lg p-4`}>
                              <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'} mb-1`}>개발 비용</p>
                              <p className={`text-xl font-semibold ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>{currentProject.price}</p>
                            </div>
                          </div>

                          {/* 포함 기능 */}
                          <div className="mb-6">
                            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-4`}>포함된 기능</h3>
                            <div className="grid md:grid-cols-2 gap-2">
                              {currentProject.features.map((feature, idx) => (
                                <div key={idx} className={`flex items-start gap-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                  <span className="text-green-400 mt-0.5">{feature.substring(0, 1)}</span>
                                  <span>{feature.substring(2)}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* 기술 스택 */}
                          <div className="mb-6">
                            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-3`}>사용 기술</h3>
                            <div className="flex flex-wrap gap-2">
                              {currentProject.tech.map((tech, idx) => (
                                <span key={idx} className={`px-3 py-1 ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} rounded-full text-sm`}>
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 오른쪽: 견적 요청 폼 */}
                  <div className="lg:col-span-1">
                    <div className="sticky top-24">
                      <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white shadow-md'} rounded-2xl p-6`}>
                        <h3 className={`text-xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-6`}>
                          무료 상담 신청
                        </h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div>
                            <input
                              type="text"
                              placeholder="이름 *"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              className={`w-full px-4 py-2 ${isDarkMode ? 'bg-gray-900 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-800'} border rounded-lg focus:border-indigo-500 focus:outline-none`}
                            />
                          </div>
                          
                          <div>
                            <input
                              type="text"
                              placeholder="회사명"
                              value={formData.company}
                              onChange={(e) => setFormData({...formData, company: e.target.value})}
                              className={`w-full px-4 py-2 ${isDarkMode ? 'bg-gray-900 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-800'} border rounded-lg focus:border-indigo-500 focus:outline-none`}
                            />
                          </div>
                          
                          <div>
                            <input
                              type="email"
                              placeholder="이메일 *"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                              className={`w-full px-4 py-2 ${isDarkMode ? 'bg-gray-900 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-800'} border rounded-lg focus:border-indigo-500 focus:outline-none`}
                            />
                          </div>
                          
                          <div>
                            <input
                              type="tel"
                              placeholder="연락처 *"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              className={`w-full px-4 py-2 ${isDarkMode ? 'bg-gray-900 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-800'} border rounded-lg focus:border-indigo-500 focus:outline-none`}
                            />
                          </div>
                          
                          <div>
                            <select
                              value={formData.budget}
                              onChange={(e) => setFormData({...formData, budget: e.target.value})}
                              className={`w-full px-4 py-2 ${isDarkMode ? 'bg-gray-900 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-800'} border rounded-lg focus:border-indigo-500 focus:outline-none`}
                            >
                              <option value="">예산 범위 선택</option>
                              <option value="under-500">500만원 이하</option>
                              <option value="500-1000">500-1,000만원</option>
                              <option value="1000-3000">1,000-3,000만원</option>
                              <option value="3000-5000">3,000-5,000만원</option>
                              <option value="over-5000">5,000만원 이상</option>
                            </select>
                          </div>

                          <div>
                            <select
                              value={formData.timeline}
                              onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                              className={`w-full px-4 py-2 ${isDarkMode ? 'bg-gray-900 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-800'} border rounded-lg focus:border-indigo-500 focus:outline-none`}
                            >
                              <option value="">희망 일정</option>
                              <option value="asap">가능한 빨리</option>
                              <option value="1month">1개월 이내</option>
                              <option value="2months">2개월 이내</option>
                              <option value="3months">3개월 이내</option>
                              <option value="flexible">협의 가능</option>
                            </select>
                          </div>
                          
                          <div>
                            <textarea
                              placeholder="프로젝트에 대해 간단히 설명해주세요"
                              rows={4}
                              value={formData.message}
                              onChange={(e) => setFormData({...formData, message: e.target.value})}
                              className={`w-full px-4 py-2 ${isDarkMode ? 'bg-gray-900 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-800'} border rounded-lg focus:border-indigo-500 focus:outline-none`}
                            />
                          </div>
                          
                          <button
                            type="submit"
                            className={`w-full py-3 ${isDarkMode ? 'bg-indigo-600 hover:bg-indigo-500' : 'bg-indigo-600 hover:bg-indigo-700'} rounded-lg text-white font-semibold transition-all`}
                          >
                            견적 요청하기
                          </button>
                        </form>

                        {/* 보장 사항 */}
                        <div className="mt-6 space-y-2">
                          <div className={`flex items-center gap-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            <span className="text-green-500">✓</span>
                            24시간 내 답변
                          </div>
                          <div className={`flex items-center gap-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            <span className="text-green-500">✓</span>
                            무료 상담
                          </div>
                          <div className={`flex items-center gap-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            <span className="text-green-500">✓</span>
                            부담없는 문의
                          </div>
                        </div>
                      </div>

                      {/* 신규 고객 혜택 */}
                      <div className={`mt-4 ${isDarkMode ? 'bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border-indigo-500/30' : 'bg-gradient-to-r from-indigo-100 to-purple-100 border-indigo-300'} rounded-xl p-4 border`}>
                        <p className={`text-sm font-semibold ${isDarkMode ? 'text-indigo-300' : 'text-indigo-700'} mb-1`}>
                          🎉 신규 고객 혜택
                        </p>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          첫 프로젝트 20% 할인 + 1년 무료 유지보수
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> e930f213f982c84ff53205ba7b7747618e288223
