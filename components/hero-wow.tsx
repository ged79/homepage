"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import CountUp from "@/components/count-up";
import { useTheme } from "@/components/theme-provider";

const ROTATING = [
  "웹사이트를",
  "모바일 앱을",
  "AI 챗봇을",
  "온라인 쇼핑몰을",
  "브랜드 경험을",
];

const STATS = [
  { to: 120, suffix: "+", label: "프로젝트 완료" },
  { to: 10, suffix: "년+", label: "개발 경력" },
  { to: 98, suffix: "%", label: "고객 만족도" },
  { to: 50, suffix: "+", label: "협력 기업" },
];

const BAR_HEIGHTS = [42, 64, 50, 78, 58, 88, 70, 54, 84, 66, 95, 74];

const DASH_STATS = [
  { value: "₩2.4M", tint: "from-indigo-500/25" },
  { value: "8,210", tint: "from-purple-500/25" },
  { value: "98%", tint: "from-sky-500/25" },
];

const FLOATING_CHIPS = [
  { text: "React", className: "left-[-3%] top-[12%]", delay: "0s", duration: "6s" },
  { text: "Next.js", className: "right-[-5%] top-[26%]", delay: "0.4s", duration: "6.6s" },
  { text: "AI / LLM", className: "left-[2%] bottom-[14%]", delay: "0.8s", duration: "7.2s" },
  { text: "Flutter", className: "right-[-2%] bottom-[8%]", delay: "1.2s", duration: "6.3s" },
];

