import { CERTIFICATIONS } from "@/data/certifications";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { CertificateCard } from "@/components/CertificateCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import Link from "next/link";

export const metadata = {
  title: "Export Certifications – APEDA, FSSAI, IEC | MITRAY EXIM",
  description:
    "Learn about APEDA, FSSAI, Import Export Code (IEC), Phytosanitary Certificate, and quality assurance standards for vegetable exports from India.",
};

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        badge="CERTIFIED & COMPLIANT"
        title="Certifications & Compliance"
        description="Fully certified and compliant with international export standards for quality assurance"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Certifications' }
        ]}
      />

      <div className="bg-gradient-to-b from-white via-slate-50 to-white py-12 sm:py-16 md:py-20">
        <Container>
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-brand-gold/10 to-brand-navy/10 rounded-full border border-brand-gold/20 mb-4">
              <span className="text-sm font-bold text-brand-navy">Trusted & Verified</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy mb-4">Our Certifications</h2>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Fully licensed and certified by government authorities to ensure quality and compliance
            </p>
          </div>

          {/* Certification Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
            {CERTIFICATIONS.slice(0, 3).map((cert) => (
              <CertificateCard key={cert.id} cert={cert} />
            ))}
          </div>

          {/* Quality Assurance Section */}
          <div className="group relative mb-12 sm:mb-16 md:mb-20">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-navy/20 via-brand-gold/20 to-brand-navy/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

            <div className="relative bg-gradient-to-br from-white via-slate-50/50 to-white border-2 border-slate-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-brand-gold/20 to-brand-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg border-2 border-brand-gold/30">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-navy mb-3 sm:mb-4">
                    Quality Assurance & Compliance
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed mb-6 sm:mb-8">
                    We follow strict quality control procedures at every stage of sourcing, packing, and shipping to meet international standards for global markets. All shipments include phytosanitary certificates and compliance documentation.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="flex items-start p-4 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-200 hover:shadow-md transition-all group/item">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-navy text-sm sm:text-base mb-1">FSSAI Licensed</h4>
                        <p className="text-xs sm:text-sm text-slate-600">Food Safety Standards</p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-200 hover:shadow-md transition-all group/item">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-navy text-sm sm:text-base mb-1">APEDA Registered</h4>
                        <p className="text-xs sm:text-sm text-slate-600">Agricultural Exports</p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-200 hover:shadow-md transition-all group/item">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-navy text-sm sm:text-base mb-1">IEC Authorized</h4>
                        <p className="text-xs sm:text-sm text-slate-600">International Trade</p>
                      </div>
                    </div>
                    <div className="flex items-start p-4 bg-gradient-to-br from-amber-50 to-white rounded-xl border border-amber-200 hover:shadow-md transition-all group/item">
                      <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-navy text-sm sm:text-base mb-1">Phytosanitary</h4>
                        <p className="text-xs sm:text-sm text-slate-600">Plant Health Certificate</p>
                      </div>
                    </div>
                  </div>
                  <Link href="/contact" className="inline-block">
                    <button className="group/btn relative px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-sm sm:text-base font-semibold bg-gradient-to-r from-brand-gold to-brand-gold-light text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Request Compliance Documents
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy to-brand-navy-dark opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="group relative text-center p-4 sm:p-6 bg-gradient-to-br from-white to-slate-50 rounded-xl border-2 border-slate-200 hover:border-brand-gold hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-2">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">Compliant</div>
              </div>
            </div>
            <div className="group relative text-center p-4 sm:p-6 bg-gradient-to-br from-white to-slate-50 rounded-xl border-2 border-slate-200 hover:border-brand-gold hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-2">
                  <AnimatedCounter end={5} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">Certifications</div>
              </div>
            </div>
            <div className="group relative text-center p-4 sm:p-6 bg-gradient-to-br from-white to-slate-50 rounded-xl border-2 border-slate-200 hover:border-brand-gold hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-2">
                  <AnimatedCounter end={2020} />
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">Established</div>
              </div>
            </div>
            <div className="group relative text-center p-4 sm:p-6 bg-gradient-to-br from-white to-slate-50 rounded-xl border-2 border-slate-200 hover:border-brand-gold hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-2">
                  <AnimatedCounter end={10} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">Countries</div>
              </div>
            </div>
          </div>
        </Container >
      </div>

    </>
  );
}
