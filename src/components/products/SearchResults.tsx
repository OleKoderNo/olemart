import Link from "next/link";
import type { SearchProduct } from "@/types/search";

type SearchResultsProps = {
  products: SearchProduct[];
  onSelect: () => void;
  onProductSelect?: (product: SearchProduct) => void;
};

/** Displays matching products as links or local preview actions. */
export default function SearchResults({
  products,
  onSelect,
  onProductSelect,
}: SearchResultsProps) {
  if (products.length === 0) {
    return <p className="p-4 text-sm text-slate-600">No products found.</p>;
  }

  const resultClassName =
    "flex min-h-11 w-full cursor-pointer items-center rounded-lg " +
    "px-4 py-3 text-left text-sm text-slate-900 hover:bg-slate-100 " +
    "focus-visible:outline-2 focus-visible:-outline-offset-2 " +
    "focus-visible:outline-slate-900";

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
