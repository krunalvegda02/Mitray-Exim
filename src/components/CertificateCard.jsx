"use client";

export function CertificateCard({ cert }) {
  return (
    <div className="group relative h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-gold/30 to-brand-navy/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
      
      <div className="relative h-full bg-white rounded-xl sm:rounded-2xl border-2 border-slate-200 overflow-hidden hover:border-brand-gold transition-all hover:shadow-2xl flex flex-col">
        <div className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 sm:p-6 h-64 sm:h-72 md:h-80 flex items-center justify-center border-b-2 border-slate-200">
          <img
            src={cert.logo}
            alt={cert.fullName}
            className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hidden flex-col items-center justify-center text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-gold/20 to-brand-gold/10 rounded-full flex items-center justify-center mb-4 shadow-lg border border-brand-gold/20">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0121 12c0 .34-.028.675-.083 1M3 12a9 9 0 0118 0 9 9 0 01-18 0z" />
              </svg>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-brand-navy">{cert.name}</p>
          </div>
        </div>
        <div className="p-4 sm:p-5 md:p-6 flex-grow bg-gradient-to-br from-white to-slate-50/30">
          <h2 className="text-lg sm:text-xl font-bold text-brand-navy mb-2">
            {cert.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium mb-2 sm:mb-3">{cert.fullName}</p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{cert.description}</p>
        </div>
      </div>
    </div>
  );
}
