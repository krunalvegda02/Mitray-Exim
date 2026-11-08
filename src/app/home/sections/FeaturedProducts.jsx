"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { FiArrowRight, FiPackage, FiThermometer } from "react-icons/fi";

export function FeaturedProducts() {
  const exportProducts = [
    {
      category: "Fresh Fruits",
      heading: "Fresh Fruits Exporter",
      title: "Bhagwa Pomegranate (Ruby Red)",
      slug: "pomegranate",
      alt: "Fresh Pomegranate Exporter from India",
      image: "https://res.cloudinary.com/dtkdcrra2/image/upload/f_auto,q_auto,w_800,c_fit/v1781534037/WhatsApp_Image_2026-06-15_at_10.54.12_vqww0s.jpg?q=80&w=2070&auto=format&fit=crop",
      variety: "Bhagwa (Ruby Red)",
      packaging: "3.5 kg / 4 kg cartons",
      temp: "5°C – 7°C Reefer",
      desc: "APEDA-certified Bhagwa pomegranates from Maharashtra and Gujarat orchards, distinguished by glossy deep red arils, soft seeds, high brix sweetness, and extended maritime shelf life."
    },
    {
      category: "Fresh Vegetables",
      heading: "Fresh Vegetables Exporter",
      title: "Nashik Red Onion",
      slug: "onion",
      alt: "Fresh Red Onion Exporter from India",
      image: "/products/shallot-background.jpg",
      variety: "Nashik Red & Garwa Pink",
      packaging: "10 kg / 25 kg mesh bags",
      temp: "Ventilated Reefer",
      desc: "Direct farm-sourced Nashik red and pink onions (45mm to 60mm+) sorted for high pungency, thick protective skin, and optimal moisture control for international wholesale distributors."
    },
    {
      category: "Pure Spices",
      heading: "Indian Spices Exporter",
      title: "Pure High-Curcumin Turmeric",
      slug: "turmeric-powder",
      alt: "Pure Turmeric Powder Exporter India",
      image: "/products/close-up-turmeric-powder.jpg",
      variety: "Salem & Nizamabad (High Curcumin)",
      packaging: "25 kg multi-wall bags / PP",
      temp: "Dry Ambient Storage",
      desc: "Export-grade golden turmeric powder ground from sun-cured, polished rhizomes boasting high natural curcumin (3.5%+), rich aroma, and certified zero-adulteration compliance."
    },
    {
      category: "Basmati Rice",
      heading: "Indian Rice Exporter",
      title: "1121 Steam Basmati Rice",
      slug: "basmati-rice-1121",
      alt: "1121 Basmati Rice Exporter India",
      image: "https://res.cloudinary.com/dtkdcrra2/image/upload/f_auto,q_auto,w_800,c_fit/v1781534032/WhatsApp_Image_2026-06-15_at_11.49.34_zs8d6x.jpg",
      variety: "1121 Extra Long Grain (8.35mm+)",
      packaging: "10 kg / 20 kg / 25 kg PP or Jute bags",
      temp: "Dry Ventilated Container",
      desc: "World-renowned aromatic Indian Basmati rice featuring exceptional kernel elongation after cooking, delicate fragrance, and pristine sortex cleaning for global consumption markets."
    },
    {
      category: "Wheat & Flour",
      heading: "Wheat & Flour Exporter",
      title: "Whole Wheat Flour (Chakki Atta)",
      slug: "wheat-flour",
      alt: "Whole Wheat Flour Exporter India",
      image: "https://res.cloudinary.com/dtkdcrra2/image/upload/f_auto,q_auto,w_800,c_fit/v1781534036/flour-wheat-flat-lay-wooden_gxvxmw.jpg",
      variety: "Sharbati & Lokwan Whole Wheat",
      packaging: "25 kg / 50 kg multi-wall bags",
      temp: "Moisture-Proof Dry Container",
      desc: "High-gluten, stone-milled whole wheat flour and milling wheat grains sourced from India's prime wheat belts with superior dough elasticity, natural bran, and export freshness."
    },
    {
      category: "Dehydrated Products",
      heading: "Dehydrated Foods Exporter",
      title: "Dehydrated Onion Flakes & Powder",
      slug: "onion-flakes",
      alt: "Dehydrated Onion Flakes Exporter India",
      image: "https://res.cloudinary.com/dtkdcrra2/image/upload/f_auto,q_auto,w_800,c_fit/v1781534049/Onion-Flakes_qbtql5.jpg",
      variety: "White / Red Flakes & Powder",
      packaging: "20 kg / 25 kg poly-lined paper bags",
      temp: "Dry Ambient Storage",
      desc: "Advanced hot-air dehydrated white and red onion flakes, chopped kibbled pieces, and fine powders manufactured to international microbial and low-moisture specifications."
    }
  ];

  return (
    <section className="relative py-10 sm:py-16 md:py-24 bg-white overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[140px] rounded-full"></div>
        <div className="absolute top-3/4 left-0 w-[500px] h-[500px] bg-brand-navy/5 blur-[140px] rounded-full"></div>
      </div>

      <Container className="relative z-10">
        
        {/* Unified Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
            <span className="w-6 sm:w-8 h-px bg-brand-gold"></span>
            <span className="text-[10px] sm:text-[11px] font-black text-brand-gold uppercase tracking-[0.3em] sm:tracking-[0.4em]">
              Export Commodity Portfolio
            </span>
            <span className="w-6 sm:w-8 h-px bg-brand-gold"></span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-navy tracking-tight leading-[1.15] mb-3 sm:mb-6">
            Agricultural Products <br />
            <span className="text-gradient">Exporter Worldwide</span>
          </h2>

          <p className="text-xs sm:text-base md:text-lg text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
            We export a comprehensive portfolio of APEDA and FSSAI certified agro-commodities directly from India&apos;s fertile harvesting belts — fresh fruits, vegetables, authentic spices, premium Basmati rice, stone-milled wheat flour, and dehydrated products with precision cold-chain and maritime container dispatch.
          </p>
        </div>

        {/* 6 Product Categories Grid with H3 Headings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {exportProducts.map((item, idx) => (
            <div 
              key={idx}
              className="group flex flex-col rounded-xl sm:rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/80 hover:border-brand-gold/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2"
            >
              {/* Image Box */}
              <div className="relative aspect-[16/9] sm:aspect-[16/10] md:aspect-[16/11] w-full overflow-hidden bg-slate-900">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-brand-navy/90 backdrop-blur-md px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md border border-white/20 text-white">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-brand-gold">{item.category}</span>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-1">
                {/* H3 Heading */}
                <h3 className="text-base sm:text-lg lg:text-xl font-black text-brand-navy tracking-tight mb-1 sm:mb-1.5 group-hover:text-brand-gold transition-colors line-clamp-1">
                  {item.heading}
                </h3>

                <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 sm:mb-3">
                  {item.title}
                </p>

                <p className="text-xs sm:text-[13px] lg:text-sm text-slate-600 leading-relaxed font-medium mb-3.5 sm:mb-5 flex-1 line-clamp-2 sm:line-clamp-3">
                  {item.desc}
                </p>

                {/* Specifications */}
                <div className="grid grid-cols-2 gap-2 pt-3 sm:pt-4 border-t border-slate-200/60 mb-3.5 sm:mb-5 text-[10px] sm:text-[11px]">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-slate-500">
                    <FiPackage className="text-brand-gold shrink-0 text-xs sm:text-sm" />
                    <span className="truncate">{item.packaging}</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-slate-500">
                    <FiThermometer className="text-brand-gold shrink-0 text-xs sm:text-sm" />
                    <span className="truncate">{item.temp}</span>
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between gap-2 sm:gap-3">
                  <Link
                    href={`/products/${item.slug}`}
                    className="flex-1 text-center py-2 sm:py-2.5 px-2.5 sm:px-4 rounded-lg sm:rounded-xl bg-white border border-slate-200 text-brand-navy text-[10px] sm:text-xs font-black uppercase tracking-wider hover:bg-slate-100 transition-colors"
                  >
                    Specifications
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 text-center py-2 sm:py-2.5 px-2.5 sm:px-4 rounded-lg sm:rounded-xl bg-brand-navy text-white text-[10px] sm:text-xs font-black uppercase tracking-wider hover:bg-brand-gold hover:text-brand-navy transition-colors shadow-sm"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Catalog Banner */}
        <div className="mt-8 sm:mt-12 md:mt-14 text-center">
          <Link 
            href="/products"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-8 md:px-10 py-3 sm:py-4 bg-brand-navy text-white font-black text-[11px] sm:text-xs md:text-sm uppercase tracking-wider sm:tracking-widest rounded-xl hover:bg-brand-gold hover:text-brand-navy transition-all shadow-xl active:scale-95 w-full sm:w-auto"
          >
            <span>Explore Complete Export Portfolio (Fruits, Vegetables, Spices, Rice, Flour)</span>
            <FiArrowRight className="shrink-0" />
          </Link>
        </div>

      </Container>
    </section>
  );
}
