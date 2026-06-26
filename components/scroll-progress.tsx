"use client";

import { useEffect, useState } from "react";

/** Thin gradient bar at the very top that tracks scroll progress. */
export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setPct(max > 0 ? (doc.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[60] h-1 rounded-r-full"
      style={{
        width: `${pct}%`,
        background: "linear-gradient(90deg, #6366f1, #a855f7, #38bdf8)",
        boxShadow: "0 0 12px rgba(129,140,248,0.6)",
        transition: "width 0.1s linear",
      }}
      aria-hidden="true"
    />
  );
}
