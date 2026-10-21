import { Suspense } from "react";
import Container from "@/components/ui/Container";
import Logo from "./Logo";
import Navbar from "./Navbar";

/** Displays the site logo and navigation with a loading boundary. */
export default function Header() {
  return (
    <header className="relative z-50 border-b border-slate-200 bg-white">
      <Container className="flex items-center justify-between gap-4 py-4">
        <Logo />

        <Suspense
          fallback={
            <div
              aria-hidden="true"
              className="h-11 w-32 rounded-lg bg-slate-100 md:w-56"
            />
          }
        >
          <Navbar />
        </Suspense>
      </Container>
    </header>
  );
}
