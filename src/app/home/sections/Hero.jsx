"use client";

import { FiArrowRight, FiGlobe, FiActivity, FiShield, FiZap, FiCheckCircle, FiTruck } from "react-icons/fi";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-brand-navy pt-16 md:pt-24">
      
      {/* BACKGROUND ARCHITECTURE */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1920&h=1080&fit=crop" 
          alt="MITRAY EXIM Premium Agricultural Exports India" 
          className="w-full h-full object-cover opacity-20 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy/30"></div>
        
        {/* DATA SCANNER SWEEP */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold/5 to-transparent -skew-x-12 translate-x-[-200%] animate-[scan_8s_infinite] pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* MAIN MANIFEST */}
          <div className="lg:col-span-7 text-center md:text-left">
            
            {/* BRAND MICRO-INDICATOR */}
            <div className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-5 py-1 md:py-2 bg-brand-gold/10 rounded-xl mb-6 md:mb-8 animate-reveal-right border border-brand-gold/20 backdrop-blur-md">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-gold animate-ping"></div>
              <span className="text-[7px] md:text-[10px] font-black text-brand-gold uppercase tracking-[0.4em] md:tracking-[0.5em]">MITRAY EXIM • INDIA'S PREMIER EXPORT NETWORK</span>
            </div>

            {/* INTEGRATED BRAND HEADLINE */}
            <h1 className="text-4xl md:text-8xl lg:text-[9rem] font-black text-white mb-4 md:mb-6 tracking-[-0.04em] leading-[0.9] md:leading-[0.85]">
              <span className="block animate-reveal opacity-0">MITRAY <span className="text-gradient">EXIM.</span></span>
              <span className="block animate-reveal delay-200 opacity-0 text-white/40 uppercase">Global Excellence.</span>
            </h1>

            <p className="text-[12px] md:text-2xl text-slate-300 font-medium max-w-2xl mb-6 md:mb-8 leading-relaxed animate-reveal delay-400 opacity-0 uppercase tracking-tight">
              India's leading merchant exporter delivering <span className="text-white font-black decoration-brand-gold decoration-2 underline underline-offset-8">Fresh Vegetables</span>, Fruits, and Spices to strategic global markets.
            </p>

            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 md:gap-6">
              <button className="group relative w-full sm:w-auto px-6 md:px-10 py-4 md:py-5 bg-brand-gold rounded-xl text-brand-navy font-black uppercase tracking-[0.2em] text-[10px] md:text-[11px] shadow-2xl hover:bg-white transition-all duration-700 active:scale-95 overflow-hidden animate-reveal delay-500 opacity-0">
                <span className="relative z-10 flex items-center justify-center gap-3 md:gap-4">
                  Explore Products <FiArrowRight className="text-sm md:text-xl group-hover:translate-x-2 transition-transform duration-500" />
                </span>
              </button>

              <div className="flex items-center gap-3 md:gap-4 px-6 md:px-8 py-4 md:py-5 border border-white/10 rounded-xl bg-white/5 backdrop-blur-md shadow-sm hover:bg-white/10 transition-all group cursor-pointer w-full sm:w-auto justify-center sm:justify-start animate-reveal delay-700 opacity-0">
                 <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:rotate-12 transition-transform">
                   <FiGlobe className="text-sm md:text-base" />
                 </div>
                 <div className="text-left">
                    <p className="text-[7px] md:text-[9px] font-black text-white/40 uppercase tracking-widest leading-none mb-1">Global Supply Chain</p>
                    <p className="text-[9px] md:text-[11px] font-black text-white uppercase tracking-widest leading-none">14+ Export Hubs</p>
                 </div>
              </div>
            </div>
          </div>

          {/* VISUAL ASSET TERMINAL - FLOATING CARDS */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative z-10 grid grid-cols-2 gap-4 md:gap-6">
              {[
                { label: "Fresh Vegetables", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=800&fit=crop" },
                { label: "Premium Spices", img: "https://images.unsplash.com/photo-1596040033229-a0b3b7d1f4c1?w=600&h=800&fit=crop" },
                { label: "High Quality Grains", img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=800&fit=crop" },
                { label: "Export Fruits", img: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&h=800&fit=crop" },
              ].map((item, i) => (
                <div key={i} className={`relative glass-card p-1 rounded-xl md:rounded-2xl overflow-hidden group shadow-2xl transition-all duration-1000 animate-reveal ${i % 2 !== 0 ? 'translate-y-8 animate-subtle-float delay-300' : '-translate-y-8 animate-subtle-float delay-100'}`} style={{ animationDelay: `${500 + (i * 200)}ms` }}>
                  <div className="relative aspect-[3/4] rounded-lg md:rounded-xl overflow-hidden">
                    <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                       <p className="text-[9px] font-black text-white uppercase tracking-[0.3em] leading-none">{item.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TELEMETRY STRIP */}
      <div className="absolute bottom-0 left-0 right-0 h-12 md:h-20 bg-white/5 backdrop-blur-2xl border-y border-white/10 flex items-center overflow-hidden z-20 animate-reveal delay-1000 opacity-0">
        <div className="container mx-auto relative z-10">
           <div className="flex gap-12 md:gap-24 overflow-hidden whitespace-nowrap animate-marquee-fast">
              {[
                { icon: <FiActivity />, label: "Grid Status", val: "Operational" },
                { icon: <FiShield />, label: "APEDA Certified", val: "A-Grade" },
                { icon: <FiZap />, label: "Export Ready", val: "Instant Load" },
                { icon: <FiGlobe />, label: "Global Hubs", val: "14 Nodes" },
                { icon: <FiCheckCircle />, label: "Quality Audit", val: "FSSAI Verified" },
                { icon: <FiTruck />, label: "Fast Logistics", val: "Optimized" },
                // Loop
                { icon: <FiActivity />, label: "Grid Status", val: "Operational" },
                { icon: <FiShield />, label: "APEDA Certified", val: "A-Grade" },
                { icon: <FiZap />, label: "Export Ready", val: "Instant Load" },
                { icon: <FiGlobe />, label: "Global Hubs", val: "14 Nodes" },
                { icon: <FiCheckCircle />, label: "Quality Audit", val: "FSSAI Verified" },
                { icon: <FiTruck />, label: "Fast Logistics", val: "Optimized" },
              ].map((m, i) => (
                <div key={i} className="flex items-center gap-3 md:gap-4">
                   <div className="w-7 h-7 md:w-9 md:h-9 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold text-base md:text-lg shadow-[0_0_20px_rgba(212,165,116,0.1)]">{m.icon}</div>
                   <div>
                      <p className="text-[6px] md:text-[7px] font-black text-white/30 uppercase tracking-[0.2em] mb-0.5">{m.label}</p>
                      <p className="text-[8px] md:text-[10px] font-black text-white uppercase tracking-[0.2em]">{m.val}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
