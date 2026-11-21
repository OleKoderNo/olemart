import type { ReactNode } from "react";
import Image from "next/image";
import type { Product } from "@/types/product";
import DiscountBadge from "./DiscountBadge";
import ProductPrice from "./ProductPrice";
import ProductRating from "./ProductRating";
import ProductTags from "./ProductTags";
import ProductReviews from "./ProductReviews";

type ProductDetailsProps = {
  product: Product;
  headingLevel?: 1 | 3;
  actions?: ReactNode;
};

/** Displays theme-aware product information, pricing, tags, actions, and reviews. */
export default function ProductDetails({
  product,
  headingLevel = 1,
  actions,
}: ProductDetailsProps) {
  const Title = headingLevel === 1 ? "h1" : "h3";
  const ReviewsHeading = headingLevel === 1 ? "h2" : "h4";

  return (
    <article className="space-y-10">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Keeps product images on a consistent light backdrop in both themes. */}
        <div className="relative aspect-square overflow-hidden rounded-xl bg-image-background">
          <Image
            src={product.image.url}
            alt={product.image.alt || product.title}
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="object-contain p-6"
          />

          <DiscountBadge
            price={product.price}
            discountedPrice={product.discountedPrice}
            className="absolute left-4 top-4"
          />
        </div>

        <div className="min-w-0 space-y-5">
          <Title className="text-3xl font-bold text-foreground">
            {product.title}
          </Title>

          <ProductRating
            rating={product.rating}
            reviewCount={product.reviews.length}
          />

          <ProductPrice
            price={product.price}
            discountedPrice={product.discountedPrice}
          />

          <p className="whitespace-pre-line wrap-break-word leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <ProductTags tags={product.tags} />
          {actions}
        </div>
      </div>

      <section aria-label="Customer reviews" className="space-y-4">
        <ReviewsHeading className="text-2xl font-semibold text-foreground">
          Customer reviews
        </ReviewsHeading>

        <ProductReviews reviews={product.reviews} />
      </section>
    </article>
  );
}
