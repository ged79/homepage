import Link from "next/link";

export const metadata = {
  title: "회사 소개",
};

const VALUES = [
  {
    title: "정직하게",
    desc: "할 수 있는 것과 없는 것을 솔직히 말씀드립니다. 과장된 약속 대신 지킬 수 있는 약속을 합니다.",
  },
  {
    title: "가까이서",
    desc: "영동 지역 기업입니다. 필요하면 직접 찾아뵙고, 얼굴 보며 이야기합니다.",
  },
  {
    title: "직접 책임지고",
    desc: "기획부터 개발, 운영까지 대표가 직접 맡습니다. 중간에 말이 새지 않습니다.",
  },
  {
    title: "끝까지",
    desc: "오픈이 끝이 아닙니다. 오래 쓸 수 있도록 곁에서 함께 관리합니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
          <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
            About
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            가까운 곳에서 정직하게 만드는
            <br />
            <span className="text-indigo-600">영동의 작은 개발 회사</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            코넥서스는 충북 영동에 자리 잡은 웹·앱 개발 기업입니다. 크고 화려한
            회사는 아니지만, 그래서 더 가깝고 정직하게 일합니다. 멀리 있는
            업체에 맡기고 답답했던 경험이 있다면, 코넥서스는 다릅니다. 직접
            만들고, 직접 소통하고, 끝까지 책임집니다.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            우리가 일하는 방식
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="font-nacelle text-2xl font-bold text-indigo-600/40">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  {v.title}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Representative message */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              대표 인사말
            </p>
            <blockquote className="mt-5 text-lg leading-relaxed text-slate-700">
              “좋은 결과물은 거창한 말이 아니라 정직한 과정에서 나온다고
              믿습니다. 고객이 무엇을 원하는지 끝까지 듣고, 약속한 것을 약속한
              때에 만들어 드리는 것 — 그게 코넥서스가 가장 잘하는 일입니다.
              가까운 곳에서 든든한 파트너가 되겠습니다.”
            </blockquote>
            <p className="mt-6 font-bold text-slate-900">
              코넥서스 대표 <span className="text-indigo-700">김영아</span>
            </p>
          </div>

          {/* Company info */}
          <dl className="mt-10 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
            {[
              ["상호", "코넥서스 (CONNEXUS)"],
              ["대표", "김영아"],
              ["소재지", "충북 영동군 영동읍 눈어치4로 4, 201"],
              ["사업자등록번호", "853-81-03832"],
              ["이메일", "conexus25@conexus.co.kr"],
              ["전화", "010-7741-4569"],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-3 border-b border-slate-100 py-2">
                <dt className="w-28 shrink-0 font-semibold text-slate-500">
                  {k}
                </dt>
                <dd className="font-medium text-slate-900">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/quote"
              className="rounded-xl bg-indigo-600 px-6 py-3 font-bold text-white transition hover:bg-indigo-700"
            >
              무료 상담 신청
            </Link>
            <Link
              href="/#portfolio"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-indigo-400 hover:text-indigo-700"
            >
              작업물 보기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
