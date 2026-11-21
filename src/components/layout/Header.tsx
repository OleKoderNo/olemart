import { Suspense } from "react";
import Container from "@/components/ui/Container";
import ProductSearchContent from "@/components/products/ProductSearchContent";
import MiniCart from "@/components/cart/MiniCart";
import ThemeToggle from "@/components/theme/ThemeToggle";
import Logo from "./Logo";
import Navbar from "./Navbar";

/** Displays navigation, theme controls, and cart above site-wide search. */
export default function Header() {
  return (
    <header className="relative z-50 border-b border-border bg-surface text-foreground">
      <Container className="space-y-4 py-4">
        <div className="relative z-30 flex flex-wrap items-center justify-between gap-3">
          <Logo />

          <div className="ml-auto flex items-center gap-2 sm:gap-4">
            <Suspense
              fallback={
                <div
                  aria-hidden="true"
                  className="h-11 w-32 rounded-lg bg-surface-muted md:w-40"
                />
              }
            >
              <Navbar />
            </Suspense>

            <ThemeToggle />
            <MiniCart />
          </div>
        </div>

        <div className="relative z-20 mx-auto w-full max-w-xl">
          <Suspense
            fallback={
              <p role="status" className="text-sm text-muted-foreground">
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
