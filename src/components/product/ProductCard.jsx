export function ProductCard({ product }) {
  // Dummy images from Unsplash based on product category
  const getProductImage = (category) => {
    const images = {
      vegetables: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop',
      fruits: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&h=300&fit=crop',
      spices: 'https://images.unsplash.com/photo-1596040033229-a0b3b7d1f4c1?w=400&h=300&fit=crop',
      rice: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop',
      wheat: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
      dehydrated: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=300&fit=crop'
    };
    return images[category] || images.vegetables;
  };

  return (
    <div className="bg-white rounded-2xl shadow-md border-2 border-slate-200 overflow-hidden hover:border-brand-gold hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
      {/* Product Image */}
      <div className="relative h-56 overflow-hidden bg-slate-100">
        <img 
          src={getProductImage(product.category)} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 px-3 py-1 bg-brand-navy/90 backdrop-blur-sm rounded-full">
          <span className="text-xs font-semibold text-white uppercase tracking-wide">{product.category}</span>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-gold transition-colors duration-300">
          {product.name}
        </h3>
        <a
          href={`/products/${product.slug}`}
          className="inline-flex items-center text-brand-gold hover:text-brand-navy font-semibold transition-colors duration-300 group"
        >
          <span>View Details</span>
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
