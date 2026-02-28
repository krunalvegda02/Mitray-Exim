import { BLOGS } from "@/data/blogs";
import { BlogCard } from "@/components/blog/BlogCard";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";

export const metadata = {
  title: "Export & Vegetable Export Guides – MITRAY EXIM Blog",
  description:
    "View our latest articles on vegetable export from India, onion export to Dubai, and compliance for Gulf markets.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero 
        badge="EXPORT INSIGHTS"
        title="Export Resources & Guides"
        description="Industry insights and export compliance guides for international agricultural trade"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog' }
        ]}
      />

      <div className="bg-gradient-to-b from-white via-slate-50 to-white py-20">
        <Container>
          <div className="max-w-4xl mx-auto space-y-6">
            {BLOGS.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
