"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Container } from "@/components/shared/Container";
import { FiArrowRight, FiCheckCircle, FiPackage, FiGlobe, FiThermometer } from "react-icons/fi";

export function FeaturedProducts() {
  const fruitExports = [
    {
      heading: "Pomegranate Exporter",
      title: "Bhagwa Pomegranate",
      slug: "pomegranate",
      alt: "Fresh Pomegranate Exporter from India",
      image: "https://res.cloudinary.com/dtkdcrra2/image/upload/f_auto,q_auto,w_800,c_fit/v1781534037/WhatsApp_Image_2026-06-15_at_10.54.12_vqww0s.jpg?q=80&w=2070&auto=format&fit=crop",
      variety: "Bhagwa (Ruby Red)",
      packaging: "3.5 kg / 4 kg cartons",
      temp: "5°C – 7°C Reefer",
      desc: "Recognized as a leading pomegranate exporter from India, Mitray supplies premium Bhagwa pomegranates renowned for glossy red skin, soft seeds, high brix sweetness, and extended shelf life."
    },
    {
      heading: "Banana Supplier",
      title: "G9 Cavendish Banana",
      slug: "banana",
      alt: "Premium Banana Supplier",
      image: "https://res.cloudinary.com/dtkdcrra2/image/upload/f_auto,q_auto,w_800,c_fit/v1781534039/WhatsApp_Image_2026-06-15_at_10.52.19_si4fif.jpg",
      variety: "Grand Naine (G9)",
      packaging: "13.5 kg / 18 kg boxes",
      temp: "13.5°C Reefer",
      desc: "As a dependable banana supplier and fruits supplier in India, Mitray exports Grade-A Grand Naine bananas, hand-harvested, calibrated, and packed in refrigerated containers for Gulf and European ports."
    },
    {
      heading: "Mango Exporter",
      title: "Gir Kesar & Alphonso Mango",
      slug: "kesar-mango",
      alt: "Indian Mango Export Company",
      image: "https://res.cloudinary.com/dtkdcrra2/image/upload/f_auto,q_auto,w_800,c_fit/v1781534038/WhatsApp_Image_2026-06-15_at_10.57.08_qgldwo.jpg?q=80&w=2070&auto=format&fit=crop",
      variety: "GI Gir Kesar & Alphonso",
      packaging: "3 kg / 4 kg cartons",
      temp: "Air & 11°C Reefer",
      desc: "A premier Indian mango export company based in Gujarat, Mitray supplies authentic GI-tagged Gir Kesar and Alphonso mangoes, hot-water treated and APEDA certified for USA, UK, and Middle East markets."
    }
  ];

  const spiceExports = [
    {
      heading: "Turmeric Powder Exporter",
      title: "Pure High-Curcumin Turmeric",
      slug: "turmeric-powder",
      alt: "Pure Turmeric Powder Exporter India",
      image: "/products/close-up-turmeric-powder.jpg",
      variety: "Salem & Nizamabad (High Curcumin)",
      packaging: "25 kg multi-wall bags / PP",
      temp: "Dry Ambient Storage",
      desc: "As an authentic Indian spices exporter, Mitray supplies export-grade golden turmeric powder ground from sun-cured rhizomes with high natural curcumin, rich aroma, and strict purity standards."
    },
    {
      heading: "Red Chilli Powder Exporter",
      title: "Pure Stemless Red Chilli Powder",
      slug: "red-chilli-powder",
      alt: "Indian Red Chilli Powder Exporter",
      image: "/products/close-up-chilli-powder.jpg",
      variety: "Guntur & Byadgi Stemless",
      packaging: "25 kg / 50 kg laminated bags",
      temp: "Dry Ambient Container",
      desc: "Supplying premium Guntur and Byadgi ground red chilli powder boasting natural bright crimson coloration, controlled heat levels, and certified pesticide residue compliance for global food manufacturers."
    },
    {
      heading: "Black Pepper Exporter",
      title: "Malabar Whole Black Pepper",
      slug: "black-pepper",
      alt: "Malabar Black Pepper Exporter India",
      image: "/products/black-milled-pepper-corns-as-background-high-quality-photo.jpg",
      variety: "Malabar Bold (550G/L+ Density)",
      packaging: "25 kg / 50 kg jute / PP bags",
      temp: "Dry Ventilated Container",
      desc: "Sourced from the southern Malabar coast, our high-density whole black pepper corns deliver robust pungent flavor, high piperine concentration, and aromatic essential oils for international culinary brands."
    }
  ];

  return (
    <section className="relative py-14 md:py-24 bg-white overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[140px] rounded-full"></div>
        <div className="absolute top-3/4 left-0 w-[500px] h-[500px] bg-brand-navy/5 blur-[140px] rounded-full"></div>
      </div>

      <Container className="relative z-10 space-y-20 md:space-y-32">
        
        {/* ========================================================================= */}
        {/* SECTION 1: TRUSTED FRUITS EXPORTER FROM INDIA */}
        {/* ========================================================================= */}
        <div>
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-brand-gold"></span>
              <span className="text-[10px] sm:text-[11px] font-black text-brand-gold uppercase tracking-[0.4em]">
                Fresh Produce Division
              </span>
              <span className="w-8 h-px bg-brand-gold"></span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-navy tracking-tight leading-[1.1] mb-6">
              Trusted Fruits Exporter <br />
              <span className="text-gradient">from India</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
              Mitray is a reliable <strong className="text-brand-navy font-bold">fruits exporter</strong> and global <strong className="text-brand-navy font-bold">fruits supplier</strong> headquartered in Gujarat, India. We source directly from APEDA-certified orchards across India to export top-tier pomegranates, bananas, and mangoes with precision cold-chain management.
            </p>
          </div>

          {/* Fruits Grid with H3 Headings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {fruitExports.map((item, idx) => (
              <div 
                key={idx}
                className="group flex flex-col rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/80 hover:border-brand-gold/40 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image Box */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-brand-navy/90 backdrop-blur-md px-3 py-1 rounded-md border border-white/20 text-white">
                    <span className="text-[10px] font-black uppercase tracking-wider text-brand-gold">{item.variety}</span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  {/* H3 Heading */}
                  <h3 className="text-xl sm:text-2xl font-black text-brand-navy tracking-tight mb-2 group-hover:text-brand-gold transition-colors">
                    {item.heading}
                  </h3>

                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                    {item.title}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-6 flex-1">
                    {item.desc}
                  </p>

                  {/* Specifications */}
                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-200/60 mb-6 text-[11px]">
                    <div className="flex items-center gap-2 text-slate-500">
                      <FiPackage className="text-brand-gold shrink-0" />
                      <span className="truncate">{item.packaging}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                      <FiThermometer className="text-brand-gold shrink-0" />
                      <span className="truncate">{item.temp}</span>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="flex items-center justify-between gap-3">
                    <Link
                      href={`/products/${item.slug}`}
                      className="flex-1 text-center py-2.5 px-4 rounded-xl bg-white border border-slate-200 text-brand-navy text-xs font-black uppercase tracking-wider hover:bg-slate-100 transition-colors"
                    >
                      Specifications
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 text-center py-2.5 px-4 rounded-xl bg-brand-navy text-white text-xs font-black uppercase tracking-wider hover:bg-brand-gold hover:text-brand-navy transition-colors shadow-sm"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 2: PREMIUM INDIAN SPICES EXPORTER */}
        {/* ========================================================================= */}
        <div>
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-brand-gold"></span>
              <span className="text-[10px] sm:text-[11px] font-black text-brand-gold uppercase tracking-[0.4em]">
                Spices Division
              </span>
              <span className="w-8 h-px bg-brand-gold"></span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-navy tracking-tight leading-[1.1] mb-6">
              Premium Indian Spices <br />
              <span className="text-gradient">Exporter</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
              Renowned worldwide as an authentic <strong className="text-brand-navy font-bold">Indian spices exporter</strong>, Mitray exports wholesale pure high-curcumin turmeric powder, vibrant Guntur red chilli powder, Malabar black pepper, and whole aromatic spices directly from India&apos;s richest harvesting clusters.
            </p>
          </div>

          {/* Spices Grid with H3 Headings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {spiceExports.map((item, idx) => (
              <div 
                key={idx}
                className="group flex flex-col rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/80 hover:border-brand-gold/40 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image Box */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-brand-navy/90 backdrop-blur-md px-3 py-1 rounded-md border border-white/20 text-white">
                    <span className="text-[10px] font-black uppercase tracking-wider text-brand-gold">{item.variety}</span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  {/* H3 Heading */}
                  <h3 className="text-xl sm:text-2xl font-black text-brand-navy tracking-tight mb-2 group-hover:text-brand-gold transition-colors">
                    {item.heading}
                  </h3>

                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                    {item.title}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-6 flex-1">
                    {item.desc}
                  </p>

                  {/* Specifications */}
                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-200/60 mb-6 text-[11px]">
                    <div className="flex items-center gap-2 text-slate-500">
                      <FiPackage className="text-brand-gold shrink-0" />
                      <span className="truncate">{item.packaging}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                      <FiThermometer className="text-brand-gold shrink-0" />
                      <span className="truncate">{item.temp}</span>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="flex items-center justify-between gap-3">
                    <Link
                      href={`/products/${item.slug}`}
                      className="flex-1 text-center py-2.5 px-4 rounded-xl bg-white border border-slate-200 text-brand-navy text-xs font-black uppercase tracking-wider hover:bg-slate-100 transition-colors"
                    >
                      Specifications
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 text-center py-2.5 px-4 rounded-xl bg-brand-navy text-white text-xs font-black uppercase tracking-wider hover:bg-brand-gold hover:text-brand-navy transition-colors shadow-sm"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Full Catalog Banner */}
          <div className="mt-14 text-center">
            <Link 
              href="/products"
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 bg-brand-navy text-white font-black text-xs sm:text-sm uppercase tracking-widest rounded-xl hover:bg-brand-gold hover:text-brand-navy transition-all shadow-xl active:scale-95"
            >
              <span>Explore Complete Export Catalog (Vegetables, Spices, Grains)</span>
              <FiArrowRight />
            </Link>
          </div>
        </div>

      </Container>
    </section>
  );
}
