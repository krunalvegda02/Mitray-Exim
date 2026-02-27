import { BLOGS } from "@/data/blogs";

export function BlogPreview() {
  return (
    <section>
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-2 bg-brand-gold/10 rounded-full mb-4">
          <span className="text-sm font-semibold text-brand-navy-dark">Resources</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
          Latest Export Guides
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Industry insights and export compliance guides
        </p>
      </div>
      <div className="max-w-3xl mx-auto space-y-6">
        {BLOGS.slice(0, 2).map((post) => (
          <div
            key={post.slug}
            className="group bg-white p-6 rounded-xl border-2 border-slate-200 hover:border-brand-gold transition-all hover:shadow-lg"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                <svg className="w-6 h-6 text-brand-gold group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-xs font-semibold text-brand-navy-dark bg-brand-gold/10 px-2 py-1 rounded">{post.category}</span>
                  <span className="text-xs text-slate-500">{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-brand-navy mb-2 group-hover:text-brand-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-3">{post.excerpt}</p>
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center space-x-2 text-brand-gold hover:text-zinc-800 font-semibold text-sm"
                >
                  <span>Read Article</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a href="/blog" className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:border-brand-gold hover:text-brand-gold transition-all">
          <span>View All Articles</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
