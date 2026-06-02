"use client";

import { BLOGS } from "@/data/blogs";
import { BlogCard } from "@/components/blog/BlogCard";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { FiArrowRight, FiInfo, FiActivity, FiSearch } from "react-icons/fi";
import Link from "next/link";

export default function BlogPage() {
  const featuredPost = BLOGS[0];
  const remainingPosts = BLOGS.slice(1);

  return (
    <div className="bg-white">
      {/* 1. CINEMATIC HERO - SHARP EDGES */}
      <PageHero 
        badge="MARKET INTELLIGENCE HUB"
        title="Institutional. Insights."
        description="Access technical manifestos and real-time market telemetry. Global trade analysis for the agricultural elite."
        backgroundImage="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2070&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Intelligence Hub' }
        ]}
      />

      <div className="relative z-10 pt-12 md:pt-20 pb-20 md:pb-32 bg-[#F9FAFB]">
        <Container>
          
          {/* 2. EDGY SECTION HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
             <div className="space-y-6">
                <div className="flex items-center gap-4">
                   <div className="h-px w-12 bg-brand-gold"></div>
                   <span className="text-xs font-black text-brand-navy uppercase tracking-[0.4em]">Protocol Archives</span>
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-brand-navy tracking-tighter uppercase leading-[0.85]">
                   TECHNICAL <br />
                   <span className="text-gradient">PUBLICATIONS.</span>
                </h2>
             </div>
             <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 px-6 py-4 bg-white border-2 border-slate-100 shadow-sm">
                   <FiActivity className="text-emerald-500 animate-pulse" />
                   <span className="text-xs font-black text-brand-navy uppercase tracking-widest">Real-Time Trade Feed: Active</span>
                </div>
                <div className="relative group">
                   <FiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-brand-gold transition-colors" />
                   <input 
                     type="text" 
                     placeholder="SEARCH MANIFESTS..." 
                     className="w-full md:w-80 pl-14 pr-6 py-4 bg-white border-2 border-slate-100 outline-none focus:border-brand-gold font-black text-[10px] uppercase tracking-widest transition-all"
                   />
                </div>
             </div>
          </div>

          <div className="space-y-12 md:space-y-20">
             {/* 3. FEATURED MANIFEST - FULL WIDTH EDGY */}
             {featuredPost && (
                <div className="animate-reveal">
                   <div className="mb-6 flex items-center gap-4">
                      <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.4em]">Featured Analysis</span>
                      <div className="h-px flex-1 bg-slate-100"></div>
                   </div>
                   <BlogCard post={featuredPost} featured={true} />
                </div>
             )}

             {/* 4. REMAINING MANIFESTS GRID - SHARP BENTO */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                {remainingPosts.map((post, index) => (
                  <div 
                    key={post.slug}
                    className="animate-reveal opacity-0"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <BlogCard post={post} />
                  </div>
                ))}
             </div>

             {/* 5. EMPTY STATE */}
             {BLOGS.length === 0 && (
               <div className="p-20 text-center bg-white border-2 border-dashed border-slate-100">
                  <h3 className="text-2xl font-black text-brand-navy uppercase tracking-widest mb-4">No Manifests Available</h3>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Awaiting data synchronization...</p>
               </div>
             )}
          </div>

          {/* 6. NEWSLETTER TERMINAL - SHARP DESIGN */}
          <div className="mt-20 md:mt-40 relative p-12 md:p-24 bg-brand-navy text-white overflow-hidden animate-reveal">
             <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 blur-[150px] rounded-full"></div>
             <div className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
             
             <div className="relative z-10 max-w-4xl">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></div>
                   <span className="text-xs font-black text-brand-gold uppercase tracking-[0.4em]">Intelligence Sync</span>
                </div>
                <h2 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-12 uppercase">
                   GET THE <br />
                   <span className="text-gradient">MANIFEST.</span>
                </h2>
                <div className="flex flex-col md:flex-row gap-0 max-w-2xl group shadow-2xl">
                   <input 
                     type="email" 
                     placeholder="OFFICIAL@COMPANY.COM"
                     className="flex-1 bg-white border-2 border-white px-8 py-6 text-sm font-black text-brand-navy outline-none placeholder:text-slate-300 focus:placeholder:text-slate-100 transition-all"
                   />
                   <button className="px-12 py-6 bg-brand-gold text-brand-navy font-black uppercase tracking-[0.3em] text-xs md:text-sm hover:bg-white transition-all duration-500 border-2 border-brand-gold">
                      Initialize
                   </button>
                </div>
             </div>
          </div>

        </Container>
      </div>
    </div>
  );
}
