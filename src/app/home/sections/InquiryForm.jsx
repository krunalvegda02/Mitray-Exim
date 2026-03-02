"use client";

import { useState } from "react";

export function InquiryForm() {
  const [focused, setFocused] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inquiry submitted. We will get back to you.");
  };

  return (
    <section className="relative">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-brand-gold/20 to-orange-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative backdrop-blur-sm bg-gradient-to-br from-white/95 via-slate-50/95 to-white/95 rounded-3xl border-2 border-white/50 p-8 md:p-12 shadow-2xl">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center backdrop-blur-md bg-gradient-to-r from-brand-gold/20 to-orange-400/20 px-5 py-2 rounded-full mb-4 border border-brand-gold/30">
            <svg className="w-4 h-4 text-brand-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="text-sm font-bold text-brand-navy">Get Started</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-brand-navy via-brand-navy-dark to-brand-navy bg-clip-text text-transparent mb-4">
            Request a Quotation
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Fill out the form below and our export team will contact you within 24 hours
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            
            {/* Full Name */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-gold to-orange-400 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
              <div className="relative">
                <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
                  <svg className="w-4 h-4 text-brand-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  onFocus={() => setFocused({...focused, name: true})}
                  onBlur={() => setFocused({...focused, name: false})}
                  className="w-full bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all shadow-sm hover:shadow-md"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Company Name */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-gold to-orange-400 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
              <div className="relative">
                <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
                  <svg className="w-4 h-4 text-brand-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all shadow-sm hover:shadow-md"
                  placeholder="Your Company"
                />
              </div>
            </div>

            {/* Email */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-gold to-orange-400 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
              <div className="relative">
                <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
                  <svg className="w-4 h-4 text-brand-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all shadow-sm hover:shadow-md"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-gold to-orange-400 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
              <div className="relative">
                <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
                  <svg className="w-4 h-4 text-brand-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Phone Number *
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all shadow-sm hover:shadow-md"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>
            </div>
          </div>

          {/* Product Requirements */}
          <div className="relative group mb-8">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-gold to-orange-400 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
            <div className="relative">
              <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
                <svg className="w-4 h-4 text-brand-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Product Requirements *
              </label>
              <textarea
                rows={5}
                required
                className="w-full bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all shadow-sm hover:shadow-md resize-none"
                placeholder="Please specify products and quantities you need..."
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold via-orange-400 to-brand-gold-dark rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
            <button
              type="submit"
              className="relative w-full px-8 py-5 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-3"
            >
              <span>Submit Inquiry</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-600">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Secure & Confidential</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="font-semibold">24hr Response Time</span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
