"use client";

import { CERTIFICATIONS } from "@/data/certifications";
import { FiCheckCircle, FiShield, FiArrowRight, FiDownload, FiExternalLink, FiAward } from "react-icons/fi";

export function Certifications() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden ">
      
      {/* INSTITUTIONAL BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_90%_10%,rgba(212,165,116,0.03)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_90%,rgba(44,74,94,0.03)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        
        {/* HEADER MANIFEST */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-3xl animate-reveal">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-brand-navy/5 rounded-full mb-8 border border-brand-navy/5 backdrop-blur-md">
              <FiAward className="text-brand-gold animate-pulse" />
              <span className="text-[10px] font-black text-brand-navy uppercase tracking-[0.5em]">Institutional Compliance Manifest</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-brand-navy mb-8 tracking-tighter leading-[0.85]">
              GLOBAL <br />
              <span className="text-gradient">CERTIFICATIONS.</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl leading-relaxed uppercase tracking-tight opacity-80">
              MITRAY EXIM maintains the industry's most rigorous compliance protocols, verified by international food safety authorities and trade councils.
            </p>
          </div>
          
          <div className="hidden lg:flex flex-col items-end animate-reveal delay-200">
             <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-px bg-slate-200"></div>
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">Audit Status</span>
             </div>
             <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                <FiCheckCircle className="text-emerald-500 text-xl" />
                <span className="text-[11px] font-black text-brand-navy uppercase tracking-widest">100% Verified Grid</span>
             </div>
          </div>
        </div>

        {/* CERTIFICATION ARCHITECTURE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={cert.id}
              className="group relative animate-reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* CARD FRAME */}
              <div className="relative glass-card p-10 md:p-12 rounded-[3.5rem] flex flex-col h-full transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(44,74,94,0.15)] bg-white/60">
                
                {/* SECURITY SEAL CIRCLE */}
                <div className="relative w-32 h-32 mb-10 mx-auto">
                   <div className="absolute inset-0 bg-brand-gold/5 rounded-full scale-110 group-hover:scale-125 transition-transform duration-1000"></div>
                   <div className="relative w-full h-full glass-panel rounded-full flex items-center justify-center p-6 border-white shadow-xl transition-all duration-700 group-hover:rotate-[360deg]">
                      <img
                        src={cert.logo}
                        alt={cert.fullName}
                        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700 opacity-40 group-hover:opacity-100 scale-90 group-hover:scale-100"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden flex-col items-center justify-center">
                        <FiShield className="text-4xl text-brand-gold opacity-50" />
                      </div>
                   </div>
                   
                   {/* SCANNER LINE EFFECT */}
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-brand-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                </div>

                <div className="flex-1 space-y-6 text-center">
                  <div>
                    <h3 className="text-3xl font-black text-brand-navy tracking-tighter mb-2 group-hover:text-brand-gold transition-colors duration-500">{cert.name}</h3>
                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-[0.3em] leading-tight px-4">{cert.fullName}</p>
                  </div>
                  
                  <div className="h-px w-12 bg-slate-100 mx-auto group-hover:w-full group-hover:bg-brand-gold/20 transition-all duration-700"></div>
                  
                  <p className="text-slate-500 text-[10px] leading-relaxed font-bold uppercase tracking-[0.1em] opacity-60 line-clamp-3">
                    {cert.description}
                  </p>
                </div>

                {/* INSTITUTIONAL ACTIONS */}
                <div className="mt-10 grid grid-cols-2 gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                   <button className="flex items-center justify-center gap-2 py-3 bg-brand-navy text-white rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-brand-gold hover:text-brand-navy transition-all duration-300">
                      <FiDownload /> Manifest
                   </button>
                   <button className="flex items-center justify-center gap-2 py-3 border border-slate-100 text-brand-navy rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all duration-300">
                      <FiExternalLink /> Verify
                   </button>
                </div>
                
                {/* VERIFIED TAG */}
                <div className="absolute top-6 right-8 flex items-center gap-2 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-100">
                   <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
                   <span className="text-[7px] font-black text-emerald-600 uppercase tracking-widest">Active</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* COMPLIANCE FOOTER */}
        <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 animate-reveal delay-500">
           <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                 {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-brand-navy text-xs font-black">
                       {i}
                    </div>
                 ))}
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Trusted by 500+ Global Partners</p>
           </div>
           
           <a
              href="/certifications"
              className="group relative inline-flex items-center gap-4 px-12 py-6 bg-brand-navy rounded-[2.5rem] text-white font-black uppercase tracking-widest text-[11px] hover:bg-brand-gold hover:text-brand-navy transition-all duration-700 shadow-2xl overflow-hidden active:scale-95"
            >
              <span className="relative z-10">Export Compliance Protocol</span>
              <FiArrowRight className="relative z-10 text-lg group-hover:translate-x-2 transition-transform duration-500" />
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
        </div>
      </div>
    </section>
  );
}
