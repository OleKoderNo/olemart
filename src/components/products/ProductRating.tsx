import { FaStar } from "react-icons/fa";

type ProductRatingProps = {
  rating: number;
  reviewCount: number;
};

/**
 * Displays a product rating out of five and its review count.
 * Shows an unrated message when no reviews exist.
 */
export default function ProductRating({
  rating,
  reviewCount,
}: ProductRatingProps) {
  if (reviewCount === 0) {
    return <p className="text-sm text-slate-600">No reviews yet</p>;
  }

  return (
    <p className="flex flex-wrap items-center gap-2 text-sm text-slate-700">
      <FaStar aria-hidden="true" className="shrink-0 text-amber-600" />

      <span>
        <span className="sr-only">Rated </span>
        {rating.toFixed(1)}
        <span aria-hidden="true"> / 5</span>
        <span className="sr-only"> out of 5</span>
      </span>

      <span>
        ({reviewCount} {reviewCount === 1 ? "review" : "reviews"})
      </span>
    </p>
  );
}
