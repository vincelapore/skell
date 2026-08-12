"use client";

import Link from "next/link";
import { useEntranceClass } from "@/components/skell-motion";

const links = [
  { href: "/about", label: "about" },
  { href: "/editors", label: "editors" },
  { href: "/issues", label: "issues" },
  { href: "/manifesto", label: "manifesto" },
];

export function SiteNav() {
  const navItemClass = useEntranceClass("skell-nav-item");

  return (
    <nav aria-label="archive navigation">
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm sm:text-base">
        {links.map((link, index) => (
          <li
            key={link.href}
            className={navItemClass}
            style={
              navItemClass
                ? { animationDelay: `${0.2 + index * 0.1}s` }
                : undefined
            }
          >
            <Link
              href={link.href}
              className="skell-link text-skell-cream/70 hover:text-skell-cream"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
