const reasons = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "APEDA & FSSAI Certified",
    text: "Export-compliant certifications ensuring quality and safety standards for international markets.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Cold Chain Logistics",
    text: "Temperature-controlled containers and cold storage for fresh produce.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: "Direct Sourcing",
    text: "Direct from Indian farms to your warehouse with minimal handling.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Competitive Pricing",
    text: "Bulk export pricing without compromising on quality.",
  },
];

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative Images */}
      <div className="absolute left-0 top-1/4 w-64 h-64 opacity-5 hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1000&auto=format&fit=crop" 
          alt="Quality certification"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="absolute right-0 bottom-1/4 w-72 h-72 opacity-5 hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=1000&auto=format&fit=crop" 
          alt="Logistics"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <div className="relative">
        <div className="text-center mb-12">
        <div className="inline-block px-4 py-2 bg-brand-gold/10 rounded-full mb-4">
          <span className="text-sm font-semibold text-brand-navy-dark">Why Choose Us</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
          Why Choose MITRAY EXIM
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Your trusted partner for premium agricultural exports from India
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="group relative bg-white p-8 rounded-xl border-2 border-slate-200 hover:border-brand-gold transition-all hover:shadow-xl"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center text-brand-gold mb-4 group-hover:bg-brand-gold group-hover:text-white transition-colors">
                {reason.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-brand-navy">
                {reason.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">{reason.text}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
