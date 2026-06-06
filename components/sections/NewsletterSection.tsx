"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";

export function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <Section
      id="newsletter"
      className="pb-24"
      ariaLabelledBy="newsletter-heading"
    >
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-peach-100 bg-gradient-to-br from-peach-50 via-white to-lavender-50 p-8 shadow-sm sm:p-12">
        <SectionHeader
          id="newsletter-heading"
          eyebrow="The Peach List"
          title="Receive gentle rituals, affirmations, and soulful updates"
          description="Join the newsletter for weekly inspiration, new meditations, oracle deck updates, and early access to Spiritual Peach offerings."
          className="mb-8"
        />

        {submitted ? (
          <div
            className="rounded-2xl border border-peach-200 bg-white/80 p-6 text-center"
            role="status"
            aria-live="polite"
          >
            <p className="font-serif text-xl text-warm-brown-900">
              You&apos;re on the list ✨
            </p>
            <p className="mt-2 text-warm-brown-600">
              Thank you for joining. Your first gentle note will arrive soon.
            </p>
          </div>
        ) : (
          <form
            className="mx-auto flex max-w-xl flex-col gap-4 sm:flex-row"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="flex-1">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-full border border-peach-200 bg-white px-5 py-3.5 text-warm-brown-800 placeholder:text-warm-brown-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach-400"
              />
            </div>
            <Button type="submit" size="md" className="sm:shrink-0">
              Join the Peach List
            </Button>
          </form>
        )}

        <p className="mt-4 text-center text-sm text-warm-brown-500">
          No spam. Unsubscribe anytime. Your inbox deserves softness too.
        </p>
      </div>
    </Section>
  );
}
