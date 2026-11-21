import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import FormField from "./FormField";
import { formControlStyles } from "./formControlStyles";

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
        className={formControlStyles({
          hasError: Boolean(error),
          className: clsx(
            "block min-h-32 resize-y",
            "disabled:bg-surface-muted disabled:opacity-50",
            className,
          ),
        })}
      />
    </FormField>
  );
}
