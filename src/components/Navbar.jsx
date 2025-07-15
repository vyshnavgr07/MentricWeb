"use client";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#aboutus-cards" },
  { label: "Products", href: "#products" },
  { label: "Resources", href: "#resources" },
  { label: "Career", href: "career" },
  { label: "Contact us", href: "#footer" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 w-full z-50 bg-black/80 backdrop-blur-md text-white shadow-md px-6 py-4">
      <div className="relative flex items-center justify-between max-w-7xl mx-auto">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/log.png"
              alt="Logo"
              width={150}
              height={40}
              className="rounded-full cursor-pointer"
            />
          </Link>
        </div>

        {/* Center: Nav Links */}
        <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-purple-400 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Placeholder (e.g., for hamburger icon on mobile) */}
        <div className="md:hidden text-xl">☰</div>
      </div>
    </header>
  );
}
