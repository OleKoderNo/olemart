import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import FormField from "./FormField";

type TextareaProps = Omit<ComponentPropsWithoutRef<"textarea">, "children"> & {
  id: string;
  label: string;
  helpText?: string;
  error?: string;
};

/**
 * Renders a themed multiline control inside the shared field wrapper.
 * Preserves supplied accessibility descriptions and connects field feedback.
 * Validation is handled by the parent form.
 */
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
  const descriptionIds =
    [describedBy, helpText && `${id}-help`, error && `${id}-error`]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <FormField id={id} label={label} helpText={helpText} error={error}>
      <textarea
        {...props}
        id={id}
        rows={rows}
        aria-describedby={descriptionIds}
        aria-invalid={error ? true : invalid}
        className={clsx(
          "block min-h-32 w-full resize-y rounded-lg border",
          "bg-surface px-3 py-2 text-foreground",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-2 focus-visible:outline-offset-2",
          "disabled:cursor-not-allowed disabled:bg-surface-muted disabled:opacity-50",
          error
            ? "border-red-700 focus-visible:outline-red-700 dark:border-red-400 dark:focus-visible:outline-red-400"
            : "border-input-border focus-visible:outline-focus",
          className,
        )}
      />
    </FormField>
  );
}
