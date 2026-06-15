"use client";

import { useState } from "react";
import { FiShield, FiArrowRight, FiActivity, FiCheckCircle, FiDownload, FiEye, FiX } from "react-icons/fi";

export function CertificateCard({ cert }) {
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cert.logo;
    link.download = `${cert.name}-Certificate.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = () => {
    setShowModal(true);
  };

  return (
    <>
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

             <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-slate-50 space-y-3">
                <div className="text-[9px] md:text-[10px] font-black text-slate-300 uppercase tracking-widest">
                   Ref: CERT-0{cert.id}
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <button
                    onClick={handlePreview}
                    className="flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2 md:py-3 px-2 md:px-3 bg-brand-gold/10 hover:bg-brand-gold text-brand-gold hover:text-white text-[10px] md:text-xs font-black uppercase tracking-wider transition-all duration-300"
                  >
                    <FiEye className="w-3 sm:w-4 h-3 sm:h-4" />
                    <span>Preview</span>
                  </button>
                  <button
                    onClick={handleDownload}
                    className="flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2 md:py-3 px-2 md:px-3 bg-brand-navy/10 hover:bg-brand-navy text-brand-navy hover:text-white text-[10px] md:text-xs font-black uppercase tracking-wider transition-all duration-300"
                  >
                    <FiDownload className="w-3 sm:w-4 h-3 sm:h-4" />
                    <span>Download</span>
                  </button>
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* PREVIEW MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 sm:p-6 md:p-8">
          <div className="relative bg-white rounded-lg max-w-2xl w-full max-h-[90vh] flex flex-col">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-lg transition-colors z-10"
            >
              <FiX className="w-6 h-6 text-brand-navy" />
            </button>

            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-slate-200">
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-brand-navy uppercase tracking-tighter">
                {cert.name} Certificate
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">{cert.fullName}</p>
            </div>

            {/* Modal Body - Image Preview */}
            <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-slate-50">
              <img
                src={cert.logo}
                alt={cert.fullName}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t border-slate-200 flex gap-3">
              <button
                onClick={handleDownload}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-brand-navy hover:bg-brand-navy/90 text-white text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300"
              >
                <FiDownload className="w-4 h-4" />
                Download
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 flex items-center justify-center py-3 px-4 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
