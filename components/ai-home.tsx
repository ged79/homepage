"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const D = { fontFamily: "'Space Grotesk', 'Pretendard Variable', sans-serif" } as const;

const FOUNDERS = [
  {
    name: "김영아",
    role: "대표 · CEO",
    img: "/team/ceo.jpg",
    bio: "프로젝트 기획과 고객 소통을 총괄합니다. 무엇을 왜 만드는지 정의하고, 끝까지 책임지고 끌고 갑니다.",
  },
  {
    name: "이경환",
    role: "기술이사 · CTO",
    img: "/team/cto.jpg",
    bio: "설계와 개발을 총괄합니다. 웹·앱·보안·AI까지 직접 구현하고, 출시 이후 운영까지 손을 놓지 않습니다.",
  },
  {
    name: "임진석",
    role: "사업이사 · CBO",
    img: "/team/cbo.jpg",
    bio: "사업 개발과 고객·파트너 관계를 총괄합니다. 좋은 기술이 실제 성과로 이어지도록 연결합니다.",
  },
];

const WORKS = [
  {
    type: "단체 · 기관 홈페이지",
    title: "민족통일청년회 영동군",
    url: "https://mintong.netlify.app/",
    img: "/works/mintong.jpg",
    tag: "충북 · 영동",
  },
  {
    type: "방위산업 · 웹 보안",
    title: "DX KOREA 2026 방위산업전",
    url: "https://dxkorea.org/",
    img: "/works/dxkorea.jpg",
    tag: "보안",
  },
  {
    type: "이커머스 · 플랫폼",
    title: "무지개 꽃배달",
    url: "https://rainbow-f.kr/",
    img: "/works/rainbow.jpg",
    tag: "주문 · 결제",
  },
  {
    type: "복지기관 홈페이지",
    title: "청산노인복지센터",
    url: "https://timely-pixie-6670b8.netlify.app/",
    img: "/works/cheongsan.jpg",
    tag: "충북 · 옥천",
  },
  {
    type: "기업 홈페이지",
    title: "거성 국제결혼",
    url: "https://gswd.netlify.app/",
    img: "/works/gswd.jpg",
    tag: "브랜드",
  },
];

const SERVICES = [
  { n: "01", t: "홈페이지 · 웹사이트", d: "기관·기업·단체 홈페이지를 기획부터 디자인·개발까지." },
  { n: "02", t: "모바일 · 웹 앱", d: "주문·결제·회원까지 동작하는 실사용 앱과 PWA." },
  { n: "03", t: "이커머스 · 플랫폼", d: "쇼핑몰·예약·매칭 등 거래가 일어나는 플랫폼." },
  { n: "04", t: "AI 솔루션", d: "챗봇·자동화·데이터 분석을 제품에 결합." },
  { n: "05", t: "보안 · 유지보수", d: "출시 후 운영, 보안 점검, 지속적인 개선." },
];

