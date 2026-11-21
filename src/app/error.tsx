"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

/** Provides a theme-aware recovery screen when a page fails to load. */
export default function ErrorPage() {
  return (
    <main className="bg-background py-12 text-foreground">
      <Container className="space-y-4">
        <h1 className="text-2xl font-bold">Something went wrong</h1>

        <p className="text-muted-foreground">
          We couldn&apos;t load this page. Please try again.
        </p>

        <Button text="Try again" onClick={() => window.location.reload()} />
      </Container>
    </main>
  );
}
