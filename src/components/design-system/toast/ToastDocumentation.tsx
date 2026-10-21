import GuidelineSection from "@/components/design-system/GuidelineSection";
import CodeExample from "@/components/design-system/CodeExample";
import ToastExamples from "./ToastExamples";

/** Documents shared notifications, timing, and accessibility behaviour. */
export default function ToastDocumentation() {
  return (
    <GuidelineSection
      id="toasts"
      title="Toasts"
      description="Temporary feedback triggered by user actions."
    >
      <ul className="list-disc space-y-2 pl-5 text-slate-700">
        <li>Call useToast() from a client component inside ToastProvider.</li>
        <li>Use success, info, or error to choose the notification theme.</li>
        <li>Success and info messages dismiss after five seconds.</li>
        <li>Error messages remain until manually dismissed.</li>
        <li>Set duration to zero to disable automatic dismissal.</li>
        <li>Timers pause while hovered or while keyboard focus is inside.</li>
        <li>Notifications are announced without moving keyboard focus.</li>
        <li>Keep form validation errors beside their associated fields.</li>
      </ul>

      <CodeExample
        code={`const { showToast } = useToast();

showToast({
  message: "Product added to cart.",
  theme: "success",
});`}
      />

      <p className="text-sm text-slate-600">
        These buttons display example notifications without changing cart data.
      </p>

      <ToastExamples />
    </GuidelineSection>
  );
}
