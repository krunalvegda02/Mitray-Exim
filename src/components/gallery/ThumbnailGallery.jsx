export function ThumbnailGallery({ images }) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
      {images.map((img, idx) => (
        <div
          key={idx}
          className="aspect-square bg-slate-100 rounded border-2 border-slate-200 hover:border-blue-900 transition-colors cursor-pointer overflow-hidden"
        >
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-xs text-slate-400">{img.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
