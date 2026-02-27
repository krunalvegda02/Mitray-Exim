import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
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
    <div className="py-20 bg-white">
      <Container>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-4">
          Shipping & Logistics
        </h1>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Professional cold chain and export logistics services
        </p>

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
  );
}
