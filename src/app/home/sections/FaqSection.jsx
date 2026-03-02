"use client";

import { useState } from "react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

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
    {
      q: "Do you provide custom packaging?",
      a: "Yes, we offer customized packaging solutions tailored to your brand requirements and market specifications.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept LC (Letter of Credit), TT (Telegraphic Transfer), and other internationally recognized payment methods.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          Find answers to common questions about our export services
        </p>
      </div>

      <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group transition-colors hover:bg-slate-50"
              >
                <div className="flex items-center space-x-4 flex-1">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    openIndex === idx
                      ? "bg-brand-gold text-white"
                      : "bg-brand-gold/10 text-brand-gold"
                  }`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-brand-navy pr-4">
                    {faq.q}
                  </h3>
                </div>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === idx
                    ? "bg-brand-gold/10 rotate-180"
                    : "bg-slate-100 group-hover:bg-brand-gold/10"
                }`}>
                  <svg
                    className={`w-5 h-5 transition-colors ${
                      openIndex === idx ? "text-brand-gold" : "text-slate-600"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pl-[88px]">
                  <div className="pt-2 pb-4 border-t border-slate-100">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}
