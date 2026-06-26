import Link from "next/link";

export default function SecContactDark() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#06060c] py-28 lg:py-36"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.16), transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
          아이디어가 있다면,
          <br />
          <span className="bg-gradient-to-r from-cyan-200 to-indigo-300 bg-clip-text text-transparent">
            나머지는 저희가
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400">
          상담은 무료입니다. 가볍게 물어보셔도 됩니다.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-[#06060c] transition hover:bg-cyan-100"
          >
            프로젝트 문의하기
          </Link>
          <a
            href="tel:01077414569"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
          >
            전화 010-7741-4569
          </a>
        </div>
      </div>
    </section>
  );
}
