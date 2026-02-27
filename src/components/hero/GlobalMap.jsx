import { COUNTRIES } from "@/data/countries";

export function GlobalMap() {
  return (
    <div className="bg-slate-50 p-8 rounded-lg border-2 border-slate-200">
      <h3 className="text-xl font-semibold text-brand-navy mb-6 text-center">
        Our Global Reach
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        {COUNTRIES.map((country) => (
          <div
            key={country.name}
            className="px-4 py-2 bg-white border-2 border-slate-300 rounded-lg hover:border-blue-900 transition-colors"
          >
            <span className="text-brand-navy font-medium">
              {country.flag} {country.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
