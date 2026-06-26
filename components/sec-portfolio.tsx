type Project = {
  type: string;
  title: string;
  desc: string;
  url: string;
  img: string;
  badge?: string;
  badgeClass?: string;
};

const PROJECTS: Project[] = [
  {
    type: "단체 · 기관 홈페이지",
    title: "민족통일청년회 영동군",
    desc: "영동 지역 청년단체의 공식 홈페이지. 공지·소식·활동 안내를 담았습니다.",
    url: "https://mintong.netlify.app/",
    img: "/works/mintong.jpg",
    badge: "충북·영동 지역",
    badgeClass: "bg-indigo-600",
  },
  {
    type: "전시회 · 방위산업",
    title: "DX KOREA 2026 방위산업전",
    desc: "국방부 후원 대한민국방위산업전 공식 웹사이트의 보안 작업을 맡았습니다.",
    url: "https://dxkorea.org/",
    img: "/works/dxkorea.jpg",
    badge: "보안 작업 참여",
    badgeClass: "bg-emerald-600",
  },
  {
    type: "복지기관 홈페이지",
    title: "청산노인복지센터",
    desc: "충북 옥천 방문요양·방문목욕 전문기관. 상담 신청과 이용 절차 안내 중심.",
    url: "https://timely-pixie-6670b8.netlify.app/",
    img: "/works/cheongsan.jpg",
    badge: "충북·영동 지역",
    badgeClass: "bg-indigo-600",
  },
  {
    type: "이커머스 · 플랫폼",
    title: "무지개 꽃배달",
    desc: "주문·결제까지 가능한 꽃배달 플랫폼. 앱처럼 쓰는 PWA로 제작했습니다.",
    url: "https://rainbow-f.kr/",
    img: "/works/rainbow.jpg",
  },
  {
    type: "기업 홈페이지",
    title: "거성 국제결혼",
    desc: "국제결혼 전문 업체의 브랜드 사이트. 프로그램 안내와 상담 신청을 담았습니다.",
    url: "https://gswd.netlify.app/",
    img: "/works/gswd.jpg",
  },
];

export default function SecPortfolio() {
  return (
    <section id="portfolio" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
            Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            직접 작업한 결과물입니다
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            직접 제작하거나 보안을 맡아 운영 중인 실제 프로젝트입니다. 직접
            눌러서 확인해 보세요.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-900/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={p.img}
                  alt={`${p.title} 웹사이트 미리보기`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />
                {p.badge && (
                  <span
                    className={`absolute left-3 top-3 rounded-md ${p.badgeClass} px-2 py-1 text-[11px] font-bold text-white shadow`}
                  >
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                  {p.type}
                </span>
                <h3 className="mt-1.5 flex items-center gap-1.5 text-lg font-bold text-slate-900">
                  {p.title}
                  <svg
                    className="h-4 w-4 text-slate-400 transition group-hover:text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M7 13 13 7M8 7h5v5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-600">
                  {p.desc}
                </p>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-500">
          ※ 코넥서스가 직접 기획·제작하거나 보안 작업에 참여한 실제 프로젝트입니다.
        </p>
      </div>
    </section>
  );
}
