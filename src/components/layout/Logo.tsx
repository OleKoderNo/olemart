import Link from "next/link";

/** Renders the OleMart brand as a link to the homepage. */
export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="OleMart home"
      className="rounded-sm text-2xl font-bold tracking-tight text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"
    >
      OleMart
    </Link>
  );
}
