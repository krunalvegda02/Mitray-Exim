"use client";

import { CERTIFICATIONS } from "@/data/certifications";
import { FiAward, FiShield, FiCheckCircle, FiDownload, FiExternalLink, FiArrowRight } from "react-icons/fi";

export function Certifications() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-white">
      
      {/* BACKGROUND TEXTURE */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_90%_10%,rgba(212,165,116,0.03)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_90%,rgba(44,74,94,0.03)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        
        {/* STANDARDIZED HEADER ARCHITECTURE */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-brand-gold animate-line-grow w-0"></div>
            <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.5em] animate-reveal opacity-0">Compliance & Trust Manifest</span>
            <div className="h-px bg-brand-gold animate-line-grow w-0"></div>
          </div>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-brand-navy mb-6 tracking-tighter leading-[0.85] animate-reveal opacity-0">
            GLOBAL <br />
            <span className="text-gradient">CERTIFICATIONS.</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-lg font-medium max-w-2xl mx-auto leading-relaxed uppercase tracking-tight opacity-0 animate-reveal delay-300">
            MITRAY EXIM maintains the industry's most rigorous export compliance protocols, verified by APEDA, FSSAI, and global food safety authorities.
          </p>
        </div>

        {/* CERTIFICATION GRID - STAGGERED REVEAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={cert.id}
              className="group relative animate-reveal opacity-0 hover-lift"
              style={{ animationDelay: `${500 + (index * 150)}ms` }}
            >
              <div className="relative glass-card p-8 md:p-10 rounded-2xl flex flex-col h-full transition-all duration-700 bg-white/60">
                
                <div className="relative w-24 h-24 mb-8 mx-auto">
                   <div className="absolute inset-0 bg-brand-gold/5 rounded-full scale-110 group-hover:scale-125 transition-transform duration-1000"></div>
                   <div className="relative w-full h-full glass-panel rounded-full flex items-center justify-center p-5 border-white shadow-xl transition-all duration-700 group-hover:rotate-[360deg]">
                      <img
                        src={cert.logo}
                        alt={cert.fullName}
                        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700 opacity-40 group-hover:opacity-100"
                      />
                   </div>
                </div>

                <div className="flex-1 space-y-4 text-center">
                  <div>
                    <h3 className="text-2xl font-black text-brand-navy tracking-tighter mb-1 group-hover:text-brand-gold transition-colors duration-500">{cert.name}</h3>
                    <p className="text-[7px] font-black text-slate-400 uppercase tracking-[0.3em] leading-tight px-2">{cert.fullName}</p>
                  </div>
                  
                  <div className="h-px w-10 bg-slate-100 mx-auto group-hover:w-full group-hover:bg-brand-gold/20 transition-all duration-700"></div>
                  
                  <p className="text-slate-500 text-[9px] leading-relaxed font-bold uppercase tracking-[0.1em] opacity-60 line-clamp-2">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                   <button className="flex items-center justify-center gap-2 py-2.5 bg-brand-navy text-white rounded-lg text-[8px] font-black uppercase tracking-widest hover:bg-brand-gold transition-all duration-300">
                      <FiDownload /> Document
                   </button>
                   <button className="flex items-center justify-center gap-2 py-2.5 border border-slate-100 text-brand-navy rounded-lg text-[8px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all duration-300">
                      <FiExternalLink /> Verify
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER ACTION */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 animate-reveal delay-1000 opacity-0">
           <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-brand-navy text-[10px] font-black hover:z-10 transition-transform hover:-translate-y-1">
                       {i}
                    </div>
                 ))}
              </div>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Trusted by 500+ Global Agricultural Partners</p>
           </div>
           
           <a
              href="/certifications"
              className="group relative inline-flex items-center gap-4 px-10 py-5 bg-brand-navy rounded-xl text-white font-black uppercase tracking-widest text-[10px] hover:bg-brand-gold hover:text-brand-navy transition-all duration-700 shadow-2xl overflow-hidden active:scale-95"
            >
              <span className="relative z-10">Export Compliance Protocol</span>
              <FiArrowRight className="relative z-10 text-lg group-hover:translate-x-2 transition-transform duration-500" />
            </a>
        </div>
      </div>
    </section>
  );
}
