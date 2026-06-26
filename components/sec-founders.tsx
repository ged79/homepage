export default function SecFounders() {
  return (
    <section id="founders" className="relative overflow-hidden bg-[#06060c] py-24 lg:py-32">
      <div
        className="pointer-events-none absolute -right-20 top-1/3 h-[24rem] w-[24rem] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(79,70,229,0.2), transparent 60%)" }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          Founders
        </span>
        <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          코넥서스를 만드는 사람
        </h2>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Photo */}
          <div className="relative">
            <div
              className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-white/10"
              style={{
                background:
                  "linear-gradient(160deg, #14141f 0%, #0a0a12 60%, #050509 100%)",
              }}
            >
              {/* 사진 자리 — 실제 흑백 인물 사진으로 교체하세요 */}
              <div className="flex h-full flex-col items-center justify-center">
                <span className="font-nacelle text-[7rem] font-bold leading-none text-white/10">
                  김
                </span>
                <span className="mt-2 text-xs tracking-widest text-white/25">
                  [대표 사진 넣기]
                </span>
              </div>
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(6,6,12,0.9), transparent 45%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-2xl font-bold text-white">김영아</p>
                <p className="mt-1 text-sm font-medium text-cyan-300">
                  대표 · CEO
                </p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="text-2xl font-semibold leading-snug text-white sm:text-3xl">
              “좋은 결과물은 화려한 말이 아니라
              <br className="hidden sm:block" /> 정직한 과정에서 나옵니다.”
            </p>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-400">
              기획부터 디자인, 개발, 운영까지 직접 책임지는 개발자이자
              대표입니다. 작은 회사의 강점인 빠른 소통과 끝까지 책임지는
              자세로, 고객의 아이디어를 실제로 작동하는 제품으로 만듭니다.
              <span className="block mt-2 text-sm text-slate-500">
                [경력·전문분야 등 원하는 소개 문구로 수정하세요]
              </span>
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {[
                { k: "직접 개발", v: "재하청 없음" },
                { k: "소통", v: "대표 직통" },
                { k: "책임", v: "오픈 후에도" },
              ].map((s) => (
                <div key={s.k}>
                  <p className="text-base font-bold text-white">{s.v}</p>
                  <p className="mt-1 text-sm text-slate-500">{s.k}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
