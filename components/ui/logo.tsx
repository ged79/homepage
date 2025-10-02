import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2 shrink-0" aria-label="CONNEXUS">
      <Image src={logo} alt="CONNEXUS Logo" width={32} height={32} />
      <span className="text-xl font-bold bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
        코넥서스
      </span>
    </Link>
  );
}
