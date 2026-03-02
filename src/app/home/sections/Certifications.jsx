"use client";

import { CERTIFICATIONS } from "@/data/certifications";

export function Certifications() {
  return (
    <section>
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-2 bg-brand-gold/10 rounded-full mb-4">
          <span className="text-sm font-semibold text-brand-navy-dark">Certifications</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
          Certified & Compliant
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Fully certified and compliant with international export standards
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CERTIFICATIONS.slice(0, 3).map((cert) => (
          <div
            key={cert.id}
            className="group bg-white p-6 rounded-xl border-2 border-slate-200 hover:border-brand-gold transition-all hover:shadow-xl"
          >
            <div className="relative bg-slate-50 rounded-lg p-4 mb-4 h-64 flex items-center justify-center overflow-hidden border border-slate-200">
              <img
                src={cert.logo}
                alt={cert.fullName}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0121 12c0 .34-.028.675-.083 1M3 12a9 9 0 0118 0 9 9 0 01-18 0z" />
                  </svg>
                </div>
                <p className="text-2xl font-bold text-brand-navy">{cert.name}</p>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-brand-navy text-lg mb-2">{cert.name}</h3>
              <p className="text-sm text-slate-600 mb-3">{cert.fullName}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href="/certifications"
          className="inline-flex items-center px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:border-brand-gold hover:text-brand-gold transition-all"
        >
          <span>View All Certifications</span>
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
