"use client";

import { useId, useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";
import { validateContact } from "@/lib/validation/validateContact";
import type { ContactErrors, ContactValues } from "@/types/contact";
import ContactFields from "./ContactFields";

/** Reads contact values without modifying the user's visible input. */
function readValues(form: HTMLFormElement): ContactValues {
  const data = new FormData(form);

  return {
    fullName: String(data.get("fullName") ?? "").trim(),
    subject: String(data.get("subject") ?? "").trim(),
    email: String(data.get("email") ?? "").trim(),
    message: String(data.get("message") ?? "").trim(),
  };
}

/** Identifies contact field names before using them as typed object keys. */
function isContactField(name: string): name is keyof ContactValues {
  return (
    name === "fullName" ||
    name === "subject" ||
    name === "email" ||
    name === "message"
  );
}

/**
 * Validates fields on blur and rechecks existing errors while typing.
 * Submission validates all fields and displays a demo confirmation.
 */
export default function ContactForm() {
  const id = useId();
  const [errors, setErrors] = useState<ContactErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  /** Updates only the selected field's error, preserving other errors. */
  function validateField(name: keyof ContactValues, form: HTMLFormElement) {
    const message = validateContact(readValues(form))[name];

    setErrors((currentErrors) => {
      const nextErrors = { ...currentErrors };

      if (message) {
        nextErrors[name] = message;
      } else {
        delete nextErrors[name];
      }

      return nextErrors;
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const nextErrors = validateContact(readValues(form));

    setErrors(nextErrors);
    setIsSubmitted(false);

    const firstInvalidField = Object.keys(nextErrors)[0];

    if (firstInvalidField) {
      // Focus after the field's error message has rendered.
      requestAnimationFrame(() => {
        const field = form.elements.namedItem(firstInvalidField);

        if (field instanceof HTMLElement) {
          field.focus();
        }
      });

      return;
    }

    // Validation succeeds, but no message-delivery service is connected.
    setIsSubmitted(true);
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      onBlur={(event) => {
        const field = event.target;

        if (
          (field instanceof HTMLInputElement ||
            field instanceof HTMLTextAreaElement) &&
          isContactField(field.name)
        ) {
          validateField(field.name, event.currentTarget);
        }
      }}
      onChange={(event) => {
        setIsSubmitted(false);

        const field = event.target;

        // Avoid showing new errors while someone first types a value.
        // Once an error exists, provide feedback as they correct it.
        if (
          (field instanceof HTMLInputElement ||
            field instanceof HTMLTextAreaElement) &&
          isContactField(field.name) &&
          errors[field.name]
        ) {
          validateField(field.name, event.currentTarget);
        }
      }}
      className="space-y-5"
    >
      <p className="text-sm text-slate-600">
        All fields are required. This demo validates your message but does not
        send it.
      </p>

      <ContactFields idPrefix={id} errors={errors} />

      {Object.keys(errors).length > 0 && (
        <p className="text-sm text-red-700">
          Please correct the highlighted fields before submitting.
        </p>
      )}

      <Button type="submit" text="Submit message" />

      <p role="status" className="text-sm text-slate-700">
        {isSubmitted &&
          "Your message passed validation. No message was sent because this is a demo."}
      </p>
    </form>
  );
}
