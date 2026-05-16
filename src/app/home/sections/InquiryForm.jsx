"use client";

import { useState } from "react";
import { FiSend, FiUser, FiBriefcase, FiMail, FiPhone, FiMessageSquare, FiShield, FiClock, FiArrowRight, FiActivity, FiZap } from "react-icons/fi";

export function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Inquiry manifest received. Our global desk will initialize contact shortly.");
    }, 2000);
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      
      {/* INSTITUTIONAL BACKGROUND ACCENTS */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-gold/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-navy/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        
        {/* HEADER ARCHITECTURE */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 md:mb-32 gap-10">
          <div className="max-w-4xl animate-reveal">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-brand-navy/5 rounded-full mb-8 border border-brand-navy/5 backdrop-blur-md">
              <FiSend className="text-brand-gold animate-pulse" />
              <span className="text-[10px] font-black text-brand-navy uppercase tracking-[0.5em]">Global Procurement Terminal</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-brand-navy mb-8 tracking-tighter leading-[0.85]">
              INITIALIZE <br />
              <span className="text-gradient">PARTNERSHIP.</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl leading-relaxed uppercase tracking-tight opacity-70">
              Connect with our international export desk to request institutional pricing, logistics manifests, and strategic supply schedules.
            </p>
          </div>
          
          <div className="hidden lg:flex flex-col items-end animate-reveal delay-200">
             <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-px bg-slate-200"></div>
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">Response Time</span>
             </div>
             <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                <FiZap className="text-brand-gold text-xl" />
                <span className="text-[11px] font-black text-brand-navy uppercase tracking-widest">&lt; 12 Hours Response</span>
             </div>
          </div>
        </div>

        {/* TERMINAL CASE */}
        <div className="relative glass-panel rounded-[3.5rem] md:rounded-[5rem] p-8 md:p-24 shadow-[0_60px_120px_-30px_rgba(44,74,94,0.15)] border-white bg-slate-50/50 backdrop-blur-2xl">
          <form onSubmit={handleSubmit} className="max-w-5xl mx-auto space-y-12">
            
            {/* GRID SECTOR */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {[
                { id: 'name', label: 'Authorized Officer', icon: <FiUser />, placeholder: 'John Doe', type: 'text' },
                { id: 'company', label: 'Organization Entity', icon: <FiBriefcase />, placeholder: 'Global Trading Co.', type: 'text' },
                { id: 'email', label: 'Corporate Gateway', icon: <FiMail />, placeholder: 'procurement@company.com', type: 'email' },
                { id: 'phone', label: 'Direct Secure Line', icon: <FiPhone />, placeholder: '+91 XXXXXXXXXX', type: 'text' },
              ].map((field) => (
                <div key={field.id} className="space-y-4">
                  <label className="flex items-center gap-3 text-[10px] font-black text-brand-navy uppercase tracking-[0.2em] opacity-50 ml-6">
                    {field.icon} {field.label}
                  </label>
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-brand-gold/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition duration-700"></div>
                    <input
                      type={field.type}
                      required
                      className="relative w-full bg-white/60 backdrop-blur-xl border border-white rounded-[1.5rem] px-8 py-6 focus:bg-white focus:shadow-2xl outline-none transition-all duration-700 text-brand-navy font-bold placeholder:text-slate-300 text-sm md:text-base"
                      placeholder={field.placeholder}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* MANIFEST SECTOR */}
            <div className="space-y-4">
              <label className="flex items-center gap-3 text-[10px] font-black text-brand-navy uppercase tracking-[0.2em] opacity-50 ml-6">
                <FiMessageSquare /> PROPOSAL MANIFEST & LOGISTICS REQUIREMENTS
              </label>
              <div className="relative group">
                <div className="absolute -inset-1 bg-brand-gold/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition duration-700"></div>
                <textarea
                  rows={6}
                  required
                  className="relative w-full bg-white/60 backdrop-blur-xl border border-white rounded-[2.5rem] px-10 py-8 focus:bg-white focus:shadow-2xl outline-none transition-all duration-700 text-brand-navy font-bold placeholder:text-slate-300 resize-none text-sm md:text-base"
                  placeholder="Specify variety (Onion, Potato, Spices), volume manifest, and destination port..."
                ></textarea>
              </div>
            </div>

            {/* SUBMIT PROTOCOL */}
            <div className="pt-8 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`group relative w-full md:w-auto px-16 py-8 bg-brand-navy rounded-[2.5rem] text-white font-black uppercase tracking-[0.4em] text-[11px] shadow-2xl hover:bg-brand-gold hover:text-brand-navy transition-all duration-700 active:scale-[0.98] disabled:opacity-50 overflow-hidden`}
              >
                <span className="relative z-10 flex items-center justify-center gap-6">
                  {isSubmitting ? 'Syncing Manifest...' : 'Initialize Global Procurement'} 
                  {!isSubmitting && <FiArrowRight className="text-xl group-hover:translate-x-2 transition-transform duration-500" />}
                </span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {/* SCANNER LIGHT */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              </button>
              
              <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 border-t border-slate-200 pt-12">
                 <div className="flex items-center gap-4">
                    <FiShield className="text-emerald-500 text-2xl" />
                    <div className="text-left">
                       <p className="text-[9px] font-black text-brand-navy uppercase tracking-widest leading-tight">Secure Encryption</p>
                       <p className="text-[7px] font-bold text-slate-400 uppercase tracking-widest">TLS 1.3 Active Hub</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <FiActivity className="text-brand-gold text-2xl" />
                    <div className="text-left">
                       <p className="text-[9px] font-black text-brand-navy uppercase tracking-widest leading-tight">Real-time Routing</p>
                       <p className="text-[7px] font-bold text-slate-400 uppercase tracking-widest">Direct Desk Access</p>
                    </div>
                 </div>
              </div>
        </div>
          </form>
        </div>
      </div>
    </section>
  );
}
