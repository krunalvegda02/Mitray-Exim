"use client";

import { useState } from "react";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = selectedCategory === "all" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <>
      <PageHero 
        badge="PREMIUM QUALITY EXPORTS"
        title="Our Products"
        description="Export-quality agricultural products from India, certified and compliant with international standards"
        backgroundImage="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Products' }
        ]}
      />

      <div className="bg-gradient-to-b from-white via-slate-50 to-white py-20">
        <Container>
          
          {/* Category Filter Tabs */}
          <div className="mb-12">
            <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide snap-x snap-mandatory md:flex-wrap md:justify-center">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`flex-shrink-0 snap-start px-5 py-2.5 rounded-lg font-semibold transition-all text-sm md:text-base ${
                  selectedCategory === "all"
                    ? "bg-brand-gold text-white shadow-lg"
                    : "bg-white text-slate-700 border-2 border-slate-200 hover:border-brand-gold"
                }`}
              >
                All ({PRODUCTS.length})
              </button>
              {CATEGORIES.map((category) => {
                const count = PRODUCTS.filter(p => p.category === category.id).length;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex-shrink-0 snap-start px-5 py-2.5 rounded-lg font-semibold transition-all text-sm md:text-base whitespace-nowrap ${
                      selectedCategory === category.id
                        ? "bg-brand-gold text-white shadow-lg"
                        : "bg-white text-slate-700 border-2 border-slate-200 hover:border-brand-gold"
                    }`}
                  >
                    {category.label} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Products Count */}
          <div className="text-center mb-8">
            <p className="text-slate-600">
              Showing <span className="font-bold text-brand-navy">{filteredProducts.length}</span> products
              {selectedCategory !== "all" && (
                <span> in <span className="font-bold text-brand-navy">
                  {CATEGORIES.find(c => c.id === selectedCategory)?.label}
                </span></span>
              )}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} onQuoteClick={() => setIsModalOpen(true)} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy-light rounded-2xl p-6 md:p-10 text-center text-white shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Interested in Our Products?</h2>
            <p className="text-base md:text-lg text-brand-gold-light/90 mb-5 md:mb-6">
              Get in touch to receive detailed product specifications, pricing, and export documentation
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 bg-brand-gold text-white rounded-lg font-semibold hover:bg-brand-gold-light transition-all shadow-lg"
            >
              Request Quotation
            </button>
          </div>
        </Container>
      </div>

      {/* Modal */}
      {isModalOpen && <InquiryModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

function InquiryModal({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inquiry submitted. We will get back to you.");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full sm:max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          {/* Animated Background Blobs */}
          <div className="absolute inset-0 overflow-hidden rounded-t-3xl sm:rounded-3xl">
            <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-brand-gold/20 to-orange-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative backdrop-blur-sm bg-gradient-to-br from-white/95 via-slate-50/95 to-white/95 rounded-t-3xl sm:rounded-3xl border-2 border-white/50 p-6 sm:p-8 md:p-10 shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center backdrop-blur-md bg-gradient-to-r from-brand-gold/20 to-orange-400/20 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 border border-brand-gold/30">
                <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-brand-gold mr-1.5 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-xs sm:text-sm font-bold text-brand-navy">Request Quotation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-navy via-brand-navy-dark to-brand-navy bg-clip-text text-transparent mb-2 sm:mb-3">
                Get Your Custom Quote
              </h2>
              <p className="text-sm sm:text-base text-slate-600 px-4">
                Fill out the form and our export team will contact you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
                <div className="relative group">
                  <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
                    <svg className="w-4 h-4 text-brand-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="relative group">
                  <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
                    <svg className="w-4 h-4 text-brand-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="relative group">
                  <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
                    <svg className="w-4 h-4 text-brand-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                <div className="relative group">
                  <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
                    <svg className="w-4 h-4 text-brand-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="relative group mb-5 sm:mb-6">
                <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center">
                  <svg className="w-4 h-4 text-brand-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Product Requirements *
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all resize-none"
                  placeholder="Please specify products and quantities you need..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-white rounded-2xl font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2 sm:space-x-3"
              >
                <span>Submit Inquiry</span>
                <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
