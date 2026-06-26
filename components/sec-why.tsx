const PILLARS = [
  {
    title: "영동 지역 기업",
    desc: "필요할 때 언제든 직접 찾아뵙고 얼굴 보며 상담합니다. 멀리 있는 업체와는 다릅니다.",
    icon: <path d="M12 21s-7-5.7-7-11a7 7 0 0 1 14 0c0 5.3-7 11-7 11Z M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />,
  },
  {
    title: "대표가 직접 개발",
    desc: "재하청 없이 기획부터 개발·운영까지 직접 책임집니다. 말이 바로 통합니다.",
    icon: <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />,
  },
  {
    title: "합리적인 비용",
    desc: "거품 없는 정직한 견적과 세금계산서 발행, 명확한 계약으로 진행합니다.",
    icon: <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />,
  },
  {
    title: "끝까지 사후관리",
    desc: "오픈이 끝이 아닙니다. 수정·개선·기술지원으로 오래 함께합니다.",
    icon: <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z M9 12l2 2 4-4" />,
  },
];

export default function SecWhy() {
  return (
    <section id="why" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
            Why Connexus
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            왜 코넥서스인가요?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            크고 먼 업체보다, 가깝고 정직한 파트너가 더 확실합니다.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {p.icon}
                </svg>
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
