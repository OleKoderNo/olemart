"use client";

import { useTheme } from "next-themes";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

/**
 * Switches between light and dark mode and saves the preference.
 * CSS controls icon visibility to avoid depending on browser-only
 * theme information during the initial render.
 */
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  function toggleTheme() {
    if (!resolvedTheme) {
      return;
    }

    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={[
        "inline-flex size-11 shrink-0 cursor-pointer items-center justify-center",
        "rounded-lg border border-input-border bg-surface text-foreground",
        "hover:bg-surface-muted",
        "focus-visible:outline-2 focus-visible:outline-offset-2",
        "focus-visible:outline-focus",
      ].join(" ")}
    >
      <IoMoonOutline aria-hidden="true" className="size-5 dark:hidden" />
      <IoSunnyOutline aria-hidden="true" className="hidden size-5 dark:block" />

      <span className="sr-only dark:hidden">Switch to dark mode</span>
      <span className="sr-only hidden dark:inline">Switch to light mode</span>
    </button>
  );
}
