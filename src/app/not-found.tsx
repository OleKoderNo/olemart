import Link from "next/link";
import Container from "@/components/ui/Container";

/** Displays a theme-aware recovery page for unknown routes. */
export default function NotFoundPage() {
  return (
    <main className="bg-background py-12 text-foreground">
      <Container className="space-y-4">
        <h1 className="text-2xl font-bold">Page not found</h1>

        <p className="text-muted-foreground">
          This page could not be found. Return to the shop to browse our
          products.
        </p>

        <Link
          href="/"
          className="inline-flex min-h-11 items-center rounded px-2
            font-medium underline underline-offset-4
            focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-focus"
        >
          Return to shop
        </Link>
      </Container>
    </main>
  );
}
