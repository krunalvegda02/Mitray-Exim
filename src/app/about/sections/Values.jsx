"use client";

import { FiShield, FiCpu, FiEye, FiClock, FiActivity, FiZap } from "react-icons/fi";

export function Values() {
  const values = [
    { 
      title: "Quality Manifest", 
      desc: "Rigorous high-fidelity quality control at every stage of the supply chain.",
      icon: <FiShield />
    },
    { 
      title: "Compliance Protocol", 
      desc: "Absolute adherence to APEDA, FSSAI, and global regulatory standards.",
      icon: <FiCpu />
    },
    { 
      title: "Operational Clarity", 
      desc: "Strategic transparency through precise documentation and real-time tracking.",
      icon: <FiEye />
    },
    { 
      title: "Supply Reliability", 
      desc: "Consistent resource allocation and optimized delivery schedules for global partners.",
      icon: <FiClock />
    },
  ];

  return (
    <div className="relative h-full group animate-reveal delay-700 opacity-0">
      {/* GLOW ACCENT */}
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-navy/20 via-brand-gold/10 to-brand-navy/20 rounded-sm blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
      
      <div className="relative h-full glass-card p-8 md:p-12 rounded-sm bg-white/70 backdrop-blur-xl border-white transition-all duration-700 hover-lift flex flex-col">
        
        <div className="flex items-center gap-4 mb-10 md:mb-12">
           <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 bg-brand-gold rounded-sm flex items-center justify-center text-brand-navy shadow-xl group-hover:rotate-12 transition-transform duration-700">
              <FiZap className="text-2xl md:text-3xl" />
           </div>
           <div className="min-w-0 flex-1">
              <p className="text-[8px] sm:text-[9px] md:text-[11px] font-black text-brand-gold uppercase tracking-widest md:tracking-[0.3em] mb-1 break-words">MITRAY EXIM Ethics</p>
              <h3 className="text-xl sm:text-2xl md:text-4xl font-black text-brand-navy tracking-tighter uppercase leading-none break-words">Core Ethics.</h3>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {values.map((value, idx) => (
            <div key={idx} className="group/item relative p-6 bg-slate-50/50 rounded-sm border border-slate-100 hover:bg-brand-navy transition-all duration-500">
               <div className="text-brand-gold text-xl mb-4 group-hover/item:text-white transition-colors">{value.icon}</div>
               <h4 className="text-xs md:text-sm lg:text-base font-black text-brand-navy uppercase tracking-widest mb-2 group-hover/item:text-white transition-colors">{value.title}</h4>
               <p className="text-[10px] md:text-xs lg:text-sm font-bold text-slate-400 uppercase tracking-tight leading-relaxed group-hover/item:text-white/60 transition-colors">
                 {value.desc}
               </p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
           <div className="flex items-center gap-3">
              <FiActivity className="text-brand-gold animate-pulse" />
              <span className="text-[9px] md:text-[11px]  font-black text-slate-400 uppercase tracking-widest">Ethical Status: Verified</span>
           </div>
           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></div>
        </div>
      </div>
    </div>
  );
}
