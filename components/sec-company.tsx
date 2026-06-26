const INFO = [
  { label: "상호", value: "코넥서스 (CONNEXUS)" },
  { label: "대표", value: "김영아" },
  { label: "소재지", value: "충북 영동군 영동읍 눈어치4로 4, 201" },
  { label: "사업자등록번호", value: "853-81-03832" },
  { label: "이메일", value: "conexus25@conexus.co.kr" },
  { label: "전화", value: "010-7741-4569" },
];

export default function SecCompany() {
  return (
    <section id="company" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: info */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Company
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              믿고 맡길 수 있는 회사입니다
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              충북 영동에 자리 잡은 실제 사업자입니다. 계약과 세금계산서 발행이
              가능하며, 공공·기관 업무도 성실히 진행합니다.
            </p>

            <dl className="mt-8 divide-y divide-slate-100 rounded-2xl border border-slate-200">
              {INFO.map((i) => (
                <div
                  key={i.label}
                  className="flex flex-col gap-1 px-5 py-3.5 sm:flex-row sm:items-center"
                >
                  <dt className="w-40 shrink-0 text-sm font-semibold text-slate-500">
                    {i.label}
                  </dt>
                  <dd className="font-medium text-slate-900">{i.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 rounded-xl bg-indigo-50 p-4 text-sm leading-relaxed text-slate-700">
              <span className="font-bold text-indigo-700">이 홈페이지도</span>{" "}
              코넥서스가 직접 기획하고 제작했습니다. 보시는 그대로의 품질로
              만들어 드립니다.
            </div>
          </div>

          {/* Right: map */}
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <iframe
              title="코넥서스 위치 — 충북 영동군 영동읍"
              src="https://maps.google.com/maps?q=%EC%B6%A9%EB%B6%81%20%EC%98%81%EB%8F%99%EA%B5%B0%20%EC%98%81%EB%8F%99%EC%9D%8D%20%EB%88%88%EC%96%B4%EC%B9%984%EB%A1%9C%204&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-full min-h-[340px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
