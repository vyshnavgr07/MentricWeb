"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#aboutus-cards" },
  { label: "Products", href: "#products" },
  { label: "services", href: "#services" },
   { label: "Resources", href: "#resources" },
  { label: "Career", href: "career" },
  { label: "Contact us", href: "#footer" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

        {/* Center: Nav Links (Desktop) */}
        <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-8 text-[16px] font-light font-sans">
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

        {/* Right: Hamburger Icon (Mobile) */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col gap-4 px-4 pb-4 text-sm font-medium bg-black/90 backdrop-blur-md rounded-md shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-purple-400 transition"
              onClick={() => setIsOpen(false)} // close menu on click
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
