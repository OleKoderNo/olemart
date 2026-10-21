"use client";

import { useEffect, useId, useRef, useState } from "react";
import Input from "@/components/ui/Input";
import SearchResults from "./SearchResults";
import type { SearchProduct } from "@/types/search";

type ProductSearchProps = {
  products: SearchProduct[];
  onProductSelect?: (product: SearchProduct) => void;
};

/** Searches product titles and displays a dismissible results panel. */
export default function ProductSearch({
  products,
  onProductSelect,
}: ProductSearchProps) {
  const id = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const searchTerm = query.trim().toLowerCase();
  const matches = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm),
  );
  const showResults = isOpen && searchTerm.length > 0;

  useEffect(() => {
    if (!showResults) return;

    function handleOutsideClick(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !containerRef.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [showResults]);

  return (
    <div
      ref={containerRef}
      role="search"
      aria-label="Product search"
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsOpen(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && showResults) {
          event.preventDefault();
          event.stopPropagation();
          setIsOpen(false);
          containerRef.current?.querySelector("input")?.focus();
        }
      }}
    >
      <Input
        id={`${id}-input`}
        label="Search products"
        type="search"
        placeholder="Search by product title…"
        autoComplete="off"
        value={query}
        aria-controls={showResults ? `${id}-results` : undefined}
        onFocus={() => setIsOpen(true)}
        onChange={(event) => {
          setQuery(event.target.value);
          setIsOpen(true);
        }}
      />

      <p role="status" className="sr-only">
        {showResults
          ? `${matches.length} matching ${
              matches.length === 1 ? "product" : "products"
            }.`
          : ""}
      </p>

      {showResults && (
        <div
          id={`${id}-results`}
          className="absolute inset-x-0 top-full z-20 mt-2 max-h-80
            overflow-y-auto rounded-xl border border-slate-200
            bg-white shadow-lg"
        >
          <SearchResults
            products={matches}
            onSelect={() => setIsOpen(false)}
            onProductSelect={onProductSelect}
          />
        </div>
      )}
    </div>
  );
}
