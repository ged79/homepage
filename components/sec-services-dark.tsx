const SERVICES = [
  { t: "웹 개발", d: "기업 홈페이지부터 복잡한 웹 서비스까지, 빠르고 안정적으로." },
  { t: "모바일 앱", d: "iOS·안드로이드 동시 개발로 시간과 비용을 절감합니다." },
  { t: "AI 솔루션", d: "챗봇·자동화·데이터 분석으로 반복 업무를 줄입니다." },
  { t: "이커머스", d: "주문·결제·정산까지 갖춘 커머스 플랫폼을 구축합니다." },
  { t: "업무 시스템", d: "예약·관리자·정산 등 비즈니스 맞춤 시스템을 만듭니다." },
  { t: "유지보수", d: "오픈 이후에도 수정·개선·기술 지원까지 책임집니다." },
];

export default function SecServicesDark() {
  return (
    <section id="services" className="bg-[#06060c] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          Services
        </span>
        <h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
          무엇이든, 작동하는 제품으로
        </h2>
        <p className="mt-5 max-w-xl text-lg text-slate-400">
          웹·앱·AI까지 필요한 디지털을 한 곳에서 해결합니다.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <div
              key={s.t}
              className="group relative bg-[#0a0a13] p-8 transition hover:bg-[#0e0e1a]"
            >
              <span className="font-mono text-sm text-cyan-400/70">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-xl font-bold text-white">{s.t}</h3>
              <p className="mt-3 leading-relaxed text-slate-400">{s.d}</p>
              <span className="mt-6 inline-block text-cyan-300 opacity-0 transition group-hover:opacity-100">
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
