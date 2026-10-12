import { site } from "@/data/site";
import AnchorLink from "@/components/AnchorLink";
import BrandMark from "@/components/BrandMark";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-slate-600">
          <div className="flex items-center gap-2 font-medium text-slate-900">
            <BrandMark size={20} />
            <span>{site.name}</span>
          </div>
          <div className="mt-1">
            © {site.founded}–{new Date().getFullYear()} {site.name}. All rights
            reserved.
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
          <AnchorLink
            href="/#businesses"
            hash="#businesses"
            className="hover:text-slate-900"
          >
            Businesses
          </AnchorLink>
          <AnchorLink
            href="/#about"
            hash="#about"
            className="hover:text-slate-900"
          >
            About
          </AnchorLink>
          <a
            href="https://github.com/nxt3r"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </footer>
  );
}