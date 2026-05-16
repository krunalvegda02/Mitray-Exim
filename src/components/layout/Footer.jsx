"use client";

import Link from "next/link";
import { CERTIFICATIONS } from "@/data/certifications";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-navy text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 blur-[150px] rounded-full animate-subtle-float"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[150px] rounded-full animate-subtle-float delay-1000"></div>
      </div>

      {/* Top CTA Bar */}
      <div className="relative z-10 bg-brand-gold/10 border-b border-white/5">
         <div className="container mx-auto px-4 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-black font-outfit uppercase tracking-tighter leading-none max-w-2xl animate-reveal opacity-0">
               JOIN OUR GLOBAL <br className="hidden lg:block" /> 
               <span className="text-brand-gold">EXPORT NETWORK</span> TODAY.
            </h3>
            <Link href="/contact" className="animate-reveal delay-300 opacity-0 px-10 py-5 bg-brand-gold text-brand-navy rounded-xl font-black uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-white transition-all duration-500 shadow-2xl active:scale-95 whitespace-nowrap">
               Partner With Us
            </Link>
         </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Company Info */}
          <div className="lg:col-span-4 space-y-8 animate-reveal opacity-0 delay-400">
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-brand-gold-dark rounded-xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110">
                <span className="text-2xl font-black text-brand-navy">M</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black font-outfit tracking-tighter uppercase">MITRAY <span className="text-brand-gold">EXIM.</span></h3>
            </Link>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium uppercase tracking-tight opacity-70 max-w-md">
              A premier merchant exporter from India, delivering nature's finest agricultural treasures to global markets with uncompromising quality standards.
            </p>
            <div className="flex space-x-4">
              {[
                { name: "linkedin", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                { name: "facebook", path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" },
              ].map((social) => (
                <a key={social.name} href={`https://${social.name}.com`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 hover:bg-brand-gold rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 group">
                  <svg className="w-6 h-6 fill-white group-hover:fill-brand-navy" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Business Links */}
          <div className="lg:col-span-2 lg:pl-4 animate-reveal opacity-0 delay-500">
            <h4 className="text-[10px] md:text-xs font-black mb-8 uppercase tracking-[0.4em] text-brand-gold/60">Business</h4>
            <ul className="space-y-4">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Our Products", "/products"],
                ["Accreditations", "/certifications"],
                ["Latest News", "/blog"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-slate-400 hover:text-white text-xs md:text-sm transition-all flex items-center group font-bold uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Export Services */}
          <div className="lg:col-span-3 animate-reveal opacity-0 delay-600">
            <h4 className="text-[10px] md:text-xs font-black mb-8 uppercase tracking-[0.4em] text-brand-gold/60">Services</h4>
            <ul className="space-y-4">
              {[
                "Global Logistics",
                "Quality Inspection",
                "Custom Packaging",
                "Cold Chain Management",
                "Farming Partnerships",
              ].map((service) => (
                <li key={service} className="text-slate-400 text-xs md:text-sm font-bold uppercase tracking-widest flex items-center group cursor-default">
                  <span className="w-1.5 h-1.5 border border-brand-gold/30 rounded-full mr-3 group-hover:bg-brand-gold transition-colors"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* HQ Location */}
          <div className="lg:col-span-3 space-y-8 animate-reveal opacity-0 delay-700">
            <h4 className="text-[10px] md:text-xs font-black mb-8 uppercase tracking-[0.4em] text-brand-gold/60">Global HQ</h4>
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                   <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-slate-300 text-xs md:text-sm font-bold uppercase tracking-widest leading-relaxed opacity-80">
                  Ahmedabad, Gujarat,<br /> India - 380001
                </p>
              </div>
              
              <div className="flex items-start group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                  <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-xs md:text-sm font-bold uppercase tracking-widest">
                   <a href="tel:+91XXXXXXXXXX" className="text-slate-300 hover:text-white transition-colors block mb-1">+91 XXXXXXXXXX</a>
                   <a href="mailto:info@mitrayexim.com" className="text-brand-gold hover:text-white transition-colors block">info@mitrayexim.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Bar */}
      <div className="bg-black/20 border-y border-white/5 animate-reveal opacity-0 delay-1000">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-24 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
             {CERTIFICATIONS.map((cert) => (
               <div key={cert.id} className="flex items-center space-x-4 group cursor-default">
                  <img src={cert.logo} alt={cert.name} className="h-10 md:h-12 w-auto object-contain group-hover:scale-110 transition-transform" />
                  <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] group-hover:text-brand-gold transition-colors">{cert.name}</span>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="container mx-auto px-4 py-10 md:py-12 relative z-10 animate-reveal opacity-0 delay-1000">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-center md:text-left">
            © {currentYear} MITRAY EXIM. <span className="text-brand-gold/40">Handcrafted with Excellence.</span>
          </p>
          <div className="flex items-center space-x-8 lg:space-x-12">
            {["Privacy", "Terms", "Sitemap"].map((link) => (
              <Link key={link} href={`/${link.toLowerCase()}`} className="text-slate-500 hover:text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-colors">
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
