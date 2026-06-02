"use client";

import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { useState } from "react";
import { 
  FiMail, FiPhone, FiMapPin, FiClock, FiSend, 
  FiGlobe, FiMessageCircle, FiActivity, FiArrowRight,
  FiUser, FiBriefcase, FiHash, FiCheckCircle
} from "react-icons/fi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitStatus("success");
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white">
      {/* 1. INSTITUTIONAL HERO */}
      <PageHero 
        badge="GLOBAL COMMUNICATION TERMINAL"
        title="Initialize. Connection."
        description="Connect with the MIT-24 Export Protocol desk. Our institutional partners receive 24/7 priority procurement assistance."
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Communication Hub' }
        ]}
      />

      <div className="relative z-10 pt-12 md:pt-20 pb-20 md:pb-32">
        <Container>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-start">
            
            {/* LEFT: COMMUNICATION MANIFEST */}
            <div className="lg:col-span-5 space-y-8 animate-reveal delay-300 opacity-0 lg:sticky lg:top-32">
               
               <div className="space-y-6 mb-12">
                  <div className="flex items-center gap-4">
                     <div className="h-px w-12 bg-brand-gold"></div>
                     <span className="text-xs font-black text-brand-navy uppercase tracking-[0.4em]">Direct Terminals</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-brand-navy tracking-tighter uppercase leading-[0.9]">
                     INSTITUTIONAL <br />
                     <span className="text-gradient">CHANNELS.</span>
                  </h2>
               </div>

               <div className="grid grid-cols-1 gap-4">
                  {[
                    { label: "Global Procurement Desk", val: "+91 96245 42426", icon: <FiPhone />, link: "tel:+919624542426" },
                    { label: "Institutional Email", val: "exports@mitrayexim.com", icon: <FiMail />, link: "mailto:exports@mitrayexim.com" },
                    { label: "WhatsApp Terminal", val: "+91 96245 42426", icon: <FiMessageCircle />, link: "https://wa.me/919624542426" },
                  ].map((item, i) => (
                    <a 
                      key={i} 
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 group hover:border-brand-gold hover:bg-white transition-all duration-500 hover-lift flex items-center gap-6 shadow-sm"
                    >
                       <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center text-brand-gold text-2xl group-hover:scale-110 transition-transform duration-500 border border-slate-50">
                          {item.icon}
                       </div>
                       <div>
                          <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest mb-1 group-hover:text-brand-gold transition-colors">{item.label}</p>
                          <p className="text-sm md:text-lg font-black text-brand-navy uppercase tracking-widest">{item.val}</p>
                       </div>
                    </a>
                  ))}
               </div>

               {/* OPERATIONAL HUB (TIMING) - LIGHT THEME (Fixed Visibility) */}
               <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 relative overflow-hidden group shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-3xl -translate-y-16 translate-x-16"></div>
                  <div className="flex items-center gap-3 mb-8">
                     <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-brand-gold border border-slate-100">
                        <FiClock />
                     </div>
                     <h4 className="text-xl font-black uppercase tracking-tighter text-brand-navy">Hub Availability</h4>
                  </div>
                  <div className="space-y-4">
                     <div className="flex justify-between items-center py-4 border-b border-slate-200">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Mon - Sat</span>
                        <span className="text-xs md:text-sm font-black uppercase tracking-widest text-brand-navy">09:00 - 19:00 IST</span>
                     </div>
                     <div className="flex justify-between items-center py-4">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sunday</span>
                        <span className="text-xs md:text-sm font-black uppercase tracking-widest text-red-500">Institutional Break</span>
                     </div>
                  </div>
                  <div className="mt-8 pt-8 border-t border-slate-200 flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                     <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Protocol Active: 12 Hubs Synced</span>
                  </div>
               </div>

            </div>

            {/* RIGHT: SECURE MESSAGE GATEWAY */}
            <div className="lg:col-span-7 animate-reveal delay-500 opacity-0">
               <div className="p-8 md:p-16 rounded-[3rem] bg-slate-50 border border-slate-100 relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 blur-[100px] -translate-y-32 translate-x-32"></div>
                  
                  <div className="relative z-10 mb-12">
                     <h3 className="text-3xl md:text-5xl font-black text-brand-navy uppercase tracking-tighter mb-4">
                        Secure <span className="text-gradient">Gateway.</span>
                     </h3>
                     <p className="text-sm md:text-lg text-slate-400 font-bold uppercase tracking-tight leading-relaxed max-w-xl">
                        Submit your institutional inquiry. Our procurement officers respond to all verified requests within 4 operational hours.
                     </p>
                  </div>

                  {submitStatus === "success" && (
                    <div className="mb-8 p-6 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center gap-4 animate-reveal">
                       <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                          <FiCheckCircle className="text-xl" />
                       </div>
                       <div>
                          <p className="text-sm font-black text-emerald-900 uppercase tracking-widest">Transmission Successful</p>
                          <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest opacity-60">Connection initialized. Status: Pending Review.</p>
                       </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                           <label className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                              <FiUser className="text-brand-gold" /> Full Name
                           </label>
                           <input
                             type="text"
                             name="name"
                             value={formData.name}
                             onChange={handleChange}
                             required
                             className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-5 text-sm md:text-base font-bold text-brand-navy outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/5 transition-all shadow-sm"
                             placeholder="E.G. HARSHIL SHAH"
                           />
                        </div>
                        <div className="space-y-3">
                           <label className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                              <FiMail className="text-brand-gold" /> Email Asset
                           </label>
                           <input
                             type="email"
                             name="email"
                             value={formData.email}
                             onChange={handleChange}
                             required
                             className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-5 text-sm md:text-base font-bold text-brand-navy outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/5 transition-all shadow-sm"
                             placeholder="OFFICIAL@COMPANY.COM"
                           />
                        </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                           <label className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                              <FiHash className="text-brand-gold" /> Terminal Number
                           </label>
                           <input
                             type="tel"
                             name="phone"
                             value={formData.phone}
                             onChange={handleChange}
                             className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-5 text-sm md:text-base font-bold text-brand-navy outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/5 transition-all shadow-sm"
                             placeholder="+91 00000 00000"
                           />
                        </div>
                        <div className="space-y-3">
                           <label className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                              <FiBriefcase className="text-brand-gold" /> Institutional Entity
                           </label>
                           <input
                             type="text"
                             name="company"
                             value={formData.company}
                             onChange={handleChange}
                             className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-5 text-sm md:text-base font-bold text-brand-navy outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/5 transition-all shadow-sm"
                             placeholder="COMPANY NAME LTD."
                           />
                        </div>
                     </div>

                     <div className="space-y-3">
                        <label className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                           <FiMessageCircle className="text-brand-gold" /> Procurement Requirements
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="6"
                          className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-5 text-sm md:text-base font-bold text-brand-navy outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/5 transition-all shadow-sm resize-none"
                          placeholder="DETAILED MANIFEST REQUEST..."
                        ></textarea>
                     </div>

                     <button
                       type="submit"
                       disabled={isSubmitting}
                       className="group relative w-full py-6 bg-brand-navy text-white rounded-2xl font-black uppercase tracking-[0.4em] text-xs md:text-sm shadow-2xl hover:bg-brand-gold hover:text-brand-navy transition-all duration-700 active:scale-95 overflow-hidden"
                     >
                        <span className="relative z-10 flex items-center justify-center gap-4">
                           {isSubmitting ? "Initialing Hub Sync..." : "Initialize Institutional Sync"} 
                           <FiArrowRight className="text-xl group-hover:translate-x-2 transition-transform" />
                        </span>
                     </button>
                  </form>
               </div>
            </div>

          </div>

          {/* GLOBAL PRESENCE TERMINAL */}
          <div className="mt-20 md:mt-32 pt-20 md:pt-32 border-t border-slate-100">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 animate-reveal">
                   <div className="flex items-center gap-4">
                      <div className="h-px w-10 bg-brand-gold"></div>
                      <span className="text-xs font-black text-brand-navy uppercase tracking-[0.4em]">Global Presence</span>
                   </div>
                   <h3 className="text-3xl md:text-6xl font-black text-brand-navy uppercase tracking-tighter">
                      PHYSICAL <br />
                      <span className="text-gradient">OPERATIONS.</span>
                   </h3>
                   <p className="text-sm md:text-lg text-slate-400 font-bold uppercase tracking-tight leading-relaxed max-w-xl">
                      Our main administrative hub is located in the heart of India's agricultural export zone, perfectly positioned for direct farm oversight and logistics coordination.
                   </p>
                   
                   <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-start gap-6 shadow-sm">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-gold text-xl border border-slate-50 shadow-sm">
                         <FiMapPin />
                      </div>
                      <div>
                         <h4 className="text-sm font-black text-brand-navy uppercase tracking-widest mb-2">Primary Headquarters</h4>
                         <p className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest leading-loose">
                            Plot No. 12, Export Hub, GIDC Estate, <br />
                            City Name, Gujarat, India - 380001
                         </p>
                      </div>
                   </div>
                </div>

                <div className="relative animate-reveal delay-300 opacity-0">
                   <div className="absolute -inset-4 bg-brand-gold/5 blur-3xl rounded-[3rem]"></div>
                   <div className="relative p-2 rounded-[2.5rem] bg-slate-100 shadow-2xl overflow-hidden aspect-video md:aspect-square border border-slate-200">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117506.30514102914!2d72.5072045952136!3d23.019243555239634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fccd1170aff2f4!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1715875000000!5m2!1sen!2sin" 
                        className="w-full h-full rounded-[2rem] grayscale contrast-125 opacity-80"
                        loading="lazy"
                      ></iframe>
                   </div>
                </div>
             </div>
          </div>

        </Container>
      </div>
    </div>
  );
}
