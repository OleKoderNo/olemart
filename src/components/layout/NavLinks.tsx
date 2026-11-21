import Link from "next/link";
import clsx from "clsx";

type NavLinksProps = {
  pathname: string;
  onNavigate?: () => void;
  className?: string;
};

const links = [
  { href: "/", text: "Shop" },
  { href: "/contact", text: "Contact" },
];

/**
 * Renders theme-aware navigation links and identifies the current page.
 * Calls onNavigate when a link is selected, when provided.
 */
export default function NavLinks({
  pathname,
  onNavigate,
  className,
}: NavLinksProps) {
  return (
    <ul className={clsx("gap-2", className)}>
      {links.map(({ href, text }) => (
        <li key={href}>
          <Link
            href={href}
            onClick={onNavigate}
            aria-current={pathname === href ? "page" : undefined}
            className={clsx(
              "flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-3 text-center",
              "text-sm font-medium",
              "focus-visible:outline-2 focus-visible:outline-offset-2",
              "focus-visible:outline-focus",
              pathname === href
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-surface-muted",
            )}
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
}
