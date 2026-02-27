import { Hero } from "./sections/Hero";
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
    <div>
      <Hero />
      
      <div className="py-20 bg-slate-50">
        <Container>
          <WhyChoose />
        </Container>
      </div>

      <div className="py-20 bg-white">
        <Container>
          <FeaturedProducts />
        </Container>
      </div>

      <div className="py-20 bg-slate-50">
        <Container>
          <ExportCountries />
        </Container>
      </div>

      <div className="py-20 bg-white">
        <Container>
          <Certifications />
        </Container>
      </div>

      <div className="py-20 bg-slate-50">
        <Container>
          <Reviews />
        </Container>
      </div>

      <div className="py-20 bg-white">
        <Container>
          <FaqSection />
        </Container>
      </div>

      <div className="py-20 bg-slate-50">
        <Container>
          <BlogPreview />
        </Container>
      </div>

      <div className="py-20 bg-white">
        <Container>
          <InquiryForm />
        </Container>
      </div>
    </div>
  );
}
