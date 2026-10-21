import { Suspense } from "react";
import Container from "@/components/ui/Container";
import ProductSearchContent from "@/components/products/ProductSearchContent";
import Logo from "./Logo";
import Navbar from "./Navbar";

/** Displays the logo and navigation above the site-wide product search. */
export default function Header() {
  return (
    <header className="relative z-50 border-b border-slate-200 bg-white">
      <Container className="space-y-4 py-4">
        <div className="relative z-30 flex items-center justify-between gap-4">
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
        </div>

        <div className="relative z-20 mx-auto w-full max-w-xl">
          <Suspense
            fallback={
              <p role="status" className="text-sm text-slate-600">
                Loading product search…
              </p>
            }
          >
            <ProductSearchContent />
          </Suspense>
        </div>
      </Container>
    </header>
  );
}
