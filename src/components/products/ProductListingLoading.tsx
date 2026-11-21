/** Displays a theme-aware heading and status while products load. */
export default function ProductListingLoading() {
  return (
    <div className="space-y-6">
      <h2
        id="products-heading"
        className="text-2xl font-semibold text-foreground"
      >
        Our products
      </h2>

      <p role="status" className="py-8 text-center text-muted-foreground">
        Loading products…
      </p>
    </div>
  );
}
