import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { CompanyIntro } from "./sections/CompanyIntro";
import { VisionMission } from "./sections/VisionMission";
import { Values } from "./sections/Values";
import { Infrastructure } from "./sections/Infrastructure";
import { QualityControl } from "./sections/QualityControl";
import { GlobalPresence } from "./sections/GlobalPresence";
import { Counter } from "@/components/shared/Counter";
import { FiArrowRight, FiActivity, FiGlobe, FiShield, FiZap } from "react-icons/fi";

export const metadata = {
  title: "About MITRAY EXIM – Premium Agricultural Exporters India",
  description: "Learn about MITRAY EXIM's mission, vision, and institutional excellence in global agricultural exports from India.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <PageHero
        badge="ESTABLISHED 2020"
        title="ABOUT MITRAY EXIM."
        description="A premier merchant exporter from India, delivering nature's finest agricultural treasures to global markets with uncompromising quality standards."
        backgroundImage="https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?q=80&w=2070&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About' }
        ]}
      />

      {/* Main Content Architecture - Unified Y-Spacing (py-12 md:py-20) */}
      <div className="relative z-10">

        {/* SECTION: COMPANY INTRO */}
        <div className="py-12 md:py-20 border-b border-slate-50">
          <CompanyIntro />
        </div>

        {/* SECTION: VISION & MISSION + VALUES */}
        <div className="py-12 md:py-20 bg-slate-50/50 border-b border-slate-100">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
              <VisionMission />
              <Values />
            </div>
          </Container>
        </div>

        {/* SECTION: INFRASTRUCTURE & QUALITY */}
        <div className="py-12 md:py-20 bg-white border-b border-slate-50">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
              <Infrastructure />
              <QualityControl />
            </div>
          </Container>
        </div>

        {/* SECTION: STRATEGIC GLOBAL NETWORK */}
        <div className="py-12 md:py-20 bg-white">
          <Container>
            <GlobalPresence />
          </Container>
        </div>

        {/* SECTION: INSTITUTIONAL METRICS */}
        <div className="py-12 md:py-20 bg-slate-50/30 border-y border-slate-100 overflow-hidden">
          <Container>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
              {[
                { val: 500, label: "Shipments Delivered", color: "text-brand-gold", icon: <FiZap /> },
                { val: 20, label: "Global Trade Hubs", color: "text-brand-navy", icon: <FiGlobe /> },
                { val: 150, label: "Strategic Partners", color: "text-emerald-500", icon: <FiShield /> },
                { val: 4, label: "Years of Excellence", color: "text-brand-navy", icon: <FiActivity /> },
              ].map((stat, idx) => (
                <div key={idx} className="relative group animate-reveal opacity-0" style={{ animationDelay: `${idx * 150}ms` }}>
                  <div className="glass-card p-8 md:p-12 rounded-sm bg-white border-slate-100 text-center hover:bg-brand-navy transition-all duration-700 hover-lift shadow-sm">
                    <div className={`${stat.color} text-2xl md:text-4xl mb-4 flex justify-center group-hover:text-white transition-colors group-hover:rotate-12`}>
                      {stat.icon}
                    </div>
                    <div className={`text-4xl md:text-7xl font-black mb-2 tracking-tighter ${stat.color} group-hover:text-white transition-colors flex items-center justify-center gap-1`}>
                      <Counter end={stat.val} duration={2000} />
                      <span className="text-2xl md:text-4xl">+</span>
                    </div>
                    <p className="text-[9px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest group-hover:text-white/40 transition-colors">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>

        {/* SECTION: FINAL CTA */}
        <div className="py-12 md:py-20 bg-white">
          <Container>
            <div className="relative p-12 md:p-24 rounded-sm text-center shadow-2xl overflow-hidden animate-reveal opacity-0 border border-slate-100 border-t-4 border-t-brand-gold bg-[#F9FAFB]">
              {/* ATMOSPHERIC BACKGROUND */}
              <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/20 blur-[150px] rounded-full animate-subtle-float"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/10 blur-[150px] rounded-full animate-subtle-float delay-1000"></div>
              </div>

              <div className="relative z-10 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-10">
                  <div className="h-px bg-brand-gold/40 animate-line-grow w-0"></div>
                  <span className="text-[10px] font-black text-brand-navy/60 uppercase tracking-[0.5em]">INITIALIZE PARTNERSHIP</span>
                  <div className="h-px bg-brand-gold/40 animate-line-grow w-0"></div>
                </div>

                <h2 className="text-4xl md:text-8xl font-black tracking-tighter leading-none mb-10 uppercase text-brand-navy">
                  READY TO <br />
                  <span className="text-gradient">PARTNER WITH US?</span>
                </h2>

                <p className="text-slate-600 text-sm md:text-2xl font-bold uppercase tracking-tight leading-relaxed mb-16 opacity-80">
                  Connect with MITRAY EXIM today to discuss your agricultural import needs and receive a tailored product and pricing quote.
                </p>

                <a href="/contact">
                  <button
                    className="
      group
      relative
      px-6 py-3
      sm:px-8 sm:py-4
      md:px-10 md:py-5
      lg:px-12 lg:py-6
      bg-brand-navy
      text-white
      rounded-sm
      font-black
      uppercase
      tracking-[0.12em]
      sm:tracking-[0.18em]
      md:tracking-[0.24em]
      lg:tracking-[0.3em]
      text-[11px]
      sm:text-xs
      md:text-sm
      shadow-2xl
      hover:bg-brand-gold
      hover:text-brand-navy
      transition-all
      duration-700
      active:scale-95
      overflow-hidden
    "
                  >
                    <span className="relative z-10 flex items-center gap-2 sm:gap-3 md:gap-4">
                      Get in Touch Today
                      <FiArrowRight className="text-base sm:text-lg md:text-xl group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </Container>
        </div>

      </div>
    </div>
  );
}
