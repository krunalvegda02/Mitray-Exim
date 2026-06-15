"use client";

import { BLOGS } from "@/data/blogs";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  FiCalendar, FiClock, FiBookOpen, FiArrowLeft, 
  FiShare2, FiUser, FiShield, FiGlobe, 
  FiArrowRight, FiActivity, FiArrowUpRight, FiZap
} from "react-icons/fi";

const renderContent = (content) => {
  const sections = content.split(/(?=##\s)/);
  
  return sections.map((section, idx) => {
    if (section.startsWith('##')) {
      const [heading, ...rest] = section.split('\n');
      const title = heading.replace(/^##\s+/, '');
      const body = rest.join('\n').trim();
      
      return (
        <div key={idx} className="mb-12 md:mb-16 animate-reveal">
          <div className="flex items-center gap-4 mb-6">
             <div className="h-px w-8 bg-brand-gold"></div>
             <h2 className="text-2xl md:text-4xl font-black text-brand-navy uppercase tracking-wide">
               {title}
             </h2>
          </div>
          <div className="space-y-6">
            {body.split('\n').map((line, i) => {
              if (line.startsWith('-')) {
                return (
                  <div key={i} className="flex items-start gap-4 group/item">
                    <div className="w-6 h-6 bg-slate-50 border border-slate-100 flex items-center justify-center mt-1 group-hover/item:border-brand-gold transition-colors">
                       <div className="w-1.5 h-1.5 bg-brand-gold rotate-45"></div>
                    </div>
                    <p className="text-sm md:text-lg text-slate-500 font-bold uppercase tracking-tight leading-relaxed">
                      {line.replace(/^-\s*/, '')}
                    </p>
                  </div>
                );
              }
              if (line.trim()) {
                return (
                  <p key={i} className="text-sm md:text-xl text-slate-400 font-bold uppercase tracking-tight leading-relaxed opacity-80">
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
        <div key={idx} className="mb-10">
          {section.split('\n').map((line, i) => {
            if (line.startsWith('-')) {
              return (
                <div key={i} className="flex items-start gap-4 mb-4 group/item">
                  <div className="w-6 h-6 bg-slate-50 border border-slate-100 flex items-center justify-center mt-1 group-hover/item:border-brand-gold transition-colors">
                     <div className="w-1.5 h-1.5 bg-brand-gold rotate-45"></div>
                  </div>
                  <p className="text-sm md:text-lg text-slate-500 font-bold uppercase tracking-tight leading-relaxed">
                    {line.replace(/^-\s*/, '')}
                  </p>
                </div>
              );
            }
            if (line.trim()) {
              return (
                <p key={i} className="text-sm md:text-xl text-slate-400 font-bold uppercase tracking-tight leading-relaxed mb-6 opacity-80">
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

export default function BlogDetailPage() {
  const params = useParams();
  const blog = BLOGS.find((b) => b.slug === params.slug);
  const relatedBlogs = BLOGS.filter((b) => b.slug !== params.slug).slice(0, 2);

  if (!blog) notFound();

  const blogImages = {
    "vegetable-export-india-to-uae": "https://images.unsplash.com/photo-1488459716781-6f3ee409e8f5?q=80&w=2070&auto=format&fit=crop",
    "onion-export-requirements-gulf": "https://images.unsplash.com/photo-1599599810694-b5ac4dd64b73?q=80&w=2070&auto=format&fit=crop",
    "apeda-fssai-compliance-exporters": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  };

  const bannerImage = blogImages[params.slug] || "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070&auto=format&fit=crop";

  return (
    <div className="bg-white">
      {/* 1. INSTITUTIONAL HERO - EDGY MANIFEST STYLE */}
      <PageHero 
        badge={`${blog.category.toUpperCase()}`}
        title={`${blog.title}.`}
        description={blog.excerpt}
        backgroundImage={bannerImage}
        breadcrumbs={[
          { label: 'Home', href: '/' },
         //  { label: 'Intelligence Terminal', href: '/blog' },
          { label: 'Publication Manifest' }
        ]}
      />

      <div className="relative z-10 pt-12 md:pt-20 pb-20 md:pb-32 bg-[#F9FAFB]">
        <Container>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-start">
            
            {/* LEFT: PUBLICATION CONTENT */}
            <div className="lg:col-span-8 space-y-12 animate-reveal delay-300 opacity-0">
               
               {/* FEATURED ASSET - SHARP EDGES */}
               <div className="relative group">
                  <div className="absolute inset-0 bg-brand-gold/5 translate-x-4 translate-y-4"></div>
                  <div className="relative bg-white border-2 border-slate-100 overflow-hidden shadow-2xl">
                     <img 
                       src={bannerImage} 
                       alt={blog.title} 
                       className="w-full h-[300px] md:h-[500px] object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                     />
                     <div className="absolute top-8 left-8 flex items-center gap-3">
                        <div className="px-6 py-2 bg-brand-gold text-brand-navy text-[10px] font-black uppercase tracking-widest shadow-xl">
                           Official Manifest
                        </div>
                     </div>
                  </div>
               </div>

               {/* ARTICLE BODY */}
               <div className="bg-white border-2 border-slate-100 p-8 md:p-16 relative shadow-sm">
                  {/* CORNER ACCENT */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-slate-50"></div>
                  
                  <div className="prose prose-slate max-w-none">
                     {renderContent(blog.content)}
                  </div>

                  {/* KEY TAKEAWAYS - SHARP EDGY BOX */}
                  {blog.keyTakeaways && (
                    <div className="mt-16 p-10 bg-brand-navy text-white relative overflow-hidden group">
                       <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 blur-[100px]"></div>
                       <div className="relative z-10">
                          <div className="flex items-center gap-4 mb-10">
                             <FiZap className="text-brand-gold text-2xl animate-pulse" />
                             <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter">Strategic Intelligence</h3>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             {blog.keyTakeaways.map((point, i) => (
                               <div key={i} className="flex items-start gap-4 group/point">
                                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold group-hover/point:bg-brand-gold group-hover/point:text-brand-navy transition-all duration-500">
                                     <FiArrowRight />
                                  </div>
                                  <p className="text-xs md:text-sm font-black uppercase tracking-widest leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                     {point}
                                  </p>
                               </div>
                             ))}
                          </div>
                       </div>
                    </div>
                  )}
               </div>

               {/* RETURN NAVIGATION */}
               <Link href="/blog" className="inline-flex items-center gap-4 py-4 px-8 border-2 border-slate-100 font-black text-xs text-brand-navy uppercase tracking-widest hover:border-brand-gold hover:bg-white transition-all shadow-sm group">
                  <FiArrowLeft className="group-hover:-translate-x-2 transition-transform" /> Back to Intelligence Terminal
               </Link>
            </div>

            {/* RIGHT: PUBLICATION METADATA SIDEBAR */}
            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32 animate-reveal delay-500 opacity-0">
               
               {/* AUTHOR TERMINAL */}
               <div className="p-10 bg-white border-2 border-slate-100 shadow-xl relative group">
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-brand-gold/10 group-hover:border-brand-gold transition-colors"></div>
                  <div className="flex items-center gap-6 mb-10">
                     <div className="w-16 h-16 bg-brand-navy text-brand-gold flex items-center justify-center text-3xl font-black shadow-xl">
                        M
                     </div>
                     <div>
                        <h4 className="text-lg font-black text-brand-navy uppercase tracking-widest">Mitray Exim</h4>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Protocol Intelligence</p>
                     </div>
                  </div>
                  <div className="space-y-6">
                     <div className="flex items-center justify-between py-5 border-b border-slate-50">
                        <span className="text-xs md:text-sm font-gray text-brand-navy uppercase tracking-widest flex items-center gap-3"><FiCalendar className="text-brand-gold text-lg" /> Publication Date</span>
                        <span className="text-sm md:text-base font-black text-brand-navy uppercase tracking-widest">{blog.date}</span>
                     </div>
                     <div className="flex items-center justify-between py-5 border-b border-slate-50">
                        <span className="text-xs md:text-sm font-gray text-brand-navy uppercase tracking-widest flex items-center gap-3"><FiClock className="text-brand-gold text-lg" /> Reading Latency</span>
                        <span className="text-sm md:text-base font-black text-brand-navy uppercase tracking-widest">{blog.readTime}</span>
                     </div>
                     <div className="flex items-center justify-between py-5 border-b border-slate-50">
                        <span className="text-xs md:text-sm font-gray text-brand-navy uppercase tracking-widest flex items-center gap-3"><FiShield className="text-brand-gold text-lg" /> Status</span>
                        <span className="text-sm md:text-base font-black text-emerald-500 uppercase tracking-widest flex items-center gap-2">Verified <FiActivity className="animate-pulse" /></span>
                     </div>
                  </div>
                  <div className="mt-10">
                     <button className="w-full py-5 bg-brand-navy text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-brand-gold hover:text-brand-navy transition-all duration-700 shadow-xl flex items-center justify-center gap-3">
                        Share Intelligence <FiShare2 />
                     </button>
                  </div>
               </div>

               {/* STRATEGIC HUB CTA */}
               <div className="p-10 bg-slate-50 border-2 border-brand-gold/10 border-dashed relative overflow-hidden group">
                  <div className="relative z-10">
                     <h4 className="text-lg font-black text-brand-navy uppercase tracking-tighter mb-4">Strategic Partnership?</h4>
                     <p className="text-[13px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed mb-8">
                        Our institutional procurement desk is ready to synchronize with your global supply chain. Initialize a direct communication manifest today.
                     </p>
                     <Link href="/contact" className="inline-flex items-center gap-4 text-xs font-black text-brand-gold uppercase tracking-[0.2em] group-hover:gap-6 transition-all">
                        Initialize Connection <FiArrowRight />
                     </Link>
                  </div>
               </div>

            </div>

          </div>

          {/* RELATED PUBLICATIONS */}
          {relatedBlogs.length > 0 && (
            <div className="mt-20 md:mt-32 pt-20 md:pt-32 border-t-2 border-slate-100">
               <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                  <div className="space-y-6">
                     <div className="flex items-center gap-4">
                        <div className="h-px w-12 bg-brand-gold"></div>
                        <span className="text-xs font-black text-brand-navy uppercase tracking-[0.4em]">Resource Synchronization</span>
                     </div>
                     <h3 className="text-3xl md:text-6xl font-black text-brand-navy uppercase tracking-tighter">
                        CROSS-REFERENCE <br />
                        <span className="text-gradient">PUBLICATIONS.</span>
                     </h3>
                  </div>
                  <Link href="/blog" className="inline-flex items-center gap-4 py-4 px-8 bg-slate-50 border border-slate-100 text-xs font-black text-brand-navy uppercase tracking-widest hover:bg-brand-navy hover:text-white transition-all shadow-sm">
                     Full Archives <FiArrowUpRight />
                  </Link>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {relatedBlogs.map((rel, idx) => (
                    <Link key={rel.slug} href={`/blog/${rel.slug}`} className="group relative block animate-reveal" style={{ animationDelay: `${idx * 150}ms` }}>
                       <div className="absolute inset-0 bg-brand-gold/5 translate-x-3 translate-y-3"></div>
                       <div className="relative bg-white border-2 border-slate-100 p-8 hover:border-brand-gold transition-all duration-500 shadow-sm">
                          <span className="text-[10px] font-black text-brand-gold uppercase tracking-widest mb-4 block">{rel.category}</span>
                          <h4 className="text-xl md:text-2xl font-black text-brand-navy uppercase tracking-tighter group-hover:text-brand-gold transition-colors mb-4">{rel.title}</h4>
                          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest line-clamp-2">{rel.excerpt}</p>
                          <div className="mt-8 pt-8 border-t border-slate-50 flex items-center justify-between">
                             <span className="text-[10px] font-black text-brand-navy uppercase tracking-widest">Read Publication</span>
                             <FiArrowRight className="text-brand-gold group-hover:translate-x-2 transition-transform" />
                          </div>
                       </div>
                    </Link>
                  ))}
               </div>
            </div>
          )}

        </Container>
      </div>
    </div>
  );
}
