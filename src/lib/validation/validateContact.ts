import type { ContactErrors, ContactValues } from "@/types/contact";

/**
 * Validates contact fields after trimming surrounding whitespace.
 * Email validation checks format, not whether the address exists.
 */
export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};

  if (values.fullName.trim().length < 3) {
    errors.fullName = "Full name must contain at least 3 characters.";
  }

  if (values.subject.trim().length < 3) {
    errors.subject = "Subject must contain at least 3 characters.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "Message must contain at least 10 characters.";
  }

  return errors;
}
