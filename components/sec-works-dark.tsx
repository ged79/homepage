type Work = {
  type: string;
  title: string;
  desc: string;
  url: string;
  img: string;
  badge?: string;
};

const WORKS: Work[] = [
  {
    type: "단체 · 기관 홈페이지",
    title: "민족통일청년회 영동군",
    desc: "영동 지역 청년단체 공식 홈페이지",
    url: "https://mintong.netlify.app/",
    img: "/works/mintong.jpg",
    badge: "충북·영동",
  },
  {
    type: "전시회 · 방위산업 · 보안",
    title: "DX KOREA 2026 방위산업전",
    desc: "국방부 후원 방위산업전 웹 보안 작업",
    url: "https://dxkorea.org/",
    img: "/works/dxkorea.jpg",
    badge: "보안",
  },
  {
    type: "이커머스 · 플랫폼",
    title: "무지개 꽃배달",
    desc: "주문·결제까지 가능한 꽃배달 PWA 플랫폼",
    url: "https://rainbow-f.kr/",
    img: "/works/rainbow.jpg",
  },
  {
    type: "복지기관 홈페이지",
    title: "청산노인복지센터",
    desc: "충북 옥천 방문요양·방문목욕 기관",
    url: "https://timely-pixie-6670b8.netlify.app/",
    img: "/works/cheongsan.jpg",
    badge: "충북·영동",
  },
  {
    type: "기업 홈페이지",
    title: "거성 국제결혼",
    desc: "국제결혼 전문 업체 브랜드 사이트",
    url: "https://gswd.netlify.app/",
    img: "/works/gswd.jpg",
  },
];

export default function SecWorksDark() {
  return (
    <section id="works" className="bg-[#06060c] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          Selected Works
        </span>
        <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          직접 만든 결과물
        </h2>
        <p className="mt-5 max-w-xl text-lg text-slate-400">
          제작하거나 보안을 맡아 운영 중인 실제 프로젝트입니다.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {WORKS.map((w, i) => (
            <a
              key={w.url}
              href={w.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a13] transition hover:border-cyan-300/40 ${
                i === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={w.img}
                  alt={`${w.title} 미리보기`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06060c] via-transparent to-transparent" />
                {w.badge && (
                  <span className="absolute left-4 top-4 rounded-md bg-cyan-400 px-2 py-1 text-[11px] font-bold text-[#06060c]">
                    {w.badge}
                  </span>
                )}
              </div>
              <div className="flex items-end justify-between p-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300/80">
                    {w.type}
                  </span>
                  <h3 className="mt-1.5 text-xl font-bold text-white">
                    {w.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">{w.desc}</p>
                </div>
                <span className="shrink-0 text-slate-500 transition group-hover:text-cyan-300">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
