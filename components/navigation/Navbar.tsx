"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { site } from "@/data/site";

const emptySubscribe = () => () => {};

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#code", label: "Code" },
  { href: "/#experience", label: "Experience" },
  { href: "/#research", label: "Research" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const { resolvedTheme, setTheme } = useTheme();

  function close() {
    setOpen(false);
  }

  const themeLabel =
    resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/#content" className="text-sm font-semibold tracking-tight">
          {site.name}
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.cvPath}
            download
            className="text-sm font-semibold text-accent"
          >
            Download CV
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
            aria-label={mounted ? themeLabel : "Toggle colour theme"}
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-border px-4 py-3 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 text-base"
                  onClick={close}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.cvPath}
                download
                className="block py-3 font-semibold text-accent"
                onClick={close}
              >
                Download CV
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
