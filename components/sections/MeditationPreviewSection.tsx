import { Section, SectionHeader } from "@/components/ui/Section";
import { MEDITATION_CATEGORIES } from "@/lib/constants";

export function MeditationPreviewSection() {
  return (
    <Section
      id="meditations"
      ariaLabelledBy="meditation-preview-heading"
    >
      <SectionHeader
        id="meditation-preview-heading"
        eyebrow="Meditations"
        title="Guided practices for every moment"
        description="From restful sleep to morning alignment — gentle audio journeys designed to support your nervous system, confidence, and inner calm."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {MEDITATION_CATEGORIES.map((category, index) => (
          <article
            key={category.name}
            className="group relative overflow-hidden rounded-3xl border border-peach-100 bg-gradient-to-br from-white to-cream-50 p-7 shadow-sm"
          >
            <div
              className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-peach-100/80 to-lavender-100/60 opacity-70 transition-transform group-hover:scale-110"
              aria-hidden="true"
            />
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-rose-gold-600">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 font-serif text-2xl text-warm-brown-900">
              {category.name}
            </h3>
            <p className="mt-3 leading-relaxed text-warm-brown-600">
              {category.description}
            </p>
            <p className="mt-4 text-sm font-medium text-peach-700">
              Coming soon
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
