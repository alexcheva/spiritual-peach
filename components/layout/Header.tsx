"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-peach-100/80 bg-cream-100/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach-400 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100"
          aria-label={`${SITE_NAME} home`}
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-peach-300 to-rose-gold-400 text-lg shadow-sm"
            aria-hidden="true"
          >
            🍑
          </span>
          <span className="font-serif text-xl text-warm-brown-900 transition-colors group-hover:text-peach-700 sm:text-2xl">
            {SITE_NAME}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-warm-brown-700 transition-colors hover:bg-peach-100/70 hover:text-peach-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/#newsletter" size="sm">
            Join the Peach List
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-warm-brown-800 hover:bg-peach-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach-400 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen ? (
        <nav
          id="mobile-navigation"
          className="border-t border-peach-100 bg-cream-100 px-5 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-warm-brown-800 hover:bg-peach-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach-400"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button
                href="/#newsletter"
                className="w-full"
                onClick={() => setMobileOpen(false)}
              >
                Join the Peach List
              </Button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
