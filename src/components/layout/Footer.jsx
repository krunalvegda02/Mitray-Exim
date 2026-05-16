'use client';

import Link from "next/link";
import { CERTIFICATIONS } from "@/data/certifications";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-brand-navy-dark via-brand-navy to-slate-900 text-white font-inter">
      {/* Top Footer: Newsletter or CTA (Optional) */}
      <div className="bg-white/5 backdrop-blur-md border-b border-white/10">
         <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-xl font-bold font-outfit">Join our global export network today</h3>
            <Link href="/contact" className="px-8 py-3 bg-brand-gold text-brand-navy-dark rounded-xl font-bold hover:bg-white transition-all duration-300">
               Partner With Us
            </Link>
         </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Company Info */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-brand-gold-dark rounded-2xl flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(212,165,116,0.5)] transition-transform duration-500 group-hover:scale-110">
                <span className="text-2xl font-black text-brand-navy">M</span>
              </div>
              <h3 className="text-2xl font-black font-outfit tracking-tight">MITRAY <span className="text-brand-gold">EXIM</span></h3>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              A premier merchant exporter from India, delivering nature's finest vegetables, fruits, and spices to global markets with uncompromising quality standards.
            </p>
            <div className="flex space-x-4">
              {[
                { name: "linkedin", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                { name: "facebook", path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" },
              ].map((social) => (
                <a key={social.name} href={`https://${social.name}.com`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-brand-gold rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                  <svg className="w-5 h-5 fill-white group-hover:fill-brand-navy" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Business Links */}
          <div className="lg:pl-10">
            <h4 className="text-lg font-bold font-outfit mb-8 uppercase tracking-widest text-brand-gold">Business</h4>
            <ul className="space-y-4">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Our Products", "/products"],
                ["Accreditations", "/certifications"],
                ["Latest News", "/blog"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-slate-400 hover:text-white text-sm transition-all flex items-center group font-light">
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Export Services */}
          <div>
            <h4 className="text-lg font-bold font-outfit mb-8 uppercase tracking-widest text-brand-gold">Services</h4>
            <ul className="space-y-4">
              {[
                "Global Logistics",
                "Quality Inspection",
                "Custom Packaging",
                "Cold Chain Management",
                "Farming Partnerships",
              ].map((service) => (
                <li key={service} className="text-slate-400 text-sm font-light flex items-center group cursor-default">
                  <span className="w-1.5 h-1.5 border border-brand-gold/50 rounded-full mr-3 group-hover:bg-brand-gold transition-colors"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* HQ Location */}
          <div className="space-y-8">
            <h4 className="text-lg font-bold font-outfit mb-8 uppercase tracking-widest text-brand-gold">Global HQ</h4>
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                   <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-slate-400 text-sm font-light leading-relaxed">
                  Ahmedabad, Gujarat,<br /> India - 380001
                </p>
              </div>
              
              <div className="flex items-start group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                  <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-sm font-light">
                   <a href="tel:+91XXXXXXXXXX" className="text-slate-400 hover:text-white transition-colors block">+91 XXXXXXXXXX</a>
                   <a href="mailto:info@mitrayexim.com" className="text-brand-gold hover:text-white transition-colors block">info@mitrayexim.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Bar */}
      <div className="bg-black/20 border-y border-white/5">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap items-center justify-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
             {CERTIFICATIONS.map((cert) => (
               <div key={cert.id} className="flex items-center space-x-3">
                  <img src={cert.logo} alt={cert.name} className="h-10 w-auto object-contain" />
                  <span className="text-xs font-bold uppercase tracking-widest">{cert.name}</span>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-medium uppercase tracking-[0.2em]">
            © {currentYear} MITRAY EXIM. Handcrafted with Excellence.
          </p>
          <div className="flex items-center space-x-8">
            {["Privacy", "Terms", "Sitemap"].map((link) => (
              <Link key={link} href={`/${link.toLowerCase()}`} className="text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
  
