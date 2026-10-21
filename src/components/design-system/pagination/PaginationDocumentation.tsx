import GuidelineSection from "@/components/design-system/GuidelineSection";
import CodeExample from "@/components/design-system/CodeExample";
import PaginationExamples from "./PaginationExamples";

/** Documents pagination navigation, responsive page sizes, and local previews. */
export default function PaginationDocumentation() {
  return (
    <GuidelineSection
      id="pagination"
      title="Pagination"
      description="Navigate between result pages using links or local state."
    >
      <ul className="list-disc space-y-2 pl-5 text-slate-700">
        <li>Pass currentPage and pageCount using the meta prop.</li>
        <li>The current page is highlighted and marked for screen readers.</li>
        <li>Previous is disabled on the first page.</li>
        <li>Next is disabled on the last page.</li>
        <li>Pagination is hidden when there are fewer than two pages.</li>
        <li>
          Mobile uses smaller text, horizontal padding, and spacing while
          keeping all page numbers visible.
        </li>
        <li>basePath sets the route for links and defaults to the homepage.</li>
        <li>
          Pass query parameters using the query prop to preserve sorting between
          pages.
        </li>
        <li>
          Supply onPageChange from a client component to update local state
          instead of navigating.
        </li>
      </ul>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Shop page sizes</h3>

        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>Below 640px: six products per page in one column.</li>
          <li>From 640px to 1023px: eight products per page in two columns.</li>
          <li>From 1024px: nine products per page in three columns.</li>
          <li>
            The product listing calculates page sizes and passes the resulting
            page count to Pagination.
          </li>
          <li>
            Page counts update when the viewport crosses these breakpoints.
          </li>
          <li>
            If resizing makes the current page unavailable, the shop moves to
            the last available page.
          </li>
          <li>
            The final page may contain fewer products and an incomplete row.
          </li>
        </ul>
      </div>

      <CodeExample
        code={`// Shop: navigate using page URLs and preserve sorting.
<Pagination meta={meta} query={{ sort }} />

// Client preview: update local state.
<Pagination
  meta={{ currentPage, pageCount: 3 }}
  onPageChange={setCurrentPage}
/>`}
      />

      <p className="text-sm text-slate-600">
        Each preview below uses three pages and works independently. Click the
        controls to change its active page without navigating or scrolling. Test
        responsive product counts on the shop page.
      </p>

      <PaginationExamples />
    </GuidelineSection>
  );
}
