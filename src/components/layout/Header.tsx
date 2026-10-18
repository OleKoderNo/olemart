import Container from "@/components/ui/Container";
import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="relative z-50 border-b border-slate-200 bg-white">
      <Container className="flex items-center justify-between gap-4 py-4">
        <Logo />
        <Navbar />
      </Container>
    </header>
  );
}
