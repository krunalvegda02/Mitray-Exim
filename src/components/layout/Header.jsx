"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiGlobe, FiSend, FiMenu, FiX, FiActivity, FiArrowUpRight, FiZap } from "react-icons/fi";
import clsx from "clsx";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={clsx('fixed', 'top-0', 'left-0', 'right-0', 'z-[100]', 'transition-all', 'duration-500')}>
      {/* SLIM INSTITUTIONAL ANNOUNCEMENT BAR */}
      <div className={`w-full bg-brand-navy relative overflow-hidden transition-all duration-500 ${isScrolled ? 'h-0 opacity-0' : 'h-9 opacity-100 border-b border-white/5'}`}>
        <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-r', 'from-transparent', 'via-brand-gold/10', 'to-transparent', '-skew-x-12', 'translate-x-[-200%]', 'animate-[scan_8s_infinite]', 'pointer-events-none')}></div>
        <div className={clsx('w-full', 'max-w-[1920px]', 'mx-auto', 'px-4', 'sm:px-6', 'md:px-8', 'lg:px-10', 'xl:px-12', 'h-full', 'flex', 'items-center', 'justify-between', 'relative', 'z-10')}>
          <div className={clsx('flex', 'items-center', 'gap-6')}>
            <div className={clsx('flex', 'items-center', 'gap-2')}>
              <div className={clsx('w-1.5', 'h-1.5', 'rounded-full', 'bg-brand-gold', 'animate-pulse')}></div>
              <span className={clsx('text-[9px]', 'font-black', 'text-white/60', 'uppercase', 'tracking-[0.2em]')}>Global Export Network Active</span>
            </div>
            <div className={clsx('hidden', 'lg:flex', 'items-center', 'gap-2')}>
              <FiZap className={clsx('text-brand-gold', 'text-[9px]')} />
              <span className={clsx('text-[9px]', 'font-black', 'text-white/40', 'uppercase', 'tracking-[0.2em]')}>Premium Indian Produce</span>
            </div>
          </div>
          <div className={clsx('hidden', 'sm:flex', 'items-center', 'gap-4')}>
            <span className={clsx('text-[9px]', 'font-black', 'text-brand-gold', 'uppercase', 'tracking-[0.2em]')}>Institutional Partnerships</span>
            <FiArrowUpRight className={clsx('text-brand-gold', 'text-[9px]')} />
          </div>
        </div>
      </div>

      {/* FLOATING CAPSULE NAVIGATION */}
      <div className={clsx('w-full', 'transition-all', 'duration-500', 'pt-4')}>
        <div className={clsx('w-full', 'max-w-[1920px]', 'mx-auto', 'px-4', 'sm:px-6', 'md:px-8', 'lg:px-10', 'xl:px-12')}>
          <div
            className={`mx-auto w-full rounded-full transition-all duration-700 flex items-center justify-between px-6 md:px-8 border hover:shadow-brand-gold/5 hover:border-brand-gold/30 hover:scale-[1.01]
              ${isScrolled
                ? "bg-white/[0.8] backdrop-blur-[30px] border-white/[0.15] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.4)] py-3.5 md:py-4.5"
                : "bg-brand-navy/70 backdrop-blur-[30px] border-white/10 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.2)] py-3.5 md:py-4.5"
              }`}
          >
            {/* LOGO */}
            <Link href="/" className={clsx('group', 'flex', 'items-center', 'space-x-4', 'transition-transform', 'duration-500', 'hover:scale-[1.02]')}>
              <img loading="lazy" decoding="async"
                src="/newLogo.png"
                alt="MITRAY EXIM"
                className={`object-contain transition-all duration-500 ${
                  isScrolled 
                    ? "w-[90px] sm:w-[110px] md:w-[130px] lg:w-[140px] xl:w-[160px] brightness-100" 
                    : "w-[90px] sm:w-[110px] md:w-[130px] lg:w-[140px] xl:w-[160px] brightness-0 invert"
                }`}
              />
            </Link>
 
            {/* NAV LINKS */}
            <nav className={clsx('hidden', 'lg:flex', 'items-center', 'space-x-0.5', 'xl:space-x-1.5')}>
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Products", "/products"],
                ["Services", "/shipping"],
                ["Certifications", "/certifications"],
                ["Blogs", "/blog"],
                ["Gallery", "/gallery"],
              ].map(([label, href]) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`text-[9px] xl:text-[11px] 2xl:text-[12px] font-black uppercase tracking-widest xl:tracking-[0.1em] px-2 xl:px-3.5 py-1.5 xl:py-2 rounded-full transition-all duration-300 relative group
                      ${isScrolled
                        ? isActive
                          ? 'bg-brand-navy text-white shadow-md shadow-brand-navy/10'
                          : 'text-brand-navy/70 hover:text-brand-navy hover:bg-slate-100/80'
                        : isActive
                          ? 'bg-brand-gold text-brand-navy shadow-lg shadow-brand-gold/15'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
 
            {/* ACTIONS */}
            <div className={clsx('flex', 'items-center', 'gap-3')}>
              <Link
                href="/contact"
                className={`hidden md:flex items-center gap-2 px-4 xl:px-5 py-2.5 xl:py-3 rounded-full text-[10px] xl:text-[11px] font-black uppercase tracking-widest transition-all duration-300 active:scale-95 group relative overflow-hidden shadow-md border
                  ${isScrolled
                    ? 'bg-brand-navy text-white hover:bg-brand-gold hover:text-brand-navy border-white/5 hover:border-brand-gold/10 hover:shadow-brand-gold/25'
                    : 'bg-brand-gold text-brand-navy hover:bg-white hover:text-brand-navy border-brand-gold/10 hover:border-white/10 hover:shadow-white/20'
                  }`}
              >
                Inquiry Now 
                <FiSend className={clsx('text-[11px]', 'group-hover:translate-x-0.5', 'group-hover:-translate-y-0.5', 'transition-transform', 'duration-300')} />
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
        className={`lg:hidden fixed inset-0 z-50 bg-brand-navy/98 backdrop-blur-2xl transition-all duration-700 ease-in-out overflow-hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className={clsx('flex', 'flex-col', 'h-full', 'px-6', 'sm:px-10', 'py-6', 'sm:py-10', 'pt-20', 'sm:pt-28', 'pb-8')}>
          <button
            onClick={() => setIsMenuOpen(false)}
            className={clsx('absolute', 'top-10', 'right-10', 'w-14', 'h-14', 'rounded-full', 'bg-white/10', 'flex', 'items-center', 'justify-center', 'text-white')}
          >
            <FiX className="text-3xl" />
          </button>

          <nav className={clsx('flex', 'flex-col', 'space-y-2', 'sm:space-y-4', 'overflow-y-auto', 'no-scrollbar')}>
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Our Products", "/products"],
              ["Services", "/shipping"],
              ["Gallery", "/gallery"],
              ["Certifications", "/certifications"],
              ["Latest News", "/blog"],
              ["Contact Us", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className={clsx('text-4xl', 'font-black', 'text-white', 'uppercase', 'tracking-tighter', 'hover:text-brand-gold', 'transition-colors', 'py-2', 'sm:py-3', 'border-b', 'border-white/5')}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className={clsx('mt-4', 'sm:mt-auto', 'pt-4', 'sm:pt-8', 'flex', 'items-center', 'justify-between', 'border-t', 'border-white/10', 'shrink-0')}>
            <div className={clsx('flex', 'items-center', 'gap-3')}>
              <FiGlobe className={clsx('text-brand-gold', 'text-2xl')} />
              <span className={clsx('text-xs', 'font-black', 'uppercase', 'text-white/40', 'tracking-[0.3em]')}>MITRAY EXIM Hub</span>
            </div>
            <FiActivity className={clsx('text-emerald-400', 'animate-pulse')} />
          </div>
        </div>
      </div>
    </header>
  );
}
