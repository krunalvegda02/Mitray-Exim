import { CERTIFICATIONS } from "@/data/certifications";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { PageHero } from "@/components/shared/PageHero";

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

      <div className="bg-gradient-to-b from-white via-slate-50 to-white py-20">
        <Container>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="bg-white p-6 rounded-lg border-2 border-slate-200 text-center hover:border-blue-900 transition-colors"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-slate-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-brand-navy-dark">{cert.name}</span>
              </div>
              <h2 className="text-lg font-semibold text-brand-navy mb-2">
                {cert.fullName}
              </h2>
              <p className="text-sm text-slate-600">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-brand-navy mb-4">
            Quality Assurance
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            We follow strict quality control procedures at every stage of sourcing, packing, and shipping to meet international standards for global markets. All shipments include phytosanitary certificates and compliance documentation.
          </p>
          <Button className="px-6 py-3">
            Request Compliance Documents
          </Button>
        </div>
        </Container>
      </div>
    </>
  );
}
