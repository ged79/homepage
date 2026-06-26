"use client";

import { useState } from "react";
import Link from "next/link";

const NAV = [
  { label: "소개", href: "/#about" },
  { label: "서비스", href: "/#services" },
  { label: "팀", href: "/#founders" },
  { label: "문의", href: "/#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="flex items-center justify-between bg-gradient-to-b from-[#05070a]/80 to-transparent px-[6vw] py-5 backdrop-blur-[10px]">
        <Link
          href="/"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          className="text-[18px] font-bold tracking-[3px] text-white"
        >
          CONE<span className="text-[#3fd0ff]">X</span>US
        </Link>

        <nav className="hidden items-center gap-[34px] md:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-[#8a96a3] transition-colors hover:text-white"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/quote"
          className="hidden rounded-[30px] border border-white/[0.08] px-[18px] py-2 text-[13px] text-[#8a96a3] transition hover:border-[#3fd0ff] hover:text-white md:inline-block"
        >
          프로젝트 문의
        </Link>

        <button
          className="text-slate-200 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="메뉴"
          aria-expanded={open}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18 18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#05070a]/95 px-[6vw] py-3 md:hidden">
          <ul className="space-y-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2.5 text-slate-200 hover:bg-white/5"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link
                href="/quote"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-gradient-to-r from-[#3fd0ff] to-[#6e8bff] px-2 py-2.5 text-center font-bold text-[#021018]"
              >
                프로젝트 문의
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
