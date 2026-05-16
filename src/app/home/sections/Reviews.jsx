"use client";
import { TESTIMONIALS } from "@/data/testimonials";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./testimonial-swiper.css";
import { FiStar, FiCheckCircle, FiActivity, FiZap, FiShield } from "react-icons/fi";

export function Reviews() {
  return (
    <section className="relative overflow-hidden py-12 md:py-24">
      <div className="relative">
        
        {/* STANDARDIZED HEADER */}
        <div className="text-center mb-16 animate-reveal">
          <div className="inline-flex items-center px-5 py-2 bg-brand-gold/10 rounded-full mb-6 border border-brand-gold/20 backdrop-blur-md">
            <FiActivity className="text-brand-gold mr-2" />
            <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.4em]">Global Sentiment</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-brand-navy mb-8 tracking-tighter leading-none">
            Client <span className="text-gradient">Intelligence</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium opacity-80 uppercase tracking-tight">
            Trusted by institutional importers across the GCC and international corridors.
          </p>
        </div>

        {/* TESTIMONIAL ENGINE */}
        <div className="mb-24 relative testimonial-swiper px-4">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000 }}
            speed={1000}
            loop={true}
            spaceBetween={30}
            className="max-w-6xl mx-auto"
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="relative group p-4 md:p-10">
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold/20 to-brand-navy/20 rounded-[3rem] opacity-0 group-hover:opacity-10 transition duration-1000 blur-2xl"></div>
                  
                  <div className="relative glass-card rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-white/40 shadow-2xl">
                    <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 p-10 md:p-16">
                      
                      {/* QUOTE SECTION */}
                      <div className="lg:col-span-3 flex flex-col justify-center">
                        <div className="flex gap-1 mb-8">
                          {[...Array(5)].map((_, i) => (
                            <FiStar key={i} className="text-brand-gold text-lg fill-brand-gold" />
                          ))}
                        </div>
                        
                        <p className="text-xl md:text-3xl text-brand-navy font-medium italic tracking-tight leading-relaxed mb-8">
                          "{testimonial.text}"
                        </p>
                        
                        <div className="flex items-center gap-3">
                           <div className="bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100 flex items-center gap-2">
                             <FiCheckCircle /> Verified Importer
                           </div>
                        </div>
                      </div>

                      {/* PROFILE SECTION */}
                      <div className="lg:col-span-2 flex flex-col items-center lg:items-start justify-center lg:pl-16 border-t lg:border-t-0 lg:border-l border-slate-100/30 pt-10 lg:pt-0">
                        <div className="relative mb-6">
                          <div className="w-24 h-24 md:w-32 md:h-32 bg-brand-navy rounded-full flex items-center justify-center text-white font-black text-4xl shadow-2xl">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                            <FiCheckCircle className="text-brand-navy" />
                          </div>
                        </div>

                        <h4 className="text-2xl font-black text-brand-navy tracking-tight mb-1">{testimonial.name}</h4>
                        <p className="text-sm font-bold text-brand-gold uppercase tracking-widest mb-1">{testimonial.designation}</p>
                        <p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">{testimonial.company}</p>
                        
                        <div className="flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-full border border-slate-100">
                          <img src={`https://flagcdn.com/w40/${testimonial.countryCode}.png`} alt={testimonial.location} className="w-6 rounded-sm shadow-sm" />
                          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{testimonial.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* TRUST ACCELERATOR STRIP */}
        <div className="relative glass-panel rounded-[3rem] md:rounded-[5rem] p-12 md:p-20 overflow-hidden bg-brand-navy">
           <div className="absolute inset-0 bg-blob opacity-10 -left-20"></div>
           <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 text-center">
              {[
                { end: 20, suffix: "+", label: "Containers / mo", icon: <FiActivity /> },
                { end: 8, suffix: "+", label: "Years Experience", icon: <FiZap /> },
                { end: 100, suffix: "%", label: "Safety Compliance", icon: <FiShield /> }
              ].map((stat, i) => (
                <div key={i} className="group cursor-default">
                   <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center text-brand-gold text-2xl md:text-3xl mx-auto mb-8 border border-white/20 group-hover:rotate-6 transition-transform">
                      {stat.icon}
                   </div>
                   <p className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-2">
                     <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                   </p>
                   <p className="text-[10px] md:text-xs font-black text-brand-gold uppercase tracking-[0.4em] opacity-80">{stat.label}</p>
                </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
}
