"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { COUNTRIES } from "@/data/countries";

const ComposableMap = dynamic(
  () => import("react-simple-maps").then((mod) => mod.ComposableMap),
  { ssr: false, loading: () => <div className="w-full h-96 bg-slate-100 flex items-center justify-center rounded-2xl"><span className="text-slate-500">Loading map...</span></div> }
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

// India coordinates (origin)
const INDIA_COORDS = [78.9629, 20.5937];

// Coordinates mapping for countries
const COUNTRY_COORDINATES = {
  ae: [53.8478, 23.4241],
  sa: [45.0792, 23.8859],
  qa: [51.1694, 25.3548],
  om: [55.9754, 21.4735],
  kw: [47.4818, 29.3117],
  bh: [50.5577, 26.0667],
  gb: [-3.4360, 55.3781],
  us: [-95.7129, 37.0902],
  mv: [73.5081, 4.1694],
  so: [46.1996, 9.1450],
};

// Product mapping for countries
const COUNTRY_PRODUCTS = {
  ae: ["Fresh Vegetables", "Spices", "Rice"],
  sa: ["Dates", "Spices", "Grains"],
  qa: ["Fresh Produce", "Vegetables"],
  om: ["Spices", "Vegetables"],
  kw: ["Fresh Vegetables", "Fruits"],
  bh: ["Spices", "Rice"],
  gb: ["Organic Vegetables", "Spices"],
  us: ["Fresh Produce", "Grains"],
  mv: ["Spices", "Coconut"],
  so: ["Vegetables", "Grains"],
};

// Enhance COUNTRIES with coordinates and products
const EXPORT_COUNTRIES = COUNTRIES.map((country) => ({
  ...country,
  coordinates: COUNTRY_COORDINATES[country.code] || [0, 0],
  products: COUNTRY_PRODUCTS[country.code] || [],
}));

const EXPORT_REGION_NAMES = COUNTRIES.map((c) => c.name);

function MapContent() {
  const [hoveredCountry, setHoveredCountry] = useState(null);

  return (
    <div className="relative bg-white w-full">
      <ComposableMap 
        projection="geoMercator" 
        projectionConfig={{ 
          scacle: 250,
          center: [10, 25],
        }}
        width={1200}
        height={480}
        style={{
          width: "100%",
          height: "auto",
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isExportRegion = EXPORT_REGION_NAMES.includes(geo.properties.name);
              const isIndia = geo.properties.name === "India";
              const isGulfRegion = ["United Arab Emirates", "Saudi Arabia", "Qatar", "Oman", "Kuwait", "Bahrain"].includes(geo.properties.name);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: isIndia ? "#D4A574" : isGulfRegion ? "#fef3c7" : isExportRegion ? "#e0e7ff" : "#f1f5f9",
                      stroke: "#cbd5e1",
                      strokeWidth: 0.5,
                      outline: "none",
                      transition: "all 300ms ease-in-out",
                    },
                    hover: {
                      fill: isIndia ? "#C69560" : isGulfRegion ? "#fde68a" : isExportRegion ? "#c7d2fe" : "#e2e8f0",
                      stroke: "#94a3b8",
                      strokeWidth: 0.75,
                      outline: "none",
                      cursor: "pointer",
                      transition: "all 300ms ease-in-out",
                    },
                    pressed: {
                      fill: "#d4a574",
                      stroke: "#94a3b8",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>

        {/* India Origin Marker */}
        <Marker coordinates={INDIA_COORDS}>
          <g className="pointer-events-none">
            <circle
              r="8"
              fill="#D4A574"
              stroke="#2C4A5E"
              strokeWidth="3"
              className="drop-shadow-lg"
            />
            <circle
              r="12"
              fill="none"
              stroke="#D4A574"
              strokeWidth="1"
              opacity="0.5"
              className="animate-pulse"
            />
          </g>
        </Marker>

        {/* Export Country Markers */}
        {EXPORT_COUNTRIES.map((country) => (
          <Marker 
            key={country.name} 
            coordinates={country.coordinates}
            onMouseEnter={() => setHoveredCountry(country.name)}
            onMouseLeave={() => setHoveredCountry(null)}
          >
            <g className="group cursor-pointer">
              <circle
                r={hoveredCountry === country.name ? 7 : 5}
                fill="#D4A574"
                opacity={hoveredCountry === country.name ? 1 : 0.3}
                className="transition-all duration-300"
              />
              <circle
                r={hoveredCountry === country.name ? 10 : 6}
                fill="none"
                stroke="#D4A574"
                strokeWidth="1.5"
                opacity={hoveredCountry === country.name ? 0.6 : 0}
                className="transition-all duration-300"
              />
              <circle
                r="4"
                fill="#D4A574"
                stroke="#2C4A5E"
                strokeWidth="2"
                className="transition-all duration-300"
              />
            </g>
          </Marker>
        ))}
      </ComposableMap>

      {/* Curved Routes SVG Overlay */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ top: 0, left: 0 }}
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#D4A574" opacity="0.5" />
          </marker>
        </defs>

        {/* Curved Routes */}
        {EXPORT_COUNTRIES.map((country, idx) => {
          const [x1, y1] = INDIA_COORDS;
          const [x2, y2] = country.coordinates;
          
          // Simple projection approximation for SVG
          const scale = 280;
          const centerX = 500;
          const centerY = 300;
          
          const sx1 = centerX + (x1 - 40) * (scale / 100);
          const sy1 = centerY - (y1 - 15) * (scale / 100);
          const sx2 = centerX + (x2 - 40) * (scale / 100);
          const sy2 = centerY - (y2 - 15) * (scale / 100);
          
          // Control point for curve
          const cx = (sx1 + sx2) / 2;
          const cy = (sy1 + sy2) / 2 + 30;
          
          const pathData = `M ${sx1} ${sy1} Q ${cx} ${cy} ${sx2} ${sy2}`;
          
          return (
            <path
              key={`route-${country.name}`}
              d={pathData}
              stroke="#D4A574"
              strokeWidth={hoveredCountry === country.name ? "2.5" : "1.5"}
              fill="none"
              opacity={hoveredCountry === country.name ? 0.8 : 0.15}
              strokeDasharray="5,5"
              markerEnd="url(#arrowhead)"
              className="transition-all duration-300"
              style={{
                filter: hoveredCountry === country.name ? "drop-shadow(0 0 3px #D4A574)" : "none",
              }}
            />
          );
        })}
      </svg>

      {/* Hover Tooltip Card */}
      {hoveredCountry && (
        <div className="absolute top-4 right-4 bg-white rounded-xl shadow-2xl border-2 border-brand-gold p-4 w-64 z-50 animate-fade-in-down">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">
              {EXPORT_COUNTRIES.find(c => c.name === hoveredCountry)?.flag}
            </span>
            <div>
              <h4 className="font-bold text-brand-navy text-lg">
                {hoveredCountry}
              </h4>
              <p className="text-xs text-slate-600">
                {EXPORT_COUNTRIES.find(c => c.name === hoveredCountry)?.region}
              </p>
            </div>
          </div>
          
          <div className="border-t border-slate-200 pt-3">
            <p className="text-xs font-semibold text-slate-600 mb-2">PRODUCTS EXPORTED:</p>
            <div className="flex flex-wrap gap-2">
              {EXPORT_COUNTRIES.find(c => c.name === hoveredCountry)?.products.map((product, idx) => (
                <span key={idx} className="text-xs bg-brand-gold/10 text-brand-gold font-semibold px-2 py-1 rounded-full">
                  {product}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-200">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-600 font-semibold">Active Export Route</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function ExportCountries() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const gulfCountries = EXPORT_COUNTRIES.filter(c => c.region === "Gulf");

  return (
    <section className="relative py-20 md:py-8  overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-navy/5 rounded-full blur-3xl -z-10"></div>

      {/* HEADER */}
      <div className="text-center max-w-4xl mx-auto px-4 mb-16 md:mb-20">
        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-brand-gold/10 rounded-full border border-brand-gold/30 mb-6">
          <div className="w-2 h-2 bg-brand-gold rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-brand-gold uppercase tracking-wider">✈️ Global Export Routes</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-brand-navy mb-6 leading-tight">
          Exporting to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-gold-light">{EXPORT_COUNTRIES.length}+ Countries</span>
        </h2>

        <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Our extensive global network ensures reliable delivery of premium agricultural products to international markets with full compliance and quality assurance.
        </p>
      </div>

      {/* WORLD MAP - FULL WIDTH */}
      <div className="w-full px-4 mb-16 md:mb-20 ">
        <div className="max-w-7xl mx-auto ">
          {isClient ? (
            <MapContent />
          ) : (
            <div className="w-full h-96 bg-slate-100 flex items-center justify-center rounded-2xl">
              <span className="text-slate-500">Loading map...</span>
            </div>
          )}

          {/* Map Legend */}
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-brand-gold border-2 border-brand-navy"></div>
              <span className="text-slate-600 font-medium">Active Export Markets</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-fuchsia-300"></div>
              <span className="text-slate-600 font-medium">Gulf Focus Region</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-indigo-200"></div>
              <span className="text-slate-600 font-medium">Export Regions</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#D4A574" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-slate-600 font-medium">Airline Routes</span>
            </div>
          </div>
        </div>
      </div>

      {/* STATS - PREMIUM CARDS */}
      <div className="max-w-7xl mx-auto px-4 mb-16 md:mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { value: `${EXPORT_COUNTRIES.length}+`, label: "Countries", icon: "🌍" },
            { value: `${gulfCountries.length}`, label: "Gulf Markets", icon: "🏙️" },
            { value: "500+", label: "Containers Shipped", icon: "📦" },
            { value: "100%", label: "Compliance Rate", icon: "✓" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-white to-slate-50 hover:from-brand-gold/5 hover:to-brand-navy/5 p-6 md:p-8 rounded-2xl border-2 border-slate-200 hover:border-brand-gold transition-all duration-300 hover:shadow-lg text-center"
            >
              <div className="text-3xl md:text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <p className="text-3xl md:text-4xl font-bold text-brand-navy mb-2 group-hover:text-brand-gold transition-colors">
                {stat.value}
              </p>
              <p className="text-sm md:text-base text-slate-600 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* GULF REGION HIGHLIGHT */}
      <div className="max-w-7xl mx-auto px-4 mb-16 md:mb-20">
        <div className="bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border-2 border-amber-200 rounded-3xl p-8 md:p-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🏙️</span>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-navy">
                Gulf Region Focus
              </h3>
              <p className="text-sm text-slate-600">Our primary export hub with {gulfCountries.length} active markets</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gulfCountries.map((country) => (
              <div
                key={country.name}
                className="group bg-white hover:bg-brand-gold/10 p-4 rounded-xl border-2 border-amber-200 hover:border-brand-gold transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{country.flag}</span>
                  <div>
                    <p className="font-bold text-brand-navy text-sm">{country.name}</p>
                    <p className="text-xs text-slate-600">{country.region}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {country.products.slice(0, 2).map((product, idx) => (
                    <span key={idx} className="text-xs bg-brand-gold/10 text-brand-gold px-2 py-0.5 rounded">
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
