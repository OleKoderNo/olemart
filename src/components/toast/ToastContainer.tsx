"use client";

import { useCallback } from "react";
import Toast from "@/components/ui/Toast";
import type { ToastItem } from "@/types/toast";

type ToastContainerProps = {
  toasts: ToastItem[];
  dismissToast: (id: string) => void;
};

type ToastEntryProps = {
  toast: ToastItem;
  dismissToast: (id: string) => void;
};

/** Keeps each notification's dismissal callback stable between renders. */
function ToastEntry({ toast, dismissToast }: ToastEntryProps) {
  const handleDismiss = useCallback(
    () => dismissToast(toast.id),
    [dismissToast, toast.id],
  );

  return <Toast toast={toast} onDismiss={handleDismiss} />;
}

/** Positions notifications above page content with mobile-safe spacing. */
export default function ToastContainer({
  toasts,
  dismissToast,
}: ToastContainerProps) {
  return (
    <section
      aria-label="Notifications"
      className="pointer-events-none fixed inset-x-4 top-44 z-100
    flex max-h-[80dvh] flex-col gap-3 overflow-y-auto p-1
    sm:left-auto sm:w-96"
    >
      {toasts.map((toast) => (
        <ToastEntry key={toast.id} toast={toast} dismissToast={dismissToast} />
      ))}
    </section>
  );
}
