import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  id: string;
  label: string;
  helpText?: string;
  error?: string;
};

/**
 * Renders a labelled input with optional help text and an error message.
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
        className="block text-sm font-semibold text-slate-900"
      >
        {label}
      </label>

      <input
        {...props}
        id={id}
        aria-describedby={descriptionIds}
        aria-invalid={error ? true : invalid}
        className={clsx(
          "min-h-11 w-full rounded-lg border bg-white px-3 py-2 text-slate-900",
          "placeholder:text-slate-500",
          "focus-visible:outline-2 focus-visible:outline-offset-2",
          "disabled:cursor-not-allowed disabled:bg-slate-100",
          error
            ? "border-red-700 focus-visible:outline-red-700"
            : "border-slate-400 focus-visible:outline-slate-900",
          className,
        )}
      />

      {helpText && (
        <p id={`${id}-help`} className="text-sm text-slate-600">
          {helpText}
        </p>
      )}

      {error && (
        <p id={`${id}-error`} className="text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
