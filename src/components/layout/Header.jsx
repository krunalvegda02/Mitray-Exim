"use client";

import Link from "next/link";
import { useState } from "react";

export const HEADER_OFFSET = 80;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-10 right-0 z-40 bg-white/98 backdrop-blur-md shadow-md border-b border-zinc-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-1">
            <img
              src="/logoh.png"
              alt="MITRAY EXIM"
              className="h-15"
            />
            {/* <span className="text-xl font-bold text-brand-navy-dark">Mitray <span className="text-brand-gold">Exim</span></span> */}
          </Link>

          <nav className="hidden md:flex space-x-8">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Products", "/products"],
              ["Shipping", "/shipping"],
              ["Certifications", "/certifications"],
              ["Blog", "/blog"],
              ["Gallery", "/gallery"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-zinc-700 hover:text-brand-gold font-medium transition-colors relative group"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden text-brand-navy-dark"
            onClick={() => setIsMenuOpen((p) => !p)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-zinc-200 py-4">
            <nav className="flex flex-col space-y-4">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Products", "/products"],
                ["Shipping", "/shipping"],
                ["Certifications", "/certifications"],
                ["Blog", "/blog"],
                ["Gallery", "/gallery"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-zinc-700 hover:text-brand-gold font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
