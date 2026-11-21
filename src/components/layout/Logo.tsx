import Link from "next/link";

/** Renders the homepage link using the active theme's text and focus colours. */
export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="OleMart home"
      className="rounded-sm text-2xl font-bold tracking-tight text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
    >
      OleMart
    </Link>
  );
}
