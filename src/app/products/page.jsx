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
   { id: "wheat-flour", label: "Wheat & Flour", icon: <FiShield />, gradient: "from-amber-600 to-yellow-800" },
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

         <div className="relative z-10 -mt-10 md:-mt-15  ">
            <Container>

                {/* UNIQUE BENTO DISCOVERY HUB */}
                <div className="mb-8 md:mb-12 animate-reveal delay-500 opacity-0">

                   {/* A. DESKTOP / PC VIEW (Original High-Fidelity Bento Grid - lg screens and above) */}
                   <div className="hidden lg:grid grid-cols-12 gap-6">
                      {/* 1. SEARCH CONSOLE (Large Block) */}
                      <div className="lg:col-span-6 group relative">
                         <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-gold to-brand-navy rounded-[2rem] blur opacity-10 group-focus-within:opacity-35 transition-opacity duration-750"></div>
                         <div className="relative h-full p-6 rounded-[2rem] bg-white/98 backdrop-blur-[40px] border border-white/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] flex flex-col justify-center transition-all duration-550 hover:shadow-brand-gold/10">
                            <p className="text-[11px] font-black text-brand-navy/80 uppercase tracking-[0.35em] mb-2.5">Manifest Search Console</p>
                            <div className="relative">
                               <FiSearch className="absolute left-0 top-1/2 -translate-y-1/2 text-2xl text-slate-400 group-focus-within:text-brand-gold transition-all duration-700" />
                               <input
                                  type="text"
                                  placeholder="Type to search global assets..."
                                  value={searchQuery}
                                  onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(ITEMS_PER_PAGE); }}
                                  className="w-full bg-transparent border-none pl-12 py-1 text-xl font-black text-brand-navy placeholder:text-slate-400 outline-none transition-all tracking-tighter"
                               />
                            </div>
                         </div>
                      </div>

                      {/* 2. STATS CONSOLE - BOX 1 */}
                      <div className="lg:col-span-3 group relative">
                         <div className="relative h-full p-6 rounded-[2rem] bg-white/95 backdrop-blur-2xl border border-white/50 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] flex items-center gap-4 overflow-hidden transition-all duration-500 hover:shadow-brand-gold/5">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 blur-3xl -translate-y-12 translate-x-12"></div>
                            <div className="w-12 h-12 rounded-2xl bg-brand-navy/5 flex items-center justify-center text-brand-gold text-2xl animate-pulse">
                               <FiActivity />
                            </div>
                            <div>
                               <p className="text-3xl font-black text-brand-navy tracking-tighter leading-none mb-1">{filteredProducts.length}</p>
                               <p className="text-[9px] font-bold uppercase tracking-widest text-brand-navy/60 leading-none">Total Products</p>
                            </div>
                         </div>
                      </div>

                      {/* 3. STATS CONSOLE - BOX 2 */}
                      <div className="lg:col-span-3 group relative">
                         <div className="relative h-full p-6 rounded-[2rem] bg-white/95 backdrop-blur-2xl border border-white/50 hover:border-brand-gold/30 flex items-center gap-4 group hover:bg-white/98 transition-all duration-700 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden">
                            <div className="w-12 h-12 rounded-2xl bg-brand-navy/5 flex items-center justify-center text-brand-gold text-2xl transition-colors duration-500">
                               <FiGlobe className="group-hover:text-brand-gold-dark" />
                            </div>
                            <div>
                               <p className="text-lg font-black text-brand-navy tracking-tighter uppercase leading-none mb-1">Global</p>
                               <p className="text-[9px] font-bold uppercase tracking-widest text-brand-navy/60 leading-none">20+ Countries</p>
                            </div>
                         </div>
                      </div>

                      {/* 4. CATEGORY HUB - BENTO GRID */}
                      <div className="lg:col-span-12 grid grid-cols-7 gap-4 mt-2">
                         {CATEGORIES.map((cat) => (
                            <button
                               key={cat.id}
                               onClick={() => { setSelectedCategory(cat.id); setVisibleCount(ITEMS_PER_PAGE); }}
                               className={`relative group/cat overflow-hidden flex flex-col items-start p-6 rounded-[2.5rem] text-left w-auto transition-all duration-500 border hover-lift
                                  ${selectedCategory === cat.id
                                     ? 'border-brand-gold bg-brand-navy text-white shadow-lg scale-105 z-10'
                                     : 'border-slate-100 bg-slate-50 text-brand-navy hover:bg-white hover:border-brand-gold/30'
                                  }`}
                            >
                               {/* Background Icon Accent */}
                               <div className={`absolute -right-4 -bottom-4 text-7xl opacity-[0.03] group-hover/cat:opacity-[0.08] transition-opacity duration-1000 ${selectedCategory === cat.id ? 'text-brand-gold' : 'text-brand-navy'}`}>
                                  {cat.icon}
                               </div>

                               <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xl transition-all duration-700 ${selectedCategory === cat.id ? 'bg-brand-gold text-brand-navy' : 'bg-white shadow-sm text-brand-gold group-hover/cat:rotate-12'
                                  }`}>
                                  {cat.icon}
                               </div>
                               <p className={`text-[11px] font-black uppercase tracking-widest leading-tight ${selectedCategory === cat.id ? 'text-white' : 'text-brand-navy'}`}>
                                  {cat.label}
                               </p>
                            </button>
                         ))}
                      </div>
                   </div>

                     {/* B. MOBILE / TABLET VIEW (Compact User-Friendly Layout - smaller than lg screens) */}
                     <div className="lg:hidden flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6">
                        {/* 1. SEARCH CONSOLE */}
                        <div className="group relative w-full md:col-span-2">
                           <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-gold to-brand-navy rounded-[2rem] blur opacity-10 group-focus-within:opacity-30 transition-opacity duration-750"></div>
                           <div className="relative w-full p-5 md:p-6 rounded-[2rem] bg-white/98 backdrop-blur-[40px] border border-white/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] flex flex-col justify-center transition-all duration-550">
                              <p className="text-[10px] md:text-[11px] font-black text-brand-navy/80 uppercase tracking-[0.35em] mb-2">Manifest Search Console</p>
                              <div className="relative">
                                 <FiSearch className="absolute left-0 top-1/2 -translate-y-1/2 text-xl md:text-2xl text-slate-400 group-focus-within:text-brand-gold transition-all duration-700" />
                                 <input
                                    type="text"
                                    placeholder="Type to search assets..."
                                    value={searchQuery}
                                    onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(ITEMS_PER_PAGE); }}
                                    className="w-full bg-transparent border-none pl-8 md:pl-10 py-1 text-lg md:text-xl font-black text-brand-navy placeholder:text-slate-400 outline-none transition-all tracking-tighter"
                                 />
                              </div>
                           </div>
                        </div>

                        {/* 2. CATEGORY SELECTOR */}
                        <div className="w-full md:col-span-2">
                           {/* Mobile Swiper Track (hidden on tablet) */}
                           <div className="flex md:hidden overflow-x-auto no-scrollbar gap-1.5 p-1 rounded-full bg-slate-50/80 border border-slate-100/50 backdrop-blur-md max-w-full shadow-sm">
                              {CATEGORIES.map((cat) => (
                                 <button
                                    key={cat.id}
                                    onClick={() => { setSelectedCategory(cat.id); setVisibleCount(ITEMS_PER_PAGE); }}
                                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all duration-300 shrink-0
                                       ${selectedCategory === cat.id
                                          ? 'bg-brand-navy text-white shadow-md border-brand-gold/10'
                                          : 'text-brand-navy/70 hover:text-brand-navy hover:bg-white/80'
                                       }`}
                                 >
                                    <span className="text-[10px] text-brand-gold">
                                       {cat.icon}
                                    </span>
                                    <span>{cat.label}</span>
                                 </button>
                              ))}
                           </div>

                           {/* Tablet Premium Grid (visible only on md screens) */}
                           <div className="hidden md:grid grid-cols-3 gap-3 md:gap-4 w-full">
                              {CATEGORIES.map((cat) => (
                                 <button
                                    key={cat.id}
                                    onClick={() => { setSelectedCategory(cat.id); setVisibleCount(ITEMS_PER_PAGE); }}
                                    className={`relative group/cat overflow-hidden flex items-center gap-4 p-4.5 rounded-[2rem] text-left w-full transition-all duration-500 border hover-lift
                                       ${selectedCategory === cat.id
                                          ? 'border-brand-gold bg-brand-navy text-white shadow-lg'
                                          : 'border-slate-100 bg-slate-50 text-brand-navy hover:bg-white hover:border-brand-gold/30'
                                       }`}
                                 >
                                    <div className={`w-9 h-9 rounded-2xl flex items-center justify-center text-base transition-all duration-700 ${selectedCategory === cat.id ? 'bg-brand-gold text-brand-navy' : 'bg-white shadow-sm text-brand-gold'}`}>
                                       {cat.icon}
                                    </div>
                                    <p className="text-[10px] font-black uppercase tracking-widest leading-tight">
                                       {cat.label}
                                    </p>
                                 </button>
                              ))}
                           </div>
                        </div>

                        {/* 3. STATS CARDS */}
                        {/* Mobile Capsule (hidden on tablet) */}
                        <div className="w-full md:hidden">
                           <div className="grid grid-cols-2 p-3 rounded-full bg-white/95 border border-white/60 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] backdrop-blur-md">
                              <div className="flex items-center justify-center gap-3 border-r border-slate-200/60 py-1">
                                 <div className="w-8 h-8 rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-gold text-base shrink-0 animate-pulse">
                                    <FiActivity />
                                 </div>
                                 <div className="text-left">
                                    <p className="text-lg font-black text-brand-navy leading-none mb-0.5">{filteredProducts.length}</p>
                                    <p className="text-[8px] font-bold uppercase tracking-widest text-brand-navy/60 leading-none">Total Products</p>
                                 </div>
                              </div>
                              <div className="flex items-center justify-center gap-3 py-1">
                                 <div className="w-8 h-8 rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-gold text-base shrink-0">
                                    <FiGlobe className="text-brand-gold" />
                                 </div>
                                 <div className="text-left">
                                    <p className="text-lg font-black text-brand-navy leading-none mb-0.5">Global</p>
                                    <p className="text-[8px] font-bold uppercase tracking-widest text-brand-navy/60 leading-none">20+ Countries</p>
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* Tablet Individual Stats Cards (visible only on md screens) */}
                        <div className="hidden md:flex items-center gap-4 col-span-2 w-full">
                           <div className="flex-1 p-5 rounded-[2rem] bg-white/95 border border-slate-100 shadow-sm flex items-center gap-4 hover-lift transition-all duration-300">
                              <div className="w-11 h-11 rounded-2xl bg-brand-navy/5 flex items-center justify-center text-brand-gold text-xl animate-pulse">
                                 <FiActivity />
                              </div>
                              <div>
                                 <p className="text-2xl font-black text-brand-navy tracking-tighter leading-none mb-1">{filteredProducts.length}</p>
                                 <p className="text-[9px] font-bold uppercase tracking-widest text-brand-navy/60 leading-none">Total Products</p>
                              </div>
                           </div>
                           <div className="flex-1 p-5 rounded-[2rem] bg-white/95 border border-slate-100 shadow-sm flex items-center gap-4 hover-lift transition-all duration-300">
                              <div className="w-11 h-11 rounded-2xl bg-brand-navy/5 flex items-center justify-center text-brand-gold text-xl">
                                 <FiGlobe />
                              </div>
                              <div>
                                 <p className="text-2xl font-black text-brand-navy tracking-tighter uppercase leading-none mb-1">Global</p>
                                 <p className="text-[9px] font-bold uppercase tracking-widest text-brand-navy/60 leading-none">20+ Countries</p>
                              </div>
                           </div>
                        </div>
                     </div>
                </div>

               {/* PRODUCT MANIFEST - UNIQUE CARD ARCHITECTURE */}
               {displayedProducts.length > 0 ? (
                  <>
                      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 md:gap-8 pb-20">
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
                                     <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/50 to-brand-navy/20 opacity-0 group-hover/card:opacity-100 transition-all duration-700 p-4 md:p-8 flex flex-col justify-between">
                                        <div className="space-y-3 md:space-y-4 translate-y-8 group-hover/card:translate-y-0 transition-transform duration-700">
                                           <div className="flex items-center justify-between border-b border-white/10 pb-2 md:pb-4">
                                              <span className="text-[8px] md:text-[9px] font-black text-white/40 uppercase tracking-widest">Origin</span>
                                              <span className="text-[9px] md:text-[10px] font-black text-brand-gold uppercase tracking-widest">{product.origin}</span>
                                           </div>
                                           <div className="flex items-center justify-between border-b border-white/10 pb-2 md:pb-4">
                                              <span className="text-[8px] md:text-[9px] font-black text-white/40 uppercase tracking-widest">Moq Status</span>
                                              <span className="text-[9px] md:text-[10px] font-black text-white uppercase tracking-widest">{product.moq}</span>
                                           </div>
                                           <div className="flex items-center gap-2 md:gap-3 pt-1 md:pt-2">
                                              <FiTruck className="text-brand-gold text-xs md:text-base" />
                                              <span className="text-[8px] md:text-[9px] font-black text-white uppercase tracking-widest truncate">{product.shipping}</span>
                                           </div>
                                        </div>

                                        <div className="w-full py-2.5 md:py-4 bg-brand-gold text-brand-navy rounded-full text-[8px] md:text-[10px] font-black text-center uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-white transition-all duration-550 active:scale-95">
                                           Initialize Inquiry
                                        </div>
                                     </div>

                                     {/* Floating Category Badge */}
                                     <div className="absolute top-3 left-3 px-2.5 py-1 md:top-6 md:left-6 md:px-4 md:py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[7px] md:text-[8px] font-black text-brand-navy uppercase tracking-widest border border-white shadow-xl group-hover/card:opacity-0 transition-opacity">
                                        {CATEGORIES.find(c => c.id === product.category)?.label || product.category}
                                     </div>
                                  </div>

                                  {/* Info Manifest */}
                                  <div className="p-3.5 sm:p-5 md:p-8 flex-1 flex flex-col justify-between">
                                     <div>
                                        <div className="flex items-start justify-between gap-1 mb-2 md:mb-4">
                                           <h3 className="text-xs sm:text-base md:text-xl font-black text-brand-navy uppercase tracking-tight sm:tracking-tighter leading-tight group-hover/card:text-brand-gold transition-colors line-clamp-2">
                                              {product.name}
                                           </h3>
                                           <FiChevronRight className="text-brand-gold text-xs sm:text-base translate-x-0 group-hover/card:translate-x-1.5 transition-transform shrink-0 mt-0.5" />
                                        </div>
                                        <p className="text-[8px] sm:text-[9px] md:text-[11px] font-medium text-slate-400 uppercase tracking-widest leading-relaxed mb-4 md:mb-6 line-clamp-2 opacity-60">
                                           {product.description}
                                        </p>
                                     </div>
                                     <div className="mt-auto h-0.5 w-6 bg-slate-100 group-hover/card:w-full group-hover/card:bg-brand-gold transition-all duration-700"></div>
                                  </div>
                               </div>
                            </Link>
                         ))}
                      </div>

                      {/* DYNAMIC LOAD TRIGGER */}
                      {visibleCount < filteredProducts.length && (
                         <div className="flex flex-col items-center py-8 md:py-12 animate-reveal">
                            <div className="w-px h-8 md:h-12 bg-gradient-to-b from-brand-gold to-transparent mb-6 md:mb-8"></div>
                            <button
                               onClick={() => setVisibleCount(prev => prev + ITEMS_PER_PAGE)}
                               className="group relative px-10 py-4.5 md:px-14 md:py-5.5 bg-brand-navy text-white rounded-full font-black uppercase tracking-[0.4em] text-[9px] md:text-[12px] shadow-2xl hover:bg-brand-gold hover:text-brand-navy transition-all duration-700 active:scale-95"
                            >
                               Reveal More Assets
                            </button>
                         </div>
                      )}
                  </>
               ) : (
                  <div className="py-20 md:py-24 text-center animate-reveal">
                     <FiActivity className="text-5xl text-slate-100 mx-auto mb-4 animate-pulse" />
                     <h3 className="text-xl md:text-2xl font-black text-brand-navy uppercase tracking-widest mb-2">Manifest Out of Sync</h3>
                     <p className="text-slate-400 font-bold uppercase tracking-widest text-[9px] md:text-[10px]">No matches found in the current trade manifest.</p>
                  </div>
               )}

                 {/* FINAL CTA TERMINAL */}
                 <div className="py-8 md:py-12">
                    <div className="relative glass-card p-8 sm:p-12 md:p-16 rounded-[2rem] md:rounded-[2.5rem] text-center shadow-2xl overflow-hidden animate-reveal">
                       <div className="absolute inset-0 z-0 opacity-20">
                          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/20 blur-[150px] rounded-full animate-subtle-float"></div>
                       </div>
                       <div className="relative z-10 max-w-4xl mx-auto">
                          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-6 md:mb-8 uppercase text-brand-navy">
                             BULK <span className="text-gradient">INQUIRY.</span>
                          </h2>
                          <p className="text-slate-600 text-xs sm:text-sm md:text-lg lg:text-xl font-bold uppercase tracking-tight leading-relaxed mb-8 md:mb-10 opacity-80">
                             Need specialized quotes for our entire portfolio? Connect with our institutional export desk today.
                          </p>
                          <Link href="/contact">
                             <button className="group relative px-8 py-4.5 md:px-10 md:py-5 bg-brand-navy text-white rounded-full font-black uppercase tracking-[0.3em] text-[10px] md:text-[11px] shadow-2xl hover:bg-brand-gold hover:text-brand-navy transition-all duration-700 active:scale-95">
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
