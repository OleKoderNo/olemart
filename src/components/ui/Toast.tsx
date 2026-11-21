"use client";

import { useState } from "react";
import clsx from "clsx";
import { IoClose } from "react-icons/io5";
import { useToastTimer } from "@/hooks/useToastTimer";
import type { ToastItem, ToastTheme } from "@/types/toast";

type ToastProps = {
  toast: ToastItem;
  onDismiss: () => void;
};

/** Provides readable status colours in both light and dark mode. */
const themes: Record<ToastTheme, string> = {
  success:
    "border-success-border bg-success-background text-success-foreground",
  error: "border-error-border bg-error-background text-error-foreground",
  info: "border-info-border bg-info-background text-info-foreground",
};

/** Displays a theme-aware, dismissible notification without moving focus. */
export default function Toast({ toast, onDismiss }: ToastProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useToastTimer(toast.duration, isHovered || isFocused, onDismiss);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsFocused(false);
        }
      }}
      className={clsx(
        "pointer-events-auto flex items-start gap-3 rounded-xl border",
        "p-4 shadow-lg",
        themes[toast.theme],
      )}
    >
      <p className="min-w-0 flex-1 wrap-break-word text-sm font-medium">
        {toast.message}
      </p>

      <button
        type="button"
        aria-label="Dismiss notification"
        onClick={onDismiss}
        className="inline-flex size-8 shrink-0 cursor-pointer items-center
          justify-center rounded-md hover:bg-notification-dismiss-hover
          focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-current"
      >
        <IoClose aria-hidden="true" className="size-5" />
      </button>
    </div>
  );
}
