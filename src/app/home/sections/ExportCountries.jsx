import { COUNTRIES } from "@/data/countries";

export function ExportCountries() {
  return (
    <section>
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-2 bg-brand-gold/10 rounded-full mb-4">
          <span className="text-sm font-semibold text-brand-navy-dark">Global Reach</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
          Exporting to International Markets
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Serving clients across multiple countries with reliable export services
        </p>
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-transparent to-blue-50 rounded-2xl"></div>
        <div className="relative bg-white rounded-2xl border-2 border-slate-200 p-8 md:p-12">
          <div className="flex flex-wrap justify-center gap-4">
            {COUNTRIES.map((country) => (
              <div
                key={country.name}
                className="group relative px-6 py-4 bg-gradient-to-br from-white to-slate-50 rounded-xl border-2 border-slate-200 hover:border-brand-gold hover:shadow-lg transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
                <div className="relative flex items-center space-x-3">
                  <span className="text-3xl">{country.flag}</span>
                  <div className="text-left">
                    <p className="font-semibold text-brand-navy">{country.name}</p>
                    <p className="text-xs text-slate-500">{country.region}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
