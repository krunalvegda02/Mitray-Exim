import { BLOGS } from "@/data/blogs";
import { BlogCard } from "@/components/blog/BlogCard";
import { Container } from "@/components/shared/Container";

export const metadata = {
  title: "Export & Vegetable Export Guides – MITRAY EXIM Blog",
  description:
    "View our latest articles on vegetable export from India, onion export to Dubai, and compliance for Gulf markets.",
};

export default function BlogPage() {
  return (
    <div className="py-20 bg-white">
      <Container>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-4">
          Export Resources & Guides
        </h1>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Industry insights and export compliance guides
        </p>

        <div className="max-w-4xl mx-auto space-y-6">
          {BLOGS.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </div>
  );
}
