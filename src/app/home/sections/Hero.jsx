"use client";

import { COUNTRIES } from "@/data/countries";

export function Hero() {
  return (
    <div className="relative text-white overflow-hidden pb-14">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2070&auto=format&fit=crop" 
          alt="Fresh vegetables and spices"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy-dark/95 via-brand-navy/90 to-brand-navy-dark/95"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-navy/50 backdrop-blur-sm rounded-full border border-brand-navy-light mb-8 animate-fade-in-down">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Certified Export Partner Since 2020</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-200">
            Premium Agricultural Exports
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-light to-brand-gold">from India</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-10 text-brand-gold-light leading-relaxed max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Supplying fresh vegetables, fruits, spices, and grains to international markets with full compliance and quality assurance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up animation-delay-600">
            <a href="/products" className="group px-8 py-4 bg-white text-brand-navy-dark rounded-lg font-semibold hover:bg-brand-gold hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
              <span>View Products</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="/landing" className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-brand-navy-dark transition-all duration-300 backdrop-blur-sm hover:scale-105">
              Request Quotation
            </a>
          </div>
          
          {/* Export Countries */}
          <div className="border-t border-brand-navy/50 pt-10 animate-fade-in-up animation-delay-800">
            <p className="text-sm text-brand-gold-light mb-6 font-medium uppercase tracking-wider">Exporting To</p>
            <div className="flex flex-wrap justify-center gap-3">
              {COUNTRIES.map((country, index) => (
                <div 
                  key={country.name} 
                  className="group px-4 py-2 bg-brand-navy-dark/30 backdrop-blur-sm rounded-lg border border-brand-navy/50 hover:border-brand-gold hover:bg-brand-navy/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer"
                  style={{ animationDelay: `${1000 + index * 100}ms` }}
                >
                  <span className="text-sm font-medium">{country.flag} {country.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 -mb-px">
        <svg viewBox="0 0 1440 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
          {/* Gold accent wave */}
          <path d="M0 80L48 85C96 90 192 100 288 95C384 90 480 70 576 65C672 60 768 70 864 75C960 80 1056 80 1152 75C1248 70 1344 60 1392 55L1440 50V140H1392C1344 140 1248 140 1152 140C1056 140 960 140 864 140C768 140 672 140 576 140C480 140 384 140 288 140C192 140 96 140 48 140H0V80Z" fill="#D4A574" fillOpacity="0.15" />
          {/* Main white wave */}
          <path d="M0 100L48 95C96 90 192 80 288 75C384 70 480 70 576 75C672 80 768 90 864 95C960 100 1056 100 1152 95C1248 90 1344 80 1392 75L1440 70V140H1392C1344 140 1248 140 1152 140C1056 140 960 140 864 140C768 140 672 140 576 140C480 140 384 140 288 140C192 140 96 140 48 140H0V100Z" fill="rgb(248 250 252)" />
        </svg>
      </div>
    </div>
  );
}
