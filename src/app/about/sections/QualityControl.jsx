export function QualityControl() {
  return (
    <div className="group relative h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-navy/20 to-blue-300/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
      
      <div className="relative h-full bg-gradient-to-br from-white via-brand-navy/5 to-slate-50 p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-slate-200 hover:border-brand-gold hover:shadow-2xl transition-all">
        <div className="flex items-center mb-6 md:mb-8">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-brand-navy/20 to-brand-navy/10 rounded-xl flex items-center justify-center mr-3 sm:mr-5 shadow-md border border-brand-navy/20">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-navy">Quality Control</h3>
        </div>
        <p className="text-slate-700 leading-relaxed mb-6 md:mb-8 text-sm sm:text-base md:text-lg">
          Our products are rigorously inspected and graded before export, complying with APEDA, FSSAI, and customer-specific requirements.
        </p>
        <ul className="space-y-3 sm:space-y-4">
          <li className="flex items-start group/item">
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-brand-navy rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-0.5 flex-shrink-0 shadow-md group-hover/item:scale-110 transition-transform">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </div>
            <span className="text-slate-700 group-hover/item:text-brand-navy transition-colors text-sm sm:text-base leading-relaxed">Pre-shipment quality inspection</span>
          </li>
          <li className="flex items-start group/item">
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-brand-navy rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-0.5 flex-shrink-0 shadow-md group-hover/item:scale-110 transition-transform">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </div>
            <span className="text-slate-700 group-hover/item:text-brand-navy transition-colors text-sm sm:text-base leading-relaxed">Phytosanitary certification</span>
          </li>
          <li className="flex items-start group/item">
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-brand-navy rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-0.5 flex-shrink-0 shadow-md group-hover/item:scale-110 transition-transform">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </div>
            <span className="text-slate-700 group-hover/item:text-brand-navy transition-colors text-sm sm:text-base leading-relaxed">Full traceability documentation</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
