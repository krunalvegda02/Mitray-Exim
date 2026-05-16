"use client";

import { useState } from "react";
import { FiHelpCircle, FiChevronDown, FiBookOpen } from "react-icons/fi";

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
    <section className="relative py-12">
      <div className="max-w-4xl mx-auto">
        
        {/* STANDARDIZED HEADER */}
        <div className="text-center mb-16 animate-reveal">
          <div className="inline-flex items-center px-5 py-2 bg-brand-gold/10 rounded-full mb-6 border border-brand-gold/20 backdrop-blur-md">
            <FiBookOpen className="text-brand-gold mr-2" />
            <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.4em]">Operations Wiki</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-brand-navy mb-8 tracking-tighter leading-none">
            Common <span className="text-gradient">Queries</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium opacity-80 uppercase tracking-tight">
            Comprehensive insights into our global agricultural export architecture.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-[1.5rem] md:rounded-[2rem] overflow-hidden transition-all duration-500 ${openIndex === idx ? 'bg-white/80 scale-[1.01] shadow-2xl' : 'hover:scale-[1.005]'}`}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full px-6 py-6 md:px-10 md:py-8 flex items-center justify-between text-left group transition-all"
              >
                <div className="flex items-center gap-6 md:gap-10 flex-1">
                  <div className={`shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    openIndex === idx
                      ? "bg-brand-navy text-brand-gold rotate-12"
                      : "bg-slate-50 text-slate-300 group-hover:bg-brand-gold/10 group-hover:text-brand-gold"
                  }`}>
                    <FiHelpCircle className="text-xl md:text-2xl" />
                  </div>
                  <h3 className={`text-base md:text-xl font-black uppercase tracking-tight transition-colors duration-300 ${openIndex === idx ? 'text-brand-navy' : 'text-slate-500'}`}>
                    {faq.q}
                  </h3>
                </div>
                <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                  openIndex === idx
                    ? "bg-brand-gold text-brand-navy rotate-180"
                    : "bg-slate-50 group-hover:bg-brand-gold/10 text-slate-300"
                }`}>
                  <FiChevronDown className="text-lg md:text-xl" />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  openIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-8 md:px-10 md:pb-10 md:pl-[120px]">
                  <div className="pt-6 border-t border-slate-100/50">
                    <p className="text-slate-500 text-sm md:text-base font-bold uppercase tracking-widest leading-relaxed opacity-70">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
