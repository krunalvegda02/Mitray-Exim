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
    <div className="bg-white p-10 rounded-2xl border-2 border-slate-200 hover:border-brand-gold hover:shadow-2xl transition-all duration-300 h-full">
      <div className="flex items-center mb-8">
        <div className="w-14 h-14 bg-brand-navy/10 rounded-xl flex items-center justify-center mr-5">
          <svg className="w-7 h-7 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-brand-navy">Our Core Values</h3>
      </div>
      <div className="space-y-5">
        {values.map((value, index) => (
          <div 
            key={value.title} 
            className="flex items-start p-5 bg-slate-50 rounded-xl hover:bg-brand-gold/5 hover:shadow-md transition-all duration-300 group border border-transparent hover:border-brand-gold/20"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-5 text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-300 shadow-sm flex-shrink-0">
              {value.icon}
            </div>
            <div>
              <h4 className="font-bold text-brand-navy mb-2 text-lg">{value.title}</h4>
              <p className="text-base text-slate-600 leading-relaxed">{value.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
