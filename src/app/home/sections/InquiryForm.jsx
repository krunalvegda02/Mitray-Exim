"use client";

import { useState } from "react";
import { FiSend, FiUser, FiBriefcase, FiMail, FiPhone, FiMessageSquare, FiShield, FiClock } from "react-icons/fi";

export function InquiryForm() {
  const [focused, setFocused] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inquiry submitted. Our export team will contact you shortly.");
  };

  return (
    <section className="relative">
      {/* THE GLASS CONTAINER */}
      <div className="relative glass-panel rounded-[3rem] md:rounded-[4.5rem] p-8 md:p-20 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.1)] border border-white overflow-hidden">
        
        {/* HEADER - STANDARDIZED */}
        <div className="text-center mb-16 animate-reveal">
          <div className="inline-flex items-center px-5 py-2 bg-brand-gold/10 rounded-full mb-6 border border-brand-gold/20 backdrop-blur-md">
            <FiSend className="text-brand-gold mr-2" />
            <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.4em]">Procurement Terminal</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-brand-navy mb-8 tracking-tighter leading-none">
            Request <span className="text-gradient">Quotation</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium opacity-80 uppercase tracking-tight">
            Connect with our export desk for institutional pricing and logistics manifest.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8 animate-reveal delay-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            
            {/* INPUT FIELDS - GLASS STYLE */}
            {[
              { id: 'name', label: 'Full Name', icon: <FiUser />, placeholder: 'John Doe', type: 'text' },
              { id: 'company', label: 'Organization', icon: <FiBriefcase />, placeholder: 'Company Name', type: 'text' },
              { id: 'email', label: 'Corporate Email', icon: <FiMail />, placeholder: 'john@example.com', type: 'email' },
              { id: 'phone', label: 'Direct Line', icon: <FiPhone />, placeholder: '+91 XXXXXXXXXX', type: 'text' },
            ].map((field) => (
              <div key={field.id} className="space-y-3">
                <label className="flex items-center gap-2 text-[10px] font-black text-brand-navy uppercase tracking-widest opacity-60 ml-4">
                  {field.icon} {field.label}
                </label>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-brand-gold/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition duration-500"></div>
                  <input
                    type={field.type}
                    required
                    className="relative w-full bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl px-6 py-5 focus:bg-white focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold outline-none transition-all duration-500 text-brand-navy font-bold placeholder:text-slate-300"
                    placeholder={field.placeholder}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* REQUIREMENTS */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-black text-brand-navy uppercase tracking-widest opacity-60 ml-4">
              <FiMessageSquare /> Product Specifications & Volume
            </label>
            <div className="relative group">
              <div className="absolute -inset-1 bg-brand-gold/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-lg transition duration-500"></div>
              <textarea
                rows={6}
                required
                className="relative w-full bg-white/40 backdrop-blur-md border border-white/60 rounded-[2rem] px-8 py-6 focus:bg-white focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold outline-none transition-all duration-500 text-brand-navy font-bold placeholder:text-slate-300 resize-none"
                placeholder="Specify variety, quantity, and destination port..."
              ></textarea>
            </div>
          </div>

          {/* SUBMIT */}
          <div className="pt-6">
            <button
              type="submit"
              className="group relative w-full px-12 py-7 bg-brand-navy rounded-[2.5rem] text-white font-black uppercase tracking-[0.3em] text-[12px] shadow-2xl hover:bg-brand-gold hover:text-brand-navy transition-all duration-700 active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center justify-center gap-4">
                Initialize Procurement Process <FiArrowRight className="text-xl group-hover:translate-x-2 transition-transform duration-500" />
              </span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>

          {/* TRUST INDICATORS */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-10 border-t border-slate-100/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500"><FiShield /></div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">End-to-End Encryption</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold"><FiClock /></div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">24-Hour Response Latency</p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
