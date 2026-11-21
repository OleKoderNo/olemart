import clsx from "clsx";

type FormControlStyleOptions = {
  hasError?: boolean;
  className?: string;
};

/**
 * Builds shared styles for input, textarea, and select controls.
 * Components supply their own sizing and control-specific classes.
 * Error styling is visual; components manage accessibility attributes.
 */
export function formControlStyles({
  hasError = false,
  className,
}: FormControlStyleOptions = {}): string {
  return clsx(
    "w-full rounded-lg border bg-surface px-3 py-2 text-foreground",
    "placeholder:text-muted-foreground",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    "disabled:cursor-not-allowed",
    hasError
      ? "border-error focus-visible:outline-error"
      : "border-input-border focus-visible:outline-focus",
    className,
  );
}
