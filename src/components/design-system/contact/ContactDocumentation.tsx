import GuidelineSection from "@/components/design-system/GuidelineSection";
import CodeExample from "@/components/design-system/CodeExample";
import ContactForm from "@/components/contact/ContactForm";

/** Documents contact validation and provides an interactive form. */
export default function ContactDocumentation() {
  return (
    <GuidelineSection
      id="contact-form"
      title="Contact form"
      description="A validated form composed of shared input, textarea, and button components."
    >
      <ul className="list-disc space-y-2 pl-5 text-slate-700">
        <li>All fields are required.</li>
        <li>Full name and subject require at least 3 characters.</li>
        <li>Email must match a basic email format.</li>
        <li>Message requires at least 10 characters.</li>
        <li>Surrounding whitespace is ignored during validation.</li>
        <li>Validation runs when the form is submitted.</li>
        <li>Invalid submissions focus the first field with an error.</li>
        <li>Entered values remain available for correction.</li>
        <li>Each field is validated when it loses focus.</li>
        <li>
          Fields with errors are revalidated while the user corrects them.
        </li>
        <li>Submission validates all fields, including untouched ones.</li>
      </ul>

      <CodeExample
        code={`import ContactForm from "@/components/contact/ContactForm";

<ContactForm />`}
      />

      <div className="max-w-xl">
        <ContactForm />
      </div>
    </GuidelineSection>
  );
}
