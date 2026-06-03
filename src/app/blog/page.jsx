"use client";

import { BLOGS } from "@/data/blogs";
import { BlogCard } from "@/components/blog/BlogCard";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { FiArrowRight, FiInfo, FiActivity, FiSearch, FiZap } from "react-icons/fi";
import Link from "next/link";
import Head from "next/head";

export default function BlogPage() {
  const featuredPost = BLOGS[0];
  const remainingPosts = BLOGS.slice(1);

  return (
    <div className="bg-white">
      {/* 1. CINEMATIC HERO - SHARP EDGES */}
      <Head>
        <title>Technical Manifest Library – Mitray Exim</title>
        <meta name="description" content="Access technical manifestos, market insights, and export logistics for the agricultural industry." />
        <meta property="og:title" content="Technical Manifest Library – Mitray Exim" />
        <meta property="og:description" content="Access technical manifestos, market insights, and export logistics for the agricultural industry." />
      </Head>
      <PageHero 
        badge="MARKET INTELLIGENCE HUB"
        title="Institutional. Insights."
        description="Access technical manifestos and real-time market telemetry. Global trade analysis for the agricultural elite."
        backgroundImage="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2070&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Intelligence Hub' }
        ]}
      />

      <div className="relative z-10 pt-12 md:pt-20 pb-20 md:pb-32 bg-[#F9FAFB]">
        <Container>
          
          {/* 2. EDGY SECTION HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
             <div className="space-y-6">
                <div className="flex items-center gap-4">
                   <div className="h-px w-12 bg-brand-gold"></div>
                   <span className="text-xs font-black text-brand-navy uppercase tracking-[0.4em]">Protocol Archives</span>
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-brand-navy tracking-tighter uppercase leading-[0.85]">
                   TECHNICAL <br />
                   <span className="text-gradient">PUBLICATIONS.</span>
                </h2>
             </div>
             <div className="flex flex-col gap-4">
           
                <div className="relative group">
                   <FiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-brand-gold transition-colors" aria-hidden="true" />
                   <input 
                     type="text" 
                     placeholder="Search manifests..." 
                     className="w-full sm:w-72 md:w-80 px-4 py-3 bg-white border-2 border-slate-100 focus:border-brand-gold font-black text-sm uppercase tracking-wider transition-all"
                   />
                </div>
             </div>
          </div>

          <div className="space-y-12 md:space-y-20">
             {/* 3. FEATURED MANIFEST - FULL WIDTH EDGY */}
             {featuredPost && (
                <div className="animate-reveal">
                   <div className="mb-6 flex items-center gap-4">
                      <span className="text-sm font-black text-brand-gold uppercase tracking-wider">Featured Analysis</span>
                      <div className="h-px flex-1 bg-slate-100"></div>
                   </div>
                   <BlogCard post={featuredPost} featured={true} />
                </div>
             )}

             {/* 4. REMAINING MANIFESTS GRID - SHARP BENTO */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {remainingPosts.map((post, index) => (
                  <div 
                    key={post.slug}
                    className="animate-reveal opacity-0"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <BlogCard post={post} />
                  </div>
                ))}
             </div>

             {/* 5. EMPTY STATE */}
             {BLOGS.length === 0 && (
               <div className="p-20 text-center bg-white border-2 border-dashed border-slate-100">
                  <h3 className="text-2xl font-black text-brand-navy uppercase tracking-widest mb-4">No Manifests Available</h3>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Awaiting data synchronization...</p>
               </div>
             )}
          </div>


        </Container>
      </div>
    </div>
  );
}
