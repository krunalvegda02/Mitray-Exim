import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export function FeaturedProducts() {
  const featured = PRODUCTS.slice(0, 4);

  return (
    <section className="relative">
      {/* Background Image */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop" 
          alt="Fresh vegetables"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative">
        <div className="text-center mb-12">
        <div className="inline-block px-4 py-2 bg-brand-gold/10 rounded-full mb-4">
          <span className="text-sm font-semibold text-brand-navy-dark">Our Products</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
          Featured Export Products
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Premium quality agricultural products exported from India
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
      <div className="text-center mt-10">
        <a href="/products" className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-brand-navy rounded-lg font-semibold hover:from-zinc-800 hover:to-zinc-900 transition-all shadow-lg hover:shadow-xl">
          <span>View All Products</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        </div>
      </div>
    </section>
  );
}
