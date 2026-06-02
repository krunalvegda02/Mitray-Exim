"use client";

import { FiTarget, FiCompass, FiZap, FiActivity } from "react-icons/fi";

export function VisionMission() {
  return (
    <div className="relative h-full group animate-reveal delay-500 opacity-0">
      {/* GLOW ACCENT */}
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold/20 via-brand-navy/10 to-brand-gold/20 rounded-sm blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
      
      <div className="relative h-full glass-card p-8 md:p-12 rounded-sm bg-white/70 backdrop-blur-xl border-white transition-all duration-700 hover-lift flex flex-col">
        
        <div className="flex items-center gap-4 mb-10 md:mb-12">
           <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-navy rounded-sm flex items-center justify-center text-brand-gold shadow-xl group-hover:rotate-12 transition-transform duration-700">
              <FiTarget className="text-2xl md:text-3xl" />
           </div>
           <div>
              <p className="text-[10px] font-black text-brand-gold uppercase tracking-[0.3em] mb-1">MITRAY EXIM Manifest</p>
              <h3 className="text-2xl md:text-4xl font-black text-brand-navy tracking-tighter uppercase leading-none">Core Intent.</h3>
           </div>
        </div>

        <div className="space-y-10 md:space-y-12 flex-1">
          <div className="relative pl-8 border-l-2 border-brand-gold/30 group/item">
            <div className="absolute top-0 -left-[5px] w-2 h-2 rounded-full bg-brand-gold group-hover/item:scale-150 transition-transform"></div>
            <h4 className="text-[10px] font-black text-brand-gold uppercase tracking-[0.4em] mb-3">Strategic Vision</h4>
            <p className="text-sm md:text-xl text-brand-navy font-bold uppercase tracking-tight leading-relaxed">
              To be the definitive global benchmark for Indian agricultural exports, recognized for uncompromising quality, institutional compliance, and supply chain reliability.
            </p>
          </div>

          <div className="relative pl-8 border-l-2 border-brand-navy/30 group/item">
            <div className="absolute top-0 -left-[5px] w-2 h-2 rounded-full bg-brand-navy group-hover/item:scale-150 transition-transform"></div>
            <h4 className="text-[10px] font-black text-brand-navy uppercase tracking-[0.4em] mb-3">Mission Protocol</h4>
            <p className="text-sm md:text-xl text-brand-navy font-bold uppercase tracking-tight leading-relaxed">
              To deliver premium produce with absolute transparency, engineered logistics, and 100% regulatory compliance, empowering our international partners with nature's finest resources.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
           <div className="flex items-center gap-3">
              <FiActivity className="text-brand-gold animate-pulse" />
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Alignment Status: Optimized</span>
           </div>
           <FiZap className="text-brand-navy/20 group-hover:text-brand-gold transition-colors text-2xl" />
        </div>
      </div>
    </div>
  );
}
