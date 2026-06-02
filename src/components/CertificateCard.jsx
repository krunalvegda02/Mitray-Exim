"use client";

import { FiShield, FiArrowRight, FiActivity, FiCheckCircle } from "react-icons/fi";

export function CertificateCard({ cert }) {
  return (
    <div className="group relative h-full">
      {/* SHARP EDGY SHADOW */}
      <div className="absolute inset-0 bg-brand-gold/5 translate-x-3 translate-y-3 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 duration-500"></div>
      
      <div className="relative h-full bg-white border-2 border-brand-navy/5 transition-all duration-500 group-hover:border-brand-gold group-hover:-translate-x-2 group-hover:-translate-y-2 flex flex-col overflow-hidden">
        
        {/* LOGO CONTAINER - SHARP */}
        <div className="relative bg-slate-50 p-4 h-40 sm:h-52 md:h-64 flex items-center justify-center border-b border-slate-100 group-hover:bg-white transition-colors duration-500">
           {/* CORNER ACCENT */}
           <div className="absolute top-0 right-0 w-8 h-8 md:w-10 md:h-10 border-t-4 border-r-4 border-slate-100 group-hover:border-brand-gold transition-colors"></div>
           
           <img
             src={cert.logo}
             alt={cert.fullName}
             className="max-w-[90%] max-h-[90%] object-contain transition-all duration-700 group-hover:scale-105"
             onError={(e) => {
               e.target.style.display = 'none';
               e.target.nextSibling.style.display = 'flex';
             }}
           />
           <div className="hidden flex-col items-center justify-center text-center">
             <FiShield className="text-3xl md:text-5xl text-brand-gold/30 mb-2 md:mb-4 group-hover:text-brand-gold transition-colors" />
             <p className="text-lg md:text-2xl font-black text-brand-navy uppercase tracking-tighter">{cert.name}</p>
           </div>
        </div>

        {/* CONTENT HUB */}
        <div className="p-5 sm:p-6 md:p-8 flex-grow flex flex-col justify-between">
           <div>
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                 <div className="w-1.5 h-1.5 bg-brand-gold rotate-45"></div>
                 <span className="text-[9px] md:text-[10px] font-black text-brand-gold uppercase tracking-[0.3em]">Compliance Verified</span>
              </div>
              <h3 className="text-lg md:text-xl font-black text-brand-navy uppercase tracking-tighter mb-1.5 md:mb-2 group-hover:text-brand-gold transition-colors">
                {cert.name}
              </h3>
              <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 md:mb-4">{cert.fullName}</p>
              <p className="text-[11px] md:text-xs font-bold text-slate-500 uppercase tracking-tight leading-relaxed opacity-80">{cert.description}</p>
           </div>

           <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-slate-50 flex items-center justify-between">
              
              <div className="text-[9px] md:text-[10px] font-black text-slate-300 uppercase tracking-widest">
                 Ref: CERT-0{cert.id}
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
