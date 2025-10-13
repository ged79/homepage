"use client";

import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import ServiceImage from "@/public/images/service.png";
import { useTheme } from "@/components/theme-provider";

export default function Features() {
  const { isDarkMode } = useTheme();
  const services = [
    {
      title: "기업 홈페이지",
      desc: "회사 소개와 브랜드 아이덴티티 구축",
      price: "600-3,000만원",
      icon: "🏢",
      gradient: "from-blue-500 to-indigo-500",
      features: ["맞춤 디자인", "SEO 최적화", "관리자 페이지"]
    },
    {
      title: "이커머스 플랫폼",
      desc: "온라인 비즈니스를 위한 완벽한 솔루션",
      price: "1,500-3,500만원",
      icon: "🛒",
      gradient: "from-indigo-500 to-purple-500",
      features: ["결제 시스템", "재고 관리", "회원 시스템"]
    },
    {
      title: "헬스케어 플랫폼",
      desc: "의료 서비스 디지털 혁신",
      price: "5,000만원~",
      icon: "⚕️",
      gradient: "from-purple-500 to-pink-500",
      features: ["원격의료", "EMR 연동", "보안 인증"]
    },
    {
      title: "통합 플랫폼",
      desc: "B2B2C 비즈니스 통합 관리",
      price: "3,000-5,000만원",
      icon: "🔗",
      gradient: "from-pink-500 to-red-500",
      features: ["다중 사용자", "정산 시스템", "API 연동"]
    },
    {
      title: "소규모 프로젝트",
      desc: "빠르고 효율적인 웹사이트",
      price: "200-800만원",
      icon: "✨",
      gradient: "from-green-500 to-teal-500",
      features: ["랜딩페이지", "포트폴리오", "이벤트"]
    },
    {
      title: "기술 지원",
      desc: "지속적인 유지보수와 개선",
      price: "문의하기",
      icon: "🔧",
      gradient: "from-gray-500 to-gray-600",
      features: ["24/7 지원", "버그 수정", "기능 추가"]
    }
  ];

  return (
    <>
      {/* Mobile version */}
      <section className="md:hidden relative px-4 py-12 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 rounded-full filter blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/5 rounded-full filter blur-3xl -translate-x-1/2 translate-y-1/2" />
        
        {/* Section header */}
        <div className="text-center mb-8">
          <div className={`inline-flex items-center gap-2 px-4 py-2 ${isDarkMode ? 'bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-500/20' : 'bg-gradient-to-r from-indigo-100 to-purple-100 border-indigo-300'} rounded-full border mb-4`}>
            <span className={`text-xs font-medium ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>핵심 서비스</span>
          </div>
          <h2 className="text-3xl font-bold mb-3">
            <span className={`${isDarkMode ? 'bg-gradient-to-r from-gray-100 to-indigo-200' : 'bg-gradient-to-r from-gray-900 to-indigo-600'} bg-clip-text text-transparent`}>
              맞춤 솔루션
            </span>
          </h2>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            프로젝트 규모별 최적화된 개발
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="space-y-4 mb-10">
          {services.map((service, idx) => (
            <div key={idx} className="group relative">
              <div className={`relative ${isDarkMode ? 'bg-gray-800/30 border-gray-700/50 hover:border-indigo-500/50' : 'bg-white border-gray-200 hover:border-indigo-400'} backdrop-blur rounded-2xl p-5 border transition-all overflow-hidden`}>
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                {/* Content */}
                <div className="relative">
                  {/* Header with icon */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{service.icon}</span>
                      <div>
                        <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} text-lg`}>{service.title}</h3>
                        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mt-1`}>{service.desc}</p>
                        </div>
                        </div>
                        </div>
                        
                        {/* Features pills */}
                        <div className="flex flex-wrap gap-2 mb-3">
                        {service.features.map((feature, fidx) => (
                        <span key={fidx} className={`px-2 py-1 text-xs ${isDarkMode ? 'glass-dark text-gray-300' : 'bg-gray-100 text-gray-700'} rounded-lg`}>
                        {feature}
                        </span>
                        ))}
                        </div>
                  
                  {/* Price and action */}
                  <div className="flex items-center justify-between">
                    <span className={`font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.price}
                    </span>
                    <a href="/quote" className={`${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'} text-sm font-medium group-hover:translate-x-1 transition-transform inline-block`}>
                      상담하기 →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Desktop version */}
      <section className="hidden md:block relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400_/_0.25),transparent)_1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className={`inline-flex items-center gap-3 pb-3 before:h-px before:w-8 ${isDarkMode ? 'before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50' : 'before:bg-gradient-to-r before:from-transparent before:to-indigo-600/50 after:bg-gradient-to-l after:from-transparent after:to-indigo-600/50'} after:h-px after:w-8`}>
              <span className={`inline-flex ${isDarkMode ? 'bg-gradient-to-r from-indigo-500 to-indigo-200' : 'bg-gradient-to-r from-indigo-600 to-indigo-400'} bg-clip-text text-transparent`}>
                핵심 서비스
              </span>
            </div>
            <h2 className={`animate-[gradient_6s_linear_infinite] ${isDarkMode ? 'bg-[linear-gradient(to_right,#e5e7eb,#c7d2fe,#fafafa,#cbd5e1,#e5e7eb)]' : 'bg-[linear-gradient(to_right,theme(colors.gray.900),theme(colors.indigo.600),theme(colors.gray.900),theme(colors.indigo.600),theme(colors.gray.900))]'} bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl`}>
              프로젝트 규모별 맞춤 솔루션
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-indigo-200/65' : 'text-gray-600'}`}>
              소규모 랜딩페이지부터 대규모 플랫폼까지. 코넥서스는 고객의 비즈니스에
              최적화된 기술 솔루션을 제공합니다.
            </p>
          </div>
          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <div className="relative" style={{ width: '1104px', height: '384px', overflow: 'hidden' }}>
              <Image
                src={ServiceImage}
                width={1104}
                height={384}
                alt="Service"
                className={isDarkMode ? 'brightness-110' : ''}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
                <path
                  fillOpacity=".48"
                  d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z"
                />
              </svg>
              <h3 className={`mb-1 font-nacelle text-[1rem] font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                기업 홈페이지
              </h3>
              <p className={`${isDarkMode ? 'text-indigo-200/65' : 'text-gray-600'}`}>
                회사 소개, 서비스 안내, 포트폴리오를 담은
                전문적인 기업 홈페이지를 제작합니다.
              </p>
              <div className="mt-3">
                <a href="/quote" className={`${isDarkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'} text-sm font-medium`}>
                  600-3,000만원 →
                </a>
              </div>
            </article>
            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path fillOpacity=".48" d="M7 8V0H5v8h2Zm12 16v-4h-2v4h2Z" />
                <path d="M19 6H0v2h17v8H7v-6H5v8h19v-2h-5V6Z" />
              </svg>
              <h3 className={`mb-1 font-nacelle text-[1rem] font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                이커머스 플랫폼
              </h3>
              <p className={`${isDarkMode ? 'text-indigo-200/65' : 'text-gray-600'}`}>
                쇼핑몰, 예약 시스템, 멤버십 서비스 등
                온라인 비즈니스 플랫폼을 구축합니다.
              </p>
              <div className="mt-3">
                <a href="/quote" className={`${isDarkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'} text-sm font-medium`}>
                  1,500-3,500만원 →
                </a>
              </div>
            </article>
            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M10 0v2.138A5.994 5.994 0 0 0 6 8c0 2.306 1.3 4.3 3.205 5.31A3 3 0 1 1 14 17h7v5h2v-5h1V6h-1V1h-2v5H10V0ZM4 8a8.024 8.024 0 0 1 2.125-5.473A5.986 5.986 0 0 0 0 8a6 6 0 0 0 6 6 3 3 0 0 0-.134 2.895 7.976 7.976 0 0 1-3.341-1.422A5.984 5.984 0 0 1 4 8Z" />
              </svg>
              <h3 className={`mb-1 font-nacelle text-[1rem] font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                헬스케어 플랫폼
              </h3>
              <p className={`${isDarkMode ? 'text-indigo-200/65' : 'text-gray-600'}`}>
                커뮤니티케어, 원격의료, 건강관리 시스템 등
                헬스케어 전문 플랫폼을 개발합니다.
              </p>
              <div className="mt-3">
                <a href="/quote" className={`${isDarkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'} text-sm font-medium`}>
                  5,000만원~ →
                </a>
              </div>
            </article>
            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path
                  fillOpacity=".48"
                  d="M12 8.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                />
                <path d="m7.454 2.891.891-.454L7.437.655l-.891.454a12 12 0 0 0 0 21.382l.89.454.91-1.781-.892-.455a10 10 0 0 1 0-17.818ZM17.456 1.11l-.891-.454-.909 1.782.891.454a10 10 0 0 1 0 17.819l-.89.454.908 1.781.89-.454a12 12 0 0 0 0-21.382Z" />
              </svg>
              <h3 className={`mb-1 font-nacelle text-[1rem] font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                통합 플랫폼
              </h3>
              <p className={`${isDarkMode ? 'text-indigo-200/65' : 'text-gray-600'}`}>
                다중 사용자, 가맹점 관리, 정산 시스템을 갖춘
                B2B2C 통합 플랫폼을 구축합니다.
              </p>
              <div className="mt-3">
                <a href="/quote" className={`${isDarkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'} text-sm font-medium`}>
                  3,000-5,000만원 →
                </a>
              </div>
            </article>
            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path
                  fillOpacity=".48"
                  d="M19 8h5v2h-5V8Zm-4 5h9v2h-9v-2Zm9 5H11v2h13v-2Z"
                />
                <path d="M19.406 3.844 6.083 20.497.586 15 2 13.586l3.917 3.917L17.844 2.595l1.562 1.25Z" />
              </svg>
              <h3 className={`mb-1 font-nacelle text-[1rem] font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                소규모 프로젝트
              </h3>
              <p className={`${isDarkMode ? 'text-indigo-200/65' : 'text-gray-600'}`}>
                랜딩페이지, 포트폴리오, 이벤트 페이지 등
                빠르고 효율적인 웹사이트를 제작합니다.
              </p>
              <div className="mt-3">
                <a href="/quote" className={`${isDarkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'} text-sm font-medium`}>
                  200-800만원 →
                </a>
              </div>
            </article>
            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path fillOpacity=".48" d="M7 8V0H5v8h2Zm12 16v-4h-2v4h2Z" />
                <path d="M19 6H0v2h17v8H7v-6H5v8h19v-2h-5V6Z" />
              </svg>
              <h3 className={`mb-1 font-nacelle text-[1rem] font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                기술 지원
              </h3>
              <p className={`${isDarkMode ? 'text-indigo-200/65' : 'text-gray-600'}`}>
                개발 완료 후에도 지속적인 유지보수와
                기술 지원을 제공합니다.
              </p>
              <div className="mt-3">
                <a href="/quote" className={`${isDarkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'} text-sm font-medium`}>
                  문의하기 →
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}