import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function HeroSection() {
  return (
    <Section
      className="relative overflow-hidden pb-20 pt-12 sm:pb-28 sm:pt-16 lg:pb-32 lg:pt-20"
      containerClassName="relative"
    >
      <div
        className="pointer-events-none absolute -right-24 -top-16 h-72 w-72 rounded-full bg-gradient-to-br from-peach-200/70 to-lavender-200/50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-tr from-cosmic-200/40 to-rose-gold-200/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-peach-200/80 bg-white/60 px-4 py-2 text-sm font-medium text-peach-700 shadow-sm backdrop-blur-sm">
          <span aria-hidden="true">✨</span>
          Welcome to your soft sanctuary
        </p>

        <h1 className="font-serif text-4xl leading-tight text-warm-brown-900 sm:text-5xl lg:text-6xl">
          Soft guidance for your healing, growth, and spiritual journey.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-warm-brown-600 sm:text-xl">
          Oracle cards, meditations, affirmations, and rituals designed to help
          you reconnect with your intuition and inner peace.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/#newsletter" size="lg">
            Join the Peach List
          </Button>
          <Button href="/oracle-deck" variant="outline" size="lg">
            Explore Oracle Deck
          </Button>
        </div>
      </div>
    </Section>
  );
}
