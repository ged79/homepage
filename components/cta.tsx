"use client";

import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import Link from "next/link";
import { useTheme } from "@/components/theme-provider";

export default function Cta() {
  const { isDarkMode } = useTheme();
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
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
        <div className={`${isDarkMode ? 'bg-gradient-to-r from-transparent via-gray-800/50' : 'bg-gradient-to-r from-blue-50 to-indigo-50'} py-12 md:py-20`}>
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className={`animate-[gradient_6s_linear_infinite] ${isDarkMode ? 'bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))]' : 'bg-[linear-gradient(to_right,theme(colors.gray.900),theme(colors.indigo.600),theme(colors.gray.900),theme(colors.indigo.600),theme(colors.gray.900))]'} bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-2xl font-semibold text-transparent md:text-4xl`}
              data-aos="fade-up"
            >
              지금 바로 디지털 혁신을 시작하세요
            </h2>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div data-aos="fade-up" data-aos-delay={400}>
                <Link
                  className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                  href="/quote"
                >
                  <span className="relative inline-flex items-center">
                    프로젝트 시작하기
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </Link>
              </div>
              <div data-aos="fade-up" data-aos-delay={600}>
                <Link
                  className={`btn relative w-full ${isDarkMode ? 'bg-gradient-to-b from-gray-800 to-gray-800/60 text-gray-300 before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box]' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'} bg-[length:100%_100%] bg-[bottom] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto`}
                  href="/quote?type=consultation"
                >
                  무료 상담 예약
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
