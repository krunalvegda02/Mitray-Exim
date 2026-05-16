"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiGlobe, FiSend, FiMenu, FiX, FiActivity, FiArrowUpRight, FiZap } from "react-icons/fi";

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
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border-b border-slate-100" 
          : "bg-transparent"
      }`}
    >
      {/* INSTITUTIONAL ANNOUNCEMENT BAR */}
      <div className={`w-full bg-brand-navy overflow-hidden transition-all duration-500 ${isScrolled ? 'h-0 opacity-0' : 'h-10 opacity-100 border-b border-white/5'}`}>
         <div className="container mx-auto px-4 md:px-8 h-full flex items-center justify-center sm:justify-between">
            <div className="flex items-center gap-6">
               <div className="flex items-center gap-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-brand-gold animate-pulse"></div>
                  <span className="text-[8px] sm:text-[10px] font-black text-white/60 uppercase tracking-[0.2em]">Global Export Network Active</span>
               </div>
               <div className="hidden lg:flex items-center gap-2">
                  <FiZap className="text-brand-gold text-[10px]" />
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Premium Indian Produce</span>
               </div>
            </div>
            <div className="hidden sm:flex items-center gap-3 sm:gap-4">
               <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em]">Institutional Partnerships</span>
               <FiArrowUpRight className="text-brand-gold text-[10px]" />
            </div>
         </div>
      </div>

      {/* MAIN NAVIGATION BAR */}
      <div className={`transition-all duration-500 ${isScrolled ? 'h-20' : 'h-24'}`}>
        <div className="container mx-auto px-8 md:px-12 h-full">
          <div className="flex items-center justify-between h-full">
            
            {/* LOGO MANIFEST */}
            <Link href="/" className="group flex items-center space-x-4 transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="/logoh.png"
                alt="MITRAY EXIM"
                className={`transition-all duration-700 ${isScrolled ? "h-16" : "h-18 brightness-100 "}`}
              />
              <div className={`h-8 w-px hidden sm:block transition-colors ${isScrolled ? 'bg-slate-200' : 'bg-white/20'}`}></div>
              <div className="hidden sm:flex flex-col">

              </div>
            </Link>

            {/* SIMPLIFIED NAVIGATION LINKS */}
            <nav className="hidden lg:flex items-center space-x-12">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Products", "/products"],
                ["Certifications", "/certifications"],
                ["Blog", "/blog"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm md:text-lg font-black uppercase tracking-[0.3em] transition-all duration-500 relative group py-2 ${
                    isScrolled ? 'text-brand-navy/70 hover:text-brand-gold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold group-hover:w-full transition-all duration-700 rounded-full"></span>
                </Link>
              ))}
            </nav>

            {/* ACTIONS */}
            <div className="flex items-center gap-6">
              <Link 
                href="/contact" 
                className={`hidden md:flex  items-center gap-3 px-8 py-5 rounded-2xl text-sm md:text-md font-black uppercase tracking-widest transition-all duration-700 shadow-2xl active:scale-95 ${
                  isScrolled 
                    ? 'bg-brand-navy text-white hover:bg-brand-gold hover:text-brand-navy' 
                    : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-brand-navy'
                } `}
              >
                Inquiry Now <FiSend className="text-sm" />
              </Link>

              {/* MOBILE MENU TOGGLE */}
              <button
                className={`lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl transition-all ${
                  isScrolled ? 'bg-brand-navy text-white' : 'bg-white shadow-lg text-brand-navy'
                }`}
                onClick={() => setIsMenuOpen((p) => !p)}
              >
                {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE COMMAND CENTER OVERLAY */}
      <div 
        className={`lg:hidden fixed inset-0 z-50 bg-brand-navy/95 backdrop-blur-2xl transition-all duration-700 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
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
