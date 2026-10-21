import GuidelineSection from "@/components/design-system/GuidelineSection";
import CodeExample from "@/components/design-system/CodeExample";
import PaginationExamples from "./PaginationExamples";

/** Documents URL-based pagination and interactive local previews. */
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
        <li>Links wrap when horizontal space is limited.</li>
        <li>basePath sets the route for links and defaults to the homepage.</li>
        <li>
          Supply onPageChange from a client component to update local state
          instead of navigating.
        </li>
        <li>
          Pass query parameters using the query prop to preserve sorting between
          pages.
        </li>
      </ul>

      <CodeExample
        code={`// Shop: navigate using page URLs.
<Pagination meta={meta} />

// Client preview: update local state.
<Pagination
  meta={{ currentPage, pageCount: 3 }}
  onPageChange={setCurrentPage}
/>`}
      />

      <p className="text-sm text-slate-600">
        Each preview below works independently. Click the controls to change its
        active page without navigating or scrolling.
      </p>

      <PaginationExamples />
    </GuidelineSection>
  );
}
