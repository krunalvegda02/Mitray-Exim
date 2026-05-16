import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { FiArrowRight, FiShoppingBag } from "react-icons/fi";

export function FeaturedProducts() {
  const featured = PRODUCTS.slice(0, 4);

  return (
    <section className="relative py-12">
      <div className="relative z-10">
        
        {/* STANDARDIZED HEADER */}
        <div className="text-center mb-16 animate-reveal">
          <div className="inline-flex items-center px-5 py-2 bg-brand-gold/10 rounded-full mb-6 border border-brand-gold/20 backdrop-blur-md">
            <FiShoppingBag className="text-brand-gold mr-2" />
            <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.4em]">Strategic Inventory</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-brand-navy mb-8 tracking-tighter leading-none">
            Export <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium opacity-80 uppercase tracking-tight">
            Premium agricultural treasures handpicked from India's most fertile regions.
          </p>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {featured.map((product, index) => (
            <div key={product.slug} style={{ animationDelay: `${index * 100}ms` }}>
               <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* STANDARDIZED CTA */}
        <div className="text-center mt-20 animate-reveal delay-500">
          <a 
            href="/products" 
            className="group relative inline-flex items-center gap-4 px-12 py-6 bg-brand-navy rounded-[2rem] text-white font-black uppercase tracking-widest text-[11px] hover:bg-brand-gold hover:text-brand-navy transition-all duration-700 shadow-2xl active:scale-95"
          >
            <span className="relative z-10">Explore Full Catalog</span>
            <FiArrowRight className="relative z-10 text-lg group-hover:translate-x-2 transition-transform duration-500" />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
