export function ProductImages({ product }) {
  return (
    <div className="bg-slate-100 rounded-lg border-2 border-slate-200 aspect-square flex items-center justify-center">
      <div className="text-center p-8">
        <div className="w-24 h-24 mx-auto mb-4 bg-slate-200 rounded-lg flex items-center justify-center">
          <span className="text-4xl">📦</span>
        </div>
        <p className="text-slate-600 font-medium">{product.name}</p>
        <p className="text-sm text-slate-500 mt-2">Product Image</p>
      </div>
    </div>
  );
}
