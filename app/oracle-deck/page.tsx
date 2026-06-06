import type { Metadata } from "next";

import { Button } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import {
  DECK_CARD_COUNT,
  GUIDEBOOK_SECTIONS,
  ORACLE_CATEGORIES,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Oracle Deck",
  description:
    "Discover the Spiritual Peach Oracle Deck — 44 cards for self-love, intuition, healing, abundance, and transformation.",
};

const PLACEHOLDER_CARDS = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  label: ["Worthy", "Trust", "Release", "Receive", "Rebirth", "Flow", "Renewal", "Courage"][
    index
  ],
}));

export default function OracleDeckPage() {
  return (
    <>
      <Section
        className="relative overflow-hidden pb-16 pt-12 sm:pt-16"
        containerClassName="relative"
      >
        <div
          className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-gradient-to-br from-lavender-200/50 to-peach-200/50 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-peach-600">
            Oracle Deck
          </p>
          <h1 className="font-serif text-4xl leading-tight text-warm-brown-900 sm:text-5xl lg:text-6xl">
            Trust your intuition. Grow with gentle guidance.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-warm-brown-600">
            The Spiritual Peach Oracle Deck is a modern {DECK_CARD_COUNT}-card
            deck created to support self-trust, healing, and personal
            transformation — one soft message at a time.
          </p>
          <div className="mt-10">
            <Button href="/#newsletter" size="lg">
              Join Oracle Deck Waitlist
            </Button>
          </div>
        </div>
      </Section>

      <Section className="bg-white/50" ariaLabelledBy="deck-concept-heading">
        <SectionHeader
          id="deck-concept-heading"
          eyebrow="The Deck"
          title={`A ${DECK_CARD_COUNT}-card journey inward`}
          description="Each card is an invitation — not a prediction. Draw with curiosity, reflect with compassion, and take what resonates."
        />

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
          {[
            {
              stat: String(DECK_CARD_COUNT),
              label: "Oracle Cards",
              detail: "Five soulful categories",
            },
            {
              stat: "5",
              label: "Themes",
              detail: "Self-love to transformation",
            },
            {
              stat: "4",
              label: "Guidebook Sections",
              detail: "Per card, every draw",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-peach-100 bg-cream-50 p-6 text-center"
            >
              <p className="font-serif text-4xl text-peach-600">{item.stat}</p>
              <p className="mt-2 font-medium text-warm-brown-900">{item.label}</p>
              <p className="mt-1 text-sm text-warm-brown-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section ariaLabelledBy="categories-heading">
        <SectionHeader
          id="categories-heading"
          eyebrow="Categories"
          title="Five paths of gentle wisdom"
          description="Every category holds cards designed to meet you in different seasons of your journey."
        />

        <div className="space-y-8">
          {ORACLE_CATEGORIES.map((category, index) => (
            <article
              key={category.name}
              className="grid items-center gap-6 rounded-3xl border border-peach-100 bg-gradient-to-r from-white to-cream-50 p-8 lg:grid-cols-[auto_1fr] lg:gap-10"
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-peach-100 to-lavender-100 font-serif text-2xl text-peach-700"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-serif text-2xl text-warm-brown-900">
                  {category.name}
                </h3>
                <p className="mt-2 text-warm-brown-600">{category.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.examples.map((example) => (
                    <li
                      key={example}
                      className="rounded-full bg-peach-100 px-3 py-1 text-sm font-medium text-peach-800"
                    >
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        className="bg-gradient-to-b from-lavender-50/40 to-cream-100"
        ariaLabelledBy="guidebook-heading"
      >
        <SectionHeader
          id="guidebook-heading"
          eyebrow="Guidebook"
          title="Every card includes four gentle layers"
          description="The companion guidebook helps you go deeper — with space to reflect, write, and affirm your path forward."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {GUIDEBOOK_SECTIONS.map((section, index) => (
            <article
              key={section.title}
              className="rounded-3xl border border-white/80 bg-white/80 p-7 shadow-sm"
            >
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-rose-gold-600">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-serif text-2xl text-warm-brown-900">
                {section.title}
              </h3>
              <p className="mt-3 leading-relaxed text-warm-brown-600">
                {section.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section ariaLabelledBy="card-preview-heading">
        <SectionHeader
          id="card-preview-heading"
          eyebrow="Preview"
          title="A glimpse of the deck"
          description="Artwork and final card designs are in development. Here is a placeholder preview of the card layout."
        />

        <ul
          className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
          aria-label="Placeholder oracle card previews"
        >
          {PLACEHOLDER_CARDS.map((card) => (
            <li key={card.id}>
              <div className="group aspect-[2/3] overflow-hidden rounded-2xl border border-peach-200 bg-gradient-to-br from-peach-100 via-cream-50 to-lavender-100 p-4 shadow-sm transition-transform hover:-translate-y-1">
                <div className="flex h-full flex-col items-center justify-between rounded-xl border border-white/60 bg-white/30 p-4 text-center backdrop-blur-sm">
                  <span
                    className="text-xs uppercase tracking-[0.2em] text-peach-600"
                    aria-hidden="true"
                  >
                    Spiritual Peach
                  </span>
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-peach-200/80 to-rose-gold-200/80 text-2xl"
                    aria-hidden="true"
                  >
                    ✦
                  </div>
                  <p className="font-serif text-lg text-warm-brown-900">
                    {card.label}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="pb-24">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-peach-100 bg-gradient-to-br from-peach-50 via-white to-rose-gold-200/30 p-8 text-center shadow-sm sm:p-12">
          <h2 className="font-serif text-3xl text-warm-brown-900 sm:text-4xl">
            Be the first to know when the deck arrives
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-warm-brown-600">
            Join the waitlist for early access, behind-the-scenes updates, and
            the chance to help shape the final deck.
          </p>
          <div className="mt-8">
            <Button href="/#newsletter" variant="secondary" size="lg">
              Join Oracle Deck Waitlist
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
