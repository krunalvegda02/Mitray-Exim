"use client";
import { COUNTRIES } from "@/data/countries";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export function ExportCountries() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .animate-slide-left {
            animation: slideInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
          }
          .animate-slide-right {
            animation: slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
          }
        `
      }} />
    <section>
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-brand-gold/10 to-brand-navy/10 rounded-full mb-4 border border-brand-gold/20">
          <span className="text-sm font-bold text-brand-navy">Global Reach</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy mb-4 px-4">
          Trusted Across International Markets
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-4">
          Delivering premium agricultural products to leading importers worldwide
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
        <div className="group relative bg-gradient-to-br from-white to-slate-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl border-2 border-slate-200 hover:border-brand-gold text-center transition-all hover:shadow-xl hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-gold/20 to-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md border border-brand-gold/20 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-3xl sm:text-4xl font-bold text-brand-navy mb-2">
              <AnimatedCounter end={10} suffix="+" />
            </p>
            <p className="text-sm sm:text-base text-slate-600 font-medium">Export Countries</p>
          </div>
        </div>

        <div className="group relative bg-gradient-to-br from-white to-slate-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl border-2 border-slate-200 hover:border-brand-gold text-center transition-all hover:shadow-xl hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-navy/20 to-brand-navy/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md border border-brand-navy/20 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <p className="text-3xl sm:text-4xl font-bold text-brand-navy mb-2">
              <AnimatedCounter end={500} suffix="+" />
            </p>
            <p className="text-sm sm:text-base text-slate-600 font-medium">Annual Shipments</p>
          </div>
        </div>

        <div className="group relative bg-gradient-to-br from-white to-slate-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl border-2 border-slate-200 hover:border-brand-gold text-center transition-all hover:shadow-xl hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md border border-green-200 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-3xl sm:text-4xl font-bold text-brand-navy mb-2">
              <AnimatedCounter end={100} suffix="%" />
            </p>
            <p className="text-sm sm:text-base text-slate-600 font-medium">Compliance Rate</p>
          </div>
        </div>
      </div>

      {/* Countries Section */}
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-navy/20 via-brand-gold/20 to-brand-navy/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition duration-700"></div>
        
        <div className="relative bg-gradient-to-br from-white via-slate-50/50 to-white rounded-2xl sm:rounded-3xl border-2 border-slate-200 p-6 sm:p-8 md:p-10 shadow-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
            {COUNTRIES.map((country, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={country.name}
                  className={`group/card relative bg-gradient-to-br from-white to-slate-50 hover:from-slate-50 hover:to-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border-2 border-slate-200 hover:border-brand-gold transition-all hover:shadow-xl text-center ${isEven ? 'animate-slide-left' : 'animate-slide-right'}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                  
                  <div className="relative">
                    <div className="relative w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-20 mb-3 sm:mb-4 mx-auto transform group-hover/card:scale-105 transition-all duration-300">
                      {/* Flag Container with 3D effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg transform translate-y-1 blur-sm opacity-30"></div>
                      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl border-2 border-white group-hover/card:border-brand-gold transition-all">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                        <img 
                          src={`https://flagcdn.com/w320/${country.code}.png`}
                          srcSet={`https://flagcdn.com/w320/${country.code}.png 2x`}
                          alt={`${country.name} flag`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        {/* Glossy overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 pointer-events-none"></div>
                        {/* Reflection effect */}
                        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/30 to-transparent pointer-events-none"></div>
                      </div>
                    </div>
                    <p className="font-bold text-brand-navy text-xs sm:text-sm md:text-base mb-1 group-hover/card:text-brand-gold transition-colors">
                      {country.name}
                    </p>
                    <p className="text-xs text-slate-500 font-medium">{country.region}</p>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-xl sm:rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover/card:translate-x-[200%] transition-transform duration-1000"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Certification Badge */}
          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t-2 border-slate-200">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 p-4 sm:p-5 rounded-xl border-2 border-green-200">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 font-bold text-center sm:text-left">
                All exports certified by APEDA, FSSAI & compliant with international standards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
