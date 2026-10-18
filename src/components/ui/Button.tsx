import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

type ButtonTheme = "primary" | "secondary" | "danger";

type ButtonProps = Omit<ComponentPropsWithoutRef<"button">, "children"> & {
  text: string;
  theme?: ButtonTheme;
};

const themes: Record<ButtonTheme, string> = {
  primary:
    "bg-slate-900 text-white enabled:hover:bg-slate-700 focus-visible:outline-slate-900",
  secondary:
    "border border-slate-300 bg-white text-slate-900 enabled:hover:bg-slate-100 focus-visible:outline-slate-900",
  danger:
    "bg-red-700 text-white enabled:hover:bg-red-800 focus-visible:outline-red-700",
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
        "disabled:cursor-not-allowed disabled:opacity-50",
        themes[theme],
        className,
      )}
    >
      {text}
    </button>
  );
}
