/** Displays the section heading and feedback while products load. */
export default function ProductListingLoading() {
  return (
    <div className="space-y-6">
      <h2
        id="products-heading"
        className="text-2xl  font-semibold text-slate-900"
      >
        Our products
      </h2>

      <p role="status" className="py-8 text-center text-slate-600">
        Loading products…
      </p>
    </div>
  );
}
