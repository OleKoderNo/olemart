"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

/** Provides a recovery option when a page fails to load. */
export default function ErrorPage() {
  return (
    <main className="py-12 text-slate-900">
      <Container className="space-y-4">
        <h1 className="text-2xl font-bold">Something went wrong</h1>

        <p className="text-slate-600">
          We couldn't load this page. Please try again.
        </p>

        <Button text="Try again" onClick={() => window.location.reload()} />
      </Container>
    </main>
  );
}
