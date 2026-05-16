"use client";
import { BLOGS } from "@/data/blogs";
import Link from "next/link";
import { FiArrowRight, FiBook, FiClock, FiCheckCircle, FiActivity, FiZap, FiShield } from "react-icons/fi";

export function BlogPreview() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-slate-50/50">
      
      {/* ATMOSPHERIC BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-gold/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-brand-navy/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        
        {/* INSTITUTIONAL HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 md:mb-32 gap-10">
          <div className="max-w-4xl animate-reveal">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-brand-navy/5 rounded-full mb-8 border border-brand-navy/5 backdrop-blur-md">
              <FiBook className="text-brand-gold animate-pulse" />
              <span className="text-[10px] font-black text-brand-navy uppercase tracking-[0.5em]">Market Intelligence Hub</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-brand-navy mb-8 tracking-tighter leading-[0.85]">
              STRATEGIC <br />
              <span className="text-gradient">INSIGHTS.</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl leading-relaxed uppercase tracking-tight opacity-70">
              MITRAY EXIM's strategic research division provides high-speed market intelligence and compliance guides for the modern global importer.
            </p>
          </div>
          
          <div className="hidden lg:flex flex-col items-end animate-reveal delay-200">
             <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-px bg-slate-200"></div>
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">Audit Status</span>
             </div>
             <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                <FiActivity className="text-emerald-500 text-xl" />
                <span className="text-[11px] font-black text-brand-navy uppercase tracking-widest">Live Intel Feed</span>
             </div>
          </div>
        </div>

        {/* INSIGHTS GRID - TERMINAL STYLE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {BLOGS.slice(0, 2).map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group relative">
              <div 
                className="relative glass-card p-10 md:p-16 rounded-[3rem] md:rounded-[4.5rem] overflow-hidden flex flex-col h-full bg-white/70 transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_60px_100px_-20px_rgba(44,74,94,0.15)] border-white animate-reveal"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative z-10 flex flex-col h-full">
                  {/* METADATA MANIFEST */}
                  <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-3">
                       <span className="px-5 py-2 bg-brand-navy text-white rounded-xl text-[9px] font-black uppercase tracking-widest transition-colors group-hover:bg-brand-gold group-hover:text-brand-navy">
                         {post.category}
                       </span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-400">
                       <FiZap className="text-brand-gold" />
                       <span className="text-[9px] font-black uppercase tracking-widest">{post.readTime} Manifest</span>
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-black text-brand-navy mb-8 tracking-tighter leading-[1.1] transition-colors duration-500 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm md:text-lg text-slate-500 font-medium leading-relaxed opacity-70 mb-12 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* AUTHOR SIGNATURE */}
                  <div className="mt-auto pt-10 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="relative">
                         <div className="w-14 h-14 md:w-16 md:h-16 bg-brand-navy rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-2xl relative z-10 border-4 border-white">
                           {post.author.name.charAt(0)}
                         </div>
                         <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-brand-gold rounded-full border-4 border-white flex items-center justify-center shadow-xl z-20">
                            <FiCheckCircle className="text-brand-navy text-xs" />
                         </div>
                      </div>
                      <div>
                        <p className="text-[11px] md:text-xs font-black text-brand-navy uppercase tracking-widest mb-1">{post.author.name}</p>
                        <p className="text-[8px] md:text-[9px] text-slate-400 font-bold uppercase tracking-widest opacity-60">{post.author.role}</p>
                      </div>
                    </div>
                    
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-slate-50 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all duration-500 shadow-sm">
                       <FiArrowRight className="text-xl md:text-2xl group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* COMPLIANCE FOOTER */}
                  <div className="mt-8 flex items-center gap-2 opacity-30">
                    <FiShield className="text-emerald-500 text-xs" />
                    <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest italic">Institutional Industry Intelligence v2.4</span>
                  </div>
                </div>

                {/* SCANNER LINE ANIMATION */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent -translate-y-full group-hover:translate-y-[800px] transition-all duration-[2000ms] pointer-events-none"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="text-center animate-reveal delay-500">
          <Link href="/blog">
            <button className="group relative inline-flex items-center gap-6 px-12 py-7 bg-brand-navy rounded-[2.5rem] text-white font-black uppercase tracking-widest text-[11px] hover:bg-brand-gold hover:text-brand-navy transition-all duration-700 shadow-2xl overflow-hidden active:scale-95">
              <span className="relative z-10">Access Intelligence Archives</span>
              <FiArrowRight className="relative z-10 text-xl group-hover:translate-x-2 transition-transform duration-500" />
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
