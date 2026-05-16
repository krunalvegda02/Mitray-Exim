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
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-navy/20 via-brand-gold/10 to-brand-navy/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
      
      <div className="relative h-full glass-card p-8 md:p-12 rounded-[2rem] bg-white/70 backdrop-blur-xl border-white transition-all duration-700 hover-lift flex flex-col">
        
        <div className="flex items-center gap-4 mb-10 md:mb-12">
           <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-gold rounded-2xl flex items-center justify-center text-brand-navy shadow-xl group-hover:rotate-12 transition-transform duration-700">
              <FiZap className="text-2xl md:text-3xl" />
           </div>
           <div>
              <p className="text-[10px] font-black text-brand-gold uppercase tracking-[0.3em] mb-1">MITRAY EXIM Ethics</p>
              <h3 className="text-2xl md:text-4xl font-black text-brand-navy tracking-tighter uppercase leading-none">Core Ethics.</h3>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {values.map((value, idx) => (
            <div key={idx} className="group/item relative p-6 bg-slate-50/50 rounded-2xl border border-slate-100 hover:bg-brand-navy transition-all duration-500">
               <div className="text-brand-gold text-xl mb-4 group-hover/item:text-white transition-colors">{value.icon}</div>
               <h4 className="text-[11px] md:text-[13px] font-black text-brand-navy uppercase tracking-widest mb-2 group-hover/item:text-white transition-colors">{value.title}</h4>
               <p className="text-[9px] md:text-[11px] font-bold text-slate-400 uppercase tracking-tight leading-relaxed group-hover/item:text-white/60 transition-colors">
                 {value.desc}
               </p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
           <div className="flex items-center gap-3">
              <FiActivity className="text-brand-gold animate-pulse" />
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Ethical Status: Verified</span>
           </div>
           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></div>
        </div>
      </div>
    </div>
  );
}
