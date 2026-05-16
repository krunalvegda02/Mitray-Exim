"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { COUNTRIES } from "@/data/countries";
import { FiGlobe, FiMapPin, FiTruck, FiCheckCircle } from "react-icons/fi";

const ComposableMap = dynamic(
  () => import("react-simple-maps").then((mod) => mod.ComposableMap),
  { ssr: false, loading: () => <div className="w-full h-96 bg-slate-50 flex items-center justify-center rounded-3xl border border-slate-100"><span className="text-slate-400 font-medium">Initializing Global Network...</span></div> }
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

// Coordinates mapping for countries
const COUNTRY_DATA = {
  ae: { coords: [53.8478, 23.4241], label: "Dubai, UAE" },
  sa: { coords: [45.0792, 23.8859], label: "Riyadh, Saudi Arabia" },
  qa: { coords: [51.1694, 25.3548], label: "Doha, Qatar" },
  om: { coords: [58.4059, 23.5859], label: "Muscat, Oman" },
  kw: { coords: [47.4818, 29.3117], label: "Kuwait City" },
  bh: { coords: [50.5577, 26.0667], label: "Manama, Bahrain" },
  gb: { coords: [-0.1276, 51.5074], label: "London, UK" },
  us: { coords: [-74.006, 40.7128], label: "New York, USA" },
  mv: { coords: [73.5093, 4.1755], label: "Malé, Maldives" },
  so: { coords: [45.3182, 2.0469], label: "Mogadishu, Somalia" },
};

const EXPORT_COUNTRIES = COUNTRIES.map((country) => ({
  ...country,
  coords: COUNTRY_DATA[country.code]?.coords || [0, 0],
  city: COUNTRY_DATA[country.code]?.label || country.name,
}));

const GULF_COUNTRIES = EXPORT_COUNTRIES.filter(c => c.region === "Gulf");
const OTHER_COUNTRIES = EXPORT_COUNTRIES.filter(c => c.region !== "Gulf");

function MapView({ hovered, setHovered }) {
  // Mock timezones for regions
  const getRegionTime = (name) => {
    const hours = { 'UAE': 4, 'Qatar': 3, 'Oman': 4, 'Kuwait': 3, 'Saudi Arabia': 3, 'Bahrain': 3, 'Canada': -5, 'Vietnam': 7, 'UK': 0, 'Netherlands': 1, 'Singapore': 8 };
    const offset = hours[name] || 0;
    const now = new Date();
    now.setHours(now.getUTCHours() + offset);
    return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  return (
    <div className="flex flex-col gap-8">
      {/* MAP DASHBOARD CONTAINER */}
      <div className="relative bg-white rounded-[3rem] p-6 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden group min-h-[550px] flex items-center perspective-1000">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
        
        {/* LIVE NETWORK STATUS */}
        <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-100 shadow-sm z-20">
           <div className="relative flex h-2 w-2">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
           </div>
           <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Network Live: 14 Nodes Active</span>
        </div>

        <div className="w-full relative z-10 transition-transform duration-1000 ease-in-out">
          <ComposableMap 
            projection="geoMercator" 
            projectionConfig={{ scale: 280, center: [35, 22] }}
            width={1000}
            height={500}
            className="w-full h-auto drop-shadow-2xl"
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isIndia = geo.properties.name === "India";
                  const isExport = EXPORT_COUNTRIES.some(c => c.name === geo.properties.name);
                  const isActive = hovered === geo.properties.name;
                  
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => isExport && setHovered(geo.properties.name)}
                      onMouseLeave={() => setHovered(null)}
                      style={{
                        default: {
                          fill: isIndia ? "#D4A574" : isExport ? "#f8fafc" : "#ffffff",
                          stroke: isExport ? "#e2e8f0" : "#f1f5f9",
                          strokeWidth: 0.5,
                          outline: "none",
                        },
                        hover: {
                          fill: isIndia ? "#C69560" : isExport ? "#2C4A5E" : "#ffffff",
                          stroke: isExport ? "#D4A574" : "#f1f5f9",
                          strokeWidth: 1,
                          outline: "none",
                          cursor: isExport ? "pointer" : "default",
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>

            {/* Glowing Connection Lines */}
            {EXPORT_COUNTRIES.map((country) => {
              if (hovered !== country.name) return null;
              const [x1, y1] = [78.9629, 20.5937];
              const [x2, y2] = country.coords;
              const cx = (x1 + x2) / 2;
              const cy = (y1 + y2) / 2 + 15;
              return (
                <Marker key={`line-${country.code}`} coordinates={[cx, cy]}>
                   <path
                    d={`M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`}
                    fill="none"
                    stroke="#D4A574"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                    className="animate-pulse"
                  />
                </Marker>
              );
            })}

            {/* India Central Hub */}
            <Marker coordinates={[78.9629, 20.5937]}>
              <g>
                <circle r="25" fill="#D4A574" opacity="0.05" className="animate-ping" />
                <rect x="-8" y="-8" width="16" height="16" rx="4" fill="#2C4A5E" className="rotate-45" />
                <circle r="3" fill="#fff" />
              </g>
            </Marker>

            {/* Market Nodes */}
            {EXPORT_COUNTRIES.map((country) => (
              <Marker key={country.code} coordinates={country.coords}>
                <g 
                  className="cursor-pointer"
                  onMouseEnter={() => setHovered(country.name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <circle
                    r={hovered === country.name ? 12 : 5}
                    fill={hovered === country.name ? "#D4A574" : "#e2e8f0"}
                    opacity={hovered === country.name ? 0.3 : 0.8}
                    className="transition-all duration-300"
                  />
                  <circle
                    r={hovered === country.name ? 4 : 2}
                    fill={hovered === country.name ? "#D4A574" : "#94a3b8"}
                  />
                </g>
              </Marker>
            ))}
          </ComposableMap>
        </div>

        {/* FLOATING DATA CARD */}
        <div className={`absolute bottom-8 left-8 right-8 transition-all duration-500 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
           <div className="bg-brand-navy p-6 rounded-[2rem] border border-white/10 shadow-2xl flex items-center justify-between">
              <div className="flex items-center gap-6">
                 <span className="text-4xl">{EXPORT_COUNTRIES.find(c => c.name === hovered)?.flag}</span>
                 <div>
                    <h4 className="text-brand-gold font-black uppercase tracking-widest text-base">{hovered}</h4>
                    <div className="flex items-center gap-3 mt-1">
                       <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest">Local Time:</span>
                       <span className="text-white font-black text-[10px] tracking-widest">{hovered && getRegionTime(hovered)}</span>
                    </div>
                 </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-2xl border border-white/10">
                 <FiCheckCircle className="text-brand-gold" />
                 <span className="text-white font-black text-[9px] uppercase tracking-[0.2em]">Quality Verified</span>
              </div>
           </div>
        </div>
      </div>

      {/* FILLING THE NULL AREA - LIVE SHIPMENT & CERTIFICATIONS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {/* Live shipments block */}
         <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between group hover:border-brand-gold/30 transition-all">
            <div className="flex items-center justify-between mb-6">
               <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
                  <FiTruck className="text-emerald-500 text-xl group-hover:scale-110 transition-transform" />
               </div>
               <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Global Logistics</span>
            </div>
            <div>
               <p className="text-3xl font-black text-brand-navy mb-1 tracking-tighter">1,240+</p>
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Annual Shipments</p>
            </div>
         </div>

         {/* Certifications wall */}
         <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between group hover:border-brand-navy transition-all">
            <div className="flex items-center justify-between mb-6">
               <div className="flex -space-x-2">
                  {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[8px] font-black text-slate-400">🛡️</div>)}
               </div>
               <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Compliance</span>
            </div>
            <div className="flex flex-wrap gap-2">
               {["APEDA", "FSSAI", "IEC"].map(tag => (
                 <span key={tag} className="text-[8px] font-black px-3 py-1 bg-slate-50 text-slate-400 rounded-full border border-slate-100 uppercase tracking-widest">{tag}</span>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}

export function ExportCountries() {
  const [isClient, setIsClient] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-slate-50/20">
      <div className="container mx-auto px-4">
        
        {/* HEADER - PIXEL PERFECT */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <div className="inline-flex items-center space-x-2 px-5 py-2 bg-white rounded-full border border-slate-100 shadow-sm mb-8">
            <FiGlobe className="text-brand-gold animate-spin-slow" />
            <span className="text-[10px] font-black text-brand-navy uppercase tracking-[0.4em]">Global Connectivity</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-brand-navy mb-8 tracking-tighter leading-none">
            Strategic <br />
            <span className="text-gradient">Market Access</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto opacity-80">
            Exporting excellence from the heart of India to the global stage with uncompromising quality.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">
          
          {/* NAVIGATION */}
          <div className="lg:col-span-5 space-y-8 md:space-y-12">
            
            {/* GULF CORRIDOR */}
            <div>
               <div className="flex items-center justify-between mb-8 px-4">
                  <h3 className="text-[10px] font-black text-brand-navy uppercase tracking-[0.4em]">Gulf Corridor</h3>
                  <div className="h-px flex-1 bg-slate-200 mx-6"></div>
               </div>
               
               <div className="grid grid-cols-1 gap-4">
                  {GULF_COUNTRIES.map(c => (
                    <div 
                      key={c.code} 
                      onMouseEnter={() => setHovered(c.name)}
                      onMouseLeave={() => setHovered(null)}
                      className={`group relative flex items-center justify-between p-6 md:p-8 rounded-[2.5rem] border transition-all duration-500 ${
                        hovered === c.name 
                        ? "bg-brand-navy border-brand-navy shadow-2xl translate-x-4" 
                        : "bg-white border-slate-100 hover:border-brand-gold/20"
                      }`}
                    >
                       <div className="flex items-center gap-6">
                          <span className={`text-4xl transition-all duration-500 ${hovered === c.name ? "scale-110" : "grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100"}`}>{c.flag}</span>
                          <div>
                             <p className={`font-black text-base md:text-lg uppercase tracking-wider ${hovered === c.name ? "text-brand-gold" : "text-brand-navy"}`}>{c.name}</p>
                             <p className={`text-[9px] font-bold uppercase tracking-widest mt-1 ${hovered === c.name ? "text-white/40" : "text-slate-400"}`}>{c.city}</p>
                          </div>
                       </div>
                       <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center transition-all ${hovered === c.name ? "bg-brand-gold text-brand-navy" : "bg-slate-50 text-slate-200"}`}>
                          <FiTruck className="text-xl" />
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* OTHER MARKETS */}
            <div>
               <div className="flex items-center justify-between mb-8 px-4">
                  <h3 className="text-[10px] font-black text-brand-navy uppercase tracking-[0.4em]">International Reach</h3>
                  <div className="h-px flex-1 bg-slate-200 mx-6"></div>
               </div>
               <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                  {OTHER_COUNTRIES.map(c => (
                    <div 
                      key={c.code}
                      onMouseEnter={() => setHovered(c.name)}
                      onMouseLeave={() => setHovered(null)}
                      className={`flex items-center gap-4 p-5 rounded-[1.5rem] border transition-all duration-500 ${
                        hovered === c.name 
                        ? "bg-brand-gold border-brand-gold shadow-xl scale-[1.05]" 
                        : "bg-white border-slate-100 hover:bg-slate-50"
                      }`}
                    >
                       <span className="text-2xl">{c.flag}</span>
                       <p className={`font-black uppercase tracking-widest text-[9px] ${hovered === c.name ? "text-brand-navy" : "text-slate-500"}`}>{c.name}</p>
                    </div>
                  ))}
               </div>
            </div>

          </div>

          {/* MAP & DASHBOARD - PERFECTLY BALANCED */}
          <div className="lg:col-span-7 sticky top-32">
            {isClient && <MapView hovered={hovered} setHovered={setHovered} />}
          </div>

        </div>

      </div>
    </section>
  );
}
