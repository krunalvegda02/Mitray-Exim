"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { COUNTRIES } from "@/data/countries";
import { FiGlobe, FiTruck, FiCheckCircle, FiActivity, FiZap, FiBox, FiChevronRight, FiShield, FiPackage } from "react-icons/fi";

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

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const COUNTRY_DATA = {
  ae: { coords: [53.8478, 23.4241], label: "Dubai Hub", capacity: "High", speed: "98%" },
  sa: { coords: [45.0792, 23.8859], label: "Riyadh Hub", capacity: "Mid", speed: "99%" },
  qa: { coords: [51.1694, 25.3548], label: "Doha Port", capacity: "High", speed: "97%" },
  om: { coords: [58.4059, 23.5859], label: "Muscat Port", capacity: "Mid", speed: "98%" },
  kw: { coords: [47.4818, 29.3117], label: "Kuwait Terminal", capacity: "Mid", speed: "96%" },
  bh: { coords: [50.5577, 26.0667], label: "Manama Hub", capacity: "Mid", speed: "99%" },
  gb: { coords: [-0.1276, 51.5074], label: "London Gateway", capacity: "High", speed: "95%" },
  us: { coords: [-74.006, 40.7128], label: "New York Port", capacity: "High", speed: "94%" },
  mv: { coords: [73.5093, 4.1755], label: "Malé Terminal", capacity: "Low", speed: "99%" },
  so: { coords: [45.3182, 2.0469], label: "Berbera Port", capacity: "Mid", speed: "92%" },
};

const EXPORT_COUNTRIES = COUNTRIES.map((country) => ({
  ...country,
  coords: COUNTRY_DATA[country.code]?.coords || [0, 0],
  hub: COUNTRY_DATA[country.code]?.label || country.name,
  capacity: COUNTRY_DATA[country.code]?.capacity || "Standard",
  speed: COUNTRY_DATA[country.code]?.speed || "95%"
}));

const GULF_COUNTRIES = EXPORT_COUNTRIES.filter(c => c.region === "Gulf");
const OTHER_COUNTRIES = EXPORT_COUNTRIES.filter(c => c.region !== "Gulf");

