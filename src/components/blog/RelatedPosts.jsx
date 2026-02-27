import { BLOGS } from "@/data/blogs";
import { BlogCard } from "./BlogCard";

export function RelatedPosts({ currentSlug }) {
  const relatedPosts = BLOGS.filter((blog) => blog.slug !== currentSlug).slice(0, 2);

  if (relatedPosts.length === 0) return null;

  return (
    <div className="mt-12 pt-12 border-t-2 border-slate-200">
      <h3 className="text-2xl font-bold text-brand-navy mb-6">Related Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {relatedPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
