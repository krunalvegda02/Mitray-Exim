import { BLOGS } from "@/data/blogs";
import { Container } from "@/components/shared/Container";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { Badge } from "@/components/shared/Badge";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return BLOGS.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogDetailPage({ params }) {
  const blog = BLOGS.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="py-20 bg-white">
      <Container>
        <article className="max-w-3xl mx-auto">
          <div className="mb-6">
            <Badge variant="primary">{blog.category}</Badge>
            <span className="text-sm text-slate-500 ml-3">{blog.date}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
            {blog.title}
          </h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed">
              {blog.excerpt}
            </p>
            
            <div className="mt-8 p-6 bg-slate-50 rounded-lg border-2 border-slate-200">
              <p className="text-slate-700">
                Full article content would be displayed here. This is a placeholder for the complete blog post content.
              </p>
            </div>
          </div>

          <RelatedPosts currentSlug={blog.slug} />
        </article>
      </Container>
    </div>
  );
}
