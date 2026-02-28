import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { PageHero } from "@/components/shared/PageHero";
import { CompanyIntro } from "./sections/CompanyIntro";
import { VisionMission } from "./sections/VisionMission";
import { Values } from "./sections/Values";
import { Infrastructure } from "./sections/Infrastructure";
import { QualityControl } from "./sections/QualityControl";
import { GlobalPresence } from "./sections/GlobalPresence";

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
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About' }
        ]}
      />

      {/* Main Content */}
      <div className="bg-gradient-to-b from-white via-slate-50 to-white py-20">
        <Container>
          {/* Company Intro */}
          <div className="animate-fade-in-up animation-delay-400 mb-20">
            <CompanyIntro />
          </div>

          {/* Vision/Mission & Values */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 animate-fade-in-up animation-delay-600">
            <VisionMission />
            <Values />
          </div>

          {/* Infrastructure & Quality Control */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 animate-fade-in-up animation-delay-800">
            <Infrastructure />
            <QualityControl />
          </div>

          {/* Global Presence */}
          <div className="animate-fade-in-up animation-delay-800 mb-20">
            <GlobalPresence />
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy-light rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl animate-fade-in-up animation-delay-800">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
              <p className="text-lg md:text-xl text-brand-gold-light/90 mb-10 leading-relaxed">
                Get in touch to discuss your export requirements and receive a detailed quotation tailored to your business needs
              </p>
              <a href="/landing">
                <button className="px-12 py-5 text-lg bg-brand-gold text-white rounded-xl font-semibold hover:bg-brand-gold-light transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
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
