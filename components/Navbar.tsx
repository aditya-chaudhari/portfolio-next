"use client";

import { useState } from "react";
import { canonicalResumePath, profile } from "@/lib/site-content";

const navItems = [
  { label: "Skills", href: "#skills" },
  { label: "Honors", href: "#credentials" },
  { label: "Timeline", href: "#timeline" },
  { label: "Projects", href: "#projects" },
  { label: "Interests", href: "#interests" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-outline-variant/10 bg-surface-container-lowest/70 font-headline tracking-tight shadow-[0_0_40px_rgba(99,102,241,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-8 sm:py-4">
        <a
          href="#top"
          className="shrink-0 rounded-sm text-lg font-bold tracking-tighter text-primary outline-none focus-visible:ring-2 focus-visible:ring-primary/50 sm:text-xl md:text-2xl"
          onClick={() => setOpen(false)}
        >
          {profile.name}
        </a>

        <ul className="hidden items-center gap-5 text-sm text-on-surface-variant md:flex md:gap-6 lg:gap-8 lg:text-base">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-sm outline-none transition-colors hover:text-on-surface focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center md:flex">
          <a
            href={canonicalResumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary-container px-5 py-2 text-sm font-bold text-on-primary-container outline-none transition-all hover:brightness-110 focus-visible:ring-2 focus-visible:ring-primary/60 active:scale-[0.98]"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-on-surface outline-none focus-visible:ring-2 focus-visible:ring-primary/50 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-outline-variant/10 bg-surface-container-lowest/95 backdrop-blur-xl md:hidden ${open ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col gap-1 px-4 py-3 text-on-surface-variant">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block rounded-md px-3 py-2.5 text-sm font-medium outline-none transition-colors hover:bg-surface-container-high hover:text-on-surface focus-visible:ring-2 focus-visible:ring-primary/50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={canonicalResumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg bg-primary-container px-3 py-3 text-center text-sm font-bold text-on-primary-container outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              onClick={() => setOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
