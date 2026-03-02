export function VisionMission() {
  return (
    <div className="group relative h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-gold/30 to-brand-navy/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
      
      <div className="relative h-full bg-gradient-to-br from-white via-brand-gold/5 to-white p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-slate-200 hover:border-brand-gold hover:shadow-2xl transition-all">
        <div className="flex items-center mb-6 md:mb-8">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-brand-gold/20 to-brand-gold/10 rounded-xl flex items-center justify-center mr-3 sm:mr-5 shadow-md border border-brand-gold/20">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-navy">Vision & Mission</h3>
        </div>
        <div className="space-y-5 sm:space-y-6 md:space-y-8">
          <div className="pl-4 sm:pl-6 border-l-4 border-brand-gold py-2 bg-gradient-to-r from-brand-gold/5 to-transparent rounded-r-lg">
            <h4 className="font-bold text-brand-navy mb-2 md:mb-3 text-lg sm:text-xl">Vision</h4>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base md:text-lg">
              To be a trusted global supplier of Indian agricultural produce, recognized for quality, compliance, and reliability.
            </p>
          </div>
          <div className="pl-4 sm:pl-6 border-l-4 border-brand-navy py-2 bg-gradient-to-r from-brand-navy/5 to-transparent rounded-r-lg">
            <h4 className="font-bold text-brand-navy mb-2 md:mb-3 text-lg sm:text-xl">Mission</h4>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base md:text-lg">
              Deliver high-quality products with transparency, full compliance, and on-time delivery to international markets.
            </p>
          </div>
          <div className="pl-4 sm:pl-6 border-l-4 border-brand-gold py-2 bg-gradient-to-r from-brand-gold/5 to-transparent rounded-r-lg">
            <h4 className="font-bold text-brand-navy mb-2 md:mb-3 text-lg sm:text-xl">Target</h4>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base md:text-lg">
              To be a trusted global supplier of Indian agricultural produce, recognized for quality, compliance, and reliability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
