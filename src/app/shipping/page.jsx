"use client";

import { useState } from "react";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { 
  FiShield, 
  FiGlobe, 
  FiCheckCircle, 
  FiActivity, 
  FiArrowRight, 
  FiPackage, 
  FiThermometer, 
  FiTruck, 
  FiZap,
  FiSend,
  FiFileText
} from "react-icons/fi";
import Link from "next/link";

const SERVICES = [
  {
    number: "01",
    title: "Farm Sourcing & Quality Selection",
    badge: "Fresh From Farms",
    description: "We source premium onions, potatoes, green chillies, mangoes, and grapes directly from trusted Indian farms. Our team carefully hand-picks and grades every item so only the best, export-grade produce is packed for you.",
    metric: "100% Quality Checked",
    icon: <FiCheckCircle className="w-6 h-6 text-brand-gold" />
  },
  {
    number: "02",
    title: "Cold Chain & Temperature Control",
    badge: "Freshness Locked",
    description: "We store fresh crops in temperature-controlled cold rooms at the perfect temperature (between 2°C and 12°C). This locks in natural crispness and freshness, ensuring it stays fresh during long-distance shipping.",
    metric: "Constant Cooling (2°C - 12°C)",
    icon: <FiThermometer className="w-6 h-6 text-brand-gold" />
  },
  {
    number: "03",
    title: "Export-Grade Custom Packaging",
    badge: "Secure & Safe",
    description: "We pack our fresh vegetables and fruits in strong, ventilated packaging like breathable mesh bags for onions, sturdy cardboard boxes for fruits, and clean crates to protect them from damage during the journey.",
    metric: "High-Quality Packaging",
    icon: <FiPackage className="w-6 h-6 text-brand-gold" />
  },
  {
    number: "04",
    title: "Global Shipping & Logistics",
    badge: "Global Delivery",
    description: "We partner with top international shipping lines (like Maersk, MSC) to deliver your orders quickly and safely. Perishables are shipped in special climate-controlled reefer containers to arrive fresh at your port.",
    metric: "On-Time Port Delivery",
    icon: <FiTruck className="w-6 h-6 text-brand-gold" />
  }
];

const TRANSIT_ROUTES = [
  { 
    region: "Gulf & Middle East Ports", 
    hub: "Jebel Ali, Hamad, Dammam", 
    duration: "5 - 7", 
    unit: "Days",
    description: "Fast direct sea freight routes for highly perishable fresh vegetables and fruits.",
    speed: "Fast Direct Transit"
  },
  { 
    region: "Southeast Asia Ports", 
    hub: "Singapore, Port Klang, Bangkok", 
    duration: "8 - 10", 
    unit: "Days",
    description: "Reliable weekly container shipments for bulk vegetable orders like onions and potatoes.",
    speed: "Weekly Bulk Shipments"
  },
  { 
    region: "Europe & United Kingdom Ports", 
    hub: "Rotterdam, Felixstowe, Hamburg", 
    duration: "18 - 22", 
    unit: "Days",
    description: "Climate-controlled containers that preserve absolute freshness during long-distance shipping.",
    speed: "Temperature Controlled"
  }
];