export default function AiHome() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      const tryPlay = () => v.play().catch(() => {});
      tryPlay();
      v.addEventListener("loadeddata", tryPlay, { once: true });
    }
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("rv-in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="bg-[#070708] text-[#f2f3f5]">
      {/* ===== HERO (video) ===== */}
      <section className="relative flex h-[88vh] min-h-[600px] items-center overflow-hidden px-[6vw]">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/robot1.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        {/* readability + edge blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070708] via-[#070708]/70 to-[#070708]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-transparent to-[#070708]/30" />

        <div className="relative z-10 max-w-4xl">
          <h1
            style={D}
            className="text-[clamp(40px,6.4vw,86px)] font-bold leading-[1.04] tracking-[-0.02em]"
          >
            아이디어를
            <br />
            <span className="bg-gradient-to-r from-[#3fd0ff] to-[#7aa2ff] bg-clip-text text-transparent">
              제품으로
            </span>{" "}
            만듭니다.
          </h1>
          <p className="mt-6 max-w-[40ch] text-[clamp(15px,1.5vw,18px)] font-light leading-[1.7] text-[#c2cad2]">
            외주처럼 떠넘기지 않습니다. 출시한 뒤의 운영까지, 끝까지.
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3fd0ff] to-[#7aa2ff] px-[28px] py-[15px] text-sm font-semibold text-[#021018] transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-10px_#3fd0ff]"
            >
              프로젝트 상담하기 →
            </Link>
            <Link
              href="#works"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-[28px] py-[15px] text-sm font-medium text-[#f2f3f5] backdrop-blur-sm transition hover:border-[#3fd0ff]"
            >
              작업물 보기
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FOUNDERS ===== */}
      <section id="founders" className="border-t border-white/[0.07] px-[6vw] py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FOUNDERS.map((f) => (
              <div
                key={f.name}
                className="rv group overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c10]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={f.img}
                    alt={`${f.name} ${f.role}`}
                    className="aspect-[4/5] w-full object-cover object-top grayscale transition duration-700 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c10] via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <div style={D} className="text-[22px] font-medium text-white">
                      {f.name}
                    </div>
                    <div className="text-[13px] tracking-[0.5px] text-[#3fd0ff]">{f.role}</div>
                  </div>
                </div>
                <p className="p-5 text-[14px] font-light leading-[1.65] text-[#9aa4ad]">{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WORKS ===== */}
      <section id="works" className="border-t border-white/[0.07] bg-[#0a0a0c] px-[6vw] py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="rv">
            <span className="text-[13px] tracking-[1px] text-[#3fd0ff]">— SELECTED WORKS</span>
            <h2 style={D} className="mt-4 text-[clamp(30px,4.5vw,56px)] font-bold leading-[1.05]">
              직접 만든 결과물
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {WORKS.map((w, i) => (
              <a
                key={w.url}
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`rv group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c10] transition hover:-translate-y-1 hover:border-[#3fd0ff]/40 ${
                  i === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${i === 0 ? "aspect-[21/9]" : "aspect-[16/10]"}`}
                >
                  <img
                    src={w.img}
                    alt={`${w.title} 미리보기`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top opacity-90 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0c10] via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-md bg-[#3fd0ff] px-2 py-1 text-[11px] font-bold text-[#021018]">
                    {w.tag}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 p-6">
                  <div>
                    <span className="text-[12px] font-semibold uppercase tracking-wider text-[#3fd0ff]/80">
                      {w.type}
                    </span>
                    <h3 style={D} className="mt-1.5 text-[20px] font-medium text-white">
                      {w.title}
                    </h3>
                  </div>
                  <span className="shrink-0 text-[#6b7480] transition group-hover:text-[#3fd0ff]">
                    ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="px-[6vw] py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="rv">
            <h2 style={D} className="text-[clamp(34px,5vw,64px)] font-bold leading-[1.05]">
              무엇을 만드나
            </h2>
          </div>
          <div className="mt-12 divide-y divide-white/[0.07] border-y border-white/[0.07]">
            {SERVICES.map((s) => (
              <div
                key={s.n}
                className="rv group flex flex-col gap-2 py-7 transition md:flex-row md:items-center md:gap-10"
              >
                <span style={D} className="w-14 shrink-0 text-[15px] text-[#3fd0ff]">
                  {s.n}
                </span>
                <h3
                  style={D}
                  className="w-full max-w-[280px] text-[22px] font-medium text-white transition group-hover:translate-x-1"
                >
                  {s.t}
                </h3>
                <p className="text-[15px] font-light leading-[1.6] text-[#9aa4ad]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="border-t border-white/[0.07] bg-[#0a0a0c] px-[6vw] py-28 lg:py-36">
        <div className="rv mx-auto max-w-4xl text-center">
          <span className="text-[13px] tracking-[1px] text-[#3fd0ff]">— 영동에서 시작하세요</span>
          <h2 style={D} className="mt-6 text-[clamp(32px,5.5vw,72px)] font-bold leading-[1.04]">
            함께{" "}
            <span className="bg-gradient-to-r from-[#3fd0ff] to-[#7aa2ff] bg-clip-text text-transparent">
              만들어
            </span>{" "}
            볼까요?
          </h2>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[15px] text-[#cfd6dd]">
            <a href="tel:01077414569" className="transition hover:text-[#3fd0ff]">
              📞 010-7741-4569
            </a>
            <a href="mailto:conexus25@conexus.co.kr" className="transition hover:text-[#3fd0ff]">
              ✉ conexus25@conexus.co.kr
            </a>
            <span className="text-[#8a96a3]">📍 충북 영동군 영동읍 눈어치4로 4</span>
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3fd0ff] to-[#7aa2ff] px-[30px] py-[16px] text-sm font-semibold text-[#021018] transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-10px_#3fd0ff]"
            >
              상담 요청하기 →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
