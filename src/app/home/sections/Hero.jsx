"use client";

import { COUNTRIES } from "@/data/countries";

export function Hero() {
  return (
    <section className="relative text-white overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2070&auto=format&fit=crop" 
          alt="Fresh vegetables and spices from India"
          className="w-full h-full object-cover"
        />
        {/* Advanced Multi-layered Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy-dark/95 via-brand-navy/85 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center md:text-left md:grid md:grid-cols-2 md:gap-12 items-center">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-gold/10 backdrop-blur-md rounded-full border border-brand-gold/30 mb-8 animate-fade-in-down">
              <div className="w-2 h-2 bg-brand-gold rounded-full animate-pulse"></div>
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-brand-gold-light">Trusted Export Partner Since 2020</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold mb-8 leading-[1.1] animate-fade-in-up animation-delay-200">
              Premium <br />
              <span className="text-gradient">Indian Produce</span> <br />
              for the World
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl mb-12 text-slate-300 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-400 font-light">
              Supplying nature's finest vegetables, fruits, and spices from fertile Indian farms to your global doorstep with unmatched quality assurance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-5 mb-16 animate-fade-in-up animation-delay-600">
              <a href="/products" className="group px-8 py-5 bg-brand-gold text-brand-navy-dark rounded-xl font-bold hover:bg-white hover:scale-105 transition-all duration-500 shadow-[0_20px_50px_rgba(212,165,116,0.3)] flex items-center space-x-3">
                <span>Explore Catalog</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="/contact" className="px-8 py-5 border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/10 hover:border-white transition-all duration-500 backdrop-blur-sm flex items-center group">
                Request Quotation
              </a>
            </div>
          </div>

          {/* Floating Feature Cards (Visual Interest) */}
          <div className="hidden md:block relative animate-fade-in-up animation-delay-800">
             <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Fresh Vegetables", img: "https://images.unsplash.com/photo-1597362860722-3955234adfc3?w=400&h=400&fit=crop" },
                  { label: "Eatable Fruits", img: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&h=400&fit=crop" },
                  { label: "Premium Spices", img: "https://images.unsplash.com/photo-1596040033229-a0b3b7d1f4c1?w=400&h=400&fit=crop" },
                  { label: "Quality Grains", img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop" },
                ].map((item, i) => (
                  <div key={i} className={`relative overflow-hidden rounded-3xl aspect-square group shadow-2xl ${i % 2 !== 0 ? 'mt-8' : '-mt-8'}`}>
                    <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/80 via-transparent to-transparent flex items-end p-6">
                      <p className="font-bold text-sm lg:text-base uppercase tracking-wider">{item.label}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>

      {/* Mouse Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center opacity-50">
        <div className="w-[30px] h-[50px] border-2 border-white rounded-full relative mb-2">
           <div className="w-1.5 h-1.5 bg-white rounded-full absolute left-1/2 -translate-x-1/2 top-2 animate-mouse"></div>
        </div>
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll</span>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 -mb-px pointer-events-none">
        <svg viewBox="0 0 1440 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
          <path d="M0 100L48 95C96 90 192 80 288 75C384 70 480 70 576 75C672 80 768 90 864 95C960 100 1056 100 1152 95C1248 90 1344 80 1392 75L1440 70V140H1392C1344 140 1248 140 1152 140C1056 140 960 140 864 140C768 140 672 140 576 140C480 140 384 140 288 140C192 140 96 140 48 140H0V100Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  );
}

