"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "../theme-toggle";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-5 z-50 px-page py-4">
      <nav className="nav-shell mx-auto flex max-w-[118rem] items-center justify-between">
        <Link
          href="/"
          aria-label="Derick Richard home"
          className="nav-mark font-mono text-[0.7rem] font-medium tracking-[-0.03em]"
        >
          DR<span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center md:flex">
          <div className="nav-links flex items-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="ml-5">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
            className="nav-menu-button"
          >
            <span className={open ? "nav-menu-line nav-menu-line-open" : "nav-menu-line"} />
            <span className={open ? "nav-menu-line nav-menu-line-open" : "nav-menu-line"} />
          </button>
        </div>
      </nav>

      <div
        className={`nav-mobile-panel mx-auto mt-3 max-w-[118rem] md:hidden ${
          open ? "nav-mobile-panel-open" : ""
        }`}
        id="mobile-navigation"
      >
        <div className="grid">
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="nav-mobile-link"
            >
              <span>{link.label}</span>

              <span className="font-mono text-[0.55rem] text-muted">
                0{index + 1}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}