"use client";

import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import { COUNTRIES } from "@/data/countries";
import { FiGlobe, FiTruck, FiCheckCircle, FiActivity, FiZap, FiBox, FiChevronRight, FiShield, FiPackage, FiPlus, FiMinus, FiTarget, FiMove, FiChevronUp } from "react-icons/fi";

const ComposableMap = dynamic(
  () => import("react-simple-maps").then((mod) => mod.ComposableMap),
  { ssr: false, loading: () => <div className="w-full h-96 bg-slate-50 flex items-center justify-center rounded-3xl border border-slate-100"><span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Syncing Grid...</span></div> }
);

const Geographies = dynamic(
  () => import("react-simple-maps").then((mod) => mod.Geographies),
  { ssr: false }
);

const Geography = dynamic(
  () => import("react-simple-maps").then((mod) => mod.Geography),
  { ssr: false }
);

const Marker = dynamic(
  () => import("react-simple-maps").then((mod) => mod.Marker),
  { ssr: false }
);

const Line = dynamic(
  () => import("react-simple-maps").then((mod) => mod.Line),
  { ssr: false }
);

const ZoomableGroup = dynamic(
  () => import("react-simple-maps").then((mod) => mod.ZoomableGroup),
  { ssr: false }
);

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const EXPORT_COUNTRIES = [
  { code: "ae", name: "United Arab Emirates", flag: "🇦🇪", region: "Gulf", coords: [55.2708, 25.2048] },
  { code: "sa", name: "Saudi Arabia", flag: "🇸🇦", region: "Gulf", coords: [45.0792, 23.8859] },
  { code: "qa", name: "Qatar", flag: "🇶🇦", region: "Gulf", coords: [51.1839, 25.3548] },
  { code: "om", name: "Oman", flag: "🇴🇲", region: "Gulf", coords: [58.4059, 23.5859] },
  { code: "kw", name: "Kuwait", flag: "🇰🇼", region: "Gulf", coords: [47.9774, 29.3759] },
  { code: "gb", name: "United Kingdom", flag: "🇬🇧", region: "Europe", coords: [-0.1276, 51.5074] },
  { code: "us", name: "United States", flag: "🇺🇸", region: "Americas", coords: [-95.7129, 37.0902] },
  { code: "ca", name: "Canada", flag: "🇨🇦", region: "Americas", coords: [-106.3468, 56.1304] },
];

const GULF_COUNTRIES = EXPORT_COUNTRIES.filter(c => c.region === "Gulf");

