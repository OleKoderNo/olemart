import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

type TextareaProps = Omit<ComponentPropsWithoutRef<"textarea">, "children"> & {
  id: string;
  label: string;
  helpText?: string;
  error?: string;
};

/** Displays a labelled multiline field with help text and error feedback. */
export default function Textarea({
  id,
  label,
  helpText,
  error,
  rows = 5,
  className,
  "aria-describedby": describedBy,
  "aria-invalid": invalid,
  ...props
}: TextareaProps) {
  const descriptionIds = [
    describedBy,
    helpText ? `${id}-help` : undefined,
    error ? `${id}-error` : undefined,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-slate-900">
        {label}
      </label>

      <textarea
        {...props}
        id={id}
        rows={rows}
        aria-describedby={descriptionIds || undefined}
        aria-invalid={error ? true : invalid}
        className={clsx(
          "block min-h-32 w-full resize-y rounded-lg border",
          "bg-white px-3 py-2 text-slate-900",
          "focus-visible:outline-2 focus-visible:outline-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error
            ? "border-red-700 focus-visible:outline-red-700"
            : "border-slate-300 focus-visible:outline-slate-900",
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
