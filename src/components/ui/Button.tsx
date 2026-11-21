import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

type ButtonTheme = "primary" | "secondary" | "danger";

type ButtonProps = Omit<ComponentPropsWithoutRef<"button">, "children"> & {
  text: string;
  theme?: ButtonTheme;
};

/** Uses shared colour tokens so each variant supports light and dark mode. */
const themes: Record<ButtonTheme, string> = {
  primary: "bg-primary text-primary-foreground enabled:hover:bg-primary-hover",
  secondary:
    "border border-input-border bg-surface text-foreground enabled:hover:bg-surface-muted",
  danger: "bg-danger text-danger-foreground enabled:hover:bg-danger-hover",
};

/**
 * Renders a themed button with native HTML button attributes.
 * Defaults to the primary theme and type="button".
 */
export default function Button({
  text,
  theme = "primary",
  type = "button",
  disabled = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      disabled={disabled}
      className={clsx(
        "inline-flex min-h-11 cursor-pointer items-center justify-center",
        "rounded-lg px-5 py-3 text-sm font-semibold",
        "transition-colors motion-reduce:transition-none",
        "focus-visible:outline-2 focus-visible:outline-offset-2",
        "focus-visible:outline-focus",
        "disabled:cursor-not-allowed disabled:opacity-50",
        themes[theme],
        className,
      )}
    >
      {text}
    </button>
  );
}
