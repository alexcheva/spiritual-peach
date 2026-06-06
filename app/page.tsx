import { AboutSection } from "@/components/sections/AboutSection";
import { FreeResourceSection } from "@/components/sections/FreeResourceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MeditationPreviewSection } from "@/components/sections/MeditationPreviewSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { OraclePreviewSection } from "@/components/sections/OraclePreviewSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FreeResourceSection />
      <OraclePreviewSection />
      <MeditationPreviewSection />
      <section id="blog" className="sr-only" aria-label="Blog coming soon">
        Blog coming soon
      </section>
      <NewsletterSection />
    </>
  );
}