export default function HeroWow() {
  const { isDarkMode } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const magnetRef = useRef<HTMLAnchorElement>(null);
  const [wordIndex, setWordIndex] = useState(0);

  // Rotating headline word
  useEffect(() => {
    const id = setInterval(
      () => setWordIndex((i) => (i + 1) % ROTATING.length),
      2200,
    );
    return () => clearInterval(id);
  }, []);

  // Interactive particle constellation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    const mouse = { x: -9999, y: -9999 };
    type P = { x: number; y: number; vx: number; vy: number };
    let particles: P[] = [];

    const lineRGB = isDarkMode ? "129, 140, 248" : "79, 70, 229";
    const dotColor = isDarkMode
      ? "rgba(165, 180, 252, 0.9)"
      : "rgba(79, 70, 229, 0.75)";

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(100, Math.floor((w * h) / 16000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    const tick = () => {
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // Gentle repulsion away from the cursor → "parts" around the mouse
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 120 && dist > 0.001) {
          const force = (120 - dist) / 120;
          p.x += (dx / dist) * force * 1.1;
          p.y += (dy / dist) * force * 1.1;
        }
      }

      // Connecting lines
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) {
            ctx.strokeStyle = `rgba(${lineRGB}, ${(1 - d / 130) * 0.22})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        // Lines to the cursor
        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (dm < 170) {
          ctx.strokeStyle = `rgba(${lineRGB}, ${(1 - dm / 170) * 0.45})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      // Dots
      ctx.fillStyle = dotColor;
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.7, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduce) raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [isDarkMode]);

  // 3D tilt on the browser mockup + magnetic CTA
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const tilt = tiltRef.current;
      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
        const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
        const rx = Math.max(-1, Math.min(1, dy)) * -7;
        const ry = Math.max(-1, Math.min(1, dx)) * 9;
        tilt.style.transform = `perspective(1100px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      }
      const magnet = magnetRef.current;
      if (magnet) {
        const r = magnet.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        if (Math.hypot(dx, dy) < 120) {
          magnet.style.transform = `translate(${dx * 0.25}px, ${dy * 0.35}px)`;
        } else {
          magnet.style.transform = "translate(0, 0)";
        }
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const subText = isDarkMode ? "text-indigo-200/65" : "text-gray-600";

  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden">
      {/* Aurora background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="hero-anim absolute -left-40 top-[-10%] h-[36rem] w-[36rem] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.45), transparent 60%)",
            opacity: isDarkMode ? 0.5 : 0.35,
            animation: "heroAurora 18s ease-in-out infinite",
          }}
        />
        <div
          className="hero-anim absolute right-[-10%] top-[20%] h-[34rem] w-[34rem] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.4), transparent 60%)",
            opacity: isDarkMode ? 0.45 : 0.3,
            animation: "heroAurora 22s ease-in-out infinite reverse",
          }}
        />
        <div
          className="hero-anim absolute bottom-[-15%] left-[30%] h-[30rem] w-[30rem] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(56,189,248,0.3), transparent 60%)",
            opacity: isDarkMode ? 0.35 : 0.25,
            animation: "heroAurora 26s ease-in-out infinite",
          }}
        />
      </div>

      {/* Particle constellation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-10 h-full w-full"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 py-12 lg:grid-cols-2 lg:gap-8 lg:py-16">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div
              className="hero-anim mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium backdrop-blur-sm"
              style={{
                borderColor: isDarkMode
                  ? "rgba(129,140,248,0.3)"
                  : "rgba(99,102,241,0.25)",
                backgroundColor: isDarkMode
                  ? "rgba(99,102,241,0.1)"
                  : "rgba(99,102,241,0.06)",
                color: isDarkMode ? "rgb(199,210,254)" : "rgb(79,70,229)",
                animation: "heroChipIn 0.6s ease both",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
              </span>
              웹 · 앱 · AI 솔루션 전문 개발 파트너
            </div>

            {/* Headline with rotating word */}
            <h1
              className="font-nacelle text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
              style={{ color: isDarkMode ? "rgb(243,244,246)" : "rgb(17,24,39)" }}
            >
              우리는{" "}
              <span
                key={wordIndex}
                className="inline-block bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(105deg, #6366f1, #a855f7, #38bdf8)",
                  animation: "heroWord 0.6s ease both",
                  transformOrigin: "bottom",
                }}
              >
                {ROTATING[wordIndex]}
              </span>
              <br />
              만듭니다.
            </h1>

            {/* Subtext */}
            <p
              className={`mx-auto mt-6 max-w-xl text-lg lg:mx-0 ${subText}`}
            >
              아이디어만 있으면 충분합니다. 기획부터 디자인, 개발, 배포까지 —
              10년 경력의 코넥서스가 당신의 비즈니스를 디지털로 완성합니다.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Link
                ref={magnetRef}
                href="/portfolio"
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-7 py-3.5 font-medium text-white shadow-lg shadow-indigo-500/30 transition-[box-shadow,filter] duration-200 hover:shadow-xl hover:shadow-indigo-500/40 hover:brightness-110"
                style={{ willChange: "transform" }}
              >
                포트폴리오 보기
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-full border px-7 py-3.5 font-medium backdrop-blur-sm transition-colors"
                style={{
                  borderColor: isDarkMode
                    ? "rgba(148,163,184,0.3)"
                    : "rgba(99,102,241,0.3)",
                  color: isDarkMode ? "rgb(226,232,240)" : "rgb(79,70,229)",
                }}
              >
                무료 상담 받기
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid max-w-lg grid-cols-4 gap-4 lg:mx-0">
              {STATS.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div
                    className="font-nacelle text-2xl font-semibold sm:text-3xl"
                    style={{
                      color: isDarkMode ? "rgb(165,180,252)" : "rgb(79,70,229)",
                    }}
                  >
                    <CountUp to={s.to} suffix={s.suffix} />
                  </div>
                  <div className={`mt-1 text-xs sm:text-sm ${subText}`}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: tilting browser mockup */}
          <div className="relative hidden lg:block [perspective:1100px]">
            <div
              ref={tiltRef}
              className="relative transition-transform duration-200 ease-out will-change-transform"
            >
              {/* Glow behind */}
              <div
                className="absolute -inset-4 -z-10 rounded-3xl blur-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(99,102,241,0.5), rgba(168,85,247,0.4))",
                  opacity: isDarkMode ? 0.5 : 0.3,
                }}
              />
              {/* Browser frame */}
              <div
                className="overflow-hidden rounded-2xl border shadow-2xl"
                style={{
                  borderColor: isDarkMode
                    ? "rgba(148,163,184,0.2)"
                    : "rgba(99,102,241,0.15)",
                  backgroundColor: isDarkMode ? "#0f172a" : "#ffffff",
                }}
              >
                <div
                  className="flex items-center gap-2 border-b px-4 py-3"
                  style={{
                    borderColor: isDarkMode
                      ? "rgba(148,163,184,0.15)"
                      : "rgba(0,0,0,0.06)",
                  }}
                >
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <div
                    className="ml-3 hidden flex-1 rounded-md px-3 py-1 text-xs sm:block"
                    style={{
                      backgroundColor: isDarkMode
                        ? "rgba(148,163,184,0.12)"
                        : "rgba(0,0,0,0.04)",
                      color: isDarkMode ? "rgb(148,163,184)" : "rgb(107,114,128)",
                    }}
                  >
                    https://connexus.co.kr
                  </div>
                </div>
                {/* Mini animated dashboard — built in code, no external assets */}
                <div className="bg-[#0b1020] p-4 sm:p-5">
                  <div className="flex gap-4">
                    {/* Sidebar */}
                    <div className="flex w-9 flex-col items-center gap-3 pt-1">
                      <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600" />
                      {[0, 1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className={`h-2.5 w-2.5 rounded-full ${
                            i === 0 ? "bg-indigo-400" : "bg-white/15"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Main panel */}
                    <div className="flex-1">
                      {/* Top bar */}
                      <div className="mb-3 flex items-center justify-between">
                        <div className="h-3 w-28 rounded-full bg-white/15" />
                        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-pink-400 to-indigo-500" />
                      </div>

                      {/* Stat cards */}
                      <div className="grid grid-cols-3 gap-2">
                        {DASH_STATS.map((s, i) => (
                          <div
                            key={i}
                            className={`rounded-lg bg-gradient-to-b ${s.tint} to-transparent p-2.5 ring-1 ring-white/5`}
                          >
                            <div className="h-1.5 w-8 rounded-full bg-white/15" />
                            <div className="mt-2 font-nacelle text-sm font-semibold text-white">
                              {s.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Chart card */}
                      <div className="mt-3 rounded-xl bg-white/5 p-3 ring-1 ring-white/5">
                        <div className="mb-3 flex items-center justify-between">
                          <div className="h-2 w-16 rounded-full bg-white/15" />
                          <div className="flex gap-1">
                            <div className="h-2 w-2 rounded-full bg-indigo-400" />
                            <div className="h-2 w-6 rounded-full bg-indigo-400/40" />
                          </div>
                        </div>
                        <div className="flex h-20 items-end gap-1.5">
                          {BAR_HEIGHTS.map((h, i) => (
                            <div
                              key={i}
                              className="hero-anim flex-1 origin-bottom rounded-t bg-gradient-to-t from-indigo-500 to-purple-400"
                              style={{
                                height: `${h}%`,
                                animation: `heroBarGrow 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 0.07}s both`,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tech chips */}
              {FLOATING_CHIPS.map((chip) => (
                <div
                  key={chip.text}
                  className={`hero-anim absolute rounded-xl border px-3 py-2 text-sm font-semibold shadow-lg backdrop-blur-md ${chip.className}`}
                  style={{
                    borderColor: isDarkMode
                      ? "rgba(129,140,248,0.3)"
                      : "rgba(99,102,241,0.2)",
                    backgroundColor: isDarkMode
                      ? "rgba(15,23,42,0.8)"
                      : "rgba(255,255,255,0.85)",
                    color: isDarkMode ? "rgb(199,210,254)" : "rgb(79,70,229)",
                    animation: `heroFloat ${chip.duration} ease-in-out ${chip.delay} infinite`,
                  }}
                >
                  {chip.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block">
        <div
          className="flex h-9 w-5 items-start justify-center rounded-full border-2 p-1"
          style={{
            borderColor: isDarkMode
              ? "rgba(148,163,184,0.4)"
              : "rgba(99,102,241,0.4)",
          }}
        >
          <span
            className="hero-anim h-2 w-1 rounded-full"
            style={{
              backgroundColor: isDarkMode
                ? "rgb(165,180,252)"
                : "rgb(99,102,241)",
              animation: "heroScrollDot 1.6s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}
