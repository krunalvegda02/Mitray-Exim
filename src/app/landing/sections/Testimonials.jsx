import { Container } from "@/components/shared/Container";
import { TESTIMONIALS } from "@/data/testimonials";

export function Testimonials() {
  return (
    <div className="py-20 bg-slate-50">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-brand-navy mb-12">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {TESTIMONIALS.slice(0, 2).map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg border-2 border-slate-200">
              <p className="text-slate-700 mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-brand-navy">{testimonial.name}</p>
                <p className="text-sm text-slate-600">{testimonial.company}</p>
                <p className="text-sm text-slate-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
