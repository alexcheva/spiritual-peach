import { Section, SectionHeader } from "@/components/ui/Section";

export function AboutSection() {
  return (
    <Section
      id="about"
      className="bg-white/50"
      ariaLabelledBy="about-heading"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <SectionHeader
          id="about-heading"
          eyebrow="About"
          title="A gentle space for spiritual wellness"
          description="Spiritual Peach is a warm, modern sanctuary for self-discovery — offering oracle cards, meditations, affirmations, and rituals that meet you with compassion, not perfection."
          align="left"
          className="mb-0 lg:max-w-none"
        />

        <div className="rounded-3xl border border-peach-100 bg-gradient-to-br from-cream-50 via-white to-peach-50 p-8 shadow-sm sm:p-10">
          <h3 className="font-serif text-2xl text-warm-brown-900">
            Meet Alex Peach
          </h3>
          <p className="mt-4 leading-relaxed text-warm-brown-600">
            Spiritual Peach was created by Alex Peach — a guide, creator, and
            fellow traveler on the path of healing and personal growth. After
            years of exploring mindfulness, intuition, and self-worth practices,
            Alex built Spiritual Peach to share tools that feel beautiful,
            accessible, and deeply supportive.
          </p>
          <p className="mt-4 leading-relaxed text-warm-brown-600">
            Here, spiritual growth is gentle. You are allowed to grow at your
            own pace. Trust your inner wisdom — and know that you are always
            welcome, exactly as you are.
          </p>
        </div>
      </div>
    </Section>
  );
}
