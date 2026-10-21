"use client";

import { useContext } from "react";
import { ToastContext } from "@/context/ToastContext";

/**
 * Provides access to notification actions.
 * @throws If used outside ToastProvider.
 */
export function useToast() {
  const context = useContext(ToastContext);

  if (context === null) {
    throw new Error("useToast must be used within a ToastProvider.");
  }

  return context;
}
