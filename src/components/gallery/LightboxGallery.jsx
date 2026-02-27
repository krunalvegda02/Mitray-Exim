"use client";

import { useState } from "react";

export function LightboxGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedImage(img)}
            className="aspect-square bg-slate-100 rounded-lg border-2 border-slate-200 cursor-pointer hover:border-blue-900 transition-colors overflow-hidden"
          >
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-slate-400 text-sm">{img.title}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full bg-white rounded-lg p-4">
            <div className="aspect-video bg-slate-100 rounded flex items-center justify-center">
              <span className="text-slate-600">{selectedImage.title}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
