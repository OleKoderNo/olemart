"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

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

          navRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
        }
      }}
    >
      <NavLinks pathname={pathname} className="hidden items-center md:flex" />

      <Button
        theme="secondary"
        text={isOpen ? "Close menu" : "Menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
        className="min-w-32 md:hidden"
      />

      <MobileMenu isOpen={isOpen} pathname={pathname} onClose={closeMenu} />
    </nav>
  );
}
