"use client";

import type { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type ThemeProviderProps = {
  children: ReactNode;
};

/**
 * Saves the visitor's theme preference and applies it to html.
 * Uses the device preference until the visitor chooses a theme.
 */
export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="olemart-theme"
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
