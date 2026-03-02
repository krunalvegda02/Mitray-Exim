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

      <div className="bg-gradient-to-b from-white via-slate-50 to-white py-12 sm:py-16 md:py-20">
        <Container>
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-brand-navy/10 to-brand-gold/10 rounded-full border border-brand-navy/20 mb-4">
              <span className="text-sm font-bold text-brand-navy">Latest Articles</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy mb-4">Export Insights & Guides</h2>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Stay updated with the latest trends, regulations, and best practices in agricultural exports
            </p>
          </div>

          {/* Blog Grid */}
          <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
            {BLOGS.map((post, index) => (
              <div 
                key={post.slug}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {BLOGS.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">No Articles Yet</h3>
              <p className="text-slate-600">Check back soon for export insights and guides</p>
            </div>
          )}
        </Container>
      </div>
    </>
  );
}
