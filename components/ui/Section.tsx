import { type ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  ariaLabelledBy?: string;
};

export function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  ariaLabelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${className}`}
      aria-labelledby={ariaLabelledBy}
    >
      <div
        className={`mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}

type SectionHeaderProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <header className={`mb-12 max-w-3xl ${alignment} ${className}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-peach-600">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="font-serif text-3xl leading-tight text-warm-brown-900 sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-warm-brown-600">
          {description}
        </p>
      ) : null}
    </header>
  );
}
