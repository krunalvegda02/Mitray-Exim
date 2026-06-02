"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiGlobe, FiSend, FiMenu, FiX, FiActivity, FiArrowUpRight, FiZap } from "react-icons/fi";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500">
      {/* SLIM INSTITUTIONAL ANNOUNCEMENT BAR */}
      <div className={`w-full bg-brand-navy relative overflow-hidden transition-all duration-500 ${isScrolled ? 'h-0 opacity-0' : 'h-9 opacity-100 border-b border-white/5'}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent -skew-x-12 translate-x-[-200%] animate-[scan_8s_infinite] pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 h-full flex items-center justify-between relative z-10">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></div>
              <span className="text-[9px] font-black text-white/60 uppercase tracking-[0.2em]">Global Export Network Active</span>
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <FiZap className="text-brand-gold text-[9px]" />
              <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em]">Premium Indian Produce</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span className="text-[9px] font-black text-brand-gold uppercase tracking-[0.2em]">Institutional Partnerships</span>
            <FiArrowUpRight className="text-brand-gold text-[9px]" />
          </div>
        </div>
      </div>

      {/* FLOATING CAPSULE NAVIGATION */}
      <div className="w-full transition-all duration-500 pt-4">
        <div className="container mx-auto px-4 md:px-8">
          <div
            className={`mx-auto max-w-7xl rounded-full transition-all duration-700 flex items-center justify-between px-6 md:px-8 border hover:shadow-brand-gold/5 hover:border-brand-gold/30 hover:scale-[1.01]
              ${isScrolled
                ? "bg-white/[0.8] backdrop-blur-[30px] border-white/[0.15] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.4)] py-3.5 md:py-4.5"
                : "bg-brand-navy/70 backdrop-blur-[30px] border-white/10 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.2)] py-3.5 md:py-4.5"
              }`}
          >
            {/* LOGO */}
            <Link href="/" className="group flex items-center space-x-4 transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="/newLogo.png"
                alt="MITRAY EXIM"
                className={`object-contain transition-all duration-500 ${
                  isScrolled 
                    ? "w-[90px] md:w-[175px] brightness-100" 
                    : "w-[110px] md:w-[185px] brightness-0 invert"
                }`}
              />
            </Link>
 
            {/* NAV LINKS */}
            <nav className="hidden lg:flex items-center space-x-1.5">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Products", "/products"],
                ["Certifications", "/certifications"],
                ["Blogs", "/blog"],
                ["Gallery", "/gallery"],
              ].map(([label, href]) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`text-[13px] md:text-[14.5px] font-black uppercase tracking-[0.16em] px-4.5 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 relative group
                      ${isScrolled
                        ? isActive
                          ? 'bg-brand-navy text-white shadow-md shadow-brand-navy/10 scale-[1.03]'
                          : 'text-brand-navy/70 hover:text-brand-navy hover:bg-slate-50'
                        : isActive
                          ? 'bg-brand-gold text-brand-navy shadow-lg shadow-brand-gold/15 scale-[1.03]'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
 
            {/* ACTIONS */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className={`hidden md:flex items-center gap-2.5 px-6 py-3.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-500 shadow-sm active:scale-95
                  ${isScrolled
                    ? 'bg-brand-navy text-white hover:bg-brand-gold hover:text-brand-navy shadow-brand-navy/10'
                    : 'bg-brand-gold text-brand-navy hover:bg-white hover:text-brand-navy'
                  }`}
              >
                Inquiry Now <FiSend className="text-[11px]" />
              </Link>
 
              {/* MOBILE MENU TOGGLE */}
              <button
                className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-full transition-all
                  ${isScrolled
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'bg-white text-brand-navy shadow-md'
                  }`}
                onClick={() => setIsMenuOpen((p) => !p)}
              >
                {isMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE COMMAND CENTER OVERLAY */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-brand-navy/98 backdrop-blur-2xl transition-all duration-700 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full p-10 pt-32">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-10 right-10 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white"
          >
            <FiX className="text-3xl" />
          </button>

          <nav className="flex flex-col space-y-4">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Our Products", "/products"],
              ["Certifications", "/certifications"],
              ["Latest News", "/blog"],
              ["Contact Us", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-3xl font-black text-white uppercase tracking-tighter hover:text-brand-gold transition-colors py-4 border-b border-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-10 flex items-center justify-between border-t border-white/10">
            <div className="flex items-center gap-3">
              <FiGlobe className="text-brand-gold text-2xl" />
              <span className="text-xs font-black uppercase text-white/40 tracking-[0.3em]">MITRAY EXIM Hub</span>
            </div>
            <FiActivity className="text-emerald-400 animate-pulse" />
          </div>
        </div>
      </div>
    </header>
  );
}
