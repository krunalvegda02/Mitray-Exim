import { COUNTRIES } from "@/data/countries";

export function GlobalPresence() {
  return (
    <div className="bg-gradient-to-br from-brand-navy-dark to-brand-navy p-12 md:p-16 rounded-3xl text-white shadow-2xl">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block w-20 h-20 bg-brand-gold/20 rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-20 h-19 text-brand-gold justify-center" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Global Export Presence</h3>
          <p className="text-brand-gold-light text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Serving international markets with a growing network of distributors and retailers across multiple continents
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {COUNTRIES.map((country, index) => (
            <div 
              key={country.name} 
              className="px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl text-white hover:bg-brand-gold hover:border-brand-gold transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span className="text-base md:text-lg font-semibold">{country.flag} {country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
