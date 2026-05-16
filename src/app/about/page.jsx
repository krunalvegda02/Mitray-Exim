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
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
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
                { val: 14, label: "Global Trade Hubs", color: "text-brand-navy", icon: <FiGlobe /> },
                { val: 150, label: "Strategic Partners", color: "text-emerald-500", icon: <FiShield /> },
                { val: 4, label: "Years of Excellence", color: "text-brand-navy", icon: <FiActivity /> },
              ].map((stat, idx) => (
                <div key={idx} className="relative group animate-reveal opacity-0" style={{ animationDelay: `${idx * 150}ms` }}>
                  <div className="glass-card p-8 md:p-12 rounded-[2rem] bg-white border-slate-100 text-center hover:bg-brand-navy transition-all duration-700 hover-lift shadow-sm">
                    <div className={`${stat.color} text-2xl md:text-3xl mb-4 flex justify-center group-hover:text-white transition-colors group-hover:rotate-12`}>
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

        {/* SECTION: FINAL CTA TERMINAL */}
        <div className="py-12 md:py-20 bg-white">
          <Container>
             <div className="relative glass-card p-12 md:p-24 rounded-[3rem] bg-brand-navy text-center text-white shadow-2xl overflow-hidden animate-reveal opacity-0">
                {/* ATMOSPHERIC BACKGROUND */}
                <div className="absolute inset-0 z-0 opacity-20">
                   <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/20 blur-[150px] rounded-full animate-subtle-float"></div>
                   <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/10 blur-[150px] rounded-full animate-subtle-float delay-1000"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                   <div className="flex items-center justify-center gap-4 mb-10">
                      <div className="h-px bg-brand-gold/40 animate-line-grow w-0"></div>
                      <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.5em]">INITIALIZE PARTNERSHIP</span>
                      <div className="h-px bg-brand-gold/40 animate-line-grow w-0"></div>
                   </div>
                   
                   <h2 className="text-4xl md:text-8xl font-black tracking-tighter leading-none mb-10 uppercase">
                      READY TO <br />
                      <span className="text-gradient">PARTNER WITH US?</span>
                   </h2>
                   
                   <p className="text-slate-400 text-sm md:text-2xl font-bold uppercase tracking-tight leading-relaxed mb-16 opacity-80">
                      Connect with MITRAY EXIM today to discuss your global procurement requirements and receive a tailored institutional manifest.
                   </p>
                   
                   <a href="/contact">
                      <button className="group relative px-12 py-6 bg-brand-gold text-brand-navy rounded-2xl font-black uppercase tracking-[0.3em] text-[11px] shadow-2xl hover:bg-white transition-all duration-700 active:scale-95 overflow-hidden">
                        <span className="relative z-10 flex items-center gap-4">
                          Request Institutional Manifest <FiArrowRight className="text-xl group-hover:translate-x-2 transition-transform" />
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
