"use client";

import { FiGlobe, FiActivity, FiZap, FiShield, FiPackage, FiTruck, FiChevronRight } from "react-icons/fi";

const REGIONS = [
  {
    name: "Gulf Trade Corridor",
    description: "Primary institutional hub serving the Middle East energy and food security sectors.",
    countries: [
      { name: "UAE", flag: "🇦🇪" },
      { name: "Saudi Arabia", flag: "🇸🇦" },
      { name: "Qatar", flag: "🇶🇦" },
      { name: "Oman", flag: "🇴🇲" },
      { name: "Kuwait", flag: "🇰🇼" },
      { name: "Bahrain", flag: "🇧🇭" },
    ]
  },
  {
    name: "Western & Eurasian Gateways",
    description: "High-compliance supply lines serving premium European, Eurasian, and North American markets.",
    countries: [
      { name: "UK", flag: "🇬🇧" },
      { name: "USA", flag: "🇺🇸" },
      { name: "Canada", flag: "🇨🇦" },
      { name: "Germany", flag: "🇩🇪" },
      { name: "Russia", flag: "🇷🇺" },
    ]
  },
  {
    name: "Asia & Indian Ocean Nodes",
    description: "Strategic logistics hubs connecting to Southeast Asian and Indian Ocean trade centers.",
    countries: [
      { name: "Singapore", flag: "🇸🇬" },
      { name: "Malaysia", flag: "🇲🇾" },
      { name: "Vietnam", flag: "🇻🇳" },
      { name: "Sri Lanka", flag: "🇱🇰" },
      { name: "Maldives", flag: "🇲🇻" },
    ]
  },
  {
    name: "Emerging African Corridors",
    description: "Expanding export channels connecting to agricultural networks in East and Central Africa.",
    countries: [
      { name: "Tanzania", flag: "🇹🇿" },
      { name: "Kenya", flag: "🇰🇪" },
    ]
  }
];

export function GlobalPresence() {
  return (
    <div className="relative group animate-reveal delay-1000 opacity-0">
      {/* GLOW ACCENT */}
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-navy via-brand-gold to-brand-navy rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
      
      <div className="relative bg-brand-navy p-8 sm:p-12 md:p-16 rounded-[2.5rem] text-white shadow-2xl overflow-hidden border border-white/5">
        
        {/* ATMOSPHERIC BACKGROUND */}
        <div className="absolute inset-0 z-0 opacity-20">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/10 blur-[150px] rounded-full animate-subtle-float"></div>
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/5 blur-[150px] rounded-full animate-subtle-float delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          
          {/* HEADER ARCHITECTURE - CENTER ALIGNED */}
          <div className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-brand-gold/10 rounded-xl mb-8 border border-brand-gold/20 backdrop-blur-md">
              <FiGlobe className="text-brand-gold animate-pulse" />
              <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.5em]">Global Export Corridors</span>
            </div>
            
            <h3 className="text-4xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-none">
              STRATEGIC <br />
              <span className="text-gradient">NETWORK.</span>
            </h3>
            
            <p className="text-slate-400 text-sm md:text-2xl font-bold uppercase tracking-tight leading-relaxed max-w-4xl mx-auto px-4">
              MITRAY EXIM powers a high-speed logistics network connecting India’s finest agricultural produce to elite trade corridors worldwide.
            </p>
          </div>

          {/* REGIONAL TERMINALS - REDESIGNED COUNTRY LIST */}
          <div className="space-y-12 md:space-y-20">
             {REGIONS.map((region, ridx) => (
               <div key={ridx} className="relative group/region">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-8 mb-10">
                     <div className="lg:w-1/3">
                        <div className="flex items-center gap-3 mb-4">
                           <div className="w-10 h-px bg-brand-gold/40"></div>
                           <h4 className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.4em] text-brand-gold">{region.name}</h4>
                        </div>
                        <p className="text-[10px] md:text-[13px] font-bold text-white/40 uppercase tracking-widest leading-relaxed">
                          {region.description}
                        </p>
                     </div>
                     
                     <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {region.countries.map((country, cidx) => (
                          <div 
                            key={cidx} 
                            className="glass-card p-5 rounded-2xl bg-white/5 border-white/5 hover:bg-brand-gold hover:text-brand-navy transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-default group/country"
                          >
                            <div className="flex items-center justify-between">
                               <div className="flex items-center gap-4">
                                  <span className="text-2xl group-hover/country:scale-110 transition-transform">{country.flag}</span>
                                  <span className="text-[9px] md:text-[13.5px] font-black uppercase tracking-widest whitespace-nowrap">{country.name}</span>
                               </div>
                               <FiChevronRight className="text-brand-gold group-hover/country:text-brand-navy opacity-0 group-hover/country:opacity-100 transition-all -translate-x-2 group-hover/country:translate-x-0" />
                            </div>
                          </div>
                        ))}
                     </div>
                  </div>
                  {ridx < REGIONS.length - 1 && <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent w-full"></div>}
               </div>
             ))}
          </div>

          {/* TELEMETRY FOOTER */}
          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Trade Grid Status: Active & Operational</span>
             </div>
             <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                   <FiActivity className="text-brand-gold animate-pulse" />
                   <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Live Routing Protocol</span>
                </div>
                <div className="flex items-center gap-3">
                   <FiZap className="text-brand-gold" />
                   <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">A-Grade Transit Sync</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
