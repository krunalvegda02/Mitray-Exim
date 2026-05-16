"use client";

import { CERTIFICATIONS } from "@/data/certifications";

export function Certifications() {
  return (
    <section className="relative py-12 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('/dots.svg')] opacity-5 pointer-events-none"></div>

      <div className="relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 bg-brand-gold/10 rounded-full mb-6 border border-brand-gold/20">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-[0.2em]">Compliance</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6">
            Global <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">
            We adhere to the highest international food safety and trade standards, ensuring trust in every shipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.slice(0, 3).map((cert) => (
            <div
              key={cert.id}
              className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-brand-gold transition-all duration-500 hover:shadow-2xl flex flex-col items-center text-center"
            >
              {/* Certification Badge Container */}
              <div className="relative w-40 h-40 mb-8 p-6 bg-slate-50 rounded-full border-4 border-slate-100 group-hover:border-brand-gold/20 transition-colors duration-500 flex items-center justify-center overflow-hidden">
                 <img
                  src={cert.logo}
                  alt={cert.fullName}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden flex-col items-center justify-center">
                  <span className="text-3xl font-black text-brand-gold">{cert.name}</span>
                </div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-brand-navy mb-3 group-hover:text-brand-gold transition-colors">{cert.name}</h3>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">{cert.fullName}</p>
                <div className="w-12 h-1 bg-brand-gold/20 mx-auto mb-6 rounded-full group-hover:w-24 group-hover:bg-brand-gold transition-all duration-500"></div>
                <p className="text-slate-500 text-sm leading-relaxed font-light line-clamp-3">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/certifications"
            className="group inline-flex items-center space-x-3 px-10 py-5 bg-brand-navy text-white rounded-2xl font-bold hover:bg-brand-gold hover:text-brand-navy-dark transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <span>View All Accreditations</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
