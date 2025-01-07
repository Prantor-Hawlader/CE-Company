import Link from "next/link";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">CivilTech Solutions</h3>
            <p className="mb-4">
              Building a better future through innovative engineering solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white">
                <Facebook />
              </Link>
              <Link href="#" className="hover:text-white">
                <Twitter />
              </Link>
              <Link href="#" className="hover:text-white">
                <Linkedin />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <p>123 Engineering Way</p>
            <p>Techville, TX 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@civiltechsolutions.com</p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p>&copy; 2025 CivilTech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
