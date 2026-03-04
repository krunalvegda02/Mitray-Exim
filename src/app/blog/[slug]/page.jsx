'use client';

import { BLOGS } from "@/data/blogs";
import { Container } from "@/components/shared/Container";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Link from "next/link";

const renderContent = (content) => {
  const sections = content.split(/(?=##\s)/);
  
  return sections.map((section, idx) => {
    if (section.startsWith('##')) {
      const [heading, ...rest] = section.split('\n');
      const title = heading.replace(/^##\s+/, '');
      const body = rest.join('\n').trim();
      
      return (
        <div key={idx} className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy mb-4 sm:mb-6 pb-3 border-b-3 border-brand-gold/30">
            {title}
          </h2>
          <div className="space-y-4 sm:space-y-5">
            {body.split('\n').map((line, i) => {
              if (line.startsWith('-')) {
                return (
                  <div key={i} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-2 h-2 bg-brand-gold rounded-full mt-2.5 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {line.replace(/^-\s*/, '')}
                    </p>
                  </div>
                );
              }
              if (line.trim()) {
                return (
                  <p key={i} className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed">
                    {line}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </div>
      );
    }
    
    if (section.trim()) {
      return (
        <div key={idx} className="mb-8 sm:mb-10">
          {section.split('\n').map((line, i) => {
            if (line.startsWith('-')) {
              return (
                <div key={i} className="flex items-start gap-3 sm:gap-4 mb-3">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {line.replace(/^-\s*/, '')}
                  </p>
                </div>
              );
            }
            if (line.trim()) {
              return (
                <p key={i} className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed mb-4">
                  {line}
                </p>
              );
            }
            return null;
          })}
        </div>
      );
    }
    return null;
  });
};

export default function BlogPage() {
  const params = useParams();
  const blog = BLOGS.find((b) => b.slug === params.slug);
  const relatedBlogs = BLOGS.filter((b) => b.slug !== params.slug).slice(0, 2);

  if (!blog) {
    notFound();
  }

  const blogImages = {
    "vegetable-export-india-to-uae": "https://images.unsplash.com/photo-1488459716781-6f3ee409e8f5?q=80&w=2070&auto=format&fit=crop",
    "onion-export-requirements-gulf": "https://images.unsplash.com/photo-1599599810694-b5ac4dd64b73?q=80&w=2070&auto=format&fit=crop",
    "apeda-fssai-compliance-exporters": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy-light text-white pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src={blogImages[params.slug] || "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070&auto=format&fit=crop"}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy-dark/95 via-brand-navy/90 to-brand-navy-dark/95"></div>
        </div>

        <Container>
          <div className="relative max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6 sm:mb-8 text-sm text-brand-gold-light">
              <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/blog" className="hover:text-brand-gold transition-colors">Blog</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-brand-gold">{blog.category}</span>
            </div>

            {/* Badge & Date */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full border border-brand-gold/40 backdrop-blur-sm">
                <svg className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v2h16V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h12a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm font-bold text-brand-gold">{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </span>
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold text-white border border-white/20">
                {blog.category}
              </span>
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold text-white border border-white/20">
                {blog.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Excerpt */}
            <p className="text-base sm:text-lg md:text-xl text-brand-gold-light/95 leading-relaxed max-w-3xl">
              {blog.excerpt}
            </p>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Featured Image */}
            <div className="mb-12 sm:mb-16 md:mb-20 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200 group">
              <div className="relative overflow-hidden bg-slate-100 h-64 sm:h-80 md:h-96 lg:h-[500px]">
                <img 
                  src={blogImages[params.slug] || "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070&auto=format&fit=crop"}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
              {/* Main Content - 3 cols */}
              <div className="lg:col-span-3">
                {/* Article Content */}
                <article className="max-w-none mb-12 sm:mb-16">
                  <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-medium mb-8 sm:mb-10 italic text-slate-600">
                    {blog.excerpt}
                  </p>

                  <div className="mb-12 sm:mb-16">
                    {renderContent(blog.content)}
                  </div>

                  {/* Key Takeaways */}
                  {blog.keyTakeaways && blog.keyTakeaways.length > 0 && (
                    <div className="my-12 sm:my-16 md:my-20 p-6 sm:p-8 md:p-10 bg-gradient-to-br from-brand-gold/5 to-brand-navy/5 rounded-2xl border-2 border-brand-gold/20">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy mb-8 sm:mb-10 flex items-center gap-3">
                        <span className="text-brand-gold">✓</span> Key Takeaways
                      </h3>
                      <ul className="space-y-4 sm:space-y-5">
                        {blog.keyTakeaways.map((takeaway, i) => (
                          <li key={i} className="flex items-start gap-3 sm:gap-4">
                            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed font-medium">{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-brand-gold/10 to-brand-navy/10 rounded-2xl border-2 border-slate-200 p-6 sm:p-8 md:p-10 text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mb-2 sm:mb-3">Ready to Export?</h3>
                  <p className="text-sm sm:text-base text-slate-600 mb-6 sm:mb-8">Get expert guidance from our export specialists</p>
                  <Link href="/contact" className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-brand-gold text-white rounded-lg font-bold hover:bg-brand-gold-dark transition-all hover:scale-105">
                    Contact Our Team
                  </Link>
                </div>
              </div>

              {/* Sidebar - 1 col */}
              <div className="lg:col-span-1">
                {/* Author Card */}
                <div className="sticky top-20 bg-white rounded-2xl border-2 border-slate-200 p-6 sm:p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-gold to-brand-gold-dark rounded-full flex items-center justify-center text-white font-bold text-2xl sm:text-3xl mx-auto mb-4 shadow-lg">
                      M
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-brand-navy">MITRAY EXIM</h4>
                    <p className="text-xs sm:text-sm text-brand-gold font-semibold mt-1">Export Specialists</p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 text-center mb-6 leading-relaxed">
                    Premium agricultural exports with complete compliance and quality assurance
                  </p>

                  <div className="space-y-3 mb-6 pt-6 border-t border-slate-200">
                    <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                      <svg className="w-4 h-4 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>India to Global Markets</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                      <svg className="w-4 h-4 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>APEDA & FSSAI Certified</span>
                    </div>
                  </div>

                  <Link href="/contact" className="w-full block text-center px-4 py-2.5 bg-brand-gold/10 text-brand-gold rounded-lg font-bold hover:bg-brand-gold hover:text-white transition-all text-sm sm:text-base">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            {relatedBlogs.length > 0 && (
              <div className="mt-16 sm:mt-20 md:mt-24 pt-12 sm:pt-16 border-t-2 border-slate-200">
                <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-8 sm:mb-10">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {relatedBlogs.map((relatedBlog) => (
                    <Link key={relatedBlog.slug} href={`/blog/${relatedBlog.slug}`}>
                      <div className="group bg-white rounded-2xl border-2 border-slate-200 hover:border-brand-gold overflow-hidden shadow-lg hover:shadow-2xl transition-all h-full">
                        <div className="relative overflow-hidden bg-slate-100 h-48 sm:h-56">
                          <img 
                            src={blogImages[relatedBlog.slug] || "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=500&auto=format&fit=crop"}
                            alt={relatedBlog.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6 sm:p-8">
                          <span className="text-xs sm:text-sm font-bold text-brand-gold">{relatedBlog.category}</span>
                          <h4 className="text-lg sm:text-xl font-bold text-brand-navy mt-3 group-hover:text-brand-gold transition-colors line-clamp-2">
                            {relatedBlog.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 mt-3 line-clamp-2">{relatedBlog.excerpt}</p>
                          <div className="mt-4 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs sm:text-sm text-brand-gold font-semibold group-hover:gap-3 transition-all">
                            Read More
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>
    </>
  );
}
