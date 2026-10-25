"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Link> & { hash: string };

export default function AnchorLink({ hash, href, children, ...rest }: Props) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const resolvedHref = isHome ? hash : `/${hash}`;

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (typeof window === "undefined") return;

    if (isHome && window.location.hash === hash) {
      e.preventDefault();
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (!isHome) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }

  return (
    <Link href={resolvedHref} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}