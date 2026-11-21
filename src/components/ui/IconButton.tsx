import type { ComponentPropsWithoutRef, ReactNode } from "react";
import clsx from "clsx";

type IconButtonProps = Omit<
  ComponentPropsWithoutRef<"button">,
  "children" | "aria-label" | "aria-labelledby"
> & {
  label: ReactNode;
  children: ReactNode;
};

/**
 * Renders a compact icon button with a required accessible label.
 * Accepts JSX labels so theme-dependent text can remain hydration-safe.
 * Icons should use aria-hidden because the label describes the action.
 */
export default function IconButton({
  label,
  children,
  type = "button",
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={clsx(
        "inline-flex size-11 shrink-0 cursor-pointer items-center justify-center",
        "rounded-lg border border-input-border bg-surface text-foreground",
        "enabled:hover:bg-surface-muted",
        "focus-visible:outline-2 focus-visible:outline-offset-2",
        "focus-visible:outline-focus",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
    >
      {children}
      <span className="sr-only">{label}</span>
    </button>
  );
}
