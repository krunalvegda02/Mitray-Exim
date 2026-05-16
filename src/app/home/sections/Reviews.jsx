"use client";
import { TESTIMONIALS } from "@/data/testimonials";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./testimonial-swiper.css";
import { FiStar, FiCheckCircle, FiActivity, FiZap, FiShield, FiArrowLeft, FiArrowRight, FiGlobe } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

export function Reviews() {
  return (
    <section className="relative overflow-hidden py-24 md:py-40">

      {/* INSTITUTIONAL BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 skew-x-[-12deg] translate-x-20 hidden md:block"></div>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-50/50 md:hidden"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">

        {/* HEADER ARCHITECTURE */}
        <div className="max-w-4xl mb-16 md:mb-32 animate-reveal">
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <div className="w-8 md:w-12 h-px bg-brand-gold"></div>
            <span className="text-[8px] md:text-[10px] font-black text-brand-gold uppercase tracking-[0.4em] md:tracking-[0.5em]">Global Sentiment Manifest</span>
          </div>
          <h2 className="text-4xl md:text-9xl font-black text-brand-navy mb-6 md:mb-8 tracking-tighter leading-[0.85]">
            TRUSTED BY <br className="hidden md:block" />
            <span className="text-gradient">THE GIANTS.</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-xl font-medium max-w-xl leading-relaxed uppercase tracking-tight opacity-80">
            Institutional grade reliability. Verified by the world's most demanding procurement offices.
          </p>
        </div>

        {/* TESTIMONIAL TERMINAL - MOBILE REFINED */}
        <div className="relative mb-20 md:mb-32 group">

          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            navigation={{
              prevEl: ".rev-prev",
              nextEl: ".rev-next",
            }}
            autoplay={{ delay: 10000 }}
            speed={1500}
            loop={true}
            className="max-w-6xl mx-auto"
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center py-6 md:py-10">

                  {/* PROFILE MANIFEST - MOBILE OPTIMIZED */}
                  <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="relative mb-8 md:mb-10">
                      {/* SCANNER LIGHT EFFECT - MOBILE REFINEMENT */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent w-full h-full -skew-x-12 animate-scan pointer-events-none md:hidden"></div>

                      <div className="w-32 h-32 md:w-56 md:h-56 rounded-[2rem] md:rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(44,74,94,0.2)] bg-slate-100 flex items-center justify-center border border-white/50 relative z-10 transition-transform duration-1000 group-hover:scale-105">
                        <span className="text-5xl md:text-8xl font-black text-brand-navy opacity-10">{testimonial.name.charAt(0)}</span>
                        {testimonial.avatar && <img src={testimonial.avatar} alt={testimonial.name} className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" onError={(e) => e.target.style.display = 'none'} />}
                      </div>

                      <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-14 h-14 md:w-20 md:h-20 bg-brand-gold rounded-xl md:rounded-2xl flex items-center justify-center border-4 md:border-8 border-white shadow-2xl z-20">
                        <img src={`https://flagcdn.com/w80/${testimonial.countryCode}.png`} alt={testimonial.location} className="w-6 md:w-10 rounded-sm shadow-sm" />
                      </div>
                    </div>

                    <div className="space-y-1 md:space-y-2">
                      <h4 className="text-2xl md:text-4xl font-black text-brand-navy tracking-tighter leading-none">{testimonial.name}</h4>
                      <p className="text-[10px] md:text-xs font-black text-brand-gold uppercase tracking-[0.3em]">{testimonial.designation}</p>
                      <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">{testimonial.company}</p>
                    </div>

                    <div className="mt-8 md:mt-10 flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-emerald-50 rounded-full border border-emerald-100 shadow-sm">
                      <FiCheckCircle className="text-emerald-500 text-xs md:text-sm" />
                      <span className="text-[8px] md:text-[9px] font-black text-emerald-600 uppercase tracking-widest leading-none">Verified Institutional Partner</span>
                    </div>
                  </div>

                  {/* QUOTE BLOCK - MOBILE REFINED */}
                  <div className="lg:col-span-8 relative">
                    <div className="absolute -top-8 -left-8 md:-top-12 md:-left-12 opacity-[0.05] text-[8rem] md:text-[15rem] font-black pointer-events-none select-none text-brand-navy">
                      "
                    </div>

                    <div className="relative space-y-8 md:space-y-12">
                      <div className="flex gap-1.5">
                        {[...Array(5)].map((_, i) => (
                          <FiStar key={i} className="text-brand-gold text-sm md:text-xl fill-brand-gold" />
                        ))}
                      </div>

                      <h3 className="text-xl md:text-5xl font-bold text-brand-navy leading-[1.3] md:leading-[1.15] tracking-tight italic">
                        {testimonial.text}
                      </h3>

                      <div className="flex items-center gap-4 md:gap-6">
                        <div className="h-px w-10 md:w-20 bg-slate-200"></div>
                        <span className="text-[8px] md:text-[11px] font-black text-slate-300 uppercase tracking-[0.3em] md:tracking-[0.5em] whitespace-nowrap">Global Intelligence v2.4</span>
                      </div>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CUSTOM MINIMAL NAVIGATION - RESPONSIVE */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 flex justify-between pointer-events-none px-2 md:px-0">
            <button className="rev-prev w-12 h-12 md:w-20 md:h-20 rounded-full bg-white/90 backdrop-blur-md shadow-xl border border-slate-100 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all duration-700 pointer-events-auto md:-translate-x-10 group-hover:translate-x-0 opacity-100 md:opacity-0 md:group-hover:opacity-100">
              <FiArrowLeft className="text-lg md:text-2xl" />
            </button>
            <button className="rev-next w-12 h-12 md:w-20 md:h-20 rounded-full bg-white/90 backdrop-blur-md shadow-xl border border-slate-100 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all duration-700 pointer-events-auto md:translate-x-10 group-hover:translate-x-0 opacity-100 md:opacity-0 md:group-hover:opacity-100">
              <FiArrowRight className="text-lg md:text-2xl" />
            </button>
          </div>
        </div>

        {/* INSTITUTIONAL TRUST ACCELERATOR - MOBILE COMPACT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-100/30 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-slate-100">
          {[
            { label: "Global Reach", val: "14+ Corridors", icon: <FiGlobe /> },
            { label: "Transit Speed", val: "24/7 Monitoring", icon: <FiZap /> },
            { label: "Audit Status", val: "100% Compliant", icon: <FiShield /> }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 md:p-12 flex items-center md:flex-col gap-6 md:gap-0 text-left md:text-center group hover:bg-brand-navy transition-all duration-700 border-b md:border-b-0 last:border-b-0 border-slate-50">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-slate-50 flex items-center justify-center text-brand-gold text-xl md:text-2xl group-hover:bg-white/10 group-hover:scale-110 transition-all duration-700 shrink-0">
                {item.icon}
              </div>
              <div className="flex-1">
                <p className="text-[8px] md:text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-1 md:mb-2 group-hover:text-white/40 leading-none">{item.label}</p>
                <p className="text-lg md:text-2xl font-black text-brand-navy uppercase tracking-tighter group-hover:text-white leading-none">{item.val}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
