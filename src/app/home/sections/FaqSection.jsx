export function FaqSection() {
  const faqs = [
    {
      q: "Which countries do you export to?",
      a: "We export to UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain, UK, USA, Maldives, Somalia, and other international markets.",
    },
    {
      q: "What is your typical lead time?",
      a: "Shipment from Indian ports to Gulf countries takes 15-20 days, Europe/UK 25-30 days, and USA 30-35 days depending on port and container type.",
    },
    {
      q: "What certifications do you have?",
      a: "We are certified by APEDA, FSSAI, IEC, and Spice Board India for international food exports.",
    },
  ];

  return (
    <section>
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-2 bg-brand-gold/10 rounded-full mb-4">
          <span className="text-sm font-semibold text-brand-navy-dark">FAQ</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Common questions about our export services
        </p>
      </div>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="group bg-white p-6 rounded-xl border-2 border-slate-200 hover:border-brand-gold transition-all hover:shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                <svg className="w-5 h-5 text-brand-gold group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-brand-navy mb-2">
                  {faq.q}
                </h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
