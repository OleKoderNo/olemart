import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { buttonStyles, type ButtonTheme } from "./buttonStyles";

type ButtonLinkProps = Omit<
  ComponentPropsWithoutRef<typeof Link>,
  "children"
> & {
  text: string;
  theme?: ButtonTheme;
};

/**
 * Renders a navigation link using shared button styles.
 * Preserves Next.js Link props and native link behaviour.
 */
export default function ButtonLink({
  text,
  theme = "primary",
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link {...props} className={buttonStyles({ theme, className })}>
      {text}
    </Link>
  );
}
