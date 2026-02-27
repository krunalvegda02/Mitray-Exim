export function BlogCard({ post }) {
  return (
    <article className="bg-white p-6 rounded-lg border-2 border-slate-200 hover:border-blue-900 transition-colors">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-semibold text-brand-navy-dark bg-brand-gold/10 px-3 py-1 rounded">
          {post.category}
        </span>
        <span className="text-sm text-slate-500">{post.date}</span>
      </div>
      <h2 className="text-xl font-semibold text-brand-navy mb-3">
        {post.title}
      </h2>
      <p className="text-slate-600 mb-4">{post.excerpt}</p>
      <a
        href={`/blog/${post.slug}`}
        className="text-brand-navy-dark hover:text-zinc-800 font-semibold text-sm"
      >
        Read Article →
      </a>
    </article>
  );
}
