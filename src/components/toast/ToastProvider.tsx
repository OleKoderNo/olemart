"use client";

import { useCallback, useMemo, useState, type ReactNode } from "react";
import { ToastContext } from "@/context/ToastContext";
import type { ToastItem, ToastOptions } from "@/types/toast";
import ToastContainer from "./ToastContainer";

type ToastProviderProps = {
  children: ReactNode;
};

/** Shares notification actions and renders visible and spoken feedback. */
export default function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const [announcement, setAnnouncement] = useState<ToastItem | null>(null);

  const dismissToast = useCallback((id: string) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback((options: ToastOptions) => {
    const theme = options.theme ?? "info";
    const requestedDuration =
      options.duration ?? (theme === "error" ? 0 : 5000);

    const toast: ToastItem = {
      id: crypto.randomUUID(),
      message: options.message,
      theme,
      duration: Number.isFinite(requestedDuration)
        ? Math.max(0, requestedDuration)
        : 5000,
    };

    setToasts((current) => [...current, toast]);
    setAnnouncement(toast);
  }, []);

  const value = useMemo(
    () => ({ showToast, dismissToast }),
    [showToast, dismissToast],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}

      <ToastContainer toasts={toasts} dismissToast={dismissToast} />

      <div role="status" aria-atomic="true" className="sr-only">
        {announcement && announcement.theme !== "error" && (
          <span key={announcement.id}>{announcement.message}</span>
        )}
      </div>

      <div role="alert" aria-atomic="true" className="sr-only">
        {announcement?.theme === "error" && (
          <span key={announcement.id}>{announcement.message}</span>
        )}
      </div>
    </ToastContext.Provider>
  );
}
