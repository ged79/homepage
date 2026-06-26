"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const SHOWCASE: {
  img: string;
  title: string;
  type: string;
  badge?: string;
}[] = [
  {
    img: "/works/dxkorea.jpg",
    title: "DX KOREA 2026 방위산업전",
    type: "보안 작업",
    badge: "보안",
  },
  {
    img: "/works/cheongsan.jpg",
    title: "청산노인복지센터",
    type: "복지기관 홈페이지",
    badge: "충북·영동",
  },
  {
    img: "/works/rainbow.jpg",
    title: "무지개 꽃배달",
    type: "이커머스 플랫폼",
  },
  {
    img: "/works/gswd.jpg",
    title: "거성 국제결혼",
    type: "기업 홈페이지",
  },
  {
    img: "/works/mintong.jpg",
    title: "민족통일청년회 영동군",
    type: "단체 홈페이지",
    badge: "충북·영동",
  },
];

const SLIDE_MS = 4000;

export default function HeroBold() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const id = setTimeout(
      () => setIndex((i) => (i + 1) % SHOWCASE.length),
      SLIDE_MS,
    );
    return () => clearTimeout(id);
  }, [index, playing]);

  const go = (n: number) =>
    setIndex((i) => (i + n + SHOWCASE.length) % SHOWCASE.length);

  const current = SHOWCASE[index];

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(135deg, #0b1957 0%, #1e3a8a 38%, #4338ca 70%, #6d28d9 100%)",
      }}
    >
      {/* Diagonal light rays */}
      <div className="pointer-events-none absolute inset-0 -z-0" aria-hidden="true">
        {[12, 34, 56, 78].map((left, i) => (
          <div
            key={left}
            className="absolute top-[-20%] h-[140%] w-[7%] -rotate-[18deg]"
            style={{
              left: `${left}%`,
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.12), transparent)",
              animation: `heroRayShift ${9 + i * 2}s ease-in-out ${i * 0.6}s infinite`,
            }}
          />
        ))}
        {/* floating dots */}
        {[
          [18, 30],
          [70, 22],
          [40, 70],
          [85, 60],
          [10, 75],
        ].map(([l, t], i) => (
          <span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-white/40"
            style={{
              left: `${l}%`,
              top: `${t}%`,
              animation: `heroFloat ${6 + i}s ease-in-out ${i * 0.5}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-24">
          {/* Left: brand message */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-semibold backdrop-blur-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-300" />
              CONNEXUS · 충북 영동
            </div>

            <h1 className="mt-6 text-[2.6rem] font-bold leading-[1.18] tracking-tight sm:text-6xl">
              기술로 잇는
              <br />
              가장 <span className="text-cyan-300">가까운</span> 파트너
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-indigo-100/90">
              홈페이지부터 앱, AI까지 — 영동 지역 기업 코넥서스가 기획·개발·운영을
              직접 책임지고, 끝까지 함께합니다.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 text-base font-bold text-indigo-900 shadow-lg transition hover:bg-indigo-50"
              >
                무료 상담 신청하기
              </Link>
              <a
                href="tel:01077414569"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.6a1.5 1.5 0 0 1 1.46 1.15l.6 2.4a1.5 1.5 0 0 1-.4 1.43l-1.1 1.1a11 11 0 0 0 4.26 4.26l1.1-1.1a1.5 1.5 0 0 1 1.43-.4l2.4.6A1.5 1.5 0 0 1 18 14.9v1.6a1.5 1.5 0 0 1-1.5 1.5A14.5 14.5 0 0 1 2 3.5Z" />
                </svg>
                010-7741-4569
              </a>
            </div>
          </div>

          {/* Right: signature auto-playing showcase of REAL work */}
          <div className="rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur-md sm:p-5">
            <div className="flex items-center justify-between px-1 pb-3 text-xs font-semibold uppercase tracking-widest text-indigo-100/70">
              <span>직접 만든 실제 작업물</span>
              <span>
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(SHOWCASE.length).padStart(2, "0")}
              </span>
            </div>

            {/* Screenshot card */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              </div>
              <div
                key={index}
                style={{ animation: "heroSlideIn 0.5s ease both" }}
                className="relative aspect-[16/10]"
              >
                <img
                  src={current.img}
                  alt={`${current.title} 작업물 미리보기`}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/75 to-transparent px-4 pb-4 pt-12">
                  <div className="flex items-center gap-2">
                    {current.badge && (
                      <span className="rounded-md bg-cyan-300 px-2 py-0.5 text-[11px] font-bold text-indigo-900">
                        {current.badge}
                      </span>
                    )}
                    <span className="text-xs font-semibold text-cyan-100">
                      {current.type}
                    </span>
                  </div>
                  <div className="mt-1 text-lg font-bold text-white drop-shadow-sm">
                    {current.title}
                  </div>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/20">
              <div
                key={`${index}-${playing}`}
                className="h-full rounded-full bg-cyan-300"
                style={{
                  width: playing ? "100%" : "100%",
                  animation: playing
                    ? `heroProgress ${SLIDE_MS}ms linear forwards`
                    : "none",
                }}
              />
            </div>

            {/* Player controls */}
            <div className="mt-5 flex items-center gap-3">
              <button
                onClick={() => go(-1)}
                aria-label="이전"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M13 4 6 10l7 6V4Z" /></svg>
              </button>
              <button
                onClick={() => setPlaying((p) => !p)}
                aria-label={playing ? "일시정지" : "재생"}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-indigo-900 transition hover:bg-indigo-50"
              >
                {playing ? (
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M6 4h3v12H6V4Zm5 0h3v12h-3V4Z" /></svg>
                ) : (
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M6 4l10 6-10 6V4Z" /></svg>
                )}
              </button>
              <button
                onClick={() => go(1)}
                aria-label="다음"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M7 4l7 6-7 6V4Z" /></svg>
              </button>

              {/* track dots */}
              <div className="ml-2 flex gap-2">
                {SHOWCASE.map((s, i) => (
                  <button
                    key={s.title}
                    onClick={() => setIndex(i)}
                    aria-label={s.title}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? "w-6 bg-cyan-300" : "w-2 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
