"use client";

import { useState } from "react";
import { FiMaximize2, FiX, FiActivity, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export function LightboxGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const handleNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const openImage = (img, index) => {
    setSelectedImage(img);
    setCurrentIndex(index);
  };

  return (
    <>
      {/* GALLERY GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4 auto-rows-[1fr]">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => openImage(img, idx)}
            className="group relative cursor-pointer aspect-square w-full overflow-hidden"
          >
             {/* SHARP SHADOW EFFECT */}
             <div className="absolute -inset-1 sm:inset-0 bg-brand-gold/10 translate-x-2 sm:translate-x-3 translate-y-2 sm:translate-y-3 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0"></div>
             
             <div className="relative w-full h-full bg-white border-2 border-slate-200 overflow-hidden group-hover:border-brand-gold transition-all duration-500 group-hover:-translate-x-1 sm:group-hover:-translate-x-2 group-hover:-translate-y-1 sm:group-hover:-translate-y-2">
                
                {/* IMAGE */}
                <div className="absolute inset-0">
                   <img loading="lazy" decoding="async" 
                      src={img.src} 
                      alt={img.title} 
                      className="w-full h-full object-cover grayscale opacity-75 sm:opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                   />
                   
                   {/* OVERLAY */}
                   <div className="absolute inset-0 bg-brand-navy/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 border-2 border-white flex items-center justify-center text-white group-hover:bg-brand-gold group-hover:text-brand-navy group-hover:border-brand-gold transition-all duration-500">
                         <FiMaximize2 className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7" />
                      </div>
                   </div>
                </div>

                {/* REF BADGE */}
                <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 px-2 sm:px-3 py-1 bg-white/95 backdrop-blur-sm text-[7px] sm:text-[8px] md:text-[9px] lg:text-xs font-black uppercase tracking-widest text-brand-navy border-2 border-slate-200">
                   REF: IMG-00{idx + 1}
                </div>

                {/* TITLE OVERLAY */}
                <div className="absolute inset-0 flex flex-col justify-end p-2 sm:p-3 md:p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-xs font-black uppercase tracking-wider mb-0.5 sm:mb-1 text-white/80">Manifest</p>
                  <h3 className="text-xs sm:text-sm md:text-base font-black uppercase tracking-tight leading-tight line-clamp-2">{img.title}</h3>
                </div>
             </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-brand-navy/98 z-[500] flex items-start md:items-center justify-center p-3 sm:p-6 md:p-8 lg:p-12 animate-in fade-in duration-500 overflow-y-auto pt-4 sm:pt-8 md:pt-0"
          onClick={() => setSelectedImage(null)}
        >
           {/* CLOSE BUTTON */}
           <button 
             onClick={() => setSelectedImage(null)}
             className="absolute top-4 sm:top-6 md:top-8 lg:top-12 right-4 sm:right-6 md:right-8 lg:right-12 w-10 sm:w-12 md:w-14 lg:w-16 h-10 sm:h-12 md:h-14 lg:h-16 bg-white/5 hover:bg-brand-gold hover:text-brand-navy border-2 border-white/10 hover:border-brand-gold flex items-center justify-center text-white transition-all duration-500 group z-50"
           >
              <FiX className="w-5 sm:w-6 md:w-7 lg:w-8 h-5 sm:h-6 md:w-7 lg:h-8 group-hover:rotate-90 transition-transform duration-500" />
           </button>

           {/* NAVIGATION BUTTONS */}
           <button 
             onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
             className="absolute left-4 sm:left-6 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 bg-white/10 hover:bg-brand-gold text-white hover:text-brand-navy border-2 border-white/10 hover:border-brand-gold flex items-center justify-center transition-all duration-500 group z-50"
           >
              <FiChevronLeft className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 group-hover:-translate-x-1 transition-transform" />
           </button>

           <button 
             onClick={(e) => { e.stopPropagation(); handleNext(); }}
             className="absolute right-4 sm:right-6 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 bg-white/10 hover:bg-brand-gold text-white hover:text-brand-navy border-2 border-white/10 hover:border-brand-gold flex items-center justify-center transition-all duration-500 group z-50"
           >
              <FiChevronRight className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 group-hover:translate-x-1 transition-transform" />
           </button>

           <div 
             className="max-w-6xl w-full flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-start lg:items-center"
             onClick={(e) => e.stopPropagation()}
           >
              {/* IMAGE CONTAINER */}
              <div className="flex-1 relative group w-full">
                 <div className="absolute inset-0 bg-brand-gold/10 translate-x-2 sm:translate-x-3 md:translate-x-4 translate-y-2 sm:translate-y-3 md:translate-y-4"></div>
                 <div className="relative border-2 sm:border-3 md:border-4 border-white/20 shadow-2xl overflow-hidden">
                    <img loading="lazy" decoding="async" 
                       src={selectedImage.src} 
                       alt={selectedImage.title} 
                       className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] md:max-h-[65vh] object-contain"
                    />
                 </div>
              </div>

              {/* DATA PANEL */}
              <div className="w-full lg:w-80 xl:w-96 space-y-4 sm:space-y-6 md:space-y-8 animate-in slide-in-from-right duration-700">
                 <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                       <div className="w-1.5 h-1.5 bg-brand-gold"></div>
                       <span className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm font-black text-brand-gold uppercase tracking-[0.2em] sm:tracking-[0.3em]">Metadata Analysis</span>
                    </div>
                    <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                       {selectedImage.title}
                    </h2>
                 </div>

                 <div className="p-4 sm:p-5 md:p-6 lg:p-8 bg-white/5 border-2 border-white/10 space-y-3 sm:space-y-4 md:space-y-6">
                    <div className="flex items-center justify-between pb-3 sm:pb-4 md:pb-6 border-b-2 border-white/5">
                       <span className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm font-black text-white/40 uppercase tracking-widest">Protocol Type</span>
                       <span className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm font-black text-white uppercase tracking-widest">Operational Hub</span>
                    </div>
                    <div className="flex items-center justify-between pb-3 sm:pb-4 md:pb-6 border-b-2 border-white/5">
                       <span className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm font-black text-white/40 uppercase tracking-widest">Verification</span>
                       <span className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm font-black text-emerald-400 uppercase tracking-widest flex items-center gap-1.5 sm:gap-2">
                          <FiActivity className="w-3 sm:w-4 h-3 sm:h-4" /> Active
                       </span>
                    </div>
                    <div className="flex items-center justify-between">
                       <span className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm font-black text-white/40 uppercase tracking-widest">Index</span>
                       <span className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm font-black text-white uppercase tracking-widest">{currentIndex + 1} / {images.length}</span>
                    </div>
                    <p className="text-[9px] sm:text-xs md:text-sm lg:text-base font-bold text-white/70 leading-relaxed uppercase tracking-tight pt-2 sm:pt-3 md:pt-4 border-t-2 border-white/5">
                       Detailed visual documentation of our {selectedImage.title.toLowerCase()} manifesting strict compliance with global export standards.
                    </p>
                 </div>

                 <button 
                   onClick={() => setSelectedImage(null)} 
                   className="w-full py-3 sm:py-4 md:py-5 lg:py-6 bg-brand-gold hover:bg-brand-gold/90 text-brand-navy text-[10px] sm:text-xs md:text-sm lg:text-base font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] transition-all duration-500 border-2 border-brand-gold hover:border-white"
                 >
                    Close Terminal
                 </button>
              </div>
           </div>
        </div>
      )}
    </>
  );
}
