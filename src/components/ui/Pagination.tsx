import type { PaginationMeta } from "@/types/api";
import PaginationLink from "./PaginationLink";

type PaginationProps = {
  meta: Pick<PaginationMeta, "currentPage" | "pageCount">;
  basePath?: string;
  query?: Record<string, string>;
  onPageChange?: (page: number) => void;
};

/**
 * Displays pagination with compact spacing on mobile.
 * Uses links by default, or buttons when onPageChange is provided.
 * Hidden when fewer than two pages exist.
 */
export default function Pagination({
  meta,
  basePath = "/",
  query = {},
  onPageChange,
}: PaginationProps) {
  const { currentPage, pageCount } = meta;

  if (pageCount <= 1) {
    return null;
  }

  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);
  const previousPage = Math.max(1, currentPage - 1);
  const nextPage = Math.min(pageCount, currentPage + 1);

  /** Preserves supplied query parameters when linking to another page. */
  function pageProps(page: number) {
    const params = new URLSearchParams({
      ...query,
      page: String(page),
    });

    return {
      href: `${basePath}?${params.toString()}`,
      onClick: onPageChange ? () => onPageChange(page) : undefined,
    };
  }

  return (
    <nav aria-label="Pagination" className="space-y-3">
      <p aria-live="polite" className="text-center text-sm text-slate-600">
        Page {currentPage} of {pageCount}
      </p>

      <ul className="flex items-center justify-center gap-1 sm:gap-2">
        <li className="shrink-0">
          <PaginationLink
            {...pageProps(previousPage)}
            text="Previous"
            label="Go to previous page"
            disabled={currentPage === 1}
          />
        </li>

        {pages.map((page) => (
          <li key={page} className="shrink-0">
            <PaginationLink
              {...pageProps(page)}
              text={String(page)}
              label={`Go to page ${page}`}
              active={page === currentPage}
            />
          </li>
        ))}

        <li className="shrink-0">
          <PaginationLink
            {...pageProps(nextPage)}
            text="Next"
            label="Go to next page"
            disabled={currentPage === pageCount}
          />
        </li>
      </ul>
    </nav>
  );
}
