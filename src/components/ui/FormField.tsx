import type { ReactNode } from "react";

type FormFieldProps = {
  id: string;
  label: string;
  helpText?: string;
  error?: string;
  children: ReactNode;
};

/**
 * Provides shared label and feedback markup for a form control.
 * The control must use the same id and reference any help or error
 * message IDs through aria-describedby.
 * Validation remains the responsibility of the parent form.
 */
export default function FormField({
  id,
  label,
  helpText,
  error,
  children,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-foreground"
      >
        {label}
      </label>

      {children}

      {helpText && (
        <p id={`${id}-help`} className="text-sm text-muted-foreground">
          {helpText}
        </p>
      )}

      {error && (
        <p id={`${id}-error`} className="text-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
}
