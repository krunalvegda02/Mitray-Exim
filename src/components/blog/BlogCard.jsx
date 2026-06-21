"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiCalendar, FiZap } from "react-icons/fi";

const getBlogImage = (post) => {
  if (post.featuredImage) return post.featuredImage;
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
    <Link href={`/blog/${post.slug}`} className="group relative block h-full">
      {/* SHARP SHADOW EFFECT */}
      <div className="absolute -inset-1 sm:inset-0 bg-brand-gold/10 translate-x-2 sm:translate-x-3 translate-y-2 sm:translate-y-3 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0"></div>
      
      <article className={`relative bg-white border-2 border-slate-200 transition-all duration-500 group-hover:border-brand-gold group-hover:-translate-x-1 sm:group-hover:-translate-x-2 group-hover:-translate-y-1 sm:group-hover:-translate-y-2 flex flex-col ${featured ? 'md:flex-row' : ''} h-full hover:shadow-2xl overflow-hidden`} aria-label={`Read more about ${post.title}`}>
        
        {/* IMAGE SECTION */}
        <div className={`${featured ? 'w-full md:w-3/5 md:absolute md:inset-y-0 md:left-0' : 'w-full'} relative overflow-hidden bg-slate-900 ${featured ? 'h-48 sm:h-64 md:h-auto' : 'aspect-video'}`}>
           <Image 
             src={blogImage} 
             alt={post.title} 
             fill
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
             className="object-cover transition-all duration-[1500ms] group-hover:scale-110"
           />
           
           {/* OVERLAY */}
           <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-50 sm:opacity-60" aria-hidden="true"></div>

           {/* BADGE - TOP LEFT */}
           <div className="absolute top-3 sm:top-4 md:top-6 left-3 sm:left-4 md:left-6 z-10">
              <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 md:py-2.5 bg-brand-gold text-brand-navy text-[8px] sm:text-[9px] md:text-xs lg:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-widest shadow-lg">
                 <FiZap className="w-3 h-3 sm:w-4 sm:h-4" />
                 <span>Verified</span>
              </div>
           </div>

           {/* DATE - TOP RIGHT */}
           <div className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 z-10">
              <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 md:py-2.5 bg-white/95 backdrop-blur-sm text-brand-navy text-[8px] sm:text-[9px] md:text-xs lg:text-sm font-black uppercase tracking-[0.1em] sm:tracking-widest shadow-lg flex-shrink-0 border border-slate-200">
                 <FiCalendar className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-brand-gold flex-shrink-0" />
                 <span className="hidden sm:inline">{post.date}</span>
                 <span className="sm:hidden text-[7px]">{post.date}</span>
              </div>
           </div>
        </div>

        {/* CONTENT SECTION */}
        <div className={`${featured ? 'w-full md:w-2/5 md:ml-auto' : 'w-full'} p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 flex flex-col justify-between bg-white relative`}>
           
           {/* CORNER ACCENT */}
           <div className="absolute top-0 right-0 w-6 sm:w-8 md:w-10 lg:w-12 h-6 sm:h-8 md:h-10 lg:h-12 border-t-2 sm:border-t-3 md:border-t-4 border-r-2 sm:border-r-3 md:border-r-4 border-slate-200 group-hover:border-brand-gold transition-colors duration-500" aria-hidden="true"></div>

           <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6 pr-6 sm:pr-8 md:pr-10">
              {/* CATEGORY */}
              <div className="flex items-center gap-1.5 sm:gap-2 text-[8px] sm:text-[9px] md:text-xs lg:text-sm font-black text-brand-gold uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-widest">
                 <FiZap className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 animate-pulse" /> 
                 {post.category}
              </div>

              {/* TITLE */}
              <h3 className={`font-black text-brand-navy uppercase tracking-tighter leading-tight group-hover:text-brand-gold transition-all duration-500 ${
                featured 
                  ? 'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl' 
                  : 'text-base sm:text-lg md:text-2xl lg:text-3xl'
              }`}>
                {post.title}
              </h3>
              
              {/* EXCERPT */}
              <p className="text-[9px] sm:text-xs md:text-sm lg:text-base text-slate-500 font-semibold uppercase tracking-wide leading-relaxed line-clamp-2 sm:line-clamp-3">
                {post.excerpt}
              </p>
           </div>

           {/* FOOTER */}
           <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 space-y-3 sm:space-y-4 md:space-y-6">
              {/* CTA */}
              <div className="flex items-center justify-between group/action pt-2 sm:pt-3 md:pt-4 border-t border-slate-100 pb-3 sm:pb-4">
                 <div className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm md:text-base font-black text-brand-navy uppercase tracking-wider group-hover/action:text-brand-gold transition-colors duration-300">
                    <span>Read Article</span>
                    <FiArrowRight className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 group-hover/action:translate-x-1 transition-transform duration-300" />
                 </div>
                 <div className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm font-black text-slate-300 uppercase tracking-[0.1em] group-hover/action:text-brand-gold transition-colors duration-300">
                    MIT-{post.slug.substring(0, 3).toUpperCase()}
                 </div>
              </div>
           </div>

        </div>

      </article>
    </Link>
  );
}
