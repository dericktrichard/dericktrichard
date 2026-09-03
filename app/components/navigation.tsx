"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "../theme-toggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-[clamp(1.25rem,4vw,5rem)] py-5">
      <nav className="mx-auto flex max-w-[100rem] items-center justify-between">
        <Link
          href="/"
          aria-label="Derick Richard home"
          className="font-(family-name:--font-geist-mono) text-sm font-medium tracking-tight"
        >
          DR.
        </Link>

        <div className="hidden items-center gap-[clamp(1.25rem,2.5vw,2.5rem)] sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}

          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 sm:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="border border-border px-4 py-2 text-sm"
          >
            Menu
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-navigation"
          className="mx-auto mt-4 max-w-[100rem] border border-border bg-background sm:hidden"
        >
          <div className="flex flex-col p-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-lg last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}