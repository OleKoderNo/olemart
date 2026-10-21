"use client";

import { useEffect, useRef } from "react";

/**
 * Automatically dismisses a notification after its remaining duration.
 * Pausing preserves the time remaining. A duration of zero disables it.
 */
export function useToastTimer(
  duration: number,
  paused: boolean,
  onDismiss: () => void,
) {
  const remaining = useRef(duration);

  useEffect(() => {
    if (duration === 0 || paused) {
      return;
    }

    const startedAt = Date.now();
    const timeout = window.setTimeout(
      onDismiss,
      Math.max(0, remaining.current),
    );

    return () => {
      window.clearTimeout(timeout);
      remaining.current = Math.max(
        0,
        remaining.current - (Date.now() - startedAt),
      );
    };
  }, [duration, paused, onDismiss]);
}
