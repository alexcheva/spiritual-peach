import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-peach-500 text-white shadow-sm shadow-peach-200/60 hover:bg-peach-600 focus-visible:ring-peach-400",
  secondary:
    "bg-rose-gold-500 text-white shadow-sm shadow-rose-gold-200/60 hover:bg-rose-gold-600 focus-visible:ring-rose-gold-400",
  outline:
    "border border-peach-300 bg-white/70 text-warm-brown-800 hover:border-peach-400 hover:bg-peach-50 focus-visible:ring-peach-300",
  ghost:
    "text-warm-brown-700 hover:bg-peach-100/60 focus-visible:ring-peach-300",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base",
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100 disabled:pointer-events-none disabled:opacity-50";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
} & ComponentPropsWithoutRef<"button">;

export function Button({
  variant = "primary",
  size = "md",
  href,
  external = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props;

  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
