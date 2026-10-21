"use client";

import { useState } from "react";
import Pagination from "@/components/ui/Pagination";

type PaginationPreviewProps = {
  initialPage: number;
};

/** Demonstrates pagination without changing the URL or scroll position. */
export default function PaginationPreview({
  initialPage,
}: PaginationPreviewProps) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  return (
    <Pagination
      meta={{ currentPage, pageCount: 3 }}
      onPageChange={setCurrentPage}
    />
  );
}
