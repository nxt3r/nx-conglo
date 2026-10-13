import Link from "next/link";
import AnchorLink from "@/components/AnchorLink";
import BrandMark from "@/components/BrandMark";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-base font-semibold tracking-tight text-slate-900 transition hover:opacity-80"
        >
          <BrandMark size={28} />
          <span>Nx Conglo</span>
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <AnchorLink
            href="/#ventures"
            hash="#ventures"
            className="transition hover:text-slate-900"
          >
            Ventures
          </AnchorLink>
          <AnchorLink
            href="/#about"
            hash="#about"
            className="transition hover:text-slate-900"
          >
            About
          </AnchorLink>
        </div>
      </nav>
    </header>
  );
}