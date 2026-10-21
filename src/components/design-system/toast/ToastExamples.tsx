"use client";

import Button from "@/components/ui/Button";
import { useToast } from "@/hooks/useToast";

/** Demonstrates notification themes and dismissal behaviour. */
export default function ToastExamples() {
  const { showToast } = useToast();

  return (
    <div className="flex flex-wrap gap-3">
      <Button
        text="Success toast"
        onClick={() =>
          showToast({
            message: "Demo product added to cart.",
            theme: "success",
          })
        }
      />

      <Button
        text="Info toast"
        theme="secondary"
        onClick={() =>
          showToast({
            message: "This is an example information message.",
            theme: "info",
          })
        }
      />

      <Button
        text="Error toast"
        theme="danger"
        onClick={() =>
          showToast({
            message: "Example error. Dismiss this message when finished.",
            theme: "error",
          })
        }
      />
    </div>
  );
}
