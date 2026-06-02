"use client";
import { BLOGS } from "@/data/blogs";
import Link from "next/link";
import { FiArrowRight, FiBook, FiClock, FiCheckCircle, FiActivity, FiZap, FiShield } from "react-icons/fi";

export function BlogPreview() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-slate-50/50">
      
      {/* ATMOSPHERIC BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-gold/5 blur-[120px] rounded-full animate-subtle-float"></div>
        <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-brand-navy/5 blur-[120px] rounded-full animate-subtle-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        
        {/* STANDARDIZED HEADER ARCHITECTURE */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-brand-gold animate-line-grow w-0"></div>
            <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.5em] animate-reveal opacity-0">Export Insights</span>
            <div className="h-px bg-brand-gold animate-line-grow w-0"></div>
          </div>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-brand-navy mb-6 tracking-tighter leading-[0.85] animate-reveal delay-100 opacity-0">
            STRATEGIC <br />
            <span className="text-gradient">INSIGHTS.</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-lg font-medium max-w-2xl mx-auto leading-relaxed uppercase tracking-tight opacity-0 animate-reveal delay-300">
            Analyzing global agricultural trends, harvest seasons, export packaging compliance, and direct trade insights from India.
          </p>
        </div>

        {/* INSIGHTS GRID - STAGGERED REVEAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {BLOGS.slice(0, 2).map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group relative animate-reveal opacity-0" style={{ animationDelay: `${500 + (index * 200)}ms` }}>
              <div 
                className="relative glass-card p-8 md:p-12 rounded-2xl md:rounded-[2rem] overflow-hidden flex flex-col h-full bg-white/70 transition-all duration-700 hover-lift border-white"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8 md:mb-10">
                    <div className="flex items-center gap-3">
                       <span className="px-4 py-1.5 bg-brand-navy text-white rounded-lg text-[8px] font-black uppercase tracking-widest transition-all group-hover:bg-brand-gold group-hover:text-brand-navy">
                         {post.category}
                       </span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                       <FiZap className="text-brand-gold animate-pulse" />
                       <span className="text-[8px] font-black uppercase tracking-widest">{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-4xl font-black text-brand-navy mb-6 tracking-tighter leading-[1.1] transition-colors duration-500 line-clamp-2 group-hover:text-brand-gold">
                    {post.title}
                  </h3>

                  <p className="text-sm md:text-lg text-slate-500 font-medium leading-relaxed opacity-70 mb-8 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                         <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-navy rounded-xl flex items-center justify-center text-white font-black text-lg shadow-xl relative z-10 border-2 border-white group-hover:scale-110 transition-transform duration-500">
                           {post.author.name.charAt(0)}
                         </div>
                      </div>
                      <div>
                        <p className="text-[10px] md:text-xs font-black text-brand-navy uppercase tracking-widest leading-none mb-1">{post.author.name}</p>
                        <p className="text-[7px] md:text-[8px] text-slate-400 font-bold uppercase tracking-widest opacity-60 leading-none">{post.author.role}</p>
                      </div>
                    </div>
                    
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-50 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all duration-500 shadow-sm">
                       <FiArrowRight className="text-lg md:text-xl group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="text-center animate-reveal delay-1000 opacity-0">
          <Link href="/blog">
            <button className="group relative inline-flex items-center gap-6 px-10 py-5 bg-brand-navy rounded-xl text-white font-black uppercase tracking-widest text-[10px] hover:bg-brand-gold hover:text-brand-navy transition-all duration-700 shadow-xl overflow-hidden active:scale-95">
              <span className="relative z-10">Read All Insights & Articles</span>
              <FiArrowRight className="relative z-10 text-xl group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
