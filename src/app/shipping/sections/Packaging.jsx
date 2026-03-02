export function Packaging() {
  const standards = [
    { label: "Material", value: "Food Grade" },
    { label: "Certification", value: "ISO Compliant" },
    { label: "Durability", value: "Export Quality" },
  ];

  return (
    <div className="group relative h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
      
      <div className="relative h-full bg-gradient-to-br from-white via-emerald-50/50 to-slate-50 p-6 rounded-2xl border-2 border-slate-200 hover:border-emerald-300 transition-all hover:shadow-xl flex flex-col">
        <div className="flex items-start mb-4">
          <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md border border-emerald-200">
            <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <div className="ml-4 flex-1">
            <h2 className="text-xl font-bold text-brand-navy mb-2">Packaging Standards</h2>
            <div className="inline-block px-3 py-1 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-full border border-emerald-200">
              <span className="text-xs font-bold text-emerald-700">Export Compliant</span>
            </div>
          </div>
        </div>
        
        <p className="text-slate-700 leading-relaxed mb-4 flex-grow">
          We use food-grade packaging and export-compliant cartons to ensure that vegetables, fruits, spices, and dehydrated products remain safe during international transit.
        </p>

        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200">
          {standards.map((standard) => (
            <div key={standard.label} className="text-center">
              <p className="text-xs text-slate-500 mb-1">{standard.label}</p>
              <p className="text-sm font-bold text-brand-navy">{standard.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
