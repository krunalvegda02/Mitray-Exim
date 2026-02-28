import { PRODUCTS, CATEGORIES } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";

export const metadata = {
  title: "Products – Fresh Vegetables Export from India | MITRAY EXIM",
  description: "Browse our range of export-quality vegetables, fruits, spices, rice, and wheat from India.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero 
        badge="PREMIUM QUALITY EXPORTS"
        title="Our Products"
        description="Export-quality agricultural products from India, certified and compliant with international standards"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Products' }
        ]}
      />

      {/* Products Grid */}
      <div className="bg-gradient-to-b from-white via-slate-50 to-white py-20">
        <Container>
          {/* Category Stats */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-16 animate-fade-in-up animation-delay-400">
            {CATEGORIES.map((category, index) => (
              <div 
                key={category.id}
                className="text-center p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-brand-gold hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="text-3xl font-bold text-brand-navy mb-2">
                  {PRODUCTS.filter(p => p.category === category.id).length}
                </div>
                <div className="text-sm text-slate-600 font-medium">{category.label}</div>
              </div>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
            {PRODUCTS.map((product, index) => (
              <div key={product.slug} style={{ animationDelay: `${600 + index * 50}ms` }} className="animate-fade-in-up">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy-light rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl animate-fade-in-up animation-delay-800">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Our Products?</h2>
              <p className="text-lg md:text-xl text-brand-gold-light/90 mb-10 leading-relaxed">
                Get in touch to receive detailed product specifications, pricing, and export documentation
              </p>
              <a href="/landing">
                <button className="px-12 py-5 text-lg bg-brand-gold text-white rounded-xl font-semibold hover:bg-brand-gold-light transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
                  Request Quotation
                </button>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