export default function ShippingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* 1. HIGH-FIDELITY HERO - ALIGNED DESIGN SYSTEM */}
      <PageHero 
        badge="OUR EXPORT SERVICES & LOGISTICS"
        title="Services & Logistics."
        description="We source fresh onions, potatoes, green chillies, mangoes, and grapes directly from trusted Indian farms, packing them securely and shipping them under precise cooling so they arrive perfectly fresh at your port."
        backgroundImage="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services & Logistics' }
        ]}
      />

      <div className="relative z-10 pt-12 md:pt-20 pb-20 md:pb-32 bg-[#F9FAFB]">
        <Container>

          {/* 2. EDGY SECTION HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16 md:mb-20">
             <div className="space-y-6">
                <div className="flex items-center gap-4">
                   <div className="h-px w-12 bg-brand-gold"></div>
                   <span className="text-xs font-black text-brand-navy uppercase tracking-[0.4em]">Our Core Workflow</span>
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-brand-navy tracking-tighter uppercase leading-[0.85]">
                   WHAT WE <br />
                   <span className="text-gradient">DELIVER.</span>
                </h2>
             </div>
             <p className="text-slate-500 text-sm md:text-lg font-bold max-w-md uppercase tracking-tight leading-relaxed">
               From hand-picking fresh produce at Indian farms to safe delivery at global ports, we manage every step with care to ensure you get the freshest vegetables, fruits, and grains.
             </p>
          </div>

          {/* 3. PREMIUM GRID OF SERVICES - SHARP EDGES */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20 md:mb-32">
            {SERVICES.map((service, index) => (
              <div 
                key={service.number}
                className="animate-reveal opacity-0"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="group relative h-full bg-white border border-slate-200 hover:border-brand-gold hover:shadow-[0_15px_40px_rgba(212,165,116,0.15)] transition-all duration-500 flex flex-col p-8 relative overflow-hidden">
                  {/* Corner Accent Edges */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brand-gold/10 group-hover:border-brand-gold transition-colors"></div>
                  
                  {/* Floating Number */}
                  <span className="absolute bottom-6 right-8 text-6xl font-black text-slate-100 group-hover:text-brand-gold/10 transition-colors pointer-events-none font-outfit">
                    {service.number}
                  </span>

                  <div className="relative z-10 flex flex-col h-full space-y-6">
                    {/* Badge & Icon Row */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black text-brand-gold uppercase tracking-widest bg-brand-gold/5 px-3 py-1.5 border border-brand-gold/10">
                        {service.badge}
                      </span>
                      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-200 group-hover:bg-brand-gold/10 group-hover:border-brand-gold transition-all duration-500">
                        {service.icon}
                      </div>
                    </div>

                    {/* Title & Desc */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-black text-brand-navy group-hover:text-brand-gold transition-colors font-outfit uppercase tracking-tight leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 text-xs md:text-sm font-semibold uppercase tracking-wide opacity-80 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Divider & Metric */}
                    <div className="pt-6 mt-auto border-t border-slate-100">
                      <p className="text-[10px] font-black text-brand-navy uppercase tracking-widest flex items-center gap-1.5">
                        <FiShield className="text-brand-gold" />
                        {service.metric}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 4. TRANSIT TIMELINES TERMINAL - SHARP GLASS */}
          <div className="relative mb-20 md:mb-32 animate-reveal">
             <div className="absolute inset-0 bg-brand-gold/5 translate-x-4 translate-y-4"></div>
             <div className="relative bg-white border-2 border-slate-100 p-8 md:p-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 border-t-8 border-r-8 border-brand-gold/5"></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                   <div className="lg:col-span-12 space-y-8">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
                         <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-brand-navy text-brand-gold flex items-center justify-center text-2xl font-black">
                               <FiGlobe />
                            </div>
                            <div>
                               <h3 className="text-2xl md:text-4xl font-black text-brand-navy uppercase tracking-tighter font-outfit">Logistics & Transit Times</h3>
                               <p className="text-[10px] font-black text-brand-gold uppercase tracking-widest">Global Ports & Shipping Schedules</p>
                            </div>
                         </div>
                         <div className="flex items-center gap-4">
                            <span className="text-[10px] font-black text-white bg-emerald-500 px-3 py-1.5 uppercase tracking-widest animate-pulse">
                              Shipping Lanes: Active
                            </span>
                         </div>
                      </div>

                      <p className="text-sm md:text-xl text-slate-500 font-bold uppercase tracking-tight leading-relaxed">
                         We ship from India's leading ports (Mundra, Nhava Sheva) directly to major global hubs, maintaining temperature and quality checks throughout the voyage.
                      </p>

                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {TRANSIT_ROUTES.map((route, idx) => (
                          <div 
                            key={idx}
                            className="bg-[#F9FAFB] border border-slate-200 p-6 flex flex-col justify-between hover:border-brand-gold transition-all duration-500 group"
                          >
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <span className="text-[9px] font-black text-brand-gold bg-brand-gold/5 border border-brand-gold/15 px-2.5 py-1 uppercase tracking-widest">
                                  {route.speed}
                                </span>
                                <FiZap className="text-brand-gold text-sm animate-pulse" />
                              </div>
                              <div>
                                <h4 className="text-lg font-black text-brand-navy uppercase tracking-tight font-outfit">{route.region}</h4>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{route.hub}</p>
                              </div>
                              <p className="text-xs text-slate-500 font-semibold uppercase leading-relaxed tracking-wide">
                                {route.description}
                              </p>
                            </div>
                            
                            <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center justify-between">
                              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Estimated Transit</span>
                              <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-black text-brand-navy group-hover:text-brand-gold transition-colors font-outfit">{route.duration}</span>
                                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{route.unit}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* 5. SPECIFICATION AUDITS SECTION - ALIGNED DESIGN */}
          <div className="relative mb-24 animate-reveal">
             <div className="absolute inset-0 bg-brand-navy/5 -translate-x-4 -translate-y-4"></div>
             <div className="relative bg-white border-2 border-slate-100 p-8 md:p-16 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-32 h-32 border-b-8 border-l-8 border-brand-gold/5"></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                   <div className="lg:col-span-7 space-y-8">
                      <div className="flex items-center gap-4">
                         <div className="w-16 h-16 bg-brand-navy text-brand-gold flex items-center justify-center text-3xl font-black">
                            <FiShield />
                         </div>
                         <div>
                            <h3 className="text-2xl md:text-4xl font-black text-brand-navy uppercase tracking-tighter font-outfit">Safe Sourcing & Certified Quality</h3>
                            <p className="text-[10px] font-black text-brand-gold uppercase tracking-widest">APEDA & FSSAI Certified Partner</p>
                         </div>
                      </div>
                      <p className="text-sm md:text-xl text-slate-500 font-bold uppercase tracking-tight leading-relaxed">
                         We handle all government quality tests, pest control checks, and customs paperwork so your shipment clears quickly and easily at the destination port.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          { name: "Phytosanitary Certification", desc: "Proves produce is fresh, clean, and pest-free" },
                          { name: "APEDA Approved Sourcing", desc: "Meets strict government standards for export" },
                          { name: "SGS Quality Testing", desc: "Verifies absolute food safety and zero pesticide residues" },
                          { name: "Pre-Cooling Checks", desc: "Container temperatures are verified before door sealing" }
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-4 p-5 bg-[#F9FAFB] border border-slate-200">
                            <FiCheckCircle className="text-brand-gold text-lg mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="text-xs md:text-sm font-black text-brand-navy uppercase tracking-widest mb-0.5">{item.name}</h4>
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                   </div>
                   
                   <div className="lg:col-span-5">
                      <div className="p-8 md:p-10 bg-brand-navy text-white relative overflow-hidden group">
                         <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 blur-3xl"></div>
                         <h4 className="text-xl font-black uppercase tracking-tighter mb-4 font-outfit">Get a Custom Quote</h4>
                         <p className="text-xs font-bold text-white/40 uppercase tracking-widest leading-relaxed mb-8">
                            Need a specific size of onion, custom packaging boxes, or direct shipping prices? Get in touch with our team today and receive a clear quote within 24 hours.
                         </p>
                         <button 
                            onClick={() => setIsModalOpen(true)}
                            className="group/btn block w-full py-5 bg-brand-gold text-brand-navy text-xs font-black text-center uppercase tracking-[0.3em] hover:bg-white hover:text-brand-navy transition-all duration-500 relative z-10 cursor-pointer"
                         >
                            Request a Quote Now <FiArrowRight className="inline ml-2 group-hover/btn:translate-x-2 transition-transform" />
                         </button>
                      </div>
                   </div>
                </div>
             </div>
          </div>

        </Container>
      </div>

      {/* Modal */}
      {isModalOpen && <InquiryModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

function InquiryModal({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inquiry successfully transmitted. Our trade specialists will get in touch with you shortly.");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full sm:max-w-3xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <div className="absolute inset-0 bg-[#F9FAFB] rounded-t-3xl sm:rounded-none"></div>

          <div className="relative bg-white rounded-t-3xl sm:rounded-none border-2 border-slate-100 p-8 sm:p-10 md:p-12 shadow-2xl">
            
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-center transition-colors text-brand-navy cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-brand-gold/10 px-4 py-2 border border-brand-gold/25 mb-4">
                <FiSend className="text-brand-gold mr-2 text-sm" />
                <span className="text-xs font-black text-brand-navy uppercase tracking-widest">Inquiry Form</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-brand-navy uppercase tracking-tight font-outfit mb-3">
                Request Specifications
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold uppercase tracking-wider">
                Fill out the specifications below to receive trade quotes in 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-black text-brand-navy uppercase tracking-widest mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#F9FAFB] border border-slate-200 px-4 py-3 focus:border-brand-gold focus:bg-white outline-none transition-all text-sm font-bold uppercase tracking-wider text-brand-navy"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-brand-navy uppercase tracking-widest mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-[#F9FAFB] border border-slate-200 px-4 py-3 focus:border-brand-gold focus:bg-white outline-none transition-all text-sm font-bold tracking-wider text-brand-navy"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-brand-navy uppercase tracking-widest mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#F9FAFB] border border-slate-200 px-4 py-3 focus:border-brand-gold focus:bg-white outline-none transition-all text-sm font-bold tracking-wider text-brand-navy"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-brand-navy uppercase tracking-widest mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#F9FAFB] border border-slate-200 px-4 py-3 focus:border-brand-gold focus:bg-white outline-none transition-all text-sm font-bold uppercase tracking-wider text-brand-navy"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-brand-navy uppercase tracking-widest mb-2">
                  Commodity Requirements *
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full bg-[#F9FAFB] border border-slate-200 px-4 py-3 focus:border-brand-gold focus:bg-white outline-none transition-all text-sm font-bold uppercase tracking-wider text-brand-navy resize-none"
                  placeholder="Specify vegetables, fruits, custom sizing or packaging requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4.5 bg-brand-gold text-brand-navy hover:bg-brand-navy hover:text-white font-black text-xs uppercase tracking-[0.3em] shadow-xl transition-all duration-500 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Transmit Specification Form</span>
                <FiSend className="text-sm" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
