/** Pagination information returned with a list of API results. */
export type PaginationMeta = {
  isFirstPage: boolean;
  isLastPage: boolean;
  currentPage: number;

  /** The previous page number, or null when no previous page exists. */
  previousPage: number | null;

  /** The next page number, or null when no next page exists. */
  nextPage: number | null;

  pageCount: number;

  /** Total number of results across all pages. */
  totalCount: number;
};

/**
 * An API response containing a page of results.
 *
 * @typeParam T - The type of each item in the data array.
 */
export type PaginatedResponse<T> = {
  data: T[];
  meta: PaginationMeta;
};

/**
 * An API response containing a single item.
 *
 * @typeParam T - The type of the item in data.
 */
export type SingleResponse<T> = {
  data: T;
  meta: Record<string, unknown>;
};
