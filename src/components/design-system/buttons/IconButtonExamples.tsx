"use client";

import { useState } from "react";
import {
  IoMenuOutline,
  IoCartOutline,
  IoClose,
  IoTrashOutline,
} from "react-icons/io5";
import IconButton from "@/components/ui/IconButton";

/** Demonstrates icon-button variants without changing shop data. */
export default function IconButtonExamples() {
  const [message, setMessage] = useState("");

  return (
    <div className="space-y-4">
      <h4 className="text-base font-semibold">Icon button examples</h4>

      <div className="flex flex-wrap gap-6">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Secondary</p>
          <IconButton
            label="Try the menu button"
            onClick={() => setMessage("Secondary button activated.")}
          >
            <IoMenuOutline aria-hidden="true" className="size-6" />
          </IconButton>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Ghost</p>
          <IconButton
            theme="ghost"
            label="Try the cart button"
            onClick={() => setMessage("Ghost button activated.")}
          >
            <IoCartOutline aria-hidden="true" className="size-6" />
          </IconButton>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Ghost muted</p>
          <IconButton
            theme="ghostMuted"
            label="Try the close button"
            onClick={() => setMessage("Ghost muted button activated.")}
          >
            <IoClose aria-hidden="true" className="size-5" />
          </IconButton>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Danger</p>
          <IconButton
            theme="danger"
            label="Try the remove button"
            onClick={() =>
              setMessage("Danger button activated. No items were removed.")
            }
          >
            <IoTrashOutline aria-hidden="true" className="size-5" />
          </IconButton>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Disabled</p>
          <IconButton label="Remove unavailable" theme="danger" disabled>
            <IoTrashOutline aria-hidden="true" className="size-5" />
          </IconButton>
        </div>
      </div>

      <p role="status" className="min-h-5 text-sm text-muted-foreground">
        {message || "Activate an enabled button to see feedback here."}
      </p>
    </div>
  );
}
