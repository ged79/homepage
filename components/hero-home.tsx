"use client";

import VideoThumb from "@/public/images/ai.jpg";
import ModalVideo from "@/components/modal-video";
import HeroHomeMobile from "@/components/hero-home-mobile";
import { useTheme } from "@/components/theme-provider";

export default function HeroHome() {
  const { isDarkMode } = useTheme();
  return (
    <>
      {/* Mobile version */}
      <HeroHomeMobile />
      
      {/* Desktop version */}
      <section className="hidden md:block">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="bg-clip-text pb-5 font-nacelle text-3xl font-semibold text-transparent md:text-5xl leading-tight animate-gradient"
              data-aos="fade-up"
              style={{ 
                lineHeight: '1.2', 
                backgroundSize: '200% auto',
                backgroundImage: isDarkMode 
                  ? 'linear-gradient(to right, rgb(229 231 235), rgb(165 180 252), rgb(243 244 246))'
                  : 'linear-gradient(to right, rgb(30 41 59), rgb(79 70 229), rgb(15 23 42))'
              }}
            >
              디지털 혁신을 연결하는 기술 파트너
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg md:text-xl md:block"
                data-aos="fade-up"
                data-aos-delay={200}
                style={{
                  color: isDarkMode ? 'rgba(199, 210, 254, 0.65)' : 'rgb(55, 65, 81)'
                }}
              >
                <span className="md:hidden">웹, 앱, AI 솔루션 전문 개발회사</span>
                <span className="hidden md:inline">
                  웹 개발, 앱 개발, AI 솔루션 전문 개발회사 코넥서스입니다.
                  최신 기술과 10년 이상의 경험으로 귀사의 성공을 함께 만들어갑니다.
                </span>
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="/portfolio"
                  >
                    <span className="relative inline-flex items-center">
                      포트폴리오 보기
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Trust / stats band */}
            <div
              className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl sm:grid-cols-4"
              data-aos="fade-up"
              data-aos-delay={500}
              style={{
                backgroundColor: isDarkMode
                  ? 'rgba(99, 102, 241, 0.12)'
                  : 'rgba(79, 70, 229, 0.10)',
              }}
            >
              {[
                { value: '120+', label: '프로젝트 완료' },
                { value: '10년+', label: '개발 경력' },
                { value: '98%', label: '고객 만족도' },
                { value: '50+', label: '협력 기업' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="px-4 py-6 text-center backdrop-blur-sm"
                  style={{
                    backgroundColor: isDarkMode
                      ? 'rgba(17, 24, 39, 0.6)'
                      : 'rgba(255, 255, 255, 0.7)',
                  }}
                >
                  <div
                    className="font-nacelle text-2xl font-semibold md:text-3xl"
                    style={{ color: isDarkMode ? 'rgb(165, 180, 252)' : 'rgb(79, 70, 229)' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="mt-1 text-sm"
                    style={{ color: isDarkMode ? 'rgba(199, 210, 254, 0.65)' : 'rgb(75, 85, 99)' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="videos//video.mp4"
            videoWidth={1920}
            videoHeight={1080}
            className={isDarkMode ? "brightness-110" : ""}
          />
        </div>
      </div>
    </section>
      </>
  );
}