export function ExportCountries() {
  const [hovered, setHovered] = useState(null);
  const [position, setPosition] = useState({ coordinates: [60, 25], zoom: 1 });
  const [isClient, setIsClient] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(true);
  const sectionRef = useRef(null);
  const hasAutoFocused = useRef(false);

  useEffect(() => {
    setIsClient(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAutoFocused.current) {
          const uae = GULF_COUNTRIES.find(c => c.name === "United Arab Emirates");
          if (uae) {
            handleCountryFocus(uae);
            hasAutoFocused.current = true;
          }
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCountryFocus = (country) => {
    setHovered(country.name);
    setIsStatsOpen(true);
    const isMobile = window.innerWidth < 1024;
    const zoomLevel = country.region === "Gulf" ? (isMobile ? 3.5 : 5) : (isMobile ? 2.5 : 3.5);
    setPosition({ coordinates: country.coords, zoom: zoomLevel });
  };

  const handleZoomIn = () => {
    if (position.zoom >= 8) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom * 1.5 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom / 1.5 }));
  };

  const handleResetMap = () => {
    setPosition({ coordinates: [60, 25], zoom: 1 });
    setHovered(null);
  };

  const handleMoveEnd = (position) => {
    setPosition(position);
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

  return (
    <section ref={sectionRef} className="relative py-12 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        
        {/* HEADER - COMPACT FOR MOBILE */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 md:mb-24 gap-4">
          <div className="max-w-4xl animate-reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 rounded-full mb-4 border border-brand-gold/20 backdrop-blur-md">
              <FiGlobe className="text-brand-gold text-sm" />
              <span className="text-[8px] md:text-[10px] font-black text-brand-gold uppercase tracking-[0.4em]">Global Expansion Grid</span>
            </div>
            <h2 className="text-4xl md:text-8xl font-black text-brand-navy mb-4 tracking-tighter leading-none">
              STRATEGIC <span className="text-gradient">NETWORK.</span>
            </h2>
            {/* SUB-CONTENT ADDED PER USER REQUEST */}
            <p className="text-slate-500 text-sm md:text-lg font-medium max-w-2xl leading-relaxed uppercase tracking-tight opacity-70">
              Mitray Exim powers a high-speed logistics network connecting India’s finest produce to elite trade corridors worldwide. Our presence in major hubs ensures 24/7 compliance, rapid transit, and a seamless supply chain.
            </p>
          </div>
          
          {/* COMPACT COUNTRY SELECTOR - NO SCROLLBAR */}
          <div className="flex overflow-x-auto pb-2 -mx-4 px-4 gap-2 no-scrollbar lg:flex-wrap lg:overflow-visible lg:pb-0 lg:mx-0 lg:px-0 mt-4 lg:mt-0">
             {EXPORT_COUNTRIES.map(c => (
                <button 
                  key={c.code}
                  onClick={() => handleCountryFocus(c)}
                  className={`whitespace-nowrap px-4 py-2.5 md:px-6 md:py-4 rounded-xl md:rounded-2xl text-[8px] md:text-[10px] font-black uppercase tracking-widest transition-all duration-500 border shrink-0 ${
                    hovered === c.name ? 'bg-brand-navy text-white border-brand-navy shadow-lg scale-105' : 'bg-white text-slate-400 border-slate-100'
                  }`}
                >
                  {c.flag} {c.name}
                </button>
             ))}
          </div>
        </div>

        {/* MAP DASHBOARD TERMINAL */}
        <div className="relative glass-panel rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border-white shadow-2xl bg-slate-50/50 min-h-[550px] md:min-h-[750px]">
          
          {/* MAP HUD */}
          <div className="absolute top-4 md:top-8 left-4 md:left-8 right-4 md:right-8 z-20 flex justify-between items-start pointer-events-none">
             <div className="glass-panel px-4 py-3 rounded-2xl border-white shadow-xl pointer-events-auto backdrop-blur-xl bg-white/60">
                <div className="flex items-center gap-2 mb-1">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                   <span className="text-[8px] md:text-[10px] font-black text-brand-navy uppercase tracking-widest leading-none">Terminal v2.4 Active</span>
                </div>
             </div>
             
             <div className="flex flex-col gap-2 pointer-events-auto">
                <button onClick={handleZoomIn} className="w-10 h-10 glass-panel rounded-xl flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all shadow-lg active:scale-90 bg-white/80"><FiPlus /></button>
                <button onClick={handleZoomOut} className="w-10 h-10 glass-panel rounded-xl flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all shadow-lg active:scale-90 bg-white/80"><FiMinus /></button>
                <button onClick={handleResetMap} className="w-10 h-10 glass-panel rounded-xl flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all shadow-lg active:scale-90 bg-white/80"><FiTarget /></button>
             </div>
          </div>

          {isClient && (
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 220 }}
              width={1000}
              height={isMobile ? 1200 : 750}
              className="w-full h-auto"
            >
              <ZoomableGroup
                zoom={position.zoom}
                center={position.coordinates}
                onMoveEnd={handleMoveEnd}
                maxZoom={8}
                minZoom={1}
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const geoName = geo.properties.name;
                      const isIndia = geoName === "India";
                      const isExport = EXPORT_COUNTRIES.some(c => {
                        const names = { "United Arab Emirates": "UAE", "United Kingdom": "UK", "United States of America": "USA", "United States": "USA" };
                        return (names[c.name] || c.name) === (names[geoName] || geoName) || c.name === geoName;
                      });
                      
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          onMouseEnter={() => isExport && setHovered(geoName)}
                          style={{
                            default: { fill: isIndia ? "#D4A574" : isExport ? "#FEF3C7" : "#FFFFFF", stroke: isExport ? "#D4A574" : "#E2E8F0", strokeWidth: 0.5, outline: "none" },
                            hover: { fill: isIndia ? "#C69560" : isExport ? "#2C4A5E" : "#FFFFFF", stroke: isExport ? "#D4A574" : "#E2E8F0", strokeWidth: 1, outline: "none", cursor: isExport ? "pointer" : "default" },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>

                {EXPORT_COUNTRIES.map((country) => {
                  if (hovered !== country.name) return null;
                  return (
                    <Line
                      key={`path-${country.code}`}
                      from={[78.9629, 20.5937]}
                      to={country.coords}
                      stroke="#D4A574"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeDasharray="4 4"
                      className="animate-pulse"
                    />
                  );
                })}

                <Marker coordinates={[78.9629, 20.5937]}>
                  <g>
                    <circle r={12} fill="#D4A574" opacity="0.1" className="animate-ping" />
                    <rect x="-7" y="-7" width="14" height="14" rx="3" fill="#2C4A5E" className="rotate-45" />
                    <text textAnchor="middle" y="3.5" className="text-[7px] font-black fill-white">IN</text>
                  </g>
                </Marker>

                {EXPORT_COUNTRIES.map((country) => (
                  <Marker key={country.code} coordinates={country.coords}>
                    <g 
                      className="cursor-pointer"
                      onMouseEnter={() => setHovered(country.name)}
                      onClick={() => handleCountryFocus(country)}
                    >
                      <circle r={hovered === country.name ? 12 : 7} fill={hovered === country.name ? "#D4A574" : "#CBD5E1"} opacity={hovered === country.name ? 0.3 : 0.1} className="transition-all duration-700" />
                      <circle r={hovered === country.name ? 9 : 6} fill="white" stroke={hovered === country.name ? "#D4A574" : "#E2E8F0"} strokeWidth="1" className="transition-all duration-300" />
                      <text textAnchor="middle" y={hovered === country.name ? 3 : 2} className={`transition-all duration-300 ${hovered === country.name ? 'text-[16px]' : 'text-[10px]'}`}>{country.flag}</text>
                    </g>
                  </Marker>
                ))}
              </ZoomableGroup>
            </ComposableMap>
          )}

          {/* HINT OVERLAY */}
          <div className="absolute bottom-28 md:bottom-32 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-40">
             <span className="px-4 py-2 bg-brand-navy/60 backdrop-blur-md rounded-full text-[7px] font-black text-white uppercase tracking-[0.2em] shadow-xl border border-white/10">
               Gesture Control Active
             </span>
          </div>

          {/* FLOATING DATA DRAWER */}
          {hovered && (
            <div className={`absolute bottom-0 left-0 right-0 z-30 transition-transform duration-700 ${isStatsOpen ? 'translate-y-0' : 'translate-y-[calc(100%-60px)]'}`}>
               <div className="glass-panel p-6 md:p-12 rounded-t-[2.5rem] md:rounded-[3.5rem] border-t-white shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.15)] bg-white/95 backdrop-blur-2xl">
                  
                  <button 
                    onClick={() => setIsStatsOpen(!isStatsOpen)}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-100 md:hidden"
                  >
                    <FiChevronUp className={`transition-transform duration-500 ${isStatsOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
                    <div className="flex items-center gap-6 w-full">
                       <div className="text-5xl md:text-8xl">{EXPORT_COUNTRIES.find(c => c.name === hovered)?.flag}</div>
                       <div className="flex-1">
                          <p className="text-[8px] md:text-[12px] font-black text-brand-gold uppercase tracking-[0.3em] mb-1">Trade Hub Active</p>
                          <h3 className="text-xl md:text-5xl font-black text-brand-navy tracking-tighter uppercase leading-none">{hovered}</h3>
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-12 w-full lg:w-auto border-t md:border-none border-slate-100 pt-6 md:pt-0">
                       {[
                         { icon: <FiPackage />, label: "Volume", val: "High" },
                         { icon: <FiZap />, label: "Transit", val: "98%" },
                         { icon: <FiShield />, label: "Compliance", val: "A-Grade" },
                         { icon: <FiActivity />, label: "Nodes", val: "4 Hubs" }
                       ].map((stat, i) => (
                         <div key={i} className="text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-1.5 md:gap-2 text-brand-gold mb-1">
                               <span className="text-sm">{stat.icon}</span>
                               <span className="text-[7px] md:text-[9px] font-black uppercase tracking-widest">{stat.label}</span>
                            </div>
                            <p className="text-[11px] md:text-[16px] font-black text-brand-navy uppercase tracking-widest">{stat.val}</p>
                         </div>
                       ))}
                    </div>

                    <button className="w-full lg:w-auto px-10 py-5 bg-brand-navy text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-gold hover:text-brand-navy transition-all duration-500 shadow-xl">
                       Initialize Portfolio
                    </button>
                  </div>
               </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
