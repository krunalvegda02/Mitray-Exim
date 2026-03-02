export function ColdStorage() {
  const features = [
    { label: "Temperature Range", value: "2°C to 8°C" },
    { label: "Storage Capacity", value: "500+ Tons" },
    { label: "Monitoring", value: "24/7 Real-time" },
  ];

  return (
    <div className="group relative h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
      
      <div className="relative h-full bg-gradient-to-br from-white via-blue-50/50 to-slate-50 p-6 rounded-2xl border-2 border-slate-200 hover:border-blue-300 transition-all hover:shadow-xl flex flex-col">
        <div className="flex items-start mb-4">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md border border-blue-200">
            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
          <div className="ml-4 flex-1">
            <h2 className="text-xl font-bold text-brand-navy mb-2">Cold Storage Facilities</h2>
            <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-200">
              <span className="text-xs font-bold text-blue-700">Temperature Controlled</span>
            </div>
          </div>
        </div>
        
        <p className="text-slate-700 leading-relaxed mb-4 flex-grow">
          Our products are stored in state-of-the-art temperature-controlled cold storage facilities before export to maintain freshness and extend shelf life for international transit.
        </p>

        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200">
          {features.map((feature) => (
            <div key={feature.label} className="text-center">
              <p className="text-xs text-slate-500 mb-1">{feature.label}</p>
              <p className="text-sm font-bold text-brand-navy">{feature.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
