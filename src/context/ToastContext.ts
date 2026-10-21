"use client";

import { createContext } from "react";
import type { ToastOptions } from "@/types/toast";

export type ToastContextValue = {
  showToast: (options: ToastOptions) => void;
  dismissToast: (id: string) => void;
};

/** Provides notification actions to components within ToastProvider. */
export const ToastContext = createContext<ToastContextValue | null>(null);
