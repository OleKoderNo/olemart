/** Values required by the contact form. */
export type ContactValues = {
  fullName: string;
  subject: string;
  email: string;
  message: string;
};

/** Validation messages for fields that contain errors. */
export type ContactErrors = Partial<Record<keyof ContactValues, string>>;
