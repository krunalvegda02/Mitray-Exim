import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { PageHero } from "@/components/shared/PageHero";
import { ColdStorage } from "./sections/ColdStorage";
import { Packaging } from "./sections/Packaging";
import { Documentation } from "./sections/Documentation";
import { Timeline } from "./sections/Timeline";

export const metadata = {
  title: "Cold Chain & Export Logistics | MITRAY EXIM",
  description:
    "Learn about cold storage, packaging, export documentation, shipping partners, and delivery timelines for vegetable exports from India.",
};

export default function ShippingPage() {
  return (
    <>
      <PageHero 
        badge="LOGISTICS & COLD CHAIN"
        title="Shipping & Logistics"
        description="Professional cold chain and export logistics services ensuring quality from farm to destination"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Shipping' }
        ]}
      />

      <div className="bg-gradient-to-b from-white via-slate-50 to-white py-20">
        <Container>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ColdStorage />
          <Packaging />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Documentation />
          <div className="bg-white p-8 rounded-lg border-2 border-slate-200">
            <h2 className="text-xl font-semibold mb-4 text-brand-navy">Shipping Partners</h2>
            <p className="text-slate-700 leading-relaxed">
              We work with leading container shipping lines and logistics partners to ensure timely and reliable delivery to international ports.
            </p>
          </div>
        </div>

        <Timeline />

        <div className="text-center mt-12">
          <a href="/landing">
            <Button className="px-8 py-4">
              Request Quotation
            </Button>
          </a>
        </div>
        </Container>
      </div>
    </>
  );
}
