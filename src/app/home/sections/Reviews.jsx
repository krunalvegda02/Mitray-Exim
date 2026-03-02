import { TESTIMONIALS } from "@/data/testimonials";

export function Reviews() {
  return (
    <section>
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-2 bg-brand-gold/10 rounded-full mb-4">
          <span className="text-sm font-semibold text-brand-navy-dark">Testimonials</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
          Client Testimonials
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Trusted by importers across international markets
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TESTIMONIALS.slice(0, 4).map((review) => (
          <div
            key={review.id}
            className="group relative bg-gradient-to-br from-white to-slate-50 p-6 rounded-2xl border-2 border-slate-200 hover:border-brand-gold transition-all hover:shadow-xl"
          >
            <div className="absolute -top-3 -left-3 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            <div className="pt-4">
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
              
              <p className="text-slate-700 mb-6 leading-relaxed text-base">
                "{review.text}"
              </p>
              
              <div className="flex items-center pt-4 border-t border-slate-200">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-brand-gold-dark rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-md">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-brand-navy text-base">{review.name}</p>
                  <p className="text-sm text-slate-600 font-medium">{review.company}</p>
                  <div className="flex items-center mt-1">
                    <svg className="w-3 h-3 text-slate-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs text-slate-500">{review.location}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
              <svg className="w-8 h-8 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
