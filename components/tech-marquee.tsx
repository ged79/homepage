"use client";

import { useTheme } from "@/components/theme-provider";

const TECH = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Flutter",
  "Python",
  "AWS",
  "OpenAI",
  "PostgreSQL",
  "Figma",
  "Vercel",
  "React Native",
  "Supabase",
];

/** Infinite, edge-faded marquee of the tech stack. */
export default function TechMarquee() {
  const { isDarkMode } = useTheme();
  const items = [...TECH, ...TECH];

  return (
    <section className="py-10">
      <p
        className={`mb-6 text-center text-sm font-medium uppercase tracking-widest ${
          isDarkMode ? "text-indigo-200/50" : "text-gray-500"
        }`}
      >
        함께 사용하는 기술 스택
      </p>
      <div
        className="group relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div
          className="flex w-max gap-4"
          style={{ animation: "heroMarquee 32s linear infinite" }}
        >
          {items.map((t, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border px-5 py-2.5 text-base font-semibold backdrop-blur-sm"
              style={{
                borderColor: isDarkMode
                  ? "rgba(129,140,248,0.2)"
                  : "rgba(99,102,241,0.18)",
                backgroundColor: isDarkMode
                  ? "rgba(99,102,241,0.06)"
                  : "rgba(99,102,241,0.04)",
                color: isDarkMode ? "rgb(199,210,254)" : "rgb(79,70,229)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
