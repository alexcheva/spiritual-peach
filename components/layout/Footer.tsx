import Link from "next/link";

import { NAV_LINKS, SITE_NAME, SITE_TAGLINE, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="mt-auto border-t border-peach-100 bg-cream-200/60">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg font-serif text-2xl text-warm-brown-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach-400"
            >
              <span aria-hidden="true">🍑</span>
              {SITE_NAME}
            </Link>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-warm-brown-600">
              {SITE_TAGLINE}
            </p>
            <p className="mt-4 text-sm text-warm-brown-500">
              Take what resonates and leave the rest.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-peach-700">
              Explore
            </h2>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warm-brown-700 transition-colors hover:text-peach-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-peach-700">
              Connect
            </h2>
            <ul className="mt-4 space-y-2">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-warm-brown-700 transition-colors hover:text-peach-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:hello@spiritualpeach.com"
                  className="text-warm-brown-700 transition-colors hover:text-peach-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach-400"
                >
                  hello@spiritualpeach.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-peach-100 pt-8 text-sm text-warm-brown-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE_NAME}. Made with care by Alex Peach.
          </p>
          <p>Gentle growth, one soft step at a time.</p>
        </div>
      </div>
    </footer>
  );
}
