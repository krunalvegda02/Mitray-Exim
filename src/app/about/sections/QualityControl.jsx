export function QualityControl() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-white p-10 rounded-2xl border-2 border-slate-200 hover:border-brand-gold hover:shadow-2xl transition-all duration-300 h-full">
      <div className="flex items-center mb-8">
        <div className="w-14 h-14 bg-brand-navy/10 rounded-xl flex items-center justify-center mr-5">
          <svg className="w-7 h-7 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-brand-navy">Quality Control</h3>
      </div>
      <p className="text-slate-700 leading-relaxed mb-8 text-lg">
        Our products are rigorously inspected and graded before export, complying with APEDA, FSSAI, and customer-specific requirements.
      </p>
      <ul className="space-y-4">
        <li className="flex items-start group">
          <div className="w-7 h-7 bg-brand-navy rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 shadow-md">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
          </div>
          <span className="text-slate-700 group-hover:text-brand-navy transition-colors duration-300 text-base leading-relaxed">Pre-shipment quality inspection</span>
        </li>
        <li className="flex items-start group">
          <div className="w-7 h-7 bg-brand-navy rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 shadow-md">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
          </div>
          <span className="text-slate-700 group-hover:text-brand-navy transition-colors duration-300 text-base leading-relaxed">Phytosanitary certification</span>
        </li>
        <li className="flex items-start group">
          <div className="w-7 h-7 bg-brand-navy rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 shadow-md">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
          </div>
          <span className="text-slate-700 group-hover:text-brand-navy transition-colors duration-300 text-base leading-relaxed">Full traceability documentation</span>
        </li>
      </ul>
    </div>
  );
}
