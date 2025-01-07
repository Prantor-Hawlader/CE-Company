import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="py-4 px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b border-border/40">
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          CivilTech Solutions
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link
            href="#services"
            className="text-foreground/60 hover:text-foreground"
          >
            Services
          </Link>
          <Link
            href="#projects"
            className="text-foreground/60 hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-foreground/60 hover:text-foreground"
          >
            Contact
          </Link>
        </nav>
        <Button>Get a Quote</Button>
      </div>
    </header>
  );
}
