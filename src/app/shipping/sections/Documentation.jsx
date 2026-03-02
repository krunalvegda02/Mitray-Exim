export function Documentation() {
  const docs = [
    { 
      name: "Commercial Invoice", 
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    },
    { 
      name: "Packing List", 
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
    },
    { 
      name: "Bill of Lading", 
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    },
    { 
      name: "Certificate of Origin", 
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
    },
    { 
      name: "Phytosanitary Certificate", 
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0121 12c0 .34-.028.675-.083 1M3 12a9 9 0 0118 0 9 9 0 01-18 0z" /></svg>
    },
    { 
      name: "FSSAI/APEDA Compliance", 
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
  ];

  return (
    <div className="group relative h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-200 to-pink-200 rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
      
      <div className="relative h-full bg-gradient-to-br from-white via-purple-50/50 to-slate-50 p-6 rounded-2xl border-2 border-slate-200 hover:border-purple-300 transition-all hover:shadow-xl flex flex-col">
        <div className="flex items-start mb-4">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md border border-purple-200">
            <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="ml-4 flex-1">
            <h2 className="text-xl font-bold text-brand-navy mb-2">Export Documentation</h2>
            <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full border border-purple-200">
              <span className="text-xs font-bold text-purple-700">Complete Support</span>
            </div>
          </div>
        </div>
        
        <p className="text-slate-700 leading-relaxed mb-4">
          We handle all export documentation to ensure smooth customs clearance and compliance with international regulations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-grow">
          {docs.map((doc) => (
            <div key={doc.name} className="flex items-center bg-gradient-to-r from-slate-50 to-purple-50/30 p-3 rounded-lg border border-slate-200 hover:border-purple-200 transition-colors">
              <div className="text-purple-600 mr-3 flex-shrink-0">{doc.icon}</div>
              <span className="text-sm font-medium text-slate-700">{doc.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
