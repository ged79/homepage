"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import { useTheme } from "@/components/theme-provider";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className={`fixed top-0 z-30 w-full backdrop-blur-sm ${
      isDarkMode ? 'bg-gray-950/80' : 'bg-white/80'
    }`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3">
        <div className={`relative flex h-14 items-center justify-between gap-3 rounded-2xl px-3 ${
          isDarkMode ? 'bg-gray-900/90' : 'bg-gray-100/90'
        }`}>
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden ${
              isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
            }`}
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
                className={`text-sm font-medium transition ${
                  isDarkMode 
                    ? 'text-indigo-200/65 hover:text-indigo-500' 
                    : 'text-gray-600 hover:text-indigo-600'
                }`}
                href="/about"
              >
                회사 소개
              </Link>
            </li>
            <li>
              <Link
                className={`text-sm font-medium transition ${
                  isDarkMode 
                    ? 'text-indigo-200/65 hover:text-indigo-500' 
                    : 'text-gray-600 hover:text-indigo-600'
                }`}
                href="/tech-stack"
              >
                기술 스택
              </Link>
            </li>
            <li>
              <Link
                className={`text-sm font-medium transition ${
                  isDarkMode 
                    ? 'text-indigo-200/65 hover:text-indigo-500' 
                    : 'text-gray-600 hover:text-indigo-600'
                }`}
                href="/portfolio"
              >
                포트폴리오
              </Link>
            </li>
            <li>
              <Link
                className={`text-sm font-medium transition ${
                  isDarkMode 
                    ? 'text-indigo-200/65 hover:text-indigo-500' 
                    : 'text-gray-600 hover:text-indigo-600'
                }`}
                href="/process"
              >
                개발 프로세스
              </Link>
            </li>
            <li>
              <Link
                className={`text-sm font-medium transition ${
                  isDarkMode 
                    ? 'text-indigo-200/65 hover:text-indigo-500' 
                    : 'text-gray-600 hover:text-indigo-600'
                }`}
                href="/quote"
              >
                견적 문의
              </Link>
            </li>
            {/* Theme Toggle Button */}
            <li>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  isDarkMode 
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
            </li>
          </ul>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden absolute top-full left-0 w-full mt-2 rounded-2xl p-4 ${
            isDarkMode ? 'bg-gray-900/95' : 'bg-white/95 shadow-lg'
          }`}>
            <ul className="space-y-2">
              <li>
                <Link 
                  className={`block py-2 ${
                    isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                  }`} 
                  href="/about" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  회사 소개
                </Link>
              </li>
              <li>
                <Link 
                  className={`block py-2 ${
                    isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                  }`} 
                  href="/tech-stack" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  기술 스택
                </Link>
              </li>
              <li>
                <Link 
                  className={`block py-2 ${
                    isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                  }`} 
                  href="/portfolio" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  포트폴리오
                </Link>
              </li>
              <li>
                <Link 
                  className={`block py-2 ${
                    isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                  }`} 
                  href="/process" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  개발 프로세스
                </Link>
              </li>
              <li>
                <Link 
                  className={`block py-2 ${
                    isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                  }`} 
                  href="/quote" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  견적 문의
                </Link>
              </li>
              {/* Mobile Theme Toggle */}
              <li>
                <button
                  onClick={toggleTheme}
                  className={`w-full text-left py-2 ${
                    isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {isDarkMode ? '☀️ 라이트 모드' : '🌙 다크 모드'}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
