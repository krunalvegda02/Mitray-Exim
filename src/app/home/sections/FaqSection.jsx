"use client";

import { useState } from "react";
import { FiHelpCircle, FiChevronDown, FiBookOpen, FiShield, FiActivity, FiZap } from "react-icons/fi";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Which countries do you export to?",
      a: "Our network spans the core global trade corridors including UAE, Saudi Arabia, Qatar, Oman, Kuwait, UK, USA, and major European markets. We maintain a high-speed logistics grid connecting Indian hubs to over 14 international ports.",
    },
    {
      q: "What is your typical lead time?",
      a: "Transit times are optimized by region: Gulf (15-20 days), UK/Europe (25-30 days), and North America (30-35 days). Every shipment is monitored via our 24/7 telemetry for real-time compliance and delivery tracking.",
    },
    {
      q: "What certifications do you have?",
      a: "MITRAY EXIM maintains a 100% verified compliance manifest. Our active certifications include APEDA, FSSAI, IEC, and Spice Board India, ensuring institutional-grade food safety and trade hygiene.",
    },
    {
      q: "Do you provide custom packaging?",
      a: "We offer tailored 'Institutional Manifest' packaging. Our solutions are engineered to meet specific market regulations while preserving product integrity across varied global climates and cold-chain transitions.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We facilitate secure global transactions via LC (Letter of Credit), TT (Telegraphic Transfer), and other internationally recognized institutional payment protocols to ensure financial stability and trust.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      
      {/* INSTITUTIONAL BACKGROUND ACCENTS */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-navy/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        
        {/* HEADER ARCHITECTURE */}
        <div className="max-w-4xl mb-20 md:mb-32 animate-reveal">
           <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-brand-gold"></div>
              <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.5em]">Operations Wiki v2.4</span>
           </div>
           <h2 className="text-5xl md:text-9xl font-black text-brand-navy mb-8 tracking-tighter leading-[0.85]">
              COMMON <br />
              <span className="text-gradient">QUERIES.</span>
           </h2>
           <p className="text-slate-400 text-lg md:text-xl font-medium max-w-xl leading-relaxed uppercase tracking-tight opacity-70">
              Institutional grade insights into our global agricultural export architecture and compliance protocols.
           </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`relative group animate-reveal`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* ACCORDION TERMINAL */}
              <div className={`relative glass-card rounded-[2rem] md:rounded-[3rem] overflow-hidden transition-all duration-700 ${
                openIndex === idx ? 'bg-white shadow-[0_40px_80px_-20px_rgba(44,74,94,0.1)] border-brand-gold/20' : 'bg-slate-50/50 hover:bg-white border-transparent'
              }`}>
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-8 py-8 md:px-12 md:py-10 flex items-center justify-between text-left transition-all"
                >
                  <div className="flex items-center gap-6 md:gap-12 flex-1">
                    <div className={`shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl flex items-center justify-center transition-all duration-700 ${
                      openIndex === idx
                        ? "bg-brand-navy text-brand-gold shadow-xl rotate-12"
                        : "bg-white text-slate-300 group-hover:bg-brand-gold/10 group-hover:text-brand-gold"
                    }`}>
                      <FiShield className="text-xl md:text-2xl" />
                    </div>
                    <h3 className={`text-sm md:text-2xl font-black uppercase tracking-tighter transition-colors duration-500 ${
                      openIndex === idx ? 'text-brand-navy' : 'text-slate-400 group-hover:text-brand-navy'
                    }`}>
                      {faq.q}
                    </h3>
                  </div>
                  
                  <div className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border transition-all duration-700 ${
                    openIndex === idx
                      ? "bg-brand-gold border-brand-gold text-brand-navy rotate-180"
                      : "bg-white border-slate-100 text-slate-300 group-hover:border-brand-gold/30 group-hover:text-brand-gold"
                  }`}>
                    <FiChevronDown className="text-lg md:text-xl" />
                  </div>
                </button>

                {/* CONTENT SECTOR */}
                <div
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${
                    openIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-10 md:px-12 md:pb-12 md:pl-[144px]">
                    <div className="pt-8 border-t border-slate-100">
                      <p className="text-slate-500 text-xs md:text-lg font-bold uppercase tracking-widest leading-relaxed opacity-60">
                        {faq.a}
                      </p>
                      
                      {/* INSTITUTIONAL METADATA */}
                      <div className="mt-8 flex flex-wrap gap-4">
                         <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg text-[8px] font-black text-slate-400 uppercase tracking-widest">
                            <FiActivity className="text-brand-gold" /> Verified Ops
                         </div>
                         <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg text-[8px] font-black text-slate-400 uppercase tracking-widest">
                            <FiZap className="text-brand-gold" /> Real-time Intel
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ FOOTER */}
        <div className="mt-24 text-center animate-reveal delay-500">
           <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-6">Need more detailed intelligence?</p>
           <button className="px-10 py-5 bg-brand-navy text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-gold hover:text-brand-navy transition-all duration-500 shadow-xl">
              Access Full Wiki Manifest
           </button>
        </div>
      </div>
    </section>
  );
}
