import { COUNTRIES } from "@/data/countries";

export function ExportCountries() {
  return (
    <section>
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-2 bg-brand-gold/10 rounded-full mb-4">
          <span className="text-sm font-semibold text-brand-navy-dark">Global Reach</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
          Trusted Across International Markets
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Delivering premium agricultural products to leading importers worldwide
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl border-2 border-slate-200 text-center">
          <div className="w-14 h-14 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-7 h-7 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-brand-navy mb-1">10+</p>
          <p className="text-sm text-slate-600 font-medium">Export Countries</p>
        </div>

        <div className="bg-white p-6 rounded-xl border-2 border-slate-200 text-center">
          <div className="w-14 h-14 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-7 h-7 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-brand-navy mb-1">500+</p>
          <p className="text-sm text-slate-600 font-medium">Annual Shipments</p>
        </div>

        <div className="bg-white p-6 rounded-xl border-2 border-slate-200 text-center">
          <div className="w-14 h-14 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-7 h-7 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-3xl font-bold text-brand-navy mb-1">100%</p>
          <p className="text-sm text-slate-600 font-medium">Compliance Rate</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 md:p-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {COUNTRIES.map((country) => (
            <div
              key={country.name}
              className="group relative bg-slate-50 hover:bg-white p-5 rounded-xl border border-slate-200 hover:border-brand-gold transition-all hover:shadow-md text-center"
            >
              <div className="text-5xl mb-3">{country.flag}</div>
              <p className="font-semibold text-brand-navy text-sm mb-1">{country.name}</p>
              <p className="text-xs text-slate-500">{country.region}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-center">
          <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <p className="text-sm text-slate-700 font-medium">
            All exports certified by APEDA, FSSAI & compliant with international standards
          </p>
        </div>
      </div>
    </section>
  );
}
