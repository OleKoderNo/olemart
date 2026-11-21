"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import IconButton from "@/components/ui/IconButton";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

/**
 * Renders desktop navigation and an accessible mobile menu trigger.
 * Closes the dropdown on outside interaction, focus leaving,
 * Escape, or selection of a navigation link.
 */
export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) return;

    function handleOutsideClick(event: PointerEvent) {
      const target = event.target;

      if (target instanceof Node && !navRef.current?.contains(target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          closeMenu();
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          event.preventDefault();
          closeMenu();
          triggerRef.current?.focus();
        }
      }}
    >
      <NavLinks pathname={pathname} className="hidden items-center md:flex" />

      <IconButton
        ref={triggerRef}
        label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
        className="md:hidden"
      >
        {isOpen ? (
          <IoCloseOutline aria-hidden="true" className="size-6" />
        ) : (
          <IoMenuOutline aria-hidden="true" className="size-6" />
        )}
      </IconButton>

      <MobileMenu isOpen={isOpen} pathname={pathname} onClose={closeMenu} />
    </nav>
  );
}
