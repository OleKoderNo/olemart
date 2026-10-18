"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

/** Demonstrates button themes, disabled states, and click handling. */
export default function ButtonExamples() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Available themes</h3>

        <div className="flex flex-wrap gap-3">
          <Button theme="primary" text="Add to cart" />
          <Button theme="secondary" text="Cancel" />
          <Button theme="danger" text="Remove item" />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Disabled states</h3>

        <div className="flex flex-wrap gap-3">
          <Button theme="primary" text="Add to cart" disabled />
          <Button theme="secondary" text="Cancel" disabled />
          <Button theme="danger" text="Remove item" disabled />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Interactive example</h3>

        <p className="text-slate-600">
          Activate the button with a mouse, Enter, or Space.
        </p>

        <Button
          text="Test button"
          onClick={() => setClickCount((count) => count + 1)}
        />

        <p role="status">Button activated {clickCount} times.</p>
      </div>
    </div>
  );
}
