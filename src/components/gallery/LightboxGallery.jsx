"use client";

import { useState } from "react";
import { FiMaximize2, FiX, FiArrowRight, FiInfo, FiActivity } from "react-icons/fi";

export function LightboxGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* SHARP EDGY GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedImage(img)}
            className="group relative cursor-pointer"
          >
             {/* OFFSET SHADOW PROTOCOL */}
             <div className="absolute inset-0 bg-brand-gold/5 translate-x-3 translate-y-3 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 duration-500"></div>
             
             <div className="relative bg-white border-2 border-slate-100 overflow-hidden group-hover:border-brand-gold transition-all duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2">
                
                {/* IMAGE HUB - GRAYSCALE PROTOCOL */}
                <div className="aspect-[4/3] relative overflow-hidden bg-slate-50">
                   <img 
                      src={img.src} 
                      alt={img.title} 
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                   />
                   
                   {/* TECHNICAL OVERLAY */}
                   <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-brand-gold flex items-center justify-center text-brand-navy translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                         <FiMaximize2 className="text-2xl" />
                      </div>
                   </div>

                   {/* DOC REF BADGE */}
                   <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md text-[8px] font-black uppercase tracking-widest text-brand-navy border border-slate-200">
                      REF: IMG-00{idx + 1}
                   </div>
                </div>

                {/* MANIFEST FOOTER */}
                <div className="p-6 flex items-center justify-between bg-white border-t border-slate-50">
                   <div>
                      <p className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] mb-1">Visual Manifest</p>
                      <h3 className="text-lg font-black text-brand-navy uppercase tracking-tighter leading-none">{img.title}</h3>
                   </div>
                   <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-brand-gold group-hover:border-brand-gold transition-all">
                      <FiArrowRight />
                   </div>
                </div>
             </div>
          </div>
        ))}
      </div>

      {/* INSTITUTIONAL LIGHTBOX TERMINAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-brand-navy/98 z-[200] flex items-center justify-center p-6 md:p-12 animate-in fade-in duration-500"
          onClick={() => setSelectedImage(null)}
        >
           <button className="absolute top-10 right-10 w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-navy transition-all duration-500 group">
              <FiX className="text-3xl group-hover:rotate-90 transition-transform" />
           </button>

           <div 
             className="max-w-6xl w-full flex flex-col lg:flex-row gap-10 items-center"
             onClick={(e) => e.stopPropagation()}
           >
              {/* LARGE IMAGE TERMINAL */}
              <div className="flex-1 relative group">
                 <div className="absolute inset-0 bg-brand-gold/10 -translate-x-4 translate-y-4"></div>
                 <div className="relative border-4 border-white/10 shadow-2xl overflow-hidden">
                    <img 
                       src={selectedImage.src} 
                       alt={selectedImage.title} 
                       className="w-full h-auto max-h-[70vh] object-contain"
                    />
                 </div>
              </div>

              {/* TECHNICAL DATA PANEL */}
              <div className="w-full lg:w-96 space-y-8 animate-in slide-in-from-right duration-700">
                 <div className="space-y-4">
                    <div className="flex items-center gap-4">
                       <div className="w-2 h-2 bg-brand-gold rotate-45"></div>
                       <span className="text-xs font-black text-brand-gold uppercase tracking-[0.4em]">Metadata Analysis</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                       {selectedImage.title}
                    </h2>
                 </div>

                 <div className="p-8 bg-white/5 border border-white/10 space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-white/5">
                       <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Protocol Type</span>
                       <span className="text-[10px] font-black text-white uppercase tracking-widest">Operational Hub</span>
                    </div>
                    <div className="flex items-center justify-between pb-4 border-b border-white/5">
                       <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Verification</span>
                       <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                          <FiActivity /> Active
                       </span>
                    </div>
                    <p className="text-xs font-bold text-white/60 leading-relaxed uppercase tracking-tight">
                       Detailed visual documentation of our {selectedImage.title.toLowerCase()} manifesting strict compliance with global export standards.
                    </p>
                 </div>

                 <button onClick={() => setSelectedImage(null)} className="w-full py-5 bg-brand-gold text-brand-navy text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white transition-all duration-700">
                    Close Terminal
                 </button>
              </div>
           </div>
        </div>
      )}
    </>
  );
}
