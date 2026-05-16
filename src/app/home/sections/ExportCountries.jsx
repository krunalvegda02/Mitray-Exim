"use client";

import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import { FiGlobe, FiTruck, FiCheckCircle, FiActivity, FiZap, FiBox, FiChevronRight, FiShield, FiPackage, FiPlus, FiMinus, FiTarget, FiMove, FiChevronUp } from "react-icons/fi";

const ComposableMap = dynamic(
  () => import("react-simple-maps").then((mod) => mod.ComposableMap),
  { ssr: false, loading: () => <div className="w-full h-96 bg-slate-50 flex items-center justify-center rounded-xl border border-slate-100"><span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Syncing Network Hubs...</span></div> }
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
    <section ref={sectionRef} className="relative py-12 md:py-20 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        
        {/* STANDARDIZED HEADER ARCHITECTURE */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-brand-gold animate-line-grow w-0"></div>
            <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.5em] animate-reveal opacity-0">Global Export Corridors</span>
            <div className="h-px bg-brand-gold animate-line-grow w-0"></div>
          </div>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-brand-navy mb-6 tracking-tighter leading-[0.85] animate-reveal opacity-0">
            STRATEGIC <br />
            <span className="text-gradient">NETWORK.</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-lg font-medium max-w-2xl mx-auto leading-relaxed uppercase tracking-tight opacity-0 animate-reveal delay-300">
            Mitray Exim powers a high-speed logistics network connecting India’s finest produce to elite trade corridors worldwide.
          </p>

          <div className="flex overflow-x-auto pb-2 -mx-4 px-4 gap-2 no-scrollbar lg:flex-wrap lg:justify-center lg:overflow-visible lg:pb-0 lg:mx-0 lg:px-0 mt-8">
             {EXPORT_COUNTRIES.map(c => (
                <button 
                  key={c.code}
                  onClick={() => handleCountryFocus(c)}
                  className={`whitespace-nowrap px-4 py-2.5 md:px-6 md:py-3.5 rounded-xl md:rounded-2xl text-[8px] md:text-[9px] font-black uppercase tracking-widest transition-all duration-500 border shrink-0 ${
                    hovered === c.name ? 'bg-brand-navy text-white border-brand-navy shadow-lg scale-105' : 'bg-white text-slate-400 border-slate-100'
                  }`}
                >
                  {c.flag} {c.name}
                </button>
             ))}
          </div>
        </div>

        {/* MAP DASHBOARD TERMINAL */}
        <div className="relative glass-panel rounded-2xl md:rounded-[2rem] overflow-hidden border-white shadow-2xl bg-slate-50/50 min-h-[500px] md:min-h-[650px] animate-reveal delay-500 opacity-0">
          
          {/* MAP HUD */}
          <div className="absolute top-4 md:top-6 left-4 md:left-6 right-4 md:right-6 z-20 flex justify-between items-start pointer-events-none">
             <div className="glass-panel px-4 py-2 rounded-xl border-white shadow-xl pointer-events-auto backdrop-blur-xl bg-white/60">
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                   <span className="text-[8px] md:text-[10px] font-black text-brand-navy uppercase tracking-widest leading-none">Global Terminal Active</span>
                </div>
             </div>
             
             <div className="flex flex-col gap-2 pointer-events-auto">
                <button onClick={handleZoomIn} className="w-10 h-10 glass-panel rounded-xl flex items-center justify-center text-brand-navy hover:bg-brand-gold hover:text-brand-navy transition-all shadow-lg active:scale-90 bg-white/80"><FiPlus /></button>
                <button onClick={handleZoomOut} className="w-10 h-10 glass-panel rounded-xl flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all shadow-lg active:scale-90 bg-white/80"><FiMinus /></button>
                <button onClick={handleResetMap} className="w-10 h-10 glass-panel rounded-xl flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all shadow-lg active:scale-90 bg-white/80"><FiTarget /></button>
             </div>
          </div>

          {isClient && (
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 220 }}
              width={1000}
              height={isMobile ? 1000 : 700}
              className="w-full h-auto"
            >
              <ZoomableGroup zoom={position.zoom} center={position.coordinates} onMoveEnd={handleMoveEnd} maxZoom={8} minZoom={1}>
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

                {EXPORT_COUNTRIES.map((country) => (
                  <Marker key={country.code} coordinates={country.coords}>
                    <g 
                      className="cursor-pointer"
                      onMouseEnter={() => setHovered(country.name)}
                      onClick={() => handleCountryFocus(country)}
                    >
                      <circle r={hovered === country.name ? 12 : 7} fill={hovered === country.name ? "#D4A574" : "#CBD5E1"} opacity={hovered === country.name ? 0.3 : 0.1} className={hovered === country.name ? 'animate-ping' : ''} />
                      <circle r={hovered === country.name ? 9 : 6} fill="white" stroke={hovered === country.name ? "#D4A574" : "#E2E8F0"} strokeWidth="1" />
                      <text textAnchor="middle" y={hovered === country.name ? 3 : 2} className={`transition-all duration-300 ${hovered === country.name ? 'text-[14px]' : 'text-[9px]'}`}>{country.flag}</text>
                    </g>
                  </Marker>
                ))}
              </ZoomableGroup>
            </ComposableMap>
          )}

          {/* DATA DRAWER */}
          {hovered && (
            <div className={`absolute bottom-0 left-0 right-0 z-30 transition-transform duration-700 ${isStatsOpen ? 'translate-y-0' : 'translate-y-[calc(100%-60px)]'}`}>
               <div className="glass-panel p-6 md:p-8 rounded-t-2xl md:rounded-t-[2rem] border-t-white shadow-[0_-20px_60px_-15px_rgba(44,74,94,0.15)] bg-white/95 backdrop-blur-2xl">
                  
                  <button onClick={() => setIsStatsOpen(!isStatsOpen)} className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg border border-slate-100 md:hidden">
                    <FiChevronUp className={`transition-transform duration-500 ${isStatsOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6 w-full">
                       <div className="text-5xl md:text-7xl animate-reveal">{EXPORT_COUNTRIES.find(c => c.name === hovered)?.flag}</div>
                       <div className="flex-1">
                          <p className="text-[8px] md:text-[10px] font-black text-brand-gold uppercase tracking-[0.3em] mb-1">Institutional Trade Hub</p>
                          <h3 className="text-xl md:text-3xl font-black text-brand-navy tracking-tighter uppercase leading-none">{hovered}</h3>
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto">
                       {[
                         { icon: <FiPackage />, label: "Market Volume", val: "High Capacity" },
                         { icon: <FiZap />, label: "Export Transit", val: "98% Efficiency" },
                         { icon: <FiShield />, label: "FSSAI Verified", val: "A-Grade" },
                         { icon: <FiActivity />, label: "Grid Nodes", val: "Active Hub" }
                       ].map((stat, i) => (
                         <div key={i} className="text-center md:text-left animate-reveal" style={{ animationDelay: `${i * 100}ms` }}>
                            <div className="flex items-center justify-center md:justify-start gap-2 text-brand-gold mb-1">
                               <span className="text-[10px] font-black uppercase tracking-widest">{stat.label}</span>
                            </div>
                            <p className="text-[11px] md:text-[14px] font-black text-brand-navy uppercase tracking-widest">{stat.val}</p>
                         </div>
                       ))}
                    </div>

                    <button className="w-full lg:w-auto px-10 py-4 bg-brand-navy text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-gold hover:text-brand-navy transition-all duration-700 shadow-xl active:scale-95">
                       Initialize Route
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
