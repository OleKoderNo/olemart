"use client";

import { useSyncExternalStore } from "react";

const TABLET_QUERY = "(min-width: 640px)";
const DESKTOP_QUERY = "(min-width: 1024px)";

/** Listens for changes across the grid's tablet and desktop breakpoints. */
function subscribe(onChange: () => void) {
  const tabletQuery = window.matchMedia(TABLET_QUERY);
  const desktopQuery = window.matchMedia(DESKTOP_QUERY);

  tabletQuery.addEventListener("change", onChange);
  desktopQuery.addEventListener("change", onChange);

  return () => {
    tabletQuery.removeEventListener("change", onChange);
    desktopQuery.removeEventListener("change", onChange);
  };
}

/** Matches the page size to the grid's one, two, or three columns. */
function getSnapshot(): number {
  if (window.matchMedia(DESKTOP_QUERY).matches) {
    return 9;
  }

  if (window.matchMedia(TABLET_QUERY).matches) {
    return 8;
  }

  return 6;
}

/** The server cannot determine the browser's viewport width. */
function getServerSnapshot(): number | null {
  return null;
}

/**
 * Returns six, eight, or nine products per page for mobile, tablet,
 * and desktop. Full pages therefore contain complete grid rows.
 * Returns null until the browser width is available.
 */
export function useProductsPerPage(): number | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
