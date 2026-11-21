import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Container from "@/components/ui/Container";

const links = [
  { href: "/contact", text: "Contact" },
  { href: "/design-system", text: "Design system" },
];

/** Renders theme-aware footer information, navigation, and a GitHub link. */
export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="flex flex-col items-center gap-4 py-6 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground">
          OleMart — a student shop project.
        </p>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-4">
            {links.map(({ href, text }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="inline-flex min-h-11 items-center rounded-sm text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                >
                  {text}
                </Link>
              </li>
            ))}

            <li>
              <a
                href="https://github.com/OleKoderNo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile (opens in a new tab)"
                className="inline-flex size-11 items-center justify-center rounded-lg text-muted-foreground hover:bg-surface-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
              >
                <FaGithub aria-hidden="true" className="size-6" />
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
