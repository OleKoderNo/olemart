import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import type { ContactErrors } from "@/types/contact";

type ContactFieldsProps = {
  idPrefix: string;
  errors: ContactErrors;
};

/** Displays contact fields and their associated validation messages. */
export default function ContactFields({
  idPrefix,
  errors,
}: ContactFieldsProps) {
  return (
    <>
      <Input
        id={`${idPrefix}-fullName`}
        name="fullName"
        label="Full name"
        autoComplete="name"
        required
        minLength={3}
        helpText="At least 3 characters."
        error={errors.fullName}
      />

      <Input
        id={`${idPrefix}-subject`}
        name="subject"
        label="Subject"
        required
        minLength={3}
        helpText="At least 3 characters."
        error={errors.subject}
      />

      <Input
        id={`${idPrefix}-email`}
        name="email"
        label="Email"
        type="email"
        autoComplete="email"
        required
        error={errors.email}
      />

      <Textarea
        id={`${idPrefix}-message`}
        name="message"
        label="Message"
        required
        minLength={10}
        helpText="At least 10 characters."
        error={errors.message}
      />
    </>
  );
}
