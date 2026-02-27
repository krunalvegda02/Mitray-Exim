import { PRODUCTS } from "@/data/products";
import { Container } from "@/components/shared/Container";
import { ProductDetails } from "@/components/product/ProductDetails";
import { ProductImages } from "@/components/product/ProductImages";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Get product image based on category
  const getProductImage = (category) => {
    const images = {
      'fresh-fruits': 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800&h=600&fit=crop',
      'fresh-vegetables': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&h=600&fit=crop',
      'spices': 'https://images.unsplash.com/photo-1596040033229-a0b3b7d1f4c1?w=800&h=600&fit=crop',
      'rice': 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=600&fit=crop',
      'wheat-flour': 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop',
      'dehydrated': 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&h=600&fit=crop'
    };
    return images[category] || images['fresh-vegetables'];
  };

  // Get related products from same category
  const relatedProducts = PRODUCTS.filter(
    p => p.category === product.category && p.slug !== product.slug
  ).slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy-light text-white pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>
        
        <Container>
          <div className="max-w-5xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-3 mb-10 animate-fade-in-down">
              <a href="/" className="text-brand-gold-light/70 hover:text-brand-gold transition-colors duration-300 text-sm font-medium">
                Home
              </a>
              <svg className="w-4 h-4 text-brand-gold-light/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <a href="/products" className="text-brand-gold-light/70 hover:text-brand-gold transition-colors duration-300 text-sm font-medium">
                Products
              </a>
              <svg className="w-4 h-4 text-brand-gold-light/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-brand-gold text-sm font-semibold">{product.name}</span>
            </div>

            {/* Back Button */}
            <a href="/products" className="inline-flex items-center text-brand-gold-light hover:text-brand-gold mb-10 transition-all duration-300 group text-base font-medium">
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Products
            </a>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-4 mb-8 animate-fade-in-up animation-delay-200">
              <span className="inline-flex items-center px-5 py-2.5 bg-brand-gold/20 backdrop-blur-sm rounded-full text-sm font-bold text-brand-gold uppercase tracking-wider border border-brand-gold/30">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                {product.category.replace('-', ' ')}
              </span>
              <span className="inline-flex items-center px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold text-white border border-white/20">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Origin: {product.origin}
              </span>
              <span className="inline-flex items-center px-5 py-2.5 bg-green-500/20 backdrop-blur-sm rounded-full text-sm font-semibold text-green-300 border border-green-500/30">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Export Ready
              </span>
            </div>

            {/* Product Name */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-8 animate-fade-in-up animation-delay-300 leading-[1.1] tracking-tight">
              {product.name}
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl lg:text-3xl text-brand-gold-light/95 leading-relaxed font-light animate-fade-in-up animation-delay-400 max-w-4xl">
              {product.description}
            </p>

            {/* Quick Info Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 animate-fade-in-up animation-delay-500">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300">
                <p className="text-brand-gold-light/70 text-sm font-medium mb-1">Packaging</p>
                <p className="text-white font-bold text-lg">{product.packaging.split(' ')[0]} {product.packaging.split(' ')[1]}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300">
                <p className="text-brand-gold-light/70 text-sm font-medium mb-1">Min Order</p>
                <p className="text-white font-bold text-lg">{product.moq}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300">
                <p className="text-brand-gold-light/70 text-sm font-medium mb-1">Shipping</p>
                <p className="text-white font-bold text-lg">{product.shipping.split(',')[0]}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300">
                <p className="text-brand-gold-light/70 text-sm font-medium mb-1">Delivery</p>
                <p className="text-white font-bold text-lg">15-20 Days</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Product Details */}
      <div className="bg-gradient-to-b from-white via-slate-50 to-white py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-7xl mx-auto mb-20">
            {/* Product Image - 2 columns */}
            <div className="lg:col-span-2 animate-fade-in-up animation-delay-200">
              <div className="sticky top-32">
                <div className="bg-white rounded-3xl shadow-2xl border-2 border-slate-200 overflow-hidden hover:border-brand-gold transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={getProductImage(product.category)} 
                      alt={product.name}
                      className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-slate-50 to-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-600 mb-1">Product Code</p>
                        <p className="text-lg font-bold text-brand-navy">{product.slug.toUpperCase()}</p>
                      </div>
                      <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info - 3 columns */}
            <div className="lg:col-span-3 animate-fade-in-up animation-delay-400">
              <ProductDetails product={product} />
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mb-20 animate-fade-in-up animation-delay-600">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <div className="h-1 w-12 bg-brand-gold rounded"></div>
                  <h2 className="text-3xl md:text-4xl font-bold mx-6 text-brand-navy">Related Products</h2>
                  <div className="h-1 w-12 bg-brand-gold rounded"></div>
                </div>
                <p className="text-slate-600 text-lg">More products from the same category</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {relatedProducts.map((relatedProduct, index) => (
                  <div key={relatedProduct.slug} style={{ animationDelay: `${600 + index * 100}ms` }} className="animate-fade-in-up">
                    <a href={`/products/${relatedProduct.slug}`} className="block group">
                      <div className="bg-white rounded-2xl shadow-md border-2 border-slate-200 overflow-hidden hover:border-brand-gold hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        <div className="relative h-48 overflow-hidden bg-slate-100">
                          <img 
                            src={getProductImage(relatedProduct.category)} 
                            alt={relatedProduct.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-5">
                          <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-gold transition-colors duration-300">
                            {relatedProduct.name}
                          </h3>
                          <span className="inline-flex items-center text-brand-gold hover:text-brand-navy font-semibold text-sm transition-colors duration-300">
                            View Details
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy-light rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl animate-fade-in-up animation-delay-800 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
            </div>
            <div className="max-w-3xl mx-auto relative z-10">
              <div className="inline-block w-20 h-20 bg-brand-gold/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-20 h-19 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Import {product.name}?</h2>
              <p className="text-lg md:text-xl text-brand-gold-light/90 mb-10 leading-relaxed">
                Contact us for detailed specifications, pricing, certifications, and export documentation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/landing">
                  <button className="px-12 py-5 text-lg bg-brand-gold text-white rounded-xl font-semibold hover:bg-brand-gold-light transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
                    Request Quotation
                  </button>
                </a>
                <a href="/products">
                  <button className="px-12 py-5 text-lg bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    View All Products
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
