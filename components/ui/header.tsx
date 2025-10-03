"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-30 w-full backdrop-blur-sm bg-gray-950/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-8">
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
                href="/process"
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
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full mt-2 bg-gray-900/95 rounded-2xl p-4">
            <ul className="space-y-2">
              <li><Link className="block py-2 text-gray-300 hover:text-white" href="/about" onClick={() => setMobileMenuOpen(false)}>회사 소개</Link></li>
              <li><Link className="block py-2 text-gray-300 hover:text-white" href="/tech-stack" onClick={() => setMobileMenuOpen(false)}>기술 스택</Link></li>
              <li><Link className="block py-2 text-gray-300 hover:text-white" href="/portfolio" onClick={() => setMobileMenuOpen(false)}>포트폴리오</Link></li>
              <li><Link className="block py-2 text-gray-300 hover:text-white" href="/process" onClick={() => setMobileMenuOpen(false)}>개발 프로세스</Link></li>
              <li><Link className="block py-2 text-gray-300 hover:text-white" href="/quote" onClick={() => setMobileMenuOpen(false)}>견적 문의</Link></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
