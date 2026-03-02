"use client";

import { useState } from "react";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { ColdStorage } from "./sections/ColdStorage";
import { Packaging } from "./sections/Packaging";
import { Documentation } from "./sections/Documentation";
import { Timeline } from "./sections/Timeline";

export default function ShippingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <PageHero 
        badge="LOGISTICS & COLD CHAIN"
        title="Shipping & Logistics"
        description="Professional cold chain and export logistics services ensuring quality from farm to destination"
        backgroundImage="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=2074&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Shipping' }
        ]}
      />

      <div className="bg-gradient-to-b from-white via-slate-50 to-white py-20">
        <Container>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <ColdStorage />
          <Packaging />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Documentation />
          
          <div className="group relative h-full">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-200 to-orange-200 rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
            
            <div className="relative h-full bg-gradient-to-br from-white via-amber-50/50 to-slate-50 p-6 rounded-2xl border-2 border-slate-200 hover:border-amber-300 transition-all hover:shadow-xl flex flex-col">
              <div className="flex items-start mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md border border-amber-200">
                  <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-bold text-brand-navy mb-2">Shipping Partners</h2>
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full border border-amber-200">
                    <span className="text-xs font-bold text-amber-700">Trusted Network</span>
                  </div>
                </div>
              </div>
              
              <p className="text-slate-700 leading-relaxed mb-4 flex-grow">
                We work with leading container shipping lines and logistics partners to ensure timely and reliable delivery to international ports.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200">
                <div className="text-center">
                  <p className="text-xs text-slate-500 mb-1">Partners</p>
                  <p className="text-sm font-bold text-brand-navy">15+ Lines</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-500 mb-1">Coverage</p>
                  <p className="text-sm font-bold text-brand-navy">Global</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-500 mb-1">Reliability</p>
                  <p className="text-sm font-bold text-brand-navy">99.5%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Timeline />

        <div className="text-center mt-12">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-10 py-4 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Request Quotation</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
        </Container>
      </div>

      {/* Modal */}
      {isModalOpen && <InquiryModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

function InquiryModal({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inquiry submitted. We will get back to you.");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full sm:max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden rounded-t-3xl sm:rounded-3xl">
            <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-brand-gold/20 to-orange-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative backdrop-blur-sm bg-gradient-to-br from-white/95 via-slate-50/95 to-white/95 rounded-t-3xl sm:rounded-3xl border-2 border-white/50 p-6 sm:p-8 md:p-10 shadow-2xl">
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center backdrop-blur-md bg-gradient-to-r from-brand-gold/20 to-orange-400/20 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 border border-brand-gold/30">
                <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-brand-gold mr-1.5 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-xs sm:text-sm font-bold text-brand-navy">Request Quotation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-navy via-brand-navy-dark to-brand-navy bg-clip-text text-transparent mb-2 sm:mb-3">
                Get Your Custom Quote
              </h2>
              <p className="text-sm sm:text-base text-slate-600 px-4">
                Fill out the form and our export team will contact you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
                    <svg className="w-4 h-4 text-brand-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
                    <svg className="w-4 h-4 text-brand-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
                    <svg className="w-4 h-4 text-brand-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
                    <svg className="w-4 h-4 text-brand-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="mb-5 sm:mb-6">
                <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
                  <svg className="w-4 h-4 text-brand-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Product Requirements *
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all resize-none"
                  placeholder="Please specify products and quantities you need..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-white rounded-2xl font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2 sm:space-x-3"
              >
                <span>Submit Inquiry</span>
                <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