function MapView({ hovered, setHovered, mapConfig }) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => { 
    setIsMobile(window.innerWidth < 1024);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentCountry = EXPORT_COUNTRIES.find(c => c.name === hovered);

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* GLOBAL COMMAND INTERFACE - INCREASED HEIGHT FOR DESKTOP BALANCE */}
      <div className="relative bg-[#F8FAFC] rounded-[2rem] md:rounded-[3rem] shadow-xl border border-white overflow-hidden min-h-[400px] md:min-h-[650px] lg:min-h-[750px] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>
        
        {/* STATUS BAR */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
           <div className="flex items-center gap-3 bg-white/90 backdrop-blur-xl px-4 py-2 rounded-full border border-slate-100 shadow-sm">
              <div className="relative flex h-1.5 w-1.5">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </div>
              <span className="text-[8px] md:text-[9px] font-black text-brand-navy uppercase tracking-widest">Network Active</span>
           </div>
           {!isMobile && (
             <div className="flex items-center gap-4 text-[8px] font-black text-slate-400 uppercase tracking-widest bg-white/40 backdrop-blur-md px-5 py-2 rounded-full border border-white/40">
                <span className="flex items-center gap-2"><FiActivity className="text-brand-gold" /> System Stable</span>
                <span className="w-px h-3 bg-slate-200"></span>
                <span className="flex items-center gap-2"><FiZap className="text-brand-gold" /> 14 Nodes</span>
             </div>
           )}
        </div>

        <div className="w-full relative z-10 pt-8 md:pt-0">
          <ComposableMap 
            projection="geoMercator" 
            projectionConfig={{ 
              scale: isMobile ? mapConfig.scale * 0.8 : mapConfig.scale,
              center: isMobile ? [mapConfig.center[0], mapConfig.center[1] + 10] : mapConfig.center 
            }}
            width={1000}
            height={isMobile ? 550 : 750}
            className="w-full h-auto transition-all duration-1000 ease-in-out"
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
                      onMouseLeave={() => setHovered(null)}
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
              const [x1, y1] = [78.9629, 20.5937];
              const [x2, y2] = country.coords;
              const cx = (x1 + x2) / 2;
              const cy = (y1 + y2) / 2 - 40;
              return (
                <Marker key={`path-${country.code}`} coordinates={[cx, cy]}>
                   <path d={`M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`} fill="none" stroke="#D4A574" strokeWidth="3" strokeDasharray="8 6" className="animate-pulse" />
                </Marker>
              );
            })}

            <Marker coordinates={[78.9629, 20.5937]}>
              <g>
                <circle r={isMobile ? 30 : 45} fill="#D4A574" opacity="0.1" className="animate-ping" />
                <rect x={isMobile ? "-8" : "-12"} y={isMobile ? "-8" : "-12"} width={isMobile ? "16" : "24"} height={isMobile ? "16" : "24"} rx={isMobile ? "4" : "8"} fill="#2C4A5E" className="rotate-45" />
                <text textAnchor="middle" y={isMobile ? "4" : "7"} className={`${isMobile ? 'text-[10px]' : 'text-[14px]'}`}>🇮🇳</text>
              </g>
            </Marker>

            {EXPORT_COUNTRIES.map((country) => (
              <Marker key={country.code} coordinates={country.coords}>
                <g 
                  className="cursor-pointer"
                  onMouseEnter={() => setHovered(country.name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <circle r={hovered === country.name ? (isMobile ? 25 : 35) : (isMobile ? 18 : 22)} fill={hovered === country.name ? "#D4A574" : "#CBD5E1"} opacity={hovered === country.name ? 0.3 : 0.1} className="transition-all duration-700" />
                  <circle r={hovered === country.name ? (isMobile ? 14 : 20) : (isMobile ? 10 : 14)} fill="white" stroke={hovered === country.name ? "#D4A574" : "#E2E8F0"} strokeWidth="2" className="transition-all duration-300" />
                  <text textAnchor="middle" y={hovered === country.name ? (isMobile ? 5 : 8) : (isMobile ? 4 : 6)} className={`transition-all duration-300 ${hovered === country.name ? (isMobile ? 'text-[16px]' : 'text-[24px]') : (isMobile ? 'text-[12px]' : 'text-[18px]')}`}>{country.flag}</text>
                </g>
              </Marker>
            ))}
          </ComposableMap>
        </div>

        {/* MANIFEST OVERLAY */}
        <div className={`absolute bottom-6 left-6 right-6 transition-all duration-1000 cubic-bezier(0.2, 0.8, 0.2, 1) ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
           <div className="bg-white/95 backdrop-blur-2xl p-4 md:p-6 rounded-[1.5rem] md:rounded-[2.5rem] border border-white shadow-2xl flex items-center justify-between">
              <div className="flex items-center gap-4 md:gap-6">
                 <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-navy flex items-center justify-center text-2xl md:text-3xl shadow-xl">{currentCountry?.flag}</div>
                 <div>
                    <h4 className="text-brand-navy font-black text-xl md:text-2xl tracking-tighter leading-none mb-1">{hovered}</h4>
                    <p className="text-slate-400 font-bold text-[7px] md:text-[9px] uppercase tracking-[0.3em]">{currentCountry?.hub}</p>
                 </div>
              </div>
              <div className="flex items-center gap-8 md:gap-12 mr-4 md:mr-8">
                 <div className="text-right">
                    <p className="text-slate-300 text-[8px] font-black uppercase tracking-widest mb-0.5">Speed</p>
                    <p className="text-xl md:text-3xl font-black text-brand-navy tracking-tight">{currentCountry?.speed}</p>
                 </div>
                 <div className="text-right">
                    <p className="text-slate-300 text-[8px] font-black uppercase tracking-widest mb-0.5">Capacity</p>
                    <p className="text-xl md:text-3xl font-black text-brand-gold tracking-tight">{currentCountry?.capacity}</p>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* ADDITIONAL CONTENT TO FILL HEIGHT & REMOVE NULL SPACE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-4 group hover:border-brand-gold/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-brand-gold"><FiShield /></div>
            <div>
               <p className="text-[10px] font-black text-brand-navy uppercase tracking-widest mb-0.5">SGS Quality Inspected</p>
               <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">Every shipment verified at source</p>
            </div>
         </div>
         <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-4 group hover:border-brand-navy transition-all">
            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-brand-navy"><FiPackage /></div>
            <div>
               <p className="text-[10px] font-black text-brand-navy uppercase tracking-widest mb-0.5">Custom Cold-Chain</p>
               <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">Precision temperature maintenance</p>
            </div>
         </div>
      </div>

      <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center justify-between gap-4">
         {[
           { icon: <FiActivity />, label: "Load", val: "Optimized" },
           { icon: <FiZap />, label: "Uptime", val: "99.9%" },
           { icon: <FiBox />, label: "Safety", val: "Grade AAA" }
         ].map((m, i) => (
           <div key={i} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-brand-navy text-xs">{m.icon}</div>
              <div>
                 <p className="text-[7px] font-black text-slate-300 uppercase tracking-widest">{m.label}</p>
                 <p className="text-[10px] font-black text-brand-navy uppercase tracking-widest">{m.val}</p>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
}

export function ExportCountries() {
  const [isClient, setIsClient] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [mapConfig, setMapConfig] = useState({ scale: 380, center: [48, 22] });

  useEffect(() => setIsClient(true), []);

  const handleCountryFocus = (country) => {
    setHovered(country.name);
    const isMobile = window.innerWidth < 1024;
    const zoomLevel = country.region === "Gulf" ? (isMobile ? 550 : 700) : (isMobile ? 250 : 350);
    setMapConfig({ scale: zoomLevel, center: country.coords });
    if (window.innerWidth < 1024) document.getElementById('discovery-dashboard')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section className="relative py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* COMPACT HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-slate-50 rounded-full border border-slate-100 mb-6">
            <FiGlobe className="text-brand-gold" />
            <span className="text-[9px] font-black text-brand-navy uppercase tracking-[0.4em]">Global Operations Network</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-navy mb-4 tracking-tighter leading-tight">
            Strategic <span className="text-gradient">Expansion</span>
          </h2>
          <p className="text-slate-400 text-xs md:text-sm font-bold uppercase tracking-widest opacity-80 max-w-xl mx-auto">
            Institutional Infrastructure Connecting India to 14+ Strategic Markets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* NAVIGATION - COMPACT CARDS */}
          <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
            <div className="space-y-3">
               <div className="flex items-center justify-between px-4 mb-4">
                  <h3 className="text-[9px] font-black text-brand-navy uppercase tracking-[0.4em]">Gulf Hubs</h3>
                  <div className="h-px flex-1 bg-slate-100 mx-6"></div>
               </div>
               {GULF_COUNTRIES.map((c) => (
                 <button 
                  key={c.code} 
                  onClick={() => handleCountryFocus(c)}
                  onMouseEnter={() => setHovered(c.name)}
                  onMouseLeave={() => { setHovered(null); setMapConfig({ scale: 380, center: [48, 22] }); }}
                  className={`group w-full flex items-center justify-between p-4 lg:p-5 rounded-2xl md:rounded-3xl border transition-all duration-500 text-left ${
                    hovered === c.name 
                    ? "bg-brand-navy border-brand-navy shadow-xl scale-[1.02] lg:translate-x-4 z-20" 
                    : "bg-white border-slate-100 hover:border-brand-gold/30 hover:shadow-md"
                  }`}
                 >
                    <div className="flex items-center gap-4 lg:gap-6">
                       <span className={`text-2xl lg:text-3xl transition-all duration-500 ${hovered === c.name ? "scale-110" : "grayscale opacity-20"}`}>{c.flag}</span>
                       <div>
                          <p className={`font-black text-sm lg:text-lg uppercase tracking-tight ${hovered === c.name ? "text-brand-gold" : "text-brand-navy"}`}>{c.name}</p>
                          <p className={`text-[8px] lg:text-[10px] font-black uppercase tracking-widest mt-0.5 ${hovered === c.name ? "text-white/30" : "text-slate-400"}`}>{c.city}</p>
                       </div>
                    </div>
                    <FiChevronRight className={`text-sm lg:text-xl transition-all ${hovered === c.name ? "text-brand-gold translate-x-1" : "text-slate-100"}`} />
                 </button>
               ))}
            </div>

            <div className="space-y-3">
               <div className="flex items-center justify-between px-4 mb-4">
                  <h3 className="text-[9px] font-black text-brand-navy uppercase tracking-[0.4em]">International</h3>
                  <div className="h-px flex-1 bg-slate-100 mx-6"></div>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {OTHER_COUNTRIES.map((c) => (
                    <button 
                      key={c.code} 
                      onClick={() => handleCountryFocus(c)}
                      onMouseEnter={() => setHovered(c.name)}
                      onMouseLeave={() => { setHovered(null); setMapConfig({ scale: 380, center: [48, 22] }); }}
                      className={`group flex items-center justify-between p-4 rounded-2xl border transition-all duration-500 text-left ${
                        hovered === c.name ? "bg-brand-gold border-brand-gold shadow-md scale-[1.02] lg:translate-x-2" : "bg-slate-50/50 border-slate-50 hover:bg-white hover:border-slate-100 hover:shadow-sm"
                      }`}
                    >
                       <div className="flex items-center gap-3">
                          <span className="text-xl lg:text-2xl">{c.flag}</span>
                          <p className={`font-black uppercase tracking-widest text-[8px] lg:text-[9px] ${hovered === c.name ? "text-brand-navy" : "text-slate-500"}`}>{c.name}</p>
                       </div>
                       <FiChevronRight className={`text-[10px] transition-all ${hovered === c.name ? "translate-x-1 text-brand-navy" : "opacity-0"}`} />
                    </button>
                  ))}
               </div>
            </div>
          </div>

          {/* DASHBOARD - MAXIMIZED TO MATCH SIDEBAR HEIGHT */}
          <div id="discovery-dashboard" className="lg:col-span-7 lg:sticky lg:top-8 h-fit space-y-4 order-1 lg:order-2">
            {isClient && <MapView hovered={hovered} setHovered={setHovered} mapConfig={mapConfig} />}
          </div>

        </div>

      </div>
    </section>
  );
}
