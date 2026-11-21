import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  id: string;
  label: string;
  helpText?: string;
  error?: string;
};

/**
 * Renders a theme-aware labelled input with help text and error messages.
 * Connects descriptive text to the input for accessibility.
 * Validation is handled by the parent form.
 */
export default function Input({
  id,
  label,
  helpText,
  error,
  className,
  "aria-describedby": describedBy,
  "aria-invalid": invalid,
  ...props
}: InputProps) {
  const descriptionIds =
    [describedBy, helpText && `${id}-help`, error && `${id}-error`]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-foreground"
      >
        {label}
      </label>

      <input
        {...props}
        id={id}
        aria-describedby={descriptionIds}
        aria-invalid={error ? true : invalid}
        className={clsx(
          "min-h-11 w-full rounded-lg border bg-surface px-3 py-2 text-foreground",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-2 focus-visible:outline-offset-2",
          "disabled:cursor-not-allowed disabled:bg-surface-muted",
          error
            ? "border-red-700 focus-visible:outline-red-700 dark:border-red-400 dark:focus-visible:outline-red-400"
            : "border-input-border focus-visible:outline-focus",
          className,
        )}
      />

      {helpText && (
        <p id={`${id}-help`} className="text-sm text-muted-foreground">
          {helpText}
        </p>
      )}

      {error && (
        <p
          id={`${id}-error`}
          className="text-sm text-red-700 dark:text-red-400"
        >
          {error}
        </p>
      )}
    </div>
  );
}
