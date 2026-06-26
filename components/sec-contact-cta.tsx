import Link from "next/link";

export default function SecContactCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(135deg, #0b1957 0%, #1e3a8a 40%, #4338ca 72%, #6d28d9 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(34,211,238,0.18), transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:py-28">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
          무엇이 필요하신가요?
          <br />
          가볍게 물어보세요.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-indigo-100/90">
          아이디어만 있어도 충분합니다. 상담은 무료이고, 부담 없이 물어보셔도
          됩니다. 영동에서 가장 가까운 개발 파트너가 함께합니다.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-bold text-indigo-900 shadow-lg transition hover:bg-indigo-50"
          >
            무료 상담 신청하기
          </Link>
          <a
            href="tel:01077414569"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.6a1.5 1.5 0 0 1 1.46 1.15l.6 2.4a1.5 1.5 0 0 1-.4 1.43l-1.1 1.1a11 11 0 0 0 4.26 4.26l1.1-1.1a1.5 1.5 0 0 1 1.43-.4l2.4.6A1.5 1.5 0 0 1 18 14.9v1.6a1.5 1.5 0 0 1-1.5 1.5A14.5 14.5 0 0 1 2 3.5Z" />
            </svg>
            전화 상담 010-7741-4569
          </a>
        </div>
      </div>
    </section>
  );
}
