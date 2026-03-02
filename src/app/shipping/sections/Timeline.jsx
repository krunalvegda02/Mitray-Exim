export function Timeline() {
  const routes = [
    { 
      region: "Gulf Countries", 
      countries: "UAE, Qatar, Oman, Saudi Arabia", 
      days: "15-20", 
      unit: "days",
      color: "from-orange-100 to-amber-100", 
      textColor: "text-orange-700",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    { 
      region: "Europe & UK", 
      countries: "United Kingdom, Europe", 
      days: "25-30", 
      unit: "days",
      color: "from-blue-100 to-indigo-100", 
      textColor: "text-blue-700",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    { 
      region: "USA", 
      countries: "United States of America", 
      days: "30-35", 
      unit: "days",
      color: "from-purple-100 to-pink-100", 
      textColor: "text-purple-700",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-white via-slate-50/50 to-white p-8 rounded-2xl border-2 border-slate-200 shadow-xl">
      <div className="text-center mb-10">
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-brand-gold/10 to-orange-100/50 rounded-full mb-4 border border-brand-gold/20">
          <span className="text-sm font-bold text-brand-navy">Delivery Timeline</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-2">
          Shipment from Indian Ports
        </h2>
        <p className="text-slate-600">
          Typical delivery times to international destinations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {routes.map((route) => (
          <div key={route.region} className="group relative">
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${route.color} rounded-xl opacity-0 group-hover:opacity-40 blur transition duration-500`}></div>
            
            <div className="relative bg-white p-6 rounded-xl border-2 border-slate-200 hover:border-brand-gold transition-all hover:shadow-lg h-full flex flex-col">
              <div className="flex items-center justify-center mb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${route.color} rounded-xl flex items-center justify-center border-2 border-slate-200`}>
                  <div className={route.textColor}>{route.icon}</div>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-brand-navy mb-2 text-center">{route.region}</h3>
              <p className="text-xs text-slate-500 mb-4 text-center flex-grow">{route.countries}</p>
              
              <div className={`bg-gradient-to-r ${route.color} p-4 rounded-lg text-center border border-slate-200`}>
                <div className="flex items-baseline justify-center">
                  <p className={`text-3xl font-bold ${route.textColor}`}>{route.days}</p>
                  <p className={`text-sm font-semibold ${route.textColor} ml-2`}>{route.unit}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-8 pt-6 border-t border-slate-200">
        <div className="flex items-center">
          <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-semibold text-slate-700">Real-time Tracking</span>
        </div>
        <div className="flex items-center">
          <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-semibold text-slate-700">Fully Insured</span>
        </div>
      </div>
    </div>
  );
}
