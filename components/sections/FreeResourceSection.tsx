import { Button } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { PEACH_GLOW_RESET } from "@/lib/constants";

export function FreeResourceSection() {
  return (
    <Section ariaLabelledBy="free-resource-heading">
      <SectionHeader
        id="free-resource-heading"
        eyebrow="Free Resource"
        title={PEACH_GLOW_RESET.title}
        description={PEACH_GLOW_RESET.description}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {PEACH_GLOW_RESET.features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-3xl border border-peach-100 bg-white/80 p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8"
          >
            <div
              className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-peach-100 to-lavender-100 text-lg"
              aria-hidden="true"
            >
              ✦
            </div>
            <h3 className="font-serif text-xl text-warm-brown-900">
              {feature.title}
            </h3>
            <p className="mt-2 leading-relaxed text-warm-brown-600">
              {feature.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button href="/#newsletter" variant="secondary" size="lg">
          Get the Free Reset
        </Button>
      </div>
    </Section>
  );
}
