import { Container } from "@/components/shared/Container";

export function Benefits() {
  const benefits = [
    {
      title: "Competitive Pricing",
      desc: "Direct from Indian farms with bulk export discounts",
    },
    {
      title: "Year-Round Supply",
      desc: "Multiple growing seasons for consistent availability",
    },
    {
      title: "Full Compliance",
      desc: "APEDA, FSSAI, IEC, and phytosanitary certificates",
    },
    {
      title: "Reliable Logistics",
      desc: "Regular container schedules to international ports",
    },
  ];

  return (
    <div className="py-20 bg-slate-50">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-brand-navy mb-12">
          Why Import from India
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-white p-6 rounded-lg border-2 border-slate-200">
              <h3 className="font-semibold text-brand-navy mb-2">{benefit.title}</h3>
              <p className="text-sm text-slate-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
