"use client";

import { useTheme } from "next-themes";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import IconButton from "@/components/ui/IconButton";

/**
 * Switches between light and dark mode and saves the preference.
 * CSS controls icons and labels to keep the initial render hydration-safe.
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
    <IconButton
      onClick={toggleTheme}
      label={
        <>
          <span className="dark:hidden">Switch to dark mode</span>
          <span className="hidden dark:inline">Switch to light mode</span>
        </>
      }
    >
      <IoMoonOutline aria-hidden="true" className="size-5 dark:hidden" />
      <IoSunnyOutline aria-hidden="true" className="hidden size-5 dark:block" />
    </IconButton>
  );
}
