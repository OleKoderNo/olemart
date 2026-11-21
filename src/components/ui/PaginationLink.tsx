import Link from "next/link";
import clsx from "clsx";

type PaginationLinkProps = {
  href: string;
  text: string;
  label?: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

/**
 * Renders a theme-aware page link or locally controlled pagination button.
 * Uses compact widths on mobile while preserving a comfortable tap height.
 */
export default function PaginationLink({
  href,
  text,
  label,
  active = false,
  disabled = false,
  onClick,
}: PaginationLinkProps) {
  const className = clsx(
    "inline-flex min-h-11 min-w-9 items-center justify-center sm:min-w-11",
    "whitespace-nowrap rounded-lg border px-2 py-2 text-xs font-medium",
    "sm:px-3 sm:text-sm",
    "transition-colors motion-reduce:transition-none",
    {
      "cursor-not-allowed border-border bg-surface-muted text-muted-foreground opacity-50":
        disabled,
      "border-primary bg-primary text-primary-foreground": active && !disabled,
      "border-input-border bg-surface text-foreground hover:bg-surface-muted":
        !active && !disabled,
      "cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus":
        !disabled,
    },
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        aria-label={label}
        aria-current={active ? "page" : undefined}
        className={className}
      >
        {text}
      </button>
    );
  }

  if (disabled) {
    return (
      <span aria-disabled="true" className={className}>
        {text}
      </span>
    );
  }

  return (
    <Link
      href={href}
      aria-label={label}
      aria-current={active ? "page" : undefined}
      className={className}
    >
      {text}
    </Link>
  );
}
