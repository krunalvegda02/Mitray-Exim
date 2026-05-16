const reasons = [
  {
    number: "01",
    title: "Global Certifications",
    text: "Certified by APEDA & FSSAI, meeting the most stringent food safety and quality standards for global export.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    number: "02",
    title: "Advanced Cold Chain",
    text: "Precision temperature-controlled logistics ensuring your produce arrives as fresh as the day it was harvested.",
    gradient: "from-brand-navy to-brand-navy-light"
  },
  {
    number: "03",
    title: "Ethical Direct Sourcing",
    text: "Establishing direct partnerships with Indian farmers to ensure fair trade and the highest quality control.",
    gradient: "from-brand-gold to-brand-gold-dark"
  },
  {
    number: "04",
    title: "Strategic Pricing",
    text: "Optimized supply chain management allowing us to offer premium products at highly competitive market rates.",
    gradient: "from-emerald-500 to-teal-500"
  },
];

export function WhyChoose() {
  return (
    <section className="relative py-12">
      <div className="relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 bg-brand-gold/10 rounded-full mb-6 border border-brand-gold/20">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-[0.2em]">Our Edge</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6">
            The MITRAY <span className="text-gradient">Advantage</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">
            Combining tradition with technology to deliver India's finest agricultural treasures to the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white p-10 rounded-[2rem] border border-slate-100 hover:border-brand-gold/30 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col h-full"
            >
              {/* Number Background */}
              <span className="absolute top-6 right-8 text-6xl font-black text-slate-50 group-hover:text-brand-gold/10 transition-colors duration-500">
                {reason.number}
              </span>

              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-14 h-14 bg-gradient-to-br ${reason.gradient} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                   <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                   </svg>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-brand-navy group-hover:text-brand-gold transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  {reason.text}
                </p>

                {/* Bottom Accent */}
                <div className="mt-auto pt-6">
                   <div className="w-10 h-1 bg-slate-100 group-hover:w-full group-hover:bg-brand-gold transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

