"use client";

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Cta from "@/components/cta";
import { useTheme } from "@/components/theme-provider";

export default function Home() {
  const { isDarkMode } = useTheme();

  return (
    <>
      <div className={!isDarkMode ? 'bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 relative overflow-hidden' : 'relative'}>
        <PageIllustration />
        {/* Light mode background effects */}
        {!isDarkMode && (
          <>
            {/* Animated gradient orbs */}
            <div className="absolute -top-40 -right-40 -z-10 h-80 w-80 rounded-full bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 opacity-30 blur-3xl animate-pulse" />
            <div className="absolute -top-20 -left-20 -z-10 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-200 via-indigo-200 to-purple-200 opacity-30 blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
            <div className="absolute top-1/3 left-1/2 -z-10 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-gradient-radial from-indigo-200/40 via-transparent to-transparent blur-2xl" />
            
            {/* Wave pattern overlay */}
            <div className="absolute inset-0 -z-10 opacity-[0.015]" 
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%234f46e5'/%3E%3Cstop offset='1' stop-color='%237c3aed'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23a)' d='M0 0h100v100H0z' opacity='.3'/%3E%3Cpath fill='%234f46e5' d='M0 0c50 0 50 100 100 100V0H0z' opacity='.5'/%3E%3C/svg%3E")`,
                backgroundSize: '400px 400px'
              }}
            />
            
            {/* Subtle mesh gradient */}
            <div 
              className="absolute inset-0 -z-10 opacity-40"
              style={{
                background: `
                  radial-gradient(at 20% 80%, rgb(220, 219, 255) 0px, transparent 50%),
                  radial-gradient(at 80% 20%, rgb(233, 213, 255) 0px, transparent 50%),
                  radial-gradient(at 40% 40%, rgb(195, 210, 255) 0px, transparent 50%),
                  radial-gradient(at 90% 70%, rgb(255, 219, 250) 0px, transparent 50%)
                `
              }}
            />
          </>
        )}
        <Hero />
        <Workflows />
        <Features />
        <Cta />
      </div>
    </>
  );
}
