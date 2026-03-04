import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { PageHero } from "@/components/shared/PageHero";
import { CompanyIntro } from "./sections/CompanyIntro";
import { VisionMission } from "./sections/VisionMission";
import { Values } from "./sections/Values";
import { Infrastructure } from "./sections/Infrastructure";
import { QualityControl } from "./sections/QualityControl";
import { GlobalPresence } from "./sections/GlobalPresence";
import { Counter } from "@/components/shared/Counter";

export const metadata = {
  title: "About MITRAY EXIM – Vegetable Exporter from India",
  description: "Learn about MITRAY EXIM, our mission, vision, values, quality control, and global export presence.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero 
        badge="ESTABLISHED 2020"
        title="About MITRAY EXIM"
        description="Your trusted partner for premium agricultural exports from India to global markets"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About' }
        ]}
      />

      {/* Main Content */}
      <div className="bg-gradient-to-b from-white via-slate-50 to-white py-12 sm:py-16 md:py-20">
        <Container>
          {/* Company Intro */}
          <div className="animate-fade-in-up animation-delay-400 mb-12 sm:mb-16 md:mb-20">
            <CompanyIntro />
          </div>

          {/* Vision/Mission & Values */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16 md:mb-20 animate-fade-in-up animation-delay-600">
            <VisionMission />
            <Values />
          </div>

          {/* Infrastructure & Quality Control */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16 md:mb-20 animate-fade-in-up animation-delay-800">
            <Infrastructure />
            <QualityControl />
          </div>

          {/* Global Presence */}
          <div className="animate-fade-in-up animation-delay-800 mb-12 sm:mb-16 md:mb-20">
            <GlobalPresence />
          </div>

          {/* Stats/Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20 animate-fade-in-up animation-delay-800">
            <div className="bg-gradient-to-br from-brand-gold/10 to-brand-gold/5 rounded-2xl p-6 sm:p-8 border-2 border-brand-gold/20 text-center">
              <Counter end={500} duration={2000} className="text-4xl sm:text-5xl font-bold text-brand-gold mb-2" />
              <p className="text-sm sm:text-base font-semibold text-brand-navy">+ Shipments Delivered</p>
            </div>
            <div className="bg-gradient-to-br from-brand-navy/10 to-brand-navy/5 rounded-2xl p-6 sm:p-8 border-2 border-brand-navy/20 text-center">
              <Counter end={45} duration={2000} className="text-4xl sm:text-5xl font-bold text-brand-navy mb-2" />
              <p className="text-sm sm:text-base font-semibold text-brand-navy">+ Countries Served</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-2xl p-6 sm:p-8 border-2 border-green-500/20 text-center">
              <Counter end={150} duration={2000} className="text-4xl sm:text-5xl font-bold text-green-600 mb-2" />
              <p className="text-sm sm:text-base font-semibold text-brand-navy">+ Active Partners</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-2xl p-6 sm:p-8 border-2 border-blue-500/20 text-center">
              <Counter end={4} duration={2000} suffix="+" className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2" />
              <p className="text-sm sm:text-base font-semibold text-brand-navy">Years of Excellence</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy-light rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 lg:p-16 text-center text-white shadow-2xl animate-fade-in-up animation-delay-800">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Partner With Us?</h2>
              <p className="text-base sm:text-lg md:text-xl text-brand-gold-light/90 mb-6 sm:mb-8 md:mb-10 leading-relaxed px-2">
                Get in touch to discuss your export requirements and receive a detailed quotation tailored to your business needs
              </p>
              <a href="/contact">
                <button className="px-8 sm:px-10 md:px-12 py-4 sm:py-5 text-base sm:text-lg bg-brand-gold text-white rounded-xl font-semibold hover:bg-brand-gold-light transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl w-full sm:w-auto">
                  Request Quotation
                </button>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
