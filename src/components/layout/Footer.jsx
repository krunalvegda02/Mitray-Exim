'use client';

import Link from "next/link";
import { CERTIFICATIONS } from "@/data/certifications";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-brand-navy-dark via-brand-navy to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="border-b border-slate-700">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-gold to-brand-gold-dark rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold">M</span>
                </div>
                <h3 className="text-xl font-bold">MITRAY EXIM</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Premium agricultural exports from India to international markets. Certified by APEDA, FSSAI, and IEC.
              </p>
              <div className="flex space-x-3">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-700 hover:bg-brand-gold rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-700 hover:bg-brand-gold rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-700 hover:bg-brand-gold rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  ["Home", "/"],
                  ["About Us", "/about"],
                  ["Products", "/products"],
                  ["Certifications", "/certifications"],
                  ["Blog", "/blog"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-slate-300 hover:text-white text-sm transition-colors flex items-center group">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2 group-hover:bg-brand-gold/100 transition-colors"></span>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {[
                  "Fresh Vegetables Export",
                  "Fruits & Spices",
                  "Rice & Wheat",
                  "Cold Chain Logistics",
                  "Export Documentation",
                ].map((service) => (
                  <li key={service}>
                    <span className="text-slate-300 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-gold mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-slate-400 text-xs mb-1">Email</p>
                    <a href="mailto:info@mitrayexim.com" className="text-slate-300 hover:text-white text-sm transition-colors">info@mitrayexim.com</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-gold mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-slate-400 text-xs mb-1">Phone</p>
                    <a href="tel:+91XXXXXXXXXX" className="text-slate-300 hover:text-white text-sm transition-colors">+91 XXXXXXXXXX</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-gold mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-slate-400 text-xs mb-1">Location</p>
                    <p className="text-slate-300 text-sm">Ahmedabad, Gujarat, India</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Bar */}
      <div className="bg-brand-navy-light/50 border-b border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <span className="text-slate-400 text-sm font-medium">Certified By:</span>
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.id} className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-brand-gold">{cert.name}</span>
                </div>
                <span className="text-slate-300 text-sm font-medium">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-brand-navy">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} MITRAY EXIM. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link href="/sitemap" className="text-slate-400 hover:text-white text-sm transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
