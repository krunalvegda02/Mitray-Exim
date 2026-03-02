export function CompanyIntro() {
  return (
    <section className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold/20 via-brand-navy/20 to-brand-gold/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
      
      <div className="relative bg-gradient-to-br from-white via-slate-50/50 to-white rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 border-2 border-slate-200 shadow-xl">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8 md:mb-10">
            <div className="h-1 w-8 sm:w-12 md:w-16 bg-brand-gold rounded"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mx-3 sm:mx-4 md:mx-6 text-brand-navy text-center">Company Overview</h2>
            <div className="h-1 w-8 sm:w-12 md:w-16 bg-brand-gold rounded"></div>
          </div>
          <p className="text-slate-700 text-base sm:text-lg md:text-xl leading-relaxed mb-6 md:mb-8 text-center px-2">
            MITRAY EXIM is a leading agricultural export company based in India, specializing in the export of premium fresh vegetables, fruits, spices, rice, and wheat to international markets.
          </p>
          <p className="text-slate-700 text-base sm:text-lg md:text-xl leading-relaxed text-center mb-8 md:mb-12 px-2">
            We focus on quality, compliance, and reliability to ensure smooth export operations for our international partners across Gulf countries, Middle East, Europe, and beyond.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            <div className="text-center p-4 sm:p-5 md:p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-brand-gold hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-1 md:mb-2">2020</div>
              <div className="text-xs sm:text-sm md:text-base text-slate-600 font-medium">Established</div>
            </div>
            <div className="text-center p-4 sm:p-5 md:p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-brand-gold hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-1 md:mb-2">10+</div>
              <div className="text-xs sm:text-sm md:text-base text-slate-600 font-medium">Countries</div>
            </div>
            <div className="text-center p-4 sm:p-5 md:p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-brand-gold hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-1 md:mb-2">40+</div>
              <div className="text-xs sm:text-sm md:text-base text-slate-600 font-medium">Products</div>
            </div>
            <div className="text-center p-4 sm:p-5 md:p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-brand-gold hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-1 md:mb-2">100%</div>
              <div className="text-xs sm:text-sm md:text-base text-slate-600 font-medium">Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
