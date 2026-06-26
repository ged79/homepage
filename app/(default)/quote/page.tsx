"use client";

import { useState } from "react";

const D = { fontFamily: "'Space Grotesk', 'Pretendard Variable', sans-serif" } as const;

const TYPES = [
  "기업 홈페이지",
  "온라인 쇼핑몰",
  "모바일 앱",
  "AI 솔루션",
  "업무 시스템",
  "기타 / 잘 모르겠어요",
];

export default function QuotePage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    type: TYPES[0],
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-[#0a0a0c] px-4 py-3 text-[#f2f3f5] placeholder:text-[#5f6873] outline-none transition focus:border-[#3fd0ff] focus:ring-2 focus:ring-[#3fd0ff]/25";

  const labelClass = "mb-1.5 block text-sm font-semibold text-[#cfd6dd]";

  return (
    <section className="min-h-screen bg-[#070708] text-[#f2f3f5]">
      <div className="mx-auto max-w-5xl px-[6vw] pb-24 pt-32 lg:pt-40">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-[13px] tracking-[1px] text-[#3fd0ff]">
            <span className="h-[7px] w-[7px] rounded-full bg-[#3fd0ff] shadow-[0_0_12px_#3fd0ff]" />
            프로젝트 상담
          </span>
          <h1
            style={D}
            className="mt-5 text-[clamp(30px,4.5vw,52px)] font-bold tracking-[-0.02em]"
          >
            무엇을 만들지, 같이 정해요.
          </h1>
          <p className="mt-5 text-[16px] font-light leading-[1.7] text-[#9aa4ad]">
            아이디어만 있어도 충분합니다. 남겨 주시면 대표가 직접 확인하고 빠르게
            연락드립니다. 전화가 편하시면 바로 걸어 주셔도 됩니다.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <div className="rounded-2xl border border-white/10 bg-[#0c0c10] p-6 sm:p-8">
            {status === "done" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#3fd0ff]/15 text-[#3fd0ff]">
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 13 4 4L19 7" />
                  </svg>
                </span>
                <h2 style={D} className="mt-5 text-xl font-bold text-white">
                  상담 신청이 접수되었습니다
                </h2>
                <p className="mt-2 text-[#9aa4ad]">
                  빠르게 확인하고 연락드리겠습니다. 감사합니다.
                </p>
                <a
                  href="/"
                  className="mt-6 rounded-full bg-gradient-to-r from-[#3fd0ff] to-[#7aa2ff] px-6 py-3 text-sm font-semibold text-[#021018] transition hover:-translate-y-0.5"
                >
                  홈으로 돌아가기
                </a>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      이름 / 담당자 <span className="text-[#3fd0ff]">*</span>
                    </label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      className={inputClass}
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      연락처 <span className="text-[#3fd0ff]">*</span>
                    </label>
                    <input
                      id="phone"
                      required
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      className={inputClass}
                      placeholder="010-0000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    이메일 <span className="text-[#5f6873]">(선택)</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    className={inputClass}
                    placeholder="name@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="type" className={labelClass}>
                    어떤 것이 필요하신가요?
                  </label>
                  <select
                    id="type"
                    value={form.type}
                    onChange={(e) => set("type", e.target.value)}
                    className={inputClass}
                  >
                    {TYPES.map((t) => (
                      <option key={t} className="bg-[#0a0a0c]">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    문의 내용 <span className="text-[#3fd0ff]">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    className={inputClass}
                    placeholder="만들고 싶은 것, 참고 사이트, 예산이나 일정 등 편하게 적어 주세요."
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-400">
                    전송 중 문제가 발생했습니다. 전화(010-7741-4569)로 연락
                    부탁드립니다.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-full bg-gradient-to-r from-[#3fd0ff] to-[#7aa2ff] px-6 py-3.5 text-sm font-semibold text-[#021018] transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-10px_#3fd0ff] disabled:opacity-60"
                >
                  {status === "sending" ? "전송 중..." : "상담 신청하기 →"}
                </button>
              </form>
            )}
          </div>

          {/* Direct contact */}
          <div className="rounded-2xl border border-white/10 bg-[#0c0c10] p-6 sm:p-8">
            <h2 style={D} className="text-lg font-bold text-white">
              바로 연락하기
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#9aa4ad]">
              전화나 이메일이 더 편하시면 언제든 연락 주세요.
            </p>

            <div className="mt-6 space-y-4 text-sm">
              <a
                href="tel:01077414569"
                className="flex items-center gap-3 rounded-xl border border-[#3fd0ff]/20 bg-[#3fd0ff]/[0.06] p-4 transition hover:border-[#3fd0ff]/50"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#3fd0ff] to-[#7aa2ff] text-[#021018]">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.6a1.5 1.5 0 0 1 1.46 1.15l.6 2.4a1.5 1.5 0 0 1-.4 1.43l-1.1 1.1a11 11 0 0 0 4.26 4.26l1.1-1.1a1.5 1.5 0 0 1 1.43-.4l2.4.6A1.5 1.5 0 0 1 18 14.9v1.6a1.5 1.5 0 0 1-1.5 1.5A14.5 14.5 0 0 1 2 3.5Z" /></svg>
                </span>
                <span>
                  <span className="block text-xs text-[#8a96a3]">전화 상담</span>
                  <span className="font-bold text-white">010-7741-4569</span>
                </span>
              </a>

              <a
                href="mailto:conexus25@conexus.co.kr"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/25"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2a313c] text-[#dfe5ea]">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2.5" y="4" width="15" height="12" rx="2" /><path d="m3 5 7 6 7-6" /></svg>
                </span>
                <span>
                  <span className="block text-xs text-[#8a96a3]">이메일</span>
                  <span className="font-bold text-white">conexus25@conexus.co.kr</span>
                </span>
              </a>
            </div>

            <div className="mt-6 border-t border-white/[0.07] pt-5 text-sm leading-relaxed text-[#6f7a86]">
              코넥서스 · 대표 김영아
              <br />
              충북 영동군 영동읍 눈어치4로 4, 201
              <br />
              사업자등록번호 853-81-03832
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
