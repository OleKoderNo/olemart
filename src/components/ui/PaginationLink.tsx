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
 * Renders a page link, or a button for locally controlled pagination.
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
      "cursor-not-allowed border-slate-200 text-slate-400": disabled,
      "border-slate-900 bg-slate-900 text-white": active && !disabled,
      "border-slate-300 bg-white text-slate-700 hover:bg-slate-100":
        !active && !disabled,
      "cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900":
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
