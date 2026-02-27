export function CompanyIntro() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-12 md:p-16 border border-slate-200 shadow-lg">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-10">
          <div className="h-1 w-16 bg-brand-gold rounded"></div>
          <h2 className="text-3xl md:text-4xl font-bold mx-6 text-brand-navy">Company Overview</h2>
          <div className="h-1 w-16 bg-brand-gold rounded"></div>
        </div>
        <p className="text-slate-700 text-lg md:text-xl leading-relaxed mb-8 text-center">
          MITRAY EXIM is a leading agricultural export company based in India, specializing in the export of premium fresh vegetables, fruits, spices, rice, and wheat to international markets.
        </p>
        <p className="text-slate-700 text-lg md:text-xl leading-relaxed text-center mb-12">
          We focus on quality, compliance, and reliability to ensure smooth export operations for our international partners across Gulf countries, Middle East, Europe, and beyond.
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-brand-gold hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-4xl md:text-5xl font-bold text-brand-navy mb-2">2020</div>
            <div className="text-sm md:text-base text-slate-600 font-medium">Established</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-brand-gold hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-4xl md:text-5xl font-bold text-brand-navy mb-2">10+</div>
            <div className="text-sm md:text-base text-slate-600 font-medium">Countries</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-brand-gold hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-4xl md:text-5xl font-bold text-brand-navy mb-2">40+</div>
            <div className="text-sm md:text-base text-slate-600 font-medium">Products</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-brand-gold hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-4xl md:text-5xl font-bold text-brand-navy mb-2">100%</div>
            <div className="text-sm md:text-base text-slate-600 font-medium">Certified</div>
          </div>
        </div>
      </div>
    </section>
  );
}
