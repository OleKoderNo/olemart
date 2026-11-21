import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import FormField from "./FormField";
import { formControlStyles } from "./formControlStyles";

type SelectProps = Omit<ComponentPropsWithoutRef<"select">, "children"> & {
  id: string;
  label: string;
  options: ReadonlyArray<{ value: string; label: string }>;
};

/** Renders a select using the shared field wrapper and control styles. */
export default function Select({
  id,
  label,
  options,
  className,
  ...props
}: SelectProps) {
  return (
    <FormField id={id} label={label}>
      <select
        {...props}
        id={id}
        className={formControlStyles({
          className: clsx(
            "min-h-11 cursor-pointer text-sm disabled:opacity-50",
            className,
          ),
        })}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FormField>
  );
}
