"use client";

import { usePathname } from "next/navigation";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import IconButton from "@/components/ui/IconButton";
import { useDismissiblePanel } from "@/hooks/useDismissiblePanel";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

/** Renders responsive navigation using shared panel dismissal behaviour. */
export default function Navbar() {
  const pathname = usePathname();
  const {
    isOpen,
    containerRef,
    triggerRef,
    toggle,
    close,
    handleBlur,
    handleKeyDown,
  } = useDismissiblePanel<HTMLElement>();

  return (
    <nav
      ref={containerRef}
      aria-label="Main navigation"
      className="relative"
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <NavLinks pathname={pathname} className="hidden items-center md:flex" />

      <IconButton
        ref={triggerRef}
        label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={toggle}
        className="md:hidden"
      >
        {isOpen ? (
          <IoCloseOutline aria-hidden="true" className="size-6" />
        ) : (
          <IoMenuOutline aria-hidden="true" className="size-6" />
        )}
      </IconButton>

      <MobileMenu isOpen={isOpen} pathname={pathname} onClose={close} />
    </nav>
  );
}
