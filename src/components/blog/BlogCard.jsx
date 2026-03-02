import Link from "next/link";

export function BlogCard({ post }) {
  return (
    <article className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-gold/20 via-brand-navy/20 to-brand-gold/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
      
      <div className="relative bg-gradient-to-br from-white via-slate-50/30 to-white p-6 sm:p-8 rounded-xl sm:rounded-2xl border-2 border-slate-200 hover:border-brand-gold transition-all duration-300 hover:shadow-2xl">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-navy bg-gradient-to-r from-brand-gold/10 to-brand-gold/5 px-4 py-2 rounded-full border border-brand-gold/20">
            <svg className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>
            {post.category}
          </span>
          <span className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {post.date}
          </span>
        </div>
        
        <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3 sm:mb-4 group-hover:text-brand-gold transition-colors leading-tight">
          {post.title}
        </h2>
        
        <p className="text-sm sm:text-base text-slate-600 mb-5 sm:mb-6 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
        
        <Link 
          href={`/blog/${post.slug}`}
          className="group/btn inline-flex items-center gap-2 text-sm sm:text-base font-bold text-brand-navy hover:text-brand-gold transition-all"
        >
          <span>Read Full Article</span>
          <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
