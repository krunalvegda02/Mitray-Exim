export function Infrastructure() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-white p-10 rounded-2xl border-2 border-slate-200 hover:border-brand-gold hover:shadow-2xl transition-all duration-300 h-full">
      <div className="flex items-center mb-8">
        <div className="w-14 h-14 bg-brand-gold/10 rounded-xl flex items-center justify-center mr-5">
          <svg className="w-7 h-7 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-brand-navy">Infrastructure</h3>
      </div>
      <p className="text-slate-700 leading-relaxed mb-8 text-lg">
        We have established partnerships with cold storage facilities, modern packhouses, and reliable logistics partners to ensure products are handled correctly from farm to port.
      </p>
      <ul className="space-y-4">
        <li className="flex items-start group">
          <div className="w-7 h-7 bg-brand-gold rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 shadow-md">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
          </div>
          <span className="text-slate-700 group-hover:text-brand-navy transition-colors duration-300 text-base leading-relaxed">Temperature-controlled cold storage facilities</span>
        </li>
        <li className="flex items-start group">
          <div className="w-7 h-7 bg-brand-gold rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 shadow-md">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
          </div>
          <span className="text-slate-700 group-hover:text-brand-navy transition-colors duration-300 text-base leading-relaxed">Modern packaging and grading units</span>
        </li>
        <li className="flex items-start group">
          <div className="w-7 h-7 bg-brand-gold rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 shadow-md">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
          </div>
          <span className="text-slate-700 group-hover:text-brand-navy transition-colors duration-300 text-base leading-relaxed">Strategic partnerships with shipping lines</span>
        </li>
      </ul>
    </div>
  );
}
