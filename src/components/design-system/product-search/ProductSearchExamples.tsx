"use client";

import { useState } from "react";
import ProductSearch from "@/components/products/ProductSearch";
import type { SearchProduct } from "@/types/search";

/** Fictional products used only for interactive search documentation. */
const exampleProducts: SearchProduct[] = [
  { id: "demo-car", title: "Toy car" },
  { id: "demo-train", title: "Toy train" },
  { id: "demo-headphones", title: "Gold headphones" },
];

/** Demonstrates searching and selecting without leaving documentation. */
export default function ProductSearchExamples() {
  const [selectedProduct, setSelectedProduct] = useState<SearchProduct | null>(
    null,
  );

  return (
    <div className="max-w-xl space-y-4">
      <ProductSearch
        products={exampleProducts}
        onProductSelect={setSelectedProduct}
      />

      <p role="status" className="min-h-5 text-sm text-slate-600">
        {selectedProduct
          ? `Selected: ${selectedProduct.title}`
          : "Select a result to preview its behaviour."}
      </p>
    </div>
  );
}
