import Link from "next/link";

const D = { fontFamily: "'Space Grotesk', sans-serif" } as const;

const COLUMNS = [
  {
    title: "둘러보기",
    links: [
      { label: "작업물", href: "/#works" },
      { label: "팀", href: "/#founders" },
      { label: "서비스", href: "/#services" },
      { label: "문의", href: "/#contact" },
    ],
  },
  {
    title: "회사",
    links: [
      { label: "회사 소개", href: "/about" },
      { label: "프로젝트 상담", href: "/quote" },
      { label: "자주 묻는 질문", href: "/faq" },
    ],
  },
  {
    title: "약관",
    links: [
      { label: "이용약관", href: "/terms" },
      { label: "개인정보처리방침", href: "/privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#070708] text-[#8a96a3]">
      <div className="mx-auto max-w-6xl px-[6vw] py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-[1.8fr_1fr_1fr_1fr]">
          {/* brand + company info */}
          <div>
            <Link
              href="/"
              style={D}
              className="text-[18px] font-bold tracking-[3px] text-white"
            >
              CONE<span className="text-[#3fd0ff]">X</span>US
            </Link>
            <p className="mt-4 text-[14px] leading-relaxed text-[#9aa4ad]">
              충북 영동 · 웹 · 앱 · AI 개발 스튜디오
            </p>
            <div className="mt-6 space-y-1 text-[13px] leading-relaxed text-[#6f7a86]">
              <p>대표 김영아 · 사업자등록번호 853-81-03832</p>
              <p>충북 영동군 영동읍 눈어치4로 4, 201</p>
              <p>
                <a href="mailto:conexus25@conexus.co.kr" className="transition hover:text-[#3fd0ff]">
                  conexus25@conexus.co.kr
                </a>{" "}
                ·{" "}
                <a href="tel:01077414569" className="transition hover:text-[#3fd0ff]">
                  010-7741-4569
                </a>
              </p>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-[13px] font-semibold tracking-[0.5px] text-white">{col.title}</h3>
              <ul className="mt-4 space-y-2.5 text-[14px]">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[#9aa4ad] transition hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/[0.07] pt-6 text-[13px] text-[#5f6873] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 코넥서스 (CONEXUS). All rights reserved.</span>
          <span className="text-[#5f6873]">기획 · 디자인 · 개발 · 운영, 대표가 직접</span>
        </div>
      </div>
    </footer>
  );
}
