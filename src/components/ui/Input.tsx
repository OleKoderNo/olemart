import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import FormField from "./FormField";
import { formControlStyles } from "./formControlStyles";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  id: string;
  label: string;
  helpText?: string;
  error?: string;
};

/**
 * Renders a themed input inside the shared field wrapper.
 * Preserves supplied accessibility descriptions and connects field feedback.
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
    <FormField id={id} label={label} helpText={helpText} error={error}>
      <input
        {...props}
        id={id}
        aria-describedby={descriptionIds}
        aria-invalid={error ? true : invalid}
        className={formControlStyles({
          hasError: Boolean(error),
          className: clsx("min-h-11 disabled:bg-surface-muted", className),
        })}
      />
    </FormField>
  );
}
