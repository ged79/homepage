"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

const Hero3D = dynamic(() => import("./hero-3d"), { ssr: false });

export default function HeroDark() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-[#06060c]">
      {/* Background: glow + subtle grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute right-[8%] top-1/4 h-[34rem] w-[34rem] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(34,211,238,0.28), transparent 60%)" }}
        />
        <div
          className="absolute -left-20 bottom-0 h-[26rem] w-[26rem] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(79,70,229,0.25), transparent 60%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(circle at 60% 40%, black, transparent 75%)",
            WebkitMaskImage: "radial-gradient(circle at 60% 40%, black, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          {/* Left: copy */}
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Our Mindset
            </span>

            <h1 className="mt-6 text-[2.7rem] font-bold leading-[1.08] tracking-tight text-white sm:text-6xl">
              대담한 기술로
              <br />
              <span className="bg-gradient-to-r from-white via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                비즈니스 성장
              </span>
              을
              <br />
              설계합니다
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-relaxed text-slate-400">
              웹·앱·AI까지 — 코넥서스는 아이디어를 실제로 작동하는 제품으로
              바꾸는 기술 파트너입니다.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#works"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-[#06060c] transition hover:bg-cyan-100"
              >
                솔루션 보기
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-base font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
              >
                프로젝트 문의
              </Link>
            </div>
          </div>

          {/* Right: real 3D (WebGL) */}
          <div className="relative hidden h-[480px] lg:block">
            <Hero3D />
          </div>
        </div>
      </div>

      {/* Mobile 3D below */}
      <div className="absolute inset-x-0 bottom-0 -z-0 h-64 opacity-60 lg:hidden">
        <Hero3D />
      </div>
    </section>
  );
}
