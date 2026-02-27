export function GalleryGrid() {
  const images = [
    { src: "/images/gallery/export1.jpg", title: "Export Operations" },
    { src: "/images/gallery/packaging1.jpg", title: "Packaging Process" },
    { src: "/images/gallery/warehouse1.jpg", title: "Warehouse Facility" },
    { src: "/images/gallery/shipment1.jpg", title: "Container Shipment" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {images.map((img, idx) => (
        <div
          key={idx}
          className="aspect-square relative rounded-lg overflow-hidden bg-slate-100 border-2 border-slate-200"
        >
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-slate-400 text-sm">{img.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
