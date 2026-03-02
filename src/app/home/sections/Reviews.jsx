"use client";
import { TESTIMONIALS } from "@/data/testimonials";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./testimonial-swiper.css";

export function Reviews() {

  return (
    <section className="relative overflow-hidden">
      {/* Decorative Background Images */}
      <div className="absolute left-10 top-20 w-48 h-48 opacity-5 hidden xl:block">
        <img 
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop" 
          alt="Happy client"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="absolute right-10 bottom-40 w-56 h-56 opacity-5 hidden xl:block">
        <img 
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop" 
          alt="Business partnership"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <div className="relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-brand-gold/10 via-brand-navy/10 to-brand-gold/10 rounded-full mb-4 border border-brand-gold/30">
          <svg className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm font-bold text-brand-navy">Client Testimonials</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-4 px-4">
          What Our Clients Say
        </h2>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
          Trusted by leading importers across GCC and international markets
        </p>
      </div>

      {/* Featured Testimonial */}
      <div className="mb-16 sm:mb-20 relative testimonial-swiper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={800}
          loop={true}
          spaceBetween={30}
          className="max-w-6xl mx-auto"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-gold/30 via-brand-navy/30 to-brand-gold/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition duration-700"></div>
                
                <div className="relative bg-white rounded-3xl border border-slate-200/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.2)] transition-shadow duration-500">
                  {/* Subtle top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
                  
                  <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 p-8 sm:p-10 md:p-14">
                    
                    {/* Left - Quote (3 cols) */}
                    <div className="lg:col-span-3 relative">
                      <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-16 h-16 sm:w-20 sm:h-20 bg-brand-gold/10 rounded-2xl flex items-center justify-center rotate-6">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      
                      <div className="pt-10 sm:pt-12">
                        <p className="text-lg sm:text-xl md:text-2xl text-slate-800 leading-relaxed font-normal mb-6 italic">
                          "{testimonial.text}"
                        </p>
                        
                        {/* Stars */}
                        <div className="flex gap-1 mb-5">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-lg">
                          <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs font-semibold text-emerald-700">Verified Client</span>
                        </div>
                      </div>
                    </div>

                    {/* Right - Profile (2 cols) */}
                    <div className="lg:col-span-2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left border-t lg:border-t-0 lg:border-l border-slate-100 pt-8 lg:pt-0 lg:pl-10">
                      <div className="relative mb-5">
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-brand-gold via-brand-gold to-brand-gold-dark rounded-full flex items-center justify-center text-white font-bold text-4xl sm:text-5xl shadow-lg">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center border-3 border-white shadow-md">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>

                      <h4 className="text-xl sm:text-2xl font-bold text-brand-navy mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm sm:text-base text-brand-gold font-semibold mb-0.5">
                        {testimonial.designation}
                      </p>
                      <p className="text-sm sm:text-base text-slate-500 font-medium mb-4">
                        {testimonial.company}
                      </p>
                      
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-200">
                        <div className="w-5 h-5 rounded overflow-hidden border border-slate-200 shadow-sm">
                          <img 
                            src={`https://flagcdn.com/w40/${testimonial.countryCode}.png`}
                            alt={testimonial.location}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-xs font-medium text-slate-600">{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 w-12 h-12 sm:w-14 sm:h-14 bg-white hover:bg-brand-gold border-2 border-slate-200 hover:border-brand-gold rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all hover:scale-110 group">
          <svg className="w-6 h-6 text-brand-navy group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 w-12 h-12 sm:w-14 sm:h-14 bg-white hover:bg-brand-gold border-2 border-slate-200 hover:border-brand-gold rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all hover:scale-110 group">
          <svg className="w-6 h-6 text-brand-navy group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Trust Boost Section */}
      <div className="relative group">
        <div className="absolute -inset-2 bg-gradient-to-r from-brand-navy/30 via-brand-gold/30 to-brand-navy/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition duration-700"></div>
        
        <div className="relative bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy-light rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
          
          <div className="relative">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-brand-gold/20 rounded-full border-2 border-brand-gold/40 mb-6 backdrop-blur-sm">
                <svg className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base font-bold text-white">Export Excellence</span>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Trusted by Importers Across GCC
              </h3>
              <p className="text-brand-gold-light text-base sm:text-lg max-w-3xl mx-auto">
                Delivering quality agricultural products with complete compliance and reliability
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="group/stat relative bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-2xl p-8 sm:p-10 text-center hover:bg-white/20 transition-all hover:scale-105 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 to-transparent rounded-2xl opacity-0 group-hover/stat:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-brand-gold/40">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
                    <AnimatedCounter end={20} suffix="+" />
                  </p>
                  <p className="text-base sm:text-lg text-brand-gold-light font-bold">Containers Monthly</p>
                </div>
              </div>

              <div className="group/stat relative bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-2xl p-8 sm:p-10 text-center hover:bg-white/20 transition-all hover:scale-105 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 to-transparent rounded-2xl opacity-0 group-hover/stat:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-brand-gold/40">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
                    <AnimatedCounter end={8} suffix="+" />
                  </p>
                  <p className="text-base sm:text-lg text-brand-gold-light font-bold">Years Experience</p>
                </div>
              </div>

              <div className="group/stat relative bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-2xl p-8 sm:p-10 text-center hover:bg-white/20 transition-all hover:scale-105 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 to-transparent rounded-2xl opacity-0 group-hover/stat:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-brand-gold/40">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
                    <AnimatedCounter end={100} suffix="%" />
                  </p>
                  <p className="text-base sm:text-lg text-brand-gold-light font-bold">Phytosanitary Compliance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
