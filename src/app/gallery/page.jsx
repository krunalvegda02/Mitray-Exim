import { LightboxGallery } from "@/components/gallery/LightboxGallery";
import { Container } from "@/components/shared/Container";

export const metadata = {
  title: "Export, Packaging & Warehouse Photos | MITRAY EXIM",
  description:
    "Browse images of our export operations, packaging processes, warehouse, and international shipments.",
};

export default function GalleryPage() {
  const images = [
    { src: "/images/gallery/export1.jpg", title: "Export Operations" },
    { src: "/images/gallery/packaging1.jpg", title: "Packaging Process" },
    { src: "/images/gallery/warehouse1.jpg", title: "Warehouse Facility" },
    { src: "/images/gallery/shipment1.jpg", title: "Container Shipment" },
    { src: "/images/gallery/quality1.jpg", title: "Quality Control" },
    { src: "/images/gallery/loading1.jpg", title: "Container Loading" },
  ];

  return (
    <div className="py-20 bg-white">
      <Container>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-4">
          Photo Gallery
        </h1>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Our export operations, facilities, and international shipments
        </p>

        <LightboxGallery images={images} />
      </Container>
    </div>
  );
}
