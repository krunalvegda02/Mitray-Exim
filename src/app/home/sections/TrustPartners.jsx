"use client";

import { FiShield, FiGlobe, FiCheckCircle } from "react-icons/fi";

export function TrustPartners() {
  const partners = [
    { name: "ISO 9001:2015", short: "ISO", color: "bg-blue-600" },
    { name: "APEDA India", short: "APEDA", color: "bg-emerald-600" },
    { name: "FSSAI Licensed", short: "FSSAI", color: "bg-orange-500" },
    { name: "SGS Verified", short: "SGS", color: "bg-red-600" },
    { name: "Bureau Veritas", short: "BV", color: "bg-indigo-700" },
    { name: "D&B Registered", short: "D&B", color: "bg-slate-800" },
    { name: "Global GAP", short: "GAP", color: "bg-green-700" },
    { name: "DGFT Authorized", short: "DGFT", color: "bg-brand-navy" },
  ];

  return (
    <div className="relative -mt-12 md:-mt-16 z-30 px-4 md:px-12">
      <div className="container mx-auto">
        {/* EDGY RADIUS (xl / 2rem) */}
        <div className="glass-panel rounded-xl md:rounded-2xl p-2 md:p-3 border-white/40 shadow-2xl overflow-hidden group bg-white/90">
          <div className="flex flex-col md:flex-row items-center">
            
            {/* LABEL INDICATOR - EDGY RADIUS (xl) */}
            <div className="flex items-center gap-4 px-8 py-4 bg-brand-navy rounded-lg md:rounded-xl text-white shrink-0 group-hover:bg-brand-gold transition-all duration-700 shadow-xl">
               <FiShield className="text-brand-gold group-hover:text-brand-navy transition-colors animate-pulse" />
               <span className="text-[10px] font-black uppercase tracking-[0.3em] whitespace-nowrap">Verified Grid</span>
            </div>

            {/* INSTITUTIONAL LOGO MARQUEE */}
            <div className="flex-1 overflow-hidden relative py-6 md:py-0">
               <div className="flex gap-12 md:gap-20 items-center animate-marquee-fast opacity-60 group-hover:opacity-100 transition-opacity duration-700">
                  {[...partners, ...partners].map((p, i) => (
                    <div key={i} className="flex items-center gap-4 group/logo cursor-crosshair">
                       {/* EDGY RADIUS LOGO (xl) */}
                       <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-100 group-hover/logo:bg-white group-hover/logo:shadow-lg transition-all duration-500 overflow-hidden">
                          <div className={`absolute inset-0 ${p.color} opacity-0 group-hover/logo:opacity-10 transition-opacity`}></div>
                          <div className="flex flex-col items-center justify-center">
                             <span className="text-[10px] md:text-[12px] font-black text-brand-navy tracking-tighter leading-none">{p.short}</span>
                             <div className={`w-4 h-0.5 mt-1 rounded-sm ${p.color}`}></div>
                          </div>
                          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-brand-gold/20 blur-xl opacity-0 group-hover/logo:opacity-100"></div>
                       </div>
                       
                       <div className="flex flex-col">
                          <span className="text-[9px] font-black text-brand-navy uppercase tracking-[0.2em] whitespace-nowrap">{p.name}</span>
                          <div className="flex items-center gap-1">
                             <FiCheckCircle className="text-[8px] text-emerald-500" />
                             <span className="text-[7px] font-bold text-slate-400 uppercase tracking-widest">Verified Node</span>
                          </div>
                       </div>
                    </div>
                  ))}
               </div>
               
               <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white/95 to-transparent pointer-events-none"></div>
               <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white/95 to-transparent pointer-events-none"></div>
            </div>

            {/* LIVE DATA NODE */}
            <div className="hidden lg:flex items-center gap-4 px-8 py-4 border-l border-slate-100 ml-4">
               <div className="flex flex-col items-end">
                  <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest leading-none mb-1">Audit Status</span>
                  <span className="text-[11px] font-black text-brand-navy uppercase tracking-widest leading-none">Compliant</span>
               </div>
               <FiGlobe className="text-brand-gold text-xl animate-spin-slow" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
