import { CERTIFICATIONS } from "@/data/certifications";

export function Certifications() {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
          Certified & Compliant
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Fully certified and compliant with international export standards
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.id}
            className="group bg-white p-8 rounded-xl border-2 border-slate-200 hover:border-brand-gold text-center transition-all hover:shadow-xl"
          >
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center group-hover:from-brand-gold group-hover:to-brand-gold-dark transition-all">
              <span className="text-2xl font-bold text-brand-gold group-hover:text-white transition-colors">{cert.name}</span>
            </div>
            <h3 className="font-semibold text-brand-navy mb-2">{cert.name}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
