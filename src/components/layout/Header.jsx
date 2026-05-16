"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? "top-0 bg-white/90 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] h-20" 
          : "top-10 bg-white h-24"
      }`}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="group flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
            <img
              src="/logoh.png"
              alt="MITRAY EXIM - Premium Export Partner"
              className={`transition-all duration-500 ${isScrolled ? "h-10" : "h-14"}`}
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-10">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Products", "/products"],
              ["Certifications", "/certifications"],
              ["Shipping", "/shipping"],
              ["Blog", "/blog"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-bold uppercase tracking-widest text-brand-navy hover:text-brand-gold transition-colors relative group py-2"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold group-hover:w-full transition-all duration-500 rounded-full"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-brand-navy text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-navy-dark transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get a Quote
            </Link>
          </div>

          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-brand-navy-dark border border-slate-200"
            onClick={() => setIsMenuOpen((p) => !p)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden fixed inset-x-0 bg-white shadow-2xl transition-all duration-500 overflow-hidden ${
            isMenuOpen ? "top-[100%] opacity-100 max-h-screen border-t border-slate-100" : "top-[110%] opacity-0 max-h-0"
          }`}
        >
          <nav className="flex flex-col p-6 space-y-2">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Products", "/products"],
              ["Certifications", "/certifications"],
              ["Shipping", "/shipping"],
              ["Blog", "/blog"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="px-4 py-3 rounded-xl text-brand-navy font-bold hover:bg-slate-50 hover:text-brand-gold transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

