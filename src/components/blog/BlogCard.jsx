"use client";

import Link from "next/link";
import { FiArrowRight, FiCalendar, FiBookOpen, FiArrowUpRight, FiZap, FiActivity } from "react-icons/fi";

const getBlogImage = (post) => {
  if (post.image && !post.image.startsWith('/images/')) return post.image;
  const categoryImages = {
    'Export Guide': 'https://images.unsplash.com/photo-1521791136064-7986c2923216?q=80&w=2069&auto=format&fit=crop',
    'Market Trends': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    'Compliance': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
    'Logistics': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
  };
  return categoryImages[post.category] || 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop';
};

export function BlogCard({ post, featured = false }) {
  const blogImage = getBlogImage(post);

  return (
    <Link href={`/blog/${post.slug}`} className="group relative block">
      {/* SHARP EDGY SHADOW */}
      <div className="absolute inset-0 bg-brand-gold/5 translate-x-3 translate-y-3 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 duration-500"></div>
      
      <article className={`relative bg-white border-2 border-brand-navy/5 transition-all duration-500 group-hover:border-brand-gold group-hover:-translate-x-2 group-hover:-translate-y-2 flex flex-col ${featured ? 'md:flex-row' : ''} h-full hover:shadow-lg transition-shadow`} aria-label={`Read more about ${post.title}`}>
        
        {/* VISUAL HUB - SHARP EDGES */}
        <div className={`${featured ? 'md:w-3/5' : 'w-full'} relative overflow-hidden bg-slate-900 ${featured ? 'h-[300px] md:h-[500px]' : 'aspect-video'}`}>
           <img 
             src={blogImage} 
             alt={post.title} 
             className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1500ms] group-hover:scale-105 opacity-80"
           />
           
           {/* DATA OVERLAY */}
           <div className="absolute top-6 left-6 flex items-center gap-2">
              <div className="px-4 py-1.5 bg-brand-gold text-brand-navy text-[10px] font-black uppercase tracking-widest shadow-xl">
                 Verified Protocol
              </div>
           </div>

           <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-60" aria-hidden="true"></div>
        </div>

        {/* CONTENT HUB - EDGY BOX */}
        <div className={`${featured ? 'md:w-2/5' : 'w-full'} p-6 md:p-12 flex flex-col justify-between bg-white relative`}>
           
           {/* CORNER ACCENT */}
           <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-slate-100 group-hover:border-brand-gold transition-colors" aria-hidden="true"></div>

           <div className="space-y-6">
              <div className="flex items-center gap-4 text-[10px] font-black text-brand-gold uppercase tracking-[0.3em]">
                 <FiZap className="animate-pulse" /> {post.category}
              </div>

              <h3 className={`font-black text-brand-navy uppercase tracking-tighter leading-none group-hover:text-brand-gold transition-all duration-500 ${featured ? 'text-3xl md:text-6xl' : 'text-xl md:text-3xl'}`}>
                {post.title}
              </h3>
              
              <p className="text-xs md:text-sm text-slate-400 font-bold uppercase tracking-tight leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
           </div>

           <div className="mt-12 space-y-8">
              <div className="flex items-center justify-between text-[10px] font-black text-slate-300 uppercase tracking-widest border-b border-slate-50 pb-6">
                 <div className="flex items-center gap-3">
                    <FiCalendar className="text-brand-gold" />
                    {post.date}
                 </div>
               
              </div>

              <div className="flex items-center justify-between group/action">
                 <span className="flex items-center gap-1 text-sm md:text-xs font-medium text-brand-navy uppercase tracking-wider hover:underline transition-colors duration-300 group-hover/action:translate-x-1">Read More <FiArrowRight className="inline text-xs" /></span>
                    <div className="text-[10px] font-black text-slate-200 uppercase tracking-[0.2em] group-hover:text-brand-gold transition-colors">
                    DocRef: MIT-0{post.slug.length}
                 </div>
              </div>
           </div>
        </div>

      </article>
    </Link>
  );
}
