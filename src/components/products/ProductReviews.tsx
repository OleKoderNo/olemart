import type { ProductReview } from "@/types/product";

type ProductReviewsProps = {
  reviews: ProductReview[];
};

/** Displays theme-aware customer reviews or an empty-state message. */
export default function ProductReviews({ reviews }: ProductReviewsProps) {
  if (reviews.length === 0) {
    return <p className="text-muted-foreground">No reviews yet.</p>;
  }

  return (
    <ul className="space-y-4">
      {reviews.map((review) => (
        <li
          key={review.id}
          className="space-y-3 rounded-lg border border-border bg-surface p-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="font-semibold text-foreground">{review.username}</p>

            <p className="text-sm text-muted-foreground">
              <span className="sr-only">Rated </span>
              {review.rating} out of 5
            </p>
          </div>

          <p className="whitespace-pre-line wrap-break-word text-muted-foreground">
            {review.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
