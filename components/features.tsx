import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import ServiceImage from "@/public/images/service.png";


export default function Features() {
  return (
    <section className="relative">
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
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                핵심 서비스
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#e5e7eb,#c7d2fe,#fafafa,#cbd5e1,#e5e7eb)] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              프로젝트 규모별 맞춤 솔루션
            </h2>
            <p className="text-lg text-indigo-200/65">
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
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                기업 홈페이지
              </h3>
              <p className="text-indigo-200/65">
                회사 소개, 서비스 안내, 포트폴리오를 담은
                전문적인 기업 홈페이지를 제작합니다.
              </p>
              <div className="mt-3">
                <a href="/quote" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
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
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                이커머스 플랫폼
              </h3>
              <p className="text-indigo-200/65">
                쇼핑몰, 예약 시스템, 멤버십 서비스 등
                온라인 비즈니스 플랫폼을 구축합니다.
              </p>
              <div className="mt-3">
                <a href="/quote" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
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
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                헬스케어 플랫폼
              </h3>
              <p className="text-indigo-200/65">
                커뮤니티케어, 원격의료, 건강관리 시스템 등
                헬스케어 전문 플랫폼을 개발합니다.
              </p>
              <div className="mt-3">
                <a href="/quote" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
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
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                통합 플랫폼
              </h3>
              <p className="text-indigo-200/65">
                다중 사용자, 가맹점 관리, 정산 시스템을 갖춘
                B2B2C 통합 플랫폼을 구축합니다.
              </p>
              <div className="mt-3">
                <a href="/quote" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
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
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                소규모 프로젝트
              </h3>
              <p className="text-indigo-200/65">
                랜딩페이지, 포트폴리오, 이벤트 페이지 등
                빠르고 효율적인 웹사이트를 제작합니다.
              </p>
              <div className="mt-3">
                <a href="/quote" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
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
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                기술 지원
              </h3>
              <p className="text-indigo-200/65">
                개발 완료 후에도 지속적인 유지보수와
                기술 지원을 제공합니다.
              </p>
              <div className="mt-3">
                <a href="/quote" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
                  문의하기 →
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}