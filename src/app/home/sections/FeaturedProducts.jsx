"use client";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { FiArrowRight, FiShoppingBag } from "react-icons/fi";

export function FeaturedProducts() {
  const featured = PRODUCTS.slice(0, 3);

  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        
        {/* STANDARDIZED HEADER ARCHITECTURE */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-brand-gold animate-line-grow w-0"></div>
            <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.5em] animate-reveal opacity-0">Premium Export Portfolio</span>
            <div className="h-px bg-brand-gold animate-line-grow w-0"></div>
          </div>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-brand-navy mb-6 tracking-tighter leading-[0.85] animate-reveal opacity-0">
            OUR FRESH <br />
            <span className="text-gradient">PRODUCTS.</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-lg font-medium max-w-2xl mx-auto leading-relaxed uppercase tracking-tight opacity-0 animate-reveal delay-300">
            Discover a curated selection of India's finest vegetables, fresh fruits, and high-quality spices, prepared for global delivery.
          </p>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {featured.map((product, index) => (
            <div key={product.slug} className="opacity-0 animate-reveal" style={{ animationDelay: `${600 + (index * 150)}ms` }}>
               <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* STANDARDIZED CTA */}
        <div className="text-center mt-12 md:mt-16 animate-reveal delay-1000 opacity-0">
          <a 
            href="/products" 
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-brand-navy rounded-xl text-white font-black uppercase tracking-widest text-[11px] hover:bg-brand-gold hover:text-brand-navy transition-all duration-700 shadow-2xl active:scale-95"
          >
            <span className="relative z-10">Explore Full Export Catalog</span>
            <FiArrowRight className="relative z-10 text-lg group-hover:translate-x-2 transition-transform duration-500" />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
