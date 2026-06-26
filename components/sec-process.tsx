const STEPS = [
  {
    no: "01",
    title: "상담 · 기획",
    desc: "무엇이 필요한지 함께 정리하고, 목표와 일정·예산을 명확히 합니다.",
  },
  {
    no: "02",
    title: "디자인 · 개발",
    desc: "화면 설계와 디자인을 거쳐, 안정적으로 작동하도록 직접 개발합니다.",
  },
  {
    no: "03",
    title: "검수 · 오픈",
    desc: "꼼꼼히 점검하고 수정한 뒤, 약속한 일정에 맞춰 오픈합니다.",
  },
  {
    no: "04",
    title: "운영 · 사후관리",
    desc: "오픈 이후에도 모니터링하며 수정·개선·기술 지원을 이어갑니다.",
  },
];

export default function SecProcess() {
  return (
    <section id="process" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
            Process
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            이렇게 진행됩니다
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            처음부터 끝까지 투명하게. 매 단계마다 직접 소통합니다.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div
              key={s.no}
              className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <span className="text-3xl font-bold text-indigo-600/30">
                {s.no}
              </span>
              <h3 className="mt-3 text-lg font-bold text-slate-900">
                {s.title}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-600">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
