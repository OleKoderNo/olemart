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

const themes: Record<ToastTheme, string> = {
  success: "border-green-300 bg-green-50 text-green-950",
  error: "border-red-300 bg-red-50 text-red-950",
  info: "border-blue-300 bg-blue-50 text-blue-950",
};

/** Displays a dismissible notification without moving keyboard focus. */
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
      <p className="min-w-0 flex-1 break-words text-sm font-medium">
        {toast.message}
      </p>

      <button
        type="button"
        aria-label="Dismiss notification"
        onClick={onDismiss}
        className="inline-flex size-8 shrink-0 cursor-pointer items-center
          justify-center rounded-md hover:bg-black/5
          focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <IoClose aria-hidden="true" className="size-5" />
      </button>
    </div>
  );
}
