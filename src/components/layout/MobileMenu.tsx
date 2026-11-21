import clsx from "clsx";
import NavLinks from "./NavLinks";

type MobileMenuProps = {
  isOpen: boolean;
  pathname: string;
  onClose: () => void;
};

/**
 * Renders a theme-aware animated dropdown beneath the mobile trigger.
 * Prevents interaction while closed and respects reduced-motion preferences.
 */
export default function MobileMenu({
  isOpen,
  pathname,
  onClose,
}: MobileMenuProps) {
  return (
    <div
      id="mobile-navigation"
      inert={!isOpen}
      aria-hidden={!isOpen}
      className={clsx(
        "absolute right-0 top-full z-50 mt-2 grid w-40 md:hidden",
        "transition-[grid-template-rows,opacity] duration-200 ease-in-out",
        "motion-reduce:transition-none",
        isOpen
          ? "grid-rows-[1fr] opacity-100"
          : "pointer-events-none grid-rows-[0fr] opacity-0",
      )}
    >
      <div className="min-h-0 overflow-hidden">
        <div className="rounded-lg border border-border bg-surface p-2 text-foreground">
          <NavLinks pathname={pathname} onNavigate={onClose} className="grid" />
        </div>
      </div>
    </div>
  );
}
