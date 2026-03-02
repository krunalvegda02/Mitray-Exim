"use client";

export function ProductCard({ product, onQuoteClick }) {
  const getProductImage = (category) => {
    const images = {
      "fresh-vegetables": 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop',
      "fresh-fruits": 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&h=300&fit=crop',
      spices: 'https://images.unsplash.com/photo-1596040033229-a0b3b7d1f4c1?w=400&h=300&fit=crop',
      rice: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop',
      "wheat-flour": 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
      dehydrated: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=300&fit=crop'
    };
    return images[category] || images["fresh-vegetables"];
  };

  const getCategoryGradient = (category) => {
    const gradients = {
      "fresh-vegetables": "from-emerald-400 to-teal-500",
      "fresh-fruits": "from-orange-400 to-pink-500",
      spices: "from-red-400 to-rose-500",
      rice: "from-amber-400 to-yellow-500",
      "wheat-flour": "from-yellow-400 to-orange-400",
      dehydrated: "from-purple-400 to-indigo-500"
    };
    return gradients[category] || "from-slate-400 to-slate-500";
  };

  return (
    <div className="group relative">
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-gold to-brand-gold-dark rounded-xl md:rounded-3xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
      
      <div className="relative bg-gradient-to-br from-white via-slate-50 to-white rounded-xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
        
        {/* Product Image with Gradient Overlay */}
        <div className="relative h-40 sm:h-48 md:h-64 overflow-hidden">
          <img 
            src={getProductImage(product.category)} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${getCategoryGradient(product.category)} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
          
          {/* Top Badges */}
          <div className="absolute top-2 left-2 right-2 flex items-start justify-between z-10">
            <div className="backdrop-blur-md bg-white/90 px-2 py-0.5 rounded-full shadow-md border border-white/50">
              <div className="flex items-center">
                <svg className="w-2.5 h-2.5 text-brand-gold mr-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-xs font-bold text-brand-navy">Premium</span>
              </div>
            </div>
            
            <div className="backdrop-blur-md bg-green-500/90 w-6 h-6 rounded-full flex items-center justify-center shadow-md border border-white">
              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute bottom-2 left-2">
            <div className={`backdrop-blur-md bg-gradient-to-r ${getCategoryGradient(product.category)} px-2 py-1 rounded-full shadow-lg`}>
              <span className="text-xs font-bold text-white uppercase tracking-wide">
                {product.category.replace("-", " ")}
              </span>
            </div>
          </div>
        </div>
        
        {/* Product Info */}
        <div className="p-3 md:p-6 bg-gradient-to-br from-white to-slate-50/50">
          
          {/* Title & Origin */}
          <div className="mb-2">
            <h3 className="text-base md:text-xl font-bold text-brand-navy mb-1 group-hover:text-brand-gold transition-colors line-clamp-1">
              {product.name}
            </h3>
            <div className="flex items-center text-slate-500">
              <svg className="w-3 h-3 mr-0.5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-xs md:text-sm font-semibold">India</span>
            </div>
          </div>

          {/* Description - Hidden on mobile */}
          <p className="hidden sm:block text-xs md:text-sm text-slate-600 mb-3 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-1.5 md:gap-3 mb-3">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-1.5 md:p-3 rounded-lg md:rounded-xl border border-slate-200">
              <div className="flex items-center mb-0.5">
                <svg className="w-2.5 md:w-4 h-2.5 md:h-4 text-brand-gold mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <span className="text-xs font-semibold text-slate-500">Pack</span>
              </div>
              <p className="text-xs font-bold text-brand-navy line-clamp-1">{product.packaging}</p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-1.5 md:p-3 rounded-lg md:rounded-xl border border-slate-200">
              <div className="flex items-center mb-0.5">
                <svg className="w-2.5 md:w-4 h-2.5 md:h-4 text-brand-gold mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span className="text-xs font-semibold text-slate-500">MOQ</span>
              </div>
              <p className="text-xs font-bold text-brand-navy line-clamp-1">{product.moq}</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-1.5 md:gap-2">
            <a
              href={'/products/' + product.slug}
              className="flex-1 text-center px-2 md:px-4 py-2 md:py-3 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-white rounded-lg md:rounded-xl text-xs md:text-base font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Details
            </a>
            <button
              onClick={onQuoteClick}
              className="px-2 md:px-4 py-2 md:py-3 bg-gradient-to-br from-slate-100 to-slate-200 text-brand-navy rounded-lg md:rounded-xl font-bold hover:from-brand-navy hover:to-brand-navy-dark hover:text-white transition-all duration-300 flex items-center justify-center"
              title="Request Quote"
            >
              <svg className="w-3.5 md:w-5 h-3.5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
        </div>
      </div>
    </div>
  );
}
