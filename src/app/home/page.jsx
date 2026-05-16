import { Hero } from "./sections/Hero";
import { TrustPartners } from "./sections/TrustPartners";
import { WhyChoose } from "./sections/WhyChoose";

import { FeaturedProducts } from "./sections/FeaturedProducts";
import { ExportCountries } from "./sections/ExportCountries";
import { Certifications } from "./sections/Certifications";
import { Reviews } from "./sections/Reviews";
import { FaqSection } from "./sections/FaqSection";
import { BlogPreview } from "./sections/BlogPreview";
import { InquiryForm } from "./sections/InquiryForm";
import { Container } from "@/components/shared/Container";

export const metadata = {
  title: "MITRAY EXIM – Agricultural Exports from India",
  description: "Premium vegetable, fruit, spice, rice, and wheat exporter from India to international markets.",
};

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* PERSISTENT GLOBAL BACKGROUND SYSTEM */}
      <div className="bg-blob-container opacity-40">
        <div className="bg-blob top-0 -left-20 opacity-30 animate-subtle-float"></div>
        <div className="bg-blob top-1/4 -right-20 opacity-20 animate-subtle-float delay-300"></div>
        <div className="bg-blob top-2/4 -left-20 opacity-30 animate-subtle-float delay-500"></div>
        <div className="bg-blob bottom-0 right-1/4 opacity-20 animate-subtle-float delay-100"></div>
      </div>

      <Hero />
      <TrustPartners />
      
      {/* TIGHTER, MORE DYNAMIC SPACING - py-12 md:py-20 */}

      <div className="py-12 md:py-20 relative z-10">
        <Container>
          <WhyChoose />
        </Container>
      </div>

      <div className="py-12 md:py-20 relative z-10">
        <Container>
          <FeaturedProducts />
        </Container>
      </div>

      <div className="py-16 md:py-24 relative z-10 bg-slate-50/30">
        <Container>
          <ExportCountries />
        </Container>
      </div>

      <div className="py-12 md:py-20 relative z-10">
        <Container>
          <Certifications />
        </Container>
      </div>

      <div className="py-12 md:py-20 relative z-10 bg-slate-50/30">
        <Container>
          <Reviews />
        </Container>
      </div>

      <div className="py-12 md:py-20 relative z-10">
        <Container>
          <FaqSection />
        </Container>
      </div>

      <div className="py-12 md:py-20 relative z-10 bg-brand-navy/5">
        <Container>
          <BlogPreview />
        </Container>
      </div>

      <div className="py-16 md:py-24 relative z-10">
        <Container>
          <InquiryForm />
        </Container>
      </div>
    </div>
  );
}
