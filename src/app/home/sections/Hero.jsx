"use client";

import { FiArrowRight, FiGlobe, FiTruck, FiZap, FiShield, FiTrendingUp, FiCheckCircle, FiActivity } from "react-icons/fi";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] md:min-h-screen flex items-center pt-32 pb-24 md:pb-40 overflow-hidden bg-brand-navy">
      
      {/* PREMIUM BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80" 
          alt="Mitray Exim Global Logistics Hub" 
          className="w-full h-full object-cover opacity-30 scale-105 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy/30"></div>
        
        {/* DATA SCANNER SWEEP */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold/5 to-transparent -skew-x-12 translate-x-[-200%] animate-[scan_8s_infinite] pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* MAIN MANIFEST */}
          <div className="lg:col-span-7 text-center md:text-left">
            
            {/* BRAND MICRO-INDICATOR - SCALE-ADJUSTED FOR MOBILE */}
            <div className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-6 py-1 md:py-2.5 bg-brand-gold/10 rounded-full mb-8 md:mb-10 animate-reveal border border-brand-gold/20 backdrop-blur-md">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-gold animate-ping"></div>
              <span className="text-[7px] md:text-[10px] font-black text-brand-gold uppercase tracking-[0.4em] md:tracking-[0.5em]">MITRAY EXIM • Global Logistics Active</span>
            </div>

            {/* INTEGRATED BRAND HEADLINE */}
            <h1 className="text-4xl md:text-8xl lg:text-[10rem] font-black text-white mb-6 md:mb-8 tracking-[-0.04em] leading-[0.9] md:leading-[0.85] animate-reveal delay-100">
              MITRAY <span className="text-gradient">EXIM.</span> <br />
              <span className="text-white/40">GLOBAL COMMAND.</span>
            </h1>

            <p className="text-[12px] md:text-2xl text-slate-300 font-medium max-w-2xl mb-8 md:mb-12 leading-relaxed animate-reveal delay-200 uppercase tracking-tight opacity-90">
              India's premier export infrastructure delivering <span className="text-white font-black decoration-brand-gold decoration-2 md:decoration-4 underline underline-offset-4 md:underline-offset-8">Fresh Vegetables, Fruits, and Authentic Indian Flavours</span> to strategic global hubs.
            </p>

            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 md:gap-6 animate-reveal delay-300">
              {/* PRECISION BUTTON SIZING FOR MOBILE */}
              <button className="group relative w-full sm:w-auto px-6 md:px-12 py-4 md:py-6 bg-brand-gold rounded-xl md:rounded-[2.5rem] text-brand-navy font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-[11px] shadow-2xl hover:bg-white transition-all duration-700 active:scale-95 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-3 md:gap-4">
                  Initialize Portfolio <FiArrowRight className="text-sm md:text-xl group-hover:translate-x-2 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              <div className="flex items-center gap-3 md:gap-4 px-6 md:px-8 py-4 md:py-6 border border-white/10 rounded-xl md:rounded-[2.5rem] bg-white/5 backdrop-blur-md shadow-sm hover:bg-white/10 transition-all group cursor-pointer w-full sm:w-auto justify-center sm:justify-start">
                 <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:rotate-12 transition-transform">
                   <FiGlobe className="text-sm md:text-base" />
                 </div>
                 <div className="text-left">
                    <p className="text-[7px] md:text-[9px] font-black text-white/40 uppercase tracking-widest leading-none mb-1">Network Hubs</p>
                    <p className="text-[9px] md:text-[11px] font-black text-white uppercase tracking-widest leading-none">14+ Strategic</p>
                 </div>
              </div>
            </div>
          </div>

          {/* VISUAL ASSET TERMINAL */}
          <div className="lg:col-span-5 relative hidden lg:block animate-reveal delay-500">
            <div className="relative z-10 grid grid-cols-2 gap-6">
              {[
                { label: "Vegetable Manifest", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=800&fit=crop" },
                { label: "Indian Spices", img: "https://images.unsplash.com/photo-1596040033229-a0b3b7d1f4c1?w=600&h=800&fit=crop" },
                { label: "Premium Grains", img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=800&fit=crop" },
                { label: "Fruit Logistics", img: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&h=800&fit=crop" },
              ].map((item, i) => (
                <div key={i} className={`relative glass-card p-2 rounded-[3rem] overflow-hidden group shadow-2xl transition-all duration-700 hover:-translate-y-4 ${i % 2 !== 0 ? 'translate-y-12' : '-translate-y-12'}`}>
                  <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden">
                    <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                       <p className="text-[10px] font-black text-white uppercase tracking-[0.3em] leading-none">{item.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PREMIUM HIGH-SPEED TELEMETRY STRIP */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-white/5 backdrop-blur-2xl border-y border-white/10 flex items-center overflow-hidden z-20">
        <div className="container mx-auto relative z-10">
           <div className="flex gap-16 md:gap-32 overflow-hidden whitespace-nowrap animate-marquee-fast">
              {[
                { icon: <FiActivity />, label: "Grid Status", val: "Operational" },
                { icon: <FiShield />, label: "Compliance", val: "A-Grade" },
                { icon: <FiZap />, label: "Telemetry", val: "2.4ms Latency" },
                { icon: <FiGlobe />, label: "Global Hubs", val: "14 Nodes" },
                { icon: <FiCheckCircle />, label: "Quality Audit", val: "Verified" },
                { icon: <FiTruck />, label: "Load Sync", val: "Optimized" },
                // Duplicate for seamless loop
                { icon: <FiActivity />, label: "Grid Status", val: "Operational" },
                { icon: <FiShield />, label: "Compliance", val: "A-Grade" },
                { icon: <FiZap />, label: "Telemetry", val: "2.4ms Latency" },
                { icon: <FiGlobe />, label: "Global Hubs", val: "14 Nodes" },
                { icon: <FiCheckCircle />, label: "Quality Audit", val: "Verified" },
                { icon: <FiTruck />, label: "Load Sync", val: "Optimized" },
              ].map((m, i) => (
                <div key={i} className="flex items-center gap-3 md:gap-5">
                   <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold text-lg md:text-xl shadow-[0_0_20px_rgba(212,165,116,0.1)]">{m.icon}</div>
                   <div>
                      <p className="text-[7px] md:text-[8px] font-black text-white/30 uppercase tracking-[0.2em] mb-0.5 md:mb-1">{m.label}</p>
                      <p className="text-[9px] md:text-xs font-black text-white uppercase tracking-[0.2em]">{m.val}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
