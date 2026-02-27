import { TESTIMONIALS } from "@/data/testimonials";
import { TestimonialCard } from "./TestimonialCard";
import { SectionHeading } from "@/components/animations/SectionHeading";

export function ReviewSection() {
  return (
    <section>
      <SectionHeading
        title="What Our Clients Say"
        subtitle="Trusted by importers across international markets"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
