import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export function FeaturedProducts() {
  const featured = PRODUCTS.slice(0, 4);

  return (
    <section className="relative py-12">
      {/* Background Decorative Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop" 
          alt="Fresh organic vegetables background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 bg-brand-gold/10 rounded-full mb-6 border border-brand-gold/20">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-[0.2em]">Our Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6">
            Featured <span className="text-gradient">Export Quality</span> Produce
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">
            Handpicked, premium agricultural products sourced from the finest farms across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="/products" 
            className="group inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-brand-navy-dark to-brand-navy text-white rounded-2xl font-bold hover:shadow-2xl transition-all duration-500 hover:scale-105"
          >
            <span>Explore Full Catalog</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

