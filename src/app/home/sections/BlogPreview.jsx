import { BLOGS } from "@/data/blogs";
import Link from "next/link";

export function BlogPreview() {
  return (
    <section>
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-brand-gold/10 to-brand-navy/10 rounded-full mb-4 border border-brand-gold/20">
          <span className="text-sm font-bold text-brand-navy">Resources</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-4 px-4">
          Latest Export Guides
        </h2>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
          Industry insights and export compliance guides to help you succeed
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
        {BLOGS.slice(0, 2).map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="group relative h-full bg-gradient-to-br from-white via-slate-50/50 to-white rounded-2xl sm:rounded-3xl border-2 border-slate-200 hover:border-brand-gold overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold/20 via-brand-navy/20 to-brand-gold/20 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition duration-700"></div>
              
              <div className="relative p-6 sm:p-8 md:p-10 h-full flex flex-col">
                {/* Header */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-brand-gold/20 to-brand-gold/10 text-brand-navy rounded-lg text-xs sm:text-sm font-bold border border-brand-gold/30">
                      {post.category}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-500 font-medium">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-navy mb-3 group-hover:text-brand-gold transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </div>

                {/* Excerpt */}
                <p className="text-sm sm:text-base text-slate-600 mb-6 sm:mb-8 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 sm:pt-8 border-t-2 border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-brand-gold to-brand-gold-dark rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-md">
                      {post.author.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-brand-navy">{post.author.name}</p>
                      <p className="text-xs text-slate-500">{post.author.role}</p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-gold group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>

                {/* Trust Indicator */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-slate-600 font-medium">Verified & Certified</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Link href="/blog">
          <button className="inline-flex items-center gap-2 px-8 sm:px-10 md:px-12 py-4 sm:py-5 border-2 border-slate-300 text-slate-700 rounded-xl font-semibold hover:border-brand-gold hover:text-brand-gold hover:bg-brand-gold/5 transition-all hover:scale-105 shadow-lg hover:shadow-xl">
            <span>View All Articles</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
}
