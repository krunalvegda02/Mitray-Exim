"use client";

import { CERTIFICATIONS } from "@/data/certifications";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { CertificateCard } from "@/components/CertificateCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FiShield, FiGlobe, FiCheckCircle, FiActivity, FiArrowRight, FiLock, FiZap } from "react-icons/fi";
import Link from "next/link";

export default function CertificationsPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <PageHero
        badge="QUALITY CERTIFICATIONS"
        title="Quality. Certified."
        description="Access our quality assurance certifications and compliance documentation. All products are fully verified and certified to meet international trade standards."
        backgroundImage="https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?q=80&w=2070&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Certifications' }
        ]}
      />

      <div className="relative z-10 pt-12 md:pt-20 pb-20 md:pb-32 bg-[#F9FAFB]">
        <Container>
          
          {/* 2. SECTION HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
             <div className="space-y-6">
                <div className="flex items-center gap-4">
                   <div className="h-px w-12 bg-brand-gold"></div>
                   <span className="text-xs font-black text-brand-navy uppercase tracking-[0.4em]">Global Standards</span>
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-brand-navy tracking-tighter uppercase leading-[0.85]">
                   COMPLIANCE <br />
                   <span className="text-gradient">STANDARDS.</span>
                </h2>
             </div>
             
          </div>

          {/* 3. CERTIFICATION GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-12 mb-16 md:mb-24">
            {CERTIFICATIONS.map((cert, index) => (
              <div key={cert.id} className="animate-reveal opacity-0" style={{ animationDelay: `${index * 150}ms` }}>
                <CertificateCard cert={cert} />
              </div>
            ))}
          </div>

          {/* 4. SECURITY & COMPLIANCE */}
          <div className="relative mb-24 animate-reveal">
             <div className="absolute inset-0 bg-brand-gold/5 translate-x-4 translate-y-4"></div>
             <div className="relative bg-white border-2 border-slate-100 p-8 md:p-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 border-t-8 border-r-8 border-brand-gold/5"></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                   <div className="lg:col-span-7 space-y-8">
                      <div className="flex items-center gap-4">
                         <div className="w-16 h-16 bg-brand-navy text-brand-gold flex items-center justify-center text-3xl font-black">
                            <FiShield />
                         </div>
                         <div>
                            <h3 className="text-2xl md:text-4xl font-black text-brand-navy uppercase tracking-tighter">Quality & Compliance Standards</h3>
                         </div>
                      </div>
                      <p className="text-sm md:text-xl text-slate-400 font-bold uppercase tracking-tight leading-relaxed">
                         We implement rigorous quality control processes at every stage of sourcing and packing. All shipments are accompanied by comprehensive phytosanitary certificates and export documentation verified by international bodies.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                         {CERTIFICATIONS.map((cert, i) => (
                           <div key={i} className="flex items-start gap-5 p-6 bg-slate-50 border border-slate-100 group hover:border-brand-gold transition-all">
                              <div className="w-20 h-20 bg-white border border-slate-100 flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                                 <img 
                                   src={cert.logo} 
                                   alt={cert.name} 
                                   className="max-w-full max-h-full object-contain transition-all"
                                   onError={(e) => {
                                     e.target.style.display = 'none';
                                     e.target.nextSibling.style.display = 'flex';
                                   }}
                                 />
                                 <FiShield className="hidden text-brand-gold text-2xl" />
                              </div>
                              <div>
                                 <h4 className="text-xs md:text-sm font-black text-brand-navy uppercase tracking-widest mb-1">{cert.name} Certification</h4>
                                 <p className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest">Status: Active & Verified</p>
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                   
                   <div className="lg:col-span-5">
                      <div className="p-10 bg-brand-navy text-white relative overflow-hidden group">
                         <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 blur-3xl"></div>
                         <h4 className="text-xl font-black uppercase tracking-tighter mb-6">Document Request</h4>
                         <p className="text-sm font-bold text-white/40 uppercase tracking-widest leading-relaxed mb-10">
                            Our documentation team is ready to provide complete compliance certificates, test reports, and export records for your review.
                         </p>
                         <Link href="/contact" className="group/btn block w-full py-5 bg-brand-gold text-brand-navy text-xs font-black text-center uppercase tracking-[0.3em] hover:bg-white transition-all duration-700">
                            Request Certificates <FiArrowRight className="inline ml-2 group-hover/btn:translate-x-2 transition-transform" />
                         </Link>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* 5. OPERATIONAL METRICS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-2 border-slate-100 bg-white animate-reveal">
            {[
              { label: "Compliance Rate", val: 100, suffix: "%" },
              { label: "Export Hubs", val: 5, suffix: "+" },
              { label: "Establishment", val: 2020, suffix: "" },
              { label: "Global Presence", val: 10, suffix: "+" }
            ].map((stat, i) => (
              <div key={i} className={`p-10 text-center group ${i < 3 ? 'border-r-2' : ''} border-slate-100 hover:bg-slate-50 transition-colors`}>
                 <div className="text-3xl md:text-5xl font-black text-brand-navy mb-4 group-hover:text-brand-gold transition-colors">
                    <AnimatedCounter end={stat.val} suffix={stat.suffix} />
                 </div>
                 <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">{stat.label}</div>
              </div>
            ))}
          </div>

        </Container>
      </div>
    </div>
  );
}
