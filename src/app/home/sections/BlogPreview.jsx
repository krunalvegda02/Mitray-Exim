import { BLOGS } from "@/data/blogs";
import Link from "next/link";
import { FiArrowRight, FiBook, FiClock, FiCheckCircle } from "react-icons/fi";

export function BlogPreview() {
  return (
    <section className="relative py-12">
      <div className="relative z-10">
        
        {/* STANDARDIZED HEADER */}
        <div className="text-center mb-16 animate-reveal">
          <div className="inline-flex items-center px-5 py-2 bg-brand-gold/10 rounded-full mb-6 border border-brand-gold/20 backdrop-blur-md">
            <FiBook className="text-brand-gold mr-2" />
            <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.4em]">Strategic Intel</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-brand-navy mb-8 tracking-tighter leading-none">
            Market <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium opacity-80 uppercase tracking-tight">
            Industry compliance guides and global export intelligence for modern importers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {BLOGS.slice(0, 2).map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div 
                className="group relative glass-card p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden flex flex-col h-full animate-reveal"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative z-10 flex flex-col h-full">
                  {/* Category & Metadata */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="px-4 py-1.5 bg-brand-gold/10 text-brand-gold rounded-full text-[9px] font-black uppercase tracking-widest border border-brand-gold/20 backdrop-blur-md">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-slate-400">
                       <FiClock className="text-xs" />
                       <span className="text-[9px] font-black uppercase tracking-widest">{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-4xl font-black text-brand-navy mb-6 tracking-tighter leading-tight group-hover:text-brand-gold transition-colors duration-500 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed opacity-70 mb-10 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Author Manifest */}
                  <div className="mt-auto pt-8 border-t border-slate-100/50 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-navy rounded-full flex items-center justify-center text-white font-black text-sm shadow-xl">
                        {post.author.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-[10px] md:text-xs font-black text-brand-navy uppercase tracking-widest">{post.author.name}</p>
                        <p className="text-[8px] md:text-[9px] text-slate-400 font-bold uppercase tracking-widest">{post.author.role}</p>
                      </div>
                    </div>
                    <FiArrowRight className="text-xl text-brand-gold group-hover:translate-x-2 transition-transform duration-500" />
                  </div>

                  {/* Verified Strip */}
                  <div className="mt-6 flex items-center gap-2 opacity-40">
                    <FiCheckCircle className="text-emerald-500 text-xs" />
                    <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest italic">Verified Industry Intelligence</span>
                  </div>
                </div>

                {/* Dynamic Shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1500 pointer-events-none"></div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center animate-reveal delay-500">
          <Link href="/blog">
            <button className="group relative inline-flex items-center gap-4 px-12 py-6 bg-brand-navy rounded-[2rem] text-white font-black uppercase tracking-widest text-[11px] hover:bg-brand-gold hover:text-brand-navy transition-all duration-700 shadow-2xl overflow-hidden active:scale-95">
              <span className="relative z-10">Access Full Manifest</span>
              <FiArrowRight className="relative z-10 text-lg group-hover:translate-x-2 transition-transform duration-500" />
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
