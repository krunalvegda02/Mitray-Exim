"use client";

import { useState, useMemo, useEffect } from "react";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { PRODUCTS } from "@/data/products";
import { FiSearch, FiArrowRight, FiActivity, FiZap, FiPackage, FiShield, FiGlobe, FiChevronRight, FiGrid, FiArrowUp, FiTruck, FiBox, FiCpu } from "react-icons/fi";
import Link from "next/link";

const CATEGORIES = [
  { id: "all", label: "Full Manifest", icon: <FiGrid />, gradient: "from-brand-navy to-slate-800" },
  { id: "fresh-vegetables", label: "Vegetables", icon: <FiPackage />, gradient: "from-emerald-600 to-teal-800" },
  { id: "fresh-fruits", label: "Fresh Fruits", icon: <FiActivity />, gradient: "from-orange-500 to-red-700" },
  { id: "spices", label: "Premium Spices", icon: <FiZap />, gradient: "from-brand-gold to-orange-600" },
  { id: "rice", label: "Rice & Grains", icon: <FiBox />, gradient: "from-blue-600 to-indigo-800" },
  { id: "dehydrated", label: "Dehydrated", icon: <FiCpu />, gradient: "from-slate-600 to-slate-900" },
];

const ITEMS_PER_PAGE = 12;

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 1000);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className="bg-white">
      <PageHero 
        badge="INSTITUTIONAL ASSETS"
        title="PRODUCT MANIFEST."
        description="A high-fidelity exploration hub for India's finest agricultural exports. Engineered for global procurement excellence."
        backgroundImage="https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2070&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Products' }
        ]}
      />

      <div className="relative z-10 -mt-20 md:-mt-32">
        <Container>
          
          {/* UNIQUE BENTO DISCOVERY HUB */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 mb-16 md:mb-24 animate-reveal delay-500 opacity-0">
             
             {/* 1. SEARCH CONSOLE (Large Block) */}
             <div className="lg:col-span-8 group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold/20 to-brand-navy/20 rounded-[2rem] blur-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-1000"></div>
                <div className="relative h-full glass-card p-8 md:p-12 rounded-[2rem] bg-white border-white shadow-2xl flex flex-col justify-center">
                   <p className="text-[10px] font-black text-brand-gold uppercase tracking-[0.5em] mb-6">Manifest Search Console</p>
                   <div className="relative">
                      <FiSearch className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl md:text-5xl text-slate-200 group-focus-within:text-brand-gold transition-all duration-700" />
                      <input 
                        type="text" 
                        placeholder="Type to search global assets..." 
                        value={searchQuery}
                        onChange={(e) => {setSearchQuery(e.target.value); setVisibleCount(ITEMS_PER_PAGE);}}
                        className="w-full bg-transparent border-none pl-12 md:pl-20 py-4 text-2xl md:text-6xl font-black text-brand-navy placeholder:text-slate-100 outline-none transition-all tracking-tighter"
                      />
                   </div>
                </div>
             </div>

             {/* 2. STATS CONSOLE (Small Block) */}
             <div className="lg:col-span-4 hidden lg:flex flex-col gap-4">
                <div className="flex-1 glass-card p-8 rounded-[2rem] bg-brand-navy text-white flex flex-col justify-between border-white/5 relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 blur-3xl -translate-y-16 translate-x-16"></div>
                   <FiActivity className="text-brand-gold text-2xl animate-pulse" />
                   <div>
                      <p className="text-4xl font-black tracking-tighter mb-1">{filteredProducts.length}</p>
                      <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 leading-none">Institutional Assets Synced</p>
                   </div>
                </div>
                <div className="flex-1 glass-card p-8 rounded-[2rem] bg-slate-50 border-slate-100 flex flex-col justify-between group hover:bg-brand-gold transition-all duration-700">
                   <FiGlobe className="text-brand-gold group-hover:text-brand-navy text-2xl transition-colors" />
                   <div>
                      <p className="text-xl font-black text-brand-navy tracking-tighter mb-1 uppercase">Global Hubs</p>
                      <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-brand-navy/60 transition-colors leading-none">14+ Trade Corridors Active</p>
                   </div>
                </div>
             </div>

             {/* 3. CATEGORY HUB - UNIQUE TILE GRID */}
             <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mt-2">
                {CATEGORIES.map((cat, idx) => (
                  <button
                    key={cat.id}
                    onClick={() => {setSelectedCategory(cat.id); setVisibleCount(ITEMS_PER_PAGE);}}
                    className={`relative group/cat overflow-hidden rounded-[1.5rem] md:rounded-[2rem] p-6 text-left transition-all duration-700 hover-lift border-2 ${
                      selectedCategory === cat.id 
                        ? 'border-brand-gold bg-brand-navy text-white shadow-2xl scale-105 z-10' 
                        : 'border-transparent bg-slate-50 text-brand-navy hover:bg-white hover:border-brand-gold/30'
                    }`}
                  >
                    {/* Background Icon Accent */}
                    <div className={`absolute -right-4 -bottom-4 text-7xl opacity-[0.03] group-hover/cat:opacity-[0.08] transition-opacity duration-1000 ${selectedCategory === cat.id ? 'text-brand-gold' : 'text-brand-navy'}`}>
                       {cat.icon}
                    </div>

                    <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center text-xl transition-all duration-700 ${
                      selectedCategory === cat.id ? 'bg-brand-gold text-brand-navy' : 'bg-white shadow-sm text-brand-gold group-hover/cat:rotate-12'
                    }`}>
                       {cat.icon}
                    </div>
                    <p className={`text-[10px] md:text-[11px] font-black uppercase tracking-widest leading-tight ${selectedCategory === cat.id ? 'text-white' : 'text-brand-navy'}`}>
                       {cat.label}
                    </p>
                  </button>
                ))}
             </div>
          </div>

          {/* PRODUCT MANIFEST - UNIQUE CARD ARCHITECTURE */}
          {displayedProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 pb-20">
                 {displayedProducts.map((product, idx) => (
                   <Link 
                     key={product.slug} 
                     href={`/products/${product.slug}`}
                     className="group relative animate-reveal opacity-0 block"
                     style={{ animationDelay: `${(idx % 12) * 50}ms` }}
                   >
                      <div className="relative glass-card bg-white rounded-[2rem] overflow-hidden border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 hover-lift h-full flex flex-col group/card">
                         
                         {/* Visual Manifest */}
                         <div className="relative aspect-[4/5] overflow-hidden bg-slate-50">
                            <img 
                              src={product.image} 
                              alt={product.name} 
                              className="w-full h-full object-cover transition-all duration-[2000ms] group-hover/card:scale-110 group-hover/card:rotate-2"
                            />
                            
                            {/* Overlay Hub (Appears on Hover) */}
                            <div className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm opacity-0 group-hover/card:opacity-100 transition-all duration-700 p-8 flex flex-col justify-between">
                               <div className="space-y-4 translate-y-8 group-hover/card:translate-y-0 transition-transform duration-700">
                                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                     <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Origin</span>
                                     <span className="text-[10px] font-black text-brand-gold uppercase tracking-widest">{product.origin}</span>
                                  </div>
                                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                     <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Moq Status</span>
                                     <span className="text-[10px] font-black text-white uppercase tracking-widest">{product.moq}</span>
                                  </div>
                                  <div className="flex items-center gap-3 pt-2">
                                     <FiTruck className="text-brand-gold" />
                                     <span className="text-[9px] font-black text-white uppercase tracking-widest">{product.shipping}</span>
                                  </div>
                               </div>
                               
                               <div className="w-full py-4 bg-brand-gold text-brand-navy rounded-xl text-[10px] font-black text-center uppercase tracking-[0.3em] hover:bg-white transition-all duration-500 active:scale-95">
                                  Initialize Inquiry
                               </div>
                            </div>
                            
                            {/* Floating Category Badge */}
                            <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-lg text-[8px] font-black text-brand-navy uppercase tracking-widest border border-white shadow-xl group-hover/card:opacity-0 transition-opacity">
                               {CATEGORIES.find(c => c.id === product.category)?.label || product.category}
                            </div>
                         </div>

                         {/* Info Manifest */}
                         <div className="p-6 md:p-8 flex-1 flex flex-col">
                            <div className="flex items-start justify-between mb-4">
                               <h3 className="text-lg md:text-xl font-black text-brand-navy uppercase tracking-tighter leading-tight group-hover/card:text-brand-gold transition-colors">
                                  {product.name}
                               </h3>
                               <FiChevronRight className="text-brand-gold translate-x-0 group-hover/card:translate-x-2 transition-transform" />
                            </div>
                            <p className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed mb-6 line-clamp-2 opacity-60">
                               {product.description}
                            </p>
                            <div className="mt-auto h-1 w-8 bg-slate-100 group-hover/card:w-full group-hover/card:bg-brand-gold transition-all duration-700"></div>
                         </div>
                      </div>
                   </Link>
                 ))}
              </div>

              {/* DYNAMIC LOAD TRIGGER */}
              {visibleCount < filteredProducts.length && (
                <div className="flex flex-col items-center py-16 animate-reveal">
                   <div className="w-px h-16 bg-gradient-to-b from-brand-gold to-transparent mb-12"></div>
                   <button 
                     onClick={() => setVisibleCount(prev => prev + ITEMS_PER_PAGE)}
                     className="group relative px-16 py-6 bg-brand-navy text-white rounded-2xl font-black uppercase tracking-[0.4em] text-[11px] shadow-2xl hover:bg-brand-gold hover:text-brand-navy transition-all duration-700 active:scale-95"
                   >
                      Reveal More Assets
                   </button>
                </div>
              )}
            </>
          ) : (
            <div className="py-32 text-center animate-reveal">
               <FiActivity className="text-6xl text-slate-100 mx-auto mb-6 animate-pulse" />
               <h3 className="text-2xl font-black text-brand-navy uppercase tracking-widest mb-2">Manifest Out of Sync</h3>
               <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">No matches found in the current trade grid.</p>
            </div>
          )}

          {/* FINAL CTA TERMINAL */}
          <div className="py-20">
             <div className="relative glass-card p-12 md:p-24 rounded-[3rem] bg-brand-navy text-center text-white shadow-2xl overflow-hidden animate-reveal">
                <div className="absolute inset-0 z-0 opacity-20">
                   <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/20 blur-[150px] rounded-full animate-subtle-float"></div>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto">
                   <h2 className="text-4xl md:text-8xl font-black tracking-tighter leading-none mb-10 uppercase">
                      BULK <span className="text-gradient">INQUIRY.</span>
                   </h2>
                   <p className="text-slate-400 text-sm md:text-2xl font-bold uppercase tracking-tight leading-relaxed mb-16 opacity-80">
                      Need specialized quotes for our entire portfolio? Connect with our institutional export desk today.
                   </p>
                   <Link href="/contact">
                      <button className="group relative px-12 py-6 bg-brand-gold text-brand-navy rounded-2xl font-black uppercase tracking-[0.3em] text-[11px] shadow-2xl hover:bg-white transition-all duration-700 active:scale-95">
                         Initialize Bulk Manifest
                      </button>
                   </Link>
                </div>
             </div>
          </div>

        </Container>
      </div>

      {/* FLOAT ACTION: SCROLL TO TOP */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-10 right-10 w-16 h-16 rounded-full bg-brand-navy text-brand-gold shadow-2xl border border-white/10 z-50 flex items-center justify-center transition-all duration-700 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      >
         <FiArrowUp className="text-2xl animate-bounce" />
      </button>
    </div>
  );
}
