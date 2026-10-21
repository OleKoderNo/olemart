import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import DiscountBadge from "./DiscountBadge";
import ProductPrice from "./ProductPrice";
import ProductRating from "./ProductRating";

type ProductCardProps = {
  product: Product;
};

/**
 * Displays a product summary with its image, pricing, and rating.
 * Links to the product detail page using the product ID.
 */
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="h-full rounded-xl border border-slate-200 bg-white">
      <Link
        href={`/product/${product.id}`}
        className="group flex h-full flex-col rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"
      >
        <div className="relative aspect-square overflow-hidden rounded-t-xl bg-slate-100">
          <Image
            src={product.image.url}
            alt={product.image.alt || product.title}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-contain p-4"
          />

          <DiscountBadge
            price={product.price}
            discountedPrice={product.discountedPrice}
            className="absolute left-3 top-3"
          />
        </div>

        <div className="flex flex-1 flex-col gap-3 p-4">
          <h3 className="text-lg font-semibold text-slate-900 group-hover:underline">
            {product.title}
          </h3>

          <ProductRating
            rating={product.rating}
            reviewCount={product.reviews.length}
          />

          <ProductPrice
            price={product.price}
            discountedPrice={product.discountedPrice}
            className="mt-auto"
          />
        </div>
      </Link>
    </article>
  );
}
