import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { TESTIMONIALS } from "@/data/testimonials";

export function Testimonials() {
  const testimonial = TESTIMONIALS[0]; // Show first testimonial (can make carousel later)

  return (
    <section className="py-24 bg-slate-100">
      <Container>
        {/* Small Label */}
        <p className="text-center text-sm tracking-widest text-slate-500 uppercase mb-2">
          Testimonials
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center text-brand-navy mb-16">
          What Our Clients Say
        </h2>

        {/* Testimonial Layout */}
        <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Quote */}
          <div className="relative">
            {/* Large Quote Icon */}
            <span className="absolute -top-8 left-0 text-7xl text-slate-200 font-serif">
              “
            </span>

            <p className="text-lg text-slate-700 leading-relaxed relative z-10">
              {testimonial.text}
            </p>
          </div>

          {/* Right Side - Profile */}
          <div className="text-center md:text-left">
            <div className="flex md:block justify-center">
              <div className="w-32 h-32 relative rounded-full overflow-hidden shadow-lg mb-6">
                <Image
                  src="/dummy-avatar.jpg" // replace with professional avatar
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Stars */}
            <div className="flex justify-center md:justify-start mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <h4 className="text-xl font-semibold text-brand-navy">
              {testimonial.name}
            </h4>

            <p className="text-slate-600 text-sm">
              {testimonial.designation}
            </p>

            <p className="text-slate-500 text-sm">
              {testimonial.company}
            </p>

            <p className="text-slate-400 text-sm mt-1">
              📍 {testimonial.location}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}