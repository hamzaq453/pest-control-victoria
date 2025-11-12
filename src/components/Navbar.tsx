'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-creamy-white shadow-md sticky top-[44px] sm:top-[42px] md:top-[42px] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 md:py-0 md:h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center min-w-0">
            <Link href="/" className="flex items-center min-w-0 -ml-2 md:ml-0">
              <Image
                src="/Logo-no-bg.png"
                alt="Pest Free Victoria Logo"
                width={220}
                height={220}
                className="object-contain h-12 w-auto sm:h-12 md:h-14"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-dark-charcoal hover:text-deep-forest px-3 py-2 rounded-md text-lg font-mono transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Get Quote Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-deep-forest text-creamy-white hover:bg-medium-sage px-6 py-2 rounded-lg text-lg font-mono transition-colors duration-200"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center justify-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark-charcoal hover:text-deep-forest focus:outline-none focus:text-deep-forest p-2 flex items-center justify-center"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-creamy-white border-t border-light-sage">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-dark-charcoal hover:text-deep-forest block px-3 py-2 rounded-md text-base font-mono transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="bg-deep-forest text-creamy-white hover:bg-medium-sage block px-3 py-2 rounded-md text-base font-mono transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
