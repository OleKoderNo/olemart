import Link from "next/link";
import type { SearchProduct } from "@/types/search";

type SearchResultsProps = {
  products: SearchProduct[];
  onSelect: () => void;
  onProductSelect?: (product: SearchProduct) => void;
};

/** Displays theme-aware product links or local documentation preview actions. */
export default function SearchResults({
  products,
  onSelect,
  onProductSelect,
}: SearchResultsProps) {
  if (products.length === 0) {
    return (
      <p className="p-4 text-sm text-muted-foreground">No products found.</p>
    );
  }

  const resultClassName =
    "flex min-h-11 w-full cursor-pointer items-center rounded-lg " +
    "px-4 py-3 text-left text-sm text-foreground hover:bg-surface-muted " +
    "focus-visible:outline-2 focus-visible:-outline-offset-2 " +
    "focus-visible:outline-focus";

  return (
    <ul aria-label="Matching products" className="p-2">
      {products.map((product) => (
        <li key={product.id}>
          {onProductSelect ? (
            <button
              type="button"
              className={resultClassName}
              onClick={() => {
                onProductSelect(product);
                onSelect();
              }}
            >
              {product.title}
            </button>
          ) : (
            <Link
              href={`/product/${product.id}`}
              className={resultClassName}
              onClick={onSelect}
            >
              {product.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
