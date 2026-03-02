export function Values() {
  const values = [
    { 
      title: "Quality First", 
      desc: "Rigorous quality control at every stage",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    { 
      title: "Compliance", 
      desc: "Full adherence to international standards",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    },
    { 
      title: "Transparency", 
      desc: "Clear communication and documentation",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
    },
    { 
      title: "Reliability", 
      desc: "Consistent supply and timely delivery",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
  ];

  return (
    <div className="group relative h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-navy/30 to-purple-300/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
      
      <div className="relative h-full bg-gradient-to-br from-white via-brand-navy/5 to-white p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-slate-200 hover:border-brand-gold hover:shadow-2xl transition-all">
        <div className="flex items-center mb-6 md:mb-8">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-brand-navy/20 to-brand-navy/10 rounded-xl flex items-center justify-center mr-3 sm:mr-5 shadow-md border border-brand-navy/20">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-navy">Our Core Values</h3>
        </div>
        <div className="space-y-3 sm:space-y-4 md:space-y-5">
          {values.map((value) => (
            <div key={value.title} className="flex items-start p-3 sm:p-4 md:p-5 bg-gradient-to-r from-slate-50 to-white rounded-xl hover:from-brand-gold/10 hover:to-brand-gold/5 hover:shadow-md transition-all group/item border border-slate-100 hover:border-brand-gold/30">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center mr-3 sm:mr-4 md:mr-5 text-brand-gold group-hover/item:bg-brand-gold group-hover/item:text-white transition-all shadow-sm flex-shrink-0">
                {value.icon}
              </div>
              <div>
                <h4 className="font-bold text-brand-navy mb-1 sm:mb-2 text-base sm:text-lg">{value.title}</h4>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
