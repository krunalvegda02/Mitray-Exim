"use client";
import { COUNTRIES } from "@/data/countries";

export function ExportCountries() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .scroll-left { animation: scroll-left 60s linear infinite; }
          .scroll-right { animation: scroll-right 60s linear infinite; }
        `
      }} />

      <section className="relative overflow-hidden">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 bg-gradient-to-r from-brand-gold/10 to-brand-navy/10 rounded-full mb-3 sm:mb-4 border border-brand-gold/20">
            <svg className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs sm:text-sm font-bold text-brand-navy">Global Reach</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-2 sm:mb-3 px-4">
            Trusted Across International Markets
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto px-4">
            Delivering premium agricultural products to leading importers worldwide
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12">
          <div className="group relative bg-gradient-to-br from-white to-slate-50 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-slate-200 hover:border-brand-gold text-center transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent rounded-lg sm:rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-brand-gold/20 to-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-md border border-brand-gold/20">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy mb-1">45+</p>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium">Countries Served</p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-white to-slate-50 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-slate-200 hover:border-brand-gold text-center transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent rounded-lg sm:rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-brand-navy/20 to-brand-navy/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-md border border-brand-navy/20">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy mb-1">500+</p>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium">Annual Shipments</p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-white to-slate-50 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-slate-200 hover:border-brand-gold text-center transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent rounded-lg sm:rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-md border border-green-200">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy mb-1">100%</p>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium">Compliance Rate</p>
            </div>
          </div>
        </div>

        {/* Countries Carousel */}
        <div className="relative group bg-gradient-to-br from-white via-slate-50/50 to-white rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-slate-200 p-4 sm:p-6 md:p-8 shadow-lg overflow-hidden">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-navy/20 via-brand-gold/20 to-brand-navy/20 rounded-lg sm:rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition duration-700"></div>

          <div className="relative">
            {/* Row 1 - Scroll Left */}
            <div className="mb-6 sm:mb-8 md:mb-10 overflow-hidden">
              <div className="flex scroll-left">
                {[...COUNTRIES, ...COUNTRIES].map((country, index) => (
                  <div
                    key={`left-${index}`}
                    className="flex-shrink-0 group/card relative bg-gradient-to-br from-white to-slate-50 hover:from-slate-50 hover:to-white p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-slate-200 hover:border-brand-gold transition-all hover:shadow-lg text-center mx-2 sm:mx-3 md:mx-4 w-24 sm:w-32 md:w-40"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent rounded-lg sm:rounded-xl md:rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                    
                    <div className="relative">
                      <div className="relative w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-16 mb-2 sm:mb-3 mx-auto transform group-hover/card:scale-105 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-md transform translate-y-0.5 blur-sm opacity-30"></div>
                        <div className="relative w-full h-full rounded-md overflow-hidden shadow-lg border-2 border-white group-hover/card:border-brand-gold transition-all">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                          <img 
                            src={`https://flagcdn.com/w320/${country.code}.png`}
                            alt={country.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 pointer-events-none"></div>
                        </div>
                      </div>
                      <p className="font-bold text-brand-navy text-xs sm:text-sm md:text-base mb-0.5 group-hover/card:text-brand-gold transition-colors line-clamp-1">
                        {country.name}
                      </p>
                      <div className="flex items-center justify-center gap-1">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs text-green-600 font-semibold">Verified</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 - Scroll Right */}
            <div className="overflow-hidden">
              <div className="flex scroll-right">
                {[...COUNTRIES, ...COUNTRIES].map((country, index) => (
                  <div
                    key={`right-${index}`}
                    className="flex-shrink-0 group/card relative bg-gradient-to-br from-white to-slate-50 hover:from-slate-50 hover:to-white p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-slate-200 hover:border-brand-gold transition-all hover:shadow-lg text-center mx-2 sm:mx-3 md:mx-4 w-24 sm:w-32 md:w-40"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent rounded-lg sm:rounded-xl md:rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                    
                    <div className="relative">
                      <div className="relative w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-16 mb-2 sm:mb-3 mx-auto transform group-hover/card:scale-105 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-md transform translate-y-0.5 blur-sm opacity-30"></div>
                        <div className="relative w-full h-full rounded-md overflow-hidden shadow-lg border-2 border-white group-hover/card:border-brand-gold transition-all">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                          <img 
                            src={`https://flagcdn.com/w320/${country.code}.png`}
                            alt={country.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 pointer-events-none"></div>
                        </div>
                      </div>
                      <p className="font-bold text-brand-navy text-xs sm:text-sm md:text-base mb-0.5 group-hover/card:text-brand-gold transition-colors line-clamp-1">
                        {country.name}
                      </p>
                      <div className="flex items-center justify-center gap-1">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs text-green-600 font-semibold">Verified</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certification Badge */}
          <div className="mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 md:pt-8 border-t-2 border-slate-200">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border-2 border-green-200">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 font-bold text-center sm:text-left">
                All exports certified by APEDA, FSSAI & compliant with international standards
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
