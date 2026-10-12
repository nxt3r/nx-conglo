"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Link> & { hash: string };

export default function AnchorLink({ hash, href, children, ...rest }: Props) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    // If we're already on the target page and the hash matches, force a scroll.
    if (typeof window !== "undefined" && window.location.hash === hash) {
      e.preventDefault();
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Otherwise, let Next.js handle it normally (navigates home + scrolls).
  }

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}