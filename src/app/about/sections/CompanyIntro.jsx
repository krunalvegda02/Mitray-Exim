"use client";

import { FiArrowRight, FiShield, FiActivity, FiGlobe, FiZap } from "react-icons/fi";

export function CompanyIntro() {
  return (
    <section className="relative overflow-hidden bg-white">
      
      {/* DECORATIVE BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 blur-[120px] rounded-full animate-subtle-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
          
          {/* CONTENT MANIFEST */}
          <div className="lg:col-span-7">
            <div className="max-w-4xl">
               <div className="flex items-center gap-4 mb-6">
                  <div className="h-px bg-brand-gold animate-line-grow w-0"></div>
                  <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.5em] animate-reveal opacity-0">Institutional Overview</span>
               </div>
               <h2 className="text-4xl md:text-8xl font-black text-brand-navy mb-8 tracking-tighter leading-[0.85] animate-reveal delay-100 opacity-0">
                  HERITAGE OF <br />
                  <span className="text-gradient">EXCELLENCE.</span>
               </h2>
               <div className="space-y-6 md:space-y-8 animate-reveal delay-300 opacity-0">
                  <p className="text-sm md:text-xl text-slate-500 font-bold uppercase tracking-tight leading-relaxed max-w-3xl">
                     MITRAY EXIM stands as a premier merchant exporter from India, specializing in the high-fidelity delivery of nature's finest agricultural treasures—including premium vegetables, fresh fruits, and high-grade spices—to elite international markets.
                  </p>
                  <p className="text-xs md:text-lg text-slate-400 font-medium uppercase tracking-tight leading-relaxed max-w-3xl opacity-70">
                     Our institutional framework is engineered for precision, regulatory compliance, and total supply chain reliability. We bridge the gap between India's most fertile agricultural regions and the sophisticated demand of global trade hubs in the Gulf, Europe, and North America.
                  </p>
               </div>

               {/* KEY METRICS GRID */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 md:mt-16 animate-reveal delay-500 opacity-0">
                  {[
                    { val: "2020", label: "Establishment", icon: <FiActivity /> },
                    { val: "20+", label: "Trade Hubs", icon: <FiGlobe /> },
                    { val: "100%", label: "Compliance", icon: <FiShield /> },
                    { val: "Elite", label: "Grid Status", icon: <FiZap /> },
                  ].map((stat, idx) => (
                    <div key={idx} className="glass-card p-6 rounded-2xl border-slate-100 bg-slate-50/50 group hover:bg-brand-navy transition-all duration-700 shadow-sm">
                       <div className="text-brand-gold text-xl mb-3 group-hover:text-white transition-colors">{stat.icon}</div>
                       <p className="text-2xl md:text-3xl font-black text-brand-navy mb-1 group-hover:text-white tracking-tighter">{stat.val}</p>
                       <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest group-hover:text-white/40">{stat.label}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* VISUAL ASSET TERMINAL */}
          <div className="lg:col-span-5 relative hidden lg:block animate-reveal delay-700 opacity-0">
             <div className="relative glass-card p-2 rounded-[2.5rem] bg-slate-100 shadow-2xl overflow-hidden border-white">
                <img 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=1000&fit=crop" 
                  alt="MITRAY EXIM Operational Excellence" 
                  className="w-full h-full object-cover rounded-[2rem] opacity-90 grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-60"></div>
                
                {/* HUD OVERLAY */}
                <div className="absolute bottom-10 left-10 right-10">
                   <div className="glass-panel p-6 rounded-2xl border-white/20 bg-white/10 backdrop-blur-xl">
                      <div className="flex items-center gap-4 mb-3">
                         <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                         <span className="text-[9px] font-black text-white uppercase tracking-widest">Active Procurement Network</span>
                      </div>
                      <p className="text-[11px] font-black text-brand-gold uppercase tracking-[0.2em]">Verified Export Protocol</p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
