"use client";

import { CERTIFICATIONS } from "@/data/certifications";
import { FiCheckCircle, FiShield, FiArrowRight } from "react-icons/fi";

export function Certifications() {
  return (
    <section className="relative py-12 overflow-hidden">
      <div className="relative">
        {/* HEADER */}
        <div className="text-center mb-16 animate-reveal">
          <div className="inline-flex items-center px-5 py-2 bg-brand-gold/10 rounded-full mb-6 border border-brand-gold/20 backdrop-blur-md">
            <FiShield className="text-brand-gold mr-2" />
            <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.4em]">Institutional Compliance</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-brand-navy mb-8 tracking-tighter leading-none">
            Global <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium opacity-80 uppercase tracking-tight">
            Adhering to the most stringent international food safety and trade standards.
          </p>
        </div>

        {/* CERTIFICATION CARDS - GLASS STYLE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {CERTIFICATIONS.slice(0, 3).map((cert, index) => (
            <div
              key={cert.id}
              className="group glass-card p-12 rounded-[3.5rem] flex flex-col items-center text-center animate-reveal"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative w-44 h-44 mb-10 p-8 glass-panel rounded-full group-hover:scale-105 transition-all duration-700 flex items-center justify-center shadow-2xl">
                 <img
                  src={cert.logo}
                  alt={cert.fullName}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden flex-col items-center justify-center">
                  <span className="text-3xl font-black text-brand-gold">{cert.name}</span>
                </div>
                
                {/* Orbital Ring Animation */}
                <div className="absolute inset-[-8px] border border-dashed border-brand-gold/20 rounded-full animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              <div className="flex-1 space-y-4">
                <h3 className="text-3xl font-black text-brand-navy tracking-tighter group-hover:text-brand-gold transition-colors duration-500">{cert.name}</h3>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] h-8 flex items-center justify-center">{cert.fullName}</p>
                <div className="h-px w-12 bg-slate-100 mx-auto group-hover:w-full group-hover:bg-brand-gold transition-all duration-700 opacity-40"></div>
                <p className="text-slate-500 text-[11px] leading-relaxed font-bold uppercase tracking-widest opacity-60 line-clamp-3">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center animate-reveal delay-500">
          <a
            href="/certifications"
            className="group relative inline-flex items-center gap-4 px-12 py-6 bg-brand-navy rounded-[2rem] text-white font-black uppercase tracking-widest text-[11px] hover:bg-brand-gold hover:text-brand-navy transition-all duration-700 shadow-2xl overflow-hidden active:scale-95"
          >
            <span className="relative z-10">View Compliance Manifest</span>
            <FiArrowRight className="relative z-10 text-lg group-hover:translate-x-2 transition-transform duration-500" />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
