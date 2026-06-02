"use client";

import { FiTruck, FiBox, FiCheckCircle, FiActivity, FiZap } from "react-icons/fi";

export function Infrastructure() {
  return (
    <div className="relative h-full group animate-reveal delay-900 opacity-0">
      {/* GLOW ACCENT */}
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold/20 via-brand-navy/10 to-brand-gold/20 rounded-sm blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
      
      <div className="relative h-full glass-card p-8 md:p-12 rounded-sm bg-white/70 backdrop-blur-xl border-white transition-all duration-700 hover-lift flex flex-col">
        
        <div className="flex items-center gap-4 mb-10 md:mb-12">
           <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-navy rounded-sm flex items-center justify-center text-brand-gold shadow-xl group-hover:rotate-12 transition-transform duration-700">
              <FiTruck className="text-2xl md:text-3xl" />
           </div>
           <div>
              <p className="text-[10px] font-black text-brand-gold uppercase tracking-[0.3em] mb-1">MITRAY EXIM Logistics</p>
              <h3 className="text-2xl md:text-4xl font-black text-brand-navy tracking-tighter uppercase leading-none">Infrastructure.</h3>
           </div>
        </div>

        <p className="text-sm md:text-xl text-slate-500 font-bold uppercase tracking-tight leading-relaxed mb-10">
          We have engineered a high-fidelity logistics architecture, incorporating strategic cold storage hubs, modern packhouses, and elite shipping corridors to ensure NATURE'S INTEGRITY reaches its destination.
        </p>

        <div className="space-y-4 md:space-y-6 flex-1">
          {[
            "Elite temperature-controlled cold storage hubs",
            "Advanced institutional packaging & grading units",
            "Strategic routing via premier shipping corridors",
            "Real-time supply chain telemetry & monitoring"
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 group/item">
               <div className="w-6 h-6 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover/item:bg-brand-gold group-hover/item:text-brand-navy transition-all duration-500">
                  <FiCheckCircle className="text-sm" />
               </div>
               <span className="text-[10px] md:text-[13px] font-black text-brand-navy uppercase tracking-widest opacity-60 group-hover/item:opacity-100 transition-opacity">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
           <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping"></div>
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Network Status: Operational Hub</span>
           </div>
           <FiZap className="text-brand-navy/20 group-hover:text-brand-gold transition-colors text-2xl" />
        </div>
      </div>
    </div>
  );
}
