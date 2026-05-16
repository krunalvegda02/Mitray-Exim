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
      
      <div className="py-12 md:py-20 bg-slate-50">
        <Container>
          <WhyChoose />
        </Container>
      </div>

      <div className="py-12 md:py-20 bg-white">
        <Container>
          <FeaturedProducts />
        </Container>
      </div>

      <div className="py-12 md:py-20 bg-slate-50">
        <Container>
          <ExportCountries />
        </Container>
      </div>

      <div className="py-12 md:py-20 bg-white">
        <Container>
          <Certifications />
        </Container>
      </div>

      <div className="py-12 md:py-20 bg-slate-50">
        <Container>
          <Reviews />
        </Container>
      </div>

      <div className="py-12 md:py-20 bg-white">
        <Container>
          <FaqSection />
        </Container>
      </div>

      <div className="py-12 md:py-20 bg-slate-50">
        <Container>
          <BlogPreview />
        </Container>
      </div>

      <div className="py-12 md:py-20 relative overflow-hidden bg-white">
        {/* ATMOSPHERIC BACKGROUND */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 blur-[150px] rounded-full animate-subtle-float"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-navy/10 blur-[150px] rounded-full animate-subtle-float delay-1000"></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-10">
               <div className="h-px bg-brand-gold/40 animate-line-grow w-0"></div>
               <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.5em] animate-reveal opacity-0">MITRAY EXIM INITIALIZATION</span>
               <div className="h-px bg-brand-gold/40 animate-line-grow w-0"></div>
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black font-outfit uppercase tracking-tighter leading-none text-brand-navy mb-8 animate-reveal delay-100 opacity-0">
              READY TO <br />
              <span className="text-gradient">PARTNER WITH US?</span>
            </h2>
            
            <p className="text-sm md:text-xl text-slate-500 font-bold uppercase tracking-tight leading-relaxed max-w-2xl mx-auto mb-12 opacity-0 animate-reveal delay-300">
              Request a formal quotation from MITRAY EXIM today and let our specialists initialize your global supply chain manifest from India.
            </p>
            
            <Link href="/contact">
              <button className="group relative px-12 py-6 bg-brand-navy rounded-xl text-white font-black uppercase tracking-[0.3em] text-[11px] shadow-2xl hover:bg-brand-gold hover:text-brand-navy transition-all duration-700 active:scale-95 overflow-hidden animate-reveal delay-500 opacity-0">
                <span className="relative z-10">Initialize MITRAY Partnership</span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
}
