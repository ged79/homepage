import VideoThumb from "@/public/images/ai.jpg";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-3xl font-semibold text-transparent md:text-5xl leading-tight"
              data-aos="fade-up"
              style={{ lineHeight: '1.2' }}
            >
              디지털 혁신을 연결하는 기술 파트너
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg md:text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                웹 개발, 앱 개발, AI 솔루션 전문 개발회사 코넥서스입니다.
                최신 기술과 10년 이상의 경험으로 귀사의 성공을 함께 만들어갑니다.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="/quote"
                  >
                    <span className="relative inline-flex items-center">
                      무료 상담 신청
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
              </div>
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
            className="brightness-110"
          />
        </div>
      </div>
    </section>
  );
}
