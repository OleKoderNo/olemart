import clsx from "clsx";

export type ButtonTheme = "primary" | "secondary" | "danger";

type ButtonStyleOptions = {
  theme?: ButtonTheme;
  disabled?: boolean;
  className?: string;
};

/** Shared colours for buttons and links styled as buttons. */
const themes: Record<ButtonTheme, string> = {
  primary: "bg-primary text-primary-foreground",
  secondary: "border border-input-border bg-surface text-foreground",
  danger: "bg-danger text-danger-foreground",
};

const hoverStyles: Record<ButtonTheme, string> = {
  primary: "hover:bg-primary-hover",
  secondary: "hover:bg-surface-muted",
  danger: "hover:bg-danger-hover",
};

/**
 * Builds consistent styles for action buttons and navigation links.
 * Disabled styling is visual only; the consuming component controls behaviour.
 */
export function buttonStyles({
  theme = "primary",
  disabled = false,
  className,
}: ButtonStyleOptions = {}): string {
  return clsx(
    "inline-flex min-h-11 items-center justify-center",
    "rounded-lg px-5 py-3 text-sm font-semibold",
    "transition-colors motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    "focus-visible:outline-focus",
    themes[theme],
    disabled
      ? "cursor-not-allowed opacity-50"
      : clsx("cursor-pointer", hoverStyles[theme]),
    className,
  );
}
