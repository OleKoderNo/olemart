import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact OleMart with a question about the shop.",
};

/** Displays the contact form and introduction using the active theme colours. */
export default function ContactPage() {
  return (
    <main className="bg-background py-12 text-foreground">
      <Container>
        <div className="mx-auto max-w-xl space-y-8">
          <header className="space-y-3">
            <h1 className="text-3xl font-bold">Contact us</h1>

            <p className="text-muted-foreground">
              Have a question about OleMart? Fill in the form below.
            </p>
          </header>

          <ContactForm />
        </div>
      </Container>
    </main>
  );
}
