export function VisionMission() {
  return (
    <div className="bg-white p-10 rounded-2xl border-2 border-slate-200 hover:border-brand-gold hover:shadow-2xl transition-all duration-300 h-full">
      <div className="flex items-center mb-8">
        <div className="w-14 h-14 bg-brand-gold/10 rounded-xl flex items-center justify-center mr-5">
          <svg className="w-7 h-7 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-brand-navy">Vision & Mission</h3>
      </div>
      <div className="space-y-8">
        <div className="pl-6 border-l-4 border-brand-gold py-2">
          <h4 className="font-bold text-brand-navy mb-3 text-xl">Vision</h4>
          <p className="text-slate-700 leading-relaxed text-lg">
            To be a trusted global supplier of Indian agricultural produce, recognized for quality, compliance, and reliability.
          </p>
        </div>
        <div className="pl-6 border-l-4 border-brand-navy py-2">
          <h4 className="font-bold text-brand-navy mb-3 text-xl">Mission</h4>
          <p className="text-slate-700 leading-relaxed text-lg">
            Deliver high-quality products with transparency, full compliance, and on-time delivery to international markets.
          </p>
        </div>
        <div className="pl-6 border-l-4 border-brand-gold py-2">
          <h4 className="font-bold text-brand-navy mb-3 text-xl">Target</h4>
          <p className="text-slate-700 leading-relaxed text-lg">
            To be a trusted global supplier of Indian agricultural produce, recognized for quality, compliance, and reliability.
          </p>
        </div>
      </div>
    </div>
  );
}
