import { TESTIMONIALS } from "@/data/testimonials";

export function Reviews() {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
          Client Testimonials
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Trusted by importers across international markets
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TESTIMONIALS.slice(0, 2).map((review) => (
          <div
            key={review.id}
            className="relative bg-white p-8 rounded-xl border-2 border-slate-200 hover:border-brand-gold transition-all hover:shadow-xl"
          >
            <div className="absolute top-6 right-6 text-brand-gold-light text-6xl font-serif leading-none">“</div>
            <div className="relative">
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic leading-relaxed">"{review.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-brand-gold-dark rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-brand-navy">{review.name}</p>
                  <p className="text-sm text-slate-600">{review.company}</p>
                  <p className="text-xs text-slate-500">{review.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
