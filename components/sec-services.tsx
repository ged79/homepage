const SERVICES = [
  {
    title: "기업 홈페이지",
    desc: "회사 소개부터 채용까지, 신뢰를 주는 전문 웹사이트를 제작합니다.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M3 8h18M8 21h8M12 17v4" />
      </>
    ),
  },
  {
    title: "온라인 쇼핑몰",
    desc: "주문·결제·재고·회원까지, 운영하기 쉬운 커머스를 구축합니다.",
    icon: (
      <>
        <path d="M6 2 3 6v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6Z" />
        <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
      </>
    ),
  },
  {
    title: "모바일 앱",
    desc: "iOS와 안드로이드를 한 번에. 빠르고 안정적인 앱을 개발합니다.",
    icon: (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </>
    ),
  },
  {
    title: "AI 솔루션",
    desc: "챗봇·자동화·데이터 분석으로 반복 업무를 줄여드립니다.",
    icon: (
      <>
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <rect x="10" y="10" width="4" height="4" />
        <path d="M10 2v3M14 2v3M10 19v3M14 19v3M2 10h3M2 14h3M19 10h3M19 14h3" />
      </>
    ),
  },
  {
    title: "업무 시스템",
    desc: "예약, 관리자, 정산 등 비즈니스에 꼭 맞는 시스템을 만듭니다.",
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="M7 14v4M12 9v9M17 6v12" />
      </>
    ),
  },
  {
    title: "유지보수 · 지원",
    desc: "오픈 이후에도 수정, 개선, 기술 지원까지 책임집니다.",
    icon: (
      <>
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.1 2.1-2.4-.6-.6-2.4 2.1-2.1Z" />
      </>
    ),
  },
];

export default function SecServices() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            우리가 하는 일
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            홈페이지부터 앱, AI까지 — 비즈니스에 필요한 디지털을 한 곳에서
            해결해 드립니다.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-900/5"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
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
                  {s.icon}
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {s.title}
              </h3>
              <p className="mt-2 leading-relaxed text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
