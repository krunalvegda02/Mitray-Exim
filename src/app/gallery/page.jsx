import { LightboxGallery } from "@/components/gallery/LightboxGallery";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";

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
    <>
      <PageHero 
        badge="VISUAL SHOWCASE"
        title="Photo Gallery"
        description="Our export operations, facilities, and international shipments captured in detail"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Gallery' }
        ]}
      />

      <div className="bg-gradient-to-b from-white via-slate-50 to-white py-20">
        <Container>
          <LightboxGallery images={images} />
        </Container>
      </div>
    </>
  );
}
