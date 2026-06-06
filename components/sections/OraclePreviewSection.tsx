import { Button } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ORACLE_CATEGORIES } from "@/lib/constants";

export function OraclePreviewSection() {
  return (
    <Section
      id="oracle"
      className="bg-gradient-to-b from-lavender-50/40 to-cream-100"
      ariaLabelledBy="oracle-preview-heading"
    >
      <SectionHeader
        id="oracle-preview-heading"
        eyebrow="Coming Soon"
        title="The Spiritual Peach Oracle Deck"
        description="A 44-card deck designed to help you trust yourself, heal gently, and grow with intention. Each card arrives with a message, reflection, journal prompt, and affirmation."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ORACLE_CATEGORIES.map((category) => (
          <article
            key={category.name}
            className="rounded-3xl border border-white/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm"
          >
            <h3 className="font-serif text-xl text-warm-brown-900">
              {category.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-warm-brown-600">
              {category.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${category.name} card examples`}>
              {category.examples.map((example) => (
                <li
                  key={example}
                  className="rounded-full bg-peach-100/80 px-3 py-1 text-xs font-medium text-peach-800"
                >
                  {example}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Button href="/oracle-deck" size="lg">
          Learn About the Deck
        </Button>
        <Button href="/#newsletter" variant="outline" size="lg">
          Join Oracle Deck Waitlist
        </Button>
      </div>
    </Section>
  );
}
