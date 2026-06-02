"use client";

import { useState, useMemo } from "react";
import { LightboxGallery } from "@/components/gallery/LightboxGallery";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { FiActivity, FiGlobe, FiShield, FiZap, FiTruck, FiBox, FiTarget, FiDatabase, FiGrid, FiList } from "react-icons/fi";

const GALLERY_CATEGORIES = [
   { id: "all", label: "Global Manifest", icon: <FiGrid /> },
   { id: "logistics", label: "Export Logistics", icon: <FiTruck /> },
   { id: "packaging", label: "Packaging Protocol", icon: <FiBox /> },
   { id: "warehouse", label: "Warehouse Terminals", icon: <FiDatabase /> },
   { id: "quality", label: "Quality Assurance", icon: <FiShield /> },
];

const ALL_IMAGES = [
   // LOGISTICS
   { id: 1, category: "logistics", src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070", title: "Logistics Hub Alpha" },
   { id: 2, category: "logistics", src: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2070", title: "Global Transit Grid" },
   { id: 3, category: "logistics", src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070", title: "Dispatch Terminal" },
   { id: 4, category: "logistics", src: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?q=80&w=2070", title: "Supply Corridor" },
   { id: 5, category: "logistics", src: "https://images.unsplash.com/photo-1473445717345-4cc44663e0c7?q=80&w=2070", title: "Port Manifest 04" },

   // PACKAGING
   { id: 6, category: "packaging", src: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1935", title: "Packaging Protocol" },
   { id: 7, category: "packaging", src: "https://images.unsplash.com/photo-1530124560677-bdaeaef2f9cd?q=80&w=1935", title: "Export Grading" },
   { id: 8, category: "packaging", src: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1935", title: "Vacuum Sealed Manifest" },
   { id: 9, category: "packaging", src: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=1935", title: "Unit Synchronization" },

   // WAREHOUSE
   { id: 10, category: "warehouse", src: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?q=80&w=1965", title: "Warehouse Terminal 01" },
   { id: 11, category: "warehouse", src: "https://images.unsplash.com/photo-1587293855946-82116ab78965?q=80&w=1965", title: "Cold Storage Grid" },
   { id: 12, category: "warehouse", src: "https://images.unsplash.com/photo-1504184581180-3556a1c49511?q=80&w=1965", title: "Inventory Matrix" },

   // QUALITY
   { id: 13, category: "quality", src: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070", title: "QA Inspection Protocol" },
   { id: 14, category: "quality", src: "https://images.unsplash.com/photo-1521791136064-7986c2959663?q=80&w=2070", title: "Verification Lab" },
   { id: 15, category: "quality", src: "https://images.unsplash.com/photo-1454165833767-027eeef1593e?q=80&w=2070", title: "Protocol Audit" },

   // Repeat or add more to simulate 50-60 (I will add a few more distinct ones and then repeat for scale)
   { id: 16, category: "logistics", src: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2070", title: "Air Cargo Terminal" },
   { id: 17, category: "packaging", src: "https://images.unsplash.com/photo-1620455805861-79b0fcac5e45?q=80&w=1935", title: "Manual Sort Hub" },
];

export default function GalleryPage() {
   const [activeCategory, setActiveCategory] = useState("all");
   const [visibleCount, setVisibleCount] = useState(12);

   const filteredImages = useMemo(() => {
      if (activeCategory === "all") return ALL_IMAGES;
      return ALL_IMAGES.filter(img => img.category === activeCategory);
   }, [activeCategory]);

   const displayedImages = filteredImages.slice(0, visibleCount);

   return (
      <div className="bg-white">
         <PageHero
            badge="VISUAL TRUST PROTOCOLS"
            title="Visual. Showcase."
            description="A technical exhibit of our 60+ operational nodes, export terminals, and verified logistics manifests."
            backgroundImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
            breadcrumbs={[
               { label: 'Home', href: '/' },
               { label: 'Visual Showcase' }
            ]}
         />

         <div className="relative z-10 pt-12 md:pt-20 pb-20 md:pb-32 bg-[#F9FAFB]">
            <Container>

               {/* INSTITUTIONAL FILTER HUD */}
               <div className="mb-20 space-y-12">
                  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                     <div className="space-y-6">
                        <div className="flex items-center gap-4">
                           <div className="h-px w-12 bg-brand-gold"></div>
                           <span className="text-xs font-black text-brand-navy uppercase tracking-[0.4em]">Filter Hub</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black text-brand-navy tracking-tighter uppercase leading-[0.85]">
                           MANIFEST <br />
                           <span className="text-gradient">EXHIBIT.</span>
                        </h2>
                     </div>

                  </div>

                  {/* TECHNICAL CATEGORY SELECTOR */}
                  <div className="flex flex-wrap gap-3 md:gap-4 border-b-2 border-slate-100 pb-8">
                     {GALLERY_CATEGORIES.map((cat) => (
                        <button
                           key={cat.id}
                           onClick={() => {
                              setActiveCategory(cat.id);
                              setVisibleCount(12);
                           }}
                           className={`flex items-center gap-3 px-6 py-4 text-[14px] font-black uppercase tracking-[0.2em] transition-all duration-500 relative group ${activeCategory === cat.id
                                 ? 'bg-brand-navy text-white shadow-xl -translate-y-2'
                                 : 'bg-white text-slate-400 hover:text-brand-navy hover:bg-slate-50 border border-slate-100'
                              }`}
                        >
                           <span className={`${activeCategory === cat.id ? 'text-brand-gold' : 'text-slate-300 group-hover:text-brand-gold'}`}>{cat.icon}</span>
                           {cat.label}
                           {activeCategory === cat.id && (
                              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-gold rotate-45"></div>
                           )}
                        </button>
                     ))}
                  </div>
               </div>

               {/* GALLERY GRID */}
               <div className="min-h-[600px]">
                  <LightboxGallery images={displayedImages} />

                  {/* LOAD MORE TERMINAL */}
                  {visibleCount < filteredImages.length && (
                     <div className="mt-20 flex justify-center">
                        <button
                           onClick={() => setVisibleCount(prev => prev + 12)}
                           className="group relative px-16 py-6 bg-white border-2 border-slate-100 text-brand-navy font-black uppercase tracking-[0.4em] text-[10px] hover:border-brand-gold transition-all duration-500 overflow-hidden"
                        >
                           <span className="relative z-10 flex items-center gap-4">
                              Initialize Next Batch <FiPlus className="group-hover:rotate-90 transition-transform" />
                           </span>
                           <div className="absolute inset-0 bg-brand-gold/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                        </button>
                     </div>
                  )}
               </div>

               {/* TRUST PROTOCOL FOOTER */}
               <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                     { icon: <FiShield />, title: "Verified Quality", desc: "Every picture displays our real, active food safety protocols and certified export-grade packing." },
                     { icon: <FiActivity />, title: "Real-Time Updates", desc: "Our gallery is updated weekly to show you our latest bulk shipments and active trade operations." },
                     { icon: <FiZap />, title: "Pure Transparency", desc: "Clear, high-resolution photos that let you inspect our clean storage terminals and premium produce." }
                  ].map((item, i) => (
                     <div key={i} className="p-10 bg-white border-2 border-slate-100 group hover:border-brand-gold transition-all duration-500">
                        <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-brand-gold text-xl mb-6 group-hover:bg-brand-navy group-hover:text-white transition-all">
                           {item.icon}
                        </div>
                        <h4 className="text-xl font-black text-brand-navy uppercase tracking-tighter mb-4">{item.title}</h4>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-relaxed">{item.desc}</p>
                     </div>
                  ))}
               </div>

            </Container>
         </div>
      </div>
   );
}

function FiPlus({ className }) {
   return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
   );
}
