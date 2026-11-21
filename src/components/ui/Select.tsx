import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

type SelectProps = Omit<ComponentPropsWithoutRef<"select">, "children"> & {
  id: string;
  label: string;
  options: ReadonlyArray<{ value: string; label: string }>;
};

/** Displays a theme-aware labelled select with native keyboard behaviour. */
export default function Select({
  id,
  label,
  options,
  className,
  ...props
}: SelectProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
      </label>

      <select
        {...props}
        id={id}
        className={clsx(
          "min-h-11 w-full cursor-pointer rounded-lg border",
          "border-input-border bg-surface px-3 py-2 text-sm text-foreground",
          "focus-visible:outline-2 focus-visible:outline-offset-2",
          "focus-visible:outline-focus",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
