import type { ComponentPropsWithoutRef } from "react";
import { buttonStyles, type ButtonTheme } from "./buttonStyles";

type ButtonProps = Omit<ComponentPropsWithoutRef<"button">, "children"> & {
  text: string;
  theme?: ButtonTheme;
};

/**
 * Renders an action button using shared button styles.
 * Defaults to the primary theme and type="button".
 */
export default function Button({
  text,
  theme = "primary",
  type = "button",
  disabled = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      disabled={disabled}
      className={buttonStyles({ theme, disabled, className })}
    >
      {text}
    </button>
  );
}
