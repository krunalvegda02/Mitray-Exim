import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
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
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy-light text-white pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>
        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-block px-5 py-2 bg-brand-gold/20 backdrop-blur-sm rounded-full border border-brand-gold/30 mb-8 animate-fade-in-down">
              <span className="text-sm font-semibold text-brand-gold-light tracking-wide">ESTABLISHED 2020</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in-up animation-delay-200 leading-tight">
              About MITRAY EXIM
            </h1>
            <p className="text-xl md:text-2xl text-brand-gold-light/90 leading-relaxed animate-fade-in-up animation-delay-400 max-w-3xl mx-auto">
              Your trusted partner for premium agricultural exports from India to global markets
            </p>
          </div>
        </Container>
      </div>

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
