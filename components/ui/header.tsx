"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed top-0 z-30 w-full backdrop-blur-sm bg-gray-950/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <ul className="flex items-center gap-8">
            <li>
              <Link
                className="text-sm font-medium text-indigo-200/65 transition hover:text-indigo-500"
                href="/about"
              >
                회사 소개
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-medium text-indigo-200/65 transition hover:text-indigo-500"
                href="/tech-stack"
              >
                기술 스택
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-medium text-indigo-200/65 transition hover:text-indigo-500"
                href="/portfolio"
              >
                포트폴리오
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-medium text-indigo-200/65 transition hover:text-indigo-500"
                href="/testimonials"
              >
                개발 프로세스
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-medium text-indigo-200/65 transition hover:text-indigo-500"
                href="/quote"
              >
                견적 문의
              </Link>
            </li>
          </ul>

          {/* Desktop sign in links */}
        </div>
      </div>
    </header>
  );
}
