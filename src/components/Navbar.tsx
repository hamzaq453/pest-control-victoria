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
          {/* Mobile: Menu button (left) */}
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

          {/* Logo - Centered on mobile, left on desktop */}
          <div className="flex-shrink-0 flex items-center min-w-0 flex-1 md:flex-none justify-center md:justify-start">
            <Link href="/" className="flex items-center min-w-0 -ml-2 md:ml-0">
              <Image
                src="/Logo-no-bg.png"
                alt="Pest Free Victoria Logo"
                width={220}
                height={220}
                className="object-contain h-[58px] w-auto sm:h-[58px] md:h-[67px]"
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

          {/* Get Quote Button - Desktop */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-deep-forest text-creamy-white hover:bg-medium-sage px-6 py-2 rounded-lg text-lg font-mono transition-colors duration-200"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile: Call button (right) */}
          <div className="md:hidden flex items-center justify-center">
            <Link
              href="tel:0451004400"
              className="text-dark-charcoal hover:text-deep-forest focus:outline-none focus:text-deep-forest p-2 flex items-center justify-center"
              aria-label="Call (0451) 004-400"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </Link>
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
