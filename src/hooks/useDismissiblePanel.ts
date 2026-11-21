"use client";

import { useEffect, useRef, useState } from "react";
import type { FocusEvent, KeyboardEvent } from "react";

/**
 * Controls a panel contained alongside its trigger.
 * Closes on outside interaction, focus leaving, or Escape.
 * Ignores focus loss without a new target, which can happen when
 * a quantity button becomes disabled.
 */
export function useDismissiblePanel<T extends HTMLElement = HTMLDivElement>() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<T>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleOutsideClick(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !containerRef.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [isOpen]);

  function toggle() {
    setIsOpen((open) => !open);
  }

  /** Closes without moving focus, for navigation or outside interaction. */
  function close() {
    setIsOpen(false);
  }

  /** Restores focus for explicit dismissal through Escape or a close button. */
  function closeAndFocus() {
    setIsOpen(false);
    triggerRef.current?.focus();
  }

  function handleBlur(event: FocusEvent<T>) {
    const nextTarget = event.relatedTarget;

    if (
      nextTarget instanceof Node &&
      !event.currentTarget.contains(nextTarget)
    ) {
      close();
    }
  }

  function handleKeyDown(event: KeyboardEvent<T>) {
    if (event.key === "Escape" && isOpen) {
      event.preventDefault();
      event.stopPropagation();
      closeAndFocus();
    }
  }

  return {
    isOpen,
    containerRef,
    triggerRef,
    toggle,
    close,
    closeAndFocus,
    handleBlur,
    handleKeyDown,
  };
}
