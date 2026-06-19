"use client";

import { FiGlobe, FiActivity, FiZap, FiShield, FiPackage, FiTruck, FiChevronRight, FiMap } from "react-icons/fi";

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
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-navy via-brand-gold to-brand-navy rounded-sm blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
      
      <div className="relative bg-brand-navy p-6 sm:p-8 md:p-12 lg:p-16 rounded-sm text-white shadow-2xl overflow-hidden border border-white/5">
        
        {/* ATMOSPHERIC BACKGROUND */}
        <div className="absolute inset-0 z-0 opacity-20">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/10 blur-[150px] rounded-full animate-subtle-float"></div>
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/5 blur-[150px] rounded-full animate-subtle-float delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          
          {/* HEADER ARCHITECTURE - CENTER ALIGNED */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-24 px-2">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 bg-brand-gold/10 rounded-sm mb-5 sm:mb-8 border border-brand-gold/20 backdrop-blur-md">
              <FiGlobe className="text-brand-gold animate-pulse text-xs sm:text-sm" />
              <span className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-black text-brand-gold uppercase tracking-[0.25em] sm:tracking-[0.4em] md:tracking-[0.5em]">Global Export Corridors</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-black mb-3 sm:mb-4 md:mb-6 tracking-tighter uppercase leading-tight">
              STRATEGIC <br />
              <span className="text-gradient">NETWORK.</span>
            </h3>
            
            <p className="text-slate-400 text-[11px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-bold uppercase tracking-tight leading-relaxed max-w-4xl mx-auto">
              MITRAY EXIM powers a high-speed logistics network connecting India's finest agricultural produce to elite trade corridors worldwide.
            </p>
          </div>

          {/* REGIONAL TERMINALS - REDESIGNED COUNTRY LIST */}
          <div className="space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-20">
             {REGIONS.map((region, ridx) => (
               <div key={ridx} className="relative group/region px-2 sm:px-0">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-10">
                     <div className="lg:w-1/3">
                        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                           <div className="w-4 sm:w-8 md:w-10 h-px bg-brand-gold/40"></div>
                           <h4 className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] md:tracking-[0.4em] text-brand-gold leading-tight">{region.name}</h4>
                        </div>
                        <p className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-bold text-white/40 uppercase tracking-tight leading-relaxed">
                          {region.description}
                        </p>
                     </div>
                     
                     <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
                        {region.countries.map((country, cidx) => (
                          <div 
                            key={cidx} 
                            className="glass-card p-2 sm:p-2.5 md:p-3 lg:p-4 rounded-sm bg-white/5 border border-white/5 hover:bg-brand-gold hover:text-brand-navy transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-default group/country">
                            <div className="flex flex-col items-center justify-center gap-1.5 sm:gap-2 md:gap-3 h-full">
                               <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl group-hover/country:scale-110 transition-transform">{country.flag}</span>
                               <span className="text-[8.5px] sm:text-[10.5px]  lg:text-[12px] xl:text-[14px] font-black uppercase tracking-wider text-center leading-tight line-clamp-3">{country.name}</span>
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
          <div className="mt-8 sm:mt-12 md:mt-20 lg:mt-28 pt-6 sm:pt-8 md:pt-12 lg:pt-14 border-t border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-1 sm:px-2 md:px-0">
             <div className="flex flex-col items-center justify-center text-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <FiMap className="text-brand-gold text-sm sm:text-base md:text-lg lg:text-xl" />
                <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight">4</span>
                <p className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] font-black text-brand-gold uppercase tracking-wider">Regions</p>
             </div>
             <div className="flex flex-col items-center justify-center text-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <FiGlobe className="text-brand-gold text-sm sm:text-base md:text-lg lg:text-xl" />
                <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight">20+</span>
                <p className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] font-black text-brand-gold uppercase tracking-wider">Countries</p>
             </div>
             <div className="flex flex-col items-center justify-center text-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <FiActivity className="text-brand-gold animate-pulse text-sm sm:text-base md:text-lg lg:text-xl" />
                <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight">Active</span>
                <p className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] font-black text-brand-gold uppercase tracking-wider">Status</p>
             </div>
             <div className="flex flex-col items-center justify-center text-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <FiShield className="text-brand-gold text-sm sm:text-base md:text-lg lg:text-xl" />
                <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight">100%</span>
                <p className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] font-black text-brand-gold uppercase tracking-wider">Verified</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
