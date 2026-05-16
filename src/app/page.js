import { Hero } from "./home/sections/Hero";
import { WhyChoose } from "./home/sections/WhyChoose";
import { FeaturedProducts } from "./home/sections/FeaturedProducts";
import { ExportCountries } from "./home/sections/ExportCountries";
import { Certifications } from "./home/sections/Certifications";
import { Reviews } from "./home/sections/Reviews";
import { FaqSection } from "./home/sections/FaqSection";
import { BlogPreview } from "./home/sections/BlogPreview";
import { Container } from "@/components/shared/Container";
import Link from "next/link";

export default function Home() {
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

      <div className="py-20 bg-gradient-to-r from-slate-50 to-white border-t-2 border-brand-gold/20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-brand-navy">Ready to Get Started?</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 leading-relaxed">
              Request a quotation today and let our export specialists help you find the perfect agricultural products for your business
            </p>
            <Link href="/contact">
              <button className="px-8 sm:px-10 md:px-12 py-4 sm:py-5 text-base sm:text-lg bg-brand-gold text-brand-navy rounded-xl font-semibold hover:bg-brand-gold-dark transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Request Quotation
              </button>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
}
