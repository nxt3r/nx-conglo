import Link from "next/link";
import AnchorLink from "@/components/AnchorLink";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-slate-900 transition hover:text-slate-600"
        >
          Nx Conglo
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <AnchorLink
            href="/#businesses"
            hash="#businesses"
            className="transition hover:text-slate-900"
          >
            Businesses
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