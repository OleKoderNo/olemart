import CodeExample from "@/components/design-system/CodeExample";

/** Documents the shared dismissal hook used by navigation and the mini cart. */
export default function DismissiblePanelGuidelines() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Shared panel behaviour</h3>

      <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
        <li>Use useDismissiblePanel inside a client component.</li>
        <li>
          Attach containerRef, handleBlur, and handleKeyDown to an element
          wrapping both the trigger and panel.
        </li>
        <li>
          Attach triggerRef to the trigger button and use toggle to open or
          close the panel.
        </li>
        <li>
          Use close when navigating or dismissing without moving focus. Use
          closeAndFocus for an explicit close button.
        </li>
        <li>
          Escape closes the panel and returns focus to its trigger. Clicking
          outside or moving focus outside also closes it.
        </li>
        <li>
          Focus loss without a new target is ignored. This keeps the mini cart
          open when decreasing quantity disables its minus button.
        </li>
        <li>
          The component remains responsible for panel IDs, accessible labels,
          animation, and preventing interaction while closed.
        </li>
        <li>
          This hook does not trap focus and is not a complete modal-dialog
          implementation.
        </li>
      </ul>

      <CodeExample
        code={`// Inside a client component:
const id = useId();
const {
  isOpen,
  containerRef,
  triggerRef,
  toggle,
  closeAndFocus,
  handleBlur,
  handleKeyDown,
} = useDismissiblePanel();

return (
  <div
    ref={containerRef}
    onBlur={handleBlur}
    onKeyDown={handleKeyDown}
  >
    <button
      ref={triggerRef}
      type="button"
      aria-expanded={isOpen}
      aria-controls={id}
      onClick={toggle}
    >
      {isOpen ? "Close panel" : "Open panel"}
    </button>

    <div id={id} hidden={!isOpen}>
      <p>Panel content</p>
      <button type="button" onClick={closeAndFocus}>
        Close
      </button>
    </div>
  </div>
);`}
      />

      <p className="text-sm text-muted-foreground">
        This example uses hidden for immediate dismissal. Animated panels use
        inert and aria-hidden alongside their closed-state styles so hidden
        controls cannot receive focus during the closing animation.
      </p>
    </div>
  );
}
