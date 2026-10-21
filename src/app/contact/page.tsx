import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact OleMart with a question about the shop.",
};

/** Displays the contact form and page introduction. */
export default function ContactPage() {
  return (
    <main className="bg-slate-50 py-12 text-slate-900">
      <Container>
        <div className="mx-auto max-w-xl space-y-8">
          <header className="space-y-3">
            <h1 className="text-3xl font-bold">Contact us</h1>

            <p className="text-slate-600">
              Have a question about OleMart? Fill in the form below.
            </p>
          </header>

          <ContactForm />
        </div>
      </Container>
    </main>
  );
}
